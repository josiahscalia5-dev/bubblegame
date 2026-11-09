import { C1, C2, proj, onPlane } from './proj.mjs';
const P = (n, a) => console.log(n.padEnd(30), JSON.stringify(a));
P('wall shelf .25,.22 z-1.15', onPlane(C1, 0.25, 0.22, -1.15)); P('.13,.25', onPlane(C1, 0.13, 0.25, -1.15)); P('.36,.25', onPlane(C1, 0.36, 0.25, -1.15));
P('girl head (-0.52,0.95,1.45)', proj(C1, [-0.52, 0.95, 1.45])); P('washer top-left (-0.2,1.15,0.0)', proj(C1, [-0.2, 1.15, 0.0])); P('washer top (0.3,1.2,0)', proj(C1, [0.3, 1.2, 0]));
P('near unit right front (-1.22,1.6,-0.32)', proj(C1, [-1.22, 1.6, -0.32])); P('near unit left (-2.3,1.6,-0.32)', proj(C1, [-2.3, 1.6, -0.32]));
P('near unit right front c2', proj(C2, [-1.22, 1.6, -0.32]));
P('2nd window left edge (0.5,1.6,-1.25)', proj(C1, [0.5, 1.6, -1.25])); P('pilaster (0.4,1.6,-1.2)', proj(C1, [0.4, 1.6, -1.2]));
P('fgR c2 (0.384,0.08,2.4)', proj(C2, [0.384, 0.08, 2.4])); P('fgR c2 (0.58,0.16,2.25)', proj(C2, [0.58, 0.16, 2.25]));
