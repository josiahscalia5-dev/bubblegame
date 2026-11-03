// Functional check of the real game (normal page, artwork on) with optional ?s3 switches: settings, Tap to Start,
// real pointer swipes (left, right, up = jump), the ride into the tunnel, keyboard start, console errors, and WebGL
// draw calls / triangles for one frame at Tap to Start and in the tunnel. Math.random seeded with 7.
//   S3=castle,entrance node s3_func.cjs <demo-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT] = process.argv.slice(2);
const S3 = (process.env.S3 || '').split(',').filter(Boolean);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
async function open(browser) {
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 } })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text()); });
  page.on('pageerror', (e) => logs.push(e.message));
  page.on('requestfailed', (r) => logs.push('request failed: ' + r.url()));
  await page.addInitScript((s3) => {
    window.__BW_TEST__ = true; if (s3.length) window.__BW_S3__ = s3; if (window.name === 'phaseA' || s3.includes('phaseA')) window.__BW_PHASE_A__ = true;
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    // count draw calls and triangles
    window.__gl = { calls: 0, tris: 0 };
    const P = WebGL2RenderingContext.prototype, mode = (m) => (m === 4 ? 1 : 0);
    const wrap = (name, triCount) => { const f = P[name]; P[name] = function (...a) { window.__gl.calls++; window.__gl.tris += triCount(a); return f.apply(this, a); }; };
    wrap('drawElements', (a) => mode(a[0]) * a[1] / 3);
    wrap('drawArrays', (a) => mode(a[0]) * a[2] / 3);
    wrap('drawElementsInstanced', (a) => mode(a[0]) * a[1] / 3 * a[4]);
    wrap('drawArraysInstanced', (a) => mode(a[0]) * a[2] / 3 * a[3]);
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready') || /could not load/.test(document.body.innerText), null, { timeout: 300000 });
  page.logs = logs;
  return page;
}
const frameCost = (page) => page.evaluate(() => { window.__gl.calls = 0; window.__gl.tris = 0; window.__bw.render(); return { drawCalls: window.__gl.calls, triangles: Math.round(window.__gl.tris) }; });
const st = (page) => page.evaluate(() => { const s = window.__bw.state(); return { phase: s.phase, lane: s.lane, air: s.air, z: s.z, coins: s.coins, gems: s.gems, collected: s.collected, socks: s.socks, sound: document.getElementById('soundBtn').getAttribute('aria-pressed') }; });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const R = { s3: S3 };
  let page = await open(browser);
  await page.evaluate(() => window.__bw.advance(0.5));
  R.s3Report = await page.evaluate(() => window.__bwS3 || null);
  R.costAtTapToStart = await frameCost(page);
  const box = await page.locator('#stage').boundingBox(), cx = box.x + box.width / 2, cy = box.y + box.height * 0.6;
  const gear = await page.locator('#soundBtn').boundingBox();
  await page.mouse.click(gear.x + gear.width / 2, gear.y + gear.height / 2); R.afterSettingsClick = await st(page);
  await page.mouse.click(gear.x + gear.width / 2, gear.y + gear.height / 2);
  await page.mouse.click(cx, box.y + box.height * 0.9); R.afterTap = await st(page);
  const swipe = async (dx, dy) => { await page.mouse.move(cx, cy); await page.mouse.down(); await page.mouse.move(cx + dx / 2, cy + dy / 2, { steps: 3 }); await page.mouse.move(cx + dx, cy + dy, { steps: 3 }); await page.mouse.up(); };
  await page.evaluate(() => window.__bw.advance(0.6));
  const lane0 = (await st(page)).lane;
  await swipe(-140, 0); await page.evaluate(() => window.__bw.advance(0.4)); R.afterSwipeLeft = { from: lane0, ...(await st(page)) };
  await swipe(140, 0); await page.evaluate(() => window.__bw.advance(0.4)); await swipe(140, 0); await page.evaluate(() => window.__bw.advance(0.4)); R.afterTwoSwipesRight = await st(page);
  await swipe(0, -160); await page.evaluate(() => window.__bw.advance(0.15)); R.afterSwipeUp = await st(page);
  await page.evaluate(() => window.__bw.advance(4.0)); R.inTunnel = await st(page);
  R.costInTunnel = await frameCost(page);
  R.logs = page.logs;
  await page.context().close();
  page = await open(browser);
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.keyboard.press('Enter'); R.keyboardStart = await st(page);
  R.logs2 = page.logs;
  console.log(JSON.stringify(R, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
