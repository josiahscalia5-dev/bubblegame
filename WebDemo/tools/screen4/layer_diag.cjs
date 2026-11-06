// Screen 4 layer diagnosis (diagnostic only; changes nothing in the game).
//   S3=focus [DPR=1.42751] [VIEW=700x1076] [T=3.0] [NOTAP=1] [ART=1] node tools/screen4/layer_diag.cjs <abs WebDemo> <out-dir> [ablations.json]
// Reproduces the established hero frame exactly as tools/screen4/liquid_shots.cjs does it: Math.random seed 7,
// __BW_OPENING_OFF__ ['art'], advance(0.5), tap, advance(3.0), no steering, the game's own camera. DPR 1536/1076 makes
// the 538 x 1076 game area a 768 x 1536 canvas (resized to the original's 767 x 1536 in the analysis).
// Writes: base_page.png (with HUD), base_canvas.png (raw 3D canvas), base_again_canvas.png (determinism check),
// census.json (every visible renderable: id, path, type, material, blending, transparency, renderOrder, screen box,
// shader signature). With ablations.json ([{label, hide:[ids or /regex/ on path], post:{bloom,grade,tone,exposure},
// solo:[...] }]) it renders the SAME frame again for each entry with those layers hidden / passes changed, saves
// abl_<label>.png, then restores everything. Time is not advanced between renders, so every image is the same moment.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT, ABL] = process.argv.slice(2);
const S3 = (process.env.S3 || 'focus').split(',').filter(Boolean);
const DPR = +(process.env.DPR || 1536 / 1076);
fs.mkdirSync(OUT, { recursive: true });
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  // VIEW=412x839 DPR=2.625: a Pixel 7 screen (step 6); default the 1:2 frame as before
  const [VW, VH] = (process.env.VIEW || '700x1076').split('x').map(Number);
  const page = await (await browser.newContext({ viewport: { width: VW, height: VH }, deviceScaleFactor: DPR })).newPage();
  const logs = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push(m.text().slice(0, 400)); });
  page.on('pageerror', (e) => logs.push(e.message));
  await page.addInitScript(([s3, tune, art]) => {
    window.__BW_S3__ = s3; window.__BW_S3_TUNE__ = tune;
    window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = art ? undefined : ['art'];   // ART=1: keep the painted Tap to Start layer
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [S3, JSON.parse(process.env.TUNE || '{}'), process.env.ART === '1']);
  // diagnostic texture swap: ROUTE_RINGS=<png> serves that file in place of textures/screen4/tunnel_rings_original.png
  // (the game's own loader and shaders unchanged; nothing on disk in WebDemo/textures changes)
  if (process.env.ROUTE_RINGS) await page.route('**/textures/screen4/tunnel_rings_original.png',
    (route) => route.fulfill({ status: 200, contentType: 'image/png', body: fs.readFileSync(process.env.ROUTE_RINGS) }));
  // (fifteenth session) ROUTE_WATER=<png> serves that file in place of every textures/screen4/foreground_water_original*.png
  // (the ?s3=...,water2..6 face textures), e.g. a coordinate-coded texture to read back where the face samples
  if (process.env.ROUTE_WATER) await page.route('**/textures/screen4/foreground_water_original*.png',
    (route) => route.fulfill({ status: 200, contentType: 'image/png', body: fs.readFileSync(process.env.ROUTE_WATER) }));
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  await page.evaluate(() => window.__bw.advance(0.5));
  if (process.env.NOTAP !== '1') {   // NOTAP=1: stay at Tap to Start (the opening, before the tap)
    await page.evaluate(() => window.__bw.tap());
    await page.evaluate((t) => window.__bw.advance(t), +(process.env.T || 3.0));   // T: seconds after the tap (default the 3.0 s checkpoint)
  }
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, 'base_page.png'), clip: await page.locator('#stage').boundingBox(), timeout: 300000 });   // (a long wait: software WebGL under load)
  const canvasShot = async (file) => { const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); }); fs.writeFileSync(path.join(OUT, file), Buffer.from(url.split(',')[1], 'base64')); };
  await canvasShot('base_canvas.png');
  await canvasShot('base_again_canvas.png');
  // census
  const census = await page.evaluate(() => {
    const d = window.__bw.debug(), scene = d.scene, cam = d.camera, R = d.renderer;
    const list = []; window.__diagObjs = [];
    const shown = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
    const V = cam.position.constructor;
    scene.updateMatrixWorld(true);
    scene.traverse((o) => {
      if (!(o.isMesh || o.isPoints || o.isLine || o.isSprite)) return;
      if (!shown(o) || !o.layers.test(cam.layers)) return;
      const id = window.__diagObjs.length; window.__diagObjs.push(o);
      const names = []; for (let p = o; p && p !== scene; p = p.parent) names.unshift(p.name || p.type);
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      const g = o.geometry; let box = null;
      if (g) {
        if (!g.boundingBox) g.computeBoundingBox();
        const b = g.boundingBox; if (b && isFinite(b.min.x)) {
          let x0 = 1, y0 = 1, x1 = -1, y1 = -1, any = false;
          for (let i = 0; i < 8; i++) {
            const v = new V(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(o.matrixWorld).project(cam);
            if (v.z < 1) any = true; x0 = Math.min(x0, v.x); x1 = Math.max(x1, v.x); y0 = Math.min(y0, v.y); y1 = Math.max(y1, v.y);
          }
          box = { any, x: [+(x0 * 0.5 + 0.5).toFixed(3), +(x1 * 0.5 + 0.5).toFixed(3)], y: [+(0.5 - y1 * 0.5).toFixed(3), +(0.5 - y0 * 0.5).toFixed(3)] };
        }
      }
      const sig = (m) => {
        const fs = m.fragmentShader || ''; const keys = m.uniforms ? Object.keys(m.uniforms) : [];
        const fn = (fs.match(/gl_FragColor\s*=\s*[^;]{0,80}/) || fs.match(/pc_fragColor\s*=\s*[^;]{0,80}/) || [''])[0];
        return { type: m.type, name: m.name, transparent: m.transparent, opacity: m.opacity, blending: m.blending, blendSrc: m.blendSrc, blendDst: m.blendDst,
          depthWrite: m.depthWrite, depthTest: m.depthTest, side: m.side, toneMapped: m.toneMapped, fog: m.fog, vertexColors: m.vertexColors,
          color: m.color ? '#' + m.color.getHexString() : null, map: m.map ? (m.map.image && (m.map.image.src || m.map.image.currentSrc || (m.map.image.width + 'x' + m.map.image.height))) : null,
          uniforms: keys.slice(0, 40), tex: keys.filter((k) => m.uniforms[k] && m.uniforms[k].value && m.uniforms[k].value.isTexture).map((k) => { const im = m.uniforms[k].value.image; return k + '=' + (im ? (im.src || im.currentSrc || (im.width + 'x' + im.height)) : 'rt'); }), fragOut: fn, compiled: !!m.onBeforeCompile && m.onBeforeCompile.toString().length > 30 };
      };
      list.push({ id, path: names.join('/'), type: o.type, count: o.count || null, verts: g && g.attributes.position ? g.attributes.position.count : 0,
        geo: g ? g.type : null, renderOrder: o.renderOrder, frustumCulled: o.frustumCulled, box, mats: mats.map(sig) });
    });
    const post = d.composer.passes.map((p) => ({ type: p.constructor.name, enabled: p.enabled }));
    return { toneMapping: R.toneMapping, exposure: R.toneMappingExposure, outputColorSpace: R.outputColorSpace, pixelRatio: R.getPixelRatio(),
      size: [R.domElement.width, R.domElement.height], background: scene.background && scene.background.isColor ? '#' + scene.background.getHexString() : String(scene.background && scene.background.type),
      fog: scene.fog ? { type: scene.fog.type, color: '#' + scene.fog.color.getHexString(), near: scene.fog.near, far: scene.fog.far, density: scene.fog.density } : null,
      state: window.__bw.state(), post, objects: list };
  });
  fs.writeFileSync(path.join(OUT, 'census.json'), JSON.stringify(census, null, 1));
  console.log('objects', census.objects.length, 'canvas', census.size, 'post', JSON.stringify(census.post));
  if (ABL) {
    const specs = JSON.parse(fs.readFileSync(ABL, 'utf8'));
    for (const sp of specs) {
      const info = await page.evaluate((sp) => {
        const d = window.__bw.debug(), objs = window.__diagObjs, R = d.renderer;
        const match = (o, i, pats) => pats.some((p) => (typeof p === 'number' ? p === i : new RegExp(p).test((() => { const n = []; for (let q = o; q && q !== d.scene; q = q.parent) n.unshift(q.name || q.type); return n.join('/'); })())));
        const undo = [];
        // (sixteenth session) sp.hideU: also hide objects whose material has one of these uniform names (the unnamed slide /
        // drum water sheet has uRipples, the spray particles uMaxPx)
        const hasU = (o, names) => (Array.isArray(o.material) ? o.material : [o.material]).some((m) => m && m.uniforms && names.some((n) => n in m.uniforms));
        objs.forEach((o, i) => {
          const hide = (sp.hide && match(o, i, sp.hide)) || (sp.hideU && hasU(o, sp.hideU)) || (sp.solo && !match(o, i, sp.solo));
          if (hide) { undo.push([o, o.visible]); o.visible = false; }
        });
        const passes = d.composer.passes, saved = { tm: R.toneMapping, ex: R.toneMappingExposure, en: passes.map((p) => p.enabled) };
        const post = sp.post || {};
        if (post.bloom === false) passes[1].enabled = false;
        if (post.grade === false) passes[2].enabled = false;
        if (post.tone === 'none') R.toneMapping = 0;
        if (post.tone === 'linear') R.toneMapping = 1;
        if (post.exposure != null) R.toneMappingExposure = post.exposure;
        // (fifteenth session) sp.drop: a test edit of the spray particles' shaders for this render only, then restored:
        // {frag: [find, replace], vert: [find, replace]} on the drop material's fragment / vertex shader
        const dm = d.particles && d.particles.material, dSaved = dm ? [dm.fragmentShader, dm.vertexShader] : null;
        if (sp.drop && dm) {
          if (sp.drop.frag) dm.fragmentShader = dm.fragmentShader.replace(sp.drop.frag[0], sp.drop.frag[1]);
          if (sp.drop.vert) dm.vertexShader = dm.vertexShader.replace(sp.drop.vert[0], sp.drop.vert[1]);
          dm.needsUpdate = true;
        }
        window.__diagUndo = () => { undo.forEach(([o, v]) => { o.visible = v; }); R.toneMapping = saved.tm; R.toneMappingExposure = saved.ex; passes.forEach((p, k) => { p.enabled = saved.en[k]; });
          if (sp.drop && dm) { dm.fragmentShader = dSaved[0]; dm.vertexShader = dSaved[1]; dm.needsUpdate = true; } };
        return { hidden: undo.length };
      }, sp);
      await canvasShot(`abl_${sp.label}.png`);
      await page.evaluate(() => window.__diagUndo());
      console.log(sp.label, 'hidden', info.hidden);
    }
    await canvasShot('base_after_canvas.png');
  }
  console.log(logs.join(' | ') || 'no console errors or warnings');
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
