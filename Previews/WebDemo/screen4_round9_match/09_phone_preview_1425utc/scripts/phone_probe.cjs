const { chromium, devices } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ ...devices['Pixel 7'] })).newPage();
  await page.addInitScript(() => { window.__BW_S3__ = ['match']; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art']; });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  console.log(JSON.stringify(await page.evaluate(() => { const s = document.getElementById('stage').getBoundingClientRect(), v = document.getElementById('view').getBoundingClientRect(), c = window.__bw.debug().renderer.domElement;
    return { win: [innerWidth, innerHeight, devicePixelRatio], stage: [s.x, s.y, s.width, s.height], view: [v.x, v.y, v.width, v.height], canvas: [c.width, c.height], camAspect: window.__bw.debug().camera ? window.__bw.debug().camera.aspect : null, bodyBg: getComputedStyle(document.body).backgroundColor, bodyClass: document.body.className, mq: matchMedia('(max-aspect-ratio: 3/5)').matches }; })));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
