// ?s3=intunnel,structmatch (7 November 2026, Checkpoint A of the user's mandate): the Tap to Start frame made closer to the
// ORIGINAL (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg), on top of the
// accepted ?s3=intunnel (swim2 stays on). Visual only: nothing here writes her gameplay state (x, yAbs, air, lane, speed, vy,
// pickups, hearts, abilities), the camera or the game's seeded Math.random (every object made here is made with a private
// generator); every hook elsewhere is gated on STRUCT_PARTS.
//
// From the measured diagnosis (Previews/WebDemo/screen4_round9_match/62_opening_mandate_audit/README.md rows 2-7 and
// 61_structural_audit/README.md), one change per part:
//   hero    (row 4) Screen 3's presentation off on Screen 4 (its 0.95 / 1.07 / 0.95 stretch and the droplet flecks, opening.js
//           4c); her crown reshaped once at load to a smooth arc (drawn model only); a fur-shaded fill closing the gap
//           between her legs; the fur's colour graded toward the ORIGINAL's magenta under the white point, a whiter rim.
//   water   (row 5) heroSwell (one transparent pad carried in her frame) hidden; in its place a field of separate rounded
//           glassy water forms that live in WATER space: they stream back past her as she swims (the water itself flows
//           forward at a share of her speed), rise round her and sink away, staged at the start as the ORIGINAL's.
//   tunnel  (row 2) the walls' colour graded toward the ORIGINAL's measured blues (periwinkle pulled to azure, saturation up)
//           with a warmer golden core; (row 3) the rim's bezel twice as thick with a rounded bevel and a sheen.
//   props   (row 6) the staged coins drawn at the ORIGINAL's sizes, the gem larger and brighter, the staged sock diagonal.
//   hud     (row 7) body.s4struct (page.html): the power buttons as corner cards, a small low Tap to Start.
import * as THREE from 'three';
import { STRUCT_ON, STRUCT_PARTS } from './tunnel_s4_bt.js';
export { STRUCT_ON, STRUCT_PARTS };

export const STRUCT = {
  hero: {
    // her crown (the glTF's own units, y -0.943 .. +0.943): the half-width at depth h below her top brought to a circle of
    // radius R (wt = sqrt(2 R h - h^2)), fully above h0, none below h1; the tuft's tip lowered by tip (smooth over tipH)
    crown: { R: 0.8, h0: 0.26, h1: 0.44, tip: 0.07, tipH: 0.2, smin: 0.85, smax: 1.9, kz: 0.85 },
    // her drawn size after the presentation stretch is off (x, y, z), round her centre
    scale: [0.97, 0.97, 0.97],
    // the fill closing the gap between her legs (glTF units: centre, radii) and its colour (the fur texture's mean pink)
    fill: { c: [0, -0.6, 0.02], r: [0.5, 0.34, 0.46], col: [0.62, 0.11, 0.34] },
    // the fur (linear, before the tone mapping): crisper strands (Screen 3's spike shading at this share), hue turned
    // (degrees), saturation round the luminance, gain (kept under the white point); a whiter rim
    fur: { strand: 0.7, hue: -9, sat: 1.32, gain: 0.86, rim: [1.0, 0.86, 0.97], rimK: 1.0 },
  },
  water: {
    k: 0.6,                 // the water's own forward flow, a share of her travel (its forms stream back past her at the rest)
    idle: 0.05,             // m/s they drift back while she waits at the start
    du: 0.34, dx: 0.33,     // grid cells (m along the path, m across), world (water) anchored
    rel: [-2.1, 1.5],       // the window round her (m along the path; - toward the camera)
    xr: 1.6,                // its half width (m)
    // amplitude along the path round her and across ([inner, outer] m from her)
    env: [[-2.1, 0], [-1.55, 0.85], [-0.45, 1], [0.15, 0.8], [0.8, 0.3], [1.5, 0]], envX: [0.62, 1.5],
    // their height (m) along the path round her (taller toward the camera: they make her waterline seen from above)
    height: [[-2.1, 0.40], [-1.0, 0.38], [-0.55, 0.33], [-0.2, 0.27], [0.3, 0.16], [1.5, 0.07]],
    r: [0.15, 0.27],        // radius range (m)
    types: [0.68, 0.84],    // shares: < azure, < lavender glass, else froth
    startMix: [0.55, 0.4, 2.5],   // the field's amplitude at the start, eased to 1 over these metres swum (the staged forms lead)
    // the staged forms at the start (the ORIGINAL's arrangement): [m along the path from her, m across (+ screen-left),
    // rx, height, rz, type (0 azure, 1 lavender glass, 2 froth), yaw (rad)]
    stage: [
      [-0.62, 0.36, 0.25, 0.35, 0.22, 1, 0.3],     // the lavender glass dome at her lower left
      [-0.70, 0.02, 0.18, 0.30, 0.17, 1, -0.4],    // a smaller lavender dome under her centre
      [-0.55, 0.78, 0.30, 0.38, 0.26, 0, 0.5],     // the left bank
      [-0.95, 0.62, 0.26, 0.36, 0.22, 2, 0.0],
      [-0.58, -0.40, 0.27, 0.34, 0.24, 0, -0.3],   // her lower right
      [-0.50, -0.82, 0.31, 0.38, 0.27, 0, 0.2],    // the right bank
      [-0.95, -0.55, 0.28, 0.36, 0.24, 2, 0.6],
      [-0.30, 0.62, 0.2, 0.26, 0.18, 0, 0.0],
      [-0.28, -0.62, 0.21, 0.27, 0.18, 0, 0.9],
    ],
    // sRGB screen colours (written through the inverse of the grade and tone mapping, as the walls)
    col: {
      azure: ['#1b55c8', '#3b93ee', '#93d3ff'], lav: ['#6a62d6', '#a29ef0', '#dcd9ff'], froth: ['#5aa6ee', '#bfe2ff', '#f3fbff'],
      sky: '#e2f4ff', white: '#ffffff', foam: '#f4fbff',
    },
    rimK: 0.9, specK: 0.9, foamK: 0.75, bubbleK: 0.8, coreK: 0.5,
  },
  tunnel: {
    band: [0.035, 0.07],    // screen radius (widths) from which the grade acts (the core inside it is warmed instead)
    pull: 0.55,             // periwinkle / violet (hue 226-266) pulled this share toward azure 214
    sat: 1.16, satAdd: 0.03, warmSat: 1.22,
    core: { r: [0.03, 0.09], k: 0.75, tint: [1.06, 0.96, 0.74], add: [0.05, 0.025, 0.0] },
  },
  rim: { inner: 2.43, outer: 2.70, front: -0.17, back: 0.17, round: 0.75, sheen: 0.32, bevel: 0.22 },
  props: {
    // the staged coins (their place along the path, m) drawn at the ORIGINAL's sizes (diameter ratios measured)
    coins: [[2.65, 0.92], [2.77, 0.94], [3.10, 0.81], [7.30, 0.90]],
    gem: { scale: 1.16, glow: 1.35 },
    sockRoll: 0.95,         // the staged sock's pose group's roll (rad; focus's is 0.18): lying diagonally, cuff up right
  },
};
{
  const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.struct;
  if (t) for (const k of Object.keys(t)) STRUCT[k] = t[k] && typeof t[k] === 'object' && !Array.isArray(t[k]) ? { ...STRUCT[k], ...t[k] } : t[k];
}
if (STRUCT_ON && typeof window !== 'undefined') window.__BW_STRUCT__ = STRUCT;   // (live DevTools inspection)
if (STRUCT_PARTS.hud && typeof document !== 'undefined') document.body.classList.add('s4struct');   // (page.html)

