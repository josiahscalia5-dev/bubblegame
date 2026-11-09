import { C1, C2, proj, onPlane } from './proj.mjs';
const P = (n, a) => console.log(n.padEnd(30), JSON.stringify(a));
const o = []; for (const [sx, sy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) o.push(onPlane(C1, sx, sy, -1.3)); P('C1 backwall corners', o);
P('porthole c1', proj(C1, [0.3, 0.62, 0.27])); P('basket rim c1', proj(C1, [-0.2, 0.25, 1.47]));
for (const z of [-1.26, -1.3]) { P('win TL z' + z, onPlane(C1, 0.60, 0.215, z)); P('win BR z' + z, onPlane(C1, 0.81, 0.44, z)); }
P('win TL->c2', proj(C2, onPlane(C1, 0.60, 0.215, -1.26))); P('win BR->c2', proj(C2, onPlane(C1, 0.81, 0.44, -1.26)));
P('curL c1 .53/.60', [onPlane(C1, 0.53, 0.3, -1.18), onPlane(C1, 0.60, 0.3, -1.18)]); P('curR c1 .78/.90', [onPlane(C1, 0.78, 0.3, -1.18), onPlane(C1, 0.90, 0.3, -1.18)]);
P('cur top y.11', onPlane(C1, 0.6, 0.11, -1.18)); P('right edge y.2 z-1.3', onPlane(C1, 1.0, 0.2, -1.3)); P('x.95 y.2', onPlane(C1, 0.95, 0.2, -1.3));
P('washer TL face z.3 (.56,.3)', onPlane(C1, 0.56, 0.3, 0.3)); P('washer BR', onPlane(C1, 1.0, 0.7, 0.3));
for (const z of [-0.5, -0.3]) for (const y of [0.13, 0.215, 0.30, 0.38, 0.455, 0.525, 0.62]) P(`near z${z} y${y} x0/x.18`, [onPlane(C1, 0.0, y, z), onPlane(C1, 0.18, y, z)]);
P('mid unit TL z-1.15', onPlane(C1, 0.36, 0.2, -1.15)); P('mid unit BR', onPlane(C1, 0.53, 0.45, -1.15));
P('rug L c1 .11,.745', onPlane(C1, 0.11, 0.745, 0, 'y')); P('rug R c1 .92,.745', onPlane(C1, 0.92, 0.745, 0, 'y')); P('rug front .5,.775', onPlane(C1, 0.5, 0.775, 0, 'y')); P('rug back .5 .71', onPlane(C1, 0.5, 0.71, 0, 'y'));
P('floor y.62 x0/x1', [onPlane(C1, 0, 0.62, 0, 'y'), onPlane(C1, 1, 0.62, 0, 'y')]); P('floor y1 x.5', onPlane(C1, 0.5, 1, 0, 'y'));
for (const [n, p] of [['old fgL', [-0.44, 0.27, 1.9]], ['old fgR', [0.37, 0.27, 2.0]]]) P(n, [proj(C1, p), proj(C2, p)]);
