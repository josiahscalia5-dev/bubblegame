// ?s3=round4 (test only): a reconstruction of the approved Screen 4's scenery in the real 3D game, on top of round3.
// The approved picture is the specification; nothing of it is shown in the game. Everything here is geometry, animated
// shaders and particles, drawn only inside the drum (Tap to Start is round3's).
//
//   - tunnel:  a new lining along the ride's path: deep electric blue, with glowing cyan rings and gold trim rings built as
//              real 3D tori (they have thickness and parallax), white water swirling over the walls, sparkles. The Meshy
//              drum's pastel walls and round2's flat light rings are hidden behind it. The path starts with a longer
//              straight (track.js, opts.straight), so the view looks straight down the rings as in the approved picture.
//   - water:   flowing turquoise with rolling crests and streaks of white froth, instead of the cell pattern that read as
//              a tiled floor (tunnel_s4.js, waterR4); a crown of curving water sheets splashing round the pink character.
//   - brushes: fluffy shell-fur pom-poms (fluffy_brush.js; tunnel_s4.js r4PomPom was the first pass) instead of the wheel look.
//   - foam:    real 3D soap bubbles riding on the foam heaps, heavier spray (second pass, 4 November).
//   - colour:  a richer, higher-contrast grade inside the drum (less pastel).
// Lanes, controls, brushes' knocks, collectibles and the mission are round2/round3's.
import * as THREE from 'three';
import { NOISE } from './shaders.js';

export const ROUND4 = {
  straight: 4,   // metres of extra straight drum before the climb and turns (track.js)
  emerge: [7.5, 11, 1.6],   // brushes slide out of the wall between 11 and 7.5 m ahead (from 1.6 m inside it)
  lining: { radius: 2.0, from: -56, to: 236, rowStep: 0.25, around: 96,
    deep: [0.005, 0.012, 0.14], mid: [0.015, 0.05, 0.42], cyan: [0.05, 0.48, 0.92], spacing: 1.15, streaks: 0.2, line: 0.7, far: 0.25 },
  rings: { radius: 1.93, tube: 0.045, glow: [0.12, 0.55, 1.05], every: 1.15 },   // deeper glow (was 0.2, 0.75, 1.25): more deep blue shows
  gold: { radius: 1.97, tube: 0.085, every: 3, color: [1.0, 0.72, 0.28] },
  grade: { contrast: 1.2, saturation: 1.15, exposure: 0.84, pivot: 0.5 },
  // the splash crown: curving sheets of water rising round the mascot, curling outward and falling back
  // (4 November, second pass: the sheets break into white fingers and droplets at the top, so they read as splash, not a veil)
  crown: { petals: 32, radius: [0.44, 0.72], height: [0.55, 1.05], width: [0.3, 0.5], life: [0.5, 0.95], flare: 0.55, curl: 0.35, alpha: 1.6,
    fingers: 7, veil: 0.1 },
  // water: turquoise in the middle (hue about 193°; it was azure, 204°), deep blue at the sides, white froth on the crests
  water: { middle: [0.0, 0.66, 0.84], side: [0.015, 0.15, 0.55], mix: 0.75, crest: 0.3, froth: 0.9, churn: 0.95 },
  // foam round the mascot (tunnel_r3.js foamHeaps with FOAM_FRAGMENT_R4): more, smaller heaps of white-rimmed bubbles over
  // saturated blue, instead of round3's smooth lavender mounds (measured as pale milky blue, not white)
  foam: { count: 150, size: 0.72, cells: 4.0, bright: 1.05, white: 1.0, deep: [0.01, 0.16, 0.78], aqua: [0.05, 0.6, 1.0] },
  // soap bubbles streaming past (tunnel_r3.js streamBubbles): more, and a few bigger near the camera, as in the approved picture
  bubbles: { count: 44, r: [0.05, 0.32] },
  // the approved foreground foam is made of distinct soap bubbles: real 3D bubbles (instanced spheres) riding on every foam
  // heap, white-rimmed with blue-lavender centres and a glint; per: bubbles per heap, at: how far out on the heap (share of
  // its radius), size: bubble radius (share of the heap's)
  foamBubbles: { per: 7, at: [0.8, 1.05], size: [0.22, 0.46], inner: [0.42, 0.55, 1.0], deep: [0.06, 0.2, 0.86], bright: 1.08 },
  // white spray thrown up round the mascot (game.js stepRound3): round3's 110 a second, bigger here
  spray: { rate: 400, size: [0.1, 0.26] },
  // pom-pom brushes (wheel units, rim 0.95): clumps over a flattened dome facing the rider (cap: its angle from the middle,
  // depth: how far it bulges), a rim of bigger clumps; colour bands from the middle outward ([up to share of cap, colours])
  // fibres: fine strands along each clump; fuzz: how far in from a clump's outline the strands break it up (a hairy edge,
  // not a smooth petal); whiteLift: extra self-light on the white clumps so they stay white in the drum's dim light
  pompom: { count: 320, rim: 48, radius: 0.92, depth: 0.5, cap: 80, size: 0.115, long: 1.25, glow: 0.28, sheen: 0.32, strands: 0.35,
    fibres: 0.45, fuzz: 0.5, whiteLift: 0.35,
    // bands from the middle out: the right-hand brushes royal blue in the middle, a white ring, then a pink and white fringe
    right: [[0.42, [[0.1, 0.2, 0.86], [0.13, 0.25, 0.95]]], [0.58, [[1.0, 0.95, 0.98]]], [0.78, [[1.0, 0.5, 0.8], [1.0, 0.42, 0.76]]], [9, [[1.0, 0.95, 0.98], [1.0, 0.86, 0.94]]]],
    left: [[0.4, [[1.0, 0.36, 0.74]]], [0.62, [[1.0, 0.95, 0.98], [1.0, 0.86, 0.94]]], [9, [[1.0, 0.4, 0.76], [1.0, 0.32, 0.7]]]] },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.round4;
  const merge = (dst, src) => { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) merge(dst[k], src[k]); else dst[k] = src[k]; } };
  if (tune) merge(ROUND4, tune);
}

