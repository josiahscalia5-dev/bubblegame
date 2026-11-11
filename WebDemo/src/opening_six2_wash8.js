// wash8 (9 November 2026, session 8da775c4; part of the opening candidate `seq7`): THE WASH BEGINS and THE MAGICAL SPIN (the user's strict opening
// directive, Design/ReferencePacks/2026-11-09_Opening_References_from_user_session_8da775c4/README.md; targets 04_The_Wash_Begins.png and the close-up
// 01_SCREEN4_THE_WASH_BEGINS_closeup.jpg). What the frames showed before: no water behind the glass at real 7.2 s, then one flat blue band across
// his eyes (the drum's floor water lifted as a plane), and a flat blue sheet as the tunnel's water.
// What this does (real 3D in the drum, opaque, no sorting; nothing here runs without seq7):
//   - the wash water as two sloshing bodies of water inside the drum, one in front of him just behind the glass and one behind him: a wavy,
//     foaming waterline that rises to his chest as the wash starts (his face stays clear), rocks as the drum turns, with flowing light streaks,
//     violet-pink glints and foam lumps;
//   - the spin: the drum's perforated back turns faster and faster, the waterline tips over and the water is flung out into a spiralling ring round
//     the window, opening at its centre onto the tunnel beyond (the washer becomes the tunnel; the camera flies through the ring);
//   - he bobs and rocks with the water, rolls once with the spin (his face to the camera), before the existing turn and sweep into the tunnel;
//   - the tunnel's water: real travelling waves shaded per pixel (cobalt troughs, azure bodies, turquoise lit faces, thin white crests, sparkles),
//     a foam ring and wake round him, instead of the flat sheet.
import * as THREE from 'three';

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sm = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };

// every number (window.__bwWash8 in the browser). Times are STORY seconds (real seconds - 0.5 after the warp).
export const WASH8 = {
  fill: [6.45, 6.9],            // the water rises
  level: { from: -0.3, front: -0.11, back: -0.045 },   // waterline heights relative to the porthole's centre (m): start, the front body, the body behind him
  slosh: { amp: [0.07, 0.3], rate: [2.2, 5.5] },        // the waterline's rocking (rad; rad/s), from the wash's start to the spin
  spin: [7.3, 7.72],             // the waterline tips into the ring
  ring: { rin: [0.03, 0.2], open: [7.45, 7.9] },        // the ring's inner radius as it opens
  drum: { from: 6.5, w0: 0.8, w1: 15.0, until: 7.9 },   // the drum back's turning speed (rad/s)
  front: { dz: -0.085, r: 0.272, hide: 7.98 }, back: { dz: -0.6, r: 0.4, hide: 8.3 },
  hero: { bob: 0.012, rock: 0.55, roll: [7.32, 7.74] },
  tunnel: { amp: 0.5 },
};
if (typeof window !== 'undefined') window.__bwWash8 = WASH8;

const NOISE = /* glsl */ `
float w8h(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float w8n(vec2 p) { vec2 i = floor(p), q = fract(p); q = q * q * (3.0 - 2.0 * q);
  return mix(mix(w8h(i), w8h(i + vec2(1.0, 0.0)), q.x), mix(w8h(i + vec2(0.0, 1.0)), w8h(i + vec2(1.0, 1.0)), q.x), q.y); }
float w8f(vec2 p) { return (0.5 * w8n(p) + 0.3 * w8n(p * 2.03 + vec2(1.7, 9.2)) + 0.2 * w8n(p * 4.1 + vec2(5.3, 2.8))); }
`;

