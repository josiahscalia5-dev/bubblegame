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
  // camera keys in REAL seconds [t, position, target, vertical fov]; after LAND the opening's own keys (from story 4.9) continue
  cam: [
    [-1, [0.002, 0.5, 4.116], [-0.349, 0.458, 0.555], 41.2],
    [0.0, [0.002, 0.5, 4.116], [-0.349, 0.458, 0.555], 41.2],
    [1.8, [0.05, 0.5, 3.92], [-0.33, 0.44, 0.75], 40],
    [3.4, [0.25, 0.58, 3.7], [-0.12, 0.5, 0.8], 41],
    [5.0, [0.6, 0.64, 3.25], [0.02, 0.55, 0.5], 42],
    [6.1, [0.82, 0.68, 2.45], [0.08, 0.56, 0.42], 44],
    [7.0, [0.78, 0.78, 1.95], [0.3, 0.58, 0.0], 46],
    [7.4, [0.48, 0.77, 1.5], [0.32, 0.57, -0.2], 48],
  ],
};
export const storyOf = (r) => (r < 0 ? -1 : r < G3.LAND ? r * 4.75 / G3.LAND : r - (G3.LAND - 4.75));
const api = { G3, ready: false, t: null, dur: 0, errors: [] };
if (G3_ON && typeof window !== 'undefined') window.__bwGirl3 = api;

// the opening's camera keys with hers in front (story time)
export function g3CamKeys(cam) { return G3.cam.map(([t, p, g, f]) => [t < 0 ? -1 : storyOf(t), p, g, f]).concat(cam.filter(([t]) => t >= 4.9)); }

export function installGirl3({ scene, g2 }) {
  if (!G3_ON) return null;
  const loader = new GLTFLoader(); loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(G3.file, (gl) => {
    const root = new THREE.Group(); root.name = 'girl3'; root.add(gl.scene); scene.add(root);
    let mesh = null; const B = {}; gl.scene.traverse((o) => { if (o.isSkinnedMesh) { mesh = o; o.frustumCulled = false; } if (o.isBone) B[o.name] = o; });
    const clip = gl.animations.find((a) => a.name === G3.clip) || gl.animations[0];
    if (!mesh || !clip) { api.errors.push(`girl3: ${mesh ? '' : 'no skinned mesh '}${clip ? '' : 'no clip'}`); return; }
    const mixer = new THREE.AnimationMixer(gl.scene), action = mixer.clipAction(clip); action.play();
    Object.assign(api, { ready: true, root, mesh, B, mixer, action, clip: clip.name, dur: clip.duration, tracks: clip.tracks.length, bones: mesh.skeleton.bones.length, shared: false });
    api.share = () => { if (g2.ready && !api.shared) { let m = null; g2.root.traverse((o) => { if (o.isSkinnedMesh && !m) m = o.material; }); if (m) { mesh.material = m; api.shared = true; } } };
    api.share();
  }, undefined, (e) => api.errors.push('girl3 load: ' + (e && e.message)));
  return api;
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
  const k1 = S.girl.k1, root = api.root;
  root.position.set(k1[0], 0, k1[1]); root.rotation.set(0, S.girl.yaw1, 0); root.scale.setScalar(S.girl.scale);
  root.visible = !inDrum;
  if (g2.ready) g2.root.visible = false;
  const t = api.t != null ? api.t : Math.max(0, r);
  api.mixer.setTime(Math.min(api.dur - 1e-4, t));
  root.updateMatrixWorld(true);
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
  const bundle = (out, c) => { blue.drape(out, rB * 1.12, rB * 1.75, 1, rB * 0.42, it, 0.8); return placeLocal(out, c, 0.18, yawF, 0.07 * Math.sin(r * 4.1)); };
  let hp = hero.position.clone(), scl = 0.56; const rot = new THREE.Euler().copy(hero.rotation);
  if (r < G3.grip[0]) { hoodAt(blue.A, hoodPos); blue.apply(blue.A); }
  else if (!rel) {
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
