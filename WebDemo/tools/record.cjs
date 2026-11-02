// Record real gameplay from Chromium: the game is stepped at exactly 30 frames per game-second and
// every frame is captured, so the video plays at true game speed even though this machine renders
// WebGL in software. Inputs are the same calls a swipe or tap makes.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, SECONDS = '13'] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html'); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const SCRIPT = [ // [game second, action]
  [0.6, 'look'], [1.7, 'unlook'], [2.2, 'tap'], [3.0, 'left'], [4.1, 'right'], [4.9, 'right'], [5.8, 'left'],
  [6.6, 'up'], [7.9, 'left'], [8.8, 'up'], [9.6, 'right'], [10.3, 'tap'], [11.4, 'left'], [12.2, 'up'],
];
(async () => {
  await new Promise((r) => server.listen(0, r));
  fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY, bypass: 'localhost,127.0.0.1' } : undefined;
  const page = await (await browser.newContext({ viewport: { width: 405, height: 810 }, ignoreHTTPSErrors: true, proxy })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.addInitScript(() => { window.__BW_TEST__ = true; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const frames = Math.round(parseFloat(SECONDS) * 30), track = [];
  let next = 0; const t0 = Date.now();
  for (let f = 0; f < frames; f++) {
    const t = f / 30;
    while (next < SCRIPT.length && SCRIPT[next][0] <= t) {
      const a = SCRIPT[next++][1];
      await page.evaluate((a) => {
        const bw = window.__bw;
        if (a === 'look') bw.lookBack(1); else if (a === 'unlook') bw.lookBack(0);
        else if (a === 'tap') bw.tap(); else bw.swipe(a);
      }, a);
    }
    const s = await page.evaluate(() => window.__bw.advance(1 / 30, 30));
    track.push(s);
    await page.screenshot({ path: path.join(OUT, `f${String(f).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 88 });
  }
  fs.writeFileSync(path.join(OUT, 'track.json'), JSON.stringify(track));
  console.log(`recorded ${frames} frames in ${((Date.now() - t0) / 1000).toFixed(0)} s`);
  console.log(logs.join('\n') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
