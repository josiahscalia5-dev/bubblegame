// girl3 (10 November 2026, session b57cc1e7): the user's laundry beat animated with Blender on her own skeleton. A CANDIDATE behind the switch
// `girl3` (with six + six2). Without it the opening is exactly the previous build.
//   - her Blender-prepared model girl_v3 (WebDemo/tools/blender/prepare_girl_v3.py: T-pose rest, ankles and toes, limb skin weights; her mesh, UVs
//     and textures unchanged) playing ONE baked skeletal clip, girl3_laundry (tools/blender/animate_laundry.py: IK hands and feet with elbow / knee
//     poles at the game's real basket, door and floor positions, keyed hips and spine, a head gaze target): she kneels at the basket, grips the blue
//     towel he hides under, lifts the bundle, rises while turning, walks to the washer, pushes the bundle in through the porthole, lets go and turns
//     back to the basket. She never looks at him.
//   - the towel and him are animated here from her ACTUAL hand bones each frame: the towel hood over him in the basket -> gathered between her hands
//     (he is inside the bundle, hidden) -> carried -> pushed in; at the release he tumbles out of it into the drum with the towel round him, landing
//     on the opening's own seat at story 4.75 s, so everything after (the door shutting, the wash, the tunnel, Screen 6) is unchanged.
//   - the story clock is stretched for her: real 0..LAND s = story 0..4.75 s (the hand-over and the end move back by LAND - 4.75 s); the camera keys
//     before story 4.9 are hers; the yellow towel stays in the basket; the "!" marks stay off (he is hidden).
// She wears the current girl's in-game material (the same textures and light). window.__bwGirl3: { ready, t (clip seconds; null = the real clock) }.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const G3_ON = LIST.includes('six') && LIST.includes('six2') && LIST.includes('girl3');

export const G3 = {
  file: 'models/opening/girl_v3_laundry.glb', clip: 'girl3_laundry',
  LAND: 7.4,                         // (real s) he lands on the drum seat = story 4.75 s
  grip: [1.35, 1.9], release: 6.45,  // (real s) her hands close on the towel; she lets go at the door
  // her blinks (real s) and her eyelids: skin caps on her head bone over her painted eyes (found on her mesh at load; eyes = fallback model
  // coordinates), closing from both edges to a line
  blinks: [0.55, 2.05, 3.3, 4.95, 6.95, 8.6, 9.7], eyes: [[-0.078, 0.756], [0.034, 0.777]], lidR: 0.034, roll: 0.0, skin: 0xeea078,
  // camera keys in REAL seconds [t, position, target, vertical fov]; after LAND the opening's own keys (from story 4.9) continue
  cam: [
    [-1, [0.002, 0.5, 4.116], [-0.349, 0.458, 0.555], 41.2],
    [0.0, [0.002, 0.5, 4.116], [-0.349, 0.458, 0.555], 41.2],
    [1.8, [0.05, 0.5, 3.92], [-0.33, 0.44, 0.75], 40],
    [3.4, [0.25, 0.58, 3.7], [-0.12, 0.5, 0.8], 41],
    [5.0, [0.6, 0.64, 3.25], [0.02, 0.55, 0.5], 42],
    [6.1, [0.82, 0.68, 2.45], [0.08, 0.56, 0.42], 44],
    [7.0, [1.12, 0.74, 1.8], [0.36, 0.58, 0.02], 40],
    [7.4, [0.92, 0.74, 1.38], [0.36, 0.57, -0.16], 42],
  ],
};
export const storyOf = (r) => (r < 0 ? -1 : r < G3.LAND ? r * 4.75 / G3.LAND : r - (G3.LAND - 4.75));
const api = { G3, ready: false, t: null, dur: 0, errors: [], blink: null };
if (G3_ON && typeof window !== 'undefined') { if (window.__bwGirl3Init) Object.assign(G3, window.__bwGirl3Init); window.__bwGirl3 = api; }

// the opening's camera keys with hers in front (story time)
export function g3CamKeys(cam) { return G3.cam.map(([t, p, g, f]) => [t < 0 ? -1 : storyOf(t), p, g, f]).concat(cam.filter(([t]) => t >= 4.9)); }

