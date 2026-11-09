import * as THREE from '/home/user/bubblegame_lanes/room/WebDemo/node_modules/three/build/three.module.js';
const mk = (p, t, f) => { const c = new THREE.PerspectiveCamera(f, 864 / 1536, 0.01, 50); c.position.set(...p); c.lookAt(...t); c.updateProjectionMatrix(); c.updateMatrixWorld(); return c; };
export const C1 = mk([0.002, 0.5, 4.116], [-0.349, 0.458, 0.555], 41.2), C2 = mk([0.524, 0.538, 3.976], [-0.155, 0.515, 0.796], 39.1);
export const proj = (c, p) => { const v = new THREE.Vector3(...p).project(c); return [+((v.x + 1) / 2).toFixed(3), +((1 - v.y) / 2).toFixed(3)]; };
export const ray = (c, sx, sy) => { const v = new THREE.Vector3(sx * 2 - 1, 1 - sy * 2, 0.5).unproject(c); return [c.position.clone(), v.sub(c.position).normalize()]; };
// screen point -> world on plane z = Z (or x = X if axis 'x')
export const onPlane = (c, sx, sy, val, axis = 'z') => { const [o, d] = ray(c, sx, sy); const t = (val - o[axis]) / d[axis]; const p = o.addScaledVector(d, t); return [+p.x.toFixed(3), +p.y.toFixed(3), +p.z.toFixed(3)]; };
// triangulate: closest point between ray1 (C1 at s1) and ray2 (C2 at s2)
export const tri = (s1, s2) => { const [o1, d1] = ray(C1, ...s1), [o2, d2] = ray(C2, ...s2); const w = o1.clone().sub(o2), a = d1.dot(d1), b = d1.dot(d2), c = d2.dot(d2), d = d1.dot(w), e = d2.dot(w), den = a * c - b * b; const t1 = (b * e - c * d) / den, t2 = (a * e - b * d) / den; const p1 = o1.clone().addScaledVector(d1, t1), p2 = o2.clone().addScaledVector(d2, t2); return { p: p1.clone().add(p2).multiplyScalar(0.5).toArray().map((v) => +v.toFixed(3)), gap: +p1.distanceTo(p2).toFixed(3) }; };
