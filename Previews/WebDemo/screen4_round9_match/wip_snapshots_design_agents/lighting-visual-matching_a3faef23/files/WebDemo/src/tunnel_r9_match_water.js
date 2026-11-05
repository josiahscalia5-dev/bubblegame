// ?s3=match (test only): Round 9's water, owned by the Water & VFX specialist. The water floor's material and reflections
// through the tunnel, and the turbulent water round the pink character (glossy turquoise-blue waves, semi-translucent bubbly
// crests with blue beneath, spray and droplets, broken foam accents, never a white blanket), on top of Round 8's liquid
// (tunnel_r8_liquid.js) and the splash pass (tunnel_r8_splash.js). The ONLY target is the ORIGINAL APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg). Nothing here runs without
// the switch. Private random numbers only.
//
// 1. ONE CONTINUOUS BODY OF WATER (matchFloorDecl / matchFloorApply, inserted into tunnel_r8_liquid.js's floor): the water
//    floor draws the SAME reference-derived water as the walls (Tunnel & Lighting's map: the user's Reference 5 graded to the
//    original, laid out by the angle round the vanishing point and the log of the screen radius, flowing with Water2's
//    two-phase flow map), so the walls, the floor and the water round the character read as one swirling body: the floor
//    carries the walls' ring arcs, and Reference 5's lower flowing water (the angles below the horizontal) is the channel. On
//    top, the liquid's own moving waves (light on the facets turned to the glow, cobalt in the troughs), caustics and glints;
//    the map's pastel lilac pulled toward pale blue; vivid electric blue round the character (as approved).
//    (The centre's remaining lilac is drawn by the walls, not the floor: the hide probe in
//    Previews/WebDemo/screen4_round9_match/03_water_vfx/diagnostic/.)
// 2. THE WATER ROUND THE CHARACTER (Reference 3's look, the original's layout): the swell's crest raised into irregular lobes
//    (the waterline no longer straight; higher on the left, as approved), the swell reshaded as see-through glossy blue near
//    the crest (the fur shows violet through it) and the floor's derived water lower down (matchSwellGLSL); the splash bank's
//    foam lumps reshaded as glossy translucent water lobes with crisp white rim pieces, flecks and a specular point
//    (matchLumpGLSL); short curved splashes curling over in front and at both sides; fewer, larger droplets. Everything keeps
//    its reactions to a swerve, a jump and a landing.
// Colours are written as the screen's sRGB and passed through the inverse display transform (mtUndisplay, tunnel_r9_match.js)
// where noted (lin3: sRGB to linear for the lobes, which go through the grade like the other splash layers).
import * as THREE from 'three';
import { MATCH_ON, MATCH_FOAM, MATCH, deepMerge } from './tunnel_r9_match.js';

