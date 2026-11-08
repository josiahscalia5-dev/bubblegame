// ?s3=...,home,level1 (8 November 2026, session dbccb9a3): the Laundry Toss opening as a REAL-TIME 3D scene, at the user's
// ANIMATION AND MOVEMENT MANDATE and motion storyboards
// (Design/ReferencePacks/2026-11-07_Animation_and_Movement_Mandate_from_user/, ..._2026-11-08_Motion_Instructions_from_user/).
// It replaces Screen 2's painted picture (screens12.js: the 2D artwork with a cut-out sprite and a CSS zoom, which is why it
// read as a static poster). The direction is the user's girl + laundry artwork (11109.jpg); nothing here is a picture.
//
// What exists and what was made: the repository has NO girl model or rig (no glTF / FBX of her anywhere), so she is built here
// in three.js from simple shapes, as a jointed cartoon character: hips, spine, chest, neck and head; two-joint arms with hands
// (driven by a small two-bone IK so her hands stay on the basket's handles); a face with eyes that blink (eyelids), brows that
// rise, a mouth that smiles, laughs and opens in surprise, and cheeks; curly hair, headband and bow. Provenance: this file.
// The pink character is the game's own model (models/mascot.glb); its texture has no face, so eyes and a mouth are added here
// for the opening (the run shows her from behind, as before). Laundry: socks and towels as separate objects on their own arcs.
//
// The scene: the girl beside the glowing washer, holding the basket with the pink character sitting on the laundry; she
// breathes, sways, blinks and smiles while waiting (Screen 1 and 2 behind the real UI). START: she lifts and tips the basket
// and tosses the laundry; the pink character is caught in it (surprised face, a hop), flies on a curved path with the socks and
// towels to the washer's door, reaches the rim and is pulled in by the glow, tumbling; the camera follows him through the
// door into the glowing tunnel, where he lands on the blue water (seen from behind, as in the game) with a splash; the view
// then cross-fades into the live game's Tap to Start inside the tunnel. One continuous camera move, no cut.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { LEVEL1_PARTS } from './level1.js';
import { TRIPO2_ON, applyTripo2 } from './opening_tripo.js';   // ?s3=...,level1,tripo2 (session 57091b57): the user's Tripo basket and towels, looks only
// girl2 (8 November, the user's priority 1): the user's Tripo girl (Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/,
// "cartoon girl 3d model.glb"), rigged in Blender by rig/rig_girl.py (hips, spine, chest, neck, head, shoulders, arms, hands,
// legs; automatic weights; texture 2048) -> models/opening/girl_rigged.glb. Driven here by the same timeline as the code-built
// girl: the hands on the basket's handles by two-bone IK on her own bones, the spine and head, the wave, and eyelids fixed to
// her head bone over her painted eyes (measured in Blender: 0.723 m high, x -0.058 / +0.052, radius about 0.025 m) for blinks.
// ?s3=...,nogirl2: the code-built girl as before.
export const GIRL2 = { file: 'models/opening/girl_rigged.glb', scale: 1.62, pos: [-0.42, 0.4, -0.27], rotY: 0.24,
  eyes: [[-0.058, 0.723], [0.052, 0.723]], eyeR: 0.028, skin: 0xeab08e, stool: { h: 0.4, col: 0xff9fd6 } };

export const OPENING3D = {
  seqEnd: 6.1, handOver: 5.15, fade: 0.8,       // seconds after START: the game is released and the view fades into it
  porthole: new THREE.Vector3(0.3, 0.62, 0.27), rOpen: 0.28,
  waterY: 0.385, heroW: 0.42,   // (the water low in the opening, so the swirl shows; his width in the opening, m)
};

// SIX (8 November 2026, session bb87ba9f; the user's six-scene storyboard, Design/ReferencePacks/2026-11-08_Six_Scenes_FRESH_from_user/): OPT-IN `six`
// (with home + level1). The opening tells the new story: (1) the pink character hides under a blue towel in the girl's basket while she looks at the
// washer, never at him; (2) she lifts the towel bundle with him caught inside and turns to the washer; (3) she tosses it in: he tumbles into the drum,
// surprised; (4) the door swings shut (her push), she turns away, unaware; the washer lights up and the water floods in round him, seen through the
// porthole; (5) the camera pushes through the glass into the silver-lavender drum tunnel as the water carries him in; (6) the live game. Without `six`
// the opening is exactly as before.
const LIST6 = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const SIX_ON = LIST6.includes('six');
export const SIX = { handOver: 7.9, seqEnd: 8.7, inBasket: 0.68, towel: 0x5aa8ff };
if (SIX_ON) Object.assign(OPENING3D, { handOver: SIX.handOver, seqEnd: SIX.seqEnd });

function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sm = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
// piecewise smooth keys: [[t, value], ...] (value a number or an array)
function key(t, ks) {
  if (t <= ks[0][0]) return ks[0][1];
  for (let i = 0; i < ks.length - 1; i++) {
    const [t0, v0] = ks[i], [t1, v1] = ks[i + 1];
    if (t <= t1) { const k = sm(t0, t1, t); return Array.isArray(v0) ? v0.map((v, j) => v + (v1[j] - v) * k) : v0 + (v1 - v0) * k; }
  }
  return ks[ks.length - 1][1];
}
const V = (a) => new THREE.Vector3(...a);
const bez = (p0, p1, p2, t) => new THREE.Vector3().copy(p0).multiplyScalar((1 - t) * (1 - t)).addScaledVector(p1, 2 * (1 - t) * t).addScaledVector(p2, t * t);

let gradTex = null;
function toon(color, o = {}) {
  if (!gradTex) { gradTex = new THREE.DataTexture(new Uint8Array([90, 90, 90, 255, 175, 175, 175, 255, 255, 255, 255, 255]), 3, 1); gradTex.minFilter = gradTex.magFilter = THREE.NearestFilter; gradTex.needsUpdate = true; }
  return new THREE.MeshToonMaterial({ color, gradientMap: gradTex, emissive: o.emissive ?? color, emissiveIntensity: o.glow ?? 0.18, ...o.extra });
}
const NOISE = /* glsl */ `
float o3h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float o3n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(o3h(i), o3h(i + vec2(1.0, 0.0)), f.x), mix(o3h(i + vec2(0.0, 1.0)), o3h(i + vec2(1.0, 1.0)), f.x), f.y); }
float o3f(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 4; i++) { s += a * o3n(p); p = p * 2.03 + vec2(1.7, 9.2); a *= 0.5; } return s; }
`;

