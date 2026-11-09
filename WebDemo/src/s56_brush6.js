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
//   - the cap: a warm gold and a pink gloss in the style of s56's M.gold / M.pinkGloss, tuned to the approved's cap;
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
  anchor: 206, every: 26, spans: [[150, 258]], far: 60, near: -4, minX: 1.05,   // (minX: the coordinator's bound of session ddf175f2, was 1.25)
  // (fitted by tools/brush6/fit_eval.js at shots56's `206` shot, hero at u 209.1 in the picture: inner tips exactly at minX)
  left: { du: 5.431, x: 2.057, h: -0.632, s: 0.612, sy: 1, flare: 0, hat: 0.5, dir: 1 },
  right: { du: 5.379, x: -1.89, h: -0.618, s: 0.485, sy: 1, flare: 0, hat: 0.0, dir: -1 },   // (the approved right brush shows no gold top drum)
  spin: 3.0,   // rad/s about the brush's own axis (about 0.5 rev/s: faster strobes the strands at 30-60 fps)
  // the depth pull (session 3849f5c8, after the first real frame): within the lane bound the brushes' bodies stand at x 1.25-2.85 m, INSIDE the
  // bank (deck face ~1.5 m, rail 1.56 m, tanks beyond), so the bank's rail, deck and machinery were drawn over most of the bristles. The near
  // pair is drawn with its view depth pulled toward the camera (each vertex moved ALONG its own view ray, so the picture position, size and
  // shading are exactly the same; only the depth test changes): view depth d > near maps to near + (d - near) * k, blending back to the true
  // depth between far[0] and far[1] (the far pairs are untouched). near = just behind him (the camera is 3.0 m behind him), so he, his splash
  // and everything nearer than him are still drawn in front of the brushes. on 0 = the true depth (the bank hides the bristles).
  // (session ddf175f2, pass 2) near 3.2 m (he is 3.0 m ahead of the camera) and k 0.03: the anchor pair is drawn over the near water and the
  // bank (on the right the water nearer than the old pulled depth, ~3.8 m, cut its lower tiers off at y 0.60); he and his splash stay in front
  pull: { on: 1, near: 3.2, k: 0.03, far: [10, 15] },
  // the skirts, top to bottom: [yRoot, yTip, rRoot, rTip] in bell radii (y from the lowest tips). Visible tier heights (TARGETS.md, approved
  // left brush): pink y 0.486-0.551, white-lavender 0.551-0.597, royal blue 0.597-0.656, pale blue-white 0.656-0.714
  tiers: [[2.80, 2.00, 0.62, 1.08], [2.30, 1.38, 0.70, 1.20], [1.75, 0.62, 0.74, 1.27], [1.05, 0.0, 0.78, 1.32]],
  cap: { rim: [2.70, 2.93, 0.94], bell: 3.54, flange: [3.86, 0.66] },
  // (session ddf175f2, pass 2: the see-through shell fur replaced) every skirt is two staggered rows of OPAQUE scalloped cones: one ridge per
  // tuft (the tufts' relief catches the light), the tuft tips cut to spikes (spike: share of the strand length), fine strands (striations,
  // faded where they get smaller than a pixel), a few stray strands past the tips; the front row stands `gap` bell radii out, turned half a
  // tuft, `short` shorter, so the back row's spikes show between its own. around: mesh segments per tuft; along: rings root to tip.
  // lod: brushes farther than lod.dist metres draw the light mesh (lod.seg segments per tuft, lod.along rings, the back row only).
  fur: { tufts: 18, seg: 8, along: 9, rows: 2, gap: 0.07, short: 0.1, scallop: 0.16, spike: 0.34, strands: 150, stray: 0.1, shade: 0.5 },
  lod: { dist: 14, seg: 3, along: 4 },
  // the approved's colours (band medians, 20 % / 80 % luminance means), the lit body kept under the Neutral tone mapping's ~0.76 knee
  // (linear): pink (0.72, 0.01, 0.29), white-lavender (0.40, 0.24, 0.72), royal blue (0.0, 0.10, 0.72), pale blue (0.05, 0.21, 0.70)
  colours: {
    dark: ['#b0035f', '#7d5cb0', '#0134a8', '#1452a8'],
    med: ['#dd1993', '#aa86dd', '#0459dd', '#3f7edb'],
    lite: ['#f064d0', '#e8d8f8', '#3a9cf0', '#b8cdf4'],
  },
  light: { amb: 0.52, dif: 0.6, spec: 0.45, sheen: 0.08, side: 1.1 },
  // the cap's gold: the approved's warm gold (#f08a53, light #ffeab9); s56's M.gold reads red-orange at this distance
  gold: { color: '#ffc45a', emissive: '#7a4a08', ei: 0.5, metal: 0.85, rough: 0.24 },
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

