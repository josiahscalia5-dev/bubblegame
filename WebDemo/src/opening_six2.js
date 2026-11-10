// six2 (9 November 2026, session 9ee07777): the user's SIX APPROVED PORTRAIT SCREENS (Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/,
// 864 x 1536) as the opening of the active game. Switch `six2` (with `six`; in the plain launch). Without it the opening is exactly the previous build
// (`?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3`, rollback branch claude/bubble-wash-rollback-before-six2).
//
// What it changes (the same girl, washer, door, hero, towels and drum; the same renderer and timeline clock; new staging and motion):
//   1 "The surprise hideout": the portrait camera of reference 01 (girl kneeling on the LEFT, the purple basket on a rug in the CENTRE-LOW foreground,
//     the pink-and-gold washer on the RIGHT, its door shut); the laundry room behind (sunset window, blue curtains, shelves of folded towels and
//     bottles, lavender-pink walls, a tiled floor, bubbles); the pink hero hides under the blue towel (a cloth hood: his eyes peek out at the player);
//     she breathes, blinks, pats the towel and looks at the washer, never at him.
//   2 "She loads the laundry": the door swings open; she grips the blue towel with both hands and lifts it off (cloth hanging from her hands), rises to
//     her knees and knee-walks to the open door (knees planted: no sliding), and pushes the towel into the drum (reference 02: he is left peeking from
//     the yellow towels in the basket, "!", and she never notices him).
//   3 "Oops! He goes in too": she scoops the next armful, the yellow towel, with him hidden in it, and pushes it in; the camera follows it to the door
//     rim (open door on the LEFT) and into the lavender-silver drum: he tumbles out, the blue towel flips over his head, the yellow towel beside him,
//     surprised "Oops!", cobalt water starts to run along the bottom.
//   4 "The wash begins": the front view of the washer (reference 04); she swings the door shut (swing, stop, latch, bounce) and moves out of shot;
//     the lights come on in sequence; the water rises and swirls round him, seen through the glass.
//   5 "Into the laundry tunnel": the current pulls him in and the camera follows through the porthole into the drum tunnel (darker lavender
//     perforated metal, pink-gold machinery, cobalt water with crests), behind him, into the live game.
// Looks and staging only: the game's seeded Math.random is never used (private generator), gameplay is untouched.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { buildRoom2, applyRoomLight } from './opening_six2_room.js';   // the room and its light (lighting specialist)
import { installSix2Tunnel } from './opening_six2_tunnel.js';   // the washer look and the scene 5 tunnel (lighting specialist)
import { installSix2Water } from './opening_six2_water.js';   // the water of scenes 3-5 (water specialist)
import { OPEN9_ON, OPEN9, installOpen9 } from './opening_six2_open9.js';   // open9 (session d742a298): the washer spin with 3D water and the direct hand-over into the live Screen 6
import { SEQ7_ON as G12_ON, SEQ7 as G12N, clothGrid as g12Grid, softHang as g12Hang, cradle as g12Cradle, tumble as g12Tumble } from './opening_six2_girl12.js';   // seq7, lane girl12: screens 2-3 (character animation)

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const SIX2_ON = LIST.includes('six') && LIST.includes('six2');

// every number the staging uses (window.__bwSix2 in the browser, for live tuning; the timeline reads them each frame)
export const SIX2 = {
  handOver: 9.65, seqEnd: 10.45, warp: [2.65, 4.45, 3.95],   // (real 2.65..4.45 s = story 2.65..3.95 s: the trip back to the basket; later story times +0.5 s)
  girl: { scale: 1.2, k1: [-0.5, 1.5], yaw1: 1.3, k2: [-0.26, 0.6], yaw2: 1.75, sit: 0.35 },   // knee spots (x, z) for scenes 1 and 2
  basket: { pos: [-0.2, 1.47], scale: 1.12, yaw: 0.0 },
  door: { open: -2.92 },
  cam: [   // [t (s after START; -1 = waiting), position, target, vertical fov]
    [-1, [0.002, 0.5, 4.116], [-0.349, 0.458, 0.555], 41.2],   // reference 01: fitted to 13 measured landmarks (her eyes, knee, shoe, hip, hands; basket rim, base; his eyes; porthole), 60 px rms
    [0.0, [0.002, 0.5, 4.116], [-0.349, 0.458, 0.555], 41.2],
    [0.9, [0.08, 0.56, 4.1], [-0.33, 0.5, 0.6], 41],   // (lifting the towel at the basket: scene 1's framing, a little higher)
    [2.0, [0.524, 0.538, 3.976], [-0.155, 0.515, 0.796], 39.1],   // reference 02: fitted to 11 measured landmarks (her eye, hands, hip; basket; his eyes; drum opening), 91 px rms
    [3.2, [0.524, 0.538, 3.976], [-0.155, 0.515, 0.796], 39.1],
    [4.0, [0.18, 0.8, 1.55], [0.32, 0.6, -0.2], 50],
    [4.9, [0.22, 0.74, 1.15], [0.33, 0.58, -0.3], 50],
    [5.4, [0.3, 0.73, 3.29], [0.3, 0.72, 0.27], 36],   // reference 04: the washer fills the frame, the porthole centred at 55 % height
    [7.4, [0.3, 0.72, 3.25], [0.3, 0.71, 0.27], 36],
    [8.0, [0.3, 0.64, 0.24], [0.3, 0.56, -2.0], 54],
  ],
  scenes: [[-1, 1], [0.0, 2], [3.25, 3], [5.3, 4], [7.3, 5], [9.15, 6]],   // [from t, scene number] for the captions
  water: { rise: 0.17 },
};
// (s56, session ac4e3449) the live game behind is the approved Scene 5 / 6 tunnel: the opening hands over as soon as its camera is inside the drum
// behind him (the crossfade runs from the washer's drum into the same lavender tunnel; the game's camera then follows him in, s56_tunnel.js)
if (SIX2_ON && LIST.includes('s56')) Object.assign(SIX2, { handOver: 8.95, seqEnd: 9.75 });
// (session 8da775c4, seq7) THE WASH BEGINS gets time to be seen: story 6.85..7.30 (the water up round him, the drum turning, before the spin) plays over
// 1.3 s of real time instead of 0.45 s (wash: [story start, story length, real length]); the hand-over and the end move back by the same 0.85 s
if (SIX2_ON && LIST.includes('s56') && LIST.includes('seq7')) Object.assign(SIX2, { wash: [6.85, 0.45, 1.3], handOver: 8.95 + 0.85, seqEnd: 9.75 + 0.85 });   // (real seconds: story 8.45, inside the drum)
// (session d742a298, open9) the opening ends inside the water passage: the live game is released as the passage's end opens onto it (story OPEN9.T.open)
// and the opening is removed once its mouth has swept past the frame (OPEN9.T.end); the captions follow
if (OPEN9_ON) Object.assign(SIX2, { handOver: OPEN9.T.open + OPEN9.real, seqEnd: OPEN9.T.end + OPEN9.real, scenes: [[-1, 1], [0.0, 2], [3.25, 3], [5.3, 4], [OPEN9.T.dive, 5], [OPEN9.T.open, 6]] });
if (SIX2_ON && typeof window !== 'undefined') window.__bwSix2 = SIX2;

