import { C1, C2, proj, onPlane } from './proj.mjs';
for (const z of [2.0, 2.2, 2.4]) {
  // top front inner corner of a 0.4 x 0.3 pile: find x (inner corner) and h hitting the targets
  const L = onPlane(C1, 0.075, 0.795, z + 0.15), R = onPlane(C1, 0.895, 0.80, z + 0.15);
  console.log('z', z, 'L inner corner', L, 'R inner corner', R, 'L outer-bottom', proj(C1, [L[0] - 0.4, 0, z + 0.15]), 'R outer', proj(C1, [R[0] + 0.4, 0, z + 0.15]), 'c2(old) L', proj(C2, L), 'c2 R', proj(C2, R));
}
