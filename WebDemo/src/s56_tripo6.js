// tripo6 (9 November 2026, session ddf175f2, the coordinator; the user's directive: "use AI-generated 3D assets to match my approved Screen 6",
// approved budget 360 credits for three models). The user's NEW Tripo models of Screen 6's missing scenery, generated from isolated cuts of the
// EXACT approved image (Design/ReferencePacks/2026-11-09_Screen6_Isolated_Asset_References/, jobs in Design/TripoDeliveries/TRIPO_JOBS_LOG.md),
// mobile LODs in WebDemo/models/s6tripo/. A REVERSIBLE, Screen 6-only switch: `?s3=...,s56,...,tripo6`. Without it nothing here runs and the
// game is unchanged (Classic Screen 4 never loads s56 at all).
//   - brush: the Tripo roller brush machine replaces the procedural brushes' look (brush6's fitted places, scale, spin and depth pull are kept:
//     the model is mounted in each brush's own spin group). Its wall bracket (Tripo built one from the wall beside the approved brush) is cut away
//     at load: the brush's own radius per height is measured on the bracket-free side, triangles beyond it on the bracket side are dropped.
//   - drum: the pink star drum housing stands where lane arch56's procedural star drum stood (arch.drumSlots; under tripo6 arch56 leaves its
//     oval cab, stars and railing out), its violet shifted to the approved hot pink in the shader (TRIPO6.drum.pink), LOD by distance.
//   - tank: generated (task 5bafa5d6) but REJECTED: Tripo split it into a small pink box on legs and a squat opaque violet tank with no glow;
//     arch56's procedural glowing tank is closer to the approved one and stays. Kept off (TRIPO6.tank.on 0); the files stay for the record.
import * as THREE from 'three';
const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const TRIPO6_ON = LIST.includes('s56') && LIST.includes('level1') && LIST.includes('tripo6');

export const TRIPO6 = {
  brush: {
    on: 1, url: 'models/s6tripo/brush_lod0.glb',
    // the model normalised: axis at x = z = 0, its lowest point at y 0, then scaled to the procedural brush's height in bell radii (brush6:
    // the lowest tips at y 0, the top drum's top at cap.flange[0] + hat), times k
    k: { left: 1.0, right: 1.0 }, wide: { left: 1.0, right: 1.0 }, yaw: 0,
    cut: { on: 1, axis: '-x', margin: 1.06, add: 0.012, bins: 24 },   // the bracket cut (model units after centring)
    hideProc: 1,   // hide brush6's procedural bristles and cap (1) or show both (0, for comparison)
  },
  tank: { on: 0, url: 'models/s6tripo/tank_lod0.glb', far: 'models/s6tripo/tank_lod2.glb', height: 2.2, place: [] },   // REJECTED (see above)
  // drum: scaled so its height (railing included) = slot.top + rail, its front (model +z) turned to the channel by yaw (rad, about the
  // bank's up axis; +x of the track frame = screen-left), lifted by y; pink: the violet -> hot pink shift (0 = Tripo's own colours)
  drum: { on: 1, url: 'models/s6tripo/drum_lod0.glb', far: 'models/s6tripo/drum_lod2.glb', rail: 0.32, k: 1.0, yaw: 2.2, y: 0.0, dx: 0.0, dz: 0.0, pink: 1.0 },
};
if (TRIPO6_ON && typeof window !== 'undefined') window.__bwTripo6 = TRIPO6;

// the model's single scene, normalised: centred on its vertical axis, its lowest point at y 0 (returns { node, size })
function normalise(gltf) {
  const node = gltf.scene; node.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(node), c = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3());
  const holder = new THREE.Group(); node.position.set(-c.x, -box.min.y, -c.z); holder.add(node); holder.updateMatrixWorld(true);
  return { node: holder, size };
}

