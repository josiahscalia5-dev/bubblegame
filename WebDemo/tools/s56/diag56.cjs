// s56 (lane s56, session ac4e3449): the pale-patch diagnosis. ONE frozen gameplay frame per checkpoint (seed 7, the same steps as shots56.cjs),
// re-rendered once per variant with __bw.render() (render() never steps the game, so every variant is the SAME frame, the same camera, the
// same splash drops). Each variant switches one component of the s56 water / post chain; the canvas pixels are read straight after the render
// (no HUD), so the numbers measure the 3D picture only.
//   flock /tmp/bw_browser.lock node diag56.cjs <ABSOLUTE WebDemo dir> <out dir>      [ZS=tap,206 LANE=1 VW=432 VH=768 DPR=1 ONLY=tag1,tag2]
// Stages (material.defines.S56_STAGE on the s56 water; the shader either has them built in, or this tool inserts them into the old shader):
//   0 = a flat green flag (the exact water mask), 1 = solid cobalt, 2 = + wave-height colour (with the geometry's displacement),
//   3 = + lighting (the face / normal term), 4 = + fresnel tint, 5 = + specular sun and glints (reflections), 6 = + crest lines,
//   7 = + lace, 8 = + collar and wake round him, 9 = + the far haze (= the full water shader).
// Post variants: bloom on / off, the grade pass neutral (sat 1, contrast 1), tone mapping off; scene variants: the splash drops and the
// game's particle points hidden. Measure with diag56.py.
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56').split(',').filter(Boolean);
const ZS = (process.env.ZS || 'tap,206').split(','), LANE = +(process.env.LANE ?? 1);
const VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1);
const ONLY = process.env.ONLY ? process.env.ONLY.split(',') : null;
fs.mkdirSync(OUT, { recursive: true });
// [tag, stage, bloom, extra]
const VARIANTS = [
  ['mask', 0, false, {}],
  ['st1_solid', 1, false, {}],
  ['st2_flat', 2, false, { flat: true }],
  ['st2_height', 2, false, {}],
  ['st3_light', 3, false, {}],
  ['st4_fresnel', 4, false, {}],
  ['st5_spec', 5, false, {}],
  ['st6_crest', 6, false, {}],
  ['st7_lace', 7, false, {}],
  ['st8_collar', 8, false, {}],
  ['st9_full', 9, false, {}],
  ['st1_solid_bloom', 1, true, {}],
  ['st9_full_bloom', 9, true, {}],
  ['st9_bloom_nograde', 9, true, { nograde: true }],
  ['st9_bloom_notonemap', 9, true, { notm: true }],
  ['st9_bloom_nodrops', 9, true, { nodrops: true }],
];
// the old (pre-stage) shader: guard each component with S56_STAGE (exact statements of s56_tunnel.js at 9bf99e9b)
const OLD_PATCH = [
  ['c *= 0.72 + 0.3 * face;', 'if (S56_STAGE >= 3) c *= 0.72 + 0.3 * face;'],
  ['c = mix(c, vec3(0.2, 0.4, 0.75), fr * 0.25);', 'if (S56_STAGE >= 4) c = mix(c, vec3(0.2, 0.4, 0.75), fr * 0.25);'],
  ['c += vec3(0.85, 0.97, 1.2) * sp * 1.1 + vec3(0.8, 0.9, 1.1) * gl * 0.3;', 'if (S56_STAGE >= 5) c += vec3(0.85, 0.97, 1.2) * sp * 1.1 + vec3(0.8, 0.9, 1.1) * gl * 0.3;'],
  ['crest = max(crest, lace);', 'if (S56_STAGE < 6) crest = 0.0; if (S56_STAGE >= 7) crest = max(crest, lace);'],
  ['float white = clamp(crest + collar + wk * 0.8, 0.0, 1.0);', 'float white = clamp(crest + (S56_STAGE >= 8 ? collar + wk * 0.8 : 0.0), 0.0, 1.0);'],
  ['c = s56Haze(c, vW);\n        gl_FragColor', 'if (S56_STAGE >= 9) c = s56Haze(c, vW);\n        if (S56_STAGE == 0) c = vec3(0.0, 1.0, 0.0); if (S56_STAGE == 1) c = vec3(0.0, 0.15, 0.66);\n        gl_FragColor'],
];
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webp': 'image/webp' };
const server = http.createServer((req, res) => { const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res); });
const T0 = Date.now(), log = (...a) => console.error(((Date.now() - T0) / 1000).toFixed(1) + 's', ...a);
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const errs = []; page.on('console', (m) => { if (m.type() === 'error' || /S56DIAG/.test(m.text())) errs.push(m.text().slice(0, 400)); }); page.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 }); log('ready');
  await page.evaluate(() => new Promise((r) => setTimeout(r, 2500)));
  // install the stage switch once
  const how = await page.evaluate((OLD_PATCH) => {
    const d = window.__bw.debug(); let mat = null; d.scene.traverse((o) => { if (!mat && o.name === 's56Water') mat = o.material; });
    if (!mat) return 'no s56Water';
    const W = window.__s56diag = { mat, frag: mat.fragmentShader, vert: mat.vertexShader, built: /S56_STAGE/.test(mat.fragmentShader), missing: [] };
    if (!W.built) { let f = mat.fragmentShader; for (const [a, b] of OLD_PATCH) { if (!f.includes(a)) W.missing.push(a.slice(0, 40)); f = f.replace(a, b); } W.patched = f; }
    W.flatVert = mat.vertexShader.replace(/float h = [^;]*;/, 'float h = 0.0;');
    return W.built ? 'built-in stages' : 'patched old shader, missing: ' + JSON.stringify(W.missing);
  }, OLD_PATCH); log('stages:', how);
  let started = false; const out = [];
  for (const z of ZS) {
    const st = await page.evaluate(({ z, LANE, started }) => {
      const B = window.__bw, d = B.debug();
      if (z === 'tap') B.advance(1.0);
      else { if (!started) { B.tap(); B.step(0.3); } const m = d.mascotState; m.z = +z - 1.0; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.step(1.0 / 7.2, 30); m.z = +z; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.advance(0.4); }
      const s = B.state(); return { phase: s.phase, z: s.z, x: s.x, coins: s.coins, socks: s.socks, hearts: s.hearts };
    }, { z, LANE, started });
    if (z !== 'tap') started = true; log('checkpoint', z, JSON.stringify(st)); out.push({ z, state: st });
    for (const [tag, stage, bloom, ex] of VARIANTS) {
      if (ONLY && !ONLY.includes(tag)) continue;
      const url = await page.evaluate(({ stage, bloom, ex }) => {
        const B = window.__bw, d = B.debug(), W = window.__s56diag, mat = W.mat, cp = d.composer.passes;
        const bloomPass = cp.find((p) => p.constructor && /Bloom/.test(p.constructor.name)) || cp[1], grade = cp.find((p) => p.uniforms && p.uniforms.uSat);
        mat.defines = Object.assign({}, mat.defines, { S56_STAGE: stage });
        if (!W.built) mat.fragmentShader = W.patched;
        mat.vertexShader = ex.flat ? W.flatVert : W.vert; mat.needsUpdate = true;
        bloomPass.enabled = bloom;
        const sat = grade.uniforms.uSat.value, con = grade.uniforms.uContrast.value; if (ex.nograde) { grade.uniforms.uSat.value = 1; grade.uniforms.uContrast.value = 1; }
        const tm = d.renderer.toneMapping; if (ex.notm) d.renderer.toneMapping = 0;
        const hidden = []; if (ex.nodrops) d.scene.traverse((o) => { if ((o.name === 's56Splash' || o === d.particles) && o.visible) { o.visible = false; hidden.push(o); } });
        B.render(); const u = d.renderer.domElement.toDataURL('image/png');
        grade.uniforms.uSat.value = sat; grade.uniforms.uContrast.value = con; d.renderer.toneMapping = tm; for (const o of hidden) o.visible = true;
        return u;
      }, { stage, bloom, ex });
      fs.writeFileSync(path.join(OUT, `d56_${z}_${tag}.png`), Buffer.from(url.split(',')[1], 'base64')); log('frame', z, tag);
    }
    // restore the full shader for the next checkpoint's steps
    await page.evaluate(() => { const W = window.__s56diag, mat = W.mat; mat.defines = Object.assign({}, mat.defines, { S56_STAGE: 9 }); mat.vertexShader = W.vert; mat.needsUpdate = true;
      const cp = window.__bw.debug().composer.passes; (cp.find((p) => p.constructor && /Bloom/.test(p.constructor.name)) || cp[1]).enabled = true; });
  }
  console.log(JSON.stringify({ errors: errs.slice(0, 12), shots: out }, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
