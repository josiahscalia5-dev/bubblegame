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
import { ROUND6, R6_ON } from './tunnel_r6.js';

export const ROUND5 = {
  // far: the depth range where the walls turn into the luminous heart. It began at 9 units, so most of the visible tube glowed
  // white and the bloom spread it over the whole screen (the pale, washed-out frames). Now only the far core glows.
  // bands and twist: more, flatter bands read as the approved concentric rings of water rather than broad spiral strokes;
  // deep: the dark-blue troughs between them (measured against the approved Screen 4: deep blue 0.9% of the play area with
  // lighter troughs, 4.8% with these; approved 6.2%)
  // pass 4 (the tunnel filled with rushing water): faster flow toward the rider, a brighter turquoise body, near-white cyan
  // crests, more white streaks and froth, tighter and flatter bands (the approved concentric rings of water), more pastel glints
  vortex: { bands: 1.6, twist: 0.05, flow: 1.3, deep: [0.0, 0.05, 0.4], body: [0.0, 0.45, 1.0], cyan: [0.55, 1.0, 1.0],
    foam: 0.4, streaks: 0.2, far: [18, 40], farGlow: 1.0, farMix: 0.55, rainbow: 0.8, rainbowAt: 13, warp: 0.35, crestLine: 1.5,
    // pass 5, the structured drum wall under the water (fixed in place; the water bands flow over it): raised ribs (a lit lip,
    // a shadowed trough), now and then a violet glow band or a warm gold metallic band, and animated water caustics
    ribs: 0.45, lip: 0.55, violet: 0.75, gold: 0.8, caustic: 0.35 },
  // the drum camera (game.js S4): further back and a little wider than round4's (off z -3.58, fov 60), so the mascot and the
  // brushes take the approved share of the screen and more of the tunnel's rings show round its bright centre
  camera: { off: [0, 1.0, -2.7], lookY: 1.5, fov: 64 },   // pass A: closer again (the approved character is about half the frame wide)
  // the foreground foam (tunnel_r3.js foamHeaps and foam bubbles, round4's settings overridden here): white froth over
  // turquoise and aqua, as in the approved picture and the tunnel sheet, instead of round4's deep-blue and lavender balls
  // The approved foreground is a saturated blue base with crisp white detail (translucent blue bubbles with white rims, white
  // flecks everywhere); round4's foam was the reverse, a white base (white on every lit side) with pale-blue detail.
  foam: { white: 0.6, deep: [0.01, 0.2, 0.88], aqua: [0.12, 0.58, 1.0] },
  foamBubbles: { per: 2, inner: [0.35, 0.62, 1.0], deep: [0.04, 0.24, 0.9], bright: 1.05 },
  // round4's foam heaps (rounded mounds under the bubbles) hidden: tested at the hero moment, the bubble clusters with the
  // turquoise water and white crests between them are closer to the approved foreground than the mounds
  hideFoamHeaps: true,
  // spray round the mascot (game.js stepRound3): many small crisp white flecks, not round4's big soft blobs (they read as mist)
  spray: { rate: 450, size: [0.03, 0.09] },
  // the drum's colour grade (tunnel_s4.js round2Light, round4's overridden): the approved picture's strong blue-white contrast
  grade: { contrast: 1.32, saturation: 1.4 },
  // the drum's path (track.js opts.curve): the climb, drop and turns kept but gentler, so the far tunnel's bright heart
  // stays near the middle of the view, as in the approved Screen 4 (Round 4 and the normal game keep the full path)
  path: { curve: 0.3 },
  // the luminous heart far down the tube (approved Screen 4 and the tunnel sheet): a glowing white core, warm gold and soft pink
  // halo and slow rays, on the path's axis this far ahead; depth-tested, so the sock, coins and brushes pass in front of it
  heart: { ahead: 20, radius: 3.5, core: 1.3, halo: 0.9, rays: 0.45 },   // pass 5: bright, not blown out   // large enough that its glow shows round the coins in front of it
  // pass A, the washing-machine entrance at the drum's mouth (the approved picture's upper frame): the shell up to the mouth
  // is lavender brushed metal, a warm gold rim and a thinner bronze ring frame the opening, a violet band just inside
  entrance: { rim: 1.88, rimTube: 0.11, inner: 1.7, innerTube: 0.05, violet: 0.35, lavender: [0.62, 0.55, 0.92] },
  hideRings: false,   // the approved tunnel keeps its ring frames round the water
  // bloom inside the drum (outside it is the game's own): strength, radius, threshold. Threshold above 1, so only the luminous
  // heart, the foam crests and glints bloom, not the whole lining
  bloom: { strength: 0.45, radius: 0.5, threshold: 1.05 },
  droplets: { count: 700, near: 3, far: 22, radius: [0.35, 1.85], size: [0.02, 0.06], swirl: 0.35, flow: 2.2, scale: 420, maxPx: 14 },
  bubbles: { count: 64, du: [-1.4, 14], x: [0.3, 1.6], h: [0.2, 2.6], r: [0.04, 0.36], flow: 1.6, film: 1.7 },   // none right in front of the camera: their film fogged the view
  fur: { shells: 8, length: 0.05, density: 260, tip: 0.5, halo: 0.45 },
  // thick white splash crests round the mascot (the approved picture's white foam masses either side of the hero and in front
  // of it): camera-facing cards with a painted foam texture, riding the water with the mascot, bobbing and breathing.
  // spots: [sideways, height above the water, ahead (+) or behind (-), size], in metres from the mascot
  // (nothing tall between the camera and the mascot: in front of it only low crests that hide its base, as in the approved picture)
  crests: { spots: [[-1.0, 0.0, 0.2, 1.1], [1.0, 0.0, 0.2, 1.1], [-1.45, 0.05, 1.1, 1.3], [1.45, 0.05, 1.1, 1.3],
    [-0.38, -0.18, -0.42, 0.75], [0.4, -0.18, -0.4, 0.75], [-0.85, -0.2, -0.9, 0.7], [0.85, -0.2, -0.9, 0.7]],   // pass 5: front crests over the character's lower body
    bob: 0.05, breathe: 0.08, opacity: 0.95 },
  // the drum's water (tunnel_s4.js waterR4, round4's overridden): saturated turquoise down the middle, electric blue at the
  // sides, stronger rolling crests and froth streaks (the approved picture's bright, rushing turquoise water)
  water: { middle: [0.0, 0.75, 0.9], side: [0.0, 0.18, 0.78], mix: 0.85, crest: 0.7, froth: 1.0 },
  // wet contact round the mascot: a churning foam collar at the waterline (its front overlaps the mascot's base, so it sits in
  // the water rather than above it) and a foam disc on the surface round it. radius and height in metres
  // wake: the surface churn stretched into a trail behind the mascot, toward the camera (length factor, how far back it reaches)
  contact: { radius: 0.42, height: 0.5, disc: 1.15, wake: 2.2, wakeBack: 1.1 },   // pass 5: a taller collar hugging the body
  // soap bubbles round the mascot, in front and behind (translucent: rim, rainbow film, glint), drifting up and back
  softBubbles: { count: 40, box: [[-1.2, 1.2], [0.0, 1.3], [-1.0, 2.2]], size: [0.05, 0.3], big: 7, rise: 0.25, drift: 0.9 },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.round5;
  const merge = (dst, src) => { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) merge(dst[k], src[k]); else dst[k] = src[k]; } };
  if (R6_ON) merge(ROUND5, ROUND6.round5);   // ?s3=round6 only: its overrides, before the shaders below are written
  if (tune) merge(ROUND5, tune);
}

