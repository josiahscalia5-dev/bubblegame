// How long the game takes to load a first and a second time in one browser (diagnostic for r2_func's second-load timeout).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2], MODE = process.argv[3] || 'awaitclose';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const url = `http://localhost:${server.address().port}/index.html`;
  const open = async (label) => {
    const ctx = await browser.newContext({ viewport: { width: 538, height: 1076 } }); const page = await ctx.newPage();
    page.on('console', (m) => { if (m.type() === 'error') console.log(label, 'console error', m.text().slice(0, 200)); });
    page.on('requestfailed', (r) => console.log(label, 'request failed', r.url()));
    await page.addInitScript(() => { window.__BW_TEST__ = true; window.__BW_S3__ = ['intunnel']; let a = 7; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
    const t0 = Date.now();
    await page.goto(url, { timeout: 600000, waitUntil: 'domcontentloaded' }); const t1 = Date.now();
    await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 600000 }); const t2 = Date.now();
    console.log(label, 'domcontentloaded', (t1 - t0) / 1000, 's; ready', (t2 - t0) / 1000, 's');
    return { ctx, page };
  };
  const a = await open('first');
  await a.page.evaluate(() => { window.__bw.tap(); window.__bw.advance(1.0); });
  if (MODE === 'awaitclose') { const t = Date.now(); await a.ctx.close(); console.log('closed the first in', (Date.now() - t) / 1000, 's'); }
  await open('second');
  await browser.close(); server.close();
})().catch((e) => { console.error('ERR', e.message.split('\n')[0]); process.exit(1); });
