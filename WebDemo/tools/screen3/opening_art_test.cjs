// Tests the approved-artwork opening screen in the real game (headless Chromium, the game's own test hooks).
//   node opening_art_test.cjs <demo-dir> <out-dir>
// Real mouse clicks and key presses go through the page, as a player's would; game time is stepped with __bw.advance.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const Q = process.env.QUERY || '';   // e.g. ?phaseA
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
const ART = { w: 735, h: 1476, gear: [657.4, 70.0], tap: [355, 1283] };   // painted gear and "Tap to Start" in the artwork's pixels
const report = {};
let browser;

async function open(query, viewport) {
  const page = await (await browser.newContext({ viewport })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(`[${m.type()}] ${m.text()}`); });
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));
  await page.addInitScript(() => { window.__BW_TEST__ = true; });
  await page.goto(`http://localhost:${server.address().port}/index.html${query}`);
  await page.waitForFunction(() => document.body.classList.contains('ready') || /could not load/.test(document.body.innerText), null, { timeout: 300000 });
  page.logs = logs;
  return page;
}
const look = (page) => page.evaluate(() => {
  const art = document.getElementById('openingArt'), btn = document.getElementById('soundBtn'), cs = (id) => getComputedStyle(document.getElementById(id));
  const s = window.__bw.state();
  return { phase: s.phase, time: s.time, z: s.z, camera: s.camera, artShown: !!art && getComputedStyle(art).visibility === 'visible', artOpacity: art ? +getComputedStyle(art).opacity : null,
    bodyClass: document.body.classList.contains('openingArt'), banner: cs('banner').visibility + '/' + (+cs('banner').opacity).toFixed(2), startPanel: cs('startPanel').visibility + '/' + (+cs('startPanel').opacity).toFixed(2),
    settingsOpacity: +getComputedStyle(btn).opacity, settingsPressed: btn.getAttribute('aria-pressed'), sound: btn.title };
});
const stageShot = async (page, file) => page.screenshot({ path: path.join(OUT, file), clip: await page.locator('#stage').boundingBox(), fullPage: true });
// where a point of the artwork is on screen
const artPoint = (page, [ax, ay]) => page.evaluate(([ax, ay, w, h]) => { const el = document.getElementById("openingArt"), r = el.getBoundingClientRect(), k = Math.min(r.width / w, r.height / h), dw = w * k, ox = r.left + (r.width - dw) / 2, oy = r.top; return [ox + ax * k, oy + ay * k]; }, [ax, ay, ART.w, ART.h]);
const hit = (page, [x, y]) => page.evaluate(([x, y]) => { const e = document.elementFromPoint(x, y); return e ? (e.id || e.tagName.toLowerCase()) : null; }, [x, y]);

(async () => {
  await new Promise((r) => server.listen(0, r));
  browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });

  // ---- 1:2 stage (538 x 1076), the approved screens' shape
  let page = await open(Q, { width: 700, height: 1076 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await stageShot(page, '01_opening_1x2.png');
  const r = {};
  r.atStart = await look(page);
  r.artBox = await page.evaluate(() => { const a = document.getElementById('openingArt').getBoundingClientRect(), s = document.getElementById('stage').getBoundingClientRect(); return { art: [a.left - s.left, a.top - s.top, a.width, a.height].map((v) => +v.toFixed(1)), stage: [s.width, s.height] }; });
  const gear = await artPoint(page, ART.gear), tap = await artPoint(page, ART.tap);
  const btn = await page.locator('#soundBtn').boundingBox();
  r.settingsButtonVsPaintedGear = { paintedGear: gear.map((v) => +v.toFixed(1)), liveButtonCentre: [+(btn.x + btn.width / 2).toFixed(1), +(btn.y + btn.height / 2).toFixed(1)] };
  r.whatATouchReaches = { paintedGear: await hit(page, gear), paintedTapToStart: await hit(page, tap), screenCentre: await hit(page, [btn.x - 200, 500]) };
  // settings: a real click on the painted gear
  await page.mouse.click(gear[0], gear[1]);
  r.afterSettingsClick = await look(page);
  await page.mouse.click(gear[0], gear[1]);
  r.afterSecondSettingsClick = await look(page);
  // Tap to Start: a real click on the painted "Tap to Start"
  await page.mouse.click(tap[0], tap[1]);
  r.afterTap = await look(page);
  // the transition, frame by frame (game seconds since the tap), into the tunnel
  r.transition = [];
  let since = 0;
  for (const [t, file] of [[1 / 30, '02_t0.03.png'], [0.1, '03_t0.10.png'], [0.2, '04_t0.20.png'], [0.3, '05_t0.30.png'], [0.45, '06_t0.45.png'], [1.0, '07_t1.0.png'], [2.5, '08_t2.5.png'], [4.0, '09_t4.0_tunnel.png'], [5.5, '10_t5.5_tunnel.png']]) {
    await page.evaluate((d) => window.__bw.advance(d), t - since); since = t;
    await stageShot(page, file);
    r.transition.push({ since: +t.toFixed(2), ...(await look(page)) });
  }
  r.logs = page.logs;
  report.stage1x2 = r;
  await page.context().close();

  // ---- keyboard start
  page = await open(Q, { width: 700, height: 1076 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.keyboard.press('Enter');
  report.keyboard = { afterEnter: await look(page), logs: page.logs };
  await page.context().close();

  // ---- ?classic: the original opening, no artwork
  page = await open('?classic', { width: 700, height: 1076 });
  await page.evaluate(() => window.__bw.advance(0.5));
  await stageShot(page, '11_classic_1x2.png');
  report.classic = { atStart: await look(page), logs: page.logs };
  const ctap = await page.locator('#startPanel').boundingBox();
  await page.mouse.click(ctap.x + ctap.width / 2, ctap.y + ctap.height * 0.55);
  report.classic.afterTap = await look(page);
  await page.context().close();

  // ---- phones: a tall one (390 x 844) and a 16:9 one (375 x 667)
  for (const [w, h, name] of [[390, 844, '12_phone_390x844.png'], [375, 667, '13_phone_375x667.png']]) {
    page = await open(Q, { width: w, height: h });
    await page.evaluate(() => window.__bw.advance(0.5));
    await page.screenshot({ path: path.join(OUT, name) });
    const g = await artPoint(page, ART.gear), t = await artPoint(page, ART.tap), b = await page.locator('#soundBtn').boundingBox();
    const p = { atStart: await look(page), paintedGear: g.map((v) => +v.toFixed(1)), liveButton: [b.x, b.y, b.width, b.height].map((v) => +v.toFixed(1)), touchAtPaintedGear: await hit(page, g), touchAtPaintedTap: await hit(page, t) };
    await page.mouse.click(g[0], g[1]); p.afterSettingsClick = await look(page);
    await page.mouse.click(t[0], t[1]); p.afterTap = await look(page);
    p.logs = page.logs;
    report[`phone${w}x${h}`] = p;
    await page.context().close();
  }

  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 1));
  console.log(JSON.stringify(report, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
