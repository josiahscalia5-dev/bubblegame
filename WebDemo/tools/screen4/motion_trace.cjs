// Screen 4 motion trace (diagnostic only; changes nothing in the game; sixteenth session).
//   S3=intunnel,water9 [SCRIPT=swipejump|straight] node tools/screen4/motion_trace.cjs <abs WebDemo> <out.json>
// Seed 7, the painted Tap to Start layer off, advance(0.5), tap, then the game stepped 1/30 s at a time for 5 s, the
// gestures through the game's own handlers (__bw.swipe: changeLane / jump, as the pointer input calls them): swipe left at
// +1.0 s, right at +1.9 s, jump at +2.8 s (the 51_swim clip's timing). Every frame it records, from the live objects:
//   her pose (centre height, bob, lean, pitch, yaw, flip, squash), the camera, her centre on screen (px of a 1536-px-tall
//   frame), the water under her (W.surface), and heroSwell's frame (uC: where the mound sits; uLat / uAir / uLand: how it
//   answers her), so her motion RELATIVE to the camera, to the mound and to the floor water can be read off.
// A small canvas (1:2, as the 538 x 1076 stage) keeps the per-frame render cheap; positions are shares of the frame.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,water9').split(',').filter(Boolean);
const SCRIPT = process.env.SCRIPT || 'swipejump';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 350, height: 538 }, deviceScaleFactor: 1 })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(([s3, tune]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = tune; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [S3, JSON.parse(process.env.TUNE || '{}')]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const trace = await page.evaluate((SCRIPT) => {
    const bw = window.__bw, d = bw.debug(), m = d.mascotState, cam = d.camera, W = d.world, L = d.layout;
    const swell = d.scene.getObjectByName('heroSwell'), su = swell && swell.material.uniforms;
    const V = cam.position.constructor;
    const rect = document.getElementById('stage').getBoundingClientRect();
    const scr = (v) => { const p = v.clone().project(cam); return [(p.x + 1) / 2 * 1536 * rect.width / rect.height, (1 - p.y) / 2 * 1536]; };   // px of a 1536-px-tall frame
    const rows = [];
    const rec = (ev) => {
      const st = bw.state(), t = st.time, root = m.root.position.clone();
      const surf = W.surface(L, m.x, m.z, t), ride = W.baseHeight(L, m.x, m.z);
      const r = { t: +t.toFixed(3), ev, phase: st.phase, speed: st.speed, hearts: st.hearts, coins: st.coins, gems: st.gems, socks: st.socks, knocks: st.knocks, bumps: st.bumps, z: st.z, x: +m.x.toFixed(4), xv: +m.xv.toFixed(3), lane: m.lane, air: m.air,
        yAbs: +m.yAbs.toFixed(4), surf: +surf.toFixed(4), ride: +ride.toFixed(4),
        leanDeg: +(m.lean * 180 / Math.PI).toFixed(2), rollDeg: +(m.tilt.rotation.z * 180 / Math.PI).toFixed(2), pitchDeg: +(m.tilt.rotation.x * 180 / Math.PI).toFixed(2),
        yawDeg: +(m.tilt.rotation.y * 180 / Math.PI).toFixed(2), flipDeg: +(m.flip * 180 / Math.PI).toFixed(1), squashY: +m.squash.scale.y.toFixed(4),
        her: scr(root).map((v) => +v.toFixed(1)), cam: cam.position.toArray().map((v) => +v.toFixed(4)) };
      // (her DRAWN centre: her model's group, which ?s3=...,swim offsets for the swim rhythm; elsewhere her root)
      const drawn = m.squash.getWorldPosition(root.clone());
      r.drawn = scr(drawn).map((v) => +v.toFixed(1));
      if (su && swell.visible) {
        const C = su.uC.value.clone(), U = su.uU.value.clone();
        r.swellC = C.toArray().map((v) => +v.toFixed(4));
        r.swellScr = scr(C).map((v) => +v.toFixed(1));
        r.herAboveSwellBase = +root.clone().sub(C).dot(U).toFixed(4);   // metres: her centre above the mound's base
        r.drawnAboveSwellBase = +drawn.clone().sub(C).dot(U).toFixed(4);   // metres: her DRAWN centre above it
        r.swellLat = +su.uLat.value.toFixed(3); r.swellAir = +su.uAir.value.toFixed(3); r.swellLand = +su.uLand.value.toFixed(3);
        r.swellLagX = +su.uPX.value.toFixed(4);
      }
      rows.push(r);
    };
    bw.advance(0.5); rec('start');
    bw.tap(); rec('tap');
    const plan = SCRIPT === 'swipejump' ? { 30: 'left', 57: 'right', 84: 'up' } : {};
    for (let i = 1; i <= 150; i++) {
      bw.advance(1 / 30, 30);
      if (plan[i]) { bw.swipe(plan[i]); rec('swipe_' + plan[i]); } else rec('');
    }
    return rows;
  }, SCRIPT);
  fs.writeFileSync(OUT, JSON.stringify({ s3: S3, script: SCRIPT, logs, trace }, null, 0));
  console.log('frames', trace.length, logs.length ? 'errors: ' + logs.join(' | ') : 'no console errors');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