// ---------------------------------------------------------------- the girl
function buildGirl(rnd) {
  const skin = toon(0xf6c4a0, { glow: 0.22 }), hair = toon(0x5a3120, { glow: 0.12 }), hair2 = toon(0x7b4630, { glow: 0.15 });
  const shirt = toon(0xf1e8ff, { glow: 0.25 }), overall = toon(0x9a62e2, { glow: 0.22 }), band = toon(0xb45cf0, { glow: 0.3 }), shoe = toon(0xffffff, { glow: 0.3 });
  const legs = toon(0x8e5bd6, { glow: 0.2 }), gold = toon(0xffcc55, { glow: 0.4 });
  const white = new THREE.MeshBasicMaterial({ color: 0xffffff }), dark = new THREE.MeshBasicMaterial({ color: 0x1a0d08 }), iris = new THREE.MeshBasicMaterial({ color: 0x7a4422 });
  const mouthM = new THREE.MeshBasicMaterial({ color: 0x8e1e3c }), tongueM = new THREE.MeshBasicMaterial({ color: 0xff7d9a }), blush = new THREE.MeshBasicMaterial({ color: 0xff8faa, transparent: true, opacity: 0.45, depthWrite: false });
  const cap = (r, len, m) => { const g = new THREE.CapsuleGeometry(r, len, 6, 14); g.translate(0, -len / 2 - r * 0.2, 0); return new THREE.Mesh(g, m); };
  const sph = (r, m, ws = 18, hs = 14) => new THREE.Mesh(new THREE.SphereGeometry(r, ws, hs), m);
  const root = new THREE.Group(); root.name = 'girl';
  const hips = new THREE.Group(); hips.position.y = 0.56; root.add(hips);
  // legs (mostly behind the washer)
  for (const s of [-1, 1]) { const th = cap(0.065, 0.3, legs); th.position.set(s * 0.08, 0, 0); hips.add(th); const sh = sph(0.075, shoe); sh.scale.set(1, 0.7, 1.5); sh.position.set(s * 0.08, -0.5, 0.04); hips.add(sh); }
  const spine = new THREE.Group(); hips.add(spine);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.2, 8, 18), overall); torso.scale.set(1, 1, 0.78); torso.position.y = 0.17; spine.add(torso);
  const bib = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.16, 0.05, 3, 0.02), overall); bib.position.set(0, 0.3, 0.115); spine.add(bib);
  for (const s of [-1, 1]) { const b = sph(0.018, gold); b.position.set(s * 0.07, 0.36, 0.14); spine.add(b); const strap = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.14, 0.02), overall); strap.position.set(s * 0.075, 0.43, 0.11); strap.rotation.z = s * 0.15; spine.add(strap); }
  const chest = new THREE.Group(); chest.position.y = 0.3; spine.add(chest);
  const shirtTop = new THREE.Mesh(new THREE.SphereGeometry(0.17, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.55), shirt); shirtTop.scale.set(1.05, 0.75, 0.82); shirtTop.position.y = 0.04; chest.add(shirtTop);
  const neck = new THREE.Group(); neck.position.y = 0.13; chest.add(neck);
  const neckM = cap(0.045, 0.04, skin); neckM.rotation.x = Math.PI; neckM.position.y = -0.02; neck.add(neckM);
  const head = new THREE.Group(); head.position.y = 0.19; neck.add(head);
  const skull = sph(0.19, skin, 32, 24); skull.scale.set(1, 0.98, 0.95); head.add(skull);
  // ears
  for (const s of [-1, 1]) { const e = sph(0.04, skin); e.scale.set(0.6, 1, 0.8); e.position.set(s * 0.18, -0.01, 0); head.add(e); }
  // curly hair: a cloud of curls round the back, sides and top, falling past the shoulders; bangs over the forehead
  const curlG = new THREE.SphereGeometry(1, 12, 10);
  const curls = [];
  for (let i = 0; i < 120; i++) {
    const th = rnd() * Math.PI * 2, ph = Math.acos(1 - 2 * rnd()) * 0.92;
    const p = new THREE.Vector3(Math.sin(ph) * Math.sin(th), Math.cos(ph), Math.sin(ph) * Math.cos(th));
    if (p.z > 0.35 && p.y < 0.55) continue;   // keep the face clear
    const r = 0.05 + rnd() * 0.04;
    const m = new THREE.Mesh(curlG, rnd() < 0.3 ? hair2 : hair); m.scale.setScalar(r);
    m.position.copy(p).multiplyScalar(0.2 + rnd() * 0.03); m.position.y += 0.02; head.add(m); curls.push(m);
  }
  for (let i = 0; i < 46; i++) {   // the long curls down her back and over the shoulders
    const s = rnd() < 0.5 ? -1 : 1, y = -0.05 - rnd() * 0.32, x = s * (0.12 + rnd() * 0.12), z = -0.06 - rnd() * 0.12 + (y > -0.15 ? 0.06 : 0);
    const m = new THREE.Mesh(curlG, rnd() < 0.3 ? hair2 : hair); m.scale.setScalar(0.045 + rnd() * 0.035); m.position.set(x, y, z); head.add(m); curls.push(m);
  }
  for (let i = 0; i < 9; i++) { const m = new THREE.Mesh(curlG, hair); m.scale.set(0.055, 0.04, 0.045); const a = (i / 8 - 0.5) * 2.0; m.position.set(Math.sin(a) * 0.16, 0.13 + Math.cos(a) * 0.04, 0.12 + Math.cos(a) * 0.04); head.add(m); }
  // headband and bow
  const hb = new THREE.Mesh(new THREE.TorusGeometry(0.205, 0.018, 8, 40, Math.PI * 1.15), band); hb.rotation.set(-0.35, 0, Math.PI * 0.5 - Math.PI * 0.575); hb.position.set(0, 0.05, 0.015); head.add(hb);
  const bow = new THREE.Group(); bow.position.set(0.13, 0.17, 0.08); bow.rotation.set(0.2, 0.3, -0.5); head.add(bow);
  for (const s of [-1, 1]) { const lobe = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.08, 14), band); lobe.rotation.z = s * Math.PI / 2; lobe.position.x = s * 0.045; lobe.scale.set(1, 1, 0.5); bow.add(lobe); }
  bow.add(sph(0.022, band));
  // face
  const face = new THREE.Group(); face.position.set(0, -0.02, 0.0); head.add(face);
  const eyes = [], lids = [], brows = [];
  for (const s of [-1, 1]) {
    const eg = new THREE.Group(); eg.position.set(s * 0.074, 0.012, 0.158); eg.rotation.y = s * 0.28; eg.scale.setScalar(1.18); face.add(eg);   // (big, bright cartoon eyes)
    const scl = sph(0.05, white, 20, 16); scl.scale.set(0.9, 1.12, 0.5); eg.add(scl);
    const ir = sph(0.034, iris, 18, 14); ir.scale.set(1, 1.1, 0.45); ir.position.z = 0.02; eg.add(ir);
    const pu = sph(0.019, dark, 14, 10); pu.scale.set(1, 1.1, 0.4); pu.position.z = 0.033; eg.add(pu);
    const hl = sph(0.011, white, 10, 8); hl.position.set(0.012, 0.016, 0.04); eg.add(hl);
    const hl2 = sph(0.006, white, 8, 6); hl2.position.set(-0.012, -0.012, 0.04); eg.add(hl2);
    // eyelid: skin over the top of the eye, lowered to blink
    const lid = new THREE.Mesh(new THREE.SphereGeometry(0.054, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), skin); lid.scale.set(0.95, 1.15, 0.6); lid.position.z = 0.004; eg.add(lid);
    const lash = new THREE.Mesh(new THREE.TorusGeometry(0.048, 0.006, 6, 20, Math.PI), dark); lash.position.z = 0.012; lash.scale.set(0.95, 1.1, 1); eg.add(lash);
    const brow = cap(0.008, 0.05, hair); brow.rotation.z = Math.PI / 2 + s * 0.15; brow.position.set(s * 0.1, 0.09, 0.17); face.add(brow);
    eyes.push({ eg, ir, pu }); lids.push({ lid, lash }); brows.push(brow);
    const ch = new THREE.Mesh(new THREE.CircleGeometry(0.035, 20), blush); ch.position.set(s * 0.12, -0.06, 0.155); ch.rotation.y = s * 0.55; face.add(ch);
  }
  const nose = sph(0.02, skin); nose.scale.set(1, 0.8, 0.8); nose.position.set(0, -0.045, 0.185); face.add(nose);
  // mouth: an open smile (lower half-ellipse), teeth, tongue, and a closed smile line
  const mouth = new THREE.Group(); mouth.position.set(0, -0.098, 0.17); face.add(mouth);
  const open = new THREE.Mesh(new THREE.SphereGeometry(0.05, 24, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), mouthM); open.scale.set(1.1, 1, 0.35); mouth.add(open);
  const teeth = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.012, 0.01), white); teeth.position.set(0, -0.006, 0.014); mouth.add(teeth);
  const tongue = new THREE.Mesh(new THREE.SphereGeometry(0.028, 16, 10, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), tongueM); tongue.scale.set(1.2, 0.8, 0.4); tongue.position.set(0, -0.025, 0.012); mouth.add(tongue);
  const line = new THREE.Mesh(new THREE.TorusGeometry(0.04, 0.006, 6, 20, Math.PI * 0.8), mouthM); line.rotation.z = Math.PI + Math.PI * 0.1; line.position.set(0, 0.012, 0.012); mouth.add(line);
  const oMouth = sph(0.032, mouthM); oMouth.scale.set(0.8, 1.1, 0.35); oMouth.visible = false; mouth.add(oMouth);
  // arms: shoulder -> upper arm (sleeve) -> elbow -> forearm -> hand
  const arm = (s) => {
    const sh = new THREE.Group(); sh.position.set(s * 0.19, 0.06, 0); chest.add(sh);
    const up = new THREE.Group(); sh.add(up); const upM = cap(0.05, 0.13, shirt); up.add(upM);
    const el = new THREE.Group(); el.position.y = -0.2; up.add(el); const fo = cap(0.038, 0.13, skin); el.add(fo);
    const hand = new THREE.Group(); hand.position.y = -0.19; el.add(hand);
    const palm = sph(0.045, skin); palm.scale.set(0.9, 1, 0.7); hand.add(palm);
    const thumb = cap(0.016, 0.03, skin); thumb.position.set(-s * 0.035, 0.01, 0.02); thumb.rotation.z = -s * 0.8; hand.add(thumb);
    return { sh, up, el, hand, a: 0.2, b: 0.19 };
  };
  const armL = arm(-1), armR = arm(1);
  const lip = { open: 0, smile: 1, O: 0 };
  function setFace({ open: op = 0.35, smile = 1, O = 0, lid = 0, browUp = 0, look = [0, 0] }) {
    open.scale.set(1.1 * (0.85 + 0.25 * smile), 0.25 + op * 1.1, 0.35); open.visible = O < 0.5 && op > 0.05;
    teeth.visible = open.visible && op > 0.2; tongue.visible = open.visible && op > 0.25; tongue.position.y = -0.02 - op * 0.02;
    line.visible = O < 0.5 && op <= 0.05; oMouth.visible = O >= 0.5; oMouth.scale.set(0.7, 0.9 + O * 0.4, 0.35);
    for (const { lid: l, lash } of lids) { const k = 0.08 + lid * 0.92; l.scale.y = 1.15 * k; l.visible = lid > 0.02; lash.position.y = 0.054 * (1 - 2 * clamp01(lid)) * 0.9; }
    brows.forEach((b, i) => { b.position.y = 0.09 + browUp * 0.025; b.rotation.z = Math.PI / 2 + (i ? 1 : -1) * (0.15 - browUp * 0.2); });
    for (const e of eyes) { e.ir.position.x = look[0] * 0.012; e.ir.position.y = look[1] * 0.012; e.pu.position.x = look[0] * 0.014; e.pu.position.y = look[1] * 0.014; }
  }
  setFace({});
  return { root, hips, spine, chest, neck, head, armL, armR, setFace, curls };
}
// two-bone IK: the upper arm and forearm (each drawn along its -Y) reach the target, the elbow toward the pole
const _S = new THREE.Vector3(), _E = new THREE.Vector3(), _d = new THREE.Vector3(), _n = new THREE.Vector3(), _q = new THREE.Quaternion(), _qp = new THREE.Quaternion(), DOWN = new THREE.Vector3(0, -1, 0);
function reach(arm, target, pole) {
  arm.sh.updateWorldMatrix(true, false);
  arm.sh.getWorldPosition(_S);
  _d.copy(target).sub(_S); const dist = THREE.MathUtils.clamp(_d.length(), 0.05, arm.a + arm.b - 1e-3); _d.normalize();
  const cosA = THREE.MathUtils.clamp((arm.a * arm.a + dist * dist - arm.b * arm.b) / (2 * arm.a * dist), -1, 1), A = Math.acos(cosA);
  _n.copy(pole).sub(_S); _n.addScaledVector(_d, -_n.dot(_d)).normalize();
  _E.copy(_S).addScaledVector(_d, Math.cos(A) * arm.a).addScaledVector(_n, Math.sin(A) * arm.a);
  arm.sh.getWorldQuaternion(_qp).invert();
  _q.setFromUnitVectors(DOWN, _E.clone().sub(_S).normalize()); arm.up.quaternion.copy(_qp).multiply(_q);
  arm.up.updateWorldMatrix(false, false); arm.up.getWorldQuaternion(_qp).invert();
  const T = _S.clone().addScaledVector(_d, dist);
  _q.setFromUnitVectors(DOWN, T.sub(_E).normalize()); arm.el.quaternion.copy(_qp).multiply(_q);
}

