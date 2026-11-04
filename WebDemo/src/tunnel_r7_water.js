// ?s3=round7 (test only): Screen 4's water, splash collar, immersion and bubbles, owned by the Water & VFX specialist.
// Round 7 is round6 plus the rich preview plus this pass; ?s3=round6 and ?s3=round6,rich are unchanged.
// Imports: only 'three' and './shaders.js' (tunnel_r6.js imports this file, so importing it back would be a cycle).
//
//   R7_WATER.round6: settings merged into ROUND6 (tunnel_r6.js) when round7 is on, before any shader text is written.
//                    ROUND6.round5 inside it reaches round5's settings (contact collar, soft bubbles, spray, water ...).
//   buildR7Water(ctx): called at the end of buildRound6 with { scene, TR, L, W, mascot, updaters, time, motion }
//                    (motion: { lat, speed, lift, landing, ride }, updated every frame). Returns a small report object.
// (import * as THREE from 'three' and { NOISE } from './shaders.js' when needed; use THREE.<name>, never the bare namespace,
// or the bundler keeps all of three.js)
//
// Round 7 pass (the Art Director's review against the ORIGINAL approved Screen 4, hero moment 3.0 s after the tap):
//   - foam bank: the approved picture has a lumpy, glossy white-lilac bank of bubble foam in front of the character from
//     about 76% of the screen height down, hiding its lower quarter, piled up beside the body; the game had a flat,
//     paper-white shape BEHIND the character (round6's bow wave crest and round5's collar). The collar is hidden and the
//     foam is now ~660 glossy foam lumps and clear blue bubbles (one instanced draw call) round the character's lower
//     body, churning, piling up on the side it swerves to, thrown out in a ring when it lands, thinner in the air.
//   - the dark navy disc round the character inside the drum (round6's collar shader: its deep-blue lower half) goes with
//     round5's contact collar.
//   - side water: round6's bow wave sheets restyled as turquoise water with thin white streaks and a broken, flecked top
//     (no solid white crest), wider, so they show beside the body (the approved turquoise streaks at the sides).
//   - bubbles: glossy soap bubbles with a milky body, a thick bright rim, a pastel film and a white highlight up and to
//     the left (round3's stream bubbles and the drum's own bubbles restyled, round5's soft bubbles bunched round the
//     character replaced); three big ones at the approved places at the hero moment (top right, left, lower left),
//     mid-size ones round the edges.
//   - spray: white specks and short streaks thrown up beside the character to about 60% of the screen height.
// Everything here is only built with ?s3=round7. Private random numbers only (the game's seeded Math.random is untouched).
import * as THREE from 'three';
import { NOISE } from './shaders.js';

export const R7_WATER = {
  round6: {
    round5: {
      // round5's soft bubbles sat in a box round the character (the review: "bunched round the character and the right
      // coin"); the round7 bubbles below replace them
      softBubbles: { count: 0 },
      // round3's stream bubbles: smaller, further in (the whirlpool), and only ahead of the character (never over its face)
      bubbles: { count: 110, r: [0.025, 0.17], x: [0.35, 1.9], du: [1.2, 16] },
    },
  },
  // round6/round5 objects replaced in round7 (hidden every frame, after their own updaters); round6's bow wave is kept
  // but restyled (sheets, below)
  hide: ['r5Contact', 'r4SplashCrown'],
  // round6's bow wave sheets beside the character, restyled: saturated turquoise and electric-blue water with thin white
  // streaks flowing along it and a broken, flecked top (round6's solid white crest read as a flat paper-white shape behind
  // the character); wider and leaning out, so they show beside the body at about 65-80% of the screen height (the
  // approved picture's turquoise streaks at the sides). reach (degrees from straight ahead), radius, height, lean: metres
  sheets: { on: true, reach: [35, 135], radius: [0.5, 1.25], height: 0.92, lean: 0.36, body: [0.0, 0.62, 1.0], deep: [0.0, 0.28, 0.95], alpha: 0.9 },
  // where the effects ramp in, in metres from the drum's mouth (as round6's bow wave: already up at the hero moment)
  fadeIn: [-7, -4],
  // the foam bank, in metres in the character's frame (x sideways, +x screen-left; h up from the water; u forward, the
  // camera is about 3 m back and 1.1 m up). Per zone: lump count, where, top (the bank's height there), r (lump radii),
  // flow (m/s the lumps slide back toward the camera). At 3.0 s a lump top 0.3 m high 0.45 m in front of the character
  // is at 83% of the screen height, 0.45 m high beside it at 76%.
  foam: {
    front: { count: 220, u: [-1.3, -0.3], top: [0.11, 0.26], r: [0.055, 0.13], flow: 0.25 },   // between the camera and the body
    collar: { count: 200, rho: [0.34, 0.64], phi: [35, 180], top: [0.24, 0.45], r: [0.05, 0.11], flow: 0.35 },   // round the body
    side: { count: 170, x: [0.55, 1.5], u: [-0.9, 1.5], top: 0.4, r: [0.05, 0.12], flow: 0.7 },   // piled up beside it
    flecks: { count: 70, x: [0.15, 1.5], u: [0.3, 3.2], top: 0.08, r: [0.025, 0.06], flow: 2.0 },  // white flecks ahead
    suds: 0.5,                      // share of glossy translucent bubbles among the dense foam lumps
    // linear colours before the drum's grade (saturation 1.35, contrast 1.45): white tops, a milky sky blue and a lilac in
    // the shade (they come out as the approved pale milky blue), a saturated blue in the clear bubbles' film
    white: [1.0, 1.0, 1.0], lilac: [0.6, 0.56, 1.0], cyan: [0.34, 0.62, 1.0], film: [0.08, 0.4, 1.0],
    swerve: 0.13, landing: [0.32, 0.16], air: 0.35,
  },
  // white spray thrown up beside the character (to about 60% of the screen height): round specks and, a fifth of them,
  // short upright streaks (the approved splash); sizes in metres, point size capped at maxPx
  spray: { count: 1000, streaks: 0.2, up: [1.6, 4.9], out: [0.3, 1.5], size: [0.018, 0.044], streak: [0.06, 0.13], scale: 700, maxPx: 32, back: [0.5, 1.6] },
  // soap bubbles: hero [x, h, u, radius] in the character's frame at the hero moment (heroAt metres from the mouth, 3.0 s
  // after the tap), worked out from the camera there: top right (74%, 33% of the screen, 18% of its width), left (9%,
  // 71%) and lower left (16%, 80%: the approved 12%, 85% is behind this game's Bubble Blast button); then mid-size ones
  // round the edges. Each lives for a stretch of the ride (len, metres) and is reborn somewhere else (never over the
  // character); if the camera framing changes, these places need working out again
  bubbles: { heroAt: -2.31, hero: [[-0.43, 2.08, -0.65, 0.165], [0.52, 0.86, -1.2, 0.09], [0.375, 0.7, -1.4, 0.075]],
    mid: 14, midR: [0.035, 0.1], len: [18, 30], rise: 0.012, back: 0.025 },
};

