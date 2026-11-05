// live_sweep.cjs <abs WebDemo> <out-dir> : one seeded page (seed 7, 538 x 1076, DPR), Tap then T s, then for each candidate
// in CANDS_FILE ([{label, js}]) runs `js` in the page (with `scene`, `THREE`-free helpers: find(name) -> list of objects),
// renders and saves <label>.png (the raw canvas). TUNE: base tune JSON (deep-merged at load).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'focus').split(',').filter(Boolean), T = +(process.env.T || 3.0);
const CANDS = JSON.parse(fs.readFileSync(process.env.CANDS_FILE, 'utf8'));
const TUNE = process.env.TUNE_FILE ? JSON.parse(fs.readFileSync(process.env.TUNE_FILE, 'utf8')) : {};
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1.5) })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(([tune, s3]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = tune;
    window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [TUNE, S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate((t) => window.__bw.advance(t), T);
  await page.waitForTimeout(800);
  for (const c of CANDS) {
    const url = await page.evaluate((js) => {
      const scene = window.__bw.debug().scene;
      const find = (n) => { const r = []; scene.traverse((o) => { if (o.name === n) r.push(o); }); return r; };
      new Function('scene', 'find', js)(scene, find);
      window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png');
    }, c.js);
    fs.writeFileSync(path.join(OUT, `${c.label}.png`), Buffer.from(url.split(',')[1], 'base64'));
    console.log('saved', c.label);
  }
  console.log(logs.join(' | ') || 'no console errors');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
