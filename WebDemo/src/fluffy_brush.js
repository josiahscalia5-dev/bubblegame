// Fluffy washing brushes for the approved Screen 4 (test switch ?s3=round4,fluffy; the normal game and round4 without
// `fluffy` are unchanged). The approved brushes are soft, dense pom-poms of fibre: a royal-blue core, a white ring and a pink
// fringe of looped tufts with pale tips (the left ones pink and white). Built from three game techniques, all real 3D and
// all turning with the brush's spinner:
//   - shell fur: the pom-pom's domed face drawn as stacked shells; each shell keeps only the strands that reach it, so the
//     face is thousands of fibres. Strands lean into clumps toward their tips, giving the loose looped tufts of the painting,
//     with darker gaps between them; strands differ in length and thickness.
//   - fringe cards: two rows of small fibre cards standing out of the rolled-back rim, so the outline is hairy, not a smooth
//     edge or petals.
//   - colour: every clump takes one colour from its band, so the band edges are ragged tufts, as painted; pale tips; a soft
//     wrapped light, an ambient-occlusion fall-off into the roots and a sheen round the silhouette.
// Everything is generated in code (no textures, nothing from the approved pictures). Wheel units: the brush's rim is 0.95.
import * as THREE from 'three';

export const FLUFFY = {
  radius: 0.9, depth: 0.5, roll: 118,      // the dome: face radius, how far it bulges toward the rider, profile angle (90 = face edge)
  around: 80, along: 24,                   // dome mesh resolution
  shells: 20, fur: 0.22, lean: 0.2,        // shell count (fewer shows layer terracing), fibre length, outward lean of the tips
  density: 30, clumpSize: 0.18, clump: 0.88, taper: 0.22, // strands per unit, clump spacing, how strongly tips gather into their clump (looped lobes), tip thickness (0.5: blunt, round lobes)
  fringe: { count: 120, rows: [[0.98, 0.02], [0.93, -0.16]], length: [0.15, 0.26], width: [0.1, 0.16], strands: 9 },
  light: [0.35, 0.85, 0.6], ambient: 0.72, diffuse: 0.5, sheen: 0.32, tip: 0.8, ao: 0.55, glow: 0.14,
  // bands from the middle out, on the face's radial position (0 centre, 1 face edge, beyond 1 the rolled-back rim)
  right: { edges: [0.5, 0.78], bands: [['#2a48d8', '#3a5ef0', '#1f38bd', '#4566ff'], ['#fff7fc', '#f7e4f1', '#ffffff', '#fbeaf5'], ['#f55ab4', '#ec4aa9', '#ff7cc8', '#ff63b8']] },
  left: { edges: [0.3, 0.66], bands: [['#ff5fb6', '#f04aa8', '#ff74c2', '#f55ab4'], ['#fff7fc', '#f7e4f1', '#ffffff', '#fbeaf5'], ['#f55ab4', '#ff7cc8', '#ec4aa9', '#ff63b8']] },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.fluffy;
  const merge = (dst, src) => { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) merge(dst[k], src[k]); else dst[k] = src[k]; } };
  if (tune) merge(FLUFFY, tune);
}