// his face in the opening, as in the approved references (01 hiding, 03 "Oops", 04 the wash begins): the eyes are mostly a large dark-brown iris
// with a big highlight upper left and a small one lower right (the build in opening3d.js shows a small iris inside a large white, which reads as
// googly / cross-eyed); the surprised mouth is an open smile, not a small round O. His own eye meshes are resized in place (they stay on his body).
function approvedFace(heroBody) {
  let n = 0;
  heroBody.traverse((g) => {
    if (!g.isGroup || g.children.length < 5 || g.userData.g3face) return;
    const [sc, ir, pu, hl] = g.children; if (!(sc.isMesh && ir.isMesh && pu.isMesh && hl.isMesh) || !sc.geometry.parameters || Math.abs(sc.geometry.parameters.radius - 0.042) > 1e-4) return;
    g.userData.g3face = true; n++;
    ir.scale.set(1.3, 1.36, 0.55); ir.position.z = 0.019; ir.material = ir.material.clone(); ir.material.color.setHex(0x3e1d0c);
    pu.scale.set(1.25, 1.3, 0.45); pu.position.z = 0.03; pu.material = pu.material.clone(); pu.material.color.setHex(0x0b0503);
    hl.scale.setScalar(1.55); hl.position.set(-0.012, 0.016, 0.04);
    const h2 = hl.clone(); h2.scale.setScalar(0.75); h2.position.set(0.014, -0.012, 0.039); g.add(h2);
  });
  heroBody.traverse((o) => { if (o.isMesh && o.geometry.parameters && Math.abs((o.geometry.parameters.radius || 0) - 0.022) < 1e-4 && o.material.color && o.material.color.getHex() === 0x8a1236) o.userData.g3O = true; });
  return n;
}

export function installGirl3({ scene, g2 }) {
  if (!G3_ON) return null;
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(G3.file, (gl) => {
    const root = new THREE.Group(); root.name = 'girl3'; root.add(gl.scene); scene.add(root);
    let mesh = null; const B = {}; gl.scene.traverse((o) => { if (o.isSkinnedMesh) { mesh = o; o.frustumCulled = false; } if (o.isBone) B[o.name] = o; });
    const clip = gl.animations.find((a) => a.name === G3.clip) || gl.animations[0];
    if (!mesh || !clip) { api.errors.push(`girl3: ${mesh ? '' : 'no skinned mesh '}${clip ? '' : 'no clip'}`); return; }
    const mixer = new THREE.AnimationMixer(gl.scene), action = mixer.clipAction(clip); action.play();
    // eyelids: her painted eyes found on her own mesh in her rest pose (the dark pupil / iris / lash texels on the front of her face, in two
    // clusters), a skin cap on her head bone over each, sized to the eye
    root.updateMatrixWorld(true);
    const eyes = findEyes(mesh) || G3.eyes.map(([x, y]) => ({ c: new THREE.Vector3(x, y, 0.19), w: G3.lidR, h: G3.lidR }));
    const lidM = new THREE.MeshStandardMaterial({ color: G3.skin, roughness: 0.75, emissive: 0x3a2a40, emissiveIntensity: 0.3 });
    const lids = eyes.map((e) => {
      const lid = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), lidM); lid.name = 'girl3Lid';
      lid.position.copy(e.c); lid.rotation.set(0, 0, G3.roll); lid.userData.wh = [e.w, e.h]; root.add(lid); B.head.attach(lid); lid.visible = false; return lid;
    });
    api.eyes = eyes.map((e) => ({ c: e.c.toArray().map((x) => +x.toFixed(4)), w: +e.w.toFixed(4), h: +e.h.toFixed(4), n: e.n }));
    Object.assign(api, { ready: true, root, mesh, B, mixer, action, lids, clip: clip.name, dur: clip.duration, tracks: clip.tracks.length, bones: mesh.skeleton.bones.length, shared: false });
    api.share = () => { if (g2.ready && !api.shared) { let m = null; g2.root.traverse((o) => { if (o.isSkinnedMesh && !m) m = o.material; }); if (m) { mesh.material = m; api.shared = true; } } };
    api.share();
  }, undefined, (e) => api.errors.push('girl3 load: ' + (e && e.message)));
  return api;
}