// a private random sequence for every object made here (three.js draws UUIDs from Math.random)
function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
export function structPrivately(seed, fn) { const keep = Math.random; Math.random = mulberry(seed); try { return fn(); } finally { Math.random = keep; } }
const f4 = (x) => (+x).toFixed(5);
const sm = (e0, e1, x) => { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); };
const pl = (P, x) => { if (x <= P[0][0]) return P[0][1]; for (let i = 1; i < P.length; i++) if (x <= P[i][0]) { const [a, b] = P[i - 1], [c, d] = P[i]; return b + (d - b) * (x - a) / (c - a); } return P[P.length - 1][1]; };
const hx = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f4((n >> 16 & 255) / 255)}, ${f4((n >> 8 & 255) / 255)}, ${f4((n & 255) / 255)})`; };   // sRGB as written

// ================================================================ 1. her
// (opening.js 4c skips Screen 3's presentation when STRUCT_PARTS.hero; game.js calls these from buildMascot)
// the crown's envelope: x and z scaled per height toward the circle, the tuft's tip lowered (drawn model only)
export function structCrown(model) {
  const C = STRUCT.hero.crown, report = { meshes: 0 };
  model.traverse((o) => {
    if (!o.isMesh) return;
    const A = o.geometry.attributes.position, n = A.count, out = new Float32Array(n * 3);
    let top = -Infinity, bot = Infinity;
    for (let i = 0; i < n; i++) { const y = A.getY(i); top = Math.max(top, y); bot = Math.min(bot, y); }
    // the body's half-width profile (max |x|) in bins of depth below the top
    const NB = 48, bw = (top - bot) / NB, w0 = new Float32Array(NB);
    for (let i = 0; i < n; i++) { const b = Math.min(NB - 1, Math.floor((top - A.getY(i)) / bw)); w0[b] = Math.max(w0[b], Math.abs(A.getX(i))); }
    for (let b = 1; b < NB; b++) w0[b] = Math.max(w0[b], w0[b - 1] * 0.0 + Math.min(w0[b], 9));   // (as measured)
    const prof = (h) => { const x = Math.min(NB - 1.001, Math.max(0, h / bw - 0.5)), i = Math.floor(x); return Math.max(0.05, w0[i] + (w0[i + 1] - w0[i]) * (x - i)); };
    for (let i = 0; i < n; i++) {
      const x = A.getX(i), y = A.getY(i), z = A.getZ(i), h = top - y;
      const drop = C.tip * Math.pow(1 - sm(0, C.tipH, h), 2);
      const h2 = Math.max(0, h + drop - C.tip);   // depth below the new (lowered) top
      const wt = h2 < C.R ? Math.sqrt(Math.max(0, 2 * C.R * h2 - h2 * h2)) : C.R;
      const s0 = Math.min(C.smax, Math.max(C.smin, wt / prof(h)));
      const s = 1 + (s0 - 1) * (1 - sm(C.h0, C.h1, h));
      out[i * 3] = x * s; out[i * 3 + 1] = y - drop; out[i * 3 + 2] = z * (1 + (s - 1) * C.kz);
    }
    o.geometry.setAttribute('position', new THREE.BufferAttribute(out, 3));   // (the glTF's is quantized and interleaved)
    o.geometry.computeBoundingBox(); o.geometry.computeBoundingSphere();
    report.meshes++;
  });
  return report;
}
// the fur's fragment for Screen 4 (shaders.js furFragment): crisper strands without Screen 3's droplets, the colour graded
// toward the ORIGINAL's magenta and kept under the white point (the Neutral tone mapping desaturates what goes over it)
function hueMatrix(deg) {   // rotation round the grey axis (rows)
  const a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a), k = (1 - c) / 3, q = Math.sqrt(1 / 3) * s;
  return [[c + k, k - q, k + q], [k + q, c + k, k - q], [k - q, k + q, c + k]];
}
export function structFurFragment(src, constBase) {
  const F = STRUCT.hero.fur, M = hueMatrix(F.hue);
  const col = (j) => `vec3(${f4(M[0][j])}, ${f4(M[1][j])}, ${f4(M[2][j])})`;   // GLSL mat3 is column-major
  let s = src;
  if (!STRUCT_PARTS.hero) return constBase ? s.replace('vec3 base = texture2D(map, vUv).rgb;', `vec3 base = vec3(${constBase.map(f4).join(', ')});`) : s;   // (the accepted fur: only the fill's constant colour)
  s = s.replace('c *= mix(0.5 + 0.72 * strand, 0.4 + 0.88 * strand, uSpike);', `c *= mix(0.5 + 0.72 * strand, 0.4 + 0.88 * strand, ${f4(F.strand)});   // (structmatch: crisper strands)`)
    .replace('gl_FragColor = vec4(c, 1.0);', `  {   // ?s3=intunnel,structmatch: the ORIGINAL's magenta, under the white point
    c = mat3(${col(0)}, ${col(1)}, ${col(2)}) * c;
    float stL = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = max(stL + (c - stL) * ${f4(F.sat)}, 0.0) * ${f4(F.gain)};
  }
  gl_FragColor = vec4(c, 1.0);`);
  if (constBase) s = s.replace('vec3 base = texture2D(map, vUv).rgb;', `vec3 base = vec3(${constBase.map(f4).join(', ')});`);
  return s;
}
// the fill between her legs: an ellipsoid inside her lower body, drawn with her fur's light (a constant fur colour)
export function structFill(model, furUniforms, furVertex, furFragment) {
  const K = STRUCT.hero.fill;
  let host = null; model.traverse((o) => { if (!host && o.isMesh) host = o; });
  if (!host) return null;
  const g = new THREE.SphereGeometry(1, 28, 18);
  g.scale(K.r[0], K.r[1], K.r[2]); g.translate(K.c[0], K.c[1], K.c[2]);
  const m = new THREE.ShaderMaterial({ uniforms: { map: { value: null }, ...furUniforms }, vertexShader: furVertex, fragmentShader: structFurFragment(furFragment, K.col) });
  const o = new THREE.Mesh(g, m); o.name = 'structFill';
  host.add(o);
  return { drawCalls: 1, triangles: g.index.count / 3 };
}
// her drawn size once Screen 3's stretch is off (round her centre, as opening.js applies the stretch)
export function structScale(model) {
  const k = new THREE.Vector3(...STRUCT.hero.scale);
  model.scale.multiply(k); model.position.multiply(k);
}
// her rim colour (the fur's uniform)
export function structFurUniforms(fur) {
  const F = STRUCT.hero.fur;
  fur.uRim.value.setRGB(F.rim[0] * F.rimK, F.rim[1] * F.rimK, F.rim[2] * F.rimK);
}

