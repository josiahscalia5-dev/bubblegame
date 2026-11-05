// hud_rects.cjs <abs WebDemo> <out.json> : the interface elements' boxes, read from the live page (getBoundingClientRect) at the
// Screen 4 checkpoint: seed 7, Tap to Start, then 3.0 s of game time, no steering (the setup of tools/screen4/liquid_shots.cjs).
//   S3=focus [PHONE=412x839] node hud_rects.cjs ...   PHONE: an emulated Pixel 7 with that viewport instead of the 700 x 1076 page.
// Boxes are fractions of the stage (#stage) and board units (1 u = the page's --u), and say whether each is fully on screen.
const { chromium, devices } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'focus').split(',').filter(Boolean);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const IDS = ['heartPill', 'coinPill', 'gemPill', 'sockPanel', 'pauseBtn', 'blastBtn', 'turboBtn', 'hint'];
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  let ctx;
  if (process.env.PHONE) { const [w, h] = process.env.PHONE.split('x').map(Number); ctx = { ...devices['Pixel 7'], viewport: { width: w, height: h } }; }
  else ctx = { viewport: { width: 700, height: 1076 } };
  const page = await (await browser.newContext(ctx)).newPage();
  const logs = []; page.on('pageerror', (e) => logs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); });
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate(() => window.__bw.advance(3.0));
  await page.waitForTimeout(900);
  const out = await page.evaluate((ids) => {
    const st = document.getElementById('stage').getBoundingClientRect();
    const u = parseFloat(getComputedStyle(document.getElementById('stage')).getPropertyValue('--u'));
    const r = { stage: { w: st.width, h: st.height, u }, els: {} };
    for (const id of ids) {
      const el = document.getElementById(id); if (!el) continue;
      const b = el.getBoundingClientRect(), cs = getComputedStyle(el);
      const shown = !el.hidden && cs.display !== 'none' && cs.visibility !== 'hidden' && +cs.opacity > 0.05 && b.width > 0;
      r.els[id] = { shown, opacity: +cs.opacity, frac: [b.left - st.left, b.top - st.top, b.right - st.left, b.bottom - st.top].map((v, i) => +(v / (i % 2 ? st.height : st.width)).toFixed(4)),
        u: [b.left - st.left, b.top - st.top, b.right - st.left, b.bottom - st.top].map((v) => +(v / u).toFixed(1)),
        onScreen: b.left >= st.left - 0.5 && b.top >= st.top - 0.5 && b.right <= st.right + 0.5 && b.bottom <= st.bottom + 0.5 };
    }
    return r;
  }, IDS);
  out.s3 = S3; out.phone = process.env.PHONE || null; out.logs = logs.length ? logs : 'no console errors';
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1));
  console.log(JSON.stringify(out));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
