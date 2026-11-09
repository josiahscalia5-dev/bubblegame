// six2 (session 9ee07777): world positions of the scene-1/2 landmarks at a story time (for fitting the camera to a reference): eyes, knees, hands,
// shoes, basket rim, hero eyes, porthole. Usage: SEQ=-1 flock /tmp/bw_browser.lock node probe_landmarks.cjs <ABS WebDemo> [S3 list]
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2], SEQ = +(process.env.SEQ || -1);
const S3 = (process.argv[3] || 'intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2').split(',');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const page = await (await browser.newContext({ viewport: { width: 216, height: 384 } })).newPage();
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready') && window.__bwO3D && window.__bwO3D.state().heroReady && window.__bwTripo2 && window.__bwTripo2.ready && window.__bwTripo3 && window.__bwTripo3.ready, null, { timeout: 300000 });
  const out = await page.evaluate((seq) => {
    const O = window.__bwO3D, D = window.__bwSix2dbg; if (seq < 0) { O.seek(4.5, -1); O.seek(4.5, -1); } else { let s = 0; while (s < seq - 1e-6) { const d = Math.min(1 / 30, seq - s); s += d; O.seek(6 + s, s, d); } }
    const w = (o) => { const v = o.getWorldPosition(D.hero.position.clone()); return v.toArray().map((x) => +x.toFixed(3)); };
    const B = D.g2.B, b = D.basket; b.updateMatrixWorld(true);
    const loc = (x, y, z) => { const v = D.hero.position.clone().set(x, y, z).applyMatrix4(b.matrixWorld); return v.toArray().map((q) => +q.toFixed(3)); };
    const eyes = D.heroBody.children.filter((c) => c.isGroup && c.children.length >= 4).map(w);
    return { eyesGirl: D.g2.lids.map(w), head: w(B.head), kneeL: w(B.shinL), kneeR: w(B.shinR), shoeL: w(D.legs.tailL), shoeR: w(D.legs.tailR), handL: w(B.handL), handR: w(B.handR), hips: w(B.hips),
      rimC: loc(0, 0.185, 0.02), rimL: loc(-0.24, 0.185, 0), rimR: loc(0.24, 0.185, 0), basketBot: loc(0, -0.135, 0.2), heroEyes: eyes, cam: D.camera.position.toArray().map((x) => +x.toFixed(3)) };
  }, SEQ);
  console.log(JSON.stringify(out));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
