// rect_probe.cjs <demo dir> [WxH] : which object draws the pale rectangle under the mission banner (the user's checkpoint 07).
// The real game on an emulated Pixel 7 (?s3=match, seed 7, Tap to Start then 3.0 s, as phone_shot.cjs). Lists every visible
// mesh whose projected bounding box covers the probe points, then hides each candidate in turn and reports how much the
// pixels at the probe points change (read straight from the WebGL canvas after a render).
const { chromium, devices } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, VIEW] = process.argv.slice(2);
const DEV = { ...devices['Pixel 7'] };
if (VIEW) { const [w, h] = VIEW.split('x').map(Number); DEV.viewport = { width: w, height: h }; }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
// probe points in screen CSS px (the rectangle found in the 14:25 capture: x 149-293, y 145-170)
const PTS = [[175, 158], [220, 157], [265, 158], [220, 150], [220, 166]];
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext(DEV)).newPage();
  await page.addInitScript(() => { window.__BW_S3__ = ['match']; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate(() => window.__bw.advance(3.0));
  const out = await page.evaluate((PTS) => {
    const d = window.__bw.debug(), { scene, camera, renderer } = d;
    const cv = renderer.domElement, r = cv.getBoundingClientRect(), gl = renderer.getContext();
    const ndc = PTS.map(([x, y]) => [((x - r.left) / r.width) * 2 - 1, 1 - ((y - r.top) / r.height) * 2]);
    const render = () => { if (d.composer) d.composer.render(); else renderer.render(scene, camera); };
    const read = () => { render(); const px = new Uint8Array(4);
      return ndc.map(([nx, ny]) => { gl.readPixels(Math.round((nx + 1) / 2 * gl.drawingBufferWidth), Math.round((ny + 1) / 2 * gl.drawingBufferHeight), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px); return [px[0], px[1], px[2]]; }); };
    const V = camera.position.constructor;
    const cands = [];
    scene.updateMatrixWorld(true);
    scene.traverseVisible((o) => {
      if (!(o.isMesh || o.isPoints || o.isSprite) || !o.geometry) return;
      const g = o.geometry; if (!g.boundingBox) g.computeBoundingBox(); const b = g.boundingBox; if (!b || !isFinite(b.min.x)) return;
      let x0 = 9, x1 = -9, y0 = 9, y1 = -9, front = false;
      for (let i = 0; i < 8; i++) {
        const p = new V(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(o.matrixWorld);
        const c = p.clone().applyMatrix4(camera.matrixWorldInverse); if (c.z < 0) front = true;
        p.project(camera); x0 = Math.min(x0, p.x); x1 = Math.max(x1, p.x); y0 = Math.min(y0, p.y); y1 = Math.max(y1, p.y);
      }
      if (!front) return;
      if (o.frustumCulled === false || o.isPoints) { x0 = Math.min(x0, -1); x1 = Math.max(x1, 1); y0 = Math.min(y0, -1); y1 = Math.max(y1, 1); }
      if (ndc.some(([nx, ny]) => nx >= x0 && nx <= x1 && ny >= y0 && ny <= y1)) cands.push(o);
    });
    const base = read(), res = [];
    for (const o of cands) {
      o.visible = false; const px = read(); o.visible = true;
      const diff = px.reduce((s, p, i) => s + Math.abs(p[0] - base[i][0]) + Math.abs(p[1] - base[i][1]) + Math.abs(p[2] - base[i][2]), 0) / px.length;
      const m = Array.isArray(o.material) ? o.material[0] : o.material;
      res.push({ name: o.name || '(unnamed)', parent: o.parent && o.parent.name, type: o.type, mat: m && (m.name || m.type), renderOrder: o.renderOrder,
        pos: o.getWorldPosition(new V()).toArray().map((v) => +v.toFixed(2)), diff: +diff.toFixed(1), hidden: px });
    }
    res.sort((a, b) => b.diff - a.diff);
    return { canvas: [r.left, r.top, r.width, r.height], base, n: cands.length, top: res.slice(0, 12) };
  }, PTS);
  console.log(JSON.stringify(out, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
