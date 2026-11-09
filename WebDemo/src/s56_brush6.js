// brush6 (9 November 2026, session 47f75e22, lane brush6): Scene 6's large rotating laundry brushes at the left and right foreground,
// matched to the user's ORIGINAL APPROVED Scene 6
// (Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png).
// Switch `?s3=...,s56,brush6` (with s56 and level1). Without `brush6` nothing is built and the game is unchanged.
// Called by the coordinator hook in s56_tunnel.js section 0 (after arch56); it returns { update(dt, time, phase, m) }.
// Lane brush6 owns this file and WebDemo/tools/brush6/ only (Tools/lanes.json, PARALLEL_LANES.md).
//
// What it is (real 3D, code-built; no existing model fitted the approved brush: brush_p2.glb is a pink scale ball, s3_brush.glb a round
// wheel brush, the Meshy WashingRoller has the wrong band order and 133k triangles):
//   - a vertical roller: a gold top drum, a gold studded flange, a glossy pink bell with gold four-point stars, a gold rim band, then
//     four flared skirts of straight bristles, from the top: hot pink, white-lilac, royal blue, pale blue (the approved's order);
//   - the bristles use fluffy_brush.js's fur technique turned to a roller: each skirt is a cone of stacked shells, every shell draws
//     tapered strands (discard), strands gather into tufts at the root and splay to ragged lobed tips, darker roots and pale tips,
//     an anisotropic gloss along the strands and a sheen at the silhouette; the innermost shell is solid (no see-through);
//   - the cap reuses s56's gold (M.gold) and a pink gloss in the style of M.pinkGloss;
//   - fixed to the track (TR.frame), a pair every BRUSH6.every metres inside BRUSH6.spans, one pair at BRUSH6.anchor (the Scene 6
//     moment, u 206) in the approved places; outside the play lanes (inner bristle tips at |x| >= BRUSH6.minX); each turns about its
//     own vertical axis. Decoration only: no collisions, lanes, pickups or the game's own brushes are touched.
// Every number is in BRUSH6 (window.__bwBrush6 in the browser); after changing placement numbers call __bwBrush6.place().
// No random numbers are drawn (the game's seeded Math.random is never used).
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const BRUSH6_ON = LIST.includes('brush6') && LIST.includes('s56');

// every number (window.__bwBrush6 in the browser)
export const BRUSH6 = {
  // placement: a pair at u = anchor + k * every (inside spans), each side at u + du, lateral x (track frame, + = screen-left), height h
  // above the water's centre-line base height (m), scale s = the pink bell's radius in metres (the brush is built in bell radii, below)
  anchor: 206, every: 26, spans: [[150, 258]], far: 60, near: -4, minX: 1.25,
  // (fitted by tools/brush6/fit_eval.js at shots56's `206` shot, hero at u 209.1 in the picture: inner tips exactly at minX)
  left: { du: 5.431, x: 2.057, h: -0.632, s: 0.612, hat: 0.5, dir: 1 },
  right: { du: 5.379, x: -1.89, h: -0.618, s: 0.485, hat: 0.0, dir: -1 },   // (the approved right brush shows no gold top drum)
  spin: 3.0,   // rad/s about the brush's own axis (about 0.5 rev/s: faster strobes the strands at 30-60 fps)
  // the skirts, top to bottom: [yRoot, yTip, rRoot, rTip] in bell radii (y from the lowest tips). The art director's measured shares of the
  // bristle height (qa/art_director_ranking.md): pink 26 %, white-lavender 23 %, royal blue 34 %, pale blue 17 %; bristles 62 % of the brush
  tiers: [[2.80, 2.00, 0.62, 1.08], [2.30, 1.38, 0.70, 1.20], [1.75, 0.46, 0.74, 1.27], [0.95, 0.0, 0.78, 1.32]],
  cap: { rim: [2.70, 2.93, 0.94], bell: 3.54, flange: [3.86, 0.66] },
  fur: { layers: 7, thick: 0.15, flare: 0.1, strands: 210, tufts: 26, around: 56, along: 6 },
  // the approved's colours (band medians, 20 % / 80 % luminance means), the lit body kept under the Neutral tone mapping's ~0.76 knee
  // (linear): pink (0.72, 0.01, 0.29), white-lavender (0.40, 0.24, 0.72), royal blue (0.0, 0.10, 0.72), pale blue (0.05, 0.21, 0.70)
  colours: {
    dark: ['#b0035f', '#7d5cb0', '#0134a8', '#1452a8'],
    med: ['#dd1993', '#aa86dd', '#0459dd', '#3f7edb'],
    lite: ['#f064d0', '#e8d8f8', '#3a9cf0', '#b8cdf4'],
  },
  light: { amb: 0.5, dif: 0.62, spec: 0.5, sheen: 0.22, side: 1.1 },
  bell: { color: '#f86fc8', emissive: '#8a1a5a', ei: 0.45, metal: 0.25, rough: 0.2 },
};
if (BRUSH6_ON && typeof window !== 'undefined') window.__bwBrush6 = BRUSH6;

