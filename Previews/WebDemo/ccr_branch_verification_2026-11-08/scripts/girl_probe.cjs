// Proof that the rigged Tripo girl animates in the REAL game (branch ccr-76d4bc77-rqhl8o, 8 November 2026, session 8140e507).
// Loads the game (?s3=intunnel,structmatch,home,level1, seed 7, Pixel 7 412 x 915, touch), clicks START on Home and on the
// Laundry Toss screen like a player, steps the opening at 30 fps and at each sample measures, inside the live three.js scene
// (scenes collected through three.js's own __THREE_DEVTOOLS__ 'observe' events): her SkinnedMesh and bones, her hands', head's
// and spine's world pose, her eyelids (blinks), the laundry, the pink mascot and the camera; saves a screenshot per sample.
// Then the hand-over into the game, Tap to Start, a tap, 3 s of play with a swipe, and the game's own state.
//   node girl_probe.cjs <demo-dir> <out-dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 412, height: 915 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true })).newPage();
  const logs = [], glbs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => logs.push('pageerror: ' + e.message));
  page.on('response', (r) => { if (/\.glb$/.test(r.url())) glbs.push([r.url().replace(/^.*?\/models\//, 'models/'), r.status()]); });
  await page.addInitScript(() => {
    window.__BW_S3__ = ['intunnel', 'structmatch', 'home', 'level1']; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    window.__probeScenes = []; window.__THREE_DEVTOOLS__ = new EventTarget();
    window.__THREE_DEVTOOLS__.addEventListener('observe', (e) => { if (e.detail && e.detail.isScene) window.__probeScenes.push(e.detail); });
  });
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready') && window.__bwO3D && window.__bwO3D.state().heroReady, null, { timeout: 300000 });
  const measure = () => page.evaluate(() => {
    let g = null, sc = null; for (const s of window.__probeScenes) { const o = s.getObjectByName('girl2'); if (o) { g = o; sc = s; } }
    if (!g) return { girl2: false };
    const P = (o) => { const v = o.getWorldPosition(new o.position.constructor()); return [v.x, v.y, v.z].map((x) => +x.toFixed(3)); };
    const Q = (o) => { const q = o.getWorldQuaternion(new o.quaternion.constructor()); return [q.x, q.y, q.z, q.w].map((x) => +x.toFixed(3)); };
    const skinned = [], bones = {}; g.traverse((o) => { if (o.isSkinnedMesh) skinned.push({ name: o.name, bones: o.skeleton.bones.length, verts: o.geometry.attributes.position.count }); if (o.isBone) bones[o.name.replace(/[^A-Za-z]/g, '')] = o; });
    const lids = []; g.traverse((o) => { if (o.isMesh && !o.isSkinnedMesh && o.parent && o.parent.isBone) lids.push({ visible: o.visible, sy: +o.scale.y.toFixed(3) }); });
    let hero = null; sc.traverse((o) => { if (!hero && /mascot|hero|pink/i.test(o.name) && o.visible) hero = o; });
    const st = window.__bwO3D.state();
    return { girl2: true, visible: g.visible, skinned, boneCount: Object.keys(bones).length, boneNames: Object.keys(bones),
      handL: bones.handL && P(bones.handL), handR: bones.handR && P(bones.handR), head: bones.head && P(bones.head), headQ: bones.head && Q(bones.head), spineQ: bones.spine && Q(bones.spine),
      lids, hero: hero ? { name: hero.name, pos: P(hero) } : null, laundry: st.laundry, cam: st.cam, idle: st.idle, seq: st.seq, landed: st.landed };
  });
  const out = { build: null, samples: [] };
  out.build = await page.evaluate(() => [...document.scripts].map((s) => s.src).filter(Boolean));
  const sample = async (label) => { await page.waitForTimeout(250); await page.screenshot({ path: path.join(OUT, label + '.png'), timeout: 240000 }); const m = await measure(); out.samples.push({ label, ...m }); console.log(label, JSON.stringify({ handL: m.handL, handR: m.handR, headQ: m.headQ, lids: m.lids, hero: m.hero, cam: m.cam })); };
  // Home: waiting (breathing, swaying); a blink at idle 2.76 s (blinkAt(it, 3.1, 0.4))
  for (const t of [0, 1.0, 2.76]) { await page.evaluate((x) => window.__bwO3D.seek(x, -1), t); await sample(`a_home_idle_${t.toFixed(2)}`); }
  await page.click('#bwHome .screen:not(.off) .go'); await page.waitForTimeout(500);
  await page.evaluate(() => window.__bwO3D.seek(4.5, -1)); await sample('b_toss_screen_idle_4.50');
  await page.click('#bwHome .screen:not(.off) .go'); await page.waitForTimeout(450);
  let s = 0;
  for (const t of [0.3, 0.6, 1.0, 1.4, 1.8, 2.4, 3.0, 3.6, 4.4, 5.2]) {
    while (s < t - 1e-6) { const d = Math.min(1 / 30, t - s); s += d; await page.evaluate(([a, b, dd]) => window.__bwO3D.seek(a, b, dd), [6 + s, s, d]); }
    await sample(`c_seq_${t.toFixed(2)}`);
  }
  while (s < 6.2) { s += 1 / 30; await page.evaluate(([a, b]) => window.__bwO3D && window.__bwO3D.seek(a, b), [6 + s, s]); }
  await page.waitForTimeout(900); await page.evaluate(() => window.__bw.advance(0.1));
  await page.screenshot({ path: path.join(OUT, 'd_game_tap_to_start.png'), timeout: 240000 });
  const st0 = await page.evaluate(() => window.__bw.state()); out.tapToStart = st0;
  await page.evaluate(() => window.__bw.tap()); await page.evaluate(() => window.__bw.advance(1.5));
  await page.evaluate(() => window.__bw.swipe && window.__bw.swipe('left')); await page.evaluate(() => window.__bw.advance(1.5));
  await page.screenshot({ path: path.join(OUT, 'e_game_3s_after_swipe.png'), timeout: 240000 });
  out.after3s = await page.evaluate(() => window.__bw.state());
  out.logs = logs; out.glbs = glbs;
  fs.writeFileSync(path.join(OUT, 'probe.json'), JSON.stringify(out, null, 1));
  console.log('glbs', JSON.stringify(glbs.filter((g) => /opening|mascot/.test(g[0]))));
  console.log('logs', JSON.stringify(logs));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
