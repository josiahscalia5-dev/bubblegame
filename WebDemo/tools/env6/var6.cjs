// env6 (session ddf175f2): ONE seeded gameplay frame of the live game at a track distance u, re-rendered once per VARIANT with __bw.render()
// (render() never steps the game, so every variant is the SAME frame: camera, coins, enemies, drops). Each variant is JS run in the page
// before its render (d = __bw.debug(), scene, B = __bw; window.__bwS56 / __bwArch56 / __bwBrush6 are live), then UNDONE by reloading
// nothing: variants are applied in order, so write each as a full setting (or use `reset` code shared by all, run before each variant).
//   VARS='[["tag","code"],...]' RESET='code' S3=... Z=206 LANE=1 VW=432 VH=768 DPR=2 flock /tmp/bw_browser.lock node var6.cjs <ABS WebDemo> <out dir>
// or VARS=@file.json. Writes <out>/<tag>.png (page screenshot, HUD included) and <out>/var6.json (errors, returns of each variant's code).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56').split(',').filter(Boolean);
const Z = +(process.env.Z || 206), LANE = +(process.env.LANE ?? 1);
const VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 2);
let VARS = process.env.VARS || '[["full",""]]'; if (VARS.startsWith('@')) VARS = fs.readFileSync(VARS.slice(1), 'utf8'); VARS = JSON.parse(VARS);
const RESET = process.env.RESET || '';
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
  await page.evaluate(() => new Promise((r) => setTimeout(r, 2500)));
  // the same placement as tools/s56/shots56.cjs (u 206 = the coordinator's Scene 6 frame), then the game is frozen (no more steps)
  const st = await page.evaluate(({ Z, LANE }) => { const B = window.__bw, d = B.debug();
    B.tap(); B.step(0.3); const m = d.mascotState; m.z = Z - 1.0; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.step(1.0 / 7.2, 30); m.z = Z; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.advance(0.4);
    window.__bwFreeze = true; const s = B.state(); return { phase: s.phase, z: s.z, x: s.x, coins: s.coins, hearts: s.hearts }; }, { Z, LANE });
  log('placed', JSON.stringify(st));
  const out = { s3: S3, z: Z, state: st, vars: [] };
  for (const [tag, code] of VARS) {
    const r = await page.evaluate(({ code, reset }) => { const B = window.__bw, d = B.debug(); let ret = null;
      if (reset) (new Function('d', 'scene', 'B', reset))(d, d.scene, B);
      if (code) ret = (new Function('d', 'scene', 'B', code))(d, d.scene, B);
      if (window.__bwS56Sync) window.__bwS56Sync();
      B.render(); return ret === undefined ? null : ret; }, { code, reset: RESET });
    await page.waitForTimeout(60);
    await page.screenshot({ path: path.join(OUT, tag + '.png'), timeout: 300000 }); log('shot', tag);
    out.vars.push({ tag, ret: r });
  }
  out.errors = errs.slice(0, 20);
  fs.writeFileSync(path.join(OUT, 'var6.json'), JSON.stringify(out, null, 1));
  console.log(JSON.stringify({ errors: out.errors, n: out.vars.length }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
