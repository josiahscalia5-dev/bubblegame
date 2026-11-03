// The user's new Screen 3 models in the real 3D opening (test only, not approved): switched on one by one with
// ?s3=castle,entrance (or window.__BW_S3__ = ['castle', ...]). Off by default; without the switch nothing here is
// downloaded or run.
//
//   - castle:   the newest Number 4 Magical Laundry Castle (models/s3_castle.glb, byte-identical to the delivery),
//               standing as the façade around the washer door. It replaces the old castle model, the door's lavender
//               wall facing (opening.js) and the crown decoration on the old arch (decor.js), which would otherwise
//               float in front of it. Its arch is centred on the tunnel's axis and kept wider than the tunnel, so no
//               part of it reaches the ride or the drum.
//   - entrance: the Number 3 Enchanted Washing-Machine Entrance (models/s3_entrance.glb), its hollow centred on the
//               tunnel's axis. It replaces the code-built gold door rim, seal and rings (opening.js 'washerDoor').
//
// Each model keeps its own geometry and textures; only its material is adjusted, on its own copy: a little glow from
// its colour texture so the baked colours read as in the approved artwork, the gold made warmer and brighter, the pink
// softened toward the approved lavender-rose, and the water chambers lighter and icier.
// Visual only: no collider, lane, camera, collectible, mascot, path or tunnel change.
// For trying settings without a rebuild: window.__BW_S3_TUNE__ = { castle: {...}, entrance: {...} } before load.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const S3 = Object.fromEntries(['castle', 'entrance', 'machinery', 'brush', 'bubbles'].map((k) => [k, LIST.includes(k) || LIST.includes('all')]));
export const S3_ON = Object.values(S3).some(Boolean);
export const S3_FILES = { castle: 'models/s3_castle.glb', entrance: 'models/s3_entrance.glb', machinery: 'models/s3_machinery.glb', brush: 'models/s3_brush.glb' };

// Placement, measured on the models (in their own units, before scaling) and on the game:
//   castle: its arch is open below a round top of radius 0.263 centred at model y -0.27; scale 10.0 makes that arch
//           2.63 m wide either side of the axis (the drum's lip is at 2.57 m, the gold door rim in front of it reaches
//           2.99 m), and its front stands just behind the door rim (z 2.75), so the rim hides the arch's own gold trim
//           (at 10.5 a second gold arc showed above the rim). Its towers then stand outside the camera's view.
//   entrance: its hollow is a circle of radius 0.52 centred at model (-0.01, -0.29); holeRadius sets the scale. The
//           mascot reaches about 1.8 m from the axis at the door and the camera 1.61 m, so the hollow must stay wider.
export const S3_LAYOUT = {
  castle: { scale: 10.0, archCentreY: -0.27, front: 2.75, glow: 0.32, envI: 1.25,
    gold: { hue: 43, sat: 0.92, val: 1.1, metal: 0.55 }, pink: { hue: 292, mix: 0.45, sat: 0.62 }, cyan: { sat: 0.55, val: 1.06, glow: 0.55 } },
  entrance: { holeRadius: 2.05, holeCentre: [-0.01, -0.29], z: 2.6, glow: 0.25, envI: 1.25, gold: { hue: 43, sat: 0.92, val: 1.08, metal: 0.6 } },
  // Number 2, right side (world metres; +X is screen-left, the run goes along +Z). From the approved screen through the
  // gameplay camera: its inner edge at screen x ~384, top ~430, the lower part behind the slide's rail; 3.15 m tall at
  // z -7, so the big bubble can float in front of it and both stay clear of the lanes. It replaces the code-built
  // spoked gold wheel. One welded piece, so it stands still.
  machinery: { scale: 1.66, at: [-2.73, 0.4, -7.0], yaw: 180, glow: 0.3, envI: 1.25,
    gold: { hue: 43, sat: 0.92, val: 1.1, metal: 0.55 }, cyan: { sat: 0.6, val: 1.06, glow: 0.5 } },
  // Number 1, left side: its ringed face toward the camera, centre at screen (56, 595) and radius ~105 px as the
  // approved brush, which at z -7 puts its inner edge on the 1.18 m clearance line. It replaces the old side machinery.
  // Bristles, face and bracket are one welded piece, so it stands still (spinning it would spin the bracket too).
  brush: { scale: 1.2, at: [2.32, 0.165, -7.0], yaw: 180, glow: 0.22, rough: 0.72, metal: 0.15, envI: 1.0 },
  // Number 5: soap bubbles drawn in code on sphere geometry. The game's opening bubbles (placed from the approved
  // layout, opening.js BUBBLES_AT_START, and the game's own ones on the slide) are drawn with the soap-film shader,
  // plus the approved screen's big bubble on the right in front of Number 2 and two small ones beside it.
  // [screen x, y on the 538 x 1076 portrait screen, distance from the Tap to Start camera (m), radius (px), rise, sway].
  bubbles: { extra: [[475, 526, 14, 79, 0, 0.02], [428, 478, 13, 15, 0.06, 0.03], [522, 612, 11, 20, 0, 0.02]], centreAlpha: 0.035 },
};
const TUNE = (typeof window !== 'undefined' && window.__BW_S3_TUNE__) || {};
for (const k of Object.keys(TUNE)) if (S3_LAYOUT[k]) S3_LAYOUT[k] = { ...S3_LAYOUT[k], ...TUNE[k] };

