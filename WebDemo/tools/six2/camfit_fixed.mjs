// six2 (session 9ee07777): fit ONLY the camera (position, target, vertical fov) to fixed world landmarks and their reference screen positions.
// Usage: node camfit_fixed.mjs '<json [[ [x,y,z], [sx,sy], weight ], ...]>' '<json {c:[..],t:[..],f:..}>'
import * as THREE from '../../node_modules/three/build/three.module.js';
const A = JSON.parse(process.argv[2]), init = JSON.parse(process.argv[3]);
const cam = new THREE.PerspectiveCamera(45, 864 / 1536, 0.01, 50);
const err = (p) => { cam.position.set(p[0], p[1], p[2]); cam.lookAt(p[3], p[4], p[5]); cam.fov = p[6]; cam.updateProjectionMatrix(); cam.updateMatrixWorld();
  let e = 0; const out = []; for (const [w, s, k] of A) { const v = new THREE.Vector3(...w).project(cam); const sx = (v.x + 1) / 2, sy = (1 - v.y) / 2; out.push([+sx.toFixed(3), +sy.toFixed(3)]); e += (k || 1) * ((sx - s[0]) ** 2 + (sy - s[1]) ** 2); } return [e, out]; };
let best = 1e9, bp;
for (let run = 0; run < 12; run++) {
  let p = [...init.c, ...init.t, init.f].map((v, i) => v + (run ? (Math.random() - 0.5) * (i === 6 ? 8 : 0.4) : 0)), [b] = err(p), step = [0.3, 0.2, 0.3, 0.2, 0.2, 0.2, 5];
  for (let it = 0; it < 9000; it++) { const i = it % 7, q = p.slice(); q[i] += (Math.random() - 0.5) * 2 * step[i]; q[6] = Math.min(65, Math.max(+(process.env.FOVMIN || 25), q[6])); if (process.env.CAMYMIN) q[1] = Math.max(+process.env.CAMYMIN, q[1]); const [e] = err(q); if (e < b) { b = e; p = q; } if (it % 900 === 899) step = step.map((s) => s * 0.72); }
  if (b < best) { best = b; bp = p; }
}
const [e, out] = err(bp), r = (a) => a.map((v) => +v.toFixed(3));
console.log(JSON.stringify({ err: +e.toFixed(5), rms_px: +(Math.sqrt(e / A.reduce((a, x) => a + (x[2] || 1), 0)) * 1536).toFixed(1), cam: r(bp.slice(0, 3)), tgt: r(bp.slice(3, 6)), fov: +bp[6].toFixed(1), proj: out }));
