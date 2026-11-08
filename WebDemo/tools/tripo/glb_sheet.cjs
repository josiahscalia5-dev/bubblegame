// GLB contact sheet (8 November 2026, session 57091b57): renders models in the game's own three.js (r170, WebDemo/node_modules)
// in headless Chromium, three views each (front, three-quarter, side), on a neutral backdrop, with the triangle count, the
// draw-call count, the texture sizes and the file size under each; used to judge existing models and Tripo candidates against
// the approved artwork BEFORE anything goes into the game. Free (no Tripo call). Read-only on the models.
//   node WebDemo/tools/tripo/glb_sheet.cjs <out.png> <a.glb> [b.glb ...]      (paths relative to the repository root)
// Options (environment): BW_SHEET_VIEWS=front,34,side,back   BW_SHEET_TILE=300   BW_SHEET_BG=#c9d3e6
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '../../..');
const [out, ...models] = process.argv.slice(2);
if (!out || !models.length) { console.error('usage: node glb_sheet.cjs <out.png> <a.glb> [b.glb ...]'); process.exit(2); }
const VIEWS = (process.env.BW_SHEET_VIEWS || 'front,34,side').split(',');
const TILE = +(process.env.BW_SHEET_TILE || 300), BG = process.env.BW_SHEET_BG || '#c9d3e6';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((q, r) => {
  const p = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(r);
});
const PAGE = `<!doctype html><meta charset=utf-8><body style="margin:0;background:${BG};font:12px sans-serif">
<script type=importmap>{"imports":{"three":"/WebDemo/node_modules/three/build/three.module.js","three/addons/":"/WebDemo/node_modules/three/examples/jsm/"}}</script>
<div id=g style="display:grid;grid-template-columns:repeat(${VIEWS.length},${TILE}px);gap:4px;padding:4px"></div>
<script type=module>
import * as THREE from 'three'; import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
const r = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }); r.setSize(${TILE}, ${TILE}); r.setClearColor('${BG}');
r.toneMapping = THREE.ACESFilmicToneMapping; r.outputColorSpace = THREE.SRGBColorSpace;
const pm = new THREE.PMREMGenerator(r); const env = pm.fromScene(new RoomEnvironment(), 0.04).texture;
window.sheet = async (files, views) => {
  const g = document.getElementById('g'); const info = [];
  for (const f of files) {
    const gl = await new GLTFLoader().loadAsync('/' + f); const s = new THREE.Scene(); s.environment = env;
    s.add(new THREE.HemisphereLight(0xffffff, 0x8899bb, 1.2)); const d = new THREE.DirectionalLight(0xffffff, 2); d.position.set(3, 5, 4); s.add(d);
    s.add(gl.scene); const box = new THREE.Box3().setFromObject(gl.scene); const c = box.getCenter(new THREE.Vector3()); const sz = box.getSize(new THREE.Vector3());
    let tris = 0, meshes = 0; const tex = new Set();
    gl.scene.traverse((o) => { if (o.isMesh) { meshes++; tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3;
      for (const m of [].concat(o.material)) for (const k of ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap']) if (m[k] && m[k].image) tex.add(m[k].image.width + 'x' + m[k].image.height); } });
    const R = sz.length() * 0.62; const cam = new THREE.PerspectiveCamera(35, 1, R / 50, R * 20);
    for (const v of views) {
      const a = { front: 0, '34': Math.PI / 4, side: Math.PI / 2, back: Math.PI }[v] ?? 0; const e = v === 'top' ? 1.2 : 0.18;
      cam.position.set(c.x + Math.sin(a) * Math.cos(e) * R * 2.1, c.y + Math.sin(e) * R * 2.1, c.z + Math.cos(a) * Math.cos(e) * R * 2.1); cam.lookAt(c);
      r.render(s, cam); const cell = document.createElement('div'); const im = new Image(); im.src = r.domElement.toDataURL(); im.width = ${TILE}; cell.appendChild(im);
      const t = document.createElement('div'); t.style.cssText = 'height:30px;overflow:hidden;line-height:14px';
      t.textContent = v === views[0] ? f.split('/').pop() + ' | ' + Math.round(tris).toLocaleString() + ' tris, ' + meshes + ' meshes, tex ' + [...tex].join(' ') + ' | ' + sz.toArray().map((x) => x.toFixed(2)).join(' x ') : v;
      cell.appendChild(t); g.appendChild(cell);
    }
    info.push({ file: f, tris: Math.round(tris), meshes, textures: [...tex], size: sz.toArray().map((x) => +x.toFixed(3)) });
  }
  return info;
};
</script>`;
(async () => {
  await new Promise((ok) => server.listen(0, ok)); const port = server.address().port;
  fs.writeFileSync(path.join(ROOT, 'WebDemo/tools/tripo/.sheet.html'), PAGE);
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const p = await b.newPage({ viewport: { width: VIEWS.length * (TILE + 4) + 8, height: 400 } });
  p.on('pageerror', (e) => console.error('page error:', e.message));
  await p.goto(`http://127.0.0.1:${port}/WebDemo/tools/tripo/.sheet.html`); await p.waitForFunction(() => window.sheet);
  const info = await p.evaluate(([f, v]) => window.sheet(f, v), [models, VIEWS]);
  await p.waitForTimeout(300); await p.screenshot({ path: out, fullPage: true });
  for (const i of info) console.log(JSON.stringify(i));
  await b.close(); server.close(); fs.unlinkSync(path.join(ROOT, 'WebDemo/tools/tripo/.sheet.html'));
})().catch((e) => { console.error(e); process.exit(1); });
