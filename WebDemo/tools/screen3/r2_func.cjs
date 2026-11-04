// Functional checks for the ?s3=round2 test (hearts, Bubble Blast, Turbo Spin, pause), through the game's test hooks with
// Math.random seeded. Prints one JSON report.   node tools/screen3/r2_func.cjs <demo-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 538, height: 1076 } })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(() => {
    window.__BW_TEST__ = true; window.__BW_S3__ = ['round2'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  });
  const url = `http://localhost:${server.address().port}/index.html`;
  const fresh = async () => { await page.goto(url, { timeout: 300000, waitUntil: 'domcontentloaded' }); await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 }); };
  const out = {};
  await fresh();
  out.atStart = await page.evaluate(() => {
    const s = window.__bw.state(), vis = (id) => getComputedStyle(document.getElementById(id)).visibility;
    return { hearts: s.hearts, blasts: s.blasts, turbos: s.turbos, heartsText: document.getElementById('hearts').textContent, gear: vis('soundBtn'), pause: vis('pauseBtn'), blastBtn: vis('blastBtn'), turboBtn: vis('turboBtn'), hazards: window.__bw.hazards() };
  });

  // 1. Riding the left lane into every left brush: each knock takes one heart; with none left, back to Tap to Start, 5 hearts.
  out.hearts = await page.evaluate(() => {
    const bw = window.__bw; bw.tap(); const seq = []; let last = 5, outAt = null, back = null;
    for (let i = 0; i < 30 * 40; i++) {
      const s = bw.state();
      if (s.phase === 'running' && s.lane !== 0 && s.z > -10) bw.swipe('left');
      bw.advance(1 / 30, 30);
      const n = bw.state();
      if (n.hearts !== last) { seq.push({ t: n.time, z: n.z, lap: n.laps, hearts: n.hearts, heartsText: document.getElementById('hearts').textContent }); last = n.hearts; }
      if (n.hearts === 0 && outAt === null) outAt = { t: n.time, toast: getComputedStyle(document.getElementById('r2Toast')).opacity };
      if (outAt && n.phase === 'intro') { back = { t: n.time, after: +(n.time - outAt.t).toFixed(2), hearts: n.hearts, restarts: n.restarts, z: n.z, heartsText: document.getElementById('hearts').textContent, pauseBtn: getComputedStyle(document.getElementById('pauseBtn')).visibility }; break; }
    }
    return { seq, outAt, back, knocks: bw.state().knocks };
  });

  console.log('hearts', JSON.stringify(out.hearts));
  // 2. Pause: game time stands still while paused (also with the keyboard, P), and runs on after Resume.
  await fresh();
  out.pause = await page.evaluate(() => {
    const bw = window.__bw; bw.tap(); bw.advance(1.0);
    document.getElementById('pauseBtn').click();
    const t0 = bw.state().time, panel = !document.getElementById('pausePanel').hidden;
    bw.advance(2.0); const t1 = bw.state().time;
    document.getElementById('resumeBtn').click(); bw.advance(0.5); const t2 = bw.state().time;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' })); const kp = bw.state().paused; bw.advance(1.0); const t3 = bw.state().time;
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'p' })); const kr = bw.state().paused;
    return { panelShown: panel, timeWhilePaused: [t0, t1], runsAfterResume: t2 > t1, keyboardPause: kp, timeStillUnderKeyPause: t3 === t2, keyboardResume: !kr };
  });

  // 3. Bubble Blast before the first brush pair, then ride the left lane through it: no knock; counters and buttons.
  await fresh();
  out.blast = await page.evaluate(() => {
    const bw = window.__bw; bw.tap();
    while (bw.state().z < 1.5) bw.advance(1 / 30, 30);
    bw.swipe('left'); const used = bw.blast(); const after = bw.state();
    const hz = bw.hazards().filter((h) => h.u < 15);
    while (bw.state().z < 8.5) bw.advance(1 / 30, 30);
    const s = bw.state();
    return { used, blastsLeft: after.blasts, badge: document.getElementById('blastCount').textContent, clearedAhead: hz, knocksPassingClearedBrush: s.knocks, hearts: s.hearts, lane: s.lane };
  });
  out.blastEmpty = await page.evaluate(() => {
    const bw = window.__bw, r = [];
    for (let k = 0; k < 3; k++) { bw.advance(3.2); r.push(bw.blast()); }
    return { usedAgain: r, blasts: bw.state().blasts, buttonDisabled: document.getElementById('blastBtn').disabled, badge: document.getElementById('blastCount').textContent };
  });

  // 4. Turbo Spin: faster, and a brush cannot knock the mascot while it lasts.
  await fresh();
  out.turbo = await page.evaluate(() => {
    const bw = window.__bw; bw.tap();
    while (bw.state().z < 13.0) bw.advance(1 / 30, 30);
    const before = bw.state().speed; bw.swipe('right'); bw.turbo(); bw.advance(0.6); const during = bw.state().speed;
    while (bw.state().z < 18.0) bw.advance(1 / 30, 30);   // the right brush at 16.6 is in lane 2
    const s = bw.state();
    return { speedBefore: before, speedDuring: during, turbosLeft: s.turbos, knocks: s.knocks, hearts: s.hearts, badge: document.getElementById('turboCount').textContent };
  });
  out.logs = logs.length ? logs : 'no console errors or warnings';
  console.log(JSON.stringify(out, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
