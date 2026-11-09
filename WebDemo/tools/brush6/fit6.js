// brush6 fit for tools/env6/var6.cjs (lane brush6, session ddf175f2): run as a variant's code (d = __bw.debug()) on the frozen u 206 frame.
// Fits each side's placement and proportions (du, x, h, s, sy, flare) so the pair at BRUSH6.anchor lands on the approved Scene 6's measured
// extents (WebDemo/tools/env6/TARGETS.md), with the lane bound as a hard penalty (inner bristle tips at |x| >= BRUSH6.minX). The anchor pair
// is drawn with the depth pull (over the water and the bank), so its whole height counts. var6 never steps the game: no camera lead.
//   VARS="$(node -e 'console.log(JSON.stringify([["fit", require("fs").readFileSync("tools/brush6/fit6.js","utf8")]]))')" ... var6.cjs
// window.__b6NoFit = 1: only measure.
const b = window.__bwBrush6, cam = d.camera;
if (!b) return { skipped: 'no brush6' };
const T = {
  left: { top: 0.34, bellInner: 0.13, tipsInner: [0.17, 0.19, 0.20, 0.21], tipsY: [0.551, 0.597, 0.656, 0.714] },
  right: { top: 0.44, bellInner: 0.89, tipsInner: [0.86, 0.84, 0.82, 0.80], tipsY: [0.565, 0.617, 0.669, 0.714] },
};
const keys = ['du', 'x', 'h', 's', 'sy', 'flare'];
function errs(side) {
  b.place(); const m = b.measure(cam)[side]; if (!m) return null;
  const t = T[side], e = { top: m.top - t.top, bellInner: m.bellInner - t.bellInner };
  m.tipsInner.forEach((v, i) => { e['x' + i] = v - t.tipsInner[i]; });
  m.tipsY.forEach((v, i) => { e['y' + i] = v - t.tipsY[i]; });
  return { m, e };
}
const WT = { top: 2, bellInner: 2, x0: 2, x1: 2, x2: 2, x3: 2, y0: 2, y1: 1, y2: 1, y3: 3 };
function cost(side, v) {
  keys.forEach((k, i) => { b[side][k] = v[i]; });
  const r = errs(side); if (!r) return 1e9;
  let c = 0; for (const k in r.e) c += (WT[k] || 1) * r.e[k] * r.e[k];
  if (r.m.innerX_m < b.minX) c += 50 * (b.minX - r.m.innerX_m) ** 2;           // never over the play lanes
  if (v[3] < 0.2) c += 10;
  if (v[4] < 0.92 || v[4] > 1.12) c += 20 * (v[4] < 0.92 ? 0.92 - v[4] : v[4] - 1.12) ** 2;   // keep the proportions near the built ones
  if (v[5] < -0.15 || v[5] > 0.4) c += 5 * (v[5] < -0.15 ? -0.15 - v[5] : v[5] - 0.4) ** 2;
  return c;
}
function nelder(side, x0, steps, iters = 500) {
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
  const x0 = keys.map((k) => b[side][k] ?? (k === 'sy' ? 1 : 0));
  if (!window.__b6NoFit) {
    let best = nelder(side, x0, [0.8, 0.3, 0.2, 0.08, 0.08, 0.08]);
    for (let r = 0; r < 3; r++) { const nb = nelder(side, best.v, [0.3, 0.1, 0.08, 0.03, 0.04, 0.04]); if (nb.f < best.f) best = nb; }
    cost(side, best.v); res[side] = { cost: +best.f.toFixed(6) };
  }
  const r = errs(side);
  res[side] = { ...(res[side] || {}), set: Object.fromEntries(keys.map((k) => [k, +b[side][k].toFixed(3)])), measured: r && r.m, err: r && Object.fromEntries(Object.entries(r.e).map(([k, v]) => [k, +v.toFixed(4)])) };
}
b.place();
return { fit: res, z: d.mascotState.z, minX: b.minX, pull: b.pull };
