// Pause, Bubble Blast and Turbo Spin on the ccr build (r2_func's later sections hang on its same-page reload, in
// the old session's runs too; this checks the same functions on a fresh page). Seed 7, ?s3=intunnel,structmatch,level1.
//   node abilities_probe.cjs <demo-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 135, height: 270 } })).newPage();
  const logs = []; page.on('pageerror', (e) => logs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 200)); });
  await page.addInitScript(() => { window.__BW_TEST__ = true; window.__BW_S3__ = ['intunnel', 'structmatch', 'level1'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html`, { timeout: 300000 });
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const r = await page.evaluate(() => {
    const bw = window.__bw, S = () => bw.state(), o = {};
    bw.tap(); bw.advance(1.0); o.running = S().phase;
    document.getElementById('pauseBtn').click(); const t0 = S().time; o.pausePanel = !document.getElementById('pausePanel').hidden; bw.advance(2.0); o.timeFrozenWhilePaused = S().time === t0;
    document.getElementById('resumeBtn').click(); bw.advance(0.5); o.runsAfterResume = S().time > t0;
    const b0 = S().blasts; bw.blast(); bw.advance(0.3); o.bubbleBlast = { before: b0, after: S().blasts };
    const u0 = S().turbos; bw.turbo(); bw.advance(0.3); o.turboSpin = { before: u0, after: S().turbos, speed: +S().speed.toFixed(2) };
    // (tap-to-spin is not checked: the game state does not expose the spin, mascot.spinLeft is internal)
    o.final = { phase: S().phase, hearts: S().hearts, coins: S().coins, socks: S().socks, gems: S().gems };
    return o;
  });
  console.log(JSON.stringify({ ...r, errors: logs }, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
