// tripo3 (9 November 2026, session 6ddc157f; the user's new Tripo models of 9 November, Design/TripoDeliveries/2026-11-09_New_Models_from_user/):
// OPT-IN on top of the six-scene opening, `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3`. Nothing changes without it.
// No Tripo credits: the user's OWN models, each decimated in Blender from ~1.9M triangles, meshopt-compressed (glTF Transform) and validated:
//   - girl: "02_Girl_Character" (curly brown hair in a high ponytail with a pink bow, pink hoodie, purple backpack and shorts: the storyboard's
//     girl), 57k triangles, rigged by rig/rig_girl_v2.py with the SAME bone names as models/opening/girl_rigged.glb, so opening3d.js drives her
//     unchanged (two-bone IK, spine, chest, head, eyelid caps over her painted eyes); she still looks only at the washer, never at him;
//   - washer: "HJ 748" (the same mesh and UVs as "01_Pink_Gold_Machinery", with sharper 1024 px ORM and normal maps): the pink-and-gold washer
//     with the paw medallion, gold pipes, glass jars and control lights; its built-in open door and its drum are removed (Blender), so the
//     game's live drum tunnel, water and the pink character show through the porthole as before; scaled to the porthole the opening's
//     cameras are built round (OPENING3D.porthole), its depth compressed so it stays clear of the girl;
//   - door: "OIT 748" (a pink riveted porthole door with a gold bezel, lilac glass, gold hinge and latch), hung on the opening's own door
//     pivot, so the existing timeline swings it shut in scene 4;
//   - basket: "03_Purple_Laundry_Basket": loaded only with `,basket3` (it has no handles and one damaged side; see the evidence README).
// LOOKS ONLY: the code washer's meshes are hidden inside the same groups the timeline moves (the door pivot, the control lights that switch on
// at 4.05 s); the timeline, camera, IK and random numbers are untouched. Report: window.__bwTripo3 (ready, parts, errors).
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const TRIPO3_ON = LIST.includes('six') && LIST.includes('tripo3');
export const TRIPO3 = {
  // merged into GIRL2 (opening3d.js): eyes measured on an orthographic front render of the rigged model (height 1, facing +Z)
  girl: { file: 'models/opening/girl_v2_rigged.glb', eyes: [[-0.06, 0.767], [0.057, 0.767]], eyeR: 0.028, skin: 0xf3b48f },
  // the washer model: porthole centre at its origin, front plane z = 0, opening radius 0.176, bezel (gold ring) radius 0.265 (model units)
  washer: { file: 'models/opening/washer_tripo_hj748.glb', scale: 1.45, depth: 0.6, bezel: 0.265,
    lights: [[0.302, -0.052], [0.302, -0.133], [0.29, 0.04]], lightR: 0.03, lightZ: 0.045,   // its own buttons: cyan, yellow, lavender
    plate: [-0.255, -0.01, 0.125, 0.275] },   // the gold latch plate over the old door's hinge cut: centre x, y, width, height (model units)
  // the door model: ring centre at its origin, inner face to +Z, hinge on +X; ring radius 0.488, hinge pin x 0.499, hinge depth -0.079
  // (its pink outer ring recoloured gold, storyboard panel 4: rig/door_gold.py; `,doorpink` = the model's own pink ring)
  door: { file: LIST.includes('doorpink') ? 'models/opening/door_tripo_oit748.glb' : 'models/opening/door_tripo_oit748_gold.glb', ring: 0.488, hinge: 0.499, hingeZ: -0.079, pivotZ: 0.03, glass: 0.25 },
  basket: { file: 'models/opening/basket_v2_tripo.glb', on: LIST.includes('basket3'), width: 0.5, top: 0.185, turn: Math.PI },
  // scene 5 (`,nogear3` / `,nohousing3` = the code-built ones): "nov 8 812 pm" (a cobalt gear with a gold hub; it turns on its hub) and
  // "821 nov 8" (a long pink-and-gold machine housing with blue gauge windows and pipes) in place of the code gear and the 12 code housings
  gear: { file: 'models/opening/gear_v2_tripo.glb', on: !LIST.includes('nogear3'), d: 0.8, spin: 0.35 },
  housing: { file: 'models/opening/housing_tripo_821.glb', on: !LIST.includes('nohousing3'), len: 0.6 },
  // (the lighting specialist's measurements, session 6ddc157f: the washer read violet-pink and its gold yellow because the models' ORM marks the
  // pink body as polished metal, which mirrors the opening's lavender / cyan environment; paint-like metalness, less glow, less mirror)
  look: { env: 0.4, emissive: 0.15, metal: 0.25 },
};

