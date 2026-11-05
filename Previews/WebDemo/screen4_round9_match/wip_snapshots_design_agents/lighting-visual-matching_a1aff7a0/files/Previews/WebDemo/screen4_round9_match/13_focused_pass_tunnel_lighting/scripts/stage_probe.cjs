// Focused pass (Tunnel & Lighting): the hero camera's re-staging probe. Loads the real game (seed 7, 538 x 1076, ?s3=match
// unless S3 is set), advances to T s after the tap and prints:
//   - the camera (world position, track u/x/h relative to the drum's mouth, quaternion, forward vector, fov, near plane);
//   - the path's tangent T and up U at u = -6 .. 12 m from the mouth (to check the hero zone is straight);
//   - the pink character's screen footprint (projected vertices of its mesh, fractions of the 538 x 1076 stage);
//   - for each ITEMS entry [lane, u, h0] (u absolute along the path, h0 above the water as in the game's layout) and the
//     shift DELTA = [dx, dh, du] (track metres; x + screen-left): the shifted layout [lane', u', h0'] that keeps the item at
//     the same place relative to a camera moved by DELTA (h0' accounts for the water height at the new place).
// Usage: S3=match T=3.0 ITEMS='[[l,u,h],...]' DELTA='[dx,dh,du]' node stage_probe.cjs <abs WebDemo> <out.json> ['<tune json>']
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TUNE = '{}'] = process.argv.slice(2);
const S3 = (process.env.S3 || 'match').split(',').filter(Boolean), T = +(process.env.T || 3.0);
const ITEMS = JSON.parse(process.env.ITEMS || '[]'), DELTA = JSON.parse(process.env.DELTA || '[0,0,0]');
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
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(([tune, s3]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = JSON.parse(tune);
    window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [TUNE, S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate((t) => window.__bw.advance(t), T);
  const info = await page.evaluate(([items, delta]) => {
    const d = window.__bw.debug(), cam = d.camera, scene = d.scene, L = d.layout, TR = d.track, W = d.world;
    const V = cam.position.constructor;
    const fr = { P: new V(), R: new V(), U: new V(), T: new V() };
    const r3 = (v) => v.toArray().map((x) => +x.toFixed(4));
    const toTrack = (p) => { let best = null;
      for (let u = L.tunnelStart - 20; u <= L.tunnelStart + 40; u += 0.01) { TR.frame(u, fr); const rel = p.clone().sub(fr.P), al = Math.abs(rel.dot(fr.T)); if (!best || al < best.al) best = { al, u, x: rel.dot(fr.R), h: rel.dot(fr.U) }; }
      return { u: +(best.u - L.tunnelStart).toFixed(3), x: +best.x.toFixed(3), h: +best.h.toFixed(3) }; };
    const path = []; for (let u = -6; u <= 12; u += 3) { TR.frame(L.tunnelStart + u, fr); path.push({ u, T: r3(fr.T), U: r3(fr.U), P: r3(fr.P) }); }
    let fuzz = null; scene.traverse((o) => { if (!fuzz && o.isMesh && /PinkFuz/.test(o.name)) fuzz = o; });
    let foot = null;
    if (fuzz) { const pos = fuzz.geometry.attributes.position, v = new V(); let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, cx = 0, n = 0;
      for (let i = 0; i < pos.count; i += 3) { v.fromBufferAttribute(pos, i).applyMatrix4(fuzz.matrixWorld).project(cam); const x = (v.x + 1) / 2, y = (1 - v.y) / 2; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); cx += x; n++; }
      foot = { x0: +x0.toFixed(3), x1: +x1.toFixed(3), y0: +y0.toFixed(3), y1: +y1.toFixed(3), w: +(x1 - x0).toFixed(3), cx: +(cx / n).toFixed(3), dist: +fuzz.getWorldPosition(new V()).distanceTo(cam.position).toFixed(3), track: toTrack(fuzz.getWorldPosition(new V())) }; }
    const [dx, dh, du] = delta;
    const shifted = items.map(([lane, u, h0]) => { const x = W.laneX(lane), hT = W.baseHeight(L, x, u) + h0, x1 = x + dx, u1 = u + du, lane1 = 1 - x1 / W.LANE;
      return { from: [lane, u, h0], to: [+lane1.toFixed(3), +u1.toFixed(3), +(hT + dh - W.baseHeight(L, x1, u1)).toFixed(3)], water: [+W.baseHeight(L, x, u).toFixed(3), +W.baseHeight(L, x1, u1).toFixed(3)] }; });
    // the hero bubbles (instanced, inst = world centre and radius; drift not included): screen centre and diameter in widths
    const bubbles = []; let hb = null; scene.traverse((o) => { if (!hb && o.name === 'heroBubbles' && o.geometry && o.geometry.attributes.inst) hb = o; });
    // (with the shader's drift at this moment: seed = fract(3.1 x + 7.7 z), x + sin(0.9 t + 6 seed) * 0.04,
    // y + mod(0.12 t + seed, 1) * 0.3 - 0.15; tunnel_r7_hero.js heroBubbles)
    if (hb) { const a = hb.geometry.attributes.inst, right = new V().setFromMatrixColumn(cam.matrixWorld, 0), t = hb.material.uniforms.uTime.value;
      const fr = (v) => v - Math.floor(v);
      for (let i = 0; i < a.count; i++) { const sd = fr(a.getX(i) * 3.1 + a.getZ(i) * 7.7);
        const c = new V(a.getX(i) + Math.sin(t * 0.9 + sd * 6) * 0.04, a.getY(i) + fr(t * 0.12 + sd) * 0.3 - 0.15, a.getZ(i)), r = a.getW(i), p = c.clone().project(cam), q = c.clone().addScaledVector(right, r).project(cam);
        bubbles.push({ i, cx: +((p.x + 1) / 2).toFixed(3), cy: +((1 - p.y) / 2).toFixed(3), dW: +Math.abs(q.x - p.x).toFixed(3), dist: +c.distanceTo(cam.position).toFixed(2), r, seed: +sd.toFixed(3), inst: [a.getX(i), a.getY(i), a.getZ(i)].map((v) => +v.toFixed(3)) }); } }
    // the socks (holders with a sock halo sprite): the screen box of their model's projected vertices, nearest first
    const socks = [];
    scene.traverse((o) => {
      if (!o.isGroup || !o.children.some((c) => c.isSprite && c.name === 'r2Halo')) return;
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9; const v = new V();
      o.traverse((q) => { if (!q.isMesh || !q.geometry || q.isSprite) return; const pos = q.geometry.attributes.position;
        for (let i = 0; i < pos.count; i += 2) { v.fromBufferAttribute(pos, i).applyMatrix4(q.matrixWorld).project(cam); const x = (v.x + 1) / 2, y = (1 - v.y) / 2; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); } });
      if (x0 < 1e9) socks.push({ box: [x0, x1, y0, y1].map((t) => +t.toFixed(3)), w: +(x1 - x0).toFixed(3), hH: +(y1 - y0).toFixed(3), dist: +o.getWorldPosition(new V()).distanceTo(cam.position).toFixed(2), track: toTrack(o.getWorldPosition(new V())), visible: o.visible });
    });
    socks.sort((a, b) => a.dist - b.dist);
    const cr = cam.matrixWorld.elements;   // forward = -Z column
    return { state: window.__bw.state(), camera: { pos: r3(cam.position), track: toTrack(cam.position.clone()), quat: cam.quaternion.toArray().map((x) => +x.toFixed(5)), fwd: [-cr[8], -cr[9], -cr[10]].map((x) => +x.toFixed(5)), fov: cam.fov, aspect: cam.aspect, near: cam.near },
      mascot: { z: +(d.mascotState.z - L.tunnelStart).toFixed(3), yAbs: d.mascotState.yAbs }, fuzz: foot, path, shifted, bubbles, socks: socks.slice(0, 2) };
  }, [ITEMS, DELTA]);
  fs.writeFileSync(OUT, JSON.stringify(info, null, 1));
  console.log(JSON.stringify({ camera: info.camera, mascot: info.mascot, fuzz: info.fuzz }));
  if (!process.env.NOPATH) console.log(JSON.stringify(info.path));
  if (!process.env.NOBUBBLES) for (const b of info.bubbles) console.log('bubble', JSON.stringify(b));
  for (const s of info.socks) console.log('sock', JSON.stringify(s));
  for (const s of info.shifted) console.log(JSON.stringify(s));
  console.log(logs.join(' | ') || 'no console errors');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
