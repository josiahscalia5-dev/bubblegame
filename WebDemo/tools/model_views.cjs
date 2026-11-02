// Render a web model from 4 sides (+Z, +X, -Z, -X) to check which way it faces and how it looks, or render a small
// transparent icon. Uses three.js from the demo's node_modules in Chromium.
//   node tools/model_views.cjs <demo-dir> <out.png> [icon] [model path, default models/sock.glb]
// (ui/sock.png was made with: node tools/model_views.cjs . ui/sock.png icon)
const { chromium } = require('playwright'); const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2], OUT = process.argv[3], ICON = process.argv[4] === 'icon', MODEL = process.argv[5] || 'models/sock.glb';
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0])); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': p.endsWith('.js') ? 'text/javascript' : p.endsWith('.html') ? 'text/html' : 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  fs.writeFileSync(path.join(ROOT, '_sockview.html'), `<!doctype html><body style="margin:0"><script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three'; import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const ICON = location.hash === '#icon'; const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: ICON }); r.setSize(ICON ? 160 : 800, ICON ? 160 : 220); document.body.appendChild(r.domElement);
const s = new THREE.Scene(); if (!ICON) s.background = new THREE.Color(0xdde3f0); s.add(new THREE.HemisphereLight(0xffffff, 0x8899bb, 2.2)); const d = new THREE.DirectionalLight(0xffffff, 1.5); d.position.set(1, 2, 3); s.add(d);
const g = await new GLTFLoader().loadAsync('/${MODEL}'); const m = g.scene; m.traverse((o) => { if (o.isMesh) o.material = new THREE.MeshLambertMaterial({ map: o.material.map, emissive: 0xffffff, emissiveMap: o.material.map, emissiveIntensity: 0.35 }); }); const b = new THREE.Box3().setFromObject(m); m.position.sub(b.getCenter(new THREE.Vector3())); s.add(m);
const sz = b.getSize(new THREE.Vector3()); window.SIZE = sz.toArray();
if (ICON) { const c = new THREE.PerspectiveCamera(30, 1, 0.01, 100); c.position.set(0.55, 0.25, 1).normalize().multiplyScalar(Math.max(sz.x, sz.y, sz.z) * 2.25); c.lookAt(0, 0, 0); r.render(s, c); window.DONE = true; } else {
const views = [[0,0,1],[1,0,0],[0,0,-1],[-1,0,0]]; r.setScissorTest(true);
views.forEach((v, i) => { const c = new THREE.PerspectiveCamera(30, 1, 0.01, 100); c.position.set(...v).multiplyScalar(Math.max(sz.x, sz.y, sz.z) * 2.6); c.lookAt(0, 0, 0); r.setViewport(i * 200, 0, 200, 220); r.setScissor(i * 200, 0, 200, 220); r.render(s, c); });
window.DONE = true; }
</script>`);
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] }); const p = await b.newPage({ viewport: ICON ? { width: 160, height: 160 } : { width: 800, height: 220 } });
  p.on('console', (m) => console.log(m.text())); p.on('pageerror', (e) => console.log('ERR', e.message));
  await p.goto(`http://localhost:${server.address().port}/_sockview.html${ICON ? '#icon' : ''}`); await p.waitForFunction(() => window.DONE, null, { timeout: 120000 });
  console.log('size (x,y,z) +Z,+X,-Z,-X views:', await p.evaluate(() => window.SIZE)); await p.screenshot({ path: OUT, omitBackground: ICON }); await b.close(); server.close(); fs.unlinkSync(path.join(ROOT, '_sockview.html'));
})();