const HAZE = /* glsl */ `
vec3 b6Haze(vec3 c, vec3 wp) {   // the same far glow as s56_tunnel.js s56Haze, so distant brushes sit in the tunnel's light
  float d = length(wp - cameraPosition);
  float k = smoothstep(9.0, 70.0, d);
  vec3 far = mix(vec3(0.16, 0.10, 0.62), vec3(0.42, 0.55, 1.02), smoothstep(26.0, 75.0, d));
  return mix(c, far, k * 0.9);
}`;

const BRISTLE_VERTEX = /* glsl */ `
attribute float aLayer;   // instanced: 0 the solid inner shell .. 1 the outer shell
attribute vec4 aS;        // t (root 0 .. tip 1), angle (0..1 round the axis), tier (0 pink .. 3 pale), unused
attribute vec3 aDir;      // the strand's direction, root to tip
uniform float uThick, uFlare, uSide;
varying vec4 vS; varying float vH; varying vec3 vN; varying vec3 vD; varying vec3 vW; varying vec3 vL;
void main() {
  float h = aLayer, t = aS.x;
  vec3 n = normalize(normal);
  vec3 p = position + n * uThick * (h - 1.0) + n * uFlare * h * t * t;   // inner shells inset; the outer shells' tips lift (fluff)
  vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * n); vD = normalize(mat3(modelMatrix) * aDir);
  vS = aS; vH = h;
  // light from the tunnel's middle, toward the viewer and above: the side facing the channel is lit, the outer side falls off
  vec3 C = (modelMatrix * vec4(0.0, 2.0, 0.0, 1.0)).xyz, toCam = cameraPosition - C; toCam.y = 0.0;
  vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vL = normalize(normalize(toCam) + camR * uSide + vec3(0.0, 0.8, 0.0));
  gl_Position = projectionMatrix * viewMatrix * w;
}`;
const BRISTLE_FRAGMENT = /* glsl */ `
uniform float uStrands, uTufts, uAmb, uDif, uSpec, uSheen;
uniform vec3 uDark[4], uMed[4], uLite[4];
varying vec4 vS; varying float vH; varying vec3 vN; varying vec3 vD; varying vec3 vW; varying vec3 vL;
// sine-free hash (fluffy_brush.js fbH: stable for large cell indices)
float b6H(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
${HAZE}
void main() {
  float t = vS.x, h = vH; int k = int(vS.z + 0.5);
  float a = vS.y * uTufts, ti = floor(a), tf = fract(a) - 0.5;
  float tr = b6H(vec2(ti, vS.z * 7.0 + 1.0));
  // the tuft: strands gathered toward its middle at the root, splayed at the tip
  float sc = (ti + 0.5 + tf * mix(0.62, 1.06, t)) * (uStrands / uTufts) + h * 3.7 + vS.z * 1.3;
  float si = floor(sc), sf = fract(sc) - 0.5, sr = b6H(vec2(si, h * 31.0 + vS.z * 13.0));
  // each tuft ends in a lobe (its edge strands shorter), every strand a little different
  float len = 1.0 - 0.12 * sr - 0.26 * (4.0 * tf * tf) - 0.07 * tr;
  float w = mix(0.42, 0.1, clamp(t / len, 0.0, 1.0));
  if (h < 0.01) { if (t > len * 0.7) discard; }
  else if (abs(sf) > w || t > len) discard;
  vec3 dk = uDark[k], md = uMed[k], lt = uLite[k];
  vec3 col = mix(md, lt, 0.08 + 0.22 * tr) * (0.86 + 0.26 * sr);
  col = mix(dk, col, smoothstep(0.0, 0.5, t));                          // darker roots
  col = mix(col, lt, 0.42 * smoothstep(0.62, 1.0, t / len));             // pale tips
  float ao = mix(0.45, 1.0, h) * mix(0.72, 1.0, smoothstep(0.5, 0.25, abs(tf)) * 0.6 + 0.4 * h);   // deeper shells and the gaps darker
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW), L = normalize(vL), D = normalize(vD);
  float dif = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  vec3 H = normalize(L + V); float th = dot(D, H), spec = pow(sqrt(max(0.0, 1.0 - th * th)), 64.0);   // gloss along the strands
  vec3 c = col * (uAmb + uDif * dif) * ao + mix(lt, vec3(1.0), 0.5) * spec * uSpec * h * dif;
  c += vec3(1.0, 0.95, 1.0) * pow(1.0 - abs(dot(N, V)), 3.0) * uSheen * h;
  gl_FragColor = vec4(b6Haze(c, vW), 1.0);
}`;

