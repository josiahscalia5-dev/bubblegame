// ?s3=round3 (test only): the third visual pass inside the washing machine, toward the approved Screen 4
// (01_APPROVED_TARGETS/02_APPROVED_SCREEN_4_FULL.jpg in the user's reference package). It runs on top of round2 and
// changes only what is drawn: lanes, controls, mission, collectibles' rules, brushes' knocks and the opening are as in round2.
//
//   - foam:     big white-and-blue foam heaps churning around and behind the pink mascot (the approved foreground: the
//               mascot sits in white water, its lower body hidden in the foam), and white spray (game.js).
//   - swirl:    a luminous layer of cyan and white water swirling round the drum's walls, with sparkles, inside the rings.
//   - bubbles:  soap bubbles streaming past on both sides of the view, some large and close, as in the approved picture.
//   - colours:  cyan, azure and white rings, a bluer drum, pink-white-royal-blue brushes and a purple gem (tunnel_s4.js and
//               game.js read ROUND3).
//
// Everything here is drawn only while the mascot is inside the drum, so Tap to Start (Screen 3) is exactly as in round2.
// It uses its own random numbers, so the game's own random sequence (coin bobbing, splashes) is the same as in round2.
import * as THREE from 'three';
import { NOISE } from './shaders.js';

export const ROUND3 = {
  // the approved rings: glowing cyan, blue, pink and lavender (round2: pink, lavender, cyan, orchid, gold)
  ringColours: [[0.16, 0.8, 1.0], [0.25, 0.45, 1.0], [1.0, 0.45, 0.85], [0.72, 0.56, 1.0], [0.75, 0.95, 1.0]],   // cyan, blue, pink, lavender, white-cyan
  ringGlow: 0.6,
  ringFar: { from: 5, to: 16, white: 0.6, bright: 0.9, keep: 1.0 },   // far rings whiter (the tunnel's bright heart); keep 1: not dimmed with distance                                         // the rings' light (round2: 1.0), so the deep blue between them shows
  wallDeep: [[0.01, 0.035, 0.26], [0.1, 0.26, 0.8]],    // the drum's walls deep royal blue (round2: violet; measured: too pale)
  // white water running round the drum in rings (the approved tunnel's concentric white-water bands)
  swirl: { radius: 1.93, rowStep: 0.3, around: 72, from: 4, to: 176, strength: 1.3, white: 1.0, blue: 0.3, bands: 1.7, twist: 0.35, far: 1.0 },
  water: { azure: [0.1, 0.4, 0.95], azureMix: 0.35, foam: 0.75 },   // the drum's water: azure, not turquoise, with white churn (tunnel_s4.js)
  foam: {
    count: 96, bright: 1.12, cells: 2.6,   // cells: bubbles across a heap
    // where the heaps rise, relative to the mascot (dx sideways, du along the path, metres; the camera is 3.6 m behind it),
    // how big they grow, how deep they sit in the water (a share of their size) and how they drift back and outward
    zones: [
      { w: 0.3, dx: [-0.8, 0.8], du: [-0.7, -0.15], r: [0.2, 0.36], sink: 0.4, drift: 0.4, out: 0.25 },     // the crest in front of its lower body
      { w: 0.34, side: [0.5, 1.0], du: [-0.5, 0.4], r: [0.28, 0.5], sink: 0.12, drift: 0.4, out: 0.25 },    // tall heaps rising beside it
      { w: 0.16, dx: [-0.95, 0.95], du: [-1.45, -0.8], r: [0.15, 0.3], sink: 0.5, drift: 0.5, out: 0.2 },   // the foreground, nearest the camera
      { w: 0.2, ring: [0.42, 0.56], r: [0.12, 0.22], sink: 0.2, drift: 0.3, out: 0.15 },                    // hugging its body
    ],
    life: [0.6, 1.25],
  },
  spray: { rate: 110, size: [0.07, 0.15] },
  // the tunnel's heart: a whirlpool of white and cyan water on the tube's axis, always this far ahead (metres), fading out
  // as the exit's own vortex comes into view
  whirl: { ahead: 14, radius: 1.85, strength: 1.0, exitFade: [7, 2] },                 // white spray droplets thrown up round the mascot (game.js)
  camera: { lookY: 1.1 },                                  // the drum camera's aim, higher than round2's 0.89 (game.js)
  bubbles: { count: 32, du: [-2.6, 13], x: [0.38, 1.55], h: [0.35, 2.5], r: [0.05, 0.28], flow: 1.6, film: 1.7 },
  sparkles: { rate: 34, du: [3, 15], r: [0.2, 1.7] },
  // brushes: pink and white tufts outside, royal blue inside (right), pink and white all over (left)
  brush: {
    pink: [1.0, 0.34, 0.72], white: [1.0, 0.92, 0.98], royal: [0.1, 0.2, 0.9], deep: [0.05, 0.1, 0.55], tufts: 26, core: 0.45,   // core: the blue face's radius (wheel units, rim 0.95)
    // pom-pom tufts in rings (wheel units): r radius, n tufts, s size, long stretch outward, z toward the rider, tilt forward
    pompom: {
      glow: 0.32, sheen: 0.35,
      rings: [{ r: 0.98, n: 34, s: 0.17, long: 1.5, z: 0.04, tilt: 0.35 }, { r: 0.8, n: 28, s: 0.16, long: 1.35, z: 0.12, tilt: 0.6 },
        { r: 0.6, n: 21, s: 0.15, long: 1.2, z: 0.2, tilt: 0.9 }, { r: 0.38, n: 13, s: 0.14, long: 1.1, z: 0.26, tilt: 1.3 }],
      right: [[[1.0, 0.94, 0.98], [1.0, 0.94, 0.98], [1.0, 0.5, 0.8]], [[1.0, 0.45, 0.78], [1.0, 0.85, 0.94]], [[0.12, 0.24, 0.92], [0.18, 0.32, 1.0]], [[0.08, 0.15, 0.75]]],
      left: [[[1.0, 0.36, 0.74], [1.0, 0.45, 0.8]], [[1.0, 0.92, 0.97], [1.0, 0.8, 0.92]], [[1.0, 0.38, 0.75]], [[1.0, 0.85, 0.95]]],
    },
  },
  gem: { color: [0.7, 0.45, 1.0], emissive: [0.62, 0.36, 1.0] },   // the approved gem is purple (the Meshy gem is pink)
};

