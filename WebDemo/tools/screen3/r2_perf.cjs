// Frame cost of the game with and without the ?s3 switches: WebGL draw calls and triangles for one frame (counted by
// wrapping the draw functions), and three.js's count of geometries, textures and shader programs. Math.random seeded with 7;
// the mascot runs down the middle lane.
//   CONFIGS='normal;paint,tunnel;round2' POINTS=5,11,20,30 node r2_perf.cjs <demo-dir>
// No times: with software WebGL (SwiftShader) the drawing is queued and finished later, so a timer around a frame measured
// anything from 1 ms to 8 s for the same scene. Draw calls and triangles are the numbers that carry over to a phone.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT] = process.argv.slice(2);
const CONFIGS = (process.env.CONFIGS || 'normal;paint,tunnel;round2').split(';');
const POINTS = (process.env.POINTS || '5,11,20,30').split(',').map(Number);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const out = {};
  for (const cfg of CONFIGS) {
    const s3 = cfg === 'normal' ? [] : cfg.split(',');
    const page = await (await browser.newContext({ viewport: { width: 538, height: 1076 } })).newPage();
    const logs = [];
    page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 200)); });
    page.on('pageerror', (e) => logs.push(e.message));
    await page.addInitScript((s3) => {
      window.__BW_TEST__ = true; if (s3.length) window.__BW_S3__ = s3;
      let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
      window.__gl = { calls: 0, tris: 0 };
      const P = WebGL2RenderingContext.prototype, mode = (m) => (m === 4 ? 1 : 0);
      const wrap = (name, triCount) => { const f = P[name]; P[name] = function (...a) { window.__gl.calls++; window.__gl.tris += triCount(a); return f.apply(this, a); }; };
      wrap('drawElements', (a) => mode(a[0]) * a[1] / 3);
      wrap('drawArrays', (a) => mode(a[0]) * a[2] / 3);
      wrap('drawElementsInstanced', (a) => mode(a[0]) * a[1] / 3 * a[4]);
      wrap('drawArraysInstanced', (a) => mode(a[0]) * a[2] / 3 * a[3]);
    }, s3);
    await page.goto(`http://localhost:${server.address().port}/index.html`);
    await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
    const measure = (label) => page.evaluate((label) => {
      const d = window.__bw.debug(), info = d.renderer.info;
      window.__bw.render();   // warm-up (shaders compiled)
      window.__gl.calls = 0; window.__gl.tris = 0; window.__bw.render();
      const calls = window.__gl.calls, tris = Math.round(window.__gl.tris);
      const s = window.__bw.state();
      return { at: label, z: s.z, drawCalls: calls, triangles: tris, geometries: info.memory.geometries, textures: info.memory.textures, programs: info.programs.length };
    }, label);
    const rows = [await measure('Tap to Start')];
    await page.evaluate(() => window.__bw.tap());
    for (const z of POINTS) {
      for (let i = 0; i < 600; i++) { const s = await page.evaluate(() => window.__bw.advance(1 / 30, 30)); if (s.z >= z || s.laps > 0) break; }
      rows.push(await measure('z ' + z));
    }
    out[cfg] = { rows, logs };
    console.log(cfg, JSON.stringify(out[cfg]));
    await page.context().close();
  }
  fs.writeFileSync(process.env.OUT || '/dev/null', JSON.stringify(out, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
