// Which object draws a region? Seeded run (Math.random seed 7) to a moment, then the 3D canvas captured with each named
// object hidden in turn, so a before/after pair shows exactly what that object contributes to the picture.
//   S3=round4 AT=4.2 HIDE='r3Foam,r4SplashCrown' node hide_probe.cjs <demo-dir (absolute)> <out-dir>
// Also writes objects.json: every visible mesh, points and line object at that moment (name, type, triangles if known).
// HIDE entries match an object's name; 'particles' and 'water' hide the game's spray points and water mesh.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'round4').split(',').filter(Boolean), AT = +(process.env.AT || 4.2);
const HIDE = (process.env.HIDE || '').split(',').filter(Boolean);
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
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 } })).newPage();
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate((at) => { window.__bw.advance(0.5); window.__bw.tap(); window.__bw.advance(at); }, AT);
  const objects = await page.evaluate(() => {
    const { scene } = window.__bw.debug(), out = [];
    scene.traverseVisible((o) => { if (o.isMesh || o.isPoints || o.isLine) out.push({ name: o.name || '(unnamed)', parent: o.parent && o.parent.name, type: o.type, tris: o.geometry && o.geometry.index ? o.geometry.index.count / 3 : null, inst: o.count || o.geometry.instanceCount || null }); });
    return out;
  });
  fs.writeFileSync(path.join(OUT, 'objects.json'), JSON.stringify(objects, null, 1));
  const canvas = page.locator('#stage canvas').first();
  const shot = (f) => canvas.screenshot({ path: path.join(OUT, f) });
  await shot('all.png');
  for (const h of HIDE) {
    await page.evaluate((name) => {
      const d = window.__bw.debug(), hidden = [];
      const targets = name === 'particles' ? [d.particles] : name === 'water' ? [d.water] : [];
      if (!targets.length) d.scene.traverse((o) => { if (o.name === name) targets.push(o); });
      for (const o of targets) if (o) { hidden.push(o); o.userData.__probeVis = o.visible; o.visible = false; o.onBeforeRender = () => { o.visible = false; }; }
      window.__probeHidden = hidden;
      d.renderer.render(d.scene, d.camera); d.composer ? d.composer.render() : null;
    }, h);
    await shot(`hide_${h}.png`);
    await page.evaluate(() => { for (const o of window.__probeHidden) { o.visible = o.userData.__probeVis; o.onBeforeRender = () => {}; } window.__bw.render(); });
  }
  console.log(`${objects.length} visible objects at ${AT} s; wrote ${HIDE.length + 1} canvas captures to ${OUT}`);
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
