// arch56 (lane arch56): which side of a model is its front? Renders each GLB (meshopt-compressed allowed) from +x, -x, +z, -z with the game's own
// three.js, labelled, on a neutral backdrop. Read-only on the models; free.
//   flock /tmp/bw_browser.lock node tools/arch56/orient.cjs <ABSOLUTE WebDemo dir> <out.png> models/a.glb [models/b.glb ...]
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, ...FILES] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.glb': 'model/gltf-binary' };
const PAGE = `<!doctype html><body style="margin:0;background:#2a2340;color:#fff;font:12px sans-serif"><div id=g style="display:grid;grid-template-columns:repeat(4,240px);gap:2px"></div>
<script type="importmap">{"imports":{"three":"/node_modules/three/build/three.module.js","three/addons/":"/node_modules/three/examples/jsm/"}}</script>
<script type="module">
import * as THREE from 'three'; import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(240, 240); r.outputColorSpace = THREE.SRGBColorSpace;
const L = new GLTFLoader(); L.setMeshoptDecoder(MeshoptDecoder);
window.go = async (files) => { const info = [];
  for (const f of files) { const g = await L.loadAsync('/' + f); const s = new THREE.Scene(); s.background = new THREE.Color(0x3a3060); s.add(g.scene);
    s.add(new THREE.HemisphereLight(0xffffff, 0x8899bb, 1.6)); const dl = new THREE.DirectionalLight(0xffffff, 2); dl.position.set(2, 4, 3); s.add(dl);
    const bb = new THREE.Box3().setFromObject(g.scene), c = bb.getCenter(new THREE.Vector3()), R = bb.getSize(new THREE.Vector3()).length() * 1.3;
    const cam = new THREE.PerspectiveCamera(40, 1, R / 50, R * 20);
    for (const [n, d] of [['+x', [1, 0, 0]], ['-x', [-1, 0, 0]], ['+z', [0, 0, 1]], ['-z', [0, 0, -1]]]) {
      cam.position.set(c.x + d[0] * R * 1.6, c.y + R * 0.35, c.z + d[2] * R * 1.6); cam.lookAt(c); r.render(s, cam);
      const cell = document.createElement('div'); const im = new Image(); im.src = r.domElement.toDataURL(); cell.appendChild(im);
      const t = document.createElement('div'); t.textContent = f.split('/').pop() + '  camera at ' + n; cell.appendChild(t); document.getElementById('g').appendChild(cell); }
    info.push({ f, size: bb.getSize(new THREE.Vector3()).toArray().map((v) => +v.toFixed(3)), min: bb.min.toArray().map((v) => +v.toFixed(3)) }); }
  return info; };
</script>`;
const server = http.createServer((req, res) => { const u = decodeURIComponent(req.url.split('?')[0]);
  if (u === '/' || u === '/orient.html') { res.writeHead(200, { 'Content-Type': 'text/html' }); return res.end(PAGE); }
  const p = path.join(ROOT, u.replace(/^\/+/, '')); if (!p.startsWith(ROOT) || !fs.existsSync(p)) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((ok) => server.listen(0, ok));
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await b.newPage({ viewport: { width: 4 * 242, height: 300 } }); p.on('pageerror', (e) => console.error('page error:', e.message));
  await p.goto(`http://127.0.0.1:${server.address().port}/orient.html`); await p.waitForFunction(() => window.go);
  const info = await p.evaluate((f) => window.go(f), FILES); await p.waitForTimeout(300); await p.screenshot({ path: OUT, fullPage: true });
  console.log(JSON.stringify(info)); await b.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