export function buildRound4({ scene, TR, L, W, updaters, time, env, mascot, hide = [] }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H;
  for (const o of hide) if (o) o.visible = false;   // the Meshy drum's walls and round2's flat rings, behind the new lining
  const report = { hidden: hide.filter(Boolean).length };
  report.lining = lining({ scene, TR, TS, TE, axisH, time });
  report.rings = rings3d({ scene, TR, TS, TE, axisH, env, time });
  if (mascot) report.crown = splashCrown({ scene, TR, L, W, mascot, updaters, time, TS });
  return report;
}

// ---------------------------------------------------------------- the lining: a tube along the path, open under the water
function lining({ scene, TR, TS, TE, axisH, time }) {
  const P = ROUND4.lining;
  const u0 = TS - 0.4, u1 = TE + 4, rows = Math.ceil((u1 - u0) / P.rowStep) + 1, cols = P.around + 1;
  const pos = new Float32Array(rows * cols * 3), au = new Float32Array(rows * cols * 2), idx = [];
  const v = new THREE.Vector3();
  for (let j = 0; j < rows; j++) {
    const u = u0 + j * P.rowStep;
    for (let i = 0; i < cols; i++) {
      const a = THREE.MathUtils.degToRad(P.from + (P.to - P.from) * i / P.around);
      TR.map(Math.cos(a) * P.radius, axisH + Math.sin(a) * P.radius, u, v);
      pos.set([v.x, v.y, v.z], (j * cols + i) * 3); au.set([a, u], (j * cols + i) * 2);
      if (i < P.around && j < rows - 1) { const q = j * cols + i; idx.push(q, q + cols, q + 1, q + 1, q + cols, q + cols + 1); }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('aAU', new THREE.BufferAttribute(au, 2)); g.setIndex(idx);
  g.computeBoundingSphere();
  const u = { uTime: time, uDeep: { value: new THREE.Color(...P.deep) }, uMid: { value: new THREE.Color(...P.mid) }, uCyan: { value: new THREE.Color(...P.cyan) },
    uSpacing: { value: P.spacing }, uStreaks: { value: P.streaks }, uStart: { value: TS }, uLine: { value: P.line }, uFar: { value: P.far } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: LINING_VERTEX, fragmentShader: LINING_FRAGMENT, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'r4Lining'; mesh.frustumCulled = false;
  scene.add(mesh);
  return { triangles: idx.length / 3, rows, cols };
}
const LINING_VERTEX = /* glsl */ `
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`;
// deep electric blue, brighter toward each ring; a bright cyan-white line at every ring with a soft glow; faint panel
// seams; white water swirling over the walls; twinkling sparkles; the far tube a little brighter (the luminous depth)
const LINING_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uSpacing, uStreaks, uStart, uLine, uFar; uniform vec3 uDeep, uMid, uCyan;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float k = fract((u - uStart) / uSpacing), d = min(k, 1.0 - k) * uSpacing;
  float line = exp(-pow(d / 0.045, 2.0)), glow = exp(-pow(d / 0.32, 2.0));
  float side = abs(cos(a));
  vec3 col = mix(uDeep, uMid, clamp(0.25 + 0.55 * glow + 0.15 * side, 0.0, 1.0));
  col += uCyan * glow * 0.55 + vec3(0.7, 0.95, 1.0) * line * uLine;
  float seam = exp(-pow((fract(a * 12.0 / 6.2832) - 0.5) / 0.015, 2.0)) * (1.0 - glow);
  col = mix(col, uCyan * 0.5, seam * 0.25);
  float sw = bwFbm(vec2(a * 2.2 + u * 0.45 - uTime * 0.9, u * 0.6 - uTime * 0.35));
  float sw2 = bwFbm(vec2(a * 5.0 - u * 0.3 + uTime * 0.6, u * 1.4));
  col += vec3(0.55, 0.85, 1.0) * (smoothstep(0.6, 0.78, sw) * 0.5 + smoothstep(0.68, 0.82, sw2) * 0.25) * uStreaks;
  vec2 g = vec2(a * 26.0, u * 3.5 - uTime * 0.5), c = floor(g);
  float hs = fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453);
  col += vec3(1.0) * step(0.94, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.6 + 0.4 * sin(uTime * 5.0 + hs * 40.0)) * 0.9;
  col *= 1.0 + uFar * smoothstep(9.0, 24.0, vDepth);
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- 3D rings: glowing cyan tubes and gold trims
function rings3d({ scene, TR, TS, TE, axisH, env, time }) {
  const R = ROUND4.rings, G = ROUND4.gold, P = ROUND4.lining;
  const us = []; for (let u = TS + 0.4; u < TE + 3.5; u += R.every) us.push(u);
  const m4 = new THREE.Matrix4(), place = (u, out) => TR.mapMatrix(new THREE.Matrix4().makeTranslation(0, axisH, u), out);
  // glowing tubes: brightest on the side facing the rider, softly pulsing in a wave down the tunnel
  const glowGeo = new THREE.TorusGeometry(R.radius, R.tube, 8, 128);
  const gu = { uTime: time, uGlow: { value: new THREE.Color(...R.glow) } };
  const glowMat = new THREE.ShaderMaterial({ uniforms: gu, vertexShader: TUBE_VERTEX, fragmentShader: TUBE_FRAGMENT });
  const glowRings = new THREE.InstancedMesh(glowGeo, glowMat, us.length);
  const aU = new Float32Array(us.length);
  us.forEach((u, i) => { place(u, m4); glowRings.setMatrixAt(i, m4); aU[i] = u; });
  glowGeo.setAttribute('aU', new THREE.InstancedBufferAttribute(aU, 1));
  glowRings.name = 'r4GlowRings'; glowRings.frustumCulled = false;
  scene.add(glowRings);
  // gold trims, every few rings, just in front of the wall
  const goldUs = us.filter((_, i) => i % G.every === 1).map((u) => u + 0.3);
  const goldGeo = new THREE.TorusGeometry(G.radius, G.tube, 10, 128);
  const goldMat = new THREE.MeshStandardMaterial({ color: new THREE.Color(...G.color), metalness: 1, roughness: 0.22, envMap: env || null, envMapIntensity: 1.4,
    emissive: new THREE.Color(0.55, 0.32, 0.05), emissiveIntensity: 0.6 });
  const gold = new THREE.InstancedMesh(goldGeo, goldMat, goldUs.length);
  goldUs.forEach((u, i) => { place(u, m4); gold.setMatrixAt(i, m4); });
  gold.name = 'r4GoldRings'; gold.frustumCulled = false;
  scene.add(gold);
  return { glow: us.length, gold: goldUs.length, trianglesEach: [glowGeo.index.count / 3, goldGeo.index.count / 3] };
}
const TUBE_VERTEX = /* glsl */ `
attribute float aU; uniform float uTime; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  vWave = 0.75 + 0.25 * sin(aU * 0.9 - uTime * 3.0);
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const TUBE_FRAGMENT = /* glsl */ `
uniform vec3 uGlow; varying float vWave; varying vec3 vN; varying vec3 vW;
void main() {
  float face = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  vec3 col = mix(uGlow * 0.6, uGlow * 1.5 + vec3(0.2), pow(face, 3.0) * 0.6) * vWave;
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- the splash crown round the mascot
function splashCrown({ scene, TR, L, W, mascot, updaters, time, TS }) {
  const P = ROUND4.crown, n = P.petals, rnd = mulberry4(0x4c4);
  const base = new THREE.PlaneGeometry(1, 1, 4, 10); base.translate(0, 0.5, 0);   // x across -0.5..0.5, y up 0..1
  const g = new THREE.InstancedBufferGeometry();
  g.index = base.index; g.setAttribute('position', base.attributes.position); g.setAttribute('uv', base.attributes.uv);
  const petal = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4).setUsage(THREE.DynamicDrawUsage);   // angle, radius, height, width
  const state = new THREE.InstancedBufferAttribute(new Float32Array(n * 2), 2).setUsage(THREE.DynamicDrawUsage);   // age 0..1, seed
  g.setAttribute('aPetal', petal); g.setAttribute('aState', state); g.instanceCount = n;
  const u = { uTime: time, uCentre: { value: new THREE.Vector3() }, uR: { value: new THREE.Vector3(1, 0, 0) }, uU: { value: new THREE.Vector3(0, 1, 0) },
    uT: { value: new THREE.Vector3(0, 0, 1) }, uFlare: { value: P.flare }, uCurl: { value: P.curl }, uFade: { value: 0 }, uAlpha: { value: P.alpha },
    uFingers: { value: P.fingers }, uVeil: { value: P.veil } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: CROWN_VERTEX, fragmentShader: CROWN_FRAGMENT, transparent: true, depthWrite: false,
    side: THREE.DoubleSide, blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'r4SplashCrown'; mesh.frustumCulled = false; mesh.renderOrder = 6; mesh.visible = false;
  scene.add(mesh);
  const R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const life = new Float32Array(n), age = new Float32Array(n);
  const spawn = (i, stagger) => {
    petal.array.set([rnd() * Math.PI * 2, R(P.radius), R(P.height), R(P.width)], i * 4);
    life[i] = R(P.life); age[i] = stagger ? rnd() * life[i] : 0; state.array[i * 2 + 1] = rnd();
  };
  for (let i = 0; i < n; i++) spawn(i, true);
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  updaters.push((dt, t) => {
    const k = THREE.MathUtils.smoothstep(mascot.z, TS - 0.9, TS + 0.4) * (mascot.air ? 0.25 : 1);
    mesh.visible = k > 0.01; u.uFade.value = k;
    if (!mesh.visible) return;
    TR.frame(mascot.z, F);
    const surf = W.surface(L, mascot.x, mascot.z, t);
    u.uCentre.value.copy(F.P).addScaledVector(F.R, mascot.x).addScaledVector(F.U, surf);
    u.uR.value.copy(F.R); u.uU.value.copy(F.U); u.uT.value.copy(F.T);
    for (let i = 0; i < n; i++) {
      age[i] += dt * (0.8 + 0.4 * Math.min(1.5, mascot.speed / W.CRUISE));
      if (age[i] >= life[i]) spawn(i, false);
      state.array[i * 2] = age[i] / life[i];
    }
    state.needsUpdate = true; petal.needsUpdate = true;
  });
  return { petals: n };
}
function mulberry4(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const CROWN_VERTEX = /* glsl */ `
attribute vec4 aPetal; attribute vec2 aState;
uniform vec3 uCentre, uR, uU, uT; uniform float uFlare, uCurl;
varying vec2 vUv; varying float vAge; varying float vSeed;
void main() {
  float ang = aPetal.x, rad = aPetal.y, hgt = aPetal.z, wid = aPetal.w, k = aState.x;
  float up = position.y, across = position.x;
  float rise = pow(sin(3.14159 * min(1.0, k * 1.15)), 0.7);             // shoots up, then falls back
  vec2 d = vec2(cos(ang), sin(ang)), tg = vec2(-d.y, d.x);
  float reach = rad + up * up * uFlare * (0.6 + k) + pow(up, 3.0) * uCurl; // flares and curls outward toward its lip
  float spread = 1.0 + up * 0.7;
  vec2 p = d * (reach - pow(across * wid * spread, 2.0) * 1.1) + tg * across * wid * spread;   // wraps round the circle
  float h = up * hgt * rise - 0.04 - pow(up, 4.0) * uCurl * 0.5 * k;      // the lip droops as it falls
  h *= mix(1.0, 0.32, smoothstep(0.15, 0.75, -d.y));   // low froth on the camera's side: tall sheets there veiled the pink mascot in stripes
  vec3 w = uCentre + uR * p.x + uT * (p.y * 0.85) + uU * h;
  vUv = vec2(across + 0.5, up); vAge = k; vSeed = aState.y;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`;
const CROWN_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uFade, uAlpha, uFingers, uVeil; varying vec2 vUv; varying float vAge; varying float vSeed;
void main() {
  float x = vUv.x, y = vUv.y;
  float ragged = bwNoise(vec2(x * 9.0 + vSeed * 17.0, uTime * 2.0 + vSeed * 5.0));
  float top = 1.0 - smoothstep(0.72 + 0.2 * ragged, 1.0, y);              // a broken, frothy lip
  float sides = smoothstep(0.0, 0.38, x) * smoothstep(0.0, 0.38, 1.0 - x);
  float froth = bwNoise(vec2(x * 11.0 + vSeed * 7.0, y * 7.0 - uTime * 2.5));
  float holes = smoothstep(0.25, 0.55, bwNoise(vec2(x * 18.0 - vSeed * 3.0, y * 12.0 + uTime * 1.7)));   // the sheet breaks into froth
  // above its base the sheet splits into fingers of white water, each ending in a droplet: splash, not a veil
  // each sheet its own number of fingers (2 to uFingers), wavy and of uneven width: thick, irregular splash, not a striped fan
  float nf = floor(2.0 + vSeed * (uFingers - 1.0));
  float fx = x * nf + vSeed * 3.0 + 0.45 * bwNoise(vec2(y * 2.5, vSeed * 11.0));
  float wF = 0.3 + 0.12 * bwNoise(vec2(floor(fx) * 3.1, vSeed * 7.0));
  float finger = 1.0 - smoothstep(wF, wF + 0.14, abs(fract(fx) - 0.5));
  float split = smoothstep(0.25, 0.6, y);
  float drop = 1.0 - smoothstep(0.0, 0.16, length(vec2((fract(fx) - 0.5) * 0.9, y - 0.86 - 0.08 * fract(vSeed * 7.0 + floor(fx) * 0.37))));
  float body = max(top * sides * mix(1.0, finger, split) * mix(uVeil + 0.25, 1.0, holes), drop * sides * 1.2);
  if (body < 0.02) discard;
  float rim = smoothstep(0.55, 0.9, y) * top + (1.0 - smoothstep(0.0, 0.35, min(x, 1.0 - x))) * 0.5;
  float streak = smoothstep(0.55, 0.85, bwNoise(vec2(x * 14.0, y * 3.0 - uTime * 3.0 + vSeed * 9.0)));
  vec3 water = vec3(0.12, 0.62, 1.0), white = vec3(1.0, 1.0, 1.04);
  float wh = clamp(rim * 0.95 + streak * 0.5 + froth * 0.35 + finger * split * 0.8 + drop + y * 0.3, 0.0, 1.0);
  vec3 col = mix(water, white, smoothstep(0.3, 0.6, wh));               // white or clear blue water, little in between
  float a = clamp(body * (0.3 + 0.6 * rim + 0.25 * streak + 0.5 * finger * split + drop) * uAlpha, 0.0, 0.97) * (1.0 - smoothstep(0.75, 1.0, vAge)) * uFade;
  gl_FragColor = vec4(col * a, a);
}
`;