// her painted eyes on her mesh (rest pose, model space): the dark texels of the front of her face between her cheeks and her brows, two clusters
function findEyes(mesh) {
  const map = mesh.material && mesh.material.map, img = map && map.image; if (!img) return null;
  const cv = document.createElement('canvas'); cv.width = img.width; cv.height = img.height; const c = cv.getContext('2d'); c.drawImage(img, 0, 0);
  const D = c.getImageData(0, 0, cv.width, cv.height).data, W = cv.width, Hh = cv.height;
  const pos = mesh.geometry.attributes.position, uv = mesh.geometry.attributes.uv, v = new THREE.Vector3(), pts = [];
  mesh.updateMatrixWorld(true);
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i); mesh.applyBoneTransform(i, v); v.applyMatrix4(mesh.matrixWorld);
    if (v.y < 0.725 || v.y > 0.795 || v.z < 0.12 || Math.abs(v.x) > 0.115) continue;
    const px = Math.min(W - 1, Math.max(0, Math.floor(uv.getX(i) * W))), py = Math.min(Hh - 1, Math.max(0, Math.floor(uv.getY(i) * Hh))), k = (py * W + px) * 4;
    if (Math.max(D[k], D[k + 1], D[k + 2]) < 62 && D[k] - D[k + 2] < 32) pts.push(v.clone());   // (near-black pupils and lashes; not the brown curls by her temples)
  }
  if (pts.length < 8) return null;
  let a = pts.reduce((m, p) => (p.x < m.x ? p : m)).clone(), b = pts.reduce((m, p) => (p.x > m.x ? p : m)).clone();
  for (let it = 0; it < 10; it++) {   // two-means on x, y
    const A = [], Bs = []; for (const p of pts) ((p.x - a.x) ** 2 + (p.y - a.y) ** 2 < (p.x - b.x) ** 2 + (p.y - b.y) ** 2 ? A : Bs).push(p);
    const mean = (L) => L.reduce((m, p) => m.add(p), new THREE.Vector3()).multiplyScalar(1 / Math.max(1, L.length)); if (!A.length || !Bs.length) return null; a = mean(A); b = mean(Bs);
    if (it === 9) return [A, Bs].map((L) => { const m = mean(L), sx = Math.max(...L.map((p) => Math.abs(p.x - m.x))), sy = Math.max(...L.map((p) => Math.abs(p.y - m.y))), zf = Math.max(...L.map((p) => p.z));
      return { c: new THREE.Vector3(m.x - Math.sign(m.x) * sx * 0.22, m.y - sy * 0.3, zf - Math.max(sx, sy) * 0.45), w: Math.max(0.02, sx * 1.05), h: Math.max(0.018, sy * 1.15), n: L.length }; });   // (the black lash line pulls the centroid up)
  }
  return null;
}

const V = (x, y, z) => new THREE.Vector3(x, y, z), sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const bez = (a, c, b, k) => a.clone().multiplyScalar((1 - k) * (1 - k)).addScaledVector(c, 2 * k * (1 - k)).addScaledVector(b, k * k);
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
let relPos = null;   // (where he was when she let go)

