// Scripted play-through in Chromium: Tap to Start, swipes, jumps; screenshots + state at each beat.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, MODE] = process.argv.slice(2);
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
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY, bypass: 'localhost,127.0.0.1' } : undefined;
  const ctx = await browser.newContext({ viewport: { width: 405, height: 810 }, ignoreHTTPSErrors: true, proxy });
  const page = await ctx.newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.addInitScript(() => { window.__BW_TEST__ = true; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const shot = async (name) => { await page.screenshot({ path: path.join(OUT, name + '.png') }); };
  const st = (s) => console.log(JSON.stringify(s));
  if (MODE === 'nobloom') await page.evaluate(() => window.__bw.setBloom(false));
  st(await page.evaluate(() => window.__bw.advance(0.5))); await shot('a_intro');
  if (MODE !== 'quick') {
    await page.evaluate(() => window.__bw.lookBack(1)); st(await page.evaluate(() => window.__bw.advance(0.6))); await shot('b_lookback');
    await page.evaluate(() => window.__bw.lookBack(0));
  }
  await page.evaluate(() => window.__bw.tap());
  st(await page.evaluate(() => window.__bw.advance(0.9))); await shot('c_downhill');
  await page.evaluate(() => window.__bw.swipe('left'));
  st(await page.evaluate(() => window.__bw.advance(0.25))); await shot('d_lane_change');
  st(await page.evaluate(() => window.__bw.advance(0.75))); await shot('e_uphill');
  await page.evaluate(() => window.__bw.swipe('right'));
  st(await page.evaluate(() => window.__bw.advance(0.7))); await shot('f_crest');
  st(await page.evaluate(() => window.__bw.advance(0.6))); await shot('g_portal');
  st(await page.evaluate(() => window.__bw.advance(0.8))); await shot('h_drum');
  await page.evaluate(() => window.__bw.swipe('up'));
  st(await page.evaluate(() => window.__bw.advance(0.35))); await shot('i_jump');
  st(await page.evaluate(() => window.__bw.advance(0.7))); await shot('j_landed');
  st(await page.evaluate(() => window.__bw.advance(1.4))); await shot('k_screen4');
  console.log(logs.join('\n') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