const f4 = (x) => (+x).toFixed(5);
export const MATCH_WATER = {
  // 1. the floor (sRGB adjustments on the derived map, then the inverse display transform)
  floor: {
    amount: 1.0,      // how much the derived water replaces the Round 8 floor
    wave: 0.22,       // the liquid's wave facets: lit toward the glow, shaded away from it (share of the colour)
    trough: 0.35,     // the wave troughs toward deep cobalt
    cobalt: '#0e4fd0',
    caustic: 0.35,    // luminous caustic web (cyan-white, added)
    glint: 0.9,       // the glow's glints on the waves (white, added)
    deep: 0.7, deepTint: [0.6, 0.8, 1.0], deepR: 2.4,   // round the character (radius m): toward vivid electric blue
    delilac: 0.85,    // the map's pastel lilac pulled toward pale blue on the floor (the approved floor ahead: lavender 3%, #aed7f3)
  },
  // 2. the water round the character. The swell (heroSwell) is reshaped and reshaded; the splash bank's foam lumps (spLumps)
  //    become glossy translucent water lobes; the curling sheets (spCurls) are turquoise glass curling over in front and at
  //    both sides; less white spray. All of it rides in the character's frame and reacts to a swerve, a jump and a landing as
  //    before (the swell's and the bank's own lift and boost).
  //    The swell's crest: heights (m above the water) every 5 degrees from -110 (screen right) to 110 (screen left), solved from
  //    the match camera at 3.0 s (hero probe: camera at u -4.9, h 1.55; the water 0.045 m up under the character) so the base
  //    waterline sits at 0.855 of the screen height in front of the body and 0.825-0.84 at the sides; then irregular lobes (the
  //    approved: the water climbs the body's sides, higher on the left, to about 0.80; 0.836 under the body)
  swell: {
    line: [0.049, 0.102, 0.154, 0.205, 0.256, 0.305, 0.354, 0.392, 0.429, 0.465, 0.499, 0.532, 0.552, 0.57, 0.587, 0.602, 0.604, 0.605,
      0.605, 0.603, 0.601, 0.598, 0.593, 0.6, 0.606, 0.61, 0.617, 0.623, 0.628, 0.632, 0.612, 0.59, 0.567, 0.542, 0.505, 0.466, 0.426,
      0.385, 0.342, 0.296, 0.25, 0.202, 0.154, 0.105, 0.057],
    // [phi, height (m), half width (degrees)]: tops at 0.787 (left side), 0.80 (left front), 0.825 (front), 0.812 (right front),
    // 0.808 (right side), 0.805 and 0.82 (the far sides)
    mounds: [[32, 0.079, 10], [13, 0.091, 8], [-4, 0.039, 6], [-21, 0.058, 8], [-42, 0.057, 9], [55, 0.049, 9], [-62, 0.055, 9]],
  },
  // the swell's look: sRGB (as on screen). Near the top it is thin and see-through (the fur behind it reads violet), lower
  // down it is the floor's derived water (one body of water)
  look: {
    glassHi: '#5cb6ff', glass: '#3a8af2', glassDeep: '#2264dc', sky: '#c6ebff',
    clear: 0.38,      // opacity at the very top in front of the body
    sideClear: 0.6,   // and beside it
    soft: 0.7,        // the floor's map on the swell's lower face: its blur (the lower water's cells read as cracked glass)
    solid: [0.05, 0.24],   // m below the crest over which it becomes solid
    top: 0.18,        // m below the crest over which the see-through glass turns into the floor's water
    rim: 0.38,        // the glassy rim at grazing angles (white-cyan)
    spec: 1.4,        // the key light's specular points
    crest: 0.95,      // white on the crest, broken into bubbly pieces (foam layer only)
  },
  // the lobes (spLumps reshaded): sRGB
  // alpha: in front of the body (see-through: the fur reads violet), sideAlpha: beside it (vivid blue); fres: the outline's
  // opacity (kept low: overlapping outlines read as cracked glass)
  // fleck: the hash threshold for white flecks (lower = more); cap: the broken white cap on top (from capFrom of the normal's up)
  lobe: { hi: '#62b2ff', mid: '#2f7cef', low: '#1f56d6', white: '#f6fcff', alpha: 0.3, sideAlpha: 0.62, fres: 0.12, film: 0.18, rim: 0.95, spec: 1.4, foam: 0.95,
    fleck: 0.72, cap: 0.95, capFrom: 0.72 },
  // settings handed to the splash pass and the liquid (merged into MATCH.splash, MATCH.liquid, MATCH.heroWater before those
  // files merge them)
  splash: {
    // the bank: clusters of glossy lobes on the crest, [phi, how many, biggest radius (m), outward (m), height from the crest (m)]
    lumps: [
      [34, 3, 0.15, 0.04, -0.085], [19, 3, 0.14, 0.05, -0.07], [6, 2, 0.13, 0.04, -0.06], [-7, 2, 0.13, 0.04, -0.055], [-19, 3, 0.14, 0.05, -0.07],
      [-33, 2, 0.12, 0.04, -0.085], [-48, 3, 0.13, 0.05, -0.095], [52, 3, 0.14, 0.05, -0.095], [70, 2, 0.11, 0.06, -0.09], [-68, 2, 0.11, 0.06, -0.09],
    ],
    lumpSquash: 0.66,   // flatter: rolling wave lobes, not balls
    // curling sheets: [phi, height, width, curl, lean, shift]: short curved splashes curling over, two in front toward the
    // camera, and at both sides (low on the right: the approved right coin's face stays clear); saturated turquoise water
    // with a broken white lip, not tall glass fins
    curls: [
      [9, 0.2, 0.34, 1.35, 0.2, 0], [-13, 0.18, 0.32, 1.35, 0.2, 0],
      [36, 0.27, 0.36, 1.45, 0.12, 0], [56, 0.24, 0.32, 1.4, 0.12, 0], [-36, 0.2, 0.32, 1.4, 0.12, 0], [-56, 0.17, 0.28, 1.4, 0.12, 0],
    ],
    curlAlpha: 0.66, curlLip: 0.95,   // (the lip crisp white, not a pale wash)
    colours: { glass: '#1f9cfb', glassDeep: '#1258d8', white: '#4ec0ff', lip: '#f4fbff' },
    apron: { amount: 0.13 },
  },
  liquid: {
    // fewer flecks; fewer, bigger clusters of clear bubbles on the waterline
    foam: { flecks: 0.35, plumeAlpha: 0.05, bubbles: [[-60, 3], [-30, 2], [28, 2], [48, 3], [66, 2]], bubbleR: [0.035, 0.095] },
  },
  heroWater: {
    // fewer, larger droplets (the Art Director: at most 30 white shapes of 20 px or more beside the body; splash had 900 small
    // ones), more of them round, the right-hand ones lower (the approved right coin's face is clear)
    splash: { count: 180, flecks: 0.7,
      zones: [[0.22, [-48, -16], [0.7, 1.6], [0.2, 0.6], [0.016, 0.034], 0.05], [0.4, [16, 50], [1.2, 2.8], [0.25, 0.8], [0.016, 0.036], 0.06],
        [0.16, [-80, -24], [0.5, 1.3], [0.15, 0.5], [0.012, 0.026], 0.03], [0.22, [24, 80], [0.7, 2.0], [0.15, 0.6], [0.012, 0.026], 0.03]] },
  },
};
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.matchWater;
  if (tune) deepMerge(MATCH_WATER, tune);
}
// handed on before tunnel_r8_splash.js and tunnel_r8_liquid.js merge MATCH.splash / heroWater / liquid (tunnel_r8_splash.js
// imports this file for that order); ?s3=match only
if (MATCH_ON) {
  deepMerge(MATCH.splash, MATCH_WATER.splash);
  deepMerge(MATCH.heroWater, MATCH_WATER.heroWater);
  deepMerge(MATCH.liquid, { ...MATCH_WATER.liquid, swell: { line: MATCH_WATER.swell.line, mounds: MATCH_WATER.swell.mounds } });
}

