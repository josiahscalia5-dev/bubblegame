// girl13/girl3 (session b57cc1e7): ONE continuous recording of the real game at true speed: the Laundry Toss screen, START, the whole opening
// (stepped exactly at FPS through the opening's own clock), the hand-over into the live game, Tap to Start, then PLAY seconds of real play with
// pointer-free inputs through the game's own API (tap, swipes) while the game is stepped at FPS. Every frame is a real screenshot.
//   S3=<switches> [FPS=24 VW=432 VH=768 DPR=1 WAIT=1 PLAY=5 MAXSEQ=16] flock /tmp/bw_browser.lock node record_full.cjs <ABS WebDemo dir> <out dir>
// Writes <out>/frames/f_00000.jpg..., <out>/log.json (states, inputs, console errors); encode with ffmpeg at FPS.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || '').split(','), FPS = +(process.env.FPS || 24), VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1);
const WAIT = +(process.env.WAIT || 1), PLAY = +(process.env.PLAY || 5), MAXSEQ = +(process.env.MAXSEQ || 16);
fs.mkdirSync(path.join(OUT, 'frames'), { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const T0 = Date.now(), log = (...a) => console.error(((Date.now() - T0) / 1000).toFixed(1) + 's', ...a);
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const errors = []; page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 300)); }); page.on('pageerror', (e) => errors.push('PAGEERROR ' + e.message));
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  for (let i = 0; i < 150; i++) { const c = await page.evaluate(() => ({ ready: document.body.classList.contains('ready'), hero: !!(window.__bwO3D && window.__bwO3D.state().heroReady), t3: !!(window.__bwTripo3 && window.__bwTripo3.ready), g3: !window.__bwGirl3 || window.__bwGirl3.ready }));
    if (c.ready && c.hero && c.t3 && c.g3) break; await page.waitForTimeout(2000); }
  log('ready');
  const play = await page.$('#bwHome .screen:not(.off) .go'); if (play) await play.click(); await page.waitForTimeout(400);
  let n = 0; const frame = async () => { await page.screenshot({ path: path.join(OUT, 'frames', `f_${String(n++).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 90, timeout: 240000 }); };
  const L = { fps: FPS, inputs: [], states: [] };
  // the waiting Laundry Toss screen
  for (let i = 0; i < Math.round(WAIT * FPS); i++) { await page.evaluate((it) => window.__bwO3D.seek(it, -1, 1 / 30), 4.5 + i / FPS); await frame(); }
  const b = (await page.$('#bwHome .s6bar .startgo')) || (await page.$('#bwHome .screen:not(.off) .go')); if (b) await b.click(); L.inputs.push(['START', 0]);
  // the opening on its own clock, then the hand-over (the live game behind it is drawn by the same seek)
  let s = 0, done = false; const END = await page.evaluate(() => (window.__bwSix2 && window.__bwSix2.seqEnd) || 0); L.seqEnd = END; log('seqEnd', END);
  while (s < Math.min(MAXSEQ, END + 0.35)) {
    s += 1 / FPS; const st = await page.evaluate(([a, bb, d]) => { window.__bwO3D.seek(a, bb, d); return window.__bwO3D.state(); }, [6 + s, s, 1 / FPS]);
    await frame(); if (n % FPS === 0) { L.states.push(['opening', +s.toFixed(2), st && st.seq]); log('seq', s.toFixed(2)); }
  }
  // the live game: Tap to Start, then real play stepped at FPS with swipes
  const st0 = await page.evaluate(() => window.__bw.state()); L.afterOpening = { phase: st0.phase, z: st0.z, lane: st0.lane };
  for (let i = 0; i < Math.round(0.8 * FPS); i++) { await page.evaluate((f) => window.__bw.advance(1 / f, f), FPS); await frame(); }
  await page.evaluate(() => window.__bw.tap()); L.inputs.push(['tap', n]);
  const plan = { [Math.round(1.2 * FPS)]: 'left', [Math.round(2.4 * FPS)]: 'right', [Math.round(3.4 * FPS)]: 'up', [Math.round(4.4 * FPS)]: 'right' };
  for (let i = 0; i < Math.round(PLAY * FPS); i++) {
    if (plan[i]) { await page.evaluate((d) => window.__bw.swipe(d), plan[i]); L.inputs.push([plan[i], n]); }
    const g = await page.evaluate((f) => { const x = window.__bw.advance(1 / f, f); return { phase: x.phase, z: +x.z.toFixed(2), lane: x.lane, coins: x.coins, speed: x.speed && +(+x.speed).toFixed(2) }; }, FPS);
    await frame(); if (i % FPS === 0) L.states.push(['play', i / FPS, g]);
  }
  L.final = await page.evaluate(() => { const x = window.__bw.state(); return { phase: x.phase, z: x.z, lane: x.lane, coins: x.coins }; });
  L.frames = n; L.errors = errors;
  fs.writeFileSync(path.join(OUT, 'log.json'), JSON.stringify(L, null, 1)); console.log(JSON.stringify({ frames: n, handOver: L.handOverSeen, after: L.afterOpening, final: L.final, inputs: L.inputs, errors: errors.slice(0, 5) }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
