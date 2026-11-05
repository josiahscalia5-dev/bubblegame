// Read-only diagnostic (Art Director gate, Round 9): does heroWalls' colour-map radius rw (tunnel_r9_match.js matchWall:
// rw = |cs - uHeroCam.xy| / max(u - uHeroCam.z, 0.25) / uHeroTanW, i.e. worked out in each point's OWN track frame) agree with
// where the point really appears on screen (its true radius round the projected vanishing point)? Loads the real game
// (seed 7) like tools/screen4/hero_probe.cjs, advances to T, projects every heroWalls vertex with the real camera, keeps the
// nearest per screen cell (a z-buffer of the walls alone) and compares the two radii by screen ring. Also prints where the
// tube's axis lands on screen 5-80 m ahead (the path's turn). Nothing in the game is changed.
//   cd WebDemo && S3=match T=3.0 node <this> "$PWD" <out dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'match').split(','), T = +(process.env.T || 3.0);
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
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: 1 })).newPage();
  await page.addInitScript(([s3]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = {}; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate((t) => window.__bw.advance(t), T);
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, `rw_probe_t${T.toFixed(2)}.png`), clip: await page.locator('#stage').boundingBox() });
  const info = await page.evaluate(() => {
    const d = window.__bw.debug(), cam = d.camera, scene = d.scene, TR = d.track, L = d.layout;
    const V = cam.position.constructor;
    cam.updateMatrixWorld(); cam.matrixWorldInverse.copy(cam.matrixWorld).invert();
    const wall = scene.getObjectByName('heroWalls'); wall.updateMatrixWorld();
    const Un = wall.material.uniforms, C = Un.uHeroCam.value, tanW = Un.uHeroTanW.value;
    const F = { P: new V(), R: new V(), U: new V(), T: new V() };
    const sc = (p) => { const q = p.clone().project(cam); return [(q.x + 1) / 2, (1 - q.y) / 2, q.z]; };
    TR.frame(C.z, F); const vp = sc(cam.position.clone().addScaledVector(F.T, 1e4));
    const axis = [];
    const axH = (() => { TR.frame(C.z, F); return C.y; })();   // the camera's height above the water; the axis height below
    for (const du of [0, 3, 5, 8, 12, 16, 20, 30, 40, 60, 80]) {
      if (C.z + du > L.tunnelEnd + 2) break;
      TR.frame(C.z + du, F); const p = sc(F.P.clone().addScaledVector(F.U, 2.6));
      axis.push({ du, x: +p[0].toFixed(3), y: +p[1].toFixed(3), T: F.T.toArray().map((v) => +v.toFixed(3)) });
    }
    const pos = wall.geometry.attributes.position, au = wall.geometry.attributes.aAU, n = pos.count, GX = 135, GY = 270;
    const zb = new Float32Array(GX * GY).fill(2), rwS = new Float32Array(GX * GY), duS = new Float32Array(GX * GY);
    const w = new V(); let lastU = NaN; const rel = new V();
    for (let i = 0; i < n; i++) {
      w.fromBufferAttribute(pos, i).applyMatrix4(wall.matrixWorld);
      const s = sc(w); if (s[2] < -1 || s[2] > 1 || s[0] < 0 || s[0] >= 1 || s[1] < 0 || s[1] >= 1) continue;
      const u = au.getY(i); if (u !== lastU) { TR.frame(u, F); lastU = u; }
      rel.copy(w).sub(F.P); const cx = rel.dot(F.R), ch = rel.dot(F.U);
      const rw = Math.hypot(cx - C.x, ch - C.y) / Math.max(u - C.z, 0.25) / tanW;
      const k = Math.floor(s[1] * GY) * GX + Math.floor(s[0] * GX);
      if (s[2] < zb[k]) { zb[k] = s[2]; rwS[k] = rw; duS[k] = u - C.z; }
    }
    const rings = [[0, 0.035], [0.035, 0.06], [0.06, 0.09], [0.09, 0.12], [0.12, 0.2], [0.2, 0.3], [0.3, 0.45]], out = [];
    for (const [r0, r1] of rings) {
      const a = [], b = [], ratio = [];
      for (let y = 0; y < GY; y++) for (let x = 0; x < GX; x++) {
        const k = y * GX + x; if (zb[k] > 1.5) continue;
        const rt = Math.hypot((x + 0.5) / GX - vp[0], ((y + 0.5) / GY - vp[1]) / cam.aspect);
        if (rt < r0 || rt >= r1) continue;
        a.push(rwS[k]); b.push(duS[k]); ratio.push(rwS[k] / Math.max(rt, 1e-3));
      }
      const med = (q) => { if (!q.length) return null; const s = [...q].sort((m, n) => m - n); return +s[s.length >> 1].toFixed(3); };
      const pct = (q, f) => { if (!q.length) return null; const s = [...q].sort((m, n) => m - n); return +s[Math.floor(f * (s.length - 1))].toFixed(3); };
      out.push({ screenR: [r0, r1], cells: a.length, shaderRw_p10_med_p90: [pct(a, 0.1), med(a), pct(a, 0.9)], du_med_m: med(b), du_p10_p90: [pct(b, 0.1), pct(b, 0.9)], rwOverTrue_med: med(ratio),
        coreShare: a.length ? +(a.filter((v) => v < 0.06).length / a.length).toFixed(3) : null });
    }
    return { T: window.__bw.state().time, cam: { track: [C.x, C.y, C.z].map((v) => +v.toFixed(3)), tanW: +tanW.toFixed(4), aspect: cam.aspect, fov: cam.fov }, tunnel: [L.tunnelStart, L.tunnelEnd],
      vanishingPoint_trackDirection: vp.slice(0, 2).map((v) => +v.toFixed(3)), axisOnScreen: axis, wallVertices: n, rings: out };
  });
  fs.writeFileSync(path.join(OUT, `rw_probe_t${T.toFixed(2)}.json`), JSON.stringify(info, null, 1));
  console.log(JSON.stringify(info, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