export function buildR7Water({ scene, TR, L, W, mascot, updaters, time, motion }) {
  const TS = L.tunnelStart, report = {};
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  const C = new THREE.Vector3();
  const frame = { k: 0, C, F, air: 0 };
  // the character's frame at the water under it, shared by everything below (computed once a frame, first); air: 0 on
  // the water, 1 high in a jump (motion.lift alone also counts the waves and the bob, so it is only used during a jump)
  updaters.push((dt) => {
    frame.k = THREE.MathUtils.smoothstep(mascot.z, TS + R7_WATER.fadeIn[0], TS + R7_WATER.fadeIn[1]);
    TR.frame(mascot.z, F); TR.map(mascot.x, motion.ride, mascot.z, C);
    const air = mascot.air ? THREE.MathUtils.smoothstep(motion.lift, 0.1, 0.6) : 0;
    frame.air += (air - frame.air) * (1 - Math.exp(-(dt || 0) / 0.08));
  });
  // round5's contact collar and disc (the navy disc) and round4's splash petals: replaced by the foam bank; round6's bow
  // wave (the paper-white sheet behind the character) restyled as streak sheets, or hidden with sheets.on false
  const hide = R7_WATER.sheets.on ? R7_WATER.hide : [...R7_WATER.hide, 'r6BowWave'];
  const hidden = hide.map((n) => scene.getObjectByName(n)).filter(Boolean);
  updaters.push(() => { for (const o of hidden) o.visible = false; });
  report.hidden = hidden.map((o) => o.name);
  if (R7_WATER.sheets.on) report.sheets = streakSheets({ scene, updaters, motion, frame });
  report.foam = foamBank({ scene, updaters, time, motion, frame });
  report.spray = spraySpecks({ scene, updaters, time, motion, frame });
  report.bubbles = heroBubbles({ scene, updaters, time, mascot, frame, TS });
  report.streamBubbles = restyleStreamBubbles({ scene, updaters, frame });
  report.drumBubbles = restyleGameBubbles({ scene, updaters, frame });
  return report;
}

