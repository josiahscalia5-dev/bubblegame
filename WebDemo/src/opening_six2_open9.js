// open9 (9 November 2026, session d742a298): THE WASHER SPIN AND THE DIRECT CONNECTION INTO THE EXISTING SCREEN 6 (the user's mandatory corrections,
// Design/ReferencePacks/2026-11-09_Approved_References_zip_from_user_session_d742a298/). A CANDIDATE behind the switch `open9` (with six, six2, s56
// and seq7); without it the opening is exactly the previous build. Nothing here touches Screen 6: no tunnel is built, the live game is what shows.
//
// What the frames showed before (real 5.0 - 10.5 s): his face upside down in a close-up with lid lines across his eyes; a flat blue streak as the
// drum's water, then a flat wavy band across his mouth; the spin 0.4 s long and seen small from across the room; then a COPY of the tunnel
// (opening_six2_tunnel.js) cross-faded into the live game, whose camera started inside his fur.
//
// What this does:
//   1. THE WATER IS A REAL 3D BODY IN THE DRUM (one displaced mesh round the drum's axis, opaque, shaded per pixel): a pool with rolling waves that
//      he floats in (foam where it meets him, the drum wall and the glass; a cross-section against the door glass, so it reads as a volume);
//      as the drum turns the pool is dragged up the rising side, tips over and is flung into a spiralling ring that lines the drum (cobalt
//      troughs, azure bodies, turquoise lit faces, white crests and streaks, violet-pink reflections of the drum's lights), with foam lumps
//      riding it, bubbles and spray. Never a sheet across his face: the pool stays under his mouth, the ring is hollow where he is.
//   2. HE TUMBLES AS ONE BODY: his face is fixed to his head (his lids no longer draw as lines when his eyes are open); he keeps his scale from
//      the basket to the drum; he plops in upright (no upside-down close-up), floats, rocks with the slosh, then rolls with the drum about its
//      own axis (the axis of a front loader: the view axis, so his face stays toward the player) with one smooth acceleration and deceleration,
//      surprised, then delighted. The towels tumble round him.
//   3. THE CAMERA pushes in on the porthole for the wash (approved 04) and closer for the spin, then dives through the glass after him.
//   4. THE PASSAGE: the same water ring runs on past the drum's back (which opens) as a tube of spiralling water with a light at its end; the
//      camera follows him down it. At its end the light opens onto THE LIVE GAME ITSELF: the opening's canvas is transparent there, so what
//      appears in the mouth of the passage is the existing Screen 6 (s56 and whatever switches are on), already running; its own camera flies
//      in from behind him to its normal framing (s56_tunnel.js glide) while the passage's mouth sweeps past the frame. No copy of the tunnel
//      is shown (opening_six2_tunnel.js's replica stays hidden) and no cross-fade.
// Looks and staging only: private generators (never the game's seeded Math.random); gameplay is untouched.
import * as THREE from 'three';
import { SEQ7 } from './opening_six2_girl12.js';
import { WASH8 } from './opening_six2_wash8.js';
import { SIX2T } from './opening_six2_tunnel.js';

const LIST = typeof window === 'undefined' ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const OPEN9_ON = ['six', 'six2', 's56', 'seq7', 'open9'].every((k) => LIST.includes(k));

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sm = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const sm5 = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * t * (t * (t * 6 - 15) + 10); };   // (zero speed and acceleration at both ends)
const V = (a, b, c) => new THREE.Vector3(a, b, c);

// every number (window.__bwOpen9 in the browser). Times are STORY seconds; real seconds after START = story + `real` once the wash has begun.
export const OPEN9 = {
  real: 1.35,
  T: { pool: [3.3, 4.3], fill: [6.45, 7.05], ring: [7.6, 8.1], roll: [7.4, 9.1], back: [8.02, 8.42], room: 8.1, dive: 8.2, glass: 8.75, open: 10.0, end: 10.72 },
  level: { land: -0.215, wash: -0.062 },            // the pool's surface below the drum's axis (m)
  slosh: { amp: 0.11, rate: 2.5, drag: 0.85 },      // the pool's rocking; how far the turning drum drags it up the side (rad)
  drum: { from: 6.5, w0: 0.7, w1: 13.0, until: 8.15 },
  ring: { thick: 0.105 },
  hero: { scale: 0.62, float: 0.056, d: 0.4, orbit: 0.095, turns: 2, ahead: 1.5, aheadEnd: 1.42 },
  cam: { wash: [0.3, 0.78, 2.42], washAt: [0.3, 0.612, 0.27], spin: [0.3, 0.675, 1.4], spinAt: [0.3, 0.618, 0.27], speed: 3.4, fov: 60, tilt: 0.126 },
  tube: { d0: 0.055, back: 1.02, end: 6.2, r: 0.42, mouth: 0.22 },
  towel: { blue: [-0.15, 0.62], yellow: [0.16, 0.5], orbit: 0.2 },   // [across the pool m, depth m] while they float
  flash: { at: -0.16, fall: 0.5, size: 0.42 },
  centre: 0.61,                                     // where the passage's end sits in the frame (0 top .. 1 bottom): the live game's hero at the fly-in's start
};
if (OPEN9_ON) {
  if (typeof window !== 'undefined') window.__bwOpen9 = OPEN9;
  // the earlier candidates' numbers this pass replaces (they are read at run time)
  SEQ7.tumble.roll = 0; SEQ7.tumble.pitch = 0.16;                           // he plops into the drum upright (no upside-down close-up)
  WASH8.fill = [99, 100]; WASH8.front.hide = -1; WASH8.back.hide = -1;         // the flat wash layers make way for the 3D water
  Object.assign(WASH8.drum, OPEN9.drum);
  Object.assign(SIX2T.back, { from: 99, holes: [7.7, 8.05] });                // the drum's back is opened from here (update below)
}

