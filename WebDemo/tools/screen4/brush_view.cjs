// Standalone render of the fluffy brush (src/fluffy_brush.js) against tunnel blue, for side-by-side review with the
// approved Screen 4 brush crops before it goes into the game.
//   node brush_view.cjs <demo-dir (absolute)> <out-dir> ['<fluffy tune json>'] [spin degrees list, default 0]
// Writes right_face.png and left_face.png (face-on, turned 22 degrees toward the tunnel as the approved brushes are; with
// a spin list, one pair per spin angle) and stats.json (shells, cards, triangles, console errors).
const path = require('path'), fs = require('fs'), http = require('http');
const [ROOT, OUT, TUNE = '{}', SPINS = '0'] = process.argv.slice(2);
const esbuild = require(path.join(ROOT, 'node_modules/esbuild'));
const { chromium } = require('playwright');
fs.mkdirSync(OUT, { recursive: true });
const work = fs.mkdtempSync(path.join(OUT, '.build-'));
fs.writeFileSync(path.join(work, 'entry.js'), `
import * as THREE from 'three';
import { makeFluffyBrush } from ${JSON.stringify(path.join(ROOT, 'src/fluffy_brush.js'))};
const W = 700, H = 700;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(W, H); renderer.setPixelRatio(1); document.body.appendChild(renderer.domElement);
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene(); scene.background = new THREE.Color('#1d4fd0');
const cam = new THREE.PerspectiveCamera(30, W / H, 0.05, 50);
const brushes = { right: makeFluffyBrush(false), left: makeFluffyBrush(true) };
window.__stats = brushes.right.userData.fluffy;
window.__show = (which, spinDeg) => {
  for (const k in brushes) scene.remove(brushes[k]);
  const b = brushes[which]; scene.add(b);
  b.rotation.set(0, (which === 'right' ? -1 : 1) * THREE.MathUtils.degToRad(22), THREE.MathUtils.degToRad(spinDeg));
  cam.position.set(0, 0.12, 5.6); cam.lookAt(0, 0, 0);
  renderer.render(scene, cam);
};
window.__ready = true;
`);
(async () => {
  await esbuild.build({ entryPoints: [path.join(work, 'entry.js')], bundle: true, outfile: path.join(work, 'bundle.js'), format: 'iife',
    define: { 'window.__BW_S3_TUNE__': JSON.stringify({ fluffy: JSON.parse(TUNE) }) }, nodePaths: [path.join(ROOT, 'node_modules')], logLevel: 'error' });
  fs.writeFileSync(path.join(work, 'index.html'), '<!doctype html><meta charset="utf-8"><body style="margin:0"><script src="bundle.js"></script>');
  const server = http.createServer((q, r) => { const p = path.join(work, q.url.split('?')[0].replace(/^\/+/, '') || 'index.html'); if (!fs.existsSync(p)) { r.writeHead(404); return r.end(); } r.writeHead(200); fs.createReadStream(p).pipe(r); });
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 700 } })).newPage();
  const logs = []; page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text()); }); page.on('pageerror', (e) => logs.push(e.message));
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  try { await page.waitForFunction(() => window.__ready, null, { timeout: 120000 }); } catch (e) { console.error(logs.join('\n')); throw e; }
  const canvas = page.locator('canvas');
  for (const spin of SPINS.split(',').map(Number)) {
    const suffix = SPINS === '0' ? '' : `_spin${spin}`;
    for (const which of ['right', 'left']) { await page.evaluate(([w, s]) => window.__show(w, s), [which, spin]); await canvas.screenshot({ path: path.join(OUT, `${which}_face${suffix}.png`) }); }
  }
  fs.writeFileSync(path.join(OUT, 'stats.json'), JSON.stringify({ ...(await page.evaluate(() => window.__stats)), consoleErrors: logs }, null, 1));
  console.log(JSON.stringify({ ...(await page.evaluate(() => window.__stats)), consoleErrors: logs.length }), logs.slice(0, 3).join(' | '));
  await browser.close(); server.close(); fs.rmSync(work, { recursive: true, force: true });
})().catch((e) => { console.error(e.message.split('\n')[0]); process.exit(1); });