// ---------------------------------------------------------------- geometry (bell-radius units, axis +Y, y = 0 at the lowest tips)
function bristleGeometry(P) {
  const F = P.fur, pos = [], nrm = [], sAt = [], dir = [], idx = [];
  let base = 0;
  P.tiers.forEach(([y0, y1, r0, r1], tier) => {
    const cols = F.around + 1, dy = y1 - y0;
    for (let j = 0; j <= F.along; j++) {
      const t = j / F.along, r = r0 + (r1 - r0) * (0.55 * t + 0.45 * t * t), dr = (r1 - r0) * (0.55 + 0.9 * t), y = y0 + dy * t;
      const l = Math.hypot(dy, dr);
      for (let i = 0; i < cols; i++) {
        const a = i / F.around, ph = a * Math.PI * 2, c = Math.cos(ph), s = Math.sin(ph);
        pos.push(r * c, y, r * s); nrm.push((-dy / l) * c, dr / l, (-dy / l) * s); dir.push((dr / l) * c, dy / l, (dr / l) * s); sAt.push(t, a, tier, 0);
        if (i < F.around && j < F.along) { const q = base + j * cols + i; idx.push(q, q + cols, q + 1, q + 1, q + cols, q + cols + 1); }
      }
    }
    base += cols * (F.along + 1);
  });
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('aS', new THREE.Float32BufferAttribute(sAt, 4)); g.setAttribute('aDir', new THREE.Float32BufferAttribute(dir, 3));
  g.setIndex(idx);
  const h = new Float32Array(F.layers); for (let i = 0; i < F.layers; i++) h[i] = i / (F.layers - 1);
  g.setAttribute('aLayer', new THREE.InstancedBufferAttribute(h, 1)); g.instanceCount = F.layers;
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 2.0, 0), 3.0);
  return g;
}
function star4(size, depth) {   // a gold four-point star (a low pyramid on an eight-point outline), lying in XY, facing +Z
  const pos = [0, 0, depth], idx = [];
  for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2 + Math.PI / 2, r = i % 2 === 0 ? size : size * 0.34; pos.push(Math.cos(a) * r, Math.sin(a) * r, 0); }
  for (let i = 0; i < 8; i++) idx.push(0, 1 + i, 1 + ((i + 1) % 8));
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Array(9 * 2).fill(0), 2)); g.computeVertexNormals();
  return g;
}
const lathe = (pts, n = 48) => new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), n);
function bellProfile(P) {   // bottom up: from the rim band (radius 1, a vertical side) over the shoulder to the flange (horizontal)
  const y0 = P.cap.rim[1], y1 = P.cap.bell, rf = P.cap.flange[1], pts = [];
  for (let i = 0; i <= 12; i++) { const a = (i / 12) * Math.PI / 2; pts.push([rf + (1.0 - rf) * Math.cos(a), y0 + (y1 - y0) * Math.sin(a)]); }
  return pts;
}
function capGeometries(P, hat) {
  const [ry0, ry1, rr] = P.cap.rim, yb = P.cap.bell, [yf, rf] = P.cap.flange, gold = [];
  gold.push(lathe([[0.6, ry0], [rr - 0.02, ry0], [rr + 0.02, ry0 + 0.04], [rr + 0.02, ry1 - 0.04], [rr - 0.02, ry1], [0.6, ry1]]));   // the rim band under the bell
  gold.push(lathe([[0.3, yb - 0.02], [rf + 0.02, yb - 0.02], [rf + 0.05, yb + 0.03], [rf + 0.05, yf - 0.05], [rf + 0.01, yf], [0.0, yf]]));   // the studded flange
  if (hat > 0.02) gold.push(lathe([[0.0, yf - 0.02], [0.5, yf - 0.02], [0.5, yf + hat - 0.06], [0.47, yf + hat - 0.01], [0.42, yf + hat], [0.0, yf + hat]]));   // the gold top drum
  const m4 = new THREE.Matrix4();
  for (let i = 0; i < 16; i++) { const a = (i / 16) * Math.PI * 2, s = new THREE.SphereGeometry(0.045, 8, 6); s.applyMatrix4(m4.makeTranslation(Math.cos(a) * (rf + 0.05), (yb + yf) / 2, Math.sin(a) * (rf + 0.05))); gold.push(s); }
  if (hat > 0.2) for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 2 + 0.2, s = new THREE.SphereGeometry(0.035, 8, 6); s.applyMatrix4(m4.makeTranslation(Math.cos(a) * 0.5, yf + hat * 0.3, Math.sin(a) * 0.5)); gold.push(s); }
  // gold stars on the bell, tangent to its surface
  const bp = bellProfile(P), q = new THREE.Quaternion(), zAxis = new THREE.Vector3(0, 0, 1);
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2 + (i % 2) * 0.25, row = i % 2 === 0 ? 4 : 7, [r, y] = bp[row], [r2, y2] = bp[row + 1];
    const nr = y2 - y, ny = -(r2 - r), nl = Math.hypot(nr, ny), N = new THREE.Vector3((nr / nl) * Math.cos(a), ny / nl, (nr / nl) * Math.sin(a));
    const g = star4(0.11, 0.035); q.setFromUnitVectors(zAxis, N);
    g.applyMatrix4(m4.compose(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r).addScaledVector(N, 0.005), q, new THREE.Vector3(1, 1, 1))); gold.push(g);
  }
  const clean = (g) => { const o = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(o.attributes)) if (!['position', 'normal', 'uv'].includes(k)) o.deleteAttribute(k); return o; };
  const goldG = mergeGeometries(gold.map(clean), false); goldG.computeBoundingSphere();
  const bellG = lathe(bp, 48); bellG.computeBoundingSphere();
  return { gold: goldG, bell: bellG };
}

