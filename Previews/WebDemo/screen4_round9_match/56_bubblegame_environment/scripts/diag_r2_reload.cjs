// Read-only diagnostic for the r2_func second-load timeout (7 November, eighteenth session). A copy of the start of
// WebDemo/tools/screen3/r2_func.cjs (same server, browser flags, seeded Math.random, S3 switch, hearts loop), plus
// timestamps, frame-cost and responsiveness probes, and a 30-minute limit on the second page load instead of 5.
//   S3=intunnel [VW=538 VH=1076] node diag_r2_reload.cjs <WebDemo dir>
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const T0 = Date.now();
const log = (...a) => console.log(`[${((Date.now() - T0) / 1000).toFixed(1).padStart(7)} s]`, ...a);
const within = (ms, p) => Promise.race([p, new Promise((r) => setTimeout(() => r('NO ANSWER within ' + ms / 1000 + ' s'), ms))]);
(async () => {
  await new Promise((r) => server.listen(0, r));
  const VW = +(process.env.VW || 538), VH = +(process.env.VH || 1076);
  log(`viewport ${VW}x${VH}, S3=${process.env.S3 || 'round2'}`);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH } })).newPage();
  page.on('domcontentloaded', () => log('event domcontentloaded'));
  page.on('load', () => log('event load'));
  page.on('crash', () => log('event CRASH'));
  page.on('framenavigated', (f) => { if (f === page.mainFrame()) log('event framenavigated', f.url()); });
  page.on('request', (q) => { if (q.resourceType() === 'document') log('request document', q.url()); });
  page.on('response', (s) => { if (s.request().resourceType() === 'document') log('response document', s.status()); });
  page.on('pageerror', (e) => log('pageerror', e.message));
  await page.addInitScript((s3) => {
    window.__BW_TEST__ = true; window.__BW_S3__ = s3;
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, (process.env.S3 || 'round2').split(','));
  const url = `http://localhost:${server.address().port}/index.html`;
  const fresh = async (limit) => {
    const t = Date.now();
    await page.goto(url, { timeout: limit, waitUntil: 'domcontentloaded' }); log(`goto reached domcontentloaded after ${((Date.now() - t) / 1000).toFixed(1)} s`);
    await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: limit }); log(`game ready after ${((Date.now() - t) / 1000).toFixed(1)} s`);
  };
  const probe = async (label) => {
    const t = Date.now(); const r = await within(120000, page.evaluate(() => 1));
    log(`${label}: page answers a script call in ${typeof r === 'string' ? r : ((Date.now() - t) / 1000).toFixed(2) + ' s'}`);
  };
  const fps = async (label) => {
    const r = await within(120000, page.evaluate(() => new Promise((res) => { let n = 0; const t0 = performance.now();
      const f = () => { n++; if (performance.now() - t0 < 3000) requestAnimationFrame(f); else res((n / ((performance.now() - t0) / 1000)).toFixed(2)); }; requestAnimationFrame(f); })));
    log(`${label}: the page's own animation loop runs at ${r} frames/s`);
  };

  await fresh(300000);
  await probe('after the first load'); await fps('after the first load');
  const one = await page.evaluate(() => { const t = performance.now(); window.__bw.advance(1 / 30, 30); return performance.now() - t; });
  log(`one advance() (one game step + one render) took ${(one / 1000).toFixed(2)} s of script time`);
  await page.reload({ timeout: 300000, waitUntil: 'domcontentloaded' }).catch((e) => log('reload error', e.message.split('\n')[0]));
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  log('reloaded for the hearts run (same starting state as r2_func)');

  // r2_func section 1, unchanged: ride the left lane into every left brush until the restart.
  let t = Date.now();
  const hearts = await page.evaluate(() => {
    const bw = window.__bw; bw.tap(); const seq = []; let last = 5, outAt = null, back = null, iters = 0;
    for (let i = 0; i < 30 * 40; i++) {
      iters++;
      const s = bw.state();
      if (s.phase === 'running' && s.lane !== 0 && s.z > -10) bw.swipe('left');
      bw.advance(1 / 30, 30);
      const n = bw.state();
      if (n.hearts !== last) { seq.push({ t: n.time, z: n.z, lap: n.laps, hearts: n.hearts, heartsText: document.getElementById('hearts').textContent }); last = n.hearts; }
      if (n.hearts === 0 && outAt === null) outAt = { t: n.time, toast: getComputedStyle(document.getElementById('r2Toast')).opacity };
      if (outAt && n.phase === 'intro') { back = { t: n.time, after: +(n.time - outAt.t).toFixed(2), hearts: n.hearts, restarts: n.restarts, z: n.z, heartsText: document.getElementById('hearts').textContent, pauseBtn: getComputedStyle(document.getElementById('pauseBtn')).visibility }; break; }
    }
    return { seq, outAt, back, knocks: bw.state().knocks, iters };
  });
  log(`hearts loop: ${hearts.iters} advance() calls in ${((Date.now() - t) / 1000).toFixed(1)} s; knocks ${hearts.knocks}, back at t=${hearts.back && hearts.back.t}`);
  await probe('right after the hearts loop'); await fps('right after the hearts loop');
  await probe('10 s later');

  // r2_func's second load (where it timed out), now with a 30-minute limit.
  log('second load starts (r2_func gives it 300 s)');
  try { await fresh(1800000); } catch (e) { log('second load FAILED:', e.message.split('\n')[0]); }
  await probe('after the second load'); await fps('after the second load');
  await browser.close(); server.close(); log('done');
})().catch((e) => { log('ERROR', e.message); process.exit(1); });
