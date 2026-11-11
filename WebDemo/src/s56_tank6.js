// tank6 (9 November 2026, session ddf175f2, the coordinator; the user's directive: "finish Screen 6 by using better 3D assets; test one
// replacement asset first"). The approved Screen 6's tall GLOWING GLASS TANK as a modelled asset (models/s6assets/glow_tank.glb, built by
// Tools/blender_glow_tank.py from the isolated reference 02_glowing_glass_tank.png). It replaces every procedural tank of lane arch56 and the
// right bank's 913_914 chamber (arch56 records their places in tankSlots under ,tank6). Why modelled, not AI-generated: image-to-3D (Tripo,
// Meshy, Rodin) bakes opaque textures; the approved tank is transparent glass with a glowing interior (Tripo's tank, task 5bafa5d6, failed).
// Materials by part: t6gold / t6rivet = polished gold; t6glass = a fresnel glass shell (clear in the middle, bright rim, a vertical highlight);
// t6core = the glowing liquid (white-hot pink centre -> magenta -> violet edge, HDR so env6's bloom catches it, a slow swirl); t6bubbles = lit
// bubbles. One InstancedMesh per part for every tank near him (5 draw calls). Switch `?s3=...,s56,...,arch56,tank6`; without it nothing changes.
import * as THREE from 'three';
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const TANK6_ON = LIST.includes('s56') && LIST.includes('level1') && LIST.includes('arch56') && LIST.includes('tank6');

// `tanklib` (with tank6): the asset-finder's library candidate instead of the modelled shell: Sketchfab "Glass Enclosure" by zainaumer.ar,
// CC Attribution 4.0 (https://sketchfab.com/3d-models/glass-enclosure-db8b6674dc5845dfb3f8b58964ba3e4b; Design/LibraryAssets/.../CREDIT.json),
// imported by Tools/assetfinder/import_sketchfab.py. Its look adjusted in the shader: the caps' dark metal -> polished gold, the painted glass band
// -> the violet glow with a white-hot centre; placed in the same tank slots (its glass band fitted to each slot's glass radius and height).
export const TANKLIB_ON = TANK6_ON && LIST.includes('tanklib');
export const TANK6 = {
  lib: { url: 'models/s6library/glass_enclosure.glb', band: [0.20, 0.85], r: 0.241,   // (measured in Blender: glass radius 0.241 of the height, band 0.20-0.85)
    gold: [1.0, 0.70, 0.28], goldK: 3.6, glow: [0.42, 0.02, 0.76], hot: [3.0, 1.8, 3.2], hotW: 2.5, glass: 0.55 },
  url: 'models/s6assets/glow_tank.glb', H: 2.4,   // the model's glass height (its glass radius is 1)
  window: [-3, 72],   // drawn from 3 m behind him to 72 m ahead
  scale: 1.0, big: 1.0,   // every tank / the big right tanks: extra scale of the glass radius and height
  gold: { color: '#ffc45a', emissive: '#7a4a08', ei: 0.5, metal: 0.85, rough: 0.24 },
  // the glowing liquid: [edge violet, mid magenta, hot centre] (linear, HDR), the centre's width, the swirl, the end fade
  // (first in-game test: the column read pale white-lilac; the approved is deep violet with ONE small white-hot glow in the middle: the body kept
  // under the Neutral tone mapping's ~0.76 knee, the hot spot a small blob at hotY, sigma hotH of the height, facing power hotW)
  // (fin6 pass, measured in linear HDR: the tank region averaged (1.63, 0.72, 1.94), all above white, so the tone mapping flattened it to one pale
  // lilac: the body darker violet, the hot spot small and very bright, the halo smaller and dimmer)
  core: { edge: [0.06, 0.0, 0.26], mid: [0.32, 0.0, 0.62], hot: [5.0, 3.2, 5.2], hotW: 3.5, hotY: 0.52, hotH: 0.19, swirl: 0.18, speed: 1.2, ends: 0.2, alpha: 0.9 },
  // the glow spilling out of the glass (a camera-facing additive disc at the hot spot; HDR so the bloom spreads it): colour, radius in glass radii
  halo: { color: [0.5, 0.04, 0.8], r: 1.35, y: 0.52 },   // (in-game test: 1.1 / 1.8 kept the glass crisper than 1.6 / 2.1 or 2.2 / 2.6)
  glass: { tint: [0.30, 0.10, 0.70], rim: [0.7, 0.35, 1.2], a0: 0.04, aRim: 0.35, rimPow: 3.0, streak: 0.5 },
  bubble: [1.6, 1.1, 2.0],
};
if (TANK6_ON && typeof window !== 'undefined') window.__bwTank6 = TANK6;

