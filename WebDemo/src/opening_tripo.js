// tripo2 (8 November 2026, session 57091b57, the user's direction: "reuse good existing assets instead of generating duplicates",
// "the girl must genuinely animate, handle the basket, throw laundry"): OPT-IN on top of the 3D opening,
// `?s3=intunnel,structmatch,home,level1,tripo2`. Nothing changes without it. No Tripo credits: the user's OWN Tripo models
// (Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/), prepared for the opening:
//   - basket: "purple basket 3d model.glb" -> models/opening/basket_tripo.glb, its violet lifted to the approved girl art's basket
//     (Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg: hue 275, sat 0.67, val 0.89; the texture's
//     267 / 0.52 / 0.62 -> 275 / 0.67 / 0.85), texture 1024 px; in place of the code basket's body, rim and handles, sized so its ends
//     sit at her hands (the IK targets stay at +-0.225 of the basket group, unchanged);
//   - towels: "soft plush towels 3d model.glb" -> models/opening/towels_tripo.glb, split into its three towels (yellow, blue, pink) by
//     WebDemo/tools/tripo/split_loose_parts.py; they fly in place of the three code towels (same paths, spins and timing), and the
//     same three, smaller, are the laundry heaped in the basket in place of the code heap.
// LOOKS ONLY: the code meshes are hidden inside the same groups the opening moves; its timeline, paths, IK and random numbers are
// untouched. Report: window.__bwTripo2 (ready, parts, errors).
import * as THREE from 'three';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const TRIPO2_ON = LIST.includes('level1') && LIST.includes('tripo2');
export const TRIPO2 = {
  basket: { file: 'models/opening/basket_tripo.glb', width: 0.48, top: 0.185 },   // width along x (her hands at +-0.225), rim height
  towels: { file: 'models/opening/towels_tripo.glb', fly: 0.34, heap: 0.15 },     // each towel's largest side: flying, in the basket
  look: { emissive: 0.3, env: 0.5 },
};

function dress(root, env) {
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.frustumCulled = false;
    for (const m of [].concat(o.material)) {
      if (!m.isMeshStandardMaterial) continue;
      m.envMap = env; m.envMapIntensity = TRIPO2.look.env;
      if (m.map) { m.emissiveMap = m.map; m.emissive = new THREE.Color(0xffffff); m.emissiveIntensity = TRIPO2.look.emissive; }   // the toon laundry's own-colour glow
    }
  });
}
function fit(obj, size, axis = 'max') {
  const box = new THREE.Box3().setFromObject(obj), s = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
  const k = size / (axis === 'x' ? s.x : Math.max(s.x, s.y, s.z));
  obj.scale.multiplyScalar(k); obj.position.sub(c.clone().multiplyScalar(k));   // centred on its parent's origin
  return { size: s.clone().multiplyScalar(k), half: s.clone().multiplyScalar(k / 2) };
}

export function applyTripo2({ basket, laundry, loader, env }) {
  const report = { ready: false, parts: [], errors: [] };
  if (typeof window !== 'undefined') window.__bwTripo2 = report;
  const load = (url) => new Promise((ok, no) => loader.load(url, ok, undefined, no));
  const done = Promise.all([load(TRIPO2.basket.file), load(TRIPO2.towels.file)]).then(([gb, gt]) => {
    // the basket: hide the code body, base, rim and handles (meshes without the heap's sphere geometry) and the heap itself
    const holder = new THREE.Group(); holder.name = 'basketTripo';
    const b = gb.scene; dress(b, env); const inner = new THREE.Group(); inner.add(b); const f = fit(b, TRIPO2.basket.width, 'x');
    b.position.y += TRIPO2.basket.top - f.half.y;   // its rim at the code rim's height, so her hands hold it as before
    report.basket = { w: +f.size.x.toFixed(3), h: +f.size.y.toFixed(3), d: +f.size.z.toFixed(3) };
    holder.add(inner);
    for (const c of basket.children) c.visible = false;
    basket.add(holder); report.parts.push('basket');
    // the towels, in x order (yellow, blue, pink), as the opening's three flying towels (laundry[2..4]) and as the heap
    const pieces = gt.scene.children.filter((o) => o.isMesh || o.isGroup).sort((a, c) => a.position.x - c.position.x);
    dress(gt.scene, env);
    const towelFor = (i, size) => { const t = pieces[i].clone(true); t.position.set(0, 0, 0); const g = new THREE.Group(); g.add(t); fit(t, size); return g; };
    laundry.slice(2, 5).forEach((l, i) => {
      if (!pieces[i]) return;
      for (const c of l.o.children) c.visible = false;
      const t = towelFor(i, TRIPO2.towels.fly / (l.o.userData.k || 1)); t.name = 'towelTripo'; l.o.add(t);
    });
    report.parts.push('flying towels x' + Math.min(3, pieces.length));
    [[-0.11, 0.05, 0.4, 0.2], [0.02, -0.04, -0.5, 1.4], [0.12, 0.04, 0.3, 2.6]].forEach(([x, z, rz, ry], i) => {
      if (!pieces[i]) return;
      const t = towelFor(i, TRIPO2.towels.heap); t.position.set(x, TRIPO2.basket.top + 0.01, z); t.rotation.set(0.25, ry, rz); t.name = 'heapTripo'; holder.add(t);
    });
    report.parts.push('heap'); report.ready = true;
  }).catch((e) => { report.errors.push(String((e && e.message) || e)); });
  if (typeof window !== 'undefined') window.__bwTripo2Ready = done;
  return done;
}
