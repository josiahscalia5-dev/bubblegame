import { C1, C2, proj } from './proj.mjs';
const box = (cx, cz, h, w = 0.42, d = 0.3) => { const out = { c1: [1, 1, 0, 0], c2: [1, 1, 0, 0] }; for (const sx of [-1, 1]) for (const sz of [-1, 1]) for (const y of [0, h]) { const p = [cx + sx * w / 2, y, cz + sz * d / 2];
  for (const [k, C] of [['c1', C1], ['c2', C2]]) { const [a, b] = proj(C, p); const o = out[k]; o[0] = Math.min(o[0], a); o[1] = Math.min(o[1], b); o[2] = Math.max(o[2], a); o[3] = Math.max(o[3], b); } } return out; };
for (const [n, cx, cz, h] of [['L a', -0.78, 2.3, 0.17], ['L b', -0.72, 2.45, 0.17], ['L c', -0.66, 2.6, 0.17], ['L d', -0.62, 2.7, 0.17], ['R a', 0.42, 2.2, 0.17], ['R b', 0.36, 2.4, 0.17], ['R c', 0.3, 2.6, 0.17], ['R d', 0.52, 2.0, 0.17]]) console.log(n, cx, cz, JSON.stringify(box(cx, cz, h)));