// ================================================================ 2. the water round her, in water space
const NU = 11, NX = 10;   // the field's grid instances (along the path x across)
const domeGeometry = (U = 20, V = 10, thMax = 1.85) => {   // a unit dome down a little past its equator (it sinks into the floor)
  const pos = [], idx = [];
  for (let j = 0; j <= V; j++) for (let i = 0; i <= U; i++) {
    const th = thMax * j / V, ph = 2 * Math.PI * i / U;
    pos.push(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph));
  }
  for (let j = 0; j < V; j++) for (let i = 0; i < U; i++) { const a = j * (U + 1) + i, d = a + U + 1; idx.push(a, a + 1, d, a + 1, d + 1, d); }
  return { pos, idx };
};
const waterVertex = /* glsl */ `
attribute vec3 iC; attribute vec4 iR, iK;   // centre (world, on the water); rx, height, rz, sink (m); type, seed, -, yaw
uniform vec3 uR, uU, uT; uniform float uTime;
varying vec3 vW, vN, vP; varying vec4 vK; varying float vHm;
void main() {
  vec3 n = position;
  float c = cos(iK.w), s = sin(iK.w);
  // a slow irregular wobble of its surface (the water's own motion)
  float wob = 1.0 + 0.06 * sin(n.x * 3.1 + n.z * 2.3 + iK.y * 6.28 + uTime * 1.6) + 0.045 * sin(n.y * 4.3 - n.x * 2.0 + iK.y * 17.0 - uTime * 2.2);
  vec3 q = vec3(n.x * c - n.z * s, n.y, n.x * s + n.z * c) * wob;
  vec3 p = vec3(q.x * iR.x, q.y * iR.y - iR.w, q.z * iR.z);
  vW = iC + uR * p.x + uU * p.y + uT * p.z;
  vec3 nl = vec3(q.x / max(iR.x, 1e-3), q.y / max(iR.y, 1e-3), q.z / max(iR.z, 1e-3));
  vN = normalize(uR * nl.x + uU * nl.y + uT * nl.z);
  vP = n; vK = iK; vHm = p.y;   // (vHm: m above the water)
  gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
}
`;
const waterFragment = (undisplay) => /* glsl */ `
uniform vec3 uR, uU, uT; uniform float uTime;
uniform vec3 uCol[9]; uniform vec3 uSky, uWhite, uFoam; uniform float uRimK, uSpecK, uFoamK, uBubK, uCoreK;
varying vec3 vW, vN, vP; varying vec4 vK; varying float vHm;
${undisplay}
float stH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0), up = dot(N, uU);
  vec3 L = normalize(uU * 0.8 + uR * 0.5 - uT * 0.25);   // the key light from the upper left
  float lit = dot(N, L) * 0.5 + 0.5;
  int ty = int(vK.x + 0.5);
  vec3 deep = ty == 0 ? uCol[0] : ty == 1 ? uCol[3] : uCol[6];
  vec3 body = ty == 0 ? uCol[1] : ty == 1 ? uCol[4] : uCol[7];
  vec3 hi = ty == 0 ? uCol[2] : ty == 1 ? uCol[5] : uCol[8];
  // glass: a deeper core where the eye looks through most water, lighter toward the lit side, sky at grazing angles
  vec3 col = mix(deep, body, smoothstep(0.18, 0.62, lit));
  col = mix(col, hi, smoothstep(0.66, 0.95, lit) * 0.75);
  col = mix(col, deep, smoothstep(0.55, 0.98, ndv) * (1.0 - smoothstep(0.35, 0.9, vP.y)) * uCoreK);
  // currents inside (they belong to the form: they move with it)
  float cur = sin(vP.x * 7.0 + vP.y * 5.0 + vK.y * 30.0 + uTime * 0.9) * sin(vP.z * 6.0 - vP.y * 4.0 + vK.y * 11.0 - uTime * 0.7);
  col = mix(col, hi, smoothstep(0.55, 0.95, cur) * 0.35 * (1.0 - smoothstep(0.7, 1.0, ndv)));
  float fr = pow(1.0 - ndv, 3.0);
  col = mix(col, uSky, fr * 0.55);
  // a crisp white rim on its upper, lit edge, and a highlight
  float rim = smoothstep(0.78, 0.93, 1.0 - ndv) * smoothstep(-0.1, 0.45, up) * smoothstep(0.35, 0.7, lit);
  col = mix(col, uWhite, clamp(rim * uRimK, 0.0, 1.0));
  float sp = pow(clamp(dot(reflect(-L, N), V), 0.0, 1.0), 36.0);
  col = mix(col, uWhite, clamp(sp * uSpecK, 0.0, 1.0));
  // broken foam where it meets the water, and a few small clear bubbles on it
  float ang = atan(vP.z, vP.x);
  float rag = 0.5 * sin(ang * 5.0 + vK.y * 20.0 + uTime * 1.2) + 0.5 * sin(ang * 11.0 - vK.y * 9.0 - uTime * 1.9);
  float foam = (1.0 - smoothstep(0.0, 0.045 + 0.03 * rag, vHm)) * smoothstep(-0.4, 0.3, rag);
  col = mix(col, uFoam, clamp(foam * uFoamK, 0.0, 1.0));
  vec2 bq = vec2(ang * 2.4, vP.y * 7.0); vec2 bi = floor(bq); vec2 bf = fract(bq) - 0.5;
  float br = 0.18 + 0.12 * stH(bi + 3.1 + vK.y * 5.0), bd = length(bf);
  float bub = step(0.86, stH(bi + vK.y * 7.0)) * (smoothstep(br - 0.07, br - 0.02, bd) * (1.0 - smoothstep(br, br + 0.04, bd))) * smoothstep(0.15, 0.5, vP.y);
  col = mix(col, uWhite, clamp(bub * uBubK, 0.0, 1.0));
  gl_FragColor = vec4(mtUndisplay(clamp(col, 0.0, 1.0)), 1.0);
}
`;
// hash of a grid cell (private, deterministic)
const hash = (a, b, k) => { let h = (Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263) + Math.imul(k, 1274126177)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
// S: the hero water's frame of her (tunnel_r7_hero_water.js buildHeroWater), undisplay: the walls' inverse display GLSL
export function buildStructWater({ scene, TR, L, W, mascot, updaters, time, S, undisplay }) {
  return structPrivately(0x57a1, () => {
    const K = STRUCT.water, NS = K.stage.length, N = NU * NX + NS;
    const { pos, idx } = domeGeometry();
    const g = new THREE.InstancedBufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
    const aC = new THREE.InstancedBufferAttribute(new Float32Array(N * 3), 3), aR = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4), aK = new THREE.InstancedBufferAttribute(new Float32Array(N * 4), 4);
    for (const a of [aC, aR, aK]) a.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('iC', aC); g.setAttribute('iR', aR); g.setAttribute('iK', aK); g.instanceCount = N;
    const C = K.col, cols = [...C.azure, ...C.lav, ...C.froth].map((h) => new THREE.Color(h));   // (sRGB values read as written: undisplayed in the shader)
    const raw = (hex) => { const n = parseInt(hex.slice(1), 16); return new THREE.Vector3((n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255); };
    const u = { uR: { value: new THREE.Vector3(1, 0, 0) }, uU: { value: new THREE.Vector3(0, 1, 0) }, uT: { value: new THREE.Vector3(0, 0, 1) }, uTime: time,
      uCol: { value: [...C.azure, ...C.lav, ...C.froth].map(raw) }, uSky: { value: raw(C.sky) }, uWhite: { value: raw(C.white) }, uFoam: { value: raw(C.foam) },
      uRimK: { value: K.rimK }, uSpecK: { value: K.specK }, uFoamK: { value: K.foamK }, uBubK: { value: K.bubbleK }, uCoreK: { value: K.coreK } };
    void cols;
    const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: waterVertex, fragmentShader: waterFragment(undisplay) });
    const mesh = new THREE.Mesh(g, mat); mesh.name = 'structWater'; mesh.frustumCulled = false; mesh.renderOrder = 5; mesh.visible = false;
    scene.add(mesh);
    const P = new THREE.Vector3(), F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
    let idle = 0;
    updaters.push((dt) => {
      mesh.visible = S.k > 0.01; if (!mesh.visible) return;
      dt = Math.min(dt || 0, 0.1);
      const Kw = STRUCT.water, z = mascot.z, D = S.sw2T || 0;
      if (D < 0.01) idle += dt * Kw.idle;   // (only while she waits)
      const back = (1 - Kw.k) * D + idle;   // how far the water's forms have streamed back past her (m)
      TR.frame(z, F); u.uR.value.copy(F.R); u.uU.value.copy(F.U); u.uT.value.copy(F.T);
      u.uRimK.value = Kw.rimK; u.uSpecK.value = Kw.specK; u.uFoamK.value = Kw.foamK; u.uBubK.value = Kw.bubbleK; u.uCoreK.value = Kw.coreK;
      const mix0 = Kw.startMix[0] + (1 - Kw.startMix[0]) * sm(Kw.startMix[1], Kw.startMix[2], D);
      const lift = (1 - 0.35 * S.air) * (1 + 0.3 * S.land) * S.k;
      const ex = (x) => 1 - sm(Kw.envX[0], Kw.envX[1], Math.abs(x - S.lagX));
      const put = (i, rel, x, rx, ry, rz, ty, seed, yaw, amp) => {
        const a = Math.max(0, amp) * lift;
        if (a < 0.02) { aR.setXYZW(i, 0, 0, 0, 0); return; }
        const zz = z + rel, h = W.surface(L, x, zz, time.value);
        TR.map(x, h, zz, P); aC.setXYZ(i, P.x, P.y, P.z);
        const k = 0.55 + 0.45 * a;
        aR.setXYZW(i, rx * k, ry * a, rz * k, ry * a * 0.3 * (1 - a) + 0.02);   // (rising out of the water as it nears her)
        aK.setXYZW(i, ty, seed, 0, yaw);
      };
      // the field: grid cells fixed in the water (they stream back with `back`), jittered, sized and typed per cell
      const q0 = Math.floor((Kw.rel[0] + back) / Kw.du), j0 = Math.floor((S.lagX - Kw.xr) / Kw.dx);
      let i = 0;
      for (let a = 0; a < NU; a++) for (let b = 0; b < NX; b++, i++) {
        const iu = q0 + a, jx = j0 + b, h1 = hash(iu, jx, 1), h2 = hash(iu, jx, 2), h3 = hash(iu, jx, 3), h4 = hash(iu, jx, 4), h5 = hash(iu, jx, 5);
        const rel = (iu + 0.5 + 0.75 * (h1 - 0.5)) * Kw.du - back, x = (jx + 0.5 + 0.75 * (h2 - 0.5)) * Kw.dx;
        if (rel < Kw.rel[0] || rel > Kw.rel[1]) { aR.setXYZW(i, 0, 0, 0, 0); continue; }
        const r = Kw.r[0] + (Kw.r[1] - Kw.r[0]) * h3, ty = h4 < Kw.types[0] ? 0 : h4 < Kw.types[1] ? 1 : 2;
        put(i, rel, x, r, pl(Kw.height, rel) * (0.72 + 0.4 * h5), r * (0.8 + 0.3 * h1), ty, h5, h2 * 6.28, pl(Kw.env, rel) * ex(x) * mix0);
      }
      // the staged forms (water-fixed as well: they stream back from where they stand at the start)
      for (let s = 0; s < NS; s++, i++) {
        const [r0, x, rx, ry, rz, ty, yaw] = Kw.stage[s], rel = r0 - back;
        if (rel < Kw.rel[0]) { aR.setXYZW(i, 0, 0, 0, 0); continue; }
        const env = rel < -0.45 ? pl(Kw.env, rel) : 1;
        put(i, rel, x, rx, ry, rz, ty, 0.13 + 0.17 * s, yaw, env * (1 - 0.0 * D));
      }
      aC.needsUpdate = aR.needsUpdate = aK.needsUpdate = true;
    });
    return { drawCalls: 1, instances: N, triangles: N * idx.length / 3 };
  });
}

