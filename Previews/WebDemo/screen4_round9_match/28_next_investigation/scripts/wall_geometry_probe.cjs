// INVESTIGATION: the heroWalls vertices at the seed 7, 3.0 s frame (focus): each vertex projected to the screen (radius r in
// widths round the original's vanishing point 0.528, 0.532 of the 1:2 frame; angle), with its distance from the camera and
// the attributes the walls' shader places it by. Prints, per screen-radius band in the upper sector (60-130 deg), the
// distance range and the attribute ranges, so a stretch (one map ring over a wide screen band) can be traced to geometry.
//   node wall_geometry_probe.cjs <WebDemo>
const { chromium } = require('playwright'); const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 } })).newPage();
  await page.addInitScript(() => { window.__BW_S3__ = ['focus']; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5)); await page.evaluate(() => window.__bw.tap()); await page.evaluate(() => window.__bw.advance(3.0));
  const out = await page.evaluate(() => {
    const d = window.__bw.debug(); let walls = null; d.scene.traverse((o) => { if (o.name === 'heroWalls') walls = o; });
    const g = walls.geometry, P = g.attributes.position, cam = d.camera; walls.updateMatrixWorld(true); cam.updateMatrixWorld(true);
    const V = cam.position.constructor, v = new V(), names = Object.keys(g.attributes);
    const W = d.renderer.domElement.width, H = d.renderer.domElement.height;
    const rows = [];
    for (let i = 0; i < P.count; i++) {
      v.fromBufferAttribute(P, i).applyMatrix4(walls.matrixWorld);
      const dist = v.distanceTo(cam.position); const s = v.clone().project(cam);
      if (s.z > 1 || s.z < -1) continue;
      const px = (s.x * 0.5 + 0.5) * W, py = (0.5 - s.y * 0.5) * H;
      const dx = px - 0.528 * W, dy = -(py - 0.532 * H), r = Math.hypot(dx, dy) / W, ang = Math.atan2(dy, dx) * 180 / Math.PI;
      const att = {}; for (const n of names) if (n !== 'position' && n !== 'normal' && n !== 'uv') { const A = g.attributes[n]; att[n] = Array.from({ length: A.itemSize }, (_, k) => +A.array[i * A.itemSize + k].toFixed(3)); }
      rows.push({ r: +r.toFixed(4), ang: +ang.toFixed(1), dist: +dist.toFixed(2), world: [+v.x.toFixed(2), +v.y.toFixed(2), +v.z.toFixed(2)], att });
    }
    return { names, cam: cam.position.toArray().map((x) => +x.toFixed(3)), rows };
  });
  console.log(JSON.stringify({ names: out.names, cam: out.cam, n: out.rows.length }));
  const up = out.rows.filter((q) => q.ang > 60 && q.ang < 130);
  for (let a = 0.06; a < 0.24; a += 0.02) {
    const b = up.filter((q) => q.r >= a && q.r < a + 0.02); if (!b.length) continue;
    const ds = b.map((q) => q.dist).sort((x, y) => x - y);
    console.log(`r ${a.toFixed(2)}-${(a + 0.02).toFixed(2)}: ${b.length} verts, distance ${ds[0]}..${ds[ds.length - 1]} (median ${ds[ds.length >> 1]}), e.g. world ${JSON.stringify(b[0].world)} att ${JSON.stringify(b[0].att)}`);
  }
  fs.writeFileSync(path.join(__dirname, '..', 'wall_vertices_3.0s.json'), JSON.stringify(out));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
