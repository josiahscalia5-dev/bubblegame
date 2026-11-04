/* Drum traversability scan, evaluated in the running game by game_eval.cjs (d = window.__bw.debug()):
   EVAL="$(cat drum_scan.js)" TIMES=0.1 S3=round3 node game_eval.cjs <demo-dir>
   Every drum vertex in 0.25 m slices along the path; reports the nearest wall to the tube axis above the water and any
   vertex inside the ride envelope (|x| <= lane + body radius, h from -0.6 to the top of a jump plus the body radius). */ (() => {
  const L = d.layout, W = d.world, TR = d.track, axisH = W.WATER + W.AXIS_H;
  const pts = [];
  d.scene.traverse((o) => { if (o.isMesh && o.geometry.index && o.geometry.index.count / 3 === 136387) {
    o.updateMatrixWorld(true); const p = o.geometry.attributes.position, v = new (d.camera.position.constructor)();
    for (let i = 0; i < p.count; i++) { v.fromBufferAttribute(p, i).applyMatrix4(o.matrixWorld); pts.push(v.x, v.y, v.z); } } });
  const F = TR.frame(L.tunnelStart), rows = []; let minClear = 99, minAt = null, inBox = 0, worst = null, lowH = -99;
  const env = { x: W.LANE + W.BODY_R, h0: -0.6, h1: W.FLOAT_H + 1.14 + W.BODY_R };
  for (let u = L.tunnelStart + 0.25; u < L.tunnelEnd; u += 0.25) {
    TR.frame(u, F); let mr = 99, box = 0;
    for (let i = 0; i < pts.length; i += 3) {
      const dx0 = pts[i] - F.P.x, dy0 = pts[i + 1] - F.P.y, dz0 = pts[i + 2] - F.P.z;
      const t = dx0 * F.T.x + dy0 * F.T.y + dz0 * F.T.z; if (Math.abs(t) > 0.125) continue;
      const x = dx0 * F.R.x + dy0 * F.R.y + dz0 * F.R.z, h = dx0 * F.U.x + dy0 * F.U.y + dz0 * F.U.z;
      if (h > 0.05) mr = Math.min(mr, Math.hypot(x, h - axisH));
      if (Math.abs(x) <= env.x && h >= env.h0 && h <= env.h1) { box++; lowH = Math.max(lowH, h); }
    }
    if (mr < minClear) { minClear = mr; minAt = +u.toFixed(2); }
    inBox += box; if (box && !worst) worst = +u.toFixed(2);
    rows.push([+u.toFixed(2), +mr.toFixed(3), box]);
  }
  return { vertices: pts.length / 3, tunnel: [L.tunnelStart, L.tunnelEnd], rideEnvelope: env, minWallDistanceFromAxis: +minClear.toFixed(3), at: minAt, drumVerticesInsideRideEnvelope: inBox, highestOfThose: +lowH.toFixed(3), firstAt: worst, sample: rows.filter((r, i) => i % 12 === 0) };
})()
