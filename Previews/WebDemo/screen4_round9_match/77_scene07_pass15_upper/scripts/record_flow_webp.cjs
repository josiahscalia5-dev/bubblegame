// Level 1 flow (8 November 2026, session b0abcf95): record_full.cjs with the flow autopilot (tools/level1/flow_routes.cjs): a
// continuous recording of the REAL game: Home, Laundry Toss (the Tripo girl animating), START, the toss, the washer entry, Tap to
// Start, then the whole 10-beat Level 1 to Level Complete along ROUTE (upper: the bounce pad, the raised side path, the lower path;
// ledge: the side paths' main route, the left upper ledge), every swipe / jump / tap labelled on screen (a badge drawn by this
// script, outside the game). Frame by frame (seed 7) at FPS frames per game second. Then: ffmpeg -> mp4.
// With START_U (and END_U) it records only that stretch of the run (no opening; S3 without home): a branch demonstration.
//   S3=intunnel,structmatch,home,level1 ROUTE=upper FPS=20 [VW=412 VH=915] [RUN=60] node record_flow.cjs <demo-dir> <frames-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,home,level1').split(','), FPS = +(process.env.FPS || 20), DT = 1 / FPS;
const VW = +(process.env.VW || 412), VH = +(process.env.VH || 915), RUN = +(process.env.RUN || 60), ROUTE = process.env.ROUTE || 'upper';
const START_U = process.env.START_U ? +process.env.START_U : null, END_U = process.env.END_U ? +process.env.END_U : 1e9;
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };   // (session f70c9bd1 copy: + webp)
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
  const OPENING = START_U === null && !!(await page.evaluate(() => !!window.__bwO3D));
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
  if (OPENING) {
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
  }
  log.push(['opening done at frame', n]);
  // 3. Tap to Start (0.8 s), the tap, the run with swipes, to Level Complete
  if (START_U === null) for (let i = 0; i < Math.round(0.8 * FPS); i++) { await page.evaluate((d) => window.__bw.advance(d), DT); await frame(); }
  if (START_U === null) { await badge('tap to start'); badgeT = 0.6; }
  await page.evaluate(() => window.__bw.tap());
  // the flow autopilot (as tools/level1/flow_routes.cjs): spin-attack a grime ball about to reach her, jump soap bars, the route's
  // intent (upper: lane 0 to the bounce pad, then swipe onto the side path; the lower path in the drop; ledge: the left ledge),
  // else keep out of a hazard's lane in the next 3.8 m and head for the next sock whose lane is clear up to it
  const pilot = () => page.evaluate((route) => {
    const B = window.__bw, st = B.state(), u = st.z, lane = st.lane;
    const plan = window.__bwLevel1Plan();
    const hz = (B.hazards() || []).filter((h) => !h.cleared).map((h) => [h.u, h.side > 0 ? 0 : 2]);
    const blocked = {};
    for (const [bu, bl] of [...plan.brushes, ...hz]) { const d = bu - u; if (d > -0.6 && d < 3.8) blocked[bl] = true; }
    for (const [eu, el, ex, dead] of plan.enemies) { if (dead) continue; const d = eu - u; if (d > 0.25 && d < 1.3 && Math.abs(ex - st.x) < 0.7) { B.tap(); return 'tap ✦ spin-attack'; } }
    for (const b of plan.bars) { const [bu, bl] = Array.isArray(b) ? b : [b, null]; const d = bu - u; if (d > 0.75 && d < 1.6 && (bl === null || bl === lane) && !st.air) { B.swipe('up'); return 'swipe ▲ jump'; } }
    let want = null;
    if (route === 'upper') {
      if (lane === -1) return '';
      if (u > 44 && u < 56.4) want = 0;
      else if (st.air && u > 56.6 && u < 60.5 && lane === 0) { B.swipe('left'); return '◀ swipe onto the side path'; }
      else if (u > 99 && u < 136) want = 1;
    } else if (route === 'ledge') { if (u > 99 && u < 136) want = 0; }
    if (want === null) {
      want = lane;
      const hazIn = (l, a, b) => [...plan.brushes, ...hz].some(([bu, bl]) => bl === l && bu - u > a && bu - u < b) || plan.enemies.some(([eu, el, ex, dead]) => !dead && el === l && eu - u > a && eu - u < b);
      if (blocked[lane]) { const order = [1, lane === 0 ? 0 : 2, lane === 0 ? 2 : 0]; want = order.find((l) => !blocked[l]) ?? lane; }
      else { const sk = plan.socks.map(([su, sl]) => [su, sl >= 0 ? Math.max(0, Math.min(2, Math.round(sl))) : -1]).find(([su, sl]) => sl >= 0 && su - u > 1 && su - u < 14 && !hazIn(sl, -0.6, su - u + 0.7));
        if (sk && (Math.abs(sk[1] - lane) <= 1 || !hazIn(1, -0.6, 4))) want = sk[1]; }
    }
    if (want < lane) { B.swipe('left'); return '◀ swipe left'; } if (want > lane) { B.swipe('right'); return 'swipe right ▶'; }
    return '';
  }, ROUTE);
  // (a branch demonstration: on to START_U without drawing, then record to END_U)
  if (START_U !== null) { while ((await page.evaluate(() => window.__bw.state().z)) < START_U) { await pilot(); await page.evaluate((d) => window.__bw.step(d, 20), DT); } }
  let t = 0, endT = null;
  while (t < RUN) {
    const g = await pilot();
    if (g) { await badge(g); badgeT = 0.5; }
    await page.evaluate((d) => window.__bw.advance(d), DT); t += DT;
    if (badgeT > 0 && (badgeT -= DT) <= 0) await badge('');
    await frame();
    const l1 = await page.evaluate(() => window.__bwLevel1 || null);
    if (l1 && l1.complete && endT === null) endT = t;
    if (endT !== null && t - endT > 3.2) break;
    if (l1 && l1.u > END_U) break;
    if (n % 20 === 0) log.push([+t.toFixed(2), l1 && l1.u, l1 && l1.section, l1 && l1.route, l1 && l1.socks]);
  }
  const fin = await page.evaluate(() => ({ state: window.__bw.state(), l1: window.__bwLevel1 }));
  fs.writeFileSync(path.join(OUT, 'record_log.json'), JSON.stringify({ s3: S3, fps: FPS, frames: n, log, final: { phase: fin.state.phase, coins: fin.state.coins, gems: fin.state.gems, socks: fin.state.socks, hearts: fin.state.hearts, knocks: fin.state.knocks, l1: fin.l1 && { u: fin.l1.u, section: fin.l1.section, complete: fin.l1.complete, route: fin.l1.route, popped: fin.l1.popped, result: fin.l1.result } }, route: ROUTE, errors: logs }, null, 1));
  console.log('frames', n, 'errors', logs.length);
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
