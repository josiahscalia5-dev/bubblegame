// Screen 4 hero-scene probe: loads the real game (seeded, Math.random seed 7, 538 x 1076 game area), advances to the hero
// moment and reports what the camera sees: the mascot's place, the camera pose, every named object in view (its screen
// position and distance), and saves a page screenshot. Used to stage the hero scene against the approved Screen 4.
//   S3=round7,hero T=3.0 node tools/screen4/hero_probe.cjs "$PWD" <out-dir> ['<tune json>']
// Optional: PICKS='[[x,y,d],...]' prints the world point d metres from the camera under each stage fraction (x, y), in the
// track frame (u along the path, x sideways, h above the water) so objects can be placed where the approved picture has them.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TUNE = '{}'] = process.argv.slice(2);
const S3 = (process.env.S3 || 'round7').split(',').filter(Boolean), T = +(process.env.T || 3.0);
const PICKS = JSON.parse(process.env.PICKS || '[]');
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
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1) })).newPage();   // DPR=1.5: about the approved picture's 767 x 1536
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text()); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(([tune, s3]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = JSON.parse(tune);
    window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [TUNE, S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate((t) => window.__bw.advance(t), T);
  await page.waitForTimeout(+(process.env.SETTLE || 800));
  await page.screenshot({ path: path.join(OUT, `probe_t${T.toFixed(1)}.png`), clip: await page.locator('#stage').boundingBox() });
  const info = await page.evaluate((picks) => {
    const d = window.__bw.debug(), cam = d.camera, scene = d.scene, L = d.layout, TR = d.track;
    const THREE = { };   // the bundle's three is not global: use the camera's own classes
    const V = cam.position.constructor, M = cam.matrixWorld.constructor;
    const stage = document.getElementById('stage').getBoundingClientRect();
    const fr = { P: new V(), R: new V(), U: new V(), T: new V() };
    const toTrack = (p) => {   // nearest track frame to p: u, x (right), h (up)
      let best = null;
      for (let u = L.tunnelStart - 20; u <= L.tunnelStart + 40; u += 0.05) { TR.frame(u, fr); const rel = p.clone().sub(fr.P), al = Math.abs(rel.dot(fr.T)); if (!best || al < best.al) best = { al, u, x: rel.dot(fr.R), h: rel.dot(fr.U) }; }
      return { u: +(best.u - L.tunnelStart).toFixed(2), x: +best.x.toFixed(2), h: +best.h.toFixed(2) };
    };
    const objs = [];
    const wp = new V();
    scene.traverse((o) => {
      if (!o.name || !o.parent) return;
      let vis = true; for (let q = o; q; q = q.parent) if (!q.visible) { vis = false; break; }
      if (!vis) return;
      o.getWorldPosition(wp); const dist = wp.distanceTo(cam.position); const s = wp.clone().project(cam);
      // the object's screen footprint (from its meshes' bounding boxes): [x0, y0, x1, y1] as fractions of the stage
      let foot = null, size = null;
      if (dist < 40) {
        const lo = new V(Infinity, Infinity, Infinity), hi = new V(-Infinity, -Infinity, -Infinity), slo = [Infinity, Infinity], shi = [-Infinity, -Infinity];
        o.traverse((q) => {
          if (!q.isMesh || !q.geometry || q.isInstancedMesh) return;
          if (!q.geometry.boundingBox) q.geometry.computeBoundingBox();
          const b = q.geometry.boundingBox; if (!b || !isFinite(b.min.x)) return;
          for (let i = 0; i < 8; i++) {
            const c = new V(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(q.matrixWorld);
            lo.min(c); hi.max(c); const p = c.clone().project(cam);
            if (p.z < 1) { slo[0] = Math.min(slo[0], (p.x + 1) / 2); slo[1] = Math.min(slo[1], (1 - p.y) / 2); shi[0] = Math.max(shi[0], (p.x + 1) / 2); shi[1] = Math.max(shi[1], (1 - p.y) / 2); }
          }
        });
        if (isFinite(lo.x)) { size = hi.clone().sub(lo).toArray().map((v) => +v.toFixed(2)); if (isFinite(slo[0])) foot = [...slo, ...shi].map((v) => +v.toFixed(3)); }
      }
      objs.push({ name: o.name, type: o.type, kids: o.children.length, sx: +((s.x + 1) / 2).toFixed(2), sy: +((1 - s.y) / 2).toFixed(2), z: +s.z.toFixed(3), dist: +dist.toFixed(2), track: dist < 60 ? toTrack(wp.clone()) : null, size, foot });
    });
    const pickOut = picks.map(([x, y, dd]) => {
      const ndc = new V(x * 2 - 1, 1 - y * 2, 0.5).unproject(cam).sub(cam.position).normalize();
      const p = cam.position.clone().addScaledVector(ndc, dd); return { at: [x, y, dd], world: p.toArray().map((v) => +v.toFixed(3)), track: toTrack(p) };
    });
    const m = d.mascotState;
    return { state: window.__bw.state(), tunnelStart: L.tunnelStart, tunnelEnd: L.tunnelEnd, clearRadius: L.clearRadius, mascot: { z: +(m.z - L.tunnelStart).toFixed(3), x: m.x, yAbs: m.yAbs },
      camera: { pos: cam.position.toArray().map((v) => +v.toFixed(3)), track: toTrack(cam.position.clone()), quat: cam.quaternion.toArray().map((v) => +v.toFixed(4)), fov: +cam.fov.toFixed(2), aspect: +cam.aspect.toFixed(4) },
      stage: [stage.width, stage.height], objects: objs, picks: pickOut, report: window.__bwS3 || null };
  }, PICKS);
  fs.writeFileSync(path.join(OUT, `probe_t${T.toFixed(1)}.json`), JSON.stringify(info, null, 1));
  console.log(JSON.stringify({ mascot: info.mascot, camera: info.camera, stage: info.stage, tunnelStart: info.tunnelStart, picks: info.picks, objects: info.objects.length }));
  console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