const NOISE = /* glsl */ `
float o9h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float o9n(vec2 p) { vec2 i = floor(p), q = fract(p); q = q * q * (3.0 - 2.0 * q);
  return mix(mix(o9h(i), o9h(i + vec2(1.0, 0.0)), q.x), mix(o9h(i + vec2(0.0, 1.0)), o9h(i + vec2(1.0, 1.0)), q.x), q.y); }
float o9f(vec2 p) { return 0.5 * o9n(p) + 0.3 * o9n(p * 2.03 + vec2(1.7, 9.2)) + 0.2 * o9n(p * 4.1 + vec2(5.3, 2.8)); }
`;
// the water's surface round the drum's axis (the same function in the vertex shader and, below, in JS for what floats on it)
const SURF = /* glsl */ `
uniform float uTime, uLevel, uPhi, uSpin, uRot, uRingT, uAmp, uBack, uEnd, uMouth, uPass; uniform vec3 uAxis;
float o9Rd(float d) { return mix(0.28, 0.42, smoothstep(0.0, 0.7, d)) - 0.003; }
vec3 o9S(float th, float d, out float thick, out float wave) {
  float R = o9Rd(d), t = uTime;
  float a = th - uPhi, ca = cos(a), xa = (-uLevel) * tan(clamp(a, -1.4, 1.4));
  float w = 0.55 * sin(xa * 17.0 - uRot * 1.3 - t * 2.4 + d * 5.0) + 0.3 * sin(xa * 31.0 + t * 3.7 - d * 9.0 + 1.3) + 0.15 * sin(d * 23.0 - t * 4.6 + xa * 9.0);
  float hh = max(0.03, -uLevel - w * uAmp);
  float rp = ca > 0.08 ? min(hh / ca, R) : R;
  float sp = 0.6 * sin(3.0 * (th - uRot) + d * 5.5) + 0.25 * sin(5.0 * (th - uRot * 1.3) - d * 8.0 + 1.0) + 0.15 * sin(2.0 * th - uRot * 2.0 + d * 13.0);
  float thR = uRingT * smoothstep(0.02, 0.5, d) * (1.0 + 0.45 * sp) + 0.012;
  float r = mix(rp, R - thR, uSpin);
  wave = mix(w, sp, uSpin); thick = R - r;
  float k = smoothstep(uBack - 0.1, uBack + 0.55, d) * uPass;
  float rz = ${OPEN9.tube.r.toFixed(3)} + uMouth * smoothstep(uEnd - 1.3, uEnd, d) + 0.035 * sp + 0.02 * sin(d * 2.3 + t);
  r = mix(r, rz, k); thick = mix(thick, 0.2, k);
  return vec3(uAxis.x + r * sin(th), uAxis.y - r * cos(th), uAxis.z - d);
}`;

