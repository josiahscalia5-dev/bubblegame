// s56 (session ac4e3449): real frames of the live game in the s56 tunnel. A seeded, deterministic capture (not a mock-up):
//   S3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56 ZS=tap,60,219,230 [LANE=1 VW=432 VH=768 DPR=1 TUNE='{json}' DUMP=1 WAIT=2.5]
//   flock /tmp/bw_browser.lock node shots56.cjs <ABSOLUTE WebDemo dir> <out dir>
// `tap` = the Tap to Start view (Scene 5's composition in the game); a number = the mascot placed at that track distance u (running) in LANE;
// `tapR<sec>` = Tap to Start, then running from the start for <sec> seconds (real gameplay frames, no placement).
// TUNE is merged into window.__bwS56 before each shot (live tuning). DUMP=1 prints the visible named meshes near the camera (legacy hunt).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56').split(',').filter(Boolean);
const ZS = (process.env.ZS || 'tap').split(','), LANE = +(process.env.LANE ?? 1);
const VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1), WAIT = +(process.env.WAIT || 2.5);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webp': 'image/webp' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const T0 = Date.now(), log = (...a) => console.error(((Date.now() - T0) / 1000).toFixed(1) + 's', ...a);
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const errs = []; page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 300)); }); page.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 }); log('ready');
  await page.evaluate((w) => new Promise((r) => setTimeout(r, w * 1000)), WAIT);
  const tune = async () => { if (process.env.TUNE) await page.evaluate((j) => { const d = JSON.parse(j), S = window.__bwS56; if (S) for (const k in d) S[k] = d[k]; }, process.env.TUNE); };
  let started = false; const out = [];
  for (const z of ZS) {
    await tune();
    const info = await page.evaluate(({ z, LANE, started, dump }) => {
      const B = window.__bw, d = B.debug();
      if (z === 'tap') { B.advance(1.0); }
      else if (z.startsWith('tapR')) { if (!started) B.tap(); B.advance(+z.slice(4)); }
      else { if (!started) { B.tap(); B.step(0.3); } const m = d.mascotState; m.z = +z - 1.0; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.step(1.0 / 7.2, 30); m.z = +z; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.advance(0.4); }
      const st = B.state(), r = { z, state: { phase: st.phase, z: st.z, x: st.x, coins: st.coins, socks: st.socks, hearts: st.hearts }, s56: window.__bwS56Report || null };
      if (dump) { const cam = d.camera, seen = {}; const V = cam.position.constructor, v = new V();
        d.scene.traverse((o) => { if (!o.isMesh && !o.isPoints && !o.isSprite) return; let vis = true, p = o; while (p) { if (!p.visible) { vis = false; break; } p = p.parent; } if (!vis) return;
          o.getWorldPosition(v); if (v.distanceTo(cam.position) > 40 && !(o.geometry && o.geometry.boundingSphere && o.geometry.boundingSphere.radius > 30)) return;
          const n = (o.name || '(noname)') + ':' + o.type + ':' + (o.material && (o.material.type || '')); seen[n] = (seen[n] || 0) + 1; });
        r.visible = seen; }
      return r; }, { z, LANE, started, dump: !!process.env.DUMP });
    if (z !== 'tap') started = true;
    await page.waitForTimeout(150);
    const file = path.join(OUT, `s56_${z}.png`); await page.screenshot({ path: file, timeout: 300000 }); log('shot', z);
    out.push(info);
  }
  console.log(JSON.stringify({ errors: errs.slice(0, 10), shots: out }, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
