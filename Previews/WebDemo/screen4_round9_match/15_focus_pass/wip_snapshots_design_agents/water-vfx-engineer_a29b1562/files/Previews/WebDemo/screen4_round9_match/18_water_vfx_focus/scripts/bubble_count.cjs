// bubble_count.cjs: counts the tunnel's soap bubbles and white streaks (mwTunnelBubbles) on screen at a moment of real seeded
// gameplay (seed 7, the 538 x 1076 game area, Tap to Start then T s), from the instances' own positions and fades projected
// with the real camera: how many bubbles are drawn (fade > 0.05, in front of the camera, on screen), how many within 0.2 W
// of the tunnel's centre on screen (CX, CY; default the Art Director's (0.53, 0.525)), by size on screen (radius in px at
// 767 wide), and the streaks' lengths on screen.
// (The Hough-circle count of bubbles.py also finds the walls' ring arcs as circles, so it cannot isolate the bubbles.)
//   S3=focus T=3.0 node bubble_count.cjs <abs WebDemo> ['<tune json>']
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, TUNE = '{}'] = process.argv.slice(2);
const S3 = (process.env.S3 || 'focus').split(',').filter(Boolean), T = +(process.env.T || 3.0);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: 1.5 })).newPage();
  await page.addInitScript(([tune, s3]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = JSON.parse(tune); window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [TUNE, S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate((t) => { window.__bw.advance(0.5); window.__bw.tap(); window.__bw.advance(t); window.__bw.render(); }, T);
  const out = await page.evaluate((cen) => {
    const { scene, camera, renderer } = window.__bw.debug();
    const m = scene.getObjectByName('mwTunnelBubbles'); if (!m) return { error: 'no mwTunnelBubbles' };
    const g = m.geometry, C = g.attributes.aC.array, B = g.attributes.aB.array, n = g.instanceCount;
    const V = camera.position.constructor;
    const Wpx = renderer.domElement.width, Hpx = renderer.domElement.height;
    const P11 = camera.projectionMatrix.elements[5];
    const res = { bubbles: 0, near: 0, sizes: { lt6: 0, '6-12': 0, '12-25': 0, gt25: 0 }, streaks: 0, streakLen: [], centre: cen };
    const p = new V();
    for (let i = 0; i < n; i++) {
      if (B[i * 4] < 0.05) continue;
      p.set(C[i * 4], C[i * 4 + 1], C[i * 4 + 2]);
      const dz = -p.clone().applyMatrix4(camera.matrixWorldInverse).z; if (dz < 0.1) continue;
      p.project(camera); if (Math.abs(p.x) > 1 || Math.abs(p.y) > 1) continue;
      const sx = (p.x + 1) / 2, sy = (1 - p.y) / 2;
      const rpx = C[i * 4 + 3] * P11 / dz * 0.5 * Hpx;   // radius (or half length) in canvas px
      const d = Math.hypot((sx - res.centre[0]), (sy - res.centre[1]) * Hpx / Wpx);   // in widths
      if (B[i * 4 + 2] > 0.5) { res.streaks++; res.streakLen.push(Math.round(rpx * 2 * 767 / Wpx)); continue; }
      res.bubbles++; if (d < 0.2) res.near++;
      const r767 = rpx * 767 / Wpx;
      if (r767 < 6) res.sizes.lt6++; else if (r767 < 12) res.sizes['6-12']++; else if (r767 < 25) res.sizes['12-25']++; else res.sizes.gt25++;
    }
    const L = res.streakLen.sort((a, b) => a - b); res.streakLen = { median: L[L.length >> 1], p90: L[Math.floor(L.length * 0.9)] };
    return res;
  }, [+(process.env.CX || 0.53), +(process.env.CY || 0.525)]);
  console.log(JSON.stringify(out));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
