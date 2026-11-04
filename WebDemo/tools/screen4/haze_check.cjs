// Is a pale haze in the 3D render itself or in CSS on top of it? For one seeded frame this saves
//   canvas_<tag>.png  the WebGL canvas's own pixels (read back with toDataURL in the same task as the render)
//   page_<tag>.png    the page screenshot of the game area (canvas + every HTML layer over it)
// and lists every HTML element over the game area that draws something (opacity, background, filter, blend mode).
//   S3=hero T=2.85 node tools/screen4/haze_check.cjs "$PWD" <out-dir> <tag>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TAG = 'frame'] = process.argv.slice(2);
const S3 = (process.env.S3 || 'hero').split(',').filter(Boolean), T = +(process.env.T || 2.85);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html'); if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 538, height: 1076 }, deviceScaleFactor: 1 })).newPage();
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5)); await page.evaluate(() => window.__bw.tap()); await page.evaluate((t) => window.__bw.advance(t), T);
  await page.waitForTimeout(900);   // the HUD's CSS fades run on real time
  const shot = await page.screenshot({ clip: await page.locator('#stage').boundingBox() });
  const url = await page.evaluate(() => { window.__bw.render(); return document.getElementById('view').toDataURL('image/png'); });
  fs.writeFileSync(path.join(OUT, `page_${TAG}.png`), shot);
  fs.writeFileSync(path.join(OUT, `canvas_${TAG}.png`), Buffer.from(url.split(',')[1], 'base64'));
  const layers = await page.evaluate(() => {
    const st = document.getElementById('stage').getBoundingClientRect(), out = [];
    for (const el of document.querySelectorAll('body *')) {
      if (el.id === 'view') continue;
      const cs = getComputedStyle(el), r = el.getBoundingClientRect();
      if (cs.display === 'none' || cs.visibility === 'hidden' || r.width < 2 || r.height < 2) continue;
      if (r.right < st.left || r.left > st.right || r.bottom < st.top || r.top > st.bottom) continue;
      let op = 1; for (let e = el; e; e = e.parentElement) op *= +getComputedStyle(e).opacity;
      const draws = (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent') || cs.backgroundImage !== 'none' || cs.filter !== 'none' || cs.backdropFilter !== 'none' || cs.mixBlendMode !== 'normal' || cs.boxShadow !== 'none';
      if (!draws || op < 0.01) continue;
      out.push({ el: el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').join('.') : ''),
        box: [r.left - st.left, r.top - st.top, r.width, r.height].map((v) => Math.round(v)), opacity: +op.toFixed(2), bg: cs.backgroundColor, img: cs.backgroundImage.slice(0, 60), filter: cs.filter, backdrop: cs.backdropFilter, blend: cs.mixBlendMode });
    }
    return { stage: [st.width, st.height], canvasCss: getComputedStyle(document.getElementById('view')).filter + ' / opacity ' + getComputedStyle(document.getElementById('view')).opacity, bodyClass: document.body.className, layers: out };
  });
  fs.writeFileSync(path.join(OUT, `layers_${TAG}.json`), JSON.stringify(layers, null, 1));
  console.log(JSON.stringify({ stage: layers.stage, canvasCss: layers.canvasCss, bodyClass: layers.bodyClass, layers: layers.layers.length }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
