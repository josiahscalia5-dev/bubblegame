// node tools/trace.cjs <demo-dir> <out.json> [seed=7] -- plays the recording's script via the hooks with seeded
// Math.random and stores the state every frame (30 fps) for 13 s: position, lane, speed, air, camera, counts.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, SEED = '7'] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const SCRIPT = [[0.5, 'look'], [1.5, 'unlook'], [2.0, 'tap'], [2.8, 'left'], [3.6, 'right'], [4.3, 'right'], [5.0, 'left'],
  [5.9, 'up'], [6.9, 'left'], [7.8, 'right'], [8.4, 'right'], [9.1, 'tap'], [9.6, 'left'], [10.7, 'left'], [11.5, 'up'], [12.3, 'right']];
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 300, height: 600 } })).newPage();
  const logs = [];
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  await page.addInitScript((seed) => { window.__BW_TEST__ = true; let a = seed >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, +SEED);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const frames = await page.evaluate((script) => {
    const bw = window.__bw, out = [];
    let next = 0;
    for (let f = 0; f < 13 * 30; f++) {
      const t = f / 30;
      while (next < script.length && script[next][0] <= t + 1e-6) {
        const a = script[next++][1];
        if (a === 'look') bw.lookBack(1); else if (a === 'unlook') bw.lookBack(0); else if (a === 'tap') bw.tap(); else bw.swipe(a);
      }
      const s = bw.advance(1 / 30, 30);
      out.push({ f, phase: s.phase, z: s.z, x: s.x, y: s.y, world: s.world, lane: s.lane, speed: s.speed, air: s.air, camera: s.camera, cameraUp: s.cameraUp,
        coins: s.coins, gems: s.gems, socks: s.socks, laps: s.laps, collected: s.collected });
    }
    return out;
  }, SCRIPT);
  fs.writeFileSync(OUT, JSON.stringify(frames));
  const L = frames[frames.length - 1];
  console.log(path.basename(OUT), 'seed', SEED, 'frames', frames.length, JSON.stringify({ collected: L.collected, laps: L.laps, z: L.z, coins: L.coins, gems: L.gems }));
  console.log(logs.join('\n') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
