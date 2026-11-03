// node tools/phone_check.cjs <demo-dir> <out.png> <width> <height>: Tap to Start frame at a phone viewport, HUD boxes and the nearest solid to the slide
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, W, H] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: +W, height: +H }, deviceScaleFactor: 1, isMobile: true, hasTouch: true })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.addInitScript(() => { window.__BW_TEST__ = true; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.screenshot({ path: OUT });
  const info = await page.evaluate(() => {
    const D = window.__bw.debug(), V = D.camera.position.constructor, v = new V();
    // nearest point of every visible decoration group to the slide's middle, on the slide (z < 3.9) below the highest jump (2.6 m)
    let near = Infinity, who = '';
    const L = D.layout;
    D.scene.traverse((o) => {
      if (!o.isMesh || !o.visible || o === D.water || o.isInstancedMesh) return;
      let vis = true; for (let p = o; p; p = p.parent) if (!p.visible) vis = false; if (!vis) return;
      if (o.material && o.material.type === 'ShaderMaterial') return;   // water, waterfalls, sky, bubbles, particles: no solid
      o.updateMatrixWorld(true);
      const pos = o.geometry.attributes.position;
      for (let i = 0; i < pos.count; i += 3) {
        v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
        if (v.z > L.startZ - 1 && v.z < 3.9 && v.y > -0.2 && v.y < 2.6 && Math.abs(v.x) < near) { near = Math.abs(v.x); who = o.name || o.parent?.name || o.material?.name || o.geometry.type; }
      }
    });
    const hud = ['banner', 'startPanel', 'coins', 'gems', 'soundBtn'].map((id) => { const r = document.getElementById(id).getBoundingClientRect(); return [id, Math.round(r.left), Math.round(r.top), Math.round(r.right), Math.round(r.bottom)]; });
    return { nearestSolidToSlideMiddle: +near.toFixed(3), what: who, hud, stage: [document.getElementById('stage').clientWidth, document.getElementById('stage').clientHeight] };
  });
  console.log(JSON.stringify(info));
  console.log(logs.join('\n') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