let domeGeo = null; const shellGeos = {}, cardGeos = {};
// the dome: an ellipse profile (rho = R sin a, z = D cos a) turned round the brush's axis (+Z faces the rider), rolling back
// past the face edge; attributes: aFur (fibre coordinates, see below) and aT (radial band position)
function dome() {
  if (domeGeo) return domeGeo;
  const P = FLUFFY, R = P.radius, D = P.depth, A = THREE.MathUtils.degToRad(P.roll), cols = P.around + 1, rows = P.along + 1;
  const pos = [], nrm = [], fur = [], tt = [], idx = [];
  let s = 0, prev = null;
  for (let j = 0; j < rows; j++) {
    const a = A * j / P.along, rho = R * Math.sin(a), z = D * Math.cos(a);
    if (prev) s += Math.hypot(rho - prev[0], z - prev[1]); prev = [rho, z];
    const nr = Math.sin(a) / R, nz = Math.cos(a) / D, nl = Math.hypot(nr, nz);
    const t = a <= Math.PI / 2 ? Math.sin(a) : 1 + (a - Math.PI / 2) / (Math.PI / 2);
    for (let i = 0; i < cols; i++) {
      const phi = Math.PI * 2 * i / P.around, c = Math.cos(phi), sn = Math.sin(phi);
      pos.push(rho * c, rho * sn, z); nrm.push(c * nr / nl, sn * nr / nl, nz / nl);
      // fibre coordinates: arc length from the centre, laid out in the brush's plane (no seam and no shear; angle x radius
      // sheared the strand grid by the angle itself, which smeared half the face into a spiral)
      fur.push(s * c, s * sn); tt.push(t);
      if (i < P.around && j < P.along) { const q = j * cols + i; idx.push(q, q + 1, q + cols, q + 1, q + cols + 1, q + cols); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('aFur', new THREE.Float32BufferAttribute(fur, 2)); g.setAttribute('aT', new THREE.Float32BufferAttribute(tt, 1));
  g.setIndex(idx);
  return (domeGeo = g);
}
function shells() {
  const n = FLUFFY.shells;
  if (shellGeos[n]) return shellGeos[n];
  const d = dome(), g = new THREE.InstancedBufferGeometry();
  g.index = d.index; for (const k of ['position', 'normal', 'aFur', 'aT']) g.setAttribute(k, d.attributes[k]);
  const h = new Float32Array(n); for (let i = 0; i < n; i++) h[i] = i / (n - 1);
  g.setAttribute('aLayer', new THREE.InstancedBufferAttribute(h, 1)); g.instanceCount = n;
  g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), FLUFFY.radius + FLUFFY.fur + 0.2);
  return (shellGeos[n] = g);
}

const COMMON = /* glsl */ `
// sine-free hashes (stable for large cell indices: a sin() hash turned into streaks over half the brush's face)
float fbH(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 fbH2(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
uniform vec3 uLight, uCol[12]; uniform vec2 uEdges; uniform float uAmb, uDif, uSheen, uTip, uAo, uGlow;
vec3 fbBand(float t, vec2 id) {
  t += (fbH(id) - 0.5) * 0.1;                                   // ragged band edges: whole tufts change colour
  int band = t < uEdges.x ? 0 : (t < uEdges.y ? 1 : 2);
  int k = int(floor(fbH(id + 11.0) * 3.999));
  return uCol[band * 4 + k];
}
vec3 fbShade(vec3 base, vec3 N, vec3 V, float h, float tip, float ao) {
  float dif = clamp(dot(N, normalize(uLight)) * 0.5 + 0.5, 0.0, 1.0);   // soft, wrapped light (fibres scatter it)
  vec3 col = base * (uAmb + uDif * dif) * ao;
  col = mix(col, mix(base, vec3(1.0, 0.95, 0.98), 0.75) * (uAmb + uDif), uTip * tip);   // pale, light-catching tips
  col += vec3(1.0, 0.93, 0.98) * pow(1.0 - clamp(abs(dot(N, V)), 0.0, 1.0), 2.5) * uSheen * (0.3 + 0.7 * h);
  return col + base * uGlow;
}
`;
const SHELL_VERTEX = /* glsl */ `
attribute float aLayer; attribute vec2 aFur; attribute float aT;
uniform float uFur, uLean;
varying vec2 vFur; varying float vT; varying float vH; varying vec3 vN; varying vec3 vW;
void main() {
  float h = aLayer;
  vec3 n = normalize(normal), out3 = normalize(vec3(position.xy, 0.0) + vec3(1e-4, 0.0, 0.0));
  vec3 p = position + n * uFur * h + out3 * uLean * uFur * h * h;
  vFur = aFur; vT = aT; vH = h;
  vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const SHELL_FRAGMENT = /* glsl */ `
uniform float uDensity, uClumpSize, uClump, uTaper;
varying vec2 vFur; varying float vT; varying float vH; varying vec3 vN; varying vec3 vW;
${COMMON}
void main() {
  float h = vH;
  vec2 cq = vFur / uClumpSize, ci = floor(cq), bestC = vec2(0.0), bid = ci; float bd = 9.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 c = ci + vec2(float(i), float(j)), cp = c + 0.15 + 0.7 * fbH2(c);
    float d = length(cq - cp); if (d < bd) { bd = d; bestC = cp; bid = c; }
  }
  vec2 p = mix(vFur, bestC * uClumpSize, uClump * h);            // tips gather into their tuft
  vec2 sq = p * uDensity, si = floor(sq), sf = fract(sq) - 0.5 - (fbH2(si) - 0.5) * 0.45;
  float len = (0.6 + 0.4 * fbH(si + 7.0)) * (1.0 - 0.55 * smoothstep(0.3, 0.75, bd));   // shorter between the tufts
  float thick = mix(0.5, uTaper, h / max(len, 0.05)) * (0.8 + 0.35 * fbH(si + 3.0));
  if (h > 0.0 && (length(sf) > thick || h > len)) discard;
  vec3 base = fbBand(vT, bid) * (0.9 + 0.18 * fbH(si + 1.0));
  float ao = mix(uAo, 1.0, smoothstep(0.0, 0.85, h)) * mix(1.0, 0.82, smoothstep(0.45, 0.8, bd) * (1.0 - h));
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  gl_FragColor = vec4(fbShade(base, N, V, h, smoothstep(0.55, 1.0, h / max(len, 0.05)), ao), 1.0);
}
`;
// fringe cards: x across the card (-0.5..0.5), y from root (0) to tip (1); each card a little fan of tapered strands
const CARD_VERTEX = /* glsl */ `
attribute vec4 aCard; attribute float aCardT;   // aCard: id seed, length, width, unused
varying vec2 vUv; varying float vSeed; varying float vT; varying vec3 vN; varying vec3 vW;
void main() {
  vUv = uv; vSeed = aCard.x; vT = aCardT;
  vec3 p = position; p.x *= aCard.z * (0.7 + 0.6 * uv.y); p.y *= aCard.y;   // fans out toward the tips
  p.z += uv.y * uv.y * aCard.y * 0.35;                                    // curls toward the rider
  vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * vec3(0.0, 0.4, 1.0));
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const CARD_FRAGMENT = /* glsl */ `
uniform float uStrands;
varying vec2 vUv; varying float vSeed; varying float vT; varying vec3 vN; varying vec3 vW;
${COMMON}
void main() {
  float x = vUv.x * uStrands, xi = floor(x), y = vUv.y;
  float len = 0.55 + 0.45 * fbH(vec2(xi, vSeed * 37.0));
  float bend = (fbH(vec2(xi + 5.0, vSeed)) - 0.5) * 0.5 * y * y;
  float w = mix(0.42, 0.1, y / len);
  if (abs(fract(x + bend) - 0.5) > w || y > len) discard;
  vec3 base = fbBand(vT, vec2(vSeed * 91.0, 3.0)) * (0.9 + 0.18 * fbH(vec2(xi, vSeed + 2.0)));
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  gl_FragColor = vec4(fbShade(base, N, V, y, smoothstep(0.5, 1.0, y / len), mix(uAo, 1.0, smoothstep(0.0, 0.6, y))), 1.0);
}
`;
function cards(side) {   // one card geometry per side: its per-card attributes (seed, length, width, band) differ
  if (cardGeos[side]) return cardGeos[side];
  const g = new THREE.PlaneGeometry(1, 1, 1, 4); g.translate(0, 0.5, 0);
  return (cardGeos[side] = g);
}

