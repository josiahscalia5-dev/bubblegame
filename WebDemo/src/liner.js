// The user's Meshy washer tunnel interior liner (Design/MeshyDeliveries/TunnelInterior, a web copy of the
// Recommended GLB in models/liner.glb), lining the existing Meshy washer drum from just inside its mouth
// to just before the exit light. The drum, castle and portal are unchanged; the liner sits inside the drum.
//
// The model is a short, thick barrel (about 1.9 x 1.9 x 1.73 units, tube along its Z). Its bore, which is
// what a rider sees, is conical (radius about 0.41 at its -Z end, 0.65 at its +Z end); its outer shell is
// at about 0.95. Scaled uniformly it would either close over the water (bore fitted to the drum's centre)
// or burst through the drum (outer shell fitted). So each copy is bent along the ride's 3D path like the
// drum, and its radius is remapped: the bore's mean surface goes to LINER.radius and its relief (panels,
// rings, machinery set into the wall) keeps LINER.relief times its depth, so recesses stay recessed
// (squashing them all onto one radius made overlapping surfaces flicker). The barrel's outer shell,
// which is never seen from inside, is left out. The +Z end (its "tunnel mouth" face of concentric rings)
// faces the incoming rider. Behind the liner the drum is not drawn (game.js trimDrum), so its ribs cannot
// show through; the liner reaches no further out than the drum's own wall did (3.1 m).
//
// The model's light bands are texture only. Here they really emit: the shader finds the model's own cyan
// bands and pink panels by colour (cyan: green/blue 0.42-1.2, saturated, not metal; pink: strong red
// and blue, little green) and adds emission to exactly those texels, with a slow light-chase down the
// tunnel. Separate emissive cyan rings (code) circle the tunnel every LINER.ringStep metres. Both fade
// with distance so the lights recede into the depth; only they pass the bloom threshold, so the deep
// blue walls and gold stay unbloomed.
import * as THREE from 'three';
import * as SH from './shaders.js';

export const LINER = {
  startIn: 0.6,      // metres inside the drum's mouth where the liner starts (the drum's own mouth stays)
  endIn: 0.6,        // ... and where it stops before the tunnel's end (the exit light stays)
  segments: 4,       // copies along the tunnel (about 8 m each, so the panels keep their proportions)
  radius: 2.25,      // the bore's mean surface (m from the tube's axis)
  relief: 4.0,       // metres of relief per model unit (the bore's circumference scale is about 5)
  minR: 2.0,         // nothing comes closer to the axis than this (the mascot's body reaches 1.89 m, the camera 0.46 m)
  maxR: 3.1,         // or further than this (the drum's own wall reached 3.25 m)
  shellCut: 0.2,     // model units beyond the bore's surface where the barrel's outer shell begins (left out)
  ringStep: 2.0,     // a glowing cyan ring every this many metres
  ringR: 2.12,       // ... at this radius
  glow: 1.2,         // overall strength of the model's glowing bands and panels
  shade: 0.45,       // how much of the scene's light the walls take (the glowing bands keep all of it)
  env: 0.85,         // strength of the studio reflections on the gold and glossy panels
};

