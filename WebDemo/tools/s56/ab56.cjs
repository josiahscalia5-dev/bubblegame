// s56 water A/B (lane s56, session d847dce2): ONE frozen, seeded gameplay frame per checkpoint, re-rendered once per variant with __bw.render()
// (render() never steps the game: every variant is the SAME frame, camera, drops and bubbles). Canvas pixels only (no HUD), so the numbers
// measure the 3D picture. Each variant changes ONE thing: a named layer hidden, one term of the s56 water shader removed, or one post setting.
//   flock /tmp/bw_browser.lock node ab56.cjs <ABSOLUTE WebDemo dir> <out dir>     [ZS=tap,206 LANE=1 VW=432 VH=768 DPR=1 ONLY=tag,tag FOOT=1]
// FOOT=1 (FOOTONLY=name,name to limit it) also hides every distinct visible mesh name (one at a time) and counts the pixels that change (> 24 in any channel): each layer's
// screen footprint (an ID buffer by ablation), written to foot_<z>.json. Measure the frames with ab56.py.
// Water variants are string patches of the s56 water fragment shader: they apply to the shader that contains the statement (old or new);
// a variant whose statement is missing is reported (and its frame equals `full`). The new shader (pass 3) exposes the same switches as
// S56.water fields instead (see W_FIELDS).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56').split(',').filter(Boolean);
const ZS = (process.env.ZS || 'tap,206').split(','), LANE = +(process.env.LANE ?? 1);
const VW = +(process.env.VW || 432), VH = +(process.env.VH || 768), DPR = +(process.env.DPR || 1);
const ONLY = process.env.ONLY ? process.env.ONLY.split(',') : null, FOOT = !!process.env.FOOT;
fs.mkdirSync(OUT, { recursive: true });
const OLD = {
  spec: 'c += vec3(0.85, 0.97, 1.2) * sp * 1.1 + vec3(0.8, 0.9, 1.1) * gl * 0.3;',
  white: 'float white = clamp(crest + collar + wk * 0.8, 0.0, 1.0);',
  haze: 'c = s56Haze(c, vW);\n        gl_FragColor',
};
// [tag, { hide: [names], patch: [[from, to]], post: {...}, water: {S56.water overrides}, mask: bool }]
const VARIANTS = [
  ['mask', { mask: true, hide: ['s56Splash', 's3Bubbles', 's4Bubbles', 'l1Bubbles', '@particles'] }],
  ['full', {}],
  // the coordinator's lead: the transparent soap-bubble layers and the drops
  ['no_s3Bubbles', { hide: ['s3Bubbles'] }],
  ['no_s4Bubbles', { hide: ['s4Bubbles'] }],
  ['no_l1Bubbles', { hide: ['l1Bubbles'] }],
  ['no_allBubbles', { hide: ['s3Bubbles', 's4Bubbles', 'l1Bubbles'] }],
  ['no_s56Splash', { hide: ['s56Splash'] }],
  ['no_particles', { hide: ['@particles'] }],
  // the s56 water shader's terms
  ['w_nospec', { patch: [[OLD.spec, 'c += vec3(0.8, 0.9, 1.1) * gl * 0.3;']], water: { spec: 0 } }],
  ['w_noglint', { patch: [[OLD.spec, 'c += vec3(0.85, 0.97, 1.2) * sp * 1.1;']], water: { glint: 0 } }],
  ['w_nospecglint', { patch: [[OLD.spec, '']], water: { spec: 0, glint: 0 } }],
  ['w_nocrestlace', { patch: [[OLD.white, 'float white = clamp(collar + wk * 0.8, 0.0, 1.0);']], water: { crest: 9, lace: 0 } }],
  ['w_nocollar', { patch: [[OLD.white, 'float white = clamp(crest + wk * 0.8, 0.0, 1.0);']], water: { collar: 0 } }],
  ['w_nowake', { patch: [[OLD.white, 'float white = clamp(crest + collar, 0.0, 1.0);']], water: { wake: 0 } }],
  ['w_nowhite', { patch: [[OLD.white, 'float white = 0.0;']], water: { crest: 9, lace: 0, collar: 0, wake: 0 } }],
  ['w_nohaze', { patch: [[OLD.haze, 'gl_FragColor']], water: { haze: 0 } }],
  // post
  ['p_nobloom', { post: { bloom: false } }],
  ['p_nograde', { post: { nograde: true } }],
  ['p_notonemap', { post: { notm: true } }],
  ['p_exp090', { post: { exposure: 0.9 } }],
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
  const errs = []; page.on('console', (m) => { if (m.type() === 'error') errs.push(m.text().slice(0, 400)); }); page.on('pageerror', (e) => errs.push('PAGEERROR ' + e.message));
  await page.addInitScript((s3) => { window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 }); log('ready');
  await page.evaluate(() => new Promise((r) => setTimeout(r, 2500)));
  await page.evaluate(() => {
    const d = window.__bw.debug(); let mat = null; d.scene.traverse((o) => { if (!mat && o.name === 's56Water') mat = o.material; });
    window.__ab = { mat, frag: mat && mat.fragmentShader, water0: window.__bwS56 && window.__bwS56.water ? JSON.parse(JSON.stringify(window.__bwS56.water)) : null };
  });
  let started = false; const out = [];
  for (const z of ZS) {
    const st = await page.evaluate(({ z, LANE, started }) => {
      const B = window.__bw, d = B.debug();
      if (z === 'tap') B.advance(1.0);
      else { if (!started) { B.tap(); B.step(0.3); } const m = d.mascotState; m.z = +z - 1.0; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.step(1.0 / 7.2, 30); m.z = +z; m.lane = LANE; m.x = (1 - LANE) * 0.7; B.advance(0.4); }
      const s = B.state(); return { phase: s.phase, z: s.z, x: s.x, coins: s.coins, socks: s.socks, hearts: s.hearts };
    }, { z, LANE, started });
    if (z !== 'tap') started = true; log('checkpoint', z, JSON.stringify(st));
    // the visible layers (name, type, material, transparency) for the record
    const layers = await page.evaluate(() => {
      const d = window.__bw.debug(), seen = {};
      d.scene.traverse((o) => { if (!o.isMesh && !o.isPoints && !o.isSprite && !o.isLine) return; let vis = true, p = o; while (p) { if (!p.visible) { vis = false; break; } p = p.parent; } if (!vis) return;
        const m = Array.isArray(o.material) ? o.material[0] : o.material, n = o === d.particles ? '@particles' : (o.name || '(noname:' + (o.parent && o.parent.name) + ')');
        const k = seen[n] || (seen[n] = { n: 0, type: o.type, mat: m && m.type, transparent: !!(m && m.transparent), depthWrite: !!(m && m.depthWrite), blending: m && m.blending, renderOrder: o.renderOrder });
        k.n++; });
      return seen;
    });
    fs.writeFileSync(path.join(OUT, `layers_${z}.json`), JSON.stringify(layers, null, 1));
    const missing = {};
    const renderVariant = async (tag, v) => page.evaluate(({ tag, v }) => {
      const B = window.__bw, d = B.debug(), A = window.__ab, mat = A.mat, cp = d.composer.passes;
      const bloomPass = cp.find((p) => p.constructor && /Bloom/.test(p.constructor.name)), grade = cp.find((p) => p.uniforms && p.uniforms.uSat);
      const miss = [];
      let f = A.frag;
      for (const [a, b] of v.patch || []) { if (f.includes(a)) f = f.replace(a, b); else miss.push(a.slice(0, 50)); }
      if (v.mask) f = f.replace(/gl_FragColor = vec4\(c, 1\.0\);/, 'gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);');
      const S = window.__bwS56; if (S && S.water && A.water0) { Object.assign(S.water, A.water0); if (v.water) for (const k in v.water) if (k in S.water) S.water[k] = v.water[k]; if (v.mask) S.water.mask = 1; }
      if (f !== mat.fragmentShader) { mat.fragmentShader = f; mat.needsUpdate = true; }
      const hidden = [];
      for (const n of v.hide || []) d.scene.traverse((o) => { const nm = o === d.particles ? '@particles' : (o.name || '(noname:' + (o.parent && o.parent.name) + ')'); if (nm === n && o.visible) { o.visible = false; if (!o.visible) hidden.push(o); } });
      const bl = bloomPass ? bloomPass.enabled : null, sat = grade && grade.uniforms.uSat.value, con = grade && grade.uniforms.uContrast.value, tm = d.renderer.toneMapping, ex = d.renderer.toneMappingExposure;
      const P = v.post || {};
      if (bloomPass && 'bloom' in P) bloomPass.enabled = P.bloom;
      if (grade && P.nograde) { grade.uniforms.uSat.value = 1; grade.uniforms.uContrast.value = 1; }
      if (P.notm) d.renderer.toneMapping = 0;
      if (P.exposure) d.renderer.toneMappingExposure = P.exposure;
      // (the water's per-frame uniforms come from S56.water in update(); push them without stepping the game)
      if (window.__bwS56Sync) window.__bwS56Sync();
      B.render(); const url = d.renderer.domElement.toDataURL('image/png');
      if (bloomPass) bloomPass.enabled = bl; if (grade) { grade.uniforms.uSat.value = sat; grade.uniforms.uContrast.value = con; } d.renderer.toneMapping = tm; d.renderer.toneMappingExposure = ex;
      for (const o of hidden) o.visible = true;
      if (mat.fragmentShader !== A.frag) { mat.fragmentShader = A.frag; mat.needsUpdate = true; }
      if (S && S.water && A.water0) { Object.assign(S.water, A.water0); delete S.water.mask; if (window.__bwS56Sync) window.__bwS56Sync(); }
      return { url, miss, exposure: ex, tm };
    }, { tag, v });
    for (const [tag, v] of VARIANTS) {
      if (ONLY && !ONLY.includes(tag)) continue;
      const r = await renderVariant(tag, v);
      if (r.miss.length) missing[tag] = r.miss;
      fs.writeFileSync(path.join(OUT, `ab_${z}_${tag}.png`), Buffer.from(r.url.split(',')[1], 'base64')); log('frame', z, tag, r.miss.length ? 'MISSING ' + r.miss.join(' | ') : '', tag === 'full' ? 'tm ' + r.tm + ' exp ' + r.exposure : '');
    }
    if (FOOT) {
      // each visible name hidden alone: its changed pixels = its footprint on this frame
      const names = Object.keys(layers).filter((n) => !process.env.FOOTONLY || process.env.FOOTONLY.split(',').includes(n));
      fs.mkdirSync(path.join(OUT, 'foot_' + z), { recursive: true });
      for (const n of names) {
        const r = await renderVariant('foot', { hide: [n] });
        fs.writeFileSync(path.join(OUT, 'foot_' + z, `${n.replace(/[^\w@-]/g, '_')}.png`), Buffer.from(r.url.split(',')[1], 'base64'));
      }
      log('footprints', z, names.length);
    }
    out.push({ z, state: st, missing });
  }
  console.log(JSON.stringify({ errors: errs.slice(0, 12), shots: out }, null, 1));
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
