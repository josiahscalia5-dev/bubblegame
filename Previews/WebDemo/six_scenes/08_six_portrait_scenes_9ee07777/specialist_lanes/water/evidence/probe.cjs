// water probe: seek the six2 opening to REAL time T (frame by frame), then report the scene numbers that decide whether the drum water is visible
// usage: T=7.6 flock /tmp/bw_browser.lock node probe.cjs <WebDemo dir> <out dir>
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = 'intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2'.split(',');
const T = +(process.env.T || 7.6), VW = 432, VH = 768;
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: 1 })).newPage();
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  for (let i = 0; i < 120; i++) { const c = await page.evaluate(() => document.body.classList.contains('ready') && window.__bwO3D && window.__bwO3D.state().heroReady && window.__bwTripo2 && window.__bwTripo2.ready && window.__bwTripo3 && window.__bwTripo3.ready); if (c) break; await page.waitForTimeout(2000); }
  const play = await page.$('#bwHome .screen:not(.off) .go'); if (play) await play.click(); await page.waitForTimeout(500);
  await page.evaluate(() => { const h = document.getElementById('bwHome'); for (const c of h.children) if (c.tagName !== 'CANVAS') c.style.visibility = 'hidden'; });
  const b = (await page.$('#bwHome .s6bar .startgo')); if (b) await b.click({ force: true }).catch(() => {});
  let s = 0; while (s < T - 1e-6) { const d = Math.min(1 / 30, T - s); s += d; await page.evaluate(([a, b, dd]) => window.__bwO3D.seek(a, b, dd), [6 + s, s, d]); }
  const info = await page.evaluate(() => {
    const D = window.__bwSix2dbg, sc = D.scene, cam = D.camera, THREE = null;
    const r = (v) => v.toArray().map((x) => +x.toFixed(3));
    const out = { cam: r(cam.position), fov: cam.fov, aspect: +cam.aspect.toFixed(3) };
    const byName = {}; sc.traverse((o) => { if (o.name) byName[o.name] = o; });
    
    const box = (o) => { const B = new (D.hero.position.constructor === undefined ? Object : Object)(); return null; };
    // world bounding boxes via geometry
    const bb = (o) => { let mn = [1e9, 1e9, 1e9], mx = [-1e9, -1e9, -1e9]; o.updateMatrixWorld(true); o.traverse((m) => { if (!m.isMesh || !m.visible) return; const g = m.geometry; if (!g.boundingBox) g.computeBoundingBox(); const b = g.boundingBox.clone().applyMatrix4(m.matrixWorld); for (let i = 0; i < 3; i++) { mn[i] = Math.min(mn[i], b.min.getComponent(i)); mx[i] = Math.max(mx[i], b.max.getComponent(i)); } }); return [mn.map((x) => +x.toFixed(3)), mx.map((x) => +x.toFixed(3))]; };
    out.hero = r(D.hero.position); out.heroBox = bb(D.heroBody);
    out.washerBox = bb(D.washer.g);
    const W = byName.vortexWater, V = byName.vortex;
    out.water = { pos: r(W.position), scale: r(W.scale), vis: W.visible, uFrom: W.material.uniforms.uFrom.value, uFill: V.material.uniforms.uFill.value, uGlow: V.material.uniforms.uGlow.value, uFlow: V.material.uniforms.uFlow.value };
    const g = D.washer.glass; const gp = g.getWorldPosition(D.hero.position.clone()); out.glass = { pos: r(gp), scale: r(g.getWorldScale(D.hero.position.clone())), opacity: g.material.opacity, vis: g.visible, r: g.geometry.parameters.radius };
    out.door = { rotY: D.washer.door.rotation.y, pos: r(D.washer.door.getWorldPosition(D.hero.position.clone())) };
    // project points
    const proj = (x, y, z) => { const v = D.hero.position.clone().set(x, y, z).project(cam); return [+((v.x + 1) / 2 * innerWidth).toFixed(1), +((1 - v.y) / 2 * innerHeight).toFixed(1)]; };
    out.px = { porthole: proj(0.3, 0.62, 0.27), portTop: proj(0.3, 0.9, 0.27), portBot: proj(0.3, 0.34, 0.27), portL: proj(0.02, 0.62, 0.27), portR: proj(0.58, 0.62, 0.27), heroC: proj(...D.hero.position.toArray()),
      waterAtHero: proj(0.33, W.position.y + 0.385, -0.09), waterAtGlass: proj(0.33, W.position.y + 0.385, 0.25), heroTop: proj(0.33, out.heroBox[1][1], -0.09), heroBot: proj(0.33, out.heroBox[0][1], -0.09) };
    // what is under screen points (raycast through porthole)
    const ray = new (Object.getPrototypeOf(D.hero).constructor === undefined ? Object : Object)();
    return out;
  });
  console.log(JSON.stringify(info));
  // raycasts through the porthole
  const hits = await page.evaluate(() => {
    const D = window.__bwSix2dbg, sc = D.scene, cam = D.camera; const res = [];
    const RC = window.__bwRaycaster; return null;
  });
  await page.screenshot({ path: path.join(OUT, `probe_${T.toFixed(2)}.png`) });
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
