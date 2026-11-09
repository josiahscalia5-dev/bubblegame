// six2 (session 9ee07777): real frames of the six-scene opening. Usage: [S3=list] TIMES=-1,0.6,2.1 [VW=432 VH=768 DPR=1 UI=0 TUNE='{json}'] flock /tmp/bw_browser.lock node shots6.cjs <ABSOLUTE WebDemo dir> <out dir>
// TIMES are REAL seconds after START (-1 = the waiting Laundry Toss screen); the story clock warps real 2.65..4.45 s (see SIX2.warp in src/opening_six2.js)
// six2 frames: S3 list, TIMES = comma list of seq times (-1 = waiting at Laundry Toss); TUNE = JSON merged into window.__bwSix2 before seeking
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2').split(',');
const TIMES = (process.env.TIMES || '-1').split(',').map(Number), VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1);
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
  if (process.env.TUNE) await page.evaluate((j) => { const d = JSON.parse(j); for (const k in d) window.__bwSix2[k] = d[k]; }, process.env.TUNE);
  const play = await page.$('#bwHome .screen:not(.off) .go'); if (play) await play.click(); await page.waitForTimeout(500);
  if (process.env.UI === '0') await page.evaluate(() => { const h = document.getElementById('bwHome'); for (const c of h.children) if (c.tagName !== 'CANVAS') c.style.visibility = 'hidden'; });
  let s = 0, started = false;
  for (const t of TIMES) {
    if (t < 0) { await page.evaluate(() => window.__bwO3D.seek(4.5, -1)); }
    else { if (!started) { started = true; const b = (await page.$('#bwHome .s6bar .startgo')) || (await page.$('#bwHome .screen:not(.off) .go')); if (b && process.env.UI !== '0') await b.click(); s = 0; }
      while (s < t - 1e-6) { const d = Math.min(1 / 30, t - s); s += d; await page.evaluate(([a, b, dd]) => window.__bwO3D.seek(a, b, dd), [6 + s, s, d]); } }
    await page.waitForTimeout(200); await page.screenshot({ path: path.join(OUT, `t_${t.toFixed(2)}.png`), timeout: 240000 }); log('shot', t);
  }
  console.log(JSON.stringify({ logs: logs.slice(0, 8), state: await page.evaluate(() => window.__bwO3D.state()) }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
