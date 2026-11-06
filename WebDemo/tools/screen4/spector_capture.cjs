// Screen 4: a Spector.js capture of ONE real gameplay frame (diagnostic only; changes nothing in the game).
//   SPECTOR=<path to spectorjs/dist/spector.bundle.js> S3=focus [T=3.0] [DPR=1.42751] [VIEW=700x1076] [TUNE='{...}'] \
//     node tools/screen4/spector_capture.cjs <abs WebDemo> <out-dir>
// The official open-source WebGL debugger (https://github.com/BabylonJS/Spector.js, npm `spectorjs`) is injected into the
// page BEFORE the game makes its WebGL context (spyCanvases), the same hero frame as layer_diag.cjs is set up (Math.random
// seed 7, the opening's art layer off, advance(0.5), tap, advance(T), no steering), and Spector records every WebGL call of
// the next composer frame: each draw call's program (both shaders' source), blend / depth / cull state, the bound textures
// (size, format, filters, wrap, anisotropy where Spector reports it), the framebuffer it draws into and its vertex count.
// Writes capture.json (Spector's own capture, loadable in Spector's UI), drawcalls.json (one line per draw call, compact)
// and frame.png (the canvas after the captured frame).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'focus').split(',').filter(Boolean);
const DPR = +(process.env.DPR || 1536 / 1076);
const SPECTOR = process.env.SPECTOR;
if (!SPECTOR || !fs.existsSync(SPECTOR)) { console.error('set SPECTOR to spectorjs/dist/spector.bundle.js'); process.exit(2); }
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const SPY = `<script>window.__keepRandom = Math.random; { let b = 99 >>> 0; Math.random = () => { b = (b * 1664525 + 1013904223) >>> 0; return b / 4294967296; }; }</script>
<script src="/__spector.js"></script>
<script>try { window.__spector = new SPECTOR.Spector(); window.__spector.spyCanvases(); } catch (e) { window.__spectorError = String(e && e.stack || e); } Math.random = window.__keepRandom;</script>`;
const server = http.createServer((req, res) => {
  const bare = req.url.split('?')[0];
  if (bare === '/' || bare === '/index.html') {
    const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').replace(/<head>/i, (h) => h + SPY);
    res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end(html);
  }
  if (req.url.startsWith('/__spector.js')) { res.writeHead(200, { 'Content-Type': 'text/javascript' }); return fs.createReadStream(SPECTOR).pipe(res); }
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const [VW, VH] = (process.env.VIEW || '700x1076').split('x').map(Number);
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => logs.push(e.message));
  const port = server.address().port;
  await page.addInitScript(([s3, tune]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = tune; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [S3, JSON.parse(process.env.TUNE || '{}')]);
  // Spector before the game: index.html is served with Spector's bundle and spyCanvases() at the top of its <head>, so it
  // wraps the WebGL context the game makes; its own Math.random use is kept off the game's seeded sequence
  await page.goto(`http://localhost:${port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate((t) => window.__bw.advance(t), +(process.env.T || 3.0));
  await page.waitForTimeout(500);
  const cap = await page.evaluate(() => new Promise((resolve) => {
    if (!window.__spector) return resolve(JSON.stringify({ error: window.__spectorError || 'no spector' }));
    const sp = window.__spector, canvas = window.__bw.debug().renderer.domElement;
    sp.onCapture.add((c) => resolve(JSON.stringify(c)));
    sp.onError && sp.onError.add((e) => resolve(JSON.stringify({ error: String(e) })));
    sp.captureCanvas(canvas, 0, false, false);
    requestAnimationFrame(() => { window.__bw.render(); });
  }));
  fs.writeFileSync(path.join(OUT, 'capture.json'), cap);
  const url = await page.evaluate(() => window.__bw.debug().renderer.domElement.toDataURL('image/png'));
  fs.writeFileSync(path.join(OUT, 'frame.png'), Buffer.from(url.split(',')[1], 'base64'));
  console.log('capture bytes', cap.length);
  console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
