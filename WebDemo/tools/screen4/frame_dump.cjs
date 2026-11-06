// Screen 4 frame dump (diagnostic only; changes nothing in the game; sixteenth session).
//   S3=intunnel [NOTAP=1] [T=1.0] node tools/screen4/frame_dump.cjs <abs WebDemo> <out.json>
// The established moment (seed 7, the painted layer off, advance(0.5), [tap, advance(T)]) in the 538 x 1076 stage of the
// layer_diag.cjs frames, then writes the live camera (projection and view matrices), her root position, the water under
// her (W.surface, W.baseHeight) and her track frame (TR.frame: P, R, U, T), so the swell's crest can be solved through
// the exact projection offline (the solve: Previews/WebDemo/screen4_round9_match/53_swim/scripts/solve_collar.py).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel').split(',').filter(Boolean);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: 0.5 })).newPage();
  await page.addInitScript(([s3, tune]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = tune; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [S3, JSON.parse(process.env.TUNE || '{}')]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const out = await page.evaluate(([notap, T]) => {
    const bw = window.__bw; bw.advance(0.5);
    if (!notap) { bw.tap(); bw.advance(T); }
    const d = bw.debug(), cam = d.camera, m = d.mascotState, W = d.world, L = d.layout, TR = d.track;
    cam.updateMatrixWorld();
    const t = bw.state().time, F = { P: cam.position.clone(), R: cam.position.clone(), U: cam.position.clone(), T: cam.position.clone() };
    TR.frame(m.z, F);
    const sw = d.scene.getObjectByName('heroSwell'), su = sw && sw.material.uniforms;
    const rect = document.getElementById('stage').getBoundingClientRect();
    return { state: bw.state(), aspect: cam.aspect, stage: [rect.width, rect.height], proj: cam.projectionMatrix.elements, view: cam.matrixWorldInverse.elements,
      root: m.root.position.toArray(), x: m.x, z: m.z, yAbs: m.yAbs, surf: W.surface(L, m.x, m.z, t), ride: W.baseHeight(L, m.x, m.z), FLOAT_H: W.FLOAT_H, BODY_R: W.BODY_R,
      frame: { P: F.P.toArray(), R: F.R.toArray(), U: F.U.toArray(), T: F.T.toArray() },
      swell: su ? { C: su.uC.value.toArray(), R: su.uR.value.toArray(), U: su.uU.value.toArray(), T: su.uT.value.toArray() } : null };
  }, [process.env.NOTAP === '1', +(process.env.T || 1.0)]);
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1));
  console.log('time', out.state.time, 'aspect', out.aspect, 'stage', out.stage, 'surf', out.surf.toFixed(4), 'swell C', out.swell && out.swell.C.map((v) => v.toFixed(4)));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
