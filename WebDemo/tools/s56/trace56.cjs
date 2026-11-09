// s56 motion trace (lane s56, session d847dce2): seeded Tap to Start, then the run with scripted swipes and a jump, one sample per 1/30 s:
// the game's state (x, yAbs, z, lane, speed, air, coins, socks, hearts) and his DRAWN ride on the water (m.tilt.position.y, tilt rotation),
// plus the s56 wave height under him. Two builds' gameplay fields must be identical; the drawn fields show the bob follows the waves.
//   flock /tmp/bw_browser.lock node trace56.cjs <ABSOLUTE WebDemo dir> <out.json>     [S3=... SECS=6]
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUTF] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56').split(',').filter(Boolean), SECS = +(process.env.SECS || 6);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webp': 'image/webp' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 216, height: 384 }, deviceScaleFactor: 1 })).newPage();
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 2500)));
  const out = await page.evaluate((SECS) => {
    const B = window.__bw, d = B.debug(), m = d.mascotState, rows = [];
    B.advance(1.0); B.tap();
    const acts = { 30: 'left', 60: 'right', 75: 'right', 105: 'up', 140: 'left', 170: 'up' };
    for (let i = 0; i < SECS * 30; i++) {
      if (acts[i]) B.swipe(acts[i]);
      B.step(1 / 30);
      const s = B.state();
      rows.push({ i, x: s.x, y: s.y, z: s.z, lane: s.lane, speed: s.speed, air: s.air, coins: s.coins, socks: s.socks, hearts: s.hearts,
        root: s.world, tiltY: +m.tilt.position.y.toFixed(4), tiltRX: +m.tilt.rotation.x.toFixed(4), tiltRZ: +m.tilt.rotation.z.toFixed(4) });
    }
    return rows;
  }, SECS);
  fs.writeFileSync(OUTF, JSON.stringify(out));
  console.log('rows', out.length);
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
