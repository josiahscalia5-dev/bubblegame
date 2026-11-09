// brush6 fit (lane brush6, session 47f75e22): run INSIDE the page as shots56.cjs's EVAL body (d = __bw.debug()), at the Scene 6 moment
// (ZS=tap,206). Fits each side's placement (du, x, h, s) so the pair at BRUSH6.anchor lands on the approved Scene 6's measured extents
// (the art director's grid measures, qa/art_director_ranking.md), with the lane bound as a hard penalty (inner bristle tips at
// |x| >= BRUSH6.minX). The water hides what is below it, so the visible foot is the higher of the tips and the waterline.
// Usage: EVAL="$(cat tools/brush6/fit_eval.js)" ... shots56.cjs   (FIT=0 in window.__b6NoFit to only measure)
// With BRUSH6.pull.on the brush is drawn over the water and the bank (depth pull), so its whole height counts; `drawn` = BRUSH6.report(camera).
const b = window.__bwBrush6, cam = d.camera;
// (shots56's `206` places him at u 206 and runs 0.4 s, so he is at ~208.9 here and ~209.1 in the picture, after one more 1/30 s step)
if (!b || Math.abs(d.mascotState.z - b.anchor) > 6) return { skipped: 'not at the anchor', z: d.mascotState.z };
const lead = (d.mascotState.speed || 7.2) / 30;   // the camera's travel before the screenshot: fitted placements move with it
const T = {
  left: { top: 0.34, bellInner: 0.155, pink: 0.16, blue: 0.20, bottom: 0.72 },
  right: { top: 0.42, bellInner: 0.89, pink: 0.862, blue: 0.82, bottom: 0.70 },
};
const WT = { top: 1, bellInner: 2, pink: 2, blue: 3, bottom: 1 };
const keys = ['du', 'x', 'h', 's'];
function errs(side) {
  b.place(); const m = b.measure(cam)[side]; if (!m) return null;
  const vis = b.pull && b.pull.on ? m.bottom : Math.min(m.bottom, m.waterAtInner);   // (pulled: drawn over the water, the whole brush shows)
  return { m, e: { top: m.top - T[side].top, bellInner: m.bellInner - T[side].bellInner, pink: m.tipsInner[0] - T[side].pink, blue: m.tipsInner[2] - T[side].blue, bottom: vis - T[side].bottom } };
}
function cost(side, v) {
  keys.forEach((k, i) => { b[side][k] = v[i]; });
  const r = errs(side); if (!r) return 1e9;
  let c = 0; for (const k in r.e) c += WT[k] * r.e[k] * r.e[k];
  if (r.m.innerX_m < b.minX) c += 50 * (b.minX - r.m.innerX_m) ** 2;           // never over the play lanes
  if (!(b.pull && b.pull.on) && r.m.bottom < r.m.waterAtInner - 0.004) c += 5 * (r.m.waterAtInner - r.m.bottom) ** 2;   // standing in the water, not floating
  if (v[3] < 0.2) c += 10;
  return c;
}
function nelder(side, x0, steps, iters = 400) {
  let S = [x0.slice()]; for (let i = 0; i < x0.length; i++) { const p = x0.slice(); p[i] += steps[i]; S.push(p); }
  let F = S.map((p) => cost(side, p));
  for (let it = 0; it < iters; it++) {
    const o = F.map((f, i) => i).sort((a, c) => F[a] - F[c]); S = o.map((i) => S[i]); F = o.map((i) => F[i]);
    const n = x0.length, c = new Array(n).fill(0); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += S[i][j] / n;
    const at = (t) => c.map((v, j) => v + t * (S[n][j] - v));
    const xr = at(-1), fr = cost(side, xr);
    if (fr < F[0]) { const xe = at(-2), fe = cost(side, xe); if (fe < fr) { S[n] = xe; F[n] = fe; } else { S[n] = xr; F[n] = fr; } }
    else if (fr < F[n - 1]) { S[n] = xr; F[n] = fr; }
    else { const xc = at(0.5), fc = cost(side, xc); if (fc < F[n]) { S[n] = xc; F[n] = fc; } else { for (let i = 1; i <= n; i++) { S[i] = S[i].map((v, j) => S[0][j] + 0.5 * (v - S[0][j])); F[i] = cost(side, S[i]); } } }
  }
  const o = F.map((f, i) => i).sort((a, c) => F[a] - F[c]);
  return { v: S[o[0]], f: F[o[0]] };
}
const res = {};
for (const side of ['left', 'right']) {
  const x0 = keys.map((k) => b[side][k]);
  if (!window.__b6NoFit) {
    let best = nelder(side, x0, [0.8, 0.3, 0.2, 0.08]);
    for (let r = 0; r < 3; r++) { const nb = nelder(side, best.v, [0.3, 0.1, 0.08, 0.03]); if (nb.f < best.f) best = nb; }
    cost(side, best.v); res[side] = { cost: +best.f.toFixed(6) };
  }
  const r = errs(side);
  res[side] = { ...(res[side] || {}), set: Object.fromEntries(keys.map((k) => [k, +b[side][k].toFixed(3)])), measured: r && r.m, err: r && Object.fromEntries(Object.entries(r.e).map(([k, v]) => [k, +v.toFixed(4)])) };
  if (!window.__b6NoFit) { b[side].du += lead; res[side].set.du = +b[side].du.toFixed(3); }   // (errors above: before the lead)
}
b.place();
return { fit: res, z: d.mascotState.z, lead, minX: b.minX, pull: b.pull, cam: cam.position.toArray().map((v) => +v.toFixed(3)), fov: cam.fov, drawn: b.report ? b.report(cam) : null };
