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
    const m = window.__bw.debug().scene.getObjectByName('mwTunnelBubbles'), g = m.geometry, C = g.attributes.aC.array, B = g.attributes.aB.array;
    const o = { visible: m.visible, count: g.instanceCount, uVP: m.material.uniforms.uVP.value, uRes: m.material.uniforms.uRes.value, rows: [] };
    for (const i of [0, 1, 300, 301, 302, 303, 400, 500]) o.rows.push([i, Array.from(C.slice(i * 4, i * 4 + 4)).map((v) => +v.toFixed(3)), Array.from(B.slice(i * 4, i * 4 + 4)).map((v) => +v.toFixed(4))]);
    const gl = window.__bw.debug().renderer.getContext();
    const prog = window.__bw.debug().renderer.info.programs.find((p) => p.name && p.name.includes('ShaderMaterial'));
    return o;
  });
  console.log(JSON.stringify(r));
  await browser.close(); server.close();
})();