// For trying settings without a rebuild in tests: window.__BW_S3_TUNE__ = { round3: { foam: { bright: 1.2 }, ... } } before load.
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.round3;
  const merge = (dst, src) => { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) merge(dst[k], src[k]); else dst[k] = src[k]; } };
  if (tune) merge(ROUND3, tune);
}

export function buildRound3({ scene, TR, L, W, mascot, updaters, time, soap }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H;
  const rnd = mulberry(0x3e3a);
  const report = {};
  // how far inside the drum the mascot is (0 outside, 1 a little way in): everything here fades in with it
  const inside = () => THREE.MathUtils.smoothstep(mascot.z, TS - 0.9, TS + 0.4);
  report.foam = foamHeaps({ scene, TR, L, W, mascot, updaters, time, rnd, inside });
  report.swirl = swirlLayer({ scene, TR, TS, TE, axisH, updaters, time, inside, mascot });
  if (soap) report.bubbles = streamBubbles({ scene, TR, W, L, mascot, updaters, time, rnd, soap, inside, axisH });
  report.whirl = whirlpool({ scene, TR, TE, axisH, mascot, updaters, time, inside });
  return report;
}

// ---------------------------------------------------------------- foam heaps around the mascot
function foamHeaps({ scene, TR, L, W, mascot, updaters, time, rnd, inside }) {
  const P = ROUND3.foam, n = P.count;
  const base = new THREE.IcosahedronGeometry(1, 4);
  const g = new THREE.InstancedBufferGeometry();
  g.setAttribute('position', base.attributes.position); g.setAttribute('normal', base.attributes.normal);
  const blobA = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4).setUsage(THREE.DynamicDrawUsage);
  const seedA = new THREE.InstancedBufferAttribute(new Float32Array(n), 1);
  g.setAttribute('aBlob', blobA); g.setAttribute('aSeed', seedA);
  g.instanceCount = n;
  const u = { uTime: time, uBright: { value: P.bright }, uCells: { value: P.cells }, uKey: { value: new THREE.Vector3(0.35, 0.85, -0.42).normalize() } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: FOAM_VERTEX, fragmentShader: FOAM_FRAGMENT });
  const mesh = new THREE.Mesh(g, mat); mesh.frustumCulled = false; mesh.name = 'r3Foam'; mesh.visible = false; mesh.renderOrder = 2;
  scene.add(mesh);
  const tot = P.zones.reduce((s, z) => s + z.w, 0);
  const R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const blobs = [];
  const spawn = (b, stagger) => {
    let x = rnd() * tot, z = P.zones[0];
    for (const zz of P.zones) { if (x < zz.w) { z = zz; break; } x -= zz.w; }
    b.z = z; b.r = R(z.r); b.life = R(P.life); b.age = stagger ? rnd() * b.life : 0;
    if (z.ring) { const a = THREE.MathUtils.degToRad(-200 + rnd() * 220), rr = R(z.ring); b.dx = Math.cos(a) * rr; b.du = Math.sin(a) * rr * 0.8; }
    else if (z.side) { b.dx = (rnd() < 0.5 ? -1 : 1) * R(z.side); b.du = R(z.du); }
    else { b.dx = R(z.dx); b.du = R(z.du); }
    b.out = Math.sign(b.dx || 1) * z.out * (0.5 + rnd());
  };
  for (let i = 0; i < n; i++) { const b = {}; spawn(b, true); blobs.push(b); seedA.array[i] = rnd(); }
  const v = new THREE.Vector3();
  let fx = null;   // the foam follows the mascot's sideways moves a moment late, as water would
  updaters.push((dt, t) => {
    const k = inside();
    mesh.visible = k > 0;
    if (!mesh.visible) { fx = null; return; }
    if (fx === null) fx = mascot.x;
    fx += (mascot.x - fx) * (1 - Math.exp(-dt / 0.12));
    const A = blobA.array;
    for (let i = 0; i < n; i++) {
      const b = blobs[i];
      b.age += dt;
      if (b.age >= b.life) spawn(b, false);
      b.du -= b.z.drift * dt; b.dx += b.out * dt;
      const q = b.age / b.life, s = Math.pow(Math.sin(Math.PI * Math.min(1, q * 1.2 + 0.08)), 0.55) * k;
      const x = fx + b.dx, uu = mascot.z + b.du, r = b.r * s;
      TR.map(x, W.surface(L, x, uu, t) - b.z.sink * b.r + r * 0.25, uu, v);
      A[i * 4] = v.x; A[i * 4 + 1] = v.y; A[i * 4 + 2] = v.z; A[i * 4 + 3] = Math.max(r, 1e-4);
    }
    blobA.needsUpdate = true;
  });
  return { heaps: n, trianglesEach: base.attributes.position.count / 3 };
}

