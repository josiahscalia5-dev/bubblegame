// arch56 (session ddf175f2): var6.cjs variant code. Screen bounds (fractions, y from the top) of the arch56 model instances within 14 m of the
// camera (each instance's bounding box corners projected with the live camera) and of the gears; clamped to the frame.
const cam = d.camera, V = cam.position.constructor; cam.updateMatrixWorld();
let a56 = null; scene.traverse((o) => { if (o.name === 'arch56') a56 = o; });
const out = [], M = new (cam.matrixWorld.constructor)(), cl = (v) => +Math.min(1, Math.max(0, v)).toFixed(3);
const box = (b, mw) => { const p = []; for (let i = 0; i < 8; i++) { const v = new V(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(mw); const q = v.clone().project(cam); if (q.z < 1) p.push([(q.x + 1) / 2, (1 - q.y) / 2]); }
  return p.length ? { x0: cl(Math.min(...p.map((a) => a[0]))), x1: cl(Math.max(...p.map((a) => a[0]))), y0: cl(Math.min(...p.map((a) => a[1]))), y1: cl(Math.max(...p.map((a) => a[1]))) } : null; };
for (const o of a56.children) {
  if (o.isInstancedMesh && o.visible) { o.geometry.computeBoundingBox(); for (let i = 0; i < o.count; i++) { o.getMatrixAt(i, M); const w = new V().setFromMatrixPosition(M); const dist = w.distanceTo(cam.position);
    const q = w.clone().project(cam); if (dist < 14 && q.z < 1 && q.x > -1.4 && q.x < 1.4) out.push({ n: o.name, dist: +dist.toFixed(2), ...box(o.geometry.boundingBox, M) }); } }
  if (o.name === 'a56Gear') { const w = o.getWorldPosition(new V()), dist = w.distanceTo(cam.position), q = w.clone().project(cam); if (dist < 14 && q.z < 1) out.push({ n: 'gear', dist: +dist.toFixed(2), hub: [cl((q.x + 1) / 2), cl((1 - q.y) / 2)], ...box(new (o.children[0].children[0].geometry ? Object : Object)() && (() => { const b = new (cam.position.constructor === V ? window.THREE_Box3 || Object : Object)(); return null; })() || { min: new V(-0.71, -0.71, -0.71), max: new V(0.71, 0.71, 0.71) }, o.matrixWorld) }); }
}
return out.sort((a, b) => a.dist - b.dist);
