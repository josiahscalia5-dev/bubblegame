// Lane s56 (session 3849f5c8): his DRAWN pose A/B on one frozen live-game frame. EVAL body for shots56.cjs (d, scene, B):
//   HEROAB='[[tag, {pitch, squash, wide, dy}], ...]' EVAL="$(cat tools/s56/heroab.js)" ... node tools/s56/shots56.cjs ...
// Each variant changes m.tilt only (added to this frame's pitch / position, scale set), re-renders with __bw.render() (no game step), and the
// canvas is returned as a PNG data URL (tools/s56/heroab_save.py writes them). Everything is restored after.
const M = d.mascotState, T = M.tilt, cv = d.renderer.domElement;
const V = window.__HEROAB || [['now', {}]];
const p0 = T.position.y, r0 = T.rotation.x, s0 = T.scale.clone(), out = {};
for (const [tag, v] of V) {
  T.position.y = p0 + (v.dy || 0); T.rotation.x = r0 + (v.pitch || 0); T.scale.set(v.wide || s0.x, v.squash || s0.y, v.wide || s0.z); T.updateMatrixWorld(true);
  B.render(); out[tag] = cv.toDataURL('image/png');
}
T.position.y = p0; T.rotation.x = r0; T.scale.copy(s0); T.updateMatrixWorld(true); B.render();
return out;
