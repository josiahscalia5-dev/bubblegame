// ?s3=round5 (test only): the major visual reconstruction of the approved Screen 4, on top of round4 (which is unchanged).
// Everything here is live 3D (animated shaders, particles, post-processing), drawn only inside the drum:
//   - tunnel:   the lining becomes a swirling water vortex: bands of deep blue, electric blue and cyan water twisting round
//               the tube and flowing toward the rider, white foam riding the crests, fine spiralling streaks, and far down
//               the tube the water glows white-cyan: the approved picture's luminous heart. The hard tube rings are hidden.
//   - glow:     a soft, wide bloom and a gentle haze inside the drum (the approved artwork's luminous, painted glow).
//   - droplets: hundreds of white water droplets and glints floating and swirling round the tunnel.
//   - bubbles:  many more iridescent soap bubbles, some large near the camera (tunnel_r3.js streamBubbles, settings here).
//   - mascot:   a soft fur halo of shells round the pink character's own silhouette (game.js, fur shells; settings here).
// Gameplay (lanes, brushes, collectibles, rules, controls, mission) is round4's.
import * as THREE from 'three';
import { NOISE } from './shaders.js';

export const ROUND5 = {
  vortex: { bands: 0.85, twist: 0.16, flow: 0.55, deep: [0.0, 0.03, 0.32], body: [0.02, 0.22, 0.95], cyan: [0.25, 0.85, 1.0],
    foam: 0.95, streaks: 0.35, far: [9, 26], farGlow: 1.5, farMix: 0.85, rainbow: 0.35, rainbowAt: 13 },
  // the drum's path (track.js opts.curve): the climb, drop and turns kept but gentler, so the far tunnel's bright heart
  // stays near the middle of the view, as in the approved Screen 4 (Round 4 and the normal game keep the full path)
  path: { curve: 0.3 },
  // the luminous heart far down the tube (approved Screen 4 and the tunnel sheet): a glowing white core, warm gold and soft pink
  // halo and slow rays, on the path's axis this far ahead; depth-tested, so the sock, coins and brushes pass in front of it
  heart: { ahead: 16, radius: 2.4, core: 1.6, rays: 0.35 },
  hideRings: true,
  // bloom inside the drum (outside it is the game's own): strength, radius, threshold
  bloom: { strength: 0.75, radius: 0.85, threshold: 0.72 },
  droplets: { count: 700, near: 3, far: 22, radius: [0.35, 1.85], size: [0.02, 0.06], swirl: 0.35, flow: 2.2, scale: 420, maxPx: 14 },
  bubbles: { count: 64, du: [-1.4, 14], x: [0.3, 1.6], h: [0.2, 2.6], r: [0.04, 0.36], flow: 1.6, film: 1.7 },   // none right in front of the camera: their film fogged the view
  fur: { shells: 8, length: 0.05, density: 260, tip: 0.5, halo: 0.45 },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.round5;
  const merge = (dst, src) => { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) merge(dst[k], src[k]); else dst[k] = src[k]; } };
  if (tune) merge(ROUND5, tune);
}

export function buildRound5({ scene, TR, L, W, mascot, updaters, time, bloomPass }) {
  const TS = L.tunnelStart, axisH = W.WATER + W.AXIS_H, report = {};
  const inside = () => THREE.MathUtils.smoothstep(mascot.z, TS - 0.5, TS + 2.5);
  report.vortex = vortexLining(scene, time, TS);
  if (ROUND5.hideRings) for (const n of ['r4GlowRings', 'r4GoldRings']) { const o = scene.getObjectByName(n); if (o) o.visible = false; }
  report.droplets = droplets({ scene, TR, mascot, updaters, time, inside, axisH });
  report.heart = heart({ scene, TR, L, mascot, updaters, time, inside, axisH });
  if (bloomPass) {   // runs after round2's own bloom updater, so it has the last word inside the drum
    const B = ROUND5.bloom, s0 = bloomPass.radius, t0 = bloomPass.threshold;
    let base = null;
    updaters.push(() => {
      const k = inside();
      if (base === null) base = { radius: s0, threshold: t0 };
      bloomPass.strength = bloomPass.strength + (B.strength - bloomPass.strength) * k;
      bloomPass.radius = base.radius + (B.radius - base.radius) * k;
      bloomPass.threshold = base.threshold + (B.threshold - base.threshold) * k;
    });
    report.bloom = B;
  }
  return report;
}

