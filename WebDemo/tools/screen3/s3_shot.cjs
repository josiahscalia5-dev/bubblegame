// Seeded frames of the real 3D opening (artwork layer off), with the ?s3 model switches (and optionally ?phaseA).
//   S3=castle,entrance FLAGS=phaseA TIMES=0,0.5,1,1.5,2 node s3_shot.cjs <demo-dir> <out-dir> '<s3 tune json>'
// TIMES: game seconds after the tap (0 = Tap to Start, before the tap). Math.random seeded with 7.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TUNE = '{}'] = process.argv.slice(2);
const S3 = (process.env.S3 || '').split(',').filter(Boolean), FLAGS = (process.env.FLAGS || '').split(',').filter(Boolean), TIMES = (process.env.TIMES || '0').split(',').map(Number);
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
  await page.addInitScript(([flags, tune, s3]) => {
    if (s3.length) { window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = JSON.parse(tune); }
    window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    if (flags.includes('phaseA')) window.__BW_PHASE_A__ = true;
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [FLAGS, TUNE, S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const shot = async (f) => page.screenshot({ path: path.join(OUT, f), clip: await page.locator('#stage').boundingBox(), fullPage: true });
  await page.evaluate(() => window.__bw.advance(0.5));
  const out = [];
  if (TIMES.includes(0)) { await shot('t0.png'); out.push(['tap', await page.evaluate(() => window.__bw.state().camera)]); }
  if (TIMES.some((t) => t > 0)) {
    await page.evaluate(() => window.__bw.tap());
    let since = 0;
    for (const t of TIMES.filter((t) => t > 0)) { await page.evaluate((d) => window.__bw.advance(d), t - since); since = t; await shot(`t${t.toFixed(1)}.png`); out.push([t, await page.evaluate(() => window.__bw.state().camera)]); }
  }
    console.log(JSON.stringify({ s3: S3, flags: FLAGS, report: await page.evaluate(() => window.__bwS3 || null), phaseA: await page.evaluate(() => window.__bwPhaseA || null), frames: out }));
  console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