export function tripo3Loader(loader) { if (TRIPO3_ON) loader.setMeshoptDecoder(MeshoptDecoder); return loader; }
export function tripo3GirlMaterial(m) { if (TRIPO3_ON && m && m.isMeshStandardMaterial) m.metalness = 0; }   // (her ORM's metal channel is noise)

function dress(root, env) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.frustumCulled = false;
    for (const m of [].concat(o.material)) {
      if (!m.isMeshStandardMaterial) continue;
      m.envMap = env; m.envMapIntensity = TRIPO3.look.env; m.metalness = TRIPO3.look.metal;
      if (m.map) { m.emissiveMap = m.map; m.emissive = new THREE.Color(0xffffff); m.emissiveIntensity = TRIPO3.look.emissive; }   // (the opening's toon glow)
    }
  });
}

export function applyTripo3({ washer, six, basket, env, P, vortex }) {
  const report = { ready: false, parts: [], errors: [] };
  if (typeof window !== 'undefined') window.__bwTripo3 = report;
  const loader = tripo3Loader(new GLTFLoader());
  const load = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  const W = TRIPO3.washer, D = TRIPO3.door, B = TRIPO3.basket, S = W.scale, zf = P.z - 0.01;
  const G = TRIPO3.gear, H = TRIPO3.housing, none = Promise.resolve(null);
  const jobs = [load(W.file), load(D.file), B.on ? load(B.file).then((g) => Promise.resolve(typeof window !== 'undefined' && window.__bwTripo2Ready).then(() => g)) : none,   // (after tripo2's basket)
    G.on && six.gear ? load(G.file) : none, H.on && six.housings ? load(H.file) : none];
  const done = Promise.all(jobs).then(([gw, gd, gb, gg, gh]) => {
    // the code washer's meshes (body, rim, bezel, crown, knob, six's medallion, dial, light rings; the door's ring, glass and hinge) are hidden
    washer.g.traverse((o) => { if (o.isMesh) o.visible = false; });
    const w = gw.scene; dress(w, env); w.scale.set(S, S, S * W.depth); w.position.set(P.x, P.y, zf); w.name = 'washerTripo3'; washer.g.add(w);
    const [px, py, pw, ph] = W.plate;
    const plate = new THREE.Mesh(new RoundedBoxGeometry(pw * S, ph * S, 0.035, 3, 0.012), washer.goldM); plate.position.set(P.x + px * S, P.y + py * S, zf + 0.02); washer.g.add(plate);
    for (const sy of [-1, 1]) { const r = new THREE.Mesh(new THREE.SphereGeometry(0.012, 10, 8), washer.goldM); r.position.set(plate.position.x - pw * S * 0.22, plate.position.y + sy * ph * S * 0.4, zf + 0.04); washer.g.add(r); }
    for (const sy of [-1, 1]) {   // two hinge knuckles on the plate (the art director: a featureless slab), as on the storyboard's gold hinge block
      const kn = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, ph * S * 0.3, 16), washer.goldM); kn.position.set(plate.position.x + pw * S * 0.25, plate.position.y + sy * ph * S * 0.24, zf + 0.045); washer.g.add(kn);
      for (const e of [-1, 1]) { const cap = new THREE.Mesh(new THREE.SphereGeometry(0.024, 12, 8), washer.goldM); cap.scale.y = 0.5; cap.position.copy(kn.position).add(new THREE.Vector3(0, e * ph * S * 0.15, 0)); washer.g.add(cap); }
    }
    // the timeline's three control lights, moved onto the model's own buttons and drawn as glows (dim until they switch on at 4.05 s)
    six.lights6.forEach((l, i) => {
      const [x, y] = W.lights[i]; l.position.set(P.x + x * S, P.y + y * S, zf + W.lightZ); l.scale.set(W.lightR * S / 0.024, W.lightR * S / 0.024, 0.35); l.visible = true;
      Object.assign(l.material, { blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }); l.material.needsUpdate = true;
    });
    report.parts.push('washer');
    // the door on the opening's door pivot (its rotation is the timeline's: open 1.95 rad -> shut in scene 4)
    const d = gd.scene; dress(d, env); const k = W.bezel * S / D.ring; d.scale.setScalar(k); d.position.set(-D.hinge * k, 0, -D.hingeZ * k); d.name = 'doorTripo3';
    washer.door.position.set(P.x + D.hinge * k, P.y, zf + D.pivotZ); washer.door.add(d);
    // its glass dome was removed in Blender: the opening's own translucent glass and highlight (six) fill the gold bezel, so he stays visible
    // through the shut door in scene 4 and the camera passes through it in scene 5, as before
    const hl = washer.door.children.find((c) => c !== washer.glass && c.isMesh && c.material.isMeshBasicMaterial && c.material.transparent);
    const gs = (D.glass * k) / washer.glass.geometry.parameters.radius;
    for (const c of [washer.glass, hl]) { if (!c) continue; c.visible = true; c.position.set(-D.hinge * k, 0, -D.hingeZ * k + (c === hl ? 0.006 : 0)); c.scale.setScalar(gs); }
    report.parts.push('door');
    if (gb) {   // ,basket3: the new basket in place of the basket's visible children (code or tripo2), its damaged side turned away
      const holder = new THREE.Group(); holder.name = 'basketTripo3'; const b = gb.scene; dress(b, env); holder.add(b);
      const box = new THREE.Box3().setFromObject(b), s = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3()), kb = B.width / s.x;
      b.scale.setScalar(kb); b.position.copy(c).multiplyScalar(-kb); b.position.y += B.top - s.y * kb / 2; holder.rotation.y = B.turn;
      for (const ch of basket.children) ch.visible = false;
      basket.add(holder); report.parts.push('basket');
    }
    if (gg) {   // scene 5's gear: the model centred on its hub (prep_simple.py), face on +Z like the code gear's; it turns with the opening's clock
      const holder = six.gear; for (const c of holder.children) c.visible = false;
      const pivot = new THREE.Group(); pivot.name = 'gearTripo3'; const m = gg.scene; dress(m, env); pivot.add(m);
      const box = new THREE.Box3().setFromObject(m), s = box.getSize(new THREE.Vector3()), kg = G.d / Math.max(s.x, s.y) / holder.scale.x;
      m.scale.setScalar(kg); pivot.position.z = 0.03; holder.add(pivot);
      m.traverse((o) => { if (o.isMesh) o.onBeforeRender = () => { pivot.rotation.z = -(vortex ? vortex.U.uTime.value : 0) * G.spin; }; });   // (deterministic: the opening's own time)
      report.parts.push('gear');
    }
    if (gh) {   // scene 5's housings along both walls: the long machine housing, its gauge windows to the drum's centre on either side
      const box = new THREE.Box3().setFromObject(gh.scene), s = box.getSize(new THREE.Vector3()), kh = H.len / s.z; dress(gh.scene, env);
      for (const holder of six.housings) {
        for (const c of holder.children) c.visible = false;
        const m = gh.scene.clone(true); m.scale.setScalar(kh); m.position.y = s.y * kh / 2; m.name = 'housingTripo3'; holder.add(m);
      }
      report.parts.push('housings x' + six.housings.length);
    }
    report.ready = true;
  }).catch((e) => { report.errors.push(String((e && e.message) || e)); });
  if (typeof window !== 'undefined') window.__bwTripo3Ready = done;
  return done;
}