/** ctx: the opening's context (scene, camera, renderer, washer, vortex, six, splash, OPENING3D, bez ...). Returns the hooks opening_six2.js calls. */
export function installOpen9(ctx) {
  const { scene, camera, renderer, vortex, six, splash, OPENING3D } = ctx, P = OPENING3D.porthole, O = OPEN9, T = O.T;
  const SG = -1;   // the drum turns clockwise seen from the door: its floor moves to screen-left, so the water climbs the left side
  let seed = 0x9e37; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };   // private

  // ------------------------------------------------ the water: one mesh round the axis, from just behind the glass to the passage's end
  const NU = 132, rows = [];
  rows.push([O.tube.d0, 1]);   // the lip: the cross-section against the glass (from the surface out to the drum's wall)
  for (let j = 0; j <= 44; j++) rows.push([O.tube.d0 + (O.tube.back - O.tube.d0) * (j / 44), 0]);
  for (let j = 1; j <= 84; j++) rows.push([O.tube.back + (O.tube.end - O.tube.back) * (j / 84), 0]);
  const aP = [], idx = [];
  for (const [d, lip] of rows) for (let i = 0; i <= NU; i++) aP.push(-1 + 2 * i / NU, d, lip);
  for (let j = 0; j < rows.length - 1; j++) for (let i = 0; i < NU; i++) { const a = j * (NU + 1) + i, b = a + NU + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(aP.length), 3)); geo.setAttribute('aP', new THREE.Float32BufferAttribute(aP, 3)); geo.setIndex(idx);
  const U = { uTime: { value: 0 }, uLevel: { value: -0.33 }, uPhi: { value: 0 }, uSpin: { value: 0 }, uRot: { value: 0 }, uRingT: { value: O.ring.thick }, uAmp: { value: 0.012 }, uBack: { value: O.tube.back },
    uEnd: { value: O.tube.end }, uMouth: { value: O.tube.mouth }, uPass: { value: 0 }, uAxis: { value: P.clone() }, uHero: { value: V(0, 9, 0) }, uGlow: { value: 0 }, uLit: { value: 0 } };
  const water = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: U, side: THREE.DoubleSide,
    vertexShader: /* glsl */ `attribute vec3 aP; ${SURF}
      varying vec3 vW, vN; varying float vTh, vD, vThick, vWave, vLip;
      void main() {
        float th = aP.x * 3.14159265, d = aP.y, tk, wv, t2, w2;
        vec3 p = o9S(th, d, tk, wv), p1 = o9S(th + 0.02, d, t2, w2), p2 = o9S(th, d + 0.02, t2, w2);
        vN = normalize(cross(p1 - p, p2 - p));
        if (aP.z > 0.5) { float R = o9Rd(d) + 0.003; p = vec3(uAxis.x + R * sin(th), uAxis.y - R * cos(th), uAxis.z - d); }
        vW = p; vTh = th; vD = d; vThick = tk; vWave = wv; vLip = aP.z;
        gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: /* glsl */ `uniform float uTime, uSpin, uRot, uEnd, uGlow, uPass, uBack, uLit; uniform vec3 uHero;
      varying vec3 vW, vN; varying float vTh, vD, vThick, vWave, vLip;
      ${NOISE}
      void main() {
        float t = uTime, lip = step(0.004, vLip);
        float fnE = o9f(vec2(vTh * 9.0, vD * 20.0) + t * 0.6);
        if (vThick < 0.004 + 0.004 * fnE) discard;
        vec3 v = normalize(cameraPosition - vW), n = normalize(vN);
        if (lip > 0.5) n = vec3(0.0, 0.0, 1.0);
        if (dot(n, v) < 0.0) n = -n;
        float pass = smoothstep(uBack - 0.1, uBack + 0.55, vD) * uPass, sp = max(uSpin, pass);
        // the flow's coordinates, seamless round the axis
        vec2 sw = vec2(cos(vTh - uRot * 0.7), sin(vTh - uRot * 0.7));
        float n1 = o9f(sw * 2.2 + vec2(vD * 2.3 - t * 0.5, vD * 1.7));
        float n2 = o9f(sw * 5.5 + vec2(-vD * 4.0, vD * 5.5 + t * 0.8));
        float rib = sin(3.0 * (vTh - uRot) + vD * 5.5 + n1 * 5.0 - t * 1.2);
        float flow = o9f(vec2(vW.x * 9.0 - uRot * 1.2 - t * 0.6, vD * 9.0 + t * 0.3)) * 2.0 - 1.0;
        float pat = mix(flow * 1.3 + vWave * 0.5, rib, sp);
        vec3 L1 = normalize(vec3(-0.25, 0.85, 0.5));
        float lit = clamp(dot(n, L1) * 0.5 + 0.5, 0.0, 1.0), depth = smoothstep(0.0, 0.14, vThick);
        vec3 deep = vec3(0.0, 0.10, 0.62), mid = vec3(0.03, 0.42, 1.0), light = vec3(0.2, 0.86, 1.06);
        vec3 c = mix(mid, deep, depth * 0.7);
        c = mix(c, deep, smoothstep(0.1, -0.75, pat) * 0.6);
        c = mix(c, light, smoothstep(0.3, 0.95, pat) * 0.62 * (0.4 + 0.6 * lit));
        c *= 0.8 + 0.4 * lit;
        // the drum's violet-pink lights in the water: at grazing angles, and as drifting glints
        float fr = pow(1.0 - clamp(dot(n, v), 0.0, 1.0), 4.0);
        c += vec3(0.40, 0.2, 0.9) * fr * (0.14 + 0.2 * uLit) * (1.0 - 0.6 * sp);
        c += vec3(0.78, 0.30, 0.82) * smoothstep(0.62, 0.92, n2) * (0.16 + 0.2 * uLit);
        vec3 h = normalize(L1 + v); c += vec3(1.0, 1.0, 1.05) * pow(max(dot(n, h), 0.0), 64.0) * 0.85;
        // foam: crests, where the water thins against the drum, round him, spiral streaks, small bubbles
        float fn = o9f(vec2(vW.x * 30.0 + t * 0.9, vD * 30.0 - t * 0.7) + sw * 3.0);
        float crest = smoothstep(0.5, 1.0, vWave + (fn - 0.5) * 0.6) * (1.0 - 0.45 * sp);
        float edge = smoothstep(0.018 + 0.02 * fn, 0.006, vThick) * (1.0 - pass);
        vec2 hq = vec2(vW.x - uHero.x, vD - uHero.y); float hr = length(hq);
        float ring = smoothstep(0.045, 0.0, abs(hr - 0.118 - 0.014 * sin(atan(hq.y, hq.x) * 5.0 + t * 5.0))) * smoothstep(0.28, 0.6, fn) * uHero.z;
        float streak = smoothstep(0.88, 0.99, rib * 0.5 + 0.5) * smoothstep(0.36, 0.7, n2) * sp;
        float bub = smoothstep(0.82, 0.9, o9n(vec2(vW.x, vD) * 46.0 + sw * 9.0 + t * 0.4)) * (1.0 - 0.75 * pass);
        float foam = clamp(crest * 0.92 + edge + ring + streak * 0.85 + bub * (0.25 + 0.6 * crest), 0.0, 1.0);
        c = mix(c, vec3(1.06, 1.1, 1.16), foam);
        // against the glass: the water's cross-section, darker with depth, light shafts and bubbles in it, foam along its top
        if (lip > 0.5) {
          float dn = smoothstep(0.0, 1.0, vLip);
          vec3 cl = mix(vec3(0.05, 0.52, 1.0), vec3(0.0, 0.14, 0.7), smoothstep(0.0, 0.75, dn));
          cl = mix(cl, vec3(0.22, 0.86, 1.04), smoothstep(0.55, 0.9, o9f(vec2(vW.x * 11.0 - uRot * 1.5 + t * 0.4, vW.y * 16.0 - t * 0.9))) * 0.5);
          cl += vec3(0.46, 0.14, 0.62) * smoothstep(0.6, 0.9, o9f(vec2(vW.x * 5.0 + 7.0, vW.y * 6.0 - t * 0.8))) * (0.22 + 0.2 * uLit);
          float lb = smoothstep(0.82, 0.9, o9n(vW.xy * 58.0 + vec2(0.0, -t * 1.6)));
          float top = smoothstep(0.16 + 0.12 * fn, 0.0, dn);
          c = mix(cl, vec3(1.06, 1.1, 1.16), clamp(top + lb * 0.7, 0.0, 1.0));
        }
        // the light at the passage's end
        c = mix(c, vec3(0.9, 0.95, 1.14), smoothstep(uEnd - 3.4, uEnd + 0.4, vD) * uGlow * 0.85);
        gl_FragColor = vec4(c, 1.0);
      }` }));
  water.name = 'open9Water'; water.frustumCulled = false; water.visible = false; scene.add(water);

  // the same surface in JS: the radius of the water's surface at (angle from straight down, depth)
  const Rd = (d) => 0.28 + 0.14 * sm(0, 0.7, d) - 0.003;
  const surfR = (th, d) => {
    const R = Rd(d), t = U.uTime.value, lv = U.uLevel.value, rot = U.uRot.value, a = th - U.uPhi.value, ca = Math.cos(a), xa = -lv * Math.tan(Math.max(-1.4, Math.min(1.4, a)));
    const w = 0.55 * Math.sin(xa * 17 - rot * 1.3 - t * 2.4 + d * 5) + 0.3 * Math.sin(xa * 31 + t * 3.7 - d * 9 + 1.3) + 0.15 * Math.sin(d * 23 - t * 4.6 + xa * 9);
    const rp = ca > 0.08 ? Math.min(Math.max(0.03, -lv - w * U.uAmp.value) / ca, R) : R;
    const sp = 0.6 * Math.sin(3 * (th - rot) + d * 5.5) + 0.25 * Math.sin(5 * (th - rot * 1.3) - d * 8 + 1) + 0.15 * Math.sin(2 * th - rot * 2 + d * 13);
    const thR = U.uRingT.value * sm(0.02, 0.5, d) * (1 + 0.45 * sp) + 0.012;
    return rp + (R - thR - rp) * U.uSpin.value;
  };
  const polar = (th, r, d) => V(P.x + r * Math.sin(th), P.y - r * Math.cos(th), P.z - d);

  // ------------------------------------------------ foam lumps riding the water, soap bubbles in the air of the drum and the passage
  const NF = 54, foamM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.02, 1.07, 1.14) });
  const foam = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 10, 8), foamM, NF); foam.name = 'open9Foam'; foam.frustumCulled = false; foam.visible = false; scene.add(foam);
  const fo = []; for (let i = 0; i < NF; i++) fo.push({ a: (rnd() - 0.5) * 2.2, d: 0.07 + rnd() * rnd() * 0.75, s: 0.003 + rnd() * 0.006, ph: rnd() * 6.28, lag: 0.55 + rnd() * 0.5 });
  const NB = 64;
  const bubM = new THREE.ShaderMaterial({ transparent: true, depthWrite: false,
    vertexShader: 'varying vec3 vN, vV; void main() { vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * mat3(instanceMatrix) * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }',
    fragmentShader: /* glsl */ `varying vec3 vN, vV; void main() { vec3 n = normalize(vN); float f = pow(1.0 - abs(dot(n, vV)), 2.2);
      vec3 c = mix(vec3(0.75, 0.9, 1.1), vec3(1.0, 0.72, 1.05), 0.5 + 0.5 * n.y) * (0.35 + f);
      float hl = pow(max(dot(n, normalize(vec3(-0.4, 0.7, 0.6))), 0.0), 40.0);
      gl_FragColor = vec4(c + hl, clamp(0.12 + f * 0.85 + hl, 0.0, 1.0)); }` });
  const bubs = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 14, 10), bubM, NB); bubs.name = 'open9Bubbles'; bubs.frustumCulled = false; bubs.visible = false; scene.add(bubs);
  const bu = []; for (let i = 0; i < NB; i++) bu.push({ a: rnd() * 6.28, r: 0.06 + rnd() * 0.19, d: rnd(), s: 0.008 + rnd() * 0.02, ph: rnd() * 6.28, w: 0.5 + rnd() });

  // ------------------------------------------------ the light at the passage's end (it opens onto the live game), and the flash as he reaches it
  const cap = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 2.6), new THREE.ShaderMaterial({ uniforms: { uTime: U.uTime, uOpen: { value: 0 } },
    vertexShader: 'varying vec2 vQ; void main() { vQ = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `uniform float uTime, uOpen; varying vec2 vQ; ${NOISE}
      void main() { float r = length(vQ), a = atan(vQ.y, vQ.x);
        float e = r * (1.0 + 0.16 * sin(a * 5.0 + uTime * 5.0) + 0.3 * (o9f(vec2(cos(a), sin(a)) * 2.4 + uTime * 0.7) - 0.5)) - uOpen * 1.5;
        if (uOpen > 0.0 && e < 0.0) discard;
        vec3 c = mix(vec3(1.12, 1.1, 1.2), vec3(0.74, 0.86, 1.16), smoothstep(0.0, 0.36, r)); c = mix(c, vec3(0.36, 0.62, 1.08), smoothstep(0.3, 0.85, r));
        c += vec3(0.5, 0.2, 0.6) * exp(-pow((r - 0.42) / 0.09, 2.0)) * 0.6;
        float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 1.6 + 2.0 * o9n(vec2(a * 2.0, uTime))), 3.0) * smoothstep(1.25, 0.12, r);
        c += vec3(0.75, 0.8, 1.0) * rays * 0.22 + vec3(0.6, 0.75, 1.0) * (0.5 + 0.5 * sin(r * 26.0 - uTime * 7.0)) * smoothstep(1.1, 0.2, r) * 0.1;
        c += vec3(1.0) * step(0.985, o9h(floor(vQ * 34.0) + floor(uTime * 9.0))) * smoothstep(1.2, 0.2, r) * 0.7;
        c += vec3(1.0, 1.0, 1.1) * (1.0 - smoothstep(0.0, 0.07, e)) * step(0.001, uOpen);
        gl_FragColor = vec4(c, 1.0); }` }));
  cap.name = 'open9End'; cap.position.set(P.x, P.y, P.z - O.tube.end - 0.02); cap.visible = false; scene.add(cap);
  const flashTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'), r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.3, 'rgba(255,250,255,0.92)'); r.addColorStop(0.62, 'rgba(210,225,255,0.4)'); r.addColorStop(1, 'rgba(190,210,255,0)'); g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: flashTex, transparent: true, depthTest: false, depthWrite: false, opacity: 0 })); flash.name = 'open9Flash'; flash.renderOrder = 999; flash.visible = false; scene.add(flash);

  // the drum's own light (approved 04: a glowing violet-pink interior with rings of light), just in front of its back; additive
  const glowU = { uTime: U.uTime, uRot: U.uRot, uK: { value: 0 } };
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.9), new THREE.ShaderMaterial({ uniforms: glowU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec2 vQ; void main() { vQ = position.xy / 0.43; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */ `uniform float uTime, uRot, uK; varying vec2 vQ;
      void main() { float r = length(vQ), a = atan(vQ.y, vQ.x); if (r > 1.0) discard;
        float rings = pow(0.5 + 0.5 * sin(r * 24.0 - uTime * 1.8), 2.0) * smoothstep(1.0, 0.25, r) * smoothstep(0.05, 0.3, r);
        float streak = pow(0.5 + 0.5 * cos(a * 4.0 + uRot), 5.0) * (1.0 - r);
        vec3 c = mix(vec3(1.0, 0.72, 1.0), vec3(0.66, 0.26, 1.0), smoothstep(0.0, 0.7, r));
        float g = 0.6 * (1.0 - r) * (1.0 - r) + 0.3 * rings + 0.28 * streak;
        gl_FragColor = vec4(c, clamp(g * uK, 0.0, 1.0)); }` }));
  glow.name = 'open9DrumGlow'; glow.position.set(P.x, P.y, P.z - O.tube.back + 0.07); glow.visible = false; scene.add(glow);
  const glow0 = ctx.glowL ? ctx.glowL.color.clone() : null, glowV = new THREE.Color(0xc070ff);

  // ------------------------------------------------ the camera
  const zDive = (s) => { const z0 = O.cam.spin[2], acc = O.cam.speed / (T.glass - T.dive), q = s - T.dive; return s < T.glass ? z0 - 0.5 * acc * q * q : z0 - 0.5 * acc * (T.glass - T.dive) ** 2 - O.cam.speed * (s - T.glass); };
  const camD = (s) => P.z - zDive(s);   // how far the camera is into the washer (m behind the porthole plane; negative: still in front of it)
  /** the camera keys this pass uses from the door's closing on (story time): [t, position, target, fov] */
  const camKeys = (keep) => [...keep.filter((k) => k[0] <= 5.4), [6.35, [0.3, 0.73, 3.29], [0.3, 0.72, 0.27], 36], [7.3, O.cam.wash, O.cam.washAt, 36], [T.dive, O.cam.spin, O.cam.spinAt, 36]];
  function cameraAt(s, cam, camPos, camTgt) {
    if (s < T.dive) return;
    const k = sm(T.dive, T.glass + 0.1, s), z = zDive(s);
    camPos.set(P.x, O.cam.spin[1] + (P.y - O.cam.spin[1]) * k, z);
    const fwd = V(P.x, camPos.y + O.cam.tilt * 3, z - 3), at = V(...O.cam.spinAt);
    camTgt.copy(at).lerp(fwd, k); cam.fov = 36 + (O.cam.fov - 36) * sm(T.dive, T.glass + 0.05, s);
    cam.position.copy(camPos); cam.lookAt(camTgt); cam.updateProjectionMatrix(); cam.updateMatrixWorld();
  }

  // ------------------------------------------------ the pool's state and the drum's turning (integrated: the frames come in order)
  let lastS = null, ang = 0;
  const st = { level: -0.33, phi: 0, spin: 0, w: 0 };
  const drumW = (s) => (s < O.drum.from ? 0 : O.drum.w0 + (O.drum.w1 - O.drum.w0) * Math.pow(sm(O.drum.from, O.drum.until, s), 2.2));
  function state(s, it) {
    const dt = lastS === null || s < lastS ? 0 : Math.min(0.2, s - lastS); if (lastS !== null && s < lastS) ang = 0; lastS = s;
    st.w = drumW(s); ang += st.w * dt;
    st.level = s < T.fill[0] ? -0.33 + (O.level.land + 0.33) * sm(T.pool[0], T.pool[1], s) : O.level.land + (O.level.wash - O.level.land) * sm(T.fill[0], T.fill[1], s);
    const drag = O.slosh.drag * sm(0.5, 7.0, st.w), rock = O.slosh.amp * Math.sin(it * O.slosh.rate) * sm(T.fill[0], T.fill[0] + 0.4, s) * (1 - sm(T.ring[0], T.ring[1], s));
    st.phi = SG * drag + rock + (s > 4.75 && s < 6.2 ? 0.05 * Math.sin((s - 4.75) * 9) * Math.exp(-(s - 4.75) * 2.2) : 0);   // (his landing rocks the puddle)
    st.spin = sm(T.ring[0], T.ring[1], s);
    return st;
  }
  // a point floating on the pool at xa (m across it from its lowest line) and depth d, lifted `up`; it follows the tilt and, later, the ring
  const floatAt = (xa, d, up) => { const lv = -st.level, a = Math.atan2(xa, lv) + st.phi, rPool = Math.hypot(xa, lv) - up * Math.cos(a - st.phi); return { a, r: rPool }; };

  // ------------------------------------------------ the hero from his landing on: floats, rocks, rolls with the drum, is drawn down the passage
  const sit = V(P.x + 0.03, P.y + O.level.land + O.hero.float, P.z - O.hero.d);
  const rollAt = (s) => SG * Math.PI * 2 * O.hero.turns * sm5(T.roll[0], T.roll[1], s);
  /** returns { hp, rot (Euler XYZ), scl, surprise, open } for story s >= 4.75 */
  function heroAt(s, it) {
    const H = O.hero, f = floatAt(0.03, H.d, H.float), roll = rollAt(s);
    const lift = sm(T.ring[0] - 0.1, T.ring[1], s), pull = sm(T.dive + 0.05, T.glass, s);
    // round the axis: where he floats, then carried round by the drum (his roll's angle), then drawn onto the axis
    const a = f.a + roll, r = (f.r + (H.orbit - f.r) * lift) * (1 - pull) + 0.02 * pull;
    const bob = 0.007 * Math.sin(it * 2.6) + 0.006 * Math.sin((s - 4.75) * 9) * Math.exp(-Math.max(0, s - 4.75) * 3);
    const L = H.ahead + (H.aheadEnd - H.ahead) * sm(T.glass, T.open - 0.3, s), d = Math.max(H.d, (s < T.dive ? -9 : camD(s)) + L);
    const hp = polar(a, r, d); hp.y += bob * (1 - lift);
    if (pull > 0) hp.y -= 0.02 * pull;   // (in the passage: on the camera's axis, a little under it)
    const look = s < T.fill[0] ? 0.25 * Math.sin((s - 4.6) * 1.7) : 0.12 * Math.sin(it * 1.3) * (1 - lift);
    const rot = new THREE.Euler(0.05 * Math.sin(it * 1.7) + 0.1 * Math.sin(roll * 0.5) * lift, look + 0.14 * Math.sin(roll * 0.5 + 1.0) * lift, (st.phi - SG * O.slosh.drag * sm(0.5, 7.0, st.w) * 0.35) * 0.9 * (1 - lift) + roll, 'XYZ');
    // surprised as he lands and as the water rises and the drum starts to turn; then delighted (a wide open smile)
    const surprise = s < 5.6 ? 1 : s > T.fill[0] + 0.1 && s < T.fill[0] + 0.75 ? 1 : s > T.roll[0] - 0.05 && s < T.roll[0] + 0.55 ? 1 : 0;
    const open = s < T.roll[0] ? 0.5 + 0.2 * Math.sin(it * 2) : 0.95 + 0.12 * Math.sin(it * 7);
    return { hp, rot, scl: H.scale, surprise, open };
  }

  // ------------------------------------------------ the towels from the wash on: afloat beside him, then tumbling round with the water
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _v = new THREE.Vector3();
  const place = (src, out, pos, rx, ry, rz, k) => { _m.compose(pos, _q.setFromEuler(new THREE.Euler(rx, ry, rz, 'YXZ')), _v.set(k, k, k)); const v = new THREE.Vector3();
    for (let i = 0; i < src.length; i += 3) { v.set(src[i], src[i + 1], src[i + 2]).applyMatrix4(_m); out[i] = v.x; out[i + 1] = v.y; out[i + 2] = v.z; } };
  /** cloth: makeCloth's object; which: 'blue' | 'yellow'; from: { pos, r, L, rx, ry, rz } where the earlier staging has it as this takes over. */
  const towelFrom = T.fill[0] + 0.25;
  function towelAt(cloth, which, s, it, from) {
    const [xa, d] = O.towel[which], ph = which === 'blue' ? 2.2 : 4.3, k0 = sm(towelFrom, towelFrom + 0.7, s), lift = sm(T.ring[0] - 0.1, T.ring[1] + 0.2, s);
    const f = floatAt(xa, d, 0.012), roll = SG * Math.PI * 2 * (O.hero.turns + 0.35) * sm5(T.roll[0] - 0.1, T.roll[1] - 0.15, s) * 0.9;
    const a = f.a + roll, r = f.r + (Math.min(O.towel.orbit, surfR(a, d) - 0.03) - f.r) * lift;
    const pos = polar(a, r, d); pos.y += 0.006 * Math.sin(it * 2.2 + ph);
    let R0 = 0.062, L0 = 0.2, wrap = 0.22 + 0.6 * lift, rx = 0.25 * Math.sin(it * 1.4 + ph) + 0.4 * lift, ry = ph + roll * 0.3, rz = st.phi * (1 - lift) + roll + 0.3 * Math.sin(ph);
    if (from && k0 < 1) { pos.lerpVectors(from.pos, pos, k0); R0 = from.r + (R0 - from.r) * k0; L0 = from.L + (L0 - from.L) * k0; wrap *= k0; rx = from.rx + (rx - from.rx) * k0; ry = from.ry + (ry - from.ry) * k0; rz = from.rz + (rz - from.rz) * k0; }
    cloth.drape(cloth.A, R0, L0, wrap, 0.03, it, 0.8 + lift);
    const out = new Float32Array(cloth.A.length); place(cloth.A, out, pos, rx, ry, rz, 0.92);
    cloth.apply(out);
  }

  // ------------------------------------------------ per frame (after the earlier staging has run)
  const hidden = []; let back = null, room = null, roomOff = false, replica = null, passOn = false, emitCarry = 0, lastIt = null;
  const M = new THREE.Matrix4(), Q = new THREE.Quaternion();
  /** s: story clock; it: idle clock; o: { hero (world position), heroOn } */
  function update(s, it, o) {
    const dtI = lastIt === null ? 0 : Math.min(0.1, Math.max(0, it - lastIt)); lastIt = it;
    const d = P.z - camera.position.z, inPassage = d > O.tube.d0 + 0.03;
    // the water
    U.uTime.value = it; U.uLevel.value = st.level; U.uPhi.value = st.phi; U.uSpin.value = st.spin; U.uRot.value = SG * ang * 0.62;
    U.uAmp.value = 0.008 + 0.016 * sm(T.fill[0], T.fill[1], s) + 0.01 * sm(1, 6, st.w);
    U.uPass.value = sm(T.ring[0] + 0.15, T.ring[1], s); U.uGlow.value = sm(T.back[0], T.glass, s); U.uLit.value = sm(6.55, 7.0, s);
    if (o && o.hero) U.uHero.value.set(o.hero.x, P.z - o.hero.z, (1 - st.spin) * sm(4.7, 4.85, s));
    water.visible = s > T.pool[0] && s < T.end + 0.2;
    // the drum's back: its holes glow, its iris opens, then it melts away from the centre onto the passage
    if (back === null) back = scene.getObjectByName('seq7DrumBack') || false;
    if (back) { const bu7 = back.material.uniforms, dk = sm(T.back[0] + 0.12, T.back[1], s); bu7.uOpen.value = 1.12 * sm(T.back[0] - 0.15, T.back[0] + 0.2, s); bu7.uDiss.value = dk; bu7.uFill.value = 0; back.visible = dk < 1 && !inPassage; }
    { const lit = sm(6.55, 7.05, s), gone = sm(T.back[0] + 0.1, T.back[1], s); glowU.uK.value = lit * (0.7 + 0.12 * Math.sin(it * 2.3)) * (1 - gone); glow.visible = lit > 0.01 && gone < 1 && !inPassage;
      if (glow0) ctx.glowL.color.copy(glow0).lerp(glowV, lit * 0.8); }
    vortex.U.uFill.value = 0;   // (the painted water on the drum's wall: the 3D water replaces it)
    vortex.water.visible = false;
    // the copy of the tunnel is never shown: Screen 6 is the live game
    if (replica === null) { replica = [scene.getObjectByName('six2TunnelArches'), six.gear, ...(six.housings || []), six.tun].filter(Boolean); }
    for (const r of replica) r.visible = false;
    // foam lumps on the water: carried round with it
    foam.visible = water.visible && d < -0.45;
    if (foam.visible) for (let i = 0; i < NF; i++) { const f = fo[i], a = f.a + st.phi * (1 - st.spin) + SG * ang * 0.62 * f.lag * st.spin, r = surfR(a, f.d), dry = Rd(f.d) - r < 0.012;
      const p = polar(a, r - f.s * 0.35, f.d), k = dry ? 0 : f.s * (1 + 0.25 * Math.sin(it * 4 + f.ph)) * (1 - 0.4 * st.spin); M.compose(p, Q, V(k, k, k)); foam.setMatrixAt(i, M); }
    foam.instanceMatrix.needsUpdate = true;
    // bubbles: rising in the drum's air, whirled round by the spin, streaming past in the passage
    bubs.visible = s > T.fill[0] && s < T.end;
    if (bubs.visible) { const k9 = sm(T.fill[0], T.fill[1], s);
      for (let i = 0; i < NB; i++) { const b = bu[i]; let p, k = b.s * k9;
        if (i % 2 === 0) { const a = b.a + SG * ang * 0.5 * b.w + 0.4 * Math.sin(it * b.w + b.ph), r = Math.min(b.r, Rd(0.3) - 0.05), dd = 0.1 + b.d * 0.75; p = polar(a, r * (0.6 + 0.4 * st.spin), dd); if (st.spin < 0.5 && p.y < P.y + st.level) k = 0; if (d > dd - 0.15) k = 0; }
        else { const span = 5.4, dd = O.tube.back + ((b.d * span - it * 0.9 * b.w) % span + span) % span, a = b.a + dd * 1.4 + it * 0.5; p = polar(a, O.tube.r * (0.35 + 0.5 * b.r / 0.25), dd); k *= U.uPass.value * 1.6; if (dd < d + 0.25) k = 0; }
        M.compose(p, Q, V(k, k, k)); bubs.setMatrixAt(i, M); }
      bubs.instanceMatrix.needsUpdate = true; }
    // spray thrown off the turning water
    if (splash && s > T.fill[0] + 0.2 && st.w <= 2 && dtI > 0) { emitCarry += dtI * 16; for (; emitCarry >= 1; emitCarry--) { const xa = (rnd() - 0.5) * 0.3, dd = 0.1 + rnd() * 0.3, f = floatAt(xa, dd, 0.01), p = polar(f.a, f.r, dd);
      splash.emit(p, V((rnd() - 0.5) * 0.3, 0.5 + rnd() * 0.5, (rnd() - 0.5) * 0.2), 0.3 + rnd() * 0.3); } }
    if (splash && st.w > 2 && s < T.glass) { emitCarry += dtI * 60 * sm(2, 9, st.w); for (; emitCarry >= 1; emitCarry--) { const a = rnd() * 6.28, dd = 0.12 + rnd() * 0.5, r = surfR(a, dd), p = polar(a, r, dd);
      splash.emit(p, V(-Math.sin(a) * 0.5 + SG * Math.cos(a) * 0.9, Math.cos(a) * 0.5 + SG * Math.sin(a) * 0.9, 0.3 * (rnd() - 0.5)), 0.25 + rnd() * 0.3); } }
    // the passage's end: the light, opening onto the live game; the flash as he reaches it
    cap.visible = s > T.back[0] && s < T.end + 0.2; cap.material.uniforms.uOpen.value = sm(T.open, T.open + 0.42, s) * 1.25; cap.scale.setScalar((O.tube.r + O.tube.mouth) * 1.15);
    const fk = s < T.open + O.flash.at ? 0 : s < T.open ? sm(T.open + O.flash.at, T.open, s) : 1 - sm(T.open, T.open + O.flash.fall, s);
    flash.visible = fk > 0.003;
    if (flash.visible) { const dir = V(0, 0, -1).applyQuaternion(camera.quaternion), up = V(0, 1, 0).applyQuaternion(camera.quaternion), hh = Math.tan(camera.fov * Math.PI / 360) * 0.6;
      flash.position.copy(camera.position).addScaledVector(dir, 0.6).addScaledVector(up, (1 - 2 * O.centre) * hh); flash.scale.setScalar(O.flash.size * (0.55 + 0.9 * sm(T.open + O.flash.at, T.open + 0.25, s))); flash.material.opacity = fk; }
    // inside the passage nothing of the room, the washer or the drum is drawn, and the frame is transparent wherever the water is not:
    // what shows through the passage's mouth is the live game underneath
    if (inPassage !== passOn) { passOn = inPassage;
      if (passOn) { for (const c of scene.children) { if (c === water || c === bubs || c === cap || c === flash || c === foam || c.isLight || c.name === 'hero' || c === (splash && splash.points)) continue; if (c.visible) { hidden.push(c); c.visible = false; } }
        scene.userData.o9bg = scene.background; scene.background = null; renderer.setClearColor(0x000000, 0); }
      else { for (const c of hidden) c.visible = true; hidden.length = 0; scene.background = scene.userData.o9bg; renderer.setClearColor(0x000000, 1); } }
    if (passOn) for (const c of scene.children) if (!(c === water || c === bubs || c === cap || c === flash || c === foam || c.isLight || c.name === 'hero' || c === (splash && splash.points)) && c.visible) { hidden.push(c); c.visible = false; }
    if (room === null) room = scene.getObjectByName('six2Room') || false;
    if (room) { const off = s >= T.room; if (off !== roomOff) { roomOff = off; for (const c of room.children) { if (c.isLight || c.type === 'Object3D') continue; if (off) { c.userData.o9v = c.visible; c.visible = false; } else if (c.userData.o9v !== undefined) c.visible = c.userData.o9v; } } }
  }
  const heroOn = (s) => s < T.open - 0.02;
  return { T, sit, state, cameraAt, camKeys, heroAt, towelAt, towelFrom, update, heroOn, water, real: (s) => s + O.real };
}