const PULL = /* glsl */ `
uniform vec4 uPull;   // near, k, far0, far1 (BRUSH6.pull; k = 1: the true depth)
vec4 b6Project(vec4 mv) {   // the same picture position; the view depth pulled toward the camera (BRUSH6.pull)
  float d = -mv.z;
  if (d <= uPull.x || uPull.y >= 0.999) return projectionMatrix * mv;
  float a = uPull.x + (d - uPull.x) * uPull.y, b = uPull.x + (uPull.z - uPull.x) * uPull.y;
  float f = d < uPull.z ? a : (d < uPull.w ? mix(b, uPull.w, (d - uPull.z) / (uPull.w - uPull.z)) : d);
  return projectionMatrix * vec4(mv.xyz * (f / d), 1.0);
}`;

const BRISTLE_VERTEX = /* glsl */ `
attribute vec4 aS;        // t (root 0 .. tip 1), angle (0..1 round the axis), tier (0 pink .. 3 pale), row (0 back, 1 front)
attribute vec3 aDir;      // the strand's direction, root to tip
uniform float uSide;
varying vec4 vS; varying float vY; varying vec3 vN; varying vec3 vD; varying vec3 vW; varying vec3 vL;
${PULL}
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vY = position.y;
  vN = normalize(mat3(modelMatrix) * normal); vD = normalize(mat3(modelMatrix) * aDir);
  vS = aS;
  // light from the tunnel's middle, toward the viewer and above: the side facing the channel is lit, the outer side falls off
  vec3 C = (modelMatrix * vec4(0.0, 2.0, 0.0, 1.0)).xyz, toCam = cameraPosition - C; toCam.y = 0.0;
  vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vL = normalize(normalize(toCam) + camR * uSide + vec3(0.0, 0.8, 0.0));
  gl_Position = b6Project(viewMatrix * w);
}`;
const BRISTLE_FRAGMENT = /* glsl */ `
uniform float uStrands, uTufts, uAmb, uDif, uSpec, uSheen, uSpike, uShort, uStray, uShade;
uniform vec3 uDark[4], uMed[4], uLite[4]; uniform float uUpper[4];
varying vec4 vS; varying float vY; varying vec3 vN; varying vec3 vD; varying vec3 vW; varying vec3 vL;
// sine-free hash (fluffy_brush.js fbH: stable for large cell indices)
float b6H(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
${HAZE}
void main() {
  float t = vS.x, row = vS.w; int k = int(vS.z + 0.5);
  // the tuft (the front row turned half a tuft) and its strand
  float a = vS.y * uTufts + row * 0.5, ti = floor(a), tf = fract(a) - 0.5;
  float tr = b6H(vec2(ti, vS.z * 7.0 + row * 3.0 + 1.0));
  float sa = vS.y * uStrands * (1.0 + 0.37 * row) + row * 0.31, si = floor(sa), sf = fract(sa) - 0.5;
  float sr = b6H(vec2(si, vS.z * 13.0 + row * 5.0 + 2.0));
  // the tuft ends in a spike: its middle strands longest, every strand a little different; a few stray strands reach past the tips
  float len = (1.0 - uShort * row) * (1.0 - uSpike * pow(abs(tf) * 2.0, 1.3) - 0.07 * sr - 0.05 * tr);
  float fw = fwidth(sa), aa = 1.0 - smoothstep(0.35, 0.9, fw);   // the strands fade where they get smaller than a pixel
  if (t > len) { if (t > len + uStray * sr || sr < 0.8 || abs(sf) > 0.22 + 0.3 * (1.0 - aa)) discard; }
  vec3 dk = uDark[k], md = uMed[k], lt = uLite[k];
  vec3 col = mix(md, lt, 0.06 + 0.2 * tr) * mix(1.0, 0.8 + 0.4 * sr, aa);   // every strand its own shade
  col *= 1.0 - 0.28 * aa * smoothstep(0.3, 0.5, abs(sf));                     // the dark gaps between the strands
  col = mix(dk, col, smoothstep(0.02, 0.5, t));                                 // darker roots
  col = mix(col, lt, 0.5 * smoothstep(0.55, 1.0, t / len));                    // pale tips
  // the tier above overhangs this one: a soft shadow just under its tips (local y uUpper[k]); the tufts' sides darker than their ridges
  float sh = 1.0 - uShade * smoothstep(uUpper[k] - 0.42, uUpper[k] - 0.02, vY);
  float ao = sh * mix(0.74, 1.0, smoothstep(0.5, 0.12, abs(tf))) * mix(0.82, 1.0, row);
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW), L = normalize(vL), D = normalize(vD);
  if (!gl_FrontFacing) N = -N;
  float dif = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  vec3 H = normalize(L + V); float th = dot(D, H), spec = pow(sqrt(max(0.0, 1.0 - th * th)), 48.0);   // gloss along the strands
  vec3 c = col * (uAmb + uDif * dif) * ao + mix(lt, vec3(1.0), 0.45) * spec * uSpec * dif * sh * (0.6 + 0.4 * sr);
  c += vec3(1.0, 0.95, 1.0) * pow(1.0 - abs(dot(N, V)), 3.0) * uSheen;
  gl_FragColor = vec4(b6Haze(c, vW), 1.0);
}`;

