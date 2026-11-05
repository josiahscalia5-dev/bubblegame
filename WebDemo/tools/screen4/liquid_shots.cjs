// Screen 4 liquid pass: seeded gameplay frames (Math.random seed 7, the 538 x 1076 game area, real taps and game time) at
// each time in TIMES, saved as the page (HUD on, after the HUD's CSS fades settle) and, with CANVAS=1, as the raw 3D canvas.
//   S3=liquid,nofoam TIMES=2.85,3.0,3.1 [DPR=1.5] [CANVAS=1] node tools/screen4/liquid_shots.cjs <abs WebDemo> <out-dir> ['<tune json>' | tune.json]
// Files: <out>/<label>_t2.85.png (page) and <label>_t2.85_canvas.png; label = LABEL or the S3 list joined with '+'.
// With COST=1 it also counts WebGL draw calls and triangles of one frame at each time (and textures, programs in use).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TUNE_ARG = '{}'] = process.argv.slice(2);
const TUNE = TUNE_ARG.endsWith('.json') ? fs.readFileSync(TUNE_ARG, 'utf8') : TUNE_ARG;   // tune JSON, or a file holding it
const S3 = (process.env.S3 || '').split(',').filter(Boolean), TIMES = (process.env.TIMES || '2.85').split(',').map(Number);
const LABEL = process.env.LABEL || (S3.join('+') || 'normal');
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1) })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 600)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(([tune, s3, cost]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = JSON.parse(tune);
    window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    if (cost) {
      window.__gl = { calls: 0, tris: 0 };
      const P = WebGL2RenderingContext.prototype, mode = (m) => (m === 4 ? 1 : 0);
      const wrap = (name, triCount) => { const f = P[name]; P[name] = function (...a) { window.__gl.calls++; window.__gl.tris += triCount(a); return f.apply(this, a); }; };
      wrap('drawElements', (a) => mode(a[0]) * a[1] / 3);
      wrap('drawArrays', (a) => mode(a[0]) * a[2] / 3);
      wrap('drawElementsInstanced', (a) => mode(a[0]) * a[1] / 3 * a[4]);
      wrap('drawArraysInstanced', (a) => mode(a[0]) * a[2] / 3 * a[3]);
    }
  }, [TUNE, S3, !!process.env.COST]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  const out = { s3: S3, frames: [] };
  const canvasShot = async (file) => { const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); }); fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64')); };
  if (TIMES.includes(0)) {
    await page.waitForTimeout(+(process.env.SETTLE || 800));
    await page.screenshot({ path: path.join(OUT, `${LABEL}_tap.png`), clip: await page.locator('#stage').boundingBox() });
    if (process.env.CANVAS) await canvasShot(path.join(OUT, `${LABEL}_tap_canvas.png`));
  }
  await page.evaluate(() => window.__bw.tap());
  let since = 0;
  for (const T of TIMES.filter((t) => t > 0)) {
    await page.evaluate((d) => window.__bw.advance(d), T - since); since = T;
    await page.waitForTimeout(+(process.env.SETTLE || 800));
    const f = { t: T, state: await page.evaluate(() => window.__bw.state()) };
    await page.screenshot({ path: path.join(OUT, `${LABEL}_t${T.toFixed(2)}.png`), clip: await page.locator('#stage').boundingBox() });
    if (process.env.CANVAS) await canvasShot(path.join(OUT, `${LABEL}_t${T.toFixed(2)}_canvas.png`));
    if (process.env.COST) f.cost = await page.evaluate(() => { window.__gl.calls = 0; window.__gl.tris = 0; window.__bw.render(); const r = window.__bw.debug().renderer.info;
      return { drawCalls: window.__gl.calls, triangles: Math.round(window.__gl.tris), textures: r.memory.textures, geometries: r.memory.geometries, programs: r.programs ? r.programs.length : null }; });
    out.frames.push(f);
  }
  out.report = await page.evaluate(() => { const r = window.__bwS3; try { return JSON.parse(JSON.stringify(r)); } catch (e) { return String(e); } });
  fs.writeFileSync(path.join(OUT, `${LABEL}_info.json`), JSON.stringify(out, null, 1));
  console.log(JSON.stringify(out.frames.map((f) => ({ t: f.t, z: f.state.z, x: f.state.x, cost: f.cost }))));
  console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