// ---------------------------------------------------------------- the foam bank round the character's lower body
function foamBank({ scene, updaters, time, motion, frame }) {
  const P = R7_WATER.foam, rnd = mulberry7(0xf0a3), R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const sm = THREE.MathUtils.smoothstep, lumps = [];
  const add = (x, u, top, rr, flow, zone) => {
    const r = rr, h = Math.max(top - r * (0.15 + rnd() * 0.95), -r * 0.25);
    lumps.push({ x, h, u, r, ph: rnd() * 6.2832, sp: 0.6 + rnd() * 0.9, amp: r * (0.15 + rnd() * 0.25), flow: flow * (0.7 + rnd() * 0.6),
      span: 0.25 + rnd() * 0.35, kind: rnd() < P.suds ? 1 : 0, tint: rnd(), zone });
  };
  // between the camera and the body: a shelf of foam, tallest just in front of the body, lower toward the camera
  for (let i = 0; i < P.front.count; i++) {
    const u = R(P.front.u), half = 0.37 * (3 + u) + 0.12, x = (rnd() * 2 - 1) * half, ax = Math.abs(x);
    const top = P.front.top[0] + (P.front.top[1] - P.front.top[0]) * sm(u, P.front.u[0], -0.45) * (1 - 0.35 * sm(ax, 0.4, 1.1)) + rnd() * 0.04;
    add(x, u, top, R(P.front.r) * (1 + 0.35 * sm(-u, 0.4, 1.2)), P.front.flow, 0);
  }
  // round the body: a ring of foam, tallest at its sides (it rises to about 76% of the screen height beside the body)
  for (let i = 0; i < P.collar.count; i++) {
    const side = i % 2 ? 1 : -1, phi = THREE.MathUtils.degToRad(R(P.collar.phi)), rho = R(P.collar.rho);
    const x = side * Math.sin(phi) * rho, u = Math.cos(phi) * rho, s = Math.sin(phi);
    add(x, u, P.collar.top[0] + (P.collar.top[1] - P.collar.top[0]) * s * s + rnd() * 0.05, R(P.collar.r), P.collar.flow, 1);
  }
  // beside it: banks of foam falling away toward the walls and down the tube, in irregular crests and dips (not a level
  // band across the screen)
  for (let i = 0; i < P.side.count; i++) {
    const side = i % 2 ? 1 : -1, ax = R(P.side.x), u = R(P.side.u), bump = 0.5 + 0.5 * Math.sin(ax * 5.2 + u * 2.7 + side * 1.9);
    const top = P.side.top * (1 - 0.6 * sm(ax, 0.6, 1.5)) * (1 - 0.55 * sm(u, 0.2, 1.5)) * (0.55 + 0.7 * bump * bump) + 0.04 + rnd() * 0.05;
    add(side * ax, u, top, R(P.side.r), P.side.flow, 2);
  }
  // small white flecks on the turquoise water ahead and to the sides
  for (let i = 0; i < P.flecks.count; i++) {
    const side = i % 2 ? 1 : -1;
    add(side * R(P.flecks.x), R(P.flecks.u), P.flecks.top + rnd() * 0.04, R(P.flecks.r), P.flecks.flow, 3);
  }
  // drawn back to front from where the camera rides (about 3 m back, 1.1 m up), so the nearer lumps cover the further ones
  const cam = [0, 1.12, -3.0];
  lumps.sort((a, b) => Math.hypot(b.x - cam[0], b.h - cam[1], b.u - cam[2]) - Math.hypot(a.x - cam[0], a.h - cam[1], a.u - cam[2]));
  const n = lumps.length, quad = new THREE.PlaneGeometry(2, 2), g = new THREE.InstancedBufferGeometry();
  g.index = quad.index; g.setAttribute('position', quad.attributes.position); g.setAttribute('uv', quad.attributes.uv);
  const aPos = new Float32Array(n * 4), aMove = new Float32Array(n * 4), aLook = new Float32Array(n * 4);
  lumps.forEach((o, i) => { aPos.set([o.x, o.h, o.u, o.r], i * 4); aMove.set([o.ph, o.sp, o.amp, o.zone], i * 4); aLook.set([o.kind, o.tint, o.flow, o.span], i * 4); });
  g.setAttribute('aPos', new THREE.InstancedBufferAttribute(aPos, 4)); g.setAttribute('aMove', new THREE.InstancedBufferAttribute(aMove, 4));
  g.setAttribute('aLook', new THREE.InstancedBufferAttribute(aLook, 4)); g.instanceCount = n;
  const u = { uTime: time, uFade: { value: 0 }, uC: { value: new THREE.Vector3() }, uR: { value: new THREE.Vector3(1, 0, 0) }, uU: { value: new THREE.Vector3(0, 1, 0) },
    uT: { value: new THREE.Vector3(0, 0, 1) }, uLat: { value: 0 }, uLand: { value: 0 }, uAir: { value: 0 },
    uWhite: { value: new THREE.Color(...P.white) }, uLilac: { value: new THREE.Color(...P.lilac) }, uCyan: { value: new THREE.Color(...P.cyan) },
    uFilm: { value: new THREE.Color(...P.film) } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: FOAM_VERTEX, fragmentShader: FOAM_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'r7FoamBank'; mesh.frustumCulled = false; mesh.renderOrder = 6; mesh.visible = false;
  scene.add(mesh);
  updaters.push(() => {
    mesh.visible = frame.k > 0.01; if (!mesh.visible) return;
    const M = motion;
    u.uFade.value = frame.k; u.uC.value.copy(frame.C); u.uR.value.copy(frame.F.R); u.uU.value.copy(frame.F.U); u.uT.value.copy(frame.F.T);
    u.uLat.value = THREE.MathUtils.clamp(M.lat, -6, 6); u.uLand.value = M.landing; u.uAir.value = frame.air;
  });
  return { lumps: n, triangles: n * 2, drawCalls: 1 };
}
const FOAM_VERTEX = /* glsl */ `
attribute vec4 aPos, aMove, aLook;   // x, h, u, radius | phase, churn speed, churn size, zone | kind, tint, flow, span
uniform vec3 uC, uR, uU, uT; uniform float uTime, uLat, uLand, uAir, uFade;
varying vec2 vUv; varying float vKind, vTint, vA, vLow;
void main() {
  float x = aPos.x, h = aPos.y, u = aPos.z, r = aPos.w, ph = aMove.x, sp = aMove.y, amp = aMove.z, zone = aMove.w;
  // the water streams past: each lump slides back toward the camera and is reborn in front (it grows in and shrinks away)
  float life = fract(uTime * aLook.z / aLook.w + ph * 0.159);
  float env = smoothstep(0.0, 0.25, life) * (1.0 - smoothstep(0.7, 1.0, life));
  float seen = smoothstep(0.0, 0.1, life) * (1.0 - smoothstep(0.86, 1.0, life));   // fully faded where it jumps back
  u += (0.5 - life) * aLook.w;
  // churning: every lump rolls on its own small loop and breathes
  float t = uTime * sp * 2.2 + ph;
  x += sin(t) * amp; u += cos(t * 0.8) * amp * 0.7; h += (0.5 + 0.5 * sin(t * 1.3 + 1.7)) * amp;
  r *= (0.5 + 0.5 * env) * (1.0 + 0.08 * sin(t * 1.7));
  // swerve: the side it moves toward piles up higher, the other side drops; the bank lags behind the move a little
  float side = x >= 0.0 ? 1.0 : -1.0;
  h *= 1.0 + clamp(side * uLat * ${R7_WATER.foam.swerve.toFixed(3)}, -0.4, 0.7);
  x -= uLat * 0.035;
  // landing: thrown out in a ring and up
  float d = length(vec2(x, u)); vec2 dir = d > 0.01 ? vec2(x, u) / d : vec2(0.0, -1.0);
  float ringK = 1.0 - smoothstep(0.2, 1.4, d);
  x += dir.x * uLand * ${R7_WATER.foam.landing[0].toFixed(3)} * ringK; u += dir.y * uLand * ${R7_WATER.foam.landing[0].toFixed(3)} * ringK;
  h += uLand * ${R7_WATER.foam.landing[1].toFixed(3)} * ringK;
  // in the air: the pile round the body slumps back onto the water and thins (the foam stays, lower and smaller)
  float slump = uAir * ${R7_WATER.foam.air.toFixed(3)} * (zone < 1.5 ? 1.0 : 0.5);
  h = mix(h, min(h, r * 0.3), slump); r *= 1.0 - uAir * 0.15;
  vec3 c = uC + uR * x + uU * h + uT * u;
  // a camera-facing card, pulled toward the camera so the lump's front (not its middle) meets the water and the body
  c += normalize(cameraPosition - c) * r * 0.6;
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vUv = uv; vKind = aLook.x; vTint = aLook.y; vLow = 1.0 - smoothstep(0.0, 0.32, h);
  vA = uFade * seen * (1.0 - uAir * 0.15);
  gl_Position = projectionMatrix * viewMatrix * vec4(c + (right * position.x + up * position.y) * r, 1.0);
}
`;
// a glossy foam lump: white on its lit top (up and to the left), milky blue or lilac shading underneath and low in the
// pile, a bright lit edge and a crisp highlight, a narrow soft edge (no hard outline, no cloud-like blur); the rest are
// clear glossy bubbles: a saturated blue film, a white rim and a window glint (the approved foam's bubbles)
const FOAM_FRAGMENT = /* glsl */ `
uniform vec3 uWhite, uLilac, uCyan, uFilm;
varying vec2 vUv; varying float vKind, vTint, vA, vLow;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r2 = dot(p, p);
  if (r2 > 1.0) discard;
  float r = sqrt(r2), nz = sqrt(1.0 - r2); vec3 n = vec3(p, nz);
  vec3 Ld = normalize(vec3(-0.45, 0.7, 0.55));
  float key = dot(n, Ld);
  vec3 shade = mix(uLilac, uCyan, vTint);
  float spec = pow(max(dot(reflect(-Ld, n), vec3(0.0, 0.0, 1.0)), 0.0), 36.0);
  float glint = exp(-pow(length(p - vec2(-0.36, 0.42)) * 6.5, 2.0));
  float litEdge = smoothstep(0.72, 0.95, r) * smoothstep(-0.1, 0.6, dot(p / max(r, 1e-3), vec2(-0.55, 0.83)));
  float edge = 1.0 - smoothstep(0.88, 1.0, r);
  vec3 col; float a;
  if (vKind < 0.5) {
    col = mix(shade, uWhite, smoothstep(-0.3, 0.5, key));
    col = mix(col, shade * 0.85, vLow * 0.5);                                 // lower in the pile: in its own shade
    col = mix(col, uWhite * 1.1, litEdge * 0.7) + vec3(1.0) * (spec * 0.5 + glint * 0.35);
    a = edge;
  } else {
    float rim = smoothstep(0.62, 0.93, r);
    col = mix(uFilm, uWhite, rim * 0.8 + litEdge * 0.4) + vec3(1.0) * (spec * 0.6 + glint * 1.1);
    a = edge * (0.45 + 0.5 * rim + 0.6 * glint);
  }
  a = clamp(a, 0.0, 1.0) * vA;
  gl_FragColor = vec4(col * a, a);   // premultiplied
}
`;

// ---------------------------------------------------------------- round6's bow wave restyled as turquoise streak sheets
function streakSheets({ scene, updaters, motion, frame }) {
  const mesh = scene.getObjectByName('r6BowWave');
  if (!mesh || !mesh.material || !mesh.material.uniforms || !mesh.material.uniforms.uRad) return null;
  const P = R7_WATER.sheets, u = mesh.material.uniforms;
  u.uReach.value.set(P.reach[0], P.reach[1]).multiplyScalar(Math.PI / 180); u.uRad.value.set(P.radius[0], P.radius[1]);
  u.uH.value = P.height; u.uLean.value = P.lean; u.uBody.value.setRGB(...P.body); u.uDeep.value.setRGB(...P.deep); u.uAlpha.value = P.alpha;
  mesh.material = new THREE.ShaderMaterial({ uniforms: u, vertexShader: mesh.material.vertexShader, fragmentShader: SHEET_FRAGMENT, transparent: true,
    depthWrite: false, side: THREE.DoubleSide });
  mesh.renderOrder = 5;   // under the foam bank
  // its height: round6 lowers it with motion.lift, which also counts the waves; round7 only in a jump (after its updater)
  updaters.push(() => { if (mesh.visible) u.uAmp.value = (1 + Math.min(Math.abs(motion.lat) * 0.48, 1.5) + motion.landing * 0.9) * (1 - frame.air * 0.85); });
  return { restyled: 'r6BowWave', triangles: mesh.geometry.index ? mesh.geometry.index.count / 3 : 0 };
}
const SHEET_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uFade, uFlow, uAlpha; uniform vec3 uBody, uDeep;
varying vec2 vUv; varying float vSide; varying vec3 vW; varying vec3 vN;
void main() {
  float t = vUv.x, v = vUv.y;
  float n = bwFbm(vec2(t * 11.0 - uTime * uFlow * 1.3, v * 2.0 + vSide * 4.0));
  float edge = 0.6 + 0.34 * n;                                              // a ragged top broken into fingers of water
  if (v > edge) discard;
  // thin white streaks running along the sheet, back and up, flowing toward the camera
  float s = bwFbm(vec2(t * 2.4 - uTime * uFlow * 1.5 + v * 1.2, v * 6.0 + t * 3.0 + vSide * 7.0));
  float ridge = 1.0 - abs(2.0 * fract(s * 3.0) - 1.0);
  float streak = smoothstep(0.84, 0.97, ridge) * smoothstep(0.15, 0.55, v);
  // white flecks along the broken top (not a solid crest)
  float fleck = smoothstep(edge - 0.14, edge - 0.02, v) * smoothstep(0.5, 0.75, bwNoise(vec2(t * 46.0 - uTime * 3.0, v * 14.0 + vSide * 9.0)));
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (!gl_FrontFacing) N = -N;
  float fres = pow(1.0 - abs(dot(N, V)), 2.0);
  vec3 water = mix(uDeep, uBody, 0.2 + 0.8 * v) + vec3(0.1, 0.9, 1.0) * fres * 0.18;
  float w = clamp(streak * 0.85 + fleck * 0.85, 0.0, 1.0);
  vec3 col = mix(water, vec3(1.0), w);
  float ends = smoothstep(0.0, 0.1, t) * (1.0 - smoothstep(0.72, 1.0, t)) * smoothstep(0.0, 0.15, v + 0.04);
  float a = mix(0.48 + 0.3 * v, 0.95, w) * (1.0 - 0.45 * smoothstep(edge - 0.05, edge, v)) * uAlpha * ends * uFade;
  gl_FragColor = vec4(col, a);
}
`;

// ---------------------------------------------------------------- white spray specks thrown up beside the character
function spraySpecks({ scene, updaters, time, motion, frame }) {
  const P = R7_WATER.spray, n = P.count, rnd = mulberry7(0x5b7a), R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const aA = new Float32Array(n * 4), aB = new Float32Array(n * 4);
  for (let i = 0; i < n; i++) {
    // mostly thrown out to the sides, some back toward the camera, a few forward
    const side = i % 2 ? 1 : -1, pick = rnd();
    const phi = side * THREE.MathUtils.degToRad(pick < 0.75 ? R([45, 140]) : pick < 0.92 ? R([140, 180]) : R([10, 45]));
    const up = R(P.up) * (pick < 0.75 ? 1 : 0.6), life = 2 * up / 9 * (0.85 + rnd() * 0.25), streak = rnd() < P.streaks;
    aA.set([phi, 0.32 + rnd() * 0.25, R(P.out), up], i * 4);
    aB.set([rnd(), life, streak ? -R(P.streak) : R(P.size), R(P.back)], i * 4);   // a negative size: an upright streak
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('aA', new THREE.BufferAttribute(aA, 4)); g.setAttribute('aB', new THREE.BufferAttribute(aB, 4));
  const u = { uTime: time, uFade: { value: 0 }, uC: { value: new THREE.Vector3() }, uR: { value: new THREE.Vector3(1, 0, 0) }, uU: { value: new THREE.Vector3(0, 1, 0) },
    uT: { value: new THREE.Vector3(0, 0, 1) }, uLat: { value: 0 }, uLand: { value: 0 }, uAir: { value: 0 }, uScale: { value: P.scale }, uMaxPx: { value: P.maxPx } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: SPRAY_VERTEX, fragmentShader: SPRAY_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const pts = new THREE.Points(g, mat); pts.name = 'r7Spray'; pts.frustumCulled = false; pts.renderOrder = 8; pts.visible = false;
  scene.add(pts);
  updaters.push(() => {
    pts.visible = frame.k > 0.01; if (!pts.visible) return;
    u.uFade.value = frame.k; u.uC.value.copy(frame.C); u.uR.value.copy(frame.F.R); u.uU.value.copy(frame.F.U); u.uT.value.copy(frame.F.T);
    u.uLat.value = THREE.MathUtils.clamp(motion.lat, -6, 6); u.uLand.value = motion.landing; u.uAir.value = frame.air;
  });
  return { points: n, drawCalls: 1 };
}
const SPRAY_VERTEX = /* glsl */ `
attribute vec4 aA, aB;   // angle from straight ahead, start radius, outward speed, upward speed | phase, life, size, carried back
uniform vec3 uC, uR, uU, uT; uniform float uTime, uLat, uLand, uAir, uFade, uScale, uMaxPx;
varying float vA, vStreak, vSlant;
void main() {
  float life = aB.y, k = fract(uTime / life + aB.x), tau = k * life;
  vec2 dir = vec2(sin(aA.x), cos(aA.x));
  float side = dir.x >= 0.0 ? 1.0 : -1.0;
  float boost = 1.0 + uLand * 0.9 + clamp(side * uLat * 0.15, -0.4, 0.7);
  float rad = aA.y + aA.z * boost * tau;
  float x = dir.x * rad, u = dir.y * rad - aB.w * tau;
  float h = 0.06 + aA.w * boost * tau - 4.5 * tau * tau;
  vA = smoothstep(0.0, 0.06, k) * (1.0 - smoothstep(0.75, 1.0, k)) * step(-0.03, h) * (1.0 - 0.75 * uAir) * uFade;
  vStreak = aB.z < 0.0 ? 1.0 : 0.0;
  vSlant = side * 0.45 * (1.0 - 2.0 * k);   // leaning outward on the way up, back in as it falls (screen-left is +x)
  vec4 mv = viewMatrix * vec4(uC + uR * x + uU * h + uT * u, 1.0);
  gl_PointSize = min(abs(aB.z) * uScale / max(-mv.z, 0.3), uMaxPx * (aB.z < 0.0 ? 1.0 : 0.4));   // specks stay small
  gl_Position = projectionMatrix * mv;
}
`;
const SPRAY_FRAGMENT = /* glsl */ `
varying float vA, vStreak, vSlant;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  if (vA <= 0.0) discard;
  float a;
  if (vStreak > 0.5) {   // an upright white streak, thin and tapering at both ends
    float x = p.x + vSlant * p.y;
    a = exp(-x * x / 0.035) * (1.0 - smoothstep(0.35, 1.0, abs(p.y)));
  } else {
    float r2 = dot(p, p); if (r2 > 1.0) discard;
    a = 1.0 - smoothstep(0.45, 1.0, r2);
  }
  a *= vA;
  vec3 col = mix(vec3(1.05), vec3(0.75, 0.93, 1.0), smoothstep(0.3, 0.9, dot(p, p)) * (1.0 - vStreak));
  gl_FragColor = vec4(col * a, a);
}
`;

// ---------------------------------------------------------------- glossy soap bubbles
// p: the point on the bubble's disc (x right and y up on the screen, |p| <= 1); premultiplied colour and alpha out
const BUBBLE_GLSL = /* glsl */ `
vec4 r7Bubble(vec2 p, float ph, float t, float body) {
  float r = length(p), nz = sqrt(max(0.0, 1.0 - r * r)), ang = atan(p.y, p.x);
  // a soap film swirling round the bubble in soft pink, lilac and cyan (no yellow-green: the approved film is pastel),
  // strongest toward the rim
  float film = (1.0 - nz) * 1.5 + 0.3 * sin(ang * 2.0 + t * 0.5 + ph * 6.0) + 0.15 * sin(ang * 3.0 - t * 0.3) + ph;
  float fk = 0.5 + 0.5 * sin(film * 6.2832);
  vec3 tint = mix(mix(vec3(1.0, 0.55, 0.92), vec3(0.72, 0.6, 1.0), smoothstep(0.0, 0.5, fk)), vec3(0.45, 0.92, 1.0), smoothstep(0.5, 1.0, fk));
  float band = smoothstep(0.45, 0.8, r) * (1.0 - smoothstep(0.84, 0.93, r));       // the coloured film inside the rim
  float rim = smoothstep(0.76, 0.9, r) * (1.0 - smoothstep(0.96, 1.0, r));         // a thick bright rim
  float glow = smoothstep(0.35, 0.88, r) * (1.0 - smoothstep(0.96, 1.0, r));       // the milky glow inward from the rim
  float dA = ang - 2.3; dA = mod(dA + 3.14159, 6.28318) - 3.14159;
  float cres = exp(-dA * dA / 0.35) * exp(-pow((r - 0.68) / 0.09, 2.0));            // a white crescent up and to the left
  float spot = exp(-pow(length(p - vec2(-0.32, 0.38)) * 6.0, 2.0));                 // the window glint
  float spot2 = exp(-pow(length(p - vec2(0.45, -0.5)) * 9.0, 2.0)) * 0.6;
  vec3 col = vec3(0.86, 0.88, 1.0) * body + tint * band * 0.34 + vec3(0.9, 0.9, 1.0) * glow * 0.22
           + mix(vec3(1.0, 0.98, 1.0), tint, 0.15) * rim * 1.05 + vec3(1.0) * (cres * 0.85 + spot * 1.2 + spot2 * 0.7);
  float a = clamp(body + band * 0.26 + glow * 0.18 + rim * 0.9 + cres * 0.7 + spot * 0.9 + spot2 * 0.55, 0.0, 1.0);
  return vec4(col, a);
}
`;
function heroBubbles({ scene, updaters, time, mascot, frame, TS }) {
  const P = R7_WATER.bubbles, nh = P.hero.length, n = nh + P.mid, rnd = mulberry7(0xb0b7), R = (a) => a[0] + rnd() * (a[1] - a[0]);
  const quad = new THREE.PlaneGeometry(2, 2), g = new THREE.InstancedBufferGeometry();
  g.index = quad.index; g.setAttribute('position', quad.attributes.position); g.setAttribute('uv', quad.attributes.uv);
  const inst = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4).setUsage(THREE.DynamicDrawUsage), ph = new Float32Array(n);
  for (let i = 0; i < n; i++) ph[i] = rnd();
  g.setAttribute('aInst', inst); g.setAttribute('aPh', new THREE.InstancedBufferAttribute(ph, 1)); g.instanceCount = n;
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time }, vertexShader: BUB_VERTEX, fragmentShader: BUB_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'r7Bubbles'; mesh.frustumCulled = false; mesh.renderOrder = 7; mesh.visible = false;
  scene.add(mesh);
  // each bubble lives for a stretch of the ride; the hero ones are at their approved places at the hero moment (0.4 of
  // their life), later lives (and all the mid-size ones) at places round the edges of the view, never over the character
  const life = []; for (let i = 0; i < n; i++) life.push({ len: R(P.len), f0: i < nh ? 0.4 : rnd() });
  const spots = new Map();
  const spotFor = (i, c) => {
    const key = i * 4096 + (c & 4095);
    let s = spots.get(key);
    if (s) return s;
    if (i < nh && c === 0) { const [x, h, u, r] = P.hero[i]; s = { x, h, u, r }; }
    else {
      const q = mulberry7(0x9e37 + i * 7919 + c * 104729), side = q() < 0.5 ? -1 : 1, u = -1.4 + q() * 6.5, half = 0.37 * (3 + u);
      const up = q() < 0.35;   // some high up in the drum, the rest down the sides
      s = up ? { x: (q() * 2 - 1) * 0.7, h: 1.5 + q() * 1.0, u: 1.0 + q() * 5.0 } : { x: side * half * (0.55 + q() * 0.45), h: 0.45 + q() * 1.6, u };
      s.r = (i < nh ? 0.08 + q() * 0.07 : P.midR[0] + Math.pow(q(), 1.5) * (P.midR[1] - P.midR[0])) * (s.u < 0 ? 0.8 : 1.0 + s.u * 0.08);
      if (spots.size > 512) spots.clear();
    }
    spots.set(key, s); return s;
  };
  const v = new THREE.Vector3(), A = inst.array;
  updaters.push(() => {
    mesh.visible = frame.k > 0.01; if (!mesh.visible) return;
    const s = mascot.z - (TS + P.heroAt);
    for (let i = 0; i < n; i++) {
      const b = life[i], q = s / b.len + b.f0, c = Math.floor(q), f = q - c, sp = spotFor(i, c), df = (f - b.f0) * b.len;
      v.copy(frame.C).addScaledVector(frame.F.R, sp.x + Math.sign(sp.x) * df * 0.006).addScaledVector(frame.F.U, sp.h + df * P.rise).addScaledVector(frame.F.T, sp.u - df * P.back);
      const grow = THREE.MathUtils.smoothstep(f, 0.0, 0.08) * (1 - THREE.MathUtils.smoothstep(f, 0.93, 1.0));
      A[i * 4] = v.x; A[i * 4 + 1] = v.y; A[i * 4 + 2] = v.z; A[i * 4 + 3] = sp.r * grow * frame.k;
    }
    inst.needsUpdate = true;
  });
  return { hero: nh, mid: P.mid, drawCalls: 1, triangles: n * 2 };
}
const BUB_VERTEX = /* glsl */ `
attribute vec4 aInst; attribute float aPh; uniform float uTime;
varying vec2 vUv; varying float vPh;
void main() {
  float wob = 1.0 + 0.03 * sin(uTime * 2.1 + aPh * 20.0);
  vec3 c = aInst.xyz + vec3(0.0, sin(uTime * 0.9 + aPh * 9.0) * aInst.w * 0.12, 0.0);
  vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]), up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
  vUv = uv; vPh = aPh;
  gl_Position = projectionMatrix * viewMatrix * vec4(c + (right * position.x * wob + up * position.y / wob) * aInst.w, 1.0);
}
`;
const BUB_FRAGMENT = /* glsl */ `
uniform float uTime; varying vec2 vUv; varying float vPh;
${BUBBLE_GLSL}
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  if (dot(p, p) > 1.0) discard;
  gl_FragColor = r7Bubble(p, vPh, uTime, 0.12);
}
`;
// round3's stream bubbles and the drum's own soap bubbles (tunnel_s4.js; both instanced spheres with the same soap vertex
// shader): the same glossy look, the disc point taken from the sphere's normal on screen
// (swapped in only while round7's effects are ramped in, as the game's bubbles below: the drum's bubbles can show through
// the portal at Tap to Start, which stays as it was)
function restyleStreamBubbles({ scene, updaters, frame }) {
  const done = [], swaps = [];
  for (const name of ['r3Bubbles', 's4Bubbles']) {
    const mesh = scene.getObjectByName(name);
    if (!mesh || !mesh.material || !mesh.material.vertexShader || !mesh.material.vertexShader.includes('varying float vFade')) continue;
    const orig = mesh.material;
    const r7 = new THREE.ShaderMaterial({ uniforms: orig.uniforms, vertexShader: orig.vertexShader, fragmentShader: STREAM_FRAGMENT, transparent: true, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
    swaps.push([mesh, orig, r7]); done.push(name);
  }
  updaters.push(() => { for (const [mesh, orig, r7] of swaps) mesh.material = frame.k > 0.01 ? r7 : orig; });
  return { restyled: done };
}
// the game's own ambient bubbles (game.js buildBubbles, an unnamed mesh with the shaders.js bubble shader; with the
// opening on it only draws the bubbles inside the drum): the same glossy look, but only while round7's effects are
// ramped in (from fadeIn on), so Tap to Start and the opening keep the original material and stay exactly as they were
function restyleGameBubbles({ scene, updaters, frame }) {
  let mesh = null;
  scene.traverse((o) => { if (!mesh && o.isMesh && o.material && o.material.vertexShader && o.material.vertexShader.includes('attribute float phase;') && o.geometry.attributes.inst) mesh = o; });
  if (!mesh || !mesh.material.uniforms || !mesh.material.uniforms.uTime) return null;
  const orig = mesh.material;
  const r7 = new THREE.ShaderMaterial({ uniforms: orig.uniforms, vertexShader: orig.vertexShader, fragmentShader: GAME_BUBBLE_FRAGMENT, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor });
  updaters.push(() => { mesh.material = frame.k > 0.01 ? r7 : orig; });
  return { restyled: 'game bubbles (in the drum)', instances: mesh.geometry.instanceCount };
}
const GAME_BUBBLE_FRAGMENT = /* glsl */ `
uniform float uTime; varying vec2 vUv; varying float vPhase;
${BUBBLE_GLSL}
void main() {
  vec2 p = vUv * 2.0 - 1.0;
  if (dot(p, p) > 1.0) discard;
  gl_FragColor = r7Bubble(p, vPhase * 0.159, uTime, 0.1);
}
`;
const STREAM_FRAGMENT = /* glsl */ `
uniform float uTime;
varying vec3 vN; varying vec3 vW; varying float vPhase; varying float vFade;
${BUBBLE_GLSL}
void main() {
  if (vFade <= 0.0) discard;
  vec3 N = normalize(vN), V = normalize(cameraPosition - vW);
  float ndv = clamp(dot(N, V), 0.0, 1.0), r = sqrt(1.0 - ndv * ndv);
  vec3 Nv = (viewMatrix * vec4(N, 0.0)).xyz;
  vec2 p = normalize(Nv.xy + 1e-5) * r;
  gl_FragColor = r7Bubble(p, vPhase * 0.159, uTime, 0.09) * vFade;
}
`;

function mulberry7(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
