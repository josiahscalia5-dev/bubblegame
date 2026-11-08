// Level 1 flow (8 November 2026, session b0abcf95): drive the real game through one ROUTE of the 10-beat level with an autopilot,
// take full-height phone frames at course positions, and print what happened (route at each frame, socks, coins, hearts, pops,
// blocked moves, the Level Complete result). Seeded (Math.random = mulberry 7), software rendering.
//   S3=intunnel,structmatch,level1 ROUTE=upper|ledge|blocked SHOTS=40,58.5,66 [VW=412 VH=915] node flow_routes.cjs <demo-dir> <out-dir>
// ROUTE upper: the bounce pad and the raised side path, then the lower path; spins pop the grime balls.
// ROUTE ledge: the side paths' main route, then the left upper ledge (its soap bar jumped); grime balls popped or dodged.
// ROUTE blocked: tries the moves the routes forbid (onto the side path from the water; back up from the lower path).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1').split(',').filter(Boolean), ROUTE = process.env.ROUTE || 'upper';
const SHOTS = (process.env.SHOTS || '').split(',').filter(Boolean).map(Number).sort((a, b) => a - b);
const VW = +(process.env.VW || 412), VH = +(process.env.VH || 915), MAXT = +(process.env.MAXT || 75);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webp': 'image/webp' };
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
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const stage = await page.locator('#stage').boundingBox();
  // the in-page autopilot and route intents; it steps the game itself (no drawing) until u reaches `until` or the run ends
  const drive = (until) => page.evaluate(({ until, route }) => {
    const ev = window.__flowEv || (window.__flowEv = { swipes: 0, blocked: [], spins: 0, events: [] });
    const B = window.__bw;
    for (let guard = 0; guard < 4000; guard++) {
      const st = B.state(), u = st.z, lane = st.lane;
      if (st.phase !== 'running' || u >= until) break;
      const plan = window.__bwLevel1Plan();
      const hz = (B.hazards() || []).filter((h) => !h.cleared).map((h) => [h.u, h.side > 0 ? 0 : 2]);
      const blocked = {};
      for (const [bu, bl] of [...plan.brushes, ...hz]) { const d = bu - u; if (d > -0.6 && d < 6.5) blocked[bl] = true; }
      let act = null;
      // grime balls: spin-attack one that is about to reach her (the flow's interaction), else keep out of its way
      for (const [eu, el, ex, dead] of plan.enemies) {
        if (dead) continue; const d = eu - u;
        if (d > 0.25 && d < 1.3 && Math.abs(ex - st.x) < 0.7) { B.tap(); ev.spins++; ev.events.push(['spin', +u.toFixed(1)]); }
        if (route === 'dodge' && d > -0.6 && d < 6.5) blocked[el] = true;
      }
      // soap bars (flow: [u, lane] on the ledges): jump them
      for (const b of plan.bars) { const [bu, bl] = Array.isArray(b) ? b : [b, null]; const d = bu - u; if (d > 0.9 && d < 1.5 && (bl === null || bl === lane) && !st.air) { B.swipe('up'); act = 'jump'; ev.events.push(['jump bar', +u.toFixed(1)]); } }
      let want = null;
      if (route === 'upper') {
        if (lane === -1) want = -1;
        else if (u > 44 && u < 56.4) want = 0;                                              // to the bounce pad
        else if (st.air && u > 56.6 && u < 60.5 && lane === 0) { B.swipe('left'); ev.events.push(['swipe onto side path', +u.toFixed(1), +st.y.toFixed(2)]); want = -1; }
        else if (u > 99 && u < 136) want = 1;                                                // the lower path
      } else if (route === 'ledge') {
        if (u > 99 && u < 136) want = 0;                                                      // the left upper ledge
      } else if (route === 'blocked') {
        if (u > 44 && u < 50) want = 0;
        if (u > 60 && u < 60.2 && lane === 0 && !st.air) { const before = lane; B.swipe('left'); const after = B.state().lane; ev.blocked.push(['onto side path from the water', +u.toFixed(2), before, after]); }
        if (u > 99 && u < 136) want = 1;
        if (u > 121 && u < 121.2 && lane === 1) { const before = lane; B.swipe('left'); const after = B.state().lane; ev.blocked.push(['lower path back up to a ledge', +u.toFixed(2), before, after]); }
      }
      if (want === null && !act) {
        want = lane;
        if (blocked[lane]) { const order = [1, lane === 0 ? 0 : 2, lane === 0 ? 2 : 0]; want = order.find((l) => !blocked[l]) ?? lane; }
        else { const sk = plan.socks.find(([su, sl]) => sl >= 0 && su - u > 2 && su - u < 14); if (sk && !blocked[sk[1]] && (Math.abs(sk[1] - lane) === 1 || !blocked[1])) want = sk[1]; }
      }
      if (want !== null && want !== -1 && lane !== -1) { if (want < lane) { B.swipe('left'); ev.swipes++; } else if (want > lane) { B.swipe('right'); ev.swipes++; } }
      B.step(0.1, 30);
    }
    const st = B.state();
    return { u: st.z, phase: st.phase };
  }, { until, route: ROUTE });
  const snap = () => page.evaluate(() => { const s = window.__bw.state(), l = window.__bwLevel1 || {};
    return { u: s.z, x: s.x, y: s.y, lane: s.lane, air: s.air, route: l.route, lift: l.lift, section: l.section, socks: s.socks, coins: s.coins, gems: s.gems, hearts: s.hearts,
      popped: l.popped, phase: s.phase, complete: l.complete, banner: (document.querySelector('#l1Banner.show') || {}).innerText || '', info: window.__bw.info(), result: l.result }; });
  await page.evaluate(() => window.__bw.advance(0.5));
  const frames = [];
  await page.screenshot({ path: path.join(OUT, `${ROUTE}_u001.6_tap.jpg`), clip: stage, quality: 88, timeout: 240000 });
  frames.push(['tap', await snap()]);
  await page.evaluate(() => window.__bw.tap());
  for (const su of SHOTS) {
    const r = await drive(su);
    if (r.phase !== 'running') break;
    await page.evaluate(() => window.__bw.render());
    const s = await snap();
    await page.screenshot({ path: path.join(OUT, `${ROUTE}_u${su.toFixed(1).padStart(5, '0')}.jpg`), clip: stage, quality: 88, timeout: 240000 });
    frames.push([su, s]);
  }
  // on to the finish, then Level Complete (its card appears 1.1 s after the finish)
  await drive(1e9);
  await page.evaluate(() => window.__bw.advance(2.0));
  const end = await snap();
  await page.screenshot({ path: path.join(OUT, `${ROUTE}_level_complete.jpg`), clip: stage, quality: 88, timeout: 240000 });
  frames.push(['end', end]);
  const ev = await page.evaluate(() => window.__flowEv);
  console.log(JSON.stringify({ s3: S3, route: ROUTE, frames, events: ev, logs }, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