/** ctx: { scene, TR, W, L, env, loader, root, S (S56), M (s56 materials), F, frameM, T4, timeU, heroU, report, arch, ctx }. */
export async function buildBrush6(ctx) {
  const { TR, W, L, env, root, M, report } = ctx, P = BRUSH6;
  const group = new THREE.Group(); group.name = 'b6Brushes'; root.add(group);
  const C = P.colours, col = (a) => a.map((h) => new THREE.Color(h));
  const mkBristleMat = (side) => new THREE.ShaderMaterial({
    uniforms: {
      uThick: { value: P.fur.thick }, uFlare: { value: P.fur.flare }, uSide: { value: side * P.light.side },
      uStrands: { value: P.fur.strands }, uTufts: { value: P.fur.tufts },
      uAmb: { value: P.light.amb }, uDif: { value: P.light.dif }, uSpec: { value: P.light.spec }, uSheen: { value: P.light.sheen },
      uDark: { value: col(C.dark) }, uMed: { value: col(C.med) }, uLite: { value: col(C.lite) },
    },
    vertexShader: BRISTLE_VERTEX, fragmentShader: BRISTLE_FRAGMENT,
  });
  const B = P.bell;
  const bellMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(B.color), emissive: new THREE.Color(B.emissive), emissiveIntensity: B.ei, metalness: B.metal, roughness: B.rough, envMap: env, envMapIntensity: 1.2 });
  const goldMat = M.gold;
  const bristleG = bristleGeometry(P), caps = { left: capGeometries(P, P.left.hat), right: capGeometries(P, P.right.hat) };
  const mats = { left: mkBristleMat(1), right: mkBristleMat(-1) };
  const tris = { bristles: (bristleG.index.count / 3) * P.fur.layers, left: 0, right: 0 };
  for (const k of ['left', 'right']) tris[k] = tris.bristles + caps[k].gold.attributes.position.count / 3 + caps[k].bell.index.count / 3;

  const brushes = [], F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  function make(sideKey) {
    const holder = new THREE.Group(); holder.name = 'b6Brush_' + sideKey; holder.matrixAutoUpdate = false;
    const spin = new THREE.Group(); holder.add(spin);
    const fur = new THREE.Mesh(bristleG, mats[sideKey]); fur.name = 'b6Bristles';
    const gold = new THREE.Mesh(caps[sideKey].gold, goldMat); gold.name = 'b6Gold';
    const bell = new THREE.Mesh(caps[sideKey].bell, bellMat); bell.name = 'b6Bell';
    spin.add(fur, gold, bell); group.add(holder);
    return { holder, spin, side: sideKey, u: 0, phase: 0 };
  }
  // (re)places every pair from the numbers in BRUSH6 (live: __bwBrush6.place())
  function place() {
    const us = [];
    for (let k = -40; k <= 40; k++) { const u = P.anchor + k * P.every; if (P.spans.some(([a, b]) => u >= a && u <= b)) us.push(u); }
    let n = 0;
    for (const u of us) for (const sk of ['left', 'right']) {
      const S = P[sk], b = brushes[n] || (brushes[n] = make(sk)); n++;
      const uu = u + S.du; TR.frame(uu, F);
      const base = W.baseHeight(L, 0, uu);
      b.holder.matrix.makeBasis(F.R, F.U, F.T).setPosition(F.P.clone().addScaledVector(F.R, S.x).addScaledVector(F.U, base + S.h));
      b.holder.matrixWorldNeedsUpdate = true; b.spin.scale.setScalar(S.s); b.u = uu; b.phase = (uu * 1.7) % 6.283; b.holder.visible = true;
    }
    for (let i = n; i < brushes.length; i++) brushes[i].holder.visible = false;
    P.placed = brushes.filter((b) => b.holder.visible).map((b) => ({ side: b.side, u: +b.u.toFixed(2) }));
    return P.placed;
  }
  place();

  // screen-space measures of the pair at the anchor (tools/brush6: the fit against the approved frame). Fractions of the screen, y down.
  function measure(camera) {
    const out = {}, v = new THREE.Vector3();
    for (const b of brushes) {
      if (!b.holder.visible || Math.abs(b.u - (P.anchor + P[b.side].du)) > 0.01) continue;
      b.holder.updateMatrixWorld(true);
      const S = P[b.side], m = new THREE.Matrix4().copy(b.holder.matrixWorld).multiply(new THREE.Matrix4().makeScale(S.s, S.s, S.s));
      const proj = (r, y, a) => { v.set(Math.cos(a) * r, y, Math.sin(a) * r).applyMatrix4(m).project(camera); return [(v.x + 1) / 2, (1 - v.y) / 2, v.z]; };
      const ring = (r, y) => { const pts = []; for (let i = 0; i < 64; i++) { const p = proj(r, y, (i / 64) * Math.PI * 2); if (p[2] < 1) pts.push(p); } return pts; };
      if (!ring(1.0, 2.0).length) { out[b.side] = null; continue; }   // (behind the camera)
      const inner = (pts) => (!pts.length ? NaN : b.side === 'left' ? Math.max(...pts.map((p) => p[0])) : Math.min(...pts.map((p) => p[0])));
      const innerPt = (pts) => (!pts.length ? [NaN, NaN] : pts.reduce((best, p) => ((b.side === 'left' ? p[0] > best[0] : p[0] < best[0]) ? p : best), pts[0]));
      const topY = P.cap.flange[0] + S.hat, wl = -S.h / S.s;   // the water base height in bell radii (local y)
      out[b.side] = {
        top: +Math.min(...ring(0.45, topY).map((p) => p[1])).toFixed(4),
        bellInner: +inner(ring(1.0, P.cap.rim[1] + 0.06)).toFixed(4),
        tipsInner: P.tiers.map(([, y1, , r1]) => +inner(ring(r1, y1)).toFixed(4)),
        tipsY: P.tiers.map(([, y1, , r1]) => +innerPt(ring(r1, y1))[1].toFixed(4)),
        bottom: +Math.max(...ring(P.tiers[3][3], 0).map((p) => p[1])).toFixed(4),
        waterAtInner: +innerPt(ring(1.25, wl))[1].toFixed(4),
        innerX_m: +(Math.abs(S.x) - S.s * Math.max(...P.tiers.map((t) => t[3]))).toFixed(3),
        u: b.u,
      };
    }
    return out;
  }

  P.place = place; P.measure = measure; P.tris = tris;
  report.parts.push(`brush6 x${brushes.filter((b) => b.holder.visible).length} (${tris.left} / ${tris.right} triangles each, 3 draw calls each)`);

  function update(dt, time, phase, m) {
    const hu = m ? m.z : 0;
    for (const b of brushes) {
      if (!b.holder.visible) continue;
      const d = b.u - hu, on = d > P.near && d < P.far;   // only the brushes near him are drawn (the rest are far down the tunnel or behind)
      b.spin.visible = on;
      if (on) b.spin.rotation.y = b.phase + time * P.spin * P[b.side].dir;
    }
  }
  return { update, place, measure, brushes };
}
