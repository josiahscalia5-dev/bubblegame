// Render the drum water at chosen points with debug colours, to find where a water effect is lost (used to fix the round 2
// brush warning). Each variant is GLSL appended after the water's gl_FragColor; null renders the shader as it is, 'NONE'
// renders without touching it. The canvas is read straight after rendering (no HUD), which is much faster than a screenshot.
//   S3=round2 VARIANTS='{"base":null,"haz":"gl_FragColor = vec4(s4Haz, 0.0, 0.0, 1.0);"}' node r2_render_probe.cjs <demo-dir> <out-dir> 5,11,14.5
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2], OUT = process.argv[3], ZS = (process.argv[4] || '4.0').split(',').map(Number);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const VARIANTS = JSON.parse(process.env.VARIANTS || 'null') || {
  base: null,
  red_drum: 'if (inDrum > 0.0) gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
  haz: 'gl_FragColor = vec4(s4Haz, inDrum * 0.3, 0.0, 1.0);',
  xz: 'gl_FragColor = vec4(fract(xz.y), clamp(xz.x * 0.5 + 0.5, 0.0, 1.0), 0.0, 1.0);',
};
(async () => {
  await new Promise((r) => server.listen(0, r));
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 } })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() !== 'log') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.addInitScript((s3) => { window.__BW_TEST__ = true; window.__BW_S3__ = s3; let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; window.__BW_TOUCHES__ = false; }, (process.env.S3 === undefined ? 'round2' : process.env.S3).split(',').filter(Boolean));
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(1, 30));
  await page.evaluate(() => window.__bw.tap());
  let s;
  for (const Z of ZS) {
  for (let i = 0; i < 400; i++) { s = await page.evaluate(() => window.__bw.advance(1 / 30, 30)); if (s.z >= Z) break; }
  console.log('state', JSON.stringify({ z: s.z, x: s.x, lane: s.lane }));
  await page.evaluate(() => {
    const d = window.__bw.debug();
    d.scene.traverse((o) => { const m = o.material; if (m && m.fragmentShader && m.fragmentShader.includes('uS4Haz[i]')) { window.__drumMat = m; window.__drumSrc = m.fragmentShader; } });
    if (!window.__drumMat) window.__drumMat = { set fragmentShader(v) {}, set needsUpdate(v) {} };
  });
  for (const [name, code] of Object.entries(VARIANTS)) {
    const url = await page.evaluate((code) => {
      if (code === 'NONE') { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); }
      const d = window.__bw.debug(), m = window.__drumMat;
      m.fragmentShader = code ? window.__drumSrc.replace('gl_FragColor = vec4(lit, 1.0);', 'gl_FragColor = vec4(lit, 1.0);\n  ' + code) : window.__drumSrc;
      m.needsUpdate = true;
      window.__bw.render();
      return d.renderer.domElement.toDataURL('image/png');
    }, code);
    fs.writeFileSync(path.join(OUT, `v_${name}_z${Z}.png`), Buffer.from(url.split(',')[1], 'base64'));
    console.log('wrote', name);
  }
  }
  console.log(logs.slice(0, 30).join('\n') || 'no errors');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