// drop the triangles that stand outside the body's own radius on one side (the Tripo brush's wall bracket). Works on the mesh geometry in
// the node's frame (after normalise). Profile: per height bin, the largest radius of the vertices on the OTHER side (no bracket there).
function cutOutside(holder, C) {
  const out = { kept: 0, dropped: 0 };
  holder.traverse((o) => {
    if (!o.isMesh) return;
    const g = o.geometry, pos = g.attributes.position, M = new THREE.Matrix4().copy(o.matrixWorld).premultiply(new THREE.Matrix4().copy(holder.matrixWorld).invert());
    const v = new THREE.Vector3(), P = [];
    for (let i = 0; i < pos.count; i++) { v.fromBufferAttribute(pos, i).applyMatrix4(M); P.push(v.x, v.y, v.z); }
    let y0 = Infinity, y1 = -Infinity; for (let i = 1; i < P.length; i += 3) { y0 = Math.min(y0, P[i]); y1 = Math.max(y1, P[i]); }
    const nb = C.bins, R = new Float32Array(nb), bin = (y) => Math.min(nb - 1, Math.max(0, Math.floor(((y - y0) / (y1 - y0 + 1e-6)) * nb)));
    const sgn = C.axis === '-x' ? -1 : 1;   // the bracket side
    for (let i = 0; i < pos.count; i++) { const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2]; if (x * sgn > 0) continue; const r = Math.hypot(x, z); const b = bin(y); if (r > R[b]) R[b] = r; }
    for (let b = 1; b < nb; b++) if (R[b] === 0) R[b] = R[b - 1];
    const idx = g.index ? g.index.array : [...Array(pos.count).keys()], keep = [];
    for (let t = 0; t < idx.length; t += 3) {
      const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
      const cx = (P[a] + P[b] + P[c]) / 3, cy = (P[a + 1] + P[b + 1] + P[c + 1]) / 3, cz = (P[a + 2] + P[b + 2] + P[c + 2]) / 3;
      const rmax = Math.max(Math.hypot(P[a], P[a + 2]), Math.hypot(P[b], P[b + 2]), Math.hypot(P[c], P[c + 2]));
      const lim = R[bin(cy)] * C.margin + C.add;
      if (cx * sgn > 0 && (Math.hypot(cx, cz) > lim || rmax > lim * 1.25)) { out.dropped++; continue; }
      keep.push(idx[t], idx[t + 1], idx[t + 2]); out.kept++;
    }
    const ng = g.clone(); ng.setIndex(keep); o.geometry = ng;
  });
  return out;
}

