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
  // the approved rings are cyan, azure and white with a pastel pink band (round2: pink, lavender, cyan, orchid, gold)
  ringColours: [[0.18, 0.82, 1.0], [0.42, 0.6, 1.0], [0.8, 0.95, 1.0], [0.22, 0.7, 1.0], [1.0, 0.55, 0.88]],
  wallDeep: [[0.04, 0.12, 0.55], [0.32, 0.62, 1.0]],   // the drum's walls deep royal blue to azure (round2: violet)
  swirl: { radius: 1.93, rowStep: 0.4, around: 72, from: 6, to: 174, strength: 0.42 },
  foam: {
    count: 96, bright: 1.12,
    // where the heaps rise, relative to the mascot (dx sideways, du along the path, metres; the camera is 3.6 m behind it),
    // how big they grow, how deep they sit in the water (a share of their size) and how they drift back and outward
    zones: [
      { w: 0.34, dx: [-0.8, 0.8], du: [-0.75, -0.15], r: [0.18, 0.34], sink: 0.45, drift: 0.45, out: 0.25 },   // the crest in front of its lower body
      { w: 0.26, side: [0.5, 1.15], du: [-1.3, 0.45], r: [0.16, 0.32], sink: 0.4, drift: 0.7, out: 0.3 },      // heaps beside it
      { w: 0.2, dx: [-0.95, 0.95], du: [-1.45, -0.8], r: [0.15, 0.3], sink: 0.5, drift: 0.5, out: 0.2 },       // the foreground, nearest the camera
      { w: 0.2, ring: [0.42, 0.56], r: [0.1, 0.2], sink: 0.2, drift: 0.3, out: 0.15 },                        // hugging its body
    ],
    life: [0.6, 1.25],
  },
  spray: { rate: 70, size: [0.05, 0.11] },                 // white spray droplets thrown up round the mascot (game.js)
  camera: { lookY: 1.7 },                                  // the drum camera's aim, higher than round2's 0.89 (game.js)
  bubbles: { count: 20, du: [-2.6, 13], x: [0.42, 1.55], h: [0.35, 2.5], r: [0.045, 0.24], flow: 1.6 },
  sparkles: { rate: 34, du: [3, 15], r: [0.2, 1.7] },
  // brushes: pink and white tufts outside, royal blue inside (right), pink and white all over (left)
  brush: { pink: [1.0, 0.34, 0.72], white: [1.0, 0.92, 0.98], royal: [0.1, 0.2, 0.9], deep: [0.05, 0.1, 0.55], tufts: 26 },
  gem: { color: [0.7, 0.45, 1.0], emissive: [0.62, 0.36, 1.0] },   // the approved gem is purple (the Meshy gem is pink)
};

export function buildRound3({ scene, TR, L, W, mascot, updaters, time, soap }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H;
  const rnd = mulberry(0x3e3a);
  const report = {};
  // how far inside the drum the mascot is (0 outside, 1 a little way in): everything here fades in with it
  const inside = () => THREE.MathUtils.smoothstep(mascot.z, TS - 0.9, TS + 0.4);
  report.foam = foamHeaps({ scene, TR, L, W, mascot, updaters, time, rnd, inside });
  report.swirl = swirlLayer({ scene, TR, TS, TE, axisH, updaters, time, inside, mascot });
  if (soap) report.bubbles = streamBubbles({ scene, TR, W, L, mascot, updaters, time, rnd, soap, inside, axisH });
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
  const u = { uTime: time, uBright: { value: P.bright }, uKey: { value: new THREE.Vector3(0.35, 0.85, -0.42).normalize() } };
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
uniform float uTime, uBright; uniform vec3 uKey;
varying vec3 vN; varying vec3 vW; varying vec3 vL; varying float vSeed;
void main() {
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0);
  vec2 sp = (vL.xy * 3.2 + vec2(vL.z * 2.3, -vL.z * 1.4)) * 2.0 + vSeed * 13.0 + vec2(0.0, uTime * 0.25);
  vec2 c = bwVoronoi(sp);
  float wall = 1.0 - smoothstep(0.03, 0.13, c.y - c.x);
  float hollow = smoothstep(0.12, 0.5, c.x);
  float diff = clamp(dot(N, uKey), 0.0, 1.0), up = clamp(N.y * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(vec3(0.5, 0.68, 1.0), vec3(1.0, 1.0, 1.03), clamp(0.3 + 0.55 * diff + 0.3 * up, 0.0, 1.0));
  col = mix(col, col * vec3(0.8, 0.88, 1.0), hollow * 0.55);
  col += vec3(0.25) * wall;
  float h = bwHash(floor(sp) + 3.7);
  col += vec3(1.0) * step(0.82, h) * (1.0 - smoothstep(0.0, 0.16, length(fract(sp) - vec2(0.35, 0.65)))) * 1.1;
  col = mix(col, vec3(0.55, 0.82, 1.0), pow(1.0 - ndv, 2.5) * 0.5);
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
  const u = { uTime: time, uStrength: { value: P.strength }, uEnds: { value: new THREE.Vector2(TS, TE + 4) }, uFade: { value: 0 } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: SWIRL_VERTEX, fragmentShader: SWIRL_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
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
uniform float uTime, uStrength, uFade; uniform vec2 uEnds;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float sw = a * 2.0 - u * 0.75 + uTime * 1.6;
  float s1 = bwFbm(vec2(sw * 1.3, u * 0.35 - uTime * 0.5));
  float s2 = bwFbm(vec2(sw * 2.6 + 5.0, u * 0.9 + uTime * 0.3));
  float streak = smoothstep(0.52, 0.8, s1) * 0.8 + smoothstep(0.6, 0.85, s2) * 0.5;
  float foamy = smoothstep(0.7, 0.9, s2) * smoothstep(0.55, 0.75, s1);
  vec3 col = mix(vec3(0.1, 0.55, 1.0), vec3(0.55, 0.9, 1.0), smoothstep(0.55, 0.85, s1)) * streak + vec3(0.85, 0.97, 1.0) * foamy * 0.8;
  vec2 g = vec2(a * 30.0, u * 4.0 - uTime * 0.6), c = floor(g);
  float hs = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  col += vec3(1.0) * step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.5 + 0.5 * sin(uTime * 4.0 + hs * 40.0));
  float near = smoothstep(1.2, 3.5, vDepth) * (1.0 - 0.5 * smoothstep(10.0, 26.0, vDepth));
  float ends = smoothstep(uEnds.x, uEnds.x + 1.5, u) * (1.0 - smoothstep(uEnds.y - 2.0, uEnds.y, u));
  gl_FragColor = vec4(col * uStrength * near * ends * uFade, 1.0);
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
  const u = { uTime: time, uMotion: { value: 1 }, uAvoid: { value: new THREE.Vector3(0, -99, 0) }, uCentreAlpha: { value: 0.03 }, uFilm: { value: 1.35 } };
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

export function mulberry(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
