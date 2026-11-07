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
    scale: [1.025, 1.02, 1.025],
    lift: 0.07,             // m her drawn body rides higher in the water (the ORIGINAL shows more of her above it; drawn only)   // (measured at Tap to Start: 0.97 drew her 0.487 wide and 0.143 tall, the ORIGINAL 0.513 / 0.167)
    // the fill closing the gap between her legs (glTF units: centre, radii) and its colour (the fur texture's mean pink)
    fill: { c: [0, -0.6, 0.02], r: [0.5, 0.34, 0.46], col: [0.62, 0.11, 0.34] },
    // the fur (linear, before the tone mapping): crisper strands (Screen 3's spike shading at this share), hue turned
    // (degrees), saturation round the luminance, gain (kept under the white point); a whiter rim
    fur: { strand: 0.7, hue: -9, sat: 1.32, gain: 0.86, rim: [1.0, 0.86, 0.97], rimK: 1.0 },
  },
  water: {
    k: 0.6,                 // the water's own forward flow, a share of her travel (its forms stream back past her at the rest)
    idle: 0.05,             // m/s they drift back while she waits at the start
    du: 0.26, dx: 0.25,     // grid cells (m along the path, m across), world (water) anchored
    rel: [-1.3, 1.3],       // the window round her (m along the path; - toward the camera: beyond -1.3 is under the frame)
    xr: 1.3,                // its half width (m)
    // amplitude along the path round her and across ([inner, outer] m from her)
    env: [[-1.3, 0], [-1.0, 0.8], [-0.4, 1], [0.2, 1], [0.7, 0.6], [1.3, 0]], envX: [0.9, 1.3],
    // their height (m) along the path round her (taller toward the camera: they make her waterline seen from above)
    height: [[-1.3, 0.38], [-0.8, 0.37], [-0.45, 0.35], [0.0, 0.32], [0.4, 0.23], [0.8, 0.13], [1.3, 0.05]],
    r: [0.24, 0.38],        // radius range (m): low, wide waves (about twice as wide as tall), not gumdrops or cushions
    profile: 1.3,           // a wave's profile: height x (1 - (d/r)^2)^profile (a smooth foot and a round top)
    union: 0.35,            // how much of the neighbouring waves' swell adds under the highest one (merged, not separate)
    types: [0.92, 0.97],    // shares: < blue, < lavender-tinted glass (a local tint only), else froth
    startMix: [0.75, 0.4, 2.5],   // the field's amplitude at the start, eased to 1 over these metres swum (the staged forms lead)
    // the staged forms at the start (the ORIGINAL's arrangement): [m along the path from her, m across (+ screen-left),
    // radius, height (m), type (0 blue, 1 lavender-tinted glass, 2 froth)]
    stage: [
      [-0.38, 0.36, 0.32, 0.38, 1],     // the lavender-tinted glass at her lower left (the ORIGINAL's)
      [-0.44, 0.1, 0.30, 0.35, 0],
      [-0.52, -0.12, 0.32, 0.36, 0],   // under her centre
      [-0.42, -0.36, 0.31, 0.35, 0],   // her lower right
      [-0.14, 0.86, 0.36, 0.39, 0],    // the left bank
      [-0.72, 0.62, 0.34, 0.38, 2],
      [-0.08, -0.88, 0.36, 0.39, 0],   // the right bank
      [-0.78, -0.62, 0.34, 0.38, 2],
      [0.28, 0.66, 0.32, 0.30, 0],     // beside her
      [0.32, -0.66, 0.32, 0.30, 0],
    ],
    // sRGB screen colours (written through the inverse of the grade and tone mapping, as the walls)
    col: {
      // (the ORIGINAL's foreground water y .80-.92, measured: azure #4496e4 .. #b1e1fc, about 20 % white, 9 % lavender; no
      // dark outlines)
      azure: ['#1c64d4', '#3a8eea', '#a6dcff'], lav: ['#5a64d4', '#8c96ee', '#d8e0ff'], froth: ['#3f96ea', '#9fd4ff', '#eef8ff'],
      turq: '#26c4f0',   // the turquoise currents (a per-form share of the body)
      sky: '#e2f4ff', white: '#ffffff', foam: '#f4fbff',
    },
    rimK: 0.45, specK: 1.0, foamK: 0.9, bubbleK: 0.85, coreK: 0.25, frothK: 0.6, skyK: 0.18, sparkK: 1.0, turqK: 0.8,
  },
  // the accepted swell's own colour graded (linear, before the tone mapping): measured on the page at Tap to Start, y .70-.92,
  // its blue has the ORIGINAL's saturation and value (median 0.42-0.46 / 0.96) but a greener hue (205 against 207-212) and
  // less depth; the hue turned toward the ORIGINAL's azure, the blues a little richer and their darker parts deeper (the
  // whites, its foam, untouched)
  swell: { hue: 8, sat: 1.3, deep: 0.7, deepL: [0.2, 0.62] },
  // swim3 (the user's correction mandate, 7 November ~16:40 UTC). Diagnosis (layer isolation at +3 s, seed 7,
  // Previews/WebDemo/screen4_round9_match/65_swim3/): the pale icy band round her is heroSwell itself: a mound that covers
  // the lower half of her body (hidden, the band's pink rises from 15 % to 34 %; the ORIGINAL 21 %), its face light
  // (#acdffc / #78c4f8 / #3f8cf0) and printed with white comma arcs (`lace`); the floor round it carries focus's white
  // streaks (0.95). Corrected at the source: the crest lowered, the arcs off, the face's own colours the ORIGINAL's
  // foreground blues, the floor's streaks to accents; her swim rhythm (swimPose, tunnel_s4_swim.js, drawn only).
  swim3: {
    // the swell's crest heights (HERO_WATER.swell line and mounds) x this. Measured (her visible pink box, her_box.py): the
    // previous candidate's waterline already matches the ORIGINAL (visible height 0.156-0.178 of the frame through the run,
    // the ORIGINAL 0.167); 0.6 showed her as a tall egg (0.245). So the height stays; the pale icy look is the face's colour.
    crest: 1.0,
    water: {                // merged into MATCH_WATER (tunnel_r9_match_water.js)
      // (measured, y .80-.93 of the page: the ORIGINAL's blue median luminance 0.71, saturation 0.41, quartiles 0.60-0.81,
      // white 20 %; the previous candidate 0.71 / 0.45 but a flat 0.62-0.77 and 13 % white: it lacks CONTRAST, not darkness.
      // So deeper cores with crisp white splash accents at the crest (rim, small bubble rings, glints), not comma arcs)
      face: { lace: { amount: 0 }, rim: { amount: 0.95 }, rings: { amount: 0.95, share: 0.38 }, spark: { amount: 1.0 },
        water: { light: '#a6defd', mid: '#4a9ff0', deep: '#2577e2', amount: 0.9 } },
      floorFx: { streak: { amount: 0.55, blue: { share: 0.5, amount: 0.9 } } },
    },
    grade: { hue: 3, sat: 1.08, deep: 0.86 },   // the swell's grade (STRUCT.swell) eased: the face's own colours are now right
  },
  // match4: the tunnel rings' saturation (measured y .30-.60: pixels above saturation 0.75 are 24.5 % of the ORIGINAL's blue,
  // 5.5-7.6 % of ours) through the walls' own grade (structTunnelGLSL, the opt-in ,tunnel2's), without its warm core
  match4: {
    // her fur under the shells (measured, her region y .66-.86 at Tap to Start: the ORIGINAL hue 317, saturation 0.66, luminance
    // quartiles 0.38 / 0.49 / 0.61; with the shells at swim3's grade 320 / 0.54 / 0.50-0.65: lighter, paler, flatter) and her
    // size (the shells widen her outline: her pink 54 % of the region against the ORIGINAL's 49 %)
    fur: { sat: 1.6, gain: 0.74 }, scale: [1.0, 0.995, 1.0],
    tunnel: { pull: 0.6, sat: 1.32, satAdd: 0.05, warmSat: 1.0, core: { r: [0.03, 0.09], k: 0.0, tint: [1, 1, 1], add: [0, 0, 0] } } },
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
// ,hud2 (opt-in, deferred by the user): the power buttons as the ORIGINAL's corner cards (low, in the corners, running off
// the frame's bottom; icon, "3" badge, a small label) and a small, low Tap to Start pill; the visible card 50 u tall (at
// least 44 CSS px on a Pixel 7); every button keeps its function. Injected only with the switch, so the page (index.html) is
// byte-identical without it (a stylesheet change alone shifted the HUD icons' rasterization by a few levels).
const HUD2_CSS = `
  body.s4struct .power { bottom: calc(var(--u) * -16 + env(safe-area-inset-bottom, 0px)); width: calc(var(--u) * 92); height: calc(var(--u) * 66); border-radius: calc(var(--u) * 20); }
  body.s4struct #blastBtn { left: calc(var(--u) * 6); }
  body.s4struct #turboBtn { right: calc(var(--u) * -8); }
  body.s4struct .power svg { left: calc(var(--u) * 22); top: calc(var(--u) * 2); width: calc(var(--u) * 42); height: calc(var(--u) * 42); }
  body.s4struct .power .lbl { bottom: auto; top: calc(var(--u) * 40); font-size: calc(var(--u) * 8); }
  body.s4struct .power .badge { right: calc(var(--u) * 6); top: calc(var(--u) * -7); width: calc(var(--u) * 27); height: calc(var(--u) * 27); font-size: calc(var(--u) * 16); }
  body.s4struct #turboBtn .badge { right: calc(var(--u) * 14); }
  body.s4struct #startPanel { bottom: calc(var(--u) * 4 + env(safe-area-inset-bottom, 0px)); width: calc(var(--u) * 60); height: calc(var(--u) * 21); margin-left: calc(var(--u) * 3); }
  body.s4struct #startPanel .tap { top: calc(var(--u) * 2.5) !important; font-size: calc(var(--u) * 10.5); line-height: calc(var(--u) * 16); white-space: nowrap; }
`;
if (STRUCT_PARTS.hud && typeof document !== 'undefined') {
  document.body.classList.add('s4struct');
  const st = document.createElement('style'); st.textContent = HUD2_CSS; document.head.appendChild(st);
}

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
  const F = STRUCT_PARTS.match4 ? { ...STRUCT.hero.fur, ...STRUCT.match4.fur } : STRUCT.hero.fur, M = hueMatrix(F.hue);
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
// match4: her fur as long, fine, separate strands standing out of her silhouette (the ORIGINAL's; the user's character
// mandate of 7 November ~21:45 UTC). Shells of her own mesh (the brushes' technique, fluffy_brush.js), offset along its
// normals with a little outward lean; each shell keeps only the strands' cross-sections (roots scattered over her surface in
// her model's own space, tapering, each its own length), shaded by her own fur shader (so the strands are her colour) and a
// little paler toward their tips. Drawn only; one draw call per mesh (instanced shells).
export const SHELL_FUR = { layers: 10, len: 0.1, lean: 0.35, density: 52, thick: 0.34, tip: 0.08, root: 0.7 };   // (len, density: her model's own units; she is about 2.2 wide in them)
const SHELL_VERTEX = /* glsl */ `
attribute float aLayer;
uniform float uShLen, uShLean;
varying vec2 vUv; varying vec3 vN; varying vec3 vWorld; varying vec3 vRoot; varying vec3 vRootN; varying float vH;
void main() {
  vUv = uv; vH = aLayer;
  vec3 n = normalize(normal), r = normalize(position + vec3(0.0, 0.0, 1e-4));
  vec3 p = position + normalize(n + r * uShLean) * uShLen * aLayer;
  vRoot = position; vRootN = n;
  vec4 w = modelMatrix * vec4(p, 1.0); vWorld = w.xyz;
  vN = normalize(mat3(modelMatrix) * n);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
function shellFragment(furFragment) {
  const F = SHELL_FUR;
  return furFragment.replace('varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;', `varying vec2 vUv; varying vec3 vN; varying vec3 vWorld;
