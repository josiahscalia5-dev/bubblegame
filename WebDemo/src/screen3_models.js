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
import { buildTunnelS4 } from './tunnel_s4.js';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const S3 = Object.fromEntries(['castle', 'entrance', 'machinery', 'brush', 'bubbles'].map((k) => [k, LIST.includes(k) || LIST.includes('all')]));
// ?s3=...,edges (test, separate from the five-asset version): the slide's tall pale walls restyled as low icy edges,
// and the brush and big bubble refined now that the walls no longer hide them (see restyleEdges and EDGES below).
S3.edges = LIST.includes('edges');
// ?s3=...,cine (test): an opening-only camera that matches the approved Screen 3's perspective (setupCine below).
S3.cine = LIST.includes('cine');
// ?s3=paint (test): the approved painting itself as the opening's scenery, placed in 3D at several depths (castle and
// door at the door's depth, brush, machinery and towers at theirs, side water and foam on the ground), with the pink
// mascot, slide, water under it, foam and coins live in front. It brings the Number 4 castle (seen through the banner
// area once the banner fades, and after the hand-over) and the icy slide edges. See paintScenery below.
// ?s3=tunnel (test): the inside of the washing machine rebuilt toward the approved Screen 4 (tunnel_s4.js): a ring vortex,
// large spinning brushes on the sides (the low ones knock a mascot in their lane back to the middle), soap bubbles, foam.
S3.tunnel = LIST.includes('tunnel');
S3.paint = LIST.includes('paint');
// ?s3=round2 (test): the painted opening and the tunnel above, plus the second round of polish in the tunnel (richer, never
// washed-out light, a coloured exit vortex, tidier collectibles and foam, clearer brushes) and the Screen 4 controls in game.js
// (hearts that brushes take, Bubble Blast, Turbo Spin, pause, embossed gold paw coins). ?s3=paint,tunnel stays as it was.
S3.round2 = LIST.includes('round2');
// ?s3=round3 (test): round2 plus the third visual pass toward the approved Screen 4 (tunnel_r3.js): white foam and spray
// around the mascot, a luminous blue swirling drum, pink-white-blue brushes, a purple gem, coins and bubbles framing the view.
// It never shows the approved paintings themselves: no painted scenery (?s3=paint) and no picture at Tap to Start; the
// opening is the live 3D scene.
S3.round3 = LIST.includes('round3');
// ?s3=round4 (test): round3 plus the reconstruction of the approved Screen 4's scenery (tunnel_r4.js): a new deep electric-blue
// tunnel lining with 3D cyan and gold rings, a straighter start, flowing turquoise water with a splash crown, pom-pom brushes.
// ?s3=round5 (test): round4 plus the major visual reconstruction (tunnel_r5.js): a swirling water-vortex tunnel with a luminous
// heart, a soft glow, floating droplets, many more bubbles and a soft fur halo on the pink character. Round 4 is unchanged.
// ?s3=round6 (test): round5 plus the washing machine's architecture rebuilt as geometry (tunnel_r6.js): a porthole entrance
// (lavender drum face, thick gold bezel, bronze step, blue seal, rivets), layered flanges in the tunnel, the camera re-aimed.
S3.round6 = LIST.includes('round6');
S3.round5 = LIST.includes('round5') || S3.round6;
S3.round4 = LIST.includes('round4') || S3.round5;
// ?s3=round4,fluffy: the first trial switch for the fluffy shell-fur brushes (fluffy_brush.js). The user asked for them in
// Round 4 itself, so round4 now always uses them and `fluffy` changes nothing; kept so old links still open.
S3.fluffy = S3.round4 && LIST.includes('fluffy');
// ?s3=round5,tripobrush (test): the drum brushes drawn with the brush generated by Tripo P2 from the user's brush image, for comparison
S3.tripobrush = S3.round5 && LIST.includes('tripobrush');
if (S3.round4) S3.round3 = true;
if (S3.round3) S3.round2 = true;
if (S3.round2) { S3.paint = !S3.round3; S3.tunnel = true; }
// Measured against the approved Screen 3 (tools/screen4/compare_s4.py), the closest fully 3D opening is the user's five Meshy
// opening models (castle, entrance, machinery, brush, bubbles) with the icy edges and the opening camera of the cine test.
if (S3.round3) for (const k of ['castle', 'entrance', 'machinery', 'brush', 'bubbles', 'edges', 'cine']) S3[k] = true;
if (S3.paint) { S3.castle = true; S3.edges = true; }
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
// With ?s3=...,edges only. Brush: the approved brush's centre (56, 576 on the 538 x 1076 screen) and outer fluffy radius
// (~117 px), solved through the gameplay camera with its inner edge on the 1.18 m clearance line: a little larger and
// further back. Bubbles: a stronger pearly film toward the rim (the centre stays at the same opacity).
// Edges: low icy rims along the slide (top 0.13 m above the edge's water instead of the walls' 0.2 m), translucent.
export const EDGES = { brush: { scale: 1.51, at: [2.62, 0.23, -4.9] }, film: 1.4,
  edge: { profile: [[-0.08, -0.05], [0.0, 0.07], [0.1, 0.13], [0.22, 0.1], [0.3, -0.02], [0.33, -0.8]], alpha: 0.45, foam: 1.0 } };
