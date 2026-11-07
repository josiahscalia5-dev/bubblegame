// Diagnostic only: does a second page.goto of the game finish in this container? Same server, launch flags and init
// script as WebDemo/tools/screen3/r2_func.cjs. Logs every request and the page's load events with timings.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2], S3 = (process.env.S3 || 'intunnel').split(','), RUN = +(process.env.RUN || 0);
const t0 = Date.now(), T = () => ((Date.now() - t0) / 1000).toFixed(1) + 's';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 538, height: 1076 } })).newPage();
  let reqs = 0;
  page.on('request', (r) => { reqs++; if (/index\.html|bundle/.test(r.url())) console.log(T(), 'request', r.url().replace(/.*\//, '')); });
  page.on('domcontentloaded', () => console.log(T(), 'domcontentloaded'));
  page.on('load', () => console.log(T(), 'load'));
  page.on('dialog', (d) => { console.log(T(), 'DIALOG', d.type(), d.message()); d.dismiss(); });
  page.on('pageerror', (e) => console.log(T(), 'pageerror', e.message.slice(0, 200)));
  await page.addInitScript((s3) => {
    window.__BW_TEST__ = true; window.__BW_S3__ = s3;
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  const url = `http://localhost:${server.address().port}/index.html`;
  const fresh = async (n) => {
    console.log(T(), `goto #${n}`);
    try { await page.goto(url, { timeout: 300000, waitUntil: 'domcontentloaded' }); console.log(T(), `goto #${n} done`);
      await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 }); console.log(T(), `ready #${n}`); }
    catch (e) { console.log(T(), `goto #${n} FAILED:`, e.message.split('\n')[0]); }
  };
  await fresh(1);
  if (RUN) { const r = await page.evaluate((n) => { const bw = window.__bw; bw.tap(); for (let i = 0; i < n; i++) bw.advance(1 / 30, 30); return bw.state().phase; }, RUN); console.log(T(), 'ran', RUN, 'frames, phase', r); }
  await fresh(2);
  console.log(T(), 'requests seen', reqs);
  await browser.close(); server.close();
})();
