// ?s3=intunnel,swim2 (test only): heroSwell's own mesh as a field of rounded water heaps that TRAVEL with her swimming,
// outward along the crest and down its face toward the camera, driven by the distance she swims (not the clock), lit by
// the same field: crisp white rims on their upper outlines and silhouettes, darker cores, cobalt creases, translucent
// periwinkle tops over her fur. Replaces the pinned picture (water2-9) and the rigid crest layers (spLumps, spCurls,
// lqWaterlineBubbles). The ORIGINAL approved Screen 4 is the only target. Nothing here runs without the switch.
// Design: Previews/WebDemo/screen4_round9_match/54_specialists/water_vfx_engineer.md
import { SWIM2_ON } from 'file:///home/user/bubblegame/WebDemo/src/tunnel_s4_bt.js';
export { SWIM2_ON };

export const SWIM2 = {
  startClock: 3.517,   // the compared Tap-to-Start frame (game clock, s): the designed heaps are placed for it
  // heroSwell's base shape (HERO_WATER.swell, set in buildHeroWater): crest heights (m) every 5 deg from -110 (screen
  // right) to 110, the troughs' level; no baked mounds (the heaps are the vertex shader's); 54 profile rows (was 30) so a
  // 0.1 m heap gets 3+ rows; it piles 0.1 per m/s of swerve, slumps to 15 % in a jump, is thrown 25 % higher on landing
  swell: { mounds: [], rows: 54, swerve: 0.1, air: 0.85, land: 0.25,
    line: [0.1, 0.15, 0.2, 0.25, 0.3, 0.34, 0.38, 0.41, 0.43, 0.45, 0.46, 0.47, 0.47, 0.47, 0.46, 0.45, 0.43, 0.41, 0.4, 0.415,
      0.43, 0.44, 0.47, 0.475, 0.45, 0.44, 0.44, 0.45, 0.47, 0.48, 0.48, 0.48, 0.47, 0.46, 0.45, 0.43, 0.41, 0.38, 0.34, 0.3, 0.25,
      0.2, 0.15, 0.11, 0.08] },
  heap: {
    bow: 0.03,             // m along the crest (screen-left +) where the water parts in front of her: heaps are born here
    vs: 0.055, vd: 0.07,   // m the heaps move outward along the crest / down the face per m she swims (0.40 / 0.50 m/s at 7.21 m/s)
    kl: 0.6,               // sideways: the share of her lane change the heaps keep in the water (the side she moves to is pushed in)
    idle: 0.35,            // m of 'travel' per s of clock (the water stays alive at Tap to Start)
    landRush: 6.0,         // extra m of travel per s right after a landing (the water bursts outward)
    // the lattice: cell (m along, down), the share of cells with a heap, half sizes (share of the cell), heights (m):
    // broad and low (half length 0.16-0.30 m, height 0.04-0.12 m): rolling heaps, never fins or cobbles
    cell: [0.5, 0.24], share: 0.72, ra: [0.32, 0.6], rb: [0.35, 0.6], amp: [0.04, 0.12],
    born: [0.0, 0.07], sinkA: [1.15, 1.6], over: [-0.22, -0.06], sinkB: [0.35, 0.65], sideGain: 0.2,   // where they live (m)
    swerve: 0.12, pile: [0.45, 1.5], air: 0.9, close: 0.3, landGain: 0.8,
    form: 3.0, designedOut: [6.0, 12.0],   // m of travel over which the lattice forms in front / the designed heaps collapse
    // the start frame's heaps, solved through the real start camera (53_swim/solve/frame_start.json) against the ORIGINAL's
    // waterline on her: [side (+1 screen-left), a (m from the bow), b (m down the face), half length, half width (m), height (m)]:
    // the left dome (x 225-330, top y 1240), the broad low right dome (x 335-445, y 1285), the splash at each side
    designed: [[1, 0.14, 0.02, 0.23, 0.15, 0.15], [-1, 0.08, 0.02, 0.2, 0.15, 0.07], [1, 0.42, 0.03, 0.17, 0.14, 0.16], [-1, 0.64, 0.03, 0.17, 0.14, 0.12]],
  },
  // colours (sRGB as on screen, through mtUndisplay): k-means of the ORIGINAL at y 1150-1536 (white #e9eef8, pale #b6d4f4,
  // azure #47abf1, #79c9f6, cobalt #1183e2, periwinkle #8d9be0; the domes #a294ee / #c2c8f8, cores #7d61d1)
  look: { water: ['#2f8ae6', '#4fb3f6', '#86ccf8'], deep: '#1a5fd6', body: '#3d9ff2', peri: '#8f9be6', lit: '#7fd2f8', core: '#3a5fcf',
    white: '#eef4fd', cap: '#dcecfb', clear: 0.62, rim: [0.62, 0.9], fres: [0.55, 0.8], spec: 1.1, capK: 0.85, drops: [24, 0.93, 0.9],
    foam: [0.64, 0.74, 0.8] },   // broken foam patches streaming down the face: [from, to] of the travel-anchored noise, amount
  wake: { arm: [0.95, 0.42, 0.14], fade: 2.0 },   // the floor's V wake (swimWakeGLSL) continuing the swell's arms
  hide: ['spLumps', 'spCurls', 'lqWaterlineBubbles'],   // rigid crest-following layers: material.visible = false (still built)
};
{ const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.swim2;   // (test tunes only)
  if (t) for (const k of Object.keys(t)) SWIM2[k] = (t[k] && typeof t[k] === 'object' && !Array.isArray(t[k])) ? { ...SWIM2[k], ...t[k] } : t[k]; }

