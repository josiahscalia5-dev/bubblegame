// Seeded real-game frames of ?s3=...,level1 (8 November 2026): Tap to Start, then the run with an optional autopilot that
// steers round the brushes, grime balls and the hero tunnel's brushes, jumps the soap bars and goes for the socks.
//   S3=intunnel,structmatch,level1 TIMES=0,3,6 [AUTO=1] [VW=412 VH=839] [SETTLE=300] node l1_run.cjs <demo-dir> <out-dir>
// TIMES: game seconds after the tap (0 = Tap to Start). Math.random seeded with 7. Prints the state at each frame as JSON.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || '').split(',').filter(Boolean), TIMES = (process.env.TIMES || '0').split(',').map(Number);
const VW = +(process.env.VW || 412), VH = +(process.env.VH || 839), AUTO = process.env.AUTO === '1';
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
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
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text()); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const shot = async (f) => { if (process.env.SETTLE) await page.waitForTimeout(+process.env.SETTLE); return page.screenshot({ path: path.join(OUT, f), clip: await page.locator('#stage').boundingBox() }); };
  // the autopilot: every 0.1 s, keep out of any obstacle's lane in the next 2-8 m, jump soap bars, else head for a sock
  const pilot = () => page.evaluate(() => {
    const st = window.__bw.state(), m = st.mascot || st, u = m.z ?? m.u, lane = m.lane;
    const plan = window.__bwLevel1Plan ? window.__bwLevel1Plan() : { brushes: [], bars: [], enemies: [], socks: [] };
    const hz = (window.__bw.hazards() || []).filter((h) => !h.cleared).map((h) => [h.u, h.side > 0 ? 0 : 2]);
    const blocked = [false, false, false];
    for (const [bu, bl] of [...plan.brushes, ...plan.enemies, ...hz]) { const d = bu - u; if (d > -0.6 && d < 6.5) blocked[bl] = true; }
    for (const bu of plan.bars) { const d = bu - u; if (d > 0.9 && d < 1.6) { window.__bw.swipe('up'); return 'jump'; } }
    let want = lane;
    if (blocked[lane]) { const order = [1, lane === 0 ? 0 : 2, lane === 0 ? 2 : 0]; want = order.find((l) => !blocked[l]) ?? lane; }
    else { const sk = plan.socks.find(([su]) => su - u > 2 && su - u < 14); if (sk && !blocked[sk[1]] && (Math.abs(sk[1] - lane) === 1 || !blocked[1])) want = sk[1]; }
    if (want < lane) window.__bw.swipe('left'); else if (want > lane) window.__bw.swipe('right');
    return want;
  });
  const out = [];
  const state = () => page.evaluate(() => { const s = window.__bw.state(); return { l1: window.__bwLevel1 || null, lane: s.lane, speed: s.speed, air: s.air, coins: s.coins, socks: s.socks, hearts: s.hearts, phase: s.phase, z: s.z }; });
  await page.evaluate(() => window.__bw.advance(0.5));
  if (TIMES.includes(0)) { await shot('t0.png'); out.push(['tap', await state()]); }
  if (TIMES.some((t) => t > 0)) {
    await page.evaluate(() => window.__bw.tap());
    let since = 0;
    for (const t of TIMES.filter((t) => t > 0)) {
      if (AUTO) { while (since < t - 1e-6) { const d = Math.min(0.1, t - since); await pilot(); await page.evaluate((x) => window.__bw.advance(x), d); since += d; } }
      else { await page.evaluate((d) => window.__bw.advance(d), t - since); since = t; }
      await shot(`t${t.toFixed(1)}.png`); out.push([t, await state()]);
    }
  }
  console.log(JSON.stringify({ s3: S3, frames: out, logs }, null, 0));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