/** ctx: { TR, W, L, env, loader, root, report, brush6 (buildBrush6's result), arch }. Returns { update(dt, time, phase, m) }. */
export async function buildTripo6(ctx) {
  const { TR, W, L, env, loader, root, report, brush6 } = ctx, P = TRIPO6;
  const group = new THREE.Group(); group.name = 't6Tripo'; root.add(group);
  const load = (url) => new Promise((res, rej) => loader.load(url, res, undefined, rej));
  const prep = (holder, tag, pullStd) => holder.traverse((o) => {
    if (!o.isMesh) return; o.frustumCulled = false;
    const m = o.material; m.envMap = env; m.envMapIntensity = 1.15; m.needsUpdate = true;
    if (pullStd) pullStd(m, 't6' + tag);
  });
  const stats = { brush: null };

  // ------------------------------------------------ the brush machine, in brush6's own fitted places
  let brushModel = null;
  if (P.brush.on && brush6) {
    try {
      const g = await load(P.brush.url); const n = normalise(g);
      if (P.brush.cut.on) stats.brushCut = cutOutside(n.node, P.brush.cut);
      prep(n.node, 'brush', brush6.pullStd);
      brushModel = n; stats.brush = n.size.toArray().map((x) => +x.toFixed(3));
      const B6 = window.__bwBrush6 || {};
      for (const b of brush6.brushes) {
        const sk = b.side, S = B6[sk] || {}, top = (B6.cap ? B6.cap.flange[0] : 3.86) + (S.hat || 0);
        const k = (top / n.size.y) * P.brush.k[sk], kw = k * P.brush.wide[sk];
        const inst = n.node.clone(); inst.name = 't6Brush_' + sk; inst.scale.set(kw, k, kw); inst.rotation.y = P.brush.yaw;
        b.spin.add(inst); b.t6 = inst;
      }
    } catch (e) { report.errors.push('tripo6 brush: ' + ((e && e.message) || e)); }
  }

  // ------------------------------------------------ the star drum, in arch56's slots (arch.drumSlots); near = LOD0 within 16 m, then LOD2
  const pinkU = { value: P.drum.pink };
  const pinkShift = (m) => {   // the drum's violet (b > g, r > g) toward the approved hot pink; gold and white untouched
    m.onBeforeCompile = (sh) => { sh.uniforms.uT6Pink = pinkU;
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nuniform float uT6Pink;')
        .replace('#include <map_fragment>', `#include <map_fragment>
  { vec3 c = diffuseColor.rgb; float vio = smoothstep(0.02, 0.12, min(c.b - c.g, c.r - c.g)) * smoothstep(-0.25, 0.05, c.b - c.r * 0.6);
    vec3 pk = vec3(max(c.r, c.b) * 1.05, c.g * 0.85, c.b * 0.62 + c.r * 0.08); diffuseColor.rgb = mix(c, pk, vio * uT6Pink); }`); };
    m.customProgramCacheKey = () => 't6pink'; };
  const drums = [];
  const slots = (ctx.arch && ctx.arch.drumSlots) || [];
  if (P.drum.on && slots.length) {
    try {
      const n = normalise(await load(P.drum.url)); prep(n.node, 'drum', null); n.node.traverse((o) => { if (o.isMesh) pinkShift(o.material); });
      let far = null; try { far = normalise(await load(P.drum.far)); prep(far.node, 'drumF', null); far.node.traverse((o) => { if (o.isMesh) pinkShift(o.material); }); } catch (e) { far = null; }
      for (const sl of slots) {
        const mk = (src) => { if (!src) return null; const o = src.node.clone(); o.matrixAutoUpdate = false; group.add(o); return o; };
        drums.push({ sl, near: mk(n), far: mk(far), size: n.size });
      }
    } catch (e) { report.errors.push('tripo6 drum: ' + ((e && e.message) || e)); }
  }
  function placeDrums() {
    const D = P.drum;
    for (const d of drums) {
      const k = ((d.sl.top + D.rail) / d.size.y) * D.k;
      const M = d.sl.M.clone().multiply(new THREE.Matrix4().makeTranslation(D.dx, D.y, D.dz)).multiply(new THREE.Matrix4().makeRotationY(D.yaw)).multiply(new THREE.Matrix4().makeScale(k, k, k));
      for (const o of [d.near, d.far]) if (o) { o.matrix.copy(M); o.matrixWorldNeedsUpdate = true; }
    }
    pinkU.value = D.pink;
    return 'drum x' + drums.length;
  }
  P.place = placeDrums;
  report.parts.push(`tripo6: brush ${brushModel ? 'x' + brush6.brushes.length : 'off'}; ${placeDrums()}`);
  P.stats = stats;

  function update(dt, time, phase, m) {
    const hu = m ? m.z : 0;
    if (brushModel && brush6) for (const b of brush6.brushes) {   // (after brush6.update: its procedural meshes hidden under the model)
      if (!b.t6) continue; const show = !!P.brush.hideProc;
      b.t6.visible = b.spin.visible;
      if (show) { b.fur.visible = false; b.lite.visible = false; for (const c of b.spin.children) if (c.name === 'b6Gold' || c.name === 'b6Bell') c.visible = false; }
    }
    for (const it of drums) {
      const d = it.sl.u - hu, on = d > -4 && d < 70, near = d < 16 || !it.far;
      if (it.near) it.near.visible = on && near; if (it.far) it.far.visible = on && !near;
    }
  }
  return { update, place: placeDrums, stats };
}