// ---------------------------------------------------------------- the water-vortex lining (replaces round4's lining shader)
function vortexLining(scene, time, TS) {
  const mesh = scene.getObjectByName('r4Lining');
  if (!mesh) return null;
  const V = ROUND5.vortex;
  const u = { uTime: time, uStart: { value: TS }, uDeep: { value: new THREE.Color(...V.deep) }, uBody: { value: new THREE.Color(...V.body) },
    uCyan: { value: new THREE.Color(...V.cyan) } };
  mesh.material = new THREE.ShaderMaterial({ uniforms: u, vertexShader: VORTEX_VERTEX, fragmentShader: VORTEX_FRAGMENT, side: THREE.DoubleSide });
  mesh.name = 'r5Vortex';
  return { replaced: 'r4Lining' };
}
const VORTEX_VERTEX = /* glsl */ `
attribute vec2 aAU; varying vec2 vAU; varying float vDepth;
void main() { vAU = aAU; vec4 mv = modelViewMatrix * vec4(position, 1.0); vDepth = -mv.z; gl_Position = projectionMatrix * mv; }
`;
const VORTEX_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uStart; uniform vec3 uDeep, uBody, uCyan;
varying vec2 vAU; varying float vDepth;
void main() {
  float a = vAU.x, u = vAU.y;
  float sw = bwFbm(vec2(a * 1.6 + u * 0.25 - uTime * 0.6, u * 0.5 - uTime * 0.3));
  float ph = (u - uStart) * ${ROUND5.vortex.bands.toFixed(3)} + a * ${ROUND5.vortex.twist.toFixed(3)} + sw * 0.9 - uTime * ${ROUND5.vortex.flow.toFixed(3)};
  float band = 0.5 + 0.5 * sin(ph * 6.2832);
  vec3 col = mix(uDeep, uBody, smoothstep(0.1, 0.6, band));                       // deep blue troughs, electric-blue bodies
  col = mix(col, uCyan, smoothstep(0.62, 0.86, band));                            // cyan crests
  float foam = smoothstep(0.84, 0.97, band) * smoothstep(0.35, 0.7, bwFbm(vec2(a * 7.0 - uTime * 0.8, u * 3.0 + uTime * 0.5)));
  float streak = smoothstep(0.7, 0.9, bwFbm(vec2(a * 14.0 + u * 1.5 - uTime * 1.5, u * 0.8)));
  col = mix(col, vec3(1.0), clamp(foam * ${ROUND5.vortex.foam.toFixed(3)} + streak * ${ROUND5.vortex.streaks.toFixed(3)} * band, 0.0, 1.0));
  vec2 g = vec2(a * 26.0, u * 3.5 - uTime * 0.7), c = floor(g);                   // twinkling glints in the water
  vec3 p3 = fract(vec3(c.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); float hs = fract((p3.x + p3.y) * p3.z);
  col += vec3(1.0) * step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.6 + 0.4 * sin(uTime * 5.0 + hs * 40.0));
  float far = smoothstep(${ROUND5.vortex.far[0].toFixed(1)}, ${ROUND5.vortex.far[1].toFixed(1)}, vDepth);   // the luminous heart
  col = mix(col, mix(vec3(0.55, 0.85, 1.0), vec3(1.0, 0.97, 1.0), band) * ${ROUND5.vortex.farGlow.toFixed(3)}, far * ${ROUND5.vortex.farMix.toFixed(3)});
  float rb = exp(-pow((vDepth - ${ROUND5.vortex.rainbowAt.toFixed(1)}) / 2.0, 2.0)) * ${ROUND5.vortex.rainbow.toFixed(3)};
  col += (0.5 + 0.5 * cos(6.2832 * (a / 6.2832 * 2.0 + vec3(0.0, 0.33, 0.67) + uTime * 0.1))) * rb * band;   // a pastel rainbow ring
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- the luminous heart at the far end of the view
function heart({ scene, TR, L, mascot, updaters, time, inside, axisH }) {
  const P = ROUND5.heart;
  const u = { uTime: time, uFade: { value: 0 }, uCore: { value: P.core }, uRays: { value: P.rays } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: HEART_VERTEX, fragmentShader: HEART_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending, side: THREE.DoubleSide });   // its basis below is mirrored (as the whirlpool's), so both sides
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat); mesh.name = 'r5Heart'; mesh.frustumCulled = false; mesh.visible = false; mesh.renderOrder = 2;
  scene.add(mesh);
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() }, m4 = new THREE.Matrix4();
  updaters.push(() => {
    const at = Math.min(mascot.z + P.ahead, L.tunnelEnd - 1), k = inside() * (1 - THREE.MathUtils.smoothstep(mascot.z + P.ahead, L.tunnelEnd + 2, L.tunnelEnd + 8));
    mesh.visible = k > 0.001; u.uFade.value = k;
    if (!mesh.visible) return;
    TR.frame(at, F);
    mesh.position.copy(F.P).addScaledVector(F.U, axisH);
    m4.makeBasis(F.R, F.U, F.T.clone().negate()); mesh.quaternion.setFromRotationMatrix(m4);
    mesh.scale.setScalar(P.radius);
  });
  return { ahead: P.ahead };
}
const HEART_VERTEX = /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const HEART_FRAGMENT = /* glsl */ `
uniform float uTime, uFade, uCore, uRays; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x);
  float core = exp(-r * r / 0.012) * 1.6 + exp(-r * r / 0.06);                        // a brilliant white core
  float halo = exp(-r * r / 0.25);                                                    // its warm halo
  float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 0.4) * sin(a * 5.0 - uTime * 0.3), 3.0) * exp(-r * 2.2);
  vec3 col = vec3(1.0, 0.98, 0.94) * core * uCore + mix(vec3(1.0, 0.85, 0.55), vec3(1.0, 0.6, 0.85), smoothstep(0.1, 0.5, r)) * halo * 0.55
           + vec3(1.0, 0.92, 0.85) * rays * uRays;
  col *= 1.0 - smoothstep(0.75, 1.0, r);
  gl_FragColor = vec4(col * uFade, 1.0);
}
`;

