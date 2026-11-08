// Frames of the real-time 3D Laundry Toss opening (?s3=...,home,level1, 8 November 2026): the scene while waiting (Home and
// Screen 2), then START and the toss, the flight, the washer entry and the hand-over, then the game's Tap to Start.
//   S3=intunnel,structmatch,home,level1 IDLE=0,1.5 SEQ=0,0.5,1,2,3,4,5,5.6 [VW=412 VH=839] node o3d_shots.cjs <demo-dir> <out-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,home,level1').split(','), IDLE = (process.env.IDLE || '0').split(',').map(Number), SEQ = (process.env.SEQ || '').split(',').filter(Boolean).map(Number);
const VW = +(process.env.VW || 412), VH = +(process.env.VH || 839);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1 })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 400)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready') && window.__bwO3D && window.__bwO3D.state().heroReady, null, { timeout: 300000 });
  const shot = (f) => page.screenshot({ path: path.join(OUT, f), timeout: 240000 });
  for (const t of IDLE) { await page.evaluate((x) => window.__bwO3D.seek(x, -1), t); await page.waitForTimeout(400); await shot(`home_idle_${t.toFixed(1)}.png`); }
  await page.click('#bwHome .screen:not(.off) .go'); await page.waitForTimeout(500);
  for (const t of IDLE) { await page.evaluate((x) => window.__bwO3D.seek(x + 3, -1), t); await page.waitForTimeout(400); await shot(`toss_idle_${t.toFixed(1)}.png`); }
  if (SEQ.length) {
    await page.click('#bwHome .screen:not(.off) .go'); await page.waitForTimeout(450);
    // step the sequence at 30 fps up to each time (so the splash and sparkles evolve), drawing only the frames kept
    let s = 0;
    for (const t of SEQ) { while (s < t - 1e-6) { const d = Math.min(1 / 30, t - s); s += d; await page.evaluate(([a, b, dd]) => window.__bwO3D.seek(a, b, dd), [6 + s, s, d]); } await page.waitForTimeout(250); await shot(`seq_${t.toFixed(2)}.png`); }
  }
  console.log(JSON.stringify({ logs, state: await page.evaluate(() => window.__bwO3D && window.__bwO3D.state()) }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