const f = (x) => (+x).toFixed(5);
const v3s = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f((n >> 16 & 255) / 255)}, ${f((n >> 8 & 255) / 255)}, ${f((n & 255) / 255)})`; };

// the heap field: ONE function for the vertex shader (geometry) and the fragment shader (shading)
export function swim2HeapGLSL() {
  const H = SWIM2.heap, T0 = H.idle * SWIM2.startClock;
  const dome = ([sd, a0, b0, ra, rb, A], i) => `    if (side * ${f(sd)} > 0.0) sw2Dome(a, b, ${f(a0)} + ${f(H.vs)} * dT - la, ${f(b0)} + ${f(H.vd)} * dT, ${f(ra)}, ${f(rb)}, ${f(A)} * kD, ${f(0.1 + i * 0.2)}, h, g, L);`;
  return /* glsl */ `
// ?s3=...,swim2: the travelling heaps on the swell (tunnel_s4_swim2.js)
float sw2H(vec2 p) { p = mod(p, 289.0); return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float sw2S(float e0, float e1, float x) { float t = clamp((x - e0) / (e1 - e0), 0.0, 1.0); return t * t * (3.0 - 2.0 * t); }
// one rounded heap (1 - e)^2 over an ellipse; the union keeps the tallest, so neighbours meet in crisp creases
void sw2Dome(float a, float b, float ca, float cb, float ra, float rb, float A, float id, inout float h, inout vec2 g, inout vec4 L) {
  vec2 o = vec2((a - ca) / ra, (b - cb) / rb);
  float e = dot(o, o);
  if (e >= 1.0 || A <= 0.0) return;
  float k = 1.0 - e, v = A * k * k;
  if (v <= h) return;
  h = v; g = -4.0 * A * k * vec2(o.x / ra, o.y / rb); L = vec4(o, sqrt(e), id);
}
// a: m along the crest from the bow (per side), b: m down the outer face (< 0: the inner face), side: +1 screen-left,
// T: her travel (m, plus the idle drift), lat: her sideways speed, px: her x. Returns the height (m) along the surface's
// normal; g: its gradient (d/da, d/db); L: the tallest heap's (x along, y down) normalised offset, radius share, id
float sw2Field(float a, float b, float side, float T, float lat, float air, float land, float px, out vec2 g, out vec4 L) {
  float h = 0.0; g = vec2(0.0); L = vec4(0.0, 0.0, 1.0, 0.0);
  float dT = T - ${f(T0)}, la = side * ${f(H.kl)} * px;
  float kD = 1.0 - sw2S(${f(H.designedOut[0])}, ${f(H.designedOut[1])}, dT);
${H.designed.map(dome).join('\n')}
  // the lattice: staggered rows moving outward and down the face with her travel
  vec2 q = vec2(a - ${f(H.vs)} * T + la, b - ${f(H.vd)} * T);
  vec2 qc = q / vec2(${f(H.cell[0])}, ${f(H.cell[1])});
  float zone = (1.0 - sw2S(0.55, 0.75, a)) * (1.0 - sw2S(0.08, 0.16, b));
  float latK = 1.0 - zone * (1.0 - sw2S(0.0, ${f(H.form)}, dT));   // the start frame's front is the designed heaps'
  float r0 = floor(qc.y);
  for (int i = 0; i < 3; i++) {
    float r = r0 + float(i) - 1.0, off = 0.5 * mod(r, 2.0), c0 = floor(qc.x + off);
    for (int j = 0; j < 3; j++) {
      vec2 id = vec2(c0 + float(j) - 1.0, r + side * 37.0);
      if (sw2H(id) > ${f(H.share)}) continue;
      float ca = (id.x + 0.5 + (sw2H(id + 5.1) - 0.5) * 0.44 - off) * ${f(H.cell[0])};
      float cb = (r + 0.5 + (sw2H(id + 9.3) - 0.5) * 0.44) * ${f(H.cell[1])};
      float ra = ${f(H.cell[0])} * mix(${f(H.ra[0])}, ${f(H.ra[1])}, sw2H(id + 13.7));
      float rb = ${f(H.cell[1])} * mix(${f(H.rb[0])}, ${f(H.rb[1])}, sw2H(id + 17.1));
      float A = mix(${f(H.amp[0])}, ${f(H.amp[1])}, pow(sw2H(id + 21.3), 1.6)) * latK;
      sw2Dome(q.x, q.y, ca, cb, ra, rb, A, sw2H(id + 29.0), h, g, L);
    }
  }
  // born at the bow, sinking at the arms' ends; rolling over the crest from her side, flattening toward the foot; taller
  // at the sides; the side she swims to piles up, the far side drops (open water behind); collapsed in a jump; up on landing
  float env = sw2S(${f(H.born[0])}, ${f(H.born[1])}, a) * (1.0 - sw2S(${f(H.sinkA[0])}, ${f(H.sinkA[1])}, a))
    * sw2S(${f(H.over[0])}, ${f(H.over[1])}, b) * (1.0 - sw2S(${f(H.sinkB[0])}, ${f(H.sinkB[1])}, b));
  env *= (1.0 + ${f(H.sideGain)} * sw2S(0.25, 0.6, a)) * clamp(1.0 + side * lat * ${f(H.swerve)}, ${f(H.pile[0])}, ${f(H.pile[1])});
  env *= (1.0 - ${f(H.air)} * air) * (1.0 + ${f(H.landGain)} * land);
  h *= env; g *= env;   // (the envelope's own slope is gentle: left out of the gradient)
  return h;
}
`;
}
export const swim2VertexDecl = () => SWIM2_ON ? swim2HeapGLSL() + 'uniform float uSw2T;\nvarying vec3 vSw2W0;\n' : '';
export const swim2SwellDecl = () => SWIM2_ON ? swim2HeapGLSL() + 'uniform float uSw2T, uLat, uAir, uPX;\nvarying vec3 vSw2W0;\n' : '';

// swellVertex (tunnel_r7_hero_water.js), after the wall clamp: p (her frame), s, aSurf, top, normal in scope
export function swim2VertexGLSL() {
  if (!SWIM2_ON) return '';
  return /* glsl */ `  {   // ?s3=...,swim2: the travelling heaps, raised along the surface's normal (tunnel_s4_swim2.js)
    vSw2W0 = uC + uR * p.x + uU * p.y + uT * p.z;   // (the undisplaced surface: the fragment's tangents)
    float sw2Sa = s - ${f(SWIM2.heap.bow)};
    vec2 sw2G; vec4 sw2L;
    float sw2Hh = sw2Field(abs(sw2Sa), (0.5 - aSurf.y) * 1.9, sw2Sa >= 0.0 ? 1.0 : -1.0, uSw2T, uLat, uAir, uLand, uPX, sw2G, sw2L);
    p += normal * sw2Hh * uFade;
    p.xz *= 1.0 - uAir * ${f(SWIM2.heap.close)} * top;   // in a jump the ring closes in under her
  }
`;
}

// matchSwellGLSL's block (tunnel_r9_match_water.js), last: replaces mwCol and mwA. In scope: s, vS, vN, N0, V, hUp, vW,
// mwFloor, uC, uR, uLqKey, uLqTex, uLand, mtUndisplay
export function swim2SwellGLSL() {
  if (!SWIM2_ON) return '';
  const H = SWIM2.heap, K = SWIM2.look, U = (hex) => `mtUndisplay(${v3s(hex)})`;
  return /* glsl */ `    {   // ?s3=...,swim2: the heaps' water (tunnel_s4_swim2.js)
      float sw2Sa = s - ${f(H.bow)}, sw2A = abs(sw2Sa), sw2Side = sw2Sa >= 0.0 ? 1.0 : -1.0, sw2B = (0.5 - vS.y) * 1.9;
      vec2 sw2G; vec4 sw2L;
      float sw2Hh = sw2Field(sw2A, sw2B, sw2Side, uSw2T, uLat, uAir, uLand, uPX, sw2G, sw2L);
      // 1. the heap's normal: the base surface's tangents from screen derivatives (no sign conventions), its slope added
      vec3 sw2N = N0;
      { vec3 px = dFdx(vSw2W0), py = dFdy(vSw2W0);
        vec2 ux = dFdx(vec2(sw2Sa, sw2B)), uy = dFdy(vec2(sw2Sa, sw2B));
        float det = ux.x * uy.y - ux.y * uy.x, sg = dot(normalize(vN), N0) >= 0.0 ? 1.0 : -1.0;
        if (abs(det) > 1e-12) {
          vec3 tS = (px * uy.y - py * ux.y) / det, tB = (py * ux.x - px * uy.x) / det;
          sw2N = normalize(N0 - sg * (tS * (sw2G.x * sw2Side) / max(dot(tS, tS), 1e-4) + tB * sw2G.y / max(dot(tB, tB), 1e-4)));
        } }
      float sw2Rho = sw2L.z, sw2In = sw2S(0.003, 0.02, sw2Hh);             // on a heap (0 in the creases between them)
      float sw2Up = clamp(hUp / max(vS.w, 0.05), 0.0, 1.0);                // 0 at the floor's water .. 1 at the crest
      float sw2Front = (1.0 - sw2S(0.3, 0.48, abs(dot(vW - uC, uR)))) * sw2S(0.45, 0.8, sw2Up);   // tops in front of her body
      float sw2Ndv = clamp(dot(sw2N, V), 0.0, 1.0), sw2Key = clamp(dot(sw2N, uLqKey), 0.0, 1.0);
      // 2. the water between them: currents anchored in her travel, streaming down the face; the floor's own water at the foot
      float sw2Cur = texture2D(uLqTex, vec2(sw2Sa * 1.3, (sw2B - ${f(H.vd * 1.6)} * uSw2T) * 2.1)).b * 0.65
        + texture2D(uLqTex, vec2(sw2Sa * 3.1 + 0.4, (sw2B - ${f(H.vd * 2.4)} * uSw2T) * 4.3)).b * 0.35;
      vec3 sw2C = mix(${v3s(K.water[0])}, ${v3s(K.water[1])}, sw2S(0.3, 0.6, sw2Cur));
      sw2C = mix(sw2C, ${v3s(K.water[2])}, sw2S(0.68, 0.85, sw2Cur));
      sw2C = mix(sw2C, ${v3s(K.deep)}, (1.0 - sw2In) * 0.55 * sw2S(0.15, 0.5, sw2Up));   // cobalt creases
      // 3. the heaps: azure, periwinkle toward the crest and in front of her, turquoise-cyan on the lit upper left, a darker
      //    blue-violet core low on the side facing the camera
      vec3 sw2Hc = mix(${v3s(K.body)}, ${v3s(K.peri)}, clamp(sw2Up * 0.5 + sw2Front * 0.7, 0.0, 1.0));
      sw2Hc = mix(sw2Hc, ${v3s(K.lit)}, sw2S(0.55, 0.85, sw2Key) * 0.6);
      sw2Hc = mix(sw2Hc, ${v3s(K.core)}, (1.0 - sw2S(0.0, 0.65, sw2Rho)) * sw2S(-0.25, 0.45, sw2L.y) * 0.55);
      sw2C = mix(sw2C, sw2Hc, sw2In);
      vec3 sw2Col = mix(mwFloor, mtUndisplay(sw2C), sw2S(0.0, 0.3, sw2Up));
      // 4. white, all moving with the heaps: a crisp rim on each heap's upper outline (broken), the grazing rim of its
      //    silhouette, the key light's glint, broken froth caps on the side heaps, droplets in the creases
      float sw2Brk = step(0.28, fract(sin(sw2L.w * 91.7 + floor(atan(sw2L.y, sw2L.x) * 2.2) * 13.1) * 4375.85));
      float sw2Rim = sw2S(${f(K.rim[0])}, ${f(K.rim[0] + 0.1)}, sw2Rho) * (1.0 - sw2S(${f(K.rim[1])}, 1.0, sw2Rho))
        * sw2S(0.0, 0.6, 0.3 - sw2L.y / max(sw2Rho, 1e-3)) * sw2Brk * sw2In;
      float sw2Fr = sw2S(${f(K.fres[0])}, ${f(K.fres[1])}, 1.0 - sw2Ndv) * sw2In * sw2S(0.4, 0.8, sw2Up);
      float sw2Sp = pow(max(dot(sw2N, normalize(uLqKey + V)), 0.0), 90.0) * ${f(K.spec)} * sw2In;
      // (froth with holes on each heap's upper part, riding with it; none on the glassy domes in front of her body)
      float sw2Cap = (1.0 - sw2Front) * (1.0 - sw2S(-0.45, -0.15, sw2L.y)) * sw2In
        * step(0.5, texture2D(uLqTex, sw2L.xy * 0.35 + sw2L.w * 7.0).b);
      // (broken foam patches on the face below the crest band, anchored in her travel: they stream toward the camera)
      float sw2Fn = texture2D(uLqTex, vec2(sw2Sa * 2.3 + 0.7, (sw2B - ${f(H.vd * 1.8)} * uSw2T) * 1.6)).b;
      float sw2Fh = texture2D(uLqTex, vec2(sw2Sa * 9.0, (sw2B - ${f(H.vd * 1.8)} * uSw2T) * 7.0) + 0.3).b;
      sw2Cap = max(sw2Cap, sw2S(${f(K.foam[0])}, ${f(K.foam[1])}, sw2Fn) * step(0.42, sw2Fh) * (1.0 - sw2S(0.6, 0.85, sw2Up)) * (1.0 - sw2Front) * ${f(K.foam[2])});
      vec2 sw2Dq = vec2(sw2Sa, sw2B - ${f(H.vd * 1.5)} * uSw2T) * ${f(K.drops[0])}, sw2Di = floor(sw2Dq);
      float sw2Dr = step(${f(K.drops[1])}, sw2H(sw2Di + 3.3)) * (1.0 - sw2S(0.12, 0.28, length(fract(sw2Dq) - 0.5)))
        * (1.0 - sw2In) * sw2S(0.2, 0.5, sw2Up);
      sw2Col = mix(sw2Col, ${U(K.cap)}, sw2Cap * ${f(K.capK)});
      float sw2W = clamp(max(max(sw2Rim, sw2Fr), sw2Dr * ${f(K.drops[2])}) + sw2Sp, 0.0, 1.0);
      sw2Col = mix(sw2Col, ${U(K.white)}, sw2W);
      // 5. solid water, except each heap's top right in front of her body: her fur shows through as the original's lavender
      //    domes with darker cores (never in a jump: no glass)
      float sw2Clr = sw2Front * sw2In * (1.0 - sw2S(0.55, 0.85, sw2Rho)) * (1.0 - uAir);
      mwCol = sw2Col;
      mwA = clamp(max(mix(1.0, ${f(K.clear)}, sw2Clr), max(sw2W, sw2Cap * ${f(K.capK)})), 0.0, 1.0);
    }
`;
}
