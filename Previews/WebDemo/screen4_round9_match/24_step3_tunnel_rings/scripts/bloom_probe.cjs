// bloom_probe.cjs <demo> <out-dir>: focus at 3.0 s (seed 7), the passes' settings, then the raw canvas with the bloom pass at its
// strength and with it off (enabled = false), to see what the bloom adds to the walls
const { chromium } = require('playwright'); const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2); fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 } })).newPage();
  await page.addInitScript(() => { window.__BW_S3__ = ['focus']; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5)); await page.evaluate(() => window.__bw.tap()); await page.evaluate(() => window.__bw.advance(3.0));
  const info = await page.evaluate(() => { const c = window.__bw.debug().composer; return c.passes.map((p) => ({ type: p.constructor.name, enabled: p.enabled, strength: p.strength, radius: p.radius, threshold: p.threshold, exposure: window.__bw.debug().renderer.toneMappingExposure, tm: window.__bw.debug().renderer.toneMapping })); });
  console.log(JSON.stringify(info));
  const shot = async (f) => { const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); }); fs.writeFileSync(path.join(OUT, f), Buffer.from(url.split(',')[1], 'base64')); };
  await shot('bloom_on.png');
  await page.evaluate(() => { for (const p of window.__bw.debug().composer.passes) if (p.threshold !== undefined && p.strength !== undefined) p.enabled = false; });
  await shot('bloom_off.png');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
