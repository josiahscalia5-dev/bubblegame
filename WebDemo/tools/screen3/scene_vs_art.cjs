// The real 3D opening (artwork layer off) at Tap to Start and in the first seconds after the tap, on the 538 x 1076 stage.
//   node scene_vs_art.cjs <demo-dir> <out-dir> [phaseA]   (Math.random seeded with 7, as the repo's seeded tools)
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, FLAG = ''] = process.argv.slice(2);   // FLAG: phaseA to turn the Phase A test on
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
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 } })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text()); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(() => { window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art']; let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, null);
  if (FLAG === 'phaseA') await page.addInitScript(() => { window.__BW_PHASE_A__ = true; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const shot = async (f) => page.screenshot({ path: path.join(OUT, f), clip: await page.locator('#stage').boundingBox(), fullPage: true });
  const rows = [];
  rows.push({ at: 'tap to start', ...(await page.evaluate(() => window.__bw.advance(0.5))) });
  await shot('scene_t0.png');
  await page.evaluate(() => window.__bw.tap());
  let since = 0;
  for (const t of [0.5, 1.0, 1.5, 2.0, 2.5]) {
    rows.push({ at: t, ...(await page.evaluate((d) => window.__bw.advance(d), t - since)) }); since = t;
    await shot(`scene_t${t.toFixed(1)}.png`);
  }
  console.log('phaseA report:', JSON.stringify(await page.evaluate(() => window.__bwPhaseA || null)));
  for (const r of rows) console.log(r.at, 'mascot z', r.z, 'camera', JSON.stringify(r.camera), 'pitch', r.cameraPitchDeg);
  console.log(logs.join('\n') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