// ================================================================ 3. the washer's metal housing at the top (priority 1)
// The drum's upper wall near the camera drawn as the washer's brushed silver / lavender / purple metal (existing geometry:
// heroWalls, its main, tunnel_r8_liquid.js wallFragment). At Tap to Start the rim, its face and the collar show the housing
// (none of this: it fades in only once the camera has moved toward the rim); as the camera passes the rim the drum's own
// metal takes over, so the top band stays the washer's metal while she swims. Its extent is measured from the camera (the
// part of the upper wall seen at the top of the frame, about 3-10 m ahead); its streaks, seams and perforations are fixed to
// the drum, so they stream past as she travels. Screen colours (sRGB, sampled from the ORIGINAL's housing y .22-.36:
// #6961ca, #b191bc, #654d8b, #b494da, #f3daf3, the rim's #de9e8d) written through mtUndisplay.
export const HOUSING = {
  arc: [0.2, 0.62],          // sin(angle round the tube): from about 12 degrees above the axis, full from 38
  near: [1.2, 2.6],          // m ahead of the camera where it begins (behind the top of the frame)
  far: [8.6, 10.4],          // m ahead where it gives way to the water (shorter down the sides: sideK m per unit below the top)
  sideK: 5.5,
  fadeIn: [-4.7, -2.9],      // the camera's place relative to the drum's mouth over which it fades in (the start is -5.41)
  col: { deep: '#5c4a92', mid: '#8a7fd6', lav: '#b39ad8', silver: '#ece4fa', pink: '#efd3ef', gold: '#e2a68e' },
  streaks: 0.16, seams: 2.3, perf: 0.5, lip: 0.85, sheen: 0.55,
};
export function structHousingGLSL(radius) {
  const H = HOUSING, C = H.col;
  return /* glsl */ `  {   // ?s3=intunnel,structmatch: the washer drum's metal on its upper wall near the camera (tunnel_s4_struct.js HOUSING)
    float stD = u - uHeroCam.z, stUp = sin(a);
    float stFar = ${f4(H.far[1])} - ${f4(H.sideK)} * (1.0 - stUp);
    float stE = stFar - stD;   // m to its far edge
    float stK = smoothstep(${f4(H.arc[0])}, ${f4(H.arc[1])}, stUp) * smoothstep(${f4(H.near[0])}, ${f4(H.near[1])}, stD)
      * smoothstep(0.0, ${f4(H.far[1] - H.far[0])}, stE) * smoothstep(${f4(H.fadeIn[0])}, ${f4(H.fadeIn[1])}, uHeroCam.z - uStart);
    if (stK > 0.001) {
      float stX = a * ${f4(radius)};   // m round the drum
      // brushed metal: lavender at the top to deeper violet down the sides, fine streaks along the drum
      float stS = sin(stX * 61.0 + sin(stX * 7.0) * 2.0) * 0.5 + sin(stX * 23.0 + 1.7) * 0.35 + sin(stX * 141.0) * 0.15;
      vec3 stC = mix(${hx(C.deep)}, ${hx(C.mid)}, smoothstep(0.25, 0.75, stUp));
      stC = mix(stC, ${hx(C.lav)}, smoothstep(0.55, 0.95, stUp) * 0.85);
      stC *= 1.0 + ${f4(H.streaks)} * stS;
      // a soft sheen band running round it (the centre's light on curved metal), silver and a pink reflection
      float stSh = exp(-pow((stE - 3.2) / 1.4, 2.0)) * smoothstep(0.4, 0.9, stUp);
      stC = mix(stC, ${hx(C.silver)}, stSh * ${f4(H.sheen)} * (0.75 + 0.25 * stS));
      stC = mix(stC, ${hx(C.pink)}, exp(-pow((stE - 5.6) / 0.7, 2.0)) * smoothstep(0.6, 0.95, stUp) * 0.35);
      // the drum's panel seams (fixed to the drum: they stream past) and its rows of perforations
      float stQ = fract(u / ${f4(H.seams)});
      float stW = fwidth(u / ${f4(H.seams)}) * 1.5 + 0.004;
      stC *= 1.0 - 0.32 * (1.0 - smoothstep(0.0, 0.02 + stW, abs(stQ - 0.5) - 0.0)) ;
      stC = mix(stC, ${hx(C.silver)}, 0.45 * (1.0 - smoothstep(0.0, 0.015 + stW, abs(stQ - 0.53))));
      vec2 stP = vec2(stX, u) / ${f4(H.perf)}; vec2 stF = fract(stP + vec2(0.5 * step(0.5, fract(floor(stP.y) * 0.5)), 0.0)) - 0.5;
      float stAA = fwidth(stP.x) * 1.5 + 0.02, stR = length(stF);
      float stHole = (1.0 - smoothstep(0.11, 0.11 + stAA, stR)) * (1.0 - smoothstep(0.3, 0.8, stAA * 4.0));
      stC = mix(stC, ${hx(C.deep)} * 0.8, stHole * 0.55);
      stC = mix(stC, ${hx(C.silver)}, (1.0 - smoothstep(0.0, stAA, abs(stR - 0.14))) * step(0.0, stF.y) * 0.4 * (1.0 - smoothstep(0.3, 0.8, stAA * 4.0)));
      // its lip where the water begins: a warm gold-lavender highlight over a dark violet line
      stC = mix(stC, ${hx(C.gold)}, exp(-pow((stE - 0.55) / 0.22, 2.0)) * ${f4(H.lip)} * smoothstep(0.5, 0.9, stUp));
      stC = mix(stC, ${hx(C.deep)} * 0.75, exp(-pow((stE - 0.15) / 0.12, 2.0)) * 0.6);
      col = mix(col, mtUndisplay(clamp(stC, 0.0, 1.0)), stK);
    }
  }
`;
}

