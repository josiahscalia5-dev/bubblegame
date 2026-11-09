// Lane s56 (session 3849f5c8): fast frames + probes of the six-scene OPENING (the wash water, Screens 3-5), for iteration.
// Usage: [S3=list] TIMES=5.6,7.2 [VW=432 VH=768 DPR=1 FAST=1 VARIANTS=<json file: [{tag, js}]> PROBE=1 UI=0] flock /tmp/bw_browser.lock node op56.cjs <ABS WebDemo> <out>
// TIMES are REAL seconds after START, as tools/six2/shots6.cjs (story = real - 0.5 after the warp). The page setup (seed 7, __BW_TEST__, art off)
// is shots6.cjs's. FAST=1: one jump to t - 0.6 s, then 1/30 s steps (the pose is a function of the clocks; only the splash particles and the
// one-shot landing splash differ from a full run). FAST=0: every 1/30 s step from 0, exactly as shots6.cjs (use it for identity proofs).
// VARIANTS: each variant's js runs in the page (e.g. `__bwSeq7W.level = 0.1`), then every time is shot as <tag>_t_<t>.png.
// PROBE=1: prints the hero's projected centre / eyes, the porthole, the water level (for measuring), per shot, to stdout as JSON.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,seq7').split(',');
const TIMES = (process.env.TIMES || '7.2').split(',').map(Number), VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1);
const FAST = process.env.FAST !== '0';
const VARIANTS = process.env.VARIANTS ? JSON.parse(fs.readFileSync(process.env.VARIANTS, 'utf8')) : [{ tag: '', js: '' }];
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const T0 = Date.now(), log = (...a) => console.error(((Date.now() - T0) / 1000).toFixed(1) + 's', ...a);
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const logs = []; page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); }); page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message + ' ' + (e.stack || '').slice(0, 400)));
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`); log('loaded');
  const cond = () => ({ ready: document.body.classList.contains('ready'), o3d: !!window.__bwO3D, hero: !!(window.__bwO3D && window.__bwO3D.state().heroReady), t2: !!(window.__bwTripo2 && window.__bwTripo2.ready), t3: !!(window.__bwTripo3 && window.__bwTripo3.ready) });
  for (let i = 0; i < 120; i++) { const c = await page.evaluate(cond); if (c.ready && c.hero && c.t2 && c.t3) break; if (i % 10 === 0) log(JSON.stringify(c), logs.slice(-2)); await page.waitForTimeout(2000); }
  log('ready');
  const play = await page.$('#bwHome .screen:not(.off) .go'); if (play) await play.click(); await page.waitForTimeout(500);
  if (process.env.UI === '0') await page.evaluate(() => { const h = document.getElementById('bwHome'); for (const c of h.children) if (c.tagName !== 'CANVAS') c.style.visibility = 'hidden'; });
  const b = (await page.$('#bwHome .s6bar .startgo')) || (await page.$('#bwHome .screen:not(.off) .go')); if (b && process.env.UI !== '0') await b.click();
  const probes = [];
  for (const V of VARIANTS) {
    if (V.js) await page.evaluate(V.js);
    let s = 0;
    for (const t of TIMES) {
      if (FAST) { s = Math.max(0, t - 0.6); await page.evaluate(([a, bb]) => window.__bwO3D.seek(a, bb, 1 / 30), [6 + s, s]); }
      else if (s > t) s = 0;
      while (s < t - 1e-6) { const d = Math.min(1 / 30, t - s); s += d; await page.evaluate(([a, bb, dd]) => window.__bwO3D.seek(a, bb, dd), [6 + s, s, d]); }
      await page.waitForTimeout(150);
      const name = `${V.tag ? V.tag + '_' : ''}t_${t.toFixed(2)}.png`;
      await page.screenshot({ path: path.join(OUT, name), timeout: 240000 }); log('shot', name);
      if (process.env.PROBE === '1') probes.push({ name, ...(await page.evaluate(() => {
        const D = window.__bwSix2dbg; if (!D) return {}; const cam = D.camera, h = D.hero; const v = (x, y, z) => { const p = new D.hero.position.constructor(x, y, z).project(cam); return [+((p.x + 1) / 2).toFixed(4), +((1 - p.y) / 2).toFixed(4)]; };
        const hp = h.position; const W = window.__bwSeq7W || null;
        return { cam: cam.position.toArray().map((x) => +x.toFixed(3)), fov: cam.fov, hero: hp.toArray().map((x) => +x.toFixed(3)), heroC: v(hp.x, hp.y, hp.z), eyes: v(hp.x, hp.y + 0.043, hp.z), mouth: v(hp.x, hp.y - 0.043, hp.z),
          top: v(hp.x, hp.y + 0.2, hp.z), bot: v(hp.x, hp.y - 0.2, hp.z), portC: v(0.3, 0.62, 0.27), portTop: v(0.3, 0.9, 0.27), portBot: v(0.3, 0.34, 0.27), level: W && W.dbg ? W.dbg : null };
      })) });
    }
  }
  console.log(JSON.stringify({ logs: logs.slice(0, 8), probes }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