export function buildRound5({ scene, TR, L, W, mascot, updaters, time, bloomPass }) {
  const TS = L.tunnelStart, axisH = W.WATER + W.AXIS_H, report = {};
  const IN = R6_ON ? ROUND6.inside : [-0.5, 2.5];   // round6 pass 3: the drum's effects start before the mouth (the hero moment)
  const inside = () => THREE.MathUtils.smoothstep(mascot.z, TS + IN[0], TS + IN[1]);
  report.vortex = vortexLining(scene, time, TS);
  report.entrance = entranceRims({ scene, TR, TS, axisH });
  if (ROUND5.hideRings) for (const n of ['r4GlowRings', 'r4GoldRings']) { const o = scene.getObjectByName(n); if (o) o.visible = false; }
  { const o = scene.getObjectByName('r4GoldRings'); if (o) o.visible = false; }   // pass A: the entrance rim is the gold accent
  report.droplets = droplets({ scene, TR, mascot, updaters, time, inside, axisH });
  report.heart = heart({ scene, TR, L, mascot, updaters, time, inside, axisH });
  report.crests = splashCrests({ scene, TR, W, mascot, updaters, time, inside });
  report.contact = wetContact({ scene, TR, W, mascot, updaters, time, inside });
  if (ROUND5.hideFoamHeaps) { const fh = scene.getObjectByName('r3Foam'); if (fh) updaters.push(() => { fh.visible = false; }); }   // after round3's own updater
  report.softBubbles = softBubbles({ scene, TR, W, mascot, updaters, time, inside });
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
  float ph = (u - uStart) * ${ROUND5.vortex.bands.toFixed(3)} + a * ${ROUND5.vortex.twist.toFixed(3)} + sw * ${ROUND5.vortex.warp.toFixed(3)} - uTime * ${ROUND5.vortex.flow.toFixed(3)};
  float band = 0.5 + 0.5 * sin(ph * 6.2832);
  vec3 col = mix(uDeep, uBody, smoothstep(0.1, 0.6, band));                       // deep blue troughs, electric-blue bodies
  col = mix(col, uCyan, smoothstep(0.62, 0.86, band));                            // cyan crests
  col += uCyan * smoothstep(0.9, 0.97, band) * ${ROUND5.vortex.crestLine.toFixed(3)};   // a thin glowing cyan line on each crest
  // the drum's own wall, fixed in place under the flowing water: ribs and occasional violet and gold bands
  float phS = (u - uStart) * ${ROUND5.vortex.bands.toFixed(3)} + a * ${ROUND5.vortex.twist.toFixed(3)}, fiS = floor(phS), frS = fract(phS);
  float lip = smoothstep(0.0, 0.07, frS) * (1.0 - smoothstep(0.07, 0.2, frS)), trough = smoothstep(0.55, 0.95, frS);
  col = col * (1.0 - ${ROUND5.vortex.ribs.toFixed(3)} * trough) + uCyan * lip * ${ROUND5.vortex.lip.toFixed(3)};
  float hv = fract(sin(fiS * 12.9898) * 43758.5453), hg = fract(sin(fiS * 78.233) * 12543.1);
  float vio = step(0.82, hv), gld = step(0.88, hg) * (1.0 - vio), bandM = smoothstep(0.15, 0.3, frS) * (1.0 - smoothstep(0.62, 0.78, frS));
  col = mix(col, vec3(0.55, 0.25, 1.0) * (0.8 + 0.6 * band), vio * bandM * ${ROUND5.vortex.violet.toFixed(3)});
  col = mix(col, vec3(1.0, 0.72, 0.3) * (0.75 + 0.9 * pow(abs(sin(a * 2.0 + uTime * 0.7)), 8.0)), gld * bandM * ${ROUND5.vortex.gold.toFixed(3)});
  float foam = smoothstep(0.84, 0.97, band) * smoothstep(0.35, 0.7, bwFbm(vec2(a * 7.0 - uTime * 0.8, u * 3.0 + uTime * 0.5)));
  float streak = smoothstep(0.7, 0.9, bwFbm(vec2(a * 14.0 + u * 1.5 - uTime * 1.5, u * 0.8)));
  col = mix(col, vec3(1.0), clamp(foam * ${ROUND5.vortex.foam.toFixed(3)} + streak * ${ROUND5.vortex.streaks.toFixed(3)} * band, 0.0, 1.0));
  vec2 g = vec2(a * 26.0, u * 3.5 - uTime * 0.7), c = floor(g);                   // twinkling glints in the water
  vec3 p3 = fract(vec3(c.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); float hs = fract((p3.x + p3.y) * p3.z);
  col += vec3(1.0) * step(0.93, hs) * (1.0 - smoothstep(0.0, 0.22, length(fract(g) - 0.5))) * (0.6 + 0.4 * sin(uTime * 5.0 + hs * 40.0));
  { float door = 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u);           // pass A: the lavender metal shell up to the mouth
    float brushed = 0.82 + 0.18 * bwNoise(vec2(a * 40.0, u * 2.0)), sheen = pow(max(0.0, sin(a)), 6.0);
    vec3 lav = vec3(${ROUND5.entrance.lavender.join(', ')}) * brushed + vec3(0.35, 0.3, 0.45) * sheen + vec3(0.2, 0.12, 0.3) * smoothstep(0.4, 0.0, u - uStart + 0.4);
    float vband = smoothstep(uStart, uStart + 0.05, u) * (1.0 - smoothstep(uStart + ${ROUND5.entrance.violet.toFixed(2)} - 0.05, uStart + ${ROUND5.entrance.violet.toFixed(2)}, u));
    col = mix(col, vec3(0.5, 0.28, 1.0) * (0.85 + 0.4 * band), vband * 0.85);
    col = mix(col, lav, door); }
  float far = smoothstep(${ROUND5.vortex.far[0].toFixed(1)}, ${ROUND5.vortex.far[1].toFixed(1)}, vDepth);   // the luminous heart
  vec2 cv = bwVoronoi(vec2(a * 5.0, u * 2.2 - uTime * 0.9));                      // water caustics playing over the wall
  col += vec3(0.35, 0.85, 1.0) * (1.0 - smoothstep(0.0, 0.08, cv.y - cv.x)) * ${ROUND5.vortex.caustic.toFixed(3)} * (1.0 - far);
  col = mix(col, mix(vec3(0.55, 0.85, 1.0), vec3(1.0, 0.97, 1.0), band) * ${ROUND5.vortex.farGlow.toFixed(3)}, far * ${ROUND5.vortex.farMix.toFixed(3)});
  float rb = exp(-pow((vDepth - ${ROUND5.vortex.rainbowAt.toFixed(1)}) / 2.0, 2.0)) * ${ROUND5.vortex.rainbow.toFixed(3)};
  col += (0.5 + 0.5 * cos(6.2832 * (a / 6.2832 * 2.0 + vec3(0.0, 0.33, 0.67) + uTime * 0.1))) * rb * band;   // a pastel rainbow ring
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- the luminous heart at the far end of the view
function heart({ scene, TR, L, mascot, updaters, time, inside, axisH }) {
  const P = ROUND5.heart;
  const u = { uTime: time, uFade: { value: 0 }, uCore: { value: P.core }, uHalo: { value: P.halo }, uRays: { value: P.rays } };
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
uniform float uTime, uFade, uCore, uHalo, uRays; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x);
  float core = exp(-r * r / 0.012) * 1.6 + exp(-r * r / 0.06);                        // a brilliant white core
  float halo = exp(-r * r / 0.25);                                                    // its warm halo
  float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 0.4) * sin(a * 5.0 - uTime * 0.3), 3.0) * exp(-r * 2.2);
  vec3 col = vec3(1.0, 0.98, 0.94) * core * uCore + mix(vec3(1.0, 0.85, 0.55), vec3(1.0, 0.6, 0.85), smoothstep(0.1, 0.5, r)) * halo * uHalo
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
// ---------------------------------------------------------------- thick white splash crests round the mascot
// The texture is painted once in code (no image file): a mound of overlapping foam lumps, white on top with soft blue shading
// underneath and between them, small bubbles and glints, and a ragged, irregular outline. Private random numbers only.
function crestTexture(seed) {
  const N = 256, cv = document.createElement('canvas'); cv.width = cv.height = N;
  const g = cv.getContext('2d'), rnd = mulberry5(seed);
  const lump = (x, y, r, top, mid, edge) => {
    const gr = g.createRadialGradient(x - r * 0.25, y - r * 0.35, r * 0.1, x, y, r);
    gr.addColorStop(0, top); gr.addColorStop(0.55, mid); gr.addColorStop(1, edge);
    g.fillStyle = gr; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  };
  // back row bluer and lower, front row whiter and higher in the middle: a crest, not a ball
  for (let pass = 0; pass < 2; pass++) for (let i = 0; i < 46; i++) {
    const t = rnd(), x = 18 + t * (N - 36), arch = Math.sin(t * Math.PI);
    const y = N * (0.78 - 0.42 * arch * (0.6 + 0.4 * rnd())) + (pass ? 10 : 0), r = 10 + rnd() * 26 * (0.5 + arch * 0.7);
    if (pass === 0) lump(x, y, r * 1.1, 'rgba(225,240,255,0.95)', 'rgba(120,185,255,0.9)', 'rgba(40,110,235,0)');
    else lump(x, y, r, 'rgba(255,255,255,1)', 'rgba(232,244,255,0.97)', 'rgba(150,200,255,0)');
  }
  for (let i = 0; i < 70; i++) {   // small bubbles: a blue-white ring with a glint
    const x = 20 + rnd() * (N - 40), y = N * (0.35 + rnd() * 0.5), r = 2 + rnd() * 6;
    g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 1.2; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.stroke();
    g.fillStyle = 'rgba(90,160,255,0.35)'; g.beginPath(); g.arc(x, y, r * 0.8, 0, Math.PI * 2); g.fill();
    g.fillStyle = 'rgba(255,255,255,0.95)'; g.beginPath(); g.arc(x - r * 0.35, y - r * 0.35, r * 0.25, 0, Math.PI * 2); g.fill();
  }
  for (let i = 0; i < 40; i++) {   // flung droplets above the crest
    const x = 20 + rnd() * (N - 40), y = N * (0.08 + rnd() * 0.35), r = 1 + rnd() * 3.5;
    g.fillStyle = 'rgba(255,255,255,0.95)'; g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill();
  }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; return tex;
}
function splashCrests({ scene, TR, W, mascot, updaters, time, inside }) {
  const P = ROUND5.crests, group = new THREE.Group(); group.name = 'r5Crests'; group.visible = false; scene.add(group);
  const texs = [crestTexture(0xc1e5), crestTexture(0xc2e5), crestTexture(0xc3e5)];
  const cards = P.spots.map(([dx, dh, du, s], i) => {
    const m = new THREE.SpriteMaterial({ map: texs[i % 3], transparent: true, depthWrite: false, opacity: P.opacity, fog: false });
    const sp = new THREE.Sprite(m); sp.center.set(0.5, 0.15); sp.renderOrder = 5; sp.frustumCulled = false; group.add(sp);
    return { sp, dx, dh, du, s, ph: i * 1.7 };
  });
  const v = new THREE.Vector3();
  updaters.push(() => {
    const k = inside(); group.visible = k > 0.01; if (!group.visible) return;
    const t = time.value;
    for (const c of cards) {
      TR.map(mascot.x + c.dx, W.WATER + c.dh + Math.sin(t * 2.3 + c.ph) * P.bob, mascot.z + c.du, v);
      c.sp.position.copy(v);
      const b = 1 + Math.sin(t * 3.1 + c.ph * 1.3) * P.breathe; c.sp.scale.set(c.s * b * 1.25, c.s * b, 1);
      c.sp.material.opacity = P.opacity * k;
    }
  });
  return { cards: cards.length };
}