// The cinematic opening camera, fitted to the approved Screen 3 through the same projection the game uses: the door's
// centre (y 475) and outer radius (170 px) and the mascot's centre (y 730) and width (245 px on the 538 x 1076 screen).
// It is the gameplay camera's own pose plus this small offset: 0.10 m up, 0.82 m forward, 0.30 degrees more downward,
// a 3.7 % wider view. After Tap to Start the offset blends to nothing over 0.9 s of game time, then the gameplay
// camera is drawn again, unchanged.
// Painted scenery: depths of its parts (world z of the plane each sits on; +Z is the run toward the door at z 2.7),
// how far under the slide's surface the side water and foam lie (following its climbs and dips), and the hand-over to the 3D door as the camera nears it.
export const PAINT = { far: 2.35, towers: -1.5, brush: -4.9, machinery: -6.5, groundBelow: 0.35, tear: 1.35, cutZ: -14, fadeFrom: -12, fadeTo: -6 };
export const CINE = { up: 0.099, forward: 0.818, pitch: 0.30, fov: 1.0375, blend: 0.9 };
const TUNE = (typeof window !== 'undefined' && window.__BW_S3_TUNE__) || {};
for (const k of Object.keys(TUNE)) if (S3_LAYOUT[k]) S3_LAYOUT[k] = { ...S3_LAYOUT[k], ...TUNE[k] };
if (TUNE.edges) Object.assign(EDGES, TUNE.edges);
if (TUNE.cine) Object.assign(CINE, TUNE.cine);
if (TUNE.paint) Object.assign(PAINT, TUNE.paint);
if (S3.edges) S3_LAYOUT.brush = { ...S3_LAYOUT.brush, ...EDGES.brush };

// Fetched as soon as the page starts (only the switched-on models), parsed once the opening layer is built.
const bytes = {};
for (const k of Object.keys(S3_FILES)) if (S3[k]) bytes[k] = fetchModel(S3_FILES[k]);
if (S3.tunnel) bytes.brushT = bytes.brush || fetchModel(S3_FILES.brush);
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

