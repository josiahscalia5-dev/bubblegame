// Try several settings at Tap to Start without rebuilding, one screenshot each (1:2 stage).
//   node tools/try_settings.cjs <demo-dir> <out-dir> '<json list>'
// Each entry is one of: {"off":[x,y,z],"look":[x,y,z],"fov":40} (camera framing),
// {"mach":{"at":[x,y,z],"yaw":0.08,"height":2.8}} (Meshy side machinery; prints its nearest distance to the lanes).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, LIST] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 } })).newPage();
  await page.addInitScript(() => { window.__BW_TEST__ = true; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const list = JSON.parse(LIST);
  for (let i = 0; i < list.length; i++) {
    const inner = await page.evaluate((f) => { if (f.mach) return window.__bw.setSideMachinery(f.mach); window.__bw.setFraming(f); }, list[i]); if (inner !== undefined) console.log('machinery inner |x|', inner);
    const s = await page.evaluate(() => window.__bw.advance(0.4));
    await page.screenshot({ path: path.join(OUT, `f${i}.png`), clip: await page.locator('#stage').boundingBox() });
    console.log(i, JSON.stringify(list[i]), 'camera', s.camera, 'pitch', s.cameraPitchDeg);
  }
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
