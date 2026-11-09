import * as THREE from '../../node_modules/three/build/three.module.js';
// free: camera (pos 3, target 3, fov), basket (x, z), girl face (x, z) at fixed height FH; basket rim half-width RW, rim height RH
const ref = JSON.parse(process.env.REF), RW = 0.317, RH = 0.33, FH = +process.env.FH || 0.8, FIXB = process.env.FIXB ? JSON.parse(process.env.FIXB) : null;
const cam = new THREE.PerspectiveCamera(40, 864 / 1536, 0.01, 50), P = [0.3, 0.62, 0.27];
const A = (p) => { const [bx, bz] = FIXB || [p[7], p[8]], [gx, gz] = [p[9], p[10]];
  return [[P, ref.P, 3], [[P[0], P[1] + 0.384, P[2] + 0.02], ref.Pt, 1], [[bx, RH, bz], ref.B, 2], [[bx - RW, RH, bz], ref.Bl, 1], [[bx + RW, RH, bz], ref.Br, 1], [[gx, FH, gz], ref.G, 3]]; };
const err = (p) => { cam.position.set(p[0], p[1], p[2]); cam.lookAt(p[3], p[4], p[5]); cam.fov = p[6]; cam.updateProjectionMatrix(); cam.updateMatrixWorld();
  let e = 0; const out = []; for (const [w, s, k] of A(p)) { if (!s) continue; const v = new THREE.Vector3(...w).project(cam); const sx = (v.x + 1) / 2, sy = (1 - v.y) / 2; out.push([+sx.toFixed(3), +sy.toFixed(3)]); e += k * ((sx - s[0]) ** 2 + (sy - s[1]) ** 2); }
  const [bx, bz] = FIXB || [p[7], p[8]]; if (bz < 0.95) e += (0.95 - bz) * 2; if (p[10] < 0.62) e += (0.62 - p[10]) * 3; const gap = Math.hypot(bx - p[9], bz - p[10]); if (gap < 0.38) e += (0.38 - gap) * 4; if (p[1] < 0.45) e += 0.45 - p[1];
  if (p[9] > -0.2) e += (p[9] + 0.2) * 3; return [e, out]; };
let best = 1e9, bp;
for (let run = 0; run < 10; run++) {
  let p = [0.0 + Math.random() * 0.3, 0.7, 3.0, -0.2, 0.6, 0.6, 48, -0.14, 1.16, -0.5, 1.2], [b] = err(p), step = [0.3, 0.2, 0.3, 0.2, 0.2, 0.2, 5, 0.12, 0.12, 0.12, 0.12];
  for (let it = 0; it < 14000; it++) { const i = it % 11, q = p.slice(); q[i] += (Math.random() - 0.5) * 2 * step[i]; q[6] = Math.min(60, Math.max(30, q[6])); const [e] = err(q); if (e < b) { b = e; p = q; } if (it % 1100 === 1099) step = step.map((s) => s * 0.75); }
  if (b < best) { best = b; bp = p; }
}
const [e, out] = err(bp), r = (a) => a.map((v) => +v.toFixed(3));
console.log(JSON.stringify({ err: +e.toFixed(5), cam: r(bp.slice(0, 3)), tgt: r(bp.slice(3, 6)), fov: +bp[6].toFixed(1), basket: FIXB || r([bp[7], bp[8]]), girlFace: r([bp[9], bp[10]]), proj: out }));