const v3s = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f4((n >> 16 & 255) / 255)}, ${f4((n >> 8 & 255) / 255)}, ${f4((n & 255) / 255)})`; };   // sRGB as written (screen colour)

// ---------------------------------------------------------------- 1. the floor: the walls' water continued (GLSL)
// declarations, placed in the floor's fragment shader after tunnel_r9_match.js's matchWallGLSL() (samplers, mtUndisplay)
export function matchFloorDecl() {
  const M = MATCH.walls, F = MATCH_WATER.floor;
  return /* glsl */ `
// ?s3=match: the floor's water, the walls' derived map at the same place (tunnel_r9_match_water.js). cs: (x, h) in the track's
// cross-section, u along the path; W world; N0 the surface's normal (up), T0 the path's direction; Nw the liquid's wave normal,
// hDet its wave height (0 trough .. 1 crest), caus its caustic web; onWall: 1 where the water meets the walls (the walls' own look);
// nearK: 1 round the character (the water there deeper, vivid electric blue as approved); soft: the map's blur instead of its
// detail (on the swell, where the lower water's cell pattern read as cracked glass)
vec3 matchFloor(vec2 cs, float u, vec3 W, vec3 N0, vec3 T0, vec3 Nw, float hDet, float caus, float onWall, float nearK, float soft) {
  float rw, tu;
  mtPlace(cs, u, rw, tu);   // the walls' place, corrected at the centre (tunnel_r9_match.js matchPlaceGLSL)
  float lr = log(max(rw, 1e-4));
  vec2 bv = vec2(tu, (lr - ${f4(M.lnR0)}) / ${f4(M.span)});
  vec2 dx = dFdx(bv), dy = dFdy(bv);
  dx.x -= floor(dx.x + 0.5); dy.x -= floor(dy.x + 0.5);
  vec3 base = textureGrad(uMatchBase, bv, dx, dy).rgb;
  // the walls' flow (the same two-phase flow map, so floor and walls meet without a seam)
  float cyc = uTime / ${f4(M.period)};
  float p0 = fract(cyc), p1 = fract(cyc + 0.5), wB = abs(0.5 - p0) * 2.0, wA = 1.0 - wB;
  vec2 oA = vec2(-${f4(M.swirlAmp)} * (p0 - 0.5), -${f4(M.flowAmp / M.span)} * (p0 - 0.5));
  vec2 oB = vec2(-${f4(M.swirlAmp)} * (p1 - 0.5) + 0.0037, -${f4(M.flowAmp / M.span)} * (p1 - 0.5));
  vec3 cA = textureGrad(uMatchCol, bv + oA, dx, dy).rgb, cB = textureGrad(uMatchCol, bv + oB, dx, dy).rgb;
  vec3 c = clamp(base + ((cA - base) * wA + (cB - base) * wB) / sqrt(wA * wA + wB * wB), 0.0, 1.0);
  c = mix(c, base, soft);
  float fl = uTime * ${f4(M.flow)} + uHeroTravel * ${f4(M.travel)};
  vec2 dv = vec2(tu + uTime * ${f4(M.swirl)}, (lr - ${f4(M.lnR0)} - fl) / ${f4(M.detailSpan)});
  vec2 ddx = vec2(dx.x, dx.y * ${f4(M.span / M.detailSpan)}), ddy = vec2(dy.x, dy.y * ${f4(M.span / M.detailSpan)});
  vec3 det = textureGrad(uMatchDet, dv, ddx, ddy).rgb - 0.5;
  vec4 vr = textureGrad(uMatchVar, dv, ddx, ddy);
  c = mix(c, vec3(1.0), vr.r * ${f4(M.shimmer)} * (0.5 + 0.5 * sin(uTime * 3.1 + vr.b * 25.0 + tu * 40.0)));
  float gl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, c * vec3(${M.glint.tint.map(f4)}), smoothstep(${f4(M.glint.from[0])}, ${f4(M.glint.from[1])}, gl) * ${f4(M.glint.amount)});
  c = mix(c, min(c * vec3(${M.core.tint.map(f4)}), 1.0), (1.0 - smoothstep(${f4(M.core.r[0])}, ${f4(M.core.r[1])}, rw)) * ${f4(M.core.amount)});
  // the map's pastel lilac (blue above red above green) pulled toward pale blue on the floor, away from the warm core
  float lil = clamp((c.r - c.g) * 12.0, 0.0, 1.0) * clamp((c.b - c.r) * 12.0, 0.0, 1.0) * smoothstep(0.05, 0.1, rw) * (1.0 - onWall);
  c.r = mix(c.r, c.g * 0.92, lil * ${f4(F.delilac)});
  // round the character the pale cyan streams turn toward vivid electric blue (the approved: electric blue beside the body)
  c = mix(c, c * vec3(${F.deepTint.map(f4)}), nearK * ${f4(F.deep)});
  // the floor's own water on the map (none where it meets the walls): the liquid's moving waves lit toward the glow and shaded
  // away from it, cobalt in their troughs; fading out far away (the map's own detail is finer there than the waves)
  float fk = (1.0 - onWall) * smoothstep(0.035, 0.12, rw);
  vec3 Lg = normalize(uLqGlow - W);
  float face = clamp(dot(Nw - N0 * dot(Nw, N0), Lg) * 3.0, -1.0, 1.0);
  c = clamp(c * (1.0 + face * ${f4(F.wave)} * fk), 0.0, 1.0);
  c = mix(c, ${v3s(F.cobalt)}, smoothstep(0.45, 0.1, hDet) * ${f4(F.trough)} * fk);
  c = mix(c, M_SCREEN(c, vec3(0.62, 0.9, 1.0)), clamp(caus * caus * ${f4(F.caustic)} * 2.0, 0.0, 1.0) * fk);
  c = clamp((c - ${f4(M.lift)}) / ${f4(1 - M.lift)}, 0.0, 1.0);
  float cl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = clamp(cl + (c - cl) * ${f4(M.sat)}, 0.0, 1.0);
  vec3 col = mtUndisplay(c);
  // glossy light: the derived relief's glints (as on the walls) and the liquid waves' glints toward the glow and the key light
  vec2 nm = textureGrad(uMatchNrm, dv, ddx, ddy).rg * 2.0 - 1.0;
  vec3 TA = normalize(T0 - N0 * dot(T0, N0)), TB = normalize(cross(N0, TA));
  vec3 N = normalize(N0 + TB * nm.x * 1.4 - TA * nm.y * 1.4);
  vec3 V = normalize(cameraPosition - W);
  float sg = pow(max(dot(N, normalize(Lg + V)), 0.0), 90.0);
  float sk = pow(max(dot(N, normalize(uLqKey + V)), 0.0), 160.0);
  float crest = smoothstep(-0.02, 0.12, dot(det, vec3(0.2126, 0.7152, 0.0722)));
  col += vec3(0.82, 0.95, 1.0) * (sg * 0.8 + sk) * ${f4(M.spec)} * crest;
  float wg = pow(max(dot(Nw, normalize(Lg + V)), 0.0), 400.0) + pow(max(dot(Nw, normalize(uLqKey + V)), 0.0), 300.0) * 0.6;
  col += vec3(0.85, 0.95, 1.0) * wg * ${f4(F.glint)} * smoothstep(0.55, 0.85, hDet) * fk;
  return col;
}
`.replace('M_SCREEN(c, vec3(0.62, 0.9, 1.0))', '(1.0 - (1.0 - c) * (1.0 - vec3(0.62, 0.9, 1.0)))');
}
// in the floor's main, after its own colour (tunnel_r8_liquid.js floorFragment): the derived water replaces it once the
// textures are in (the Round 8 floor stays as the fallback)
export function matchFloorApply() {
  const F = MATCH_WATER.floor;
  return /* glsl */ `  {   // ?s3=match: the walls' water continued onto the floor (tunnel_r9_match_water.js)
    float mwNear = exp(-rP * rP / ${f4(F.deepR * F.deepR)});
    vec3 mwCol = matchFloor(vec2(xu.x, vTrk.y), xu.y, vW, N0, normalize(vT), N, hDet, caus, side, mwNear, 0.0);
    col = mix(col, mwCol, uMatchOn * ${f4(F.amount)});
  }
