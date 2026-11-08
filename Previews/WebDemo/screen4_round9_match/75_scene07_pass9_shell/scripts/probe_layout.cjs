// Layout probe for scene07 (8 November 2026, session ce30359f). A PLACEMENT TOOL, not a gameplay capture: it seeds the game, starts the
// run, moves the mascot straight to track position Z in lane LANE (test-only state, so the camera sits where it sits at that checkpoint),
// snaps the camera rig, saves the stage and prints the SCREEN RECTANGLE (fractions of the stage: x0 y0 x1 y1, centre x y) of the mascot
// and of every named object matching NAMES, plus the projection of extra track points [label, x, h, u].
// CAMS: optional JSON list of scene07 camera settings to try in turn (window.__BW_S07_CAM__, see tripo_l1.js scene07Camera); one PNG
// each (<out>_<i>.png). Without CAMS: one PNG with the build's own camera.
//   S3=intunnel,structmatch,level1,tripo1,scene07 Z=229.5 LANE=1 node probe_layout.cjs <demo-dir> <out-prefix> ['[["p",2.5,4.4,236]]']
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, PTS] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1,tripo1,scene07').split(',').filter(Boolean);
const Z = +(process.env.Z || 233), LANE = +(process.env.LANE ?? 2), NAMES = process.env.NAMES || '^scene07_(housing|tub|portal|gear|chamberShell)|l1EnemyTripo';
const CAMS = process.env.CAMS ? JSON.parse(process.env.CAMS) : [null];
const VW = +(process.env.VW || 412), VH = +(process.env.VH || 915);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1 })).newPage();
  const errors = []; page.on('pageerror', (e) => errors.push(e.message));
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(async ({ Z, LANE }) => {
    const B = window.__bw; B.tap(); B.step(0.5);
    const m = B.debug().mascotState; m.z = Z - 1.2; m.lane = LANE; m.x = (1 - LANE) * 0.7;
    for (let i = 0; i < 40 && B.state().z < Z; i++) B.step(0.05);
    await new Promise((r) => setTimeout(r, 2500));                     // the GLBs finish appearing (async loads)
  }, { Z, LANE });
  const stage = await page.locator('#stage').boundingBox(), results = [];
  for (const [i, cam] of CAMS.entries()) {
    const res = await page.evaluate(({ Z, LANE, NAMES, PTS, cam }) => {
      const B = window.__bw, d = B.debug(), m = d.mascotState;
      if (cam) window.__BW_S07_CAM__ = cam; else delete window.__BW_S07_CAM__;
      m.z = Z; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.setFraming({}); B.advance(1 / 30);
      const V = d.camera.position.constructor, st = B.state(), out = { cam, state: { z: st.z, x: st.x, lane: st.lane }, objects: [], points: [] };
      const r3 = (n) => +n.toFixed(3);
      const rectOf = (o) => {
        let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9, front = false; const v = new V();
        o.updateWorldMatrix(true, true);
        o.traverse((c) => { if (!c.isMesh || !c.visible) return; if (!c.geometry.boundingBox) c.geometry.computeBoundingBox(); const bb = c.geometry.boundingBox;
          for (let k = 0; k < 8; k++) { v.set(k & 1 ? bb.max.x : bb.min.x, k & 2 ? bb.max.y : bb.min.y, k & 4 ? bb.max.z : bb.min.z).applyMatrix4(c.matrixWorld);
            if (v.clone().applyMatrix4(d.camera.matrixWorldInverse).z > -0.05) continue; front = true;
            v.project(d.camera); const sx = (v.x + 1) / 2, sy = (1 - v.y) / 2; x0 = Math.min(x0, sx); y0 = Math.min(y0, sy); x1 = Math.max(x1, sx); y1 = Math.max(y1, sy); } });
        return front ? [r3(x0), r3(y0), r3(x1), r3(y1), r3((x0 + x1) / 2), r3((y0 + y1) / 2)] : null;
      };
      out.mascot = rectOf(d.mascot);
      const re = new RegExp(NAMES);
      d.scene.traverse((o) => { if (o.name && re.test(o.name)) { const r = rectOf(o); if (r) out.objects.push([o.name, ...r]); } });
      for (const [label, x, h, u] of PTS) { const p = d.track.map(x, h, u, new V()); p.project(d.camera); out.points.push([label, r3((p.x + 1) / 2), r3((1 - p.y) / 2)]); }
      return out;
    }, { Z, LANE, NAMES, PTS: JSON.parse(PTS || '[]'), cam });
    const png = CAMS.length > 1 ? `${OUT}_${i}.png` : `${OUT}.png`;
    await page.screenshot({ path: png, clip: stage, timeout: 240000 });
    res.png = png; results.push(res);
  }
  console.log(JSON.stringify({ results, errors }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