// ---------------------------------------------------------------- small helpers
let seed = 0x51c2;
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };   // private (never the game's Math.random)
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sm = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const V = (a, b, c) => new THREE.Vector3(a, b, c);
function keys(t, ks) {   // smooth keys over arrays or numbers
  if (t <= ks[0][0]) return ks[0][1];
  for (let i = 0; i < ks.length - 1; i++) { const [t0, v0] = ks[i], [t1, v1] = ks[i + 1]; if (t <= t1) { const k = sm(t0, t1, t); return Array.isArray(v0) ? v0.map((v, j) => v + (v1[j] - v) * k) : v0 + (v1 - v0) * k; } }
  return ks[ks.length - 1][1];
}
export function canvasTex(w, h, draw, srgb = true) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
export function terryTex(base, dark, light) {   // a soft looped terry-cloth texture
  return canvasTex(256, 256, (g, w, h) => { g.fillStyle = base; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 5200; i++) { const x = rnd() * w, y = rnd() * h, r = 1 + rnd() * 2.2; g.fillStyle = rnd() < 0.5 ? light : dark; g.globalAlpha = 0.18 + rnd() * 0.25; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
    g.globalAlpha = 0.5; g.fillStyle = light; g.fillRect(0, h * 0.84, w, h * 0.05); g.fillRect(0, h * 0.92, w, h * 0.015); g.globalAlpha = 1; });
}

// ---------------------------------------------------------------- the cloth (a 24 x 24 grid placed every frame)
// shapes: drape over a sphere (r: what is under it; L: half side; wrap 0 draped .. 1 bundle), or hang from two held corners
export function makeCloth(material, n = 24) {
  const geo = new THREE.PlaneGeometry(1, 1, n, n), mesh = new THREE.Mesh(geo, material); mesh.frustumCulled = false;
  const U = geo.attributes.position.array.slice(), cnt = geo.attributes.position.count, A = new Float32Array(cnt * 3), B = new Float32Array(cnt * 3);
  const drape = (out, r, L, wrap, hang, t, flut, sh = 0) => {
    const D = L * Math.SQRT2, arc = r * Math.PI * 0.5;
    for (let i = 0; i < cnt; i++) {
      const u = U[i * 3] * 2, v = U[i * 3 + 1] * 2 - sh, d = Math.hypot(u, v) * L, th = Math.atan2(v, u);
      const wr = 0.014 * Math.sin(th * 7 + d * 22) * Math.min(1, d / L) * (r / 0.15);
      let ax, ay, az;
      if (d < arc) { const ph = d / r, rr = r + wr; ax = Math.sin(ph) * Math.cos(th) * rr; ay = Math.cos(ph) * rr; az = Math.sin(ph) * Math.sin(th) * rr; }
      else { const e = d - arc, rr = r + e * 0.25 + wr * 2; ax = Math.cos(th) * rr; az = Math.sin(th) * rr; ay = -Math.min(e, hang) * 0.95 - Math.max(0, e - hang) * 0.15; }
      const ph2 = (d / D) * 2.75, tuft = 1 + 0.32 * sm(0.82, 1, d / D), rb = r * 1.04 * tuft + wr;
      const bx = Math.sin(ph2) * Math.cos(th) * rb, by = Math.cos(ph2) * rb, bz = Math.sin(ph2) * Math.sin(th) * rb;
      const f = flut * Math.min(1, d / L) * Math.sin(t * 7 + d * 14 + th * 2) * 0.012;
      out[i * 3] = ax + (bx - ax) * wrap + f; out[i * 3 + 1] = ay + (by - ay) * wrap + f * 0.6; out[i * 3 + 2] = az + (bz - az) * wrap;
    }
  };
  // hanging from two corners (world points pL, pR), side length S, swaying; the result is in WORLD space (the mesh then sits at the origin)
  const hangW = (out, pL, pR, S, t, sway, inward, camRight = null) => {
    const across = new THREE.Vector3().subVectors(pR, pL), w = Math.max(0.05, across.length()); across.normalize();
    const fwd = new THREE.Vector3(-across.z, 0, across.x).normalize();   // horizontal, perpendicular to the held edge
    const cr = camRight ? V(camRight.x, 0, camRight.z).normalize() : null, cf = cr ? V(-cr.z, 0, cr.x) : null;
    for (let i = 0; i < cnt; i++) {
      const u = U[i * 3] + 0.5, v = 0.5 - U[i * 3 + 1];   // u 0..1 along the held edge, v 0 (held) .. 1 (bottom)
      const drop = v * S * 0.98, sag = Math.sin(u * Math.PI) * 0.06 * (1 - v * 0.5) * (w / S);
      const fold = 0.025 * Math.sin(u * 15 + v * 4 + t * 2.1) * (0.3 + v) + 0.018 * Math.sin(u * 31 - v * 9) * v;
      const sw = sway * Math.sin(t * 3.1 + v * 2.2) * v * v * 0.06, bunch = (u - 0.5) * (1 - 0.35 * v);   // corners gather toward the middle lower down
      let px = pL.x + across.x * w * (0.5 + bunch) + fwd.x * (fold + sw + inward * v * v * 0.25), pz = pL.z + across.z * w * (0.5 + bunch) + fwd.z * (fold + sw + inward * v * v * 0.25);
      if (cr) { const mx = (pL.x + pR.x) / 2, mz = (pL.z + pR.z) / 2, fan = (u - 0.5) * S * (0.35 + 0.5 * Math.sin(Math.min(1, v * 1.6) * Math.PI / 2));
        px = mx + cr.x * fan + cf.x * (fold * 1.6 + sw) + fwd.x * inward * v * v * 0.25; pz = mz + cr.z * fan + cf.z * (fold * 1.6 + sw) + fwd.z * inward * v * v * 0.25; }
      const py = pL.y + (pR.y - pL.y) * u - drop - sag + 0.02 * Math.sin(u * 9 + t) * v;
      out[i * 3] = px; out[i * 3 + 1] = py; out[i * 3 + 2] = pz;
    }
  };
  const _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _b = new THREE.Vector3();
  const hood = (out, c, r, L, rx, ry, hang, t, sh, flut = 0.3) => {
    _q.setFromEuler(_e.set(rx, ry, 0, 'YXZ')); const arc = r * Math.PI * 0.5;
    for (let i = 0; i < cnt; i++) {
      const u = U[i * 3] * 2, v = U[i * 3 + 1] * 2 - sh, d = Math.hypot(u, v) * L, th = Math.atan2(v, u);
      const wr = 0.01 * Math.sin(th * 7 + d * 22) * Math.min(1, d / L) * (r / 0.12), f = flut * Math.min(1, d / L) * Math.sin(t * 2.2 + d * 14 + th * 2) * 0.006;
      if (d < arc) { const ph = d / r, rr = r + wr; _p.set(Math.sin(ph) * Math.cos(th) * rr, Math.cos(ph) * rr, Math.sin(ph) * Math.sin(th) * rr).applyQuaternion(_q).add(c); }
      else { const e = d - arc; _b.set(Math.cos(th) * (r + wr), 0, Math.sin(th) * (r + wr)).applyQuaternion(_q); const o = V(_b.x, 0, _b.z).normalize();
        _p.copy(_b).add(c).addScaledVector(o, 0.012 + e * 0.16 + wr * 1.5).add(V(0, -Math.min(e, hang) - Math.max(0, e - hang) * 0.12, 0)); }
      out[i * 3] = _p.x + f; out[i * 3 + 1] = _p.y; out[i * 3 + 2] = _p.z + f * 0.5;
    }
  };
  const apply = (src) => { const pa = geo.attributes.position; pa.array.set(src); pa.needsUpdate = true; geo.computeVertexNormals(); };
  return { mesh, A, B, drape, hangW, hood, apply, blend: (k) => { const o = new Float32Array(cnt * 3); for (let i = 0; i < o.length; i++) o[i] = A[i] + (B[i] - A[i]) * k; return o; } };
}

