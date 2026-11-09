// arch56 probe (lane arch56): EVAL code for tools/s56/shots56.cjs. Returns screen fractions (x, y from the top-left) of the tunnel's vanishing
// point, the mascot's drawn bounds, each visible cobalt gear and the named arch56 models, projected with the live camera (no guessing).
// Usage: EVAL="$(cat tools/arch56/probe.js)" ... node tools/s56/shots56.cjs ...
const cam = d.camera, TR = d.track, m = d.mascotState, V = cam.position.constructor;
cam.updateMatrixWorld();
const proj = (v) => { const p = v.clone().project(cam); return [+((p.x + 1) / 2).toFixed(4), +((1 - p.y) / 2).toFixed(4), +p.z.toFixed(4)]; };
const F = { P: new V(), R: new V(), U: new V(), T: new V() };
const A = (window.__bwArch56 && window.__bwArch56.A) || 0.84;
const vp = {}; for (const du of [8, 15, 30, 60]) { TR.frame(m.z + du, F); vp[du] = proj(F.P.clone().addScaledVector(F.U, A)); }
const bb = (o) => { const pts = []; o.updateMatrixWorld(true); o.traverse((c) => { if (!c.isMesh || !c.geometry) return; c.geometry.computeBoundingBox && !c.geometry.boundingBox && c.geometry.computeBoundingBox(); const b = c.geometry.boundingBox; if (!b) return;
  for (let i = 0; i < 8; i++) pts.push(proj(new V(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z).applyMatrix4(c.matrixWorld))); });
  const f = pts.filter((p) => p[2] < 1 && p[2] > -1); if (!f.length) return null;
  return { x0: Math.min(...f.map((p) => p[0])).toFixed(3), x1: Math.max(...f.map((p) => p[0])).toFixed(3), y0: Math.min(...f.map((p) => p[1])).toFixed(3), y1: Math.max(...f.map((p) => p[1])).toFixed(3) }; };
TR.frame(m.z - 3.0, F); const camH = +cam.position.clone().sub(F.P).dot(F.U).toFixed(3); TR.frame(m.z, F); const heroH = +d.mascot.position.clone().sub(F.P).dot(F.U).toFixed(3);
const out = { camH, heroH, camPos: cam.position.toArray().map((v) => +v.toFixed(3)), fov: cam.fov, mz: m.z, vp, mascot: bb(d.mascot), gears: [], models: [] };
d.scene.traverse((o) => { if (o.name === 'a56Gear' || o.name === 's56Gear') { const w = o.getWorldPosition(new V()); const p = proj(w); if (p[2] < 1 && p[0] > -0.5 && p[0] < 1.5) out.gears.push({ c: p, box: bb(o), dist: +w.distanceTo(cam.position).toFixed(2) }); }
  if (o.name && o.name.startsWith('a56M_')) { const w = o.getWorldPosition(new V()); const p = proj(w); if (p[2] < 1 && p[0] > -0.3 && p[0] < 1.3 && w.distanceTo(cam.position) < 30) out.models.push({ n: o.name, c: p, box: bb(o), dist: +w.distanceTo(cam.position).toFixed(2) }); } });
return out;