const FOAM_VERTEX = /* glsl */ `
${NOISE}
attribute vec4 aBlob; attribute float aSeed;
uniform float uTime;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vSeed;
void main() {
  vec3 n = normal;
  float lump = bwNoise(n.xy * 2.4 + vec2(n.z * 1.9 + aSeed * 7.0, aSeed * 3.1) + uTime * 0.45);
  float lump2 = bwNoise(n.yz * 4.6 + vec2(aSeed * 5.3, n.x * 2.2) - uTime * 0.35);
  float r = aBlob.w * (0.84 + 0.26 * lump + 0.1 * lump2);
  vec3 p = aBlob.xyz + n * r * vec3(1.0, 0.8, 1.0);
  vN = n; vL = n; vW = p; vSeed = aSeed;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}
`;
// white foam made of little bubbles: bright cell walls, faintly blue hollows, blue shade underneath and at the edges,
// a few glints
const FOAM_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uBright, uCells; uniform vec3 uKey;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vSeed;
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  // a heap of soap bubbles: each cell a bubble, lavender-blue inside, bright white round its rim, a white highlight up
  // and to the left; blue shade underneath and at the edges (the approved foreground foam)
  vec2 sp = (vL.xy * 1.6 + vec2(vL.z * 1.2, -vL.z * 0.7)) * uCells + vSeed * 13.0 + vec2(0.0, uTime * 0.15);
  vec2 c = bwVoronoi(sp);
  float cell = c.x / max(c.y, 1e-3);                               // 0 at a bubble's middle, 1 at its rim
  float rim = smoothstep(0.62, 0.95, cell);
  float diff = clamp(dot(N, uKey), 0.0, 1.0), up = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
  float lit = clamp(0.25 + 0.6 * diff + 0.35 * up, 0.0, 1.0);
  vec3 inside = mix(vec3(0.5, 0.56, 1.0), vec3(0.8, 0.86, 1.0), lit) * (0.9 + 0.1 * smoothstep(0.0, 0.5, cell));
  vec3 col = mix(inside, vec3(1.08, 1.08, 1.1), smoothstep(0.55, 0.9, cell) * (0.65 + 0.35 * lit));
  float hl = 1.0 - smoothstep(0.0, 0.25, abs(cell - 0.45) + length(vec2(N.x + 0.4, N.y - 0.5)) * 0.25);
  col += vec3(1.0) * hl * 0.25 * lit;
  col = mix(col, col * vec3(0.62, 0.72, 1.0), (1.0 - up) * 0.55);
  col = mix(col, vec3(0.55, 0.78, 1.0), pow(1.0 - ndv, 2.5) * 0.45);
  gl_FragColor = vec4(col * uBright, 1.0);
}
`;

// ---------------------------------------------------------------- the swirling water light round the drum's walls
function swirlLayer({ scene, TR, TS, TE, axisH, updaters, time, inside, mascot }) {
  const P = ROUND3.swirl;
  const rows = Math.ceil((TE + 4 - (TS + 0.2)) / P.rowStep) + 1, cols = P.around + 1;
  const pos = new Float32Array(rows * cols * 3), ua = new Float32Array(rows * cols * 2), idx = [];
  const v = new THREE.Vector3();
  for (let j = 0; j < rows; j++) {
    const uu = TS + 0.2 + j * P.rowStep;
    for (let i = 0; i < cols; i++) {
      const a = THREE.MathUtils.degToRad(P.from + (P.to - P.from) * i / P.around);
      TR.map(Math.cos(a) * P.radius, axisH + Math.sin(a) * P.radius, uu, v);
      pos.set([v.x, v.y, v.z], (j * cols + i) * 3); ua.set([a, uu], (j * cols + i) * 2);
      if (i < P.around && j < rows - 1) { const q = j * cols + i; idx.push(q, q + 1, q + cols, q + 1, q + cols + 1, q + cols); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aAU', new THREE.BufferAttribute(ua, 2)); g.setIndex(idx);
  g.computeBoundingSphere();
  const u = { uTime: time, uStrength: { value: P.strength }, uEnds: { value: new THREE.Vector2(TS, TE + 4) }, uFade: { value: 0 }, uMix: { value: new THREE.Vector2(P.white, P.blue) }, uBands: { value: new THREE.Vector2(P.bands, P.twist) }, uFar: { value: P.far } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: SWIRL_VERTEX, fragmentShader: SWIRL_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'r3Swirl'; mesh.renderOrder = 3; mesh.visible = false; mesh.frustumCulled = false;
  scene.add(mesh);
  updaters.push(() => { const k = inside(); mesh.visible = k > 0; u.uFade.value = k; });
  return { triangles: idx.length / 3 };
}
const SWIRL_VERTEX = /* glsl */ `
attribute vec2 aAU;
varying vec2 vAU; varying float vDepth;
void main() {
  vAU = aAU;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`;
// spiral streaks of cyan and white water turning round the drum, with tiny sparkles; strongest on the walls a few metres
// ahead, fading near the camera (so it never covers the view) and at the drum's ends
const SWIRL_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uStrength, uFade, uFar; uniform vec2 uEnds, uMix, uBands;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  // rings of churning white water round the drum (bands across the tube, so they read as circles down its length),
  // wobbling and turning slowly, broken into foamy pieces; a faint blue glow along them
  float wob = bwFbm(vec2(a * 1.4, u * 0.6 - uTime * 0.4)) - 0.5;
  float ph = u * uBands.x + a * uBands.y + wob * 1.3 - uTime * 1.1;
  float band = 0.5 + 0.5 * sin(ph * 6.2832 * 0.5);
  float rough = bwFbm(vec2(a * 9.0, u * 3.0 + uTime * 0.7));
  float line = smoothstep(0.78, 0.93, band) * smoothstep(0.38, 0.62, rough);       // the white water band, foamy
  float flecks = smoothstep(0.72, 0.8, bwFbm(vec2(a * 18.0, u * 7.0 - uTime))) * smoothstep(0.5, 0.85, band);
  float glow = smoothstep(0.45, 0.95, band);
  float white = clamp(line * 0.85 + flecks * 0.6, 0.0, 1.0) * uMix.x;   // laid over the wall (alpha), so it reads white
  vec3 add = vec3(0.15, 0.5, 1.0) * glow * 0.6 * uMix.y;               // and a faint blue glow added (alpha 0)
  vec2 g = vec2(a * 30.0, u * 4.0 - uTime * 0.6), c = floor(g);
  float hs = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  float sparkle = step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 4.0 + hs * 40.0));
  float near = smoothstep(1.2, 3.5, vDepth) * (1.0 - (1.0 - uFar) * smoothstep(10.0, 26.0, vDepth));   // uFar 1: as white far down the tube
  float ends = smoothstep(uEnds.x, uEnds.x + 1.5, u) * (1.0 - smoothstep(uEnds.y - 2.0, uEnds.y, u));
  float k = near * ends * uFade;
  float aW = clamp(white * uStrength * k, 0.0, 0.92);
  gl_FragColor = vec4(vec3(0.92, 0.97, 1.0) * aW + (add + vec3(1.0) * sparkle) * uStrength * k, aW);   // premultiplied
}
`;

// ---------------------------------------------------------------- soap bubbles streaming past both sides of the view
function streamBubbles({ scene, TR, W, L, mascot, updaters, time, rnd, soap, inside, axisH }) {
  const P = ROUND3.bubbles, n = P.count;
  const sphere = new THREE.SphereGeometry(1, 26, 16);
  const g = new THREE.InstancedBufferGeometry();
  g.index = sphere.index; g.setAttribute('position', sphere.attributes.position); g.setAttribute('normal', sphere.attributes.normal);
  const instA = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4).setUsage(THREE.DynamicDrawUsage);
  const mot = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) mot.set([rnd() * 6.28, 0, 0.05, 0], i * 4);
  g.setAttribute('inst', instA); g.setAttribute('motion', new THREE.InstancedBufferAttribute(mot, 4));
  g.instanceCount = n;
  const u = { uTime: time, uMotion: { value: 1 }, uAvoid: { value: new THREE.Vector3(0, -99, 0) }, uCentreAlpha: { value: 0.04 }, uFilm: { value: P.film } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: soap.vertex, fragmentShader: soap.fragment, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const mesh = new THREE.Mesh(g, mat); mesh.frustumCulled = false; mesh.renderOrder = 7; mesh.name = 'r3Bubbles'; mesh.visible = false;
  scene.add(mesh);
  const R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const list = [];
  const spawn = (b, anywhere) => {
    b.u = mascot.z + (anywhere ? R(P.du) : P.du[1] - rnd() * 2);
    b.x = (rnd() < 0.5 ? -1 : 1) * R(P.x); b.h = R(P.h);
    if (b.h > axisH + 0.6) b.x *= 0.8;   // up near the roof the tube is narrower
    b.r = P.r[0] + Math.pow(rnd(), 1.8) * (P.r[1] - P.r[0]);
  };
  for (let i = 0; i < n; i++) { const b = {}; spawn(b, true); list.push(b); }
  const v = new THREE.Vector3();
  let was = false;
  updaters.push((dt) => {
    const k = inside();
    mesh.visible = k > 0;
    if (!mesh.visible) { was = false; return; }
    if (!was) { for (const b of list) spawn(b, true); was = true; }   // a fresh set each time the mascot enters the drum
    u.uAvoid.value.copy(mascot.root.position);
    const A = instA.array;
    for (let i = 0; i < n; i++) {
      const b = list[i];
      b.u += P.flow * dt;   // carried slowly along by the drum's current
      if (b.u < mascot.z + P.du[0]) spawn(b, false);
      TR.map(b.x, b.h, b.u, v);
      A[i * 4] = v.x; A[i * 4 + 1] = v.y; A[i * 4 + 2] = v.z; A[i * 4 + 3] = b.r * k;
    }
    instA.needsUpdate = true;
  });
  return { count: n };
}

