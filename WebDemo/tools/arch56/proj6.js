// arch56 (session ddf175f2): var6.cjs variant code. Returns the live camera in the track frame at the mascot (x across, +x = screen-left; y up from
// the track point; z along the run), the vanishing point, and screen fractions (x, y from the top-left) of a grid of track-frame points
// (du ahead of the mascot, x across, y above the track point), for laying out the Scene 6 machinery against the approved image's measures.
const cam = d.camera, TR = d.track, m = d.mascotState, V = cam.position.constructor;
cam.updateMatrixWorld();
const proj = (v) => { const p = v.clone().project(cam); return [+((p.x + 1) / 2).toFixed(3), +((1 - p.y) / 2).toFixed(3)]; };
const F = { P: new V(), R: new V(), U: new V(), T: new V() };
const at = (du, x, y) => { TR.frame(m.z + du, F); return F.P.clone().addScaledVector(F.R, x).addScaledVector(F.U, y); };
TR.frame(m.z, F); const rel = cam.position.clone().sub(F.P);
const camT = [+rel.dot(F.R).toFixed(3), +rel.dot(F.U).toFixed(3), +rel.dot(F.T).toFixed(3)];
const grid = {};
for (const du of (window.__P6DU || [1, 2, 3, 4, 5, 6, 8, 10, 13, 17, 24, 35])) for (const x of (window.__P6X || [2.4, 2.0, 1.6, 1.25, -1.25, -1.6, -2.0, -2.4])) for (const y of (window.__P6Y || [0, 1, 2, 2.6, 3.2])) grid[`${du}|${x}|${y}`] = proj(at(du, x, y));
const vp = proj(at(80, 0, 0.84));
const R = d.renderer; R.info.autoReset = false; R.info.reset(); B.render(); const ri = { calls: R.info.render.calls, triangles: R.info.render.triangles }; R.info.autoReset = true;
// arch56's own share: render once with the arch56 group hidden
let a56 = null; scene.traverse((o) => { if (o.name === 'arch56') a56 = o; });
let own = null; if (a56) { a56.visible = false; R.info.autoReset = false; R.info.reset(); B.render(); own = { calls: ri.calls - R.info.render.calls, triangles: ri.triangles - R.info.render.triangles }; R.info.autoReset = true; a56.visible = true; }
return { camT, fov: cam.fov, aspect: cam.aspect, mz: m.z, vp, calls: ri.calls, tris: ri.triangles, arch56: own, grid };
