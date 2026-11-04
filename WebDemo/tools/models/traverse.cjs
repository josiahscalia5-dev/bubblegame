// Traversal test: the real game (seed 7) ridden from Tap to Start through the whole drum, in each lane, jumping every
// 0.8 s and with Turbo Spin / Bubble Blast unused, plus a run weaving across all lanes. Records the furthest point
// reached, whether the run looped back (reached the drum's end), the body's and camera's reach from the tube's axis,
// knocks by brushes and hearts. Uses only the game's own test hooks (swipe, advance, clearanceTrace).
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
  const results = {};
  for (const plan of ['lane0', 'lane1', 'lane2', 'weave']) {
    const page = await (await browser.newContext({ viewport: { width: 538, height: 1076 } })).newPage();
    const logs = []; page.on('pageerror', (e) => logs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); });
    await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true;
      let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, (process.env.S3 || 'round3').split(','));
    await page.goto(`http://localhost:${server.address().port}/index.html`);
    await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
    const r = await page.evaluate(async (plan) => {
      const bw = window.__bw; bw.advance(0.5); bw.tap();
      const lane = plan === 'weave' ? null : +plan.slice(4);
      if (lane === 0) bw.swipe('left'); if (lane === 2) bw.swipe('right');
      let maxZ = -99, body = 0, cam = 0, back = 0, lastZ = -99, stuck = 0, t = 0, weaveDir = 'left';
      const start = bw.state();
      for (let i = 0; i < 400; i++) {
        const tr = bw.clearanceTrace(0.1);
        for (const f of tr) { if (f.body) body = Math.max(body, f.body); if (f.camera) cam = Math.max(cam, f.camera); }
        const s = bw.state(); t += 0.1;
        if (s.laps > start.laps) return { reachedEnd: true, maxZ: +maxZ.toFixed(2), seconds: +t.toFixed(1), bodyMaxFromAxis: +body.toFixed(3), cameraMaxFromAxis: +cam.toFixed(3), stuckFrames: stuck, wentBack: back, hearts: s.hearts, knocks: s.knocks, coins: s.collected, socks: s.socks, lane: s.lane };
        if (s.z < lastZ - 0.01) back++; if (Math.abs(s.z - lastZ) < 0.01 && s.phase === 'running') stuck++;
        lastZ = s.z; maxZ = Math.max(maxZ, s.z);
        if (i % 8 === 4) bw.swipe('up');                       // a jump every 0.8 s
        if (lane === null && i % 6 === 0) { bw.swipe(weaveDir); if (s.lane === 0) weaveDir = 'right'; if (s.lane === 2) weaveDir = 'left'; }
        if (s.phase !== 'running') return { reachedEnd: false, maxZ, phase: s.phase, seconds: t, hearts: s.hearts };
      }
      return { reachedEnd: false, maxZ, seconds: t };
    }, plan);
    r.errors = logs; results[plan] = r; console.log(plan, JSON.stringify(r));
    await page.context().close();
  }
  if (process.env.OUT) fs.writeFileSync(process.env.OUT, JSON.stringify(results, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
