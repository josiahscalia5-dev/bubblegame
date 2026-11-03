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
export const S3 = Object.fromEntries(['castle', 'entrance'].map((k) => [k, LIST.includes(k) || LIST.includes('all')]));
export const S3_ON = Object.values(S3).some(Boolean);
export const S3_FILES = { castle: 'models/s3_castle.glb', entrance: 'models/s3_entrance.glb' };

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
};
const TUNE = (typeof window !== 'undefined' && window.__BW_S3_TUNE__) || {};
for (const k of Object.keys(TUNE)) if (S3_LAYOUT[k]) S3_LAYOUT[k] = { ...S3_LAYOUT[k], ...TUNE[k] };

// Fetched as soon as the page starts (only the switched-on models), parsed once the opening layer is built.
const bytes = {};
for (const k of Object.keys(S3)) if (S3[k]) bytes[k] = fetchModel(S3_FILES[k]);
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

export async function loadScreen3Models({ scene, env, axisY, tunnelStart, oldCastle }) {
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
  return report;
}

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