export async function loadScreen3Models({ scene, env, axisY, tunnelStart, oldCastle, sideMachinery, staticBubbles, camera, updaters, mascot, L, W, renderPass, rollers, grade, bloomPass, outputPass, waterSheets, TR, bumpMascot, drumMeshes, exitLight, r2 }) {
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
  const view = S3.cine && renderPass ? setupCine({ camera, renderPass, updaters }) : null;   // before the bubbles, so they are placed through it
  if (view) report.cine = { ...CINE };
  if (S3.bubbles && staticBubbles) report.bubbles = soapBubbles({ scene, staticBubbles, camera: view || camera, updaters, mascot });
  if (S3.edges && L && W) report.edges = restyleEdges({ scene, L, W, env, updaters });
  if (S3.tunnel && TR && bumpMascot) report.tunnel = await buildTunnelS4({ scene, TR, L, W, camera, updaters, mascot, bump: bumpMascot, brushBytes: await bytes.brushT,
    waterSheets, soap: { vertex: SOAP_VERTEX, fragment: SOAP_FRAGMENT }, loaderParse: (b) => loader.parseAsync(b.slice(0), ''), drumMeshes,
    round2: S3.round2 ? { exitLight, grade, bloomPass, hooks: r2, round3: S3.round3, round4: S3.round4, round5: S3.round5, fluffy: S3.fluffy, tripoBrush: S3.tripobrush, env } : null });
  if (S3.paint && grade && outputPass) report.paint = await paintScenery({ scene, camera, updaters, tunnelStart, sideMachinery, staticBubbles, rollers, grade, bloomPass, outputPass, waterSheets, L, W });
  // With 'edges': the opening-only scenery is not drawn once the camera is inside the drum (it is behind the camera or
  // behind the drum's walls there), and is drawn again when the ride loops back to the slide.
  if (S3.edges && camera) {
    const opening = [];
    scene.traverse((o) => { if (/^s3(Castle|Entrance|Machinery|Brush|IcyEdge|Bubbles)/.test(o.name)) opening.push(o); });
    let inside = false;
    updaters.push(() => {
      const z = camera.position.z, now = inside ? z > tunnelStart : z > tunnelStart + 1.5;
      if (now !== inside) { inside = now; for (const o of opening) o.visible = !inside; }
    });
    report.hiddenInTunnel = opening.length;
  }
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
  const u = { uTime: { value: 0 }, uMotion: { value: reduce ? 0 : 1 }, uAvoid: { value: new THREE.Vector3(0, -99, 0) }, uCentreAlpha: { value: P.centreAlpha }, uFilm: { value: S3.edges ? EDGES.film : 1 } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: SOAP_VERTEX, fragmentShader: SOAP_FRAGMENT,
    transparent: true, depthWrite: false, depthTest: true, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const sphere = new THREE.SphereGeometry(1, 40, 24);
  const geoFrom = (inst, motion) => {
    const g = new THREE.InstancedBufferGeometry();
    g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
    g.setAttribute('inst', inst); g.setAttribute('motion', motion); return g;
  };
  const mk = (geo) => { const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; m.renderOrder = 5; m.name = 's3Bubbles'; scene.add(m); return m; };
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
uniform float uTime, uCentreAlpha, uFilm;
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
  float a = clamp(uCentreAlpha + (fres * 0.85 + rim * 1.6 + refl * 0.9) * uFilm + s1 * 0.8 + s2 * 0.6, 0.0, 0.92) * vFade;
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

// ---------------------------------------------------------------- ?s3=...,edges: the slide's walls as low icy edges
// The slide's walls, gold tube rail, gold blocks and studs are built by game.js buildRails purely for looks: the mascot
// moves between fixed lanes (W.laneX) and nothing collides with them, and the water surface it rides on (W.baseHeight)
// is not touched here. This hides the tall pale walls and the tube rail on top of them, and draws low icy rims along
// the same path instead: translucent cyan, a white foam crest flowing toward the portal, and sparkles, so the brush and
// machinery behind show through. The chunky gold blocks along the outside stay (the approved screen's gold block rail).
function restyleEdges({ scene, L, W, env, updaters }) {
  const report = { wallsHidden: 0, railsHidden: 0 };
  const z0 = L.startZ - 24, z1 = -0.6;
  scene.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || !o.material || !o.material.color) return;
    const hex = o.material.color.getHex(), g = o.geometry;
    if (!g.boundingBox) g.computeBoundingBox();
    const b = g.boundingBox, longRun = b.max.z - b.min.z > 20 && b.min.z < z0 + 1 && Math.abs((b.min.x + b.max.x) / 2) < 1.8;
    if (!longRun) return;
    if (hex === 0xe6d8ff || hex === 0x8fd2ff) { o.visible = false; report.wallsHidden++; }            // pearl walls (glassy aqua with the opening's slide finish)
    else if (g.type === 'TubeGeometry') { o.visible = false; report.railsHidden++; }                     // the gold tube rail on top
  });
  const u = { uTime: { value: 0 }, uAlpha: { value: EDGES.edge.alpha }, uFoam: { value: EDGES.edge.foam } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: EDGE_VERTEX, fragmentShader: EDGE_FRAGMENT,
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const prof = EDGES.edge.profile, n = prof.length;
  for (const side of [-1, 1]) {
    const pos = [], across = [], idx = [];
    let rows = 0;
    for (let z = z0; z <= z1 + 1e-6; z += 0.25, rows++) {
      const y = W.baseHeight(L, side * W.SLIDE.half, z);
      prof.forEach(([dx, dy], c) => { pos.push(side * (W.SLIDE.half + dx), y + dy, z); across.push(c / (n - 1)); });
    }
    for (let r = 0; r < rows - 1; r++) for (let c = 0; c < n - 1; c++) { const a = r * n + c, b = a + n; idx.push(a, b, a + 1, b, b + 1, a + 1); }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('across', new THREE.Float32BufferAttribute(across, 1));
    g.setIndex(idx); g.computeVertexNormals();
    const m = new THREE.Mesh(g, mat); m.renderOrder = 2; m.name = 's3IcyEdge'; scene.add(m);
  }
  updaters.push((dt, t) => { u.uTime.value = t; });
  report.icyEdges = 2;
  return report;
}

