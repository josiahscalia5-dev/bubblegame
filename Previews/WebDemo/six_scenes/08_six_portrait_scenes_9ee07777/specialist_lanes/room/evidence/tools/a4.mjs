import { C1, C2, proj } from './proj.mjs';
// fg pile: inner top corner (x+sx*hw, h, z+0.15) to targets in both cams
const solve = (sx, tgt1, tgt2, h, hw) => { let best = [1e9];
  for (let x = -1.5; x <= 1.5; x += 0.01) for (let z = 0.8; z <= 3.2; z += 0.01) { const p = [x + sx * hw, h, z + 0.12]; const a = proj(C1, p), b = proj(C2, p);
    const e = (a[0] - tgt1[0]) ** 2 + (a[1] - tgt1[1]) ** 2 + (b[0] - tgt2[0]) ** 2 + (b[1] - tgt2[1]) ** 2; if (e < best[0]) best = [e, x, z, a, b]; }
  return best.map((v) => (typeof v === 'number' ? +v.toFixed(4) : v)); };
for (const h of [0.18, 0.24]) { console.log('L h', h, JSON.stringify(solve(1, [0.08, 0.79], [0.08, 0.80], h, 0.2))); console.log('R h', h, JSON.stringify(solve(-1, [0.89, 0.795], [0.89, 0.80], h, 0.2))); }