// ---------------------------------------------------------------- geometry (bell-radius units, axis +Y, y = 0 at the lowest tips)
// a side's skirts: the tip radii flared by S.flare toward the foot (pink x 1, white x (1 + flare/3), blue x (1 + 2 flare/3), pale x (1 + flare))
function tiersFor(P, sk) {
  const fl = P[sk].flare || 0;
  return P.tiers.map(([y0, y1, r0, r1], k) => [y0, y1, r0, r1 * (1 + (fl * k) / 3)]);
}
// every skirt: `rows` scalloped cones (one ridge per tuft, the relief growing toward the tips), the front row `gap` out and half a tuft round
function bristleGeometry(P, seg, along, rows) {
  const F = P.fur, pos = [], sAt = [], dir = [], idx = [];
  let base = 0;
  const around = F.tufts * seg, cols = around + 1;
  P.tiers.forEach(([y0, y1, r0, r1], tier) => {
    for (let row = 0; row < rows; row++) {
      const dy = y1 - y0, out = row * F.gap;   // (the front row's shorter tips are cut in the shader, uShort)
      for (let j = 0; j <= along; j++) {
        const t = j / along, rc = r0 + out * 0.5 + (r1 + out - r0 - out * 0.5) * (0.55 * t + 0.45 * t * t);
        const dr = (r1 + out * 0.5 - r0) * (0.55 + 0.9 * t), y = y0 + dy * t, l = Math.hypot(dy, dr);
        for (let i = 0; i < cols; i++) {
          const a = i / around, tf = ((a * F.tufts + row * 0.5) % 1) - 0.5, bump = 1 - 4 * tf * tf;
          const r = rc * (1 + F.scallop * (0.3 + 0.7 * t) * (bump - 0.55));
          const ph = a * Math.PI * 2, c = Math.cos(ph), s = Math.sin(ph);
          pos.push(r * c, y, r * s); dir.push((dr / l) * c, dy / l, (dr / l) * s); sAt.push(t, a, tier, row);
          if (i < around && j < along) { const q = base + j * cols + i; idx.push(q, q + 1, q + cols, q + 1, q + cols + 1, q + cols); }   // (front faces outward)
        }
      }
      base += cols * (along + 1);
    }
  });
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aS', new THREE.Float32BufferAttribute(sAt, 4)); g.setAttribute('aDir', new THREE.Float32BufferAttribute(dir, 3));
  g.setIndex(idx); g.computeVertexNormals();
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 2.0, 0), 3.2);
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
  const { TR, W, L, env, root, report } = ctx, P = BRUSH6;
  const group = new THREE.Group(); group.name = 'b6Brushes'; root.add(group);
  const C = P.colours, col = (a) => a.map((h) => new THREE.Color(h));
  const uPull = { value: new THREE.Vector4(P.pull.near, 1, P.pull.far[0], P.pull.far[1]) };
  const setPull = () => { const Q = P.pull; uPull.value.set(Q.near, Q.on ? Q.k : 1, Q.far[0], Q.far[1]); };
  setPull();
  // the cap's MeshStandardMaterials take the same depth pull (their lighting still uses the true view position: the same shading)
  const pullStd = (mat, key) => {
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uPull = uPull;
      sh.vertexShader = sh.vertexShader.replace('void main() {', PULL + '\nvoid main() {')
        .replace('#include <project_vertex>', '#include <project_vertex>\n\tgl_Position = b6Project(mvPosition);');
    };
    mat.customProgramCacheKey = () => 'b6pull_' + key;
    return mat;
  };
  const upper = P.tiers.map((tr, k) => (k === 0 ? P.cap.rim[0] : P.tiers[k - 1][1]));   // where the tier above ends (its shadow)
  const mkBristleMat = (side) => new THREE.ShaderMaterial({
    uniforms: {
      uPull, uSide: { value: side * P.light.side },
      uStrands: { value: P.fur.strands }, uTufts: { value: P.fur.tufts }, uSpike: { value: P.fur.spike }, uShort: { value: P.fur.short },
      uStray: { value: P.fur.stray }, uShade: { value: P.fur.shade }, uUpper: { value: upper },
      uAmb: { value: P.light.amb }, uDif: { value: P.light.dif }, uSpec: { value: P.light.spec }, uSheen: { value: P.light.sheen },
      uDark: { value: col(C.dark) }, uMed: { value: col(C.med) }, uLite: { value: col(C.lite) },
    },
    vertexShader: BRISTLE_VERTEX, fragmentShader: BRISTLE_FRAGMENT,
  });
  const B = P.bell;
  const bellMat = pullStd(new THREE.MeshStandardMaterial({ color: new THREE.Color(B.color), emissive: new THREE.Color(B.emissive), emissiveIntensity: B.ei, metalness: B.metal, roughness: B.rough, envMap: env, envMapIntensity: 1.2 }), 'bell');
  const G = P.gold, goldMat = pullStd(new THREE.MeshStandardMaterial({ color: new THREE.Color(G.color), emissive: new THREE.Color(G.emissive), emissiveIntensity: G.ei, metalness: G.metal, roughness: G.rough, envMap: env, envMapIntensity: 1.25 }), 'gold');
  const mats0 = { bell: bellMat, gold: goldMat };
  // per side: the skirts flared wider toward the foot (S.flare: the pale tier's tip radius x (1 + flare), the tiers between in proportion)
  const geo = { left: null, right: null }, built = { left: NaN, right: NaN };
  function sideGeometry(sk) {
    const fl = P[sk].flare || 0;
    if (geo[sk] && built[sk] === fl) return geo[sk];
    if (geo[sk]) { geo[sk].full.dispose(); geo[sk].lite.dispose(); }
    const Q = { ...P, tiers: tiersFor(P, sk) };
    geo[sk] = { full: bristleGeometry(Q, P.fur.seg, P.fur.along, P.fur.rows), lite: bristleGeometry(Q, P.lod.seg, P.lod.along, 1) }; built[sk] = fl;
    return geo[sk];
  }
  sideGeometry('left'); sideGeometry('right');
  const caps = { left: capGeometries(P, P.left.hat), right: capGeometries(P, P.right.hat) };
  const mats = { left: mkBristleMat(1), right: mkBristleMat(-1) };
  const tris = { bristles: geo.left.full.index.count / 3, lite: geo.left.lite.index.count / 3, left: 0, right: 0 };
  for (const k of ['left', 'right']) tris[k] = tris.bristles + caps[k].gold.attributes.position.count / 3 + caps[k].bell.index.count / 3;

  const brushes = [], F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  function make(sideKey) {
    const holder = new THREE.Group(); holder.name = 'b6Brush_' + sideKey; holder.matrixAutoUpdate = false;
    const spin = new THREE.Group(); holder.add(spin);
    const fur = new THREE.Mesh(geo[sideKey].full, mats[sideKey]); fur.name = 'b6Bristles';
    const lite = new THREE.Mesh(geo[sideKey].lite, mats[sideKey]); lite.name = 'b6BristlesLod'; lite.visible = false;
    const gold = new THREE.Mesh(caps[sideKey].gold, goldMat); gold.name = 'b6Gold';
    const bell = new THREE.Mesh(caps[sideKey].bell, bellMat); bell.name = 'b6Bell';
    spin.add(fur, lite, gold, bell); group.add(holder);
    return { holder, spin, fur, lite, side: sideKey, u: 0, phase: 0 };
  }
  // (re)places every pair from the numbers in BRUSH6 (live: __bwBrush6.place())
  function place() {
    const us = [];
    for (let k = -40; k <= 40; k++) { const u = P.anchor + k * P.every; if (P.spans.some(([a, b]) => u >= a && u <= b)) us.push(u); }
    let n = 0;
    for (const u of us) for (const sk of ['left', 'right']) {
      const S = P[sk], b = brushes[n] || (brushes[n] = make(sk)); n++;
      const g = sideGeometry(sk); b.fur.geometry = g.full; b.lite.geometry = g.lite;
      const uu = u + S.du; TR.frame(uu, F);
      const base = W.baseHeight(L, 0, uu);
      b.holder.matrix.makeBasis(F.R, F.U, F.T).setPosition(F.P.clone().addScaledVector(F.R, S.x).addScaledVector(F.U, base + S.h));
      b.holder.matrixWorldNeedsUpdate = true; b.spin.scale.set(S.s, S.s * (S.sy || 1), S.s); b.u = uu; b.phase = (uu * 1.7) % 6.283; b.holder.visible = true;
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
      const S = P[b.side], m = new THREE.Matrix4().copy(b.holder.matrixWorld).multiply(new THREE.Matrix4().makeScale(S.s, S.s * (S.sy || 1), S.s));
      const TT = tiersFor(P, b.side), rx = 1 + P.fur.scallop * 0.45;   // (rx: the tufts' ridges stand out of the nominal cone)
      const proj = (r, y, a) => { v.set(Math.cos(a) * r, y, Math.sin(a) * r).applyMatrix4(m).project(camera); return [(v.x + 1) / 2, (1 - v.y) / 2, v.z]; };
      const ring = (r, y) => { const pts = []; for (let i = 0; i < 64; i++) { const p = proj(r, y, (i / 64) * Math.PI * 2); if (p[2] < 1) pts.push(p); } return pts; };
      if (!ring(1.0, 2.0).length) { out[b.side] = null; continue; }   // (behind the camera)
      const inner = (pts) => (!pts.length ? NaN : b.side === 'left' ? Math.max(...pts.map((p) => p[0])) : Math.min(...pts.map((p) => p[0])));
      const innerPt = (pts) => (!pts.length ? [NaN, NaN] : pts.reduce((best, p) => ((b.side === 'left' ? p[0] > best[0] : p[0] < best[0]) ? p : best), pts[0]));
      const topY = P.cap.flange[0] + S.hat, wl = -S.h / (S.s * (S.sy || 1));   // the water base height in bell radii (local y)
      out[b.side] = {
        top: +Math.min(...ring(S.hat > 0.02 ? 0.45 : P.cap.flange[1] * 0.5, topY).map((p) => p[1])).toFixed(4),
        bellInner: +inner(ring(1.0, P.cap.rim[1] + 0.06)).toFixed(4),
        tipsInner: TT.map(([, y1, , r1]) => +inner(ring(r1 * rx, y1)).toFixed(4)),
        tipsY: TT.map(([, y1, , r1]) => +innerPt(ring(r1 * rx, y1))[1].toFixed(4)),
        bottom: +Math.max(...ring(TT[3][3], 0).map((p) => p[1])).toFixed(4),
        waterAtInner: +innerPt(ring(1.25, wl))[1].toFixed(4),
        innerX_m: +(Math.abs(S.x) - S.s * rx * Math.max(...TT.map((t) => t[3] + P.fur.gap))).toFixed(3),
        u: b.u,
      };
    }
    return out;
  }

  // proof that the pair is really drawn (the coordinator's check): per brush its flags, world position, projected screen box (fractions,
  // y down; from 400 points on its surface, those in front of the camera), its view depth, the pulled depth and the draw settings
  function drawReport(camera) {
    const v = new THREE.Vector3(), w = new THREE.Vector3(), out = [];
    camera.updateMatrixWorld(); const Q = P.pull;
    for (const b of brushes) {
      if (!b.holder.visible) continue;
      const drawn = b.holder.visible && b.spin.visible && group.visible && root.visible;
      b.holder.updateMatrixWorld(true); w.setFromMatrixPosition(b.holder.matrixWorld);
      const S = P[b.side], m = new THREE.Matrix4().copy(b.holder.matrixWorld).multiply(new THREE.Matrix4().makeScale(S.s, S.s * (S.sy || 1), S.s));
      let x0 = 9, y0 = 9, x1 = -9, y1 = -9, n = 0;
      const ys = [0, ...P.tiers.map((t) => t[1]), ...P.tiers.map((t) => t[0]), P.cap.rim[1], P.cap.bell, P.cap.flange[0] + S.hat];
      const rs = [P.tiers[3][3], ...P.tiers.map((t) => t[3]), ...P.tiers.map((t) => t[2]), 1.0, P.cap.flange[1], 0.5];
      for (let j = 0; j < ys.length; j++) for (let i = 0; i < 40; i++) {
        const a = (i / 40) * Math.PI * 2; v.set(Math.cos(a) * rs[j], ys[j], Math.sin(a) * rs[j]).applyMatrix4(m);
        const vz = v.clone().applyMatrix4(camera.matrixWorldInverse).z; if (vz > -0.05) continue;
        v.project(camera); const sx = (v.x + 1) / 2, sy = (1 - v.y) / 2; n++;
        x0 = Math.min(x0, sx); x1 = Math.max(x1, sx); y0 = Math.min(y0, sy); y1 = Math.max(y1, sy);
      }
      const d = -w.clone().applyMatrix4(camera.matrixWorldInverse).z;
      const pulled = !Q.on || d <= Q.near ? d : d < Q.far[0] ? Q.near + (d - Q.near) * Q.k : d < Q.far[1] ? (Q.near + (Q.far[0] - Q.near) * Q.k) + ((d - Q.far[0]) / (Q.far[1] - Q.far[0])) * (Q.far[1] - (Q.near + (Q.far[0] - Q.near) * Q.k)) : d;
      const box = n ? [x0, y0, x1, y1].map((x) => +x.toFixed(4)) : null;
      const onScreen = !!box && box[2] > 0 && box[0] < 1 && box[3] > 0 && box[1] < 1;
      out.push({ side: b.side, u: +b.u.toFixed(2), drawn, onScreen, world: w.toArray().map((x) => +x.toFixed(3)), viewDepth: +d.toFixed(2), pulledDepth: +pulled.toFixed(2),
        box, renderOrder: [b.spin.children.map((c) => c.renderOrder)], frustumCulled: b.spin.children.map((c) => c.frustumCulled), meshes: b.spin.children.map((c) => c.name) });
    }
    return out.filter((r) => r.onScreen || r.viewDepth < 40);
  }

  P.place = place; P.measure = measure; P.report = drawReport; P.tris = tris;
  report.parts.push(`brush6 x${brushes.filter((b) => b.holder.visible).length} (${tris.left} / ${tris.right} triangles each near, ${tris.lite} bristle triangles far; 3 draw calls each)`);

  function update(dt, time, phase, m) {
    const hu = m ? m.z : 0; setPull();
    for (const b of brushes) {
      if (!b.holder.visible) continue;
      const d = b.u - hu, on = d > P.near && d < P.far;   // only the brushes near him are drawn (the rest are far down the tunnel or behind)
      b.spin.visible = on;
      const near = d < P.lod.dist; b.fur.visible = near; b.lite.visible = !near;   // the far brushes: the light bristle mesh
      if (on) b.spin.rotation.y = b.phase + time * P.spin * P[b.side].dir;
    }
  }
  return { update, place, measure, report: drawReport, brushes, mats: mats0 };
}
