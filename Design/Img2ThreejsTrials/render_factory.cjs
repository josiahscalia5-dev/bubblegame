// Render an img2threejs-generated factory (TypeScript) in headless Chromium with the game's own three.js (0.170.0) and
// esbuild, for the skill's review steps.
//   node render_factory.cjs <factory.ts> <out-dir> [factoryExportName]
// Writes front.png, right.png, rear.png, left.png (the turntable gate's 0/90/180/270) and stats.json (triangles, draw
// calls, console errors, and any image request: there must be none).
// Bubble Wash rule: no approved-image pixels in the model. The generated code would load the reference albedo/roughness
// maps (made from the approved crop) with TextureLoader, so every `"usable": true` reference block is switched to false
// in the bundled copy; the factory then uses its procedural maps only.
const path = require('path'), fs = require('fs'), http = require('http');
const WEBDEMO = path.resolve(__dirname, '../../WebDemo');
const esbuild = require(path.join(WEBDEMO, 'node_modules/esbuild'));
const { chromium } = require('playwright');
const [TS, OUT, NAME = 'createBubbleWashRollerBrushModel'] = process.argv.slice(2);
fs.mkdirSync(OUT, { recursive: true });
const work = fs.mkdtempSync(path.join(OUT, '.build-'));
const src = fs.readFileSync(TS, 'utf8').replace(/"usable": true/g, '"usable": false');
const tsCopy = path.join(work, 'factory.ts'); fs.writeFileSync(tsCopy, src);
const entry = path.join(work, 'entry.ts');
fs.writeFileSync(entry, `
import * as THREE from 'three';
import { ${NAME} as make } from './factory.ts';
const W = 600, H = 600;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.setPixelRatio(1); document.body.appendChild(renderer.domElement);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene(); scene.background = new THREE.Color('#2a5ad8');
scene.add(new THREE.HemisphereLight(0x9fd8ff, 0x2a3cc0, 0.9));
const key = new THREE.DirectionalLight(0xfff4fa, 2.2); key.position.set(0.35, 0.85, 0.42); scene.add(key);
const rim = new THREE.DirectionalLight(0xffd6f0, 1.2); rim.position.set(-0.5, 0.2, -0.8); scene.add(rim);
const model = make({});
scene.add(model);
const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3()), centre = box.getCenter(new THREE.Vector3());
const cam = new THREE.PerspectiveCamera(35, W / H, 0.01, 100);
const dist = Math.max(size.x, size.y, size.z) / (2 * Math.tan(THREE.MathUtils.degToRad(35 / 2))) * 1.25;
let tris = 0, draws = 0; model.traverse((o) => { if (o.isMesh) { draws++; const n = o.geometry.index ? o.geometry.index.count / 3 : o.geometry.attributes.position.count / 3; tris += n * (o.isInstancedMesh ? o.count : 1); } });
window.__stats = { triangles: Math.round(tris), drawCalls: draws, size: size.toArray().map((v) => +v.toFixed(3)), centre: centre.toArray().map((v) => +v.toFixed(3)) };
// the brush's face looks along +Z (the spec turns the hub's axis onto Z)
window.__view = (az) => { const a = THREE.MathUtils.degToRad(az); cam.position.set(centre.x + Math.sin(a) * dist, centre.y, centre.z + Math.cos(a) * dist); cam.lookAt(centre); renderer.render(scene, cam); };
window.__flat = () => { model.traverse((o) => { if (o.isMesh) { const c = o.material && o.material.color ? o.material.color.clone() : new THREE.Color(0x888888); o.material = new THREE.MeshBasicMaterial({ color: c }); } }); };
window.__ready = true;
`);
(async () => {
  await esbuild.build({ entryPoints: [entry], bundle: true, outfile: path.join(work, 'bundle.js'), format: 'iife', loader: { '.ts': 'ts' },
    nodePaths: [path.join(WEBDEMO, 'node_modules')], logLevel: 'error' });
  fs.writeFileSync(path.join(work, 'index.html'), '<!doctype html><meta charset="utf-8"><body style="margin:0;background:#000"><script src="bundle.js"></script>');
  const server = http.createServer((q, r) => { const p = path.join(work, q.url.split('?')[0].replace(/^\/+/, '') || 'index.html'); if (!fs.existsSync(p)) { r.writeHead(404); return r.end(); } r.writeHead(200); fs.createReadStream(p).pipe(r); });
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 600, height: 600 } })).newPage();
  const logs = []; page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text()); }); page.on('pageerror', (e) => logs.push(e.message));
  const failed = []; page.on('requestfailed', (q) => failed.push(q.url())); page.on('request', (q) => { if (/\.(png|jpe?g)$/i.test(q.url())) failed.push('IMAGE REQUESTED: ' + q.url()); });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => window.__ready, null, { timeout: 120000 });
  const canvas = page.locator('canvas');
  for (const [name, az] of [['front', 0], ['right', 90], ['rear', 180], ['left', 270]]) { await page.evaluate((a) => window.__view(a), az); await canvas.screenshot({ path: path.join(OUT, `${name}.png`) }); }
  // the skill's map-stripped evidence: every material swapped for an unlit flat colour (no maps, no lights)
  await page.evaluate(() => window.__flat());
  await page.evaluate(() => window.__view(0)); await canvas.screenshot({ path: path.join(OUT, 'flat_front.png') });
  const stats = await page.evaluate(() => window.__stats);
  fs.writeFileSync(path.join(OUT, 'stats.json'), JSON.stringify({ ...stats, consoleErrors: logs, imageRequests: failed }, null, 1));
  console.log(JSON.stringify({ ...stats, consoleErrors: logs.length, imageRequests: failed.length }));
  await browser.close(); server.close(); fs.rmSync(work, { recursive: true, force: true });
})().catch((e) => { console.error(e); process.exit(1); });