// ---------------------------------------------------------------- the whirlpool at the tunnel's heart
function whirlpool({ scene, TR, TE, axisH, mascot, updaters, time, inside }) {
  const P = ROUND3.whirl;
  const u = { uTime: time, uFade: { value: 0 }, uStrength: { value: P.strength } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: WHIRL_VERTEX, fragmentShader: WHIRL_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(new THREE.CircleGeometry(1, 96), mat);
  mesh.name = 'r3Whirlpool'; mesh.renderOrder = 1; mesh.visible = false; mesh.frustumCulled = false;
  scene.add(mesh);
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() }, m4 = new THREE.Matrix4();
  updaters.push(() => {
    const at = mascot.z + P.ahead;
    const k = inside() * (1 - THREE.MathUtils.smoothstep(at, TE - P.exitFade[0], TE - P.exitFade[1]));
    mesh.visible = k > 0.001; u.uFade.value = k;
    if (!mesh.visible) return;
    TR.frame(Math.min(at, TE - 0.5), F);
    mesh.position.copy(F.P).addScaledVector(F.U, axisH);
    m4.makeBasis(F.R, F.U, F.T.clone().negate());   // its face looks back down the tube, toward the rider
    mesh.quaternion.setFromRotationMatrix(m4);
    mesh.scale.setScalar(P.radius);
  });
  return { ahead: P.ahead, radius: P.radius };
}
const WHIRL_VERTEX = /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
// spiral arms of white water turning in to a bright white-cyan heart, rings rippling outward, a pastel rainbow band and
// twinkling sparkles (premultiplied alpha: the arms and the heart cover what is behind, the glow adds to it)
const WHIRL_FRAGMENT = /* glsl */ `
uniform float uTime, uFade, uStrength; varying vec2 vUv;
float h21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p);
  if (r > 1.0) discard;
  float a = atan(p.y, p.x), lr = log(max(r, 0.02));
  float arms = smoothstep(0.45, 0.95, 0.5 + 0.5 * sin(a * 4.0 + lr * 6.0 - uTime * 2.4));
  float arms2 = smoothstep(0.62, 1.0, 0.5 + 0.5 * sin(a * 7.0 + lr * 10.0 - uTime * 3.3 + 1.7));
  float ripples = smoothstep(0.74, 0.97, 0.5 + 0.5 * sin(lr * 13.0 - uTime * 4.0));
  float heart = 1.0 - smoothstep(0.0, 0.32, r);
  float edge = 1.0 - smoothstep(0.7, 1.0, r);
  vec3 white = vec3(0.94, 0.98, 1.0), cyan = vec3(0.3, 0.82, 1.0);
  float waterW = clamp(arms * 0.75 + arms2 * 0.4 + ripples * 0.35, 0.0, 1.0) * (0.35 + 0.65 * (1.0 - r));
  float band = exp(-pow((r - 0.6) / 0.07, 2.0));
  vec3 rainbow = 0.55 + 0.45 * cos(6.2832 * (a / 6.2832 + vec3(0.0, 0.33, 0.67)) + uTime * 0.6);
  vec2 g = vec2(a * 12.0, lr * 8.0 - uTime), c = floor(g);
  float sparkle = step(0.9, h21(c)) * (1.0 - smoothstep(0.0, 0.25, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 6.0 + h21(c + 4.0) * 30.0));
  float cover = clamp(waterW * 0.85 + heart, 0.0, 1.0) * edge;
  vec3 col = white * cover + cyan * (1.0 - r) * 0.45 * edge + rainbow * band * 0.3 + white * sparkle * 1.2 * edge;
  float k = uFade * uStrength;
  gl_FragColor = vec4(col * k, cover * 0.9 * k);
}
`;

export function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
