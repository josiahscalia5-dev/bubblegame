const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
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
  await page.addInitScript(() => {
    window.__BW_S3__ = ['match']; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate(() => window.__bw.advance(3.0));
  const r = await page.evaluate(() => {
    window.__bw.render();
    const w = window.__bw.debug().scene.getObjectByName('heroWalls'), g = w.geometry, P = g.attributes.position, A = g.attributes.aLqAxis, AU = g.attributes.aAU;
    w.updateMatrixWorld(); const M = w.matrixWorld.elements;
    const byU = {};
    for (let i = 0; i < P.count; i += 7) {
      const x = P.getX(i), y = P.getY(i), z = P.getZ(i);
      const wx = M[0] * x + M[4] * y + M[8] * z + M[12], wy = M[1] * x + M[5] * y + M[9] * z + M[13], wz = M[2] * x + M[6] * y + M[10] * z + M[14];
      const d = Math.hypot(wx - A.getX(i), wy - A.getY(i), wz - A.getZ(i)), u = Math.round(AU.getY(i) / 3) * 3;
      (byU[u] = byU[u] || []).push(d);
    }
    const o = {};
    for (const u of Object.keys(byU).sort((a, b) => a - b)) { const v = byU[u].sort((a, b) => a - b); o[u] = [v[0].toFixed(2), v[v.length >> 1].toFixed(2), v[v.length - 1].toFixed(2), v.length]; }
    return o;
  });
  console.log(JSON.stringify(r));
  await browser.close(); server.close();
})();