const _q1 = new THREE.Quaternion(), _q2 = new THREE.Quaternion(), _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();
function rotateBoneWorld(b, axis, ang) {   // turn a bone about a world axis, whatever its own axes are
  b.getWorldQuaternion(_q1); _q2.setFromAxisAngle(axis, ang).multiply(_q1);
  b.parent.getWorldQuaternion(_q1).invert(); b.quaternion.copy(_q1.multiply(_q2)); b.updateMatrixWorld(true);
}
function aimBone(b, child, dir) {   // turn bone b (about its own head) so that its child joint lies along world direction dir
  b.getWorldPosition(_v1); child.getWorldPosition(_v2); _v2.sub(_v1).normalize();
  _q2.setFromUnitVectors(_v2, _v3.copy(dir).normalize()); b.getWorldQuaternion(_q1); _q2.multiply(_q1);
  b.parent.getWorldQuaternion(_q1).invert(); b.quaternion.copy(_q1.multiply(_q2)); b.updateMatrixWorld(true);
}
function reachBones(up, fo, hand, target, pole) {   // two-bone IK on real bones
  up.getWorldPosition(_S); fo.getWorldPosition(_E); const a = _S.distanceTo(_E); hand.getWorldPosition(_v1); const bl = _E.distanceTo(_v1);
  _d.copy(target).sub(_S); const dist = THREE.MathUtils.clamp(_d.length(), 0.02, a + bl - 1e-4); _d.normalize();
  const A = Math.acos(THREE.MathUtils.clamp((a * a + dist * dist - bl * bl) / (2 * a * dist), -1, 1));
  _n.copy(pole).sub(_S); _n.addScaledVector(_d, -_n.dot(_d)).normalize();
  const elbow = _S.clone().addScaledVector(_d, Math.cos(A) * a).addScaledVector(_n, Math.sin(A) * a);
  aimBone(up, fo, elbow.clone().sub(_S)); const T = _S.clone().addScaledVector(_d, dist); fo.getWorldPosition(_E); aimBone(fo, hand, T.sub(_E));
}

// ---------------------------------------------------------------- the laundry basket and laundry
function stripeTexture(c1, c2, n) {
  const c = document.createElement('canvas'); c.width = 64; c.height = 128; const g = c.getContext('2d');
  g.fillStyle = c1; g.fillRect(0, 0, 64, 128); g.fillStyle = c2; for (let i = 0; i < n; i++) g.fillRect(0, 12 + i * (100 / n), 64, 48 / n);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function holesTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const g = c.getContext('2d');
  g.fillStyle = '#fff'; g.fillRect(0, 0, 256, 64); g.fillStyle = '#000';
  for (let i = 0; i < 12; i++) for (let j = 0; j < 2; j++) { const x = 6 + i * 21.3, y = 12 + j * 24; g.beginPath(); g.roundRect(x, y, 13, 16, 5); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = THREE.RepeatWrapping; return t;
}
function buildBasket() {
  const g = new THREE.Group(); g.name = 'basket';
  const purple = toon(0xa36cf0, { glow: 0.3, extra: { alphaMap: holesTexture(), alphaTest: 0.5, side: THREE.DoubleSide } });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.17, 0.17, 32, 1, true), purple); body.position.y = 0.085; g.add(body);
  const base = new THREE.Mesh(new THREE.CircleGeometry(0.17, 32), toon(0x8a52d8)); base.rotation.x = -Math.PI / 2; base.position.y = 0.002; g.add(base);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.018, 8, 40), toon(0xb98af8, { glow: 0.35 })); rim.rotation.x = Math.PI / 2; rim.position.y = 0.17; g.add(rim);
  for (const s of [-1, 1]) { const h = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.014, 8, 16, Math.PI), toon(0xb98af8, { glow: 0.35 })); h.position.set(s * 0.215, 0.15, 0); h.rotation.set(0, Math.PI / 2, s * -Math.PI / 2 + Math.PI / 2); g.add(h); }
  // a heap of laundry inside
  const cols = [0xffd34d, 0x6fb6ff, 0xff8ccf, 0xffffff, 0x9be0ff, 0xc8a8ff];
  for (let i = 0; i < 9; i++) { const m = new THREE.Mesh(new THREE.SphereGeometry(0.075, 14, 10), toon(cols[i % cols.length], { glow: 0.3 })); m.scale.set(1.3, 0.6, 1); const a = i * 2.4; m.position.set(Math.cos(a) * 0.1, 0.17 + (i % 3) * 0.02, Math.sin(a) * 0.08); m.rotation.y = a; g.add(m); }
  return g;
}
function buildSock(rnd) {
  const tex = stripeTexture('#ffffff', rnd() < 0.5 ? '#7b5cff' : '#3f8cff', 3);
  const m = toon(0xffffff, { glow: 0.35, extra: { map: tex } });
  const g = new THREE.Group();
  const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.11, 6, 12), m); leg.position.y = 0.04; g.add(leg);
  const foot = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.06, 6, 12), m); foot.rotation.z = Math.PI / 2; foot.position.set(0.04, -0.05, 0); g.add(foot);
  return g;
}
function buildTowel(col) {
  const g = new THREE.Group(); const m = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.05, 0.14, 3, 0.02), toon(col, { glow: 0.3 })); g.add(m);
  const fold = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.04, 0.08, 3, 0.018), toon(col, { glow: 0.3 })); fold.position.set(0, 0.04, -0.03); fold.rotation.x = 0.4; g.add(fold);
  return g;
}

// ---------------------------------------------------------------- the washer
function buildWasher(env) {
  const P = OPENING3D.porthole, g = new THREE.Group(); g.name = 'washer';
  const silver = new THREE.MeshStandardMaterial({ color: 0xd6d0f2, metalness: 0.78, roughness: 0.2, envMap: env, envMapIntensity: 1.5, emissive: 0x2a2050, emissiveIntensity: 0.22 });
  const goldM = new THREE.MeshStandardMaterial({ color: 0xffc552, metalness: 1, roughness: 0.22, envMap: env, envMapIntensity: 1.4, emissive: 0x8a5200, emissiveIntensity: 0.45 });
  const W = 0.98, H = 1.12, D = 0.9, x0 = P.x - 0.0, zf = P.z - 0.01;
  // the front panel with the round opening
  const sh = new THREE.Shape(); const r = 0.08;
  sh.moveTo(-W / 2 + r, 0); sh.lineTo(W / 2 - r, 0); sh.quadraticCurveTo(W / 2, 0, W / 2, r); sh.lineTo(W / 2, H - r); sh.quadraticCurveTo(W / 2, H, W / 2 - r, H);
  sh.lineTo(-W / 2 + r, H); sh.quadraticCurveTo(-W / 2, H, -W / 2, H - r); sh.lineTo(-W / 2, r); sh.quadraticCurveTo(-W / 2, 0, -W / 2 + r, 0);
  const hole = new THREE.Path(); hole.absarc(P.x - x0, P.y, OPENING3D.rOpen + 0.02, 0, Math.PI * 2, true); sh.holes.push(hole);
  const front = new THREE.Mesh(new THREE.ExtrudeGeometry(sh, { depth: 0.06, bevelEnabled: true, bevelSize: 0.025, bevelThickness: 0.025, bevelSegments: 3, curveSegments: 48 }), silver);
  front.position.set(x0, 0, zf - 0.06); g.add(front);
  // the body behind the front panel is hollow (its front would close the opening): top, bottom, sides and back
  const zb = zf - 0.06 - (D - 0.06) / 2, dd = D - 0.06;
  for (const [w, h, d, x, y, z] of [[W, 0.06, dd, x0, H - 0.03, zb], [W, 0.06, dd, x0, 0.03, zb], [0.06, H, dd, x0 - W / 2 + 0.03, H / 2, zb], [0.06, H, dd, x0 + W / 2 - 0.03, H / 2, zb]]) {   // (no back panel: the tunnel runs on through it)
    const b = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 3, 0.025), silver); b.position.set(x, y, z); g.add(b);
  }
  // the gold rim, a silver lip inside it and a silver bezel outside
  const rim = new THREE.Mesh(new THREE.TorusGeometry(OPENING3D.rOpen + 0.07, 0.065, 20, 64), goldM); rim.position.copy(P).setZ(zf + 0.03); g.add(rim);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(OPENING3D.rOpen + 0.005, 0.022, 12, 64), silver); lip.position.copy(P).setZ(zf + 0.02); g.add(lip);
  const bez = new THREE.Mesh(new THREE.TorusGeometry(OPENING3D.rOpen + 0.16, 0.022, 12, 64), goldM); bez.position.copy(P).setZ(zf + 0.005); g.add(bez);
  for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; const b = new THREE.Mesh(new THREE.SphereGeometry(0.014, 10, 8), silver); b.position.set(P.x + Math.cos(a) * (OPENING3D.rOpen + 0.07), P.y + Math.sin(a) * (OPENING3D.rOpen + 0.07), zf + 0.09); g.add(b); }
  // the glass door, swung open on its hinge
  const door = new THREE.Group(); door.position.set(P.x + OPENING3D.rOpen + 0.12, P.y, zf + 0.06); door.rotation.y = 1.95; g.add(door);
  const dr = new THREE.Mesh(new THREE.TorusGeometry(OPENING3D.rOpen + 0.03, 0.045, 16, 48), goldM); dr.position.x = -(OPENING3D.rOpen + 0.1); door.add(dr);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(OPENING3D.rOpen + 0.02, 40), new THREE.MeshPhysicalMaterial({ color: 0xcfe8ff, transmission: 0, transparent: true, opacity: 0.1, roughness: 0.05, envMap: env, depthWrite: false }));
  glass.position.x = -(OPENING3D.rOpen + 0.1); door.add(glass);
  const hinge = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.16, 12), goldM); door.add(hinge);
  // the crown emblem, the knob and two little lights
  const crown = new THREE.Group(); crown.position.set(P.x, H + 0.06, zf + 0.0); g.add(crown);
  const cb = new THREE.Mesh(new RoundedBoxGeometry(0.22, 0.09, 0.05, 3, 0.02), goldM); crown.add(cb);
  for (let i = 0; i < 3; i++) { const pk = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 4), goldM); pk.position.set((i - 1) * 0.07, 0.08, 0); crown.add(pk); }
  const cg = new THREE.Mesh(new THREE.OctahedronGeometry(0.03), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 0.35, 1.3) })); cg.position.set(0, 0.0, 0.035); crown.add(cg);
  const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 28), goldM); knob.rotation.x = Math.PI / 2; knob.position.set(x0 + W / 2 - 0.13, H - 0.12, zf + 0.03); g.add(knob);
  for (let i = 0; i < 2; i++) { const l = new THREE.Mesh(new THREE.SphereGeometry(0.018, 10, 8), new THREE.MeshBasicMaterial({ color: new THREE.Color(...(i ? [0.4, 1.6, 1.8] : [1.8, 0.5, 1.4])) })); l.position.set(x0 + W / 2 - 0.28 - i * 0.07, H - 0.12, zf + 0.03); g.add(l); }
  return { g, goldM, silver, door, glass, crown, knob };
}
// the glowing tunnel inside the washer (one continuous space the camera flies into): a swirling, luminous blue drum that
// widens behind the door, its far end a bright heart; blue water along its floor
// SIX: the drum tunnel of the storyboard's panels 4 and 5: perforated silver-lavender drum metal over the top and sides with glowing pink-gold
// ring bands, the blue swirl only low on the walls toward the water, the bright heart at the far end
const SIX_DRUM_END = `vec3 blue6 = c; float up6 = cos(a);   // 1 at the top, -1 at the bottom
        vec3 m6 = mix(vec3(0.62, 0.56, 0.9), vec3(0.9, 0.86, 1.0), 0.5 + 0.5 * up6);
        vec2 hp6 = vec2(a * 5.0, d * 5.0); vec2 hc6 = fract(hp6 + vec2(0.0, 0.5 * mod(floor(hp6.x), 2.0))) - 0.5;
        m6 = mix(m6, vec3(0.34, 0.28, 0.62), (1.0 - smoothstep(0.17, 0.23, length(hc6))) * 0.7);
        float rb6 = exp(-pow((fract(d * 0.85) - 0.5) / 0.05, 2.0));
        m6 = mix(m6, vec3(1.5, 1.05, 0.75), rb6 * 0.8);
        c = mix(blue6, m6, smoothstep(-0.55, -0.15, up6));
        c = mix(c, vec3(0.88, 0.97, 1.0) * 1.35, smoothstep(2.4, 8.0, d) * 0.85 * uGlow);`;
