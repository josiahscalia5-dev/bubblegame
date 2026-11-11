// (session 8da775c4) A small runner for the swimming journey's tests and captures: serves WebDemo, opens the game with a switch list (seeded,
// software WebGL), then runs a script module against the page.   S3=<switches> [VW=864 VH=1536] node jrun.cjs <demo-dir> <script.cjs> [out-dir]
// The script exports async ({ page, out, shot(name), ev(fn, arg), state() }) => result; the result is printed as JSON.
// One capture at a time on this machine: flock /tmp/bw_browser.lock node jrun.cjs ...
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, SCRIPT, OUT = '.'] = process.argv.slice(2);
const S3 = (process.env.S3 || '').split(',').filter(Boolean);
const VW = +(process.env.VW || 864), VH = +(process.env.VH || 1536);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1 })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(([s3, notest]) => {
    window.__BW_S3__ = s3; if (!notest) { window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art']; }   // NOTEST=1: the real player flow (the game's own real-time loop, the opening plays by itself)
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [S3, process.env.NOTEST === '1']);
  await page.goto(`http://localhost:${server.address().port}/index.html${process.env.QUERY ? '?' + process.env.QUERY : ''}`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const stage = await page.locator('#stage').boundingBox();
  const shot = async (name) => { await page.evaluate(() => window.__bw.render()); const f = path.join(OUT, name); await page.screenshot({ path: f, clip: stage, ...(name.endsWith('.jpg') ? { quality: 90 } : {}), timeout: 240000 }); return f; };
  const result = await require(path.resolve(SCRIPT))({ page, out: OUT, shot, ev: (fn, arg) => page.evaluate(fn, arg), state: () => page.evaluate(() => window.__bw.state()) });
  console.log(JSON.stringify({ s3: S3, result, logs }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
