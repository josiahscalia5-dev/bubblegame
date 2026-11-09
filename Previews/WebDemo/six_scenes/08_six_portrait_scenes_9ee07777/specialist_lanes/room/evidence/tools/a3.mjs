import { C1, C2, proj, onPlane } from './proj.mjs';
const P = (n, a) => console.log(n.padEnd(28), JSON.stringify(a));
// window box on z=-1.26
P('win TL c1', onPlane(C1, 0.607, 0.217, -1.26)); P('win BR c1', onPlane(C1, 0.783, 0.415, -1.26));
P('win TL c1 -> c2', proj(C2, onPlane(C1, 0.607, 0.217, -1.26))); P('win BR c1 -> c2', proj(C2, onPlane(C1, 0.783, 0.415, -1.26)));
P('curL in/out c1', [onPlane(C1, 0.527, 0.3, -1.18), onPlane(C1, 0.613, 0.3, -1.18)]); P('curR in/out c1', [onPlane(C1, 0.775, 0.3, -1.18), onPlane(C1, 0.914, 0.3, -1.18)]);
P('cur top y.11 c1', onPlane(C1, 0.6, 0.11, -1.18));
// washer proxy front face at z=0.3
P('washer TL', onPlane(C1, 0.56, 0.3, 0.3)); P('washer BR', onPlane(C1, 1.0, 0.7, 0.3)); P('bottle top', onPlane(C1, 0.72, 0.255, 0.1));
// near left unit at z=-0.5: shelf boards to match REF y (c1 x=0.05)
for (const y of [0.135, 0.215, 0.30, 0.38, 0.455, 0.525, 0.62]) P('nearL z-0.5 y' + y, [onPlane(C1, 0.0, y, -0.5), onPlane(C1, 0.18, y, -0.5)]);
for (const y of [0.215, 0.30, 0.455]) P('  -> c2 of x-1.7', proj(C2, [-1.7, onPlane(C1, 0.05, y, -0.5)[1], -0.5]));
// central unit c1 x .36-.53, y .2-.45 at z=-1.15
P('mid unit TL', onPlane(C1, 0.36, 0.2, -1.15)); P('mid unit BR', onPlane(C1, 0.53, 0.45, -1.15)); P('mid y.30', onPlane(C1, 0.45, 0.3, -1.15));
P('mid TL -> c2', proj(C2, onPlane(C1, 0.36, 0.2, -1.15))); P('mid BR -> c2', proj(C2, onPlane(C1, 0.53, 0.45, -1.15)));
// rug: REF01 x .11-.92 at y ~.74; rug centre basket (-0.005, 1.45)
P('rug L c1', onPlane(C1, 0.11, 0.745, 0, 'y')); P('rug R c1', onPlane(C1, 0.92, 0.745, 0, 'y')); P('rug front c1 y.77 x.5', onPlane(C1, 0.5, 0.775, 0, 'y'));
P('rug back c1', onPlane(C1, 0.5, 0.71, 0, 'y'));
// REF02 rug x 0-0.77, y .7-.79
P('rug L c2', onPlane(C2, 0.0, 0.75, 0, 'y')); P('rug R c2', onPlane(C2, 0.77, 0.74, 0, 'y'));
