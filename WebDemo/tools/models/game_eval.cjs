// Loads the game once (seed 7), taps, advances to each time in TIMES, and runs the JS in EVAL (an expression using d = __bw.debug()).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
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
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('console', m.text().slice(0, 400)); });
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, (process.env.S3 || 'round3').split(','));
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  let since = 0;
  for (const T of (process.env.TIMES || '4.0').split(',').map(Number)) {
    await page.evaluate((d) => window.__bw.advance(d), T - since); since = T;
    console.log('T', T, JSON.stringify(await page.evaluate(new Function('return (() => { const d = window.__bw.debug(); return ' + process.env.EVAL + '; })()'))));
    if (process.env.SHOT) { const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); }); fs.writeFileSync(process.env.SHOT.replace('%', T.toFixed(1)), Buffer.from(url.split(',')[1], 'base64')); }
  }
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
