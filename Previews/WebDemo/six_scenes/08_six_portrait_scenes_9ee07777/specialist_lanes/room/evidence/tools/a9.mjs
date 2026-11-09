import { C1, C2, proj } from './proj.mjs';
// check candidate piles: [cx, cz, h, w, d] => corners in both cams
for (const [n, cx, cz, h, w, d] of [['L', -0.62, 1.5, 0.2, 0.42, 0.3], ['L2', -0.7, 1.75, 0.2, 0.42, 0.3], ['R', 0.47, 1.5, 0.18, 0.42, 0.3], ['R2', 0.55, 1.75, 0.18, 0.42, 0.3]]) {
  const pts = [[cx - w / 2, h, cz + d / 2], [cx + w / 2, h, cz + d / 2], [cx - w / 2, 0, cz + d / 2], [cx + w / 2, 0, cz + d / 2]];
  console.log(n, JSON.stringify(pts.map((p) => [proj(C1, p), proj(C2, p)])));
}