`;
}

// ---------------------------------------------------------------- 2. the swell round the character (GLSL)
// in the swell's main (tunnel_r8_liquid.js liquidSwell), after its own colour and foam: see-through glossy turquoise near the
// crest (the fur behind it shows violet), the floor's derived water lower down (one body of water), a glassy rim at grazing
// angles, the key light's specular points, a white crest broken into bubbly pieces (foam layer only). Its place in the track
// frame comes from the camera's frame (the hero stretch is straight there).
export function matchSwellGLSL() {
  const K = MATCH_WATER.look;
  return /* glsl */ `  {   // ?s3=match: the swell as glossy see-through water (tunnel_r9_match_water.js)
    vec3 mwRc = vW - cameraPosition;
    vec2 mwCs = uHeroCam.xy + vec2(dot(mwRc, uLqSide), dot(mwRc, uLqUp));
    float mwU = uHeroCam.z + dot(mwRc, uLqFwd);
    vec3 mwFloor = matchFloor(mwCs, mwU, vW, uU, uT, N, hDet, 0.0, 0.0, 1.0, ${f4(K.soft)});   // (no caustic web, softer map: they read as cracks)
    float mwFront = 1.0 - smoothstep(0.4, 0.75, as);   // in front of the body: see-through; beside it more solid blue
    float mwTop = 1.0 - smoothstep(0.0, ${f4(K.top)}, d);
    float mwNdv = clamp(dot(N, V), 0.0, 1.0);
    float mwFr = pow(1.0 - mwNdv, 3.0);
    float mwKey = clamp(dot(N, normalize(uU * 0.8 + uR * 0.35 - uT * 0.3)) * 0.5 + 0.5, 0.0, 1.0);
    vec3 mwGlass = mix(mtUndisplay(${v3s(K.glassDeep)}), mtUndisplay(${v3s(K.glass)}), smoothstep(0.25, 0.7, mwKey));
    mwGlass = mix(mwGlass, mtUndisplay(${v3s(K.glassHi)}), clamp(smoothstep(0.7, 0.95, mwKey) * 0.7 + (1.0 - smoothstep(0.0, 0.04, d)) * 0.3, 0.0, 1.0));
    vec3 mwCol = mix(mwFloor, mwGlass, mwTop);
    mwCol = mix(mwCol, mtUndisplay(${v3s(K.sky)}), clamp(mwFr * ${f4(K.rim)}, 0.0, 1.0));
    float mwSpec = pow(max(dot(N, normalize(uLqKey + V)), 0.0), 140.0) * ${f4(K.spec)};
    mwCol += vec3(1.0) * mwSpec;
    float mwA = mix(mix(${f4(K.sideClear)}, ${f4(K.clear)}, mwFront), 1.0, smoothstep(${f4(K.solid[0])}, ${f4(K.solid[1])}, d));
    mwA = clamp(max(mwA, mwFr * ${f4(K.rim)} * 0.9 + mwSpec), 0.0, 1.0);
#if LQ_FOAM
    {   // white on the crest, broken into bubbly pieces (blue shows through the cells)
      float mwN1 = texture2D(uLqTex, vec2(as * 1.3 - fl * 0.12, uTime * 0.05)).b, mwN2 = texture2D(uLqTex, vec2(as * 3.4 - fl * 0.2, 0.4 + uTime * 0.07)).b;
      // (thin in front of the body, where the fur shows violet through the water; wider beside it; crisp, not a pale wash)
      float mwCw = mix(0.03 + 0.06 * mwN1, 0.008 + 0.02 * mwN1, mwFront);
      float mwCrest = (1.0 - smoothstep(mwCw * 0.8, mwCw, d)) * smoothstep(0.5, 0.56, mwN1 * 0.6 + mwN2 * 0.55);
      // round bubbles of foam in it and below it down the face beside the body (the blue showing between them)
      vec2 mwBq = vec2(as * 22.0 - fl * 0.6, d * 22.0 - fl * 1.2), mwBi = floor(mwBq);
      float mwBh = lqHash(mwBi + 17.0), mwBl = length(fract(mwBq) - 0.5 - (vec2(lqHash(mwBi + 2.0), lqHash(mwBi + 9.0)) - 0.5) * 0.3);
      mwCrest *= 1.0 - step(mwBl, 0.2) * step(0.5, mwBh);
      mwCrest = max(mwCrest, step(mix(0.8, 0.9, mwFront) - 0.2 * (1.0 - smoothstep(0.0, 0.1, d)), mwBh) * (1.0 - smoothstep(0.18, 0.24, mwBl)) * (1.0 - smoothstep(0.08, 0.22, d)));
      mwCol = mix(mwCol, mtUndisplay(${v3s('#f6fcff')}), mwCrest * ${f4(K.crest)}); mwA = max(mwA, mwCrest * ${f4(K.crest)});
    }
#endif
    col = mix(col, mwCol, uMatchOn);
    a = mix(a, mwA * smoothstep(-0.06, 0.06, hUp + 0.02), uMatchOn);
  }
