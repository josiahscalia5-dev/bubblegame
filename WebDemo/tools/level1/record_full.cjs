// A continuous recording of the REAL game (8 November 2026, ?s3=...,home,level1): Home, Laundry Toss (the girl animating),
// START, the toss, the washer entry and the hand-over, Tap to Start, then the whole run, steered by swipes, to Level Complete.
// Captured frame by frame (seed 7) at FPS frames per game second, so every frame is the game's own; the swipes are labelled
// on screen (a badge drawn by this script, outside the game). Then: ffmpeg -> mp4.
//   S3=intunnel,structmatch,home,level1 FPS=20 [VW=412 VH=915] [RUN=52] node record_full.cjs <demo-dir> <frames-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,home,level1').split(','), FPS = +(process.env.FPS || 20), DT = 1 / FPS;
const VW = +(process.env.VW || 412), VH = +(process.env.VH || 915), RUN = +(process.env.RUN || 52);
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
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1, isMobile: true, hasTouch: true })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready') && (!window.__bwO3D || window.__bwO3D.state().heroReady), null, { timeout: 300000 });
  // the swipe badge (recording annotation only) and no CSS transitions (every frame is set explicitly)
  await page.addStyleTag({ content: `#recBadge { position: fixed; left: 50%; bottom: 23%; transform: translateX(-50%); z-index: 99999; padding: 6px 14px; border-radius: 99px;
    font: 700 17px system-ui, sans-serif; color: #fff; background: rgba(20,20,60,.72); border: 2px solid #fff; opacity: 0; pointer-events: none; }
    #bwHome, #bwHome * { transition: none !important; }` });
  await page.evaluate(() => { const b = document.createElement('div'); b.id = 'recBadge'; document.body.appendChild(b); });
  let n = 0, badgeT = 0;
  const frame = async () => { await page.screenshot({ path: path.join(OUT, `f${String(n++).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 88, timeout: 240000 }); };
  const badge = (txt) => page.evaluate((t) => { const b = document.getElementById('recBadge'); b.textContent = t; b.style.opacity = t ? '1' : '0'; }, txt);
  const log = [];
  // 1. Home (1.4 s) and Laundry Toss (1.6 s): the live scene waiting
  let idle = 0;
  for (let i = 0; i < Math.round(1.4 * FPS); i++) { idle += DT; await page.evaluate((x) => window.__bwO3D.seek(x, -1), idle); await frame(); }
  await page.click('#bwHome .screen:not(.off) .go');
  for (let i = 0; i < Math.round(1.6 * FPS); i++) { idle += DT; await page.evaluate((x) => window.__bwO3D.seek(x, -1), idle); await frame(); }
  await badge('tap START'); await page.click('#bwHome .screen:not(.off) .go'); badgeT = 0.6;
  // 2. the toss, the flight, the washer entry; then the cross-fade into the game's Tap to Start
  for (let s = DT; s < 6.25; s += DT) {
    idle += DT;
    const st = await page.evaluate(([a, b, d]) => { if (window.__bwO3D) window.__bwO3D.seek(a, b, d); const h = document.getElementById('bwHome');
      if (h && b >= 5.15) h.style.opacity = String(Math.max(0, 1 - (b - 5.15) / 0.8)); if (b >= 5.15) window.__bw.advance(1 / 20); return !!h; }, [idle, s, DT]);
    if (badgeT > 0 && (badgeT -= DT) <= 0) await badge('');
    await frame();
    if (!st) break;
  }
  log.push(['opening done at frame', n]);
  // 3. Tap to Start (0.8 s), the tap, the run with swipes, to Level Complete
  for (let i = 0; i < Math.round(0.8 * FPS); i++) { await page.evaluate((d) => window.__bw.advance(d), DT); await frame(); }
  await badge('tap to start'); badgeT = 0.6; await page.evaluate(() => window.__bw.tap());
  const pilot = () => page.evaluate(() => {
    const st = window.__bw.state(), u = st.z, lane = st.lane;
    const plan = window.__bwLevel1Plan ? window.__bwLevel1Plan() : { brushes: [], bars: [], enemies: [], socks: [] };
    const hz = (window.__bw.hazards() || []).filter((h) => !h.cleared).map((h) => [h.u, h.side > 0 ? 0 : 2]);
    const blocked = [false, false, false];
    for (const [bu, bl] of [...plan.brushes, ...plan.enemies, ...hz]) { const d = bu - u; if (d > -0.6 && d < 6.5) blocked[bl] = true; }
    for (const bu of plan.bars) { const d = bu - u; if (d > 0.9 && d < 1.6 && !st.air) { window.__bw.swipe('up'); return 'up'; } }
    let want = lane;
    if (blocked[lane]) { const order = [1, lane === 0 ? 0 : 2, lane === 0 ? 2 : 0]; want = order.find((l) => !blocked[l]) ?? lane; }
    else { const sk = plan.socks.find(([su]) => su - u > 2 && su - u < 14); if (sk && !blocked[sk[1]] && (Math.abs(sk[1] - lane) === 1 || !blocked[1])) want = sk[1]; }
    if (want < lane) { window.__bw.swipe('left'); return 'left'; } if (want > lane) { window.__bw.swipe('right'); return 'right'; }
    return '';
  });
  let t = 0, endT = null;
  while (t < RUN) {
    const g = await pilot();
    if (g) { await badge(g === 'up' ? 'swipe ▲ jump' : g === 'left' ? '◀ swipe left' : 'swipe right ▶'); badgeT = 0.5; }
    await page.evaluate((d) => window.__bw.advance(d), DT); t += DT;
    if (badgeT > 0 && (badgeT -= DT) <= 0) await badge('');
    await frame();
    const l1 = await page.evaluate(() => window.__bwLevel1 || null);
    if (l1 && l1.complete && endT === null) endT = t;
    if (endT !== null && t - endT > 3.2) break;
    if (n % 100 === 0) log.push([+t.toFixed(2), l1 && l1.u, l1 && l1.section]);
  }
  const fin = await page.evaluate(() => ({ state: window.__bw.state(), l1: window.__bwLevel1 }));
  fs.writeFileSync(path.join(OUT, 'record_log.json'), JSON.stringify({ s3: S3, fps: FPS, frames: n, log, final: { phase: fin.state.phase, coins: fin.state.coins, gems: fin.state.gems, socks: fin.state.socks, hearts: fin.state.hearts, knocks: fin.state.knocks, l1: fin.l1 && { u: fin.l1.u, section: fin.l1.section, complete: fin.l1.complete } }, errors: logs }, null, 1));
  console.log('frames', n, 'errors', logs.length);
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
