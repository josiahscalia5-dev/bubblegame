// (copy of WebDemo/tools/screen4/liquid_moves.cjs with a 240 s screenshot timeout: the landing frame under ?s3=match took over 30 s in software rendering)
// Screen 4 liquid pass: the water reacting to the character's moves in real gameplay (seed 7, the 538 x 1076 game area):
// a swerve to the left lane just before the hero moment, then a jump and its landing. Saves page frames and the state.
//   S3=liquid [DPR=1.5] node tools/screen4/liquid_moves.cjs <abs WebDemo> <out-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'liquid').split(',').filter(Boolean), LABEL = process.env.LABEL || S3.join('+');
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
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1) })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 400)); });
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  const shot = async (name) => { await page.waitForTimeout(800); await page.screenshot({ path: path.join(OUT, `${LABEL}_${name}.png`), clip: await page.locator('#stage').boundingBox(), timeout: 240000 }); return page.evaluate(() => window.__bw.state()); };
  const out = {};
  await page.evaluate(() => window.__bw.advance(2.55));
  await page.evaluate(() => window.__bw.swipe('left'));
  await page.evaluate(() => window.__bw.advance(0.3));
  out.swerve = await shot('swerve_left_2.85s');
  await page.evaluate(() => window.__bw.swipe('up'));
  await page.evaluate(() => window.__bw.advance(0.45));
  out.jump = await shot('in_the_air');
  for (let i = 0; i < 30; i++) { const s = await page.evaluate(() => window.__bw.advance(1 / 30)); if (!s.air) break; }
  await page.evaluate(() => window.__bw.advance(0.1));
  out.landing = await shot('just_landed');
  fs.writeFileSync(path.join(OUT, `${LABEL}_moves.json`), JSON.stringify(out, null, 1));
  console.log(JSON.stringify(Object.fromEntries(Object.entries(out).map(([k, s]) => [k, { t: s.time, z: s.z, x: s.x, air: s.air, lane: s.lane }]))));
  console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