// ---------------------------------------------------------------- floating water droplets and glints round the tunnel
function droplets({ scene, TR, mascot, updaters, time, inside, axisH }) {
  const P = ROUND5.droplets, n = P.count, rnd = mulberry5(0xd70);
  const pos = new Float32Array(n * 3), size = new Float32Array(n), seed = new Float32Array(n);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1)); g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uFade: { value: 0 }, uScale: { value: P.scale }, uMaxPx: { value: P.maxPx } }, vertexShader: DROP_VERTEX, fragmentShader: DROP_FRAGMENT,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const pts = new THREE.Points(g, mat); pts.name = 'r5Droplets'; pts.frustumCulled = false; pts.visible = false; pts.renderOrder = 8;
  scene.add(pts);
  const R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const d = [];
  const spawn = (o, anywhere) => {
    o.u = mascot.z + (anywhere ? P.near + rnd() * (P.far - P.near) : P.far - rnd() * 2);
    o.a = rnd() * Math.PI * 2; o.r = R(P.radius); o.w = (0.5 + rnd()) * P.swirl * (rnd() < 0.5 ? -1 : 1);
  };
  for (let i = 0; i < n; i++) { const o = {}; spawn(o, true); d.push(o); size[i] = R(P.size); seed[i] = rnd(); }
  const v = new THREE.Vector3();
  let was = false;
  updaters.push((dt) => {
    const k = inside(); pts.visible = k > 0; mat.uniforms.uFade.value = k;
    if (!pts.visible) { was = false; return; }
    if (!was) { for (const o of d) spawn(o, true); was = true; }
    for (let i = 0; i < n; i++) {
      const o = d[i];
      o.u -= P.flow * dt * 0.3; o.a += o.w * dt;
      if (o.u < mascot.z + P.near - 1.5) spawn(o, false);
      const h = axisH + Math.sin(o.a) * o.r;
      if (h < axisH - 0.6) { o.a = -o.a; }   // keep them above the water
      TR.map(Math.cos(o.a) * o.r, Math.max(h, axisH - 0.5), o.u, v);
      pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
    }
    g.attributes.position.needsUpdate = true;
  });
  return { count: n };
}
const DROP_VERTEX = /* glsl */ `
attribute float aSize; attribute float aSeed; uniform float uTime, uScale, uMaxPx; varying float vSeed; varying float vTw;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vSeed = aSeed; vTw = 0.55 + 0.45 * sin(uTime * (3.0 + aSeed * 5.0) + aSeed * 30.0);
  gl_PointSize = min(aSize * uScale / max(-mv.z, 0.2), uMaxPx);   // small, sharp glints (big soft ones fogged the view)
  gl_Position = projectionMatrix * mv;
}
`;
const DROP_FRAGMENT = /* glsl */ `
uniform float uFade; varying float vSeed; varying float vTw;
void main() {
  vec2 p = gl_PointCoord - 0.5; float r = length(p);
  float core = 1.0 - smoothstep(0.0, 0.22, r), halo = 1.0 - smoothstep(0.1, 0.5, r);
  float star = (1.0 - smoothstep(0.0, 0.05, abs(p.x))) * (1.0 - smoothstep(0.1, 0.5, abs(p.y))) + (1.0 - smoothstep(0.0, 0.05, abs(p.y))) * (1.0 - smoothstep(0.1, 0.5, abs(p.x)));
  float glint = step(0.8, vSeed) * star * 0.8;
  vec3 col = vec3(0.85, 0.97, 1.0) * (core * 0.9 + halo * 0.12 + glint) * vTw;
  gl_FragColor = vec4(col * uFade, 1.0);
}
`;
function mulberry5(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
