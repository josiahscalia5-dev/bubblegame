# Water & VFX inspection: the water round and in front of her, and one correction (`?s3=intunnel,swim2`)

Read-only inspection (rerun, 6-7 November 2026, branch `ccr-10503be1-pnv5vq`). No game file was edited, and nothing was
built or rendered. Numbers marked **mirror** come from an offline Python copy of `swellGeometry` plus the proposed
displacement, projected through the real start camera (`53_swim/solve/frame_start.json`). They are not game renders. The
ORIGINAL (`01_Original_Approved_Screen_4.jpg`) is the only target.

## 1. What I found

- **Geometry** (modules evaluated in Node under `intunnel,water9`): heroSwell ax 0.95, au 0.55, outer face 0.34 m, crest
  0.57-0.64 m, seven static mounds baked in, 30 profile rows (6 cm), 13.4k triangles. Its only motion is the 16 mm `run`
  wave and clock-driven face patterns. `uHeroTravel` is in its uniforms (`R9_T1.0_water_shaders.json`) but unused.
- **Shading chain** (compiled GLSL): lqShade, the foam crests, matchSwellGLSL, focusSwellGLSL (a static teeth cut), the
  water2 picture (`uBwRef` frozen), R9's band; `depthWrite` false. spLumps, spCurls, lqWaterlineBubbles and heroSplash's
  launch points are placed once from `crestAt()` and ride rigidly.
- **The deciding camera fact:** at the start camera her centre lands at (360, 1250), the water under her at y 1382, and
  the screen's bottom edge is water only **0.6 m in front of her**; the sides at y 1380 are 0.95 m beside her. The
  original's full-width foreground IS the water within about 1 m of her: the swell's footprint is right (a collar loses
  it, the `swim` verdict). What must change is that its water is rigid and pinned.
- **The original's foreground** (my crop, y 1150-1536): two glassy domes at her base (left x 225-330, top y 1240; broad
  low right x 335-445, top 1285), white splash up her sides, froth across the width. Her waterline (lowest fur row per
  column): 1240-1260 at x 230-305, 1284-1297 at x 350-440, 1303-1324 at x 455-530 (R9 start: a straighter 1205-1309).
  K-means: white #e9eef8 24 %, pale #b6d4f4 18 %, azure #47abf1 17 %, #79c9f6 13 %, cobalt #1183e2 10 %, periwinkle
  #8d9be0 10 %; the domes #a294ee / #c2c8f8 with #7d61d1 cores (her pink through blue water).

## 2. The correction: heroSwell becomes a field of heaps that travel with her swimming

One technique, same mesh and draw call.

1. **Base shape** (`HERO_WATER.swell`): keep ax 0.95 / au 0.55 / out 0.34 (the full-width spread); crest line lowered
   to the troughs' level (0.40-0.48 m); no baked mounds; 54 profile rows (3.5 cm). Triangles 13.4k -> 23.8k.
2. **Vertex** (`swellVertex`): one heap field `sw2Field(a, b)` (a along the crest from a bow at s = +0.03 m, b down the
   face), displaced along the normal.
   - A staggered lattice of rounded heaps, 0.16-0.30 m long, 0.08-0.14 m wide, 0.04-0.12 m high, in 72 % of cells;
     their union by max gives crisp creases.
   - **Driven by the distance she swims** (T, a CPU accumulator; +0.35 m per clock second so Tap to Start stays alive;
     +1.5 m after each landing): per metre the lattice moves 0.055 m outward and 0.07 m down the face, 0.40 / 0.50 m/s
     at 7.21 m/s, **220-360 px/s on screen** (mirror; M1 asks for 100).
   - Born at the bow, rolling over from her side, flattening toward the foot, sinking at the arms' ends.
   - **Swerve:** the side she moves to x1.5, the far side x0.45; 60 % of her lane change stays in the water (far heaps
     left behind, near ones pushed in); the base piles 0.1 per m/s. **Jump:** heaps x0.1, base 15 %, ring pulled 30 %
     inward (the water closes under her). **Landing:** heaps x1.8, base x1.25 and thrown out, T bursts forward.
   - The base sits on the water surface (`W.surface`), not her bob, as in `swim`.
