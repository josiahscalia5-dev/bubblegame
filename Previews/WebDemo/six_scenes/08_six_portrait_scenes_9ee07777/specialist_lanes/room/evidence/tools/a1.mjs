import { C1, C2, proj, onPlane, tri } from './proj.mjs';
console.log('cam1 forward', C1.getWorldDirection(new (await import('/home/user/bubblegame_lanes/room/WebDemo/node_modules/three/build/three.module.js')).Vector3()).toArray());
// current objects
for (const [n, p] of [['winC', [-0.25, 1.55, -1.27]], ['winTL', [-0.53, 2.09, -1.27]], ['winBR', [0.03, 1.01, -1.27]], ['curL', [-0.67, 1.4, -1.18]], ['curR', [0.17, 1.4, -1.18]], ['porth', [0.3, 0.62, 0.27]], ['basket', [-0.055, 0.33, 1.47]], ['fgL', [-0.62, 0.1, 1.9]], ['fgR', [0.55, 0.1, 2.0]], ['shelfL0', [-2.4, 0.95, -1.08]], ['shelfL1', [-0.78, 2.45, -1.08]], ['wallTopL', [-3.5, 4.2, -1.3]], ['floorFar', [0, 0, -1.3]], ['sideWallX', [-2.4, 1, 0.9]]]) console.log(n, 'c1', proj(C1, p), 'c2', proj(C2, p));
// triangulate window landmarks from REF01 / REF02
for (const [n, a, b] of [['win top-left', [0.613, 0.218], [0.613, 0.215]], ['win top-right', [0.781, 0.218], [0.786, 0.215]], ['win mullion top', [0.70, 0.218], [0.70, 0.215]], ['curtain L outer', [0.527, 0.3], [0.527, 0.3]], ['curtain R outer', [0.914, 0.3], [0.93, 0.3]]]) console.log(n, JSON.stringify(tri(a, b)));
for (const z of [-1.3, -2.0, -2.6]) console.log('z', z, 'winTL', onPlane(C1, 0.613, 0.218, z), 'winBR', onPlane(C1, 0.781, 0.41, z), 'c2 proj TL', proj(C2, onPlane(C1, 0.613, 0.218, z)), 'BR', proj(C2, onPlane(C1, 0.781, 0.41, z)));
