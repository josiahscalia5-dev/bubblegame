// diagnostic: shots6 + per-object screen coverage numbers. Usage: TIMES=.. node diag.cjs <WebDemo> <out>
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2').split(',');
const TIMES = (process.env.TIMES || '-1').split(',').map(Number), VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const T0 = Date.now(), log = (...a) => console.error(((Date.now() - T0) / 1000).toFixed(1) + 's', ...a);
const DIAG = () => {
  const D = window.__bwSix2dbg, cam = D.camera, sc = D.scene; const V3 = cam.position.constructor;
  const vis = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
  const cover = (o) => {   // screen rect of the object's world bbox (NDC clipped), fraction of screen, min/max view depth
    o.updateMatrixWorld(true); let xmin = 9, xmax = -9, ymin = 9, ymax = -9, zmin = 1e9, zmax = -1e9, n = 0, meshes = 0, vm = 0;
    o.traverse((m) => { if (!m.isMesh || !m.geometry) return; meshes++; if (vis(m)) vm++; else return; if (!m.geometry.boundingBox) m.geometry.computeBoundingBox(); const b = m.geometry.boundingBox;
      for (let i = 0; i < 8; i++) { const v = new V3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(m.matrixWorld);
        const vv = v.clone().applyMatrix4(cam.matrixWorldInverse); const z = -vv.z; zmin = Math.min(zmin, z); zmax = Math.max(zmax, z); if (z <= 0.01) continue; v.project(cam); n++;
        xmin = Math.min(xmin, v.x); xmax = Math.max(xmax, v.x); ymin = Math.min(ymin, v.y); ymax = Math.max(ymax, v.y); } });
    const cx0 = Math.max(-1, xmin), cx1 = Math.min(1, xmax), cy0 = Math.max(-1, ymin), cy1 = Math.min(1, ymax);
    const fr = n && cx1 > cx0 && cy1 > cy0 ? (cx1 - cx0) * (cy1 - cy0) / 4 : 0;
    const wp = o.getWorldPosition(new V3());
    return { meshes, visMeshes: vm, world: [wp.x, wp.y, wp.z].map((x) => +x.toFixed(3)), scr: n ? [xmin, xmax, ymin, ymax].map((x) => +((x + 1) / 2).toFixed(3)) : null, frac: +fr.toFixed(4), depth: [+zmin.toFixed(2), +zmax.toFixed(2)] };
  };
  const out = { cam: { pos: cam.position.toArray().map((x) => +x.toFixed(3)), fov: +cam.fov.toFixed(1), dir: cam.getWorldDirection(new V3()).toArray().map((x) => +x.toFixed(3)), near: cam.near, far: cam.far } };
  const tun = sc.getObjectByName('six_tunnelProps'), t5 = sc.getObjectByName('six2TunnelArches');
  out.tunVisible = tun && vis(tun); out.t5Visible = t5 && vis(t5);
  out.housings = []; if (tun) tun.children.forEach((c, i) => { if (c.isGroup && c.children.some((k) => k.name === 'housingTripo3')) out.housings.push(cover(c)); });
  const gear = sc.getObjectByName('gearTripo3'); out.gear = gear ? cover(gear.parent) : null;
  out.t5 = t5 ? cover(t5) : null; out.tun = tun ? cover(tun) : null;
  const vt = sc.getObjectByName('vortex'), vw = sc.getObjectByName('vortexWater'); out.vortexVis = vt && vis(vt); out.waterVis = vw && vis(vw); out.waterY = vw && vw.position.y;
  out.hero = cover(D.hero);
  return out;
};
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const logs = []; page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); }); page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message + ' ' + (e.stack || '').slice(0, 400)));
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`); log('loaded');
  const cond = () => ({ ready: document.body.classList.contains('ready'), o3d: !!window.__bwO3D, hero: !!(window.__bwO3D && window.__bwO3D.state().heroReady), t2: !!(window.__bwTripo2 && window.__bwTripo2.ready), t3: !!(window.__bwTripo3 && window.__bwTripo3.ready) });
  for (let i = 0; i < 120; i++) { const c = await page.evaluate(cond); if (c.ready && c.hero && c.t2 && c.t3) break; if (i % 10 === 0) log(JSON.stringify(c), logs.slice(-2)); await page.waitForTimeout(2000); }
  log('ready');
  if (process.env.TUNE) await page.evaluate((j) => { const d = JSON.parse(j); for (const k in d) window.__bwSix2[k] = d[k]; }, process.env.TUNE);
  if (process.env.EVAL) await page.evaluate((j) => { (0, eval)(j); }, process.env.EVAL);
  if (process.env.MATS) { const mats = await page.evaluate(() => { const D = window.__bwSix2dbg, o = []; const seen = new Set();
      D.washer.g.traverse((m) => { if (!m.isMesh || !m.visible) return; for (const mt of [].concat(m.material)) { if (seen.has(mt)) continue; seen.add(mt);
        o.push({ mesh: m.name, par: m.parent && m.parent.name, type: mt.type, name: mt.name, color: mt.color && mt.color.getHexString(), emis: mt.emissive && mt.emissive.getHexString(), ei: mt.emissiveIntensity, metal: mt.metalness, rough: mt.roughness, env: mt.envMapIntensity, map: !!mt.map, orm: !!mt.metalnessMap, nrm: !!mt.normalMap, op: mt.opacity, tr: mt.transparent }); } }); return o; });
    fs.writeFileSync(path.join(OUT, 'washer_mats.json'), JSON.stringify(mats, null, 1)); }
  const play = await page.$('#bwHome .screen:not(.off) .go'); if (play) await play.click(); await page.waitForTimeout(500);
  if (process.env.UI === '0') await page.evaluate(() => { const h = document.getElementById('bwHome'); for (const c of h.children) if (c.tagName !== 'CANVAS') c.style.visibility = 'hidden'; });
  let s = 0, started = false; const diag = {};
  for (const t of TIMES) {
    if (t < 0) { await page.evaluate(() => window.__bwO3D.seek(4.5, -1)); }
    else { if (!started) { started = true; const b = (await page.$('#bwHome .s6bar .startgo')) || (await page.$('#bwHome .screen:not(.off) .go')); if (b && process.env.UI !== '0') await b.click(); s = 0; }
      while (s < t - 1e-6) { const d = Math.min(1 / 30, t - s); s += d; await page.evaluate(([a, b, dd]) => window.__bwO3D.seek(a, b, dd), [6 + s, s, d]); } }
    await page.waitForTimeout(200); await page.screenshot({ path: path.join(OUT, `t_${t.toFixed(2)}.png`), timeout: 240000 }); log('shot', t);
    diag[t] = await page.evaluate(DIAG);
  }
  fs.writeFileSync(path.join(OUT, 'diag.json'), JSON.stringify(diag, null, 1));
  console.log(JSON.stringify({ logs: logs.slice(0, 8) }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
