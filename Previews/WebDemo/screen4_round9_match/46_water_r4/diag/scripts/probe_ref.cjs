// Diagnostic only: at the compared start view, where the captured matrix uBwRef puts the face's points on screen against
// where the camera of this very frame puts them (the texture lands 1:1 only if the two agree).
const { chromium } = require('playwright'); const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2]; const S3 = (process.env.S3 || 'intunnel,water3').split(',');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html'); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => { await new Promise((r) => server.listen(0, r));
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await b.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: 1536 / 1076 })).newPage();
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = {}; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art']; let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`); await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const probe = () => page.evaluate(() => {
    const d = window.__bw.debug(), sc = d.scene, cam = d.camera, sw = sc.getObjectByName('heroSwell'), U = sw.material.uniforms;
    const V3 = cam.position.constructor, M4 = cam.matrixWorld.constructor, V4 = (new V3()).constructor;
    const C = U.uC.value, R = U.uR.value, Up = U.uU.value, T = U.uT.value;
    const F = new M4().set(R.x, Up.x, T.x, C.x, R.y, Up.y, T.y, C.y, R.z, Up.z, T.z, C.z, 0, 0, 0, 1);
    cam.updateMatrixWorld(); const now = new M4().multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse).multiply(F);
    const ref = U.uBwRef.value; const out = [];
    for (const [x, h, u] of [[0, 0, 0.25], [-0.3, 0, 0.3], [0.3, 0, 0.3], [0, -0.05, 0.45], [-0.5, 0.02, 0.2], [0.5, 0.02, 0.2]]) {
      const pr = (M) => { const e = M.elements; const X = e[0] * x + e[4] * h + e[8] * u + e[12], Y = e[1] * x + e[5] * h + e[9] * u + e[13], W = e[3] * x + e[7] * h + e[11] * u + e[15]; return [(X / W * 0.5 + 0.5) * 768, (0.5 - Y / W * 0.5) * 1536]; };
      const a = pr(ref), n = pr(now); out.push({ pt: [x, h, u], ref: a.map((v) => +v.toFixed(1)), now: n.map((v) => +v.toFixed(1)), dy: +(n[1] - a[1]).toFixed(1) });
    }
    const m = sc.getObjectByName('BubbleWash_PinkFuzzyMascot_Small'); const wp = new V3(); m.getWorldPosition(wp); const sp = wp.clone().project(cam);
    const g = m.geometry; if (!g.boundingBox) g.computeBoundingBox(); const bb = g.boundingBox; let ymax = -1e9, ymin = 1e9;
    for (let i = 0; i < 8; i++) { const v = new V3(i & 1 ? bb.max.x : bb.min.x, i & 2 ? bb.max.y : bb.min.y, i & 4 ? bb.max.z : bb.min.z).applyMatrix4(m.matrixWorld).project(cam); ymax = Math.max(ymax, v.y); ymin = Math.min(ymin, v.y); }
    const her = { centreY: +((0.5 - sp.y * 0.5) * 1536).toFixed(1), boxTopY: +((0.5 - ymax * 0.5) * 1536).toFixed(1), boxBotY: +((0.5 - ymin * 0.5) * 1536).toFixed(1), world: wp.toArray().map((v) => +v.toFixed(4)) };
    return { her, on: U.uBwOn.value, t: +(window.__bw.state().time || 0).toFixed(3), uC: C.toArray().map((v) => +v.toFixed(4)), cam: cam.position.toArray().map((v) => +v.toFixed(4)), q: cam.quaternion.toArray().map((v) => +v.toFixed(4)), pts: out };
  });
  console.log('at ready', JSON.stringify(await probe()));
  await page.evaluate(() => window.__bw.advance(0.5)); console.log('after advance(0.5)', JSON.stringify(await probe()));
  await page.waitForTimeout(800); await page.evaluate(() => window.__bw.render()); console.log('at the compared frame', JSON.stringify(await probe()));
  if (process.env.TAPT) { await page.evaluate(() => window.__bw.tap()); for (const t of [1, 1]) { await page.evaluate((t) => window.__bw.advance(t), t); console.log('moving', JSON.stringify(await probe())); } }
  await b.close(); server.close(); })().catch((e) => { console.error(e); process.exit(1); });