// ================================================================ 4. the tunnel (opt-in ,tunnel2)
// at the end of matchWall's screen colour c (tunnel_r9_match.js; rw: the screen radius round the centre, in widths)
export function structTunnelGLSL() {
  const T = STRUCT.tunnel, C = T.core;
  return /* glsl */ `  {   // ?s3=intunnel,structmatch: the ORIGINAL's blues (periwinkle toward azure, richer) and a warmer golden core
    vec4 stK = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 stP = mix(vec4(c.bg, stK.wz), vec4(c.gb, stK.xy), step(c.b, c.g));
    vec4 stQ = mix(vec4(stP.xyw, c.r), vec4(c.r, stP.yzx), step(stP.x, c.r));
    float stD = stQ.x - min(stQ.w, stQ.y);
    vec3 hsv = vec3(abs(stQ.z + (stQ.w - stQ.y) / (6.0 * stD + 1e-10)), stD / (stQ.x + 1e-10), stQ.x);
    float hd = hsv.x * 360.0, band = smoothstep(${f4(T.band[0])}, ${f4(T.band[1])}, rw);
    float blue = smoothstep(180.0, 190.0, hd) * (1.0 - smoothstep(272.0, 282.0, hd)) * smoothstep(0.06, 0.16, hsv.y) * band;
    float vio = smoothstep(224.0, 232.0, hd) * (1.0 - smoothstep(262.0, 272.0, hd));
    hd = mix(hd, 214.0 + (hd - 214.0) * (1.0 - ${f4(T.pull)}), vio * blue);
    hsv.y = mix(hsv.y, min(1.0, hsv.y * ${f4(T.sat)} + ${f4(T.satAdd)}), blue);
    float warm = (1.0 - smoothstep(60.0, 75.0, hd) + smoothstep(300.0, 320.0, hd)) * smoothstep(0.08, 0.2, hsv.y) * band;
    hsv.y = mix(hsv.y, min(1.0, hsv.y * ${f4(T.warmSat)}), clamp(warm, 0.0, 1.0));
    vec3 stR = clamp(abs(fract(vec3(hd / 360.0) + vec3(1.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
    c = hsv.z * mix(vec3(1.0), stR, hsv.y);
    float stCore = (1.0 - smoothstep(${f4(C.r[0])}, ${f4(C.r[1])}, rw)) * ${f4(C.k)};
    c = mix(c, clamp(c * vec3(${C.tint.map(f4).join(', ')}) + vec3(${C.add.map(f4).join(', ')}), 0.0, 1.0), stCore);
  }
`;
}
// the rim: round6's bezel (matchBezel's material) on a thicker, rounded section with a bevel's light and a sheen
function sweepSection(prof, seg = 192) {
  const pos = [], idx = [], n = prof.length;
  for (let i = 0; i <= seg; i++) { const a = 2 * Math.PI * i / seg, c = Math.cos(a), s = Math.sin(a); for (const [r, z] of prof) pos.push(c * r, s * r, z); }
  for (let i = 0; i < seg; i++) for (let j = 0; j < n - 1; j++) { const q = i * n + j; idx.push(q, q + 1, q + n, q + 1, q + n + 1, q + n); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}
export function structRim(scene, B) {
  const R = STRUCT.rim, bezel = scene.getObjectByName('r6Bezel');
  if (!bezel || !bezel.material || !bezel.material.fragmentShader) return null;
  return structPrivately(0x57a3, () => {
    // a superellipse loop in (r, z), as round6's roundedSection
    const rc = (R.inner + R.outer) / 2, zc = (R.front + R.back) / 2, hr = (R.outer - R.inner) / 2, hz = (R.back - R.front) / 2, e = 2 / Math.max(0.1, R.round), prof = [];
    for (let i = 0; i <= 48; i++) { const t = 2 * Math.PI * i / 48, c = Math.cos(t), s = Math.sin(t); prof.push([rc + hr * Math.sign(c) * Math.pow(Math.abs(c), 1 / e * 2 / 2), zc + hz * Math.sign(s) * Math.pow(Math.abs(s), 1 / e * 2 / 2)]); }
    bezel.geometry = sweepSection(prof);
    const m = bezel.material, key = `(r - ${f4(B.inner)}) / ${f4(B.outer - B.inner)}`;
    if (!m.fragmentShader.includes(key)) return { patched: false };
    m.fragmentShader = m.fragmentShader.replace(key, `(r - ${f4(R.inner)}) / ${f4(R.outer - R.inner)}`)
      .replace(/gl_FragColor = vec4\(mtUndisplay\(min\(c \+ vec3\(0\.12, 0\.1, 0\.06\) \* glint, 1\.0\)\), 1\.0\);/, `  {   // ?s3=intunnel,structmatch: a rounded bevel's light (darker at its inner and outer edges) and a metallic sheen
    vec3 stN = normalize(vN); vec3 stV = normalize(cameraPosition - vW);
    float stB = clamp(dot(stN, normalize(vec3(-0.35, 0.8, -0.5))) * 0.5 + 0.5, 0.0, 1.0);
    c *= ${f4(1 - R.bevel)} + ${f4(2 * R.bevel)} * stB;
    float stS = pow(clamp(dot(reflect(-stV, stN), normalize(vec3(-0.3, 0.75, -0.6))), 0.0, 1.0), 18.0);
    c += vec3(1.0, 0.93, 0.78) * stS * ${f4(R.sheen)};
  }
  gl_FragColor = vec4(mtUndisplay(min(c + vec3(0.12, 0.1, 0.06) * glint, 1.0)), 1.0);`);
    m.needsUpdate = true;
    return { patched: true, inner: R.inner, outer: R.outer };
  });
}

// ================================================================ 4. the staged props (drawn only; their pick-up places unchanged)
export function structProps({ coins, gems, socks }) {
  const K = STRUCT.props, report = { coins: 0 };
  for (const [zz, s] of K.coins) for (const c of coins) {
    const p = c.home || (c.obj && c.obj.position);
    if (!p || Math.abs(p.z - zz) > 0.06 || !c.obj || !c.obj.isLOD) continue;
    for (const lv of c.obj.levels) lv.object.scale.multiplyScalar(s);
    report.coins++;
  }
  const gi = gems[0] && gems[0].obj && gems[0].obj.children[0];
  if (gi) {
    gi.scale.multiplyScalar(K.gem.scale); gi.position.multiplyScalar(K.gem.scale);
    const mats = new Set(); gi.traverse((o) => { if (o.isMesh && o.material) mats.add(o.material); });
    for (const m of mats) { if (m.emissive) m.emissiveIntensity = (m.emissiveIntensity || 1) * K.gem.glow; else if (m.color) m.color.multiplyScalar(K.gem.glow); }
    report.gem = mats.size;
  }
  const pose = socks[0] && socks[0].turn && socks[0].turn.children[0];
  if (pose && pose.name === 'focusSockPose') { pose.rotation.z = K.sockRoll; report.sock = true; }
  return report;
}
