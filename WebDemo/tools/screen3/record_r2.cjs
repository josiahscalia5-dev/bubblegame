// Recording of the ?s3=round2 test (painted opening, polished tunnel, Screen 4 controls): a copy of record_s3.cjs with real
// clicks on the HUD buttons as well as real swipes. Usage: node tools/screen3/record_r2.cjs <demo-dir> <out-dir> [seconds] [game|dry]
// Script actions: tap, left, right, up, click:<element id> (a real mouse click at the middle of that button).
// Record real gameplay from Chromium. The game is stepped at exactly 30 frames per game-second and
// every frame is captured, so the video plays at true game speed even though this machine renders
// WebGL in software. Every input is a real pointer gesture on the game stage (press, drag, release),
// the same events a finger makes on a phone, so the recording also proves the swipe handling.
//
//   [ROLLER=1|2] node tools/record.cjs <demo-dir> <out-dir> [seconds=13] [game|side|dry]   (ROLLER: a roller candidate, opening.js)
//     game: the player's view, with each finger trail and the gesture it was read as (?touches)
//     side: the same run seen from the side, camera fixed in height (?side), proving the real climbs
//     dry:  no screenshots; prints the state at each scripted input (for tuning the script)
// Frames are written as JPEGs plus track.json (the game state every frame).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, SECONDS = '16', MODE = 'game'] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
// One continuous run: Tap to Start, steer down the slide and over its crest, into the portal, jump
// on the climb, steer through the banked left turn at the top, drop and turn right, spin, loop back.
const SCRIPT = JSON.parse(process.env.SCRIPT || 'null') || [ // [trigger, action]
  [1.0, 'tap'],
  ['z9.7', 'left'],                                  // after the first sock (middle), into the left lane: coins and the second sock
  ['z14.3', 'click:pauseBtn'], ['+1.4', 'click:resumeBtn'],   // pause, then resume
  ['+0.05', 'right'],                                // the gem and two coins in the middle
  ['z17.9', 'left'],                                 // back to the left, into the next brush: a knock costs one heart
  ['z18.9', 'right'], ['+0.25', 'right'],            // on to the right lane: coins and the third sock
  ['z22.4', 'click:blastBtn'],                       // Bubble Blast: the brush pair ahead is pushed back to the walls
  ['z27.4', 'left'],                                 // safely past the cleared right brush, to the middle and the fourth sock
  ['z29.0', 'click:turboBtn'], ['+0.1', 'left'],     // Turbo Spin, the left coin line, the fifth sock and the last gem
];
(async () => {
  await new Promise((r) => server.listen(0, r));
  fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY, bypass: 'localhost,127.0.0.1' } : undefined;
  // The player's view is an exact 1:2 stage (538 x 1076), the same portrait shape as the approved screens.
  const viewport = MODE === 'side' ? { width: 960, height: 540 } : { width: 700, height: 1076 };
  const page = await (await browser.newContext({ viewport, ignoreHTTPSErrors: true, proxy })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.addInitScript(([mode, roller, s3, artOff]) => { window.__BW_TEST__ = true; window.__BW_S3__ = s3; let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; window.__BW_OPENING_OFF__ = artOff ? ['art'] : undefined; window.__BW_TOUCHES__ = false; window.__BW_SIDE__ = mode === 'side'; if (roller) window.__BW_ROLLER__ = roller; }, [MODE, process.env.ROLLER || '', (process.env.S3 || 'round2').split(',').filter(Boolean), process.env.ART_OFF === '1']);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => document.fonts.ready);
  const box = await page.locator('#stage').boundingBox();
  const clip = { x: Math.round(box.x), y: Math.round(box.y), width: Math.round(box.width), height: Math.round(box.height) };
  const cx = box.x + box.width / 2, cy = box.y + box.height * 0.62;
  // A gesture is a list of pointer steps, one per frame, so its trail appears across frames like a real swipe.
  // The first drag step (70 px) passes the swipe threshold in both views, so both recordings react on the same frame.
  const gestures = {
    tap: [['move', cx, cy], ['down'], ['up']],
    left: [['move', cx + 60, cy], ['down'], ['move', cx - 10, cy + 4], ['move', cx - 55, cy + 6], ['move', cx - 90, cy + 7], ['up']],
    right: [['move', cx - 60, cy], ['down'], ['move', cx + 10, cy + 4], ['move', cx + 55, cy + 6], ['move', cx + 90, cy + 7], ['up']],
    up: [['move', cx, cy + 60], ['down'], ['move', cx + 3, cy - 10], ['move', cx + 5, cy - 55], ['move', cx + 6, cy - 90], ['up']],
  };
  const frames = Math.round(parseFloat(SECONDS) * 30), track = [];
  let next = 0, queue = [], lastS = null, firedAt = 0;
  const t0 = Date.now();
  for (let f = 0; f < frames; f++) {
    const t = f / 30;
    // a trigger is a recording second (number), 'z<metres>' (when the mascot reaches that point on the first lap) or
    // '+<seconds>' (that long after the action before it)
    const due = (w) => typeof w === 'number' ? w <= t + 1e-6 : w[0] === 'z' ? (lastS && lastS.laps === 0 && lastS.z >= parseFloat(w.slice(1))) : t + 1e-6 >= firedAt + parseFloat(w.slice(1));
    while (next < SCRIPT.length && due(SCRIPT[next][0])) {
      const a = SCRIPT[next++][1]; firedAt = t;
      if (a === 'look' || a === 'unlook') await page.evaluate((v) => window.__bw.lookBack(v), a === 'look' ? 1 : 0);
      else if (a.startsWith('click:')) {
        const b = await page.locator('#' + a.slice(6)).boundingBox();
        if (MODE === 'dry') console.log(`t=${t.toFixed(2)} ${a.padEnd(16)}`, JSON.stringify(await page.evaluate(() => { const s = window.__bw.state(); return { z: s.z, lane: s.lane, hearts: s.hearts, blasts: s.blasts, turbos: s.turbos, paused: s.paused }; })));
        await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
      } else {
        // Steps before the first drag (move to start, press) happen now; each drag step takes one frame.
        const steps = gestures[a].map((s) => s.slice());
        if (MODE === 'dry') console.log(`t=${t.toFixed(2)} ${a.padEnd(6)}`, JSON.stringify(await page.evaluate(() => { const s = window.__bw.state(); return { z: s.z, lane: s.lane, x: s.x, speed: s.speed, socks: s.socks, coins: s.collected.coins, gems: s.collected.gems, hearts: s.hearts, knocks: s.knocks, laps: s.laps }; })));
        queue.push(...steps.map((s, i) => ({ s, now: a === 'tap' || i <= 1 })));   // a tap is pressed and released at once (under 400 ms)
      }
    }
    // Run the immediate steps, then at most one drag/release step for this frame.
    while (queue.length && queue[0].now) await run(queue.shift().s);
    if (queue.length) await run(queue.shift().s);
    const s = await page.evaluate(() => window.__bw.advance(1 / 30, 30));
    track.push(s); lastS = s;
    if (MODE !== 'dry') await page.screenshot({ path: path.join(OUT, `f${String(f).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 90, clip });
  }
  async function run(s) {
    if (s[0] === 'move') await page.mouse.move(s[1], s[2]);
    else if (s[0] === 'down') await page.mouse.down();
    else if (s[0] === 'up') await page.mouse.up();
  }
  fs.writeFileSync(path.join(OUT, 'track.json'), JSON.stringify(track));
  const ys = track.map((s) => s.world[1]);
  console.log(JSON.stringify({ end: track[track.length - 1] }));
  console.log(`recorded ${frames} frames (${MODE}) in ${((Date.now() - t0) / 1000).toFixed(0)} s; world height ${Math.min(...ys).toFixed(2)}..${Math.max(...ys).toFixed(2)} m; lanes visited ${[...new Set(track.map((s) => s.lane))].join(',')}; laps ${track[track.length - 1].laps}; socks collected ${track[track.length - 1].collected.socks || 0}`);
  console.log(logs.join('\n') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