// the gold paw medallion (the basket's badge and the washer's crest)
export function pawMedallion(goldM, r = 0.06) {
  const g = new THREE.Group();
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(r, r, r * 0.35, 40), goldM); disc.rotation.x = Math.PI / 2; g.add(disc);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(r * 0.98, r * 0.12, 10, 40), goldM); rim.position.z = r * 0.12; g.add(rim);
  const pawM = goldM.clone(); pawM.color = new THREE.Color(0xffe9a8); pawM.emissiveIntensity = (goldM.emissiveIntensity || 0.4) * 1.3;
  const pad = new THREE.Mesh(new THREE.SphereGeometry(r * 0.32, 18, 12), pawM); pad.scale.set(1.25, 1, 0.45); pad.position.set(0, -r * 0.16, r * 0.2); g.add(pad);
  for (const [x, y] of [[-0.42, 0.18], [-0.15, 0.42], [0.15, 0.42], [0.42, 0.18]]) { const t = new THREE.Mesh(new THREE.SphereGeometry(r * 0.13, 12, 10), pawM); t.scale.set(1, 1.2, 0.5); t.position.set(x * r, y * r, r * 0.2); g.add(t); }
  return g;
}

// the yellow "!" alert marks (references 01 / 02) as three little bars that pop round him
export function alertMarks() {
  const g = new THREE.Group(), m = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.3, 0.25), transparent: true });
  for (const a of [-0.55, 0, 0.55]) { const b = new THREE.Mesh(new RoundedBoxGeometry(0.018, 0.06, 0.01, 2, 0.006), m); b.position.set(Math.sin(a) * 0.09, Math.cos(a) * 0.09, 0); b.rotation.z = -a; g.add(b); }
  g.userData.m = m; return g;
}

export { keys as six2Keys, sm as six2Sm, clamp01 as six2Clamp, V as six2V, rnd as six2Rnd };