/** ctx: { env, loader, root, report, arch }. Returns { update(dt, time, phase, m) }. */
export async function buildTank6(ctx) {
  const { env, loader, root, report, arch } = ctx, P = TANK6;
  const slots = (arch && arch.tankSlots) || [];
  const gltf = await new Promise((ok, no) => loader.load(P.url, ok, undefined, no));
  const parts = {}; gltf.scene.traverse((o) => { if (o.isMesh) parts[o.name] = o.geometry; });
  const col = (a) => new THREE.Color(a[0], a[1], a[2]);
  const G = P.gold;
  const gold = new THREE.MeshStandardMaterial({ color: new THREE.Color(G.color), emissive: new THREE.Color(G.emissive), emissiveIntensity: G.ei, metalness: G.metal, roughness: G.rough, envMap: env, envMapIntensity: 1.25 });
  const rivet = gold.clone(); rivet.color = new THREE.Color('#ffd98a'); rivet.roughness = 0.18;
  const uT = { value: 0 }, C = P.core, Gl = P.glass;
  const core = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uA: { value: C.alpha }, uT, uEdge: { value: col(C.edge) }, uMid: { value: col(C.mid) }, uHot: { value: col(C.hot) }, uHotW: { value: C.hotW }, uHotY: { value: C.hotY }, uHotH: { value: C.hotH }, uSwirl: { value: C.swirl }, uSpeed: { value: C.speed }, uEnds: { value: C.ends } },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main() { vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vL = position;
        vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal); vV = normalize(cameraPosition - w.xyz);
        gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform float uA, uT, uHotW, uHotY, uHotH, uSwirl, uSpeed, uEnds; uniform vec3 uEdge, uMid, uHot;
      varying vec3 vN; varying vec3 vV; varying vec3 vL;
      void main() {
        float f = clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);       // 1 facing the viewer (the column's middle), 0 at its sides
        float a = atan(vL.z, vL.x), y = vL.y / 2.4;
        float sw = sin(a * 3.0 + y * 9.0 - uT * uSpeed) * 0.5 + sin(a * 5.0 - y * 13.0 + uT * uSpeed * 1.7) * 0.5;
        float k = clamp(f + sw * uSwirl, 0.0, 1.0);
        float ends = smoothstep(0.0, uEnds, y) * smoothstep(1.0, 1.0 - uEnds, y);
        vec3 c = mix(uEdge, uMid, smoothstep(0.0, 0.6, k));
        float dy = (y - uHotY) / uHotH; c = mix(c, uHot, clamp(pow(f, uHotW) * exp(-dy * dy) * (0.85 + sw * 0.3), 0.0, 1.0));
        gl_FragColor = vec4(c * (0.55 + 0.45 * ends), uA);
      }`,
  });
  const glass = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { uTint: { value: col(Gl.tint) }, uRim: { value: col(Gl.rim) }, uA0: { value: Gl.a0 }, uARim: { value: Gl.aRim }, uPow: { value: Gl.rimPow }, uStreak: { value: Gl.streak } },
    vertexShader: /* glsl */ `
      varying vec3 vN; varying vec3 vV; varying vec3 vNv;
      void main() { vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal); vV = normalize(cameraPosition - w.xyz); vNv = normalize(mat3(viewMatrix) * vN);
        gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uTint, uRim; uniform float uA0, uARim, uPow, uStreak;
      varying vec3 vN; varying vec3 vV; varying vec3 vNv;
      void main() {
        float f = 1.0 - clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0);
        float rim = pow(f, uPow);
        float st = smoothstep(0.10, 0.0, abs(vNv.x + 0.55)) * uStreak + smoothstep(0.05, 0.0, abs(vNv.x - 0.42)) * uStreak * 0.5;   // painted vertical highlights
        vec3 c = mix(uTint, uRim, rim) + vec3(1.6, 1.5, 1.8) * st;
        gl_FragColor = vec4(c, clamp(uA0 + uARim * rim + st * 0.8, 0.0, 1.0));
      }`,
  });
  const Hh = P.halo, uHalo = { value: col(Hh.color) }, uHaloR = { value: Hh.r }, uHaloY = { value: Hh.y * P.H };
  const halo = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uHalo, uHaloR, uHaloY },
    vertexShader: /* glsl */ `
      uniform float uHaloR, uHaloY; varying vec2 vQ;
      void main() { mat4 M = modelMatrix * instanceMatrix; vec4 c = viewMatrix * M * vec4(0.0, uHaloY, 0.0, 1.0);
        float r = length(vec3(M[0][0], M[0][1], M[0][2])) * uHaloR;   // the tank's glass radius in metres x uHaloR
        vQ = position.xy * 2.0; c.xy += position.xy * 2.0 * r; c.z += r * 0.9;   // in front of the glass's middle
        gl_Position = projectionMatrix * c; }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uHalo; varying vec2 vQ;
      void main() { float d = length(vQ); float a = exp(-d * d * 3.2) * (1.0 - smoothstep(0.8, 1.0, d)); gl_FragColor = vec4(uHalo * a, a); }`,
  });
  parts.t6halo = new THREE.PlaneGeometry(1, 1);
  const bubble = new THREE.MeshBasicMaterial({ color: col(P.bubble), transparent: true, opacity: 0.85, depthWrite: false });
  const N = Math.max(1, slots.length);
  const mk = (name, mat, order) => { const g = parts[name]; if (!g) { report.errors.push('tank6: part ' + name + ' missing'); return null; }
    const im = new THREE.InstancedMesh(g, mat, N); im.name = 'tank6_' + name; im.frustumCulled = false; im.count = 0; im.renderOrder = order; root.add(im); return im; };
  let IM = [mk('t6gold', gold, 0), mk('t6rivet', rivet, 0), mk('t6core', core, 1), mk('t6bubbles', bubble, 2), mk('t6glass', glass, 3), mk('t6halo', halo, 4)].filter(Boolean);
  let libFit = null;
  if (TANKLIB_ON) {   // the library shell replaces every part but the halo
    const Lb = P.lib, lg = await new Promise((ok, no) => loader.load(Lb.url, ok, undefined, no));
    let mesh = null; lg.scene.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
    lg.scene.updateMatrixWorld(true); const geo = mesh.geometry.clone();
    // gltfpack stores positions as quantized integers (KHR_mesh_quantization): convert every attribute to float before transforming it
    for (const k of Object.keys(geo.attributes)) { const a = geo.attributes[k], n = a.itemSize, o = new Float32Array(a.count * n);
      for (let i = 0; i < a.count; i++) { o[i * n] = a.getX(i); if (n > 1) o[i * n + 1] = a.getY(i); if (n > 2) o[i * n + 2] = a.getZ(i); if (n > 3) o[i * n + 3] = a.getW(i); }
      geo.setAttribute(k, new THREE.BufferAttribute(o, n)); }
    geo.applyMatrix4(mesh.matrixWorld); geo.computeBoundingBox();
    const bb = geo.boundingBox, c = bb.getCenter(new THREE.Vector3()), hgt = bb.max.y - bb.min.y;
    geo.translate(-c.x, -bb.min.y, -c.z); geo.scale(1 / hgt, 1 / hgt, 1 / hgt);   // height 1, base at 0, centred on its axis
    const m = mesh.material.clone(); m.envMap = env; m.envMapIntensity = 1.2;
    const uL = { uBand: { value: new THREE.Vector2(...Lb.band) }, uR: { value: Lb.r }, uGold: { value: col(Lb.gold) }, uGoldK: { value: Lb.goldK }, uGlow: { value: col(Lb.glow) }, uHot: { value: col(Lb.hot) }, uHotW: { value: Lb.hotW }, uGlassK: { value: Lb.glass } };
    m.onBeforeCompile = (sh) => { Object.assign(sh.uniforms, uL);
      sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLp; varying vec3 vWn; varying vec3 vWv;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvLp = position;')
        .replace('#include <project_vertex>', '#include <project_vertex>\n{ mat4 IMm = modelMatrix;\n#ifdef USE_INSTANCING\n IMm = modelMatrix * instanceMatrix;\n#endif\n vec4 ww = IMm * vec4(transformed, 1.0); vWv = normalize(cameraPosition - ww.xyz); vWn = normalize(mat3(IMm) * objectNormal); }');
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform vec2 uBand; uniform float uR, uGoldK, uHotW, uGlassK; uniform vec3 uGold, uGlow, uHot; varying vec3 vLp; varying vec3 vWn; varying vec3 vWv; float t6glassMask;')
        .replace('#include <map_fragment>', `#include <map_fragment>
  { float rr = length(vLp.xz); t6glassMask = step(uBand.x, vLp.y) * step(vLp.y, uBand.y) * step(uR * 0.8, rr);
    float lum = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    diffuseColor.rgb = mix(uGold * clamp(0.35 + lum * uGoldK, 0.35, 1.0), diffuseColor.rgb * 0.15, t6glassMask); }`)
        .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\n metalnessFactor = mix(0.9, 0.1, t6glassMask);')
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n roughnessFactor = mix(clamp(roughnessFactor, 0.18, 0.4), 0.08, t6glassMask);')
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
  { float f = clamp(abs(dot(normalize(vWn), normalize(vWv))), 0.0, 1.0); float yy = (vLp.y - uBand.x) / (uBand.y - uBand.x), dy = (yy - 0.52) / 0.26;
    vec3 g = mix(uGlow * 0.35, uGlow, smoothstep(0.0, 0.6, f)); g = mix(g, uHot, clamp(pow(f, uHotW) * exp(-dy * dy), 0.0, 1.0));
    totalEmissiveRadiance += g * uGlassK * t6glassMask * 1.8; }`); };
    m.customProgramCacheKey = () => 't6lib';
    for (const im of IM) if (im.name !== 'tank6_t6halo') { root.remove(im); }
    const shell = new THREE.InstancedMesh(geo, m, N); shell.name = 'tank6_lib'; shell.frustumCulled = false; shell.count = 0; root.add(shell);
    IM = [shell, ...IM.filter((im) => im.name === 'tank6_t6halo')];
    libFit = { r: Lb.r, b0: Lb.band[0], b1: Lb.band[1], tris: geo.index ? geo.index.count / 3 : geo.attributes.position.count / 3 };
  }
  const mats = slots.map((s) => {
    const k = P.scale * (s.big ? P.big : 1), sx = s.rg * k, sy = (s.hg * k) / P.H;
    const M = s.M.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0.12, 0)).multiply(new THREE.Matrix4().makeScale(sx, sy, sx));   // the glass's bottom at the foot + 0.12 m (as arch56's tank)
    if (!libFit) return M;
    // the library shell: its glass band [b0, b1] (of its height 1) spans the slot's glass height, its glass radius r = the slot's glass radius
    const ly = (s.hg * k) / (libFit.b1 - libFit.b0), lx = (s.rg * k) / libFit.r;
    return s.M.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0.12 - libFit.b0 * ly, 0)).multiply(new THREE.Matrix4().makeScale(lx, ly, lx));
  });
  // (the halo keeps the modelled tank's frame: its matrix is the modelled one, so for the library shell the halo uses a second list)
  const haloMats = slots.map((s) => { const k = P.scale * (s.big ? P.big : 1), sx = s.rg * k, sy = (s.hg * k) / P.H;
    return s.M.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0.12, 0)).multiply(new THREE.Matrix4().makeScale(sx, sy, sx)); });
  report.parts.push(`tank6${libFit ? ' (library shell, ' + libFit.tris + ' tris)' : ''}: ${slots.length} slots (${slots.filter((s) => s.big).length} big right tanks), ${IM.reduce((a, im) => a + (im.geometry.index ? im.geometry.index.count : im.geometry.attributes.position.count) / 3, 0)} triangles per tank`);
  const tmp = new THREE.Matrix4();
  const sync = () => { const U = core.uniforms, C2 = P.core; U.uEdge.value.setRGB(...C2.edge); U.uMid.value.setRGB(...C2.mid); U.uHot.value.setRGB(...C2.hot);
    U.uA.value = C2.alpha; uHalo.value.setRGB(...P.halo.color); uHaloR.value = P.halo.r; uHaloY.value = P.halo.y * P.H;
    U.uHotW.value = C2.hotW; U.uHotY.value = C2.hotY; U.uHotH.value = C2.hotH; U.uSwirl.value = C2.swirl; U.uSpeed.value = C2.speed; U.uEnds.value = C2.ends;
    const V = glass.uniforms, G2 = P.glass; V.uTint.value.setRGB(...G2.tint); V.uRim.value.setRGB(...G2.rim); V.uA0.value = G2.a0; V.uARim.value = G2.aRim; V.uPow.value = G2.rimPow; V.uStreak.value = G2.streak;
    bubble.color.setRGB(...P.bubble); };
  P.sync = sync;   // (live tuning: change window.__bwTank6 then __bwTank6.sync() and render)
  function update(dt, time, phase, m) {
    sync(); uT.value = time; const hu = m ? m.z : 0; let n = 0;
    for (let i = 0; i < slots.length; i++) {
      const d = slots[i].u - hu; if (d < P.window[0] || d > P.window[1]) continue;
      for (const im of IM) im.setMatrixAt(n, im.name === 'tank6_t6halo' ? haloMats[i] : mats[i]); n++;
    }
    for (const im of IM) { im.count = n; im.instanceMatrix.needsUpdate = true; }
  }
  P.stats = () => ({ slots: slots.length, drawn: IM[0] ? IM[0].count : 0 });
  return { update };
}