3. **Fragment** (last in matchSwellGLSL; focusSwellGLSL skipped): the same function per pixel. Normal: the base
   surface's tangents from screen derivatives of an undisplaced-position varying, plus the heap gradient (no faceting).
   Colours (sRGB through `mtUndisplay`):
   - between heaps: travel-anchored currents #2f8ae6 -> #4fb3f6 -> #86ccf8, #1a5fd6 cobalt creases; the foot fades into
     `mwFloor` (no seam with the floor);
   - heaps: azure #3d9ff2, periwinkle #8f9be6 toward the crest and in front of her, #7fd2f8 lit upper left, darker
     #3a5fcf core low on the camera side;
   - white: a broken crisp rim on each upper outline, a grazing silhouette rim, the key glint, froth caps with holes
     (not in front of her), foam patches streaming down the face, crease droplets;
   - opacity 1, except heap tops in front of her body (0.62): her fur shows as the original's lavender domes with dark
     cores; never in a jump. Her contact edge is the heaps' own rimmed silhouette: no pinned cut, no halo.
4. **Picture and layers:** SWIM2 excludes `swim` and water2-9 (no `uBwTex`, no R9 band). spLumps, spCurls,
   lqWaterlineBubbles: `material.visible = false` (still built, so `Math.random` does not shift). heroSplash stays. The
   floor wake (`swimWakeGLSL`) is reused with its arms starting at the swell's ends (0.95 m). R7's 12 px droplet cap on.
5. **Start composition:** four designed heaps (left dome, broad right dome, one splash heap per side), solved through
   the start camera, ride the same motion and collapse within 6-12 m of travel while the lattice forms. **Mirror:** her
   start waterline within **8.2 px mean (21 max)** of the original's over x 230-545 (7.9 px at +0.3 s idle); while she
   runs it moves between y 1234 and 1316 (original 1240-1324).

## 3. Code (behind `SWIM2_ON`)

**`WebDemo/src/tunnel_s4_bt.js:110`**: make it exclusive.
```js
export const SWIM2_ON = BT_ON && LIST.includes('swim2') && !LIST.some((k) => k === 'swim' || /^water\d$/.test(k));
```

