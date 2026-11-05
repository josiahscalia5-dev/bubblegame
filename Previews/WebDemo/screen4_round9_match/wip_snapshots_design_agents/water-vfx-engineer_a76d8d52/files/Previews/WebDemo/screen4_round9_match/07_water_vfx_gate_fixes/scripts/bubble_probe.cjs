// Which soap bubbles does the game really show, and where? Seeded gameplay (Math.random seed 7, 538 x 1076, DPR 1.5, real
// tap and game time) to each time in TIMES; then, for each instanced bubble mesh in MESHES, the 3D canvas is drawn with and
// without that mesh, and each instance (its world centre and radius projected with the real camera) counts as SHOWN where
// the two drawings differ inside its circle (so bubbles hidden by the walls, the rim, the objects or the water, or faded out,
// do not count). Counts by the zones of bubbles.py (round the vanishing point VP, default 0.53,0.53) and sizes (radius in
// frame widths: small < 0.012, medium 0.012-0.03, large >= 0.03), and writes <out>/<label>_t<T>_bubbles.json and an
// overlay PNG (the frame with every shown bubble circled: yellow small, cyan medium, magenta large).
//   S3=match TIMES=3.0 [MESHES=mwTunnelBubbles,heroBubbles,lqWaterlineBubbles] node bubble_probe.cjs <abs WebDemo> <out> ['<tune json>']
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TUNE_ARG = '{}'] = process.argv.slice(2);
const TUNE = TUNE_ARG.endsWith('.json') ? fs.readFileSync(TUNE_ARG, 'utf8') : TUNE_ARG;
const S3 = (process.env.S3 || 'match').split(',').filter(Boolean), TIMES = (process.env.TIMES || '3.0').split(',').map(Number);
const MESHES = (process.env.MESHES || 'mwTunnelBubbles,heroBubbles,lqWaterlineBubbles').split(',');
const VP = (process.env.VP || '0.53,0.53').split(',').map(Number), LABEL = process.env.LABEL || S3.join('+');
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
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1.5) })).newPage();
  const logs = [];
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
  let since = 0;
  for (const T of TIMES) {
    await page.evaluate((d) => window.__bw.advance(d), T - since); since = T;
    const res = await page.evaluate(([MESHES, VP]) => {
      const D = window.__bw.debug(), sc = D.scene, cam = D.camera, cv = D.renderer.domElement, Wc = cv.width, Hc = cv.height;
      const grab = () => { window.__bw.render(); const c = document.createElement('canvas'); c.width = Wc; c.height = Hc; const x = c.getContext('2d'); x.drawImage(cv, 0, 0); return { c, d: x.getImageData(0, 0, Wc, Hc).data }; };
      const base = grab();
      const V = new (cam.position.constructor)();
      const out = { W: Wc, H: Hc, meshes: {}, shown: [], streaks: [] };
      for (const name of MESHES) {
        const m = sc.getObjectByName(name);
        if (!m || !m.visible) { out.meshes[name] = 'absent or hidden'; continue; }
        const g = m.geometry, A = g.attributes.aC || g.attributes.inst, KB = g.attributes.aB;
        m.visible = false; const off = grab(); m.visible = true;
        const n = g.instanceCount, P11 = cam.projectionMatrix.elements[5];
        let shown = 0, inFrame = 0, streaks = 0;
        for (let i = 0; i < n; i++) {
          const kind = KB ? KB.array[i * 4 + 2] : 0, fade = KB ? KB.array[i * 4] : 1;
          V.set(A.array[i * 4], A.array[i * 4 + 1], A.array[i * 4 + 2]);
          const r = A.array[i * 4 + 3];
          const dz = -V.clone().applyMatrix4(cam.matrixWorldInverse).z;
          if (dz < 0.05) continue;
          V.project(cam);
          const sx = (V.x * 0.5 + 0.5), sy = (0.5 - V.y * 0.5), rpx = r * P11 / dz * 0.5 * Hc;
          if (sx < -0.05 || sx > 1.05 || sy < -0.05 || sy > 1.05) continue;
          inFrame++;
          // differs anywhere in its circle (sampled on 3 rings and the middle)?
          let hit = 0, tot = 0;
          for (const f of [0.0, 0.5, 0.8, 0.97]) for (let k = 0; k < (f ? 16 : 1); k++) {
            const a = k / 16 * 6.2832, px = Math.round(sx * Wc + Math.cos(a) * f * rpx), py = Math.round(sy * Hc + Math.sin(a) * f * rpx);
            if (px < 0 || py < 0 || px >= Wc || py >= Hc) continue;
            const j = (py * Wc + px) * 4; tot++;
            if (Math.abs(base.d[j] - off.d[j]) + Math.abs(base.d[j + 1] - off.d[j + 1]) + Math.abs(base.d[j + 2] - off.d[j + 2]) > 18) hit++;
          }
          if (tot && hit >= Math.max(1, tot * 0.12) && fade > 0.05) { if (kind > 0.5) { streaks++; out.streaks.push({ x: sx, y: sy, dist: dz }); } else { shown++; out.shown.push({ mesh: name, x: sx, y: sy, r: rpx / Wc, dist: dz }); } }
        }
        out.meshes[name] = { instances: n, inFrame, shown, streaks };
      }
      out.png = base.c.toDataURL('image/png');
      return out;
    }, [MESHES, VP]);
    const zone = (b) => { if (b.y >= 0.70) return 'front'; const rr = Math.hypot(b.x - VP[0], (b.y - VP[1]) * res.H / res.W); return rr < 0.12 ? 'centre' : rr < 0.30 ? 'mid' : 'walls'; };
    const size = (b) => (b.r < 0.012 ? 'small' : b.r < 0.03 ? 'medium' : 'large');
    const Z = { centre: 0, mid: 0, walls: 0, front: 0 }, S = { small: 0, medium: 0, large: 0 }, D = { near: 0, mid: 0, far: 0 };
    // (the HUD's top (y < 0.20) and the bottom buttons are excluded, as in bubbles.py)
    const kept = res.shown.filter((b) => b.y > 0.2 && b.y < 0.885 && !(b.y > 0.835 && (b.x < 0.33 || b.x > 0.67)));
    for (const b of kept) { Z[zone(b)]++; S[size(b)]++; D[b.dist < 8 ? 'near' : b.dist < 18 ? 'mid' : 'far']++; }
    const file = path.join(OUT, `${LABEL}_t${T.toFixed(2)}`);
    fs.writeFileSync(file + '_frame.png', Buffer.from(res.png.split(',')[1], 'base64'));
    delete res.png;
    fs.writeFileSync(file + '_bubbles.json', JSON.stringify({ t: T, meshes: res.meshes, zones: Z, sizes: S, depth: D, shown: kept }, null, 1));
    const ZS = { centre: 0, mid: 0, walls: 0, front: 0 }; for (const b of res.streaks.filter((b) => b.y > 0.2 && b.y < 0.835)) ZS[zone(b)]++;
    fs.writeFileSync(file + '_streaks.json', JSON.stringify({ zones: ZS, streaks: res.streaks }, null, 1));
    console.log(`  streaks shown by zone ${JSON.stringify(ZS)}`);
    console.log(`t ${T}: ${JSON.stringify(res.meshes)}\n  shown (HUD excluded) ${kept.length}: zones ${JSON.stringify(Z)} sizes ${JSON.stringify(S)} depth (m) ${JSON.stringify(D)}`);
  }
  if (logs.length) console.log('page errors:', logs.slice(0, 5));
  await browser.close(); server.close();
})();