const EDGE_VERTEX = /* glsl */ `
attribute float across;
varying vec3 vW; varying vec3 vN; varying float vAcross;
void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vAcross = across;
  gl_Position = projectionMatrix * viewMatrix * w; }
`;
const EDGE_FRAGMENT = /* glsl */ `
uniform float uTime, uAlpha, uFoam;
varying vec3 vW; varying vec3 vN; varying float vAcross;
float eh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float en(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(eh(i), eh(i + vec2(1, 0)), f.x), mix(eh(i + vec2(0, 1)), eh(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float fres = pow(1.0 - abs(dot(N, V)), 2.0);
  // icy crystal: pale cyan, deeper toward the outside, brighter facing away from the camera
  vec3 ice = mix(vec3(0.62, 0.92, 1.0), vec3(0.2, 0.62, 1.0), smoothstep(0.35, 1.0, vAcross));
  ice += vec3(0.6, 0.85, 1.0) * fres * 0.5;
  // a white foam crest along the top of the rim, broken into lumps that flow toward the portal
  float crest = exp(-pow((vAcross - 0.4) / 0.16, 2.0));
  float lumps = en(vec2(vW.z * 2.2 - uTime * 2.4, vAcross * 6.0)) * 0.6 + en(vec2(vW.z * 5.0 - uTime * 3.1, vAcross * 11.0)) * 0.4;
  float foam = smoothstep(0.35, 0.7, crest * (0.55 + 0.75 * lumps)) * uFoam;
  vec3 col = mix(ice, vec3(0.96, 0.99, 1.0), foam);
  // sparkles
  vec2 sp = vec2(vW.z * 9.0, vAcross * 14.0); vec2 sc = floor(sp);
  float tw = step(0.94, eh(sc)) * (1.0 - smoothstep(0.0, 0.22, length(fract(sp) - 0.5))) * pow(max(0.0, sin(uTime * (3.0 + eh(sc + 3.1) * 4.0) + eh(sc) * 40.0)), 6.0);
  col += vec3(1.0) * tw * 1.4;
  // the outer face: white-cyan foam spilling down over the edge into the water beside the slide (the approved slide's
  // edges foam over; without this the deep water beside the slide showed as a dark strip once the tall walls were gone)
  float outer = smoothstep(0.62, 0.86, vAcross);
  float spill = en(vec2(vW.z * 3.0 - uTime * 1.5, vW.y * 4.0 + uTime * 2.2)) * 0.6 + en(vec2(vW.z * 7.0, vW.y * 9.0 + uTime * 3.0)) * 0.4;
  col = mix(col, mix(vec3(0.55, 0.85, 1.0), vec3(0.97, 0.99, 1.0), smoothstep(0.3, 0.75, spill)), outer);
  float a = clamp(uAlpha * (0.7 + 0.6 * fres) + foam * 0.85 + tw + outer * (0.35 + 0.45 * spill), 0.0, 0.95);
  gl_FragColor = vec4(col * a, a);
}
`;

// ---------------------------------------------------------------- ?s3=...,cine: the opening-only camera
// A separate camera that the render pass draws through during the opening. The gameplay camera keeps moving exactly as
// before (its code and path are untouched); this one copies its pose every frame and adds the CINE offset, weighted 1
// at Tap to Start and blending to 0 over CINE.blend seconds after the tap. At 0 the render pass is handed back the
// gameplay camera itself.
function setupCine({ camera, renderPass, updaters }) {
  const cine = new THREE.PerspectiveCamera(camera.fov, camera.aspect, camera.near, camera.far);
  const fwd = new THREE.Vector3(), tilt = new THREE.Quaternion(), X = new THREE.Vector3(1, 0, 0);
  let t0 = null;
  updaters.push((dt, t, phase) => {
    if (phase === 'running' && t0 === null) t0 = t;
    const since = t0 === null ? 0 : t - t0;
    const w = phase === 'intro' ? 1 : t0 === null ? 0 : 1 - THREE.MathUtils.smoothstep(since, 0, CINE.blend);
    if (w <= 0) { if (renderPass.camera !== camera) renderPass.camera = camera; return; }
    camera.getWorldDirection(fwd); fwd.y = 0; fwd.normalize();
    cine.position.copy(camera.position).addScaledVector(fwd, CINE.forward * w); cine.position.y += CINE.up * w;
    cine.quaternion.copy(camera.quaternion).multiply(tilt.setFromAxisAngle(X, -THREE.MathUtils.degToRad(CINE.pitch) * w));
    cine.fov = camera.fov * (1 + (CINE.fov - 1) * w); cine.aspect = camera.aspect; cine.near = camera.near; cine.far = camera.far;
    cine.updateProjectionMatrix(); cine.updateMatrixWorld(true);
    renderPass.camera = cine;
  });
  return cine;
}

