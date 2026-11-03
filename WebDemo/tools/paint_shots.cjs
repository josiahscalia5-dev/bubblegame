// [VIEWPORT=390x844] node tools/paint_shots.cjs <demo-dir> <out-dir> <query|-> <prefix> t1 t2 ...
// Plays the recordings' input script with Math.random seeded (same seed and inputs as the earlier Screen 3 tests),
// with the full-screen opening artwork off (so the real 3D scene shows), and screenshots the 1:2 stage at the given
// game seconds as <prefix>_t<time>.png. Also writes <prefix>_report.json: the Screen 3 test's report, the game state at
// each shot, and any console errors.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, QUERY, PREFIX, ...TIMES] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const SCRIPT = [[0.5, 'look'], [1.5, 'unlook'], [2.0, 'tap'], [2.8, 'left'], [3.6, 'right'], [4.3, 'right'], [5.0, 'left'],
  [5.9, 'up'], [6.9, 'left'], [7.8, 'right'], [8.4, 'right'], [9.1, 'tap'], [9.6, 'left'], [10.7, 'left'], [11.5, 'up'], [12.3, 'right']];
(async () => {
  await new Promise((r) => server.listen(0, r));
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const [VW, VH] = (process.env.VIEWPORT || '700x1076').split('x').map(Number);   // default: a 1:2 stage of 538 x 1068 css px
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH } })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.addInitScript(() => { window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 1234 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html${QUERY && QUERY !== '-' ? '?' + QUERY : ''}`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: '*, *::before, *::after { transition: none !important; animation: none !important; }' });
  const times = TIMES.map(Number).sort((a, b) => a - b);
  const events = [...SCRIPT.map(([t, a]) => ({ t, a })), ...times.map((t) => ({ t, shot: true }))].sort((x, y) => x.t - y.t || (x.shot ? 1 : -1));
  const states = {};
  let t = 1 / 30;   // the page steps one frame on load
  for (const e of events) {
    const frames = Math.round((e.t - t) * 30);
    if (frames > 0) { await page.evaluate((n) => window.__bw.advance(n / 30, 30), frames); t += frames / 30; }
    if (e.shot) {
      await page.screenshot({ path: path.join(OUT, `${PREFIX}_t${e.t.toFixed(1).padStart(4, '0')}.png`), clip: await page.locator('#stage').boundingBox() });
      states[e.t.toFixed(1)] = await page.evaluate(() => window.__bw.state());
    } else await page.evaluate((a) => { const b = window.__bw; if (a === 'look') b.lookBack(1); else if (a === 'unlook') b.lookBack(0); else if (a === 'tap') b.tap(); else b.swipe(a); }, e.a);
  }
  const s3 = await page.evaluate(() => window.__bwS3 || null);
  fs.writeFileSync(path.join(OUT, `${PREFIX}_report.json`), JSON.stringify({ query: QUERY, s3, states, console: logs }, null, 1));
  console.log(PREFIX, logs.join('\n') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
