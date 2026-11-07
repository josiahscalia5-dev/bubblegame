// Phone preview of the accepted game (?s3=intunnel) at the Pixel 7 framing: the start screen and 1 s into the run.
//   node phone_preview.cjs <WebDemo dir> <out dir>
const { chromium, devices } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ ...devices['Pixel 7'] })).newPage();
  await page.addInitScript(() => { window.__BW_TEST__ = true; window.__BW_S3__ = ['intunnel','swim2'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html?s3=intunnel,swim2`, { timeout: 300000 });
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.screenshot({ path: path.join(OUT, 'swim2_phone_start.png') });
  await page.evaluate(() => { window.__bw.tap(); window.__bw.advance(1.0); });
  await page.screenshot({ path: path.join(OUT, 'swim2_phone_T1.0.png') }); await page.evaluate(() => window.__bw.advance(1.0)); await page.screenshot({ path: path.join(OUT, 'swim2_phone_T2.0.png') });
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