// ---------------------------------------------------------------- wet contact: foam collar and surface churn round the mascot
function wetContact({ scene, TR, W, mascot, updaters, time, inside }) {
  const P = ROUND5.contact, F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  const u = { uTime: time, uFade: { value: 0 } };
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(P.radius, P.radius * 1.25, P.height, 64, 1, true),
    new THREE.ShaderMaterial({ uniforms: u, vertexShader: CONTACT_VERTEX, fragmentShader: COLLAR_FRAGMENT, transparent: true, depthWrite: false, side: THREE.DoubleSide }));
  const disc = new THREE.Mesh(new THREE.CircleGeometry(P.disc, 64).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({ uniforms: { ...u, uR: { value: P.radius / P.disc } }, vertexShader: CONTACT_VERTEX, fragmentShader: DISC_FRAGMENT, transparent: true, depthWrite: false }));
  collar.renderOrder = 6; disc.renderOrder = 4; collar.frustumCulled = disc.frustumCulled = false;
  const g = new THREE.Group(); g.name = 'r5Contact'; g.add(disc, collar); g.visible = false; scene.add(g);
  collar.position.y = P.height * 0.32; disc.position.y = 0.01;
  disc.scale.set(1, 1, P.wake); disc.position.z = -P.wakeBack;   // local z is the path's forward: the wake trails back toward the camera
  const m4 = new THREE.Matrix4(), v = new THREE.Vector3();
  updaters.push(() => {
    const k = inside(); g.visible = k > 0.01; u.uFade.value = k; if (!g.visible) return;
    TR.frame(mascot.z, F); TR.map(mascot.x, W.WATER, mascot.z, v);
    g.position.copy(v); m4.makeBasis(F.R, F.U, F.T); g.quaternion.setFromRotationMatrix(m4);
  });
  return { radius: P.radius };
}
const CONTACT_VERTEX = /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const COLLAR_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uFade; varying vec2 vUv;
void main() {
  float a = vUv.x * 6.2832, h = vUv.y;   // h: 0 at the waterline, 1 at the collar's ragged top
  float n = bwFbm(vec2(vUv.x * 18.0 + uTime * 0.6, h * 3.0 - uTime * 2.2)), n2 = bwFbm(vec2(vUv.x * 40.0 - uTime, h * 6.0 - uTime * 3.0));
  float top = 0.45 + 0.5 * n;                                             // ragged, churning top edge
  float body = 1.0 - smoothstep(top - 0.25, top, h);
  float foam = smoothstep(0.35, 0.65, n2 + (1.0 - h) * 0.35);
  vec3 col = mix(vec3(0.2, 0.55, 1.0), vec3(1.0), foam);                  // blue water under white churn
  float a0 = body * (0.55 + 0.45 * foam) * uFade;
  gl_FragColor = vec4(col, a0);
}`;
const DISC_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uFade, uR; varying vec2 vUv;
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p);
  float ring = smoothstep(uR * 0.7, uR, r) * (1.0 - smoothstep(0.55, 1.0, r));   // churn from the body outward, fading
  float n = bwFbm(vec2(atan(p.y, p.x) * 3.0, r * 6.0 + uTime * 1.6)) + 0.4 * bwFbm(p * 9.0 - vec2(0.0, uTime * 2.0));
  float foam = smoothstep(0.55, 0.95, n) * ring;
  vec3 col = mix(vec3(0.0, 0.6, 1.0), vec3(1.0), smoothstep(0.3, 0.8, foam * 1.4));
  gl_FragColor = vec4(col, clamp(foam * 1.3 + ring * 0.18, 0.0, 1.0) * uFade);
}`;

