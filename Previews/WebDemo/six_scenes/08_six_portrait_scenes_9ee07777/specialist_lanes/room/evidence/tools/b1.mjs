import { C1, C2, proj, onPlane } from './proj.mjs';
const P = (n, a) => console.log(n.padEnd(34), JSON.stringify(a));
for (const [n, C] of [['C1', C1], ['C2', C2]]) { const o = []; for (const [sx, sy] of [[0, 0], [1, 0], [0, 1], [1, 1]]) o.push(onPlane(C, sx, sy, -1.3)); P(n + ' backwall corners', o); }
P('porthole c1/c2', [proj(C1, [0.3, 0.62, 0.27]), proj(C2, [0.3, 0.62, 0.27])]);
P('win TL c1 (.60,.215) z-1.258', onPlane(C1, 0.60, 0.215, -1.258)); P('win BR c1 (.81,.44)', onPlane(C1, 0.81, 0.44, -1.258));
const TL = onPlane(C1, 0.60, 0.215, -1.258), BR = onPlane(C1, 0.81, 0.44, -1.258); P('-> c2', [proj(C2, TL), proj(C2, BR)]);
P('REF02 box on c2 TL .613,.215', onPlane(C2, 0.613, 0.215, -1.258)); P('REF02 BR .786,.40', onPlane(C2, 0.786, 0.40, -1.258));
P('curL c1 .53/.60 y.3', [onPlane(C1, 0.53, 0.3, -1.18), onPlane(C1, 0.60, 0.3, -1.18)]); P('curR c1 .78/.90', [onPlane(C1, 0.78, 0.3, -1.18), onPlane(C1, 0.90, 0.3, -1.18)]);
P('cur top y.11', onPlane(C1, 0.6, 0.11, -1.18)); P('c1 x.95,y.2 z-1.3', onPlane(C1, 0.95, 0.2, -1.3)); P('c1 x1,y.2', onPlane(C1, 1, 0.2, -1.3));
for (const z of [-0.5]) for (const y of [0.13, 0.215, 0.30, 0.38, 0.455, 0.525, 0.62]) P(`near z${z} y${y} x0/x.18`, [onPlane(C1, 0.0, y, z), onPlane(C1, 0.18, y, z)]);
P('mid unit TL z-1.12', onPlane(C1, 0.36, 0.2, -1.12)); P('mid unit BR', onPlane(C1, 0.53, 0.45, -1.12)); P('wall shelf .25,.22 z-1.15', onPlane(C1, 0.25, 0.22, -1.15));
P('rug L c1 .11,.745', onPlane(C1, 0.11, 0.745, 0, 'y')); P('rug R .92,.745', onPlane(C1, 0.92, 0.745, 0, 'y')); P('rug front .5,.775', onPlane(C1, 0.5, 0.775, 0, 'y'));
P('floor c1 y1 x.5', onPlane(C1, 0.5, 1, 0, 'y')); P('floor c1 .0,.85', onPlane(C1, 0, 0.85, 0, 'y')); P('floor c1 1,.85', onPlane(C1, 1, 0.85, 0, 'y'));
P('floor c2 y1 x.5', onPlane(C2, 0.5, 1, 0, 'y')); P('floor c2 0,.85', onPlane(C2, 0, 0.85, 0, 'y')); P('floor c2 1,.85', onPlane(C2, 1, 0.85, 0, 'y'));
P('near unit right front c1/c2', [proj(C1, [-1.22, 1.6, -0.32]), proj(C2, [-1.22, 1.6, -0.32])]);
P('pilaster (0.42,1.6,-1.24) c1/c2', [proj(C1, [0.42, 1.6, -1.24]), proj(C2, [0.42, 1.6, -1.24])]);
P('girl head c1 (-0.5,0.85,1.45)', proj(C1, [-0.5, 0.85, 1.45]));