// ---------------------------------------------------------------- ?s3=paint: the approved painting as 3D scenery
// The painting (ui/s3_paint_backdrop.png: the approved Screen 3 with its door centre open) is projected from the Tap
// to Start camera onto simple stand-in depths, so at Tap to Start it lines up exactly with the approved screen and as
// the camera moves each part moves as something at that distance would. It is depth-tested: the live slide, water under
// the mascot, rails, coins and the mascot itself are nearer and stay in front; the tunnel shows through the door centre.
// Its pixels are drawn past the game's colour grade and tone mapping (they carry a mark in the alpha channel that the
// grade and output passes read, only with this switch), so the painting keeps its own colours exactly; the live 3D
// parts are graded as before. Bloom is off while it is shown, so the mark is not disturbed.
async function paintScenery({ scene, camera, updaters, tunnelStart, sideMachinery, staticBubbles, rollers, grade, bloomPass, outputPass, waterSheets, L, W }) {
  const P = PAINT;
  const tex = await new THREE.TextureLoader().loadAsync('ui/s3_paint_backdrop.png');
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  // the painted scenery replaces the 3D scenery in front of the castle (the castle stays behind it)
  const hidden = [scene.getObjectByName('entranceDecor'), scene.getObjectByName('scenery'), sideMachinery, staticBubbles,
    ...(rollers || []).filter((r) => r.centre.z < tunnelStart).map((r) => r.g)].filter(Boolean);
  for (const o of hidden) o.visible = false;
  // a grid over the screen (stage coordinates, with a margin), placed once on the first Tap to Start frame
  const NX = 48, NY = 96, X0 = -40, X1 = 578, Y0 = -80, Y1 = 1156;
  const n = (NX + 1) * (NY + 1), pos = new Float32Array(n * 3), st = new Float32Array(n * 2), idx = [];
  for (let j = 0; j <= NY; j++) for (let i = 0; i <= NX; i++) { const k = j * (NX + 1) + i; st[k * 2] = X0 + (X1 - X0) * i / NX; st[k * 2 + 1] = Y0 + (Y1 - Y0) * j / NY; }
  for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) { const a = j * (NX + 1) + i, b = a + NX + 1; idx.push(a, b, a + 1, a + 1, b, b + 1); }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3)); geo.setAttribute('stage', new THREE.BufferAttribute(st, 2)); geo.setIndex(idx);
  const u = { map: { value: tex }, uFade: { value: 1 }, uBanner: { value: 0 }, uPanel: { value: 0 } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: PAINT_VERTEX, fragmentShader: PAINT_FRAGMENT, transparent: true, depthWrite: true, depthTest: true,
    blending: THREE.CustomBlending, blendSrc: THREE.SrcAlphaFactor, blendDst: THREE.OneMinusSrcAlphaFactor, blendSrcAlpha: THREE.ZeroFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor });
  const mesh = new THREE.Mesh(geo, mat); mesh.name = 's3Paint'; mesh.frustumCulled = false; mesh.renderOrder = -1; mesh.visible = false;
  scene.add(mesh);
  // the grade and output passes keep marked pixels as they are (only with this switch)
  grade.uniforms.uS3Paint = { value: 0 };
  grade.material.fragmentShader = grade.material.fragmentShader.replace('uniform sampler2D tDiffuse;', 'uniform sampler2D tDiffuse; uniform float uS3Paint;')
    .replace('gl_FragColor = max(c, 0.0);', '{ vec4 s3o = texture2D(tDiffuse, vUv); c.rgb = mix(c.rgb, s3o.rgb, clamp(1.0 - s3o.a, 0.0, 1.0) * uS3Paint); c.a = s3o.a; }\n      gl_FragColor = max(c, 0.0);');
  grade.material.needsUpdate = true;
  outputPass.uniforms.uS3Paint = { value: 0 };
  outputPass.material.fragmentShader = outputPass.material.fragmentShader.replace('uniform sampler2D tDiffuse;', 'uniform sampler2D tDiffuse;\n\t\tuniform float uS3Paint;')
    .replace('gl_FragColor = texture2D( tDiffuse, vUv );', 'vec4 s3o = texture2D( tDiffuse, vUv ); gl_FragColor = s3o;')
    .replace('// color space', 'gl_FragColor.rgb = mix( gl_FragColor.rgb, s3o.rgb, clamp( 1.0 - s3o.a, 0.0, 1.0 ) * uS3Paint ); gl_FragColor.a = 1.0;\n\t\t\t// color space');
  outputPass.material.needsUpdate = true;
  // The slide's water sheet gets its own copy of the water shader that leaves out the moat beyond the gold rails in the
  // far part of the slide while the painting shows, so the painted side water, foam and the brush's and machinery's
  // bases show there instead (the live water under the slide, beside it up to the rails, and the near moat under the
  // Tap to Start panel stay). The tunnel's water sheet keeps its shader.
  const cut = { uPaintCut: { value: 0 }, uPaintZ: { value: P.cutZ } };
  const sheet = (waterSheets || []).find((m) => { m.geometry.computeBoundingBox(); return m.geometry.boundingBox.min.z < tunnelStart - 5; });
  let moatCut = false;
  if (sheet && sheet.material.fragmentShader.includes('  vec2 xz = vTrack;')) {
    const src = sheet.material, m = src.clone();
    m.uniforms = { ...src.uniforms, ...cut };
    m.fragmentShader = 'uniform float uPaintCut; uniform float uPaintZ;\n' + src.fragmentShader.replace('  vec2 xz = vTrack;',
      '  vec2 xz = vTrack;\n  if (uPaintCut > 0.5 && abs(xz.x) > uSlideHalf + 0.62 && xz.y > uPaintZ && xz.y < uTunnel.x) discard;');
    sheet.material = m; moatCut = true;
  }
  const patched = grade.material.fragmentShader.includes('uS3Paint') && outputPass.material.fragmentShader.includes('s3o.rgb');
  const ref = new THREE.PerspectiveCamera(40, 0.5, 0.1, 200), dir = new THREE.Vector3(), V = new THREE.Vector3();
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  // where a ray first goes below the slide's surface (minus P.groundBelow), following the slide's climbs and dips
  const groundHit = (C, D, dMax) => {
    const below = (dd) => { const y = C.y + D.y * dd, z = C.z + D.z * dd; return y < W.baseHeight(L, 0, Math.min(z, tunnelStart - 0.5)) - P.groundBelow; };
    let a = 0.3, b = null;
    for (let dd = 0.3; dd <= dMax; dd += 0.25) { if (below(dd)) { b = dd; break; } a = dd; }
    if (b === null) return dMax;
    for (let i = 0; i < 20; i++) { const m = (a + b) / 2; if (below(m)) b = m; else a = m; }
    return b;
  };
  const dist = new Float32Array(n); let torn = 0;
  let placed = false, t0 = null, bloomWas = null;
  updaters.push((dt, t, phase) => {
    if (!placed && phase === 'intro') {
      placed = true;
      ref.fov = camera.aspect >= 0.5 ? camera.fov : THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * camera.aspect / 0.5));
      ref.position.copy(camera.position); ref.quaternion.copy(camera.quaternion); ref.updateProjectionMatrix(); ref.updateMatrixWorld(true);
      const C = ref.position, tz = (z) => (z - C.z) / Math.max(dir.z, 1e-4);
      for (let k = 0; k < n; k++) {
        const sx = st[k * 2], sy = st[k * 2 + 1];
        dir.set((sx / 538) * 2 - 1, 1 - (sy / 1076) * 2, 0.5).unproject(ref).sub(C).normalize();
        // which part of the painting this is (soft weights), and the depth of the plane it sits on
        const wB = 1 - sm(0.8, 1.3, ((sx - 52) / 120) ** 2 + ((sy - 582) / 135) ** 2);
        const wM = sm(368, 410, sx) * sm(395, 430, sy) * (1 - sm(780, 820, sy));
        const wT = Math.min(1, (1 - sm(60, 95, sx)) + sm(445, 480, sx)) * sm(50, 80, sy) * (1 - sm(430, 470, sy)) * (1 - Math.max(wB, wM));
        const wF = Math.max(0.05, 1 - Math.max(wB, wM, wT));
        const inv = (wB / tz(P.brush) + wM / tz(P.machinery) + wT / tz(P.towers) + wF / tz(P.far)) / (wB + wM + wT + wF);
        let d = 1 / inv;
        // nothing of the castle or the side water lies below the water's surface (it lies on it); the brush, machinery and
        // towers stay upright on their planes (laid on the ground they smeared across it as the camera moved)
        const wUp = Math.max(wB, wM, wT);
        if (dir.y < -1e-4) d = d * wUp + Math.min(d, groundHit(C, dir, d)) * (1 - wUp);
        V.copy(C).addScaledVector(dir, d); dist[k] = d;
        pos[k * 3] = V.x; pos[k * 3 + 1] = V.y; pos[k * 3 + 2] = V.z;
      }
      // Where neighbouring points of the painting land at very different distances (over the slide's crest, at the edge of
      // the upright parts) the sheet between them would stretch into a wall the camera drives through: those cells are
      // left out instead (from the Tap to Start view the gap is edge-on and invisible).
      const keep = [];
      for (let j = 0; j < NY; j++) for (let i = 0; i < NX; i++) {
        const a = j * (NX + 1) + i, b = a + NX + 1, q = [a, a + 1, b, b + 1].map((k) => dist[k]);
        if (Math.max(...q) / Math.min(...q) < P.tear) keep.push(a, b, a + 1, a + 1, b, b + 1);
      }
      geo.setIndex(keep); torn = idx.length / 6 - keep.length / 6;
      geo.attributes.position.needsUpdate = true; geo.computeBoundingSphere();
      mesh.visible = true;
    }
    if (phase === 'running' && t0 === null) t0 = t;
    const since = t0 === null ? -1 : t - t0, k = since < 0 ? 0 : sm(0, 0.45, since);
    u.uBanner.value = k; u.uPanel.value = k;   // with the game's own banner and Tap to Start panel
    u.uFade.value = 1 - sm(P.fadeFrom, P.fadeTo, camera.position.z);
    const on = placed && u.uFade.value > 0.001 && camera.position.z < tunnelStart;
    mesh.visible = on;
    mat.depthWrite = u.uFade.value > 0.999;
    grade.uniforms.uS3Paint.value = outputPass.uniforms.uS3Paint.value = on ? 1 : 0;
    cut.uPaintCut.value = on ? 1 : 0;
    if (bloomPass) { if (on) { if (bloomWas === null) { bloomWas = bloomPass.enabled; bloomPass.enabled = false; } } else if (bloomWas !== null) { bloomPass.enabled = bloomWas; bloomWas = null; } }
  });
  return { grid: [NX, NY], hidden: hidden.length, passesPatched: patched, moatCut, depths: { ...P }, get tornCells() { return torn; } };
}

