// Screens 1-2 (?s3=...,home) driven like a phone user, recorded unedited (Playwright video), with the game's state checked.
//   [QUICK=1: Screens 1-2 only] [VIDEO=0] [DPR=1] node tools/screens12/screens12_check.cjs <abs WebDemo> <out dir> [s3=intunnel,structmatch,home] [view=412x839]
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, S3 = 'intunnel,structmatch,home', VIEW = '412x839'] = process.argv.slice(2);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  await new Promise((r) => server.listen(0, r));
  const [VW, VH] = VIEW.split('x').map(Number);
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const proxy = process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY, bypass: 'localhost,127.0.0.1' } : undefined;
  const ctx = await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: +(process.env.DPR || 1), hasTouch: true, isMobile: true, ignoreHTTPSErrors: true, proxy,
    recordVideo: process.env.VIDEO === '0' ? undefined : { dir: OUT, size: { width: VW, height: VH } } });
  const page = await ctx.newPage(); page.setDefaultTimeout(180000);
  const logs = []; page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`${m.type()}: ${m.text()}`); }); page.on('pageerror', (e) => logs.push('pageerror: ' + e.message));
  const t0 = Date.now(), mark = (s) => console.log(`${((Date.now() - t0) / 1000).toFixed(1)} s  ${s}`);
  await page.goto(`http://localhost:${server.address().port}/index.html?s3=${S3}`);
  await page.waitForSelector('#bwHome .screen'); await sleep(1500);
  await page.screenshot({ path: `${OUT}/01_screen1_home.png` }); mark('Screen 1 (home) shown');
  await page.tap('#bwHome nav button[aria-label="Levels"]'); await sleep(500); await page.screenshot({ path: `${OUT}/02_levels_panel.png` }); mark('Levels panel opened');
  await page.tap('#bwHome .modal [data-close]'); await sleep(300);
  await page.tap('#bwHome nav button[aria-label="Settings"]'); await sleep(300);
  const s0 = await page.textContent('#bwHome [data-sound]'); await page.tap('#bwHome [data-sound]'); await sleep(200);
  const s1 = await page.textContent('#bwHome [data-sound]'); await page.screenshot({ path: `${OUT}/03_settings_panel.png` }); mark(`Settings: sound ${s0} -> ${s1}`);
  await page.tap('#bwHome [data-sound]'); await page.tap('#bwHome .modal [data-close]'); await sleep(300);
  await page.tap('#bwHome .go[aria-label="Play"]'); await sleep(700); mark('PLAY tapped: Screen 2 (Laundry Toss)');
  await page.screenshot({ path: `${OUT}/04_screen2_laundry_toss_loading.png` });
  await page.waitForFunction(() => document.body.classList.contains('ready') && !document.querySelector('#bwHome .go[aria-label="Start the adventure"]').disabled, null, { timeout: 300000 });
  await sleep(400); await page.screenshot({ path: `${OUT}/05_screen2_laundry_toss.png` }); mark('the game has loaded underneath: START enabled');
  if (process.env.QUICK === '1') { await ctx.close(); await browser.close(); server.close(); console.log(JSON.stringify({ quick: true, logs })); return; }
  const before = await page.evaluate(() => ({ phase: window.__bw.state().phase, overlay: !!document.getElementById('bwHome') }));
  await page.tap('#bwHome .go[aria-label="Start the adventure"]'); mark('START tapped: the toss');
  for (const [ms, name] of [[350, '06_toss_a'], [450, '07_toss_b'], [450, '08_dive']]) { await sleep(ms); await page.screenshot({ path: `${OUT}/${name}.png` }); }
  await page.waitForFunction(() => !document.getElementById('bwHome'), null, { timeout: 60000 }); mark('hand-over done: the live Screen 4');
  await sleep(1200); await page.screenshot({ path: `${OUT}/09_screen4_after_handover.png` });
  const after = await page.evaluate(() => ({ phase: window.__bw.state().phase }));
  await page.tap('#stage', { position: { x: VW / 2, y: VH / 2 } }); mark('tapped the stage: the run starts');
  await sleep(3500); await page.screenshot({ path: `${OUT}/10_screen4_running.png` });
  const run = await page.evaluate(() => { const s = window.__bw.state(); return { phase: s.phase, z: s.z, coins: s.coins }; });
  await ctx.close(); await browser.close(); server.close();
  fs.writeFileSync(`${OUT}/check.json`, JSON.stringify({ view: VIEW, s3: S3, sound: [s0, s1], before, after, run, logs }, null, 1));
  console.log(JSON.stringify({ before, after, run, consoleErrors: logs.length }));
  if (logs.length) console.log(logs.slice(0, 8).join('\n'));
})().catch((e) => { console.error(e); process.exit(1); });