**New `WebDemo/src/tunnel_s4_swim2.js`**: settings and GLSL. The JS was checked in Node: it imports and generates the
GLSL. The GLSL itself has not been compiled.
```js
// ?s3=intunnel,swim2 (test only): heroSwell's own mesh as a field of rounded water heaps that TRAVEL with her swimming,
// outward along the crest and down its face toward the camera, driven by the distance she swims (not the clock), lit by
// the same field: crisp white rims, darker cores, cobalt creases, translucent periwinkle tops over her fur. Replaces the
// pinned picture (water2-9) and the rigid crest layers. The ORIGINAL approved Screen 4 is the only target.
// Design: Previews/WebDemo/screen4_round9_match/54_specialists/water_vfx_engineer.md
import { SWIM2_ON } from './tunnel_s4_bt.js';
export { SWIM2_ON };

export const SWIM2 = {
  startClock: 3.517,   // the compared Tap-to-Start frame (game clock, s): the designed heaps are placed for it
  // heroSwell's base shape: crest heights (m) every 5 deg from -110 (screen right) to 110 = the troughs' level; no baked
  // mounds; 54 profile rows (was 30); piles 0.1 per m/s of swerve, slumps to 15 % in a jump, +25 % on landing
  swell: { mounds: [], rows: 54, swerve: 0.1, air: 0.85, land: 0.25,
    line: [0.1, 0.15, 0.2, 0.25, 0.3, 0.34, 0.38, 0.41, 0.43, 0.45, 0.46, 0.47, 0.47, 0.47, 0.46, 0.45, 0.43, 0.41, 0.4, 0.415,
      0.43, 0.44, 0.47, 0.475, 0.45, 0.44, 0.44, 0.45, 0.47, 0.48, 0.48, 0.48, 0.47, 0.46, 0.45, 0.43, 0.41, 0.38, 0.34, 0.3, 0.25,
      0.2, 0.15, 0.11, 0.08] },
  heap: {
    bow: 0.03,             // m along the crest (screen-left +) where the water parts in front of her: heaps are born here
    vs: 0.055, vd: 0.07,   // m outward along the crest / down the face per m she swims (0.40 / 0.50 m/s at 7.21 m/s)
    kl: 0.6,               // share of her lane change the heaps keep in the water (near side pushed in, far side left behind)
    idle: 0.35,            // m of 'travel' per s of clock (alive at Tap to Start)
    landRush: 6.0,         // extra m of travel per s right after a landing (the water bursts outward)
    // the lattice: cell (m along, down), share of cells with a heap, half sizes (share of the cell), heights (m)
    cell: [0.5, 0.24], share: 0.72, ra: [0.32, 0.6], rb: [0.35, 0.6], amp: [0.04, 0.12],
    born: [0.0, 0.07], sinkA: [1.15, 1.6], over: [-0.22, -0.06], sinkB: [0.35, 0.65], sideGain: 0.2,
    swerve: 0.12, pile: [0.45, 1.5], air: 0.9, close: 0.3, landGain: 0.8,
    form: 3.0, designedOut: [6.0, 12.0],   // m of travel: the lattice forms in front / the designed heaps collapse
    // the start heaps, solved through the start camera against the ORIGINAL's waterline on her:
    // [side (+1 screen-left), a (m from the bow), b (m down the face), half length, half width, height (m)]
    designed: [[1, 0.14, 0.02, 0.23, 0.15, 0.15], [-1, 0.08, 0.02, 0.2, 0.15, 0.07], [1, 0.42, 0.03, 0.17, 0.14, 0.16], [-1, 0.64, 0.03, 0.17, 0.14, 0.12]],
  },
  look: { water: ['#2f8ae6', '#4fb3f6', '#86ccf8'], deep: '#1a5fd6', body: '#3d9ff2', peri: '#8f9be6', lit: '#7fd2f8', core: '#3a5fcf',
    white: '#eef4fd', cap: '#dcecfb', clear: 0.62, rim: [0.62, 0.9], fres: [0.55, 0.8], spec: 1.1, capK: 0.85, drops: [24, 0.93, 0.9],
    foam: [0.64, 0.74, 0.8] },
  wake: { arm: [0.95, 0.42, 0.14], fade: 2.0 },          // the floor's V wake continuing the swell's arms
  hide: ['spLumps', 'spCurls', 'lqWaterlineBubbles'],    // material.visible = false (still built)
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
// a: m along the crest from the bow, b: m down the outer face (< 0: inner face), side: +1 screen-left, T: her travel (m);
// returns the height (m) along the normal; g: its gradient (d/da, d/db); L: the tallest heap's offset, radius share, id
float sw2Field(float a, float b, float side, float T, float lat, float air, float land, float px, out vec2 g, out vec4 L) {
  float h = 0.0; g = vec2(0.0); L = vec4(0.0, 0.0, 1.0, 0.0);
  float dT = T - ${f(T0)}, la = side * ${f(H.kl)} * px;
  float kD = 1.0 - sw2S(${f(H.designedOut[0])}, ${f(H.designedOut[1])}, dT);
${H.designed.map(dome).join('\n')}
  vec2 q = vec2(a - ${f(H.vs)} * T + la, b - ${f(H.vd)} * T);   // the lattice moves outward and down the face as she swims
  vec2 qc = q / vec2(${f(H.cell[0])}, ${f(H.cell[1])});
  float zone = (1.0 - sw2S(0.55, 0.75, a)) * (1.0 - sw2S(0.08, 0.16, b));
  float latK = 1.0 - zone * (1.0 - sw2S(0.0, ${f(H.form)}, dT));   // the start frame's front row is the designed heaps'
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
  // born at the bow, sinking at the arms' ends; rolling over the crest, flattening toward the foot; taller at the sides;
  // the side she swims to piles up, the far side drops (open water behind); collapsed in a jump; thrown up on landing
  float env = sw2S(${f(H.born[0])}, ${f(H.born[1])}, a) * (1.0 - sw2S(${f(H.sinkA[0])}, ${f(H.sinkA[1])}, a))
    * sw2S(${f(H.over[0])}, ${f(H.over[1])}, b) * (1.0 - sw2S(${f(H.sinkB[0])}, ${f(H.sinkB[1])}, b));
  env *= (1.0 + ${f(H.sideGain)} * sw2S(0.25, 0.6, a)) * clamp(1.0 + side * lat * ${f(H.swerve)}, ${f(H.pile[0])}, ${f(H.pile[1])});
  env *= (1.0 - ${f(H.air)} * air) * (1.0 + ${f(H.landGain)} * land);
  h *= env; g *= env;
  return h;
}
`;
}
export const swim2VertexDecl = () => SWIM2_ON ? swim2HeapGLSL() + 'uniform float uSw2T;\nvarying vec3 vSw2W0;\n' : '';
export const swim2SwellDecl = () => SWIM2_ON ? swim2HeapGLSL() + 'uniform float uSw2T, uLat, uAir, uPX;\nvarying vec3 vSw2W0;\n' : '';

