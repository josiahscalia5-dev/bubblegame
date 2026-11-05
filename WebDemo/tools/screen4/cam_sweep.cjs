// Screen 4 camera sweep (?s3=match exploration): loads the real game once (seeded, Math.random seed 7, 538 x 1076 game area),
// advances to T seconds after the tap, then for each candidate moves the camera from the game's own pose and renders the 3D
// canvas: dz metres along the path (+ = toward the character), dy metres up, look metres the aim point moves up, fov degrees
// (vertical, at the 1:2 frame). Exploration only: the chosen values then go into the settings and are verified with a real
// capture (tools/screen4/liquid_shots.cjs).
//   S3=match T=3.0 DPR=1.5 CANDS='[{"label":"a","dz":0.3,"dy":-0.08,"look":0,"fov":74}]' node tools/screen4/cam_sweep.cjs <abs WebDemo> <out-dir> ['<tune json>']
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TUNE = '{}'] = process.argv.slice(2);
const S3 = (process.env.S3 || 'match').split(',').filter(Boolean), T = +(process.env.T || 3.0);
const CANDS = JSON.parse(process.env.CANDS || '[{"label":"base"}]');
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
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1.5) })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 300)); });
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
  const base = await page.evaluate(() => {
    const d = window.__bw.debug(), cam = d.camera; const V = cam.position.constructor;
    window.__cs = { P: cam.position.clone(), Q: cam.quaternion.clone(), fov: cam.fov, D: cam.getWorldDirection(new V()), up: cam.up.clone() };
    const F = { P: new V(), R: new V(), U: new V(), T: new V() }; d.track.frame(d.mascotState.z, F); window.__cs.F = F;
    return { pos: cam.position.toArray(), fov: cam.fov, mascotZ: d.mascotState.z };
  });
  const out = { base, cands: [] };
  for (const c of CANDS) {
    const url = await page.evaluate((c) => {
      const d = window.__bw.debug(), cam = d.camera, S = window.__cs;
      const tgt = S.P.clone().addScaledVector(S.D, 9.02).addScaledVector(S.F.U, c.look || 0).addScaledVector(S.F.R, c.lookX || 0);
      cam.position.copy(S.P).addScaledVector(S.F.T, c.dz || 0).addScaledVector(S.F.U, c.dy || 0).addScaledVector(S.F.R, c.dx || 0);
      cam.up.copy(S.up); cam.lookAt(tgt); cam.fov = c.fov || S.fov; cam.updateProjectionMatrix();
      window.__bw.render(); return d.renderer.domElement.toDataURL('image/png');
    }, c);
    fs.writeFileSync(path.join(OUT, `${c.label}.png`), Buffer.from(url.split(',')[1], 'base64'));
    out.cands.push(c);
  }
  fs.writeFileSync(path.join(OUT, 'cam_sweep.json'), JSON.stringify(out, null, 1));
  console.log(JSON.stringify(base)); console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