const PAINT_VERTEX = /* glsl */ `
attribute vec2 stage;
varying vec2 vStage;
void main() { vStage = stage; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;
const PAINT_FRAGMENT = /* glsl */ `
uniform sampler2D map; uniform float uFade, uBanner, uPanel;
varying vec2 vStage;
// 1 inside a rounded rectangle (centre c, half size h, corner radius r), softened over 6 px
float rrect(vec2 p, vec2 c, vec2 h, float r) { vec2 q = abs(p - c) - h + r; float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r; return 1.0 - smoothstep(-3.0, 3.0, d); }
void main() {
  vec2 uv = vec2((vStage.x - 1.0) / 536.0, vStage.y / 1076.0);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;
  vec4 t = texture2D(map, vec2(uv.x, 1.0 - uv.y));
  float a = t.a * uFade;
  a *= 1.0 - uBanner * rrect(vStage, vec2(269.0, 233.0), vec2(208.0, 74.0), 30.0);   // the painted "Let's go!" banner
  a *= 1.0 - uPanel * rrect(vStage, vec2(269.0, 890.0), vec2(244.0, 124.0), 32.0);   // the painted Tap to Start panel
  if (a < 0.01) discard;
  gl_FragColor = vec4(t.rgb, a);   // linear colour; the alpha channel's mark keeps it past the grade and tone mapping
}
`;
