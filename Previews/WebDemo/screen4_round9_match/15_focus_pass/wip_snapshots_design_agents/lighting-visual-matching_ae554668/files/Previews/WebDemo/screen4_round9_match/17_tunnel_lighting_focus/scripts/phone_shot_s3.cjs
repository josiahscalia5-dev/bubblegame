// (17_tunnel_lighting_focus copy of 10_phone_fix/scripts/phone_shot.cjs with S3=<list> added; default match.)
// phone_shot.cjs <demo dir> <out.png> [WxH] : the real game on an emulated Pixel 7 (Playwright's device profile; WxH overrides
// the viewport, e.g. 412x915 for the full-screen app), ?s3=match,
// seed 7, Tap to Start then 3.0 s of game time, whole phone screen with the HUD.
const { chromium, devices } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, VIEW] = process.argv.slice(2);
const DEV = { ...devices['Pixel 7'] };
if (VIEW) { const [w, h] = VIEW.split('x').map(Number); DEV.viewport = { width: w, height: h }; }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext(DEV)).newPage();
  const logs = []; page.on('pageerror', (e) => logs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); });
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, (process.env.S3 || 'match').split(','));
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate(() => window.__bw.advance(3.0));
  await page.waitForTimeout(800);
  const st = await page.evaluate(() => { const s = document.getElementById('stage').getBoundingClientRect(); return { x: s.x, y: s.y, w: s.width, h: s.height, vw: innerWidth, vh: innerHeight, fov: +window.__bw?.camera?.fov || null }; });
  await page.screenshot({ path: OUT });
  console.log('stage', JSON.stringify(st));
  console.log(OUT, logs.join(' | ') || 'no console errors');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