// swellVertex, after the wall clamp (p in her frame, s, aSurf, top, normal in scope)
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

// matchSwellGLSL's block, last: replaces mwCol and mwA (s, vS, vN, N0, V, hUp, vW, mwFloor, uC, uR, uLqKey, uLqTex in scope)
export function swim2SwellGLSL() {
  if (!SWIM2_ON) return '';
  const H = SWIM2.heap, K = SWIM2.look, U = (hex) => `mtUndisplay(${v3s(hex)})`;
  return /* glsl */ `    {   // ?s3=...,swim2: the heaps' water (tunnel_s4_swim2.js)
      float sw2Sa = s - ${f(H.bow)}, sw2A = abs(sw2Sa), sw2Side = sw2Sa >= 0.0 ? 1.0 : -1.0, sw2B = (0.5 - vS.y) * 1.9;
      vec2 sw2G; vec4 sw2L;
      float sw2Hh = sw2Field(sw2A, sw2B, sw2Side, uSw2T, uLat, uAir, uLand, uPX, sw2G, sw2L);
      // 1. the heap's normal: the base surface's tangents from screen derivatives, its slope added
      vec3 sw2N = N0;
      { vec3 px = dFdx(vSw2W0), py = dFdy(vSw2W0);
        vec2 ux = dFdx(vec2(sw2Sa, sw2B)), uy = dFdy(vec2(sw2Sa, sw2B));
        float det = ux.x * uy.y - ux.y * uy.x, sg = dot(normalize(vN), N0) >= 0.0 ? 1.0 : -1.0;
        if (abs(det) > 1e-12) {
          vec3 tS = (px * uy.y - py * ux.y) / det, tB = (py * ux.x - px * uy.x) / det;
          sw2N = normalize(N0 - sg * (tS * (sw2G.x * sw2Side) / max(dot(tS, tS), 1e-4) + tB * sw2G.y / max(dot(tB, tB), 1e-4)));
        } }
      float sw2Rho = sw2L.z, sw2In = sw2S(0.003, 0.02, sw2Hh);             // on a heap (0 in the creases)
      float sw2Up = clamp(hUp / max(vS.w, 0.05), 0.0, 1.0);                // 0 at the floor's water .. 1 at the crest
      float sw2Front = (1.0 - sw2S(0.3, 0.48, abs(dot(vW - uC, uR)))) * sw2S(0.45, 0.8, sw2Up);   // tops in front of her body
      float sw2Ndv = clamp(dot(sw2N, V), 0.0, 1.0), sw2Key = clamp(dot(sw2N, uLqKey), 0.0, 1.0);
      // 2. the water between them: currents anchored in her travel; the floor's own water at the foot
      float sw2Cur = texture2D(uLqTex, vec2(sw2Sa * 1.3, (sw2B - ${f(H.vd * 1.6)} * uSw2T) * 2.1)).b * 0.65
        + texture2D(uLqTex, vec2(sw2Sa * 3.1 + 0.4, (sw2B - ${f(H.vd * 2.4)} * uSw2T) * 4.3)).b * 0.35;
      vec3 sw2C = mix(${v3s(K.water[0])}, ${v3s(K.water[1])}, sw2S(0.3, 0.6, sw2Cur));
      sw2C = mix(sw2C, ${v3s(K.water[2])}, sw2S(0.68, 0.85, sw2Cur));
      sw2C = mix(sw2C, ${v3s(K.deep)}, (1.0 - sw2In) * 0.55 * sw2S(0.15, 0.5, sw2Up));   // cobalt creases
      // 3. the heaps: azure, periwinkle toward the crest and in front of her, cyan on the lit upper left, a darker core
      vec3 sw2Hc = mix(${v3s(K.body)}, ${v3s(K.peri)}, clamp(sw2Up * 0.5 + sw2Front * 0.7, 0.0, 1.0));
      sw2Hc = mix(sw2Hc, ${v3s(K.lit)}, sw2S(0.55, 0.85, sw2Key) * 0.6);
      sw2Hc = mix(sw2Hc, ${v3s(K.core)}, (1.0 - sw2S(0.0, 0.65, sw2Rho)) * sw2S(-0.25, 0.45, sw2L.y) * 0.55);
      sw2C = mix(sw2C, sw2Hc, sw2In);
      vec3 sw2Col = mix(mwFloor, mtUndisplay(sw2C), sw2S(0.0, 0.3, sw2Up));
      // 4. white, all moving with the heaps: a broken rim on each upper outline, the silhouette's grazing rim, the glint,
      //    froth caps (not on the glassy domes in front of her), foam patches streaming down the face, crease droplets
      float sw2Brk = step(0.28, fract(sin(sw2L.w * 91.7 + floor(atan(sw2L.y, sw2L.x) * 2.2) * 13.1) * 4375.85));
      float sw2Rim = sw2S(${f(K.rim[0])}, ${f(K.rim[0] + 0.1)}, sw2Rho) * (1.0 - sw2S(${f(K.rim[1])}, 1.0, sw2Rho))
        * sw2S(0.0, 0.6, 0.3 - sw2L.y / max(sw2Rho, 1e-3)) * sw2Brk * sw2In;
      float sw2Fr = sw2S(${f(K.fres[0])}, ${f(K.fres[1])}, 1.0 - sw2Ndv) * sw2In * sw2S(0.4, 0.8, sw2Up);
      float sw2Sp = pow(max(dot(sw2N, normalize(uLqKey + V)), 0.0), 90.0) * ${f(K.spec)} * sw2In;
      float sw2Cap = (1.0 - sw2Front) * (1.0 - sw2S(-0.45, -0.15, sw2L.y)) * sw2In
        * step(0.5, texture2D(uLqTex, sw2L.xy * 0.35 + sw2L.w * 7.0).b);
      float sw2Fn = texture2D(uLqTex, vec2(sw2Sa * 2.3 + 0.7, (sw2B - ${f(H.vd * 1.8)} * uSw2T) * 1.6)).b;
      float sw2Fh = texture2D(uLqTex, vec2(sw2Sa * 9.0, (sw2B - ${f(H.vd * 1.8)} * uSw2T) * 7.0) + 0.3).b;
      sw2Cap = max(sw2Cap, sw2S(${f(K.foam[0])}, ${f(K.foam[1])}, sw2Fn) * step(0.42, sw2Fh) * (1.0 - sw2S(0.6, 0.85, sw2Up)) * (1.0 - sw2Front) * ${f(K.foam[2])});
      vec2 sw2Dq = vec2(sw2Sa, sw2B - ${f(H.vd * 1.5)} * uSw2T) * ${f(K.drops[0])}, sw2Di = floor(sw2Dq);
      float sw2Dr = step(${f(K.drops[1])}, sw2H(sw2Di + 3.3)) * (1.0 - sw2S(0.12, 0.28, length(fract(sw2Dq) - 0.5)))
        * (1.0 - sw2In) * sw2S(0.2, 0.5, sw2Up);
      sw2Col = mix(sw2Col, ${U(K.cap)}, sw2Cap * ${f(K.capK)});
      float sw2W = clamp(max(max(sw2Rim, sw2Fr), sw2Dr * ${f(K.drops[2])}) + sw2Sp, 0.0, 1.0);
      sw2Col = mix(sw2Col, ${U(K.white)}, sw2W);
      // 5. solid water, except each heap's top right in front of her body: her fur shows through as lavender (never in a jump)
      float sw2Clr = sw2Front * sw2In * (1.0 - sw2S(0.55, 0.85, sw2Rho)) * (1.0 - uAir);
      mwCol = sw2Col;
      mwA = clamp(max(mix(1.0, ${f(K.clear)}, sw2Clr), max(sw2W, sw2Cap * ${f(K.capK)})), 0.0, 1.0);
    }
`;
}
```

**`WebDemo/src/tunnel_r7_hero_water.js`**
```js
// :30 (after the SWIM import)
import { SWIM2_ON, SWIM2, swim2VertexDecl, swim2VertexGLSL } from './tunnel_s4_swim2.js';
// after :87 (the SWIM block)
  if (SWIM2_ON) Object.assign(HERO_WATER.swell, { ...SWIM2.swell, line: SWIM2.swell.line.slice(), mounds: [] });
