// Screen 4 scene inspection through the Chrome DevTools Protocol (diagnostic only; changes nothing in the game; sixteenth
// session). No Chrome DevTools MCP is connected in this environment, so this opens Playwright's own CDP session to the page
// (the same protocol the DevTools use) and reads the live three.js scene with Runtime.evaluate.
//   S3=intunnel,water9 node tools/screen4/cdp_inspect.cjs <abs WebDemo> <out.json>
// Seed 7, the painted layer off, advance(0.5), tap, then steps of 1/30 s. Reads: the renderer's colour pipeline (tone
// mapping, exposure), every post pass (bloom strength / radius / threshold, the grade's uniforms), heroSwell's material
// (blending, depth, the water2 picture: uBwOn, the start-view matrix uBwRef) and frame (uC) at +0, +1 and +2 s (is the
// picture pinned to her?), lqFloor's and the walls' textures, mwTunnelBubbles' instances by kind (bubbles / white streaks),
// and the CDP Performance metrics.
const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const [ROOT, OUT] = process.argv.slice(2);
const S3 = (process.env.S3 || 'intunnel,water9').split(',').filter(Boolean);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const p = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html');
  if (!p.startsWith(ROOT) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(res);
});
(async () => {
  await new Promise((r) => server.listen(0, r));
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const page = await (await browser.newContext({ viewport: { width: 350, height: 538 } })).newPage();
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Runtime.enable'); await cdp.send('Performance.enable');
  const consoleErrors = [];
  cdp.on('Runtime.exceptionThrown', (e) => consoleErrors.push(e.exceptionDetails.text));
  cdp.on('Runtime.consoleAPICalled', (e) => { if (e.type === 'error') consoleErrors.push(e.args.map((a) => a.value || a.description).join(' ').slice(0, 300)); });
  await page.addInitScript(([s3]) => {
    window.__BW_S3__ = s3; window.__BW_TEST__ = true; window.__BW_OPENING_OFF__ = ['art'];
    let a = 7 >>> 0; Math.random = () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }, [S3]);
  await page.goto(`http://localhost:${server.address().port}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready'), null, { timeout: 300000 });
  const ev = async (expr) => { const r = await cdp.send('Runtime.evaluate', { expression: expr, returnByValue: true }); if (r.exceptionDetails) throw new Error(r.exceptionDetails.text); return r.result.value; };
  // the per-moment probe: heroSwell's frame and the water2 picture's matrix, her state
  const probe = `(() => { const d = window.__bw.debug(), s = d.scene.getObjectByName('heroSwell'), u = s && s.material.uniforms, st = window.__bw.state();
    const r6 = (a) => Array.from(a).map((v) => +v.toFixed(6));
    return { t: st.time, x: st.x, z: st.z, y: st.y, uC: u ? r6(u.uC.value.toArray()) : null, uBwOn: u && u.uBwOn ? u.uBwOn.value : null,
      uBwRef: u && u.uBwRef ? r6(u.uBwRef.value.elements) : null, swellVisible: !!(s && s.visible) }; })()`;
  await ev('window.__bw.advance(0.5)'); await ev('window.__bw.tap()');
  const moments = [];
  for (const T of [0, 1, 1]) { if (T) await ev(`window.__bw.advance(${T})`); moments.push(await ev(probe)); }
  const scene = await ev(`(() => {
    const d = window.__bw.debug(), R = d.renderer, sc = d.scene;
    const val = (v) => v == null ? v : v.isTexture ? 'texture:' + ((v.image && (v.image.src || v.image.currentSrc)) || (v.image ? v.image.width + 'x' + v.image.height : 'rt')).split('/').pop()
      : v.isColor ? '#' + v.getHexString() : v.isVector2 || v.isVector3 || v.isVector4 ? v.toArray().map((x) => +x.toFixed(4)) : typeof v === 'number' ? +v.toFixed(4) : typeof v === 'boolean' ? v : Array.isArray(v) ? 'array[' + v.length + ']' : (v.elements ? 'matrix' : String(v).slice(0, 40));
    const uni = (m) => m && m.uniforms ? Object.fromEntries(Object.entries(m.uniforms).map(([k, x]) => [k, val(x.value)])) : null;
    const mat = (name) => { const o = sc.getObjectByName(name); if (!o) return null; const m = o.material;
      return { visible: o.visible, renderOrder: o.renderOrder, type: m.type, transparent: m.transparent, depthWrite: m.depthWrite, blending: m.blending, fragmentChars: (m.fragmentShader || '').length,
        uniforms: uni(m), count: o.count ?? null }; };
    const passes = d.composer.passes.map((p) => ({ type: p.constructor.name, enabled: p.enabled, strength: p.strength, radius: p.radius, threshold: p.threshold,
      uniforms: p.uniforms ? Object.fromEntries(Object.entries(p.uniforms).filter(([k]) => k !== 'tDiffuse').map(([k, x]) => [k, val(x.value)])) : (p.material ? uni(p.material) : null) }));
    // mwTunnelBubbles: its instances by kind (aB.w: 0 bubble, 1 white streak)
    const tb = sc.getObjectByName('mwTunnelBubbles'); let kinds = null;
    if (tb && tb.geometry.attributes.aB) { const a = tb.geometry.attributes.aB.array, n = tb.geometry.instanceCount ?? tb.count ?? (a.length / 4); kinds = { instances: n, streaks: 0, bubbles: 0 };
      for (let i = 0; i < Math.min(n, a.length / 4); i++) (a[i * 4 + 2] > 0.5 ? kinds.streaks++ : kinds.bubbles++); }
    return { toneMapping: R.toneMapping, exposure: R.toneMappingExposure, outputColorSpace: R.outputColorSpace, passes,
      heroSwell: mat('heroSwell'), lqFloor: mat('lqFloor'), heroWalls: mat('heroWalls'), mwTunnelBubbles: Object.assign(mat('mwTunnelBubbles') || {}, { kinds }),
      spLumps: mat('spLumps'), heroSplash: mat('heroSplash') };
  })()`);
  const perf = (await cdp.send('Performance.getMetrics')).metrics.filter((m) => /JSHeapUsedSize|Nodes|ScriptDuration|TaskDuration/.test(m.name));
  fs.writeFileSync(OUT, JSON.stringify({ s3: S3, moments, scene, perf, consoleErrors }, null, 1));
  const same = moments.every((m) => JSON.stringify(m.uBwRef) === JSON.stringify(moments[0].uBwRef));
  console.log('moments', moments.map((m) => `t ${m.t} z ${m.z} uC ${m.uC && m.uC.map((v) => v.toFixed(2))}`).join(' | '));
  console.log('uBwRef identical at every moment:', same, '| uBwOn', moments.map((m) => m.uBwOn).join(','));
  console.log('passes', scene.passes.map((p) => `${p.type}${p.strength != null ? ` strength ${p.strength} radius ${p.radius} threshold ${p.threshold}` : ''}`).join(' | '));
  console.log('toneMapping', scene.toneMapping, 'exposure', scene.exposure, '| tunnel flecks', JSON.stringify(scene.mwTunnelBubbles.kinds), '| console errors', consoleErrors.length);
  await browser.close(); server.close();
})().catch((e) => { console.error(e); process.exit(1); });
