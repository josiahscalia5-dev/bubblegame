// Screen 4 layer diagnosis (twelfth session, 6 November 2026, the user's request for developer-tool diagnosis instead of
// visual trial and error). ONE seeded run (Math.random seed 7, no steering: one tap, then the game clock advanced to AT),
// then the raw 3D canvas captured once per CONFIG, each config changing ONE thing and undoing it before the next, so every
// capture is the same frame with only that thing different. Nothing in the game is changed: it is all done from the test page.
//   S3=focus AT=3.0 DPR=1.5 CONFIGS='full,bloom_off,...' node tools/screen4/layer_diag.cjs <abs WebDemo> <out-dir>
// Writes <out>/inventory.json (every visible mesh / points / line / sprite at AT: name, parent, type, material type, transparent,
// blending, depthWrite, depthTest, opacity, renderOrder, triangles, textures with size / colour space / filters / anisotropy;
// the renderer's tone mapping, exposure, pixel ratio and the composer's passes) and <out>/<config>.png per config.
// Configs:
//   full                      the frame as the game draws it
//   bloom_off                 the bloom pass disabled (the one pass the walls' and floor's mtUndisplay does not undo)
//   hide:<name>[+<name>...]   every object with that name hidden
//   only:<name>[+<name>...]   everything hidden except those objects (and their parents); '+nobloom' suffix: bloom off too
//   nomip                     the ring map sampled without mipmaps (minFilter Linear): does mip filtering blur it?
//   map:<file>[@only:...]     the ring map's image replaced by textures/screen4/<file> (same texture object and sampler)
// Several changes in one config are joined with '|', e.g. 'map:rings_exact.png|only:heroWalls+liquidFloor|bloom_off'.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'focus').split(',').filter(Boolean), AT = +(process.env.AT || 3.0);
const CONFIGS = (process.env.CONFIGS || 'full').split(',').filter(Boolean);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 700, height: 1076 }, deviceScaleFactor: +(process.env.DPR || 1.5) })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript((s3) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = {}; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, S3);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  // the same sequence as liquid_shots.cjs: half a second, one tap, then the clock to AT (no steering)
  await page.evaluate(() => window.__bw.advance(0.5));
  await page.evaluate(() => window.__bw.tap());
  await page.evaluate((at) => window.__bw.advance(at), AT);
  await page.waitForTimeout(800);
  const inv = await page.evaluate(() => {
    const d = window.__bw.debug(), out = { objects: [] };
    const texInfo = (t) => t && t.isTexture ? { name: t.name || null, src: t.image && (t.image.currentSrc || t.image.src || null) ? String(t.image.currentSrc || t.image.src).split('/').pop().slice(0, 60) : null,
      size: t.image ? [t.image.width, t.image.height] : null, colorSpace: t.colorSpace, minFilter: t.minFilter, magFilter: t.magFilter, mips: t.generateMipmaps, aniso: t.anisotropy, flipY: t.flipY } : null;
    d.scene.traverseVisible((o) => {
      if (!(o.isMesh || o.isPoints || o.isLine || o.isSprite)) return;
      const m = Array.isArray(o.material) ? o.material[0] : o.material, tex = {};
      if (m) { for (const k of ['map', 'alphaMap', 'normalMap', 'envMap']) if (m[k]) tex[k] = texInfo(m[k]);
        if (m.uniforms) for (const [k, u] of Object.entries(m.uniforms)) if (u && u.value && u.value.isTexture) tex[k] = texInfo(u.value); }
      out.objects.push({ name: o.name || '(unnamed)', parent: o.parent && o.parent.name, type: o.type, layersMask: o.layers.mask, renderOrder: o.renderOrder, frustumCulled: o.frustumCulled,
        tris: o.geometry && o.geometry.index ? o.geometry.index.count / 3 : (o.geometry && o.geometry.attributes.position ? o.geometry.attributes.position.count : null), inst: o.isInstancedMesh ? o.count : null,
        mat: m && { type: m.type, transparent: m.transparent, blending: m.blending, depthWrite: m.depthWrite, depthTest: m.depthTest, opacity: m.opacity, side: m.side, toneMapped: m.toneMapped }, tex });
    });
    const r = d.renderer;
    out.renderer = { toneMapping: r.toneMapping, exposure: r.toneMappingExposure, outputColorSpace: r.outputColorSpace, pixelRatio: r.getPixelRatio(), size: [r.domElement.width, r.domElement.height] };
    out.passes = d.composer.passes.map((p) => ({ type: p.strength !== undefined ? 'bloom' : p.uniforms && p.uniforms.uSat ? 'grade' : p.scene ? 'render' : p.constructor.name, enabled: p.enabled, strength: p.strength, radius: p.radius, threshold: p.threshold, resolution: p.resolution && [p.resolution.x, p.resolution.y] }));
    out.cameraLayers = d.camera.layers.mask;
    return out;
  });
  fs.writeFileSync(path.join(OUT, 'inventory.json'), JSON.stringify(inv, null, 1));
  // one config's changes, applied in the page; returns an undo list kept in window.__diagUndo
  const apply = async (cfg) => page.evaluate(async (cfg) => {
    const d = window.__bw.debug(), undo = []; window.__diagUndo = undo;
    const bloom = d.composer.passes.find((p) => p.strength !== undefined && p.threshold !== undefined);   // (class names are minified in the bundle)
    const ringTex = () => { let t = null; d.scene.traverse((o) => { const m = o.material; if (!t && m && m.uniforms && m.uniforms.uFocusRings && m.uniforms.uFocusRings.value) t = m.uniforms.uFocusRings.value; }); return t; };
    for (const part of cfg.split('|')) {
      if (part === 'full') continue;
      if (part === 'bloom_off') { const e = bloom.enabled; bloom.enabled = false; undo.push(() => { bloom.enabled = e; }); continue; }
      if (part === 'nomip') { const t = ringTex(), f = t.minFilter, g = t.generateMipmaps; t.minFilter = 1006; t.generateMipmaps = false; t.needsUpdate = true;
        undo.push(() => { t.minFilter = f; t.generateMipmaps = g; t.needsUpdate = true; }); continue; }
      if (part.startsWith('map:')) { const t = ringTex(), img0 = t.image, img = new Image(); img.src = 'textures/screen4/' + part.slice(4); await img.decode();
        t.image = img; t.needsUpdate = true; undo.push(() => { t.image = img0; t.needsUpdate = true; }); continue; }
      // ('unnamed' stands for the meshes with no name, e.g. the drum's background shell)
      const [kind, list] = part.split(':'), names = new Set(list.split('+').map((s) => (s === 'unnamed' ? '' : s)));
      if (kind === 'hide') d.scene.traverse((o) => { if (names.has(o.name) && (o.isMesh || o.isPoints || o.isLine || o.isSprite) && o.visible) { o.visible = false; undo.push(() => { o.visible = true; }); } });
      if (kind === 'only') {
        const keep = new Set(); d.scene.traverse((o) => { if (names.has(o.name)) { o.traverse((q) => keep.add(q)); let p = o.parent; while (p) { keep.add(p); p = p.parent; } } });
        d.scene.traverse((o) => { if ((o.isMesh || o.isPoints || o.isLine || o.isSprite) && !keep.has(o) && o.visible) { o.visible = false; undo.push(() => { o.visible = true; }); } });
      }
    }
    return undo.length;
  }, cfg);
  const shot = async (file) => { const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); }); fs.writeFileSync(file, Buffer.from(url.split(',')[1], 'base64')); };
  const done = [];
  for (const cfg of CONFIGS) {
    const n = await apply(cfg);
    const file = cfg.replace(/[^A-Za-z0-9_.+-]+/g, '_') + '.png';
    await shot(path.join(OUT, file));
    await page.evaluate(() => { for (const u of window.__diagUndo.reverse()) u(); window.__bw.render(); });
    done.push({ config: cfg, file, changes: n }); console.log(cfg, '->', file, `(${n} changes)`);
  }
  fs.writeFileSync(path.join(OUT, 'configs.json'), JSON.stringify({ s3: S3, at: AT, dpr: +(process.env.DPR || 1.5), state: await page.evaluate(() => window.__bw.state()), done }, null, 1));
  console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