varying vec3 vRoot; varying vec3 vRootN; varying float vH;
float shH3(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
vec3 shH33(vec3 p) { p = fract(p * vec3(0.1031, 0.1030, 0.0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }`)
    .replace('void main() {', `void main() {
  {   // the strands' cross-sections on this shell (match4, tunnel_s4_struct.js SHELL_FUR)
    vec3 q = vRoot * ${f4(F.density)}, b = floor(q - 0.5);
    float best = 9.0, bl = 1.0;
    for (int i = 0; i < 2; i++) for (int j = 0; j < 2; j++) for (int k = 0; k < 2; k++) {
      vec3 c = b + vec3(float(i), float(j), float(k)), pt = c + 0.2 + 0.6 * shH33(c), d = q - pt;
      d -= vRootN * dot(d, vRootN);
      float dl = length(d);
      if (dl < best) { best = dl; bl = 0.45 + 0.55 * shH3(c + 7.0); }
    }
    if (vH > bl || best > mix(${f4(F.thick)}, ${f4(F.thick * 0.22)}, vH / bl)) discard;
  }`)
    .replace(/gl_FragColor = vec4\(c, 1\.0\);(?![\s\S]*gl_FragColor = vec4\(c, 1\.0\);)/, `c *= mix(${f4(F.root)}, 1.0 + ${f4(F.tip)}, vH);   // deeper between the strands' roots, a little paler at their tips
  gl_FragColor = vec4(c, 1.0);`);
}
export function structShellFur(model, furUniforms, furFragment) {
  const F = SHELL_FUR, made = [];
  model.traverse((o) => {
    if (!o.isMesh || o.name === 'structFill' || o.name === 'structShellFur' || !o.geometry.attributes.normal) return;
    const g0 = o.geometry, g = new THREE.InstancedBufferGeometry();
    g.index = g0.index; for (const k of ['position', 'normal', 'uv']) if (g0.attributes[k]) g.setAttribute(k, g0.attributes[k]);
    const h = new Float32Array(F.layers); for (let i = 0; i < F.layers; i++) h[i] = (i + 1) / F.layers;
    g.setAttribute('aLayer', new THREE.InstancedBufferAttribute(h, 1)); g.instanceCount = F.layers;
    const m = new THREE.ShaderMaterial({ uniforms: { map: o.material.uniforms.map, ...furUniforms, uShLen: { value: F.len }, uShLean: { value: F.lean } },
      vertexShader: SHELL_VERTEX, fragmentShader: shellFragment(furFragment), side: THREE.DoubleSide });
    made.push([o, new THREE.Mesh(g, m)]);
  });
  for (const [o, s] of made) { s.name = 'structShellFur'; s.frustumCulled = false; o.add(s); }
  return { meshes: made.length, layers: F.layers };
}

// her drawn size once Screen 3's stretch is off (round her centre, as opening.js applies the stretch)
export function structScale(model) {
  const k = new THREE.Vector3(...(STRUCT_PARTS.match4 ? STRUCT.match4.scale : STRUCT.hero.scale));
  model.scale.multiply(k); model.position.multiply(k);
  model.position.y += STRUCT.hero.lift;
}
// her rim colour (the fur's uniform)
export function structFurUniforms(fur) {
  const F = STRUCT.hero.fur;
  fur.uRim.value.setRGB(F.rim[0] * F.rimK, F.rim[1] * F.rimK, F.rim[2] * F.rimK);
}

// ================================================================ 2. the water round her, in water space
// One continuous water surface round her (a height field on a patch in her track frame, opaque, depth-written), shaped as
// separate rounded wave mounds whose places are fixed in the WATER: the water flows forward at a share of her speed, so the
// mounds stream back past her as she swims (the patch is only where they are drawn; nothing on it is pinned to her). Each
// mound rises as it nears her and sinks away behind (its amplitude), so her lower body is in the water while her dome stays
// clear above it. Creases where two mounds meet carry white foam, crests a crisp white rim; colours from the ORIGINAL's
// foreground (azure bodies, darker cores, pale lavender-blue glass mounds mainly at her lower left), screen colours through
// the walls' inverse grade and tone mapping.
const NU = 11, NX = 11, NS = STRUCT.water.stage.length, NM = NU * NX + NS;   // the mounds: grid cells and the staged ones
const PATCH = { x: [-1.7, 1.7], u: [-1.35, 1.35], nx: 112, nu: 88 };
const waterVertex = () => /* glsl */ `
uniform vec4 uM[${NM}];   // mound: x across (+ screen-left, m), along the path from her (m), radius (m) + 10 x type, height (m)
uniform vec3 uC, uR, uU, uT; uniform float uTime, uBack, uBase, uPX;
varying vec3 vW, vN; varying vec4 vS;   // vS: share of its mound's height, crease, height (m), type
varying vec2 vQ; varying float vSeed;
void main() {
  vec2 p = position.xz + vec2(uPX, 0.0);   // x across (the patch follows her lane), u along the path (m, her frame)
  float h1 = 0.0, h2 = 0.0, hs = 0.0; vec2 g1 = vec2(0.0), gs = vec2(0.0); float a1 = 1.0, t1 = 0.0, s1 = 0.0;
  for (int i = 0; i < ${NM}; i++) {
    vec4 m = uM[i];
    if (m.w <= 0.001) continue;
    float ty = floor(m.z / 10.0), rad = m.z - 10.0 * ty;
    float sd = fract(sin((m.y + uBack) * 12.9898 + m.x * 78.233) * 43758.5453);   // (fixed in the water)
    vec2 d = p - m.xy;
    // a slightly irregular round mound (its outline wobbles with its seed and the clock)
    float an = atan(d.y, d.x), dl = length(d);
    float rr = rad * (1.0 + (0.16 * sin(an * 3.0 + sd * 40.0 + uTime * 0.9) + 0.09 * sin(an * 5.0 - sd * 17.0 - uTime * 1.3) + 0.05 * sin(an * 9.0 + sd * 7.0)) * smoothstep(0.2, 0.7, dl / rad));   // (irregular)
    float t2 = dl * dl / (rr * rr);
    if (t2 >= 1.0) continue;
    // a rounded glass dome (steep at its foot, round on top)
    float b = max(1.0 - t2, 1e-3); float h = m.w * pow(b, ${f4(STRUCT.water.profile)});
    vec2 g = m.w * ${f4(STRUCT.water.profile)} * pow(b, ${f4(STRUCT.water.profile - 1)}) * (-2.0 * d / (rr * rr));
    hs += h; gs += g;
    if (h > h1) { h2 = h1; h1 = h; g1 = g; a1 = m.w; t1 = ty; s1 = sd; } else if (h > h2) h2 = h;
  }
  // separate forms (the highest mound wins) with a little of the others' swell under them
  float H = h1 + ${f4(STRUCT.water.union)} * (hs - h1); vec2 G = g1 + ${f4(STRUCT.water.union)} * (gs - g1);
  float hb = H - 0.035;   // (the patch rests just under the floor's water where there is no mound)
  vW = uC + uR * p.x + uU * (uBase + hb) + uT * p.y;
  vN = normalize(uU - uR * G.x - uT * G.y);
  vS = vec4(h1 / max(a1, 1e-3), 1.0 - smoothstep(0.0, 0.08, h1 - h2), hb, t1);
  vS.y *= smoothstep(0.03, 0.08, h2);   // (a crease only where two raised mounds meet)
  vQ = vec2(p.x, p.y + uBack); vSeed = s1;   // (water coordinates: they stream past her)
  gl_Position = projectionMatrix * viewMatrix * vec4(vW, 1.0);
}
`;
const waterFragment = (undisplay) => /* glsl */ `
uniform vec3 uR, uU, uT; uniform float uTime;
uniform vec3 uCol[9]; uniform vec3 uSky, uWhite, uFoam, uTurq; uniform float uRimK, uSpecK, uFoamK, uBubK, uCoreK, uSkyK, uFrothK, uSparkK, uTurqK;
varying vec3 vW, vN; varying vec4 vS; varying vec2 vQ; varying float vSeed;
${undisplay}
float stH(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {
  if (vS.z < -0.02) discard;   // (under the floor's water)
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  // fine ripples on its surface (water coordinates: they flow with it), for glints
  vec2 rq = vQ * 14.0;
  N = normalize(N + (uR * (sin(rq.x + sin(rq.y * 1.3) + uTime * 2.0) * 0.5) + uT * (sin(rq.y * 1.2 - uTime * 1.7 + cos(rq.x)) * 0.5)) * 0.18 * smoothstep(0.1, 0.5, vS.x));
  float ndv = clamp(dot(N, V), 0.0, 1.0), up = clamp(dot(N, uU), 0.0, 1.0);
  vec3 L = normalize(uU * 0.6 + uR * 0.55 - uT * 0.3);   // the key light from the upper left
  float lit = dot(N, L) * 0.5 + 0.5, hN = clamp(vS.x, 0.0, 1.0);
  int ty = int(vS.w + 0.5);
  vec3 deep = ty == 0 ? uCol[0] : ty == 1 ? uCol[3] : uCol[6];
  vec3 body = ty == 0 ? uCol[1] : ty == 1 ? uCol[4] : uCol[7];
  vec3 hi = ty == 0 ? uCol[2] : ty == 1 ? uCol[5] : uCol[8];
  body = mix(body, uTurq, uTurqK * vSeed * smoothstep(0.2, 0.7, vS.x));   // turquoise currents in some forms
  // glass: deeper at its foot and where the eye looks into it, lighter up its lit side, pale at its crest
  vec3 col = mix(deep, body, smoothstep(0.05, 0.5, hN) * (0.55 + 0.45 * lit));
  col = mix(col, hi, smoothstep(0.55, 0.95, hN) * smoothstep(0.6, 0.92, lit) * 0.7);
  col = mix(col, deep, smoothstep(0.6, 0.98, ndv) * (1.0 - hN) * uCoreK);
  // currents running through it (water coordinates)
  float cur = sin(vQ.x * 9.0 + vQ.y * 4.0 + sin(vQ.y * 3.0) * 2.0 + uTime * 0.8) * sin(vQ.y * 11.0 - vQ.x * 3.0 - uTime * 0.6);
  col = mix(col, hi, smoothstep(0.7, 0.98, cur) * 0.3 * smoothstep(0.15, 0.6, hN));
  col = mix(col, uSky, pow(1.0 - ndv, 3.0) * uSkyK);
  // a crisp white rim along its crest's edge, white highlights, white foam in the creases and where it meets the water
  float rim = smoothstep(0.7, 0.9, 1.0 - ndv) * smoothstep(0.35, 0.75, hN);
  col = mix(col, uWhite, clamp(rim * uRimK, 0.0, 1.0));
  float sp = pow(clamp(dot(reflect(-L, N), V), 0.0, 1.0), 28.0);
  col = mix(col, uWhite, clamp(sp * uSpecK, 0.0, 1.0));
  float rag = 0.5 + 0.5 * sin(vQ.x * 23.0 + sin(vQ.y * 17.0) * 2.0 + uTime * 1.5) * sin(vQ.y * 19.0 - uTime * 1.1);
  float foam = vS.y * smoothstep(0.25, 0.75, rag + 0.25);
  foam = max(foam, (1.0 - smoothstep(0.0, 0.03 + 0.025 * rag, vS.z)) * smoothstep(0.3, 0.7, rag));
  // froth on the crests: broken white patches (water coordinates)
  float fr2 = sin(vQ.x * 31.0 + sin(vQ.y * 13.0) * 3.0 - uTime * 0.7) * sin(vQ.y * 27.0 + sin(vQ.x * 11.0) * 2.0 + uTime * 0.9);
  foam = max(foam, smoothstep(0.45, 0.7, fr2) * smoothstep(0.72, 0.95, hN) * smoothstep(0.35, 0.75, lit) * uFrothK * (vS.w > 0.5 && vS.w < 1.5 ? 0.35 : 1.0));
  col = mix(col, uFoam, clamp(foam * uFoamK, 0.0, 1.0));
  // small clear bubbles on the water (they flow with it)
  vec2 bq = vQ * vec2(13.0, 13.0); vec2 bi = floor(bq), bf = fract(bq) - 0.5;
  float br = 0.2 + 0.14 * stH(bi + 3.1), bd = length(bf);
  float bub = step(0.93, stH(bi)) * smoothstep(br - 0.08, br - 0.02, bd) * (1.0 - smoothstep(br, br + 0.05, bd)) * smoothstep(0.2, 0.6, hN);
  col = mix(col, uWhite, clamp(bub * uBubK, 0.0, 1.0));
  // sparkle: small glints on its lit side that twinkle (water coordinates)
  vec2 kq = vQ * 26.0; vec2 ki = floor(kq); float kh = stH(ki + 17.0);
  float spark = step(0.965, kh) * (1.0 - smoothstep(0.05, 0.22, length(fract(kq) - 0.5))) * (0.5 + 0.5 * sin(uTime * 6.0 + kh * 50.0)) * smoothstep(0.45, 0.85, lit) * smoothstep(0.3, 0.7, hN);
  col = mix(col, uWhite, clamp(spark * uSparkK, 0.0, 1.0));
  gl_FragColor = vec4(mtUndisplay(clamp(col, 0.0, 1.0)), 1.0);
}
`;
// hash of a grid cell (private, deterministic)
const hash = (a, b, k) => { let h = (Math.imul(a | 0, 374761393) + Math.imul(b | 0, 668265263) + Math.imul(k, 1274126177)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
// S: the hero water's frame of her (tunnel_r7_hero_water.js buildHeroWater), undisplay: the walls' inverse display GLSL
export function buildStructWater({ scene, TR, L, W, mascot, updaters, time, S, undisplay }) {
  return structPrivately(0x57a1, () => {
    const K = STRUCT.water;
    const g = new THREE.PlaneGeometry(PATCH.x[1] - PATCH.x[0], PATCH.u[1] - PATCH.u[0], PATCH.nx, PATCH.nu);
    g.rotateX(-Math.PI / 2); g.translate((PATCH.x[0] + PATCH.x[1]) / 2, 0, (PATCH.u[0] + PATCH.u[1]) / 2);   // (x across, z = u along the path)
    const raw = (hex) => { const n = parseInt(hex.slice(1), 16); return new THREE.Vector3((n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255); };   // (sRGB as written: undisplayed in the shader)
    const C = K.col;
    const u = { uM: { value: Array.from({ length: NM }, () => new THREE.Vector4()) },
      uC: { value: new THREE.Vector3() }, uR: { value: new THREE.Vector3(1, 0, 0) }, uU: { value: new THREE.Vector3(0, 1, 0) }, uT: { value: new THREE.Vector3(0, 0, 1) },
      uTime: time, uBack: { value: 0 }, uBase: { value: 0 }, uPX: { value: 0 },
      uCol: { value: [...C.azure, ...C.lav, ...C.froth].map(raw) }, uSky: { value: raw(C.sky) }, uWhite: { value: raw(C.white) }, uFoam: { value: raw(C.foam) }, uTurq: { value: raw(C.turq) },
      uRimK: { value: K.rimK }, uSpecK: { value: K.specK }, uFoamK: { value: K.foamK }, uBubK: { value: K.bubbleK }, uCoreK: { value: K.coreK }, uSkyK: { value: K.skyK }, uFrothK: { value: K.frothK }, uSparkK: { value: K.sparkK }, uTurqK: { value: K.turqK } };
    const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: waterVertex(), fragmentShader: waterFragment(undisplay) });
    const mesh = new THREE.Mesh(g, mat); mesh.name = 'structWater'; mesh.frustumCulled = false; mesh.renderOrder = 5; mesh.visible = false;
    scene.add(mesh);
    let idle = 0; const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
    updaters.push((dt) => {
      mesh.visible = S.k > 0.01; if (!mesh.visible) return;
      dt = Math.min(dt || 0, 0.1);
      const Kw = STRUCT.water, z = mascot.z, D = S.sw2T || 0;
      if (D < 0.01) idle += dt * Kw.idle;   // (only while she waits)
      const back = (1 - Kw.k) * D + idle;   // how far the water's mounds have streamed back past her (m)
      // the patch: her track frame on the water under her (the water's level, not her bob)
      TR.frame(z, F); TR.map(0, 0, z, u.uC.value);
      u.uR.value.copy(F.R); u.uU.value.copy(F.U); u.uT.value.copy(F.T);
      u.uBase.value = S.base; u.uBack.value = back; u.uPX.value = S.lagX;
      u.uRimK.value = Kw.rimK; u.uSpecK.value = Kw.specK; u.uFoamK.value = Kw.foamK; u.uBubK.value = Kw.bubbleK; u.uCoreK.value = Kw.coreK; u.uSkyK.value = Kw.skyK; u.uFrothK.value = Kw.frothK; u.uSparkK.value = Kw.sparkK; u.uTurqK.value = Kw.turqK;
      [...Kw.col.azure, ...Kw.col.lav, ...Kw.col.froth].forEach((hh, c) => u.uCol.value[c].copy(raw(hh)));
      const mix0 = Kw.startMix[0] + (1 - Kw.startMix[0]) * sm(Kw.startMix[1], Kw.startMix[2], D);
      const lift = (1 - 0.35 * S.air) * (1 + 0.3 * S.land) * S.k;
      const ex = (x) => 1 - sm(Kw.envX[0], Kw.envX[1], Math.abs(x - S.lagX));
      const M = u.uM.value;
      const put = (i, rel, x, r, h, ty, seed, amp) => {
        const a = Math.max(0, amp) * lift;
        if (a < 0.02) { M[i].set(0, 0, 0, 0); return; }
        M[i].set(x, rel, Math.min(9.99, r * (0.6 + 0.4 * a)) + 10 * ty, h * a);   // (seed: from its water place, in the shader)
      };
      // the grid: cells fixed in the water (they stream back with `back`), jittered, sized and typed per cell
      const q0 = Math.floor((Kw.rel[0] + back) / Kw.du), j0 = Math.floor((S.lagX - Kw.xr) / Kw.dx);
      let i = 0;
      for (let a = 0; a < NU; a++) for (let b = 0; b < NX; b++, i++) {
        const iu = q0 + a, jx = j0 + b, h1 = hash(iu, jx, 1), h2 = hash(iu, jx, 2), h3 = hash(iu, jx, 3), h4 = hash(iu, jx, 4), h5 = hash(iu, jx, 5);
        const rel = (iu + 0.5 + 0.75 * (h1 - 0.5)) * Kw.du - back, x = (jx + 0.5 + 0.75 * (h2 - 0.5)) * Kw.dx;
        if (rel < Kw.rel[0] || rel > Kw.rel[1]) { M[i].set(0, 0, 0, 0); continue; }
        const r = Kw.r[0] + (Kw.r[1] - Kw.r[0]) * h3, ty = h4 < Kw.types[0] ? 0 : h4 < Kw.types[1] ? 1 : 2;
        put(i, rel, x, r, pl(Kw.height, rel) * (0.75 + 0.35 * h5), ty, h5, pl(Kw.env, rel) * ex(x) * mix0);
      }
      // the staged mounds (water-fixed as well: they stream back from where they stand at the start)
      for (let s = 0; s < NS; s++, i++) {
        const [r0, x, r, h, ty] = Kw.stage[s], rel = r0 - back;
        put(i, rel, x, r, h, ty, 0.13 + 0.17 * s, rel < -0.45 ? pl(Kw.env, rel) : 1);
      }
    });
    return { drawCalls: 1, mounds: NM, triangles: PATCH.nx * PATCH.nu * 2 };
  });
}

// ================================================================ 3. the washer drum's metal lining, through the whole run
// The tunnel's own upper wall (existing geometry: heroWalls, round 4's lining tube along the whole drum; its fragment,
// tunnel_r8_liquid.js wallFragment) drawn as the washer drum's brushed silver / lavender / purple metal: lavender over the
// top, periwinkle then deep violet down the sides, deeper purple nearest the camera, a silver sheen arc and a pink reflection
// (view dependent, as reflections are), raised ribs with silver and gold-peach edges and rivets every HOUSING.ribs m, and
// broad brushed streaks; the ribs, rivets and streaks are FIXED TO THE DRUM, so they stream past as she swims. It covers the
// upper half and the sides from the camera to HOUSING.far ahead, the same distance all round, so its edge is a curved arc
// round the tunnel's centre like the ACCEPTED Tap to Start rim; there it gives way to the blue tunnel through a soft lavender
// glow (no ring: nothing floats in front of the camera). At Tap to Start the accepted rim and housing show (it fades in only
// once the camera has moved toward the rim). Colours sampled from the ORIGINAL's housing (y .22-.36: #6961ca, #b191bc,
// #654d8b, #b494da, #f3daf3, the rim's #de9e8d), written through mtUndisplay.
export const HOUSING = {
  // (the user's clarification of 7 November ~16:00 UTC: the ACCEPTED Tap to Start's balance kept through the whole run: a
  // curved silver / lavender / purple lining round the upper tunnel, the vivid blue tunnel inside and beneath it; not plain
  // blue after a second, not a solid ceiling)
  arc: [-0.2, 0.12],         // sin(angle round the tube): the upper half and down the sides to just under the axis
  near: [-1.0, 0.0],         // m ahead of the camera where it begins (from the camera: it reaches the top of the frame)
  far: [4.6, 5.7],           // m ahead where it gives way to the blue tunnel, the same all round, so its edge is a curved
                             // arc round the tunnel's centre as the ACCEPTED rim (5.0-6.3 with the sides shortened read as
                             // a flat ceiling; 4.3-5.3 left only a strip under the HUD)
  sideK: 0.0,
  fadeIn: [-4.7, -2.9],      // the camera's place relative to the drum's mouth over which it fades in (the start is -5.41)
  col: { deep: '#56448c', mid: '#6c66cf', lav: '#b39ad8', silver: '#e9e2f8', pink: '#efd3ef', gold: '#e2a68e', glow: '#c9b8ff' },
  ribs: 3.2,                 // m between the drum's ribs (fixed to the drum: they stream past; one or two in view)
  streaks: 0.05, perf: 0.62, perfK: 0.0, rivets: 0.55, lip: 0.6, sheen: 0.55,
};
export function structHousingGLSL(radius) {
  const H = HOUSING, C = H.col;
  return /* glsl */ `  {   // ?s3=intunnel,structmatch: the washer drum's metal lining on the tunnel's upper wall (tunnel_s4_struct.js HOUSING)
    float stD = u - uHeroCam.z, stUp = sin(a);
    float stFar = ${f4(H.far[1])} - ${f4(H.sideK)} * (1.0 - stUp);
    float stE = stFar - stD;   // m to its far edge
    float stK = smoothstep(${f4(H.arc[0])}, ${f4(H.arc[1])}, stUp) * smoothstep(${f4(H.near[0])}, ${f4(H.near[1])}, stD)
      * smoothstep(0.0, ${f4(STRUCT_PARTS.match4 ? 0.12 : H.far[1] - H.far[0])}, stE) * smoothstep(${f4(H.fadeIn[0])}, ${f4(H.fadeIn[1])}, uHeroCam.z - uStart);
    if (stK > 0.001) {
      float stX = a * ${f4(radius)};   // m round the drum
      // brushed metal: lavender over the top, periwinkle then deep violet down the sides (its curvature), fine streaks round it
      float stS = sin(u * 5.0 + sin(stX * 2.0) * 1.2) * 0.6 + sin(u * 11.0 + stX * 0.7 + 1.7) * 0.4;   // (broad, soft: no fine record grooves)
      vec3 stC = mix(${hx(C.deep)}, ${hx(C.mid)}, smoothstep(-0.1, 0.45, stUp));
      stC = mix(stC, ${hx(C.lav)}, smoothstep(0.4, 0.9, stUp) * 0.75 * smoothstep(1.2, 3.2, stD));
      stC = mix(stC, ${hx(C.deep)}, (1.0 - smoothstep(0.5, 2.6, stD)) * 0.45);   // deeper purple nearest the camera (the frame's top), as the ACCEPTED housing
      stC *= 1.0 + ${f4(H.streaks)} * stS;
      // the centre's light on the curved metal: a broad silver sheen arc and a softer pink reflection inside it (they depend
      // on the view, as reflections do)
      stC = mix(stC, ${hx(C.silver)}, exp(-pow((stE - 1.45) / 0.5, 2.0)) * smoothstep(0.0, 0.6, stUp) * ${f4(H.sheen)} * (0.8 + 0.2 * stS));
      stC = mix(stC, ${hx(C.pink)}, exp(-pow((stE - 0.75) / 0.35, 2.0)) * smoothstep(0.2, 0.8, stUp) * 0.3);
      // the drum's ribs (fixed to the drum): a raised band with a silver upper edge, a gold-peach line and a shadow under it
      float stR = u / ${f4(H.ribs)}, stQ = fract(stR) - 0.5, stW = fwidth(stR) + 0.002, stHalf = 0.09 / ${f4(H.ribs)};
      float stIn = 1.0 - smoothstep(stHalf - stW, stHalf + stW, abs(stQ));
      stC = mix(stC, mix(${hx(C.mid)}, ${hx(C.lav)}, 0.6), stIn * 0.7);
      stC = mix(stC, ${hx(C.silver)}, (1.0 - smoothstep(0.0, stW * 1.5 + 0.004, abs(stQ + stHalf))) * 0.85);
      stC = mix(stC, ${hx(C.gold)}, (1.0 - smoothstep(0.0, stW * 1.5 + 0.004, abs(stQ - stHalf * 0.2))) * 0.7 * smoothstep(0.1, 0.6, stUp));
      stC *= 1.0 - 0.35 * (1.0 - smoothstep(0.0, stW * 3.0 + 0.008, abs(stQ - stHalf - 0.012)));
      // rivets along each rib (round the drum)
      vec2 stP = vec2(stX / 0.42, 0.0); float stRf = fract(stP.x) - 0.5;
      float stRv = length(vec2(stRf * 0.42, stQ * ${f4(H.ribs)})), stAA = fwidth(stP.x) * 0.42 + 0.004;
      float stDot = (1.0 - smoothstep(0.035, 0.035 + stAA, stRv)) * (1.0 - smoothstep(0.02, 0.12, stAA));
      stC = mix(stC, ${hx(C.silver)}, stDot * ${f4(H.rivets)});
      // its far edge: a soft lavender glow giving way to the blue tunnel (no ring: nothing floats in front of the camera)
      stC = mix(stC, ${hx(C.glow)}, exp(-pow((stE - 0.25) / 0.3, 2.0)) * ${f4(STRUCT_PARTS.swim3 ? 0.35 : H.lip)} * smoothstep(-0.1, 0.5, stUp));
${STRUCT_PARTS.swim3 ? `      {   // swim3: brushed metal's contrast (deeper violet shade, a crisp silver highlight) and the ORIGINAL's thin gold-peach lip
        float s3L = dot(stC, vec3(0.2126, 0.7152, 0.0722));
        stC = clamp(s3L + (stC - s3L) * 1.15, 0.0, 1.0) * (0.86 + 0.14 * smoothstep(0.2, 0.9, stUp));
        stC = mix(stC, ${hx(C.deep)}, exp(-pow((stE - 1.95) / 0.3, 2.0)) * smoothstep(0.2, 0.8, stUp) * 0.45);   // the shade under the highlight
        stC = mix(stC, ${hx(C.silver)}, exp(-pow((stE - 2.35) / 0.22, 2.0)) * smoothstep(0.3, 0.8, stUp) * 0.85);
        stC = mix(stC, ${hx(C.gold)}, exp(-pow((stE - 0.62) / 0.14, 2.0)) * smoothstep(0.05, 0.5, stUp) * 0.95);
        stC = mix(stC, vec3(1.0, 0.9, 0.82), exp(-pow((stE - 0.7) / 0.05, 2.0)) * smoothstep(0.2, 0.7, stUp) * 0.5);   // its bright edge
        stC = mix(stC, ${hx(C.deep)} * 0.8, exp(-pow((stE - 0.42) / 0.07, 2.0)) * 0.5);
      }
` : ''}
${STRUCT_PARTS.match4 ? `      {   // match4: the ORIGINAL's banded washer rim (sampled at x .86-.93, y .15-.39 of the ORIGINAL: from the tunnel outward
        // periwinkle, light lavender, violet, a dark mauve groove, the gold-peach band, the pink-lavender face), one band per
        // distance to the lining's edge, so perspective draws them as the ORIGINAL's curved arcs; the face beyond keeps the drum
        float e = stE, w = 0.06;
        vec3 rb = ${hx('#7d9ee8')};
        rb = mix(rb, mix(${hx('#c099df')}, ${hx('#d1b0ed')}, smoothstep(0.3, 0.6, e) * (1.0 - smoothstep(0.6, 0.8, e))), smoothstep(0.28 - w, 0.28 + w, e));
        rb = mix(rb, mix(${hx('#9775d0')}, ${hx('#7c60ae')}, smoothstep(0.85, 1.2, e)), smoothstep(0.8 - w, 0.8 + w, e));
        rb = mix(rb, ${hx('#825a8c')}, smoothstep(1.25 - w, 1.25 + w, e));
        float gq = clamp((e - 1.5) / 0.6, 0.0, 1.0);   // across the gold band: 0 its lower edge, 1 its upper
        vec3 gold = mix(${hx('#e5957c')}, ${hx('#eea78e')}, smoothstep(0.0, 0.7, gq));
        gold = mix(gold, ${hx('#ffe0c6')}, exp(-pow((gq - 0.62) / 0.12, 2.0)) * 0.75 * smoothstep(0.1, 0.6, stUp));   // the bevel's highlight
        gold *= 0.88 + 0.12 * smoothstep(0.0, 0.25, gq);
        rb = mix(rb, gold, smoothstep(1.5 - w, 1.5 + w, e));
        rb = mix(rb, mix(${hx('#e4b4c6')}, ${hx('#dab0d6')}, smoothstep(2.1, 2.5, e)), smoothstep(2.1 - w, 2.1 + w, e));
        stC = mix(rb, stC, smoothstep(2.45, 2.85, e));
      }
` : ''}      col = mix(col, mtUndisplay(clamp(stC, 0.0, 1.0)), stK);
    }
  }
`;
}

// ================================================================ 2c. swim3: the swell's crest lowered (before it and its followers are built)
export function structSwellShape(P) {
  const k = STRUCT.swim3.crest;
  P.line = P.line.map((h) => +(h * k).toFixed(4));
  P.mounds = P.mounds.map(([c, a, w]) => [c, +(a * k).toFixed(4), w]);
}

// ================================================================ 2b. the accepted swell, its blue richer (default)
export function structSwellGLSL() {
  const W = STRUCT_PARTS.swim3 ? { ...STRUCT.swell, ...STRUCT.swim3.grade } : STRUCT.swell, M = hueMatrix(W.hue);
  const col = (j) => `vec3(${f4(M[0][j])}, ${f4(M[1][j])}, ${f4(M[2][j])})`;
  return /* glsl */ `  {   // ?s3=intunnel,structmatch: the swell's blue toward the ORIGINAL's (tunnel_s4_struct.js STRUCT.swell)
    float swMx = max(col.r, max(col.g, col.b)), swMn = min(col.r, min(col.g, col.b));
    float swK = smoothstep(0.06, 0.22, (swMx - swMn) / max(swMx, 1e-4));   // blue water only (its white foam kept)
    vec3 swC = mat3(${col(0)}, ${col(1)}, ${col(2)}) * col;
    float swL = dot(swC, vec3(0.2126, 0.7152, 0.0722));
    swC = max(swL + (swC - swL) * ${f4(W.sat)}, 0.0);
    swC *= mix(${f4(W.deep)}, 1.0, smoothstep(${f4(W.deepL[0])}, ${f4(W.deepL[1])}, swL));   // deeper darker parts: depth
    col = mix(col, swC, swK);
  }
`;
}

// ================================================================ 4. the tunnel (opt-in ,tunnel2)
// at the end of matchWall's screen colour c (tunnel_r9_match.js; rw: the screen radius round the centre, in widths)
export function structTunnelGLSL() {
  const T = STRUCT_PARTS.match4 && !STRUCT_PARTS.tunnel ? { ...STRUCT.tunnel, ...STRUCT.match4.tunnel } : STRUCT.tunnel, C = T.core;
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