// ---------------------------------------------------------------- the staging and timeline (called from mountOpening3D in opening3d.js)
// ctx: the opening's own objects and helpers (scene, camera, env, room, washer, basket, g2, GIRL2, girl, hero, heroBody, heroExpr, six, vortex,
// laundry, splash, glowL, bub, fb, front, foam, rotateBoneWorld, aimBone, reachBones, blinkAt, bez, OPENING3D, SIX, onScene)
export function installSix2(ctx) {
  const { scene, camera, env, washer, basket, g2, GIRL2, hero, heroBody, heroExpr, six, vortex, splash, glowL, rotateBoneWorld, aimBone, reachBones, blinkAt, bez, OPENING3D } = ctx;
  const P = OPENING3D.porthole, S = SIX2, hk = OPENING3D.heroW / 0.34;
  { const hl = [P.x, OPENING3D.waterY + 0.1 * hk, P.z - 2.8]; if (S.cam[S.cam.length - 1][0] < 8.6) S.cam.push([8.45, [hl[0], hl[1] + 0.2 * hk, hl[2] + 0.78 * hk], [hl[0], hl[1] + 0.16 * hk, hl[2] - 2.1 * hk], 56], [8.75, [hl[0], hl[1] + 0.21 * hk, hl[2] + 0.8 * hk], [hl[0], hl[1] + 0.16 * hk, hl[2] - 2.1 * hk], 56], [9.15, [hl[0], hl[1] + 0.33 * hk, hl[2] + 1.17 * hk], [hl[0], hl[1] + 0.12 * hk, hl[2] - 2.1 * hk], 60]); }   // reference 05 held, then the game's Tap to Start framing for the hand-over
  ctx.room.visible = false; ctx.room.userData.six2Hidden = true;
  // the light: less flat sky fill (the references' rich colour), a warmer key
  applyRoomLight(scene);
  const R2 = buildRoom2(env); scene.add(R2.g);
  six.stand.visible = false;
  // the basket on the rug, its gold paw badge toward the camera
  const badge = pawMedallion(washer.goldM, 0.062); badge.name = 'six2BasketBadge'; scene.add(badge);
  // the blue towel and the yellow towel as cloth (the blue one is the six towel's own material)
  const blueM = six.cloth.material.clone(); blueM.map = terryTex('#86c2ff', '#4f8fe8', '#d6ecff'); blueM.map.wrapS = blueM.map.wrapT = THREE.RepeatWrapping; blueM.map.repeat.set(2, 2); blueM.color = new THREE.Color(0xffffff); blueM.emissive = new THREE.Color(0x2a5cc0); blueM.emissiveIntensity = 0.3;
  const yelM = blueM.clone(); yelM.map = terryTex('#ffd85a', '#e8b030', '#fff2b0'); yelM.map.wrapS = yelM.map.wrapT = THREE.RepeatWrapping; yelM.map.repeat.set(2, 2); yelM.emissive = new THREE.Color(0x8a6010);
  const blue = makeCloth(blueM), yel = makeCloth(yelM);
  const g12 = G12_ON ? { blueU: g12Grid(blue), yelU: g12Grid(yel) } : null;   // (seq7, lane girl12: the cloths' plane grids for the soft towel and the cradle)
  six.towel.visible = false;   // (the six towel is replaced by the cloths below; the six timeline never runs with six2)
  const bG = new THREE.Group(), yG = new THREE.Group(); bG.add(blue.mesh); yG.add(yel.mesh); scene.add(bG, yG); bG.name = 'six2BlueTowel'; yG.name = 'six2YellowTowel';
  const marks = alertMarks(); scene.add(marks);
  const T2 = installSix2Tunnel(ctx);   // the washer's look and scene 5's tunnel (opening_six2_tunnel.js)
  const W2 = installSix2Water(ctx);   // the water of scenes 3-5 (opening_six2_water.js)
  const O9 = OPEN9_ON ? installOpen9(ctx) : null;   // (open9: the 3D wash water, his tumble, the passage into the live game)
  if (O9) S.cam = O9.camKeys(S.cam);
  // the heap in the basket (tripo2's yellow, blue, pink towels): the blue heap towel is the cloth now; the pink one becomes lavender
  let heap = null;
  Promise.resolve(typeof window !== 'undefined' && window.__bwTripo2Ready).then(() => {
    const h = []; basket.traverse((o) => { if (o.name === 'heapTripo') h.push(o); });
    if (h.length >= 3) { h[1].visible = false; h[0].position.set(-0.05, 0.215, 0.1); h[0].scale.multiplyScalar(1.35); h[2].position.set(0.11, 0.2, 0.07); h[2].scale.multiplyScalar(1.3); h[2].traverse((o) => { if (o.isMesh) { o.material = o.material.clone(); o.material.color = new THREE.Color(0xc9a6ff); } }); heap = h; }
  });
  // the girl's measured legs (filled when her model has loaded)
  const legs = { ready: false };
  const measure = () => {
    const B = g2.B, root = g2.root; root.position.set(0, 0, 0); root.rotation.set(0, 0, 0); root.scale.setScalar(S.girl.scale);
    for (const b of Object.values(B)) b.quaternion.copy(b.userData.rest); root.updateMatrixWorld(true);
    const w = (b) => b.getWorldPosition(new THREE.Vector3());
    const hip = w(B.hips), tL = w(B.thighL), sL = w(B.shinL);
    legs.Lt = tL.distanceTo(sL); legs.kneeY0 = sL.y; legs.hipY0 = hip.y; legs.thighY0 = tL.y; legs.hipFwd = hip.z; legs.half = Math.abs(tL.x);
    legs.kr = 0.045 * S.girl.scale;   // the knee's radius above the floor
    for (const side of ['L', 'R']) { const sh = B['shin' + side], tail = new THREE.Object3D(); tail.name = 'six2ShinTail' + side; const p = w(sh).add(V(0, -legs.kneeY0 * 0.85, 0)); sh.attach(tail); tail.position.copy(sh.worldToLocal(p)); legs['tail' + side] = tail; }
    legs.ready = true; g2.stool.visible = false;
  };
  // ---- the girl's knee timeline: states (knee midpoint on the floor, yaw, sit) and the steps between them (one knee swings, the other stays planted)
  const st = (kx, kz, yaw, sit) => ({ kx, kz, yaw, sit });
  const G = G12_ON ? { ...S.girl, yaw2: G12N.yaw2 } : S.girl;   // (seq7: at the washer she faces the camera's side more, her face 3/4 to it)
  const S1 = st(G.k1[0], G.k1[1], G.yaw1, 0.55), S1u = st(G.k1[0], G.k1[1], G.yaw1 + 0.15, 0.1);
  const mid = st((G.k1[0] + G.k2[0]) / 2 + 0.02, (G.k1[1] + G.k2[1]) / 2, (G.yaw1 + G.yaw2) / 2 + 0.1, 0.08), S2 = st(G.k2[0], G.k2[1], G.yaw2, 0.08);
  const S2b = st(-0.29, 1.06, 0.45, 0.12);   // back at the basket (two knee steps) for the second armful
  const S3 = st(-0.66, 1.12, 1.0, 0.1);   // back, out of the door's sweep, to swing it shut
  // [t0, t1, from, to, swinging knee ('L' | 'R' | null = both planted)]
  const MOVES = [[0.25, 0.85, S1, S1u, null], [0.95, 1.35, S1u, mid, 'R'], [1.35, 1.75, mid, S2, 'L'], [2.65, 2.95, S2, { ...S2b, yaw: (S2.yaw + S2b.yaw) / 2 }, 'R'], [2.95, 3.25, { ...S2b, yaw: (S2.yaw + S2b.yaw) / 2 }, S2b, 'L'],
    [3.45, 3.7, S2b, { ...S2, yaw: S2.yaw - 0.3 }, 'L'], [3.7, 3.95, { ...S2, yaw: S2.yaw - 0.3 }, S2, 'R'], [5.0, 5.35, S2, { ...S3, kx: (S2.kx + S3.kx) / 2, kz: (S2.kz + S3.kz) / 2, yaw: 1.3 }, 'L'], [5.35, 5.7, { ...S3, kx: (S2.kx + S3.kx) / 2, kz: (S2.kz + S3.kz) / 2, yaw: 1.3 }, S3, 'R']];
  const lerpSt = (a, b, k) => ({ kx: a.kx + (b.kx - a.kx) * k, kz: a.kz + (b.kz - a.kz) * k, yaw: a.yaw + (b.yaw - a.yaw) * k, sit: a.sit + (b.sit - a.sit) * k });
  const fwdOf = (yaw) => V(Math.sin(yaw), 0, Math.cos(yaw)), latOf = (yaw) => V(Math.cos(yaw), 0, -Math.sin(yaw));   // her forward, her left (+X of the model)
  const kneeAt = (side, s) => { const sg = side === 'L' ? 1 : -1; return V(s.kx, 0, s.kz).addScaledVector(latOf(s.yaw), sg * legs.half * 1.15); };
  function girlState(t) {
    let cur = S1, knees = { L: kneeAt('L', S1), R: kneeAt('R', S1) }, lift = { L: 0, R: 0 };
    for (const [t0, t1, a, b, leg] of MOVES) {
      if (t <= t0) break;
      const k = sm(t0, t1, t); cur = lerpSt(a, b, k);
      for (const side of ['L', 'R']) { if (leg === side) { knees[side] = kneeAt(side, a).lerp(kneeAt(side, b), k); lift[side] = Math.sin(Math.PI * clamp01((t - t0) / (t1 - t0))) * 0.05; } else if (leg === null || t >= t1) knees[side] = kneeAt(side, leg === null ? cur : b); }
      if (t >= t1) { knees.L = kneeAt('L', b); knees.R = kneeAt('R', b); }
    }
    return { s: cur, knees, lift };
  }
  // the door: hinge on the LEFT (opening_tripo3.js mirrors the door with six2); open = S.door.open
  const doorEdge = () => { washer.door.updateMatrixWorld(true); return washer.door.localToWorld(V(washer.door.userData.edge || 0.78, 0, 0.03)); };   // its free edge (opening_tripo3.js sets userData.edge)
  // ---- the hero's path and the cloth
  const inDoor = V(P.x - 0.06, P.y + 0.04, P.z - 0.02), heroSit = O9 ? O9.sit.clone() : V(P.x + 0.03, OPENING3D.waterY + 0.1 * hk + 0.02, P.z - 0.36), heroLand = V(P.x, OPENING3D.waterY + 0.1 * hk, P.z - 2.8);
  const lieBlue = V(P.x - 0.02, OPENING3D.waterY + 0.02, P.z - 0.4), lieYel = V(P.x - 0.17, OPENING3D.waterY + 0.05, P.z - 0.3);
  let landed = false, scene0 = 0, irisDone = false;
  const camPos = new THREE.Vector3(), camTgt = new THREE.Vector3();
  const sparkWin = [4.45, 5.0];
  function pose(it, st0) {
    const [w0, w1, w2] = S.warp, sA = st0 < 0 ? -1 : st0 < w0 ? st0 : st0 < w1 ? w0 + (st0 - w0) * (w2 - w0) / (w1 - w0) : st0 - (w1 - w2),
      s = S.wash && sA > S.wash[0] ? (sA < S.wash[0] + S.wash[2] ? S.wash[0] + (sA - S.wash[0]) * S.wash[1] / S.wash[2] : sA - (S.wash[2] - S.wash[1])) : sA, t = Math.max(0, s);   // the story clock
    // ---- captions
    let sc = 1; for (const [t0, n] of S.scenes) if (s >= t0) sc = n; if (sc !== scene0) { scene0 = sc; if (ctx.onScene) ctx.onScene(sc); }
    // ---- the camera first (everything that faces the camera uses this frame's camera)
    const C = S.cam; camPos.fromArray(keys(s, C.map(([tt, c]) => [tt, c]))); camTgt.fromArray(keys(s, C.map(([tt, , g]) => [tt, g]))); camera.fov = keys(s, C.map(([tt, , , f]) => [tt, f]));
    if (s < 0) camPos.add(V(0.015 * Math.sin(it * 0.3), 0.01 * Math.sin(it * 0.4), 0));
    if (s > 6.37 && s < 6.6) camPos.y += 0.005 * Math.sin((s - 6.37) * 60) * (1 - sm(6.37, 6.6, s));   // the latch's thunk
    camera.position.copy(camPos); camera.lookAt(camTgt); camera.updateProjectionMatrix(); camera.updateMatrixWorld();
    if (O9) { O9.state(s, it); O9.cameraAt(s, camera, camPos, camTgt); }   // (open9: the water's state for this frame; the dive through the glass and down the passage)
    // the hero's eyes: the references' dark brown (his face is built on load in opening3d.js with blue irises)
    if (!irisDone && heroBody.children.length > 1) { irisDone = true; heroBody.traverse((o) => { if (o.isMesh && o.material && o.material.isMeshBasicMaterial && o.material.color.getHex() === 0x2f86e8) { o.material = o.material.clone(); o.material.color.setHex(0x3a1c0e); } }); }
    // ---- basket on the rug (badge to the camera; tripo2 hides the basket's own children when it loads, so the badge is re-shown here)
    badge.visible = true;
    const BS = S.basket; basket.position.set(BS.pos[0], 0.135 * BS.scale * 0.7, BS.pos[1]); basket.rotation.set(0, BS.yaw, 0); basket.scale.set(BS.scale * 1.18, BS.scale * 0.7, BS.scale * 1.1);
    { const ba = Math.atan2(camPos.x - BS.pos[0], camPos.z - BS.pos[1]) * 0.85; badge.position.set(BS.pos[0] + Math.sin(ba) * 0.275, 0.14, BS.pos[1] + Math.cos(ba) * 0.262); badge.rotation.set(-0.17, ba, 0, 'YXZ'); }
    R2.rug.position.set(BS.pos[0] + 0.05, 0.004, BS.pos[1] - 0.02);
    R2.shadows.basket.position.set(BS.pos[0], 0.008, BS.pos[1] + 0.02);
    basket.updateMatrixWorld(true);
    const rimC = V(0, 0.2, 0.02).applyMatrix4(basket.matrixWorld);   // the laundry's top in the basket (world)
    // ---- the door: shut while waiting; it swings open at START (with a bounce); she swings it shut in scene 4 (swing, stop, latch)
    const dOpen = S.door.open;
    let dr = 0;
    if (s < 0) dr = 0;
    else if (s < 5.55) dr = dOpen * sm(0.05, 0.6, s) + (s > 0.6 && s < 1.2 ? 0.06 * Math.sin((s - 0.6) * 18) * Math.exp(-(s - 0.6) * 6) : 0);
    else if (s < 6.05) dr = dOpen + (-1.55 - dOpen) * sm(5.55, 6.05, s);   // her hand on the edge
    else { const k = clamp01((s - 6.05) / 0.32); dr = -1.55 * (1 - k * k); if (s > 6.37) dr = -0.07 * Math.exp(-(s - 6.37) * 10) * Math.abs(Math.sin((s - 6.37) * 26)); }   // swings on, stops at the latch, a little bounce
    washer.door.rotation.y = dr;
    { const gm = washer.glass.material, k = s < 0 ? 1 : 1 - sm(0.0, 0.4, s); gm.opacity = 0.07 + 0.43 * k; gm.color.setRGB(0.85 - 0.25 * k, 0.9 - 0.45 * k, 1.0); }
    // ---- the girl
    const gs = girlState(t), s0 = gs.s, fwd = fwdOf(s0.yaw);
    const blink = blinkAt(it, 3.1, 0.4);
    if (g2.ready && !legs.ready) measure();
    const handsW = { near: null, far: null };
    // hand targets (world): [the hand toward the washer, the other]
    const bluePickL = rimC.clone().add(V(-0.1, 0.1, 0.06)), bluePickR = rimC.clone().add(V(0.1, 0.1, 0.06));
    const chestFront = (k = 0.32, up = 0.66) => V(s0.kx, up * G.scale, s0.kz).addScaledVector(fwd, k);
    let gripA, gripB;   // the two hands (screen-left hand, screen-right hand)
    const lat = latOf(s0.yaw);
    const hold = (c, w) => [c.clone().addScaledVector(lat, w), c.clone().addScaledVector(lat, -w)];
    const onTowelL = rimC.clone().add(V(-0.13, 0.12, 0.06)), onTowelTop = rimC.clone().add(V(0.0, 0.21, -0.02));
    if (s < 0) { const pat = 0.012 * Math.max(0, Math.sin(it * 2.6)); gripA = onTowelL.clone().add(V(0, pat, 0)); gripB = onTowelTop.clone().add(V(0, 0.006 * Math.sin(it * 1.7), 0)); }
    else if (s < 0.45) { const k = sm(0.0, 0.45, s); [gripA, gripB] = [onTowelL.clone().lerp(bluePickL, k), onTowelTop.clone().lerp(bluePickR, k)]; }
    else if (s < 0.95) { const k = sm(0.45, 0.95, s), c = rimC.clone().add(V(0, 0.12, 0.06)).lerp(chestFront(0.34, 0.47), k); [gripA, gripB] = hold(c, 0.13); }
    else if (s < 1.95) { [gripA, gripB] = hold(chestFront(0.34, 0.47 + 0.012 * Math.sin(s * 9)), 0.13); }
    else if (s < 2.55) { const k = sm(1.95, 2.45, s), c = chestFront(0.34, 0.47).lerp(inDoor.clone().add(V(0.02, 0.0, -0.02)), k); [gripA, gripB] = hold(c, 0.13 - 0.03 * k); }
    else if (s < 3.25) { const k = sm(2.6, 3.15, s), c = inDoor.clone().lerp(rimC.clone().add(V(0, 0.06, 0.04)), k); [gripA, gripB] = hold(c, 0.08 + 0.05 * k); }
    else if (s < 3.95) { const k = sm(3.3, 3.85, s), c = rimC.clone().add(V(0, 0.12, 0.04)).lerp(inDoor.clone().add(V(0.02, 0.0, 0.0)), k); [gripA, gripB] = hold(c, 0.13 - 0.05 * k); }
    else if (s < 5.5) { [gripA, gripB] = hold(chestFront(0.18, 0.4), 0.16); }
    else if (s < 6.1) { const e = doorEdge(); gripA = e.clone(); gripB = chestFront(0.15, 0.4).addScaledVector(lat, -0.16); }
    else { const k = sm(6.1, 6.6, s); [gripA, gripB] = hold(chestFront(0.18 + 0.1 * (1 - k), 0.4 + 0.15 * (1 - k)), 0.16); }
    // (seq7, lane girl12) the second armful: her hands come back to the basket, close on the yellow towel's sides round him, lift, carry him to the
    // door and push the towel in, then come back to her chest (no jump of the hand targets)
    const g12Carry = (q) => { const low = rimC.clone().add(V(0.015, -0.035, 0.0)), up = rimC.clone().add(V(0.01, 0.13, 0.05)), door = inDoor.clone().add(V(0.02, -0.03, 0.03)), push = inDoor.clone().add(V(0.03, -0.02, -0.07));
      if (q < 3.15) return inDoor.clone().lerp(low, sm(2.6, 3.12, q)); if (q < 3.35) return low.lerp(up, sm(3.15, 3.35, q)); if (q < 3.86) return up.lerp(door, sm(3.35, 3.84, q)); return door.lerp(push, sm(3.86, 3.95, q)); };
    if (g12 && s >= 2.55 && s < 4.4) {
      if (s < 3.95) [gripA, gripB] = hold(g12Carry(s), 0.08 + (G12N.hold - 0.08) * sm(2.6, 3.1, s));
      else [gripA, gripB] = hold(g12Carry(3.95).lerp(chestFront(0.18, 0.4), sm(3.95, 4.35, s)), G12N.hold + (0.16 - G12N.hold) * sm(3.95, 4.35, s));
    }
    if (g2.ready && legs.ready) {
      const B = g2.B, root = g2.root;
      for (const b of Object.values(B)) b.quaternion.copy(b.userData.rest);
      const a = s0.sit * 1.05, hipY = legs.kr + legs.Lt * Math.cos(a), hipOff = legs.Lt * Math.sin(a);
      root.scale.setScalar(G.scale); root.rotation.set(0, s0.yaw, 0);
      const breathe = 0.004 * Math.sin(it * 2.2);
      root.position.set(s0.kx - fwd.x * (hipOff + legs.hipFwd), hipY - legs.thighY0 + breathe, s0.kz - fwd.z * (hipOff + legs.hipFwd));
      root.updateMatrixWorld(true);
      // legs: thighs to the planted knees, shins back and up so the toes rest on the floor
      for (const side of ['L', 'R']) {
        const th = B['thigh' + side], sh = B['shin' + side], T = th.getWorldPosition(new THREE.Vector3());
        const K = gs.knees[side].clone(); K.y = legs.kr + gs.lift[side];
        aimBone(th, sh, K.sub(T));
        const sd = fwd.clone().multiplyScalar(-Math.cos(0.62)).add(V(0, Math.sin(0.62), 0)); aimBone(sh, legs['tail' + side], sd);
      }
      // body: lean, turn, breathing; the head looks at the washer (never at the basket's hero)
      const lean = keys(s, [[-1, 0.5], [0.0, 0.5], [0.3, 0.42], [0.9, 0.08], [1.95, 0.04], [2.4, -0.06], [2.6, 0.02], [3.1, 0.42], [3.3, 0.2], [3.85, 0.3], [4.2, 0.08], [5.6, 0.25], [6.1, 0.1]]);
      const lat2 = latOf(s0.yaw);
      rotateBoneWorld(B.spine, lat2, lean * 0.7 + 0.02 * Math.sin(it * 1.3));
      rotateBoneWorld(B.chest, lat2, lean * 0.35);
      rotateBoneWorld(B.chest, V(0, 1, 0), 0.03 * Math.sin(it * 0.9));
      if (g12) rotateBoneWorld(B.chest, V(0, 1, 0), G12N.chestTwist * sm(1.0, 1.6, s) * (1 - sm(4.9, 5.4, s)));   // (seq7: her chest turns to the door, her hips and face toward the camera's side)
      const toWasher = Math.atan2(P.x - s0.kx, P.z - s0.kz) - s0.yaw;   // the washer's bearing from her body
      const headYaw = keys(s, [[-1, -0.3], [0.0, -0.3], [1.0, 0.0], [2.6, 0.1], [2.9, -0.2], [3.3, 0.1], [5.5, 0.4], [6.2, 0.3]]);
      const headUp = keys(s, [[-1, 0.08], [0.0, 0.08], [0.4, 0.08], [1.0, 0.05], [2.6, 0.05], [3.0, -0.15], [3.4, 0.05]]);
      let yawH = (s < 0 ? -0.2 : 0) + headYaw + 0.06 * Math.sin(it * 0.6) + 0.0 * toWasher + (g12 ? keys(s, G12N.head) : 0), upH = headUp;
      if (g12 && G12N.gaze) {   // (session 8da775c4, seq7) SHE NEVER NOTICES HIM: her head on the washer's opening while she reaches back for the towel he is in
        const Z = G12N.gaze, tw = Math.atan2(Math.sin(toWasher), Math.cos(toWasher)), twist7 = G12N.chestTwist * sm(1.0, 1.6, s) * (1 - sm(4.9, 5.4, s));
        const look = Math.max(-Z.max, Math.min(Z.max, tw - twist7)), glance = s < 0 ? sm(0.3, 0.8, Math.sin(it * 0.55)) * Z.idle : 0;
        const k = Math.max(sm(Z.on[0], Z.on[1], s) * (1 - sm(Z.on[2], Z.on[3], s)), glance);
        yawH += (look - yawH) * k; upH += (Z.up * lean + 0.08) * k;
      }
      rotateBoneWorld(B.head, V(0, 1, 0), yawH);
      rotateBoneWorld(B.head, lat2, -upH * 0.8 + 0.03 * Math.sin(it * 0.8));
      rotateBoneWorld(B.head, fwd, 0.08 + 0.05 * Math.sin(it * 0.7));
      // arms: two-bone IK to the hand targets (the hand nearer each target takes it)
      const cw = B.chest.getWorldPosition(new THREE.Vector3());
      const hl = B.handL.getWorldPosition(new THREE.Vector3()), hr = B.handR.getWorldPosition(new THREE.Vector3());
      const right = V(1, 0, 0).applyQuaternion(camera.quaternion);   // screen right
      const lFirst = hl.dot(right) < hr.dot(right);   // her L hand is the screen-left one
      const [tL, tR] = lFirst ? [gripA, gripB] : [gripB, gripA];
      reachBones(B.upperarmL, B.forearmL, B.handL, tL, cw.clone().addScaledVector(latOf(s0.yaw), 0.5).add(V(0, -0.35, 0)).addScaledVector(fwd, -0.1));
      reachBones(B.upperarmR, B.forearmR, B.handR, tR, cw.clone().addScaledVector(latOf(s0.yaw), -0.5).add(V(0, -0.35, 0)).addScaledVector(fwd, -0.1));
      for (const l of g2.lids) { l.visible = blink > 0.04; l.scale.set(1.08, 0.04 + blink * 1.02, 0.5); }
      handsW.near = B.handL.getWorldPosition(new THREE.Vector3()); handsW.far = B.handR.getWorldPosition(new THREE.Vector3());
      const km = gs.knees.L.clone().add(gs.knees.R).multiplyScalar(0.5).addScaledVector(fwd, -0.12); R2.shadows.girl.position.set(km.x, 0.007, km.z); R2.shadows.girl.rotation.z = s0.yaw;
    }
    const hA = handsW.near && handsW.far ? (handsW.near.dot(V(1, 0, 0).applyQuaternion(camera.quaternion)) < handsW.far.dot(V(1, 0, 0).applyQuaternion(camera.quaternion)) ? [handsW.near, handsW.far] : [handsW.far, handsW.near]) : [gripA, gripB];
    // ---- the hero: under the blue towel in the basket (peeking); left in the yellow laundry when the blue towel is lifted ("!"); scooped inside the
    // yellow towel; tumbling into the drum; sitting in the drum (towel on his head); the water rises; carried into the tunnel
    let hp, scl = 0.56, surprise = 0; const rot = new THREE.Euler();
    const camYaw = Math.atan2(camera.position.x - rimC.x, camera.position.z - rimC.z);
    const duck = s < 0 ? 0 : 0.07 * sm(0.5, 0.7, s) * (1 - sm(1.7, 1.95, s)) - 0.06 * sm(1.95, 2.2, s) * (1 - sm(2.45, 2.65, s)) + 0.06 * sm(2.55, 2.75, s);   // ducks / peeks over the rim while her back is turned (reference 02) / hides
    const inBasket = rimC.clone().add(V(0.015, 0.05 - duck + 0.006 * Math.abs(Math.sin(it * 1.6)), 0.0));
    if (s < 2.95) { hp = inBasket; rot.set(0.05 * Math.sin(it * 0.9), camYaw + 0.12 * Math.sin(it * 0.5), 0.04 * Math.sin(it * 1.3)); surprise = sm(0.5, 0.65, s) * (1 - sm(1.6, 1.9, s)) + sm(2.5, 2.6, s); if (s > 2.7) hp.y -= sm(2.7, 2.95, s) * 0.05; }
    else if (s < 3.95) { hp = (gripA.clone().add(gripB).multiplyScalar(0.5)).add(V(0.012 * Math.sin(s * 11), -0.06 + 0.01 * Math.sin(s * 8.3), 0)); rot.set(0.12 * Math.sin(s * 6), camYaw - 0.3, 0.12 * Math.sin(s * 5)); surprise = 1; scl = 0.56; }   // wriggling, hidden in the yellow bundle
    else if (s < 4.75) { const k = sm(3.95, 4.75, s); const from = inDoor.clone().add(V(0, -0.02, 0)); hp = bez(from, V(P.x - 0.02, P.y + 0.2, P.z - 0.16), heroSit, k); rot.set(-k * Math.PI * 2, (1 - k) * 0.5, 0.25 * Math.sin(k * 6)); scl = 0.56 + (1 - 0.56) * k; surprise = 1; }
    else if (s < 7.7) { const wet = sm(6.6, 7.2, s); hp = heroSit.clone(); hp.y += 0.01 * Math.sin((s - 4.75) * 9) * Math.exp(-(s - 4.75) * 3) + wet * (0.03 + 0.015 * Math.sin((s - 6.6) * 6.5)); rot.set(0.04 * Math.sin(s * 3), 0.25 * Math.sin((s - 4.6) * 1.7) * (s < 6.6 ? 1 : 0.4), 0.05 * Math.sin(s * 2.4)); scl = 1; surprise = s < 6.7 ? 1 : 0; }
    else { const k = sm(7.65, 8.45, s), tn = sm(7.7, 8.2, s); hp = heroSit.clone().lerp(heroLand, k); hp.y += 0.012 * Math.sin((s - 7.7) * 6.5); rot.set(0.04 * Math.sin(s * 4), Math.PI * tn, 0.04 * Math.sin(s * 3.1)); scl = 1; }
    if (g12 && s >= 2.95 && s < 4.75) {   // (seq7, lane girl12) he stays VISIBLE: lifted sitting in the yellow towel (head and eyes out), then the tumble
      const toCam = (p) => Math.atan2(camPos.x - p.x, camPos.z - p.z);
      if (s < G12N.tumble.start) { const lift = sm(3.08, 3.3, s), base = inBasket.clone().add(V(0, -0.05, 0));
        hp = base.lerp(g12Carry(s).add(V(0, G12N.sitUp, 0)), lift).add(V(0.008 * Math.sin(s * 11) * lift, 0.006 * Math.sin(s * 8.3) * lift, 0));
        rot.set(0.1 * lift + 0.07 * Math.sin(s * 6) * lift, toCam(hp) + 0.14 * Math.sin(s * 4) * lift, 0.1 * Math.sin(s * 5) * lift, 'XYZ'); surprise = 1; scl = 0.56; }
      else { const T = g12Tumble(s, g12Carry(G12N.tumble.start).add(V(0, G12N.sitUp, 0)), V(P.x - 0.03, P.y + G12N.tumble.lift, P.z - 0.12), heroSit, camPos, bez);
        hp = T.hp; rot.copy(T.rot); scl = 0.56 + (O9 ? OPEN9.hero.scale - 0.56 : 0.44) * T.k; surprise = 1; }
    }
    let o9H = null;
    if (O9 && s >= 4.75) { o9H = O9.heroAt(s, it); hp = o9H.hp; rot.copy(o9H.rot); scl = o9H.scl; surprise = o9H.surprise; }   // (open9: afloat, rocking, rolling with the drum, down the passage)
    hero.position.copy(hp); hero.rotation.copy(rot); heroBody.scale.setScalar(scl);
    if (W2.hero) W2.hero(hero, s, it);   // (seq7, wash8) he bobs, rocks and rolls with the wash water
    heroExpr({ lid: (g12 && s >= 2.95 && s < 5.3) || (O9 && s >= O9.T.roll[0]) ? 0 : blinkAt(it, 2.6, 1.1), surprise, open: o9H ? o9H.open : 0.55 + 0.25 * Math.sin(it * 2) + (s > 4.0 && s < 5.4 ? 0.4 : 0) });
    if (O9) hero.visible = O9.heroOn(s);
    // the "!" marks: while he peeks (waiting) and when the towel is lifted off him
    const mk = s < 0 ? 0.6 + 0.4 * Math.max(0, Math.sin(it * 1.4)) : sm(0.55, 0.7, s) * (1 - sm(1.4, 1.6, s)) + (g12 ? sm(3.12, 3.22, s) * (1 - sm(3.6, 3.75, s)) : 0);   // (seq7: "!" again as he is lifted)
    marks.visible = mk > 0.02; marks.position.copy(hp).add(V(0.09, 0.115 * scl / 0.56, 0.05)); marks.quaternion.copy(camera.quaternion); marks.scale.setScalar(0.9 + 0.15 * Math.sin(it * 8)); marks.userData.m.opacity = mk;
    if (!landed && s >= 4.75) { landed = true; for (let i = 0; i < 60; i++) { const a = rnd() * Math.PI * 2, v = 0.3 + rnd() * 0.7; splash.emit(V(hp.x + Math.cos(a) * 0.12, OPENING3D.waterY + 0.02, hp.z + Math.sin(a) * 0.1), V(Math.cos(a) * v * 0.5, 0.6 + rnd() * 0.9, Math.sin(a) * v * 0.3), 0.5 + rnd() * 0.4); } vortex.WU.uHit.value.set(hp.x - P.x, 1, P.z - hp.z); }
    if (s < 0) landed = false;
    if (s > 4.75) vortex.WU.uHit.value.y = Math.max(0, 1 - (s - 4.75) * 0.8);
    // ---- the blue towel: draped over him (a hood) -> lifted by both hands (hanging cloth) -> pushed into the drum -> lying in the drum -> flipped onto his head
    const rB = OPENING3D.heroW * 0.5 * 0.62, camRight = V(1, 0, 0).applyQuaternion(camera.quaternion);
    const hoodAt = (out, c) => blue.hood(out, c, rB * 1.1, rB * 3.3, -0.74, camYaw + 0.18, rB * 1.7, it, 0.3);   // (front edge at his brow, flaps down past his cheeks, asymmetric)
    bG.visible = true; bG.position.set(0, 0, 0); bG.rotation.set(0, 0, 0); bG.scale.setScalar(1);
    const placeLocal = (src, pos, rx, ry, rz, k = 1) => { const m = new THREE.Matrix4().compose(pos, new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), V(k, k, k)); const o = new Float32Array(src.length); const v = new THREE.Vector3(); for (let i = 0; i < src.length; i += 3) { v.set(src[i], src[i + 1], src[i + 2]).applyMatrix4(m); o[i] = v.x; o[i + 1] = v.y; o[i + 2] = v.z; } return o; };
    const hoodPos = inBasket.clone().add(V(0, 0.012, -0.01)), hoodRot = [-0.32, camYaw, 0];
    if (s < 0.45) { hoodAt(blue.A, hoodPos); blue.apply(blue.A); }
    else if (s < 2.55) {
      hoodAt(blue.A, hoodPos); const A = blue.A;
      const pL = hA[0].clone(), pR = hA[1].clone();
      if (g12) g12Hang(g12.blueU, blue.B, pL, pR, 0.62, it, s < 1.95 ? 1 : 0.4, V(0.12, 0, -0.55).multiplyScalar(sm(1.95, 2.45, s)), camRight);   // (seq7: a soft towel in both hands)
      else blue.hangW(blue.B, pL, pR, 0.62, it, s < 1.95 ? 1 : 0.4, s > 1.95 ? sm(1.95, 2.45, s) * -0.6 : 0, camRight);
      const k = sm(0.45, 0.85, s); const o = new Float32Array(A.length); for (let i = 0; i < A.length; i++) o[i] = A[i] + (blue.B[i] - A[i]) * k; blue.apply(o);
    } else if (s < 4.75) {   // in the drum: let go at the door, it slides in and lies on the drum floor
      const k = sm(2.5, 2.9, s); blue.drape(blue.A, 0.08, 0.2, 0, 0.02, it, 0.2); const A = placeLocal(blue.A, lieBlue.clone().add(V(0, -0.06, 0)), 0, 0.3, 0, 1);
      if (g12) g12Hang(g12.blueU, blue.B, inDoor.clone().add(V(-0.1, 0, 0.02)), inDoor.clone().add(V(0.1, 0, 0.02)), 0.5, it, 0.4, V(0.12, 0, -0.55), camRight);
      else blue.hangW(blue.B, inDoor.clone().add(V(-0.1, 0, 0.02)), inDoor.clone().add(V(0.1, 0, 0.02)), 0.46, it, 0.4, -0.6, camRight);
      const o = new Float32Array(A.length); for (let i = 0; i < A.length; i++) o[i] = blue.B[i] + (A[i] - blue.B[i]) * k; blue.apply(o);
    } else if (O9 && s >= O9.towelFrom) {   // (open9) the rising water lifts it off his head: it floats beside him, then tumbles round with the wash
      const kk = scl; O9.towelAt(blue, 'blue', s, it, { pos: hp.clone().add(V(-0.03, rB / 0.62 * kk * 0.28, 0)), r: rB / 0.62 * kk * 0.95, L: rB / 0.62 * kk * 1.3, rx: -0.5, ry: rot.y, rz: rot.z - 0.3 });
    } else {   // flipped onto his head by his landing; the water lifts it off and carries it away in scene 4
      const off = sm(6.7, 7.3, s), kk = scl, flip = sm(4.75, 5.05, s);
      blue.drape(blue.A, rB / 0.62 * kk * 0.95, rB / 0.62 * kk * 1.3, 0, rB / 0.62 * kk * (0.35 + off * 0.5), it, 0.6 + off);
      const hat = placeLocal(blue.A, hp.clone().add(V(-0.03, rB / 0.62 * kk * 0.28 + off * 0.12, -off * 0.5)), -0.5 - off * 0.8 - (1 - flip) * 2.5, rot.y, rot.z - 0.3 - off * 0.5, 1 - off * 0.7);
      blue.apply(hat); bG.visible = s < 7.5;
    }
    // ---- the yellow towel: in the basket heap until she scoops it (with him inside: a bundle), pushed in, unrolling beside him in the drum
    yG.visible = s >= (g12 ? 3.08 : 2.9) && (s < 7.5 || !!O9);
    if (heap) heap[0].visible = s < (g12 ? 3.08 : 2.9);
    if (O9 && yG.visible && s >= O9.towelFrom) {   // (open9) afloat beside him, then tumbling round with the wash
      O9.towelAt(yel, 'yellow', s, it, { pos: lieYel.clone(), r: 0.07, L: 0.21, rx: 0.8, ry: 0.6, rz: 0 });
    } else if (g12 && yG.visible) {   // (seq7, lane girl12) a soft cradle round his lower half while she carries him; it opens as he slips out and falls in beside him
      const R = OPENING3D.heroW * 0.5 * 0.56, T0 = G12N.tumble.start;
      if (s < T0) g12Cradle(g12.yelU, yel.B, hp.clone(), R, R * 1.8, sm(3.08, 3.3, s), 0.3, Math.atan2(camPos.x - hp.x, camPos.z - hp.z), it, 1, 0);
      else { const k = sm(T0, 4.6, s), c = bez(g12Carry(T0).add(V(0, G12N.sitUp, 0)), V(P.x - 0.12, P.y + 0.04, P.z - 0.1), lieYel, k);
        g12Cradle(g12.yelU, yel.B, c, R * (1 - 0.25 * k), R * 1.8, 1 - 0.6 * k, 0.3 + 0.5 * k, Math.atan2(camPos.x - c.x, camPos.z - c.z) + 0.6 * k, it, 0.6, sm(T0 - 0.02, T0 + 0.12, s)); }
      yel.apply(yel.B);
    } else if (yG.visible) {
      if (s < 3.95) { yel.drape(yel.A, rB * 1.05, rB * 1.6, sm(2.9, 3.2, s), rB * 0.5, it, 1.0); yel.apply(placeLocal(yel.A, hp.clone().add(V(0, 0.01, 0)), 0.2, camYaw, 0.1 * Math.sin(s * 5))); }
      else { const k = sm(3.95, 4.6, s), p = bez(inDoor, V(P.x - 0.1, P.y + 0.12, P.z - 0.1), lieYel, k);
        yel.drape(yel.A, rB * (1.05 - 0.5 * k), rB * 1.6, 1 - k, rB * (0.5 - 0.3 * k), it, 0.6); yel.apply(placeLocal(yel.A, p, 0.3 * (1 - k), 0.4 + k, 0.2 - 0.4 * k, 1)); }
    }
    // ---- the washer: lights in sequence once the door has latched; the water floods the drum, rises round him, swirls; then flows into the tunnel
    const on = (i) => sm(6.55 + i * 0.16, 6.75 + i * 0.16, s);
    six.lights6.forEach((l, i) => l.material.color.copy(l.userData.c).multiplyScalar(0.3 + on(i) * (1.0 + 0.3 * Math.sin(it * 5 + i * 2))));
    six.dial.rotation.y = on(0) * Math.max(0, s - 6.55) * 3;
    const lit = on(2);
    glowL.intensity = 2.0 + lit * 4.0 + 0.6 * Math.sin(it * 2.0);
    vortex.U.uTime.value = it; vortex.U.uGlow.value = 0.55 + 0.45 * lit; vortex.U.uFlow.value = s > 0 ? Math.max(0, s - 6.6) * lit * 1.8 + sm(7.7, 9.2, s) * 6 : 0;
    T2.update(s, it); W2.update(s, it, { hero: hp, heroSit, heroLand, lit });
    const inDrum = camera.position.z < P.z - 0.05;
    R2.g.visible = washer.g.visible = basket.visible = badge.visible = !inDrum;
    if (g2.ready) { g2.root.visible = !inDrum; g2.stool.visible = false; }
    ctx.girl.root.visible = false;
    ctx.bubbles.visible = !inDrum; ctx.front.visible = false; ctx.foam.visible = !inDrum && s > 4.0 && !(O9 && s > 6.4);
    marks.visible = marks.visible && !inDrum;
    if (O9) O9.update(s, it, { hero: hp });   // (last: inside the passage only the water, him and the light are drawn; the live game shows through its end)
  }
  if (typeof window !== 'undefined') window.__bwSix2dbg = { g2, legs, basket, hero, heroBody, camera, scene, R2, blue, yel, washer };   // (for the live DevTools checks)
  return { pose, sparkWin, room2: R2 };
}