// every frame, last in the opening's pose(): her clip at the real clock, then the towel, him, the yellow towel and the marks
export function updateGirl3(r, s, it, H) {
  if (!G3_ON || !api.ready) return;
  const { g2, S, inDrum, hero, heroBody, blue, yG, heap, marks, P, heroSit, placeLocal, hoodAt, hoodPos, rB, camRight, camYaw } = H;
  if (!api.shared) api.share();
  if (!api.face && heroBody.children.length > 1) { api.face = approvedFace(heroBody); heroBody.traverse((o) => { if (o.userData.g3O) api.Omouth = o; }); }
  if (api.Omouth) api.Omouth.scale.set(1.45, 1.05, 0.35);   // (the surprised mouth: a wide open smile)
  const k1 = S.girl.k1, root = api.root;
  root.position.set(k1[0], 0, k1[1]); root.rotation.set(0, S.girl.yaw1, 0); root.scale.setScalar(S.girl.scale);
  root.visible = !inDrum;
  if (g2.ready) g2.root.visible = false;
  const t = api.t != null ? api.t : Math.max(0, r);
  api.mixer.setTime(Math.min(api.dur - 1e-4, t));
  root.updateMatrixWorld(true);
  { let b = api.blink != null ? api.blink : 0; if (api.blink == null) for (const t0 of G3.blinks) { const d = r - t0; if (d > 0 && d < 0.17) b = Math.max(b, d < 0.06 ? d / 0.06 : d < 0.08 ? 1 : 1 - (d - 0.08) / 0.09); }
    for (const l of api.lids) { const [w, h] = l.userData.wh; l.visible = b > 0.04; l.scale.set(w * 1.05, (0.04 + b * 1.02) * h * 0.72, Math.min(w, h) * 0.5);   /* (the cluster's extent includes brow and lash texels: the lid is sized to the eye, measured on a close-up) */ } }
  if (yG) yG.visible = false; if (heap && heap[0]) heap[0].visible = true; if (marks) marks.visible = false;   // (the yellow towel stays in the basket; he is hidden)
  if (s >= 4.75 || api.t != null && api.t >= G3.LAND) return;   // (from his landing on, the opening's own staging)
  // her grip points: a little beyond each wrist along the forearm; her front from her shoulders
  const B = api.B, grip = (side) => { const w = B[`hand${side}`].getWorldPosition(new THREE.Vector3()), e = B[`forearm${side}`].getWorldPosition(_a); return w.clone().add(w.clone().sub(e).normalize().multiplyScalar(0.045)); };
  const pL = grip('L'), pR = grip('R'), mid = pL.clone().add(pR).multiplyScalar(0.5);
  const sl = B.upper_armL.getWorldPosition(_b), sr = B.upper_armR.getWorldPosition(_c), front = sl.clone().sub(sr).cross(V(0, 1, 0)).normalize();
  const kG = sm(G3.grip[0], G3.grip[1], r), rel = r >= G3.release;
  // ---- him and the towel: under the hood in the basket (the opening's own place) -> her hands close round the towel and it wraps him into a
  // bundle centred between her hands (he is fully inside, hidden) -> carried -> at the release he tumbles out into the drum, the towel round him
  const yawF = Math.atan2(front.x, front.z);
  const bundle = (out, c) => { blue.drape(out, rB * 1.12, rB * 2.3, 0.92, rB * 0.85, it, 1.2) /* (wrapped round him, the corners hanging) */; return placeLocal(out, c, 0.18, yawF, 0.07 * Math.sin(r * 4.1)); };
  let hp = hero.position.clone(), scl = 0.56; const rot = new THREE.Euler().copy(hero.rotation);
  if (r < G3.grip[0]) {   // he sees her hands coming and ducks deeper under the towel (the hood stays: she sees only laundry)
    const duck = sm(0.75, 1.15, r); hp.y -= 0.05 * duck; rot.x += 0.25 * duck; relPos = null;
    hoodAt(blue.A, hoodPos); blue.apply(blue.A);
  } else if (!rel) {
    hp = hp.lerp(mid.clone().add(V(0, -0.012, 0)), kG); rot.set(0.08 * Math.sin(r * 6) * kG, rot.y + (camYaw - 0.3 - rot.y) * kG, 0.08 * Math.sin(r * 5) * kG); relPos = hp.clone();
    hoodAt(blue.A, hp.clone().add(V(0, 0.012, -0.01))); const W = bundle(blue.B, hp), o = new Float32Array(W.length);
    for (let i = 0; i < o.length; i++) o[i] = blue.A[i] + (W[i] - blue.A[i]) * kG; blue.apply(o);
  } else {
    const k = sm(G3.release, G3.LAND, r), from = relPos || mid;
    hp = bez(from, V(P.x - 0.02, P.y + 0.16, P.z - 0.12), heroSit, k); rot.set(-k * Math.PI * 2, (1 - k) * 0.5, 0.25 * Math.sin(k * 6)); scl = 0.56 + 0.44 * k;
    // the towel goes in with him, round him like a cloak: the opening's own "hat" before it flips onto his head at 4.75 s
    const kk = scl; blue.drape(blue.A, rB / 0.62 * kk * 0.95, rB / 0.62 * kk * 1.3, 0, rB / 0.62 * kk * 0.35, it, 0.6);
    const hat = placeLocal(blue.A, hp.clone().add(V(-0.03, rB / 0.62 * kk * 0.28, 0)), -0.5 - 2.5, rot.y, rot.z - 0.3, 1);
    const W = bundle(blue.B, hp), kb = sm(G3.release, G3.release + 0.35, r), o = new Float32Array(hat.length);   // (the bundle opens as he slips out)
    for (let i = 0; i < o.length; i++) o[i] = W[i] + (hat[i] - W[i]) * kb; blue.apply(o);
  }
  hero.position.copy(hp); hero.rotation.copy(rot); heroBody.scale.setScalar(scl);
}