const SIX_DRUM = '';
function buildVortex() {
  const P = OPENING3D.porthole, len = 9, n = 90, nA = 48;
  const rad = (d) => THREE.MathUtils.lerp(OPENING3D.rOpen, 0.42, sm(0.0, 0.7, d)) + 0.43 * sm(1.6, 2.6, d);   // (hidden behind the washer and the wall until the camera is inside)
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= n; i++) { const d = (i / n) * len; for (let j = 0; j <= nA; j++) { const a = -Math.PI + (j / nA) * Math.PI * 2, r = rad(d); /* (0 at the top: the pattern's seam is at the bottom, under the water) */ pos.push(P.x + Math.sin(a) * r, P.y + Math.cos(a) * r, P.z - d); uv.push(a, d); } }
  for (let i = 0; i < n; i++) for (let j = 0; j < nA; j++) { const a = i * (nA + 1) + j, b = a + nA + 1; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('aAD', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
  const U = { uTime: { value: 0 }, uFlow: { value: 0 }, uGlow: { value: 1 } };
  const mat = new THREE.ShaderMaterial({ uniforms: U, side: THREE.DoubleSide,
    vertexShader: 'attribute vec2 aAD; varying vec2 vAD; void main() { vAD = aAD; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `uniform float uTime, uFlow, uGlow; varying vec2 vAD; ${NOISE}
      void main() {
        float a = vAD.x, d = vAD.y, t = uTime;
        // noise blended across the angle's wrap (at the bottom), so the pattern has no seam
        float a2 = a - 6.2832 * sign(a), bw = 0.5 * smoothstep(1.9, 3.1416, abs(a));
        float w = mix(o3f(vec2(a * 1.2 + t * 0.4, d * 0.9 - uFlow)), o3f(vec2(a2 * 1.2 + t * 0.4, d * 0.9 - uFlow)), bw);
        float sw = sin((d * 2.2 + a * 0.15915 + w * 1.5 - uFlow * 1.4 - t * 0.6) * 6.2832);
        vec3 c = mix(${LEVEL1_PARTS.port ? 'vec3(0.02, 0.1, 0.78), vec3(0.08, 0.4, 1.0)' : 'vec3(0.06, 0.22, 0.95), vec3(0.2, 0.62, 1.0)'}, smoothstep(-0.7, 0.3, sw));
        ${SIX_ON ? SIX_DRUM : ''}   // (port: the approved porthole's deeper cobalt)
        c = mix(c, vec3(0.3, 0.9, 1.0), smoothstep(0.4, 0.95, sw) * ${LEVEL1_PARTS.port ? '0.6' : '0.75'});
        c = mix(c, vec3(1.0), smoothstep(${LEVEL1_PARTS.port ? '0.95' : '0.9'}, 0.99, sw) * smoothstep(0.35, 0.65, mix(o3f(vec2(a * 3.0, d * 2.0 - uFlow * 2.0)), o3f(vec2(a2 * 3.0, d * 2.0 - uFlow * 2.0)), bw)) * 0.9);
        c = mix(c, vec3(0.75, 0.6, 1.0), smoothstep(0.65, 0.9, mix(o3f(vec2(a * 0.8 + 3.0, d * 0.5)), o3f(vec2(a2 * 0.8 + 3.0, d * 0.5)), bw)) * 0.35);
        float ring = exp(-pow((fract(d * 0.8 - uFlow * 0.5) - 0.5) / 0.08, 2.0));
        c = mix(c, vec3(0.75, 0.95, 1.0), ring * ${LEVEL1_PARTS.port ? '0.22' : '0.4'});
        c = mix(c, vec3(0.88, 0.97, 1.0) * 1.35, smoothstep(${LEVEL1_PARTS.port ? '3.4, 8.6' : '1.6, 8.0'}, d) * ${LEVEL1_PARTS.port ? '0.85' : '0.9'} * uGlow);   // (port: deep blue spiral, the bright heart only at its far end)
        ${SIX_ON ? SIX_DRUM_END : ''}
        gl_FragColor = vec4(c, 1.0);
      }` });
  const tube = new THREE.Mesh(g, mat); tube.name = 'vortex';
  const cap = new THREE.Mesh(new THREE.CircleGeometry(0.9, 48), new THREE.ShaderMaterial({ uniforms: U,
    vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform float uGlow; varying vec2 vUv; void main() { float r = length(vUv - 0.5) * 2.0; vec3 c = mix(vec3(1.25, 1.35, 1.45), vec3(0.2, 0.55, 1.0), smoothstep(0.1 + 0.25 * uGlow, 0.95, r)); gl_FragColor = vec4(c, 1.0); }' })); cap.position.set(P.x, P.y, P.z - len + 0.05);
  // the water along its floor, flowing in
  const wl = OPENING3D.waterY, wpos = [], wuv = [], widx = [], nx = 16;
  for (let i = 0; i <= n; i++) { const d = (i / n) * len, r = rad(d), hw = Math.sqrt(Math.max(0.0001, r * r - (P.y - wl) * (P.y - wl))) + 0.02;
    for (let j = 0; j <= nx; j++) { const x = -hw + 2 * hw * j / nx; wpos.push(P.x + x, wl, P.z - d + 0.04); wuv.push(x, d); } }
  for (let i = 0; i < n; i++) for (let j = 0; j < nx; j++) { const a = i * (nx + 1) + j, b = a + nx + 1; widx.push(a, a + 1, b, b, a + 1, b + 1); }
  const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wpos, 3)); wg.setAttribute('aXD', new THREE.Float32BufferAttribute(wuv, 2)); wg.setIndex(widx);
  const WU = { uTime: U.uTime, uFlow: U.uFlow, uHit: { value: new THREE.Vector3(0, 0, -99) }, uFrom: { value: 2.4 } };   // uFrom: where the water begins (m in); deep while waiting, so the opening shows the swirl
  const wmat = new THREE.ShaderMaterial({ uniforms: WU,
    vertexShader: 'attribute vec2 aXD; uniform float uTime; varying vec2 vXD; void main() { vXD = aXD; vec3 p = position; p.y += 0.012 * sin(aXD.y * 7.0 - uTime * 4.0 + aXD.x * 9.0); gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }',
    fragmentShader: /* glsl */ `uniform float uTime, uFlow, uFrom; uniform vec3 uHit; varying vec2 vXD; ${NOISE}
      void main() {
        float x = vXD.x, d = vXD.y, df = d - uTime * 0.9 - uFlow;
        if (d < uFrom) discard;
        float n = o3f(vec2(x * 4.0, df * 1.6)), n2 = o3f(vec2(x * 9.0 + 4.0, df * 3.5));
        vec3 c = mix(vec3(0.02, 0.18, 0.75), vec3(0.1, 0.45, 1.0), smoothstep(0.3, 0.7, n));
        c = mix(c, vec3(0.25, 0.85, 1.0), smoothstep(0.55, 0.85, n2) * 0.7);
        c = mix(c, vec3(1.0), smoothstep(0.68, 0.8, o3f(vec2(x * 12.0, df * 5.0))) * 0.6);
        float r = length(vec2(x - uHit.x, (d - uHit.z) * 1.2));
        float rings = (1.0 - smoothstep(0.0, 0.025, abs(fract(r * 9.0 - uTime * 2.2) - 0.5) - 0.4)) * (1.0 - smoothstep(0.05, 0.45, r)) * uHit.y;
        c = mix(c, vec3(0.95, 1.0, 1.0), rings * 0.7);
        c = mix(c, vec3(0.85, 0.96, 1.0) * 1.2, smoothstep(3.5, 8.8, d) * 0.75);
        gl_FragColor = vec4(c, 1.0);
      }` });
  const water = new THREE.Mesh(wg, wmat); water.name = 'vortexWater';
  return { tube, cap, water, U, WU };
}

// ---------------------------------------------------------------- the room
function pawLabel(col) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  g.fillStyle = '#ffffff'; g.beginPath(); g.roundRect(6, 10, 52, 44, 10); g.fill(); g.fillStyle = col;
  g.beginPath(); g.ellipse(32, 38, 10, 8, 0, 0, Math.PI * 2); g.fill();
  for (const [x, y] of [[20, 26], [28, 21], [36, 21], [44, 26]]) { g.beginPath(); g.ellipse(x, y, 4, 5, 0, 0, Math.PI * 2); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function buildRoom(env, rnd) {
  const g = new THREE.Group(); g.name = 'room';
  // the wall: deep violet above, pink-lavender low, warm light from the window side
  const wallM = new THREE.ShaderMaterial({ vertexShader: 'varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'varying vec2 vUv; void main() { vec3 top = vec3(0.42, 0.28, 0.86), low = vec3(0.96, 0.66, 0.93); vec3 c = mix(low, top, smoothstep(0.25, 0.95, vUv.y));' +
      ' c += vec3(0.35, 0.3, 0.2) * exp(-pow(length((vUv - vec2(0.22, 0.72)) * vec2(1.6, 1.0)) / 0.28, 2.0)); gl_FragColor = vec4(c, 1.0); }' });
  const ws = new THREE.Shape(); ws.moveTo(-3, -2); ws.lineTo(3, -2); ws.lineTo(3, 2); ws.lineTo(-3, 2); ws.lineTo(-3, -2);
  const wh = new THREE.Path(); wh.absarc(OPENING3D.porthole.x - 0.2, OPENING3D.porthole.y - 1.6, 0.44, 0, Math.PI * 2, true); ws.holes.push(wh);
  const wg = new THREE.ShapeGeometry(ws, 48); { const pa = wg.attributes.position, uv = wg.attributes.uv; for (let i = 0; i < pa.count; i++) uv.setXY(i, (pa.getX(i) + 3) / 6, (pa.getY(i) + 2) / 4); }
  const wall = new THREE.Mesh(wg, wallM); wall.position.set(0.2, 1.6, -1.25); g.add(wall);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), toon(0xf0b8e8, { glow: 0.3 })); floor.rotation.x = -Math.PI / 2; floor.position.set(0.2, 0, 0.6); g.add(floor);
  // the arched window at the upper left, bright sky and soft rays
  const win = new THREE.Group(); win.position.set(-0.62, 1.78, -1.2); g.add(win);
  const sky = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.8), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.8, 1.05, 1.5) })); sky.position.y = -0.08; win.add(sky);
  const arch = new THREE.Mesh(new THREE.CircleGeometry(0.31, 32, 0, Math.PI), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.9, 1.1, 1.5) })); arch.position.y = 0.32; win.add(arch);
  const frameM = toon(0xffffff, { glow: 0.45 });
  const archF = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.03, 8, 32, Math.PI), frameM); archF.position.set(0, 0.32, 0.02); win.add(archF);
  for (const [w, h, x, y] of [[0.68, 0.05, 0, -0.5], [0.05, 0.82, -0.33, -0.08], [0.05, 0.82, 0.33, -0.08], [0.03, 1.05, 0, 0.0], [0.64, 0.03, 0, 0.12], [0.64, 0.03, 0, -0.22]]) { const bx = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.04), frameM); bx.position.set(x, y, 0.02); win.add(bx); }
  const rayM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.0, 0.95, 0.85), transparent: true, opacity: 0.12, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.PlaneGeometry(0.22 + i * 0.05, 2.2), rayM); r.position.set(-0.3 + i * 0.18, 1.0, -0.6 + i * 0.1); r.rotation.set(0, 0, 0.55); g.add(r); }
  // shelves full of folded towels and soap bottles with paw labels (right side), and a lower shelf on the left
  const shelfM = toon(0xf6c9d8, { glow: 0.3 });
  const towelCols = [0xff9fd2, 0xffd85c, 0x8fd2ff, 0xc3a6ff, 0xff7fb8, 0x9be8d8];
  const bottleCols = [[0xff9fd6, '#ff5fb0'], [0x9fd8ff, '#3f8cff'], [0xc7b2ff, '#8a5cff'], [0x9ff0d8, '#20b890']];
  const shelf = (x0, x1, y, z, nTowel, nBottle) => {
    const sh = new THREE.Mesh(new RoundedBoxGeometry(x1 - x0, 0.045, 0.3, 2, 0.015), shelfM); sh.position.set((x0 + x1) / 2, y, z); g.add(sh);
    let x = x0 + 0.06;
    for (let i = 0; i < nTowel; i++) {
      const stack = 2 + Math.floor(rnd() * 2);
      for (let k = 0; k < stack; k++) { const t = new THREE.Mesh(new RoundedBoxGeometry(0.28, 0.065, 0.22, 3, 0.03), toon(towelCols[Math.floor(rnd() * towelCols.length)], { glow: 0.35 })); t.position.set(x + 0.14 + (rnd() - 0.5) * 0.02, y + 0.055 + k * 0.068, z + 0.02); g.add(t); }
      x += 0.32;
    }
    for (let i = 0; i < nBottle; i++) {
      const [bc, lc] = bottleCols[Math.floor(rnd() * bottleCols.length)], hgt = 0.18 + rnd() * 0.08;
      const pts = [[0, 0], [0.055, 0], [0.06, 0.02], [0.06, hgt * 0.72], [0.04, hgt * 0.85], [0.022, hgt * 0.9], [0.022, hgt], [0, hgt]].map(([a, b2]) => new THREE.Vector2(a, b2));
      const bo = new THREE.Mesh(new THREE.LatheGeometry(pts, 24), new THREE.MeshStandardMaterial({ color: bc, roughness: 0.12, metalness: 0, envMap: env, envMapIntensity: 1.2, transparent: true, opacity: 0.9, emissive: bc, emissiveIntensity: 0.25 }));
      bo.position.set(x + 0.07, y + 0.022, z); g.add(bo);
      const lab = new THREE.Mesh(new THREE.PlaneGeometry(0.075, 0.075), new THREE.MeshBasicMaterial({ map: pawLabel(lc), transparent: true })); lab.position.set(x + 0.07, y + 0.022 + hgt * 0.4, z + 0.062); g.add(lab);
      const pump = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.05, 8), toon(0xffffff)); pump.position.set(x + 0.07, y + 0.022 + hgt + 0.025, z); g.add(pump);
      x += 0.15;
    }
  };
  shelf(0.28, 1.4, 1.38, -1.08, 2, 2); shelf(0.28, 1.4, 1.78, -1.08, 1, 3); shelf(0.28, 1.4, 2.16, -1.08, 3, 0); shelf(-1.1, -0.35, 0.72, -1.08, 1, 2);
  // a second basket with a pink towel, low on the left
  const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.18, 0.2, 24, 1, true), toon(0xf0b080, { glow: 0.25, extra: { side: THREE.DoubleSide } })); b2.position.set(-0.78, 0.1, 0.25); g.add(b2);
  const t2 = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 10), toon(0xffa8d8, { glow: 0.3 })); t2.scale.set(1.3, 0.55, 1); t2.position.set(-0.78, 0.21, 0.25); g.add(t2);
  return g;
}

// ---------------------------------------------------------------- soap bubbles (instanced, iridescent)
function bubbleMaterial() {
  return new THREE.ShaderMaterial({ transparent: true, depthWrite: false,
    vertexShader: `varying vec3 vN, vV; void main() {
#ifdef USE_INSTANCING
  mat4 im = instanceMatrix;
#else
  mat4 im = mat4(1.0);
#endif
  vec4 w = modelMatrix * im * vec4(position, 1.0); vN = normalize(mat3(modelMatrix * im) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `varying vec3 vN, vV; void main() { float f = 1.0 - abs(dot(normalize(vN), vV)); vec3 irid = 0.5 + 0.5 * cos(6.2832 * (f * 1.3 + vec3(0.0, 0.33, 0.67)));
      vec3 c = mix(vec3(0.9, 0.85, 1.0), irid, 0.5); float a = pow(f, 2.0) * 0.8 + 0.06; float hl = pow(max(0.0, dot(reflect(-vV, normalize(vN)), normalize(vec3(-0.4, 0.8, 0.4)))), 30.0);
      gl_FragColor = vec4(c + hl, clamp(a + hl, 0.0, 1.0)); }` });
}

// ---------------------------------------------------------------- sparkles and splash (points)
function dotTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'), r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.3, 'rgba(255,255,255,0.8)'); r.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
class Puffs {
  constructor(n, color, size) {
    this.n = n; this.p = new Float32Array(n * 3); this.v = new Float32Array(n * 3); this.life = new Float32Array(n); this.k = 0;
    const g = new THREE.BufferGeometry(); this.attr = new THREE.BufferAttribute(this.p, 3); g.setAttribute('position', this.attr);
    this.points = new THREE.Points(g, new THREE.PointsMaterial({ color, size, map: dotTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
    this.points.frustumCulled = false; for (let i = 0; i < n; i++) this.p[i * 3 + 1] = -99;
  }
  emit(p, v, life) { const i = this.k++ % this.n; this.p.set([p.x, p.y, p.z], i * 3); this.v.set([v.x, v.y, v.z], i * 3); this.life[i] = life; }
  update(dt, grav) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.p[i * 3 + 1] = -99; continue; }
      this.life[i] -= dt; this.v[i * 3 + 1] -= grav * dt;
      for (let j = 0; j < 3; j++) this.p[i * 3 + j] += this.v[i * 3 + j] * dt;
    }
    this.attr.needsUpdate = true;
  }
}

/**
 * Mounts the 3D opening in `container` (behind the screens' real UI). opts: { onHandOver, onDone, test }.
 * Returns { play(), seek(idleT, seqT) (tests), dispose() }.
 */
export function mountOpening3D(container, opts = {}) {
  const rnd = mulberry(0x0be3d);
  const canvas = document.createElement('canvas'); canvas.className = 'o3d';
  Object.assign(canvas.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block' });
  container.prepend(canvas);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: !!opts.test });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.18;
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0xb59af0);
  const camera = new THREE.PerspectiveCamera(34, 0.5, 0.02, 60);
  // light: a soft lavender sky, a warm key from the window side, the washer's cyan glow
  scene.add(new THREE.HemisphereLight(0xf4e6ff, 0xff9fdc, 2.1));
  const rim = new THREE.DirectionalLight(0xff9fe0, 1.4); rim.position.set(3, 2, -1); scene.add(rim);
  const key0 = new THREE.DirectionalLight(0xfff0dc, 2.4); key0.position.set(-2.5, 3, 2.5); scene.add(key0);
  const glowL = new THREE.PointLight(0x6fd8ff, 2.5, 3.0, 1.5); glowL.position.copy(OPENING3D.porthole).add(new THREE.Vector3(0, 0, 0.4)); scene.add(glowL);
  // a small environment for the metals
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene(); envScene.background = new THREE.Color(0x8f7fd0);
  for (const [p, c, s] of [[[0, 4, 1], [3, 3, 3.2], [6, 3]], [[-4, 1, 2], [2.4, 1.6, 2.6], [3, 5]], [[4, 1, 2], [1.4, 2.4, 3.0], [3, 5]], [[0, 1, -5], [2, 1.9, 2.4], [6, 3]]]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(...s), new THREE.MeshBasicMaterial({ color: new THREE.Color(...c), side: THREE.DoubleSide })); m.position.set(...p); m.lookAt(0, 0, 0); envScene.add(m);
  }
  const env = pmrem.fromScene(envScene, 0.04).texture;

  const room = buildRoom(env, rnd); scene.add(room);
  const washer = buildWasher(env); scene.add(washer.g);
  const vortex = buildVortex(); scene.add(vortex.tube, vortex.cap, vortex.water);
  const girl = buildGirl(rnd); girl.root.position.set(-0.36, 0.42, -0.2); girl.root.rotation.y = 0.18; girl.root.scale.setScalar(1.08); scene.add(girl.root);
  const basket = buildBasket(); scene.add(basket);
  // girl2: the user's Tripo girl, rigged (the code-built girl stays as the fallback until she has loaded)
  const g2 = { ready: false };
  if (LEVEL1_PARTS.girl2) new GLTFLoader().load(GIRL2.file, (gl) => {
    const root = new THREE.Group(); root.name = 'girl2'; root.add(gl.scene); scene.add(root);
    root.position.set(...GIRL2.pos); root.rotation.y = GIRL2.rotY; root.scale.setScalar(GIRL2.scale);
    const B = {}; gl.scene.traverse((o) => { if (o.isBone) B[o.name.replace(/[^A-Za-z]/g, '')] = o; if (o.isMesh) { o.frustumCulled = false; o.material.emissive = new THREE.Color(0x3a2a40); o.material.emissiveIntensity = 0.35; o.material.envMap = env; o.material.envMapIntensity = 0.5; } });
    for (const b of Object.values(B)) b.userData.rest = b.quaternion.clone();
    // eyelids on her head bone over the painted eyes (skin-coloured caps, scaled shut for a blink)
    root.updateMatrixWorld(true);
    const lidM = new THREE.MeshStandardMaterial({ color: GIRL2.skin, roughness: 0.75, emissive: 0x4a2414, emissiveIntensity: 0.2 });
    const lids = GIRL2.eyes.map(([ex, ey]) => {
      const surf = new THREE.Raycaster(root.localToWorld(new THREE.Vector3(ex, ey, 0.6)), root.localToWorld(new THREE.Vector3(ex, ey, -1)).sub(root.localToWorld(new THREE.Vector3(ex, ey, 0.6))).normalize());
      const hit = surf.intersectObject(gl.scene, true)[0];
      const lid = new THREE.Mesh(new THREE.SphereGeometry(GIRL2.eyeR, 20, 14), lidM);   // closes from both edges to a line (a cartoon blink)
      const p = hit ? hit.point : root.localToWorld(new THREE.Vector3(ex, ey, 0.19));
      B.head.attach(lid); lid.position.copy(B.head.worldToLocal(p.clone())); lid.scale.set(1, 0.05, 0.55); lid.visible = false;
      return lid;
    });
    const stool = new THREE.Mesh(new RoundedBoxGeometry(0.42, GIRL2.stool.h, 0.34, 3, 0.05), toon(GIRL2.stool.col, { glow: 0.3 }));
    stool.position.set(GIRL2.pos[0], GIRL2.stool.h / 2, GIRL2.pos[2]); scene.add(stool);
    Object.assign(g2, { ready: true, root, B, lids, stool });
    girl.root.visible = false;
  });
  // laundry that flies: two socks, three towels
  const laundry = [];
  for (let i = 0; i < 5; i++) {
    const o = i < 2 ? buildSock(rnd) : buildTowel([0xffd34d, 0x6fb6ff, 0xff8ccf][i - 2]);
    o.scale.setScalar(1.45); o.userData.k = 1.45; o.visible = false; scene.add(o);
    laundry.push({ o, t0: 0.42 + i * 0.06, t1: 1.45 + i * 0.1, from: (LEVEL1_PARTS.girl2 ? V([-0.16, 1.25, 0.06]) : V([-0.02, 1.35, 0.15])).add(V([(rnd() - 0.5) * 0.08, 0, 0])), apex: V([0.32 + rnd() * 0.35, 2.3 + rnd() * 0.25, 0.45 + rnd() * 0.2]),
      to: V([OPENING3D.porthole.x + (rnd() - 0.5) * 0.15, OPENING3D.porthole.y + (rnd() - 0.5) * 0.12, OPENING3D.porthole.z - 0.2]), spin: V([rnd() * 9 - 4.5, rnd() * 9 - 4.5, rnd() * 9 - 4.5]) });
  }
  if (TRIPO2_ON) applyTripo2({ basket, laundry, loader: new GLTFLoader(), env });   // (tripo2: opening_tripo.js)
  // bubbles: a heap in the foreground and some floating up through the room
  const bubM = bubbleMaterial(), nb = 46;
  const bubbles = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 24, 16), bubM, nb); bubbles.frustumCulled = false; scene.add(bubbles);
  const bub = [];
  for (let i = 0; i < nb; i++) {
    const front = i < 26;
    bub.push(front ? { p: V([-0.75 + rnd() * 1.8, 0.1 + rnd() * 0.3, 0.45 + rnd() * 0.45]), s: 0.03 + rnd() * 0.06, rise: 0, ph: rnd() * 6 }
      : { p: V([-0.7 + rnd() * 1.7, 0.2 + rnd() * 1.8, -0.6 + rnd() * 1.2]), s: 0.025 + rnd() * 0.05, rise: 0.06 + rnd() * 0.08, ph: rnd() * 6 });
  }
  // foreground bubbles as in the approved art: glossy lavender, pink and sky-blue spheres heaped along the bottom
  const fbM = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.08, metalness: 0, envMap: env, envMapIntensity: 1.6, transparent: true, opacity: 0.78, iridescence: 0.8, iridescenceIOR: 1.3, clearcoat: 1, emissive: 0x6a4aa0, emissiveIntensity: 0.25 });
  const nf = 24, front = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 28, 18), fbM, nf); front.frustumCulled = false; scene.add(front);
  const fcols = [0xc6b0ff, 0xffb6e4, 0xa9d8ff, 0xe0c8ff, 0xffd0f0];
  const fb = []; for (let i = 0; i < nf; i++) { fb.push({ p: V([-0.72 + rnd() * 1.6, 0.0 + rnd() * 0.16, 0.6 + rnd() * 0.5]), s: 0.07 + rnd() * 0.12, ph: rnd() * 6 }); front.setColorAt(i, new THREE.Color(fcols[i % fcols.length])); }
  front.instanceColor.needsUpdate = true;
  // white foam and little bubbles along the lower inner rim of the washer's opening (the approved art's foam in the vortex)
  const foamM = new THREE.MeshStandardMaterial({ color: LEVEL1_PARTS.port ? 0xe2f6ff : 0xffffff, roughness: 0.25, metalness: 0, envMap: env, emissive: LEVEL1_PARTS.port ? 0x6fc8ff : 0xbfe8ff, emissiveIntensity: 0.55 });
  const nfo = 70, foam = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 8), foamM, nfo); foam.frustumCulled = false; scene.add(foam);
  // (port: the same random draws, so everything after is unchanged; 52 of the 70 bits hidden, the rest small and at the lower left)
  const fo = []; for (let i = 0; i < nfo; i++) { const a = Math.PI * (1.08 + rnd() * 0.84), r = OPENING3D.rOpen * (0.72 + rnd() * 0.24); const f = { x: Math.cos(a) * r, y: Math.sin(a) * r, z: -0.03 - rnd() * 0.18, s: 0.012 + rnd() * 0.028, ph: rnd() * 6 };
    if (LEVEL1_PARTS.port) { if (i >= 18) f.s = 0; else { const a2 = Math.PI * (1.12 + (i / 18) * 0.36); f.x = Math.cos(a2) * r; f.y = Math.sin(a2) * r; f.s *= 0.55; } }
    fo.push(f); }
  // the pink toss arrow (as in the approved Screens 1 and 2): from the character's perch, curving down into the opening
  const arrow = new THREE.Group(); arrow.name = 'tossArrow'; scene.add(arrow);
  {
    const curve = new THREE.QuadraticBezierCurve3(V([0.0, 1.2, 0.42]), V([0.42, 1.28, 0.5]), V([OPENING3D.porthole.x + 0.02, OPENING3D.porthole.y + 0.1, OPENING3D.porthole.z + 0.24]));
    const pinkM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.5, 0.35, 1.05), transparent: true }), lineM = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide, transparent: true });
    arrow.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.02, 10), pinkM), new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.031, 10), lineM));
    const end = curve.getPoint(1), tan = curve.getTangent(1);
    for (const [m, k] of [[pinkM, 1], [lineM, 1.3]]) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.05 * k, 0.1 * k, 16), m); c.position.copy(end).addScaledVector(tan, 0.03); c.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tan); arrow.add(c); }
    arrow.userData.mats = [pinkM, lineM];
  }
  const sparks = new Puffs(160, 0xffc8f4, 0.05), splash = new Puffs(140, 0xd8f6ff, 0.045);
  scene.add(sparks.points, splash.points);

  // the pink character: the game's own model, with a face for the opening
  const hero = new THREE.Group(); hero.name = 'hero'; scene.add(hero);
  const heroBody = new THREE.Group(); hero.add(heroBody);
  const heroFace = { eyes: [], lids: [], mouth: null, O: null, ready: false };
  new GLTFLoader().load('models/mascot.glb', (gl) => {
    const m = gl.scene; let map = null;
    m.traverse((o) => { if (o.isMesh) { map = o.material.map; o.geometry.computeVertexNormals(); o.material = new THREE.MeshStandardMaterial({ map, color: 0xffd0ee, roughness: 1, metalness: 0, emissive: 0xff2aa6, emissiveMap: map, emissiveIntensity: 0.42, side: THREE.DoubleSide }); } });
    const box = new THREE.Box3().setFromObject(m), size = box.getSize(new THREE.Vector3()), mid = box.getCenter(new THREE.Vector3());
    const s = OPENING3D.heroW / size.x; m.scale.setScalar(s); m.position.copy(mid).multiplyScalar(-s); heroBody.add(m);
    // face on its front (+Z): big blue eyes with highlights, eyelids for blinks, an open smile and an O for surprise
    const fk = OPENING3D.heroW / 0.34, fz = size.z * s * 0.47, white = new THREE.MeshBasicMaterial({ color: 0xffffff }), blue = new THREE.MeshBasicMaterial({ color: 0x2f86e8 }), dark = new THREE.MeshBasicMaterial({ color: 0x101020 });
    const lidM = new THREE.MeshStandardMaterial({ map, color: 0xffd0ee, emissive: 0xff2aa6, emissiveMap: map, emissiveIntensity: 0.42, roughness: 1 });
    for (const sx of [-1, 1]) {
      const eg = new THREE.Group(); eg.position.set(sx * 0.055 * fk, 0.035 * fk, fz); eg.rotation.y = sx * 0.3; eg.scale.setScalar(fk); heroBody.add(eg);
      const sc = new THREE.Mesh(new THREE.SphereGeometry(0.042, 20, 16), white); sc.scale.set(0.9, 1.1, 0.55); eg.add(sc);
      const ir = new THREE.Mesh(new THREE.SphereGeometry(0.03, 18, 14), blue); ir.scale.set(1, 1.1, 0.5); ir.position.z = 0.016; eg.add(ir);
      const pu = new THREE.Mesh(new THREE.SphereGeometry(0.016, 14, 10), dark); pu.scale.set(1, 1.1, 0.4); pu.position.z = 0.028; eg.add(pu);
      const hl = new THREE.Mesh(new THREE.SphereGeometry(0.009, 10, 8), white); hl.position.set(0.01, 0.013, 0.034); eg.add(hl);
      const lid = new THREE.Mesh(new THREE.SphereGeometry(0.045, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.5), lidM); lid.scale.set(0.95, 0.1, 0.6); lid.position.z = 0.004; eg.add(lid);
      heroFace.eyes.push({ eg, sc }); heroFace.lids.push(lid);
    }
    const mouth = new THREE.Group(); mouth.position.set(0, -0.035 * fk, fz + 0.005); mouth.scale.setScalar(fk); heroBody.add(mouth);
    const mo = new THREE.Mesh(new THREE.SphereGeometry(0.035, 22, 12, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x8a1236 })); mo.scale.set(1.2, 0.9, 0.35); mouth.add(mo);
    const tg = new THREE.Mesh(new THREE.SphereGeometry(0.02, 14, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xff6f96 })); tg.scale.set(1.2, 0.8, 0.4); tg.position.set(0, -0.016, 0.008); mouth.add(tg);
    const O = new THREE.Mesh(new THREE.SphereGeometry(0.022, 16, 12), new THREE.MeshBasicMaterial({ color: 0x8a1236 })); O.scale.set(0.9, 1.15, 0.35); O.visible = false; mouth.add(O);
    heroFace.mouth = mo; heroFace.tongue = tg; heroFace.O = O; heroFace.ready = true;
  });
  function heroExpr({ lid = 0, surprise = 0, open = 0.6 }) {
    if (!heroFace.ready) return;
    for (const l of heroFace.lids) l.scale.y = 0.1 + lid * 1.05;
    for (const e of heroFace.eyes) e.sc.scale.set(0.9 + surprise * 0.15, 1.1 + surprise * 0.2, 0.55);
    heroFace.mouth.visible = surprise < 0.5; heroFace.tongue.visible = surprise < 0.5; heroFace.O.visible = surprise >= 0.5;
    heroFace.mouth.scale.y = 0.4 + open; heroFace.O.scale.set(0.9, 1.15 + surprise * 0.3, 0.35);
  }

  // ------------------------------------------------ the timeline
  const P = OPENING3D.porthole;
  const blinkAt = (t, every, off) => { const k = ((t + off) % every); return k < 0.13 ? Math.sin(k / 0.13 * Math.PI) : 0; };
  const basketHome = LEVEL1_PARTS.girl2 ? V([-0.37, 0.95, -0.01]) : V([-0.3, 1.04, 0.16]);   // (girl2: in front of her chest, within her shorter arms' reach)
  const heroLaunch = LEVEL1_PARTS.girl2 ? basketHome.clone().add(V([0.42, 0.5, 0.15])) : V([-0.02, 1.47, 0.24]), heroApex = V([0.5, 2.05, 0.6]), heroRim = V([P.x - 0.01, P.y + 0.05, P.z + 0.22]);
  const heroIn = V([P.x, P.y - 0.02, P.z - 1.3]), heroLand = V([P.x, OPENING3D.waterY + 0.1 * OPENING3D.heroW / 0.34, P.z - 2.8]);
  let seq = -1, idle = 0, landed = false, fadeStarted = false, doneCalled = false, sparkCarry = 0;
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3();
  function pose(it, st) {
    const s = st < 0 ? -1 : st;
    // ---- basket (both hands on its handles)
    const lift = key(s, [[0, 0], [0.32, 0.6], [0.55, 1.0], [1.3, 0.9], [2.2, 0.2]]);
    const tip = key(s, [[0, 0], [0.32, -0.25], [0.6, 1.15], [1.3, 1.0], [2.4, 0.3]]);
    const bx = key(s, [[0, 0], [0.32, -0.05], [0.6, 0.2], [1.5, 0.15], [2.4, 0.02]]);
    basket.position.copy(basketHome).add(V([bx, 0.012 * Math.sin(it * 2.1) + lift * 0.12, lift * 0.1]));
    basket.rotation.set(0.05 + tip * 0.35, 0.3, -0.35 - tip * 0.6 + 0.03 * Math.sin(it * 1.7));   // (held tipped toward the washer, as in the approved still)
    // ---- girl: breathing, sway, lean into the toss, reaction
    const lean = key(s, [[0, 0], [0.32, -0.15], [0.6, 0.22], [1.4, 0.15], [2.4, 0.05]]);
    girl.hips.rotation.z = 0.03 * Math.sin(it * 1.1); girl.hips.position.y = 0.56 + 0.006 * Math.sin(it * 2.2);
    girl.spine.rotation.set(lean + 0.03 * Math.sin(it * 1.3), 0.05 + key(s, [[0, 0], [0.6, 0.3], [2, 0.15]]), 0.04 * Math.sin(it * 0.9));
    girl.chest.scale.set(1, 1 + 0.015 * Math.sin(it * 2.2), 1);
    const lookUp = key(s, [[0, 0], [0.45, 0.2], [0.9, 0.1], [1.6, -0.1], [2.4, -0.2]]);
    const lookSide = key(s, [[0, 0], [0.6, 0.12], [1.2, 0.3], [2.0, 0.4]]);
    girl.head.rotation.set(-lookUp + 0.05 * Math.sin(it * 0.8), 0.12 + lookSide + 0.08 * Math.sin(it * 0.6), 0.1 * Math.sin(it * 0.7) - 0.08);
    for (let i = 0; i < girl.curls.length; i += 3) girl.curls[i].position.y += Math.sin(it * 3 + i) * 0.0003;   // a little bounce in the curls
    const blink = Math.max(blinkAt(it, 3.1, 0.4), s > 0 ? blinkAt(s, 1.7, 1.2) : 0);
    girl.setFace({ open: key(s, [[0, 0.55], [0.45, 0.6], [0.8, 0.7], [1.1, 0.3], [1.6, 0.85], [2.4, 0.7]]), smile: 1,
      O: s > 0.85 && s < 1.25 ? 1 : 0, lid: Math.max(blink, s > 1.6 ? 0.35 : 0), browUp: key(s, [[0, 0.1], [0.45, 0.6], [1.1, 1.0], [1.8, 0.3]]),
      look: [key(s, [[0, 0.5], [0.8, 0.6], [1.5, 0.9]]), key(s, [[0, -0.3], [0.5, 0.4], [1.2, -0.2], [2.0, -0.6]])] });
    girl.root.updateMatrixWorld(true); basket.updateMatrixWorld(true);
    const hl = new THREE.Vector3(-0.225, 0.15, 0).applyMatrix4(basket.matrixWorld), hr = new THREE.Vector3(0.225, 0.15, 0).applyMatrix4(basket.matrixWorld);
    // after the toss her right hand lets go and waves
    const wave = sm(1.5, 1.9, s), hrW = V([0.12, 1.62 + 0.04 * Math.sin(s * 10), 0.08 + 0.05 * Math.sin(s * 10)]);
    const chestW = girl.chest.getWorldPosition(new THREE.Vector3());
    reach(girl.armL, hl, chestW.clone().add(V([-0.4, -0.3, -0.1])));
    reach(girl.armR, hr.clone().lerp(hrW, wave), chestW.clone().add(V([0.4, -0.3 + wave * 0.5, -0.1])));
    if (g2.ready) {   // girl2: the same motion on the Tripo girl's own bones
      const B = g2.B;
      for (const b of Object.values(B)) b.quaternion.copy(b.userData.rest);
      g2.root.updateMatrixWorld(true);
      g2.root.position.y = GIRL2.pos[1] + 0.006 * Math.sin(it * 2.2);
      rotateBoneWorld(B.hips, V([0, 0, 1]), 0.03 * Math.sin(it * 1.1));
      rotateBoneWorld(B.spine, V([1, 0, 0]), lean * 0.8 + 0.03 * Math.sin(it * 1.3));
      rotateBoneWorld(B.chest, V([0, 1, 0]), key(s, [[0, 0], [0.6, 0.25], [2, 0.12]]));
      rotateBoneWorld(B.head, V([0, 1, 0]), 0.1 + lookSide * 0.8 + 0.07 * Math.sin(it * 0.6));
      rotateBoneWorld(B.head, V([1, 0, 0]), -lookUp * 0.8 + 0.04 * Math.sin(it * 0.8));
      rotateBoneWorld(B.head, V([0, 0, 1]), -0.06 + 0.06 * Math.sin(it * 0.7));
      const cw = B.chest.getWorldPosition(new THREE.Vector3());
      reachBones(B.upperarmL, B.forearmL, B.handL, hr.clone().lerp(hrW, wave), cw.clone().add(V([0.45, -0.35 + wave * 0.5, -0.15])));
      reachBones(B.upperarmR, B.forearmR, B.handR, hl, cw.clone().add(V([-0.45, -0.35, -0.15])));
      const bl = Math.max(blink, 0); for (const l of g2.lids) { l.visible = bl > 0.04; l.scale.set(1.08, 0.04 + bl * 1.02, 0.5); }
    }
    // ---- the pink character
    let hp, spin = new THREE.Euler(), sq = 1, surprise = 0, faceAway = 0;
    if (s < 0.55) {   // sitting on the laundry, bouncing; hops in surprise as the basket swings
      hp = basket.position.clone().add(V([0.21, 0.28 + Math.abs(Math.sin(it * 3.4)) * 0.025 + key(s, [[0, 0], [0.3, 0.05], [0.55, 0.12]]), 0.05]));   // perched on the basket's lip
      spin.set(0, 0.3 * Math.sin(it * 0.7), 0.06 * Math.sin(it * 1.9) - sm(0.3, 0.55, s) * 0.4); sq = 1 + 0.05 * Math.sin(it * 6.8) + sm(0.3, 0.5, s) * 0.12;
      surprise = sm(0.25, 0.4, s);
    } else if (s < 2.05) {   // caught in the toss: a curved path to the washer's door, tumbling with the laundry
      const x = clamp01((s - 0.55) / 1.5), e = 1 - (1 - x) * (1 - x) * (1 - 0.35 * x);
      hp = bez(heroLaunch, heroApex, heroRim, e);
      spin.set(-e * Math.PI * 2.0 + (e > 0.75 ? 0 : 0), 0.4 * Math.sin(e * 5), -0.4 * (1 - e) + Math.sin(e * 6) * 0.3); sq = 1 + 0.12 * Math.sin(s * 14) * (1 - e);
      surprise = s < 1.6 ? 1 : 0;
    } else if (s < 3.1) {   // at the rim: pulled in by the glow, turning to face into the drum
      const k = sm(2.05, 3.1, s);
      hp = heroRim.clone().lerp(heroIn, k); hp.x += Math.sin(k * 7) * 0.05 * (1 - k); hp.y += Math.cos(k * 7) * 0.05 * (1 - k);
      spin.set(-Math.PI * 2 - k * Math.PI * 1.5, 0.8 + k * (Math.PI - 0.8), 0); faceAway = k;
    } else {   // down onto the water, upright, seen from behind; then floating and bobbing
      const k = sm(3.1, 3.9, s);
      hp = heroIn.clone().lerp(heroLand, k); hp.y += Math.sin(k * Math.PI) * 0.08;
      if (s > 3.9) hp.y += 0.012 * Math.sin((s - 3.9) * 6.5);
      spin.set(-Math.PI * 3.5 * (1 - k) + 0.05 * Math.sin(s * 4), Math.PI, 0.04 * Math.sin(s * 3.1)); faceAway = 1;
      sq = 1 - 0.18 * Math.max(0, Math.sin((s - 3.9) * 9)) * Math.exp(-(s - 3.9) * 3) * (s > 3.9 ? 1 : 0);
      if (!landed && s >= 3.9) { landed = true; for (let i = 0; i < 90; i++) { const a = rnd() * Math.PI * 2, v = 0.4 + rnd() * 0.9; splash.emit(V([hp.x + Math.cos(a) * 0.12, OPENING3D.waterY + 0.02, hp.z + Math.sin(a) * 0.1]), V([Math.cos(a) * v * 0.6, 0.8 + rnd() * 1.2, Math.sin(a) * v * 0.4 - 0.2]), 0.6 + rnd() * 0.5); } vortex.WU.uHit.value.set(hp.x - P.x, 1, P.z - hp.z); }
    }
    hero.position.copy(hp); hero.rotation.copy(spin); heroBody.scale.set(1 / Math.sqrt(sq), sq, 1 / Math.sqrt(sq));
    heroExpr({ lid: blinkAt(it, 2.6, 1.1), surprise, open: 0.55 + 0.25 * Math.sin(it * 2) });
    if (s > 3.9) vortex.WU.uHit.value.y = Math.max(0, 1 - (s - 3.9) * 0.8);
    // ---- the laundry
    for (const L of laundry) {
      const k = (s - L.t0) / (L.t1 - L.t0);
      L.o.visible = s >= L.t0 && s < L.t1 + 0.9;
      if (!L.o.visible) continue;
      const p = k <= 1 ? bez(L.from, L.apex, L.to, clamp01(k)) : L.to.clone().add(V([0, 0, -(k - 1) * 1.3]));
      L.o.position.copy(p); L.o.rotation.set(L.spin.x * s, L.spin.y * s, L.spin.z * s); L.o.scale.setScalar(L.o.userData.k * (k > 1 ? Math.max(0.01, 1 - (k - 1) * 0.6) : 1));
    }
    // ---- the washer's glow and the tunnel's flow (it speeds up as he is pulled in)
    vortex.U.uGlow.value = 0.62 + 0.38 * sm(3.0, 4.4, s); vortex.WU.uFrom.value = LEVEL1_PARTS.port ? (s < 0 ? 9.5 : 9.5 * (1 - sm(0.6, 2.3, s))) : (s < 0 ? 2.4 : 2.4 * (1 - sm(1.4, 2.4, s)));   // (port: the water floods in from the far end as the toss begins) vortex.U.uTime.value = it; vortex.U.uFlow.value = s > 0 ? key(s, [[0, 0], [2, 1.5], [3.2, 5.0], [5, 8.0]]) + s * 0.4 : 0;
    glowL.intensity = 2.5 + 1.5 * Math.sin(it * 2.0) * 0.3 + sm(1.5, 2.6, s) * 3.0;
    // ---- the camera: one continuous move, following him through the door into the tunnel
    // (its end: the game's Tap to Start framing at her scale: 1.03 m above her and 3.58 m behind for a 1.04 m body, looking
    // down the tunnel; here she is 0.34 m wide)
    const camA = V([0.04, 1.02, 4.0]), tgtA = V([0.04, 1.02, 0.2]), hk = OPENING3D.heroW / 0.34, camZ = V([heroLand.x, heroLand.y + 0.33 * hk, heroLand.z + 1.17 * hk]), tgtZ = V([heroLand.x, heroLand.y + 0.12 * hk, heroLand.z - 2.1 * hk]);
    if (s < 0) { camPos.copy(camA).add(V([0.02 * Math.sin(it * 0.3), 0.01 * Math.sin(it * 0.4), 0])); camTgt.copy(tgtA); camera.fov = 35; }
    else {
      const follow = sm(0.8, 1.8, s), dolly = sm(1.7, 3.0, s), inside = sm(2.9, 4.3, s);
      camTgt.copy(tgtA).lerp(hp, follow * 0.55).lerp(V([P.x, P.y, P.z - 0.6]), dolly).lerp(tgtZ, inside);
      camPos.copy(camA).lerp(V([0.15, 1.05, 2.8]), follow).lerp(V([P.x, P.y + 0.03, P.z + 0.85]), dolly).lerp(camZ, inside);
      camera.fov = 35 + dolly * 13 + inside * 12;
    }
    camera.position.copy(camPos); camera.lookAt(camTgt); camera.updateProjectionMatrix();
    // the room is out of sight once the camera is inside the drum
    const inDrum = camera.position.z < P.z - 0.05;
    room.visible = washer.g.visible = basket.visible = !inDrum; girl.root.visible = !inDrum && !g2.ready; if (g2.ready) g2.root.visible = g2.stool.visible = !inDrum; bubbles.visible = front.visible = foam.visible = !inDrum;
  }
  function stepFx(dt, s) {
    sparks.update(dt, 0.15); splash.update(dt, 2.6);
    if (s > 0.5 && s < 2.4) { sparkCarry += dt * 70; for (; sparkCarry >= 1; sparkCarry--) sparks.emit(hero.position.clone().add(V([(rnd() - 0.5) * 0.1, (rnd() - 0.5) * 0.1, (rnd() - 0.5) * 0.1])), V([(rnd() - 0.5) * 0.2, (rnd() - 0.5) * 0.2, (rnd() - 0.5) * 0.2]), 0.5 + rnd() * 0.4); }
    const M = new THREE.Matrix4(), Q = new THREE.Quaternion();
    bub.forEach((b, i) => { const y = b.rise ? (b.p.y + ((idle * b.rise + b.ph * 0.2) % 1.8)) : b.p.y + 0.01 * Math.sin(idle * 1.5 + b.ph); const s2 = b.s * (1 + 0.04 * Math.sin(idle * 3 + b.ph));
      M.compose(V([b.p.x + 0.02 * Math.sin(idle + b.ph), y, b.p.z]), Q, V([s2, s2, s2])); bubbles.setMatrixAt(i, M); });
    bubbles.instanceMatrix.needsUpdate = true;
    fb.forEach((b, i) => { const s2 = b.s * (1 + 0.03 * Math.sin(idle * 2 + b.ph)); M.compose(V([b.p.x, b.p.y + 0.008 * Math.sin(idle * 1.3 + b.ph), b.p.z]), Q, V([s2, s2, s2])); front.setMatrixAt(i, M); });
    front.instanceMatrix.needsUpdate = true;
    const P0 = OPENING3D.porthole;
    fo.forEach((f, i) => { const s2 = f.s * (1 + 0.25 * Math.sin(idle * 4 + f.ph)); M.compose(V([P0.x + f.x + 0.004 * Math.sin(idle * 3 + f.ph), P0.y + f.y + 0.006 * Math.sin(idle * 2.5 + f.ph), P0.z + f.z]), Q, V([s2, s2, s2])); foam.setMatrixAt(i, M); });
    foam.instanceMatrix.needsUpdate = true;
    // the toss arrow: shown while waiting (pulsing), gone as the toss begins
    const ak = s < 0 ? 1 : 1 - sm(0.0, 0.35, s); arrow.visible = ak > 0.01;
    for (const m of arrow.userData.mats) m.opacity = ak * (0.85 + 0.15 * Math.sin(idle * 4));
  }
  const resize = () => { const w = container.clientWidth || window.innerWidth, h = container.clientHeight || window.innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); };
  resize(); window.addEventListener('resize', resize);
  // the frame: real time (or, in tests, the times given to seek)
  let last = performance.now(), raf = 0, alive = true;
  const frame = (now) => {
    if (!alive) return; raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now; idle += dt;
    if (seq >= 0) seq += dt;
    tick(dt);
  };
  function tick(dt) {
    pose(idle, seq); stepFx(dt, seq);
    renderer.render(scene, camera);
    if (seq >= OPENING3D.handOver && !fadeStarted) { fadeStarted = true; if (opts.onHandOver) opts.onHandOver(); }
    if (seq >= OPENING3D.seqEnd && !doneCalled) { doneCalled = true; if (opts.onDone) opts.onDone(); }
  }
  if (!opts.test) raf = requestAnimationFrame(frame);
  if (typeof window !== 'undefined') window.__bwO3D = { seek: (it, st, dt = 1 / 30) => { idle = it; seq = st; tick(dt); }, state: () => ({ idle, seq, landed, heroReady: heroFace.ready && (!LEVEL1_PARTS.girl2 || g2.ready), laundry: laundry.map((L) => [L.o.visible, L.o.position.toArray().map((v) => +v.toFixed(2)), L.o.children.length]), cam: camera.position.toArray().map((v) => +v.toFixed(2)) }) };
  return {
    play() { if (seq < 0) { seq = 0; landed = false; } },
    playing: () => seq >= 0,
    dispose() { alive = false; cancelAnimationFrame(raf); window.removeEventListener('resize', resize); renderer.dispose(); pmrem.dispose(); canvas.remove(); },
  };
}