export function buildLiner({ scene, gltf, TR, L, W, env }) {
  const root = new THREE.Group(); root.name = 'tunnelLiner'; scene.add(root);
  const time = { value: 0 };
  const glow = { value: LINER.glow }, shade = { value: LINER.shade };
  const axisH = W.WATER + W.AXIS_H;

  // ---------------------------------------------------------------- the model's geometry in model space
  gltf.scene.updateMatrixWorld(true);
  let src = null;
  gltf.scene.traverse((o) => { if (o.isMesh && !src) src = o; });
  const g0 = src.geometry, pos0 = g0.attributes.position, n = pos0.count;
  const P = new Float32Array(n * 3), v = new THREE.Vector3();
  let zMin = Infinity, zMax = -Infinity;
  for (let i = 0; i < n; i++) {
    v.fromBufferAttribute(pos0, i).applyMatrix4(src.matrixWorld);
    P[i * 3] = v.x; P[i * 3 + 1] = v.y; P[i * 3 + 2] = v.z;
    zMin = Math.min(zMin, v.z); zMax = Math.max(zMax, v.z);
  }
  // The bore profile: the smallest radius in each slice along Z (a little above it, as the mean surface),
  // smoothed, so the cone is flattened but the relief on it is kept.
  const SL = 24, bore = new Float32Array(SL).fill(Infinity);
  const slice = (z) => Math.min(SL - 1, Math.max(0, Math.floor(((z - zMin) / (zMax - zMin)) * SL)));
  for (let i = 0; i < n; i++) { const r = Math.hypot(P[i * 3], P[i * 3 + 1]); const k = slice(P[i * 3 + 2]); bore[k] = Math.min(bore[k], r); }
  const boreS = bore.map((_, k) => { let s = 0, c = 0; for (let j = k - 2; j <= k + 2; j++) if (j >= 0 && j < SL) { s += bore[j]; c++; } return s / c + 0.03; });
  const boreAt = (z) => { const f = ((z - zMin) / (zMax - zMin)) * SL - 0.5, k = Math.max(0, Math.min(SL - 2, Math.floor(f))), t = Math.min(1, Math.max(0, f - k)); return boreS[k] * (1 - t) + boreS[k + 1] * t; };

  // ---------------------------------------------------------------- material
  const m0 = src.material;
  const mat = new THREE.MeshStandardMaterial({ map: m0.map, metalnessMap: m0.metalnessMap, roughnessMap: m0.roughnessMap, normalMap: m0.normalMap,
    metalness: 1, roughness: 1, envMap: env, envMapIntensity: LINER.env, side: THREE.DoubleSide });
  mat.onBeforeCompile = (s) => {
    s.uniforms.uLinerTime = time; s.uniforms.uLinerGlow = glow; s.uniforms.uLinerShade = shade;
    s.vertexShader = s.vertexShader.replace('void main() {', 'attribute float aU;\nvarying float vLinerU; varying float vLinerDepth;\nvoid main() {\n  vLinerU = aU;')
      .replace('#include <project_vertex>', '#include <project_vertex>\n  vLinerDepth = -mvPosition.z;');
    s.fragmentShader = s.fragmentShader.replace('void main() {', 'uniform float uLinerTime; uniform float uLinerGlow; uniform float uLinerShade;\nvarying float vLinerU; varying float vLinerDepth;\nvoid main() {')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n' + SH.LINER_GLOW)
      .replace('#include <opaque_fragment>', '#include <opaque_fragment>\n' + SH.LINER_DEPTH);
  };
  mat.customProgramCacheKey = () => 'liner';

  // ---------------------------------------------------------------- the bent copies
  const u0 = L.tunnelStart + LINER.startIn, u1 = L.tunnelEnd - LINER.endIn;
  const segLen = (u1 - u0) / LINER.segments;
  // Leave out the outer shell: triangles with a corner further than shellCut beyond the bore's surface.
  const depth = new Float32Array(n);
  for (let i = 0; i < n; i++) depth[i] = Math.hypot(P[i * 3], P[i * 3 + 1]) - boreAt(P[i * 3 + 2]);
  const idx0 = g0.index.array, kept = [];
  for (let t = 0; t < idx0.length; t += 3) {
    const a = idx0[t], b = idx0[t + 1], c = idx0[t + 2];
    if (Math.max(depth[a], depth[b], depth[c]) <= LINER.shellCut) kept.push(a, b, c);
  }
  const index = new THREE.BufferAttribute(n > 65535 ? new Uint32Array(kept) : new Uint16Array(kept), 1);
  let minR = Infinity, maxR = 0;
  const meshes = [];
  const out = new THREE.Vector3();
  for (let s = 0; s < LINER.segments; s++) {
    const p = new Float32Array(n * 3), au = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
      const r = Math.hypot(x, y), a = Math.atan2(y, x);
      const R = Math.min(LINER.maxR, Math.max(LINER.minR, LINER.radius + depth[i] * LINER.relief));
      if (depth[i] <= LINER.shellCut) { minR = Math.min(minR, R); maxR = Math.max(maxR, R); }
      const u = u0 + s * segLen + ((zMax - z) / (zMax - zMin)) * segLen;   // the +Z end first, facing the rider
      TR.map(Math.cos(a) * R, axisH + Math.sin(a) * R, u, out);
      p[i * 3] = out.x; p[i * 3 + 1] = out.y; p[i * 3 + 2] = out.z; au[i] = u;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(p, 3));
    g.setAttribute('uv', g0.attributes.uv);
    g.setAttribute('aU', new THREE.BufferAttribute(au, 1));
    g.setIndex(index);
    g.computeVertexNormals();
    g.computeBoundingSphere();
    const mesh = new THREE.Mesh(g, mat);
    root.add(mesh); meshes.push(mesh);
  }

  // ---------------------------------------------------------------- deep-blue backing (code)
  // A plain tube just behind the liner. The model has many small holes (cracks in Meshy's reconstruction;
  // they are in the delivered file), and through them this shows wall-like deep blue instead of the sky
  // (the drum is not drawn behind the liner).
  {
    const A = 64, steps = Math.ceil((L.tunnelEnd + 0.5 - (u0 - 0.2)) / 0.5), R = LINER.radius + 0.35;
    const bp = new Float32Array((A + 1) * (steps + 1) * 3), idx = [];
    for (let j = 0; j <= steps; j++) {
      const u = u0 - 0.2 + (j / steps) * (L.tunnelEnd + 0.5 - (u0 - 0.2));
      for (let i = 0; i <= A; i++) {
        const a = (i / A) * Math.PI * 2;
        TR.map(Math.cos(a) * R, axisH + Math.sin(a) * R, u, out);
        bp.set([out.x, out.y, out.z], (j * (A + 1) + i) * 3);
      }
    }
    for (let j = 0; j < steps; j++) for (let i = 0; i < A; i++) { const a = j * (A + 1) + i, b = a + A + 1; idx.push(a, b, a + 1, a + 1, b, b + 1); }
    const bg = new THREE.BufferGeometry(); bg.setAttribute('position', new THREE.BufferAttribute(bp, 3)); bg.setIndex(idx); bg.computeBoundingSphere();
    bg.computeVertexNormals();
    // The same deep blue as the walls, under the same light, reflections and depth fade, so a hole reads
    // as wall rather than as a crack.
    const backMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(0.02, 0.13, 0.72).multiplyScalar(LINER.shade), metalness: 0.15, roughness: 0.45,
      envMap: env, envMapIntensity: LINER.env, side: THREE.DoubleSide });
    backMat.onBeforeCompile = (sh) => {
      sh.vertexShader = sh.vertexShader.replace('void main() {', 'varying float vLinerDepth;\nvoid main() {').replace('#include <project_vertex>', '#include <project_vertex>\n  vLinerDepth = -mvPosition.z;');
      sh.fragmentShader = sh.fragmentShader.replace('void main() {', 'varying float vLinerDepth;\nvoid main() {').replace('#include <opaque_fragment>', '#include <opaque_fragment>\n' + SH.LINER_DEPTH);
    };
    backMat.customProgramCacheKey = () => 'liner-backing';
    // Drawn straight after the sky and without writing depth: everything else draws over it, so it shows
    // only through the holes and never covers the liner's deepest recesses.
    backMat.depthWrite = false;
    const backing = new THREE.Mesh(bg, backMat); backing.name = 'linerBacking'; backing.renderOrder = -5;
    root.add(backing);
  }

  // ---------------------------------------------------------------- glowing cyan rings (code)
  const ringGeo = new THREE.TorusGeometry(LINER.ringR, 0.035, 8, 128);
  const rings = [];
  const cyan = new THREE.Color(0.25, 1.6, 2.5), white = new THREE.Color(1.0, 2.0, 2.6);   // above 1: they bloom
  let k = 0;
  for (let u = u0 + LINER.ringStep * 0.5; u < u1; u += LINER.ringStep, k++) {
    const base = (k % 3 === 2 ? white : cyan).clone();
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: base.clone() }));
    ring.matrixAutoUpdate = false;
    TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, axisH, u), ring.matrix);
    ring.matrixWorldNeedsUpdate = true;
    root.add(ring);
    rings.push({ ring, base, u, centre: TR.map(0, axisH, u) });
  }

  return {
    root, meshes, rings, material: mat,
    /** Nearest and furthest liner surface from the tube's axis (m), and the rings' radius. */
    clearance: { minR: +minR.toFixed(3), maxR: +maxR.toFixed(3), ringR: LINER.ringR, segments: LINER.segments, segLen: +segLen.toFixed(2), start: +u0.toFixed(2), end: +u1.toFixed(2), trianglesPerCopy: kept.length / 3 },
    update(t, camPos) {
      time.value = t;
      // The rings chase with the panels and fade with distance, so the lights recede into the tunnel.
      for (const r of rings) {
        const d = camPos.distanceTo(r.centre);
        const chase = 0.72 + 0.28 * Math.sin(r.u * 0.85 - t * 3.2);
        r.ring.material.color.copy(r.base).multiplyScalar(chase * (1 - 0.55 * THREE.MathUtils.smoothstep(d, 6, 28)));
      }
    },
  };
}
