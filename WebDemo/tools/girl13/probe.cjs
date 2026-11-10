// girl13 (10 November 2026, session b57cc1e7): real frames of the opening's Scene 1 waiting frame, plus a close-up of the girl's head, and the
// projected screen positions of her bones. Usage:
//   [S3=list] [VW=432 VH=768 DPR=1] [CLOSE=1 CLOSED=1.5 CLOSEUP=0.14] [FRONT=1] [FIT='{json}'] [TUNE='{json merged into window.__bwSix2}'] [G13='{json merged into window.__bwGirl13}'] [T=-1]
//   flock /tmp/bw_browser.lock node tools/girl13/probe.cjs <ABSOLUTE WebDemo dir> <out dir> [tag]
// Writes <tag>_full.png (the game camera), <tag>_close.png (CLOSE=1: a close-up of her head along the game camera's line of sight) and <tag>.json.
// T = real seconds after START (-1 = the waiting Laundry Toss screen), as in tools/six2/shots6.cjs.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, TAG = 'g'] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56').split(',');
const VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1), T = +(process.env.T || -1);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const T0 = Date.now(), log = (...a) => console.error(((Date.now() - T0) / 1000).toFixed(1) + 's', ...a);
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const logs = []; page.on('console', (m) => { if (m.type() === 'error') logs.push(m.text().slice(0, 300)); }); page.on('pageerror', (e) => logs.push('PAGEERROR ' + e.message + ' ' + (e.stack || '').slice(0, 400)));
  await page.addInitScript(([s3, g13]) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art']; if (g13) window.__bwGirl13Init = JSON.parse(g13);
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, [S3, process.env.G13 || '']);
  await page.goto(`http://localhost:${server.address().port}/index.html`); log('loaded');
  const cond = () => ({ ready: document.body.classList.contains('ready'), hero: !!(window.__bwO3D && window.__bwO3D.state().heroReady), t2: !!(window.__bwTripo2 && window.__bwTripo2.ready), t3: !!(window.__bwTripo3 && window.__bwTripo3.ready), g13: !window.__bwGirl13 || !!window.__bwGirl13.ready, g3: !window.__bwGirl3 || !!window.__bwGirl3.ready || window.__bwGirl3.errors.length > 0 });
  for (let i = 0; i < 120; i++) { const c = await page.evaluate(cond); if (c.ready && c.hero && c.t2 && c.t3 && c.g13 && c.g3) break; if (i % 10 === 0) log(JSON.stringify(c), logs.slice(-2)); await page.waitForTimeout(2000); }
  log('ready');
  if (process.env.TUNE) await page.evaluate((j) => { const d = JSON.parse(j); for (const k in d) window.__bwSix2[k] = d[k]; }, process.env.TUNE);
  const play = await page.$('#bwHome .screen:not(.off) .go'); if (play) await play.click(); await page.waitForTimeout(500);
  await page.evaluate(() => { const h = document.getElementById('bwHome'); for (const c of h.children) if (c.tagName !== 'CANVAS') c.style.visibility = 'hidden'; });
  const seekTo = async () => {
    if (T < 0) await page.evaluate(() => window.__bwO3D.seek(4.5, -1));
    else { let s = 0; while (s < T - 1e-6) { const d = Math.min(1 / 30, T - s); s += d; await page.evaluate(([a, b, dd]) => window.__bwO3D.seek(a, b, dd), [6 + s, s, d]); } }
  };
  await seekTo(); await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(OUT, `${TAG}_full.png`), timeout: 240000 }); log('full');
  const info = await page.evaluate(() => {
    const d = window.__bwSix2dbg, cam = d.camera, out = { cam: cam.position.toArray().map((v) => +v.toFixed(3)), fov: cam.fov, bones: {} };
    const V = (o) => { const v = new cam.position.constructor(); o.getWorldPosition(v); return v; };
    for (const [k, b] of Object.entries(d.g2.B || {})) { const w = V(b), p = w.clone().project(cam); out.bones[k] = { w: w.toArray().map((v) => +v.toFixed(3)), sx: +((p.x + 1) / 2).toFixed(3), sy: +((1 - p.y) / 2).toFixed(3) }; }
    return out; });
  if (process.env.G3T) {   // girl3: frames at these clip times (s), the rest of the scene held at the waiting frame
    for (const t of process.env.G3T.split(',').map(Number)) {
      await page.evaluate((tt) => { window.__bwGirl3.t = tt; }, t); await seekTo(); await page.waitForTimeout(150);
      await page.screenshot({ path: path.join(OUT, `${TAG}_g3_${t.toFixed(2)}.png`), timeout: 240000 }); log('g3', t);
    }
    info.g3 = await page.evaluate(() => { const a = window.__bwGirl3; return { ready: a.ready, clip: a.clip, dur: a.dur, tracks: a.tracks, bones: a.bones, shared: a.shared, errors: a.errors }; });
  }
  if (process.env.FIT) {   // a real game camera fitted to a reference's framing: FIT='{"band":1.7067,"G":[x,y],"M":[x,y],"H":[x,y],"W":[x,y]}' (fractions of the reference)
    const fit = await page.evaluate(([fitJ, aspect]) => {
      const R = JSON.parse(fitJ), d = window.__bwSix2dbg, cam = d.camera, V3 = cam.position.constructor, F = window.__bwGirl13 && window.__bwGirl13.frame ? window.__bwGirl13.frame() : null;
      const head = new V3(); d.g2.B.head.getWorldPosition(head);
      const G = F ? F.c.clone() : head.clone().add(new V3(0, 0.2, 0)), Mo = G.clone().add(new V3(0, -0.07, 0));
      const H = new V3(); d.hero.getWorldPosition(H); H.y += 0.04;
      const Wp = new V3(); (d.washer.glass || d.washer.door || d.washer.g).getWorldPosition(Wp);
      const bh = aspect / R.band, top = (1 - bh) / 2, T = (f) => [f[0], top + f[1] * bh];
      const L = [[G, T(R.G), 3], [Mo, T(R.M), 2], [H, T(R.H), 2], [Wp, T(R.W), 1]];
      const c = cam.clone(); c.aspect = aspect;
      const err = (p) => { c.position.set(p[0], p[1], p[2]); c.lookAt(p[3], p[4], p[5]); c.fov = p[6]; c.updateProjectionMatrix(); c.updateMatrixWorld(true);
        let e = 0; for (const [w, t, k] of L) { const v = w.clone().project(c); if (v.z > 1) return 1e9; const sx = (v.x + 1) / 2, sy = (1 - v.y) / 2; e += k * (((sx - t[0]) * aspect) ** 2 + (sy - t[1]) ** 2); } return e; };
      let sd = 99; const r = () => { sd = (sd * 1664525 + 1013904223) >>> 0; return sd / 4294967296; };
      const tg = new V3(); cam.getWorldDirection(tg); tg.multiplyScalar(2).add(cam.position);
      let best = 1e9, bp = null;
      for (let run = 0; run < 6; run++) {
        let p = [cam.position.x, cam.position.y, cam.position.z - 1.0 - run * 0.2, G.x + 0.3, G.y - 0.1, G.z, 34], b = err(p); const st = [0.25, 0.15, 0.3, 0.2, 0.15, 0.2, 5];
        for (let it = 0; it < 9000; it++) { const i = it % 7, q = p.slice(); q[i] += (r() - 0.5) * 2 * st[i] * (1 - it / 10000); q[6] = Math.min(60, Math.max(14, q[6])); const e = err(q); if (e < b) { b = e; p = q; } }
        if (b < best) { best = b; bp = p; }
      }
      window.__bwSix2.cam = [[-1, bp.slice(0, 3), bp.slice(3, 6), bp[6]], [99, bp.slice(0, 3), bp.slice(3, 6), bp[6]]];
      return { err: best, cam: bp.map((x) => +x.toFixed(3)), band: [top, bh] };
    }, [process.env.FIT, VW / VH]);
    await seekTo(); await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(OUT, `${TAG}_fit.png`), timeout: 240000 }); log('fit', JSON.stringify(fit));
    fs.writeFileSync(path.join(OUT, `${TAG}_fit.json`), JSON.stringify(fit));
  }
  if (process.env.FRONT === '1') {   // straight in front of her face (girl13's face frame), for placing the face layer's features
    await page.evaluate(([dist]) => { const F = window.__bwGirl13.frame(), P = F.c.clone().addScaledVector(F.f, dist);
      window.__bwSix2.cam = [[-1, P.toArray(), F.c.toArray(), 24], [99, P.toArray(), F.c.toArray(), 24]]; window.__bwFrontUp = F.up.toArray(); }, [+(process.env.CLOSED || 0.7)]);
    await seekTo(); await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(OUT, `${TAG}_front.png`), timeout: 240000 }); log('front');
  }
  if (process.env.CLOSE === '1') {   // a close-up of her head along the game camera's line of sight (the same light, the same frame)
    await page.evaluate(([dist, up]) => { const d = window.__bwSix2dbg, cam = d.camera, H = new cam.position.constructor(); d.g2.B.head.getWorldPosition(H); H.y += up;
      const P = cam.position.clone().sub(H).normalize().multiplyScalar(dist).add(H);
      window.__bwSix2.__camSave = window.__bwSix2.cam; window.__bwSix2.cam = [[-1, P.toArray(), H.toArray(), 30], [99, P.toArray(), H.toArray(), 30]]; }, [+(process.env.CLOSED || 1.5), +(process.env.CLOSEUP || 0.14)]);
    await seekTo(); await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(OUT, `${TAG}_close.png`), timeout: 240000 }); log('close');
  }
  info.g13 = await page.evaluate(() => window.__bwGirl13 ? { ready: window.__bwGirl13.ready, ms: window.__bwGirl13.ms, cells: window.__bwGirl13.cells } : null);
  fs.writeFileSync(path.join(OUT, `${TAG}.json`), JSON.stringify({ logs, info }, null, 1));
  console.log(JSON.stringify({ logs: logs.slice(0, 6), cam: info.cam, head: info.bones.head, g13: info.g13 }));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
