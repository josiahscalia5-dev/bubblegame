// Scratch probe (baseline test only): do grime balls, a brush and a soap bar change gameplay state when she does NOT avoid them?
// Seed 7, ?s3=intunnel,structmatch,level1, viewport 135x270. node hit_probe.cjs <demo-dir>
const { chromium } = require('playwright'); const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 135, height: 270 } })).newPage();
  const logs = []; page.on('pageerror', (e) => logs.push(e.message)); page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 200)); });
  await page.addInitScript(() => { window.__BW_TEST__ = true; window.__BW_S3__ = ['intunnel', 'structmatch', 'level1'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; });
  await page.goto(`http://localhost:${server.address().port}/index.html`, { timeout: 300000 });
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const r = await page.evaluate(() => {
    const bw = window.__bw, S = () => bw.state(), log = [];
    const snap = (tag) => { const s = S(); return { tag, t: +(s.time - (s.startedAt || 0)).toFixed(2), u: +s.z.toFixed(2), lane: s.lane, hearts: s.hearts, knocks: s.knocks, speed: +(+s.speed).toFixed(2), phase: s.phase, socks: s.socks, sec: window.__bwLevel1 && window.__bwLevel1.section }; };
    const pilot = (avoid) => { const st = S(), u = st.z, plan = window.__bwLevel1Plan();
      const hz = (bw.hazards() || []).filter((h) => !h.cleared).map((h) => [h.u, h.side > 0 ? 0 : 2]); const b = [false, false, false];
      for (const [bu, bl] of [...plan.brushes, ...plan.enemies, ...hz]) { const d = bu - u; if (d > -0.6 && d < 6.5) b[bl] = true; }
      for (const bu of plan.bars) { const d = bu - u; if (d > 0.9 && d < 1.6 && !st.air) bw.swipe('up'); }
      if (avoid && b[st.lane]) { const w = [1, 0, 2].find((l) => !b[l]); if (w < st.lane) bw.swipe('left'); else if (w > st.lane) bw.swipe('right'); } };
    const runTo = (uEnd, mode, tag) => { let prev = snap(tag + ':start'); log.push(prev); let n = 0;
      while (S().z < uEnd && n < 3000 && S().phase === 'running') { n++;
        if (mode === 'avoid') pilot(true);
        else if (mode === 'middle') { const l = S().lane; if (l < 1) bw.swipe('right'); else if (l > 1) bw.swipe('left'); }
        else if (mode === 'nojump') { /* no input at all */ }
        bw.step(0.1); const s = snap(tag); if (s.hearts !== prev.hearts || s.knocks !== prev.knocks) log.push({ ...s, event: 'hearts/knocks changed', speedBefore: prev.speed }); prev = s; }
      log.push(snap(tag + ':end')); };
    bw.advance(0.5); bw.tap();
    runTo(48, 'avoid', 'drum');               // through the Screen 4 drum
    runTo(56, 'middle', 'brushes-middle');    // brush [52,0]? keep middle: brushes at 64,1 / 71,1 are middle
    runTo(75, 'middle', 'brushes-middle2');
    runTo(140, 'avoid', 'avoid');
    runTo(160, 'nojump', 'bars-nojump');      // soap bars at 146, 156: no jump
    runTo(205, 'avoid', 'avoid2');
    runTo(250, 'middle', 'enemies-middle');   // grime balls at 214,1 and 236,1 (rolling toward her)
    runTo(345, 'avoid', 'to-finish');
    bw.step(1.5); log.push(snap('after-finish'));
    return { log, l1: window.__bwLevel1 && { u: window.__bwLevel1.u, section: window.__bwLevel1.section, complete: window.__bwLevel1.complete, socks: window.__bwLevel1.socks },
      doneShown: !!document.querySelector('#l1Done.show'), doneText: (document.querySelector('#l1Done') || {}).innerText || '' };
  });
  console.log(JSON.stringify({ ...r, errors: logs }, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