/** ctx: the opening's context { scene, vortex, OPENING3D }. Returns { update(s, it, o), hero(hero, s, it) }. */
export function installWash8(ctx) {
  const { scene, vortex, OPENING3D } = ctx, P = OPENING3D.porthole, W = WASH8;
  const U = { uTime: { value: 0 }, uTilt: { value: 0 }, uSpin: { value: 0 }, uRot: { value: 0 }, uRin: { value: 0 }, uC: { value: new THREE.Vector2(P.x, P.y) } };
  const layer = (dz, r, shade, phase, name) => {
    const u = { ...U, uLevel: { value: W.level.from }, uR: { value: r }, uShade: { value: shade }, uPhase: { value: phase } };
    const mat = new THREE.ShaderMaterial({ uniforms: u,
      vertexShader: 'varying vec2 vP; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vP = w.xy; gl_Position = projectionMatrix * viewMatrix * w; }',
      fragmentShader: /* glsl */ `
        uniform float uTime, uLevel, uTilt, uSpin, uRot, uRin, uR, uShade, uPhase; uniform vec2 uC; varying vec2 vP;
        ${NOISE}
        void main() {
          vec2 q = vP - uC; float r = length(q);
          if (r > uR) discard;
          float t = uTime + uPhase, cs = cos(uTilt), sn = sin(uTilt);
          vec2 p = vec2(cs * q.x + sn * q.y, -sn * q.x + cs * q.y);
          // the wash: a rolling, sloshing waterline
          float crest = uLevel + 0.019 * sin(p.x * 21.0 + t * 3.3) + 0.012 * sin(p.x * 39.0 - t * 4.9 + 1.3) + 0.007 * sin(p.x * 63.0 + t * 6.7);
          float dA = crest - p.y;
          // the spin: the water flung out into a ring with a spiralling inner edge
          float a = atan(q.y, q.x);
          float rin = uRin + 0.016 * sin(a * 3.0 - uRot + r * 26.0) + 0.009 * sin(a * 7.0 + uRot * 1.7);
          float d = mix(dA, r - rin, uSpin);
          if (d < 0.0) discard;
          float flow = w8f(vec2(p.x * 9.0 - t * 1.4, p.y * 14.0 + t * 0.6));
          float swirl = w8f(vec2((a + uRot) * 2.4 + r * 12.0, r * 22.0 - t * 2.2));
          float n = mix(flow, swirl, uSpin);
          vec3 c = mix(vec3(0.10, 0.60, 1.0), vec3(0.02, 0.30, 0.90), smoothstep(0.0, 0.07, d));
          c = mix(c, vec3(0.0, 0.13, 0.64), smoothstep(0.06, 0.2, d));
          c = mix(c, vec3(0.28, 0.88, 1.04), smoothstep(0.52, 0.84, n) * 0.6);
          c += vec3(0.46, 0.12, 0.62) * smoothstep(0.58, 0.9, w8f(vec2(p.x * 5.0 + 7.0, p.y * 6.0 - t * 0.8))) * 0.38;   // violet-pink glints of the drum's lights
          float fm = w8f(vec2(p.x * 27.0 + t * 1.2, p.y * 27.0 - t * 0.9));
          float foam = smoothstep(0.028 + 0.034 * fm, 0.0, d) + smoothstep(0.6, 0.78, fm) * smoothstep(0.11, 0.02, d) * 0.9;
          foam += smoothstep(0.80, 0.9, fm) * smoothstep(0.3, 0.1, d) * 0.5;                                               // a few bubbles deeper down
          c = mix(c, vec3(1.08, 1.12, 1.18), clamp(foam, 0.0, 1.0));
          gl_FragColor = vec4(c * uShade, 1.0);
        }` });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.0), mat); m.position.set(P.x, P.y, P.z + dz); m.name = name; m.visible = false; scene.add(m);
    return { m, u };
  };
  const front = layer(W.front.dz, W.front.r, 1.0, 0.0, 'wash8Front'), back = layer(W.back.dz, W.back.r, 0.8, 2.7, 'wash8Back');

  // the tunnel's (and the drum floor's) water: the same mesh and uniforms as before (opening3d.js buildVortex), a wave material instead of the flat one
  const WU = vortex.WU, heroU = { value: new THREE.Vector3(0, -9, 0) };
  const WAVE = /* glsl */ `
    float w8W(vec2 q, float t) { return 0.026 * sin(q.y * 7.0 + q.x * 5.0 - t * 5.2) + 0.017 * sin(q.y * 13.0 - q.x * 9.0 - t * 7.1 + 1.3) + 0.010 * sin(q.x * 21.0 + q.y * 4.0 + t * 3.4) + 0.006 * sin(q.y * 27.0 + q.x * 15.0 - t * 9.0); }`;
  vortex.water.material = new THREE.ShaderMaterial({ uniforms: { ...WU, uHero8: heroU },
    vertexShader: /* glsl */ `attribute vec2 aXD; uniform float uTime, uFlow; varying vec2 vXD; ${WAVE}
      void main() { vXD = aXD; vec3 p = position; p.y += w8W(aXD, uTime + uFlow * 0.3) * ${WASH8.tunnel.amp.toFixed(2)}; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); }`,
    fragmentShader: /* glsl */ `uniform float uTime, uFlow, uFrom; uniform vec3 uHit, uHero8; varying vec2 vXD;
      ${NOISE}
      ${WAVE}
      void main() {
        float x = vXD.x, d = vXD.y, t = uTime + uFlow * 0.3;
        if (d < uFrom) discard;
        float h = w8W(vXD, t), e = 0.012;
        vec2 sl = (vec2(w8W(vXD + vec2(e, 0.0), t), w8W(vXD + vec2(0.0, e), t)) - h) / e;
        float fine = w8f(vec2(x * 15.0, d * 7.0 - t * 2.6));
        float lit = clamp(0.56 - sl.y * 1.5 + h * 9.0 + (fine - 0.5) * 0.4, 0.0, 1.0);
        vec3 c = mix(vec3(0.0, 0.17, 0.74), vec3(0.02, 0.43, 0.96), smoothstep(0.12, 0.5, lit));
        c = mix(c, vec3(0.2, 0.85, 1.05), smoothstep(0.56, 0.95, lit));
        float aa = fwidth(h) * 1.5 + 0.004;
        float crest = smoothstep(0.036 - aa, 0.036 + aa, h + (fine - 0.5) * 0.02) * smoothstep(0.35, 0.65, w8f(vec2(x * 6.0 + 2.0, d * 3.0 - t * 1.5)));
        c = mix(c, vec3(1.08, 1.12, 1.18), crest * 0.92);
        c += vec3(0.9, 1.0, 1.1) * pow(clamp(1.0 - abs(sl.x) * 0.6 - abs(sl.y + 0.25) * 2.2, 0.0, 1.0), 14.0) * 0.5 * step(0.55, fine);   // sparkles
        // where he lands: spreading rings (as before); round him as he swims: a broken foam ring and a wake toward the camera
        float r = length(vec2(x - uHit.x, (d - uHit.z) * 1.2));
        float rings = (1.0 - smoothstep(0.0, 0.025, abs(fract(r * 9.0 - uTime * 2.2) - 0.5) - 0.4)) * (1.0 - smoothstep(0.05, 0.45, r)) * uHit.y;
        c = mix(c, vec3(0.95, 1.0, 1.0), rings * 0.7);
        vec2 hq = vec2(x - uHero8.x, d - uHero8.y); float hr = length(hq * vec2(1.0, 0.85));
        float ring = smoothstep(0.035, 0.0, abs(hr - 0.25 - 0.02 * sin(atan(hq.y, hq.x) * 5.0 + t * 4.0))) * smoothstep(0.35, 0.6, w8f(hq * 22.0 + vec2(0.0, -t * 2.0)));
        float wake = smoothstep(0.03, 0.0, abs(abs(hq.x) - 0.2 + hq.y * 0.22)) * step(hq.y, 0.0) * exp(hq.y * 1.6) * smoothstep(0.4, 0.6, w8f(hq * 16.0 + vec2(3.0, t * 2.0)));
        c = mix(c, vec3(1.08, 1.12, 1.18), clamp(ring + wake, 0.0, 1.0) * uHero8.z);
        c = mix(c, vec3(0.88, 0.95, 1.0), smoothstep(5.0, 9.0, d) * 0.3);
        gl_FragColor = vec4(c, 1.0);
      }` });

  let drumBack = null, drumAngle = 0, lastS = null;
  const phaseOf = (s) => {   // the slosh's phase and amplitude: faster and wider toward the spin
    const k = sm(W.fill[0], W.spin[1], s), rate = W.slosh.rate[0] + (W.slosh.rate[1] - W.slosh.rate[0]) * k;
    return { amp: W.slosh.amp[0] + (W.slosh.amp[1] - W.slosh.amp[0]) * k, ph: (s - W.fill[0]) * rate };
  };
  function update(s, it, o) {
    const dt = lastS === null ? 0 : Math.max(0, Math.min(0.1, s - lastS)); lastS = s;
    const fill = sm(W.fill[0], W.fill[1], s), spin = sm(W.spin[0], W.spin[1], s), sl = phaseOf(s);
    // the drum back turns, slowly at first, then fast
    if (!drumBack) drumBack = scene.getObjectByName('seq7DrumBack') || false;
    const w = s < W.drum.from ? 0 : W.drum.w0 + (W.drum.w1 - W.drum.w0) * Math.pow(sm(W.drum.from, W.drum.until, s), 2.2);
    drumAngle += w * dt; if (drumBack) drumBack.rotation.z = -drumAngle;
    U.uTime.value = it; U.uSpin.value = spin; U.uRot.value = drumAngle * 1.6;
    U.uTilt.value = s < W.fill[0] ? 0 : sl.amp * Math.sin(sl.ph) * (1 - spin) + spin * drumAngle * 0.25;
    U.uRin.value = W.ring.rin[0] + (W.ring.rin[1] - W.ring.rin[0]) * sm(W.ring.open[0], W.ring.open[1], s);
    front.u.uLevel.value = W.level.from + (W.level.front - W.level.from) * fill;
    back.u.uLevel.value = W.level.from + (W.level.back - W.level.from) * fill;
    front.m.visible = s > W.fill[0] - 0.05 && s < W.front.hide;
    back.m.visible = s > W.fill[0] - 0.05 && s < W.back.hide;
    // the tunnel water: his place on it (x, metres in from the porthole) and how strongly it foams round him (once he swims in)
    if (o && o.hero) heroU.value.set(o.hero.x - P.x, P.z + 0.04 - o.hero.z, sm(7.7, 8.1, s));
  }
  // his motion in the wash (after the opening's own pose): bobbing and rocking with the waterline, one roll with the spin (his face to the camera)
  function hero(h, s, it) {
    if (s < W.fill[0] || s > 8.0) return;
    const fill = sm(W.fill[0], W.fill[1], s), out = 1 - sm(7.7, 7.95, s), sl = phaseOf(s);
    h.position.y += (W.hero.bob * Math.sin(sl.ph * 1.0 + 0.6) + 0.012 * fill) * fill * out;
    h.position.x += 0.02 * Math.sin(sl.ph) * fill * out;
    h.rotation.z += (sl.amp * W.hero.rock * Math.sin(sl.ph - 0.5) * fill + Math.PI * 2 * sm(W.hero.roll[0], W.hero.roll[1], s)) * out + Math.PI * 2 * sm(W.hero.roll[0], W.hero.roll[1], s) * (1 - out);
  }
  return { update, hero };
}
