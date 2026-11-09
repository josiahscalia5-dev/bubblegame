import { C1, C2, proj, onPlane } from './proj.mjs';
const f = (c, n) => { const o = []; for (const [sx, sy] of [[0, 0], [1, 0], [0, 1], [1, 1], [0.05, 0.2], [0.05, 0.5], [0.5, 0.0]]) o.push(`${sx},${sy}:` + JSON.stringify(onPlane(c, sx, sy, -1.3))); console.log(n, 'backwall z=-1.3', o.join(' ')); };
f(C1, 'C1'); f(C2, 'C2');
// floor intersections (y=0)
for (const c of [['C1', C1], ['C2', C2]]) { const o = []; for (const [sx, sy] of [[0, 0.62], [0, 0.75], [0, 0.85], [1, 0.75], [1, 0.85], [0.5, 1.0], [0.95, 0.83], [0.04, 0.82], [0.04, 0.86]]) o.push(`${sx},${sy}:` + JSON.stringify(onPlane(c[1], sx, sy, 0, 'y'))); console.log(c[0], 'floor', o.join(' ')); }
// fg towels extents
for (const [x, z] of [[-0.62, 1.9], [0.55, 2.0]]) for (const dx of [-0.18, 0.18]) for (const y of [0, 0.27]) console.log('fg', x, z, dx, y, proj(C1, [x + dx, y, z]), proj(C2, [x + dx, y, z]));
// left strip at several depths
for (const z of [-1.08, -0.6, -0.2, 0.2]) console.log('z', z, 'C1 x0.0 y.15', onPlane(C1, 0.0, 0.15, z), 'x.12 y.5', onPlane(C1, 0.12, 0.5, z), 'C2 x0 y.15', onPlane(C2, 0, 0.15, z), 'C2 x.12,.5', onPlane(C2, 0.12, 0.5, z));
