// brush6 captures (lane brush6, session 3849f5c8): several brush variants and moments of the REAL game from ONE page load (the browser lock is
// shared by five agents). Built on tools/s56/shots56.cjs's seeded set-up (seed 7, __BW_TEST__, the opening art off) and its `206` placement.
//   SHOTS='[{"tag":"pull","z":206,"pre":"B6.pull.on=1","fit":1},{"tag":"rot1","dt":0.1},{"tag":"tap","z":"tap"}]'
//   S3=intunnel,...,s56,brush6 VW=432 VH=768 DPR=1 flock /tmp/bw_browser.lock node tools/brush6/shots_b6.cjs <ABS WebDemo> <out dir>
// Each shot: z (a track distance: him placed there and run 0.4 s as shots56 does; "tap": Tap to Start, only as the FIRST shot; absent: no
// re-placement, the game just runs `dt` more seconds, for rotation moments), pre (JS run first, B6 = window.__bwBrush6, then B6.place()),
// fit (1: tools/brush6/fit_eval.js re-fits the anchor pair; 0: it only measures and reports), dt (seconds to run before the shot).
// Writes <out>/b6_<tag>.png and prints every shot's fit / measures / draw report (BRUSH6.report) as JSON.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,brush6').split(',').filter(Boolean);
const SHOTS = JSON.parse(process.env.SHOTS || '[{"tag":"206","z":206}]'), LANE = +(process.env.LANE ?? 1);
const VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1), WAIT = +(process.env.WAIT || 2.5);
const FIT = fs.readFileSync(path.join(__dirname, 'fit_eval.js'), 'utf8');
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
  const errs = []; page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 300)); }); page.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 }); log('ready');
  await page.evaluate((w) => new Promise((r) => setTimeout(r, w * 1000)), WAIT);
  const out = []; let started = false;
  for (const sh of SHOTS) {
    const info = await page.evaluate(({ sh, LANE, started, FIT }) => {
      const B = window.__bw, d = B.debug(), B6 = window.__bwBrush6;
      if (sh.pre && B6) { (new Function('B6', 'd', 'B', sh.pre))(B6, d, B); B6.place(); }
      if (sh.z === 'tap') B.advance(1.0);
      else if (sh.z !== undefined) { if (!started) { B.tap(); B.step(0.3); } const m = d.mascotState; m.z = +sh.z - 1.0; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.step(1.0 / 7.2, 30); m.z = +sh.z; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.advance(0.4); }
      let ev = null;
      if (B6 && sh.z !== 'tap') { window.__b6NoFit = sh.fit ? 0 : 1; ev = (new Function('d', 'scene', 'B', FIT))(d, d.scene, B); }
      B.advance(sh.dt || 1 / 30);
      const st = B.state();
      return { tag: sh.tag, state: { phase: st.phase, z: st.z, x: st.x }, eval: ev, drawnAtShot: B6 && B6.report ? B6.report(d.camera) : null, parts: (window.__bwS56Report || {}).parts, s56errors: (window.__bwS56Report || {}).errors };
    }, { sh, LANE, started, FIT });
    if (sh.z !== undefined && sh.z !== 'tap') started = true;
    await page.waitForTimeout(150);
    await page.screenshot({ path: path.join(OUT, `b6_${sh.tag}.png`), timeout: 300000 }); log('shot', sh.tag);
    out.push(info);
  }
  console.log(JSON.stringify({ errors: errs.slice(0, 10), S3, shots: out }, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