`;
}
// ---------------------------------------------------------------- the bank's lobes (spLumps, tunnel_r8_splash.js), reshaded
// at the end of the lumps' main: a glossy translucent water lobe instead of a white foam lump: a see-through blue body (lit
// from above, a soap-film tint at the rim), a white rim along the top of its outline, a specular point, broken bubbly foam on
// its top
const lin3 = (hex) => { const c = new THREE.Color(hex); return `vec3(${f4(c.r)}, ${f4(c.g)}, ${f4(c.b)})`; };   // sRGB -> linear
export function matchLumpGLSL() {
  const B = MATCH_WATER.lobe;
  return /* glsl */ `  {   // ?s3=match: a glossy translucent water lobe (tunnel_r9_match_water.js)
    float lbUp = dot(N, uU);
    float lbFr = pow(1.0 - ndv, 2.2);
    // in front of the body (sideways within its half width of the camera, which rides behind it) see-through, so the fur
    // reads violet; beside it more solid, vivid blue water
    float lbFront = 1.0 - smoothstep(0.32, 0.62, abs(dot(vW - cameraPosition, uR)));
    vec3 lbCol = mix(${lin3(B.low)}, ${lin3(B.mid)}, smoothstep(0.2, 0.6, d));
    lbCol = mix(lbCol, ${lin3(B.hi)}, smoothstep(0.6, 0.95, d) * mix(0.35, 0.8, lbFront));
    vec3 lbFilm = 0.62 + 0.38 * cos(6.2832 * (lbFr * 1.3 + lbUp * 0.35 + vec3(0.0, 0.33, 0.67) + vSeed + uTime * 0.04));
    lbCol = mix(lbCol, lbFilm * ${lin3(B.hi)}, lbFr * ${f4(B.film)});
    float lbSpec = pow(max(dot(reflect(-L, N), V), 0.0), 60.0) * ${f4(B.spec)};
    // crisp white (opaque, so it reads white and not as a pale wash): the rim along the top of its outline broken into
    // pieces, a few pieces of cap on its top, and bubbly flecks of foam and spray caught on it (the blue showing between)
    vec3 lbP = vO * 2.8 + vSeed * 5.0, lbPi = floor(lbP);
    float lbPh = fract(sin(dot(lbPi, vec3(39.346, 11.135, 83.155))) * 24634.6345);
    float lbPiece = step(0.4, lbPh) * (1.0 - smoothstep(0.3, 0.42, length(fract(lbP) - 0.5)));
    float lbRim = smoothstep(0.55, 0.8, lbFr) * smoothstep(0.05, 0.45, lbUp) * lbPiece;
    float lbCap = smoothstep(${f4(B.capFrom)}, ${f4(B.capFrom + 0.1)}, lbUp) * lbPiece * step(0.7, lbPh);
    vec3 lbQ = vO * 6.0 + vSeed * 13.0 + vec3(0.0, uTime * 0.15, 0.0), lbQi = floor(lbQ);
    float lbH = fract(sin(dot(lbQi, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    float lbFleck = step(${f4(B.fleck)} - 0.16 * smoothstep(0.4, 0.9, lbUp), lbH) * (1.0 - smoothstep(0.12, 0.24, length(fract(lbQ) - 0.5))) * smoothstep(-0.3, 0.4, lbUp);
    float lbWhite = clamp(max(max(lbRim * ${f4(B.rim)}, lbCap * ${f4(B.cap)}), lbFleck * ${f4(B.foam)}), 0.0, 1.0);
    lbCol = mix(lbCol, ${lin3(B.white)}, lbWhite);
    lbCol += vec3(1.0) * lbSpec;
    col = lbCol;
    a = clamp(max(mix(${f4(B.sideAlpha)}, ${f4(B.alpha)}, lbFront) + ${f4(B.fres)} * lbFr + lbSpec, lbWhite * 0.96), 0.0, 1.0) * clamp(vK * 1.5, 0.0, 1.0);
  }
`;
}

// Called at the end of buildHero (tunnel_r7_hero.js), right after buildMatch.
export function buildMatchWater({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet }) {
  const report = { on: MATCH_ON, foam: MATCH_FOAM, floor: MATCH_WATER.floor, swell: MATCH_WATER.swell.mounds.length };
  if (!MATCH_ON) return report;
  report.lobes = !!scene.getObjectByName('spLumps');
  report.curls = !!scene.getObjectByName('spCurls');
  return report;
}
