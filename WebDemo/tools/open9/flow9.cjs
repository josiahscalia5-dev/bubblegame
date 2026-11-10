// open9 (session d742a298): the REAL game from the Laundry Toss screen through the opening, the washer spin, the water passage and the hand-over
// into the live Screen 6, then Tap to Start and a few seconds of play with swipes. Frame by frame (seeded, software WebGL), so every frame is
// exactly what the game draws at that moment: the opening is stepped with its own clock (window.__bwO3D.seek) and, from the hand-over on, the
// live game underneath is stepped with the same step (window.__bw.advance), as tools/level1/record_flow.cjs does.
//   stills:    S3=<list> TIMES=7.4,9.0,... [STEP=0.05] [VW=432 VH=768 DPR=1 UI=0] flock /tmp/bw_browser.lock node flow9.cjs <WebDemo dir> <out dir>
//   recording: S3=<list> REC=1 FPS=20 [FROM=0 TO=99 PLAY=9] ... node flow9.cjs <WebDemo dir> <frames dir>      (then ffmpeg -> mp4)
// TIMES / FROM / TO are REAL seconds after START (-1 = the waiting Laundry Toss screen). After the opening the times simply run on (Tap to Start
// is tapped TAP seconds after the opening ends; the swipes of PLAYS follow). Prints a JSON report (states at each stage, console errors).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || '').split(',').filter(Boolean);
const VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1), REC = process.env.REC === '1', FPS = +(process.env.FPS || 20);
const STEP = REC ? 1 / FPS : +(process.env.STEP || 0.05), TIMES = (process.env.TIMES || '').split(',').filter(Boolean).map(Number);
const FROM = +(process.env.FROM || 0), PLAY = +(process.env.PLAY || 8), TAP = +(process.env.TAP || 1.2), WAITING = +(process.env.WAITING || 1.5);
// the play after the tap: [seconds after the tap, gesture]
const PLAYS = JSON.parse(process.env.PLAYS || '[[1.2,"left"],[2.6,"right"],[3.6,"right"],[5.0,"left"],[6.2,"tap"]]');
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webp': 'image/webp' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const T0 = Date.now(), log = (...a) => console.error(((Date.now() - T0) / 1000).toFixed(1) + 's', ...a);
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const logs = []; page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); }); page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message + ' ' + (e.stack || '').slice(0, 300)));
  await page.addInitScript((s3) => { if (s3.length) window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  const cond = () => ({ ready: document.body.classList.contains('ready'), hero: !!(window.__bwO3D && window.__bwO3D.state().heroReady), t2: !!(window.__bwTripo2 && window.__bwTripo2.ready), t3: !!(window.__bwTripo3 && window.__bwTripo3.ready) });
  for (let i = 0; i < 150; i++) { const c = await page.evaluate(cond); if (c.ready && c.hero && c.t2 && c.t3) break; if (i % 15 === 0) log(JSON.stringify(c), logs.slice(-2)); await page.waitForTimeout(2000); }
  log('ready');
  await page.addStyleTag({ content: `#recBadge { position: fixed; left: 50%; bottom: 21%; transform: translateX(-50%); z-index: 99999; padding: 5px 13px; border-radius: 99px; font: 700 15px system-ui, sans-serif; color: #fff; background: rgba(20,20,60,.72); border: 2px solid #fff; opacity: 0; pointer-events: none; white-space: nowrap; }` });
  await page.evaluate(() => { const b = document.createElement('div'); b.id = 'recBadge'; document.body.appendChild(b); });
  const badge = (txt) => page.evaluate((t) => { const b = document.getElementById('recBadge'); b.textContent = t; b.style.opacity = t ? '1' : '0'; }, txt);
  let n = 0; const report = { s3: S3, step: STEP, stages: [] };
  const save = async (name) => page.screenshot({ path: path.join(OUT, name), ...(name.endsWith('.jpg') ? { type: 'jpeg', quality: 90 } : {}), timeout: 240000 });
  const frame = async () => save(`f${String(n++).padStart(5, '0')}.jpg`);
  const play = await page.$('#bwHome .screen:not(.off) .go'); if (play) await play.click(); await page.waitForTimeout(600);
  if (process.env.UI === '0') await page.evaluate(() => { const h = document.getElementById('bwHome'); for (const c of h.children) if (c.tagName !== 'CANVAS') c.style.visibility = 'hidden'; });
  const times = TIMES.slice().sort((a, b) => a - b), want = (t) => times.length && Math.abs(times[0] - t) < STEP / 2 + 1e-6;
  // the waiting Laundry Toss screen
  let idle = 4.5; await page.evaluate((x) => window.__bwO3D.seek(x, -1), idle);
  if (REC && FROM <= 0) for (let i = 0; i < Math.round(WAITING * FPS); i++) { idle += STEP; await page.evaluate(([x, d]) => window.__bwO3D.seek(x, -1, d), [idle, STEP]); await frame(); }
  while (times.length && times[0] < 0) { await page.waitForTimeout(200); await save(`t_${times.shift().toFixed(2)}.png`); }
  // START
  const b = (await page.$('#bwHome .s6bar .startgo')) || (await page.$('#bwHome .screen:not(.off) .go')); if (b && process.env.UI !== '0') { if (REC) { await badge('tap START'); } await b.click(); }
  const O = await page.evaluate(() => ({ hand: window.__bwSix2 ? window.__bwSix2.handOver : 9, end: window.__bwSix2 ? window.__bwSix2.seqEnd : 10 }));
  report.opening = O;
  const TO = Math.min(+(process.env.TO || 1e9), REC ? O.end + TAP + PLAY : Math.max(...TIMES, 0) + 1e-6);
  let s = 0, tapped = null, gi = 0, badgeT = REC ? 0.7 : 0, last = '';
  const until = REC ? TO : (times.length ? times[times.length - 1] : 0);
  while (s < until - 1e-6) {
    // before the first wanted time (stills only) the opening is stepped coarsely
    const coarse = !REC && times.length && times[0] - s > 0.5 ? Math.min(0.1, times[0] - 0.3 - s) : 0, d = coarse > 0.02 ? coarse : STEP; s += d;
    const st = await page.evaluate(([idle0, s, d, hand]) => { const h = document.getElementById('bwHome'); if (h && window.__bwO3D) window.__bwO3D.seek(idle0 + s, s, d); if (s >= hand) window.__bw.advance(d, Math.max(30, Math.round(1 / d)));
      const g = window.__bw.state(); return { home: !!document.getElementById('bwHome'), phase: g.phase, z: g.z, lane: g.lane, coins: g.coins }; }, [idle + 1.5, s, d, O.hand]);
    if (!st.home && tapped === null && s >= O.end + TAP) { tapped = s; await page.evaluate(() => window.__bw.tap()); if (REC) { await badge('tap to start'); badgeT = 0.7; } report.stages.push(['tap', +s.toFixed(2), st]); }
    if (tapped !== null) while (gi < PLAYS.length && s - tapped >= PLAYS[gi][0]) { const g = PLAYS[gi++][1]; await page.evaluate((g) => (g === 'tap' ? window.__bw.tap() : window.__bw.swipe(g)), g); if (REC) { await badge(g === 'tap' ? 'tap: spin' : g === 'left' ? '◀ swipe left' : g === 'right' ? 'swipe right ▶' : 'swipe ' + g); badgeT = 0.6; } report.stages.push([g, +s.toFixed(2)]); }
    if (badgeT > 0 && (badgeT -= d) <= 0) await badge('');
    const stage = st.home ? (s < O.hand ? 'opening' : 'passage opens onto the game') : st.phase; if (stage !== last) { last = stage; report.stages.push([stage, +s.toFixed(2), st]); log(stage, s.toFixed(2)); }
    if (REC) { if (s >= FROM) await frame(); }
    else while (want(s)) { await page.waitForTimeout(150); const t = times.shift(); await save(`t_${t.toFixed(2)}.png`); log('shot', t); }
  }
  report.final = await page.evaluate(() => { const g = window.__bw.state(); return { phase: g.phase, z: g.z, lane: g.lane, coins: g.coins, speed: g.speed, camera: g.camera, home: !!document.getElementById('bwHome') }; });
  report.frames = n; report.errors = logs.slice(0, 10);
  fs.writeFileSync(path.join(OUT, 'flow9_report.json'), JSON.stringify(report, null, 1)); console.log(JSON.stringify(report));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
