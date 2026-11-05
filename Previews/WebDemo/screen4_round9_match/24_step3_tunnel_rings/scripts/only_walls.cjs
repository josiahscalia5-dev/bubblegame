// only_walls.cjs <demo> <out-dir>: focus at 3.0 s (seed 7); raw canvas (a) as is, (b) every object hidden except heroWalls and the
// exit disc, (c) only heroWalls; with the tune of the map-only test (no extras)
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
    window.__BW_S3_TUNE__ = { match: { walls: { lift: 0, sat: 1, ringMap: { amount: 1, detail: 0 }, flecks: { amount: 0 }, spec: 0 } }, matchWater: { bubbles: { count: 0, flecks: { count: 0 } } } };
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5)); await page.evaluate(() => window.__bw.tap()); await page.evaluate(() => window.__bw.advance(3.0));
  const shot = async (f) => { const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); }); fs.writeFileSync(path.join(OUT, f), Buffer.from(url.split(',')[1], 'base64')); };
  await shot('a_all.png');
  const n = await page.evaluate(() => { const s = window.__bw.debug().scene; let k = 0; const keep = new Set();
    s.traverse((o) => { if (o.name === 'heroWalls' || (o.material && o.material.fragmentShader && o.material.fragmentShader.includes('gl_FragColor = vec4(matchWall('))) { keep.add(o); let p = o.parent; while (p) { keep.add(p); p = p.parent; } } });
    s.traverse((o) => { if ((o.isMesh || o.isPoints || o.isLine || o.isSprite) && !keep.has(o)) { o.userData.ow = o.visible; o.visible = false; k++; } }); return k; });
  await shot('b_walls_and_exit.png');
  console.log('hid', n);
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
