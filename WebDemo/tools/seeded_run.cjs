// Did a change alter gameplay? Plays record.cjs's input script through the __bw hooks with Math.random
// seeded, and prints where the run ends and what it collected. Run it on two builds with the same seed:
// the results must match. (Coins bob with a random phase, so unseeded runs can differ by a coin.)
//   node tools/seeded_run.cjs <demo-dir> <seed>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, SEED] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const SCRIPT = [[2.0, 'tap'], [2.8, 'left'], [3.6, 'right'], [4.3, 'right'], [5.0, 'left'], [5.9, 'up'], [6.9, 'left'], [7.8, 'right'], [8.4, 'right'], [9.1, 'tap'], [9.6, 'left'], [10.7, 'left'], [11.5, 'up'], [12.3, 'right']];
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 300, height: 600 } })).newPage();
  await page.addInitScript((seed) => { window.__BW_TEST__ = true; let a = seed >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, +SEED);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  let t = 1 / 30;   // the page steps one frame on load
  for (const [at, a] of SCRIPT) {
    await page.evaluate((s) => window.__bw.advance(s), at - t); t = at;
    await page.evaluate((a) => (a === 'tap' ? window.__bw.tap() : window.__bw.swipe(a)), a);
  }
  const s = await page.evaluate((s) => window.__bw.advance(s), 13 - t);
  console.log(path.basename(path.dirname(ROOT)) + '/' + path.basename(ROOT), 'seed', SEED, JSON.stringify({ collected: s.collected, socks: s.socks, laps: s.laps, z: s.z, lane: s.lane, coins: s.coins, gems: s.gems }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
