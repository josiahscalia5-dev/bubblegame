// GL cost of real frames (8 November 2026): draw calls and triangles counted by wrapping WebGL's draw functions (as
// tools/screen3/s3_func.cjs does), at Tap to Start and at moments of an autopiloted run.
//   S3=intunnel,structmatch,level1 TIMES=0,3,8,20,40 node cost_probe.cjs <demo-dir>
const { chromium } = require('playwright'); const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2]; const S3 = (process.env.S3 || '').split(',').filter(Boolean), TIMES = (process.env.TIMES || '0').split(',').map(Number);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 412, height: 915 } })).newPage();
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    window.__gl = { calls: 0, tris: 0 };
    for (const P of [WebGL2RenderingContext.prototype, WebGLRenderingContext.prototype]) {
      const wrap = (name, tri) => { const f = P[name]; P[name] = function (...a) { window.__gl.calls++; window.__gl.tris += tri(a); return f.apply(this, a); }; };
      wrap('drawElements', (a) => a[1] / 3); wrap('drawArrays', (a) => a[2] / 3);
      wrap('drawElementsInstanced', (a) => a[1] / 3 * a[4]); wrap('drawArraysInstanced', (a) => a[2] / 3 * a[3]);
    }
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const cost = () => page.evaluate(() => { window.__gl.calls = 0; window.__gl.tris = 0; window.__bw.render(); return { calls: window.__gl.calls, tris: Math.round(window.__gl.tris), z: window.__bw.state().z }; });
  await page.evaluate(() => window.__bw.advance(0.5));
  const out = [];
  if (TIMES.includes(0)) out.push(['tap', await cost()]);
  await page.evaluate(() => window.__bw.tap());
  let since = 0;
  for (const t of TIMES.filter((x) => x > 0)) {
    while (since < t - 1e-6) { const d = Math.min(0.1, t - since);   // keep her alive: stay out of any brush's lane ahead
      await page.evaluate(() => { const st = window.__bw.state(), u = st.z, plan = window.__bwLevel1Plan ? window.__bwLevel1Plan() : { brushes: [], enemies: [], bars: [] };
        const hz = (window.__bw.hazards() || []).filter((h) => !h.cleared).map((h) => [h.u, h.side > 0 ? 0 : 2]); const b = [false, false, false];
        for (const [bu, bl] of [...plan.brushes, ...plan.enemies, ...hz]) { const d = bu - u; if (d > -0.6 && d < 6.5) b[bl] = true; }
        for (const bu of plan.bars) { const d = bu - u; if (d > 0.9 && d < 1.6 && !st.air) window.__bw.swipe('up'); }
        if (b[st.lane]) { const w = [1, 0, 2].find((l) => !b[l]); if (w < st.lane) window.__bw.swipe('left'); else if (w > st.lane) window.__bw.swipe('right'); } });
      await page.evaluate((x) => window.__bw.step(x), d); since += d; }
    out.push([t, await cost()]);
  }
  console.log(JSON.stringify({ s3: S3, cost: out }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