/** One fluffy brush (a THREE.Group facing +Z, in wheel units; the caller scales and spins it). left: the pink-and-white kind. */
export function makeFluffyBrush(left = false) {
  const P = FLUFFY, look = left ? P.left : P.right;
  const cols = []; for (const b of look.bands) for (const c of b) cols.push(new THREE.Color(c));
  const uniforms = {
    uLight: { value: new THREE.Vector3(...P.light).normalize() }, uCol: { value: cols }, uEdges: { value: new THREE.Vector2(...look.edges) },
    uAmb: { value: P.ambient }, uDif: { value: P.diffuse }, uSheen: { value: P.sheen }, uTip: { value: P.tip }, uAo: { value: P.ao }, uGlow: { value: P.glow },
    uFur: { value: P.fur }, uLean: { value: P.lean }, uDensity: { value: P.density }, uClumpSize: { value: P.clumpSize }, uClump: { value: P.clump }, uTaper: { value: P.taper },
    uStrands: { value: P.fringe.strands },
  };
  const group = new THREE.Group(); group.name = 'fluffyBrush';
  const shellMat = new THREE.ShaderMaterial({ uniforms, vertexShader: SHELL_VERTEX, fragmentShader: SHELL_FRAGMENT, side: THREE.DoubleSide });
  const fur = new THREE.Mesh(shells(), shellMat); fur.name = 'fluffyShells'; fur.frustumCulled = false;
  group.add(fur);
  // fringe cards round the rolled-back rim: rooted in the dome, pointing outward (a little forward), in the brush's plane
  const F = P.fringe, n = F.count * F.rows.length, rnd = mulberryF(left ? 0xf1 : 0xf2);
  const cardMat = new THREE.ShaderMaterial({ uniforms, vertexShader: CARD_VERTEX, fragmentShader: CARD_FRAGMENT, side: THREE.DoubleSide });
  const side = left ? 'L' : 'R', fresh = !cardGeos[side], cardGeo = cards(side);
  const ring = new THREE.InstancedMesh(cardGeo, cardMat, n); ring.name = 'fluffyFringe'; ring.frustumCulled = false;
  const seeds = new Float32Array(n * 4), ts = new Float32Array(n), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  let k = 0;
  F.rows.forEach(([rf, zf], row) => {
    for (let i = 0; i < F.count; i++, k++) {
      const phi = (i + rnd() * 0.6 + row * 0.5) / F.count * Math.PI * 2;
      const r = P.radius * rf, z = P.depth * zf;
      e.set(0, 0, phi - Math.PI / 2); q.setFromEuler(e);                       // card's +Y points outward along phi
      q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -0.35 + rnd() * 0.3));   // tipped toward the rider
      m4.compose(new THREE.Vector3(Math.cos(phi) * r, Math.sin(phi) * r, z), q, new THREE.Vector3(1, 1, 1));
      ring.setMatrixAt(k, m4);
      seeds.set([rnd() * 10, F.length[0] + rnd() * (F.length[1] - F.length[0]), F.width[0] + rnd() * (F.width[1] - F.width[0]), 0], k * 4);
      ts[k] = 1.05 + row * 0.15;
    }
  });
  if (fresh) { cardGeo.setAttribute('aCard', new THREE.InstancedBufferAttribute(seeds, 4)); cardGeo.setAttribute('aCardT', new THREE.InstancedBufferAttribute(ts, 1)); }
  group.add(ring);
  const tris = (dome().index.count / 3) * P.shells + (cardGeo.index.count / 3) * n;
  group.userData.fluffy = { shells: P.shells, cards: n, triangles: tris };
  return group;
}
function mulberryF(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