// after :90 (S declared)
  if (SWIM2_ON) Object.assign(S, { trav: 0, zPrev: mascot.z || 0 });
// after :104 (S.land decayed), in the updater
    if (SWIM2_ON) { S.trav += Math.min(Math.max(z - S.zPrev, 0), 1) + S.land * dt * SWIM2.heap.landRush; S.zPrev = z; }
// :109
    if (SWIM_ON || SWIM2_ON) S.base += (W.surface(L, S.lagX, z, time.value) - S.base) * e(0.05);
// after :172 (heroSwell's uniforms)
  if (SWIM2_ON) u.uSw2T = { value: 0 };
// :180 (heroSwell's updater, appended)
    if (SWIM2_ON) u.uSw2T.value = S.trav + SWIM2.heap.idle * time.value;
// swellVertex: after :188 (its uniform line)        ${swim2VertexDecl()}
// swellVertex: after :203 (the wall clamp), before `vec3 w = ...`   ${swim2VertexGLSL()}
```

**`WebDemo/src/tunnel_r8_liquid.js`**
```js
// after :42
import { SWIM2_ON, SWIM2, swim2SwellDecl } from './tunnel_s4_swim2.js';
// :727 (liquidSwell's fs), prefix the varying line:   ${swim2SwellDecl()}varying vec3 vW, vN; varying vec4 vS;
// :762: an opaque heap field must hide its own far parts
    transparent: true, depthWrite: SWIM2_ON, depthTest: LIQUID.debug !== 3 });
