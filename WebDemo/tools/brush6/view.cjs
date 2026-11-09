// brush6 viewer (lane brush6, session 47f75e22): renders ONLY the brush6 module (src/s56_brush6.js) with a stand-in of the game's s56 view
// (camera 0.92 m over the water looking down the run, fov 66, Neutral tone mapping 1.05, the game's three lights, a blue water plane and
// the bank deck from x 1.5) for fast look iterations; the real check is always the game capture (tools/s56/shots56.cjs + fit_eval.js).
//   flock /tmp/bw_browser.lock node tools/brush6/view.cjs <ABSOLUTE WebDemo dir> <out.png> [TUNE='{"fur":{...}}'] [D=5.6] [T=0.0]
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const D = +(process.env.D || 5.6), T = +(process.env.T || 0), TUNE = process.env.TUNE || '{}';
const HTML = `<!doctype html><body style="margin:0;background:#000"><script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script>
<script type="module">
window.__BW_S3__ = ['s56', 'level1', 'brush6'];
const THREE = await import('three');
const { RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js');
const { BRUSH6, buildBrush6 } = await import('/src/s56_brush6.js');
const merge = (a, b) => { for (const k of Object.keys(b)) { if (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) merge(a[k], b[k]); else a[k] = b[k]; } };
merge(BRUSH6, ${TUNE});
const r = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true }); r.setPixelRatio(2); r.setSize(432, 768); document.body.appendChild(r.domElement);
r.toneMapping = THREE.NeutralToneMapping; r.toneMappingExposure = 1.05;
const scene = new THREE.Scene(); scene.background = new THREE.Color('#8a4fd0');
scene.add(new THREE.HemisphereLight(0xffe9ff, 0x6ea8ff, 1.1));
const sun = new THREE.DirectionalLight(0xfff2e6, 1.7); sun.position.set(-3, 6, -4); scene.add(sun);
const rim = new THREE.DirectionalLight(0xcfe8ff, 1.3); rim.position.set(2, 7, 12); scene.add(rim);
const env = new THREE.PMREMGenerator(r).fromScene(new RoomEnvironment(), 0.04).texture;
const gold = new THREE.MeshStandardMaterial({ color: 0xffb347, emissive: 0x5a3800, emissiveIntensity: 0.55, metalness: 0.92, roughness: 0.26, envMap: env, envMapIntensity: 1.25 });
const TR = { frame(u, F) { F.P.set(0, 0, u); F.R.set(1, 0, 0); F.U.set(0, 1, 0); F.T.set(0, 0, 1); return F; } };
const W = { baseHeight: () => 0 };
const root = new THREE.Group(); scene.add(root);
const b6 = await buildBrush6({ scene, TR, W, L: {}, env, root, M: { gold }, report: { parts: [], errors: [] } });
// the stand-ins: water (cobalt) to x 1.5, the bank deck beyond, a rail at 1.56
const camZ = BRUSH6.anchor + BRUSH6.left.du - ${D};
const water = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 200), new THREE.MeshBasicMaterial({ color: '#1b3fd8' })); water.rotation.x = -Math.PI / 2; water.position.set(0, 0, camZ + 100); scene.add(water);
for (const s of [-1, 1]) { const deck = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.34, 200), new THREE.MeshStandardMaterial({ color: 0x9a6fd8, emissive: 0x3a1a70, emissiveIntensity: 0.4 })); deck.position.set(s * 2.1, -0.1, camZ + 100); scene.add(deck); }
const cam = new THREE.PerspectiveCamera(66, 432 / 768, 0.05, 400); cam.position.set(0, 0.92, camZ); cam.lookAt(0, 0.79, camZ + 9);
b6.update(0, ${T}, 'running', { z: camZ + 3 });
r.render(scene, cam); window.DONE = true;
</script>`;
const TYPES = { '.js': 'text/javascript', '.html': 'text/html' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  if (u === '/_b6view.html') { res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end(HTML); }
  const p = path.join(ROOT, u); if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((ok) => server.listen(0, ok));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 432, height: 768 }, deviceScaleFactor: 2 })).newPage();
  const errs = []; page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 400)); }); page.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  await page.goto(`http://localhost:${server.address().port}/_b6view.html`);
  await page.waitForFunction(() => window.DONE, null, { timeout: 120000 }).catch(() => {});
  await page.screenshot({ path: OUT });
  console.log(JSON.stringify({ errors: errs }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
