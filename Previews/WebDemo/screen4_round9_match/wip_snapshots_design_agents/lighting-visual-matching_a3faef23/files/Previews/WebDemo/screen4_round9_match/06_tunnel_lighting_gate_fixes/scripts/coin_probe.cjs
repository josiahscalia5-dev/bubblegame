// coin_probe.cjs <abs WebDemo> [tune json]: at T (3.0 s) seeded match, project every coin (LOD) and every unnamed top-level
// Group (gems, socks) with its screen place, distance, visual scale and layout z (u).
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, TUNE = '{}'] = process.argv.slice(2);
const S3 = (process.env.S3 || 'match').split(','), T = +(process.env.T || 3.0);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: 1 })).newPage();
  await page.addInitScript(([tune, s3]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = JSON.parse(tune); window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [TUNE, S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate((t) => window.__bw.advance(t), T);
  await page.waitForTimeout(500);
  const out = await page.evaluate(() => {
    const d = window.__bw.debug(), cam = d.camera, scene = d.scene, L = d.layout;
    const V = cam.position.constructor; const rows = [];
    for (const o of scene.children) {
      const isCoin = o.isLOD, isGrp = o.type === 'Group' && !o.name;
      if (!isCoin && !isGrp) continue;
      const wp = o.getWorldPosition(new V()), dist = wp.distanceTo(cam.position); if (dist > 45) continue;
      const s = wp.clone().project(cam);
      let kind = isCoin ? 'coin' : 'group'; o.traverse((q) => { if (q.isSprite) kind = 'sock?'; });
      if (kind === 'group') { let n = 0; o.traverse((q) => { if (q.isMesh) n++; }); kind = 'grp' + n; }
      rows.push({ kind, sx: +((s.x + 1) / 2).toFixed(3), sy: +((1 - s.y) / 2).toFixed(3), z: +s.z.toFixed(3), dist: +dist.toFixed(2), scale: +o.scale.x.toFixed(2), vis: o.visible, world: wp.toArray().map((v) => +v.toFixed(2)) });
    }
    rows.sort((a, b) => a.dist - b.dist);
    return { tunnelStart: L.tunnelStart, cam: cam.position.toArray().map((v) => +v.toFixed(2)), rows };
  });
  console.log(JSON.stringify(out.cam), 'tunnelStart', out.tunnelStart);
  for (const r of out.rows) console.log(JSON.stringify(r));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