// after :882 (waterlineFoam, after buildSplashBank)
  if (SWIM2_ON) for (const n of SWIM2.hide) { const o = scene.getObjectByName(n); if (o) o.material.visible = false; }
```

**`WebDemo/src/tunnel_r9_match_water.js`**
```js
// :38
import { SWIM2_ON, swim2SwellGLSL } from './tunnel_s4_swim2.js';
// :585
${FOCUS_ON && !SWIM2_ON ? focusSwellGLSL() : ''}${swimCollarGLSL()}${swim2SwellGLSL()}    col = mix(col, mwCol, uMatchOn);
```

**`WebDemo/src/tunnel_s4_swim.js`** (the floor's wake) and **`WebDemo/src/game.js`** (the droplet cap)
```js
// tunnel_s4_swim.js after :32
import { SWIM2_ON, SWIM2 } from './tunnel_s4_swim2.js';
// :186
export const swimWakeDecl = (RIPPLES) => (SWIM_ON || SWIM2_ON) ? `uniform vec4 uRipples[${RIPPLES}];\n` : '';
// :190-191
  if (!SWIM_ON && !SWIM2_ON) return '';
  const K = SWIM2_ON ? { ...SWIM.wake, ...SWIM2.wake } : SWIM.wake;
// game.js :4 add SWIM2_ON to the tunnel_s4_bt.js import; :1650
    if (WATER7_ON || SWIM_ON || SWIM2_ON) {
// (optional, the swim-animation reviewer's call: game.js :1033 `if (SWIM_ON || SWIM2_ON)` for swimPose)
```

## 4. The main risk, and how to check it on a frame

**Main risk:** the heap field reads as a quilt of pillows or cobbles (rejected three times: c2, W2b, the bank), or as
fins at the sides. A flat-colour mirror mock of my first lattice (heaps 0.10-0.19 m long, up to 0.16 m high) did show
side fins and rows of blobs, hence the broad, low numbers with gaps, rims, froth and creases.

Check on real frames (seed 7: start, +1 s, +2 s, Pixel 7), ORIGINAL | R9 | swim2 sheets:
1. her waterline per column (`52_diagnosis/scripts/pink_silhouette.py`): mean |d| <= 12 px at x 230-545 at the start;
2. heap bodies in the band y 1230-1450 (not white, not pink): at most 10 across the width, size spread (CV) >= 0.5;
3. white in the band <= 19-24 % (original 18.6, diagnosis classes): the white-cloud guard; tune `look.capK`, `look.foam`;
4. `flow_metric.py`: streaming >= 100 px/s and larger than the oscillation at the contact strip and beside her;
5. same-frame ablation with the tune `{swim2: {heap: {amp: [0, 0], designed: []}}}`;
6. `s3_func.cjs`: draw calls -3, the swell +10.4k triangles; per pixel about 13 heap evaluations (focus's loops skipped).

The art director's verdict must not say pillows, cobbles, balloons, basket or glass. Secondary risk: if the compared
start moment changes, `SWIM2.startClock` must follow it. The mirror scripts (`proto.py`, `mock.py`, `speed.py`) are in
this session's scratchpad only.
