// Screen 4: real captures of several setting candidates in one browser (one fresh, seeded page per candidate, exactly as the
// game runs: Math.random seed 7, the 538 x 1076 game area, Tap to Start, then T seconds of game time). Each candidate is a
// tune object deep-merged by the game at load (window.__BW_S3_TUNE__, e.g. {"match":{"hero":{"round6":{"round5":{"camera":
// {...}}}}}}). Saves <out>/<label>.png (the raw 3D canvas) and cands.json with, per candidate, the camera (track frame), the
// projected tube axis 30 m ahead (the vanishing point, stage fractions, y down) and the character's projected box.
//   S3=focus T=3.0 DPR=1.5 CANDS='[{"label":"a","tune":{...}}]' node Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/tune_cands.cjs <abs WebDemo> <out-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'focus').split(',').filter(Boolean), T = +(process.env.T || 3.0);
const CANDS = JSON.parse(process.env.CANDS_FILE ? fs.readFileSync(process.env.CANDS_FILE, 'utf8') : process.env.CANDS || '[{"label":"base","tune":{}}]');
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const out = [];
  for (const c of CANDS) {
    const ctx = await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1.5) });
    const page = await ctx.newPage();
    const logs = [];
    page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); });
    page.on('pageerror', (e) => logs.push(e.message));
    await page.addInitScript(([tune, s3]) => {
      window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = tune;
      window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
      let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    }, [c.tune || {}, S3]);
    await page.goto(`http://localhost:${server.address().port}/index.html`);
    await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
    await page.evaluate(() => window.__bw.advance(0.5));
    await page.evaluate(() => window.__bw.tap());
    await page.evaluate((t) => window.__bw.advance(t), T);
    const info = await page.evaluate(() => {
      const d = window.__bw.debug(), cam = d.camera, TR = d.track, L = d.layout, Wd = d.world, V = cam.position.constructor;
      const F = { P: new V(), R: new V(), U: new V(), T: new V() };
      // the camera's place along the path (nearest frame)
      let best = null;
      for (let u = L.tunnelStart - 20; u <= L.tunnelStart + 20; u += 0.02) { TR.frame(u, F); const rel = cam.position.clone().sub(F.P), al = Math.abs(rel.dot(F.T)); if (!best || al < best.al) best = { al, u, x: rel.dot(F.R), h: rel.dot(F.U) }; }
      TR.frame(Math.min(best.u + 30, L.tunnelEnd - 2), F);
      const vp = F.P.clone().addScaledVector(F.U, Wd.WATER + Wd.AXIS_H).project(cam);
      const m = d.mascot; m.updateMatrixWorld(true);
      const lo = [Infinity, Infinity], hi = [-Infinity, -Infinity];
      m.traverse((q) => {
        if (!q.isMesh || !q.geometry || q.isInstancedMesh) return;
        if (!q.geometry.boundingBox) q.geometry.computeBoundingBox();
        const b = q.geometry.boundingBox; if (!b || !isFinite(b.min.x)) return;
        for (let i = 0; i < 8; i++) {
          const p = new V(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(q.matrixWorld).project(cam);
          lo[0] = Math.min(lo[0], (p.x + 1) / 2); lo[1] = Math.min(lo[1], (1 - p.y) / 2); hi[0] = Math.max(hi[0], (p.x + 1) / 2); hi[1] = Math.max(hi[1], (1 - p.y) / 2);
        }
      });
      // the gold rim's outer edge on screen: a circle fitted (least squares) to its projected points, in widths of the 1:2
      // frame (X = x, Y = 2 y, y down), and the rim ramp's rho (screen distance from that centre / its radius) of the tube's
      // top edge at the mouth (u = tunnelStart, radius 2) and 1 m in
      let rim = null;
      const bez = d.scene.getObjectByName('r6Bezel');
      if (bez && bez.geometry) {
        if (!bez.geometry.boundingBox) bez.geometry.computeBoundingBox();
        const bb = bez.geometry.boundingBox, Ro = Math.max(bb.max.x, bb.max.y), pts = [];
        bez.updateMatrixWorld(true);
        for (let i = 0; i < 180; i++) {
          const a = i / 180 * Math.PI * 2, p = new V(Math.cos(a) * Ro, Math.sin(a) * Ro, 0).applyMatrix4(bez.matrixWorld).project(cam);
          if (p.z < 1 && Math.abs(p.x) < 3 && Math.abs(p.y) < 3) pts.push([(p.x + 1) / 2, (1 - p.y)]);   // X in W, Y in W (1:2)
        }
        // algebraic circle fit: x^2 + y^2 + D x + E y + F = 0
        let s = { xx: 0, xy: 0, yy: 0, x: 0, y: 0, n: 0, xz: 0, yz: 0, z: 0 };
        for (const [x, y] of pts) { const z = x * x + y * y; s.xx += x * x; s.xy += x * y; s.yy += y * y; s.x += x; s.y += y; s.n++; s.xz += x * z; s.yz += y * z; s.z += z; }
        const A = [[s.xx, s.xy, s.x], [s.xy, s.yy, s.y], [s.x, s.y, s.n]], b = [-s.xz, -s.yz, -s.z];
        const det3 = (M) => M[0][0] * (M[1][1] * M[2][2] - M[1][2] * M[2][1]) - M[0][1] * (M[1][0] * M[2][2] - M[1][2] * M[2][0]) + M[0][2] * (M[1][0] * M[2][1] - M[1][1] * M[2][0]);
        const dA = det3(A), sol = [0, 1, 2].map((k) => det3(A.map((row, r) => row.map((v, c) => (c === k ? b[r] : v)))) / dA);
        const cx = -sol[0] / 2, cy = -sol[1] / 2, rr = Math.sqrt(cx * cx + cy * cy - sol[2]);
        const rhoAt = (u, hh) => { TR.frame(u, F); const p = F.P.clone().addScaledVector(F.U, hh).project(cam); const X = (p.x + 1) / 2, Y = 1 - p.y; return Math.hypot(X - cx, Y - cy) / rr; };
        const top = Wd.WATER + Wd.AXIS_H + 2.0;
        rim = { centre: [+cx.toFixed(4), +(cy / 2).toFixed(4)], radiusW: +rr.toFixed(4), topY: +((cy - rr) / 2).toFixed(4), outer: +Ro.toFixed(3),
          rhoMouth: +rhoAt(L.tunnelStart, top).toFixed(4), rho1m: +rhoAt(L.tunnelStart + 1, top).toFixed(4), rhoCollarEnd: +rhoAt(L.tunnelStart + 0.06, Wd.WATER + Wd.AXIS_H + 2.02).toFixed(4) };
      }
      return { cam: { u: +(best.u - L.tunnelStart).toFixed(3), x: +best.x.toFixed(3), h: +best.h.toFixed(3), fov: +cam.fov.toFixed(2) }, vp: [+((vp.x + 1) / 2).toFixed(4), +((1 - vp.y) / 2).toFixed(4)],
        mascotBox: [...lo, ...hi].map((v) => +v.toFixed(3)), mascotZ: +(d.mascotState.z - L.tunnelStart).toFixed(3), rim };
    });
    const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); });
    fs.writeFileSync(path.join(OUT, `${c.label}.png`), Buffer.from(url.split(',')[1], 'base64'));
    // HIDE=name,name: also a capture with those objects not drawn (<label>_hidden.png), e.g. to measure the walls without
    // the instanced tunnel bubbles and streaks (mwTunnelBubbles)
    if (process.env.HIDE) {
      const url2 = await page.evaluate((names) => {
        const d = window.__bw.debug(), keep = [];
        d.scene.traverse((o) => { if (names.includes(o.name)) { keep.push([o, o.visible, o.onBeforeRender]); o.visible = false; o.onBeforeRender = () => { o.visible = false; }; } });
        window.__bw.render(); const u = d.renderer.domElement.toDataURL('image/png');
        for (const [o, v, f] of keep) { o.visible = v; o.onBeforeRender = f; }
        return u;
      }, process.env.HIDE.split(','));
      fs.writeFileSync(path.join(OUT, `${c.label}_hidden.png`), Buffer.from(url2.split(',')[1], 'base64'));
    }
    out.push({ label: c.label, tune: c.tune, ...info, errors: logs });
    console.log(JSON.stringify({ label: c.label, ...info, errors: logs.length }));
    await ctx.close();
  }
  fs.writeFileSync(path.join(OUT, 'cands.json'), JSON.stringify(out, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