// ---------------------------------------------------------------- translucent soap bubbles round the mascot
function bubbleTexture() {
  const N = 128, cv = document.createElement('canvas'); cv.width = cv.height = N; const g = cv.getContext('2d'), c = N / 2;
  const film = g.createRadialGradient(c, c, c * 0.55, c, c, c * 0.98);   // clear middle, coloured film toward the rim
  film.addColorStop(0, 'rgba(180,220,255,0.04)'); film.addColorStop(0.6, 'rgba(160,140,255,0.16)'); film.addColorStop(0.85, 'rgba(120,230,255,0.35)'); film.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = film; g.beginPath(); g.arc(c, c, c * 0.98, 0, Math.PI * 2); g.fill();
  const hue = g.createLinearGradient(0, 0, N, N);   // rainbow sheen on the rim
  ['rgba(255,140,220,0.55)', 'rgba(140,200,255,0.55)', 'rgba(150,255,210,0.5)', 'rgba(255,240,150,0.5)'].forEach((s, i) => hue.addColorStop(i / 3, s));
  g.strokeStyle = hue; g.lineWidth = N * 0.035; g.beginPath(); g.arc(c, c, c * 0.9, 0, Math.PI * 2); g.stroke();
  g.strokeStyle = 'rgba(255,255,255,0.85)'; g.lineWidth = N * 0.015; g.beginPath(); g.arc(c, c, c * 0.94, 0, Math.PI * 2); g.stroke();
  g.fillStyle = 'rgba(255,255,255,0.95)'; g.beginPath(); g.ellipse(c * 0.62, c * 0.55, c * 0.16, c * 0.09, -0.7, 0, Math.PI * 2); g.fill();
  g.fillStyle = 'rgba(255,255,255,0.6)'; g.beginPath(); g.arc(c * 1.35, c * 1.38, c * 0.06, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function softBubbles({ scene, TR, W, mascot, updaters, time, inside }) {
  const P = ROUND5.softBubbles, rnd = mulberry5(0xb0bb1e), tex = bubbleTexture(), g = new THREE.Group(); g.name = 'r5SoftBubbles'; g.visible = false; scene.add(g);
  const R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const bs = [];
  for (let i = 0; i < P.count; i++) {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, fog: false }));
    sp.renderOrder = 7; sp.frustumCulled = false; g.add(sp);
    const big = i < P.big;   // a few big ones low in front, as in the approved picture's lower left
    bs.push({ sp, x: big ? (i % 2 ? 0.9 : -1.0) + rnd() * 0.3 : R(P.box[0]), h: big ? 0.05 + rnd() * 0.25 : R(P.box[1]),
      du: big ? -0.9 - rnd() * 0.3 : R(P.box[2]), s: big ? 0.28 + rnd() * 0.12 : R(P.size), w: rnd() * 6 });
  }
  const v = new THREE.Vector3(); let last = null;
  updaters.push((dt) => {
    const k = inside(); g.visible = k > 0.01; if (!g.visible) { last = null; return; }
    const t = time.value;
    for (const b of bs) {
      if (last !== null) { b.h += P.rise * dt; b.du -= P.drift * dt * 0.3; }
      if (b.h > P.box[1][1] + 0.3 || b.du < P.box[2][0] - 0.4) { b.h = R([0.0, 0.3]); b.du = R([0.5, P.box[2][1]]); b.x = R(P.box[0]); }
      TR.map(mascot.x + b.x + Math.sin(t * 1.3 + b.w) * 0.05, W.WATER + b.h, mascot.z + b.du, v);
      b.sp.position.copy(v); b.sp.scale.setScalar(b.s * 2); b.sp.material.opacity = k;
    }
    last = t;
  });
  return { count: bs.length };
}

// ---------------------------------------------------------------- pass A: gold rim and bronze ring round the drum's mouth
function entranceRims({ scene, TR, TS, axisH }) {
  const P = ROUND5.entrance, F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  TR.frame(TS, F);
  const g = new THREE.Group(); g.name = 'r5Entrance';
  const gold = new THREE.MeshStandardMaterial({ color: 0xf2c46b, metalness: 0.8, roughness: 0.32, emissive: 0x7a4a14, emissiveIntensity: 0.8 });   // champagne gold
  const bronze = new THREE.MeshStandardMaterial({ color: 0xd99a55, metalness: 0.8, roughness: 0.35, emissive: 0x5a3010, emissiveIntensity: 0.7 });
  const rim = new THREE.Mesh(new THREE.TorusGeometry(P.rim, P.rimTube, 20, 128), gold);
  const inner = new THREE.Mesh(new THREE.TorusGeometry(P.inner, P.innerTube, 12, 128), bronze); inner.position.z = 0.12;
  g.add(rim, inner);
  g.position.copy(F.P).addScaledVector(F.U, axisH);
  g.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(F.R, F.U, F.T));
  scene.add(g);
  return { at: TS };
}

function mulberry5(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