// Fetched as soon as the page starts (only the switched-on models), parsed once the opening layer is built.
const bytes = {};
for (const k of Object.keys(S3_FILES)) if (S3[k]) bytes[k] = fetchModel(S3_FILES[k]);
async function fetchModel(url) {
  try {
    if (window.__BW_MODEL_FORMAT__ === 'json') throw new Error('json');
    const r = await fetch(url); if (!r.ok) throw new Error(r.status); return await r.arrayBuffer();
  } catch {
    try {   // the published preview serves models as base64 JSON (build.mjs)
      const j = await (await fetch(url + '.json')).json(), bin = atob(j.data), b = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) b[i] = bin.charCodeAt(i);
      return b.buffer;
    } catch { return null; }
  }
}

export async function loadScreen3Models({ scene, env, axisY, tunnelStart, oldCastle, sideMachinery, staticBubbles, camera, updaters, mascot }) {
  const report = {};
  const loader = new GLTFLoader();
  const parse = async (k) => { const b = await bytes[k]; return b ? loader.parseAsync(b, '') : null; };
  const hide = (o) => { if (o) o.visible = false; };
  const findByKey = (root, key) => { let hit = null; if (root) root.children.forEach((c) => c.traverse((o) => { if (!hit && o.isMesh && o.material && o.material.customProgramCacheKey && o.material.customProgramCacheKey() === key) hit = c; })); return hit; };

  if (S3.castle) {
    const gltf = await parse('castle');
    if (!gltf) report.castle = 'not found';
    else {
      const P = S3_LAYOUT.castle, S = P.scale;
      const holder = new THREE.Group(); holder.name = 's3Castle';
      holder.rotation.y = Math.PI;   // the model's front (+Z) toward the camera
      holder.scale.setScalar(S);
      holder.position.set(0, axisY - P.archCentreY * S, P.front + 0.236 * S);
      gltf.scene.traverse((o) => { if (o.isMesh) o.material = assetMaterial(o.material, env, 'castle', P); });
      holder.add(gltf.scene); scene.add(holder);
      // what it replaces: the old castle model, the lavender wall facing around the door, the crown on the old arch
      hide(oldCastle);
      scene.traverse((o) => { if (o.isMesh && o.material && o.material.uniforms && o.material.uniforms.uWall) hide(o); });
      hide(findByKey(scene.getObjectByName('entranceDecor'), 'decor:crown'));
      report.castle = { scale: S, ...clearance(holder, axisY, tunnelStart) };
    }
  }
  if (S3.entrance) {
    const gltf = await parse('entrance');
    if (!gltf) report.entrance = 'not found';
    else {
      const P = S3_LAYOUT.entrance, S = P.holeRadius / 0.52;
      const holder = new THREE.Group(); holder.name = 's3Entrance';
      holder.rotation.y = Math.PI; holder.scale.setScalar(S);
      holder.position.set(P.holeCentre[0] * S, axisY - P.holeCentre[1] * S, P.z);   // x mirrored by the half turn
      gltf.scene.traverse((o) => { if (o.isMesh) o.material = assetMaterial(o.material, env, 'entrance', P); });
      holder.add(gltf.scene); scene.add(holder);
      hide(scene.getObjectByName('washerDoor'));   // the code-built gold door rim, seal and rings
      report.entrance = { scale: +S.toFixed(3), ...clearance(holder, axisY, tunnelStart) };
    }
  }
  // Numbers 2 and 1: placed in world metres, faced toward the camera, then kept at least 1.18 m from the slide's middle
  const place = (gltf, P, material) => {
    const holder = new THREE.Group();
    holder.rotation.y = THREE.MathUtils.degToRad(P.yaw); holder.scale.setScalar(P.scale); holder.position.set(...P.at);
    gltf.scene.traverse((o) => { if (o.isMesh) o.material = material(o.material); });
    holder.add(gltf.scene); scene.add(holder);
    let lane = laneClearance(holder, tunnelStart);
    for (let i = 0; i < 40 && lane < 1.18; i++) { holder.position.x += 0.03 * Math.sign(holder.position.x); lane = laneClearance(holder, tunnelStart); }
    return { holder, lane: +lane.toFixed(2), at: holder.position.toArray().map((v) => +v.toFixed(2)) };
  };
  if (S3.machinery) {
    const gltf = await parse('machinery');
    if (!gltf) report.machinery = 'not found';
    else {
      const P = S3_LAYOUT.machinery, r = place(gltf, P, (m) => assetMaterial(m, env, 'machinery', P));
      r.holder.name = 's3Machinery';
      // what it replaces: the code-built spoked gold wheel on the right (scenery.js, at -2.25, -0.3, -10)
      const scenery = scene.getObjectByName('scenery');
      if (scenery) for (const c of scenery.children) if (c.position.distanceTo(new THREE.Vector3(-2.25, -0.3, -10.0)) < 0.01) hide(c);
      report.machinery = { scale: P.scale, at: r.at, nearestToLanes: r.lane };
    }
  }
  if (S3.brush) {
    const gltf = await parse('brush');
    if (!gltf) report.brush = 'not found';
    else {
      const P = S3_LAYOUT.brush;
      const r = place(gltf, P, (src) => {
        // its colours are in the vertices (no texture): lit by the studio reflections, a little glow from those colours
        const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: P.rough, metalness: P.metal, envMap: env, envMapIntensity: P.envI, side: THREE.DoubleSide });
        m.onBeforeCompile = (s) => { s.fragmentShader = s.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>\n  totalEmissiveRadiance += diffuseColor.rgb * ${(+P.glow).toFixed(3)};`); };
        m.customProgramCacheKey = () => 's3:brush:' + JSON.stringify(P);
        return m;
      });
      r.holder.name = 's3Brush';
      hide(sideMachinery);   // what it replaces: the old Meshy side machinery on the left
      // and the code-built cream-and-gold housing with pink fluff that stood under it (scenery.js, at 2.05, -0.55, -12),
      // which would otherwise cover the new brush's lower half
      const scenery = scene.getObjectByName('scenery');
      if (scenery) for (const c of scenery.children) if (c.position.distanceTo(new THREE.Vector3(2.05, -0.55, -12.0)) < 0.01) hide(c);
      report.brush = { scale: P.scale, at: r.at, nearestToLanes: r.lane, spins: false };
    }
  }
  if (S3.bubbles && staticBubbles) report.bubbles = soapBubbles({ scene, staticBubbles, camera, updaters, mascot });
  return report;
}

/** Nearest distance to the slide's middle, for the part over the slide and up to the highest jump (y < 2.6). */
function laneClearance(holder, tunnelStart) {
  holder.updateMatrixWorld(true);
  let near = Infinity; const v = new THREE.Vector3();
  holder.traverse((o) => {
    if (!o.isMesh) return;
    const p = o.geometry.attributes.position;
    for (let i = 0; i < p.count; i += 2) { v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld); if (v.z < tunnelStart && v.y < 2.6) near = Math.min(near, Math.abs(v.x)); }
  });
  return near;
}

// ---------------------------------------------------------------- Number 5: soap bubbles on sphere geometry
// A thin soap film: almost clear facing the camera (centreAlpha), the film colour and opacity rising toward the rim
// (Fresnel), pearly pink, icy cyan, lavender and pale blue swirling slowly, and two soft white highlights. Transparent,
// no depth writes, depth-tested, drawn after the scene. Gentle drift and wobble, none when reduced motion is preferred.
function soapBubbles({ scene, staticBubbles, camera, updaters, mascot }) {
  const P = S3_LAYOUT.bubbles;
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const u = { uTime: { value: 0 }, uMotion: { value: reduce ? 0 : 1 }, uAvoid: { value: new THREE.Vector3(0, -99, 0) }, uCentreAlpha: { value: P.centreAlpha } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: SOAP_VERTEX, fragmentShader: SOAP_FRAGMENT,
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const sphere = new THREE.SphereGeometry(1, 40, 24);
  const geoFrom = (inst, motion) => {
    const g = new THREE.InstancedBufferGeometry();
    g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
    g.setAttribute('inst', inst); g.setAttribute('motion', motion); return g;
  };
  const mk = (geo) => { const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; m.renderOrder = 5; scene.add(m); return m; };
  // the opening's own bubbles (same positions, sizes and motion, read from its instance data), now as soap-film spheres
  const sg = staticBubbles.geometry, same = mk(geoFrom(sg.attributes.inst, sg.attributes.motion));
  // the approved screen's big bubble on the right and two small ones, placed through the Tap to Start camera
  const n = P.extra.length;
  const extraGeo = geoFrom(new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4), new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4));
  extraGeo.instanceCount = 0;
  mk(extraGeo);
  const ref = new THREE.PerspectiveCamera(40, 0.5, 0.1, 200);
  let placed = false;
  updaters.push((dt, t, phase) => {
    u.uTime.value = t; if (mascot) u.uAvoid.value.copy(mascot.root.position);
    staticBubbles.visible = false;   // the old flat bubbles: replaced by the soap-film spheres
    same.geometry.instanceCount = sg.instanceCount;
    if (placed || phase !== 'intro') return;
    placed = true;
    ref.fov = camera.aspect >= 0.5 ? camera.fov : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.aspect / 0.5));
    ref.position.copy(camera.position); ref.quaternion.copy(camera.quaternion); ref.updateProjectionMatrix(); ref.updateMatrixWorld(true);
    const fwd = ref.getWorldDirection(new THREE.Vector3()), dir = new THREE.Vector3();
    const inst = extraGeo.attributes.inst, mot = extraGeo.attributes.motion;
    const pxPerM = (d) => 1076 / (2 * d * Math.tan(THREE.MathUtils.degToRad(ref.fov) / 2));
    P.extra.forEach(([sx, sy, d, rpx, rise, sway], i) => {
      dir.set((sx / 538) * 2 - 1, 1 - (sy / 1076) * 2, 0.5).unproject(ref).sub(ref.position).normalize();
      const p = ref.position.clone().addScaledVector(dir, d / dir.dot(fwd));
      inst.setXYZW(i, p.x, p.y, p.z, rpx / pxPerM(d)); mot.setXYZW(i, 1.7 + i * 2.3, rise, sway, 0);
    });
    extraGeo.instanceCount = n; inst.needsUpdate = mot.needsUpdate = true;
  });
  return { spheres: true, extra: n, reducedMotion: reduce };
}

const SOAP_VERTEX = /* glsl */ `
attribute vec4 inst;     // centre xyz, radius
attribute vec4 motion;   // phase, rise speed, sway, kind
uniform float uTime, uMotion;
uniform vec3 uAvoid;
varying vec3 vN; varying vec3 vW; varying float vPhase; varying float vFade;
void main() {
  float ph = motion.x, rise = motion.y * uMotion, sway = motion.z * uMotion;
  float lift = 0.0, fade = 1.0;
  if (rise > 0.0) { float k = fract(uTime * rise / 1.4 + ph * 0.159); lift = k * 1.4 - 0.4; fade = smoothstep(0.0, 0.15, k) * (1.0 - smoothstep(0.8, 1.0, k)); }
  vec3 centre = inst.xyz + vec3(sin(uTime * 0.55 + ph) * sway, lift + sin(uTime * 0.9 + ph * 1.3) * inst.w * 0.08 * uMotion, cos(uTime * 0.45 + ph) * sway * 0.6);
  fade *= smoothstep(0.35, 0.85, length(centre - uAvoid) - inst.w * 0.6);
  float wob = 1.0 + 0.025 * sin(uTime * 2.3 + ph * 3.0) * uMotion;
  vec3 p = centre + normal * inst.w * vec3(wob, 1.0 / wob, wob);
  vN = normal; vW = p; vPhase = ph; vFade = fade * step(0.0005, inst.w);
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`;
const SOAP_FRAGMENT = /* glsl */ `
uniform float uTime, uCentreAlpha;
varying vec3 vN; varying vec3 vW; varying float vPhase; varying float vFade;
void main() {
  if (vFade <= 0.0) discard;
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0), fres = pow(1.0 - ndv, 2.2);
  // thin-film colour: pearly pink (#FF8EE6), lavender (#D099FF), icy cyan (#6DF0FF), pale blue, swirling slowly
  float film = fres * 1.3 + 0.22 * sin(dot(N, vec3(2.7, 1.9, 3.3)) * 2.4 + uTime * 0.35 + vPhase) + vPhase * 0.17;
  float k = fract(film) * 4.0;
  vec3 c0 = vec3(1.0, 0.557, 0.902), c1 = vec3(0.816, 0.6, 1.0), c2 = vec3(0.427, 0.941, 1.0), c3 = vec3(0.78, 0.9, 1.0);
  vec3 col = k < 1.0 ? mix(c0, c1, k) : k < 2.0 ? mix(c1, c2, k - 1.0) : k < 3.0 ? mix(c2, c3, k - 2.0) : mix(c3, c0, k - 3.0);
  col *= 0.6 + 0.9 * fres;
  // a soft pearly reflection across the upper part of the film (the approved bubbles show pink-lilac swirls there)
  float refl = smoothstep(0.25, 0.85, 1.0 - ndv) * (0.45 + 0.55 * smoothstep(-0.3, 0.8, N.y)) * 0.22;
  col += mix(c0, c1, 0.5 + 0.5 * sin(uTime * 0.3 + vPhase)) * refl;
  // soft white window highlights: up-left from the key light, a small one low-right
  vec3 L1 = normalize(vec3(0.45, 0.75, -0.5)), L2 = normalize(vec3(-0.5, -0.4, -0.6));
  float s1 = pow(max(dot(N, normalize(L1 + V)), 0.0), 90.0), s2 = pow(max(dot(N, normalize(L2 + V)), 0.0), 40.0) * 0.35;
  col += vec3(1.0, 0.98, 1.0) * (s1 * 1.1 + s2);
  float rim = smoothstep(0.82, 0.97, 1.0 - ndv) * (1.0 - smoothstep(0.985, 1.0, 1.0 - ndv)) * 0.25;
  float a = clamp(uCentreAlpha + fres * 0.85 + rim * 1.6 + refl * 0.9 + s1 * 0.8 + s2 * 0.6, 0.0, 0.92) * vFade;
  gl_FragColor = vec4(col * a, a);
}
`;

/** Nearest point to the tunnel's axis, above the water (y > -0.2), and how far the model reaches toward the camera. */
function clearance(holder, axisY, tunnelStart) {
  holder.updateMatrixWorld(true);
  let near = Infinity, zMin = Infinity; const v = new THREE.Vector3();
  holder.traverse((o) => {
    if (!o.isMesh) return;
    const p = o.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld);
      zMin = Math.min(zMin, v.z);
      if (v.y > -0.2 && v.z < tunnelStart + 30) near = Math.min(near, Math.hypot(v.x, v.y - axisY));
    }
  });
  return { nearestToAxis: +near.toFixed(2), frontZ: +zMin.toFixed(2) };
}

/** A copy of the model's own PBR material, lit by the scene's studio reflections, with a little glow from its colour
 *  texture and the colour corrections above (per texel, in display space). */
function assetMaterial(src, env, key, P) {
  const m = new THREE.MeshStandardMaterial({ map: src.map, metalnessMap: src.metalnessMap, roughnessMap: src.roughnessMap, normalMap: src.normalMap || null,
    metalness: 1, roughness: 1, envMap: env, envMapIntensity: P.envI, emissive: 0xffffff, emissiveMap: src.map, emissiveIntensity: P.glow, side: THREE.DoubleSide });
  const g = P.gold || {}, pk = P.pink || null, cy = P.cyan || null, f = (v) => (+v).toFixed(4);
  const grade = `
    vec3 s3Grade(vec3 lin) {
      vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = s3Rgb2hsv(c); float h = hsv.x * 360.0;
      float gold = smoothstep(22.0, 30.0, h) * (1.0 - smoothstep(58.0, 66.0, h)) * smoothstep(0.3, 0.45, hsv.y);
      hsv.x = mix(hsv.x, ${f((g.hue ?? 43) / 360)}, gold * 0.6); hsv.y *= mix(1.0, ${f(g.sat ?? 1)}, gold); hsv.z = min(1.0, hsv.z * mix(1.0, ${f(g.val ?? 1)}, gold));
      ${pk ? `float pink = smoothstep(265.0, 280.0, h) * (1.0 - smoothstep(338.0, 350.0, h)) * smoothstep(0.1, 0.2, hsv.y);
      hsv.x = mix(hsv.x, ${f(pk.hue / 360)}, pink * ${f(pk.mix)}); hsv.y *= mix(1.0, ${f(pk.sat)}, pink);` : ''}
      ${cy ? `float cyan = smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y);
      hsv.y *= mix(1.0, ${f(cy.sat)}, cyan); hsv.z = min(1.0, hsv.z * mix(1.0, ${f(cy.val)}, cyan));` : ''}
      return pow(s3Hsv2rgb(hsv), vec3(2.2));
    }
    float s3GoldMask(vec3 lin) { vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = s3Rgb2hsv(c); float h = hsv.x * 360.0;
      return smoothstep(22.0, 30.0, h) * (1.0 - smoothstep(58.0, 66.0, h)) * smoothstep(0.3, 0.45, hsv.y); }
    ${cy ? `float s3CyanMask(vec3 lin) { vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2)); vec3 hsv = s3Rgb2hsv(c); float h = hsv.x * 360.0;
      return smoothstep(165.0, 178.0, h) * (1.0 - smoothstep(212.0, 222.0, h)) * smoothstep(0.3, 0.5, hsv.y); }` : ''}`;
  m.onBeforeCompile = (s) => {
    s.fragmentShader = s.fragmentShader.replace('void main() {', `${S3_HSV}\n${grade}\nfloat s3Gold = 0.0;\nvoid main() {`)
      .replace('#include <map_fragment>', `#include <map_fragment>\n  s3Gold = s3GoldMask(diffuseColor.rgb);\n  diffuseColor.rgb = s3Grade(diffuseColor.rgb);`)
      // gold reads as polished warm gold rather than dark bronze: less of a pure mirror of the darker surroundings
      .replace('#include <metalnessmap_fragment>', `#include <metalnessmap_fragment>\n  metalnessFactor *= mix(1.0, ${f(g.metal ?? 1)}, s3Gold);`)
      .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>\n  totalEmissiveRadiance = s3Grade(totalEmissiveRadiance)${cy ? ` * (1.0 + ${f(cy.glow)} * s3CyanMask(totalEmissiveRadiance))` : ''};`);
  };
  m.customProgramCacheKey = () => 's3:' + key + ':' + JSON.stringify(P);
  return m;
}

const S3_HSV = /* glsl */ `
vec3 s3Rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + 1e-10)), d / (q.x + 1e-10), q.x);
}
vec3 s3Hsv2rgb(vec3 c) { vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0); return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y); }
`;
