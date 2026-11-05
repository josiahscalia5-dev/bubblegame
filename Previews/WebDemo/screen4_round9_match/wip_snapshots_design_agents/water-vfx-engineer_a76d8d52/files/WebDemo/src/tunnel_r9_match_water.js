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
    // (gate fixes, step 7: the front mounds at -4 and -21 lowered from 0.039 and 0.058 to 0.02 and -0.05: the original's waterline is 0.85-0.86 at 58-66%
    // across)
    mounds: [[32, 0.079, 10], [13, 0.091, 8], [-4, 0.02, 6], [-21, -0.05, 9], [-42, 0.057, 9], [55, 0.049, 9], [-62, 0.055, 9]],
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
    frontRim: 0.12,   // its share in front of the body (gate fixes, step 7: the pale glass-bowl lip)
    spec: 1.4,        // the key light's specular points
    crest: 0.95,      // white on the crest, broken into bubbly pieces (foam layer only)
    crestFront: 0.3,  // its share in front of the body (gate fixes, step 7: the lobes' rims make the waterline there)
    crestW: [0.03, 0.06, 0.008, 0.02],   // the crest's width (m below it): beside the body [base, + noise], in front of it [base, + noise]
  },
  // the lobes (spLumps reshaded): sRGB
  // alpha: in front of the body (see-through: the fur reads violet), sideAlpha: beside it (vivid blue); fres: the outline's
  // opacity (kept low: overlapping outlines read as cracked glass)
  // fleck: the hash threshold for white flecks (lower = more); cap: the broken white cap on top (from capFrom of the normal's up)
  // (gate fixes, step 7) the original's bank is glossy domes, each with a crisp white arc along its top, a soap-film violet
  // body (the left ones lavender, the right ones electric blue), a few round white glints, and dense bubbly white foam (white
  // with round blue holes) on the side lobes' tops and round their feet: violet: [front, left, right] soap tint; rimW: the
  // rim's start (1 - n.v) beside the body and in front of it, rimBreak its share of breaks; capFoam / footFoam: the foam's reach on the tops and round the feet;
  // frontFoam / frontFeet / capRight: their factors in front of the body and on the right (the original's right bank is
  // whiter); foamScale: the foam patches' size (smaller = broader); cell / holeShare: the foam's round holes (cells per unit
  // radius, the share of cells without one); fleckCell / fleck / frontFleck: the round glints (fewer, bigger beside the body:
  // the Art Director's 105 small white shapes left of it against 13; more in front, where the original has white spots on
  // the violet domes)
  lobe: { hi: '#4f9cff', mid: '#2f7cef', low: '#1f56d6', white: '#f6fcff', violetCol: '#8f7cf2', violet: [0.4, 0.4, 0.08],
    alpha: 0.42, sideAlpha: 0.72, fres: 0.12, film: 0.12, rim: 0.95, rimW: 0.47, frontRimW: 0.52, rimBreak: 0.05, spec: 1.6, specPow: 160, sheen: 0.05,
    foam: 0.95, foamScale: 0.32, capFoam: 0.3, capFrom: 0.25, footFoam: 0.42, frontFoam: 0.45, frontFeet: 1.3, capRight: 2.2, cell: 6.0, hole: 0.85,
    holeShare: 0.6, fleck: 0.9, frontFleck: 0.6, fleckCell: 3.4,
    foamSide: '#f6fcff', foamUp: [-0.1, 0.7] },   // the froth's colour on its sides (white where it faces up, from foamUp[0] to [1] of the normal's up)
  // settings handed to the splash pass and the liquid (merged into MATCH.splash, MATCH.liquid, MATCH.heroWater before those
  // files merge them)
  splash: {
    // the bank: clusters of glossy lobes on the crest, [phi, how many, biggest radius (m), outward (m), height from the crest (m)]
    // (gate fixes, step 7: the bank's mass) big clusters where the bank is on screen at 3.0 s (lobe probe: phi 46 lands at
    // 3% across, 34 at 11%, 22 at 22%, 9 at 37%, -4 at 50%, -16 at 62%, -28 at 76%, -42 at 90%; phi beyond +-55 is off the
    // frame), the front ones smaller and the right-front lower (the original's waterline: 0.81 at the left front, 0.85-0.86
    // at the right front)
    lumps: [
      [34, 4, 0.22, 0.05, -0.08], [46, 3, 0.2, 0.06, -0.09], [22, 3, 0.16, 0.05, -0.07], [9, 2, 0.13, 0.04, -0.08], [-4, 2, 0.12, 0.04, -0.1],
      [-16, 2, 0.12, 0.05, -0.2], [-28, 3, 0.18, 0.05, -0.12], [-42, 3, 0.2, 0.05, -0.1], [-56, 2, 0.16, 0.06, -0.1], [60, 2, 0.14, 0.06, -0.09],
    ],
    lumpSquash: 0.66,   // flatter: rolling wave lobes, not balls
    lumpBump: 0.08,     // smoother domes than splash's foam lumps (0.16), so the white rim follows the outline
    lumpMin: 0.55,      // the smaller lobes of a cluster from this share of its biggest (splash: 0.35): no tiny lobes, whose thin rims broke into specks
    // curling sheets: [phi, height, width, curl, lean, shift]: short curved splashes curling over, two in front toward the
    // camera, and at both sides (low on the right: the approved right coin's face stays clear); saturated turquoise water
    // with a broken white lip, not tall glass fins
    curls: [
      [9, 0.2, 0.34, 1.35, 0.2, 0], [-13, 0.1, 0.3, 1.35, 0.2, 0],   // (gate fixes, step 7: the right-front one lower, 0.1 not 0.18: the fur shows pink to 0.85 there)
      [36, 0.27, 0.36, 1.45, 0.12, 0], [56, 0.24, 0.32, 1.4, 0.12, 0], [-36, 0.2, 0.32, 1.4, 0.12, 0], [-56, 0.17, 0.28, 1.4, 0.12, 0],
    ],
    curlAlpha: 0.66, curlLip: 0.95,   // (the lip crisp white, not a pale wash)
    colours: { glass: '#1f9cfb', glassDeep: '#1258d8', white: '#4ec0ff', lip: '#f4fbff' },
    apron: { amount: 0.13 },
  },
  liquid: {
    // fewer flecks; fewer, bigger clusters of clear bubbles on the waterline
    // (gate fixes, step 7: one on the left, not five: their thin rims over the new lobes broke into specks; the faint spray
    // sheets hidden: at 5% only their white drops were left, more specks)
    hide: ['r6BowWave', 'lqSpraySheets'],
    foam: { flecks: 0.35, plumeAlpha: 0.05, bubbles: [[-60, 3], [-30, 2], [40, 1], [66, 2]], bubbleR: [0.035, 0.095] },
  },
  heroWater: {
    // fewer, larger droplets (the Art Director: at most 30 white shapes of 20 px or more beside the body; splash had 900 small
    // ones), more of them round, the right-hand ones lower (the approved right coin's face is clear)
    // (gate fixes, step 7: 30, not 180: many of the small white shapes beside the body were these)
    splash: { count: 30, flecks: 0.7,
      zones: [[0.22, [-48, -16], [0.7, 1.6], [0.2, 0.6], [0.016, 0.034], 0.05], [0.4, [16, 50], [1.2, 2.8], [0.25, 0.8], [0.016, 0.036], 0.06],
        [0.16, [-80, -24], [0.5, 1.3], [0.15, 0.5], [0.012, 0.026], 0.03], [0.22, [24, 80], [0.7, 2.0], [0.15, 0.6], [0.012, 0.026], 0.03]] },
  },
  // 3. (the user's fidelity brief, 5 November 14:16) soap bubbles THROUGHOUT the tunnel, at different sizes and depths, moving
  //    with the water (swirling round the tube with the walls' flow and drifting toward the camera): small ones along the
  //    walls and round the centre, mid-size ones, a few big ones. The original's are counted in
  //    Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/ (bubbles.txt). One instanced draw call.
  // (the user's checkpoint 01, 14:43: "many small and medium translucent bubbles INSIDE the vortex at near, mid and far
  // depth, among the rings and behind the coin, gem and sock, drifting with the swirl and buoyancy; not a few large
  // near-camera bubbles". The original, counted by eye at 3.0 s: about 7 outlined bubbles in the upper tunnel (one of
  // 0.07 W, the others 0.03-0.05 W, a cluster of small rings), 3 at the lower left, and hundreds of small white flecks,
  // crescents and tiny rings along the bands)
  bubbles: {
    count: 300,
    tube: 2.0,               // the hero lining's radius (m; the layout's tunnelRadius, 2.5, is the old drum's)
    // sizes: [share, world radius (m)]; far ones are drawn up to `far` times bigger (else they would be under a pixel). On
    // screen (0.69 r / distance frame widths): small 2-6 px, medium 8-20 px, an occasional large one 25-40 px (at 767 wide)
    sizes: [[0.66, [0.05, 0.1]], [0.29, [0.12, 0.22]], [0.05, [0.26, 0.34]]],
    far: [5, 24, 1.4],       // from 5 m into the drum, +140% by 24 m
    minPx: 1.6,              // never drawn under this radius (px): far ones stay readable rings, not sub-pixel dust
    // where round the tube: [share, angle (degrees from the side, 90 = the top, -40 and 220 just above the water), radius
    // (share of the tube's), distance ahead of the hero camera (m; drawn with a density of 1 / distance^2, so the near and
    // mid rings, which cover most of the screen, get most of them: spread evenly along the drum, perspective packed them into
    // the middle of the screen, 147 of 248 within 0.12 W of the vanishing point)]: all round the walls, inside the water's
    // swirl, and a few round the far centre. Each loops over its own `loop` metres, drifting toward the camera.
    zones: [[0.3, [20, 160], [0.62, 0.93], [5.3, 34]], [0.17, [160, 222], [0.62, 0.93], [5.3, 34]], [0.17, [-42, 20], [0.62, 0.93], [5.3, 34]],
      [0.3, [-30, 210], [0.28, 0.62], [5.3, 30]], [0.06, [0, 360], [0.08, 0.4], [20, 34]]],
    camAt: -4.9,             // the hero camera's place along the path at 3.0 s (m from the drum's mouth; hero probe)
    loop: 4.0,               // m each one loops over (faded at both ends)
    drift: [0.15, 0.45],     // m/s toward the camera (the walls' water flows toward the viewer)
    swirl: [0.06, 0.14],     // rad/s round the tube (the walls turn 0.012 turns/s, 0.075 rad/s)
    rise: [0.03, 0.09],      // m/s buoyancy (up, wrapping round the loop)
    avoid: 0.9,              // the collectibles' clear circle (x their size on screen): no bubble IN FRONT of a coin's, gem's or sock's face (behind them the depth test hides them)
    rim: 1.0, film: 0.6, body: 0.07, glint: 1.0, rimPx: 1.1,   // rimPx: the outline's least width in pixels
    // the white water streaks among the bands (brief item 3): short white crescents and dashes on the walls' water, turning
    // with its swirl and flowing toward the camera. [count, length x width (m), share of the tube's radius, bend]
    flecks: { count: 260, size: [[0.07, 0.2], [0.025, 0.05]], rho: [0.9, 0.985], bend: [0.0, 1.4], alpha: 0.85, ahead: [5.6, 34], angles: [-44, 224] },
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
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
  float rw = length(rel) / du / uHeroTanW;
  float tu = atan(rel.y, -rel.x) / 6.2831853;
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
    // (the glassy rim kept low in front of the body: there it read as a pale glass-bowl lip; the lobes' own rims and foam
    // make the waterline there)
    float mwRim = ${f4(K.rim)} * mix(1.0, ${f4(K.frontRim)}, mwFront);
    mwCol = mix(mwCol, mtUndisplay(${v3s(K.sky)}), clamp(mwFr * mwRim, 0.0, 1.0));
    float mwSpec = pow(max(dot(N, normalize(uLqKey + V)), 0.0), 140.0) * ${f4(K.spec)};
    mwCol += vec3(1.0) * mwSpec;
    float mwA = mix(mix(${f4(K.sideClear)}, ${f4(K.clear)}, mwFront), 1.0, smoothstep(${f4(K.solid[0])}, ${f4(K.solid[1])}, d));
    mwA = clamp(max(mwA, mwFr * mwRim * 0.9 + mwSpec), 0.0, 1.0);
#if LQ_FOAM
    {   // white on the crest, broken into bubbly pieces (blue shows through the cells)
      float mwN1 = texture2D(uLqTex, vec2(as * 1.3 - fl * 0.12, uTime * 0.05)).b, mwN2 = texture2D(uLqTex, vec2(as * 3.4 - fl * 0.2, 0.4 + uTime * 0.07)).b;
      // (thin in front of the body, where the fur shows violet through the water; wider beside it; crisp, not a pale wash)
      float mwCw = mix(${f4(K.crestW[0])} + ${f4(K.crestW[1])} * mwN1, ${f4(K.crestW[2])} + ${f4(K.crestW[3])} * mwN1, mwFront);
      float mwCrest = (1.0 - smoothstep(mwCw * 0.8, mwCw, d)) * smoothstep(0.5, 0.56, mwN1 * 0.6 + mwN2 * 0.55);
      // round bubbles of foam in it and below it down the face beside the body (the blue showing between them)
      vec2 mwBq = vec2(as * 22.0 - fl * 0.6, d * 22.0 - fl * 1.2), mwBi = floor(mwBq);
      float mwBh = lqHash(mwBi + 17.0), mwBl = length(fract(mwBq) - 0.5 - (vec2(lqHash(mwBi + 2.0), lqHash(mwBi + 9.0)) - 0.5) * 0.3);
      mwCrest *= 1.0 - step(mwBl, 0.2) * step(0.5, mwBh);
      mwCrest = max(mwCrest, step(mix(0.8, 0.9, mwFront) - 0.2 * (1.0 - smoothstep(0.0, 0.1, d)), mwBh) * (1.0 - smoothstep(0.18, 0.24, mwBl)) * (1.0 - smoothstep(0.08, 0.22, d)));
      mwCrest *= mix(1.0, ${f4(K.crestFront)}, mwFront);   // (in front of the body the lobes make the waterline: no white lip)
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
  return /* glsl */ `  {   // ?s3=match: a glossy translucent water dome with bubbly foam (tunnel_r9_match_water.js)
    float lbUp = dot(N, uU);
    float lbF = 1.0 - ndv, lbFr = pow(lbF, 2.2);
    // in front of the body (sideways within its half width of the camera, which rides behind it) see-through, so the fur
    // reads violet; beside it more solid water: lavender domes on the left, vivid electric blue on the right (as approved)
    float lbX = dot(vW - cameraPosition, uR);
    float lbFront = 1.0 - smoothstep(0.32, 0.62, abs(lbX)), lbLeft = smoothstep(0.2, 0.6, lbX), lbRight = smoothstep(0.2, 0.6, -lbX);
    vec3 lbCol = mix(${lin3(B.low)}, ${lin3(B.mid)}, smoothstep(0.2, 0.6, d));
    lbCol = mix(lbCol, ${lin3(B.hi)}, smoothstep(0.6, 0.95, d) * mix(0.35, 0.8, lbFront));
    float lbVi = mix(mix(${f4(B.violet[2])}, ${f4(B.violet[1])}, lbLeft), ${f4(B.violet[0])}, lbFront);
    lbCol = mix(lbCol, ${lin3(B.violetCol)} * (0.75 + 0.35 * d), lbVi * (0.55 + 0.45 * smoothstep(0.1, 0.7, lbF)));
    vec3 lbFilm = 0.62 + 0.38 * cos(6.2832 * (lbFr * 1.3 + lbUp * 0.35 + vec3(0.0, 0.33, 0.67) + vSeed + uTime * 0.04));
    lbCol = mix(lbCol, lbFilm * ${lin3(B.hi)}, lbFr * ${f4(B.film)});
    // glossy: one sharp round glint from the key light, a soft sheen round it
    float lbRd = max(dot(reflect(-L, N), V), 0.0);
    float lbSpec = pow(lbRd, ${f4(B.specPow)}) * ${f4(B.spec)} + pow(lbRd, 18.0) * ${f4(B.sheen)};
    // crisp white (opaque, so it reads white and not as a pale wash):
    // 1. an arc along the top of the outline, nearly whole (a few breaks)
    vec3 lbP = vO * 1.7 + vSeed * 5.0, lbPi = floor(lbP);
    float lbBreak = step(${f4(B.rimBreak)}, fract(sin(dot(lbPi, vec3(39.346, 11.135, 83.155))) * 24634.6345));
    float lbRw = mix(${f4(B.rimW)}, ${f4(B.frontRimW)}, lbFront);   // (wider beside the body, thinner in front of it)
    float lbRim = smoothstep(lbRw, lbRw + 0.12, lbF) * smoothstep(-0.3, 0.2, lbUp) * lbBreak;
    // 2. dense bubbly foam, white with round holes where the water shows through: patches on the tops of the lobes beside
    //    the body (less in front of it, where the fur shows violet) and round their feet; broad patches, not specks
    vec2 lbNq = vO.xz * ${f4(B.foamScale)} + vO.y * vec2(0.27, -0.19) + vSeed * 4.0 + vec2(uTime * 0.015, 0.0);
    float lbN = texture2D(uLqTex, lbNq).b * 0.8 + texture2D(uLqTex, lbNq * 2.4 + 0.31).b * 0.3;
    float lbFk = ${f4(B.capFoam)} * smoothstep(${f4(B.capFrom)}, ${f4(B.capFrom + 0.3)}, lbUp) * mix(1.0, ${f4(B.frontFoam)}, lbFront) * mix(1.0, ${f4(B.capRight)}, lbRight)
      + ${f4(B.footFoam)} * (1.0 - smoothstep(-0.5, 0.0, lbUp)) * mix(1.0, ${f4(B.frontFeet)}, lbFront);
    float lbFoam = smoothstep(0.97, 1.05, lbN + lbFk);
    vec3 lbBq = vO * ${f4(B.cell)} + vSeed * 11.0, lbBi = floor(lbBq);
    float lbBh = fract(sin(dot(lbBi, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    vec3 lbBo = fract(lbBq) - 0.5 - (fract(lbBh * vec3(7.13, 3.71, 5.29)) - 0.5) * 0.3;
    float lbBr = 0.2 + 0.15 * fract(lbBh * 11.7);
    float lbHole = step(${f4(B.holeShare)}, lbBh) * (1.0 - smoothstep(lbBr - 0.06, lbBr, length(lbBo)));
    lbFoam *= 1.0 - lbHole * ${f4(B.hole)};
    // 3. a few round glints on the dome (the original's white spots)
    vec3 lbQ = vO * ${f4(B.fleckCell)} + vSeed * 13.0, lbQi = floor(lbQ);
    float lbH = fract(sin(dot(lbQi, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    float lbFleck = step(mix(${f4(B.fleck)}, ${f4(B.frontFleck)}, lbFront), lbH) * (1.0 - smoothstep(0.13, 0.2, length(fract(lbQ) - 0.5))) * smoothstep(-0.2, 0.3, lbUp);
    float lbWhite = clamp(max(max(lbRim * ${f4(B.rim)}, lbFoam * ${f4(B.foam)}), lbFleck * ${f4(B.foam)}), 0.0, 1.0);
    // the froth white where it faces up, pale aqua on its sides (the original's bank: white caps over aqua-white foam); the
    // rims and glints stay crisp white
    vec3 lbFoamCol = mix(${lin3(B.foamSide)}, ${lin3(B.white)}, smoothstep(${f4(B.foamUp[0])}, ${f4(B.foamUp[1])}, lbUp));
    lbCol = mix(lbCol, lbFoamCol, clamp(lbFoam * ${f4(B.foam)}, 0.0, 1.0));
    lbCol = mix(lbCol, ${lin3(B.white)}, clamp(max(lbRim * ${f4(B.rim)}, lbFleck * ${f4(B.foam)}), 0.0, 1.0));
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
  report.bubbles = tunnelBubbles({ scene, TR, L, W, updaters, time, U });
  return report;
}

// ---------------------------------------------------------------- 3. soap bubbles throughout the tunnel (?s3=match only)
// Each bubble has a place in the drum's own frame (u along the path, an angle round the axis, a radius from it). Every frame
// it turns round the tube with the water, drifts toward the camera and rises a little (buoyancy), looping over its stretch of
// the drum, placed on the bent path with the track's frame (CPU, a table lookup each). Drawn as camera-facing discs in one
// instanced draw call, depth-tested (the walls, the water, the rim and the collectibles hide what is behind them): a clear
// body, a rainbow soap-film rim kept at least rimPx wide (so far ones read as small rings), a white glint up and to the left.
// In the same draw call, the white water streaks: short white crescents and dashes on the walls' water, along the bands (bent
// round the vanishing point) and turning with them. Faded where they would cover a collectible's face from in front (its
// screen circle and depth, set just before the draw with the real camera). Private random numbers; no textures.
function tunnelBubbles({ scene, TR, L, W, updaters, time, U }) {
  const B = MATCH_WATER.bubbles, FL = B.flecks, rnd = mulberryMw(0x6b0b5), TS = L.tunnelStart, TE = L.tunnelEnd;
  const axisH = W.WATER + W.AXIS_H, R0 = B.tube, D2R = Math.PI / 180;
  const pick = (zs) => { const tot = zs.reduce((t, z) => t + z[0], 0); let p = rnd() * tot; for (const z of zs) { if (p < z[0]) return z; p -= z[0]; } return zs[zs.length - 1]; };
  const R = (a) => a[0] + rnd() * (a[1] - a[0]);
  // a distance ahead of the hero camera with a density of 1 / d^2 on [a, b], and the stretch of path it loops over there
  const ahead = ([a, b]) => 1 / (1 / a - rnd() * (1 / a - 1 / b));
  const span = (d) => { const uc = Math.max(Math.min(TS + B.camAt + d, TE - 1.5 - B.loop / 2), TS - 1.0 + B.loop / 2); return [uc - B.loop / 2, uc + B.loop / 2]; };
  const list = [];
  for (let i = 0; i < B.count; i++) {
    const [, ang, rad, dd] = pick(B.zones), [, size] = pick(B.sizes), [u0, u1] = span(ahead(dd));
    list.push({ kind: 0, u0, u1, uB: R([u0, u1]), th: R(ang) * D2R, rho: R(rad) * R0, r: R(size), w2: 0, bend: 0, drift: R(B.drift), w: R(B.swirl), rise: R(B.rise), seed: rnd() });
  }
  for (let i = 0; i < FL.count; i++) {
    const [u0, u1] = span(ahead(FL.ahead));
    list.push({ kind: 1, u0, u1, uB: R([u0, u1]), th: R(FL.angles) * D2R, rho: R(FL.rho) * R0, r: R(FL.size[0]), w2: R(FL.size[1]), bend: R(FL.bend) * (rnd() < 0.75 ? -1 : 1),
      drift: R(B.drift), w: 0.075 * (0.85 + 0.3 * rnd()), rise: 0, seed: rnd() });
  }
  const n = list.length, quad = new THREE.PlaneGeometry(1, 1), g = new THREE.InstancedBufferGeometry();
  g.index = quad.index; g.setAttribute('position', quad.attributes.position);
  const aC = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4), aB = new THREE.InstancedBufferAttribute(new Float32Array(n * 4), 4);
  aC.setUsage(THREE.DynamicDrawUsage); aB.setUsage(THREE.DynamicDrawUsage);
  g.setAttribute('aC', aC); g.setAttribute('aB', aB); g.instanceCount = n;
  const avoid = Array.from({ length: 10 }, () => new THREE.Vector4());
  const uVP = { value: new THREE.Vector2() }, uRes = { value: new THREE.Vector2(1, 1) };
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uAvoid: { value: avoid }, uVP, uRes }, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */ `
attribute vec4 aC, aB;   // centre (world), radius or half length (m) | fade, seed, kind (0 bubble, 1 streak), streak half width (m) and bend packed
uniform vec4 uAvoid[10];  // the collectibles on screen: NDC centre, radius (NDC y units), view depth (0: none)
uniform vec2 uVP, uRes;   // the vanishing point (NDC), the drawing buffer (px)
varying vec2 vQ; varying float vA, vSeed, vKind, vRimW, vBend;
void main() {
  vec4 mv = viewMatrix * vec4(aC.xyz, 1.0), cc = projectionMatrix * mv;
  float k = step(0.05, cc.w) * aB.x;
  vec2 ndc = cc.xy / max(cc.w, 1e-3), asp = vec2(projectionMatrix[1][1] / projectionMatrix[0][0], 1.0);
  float pxPerM = projectionMatrix[1][1] / max(cc.w, 1e-3) * 0.5 * uRes.y;   // pixels per metre at the bubble
  float r = max(aC.w, ${f4(B.minPx)} / pxPerM);                              // never under minPx
  float rN = r * projectionMatrix[1][1] / max(cc.w, 1e-3);
  for (int i = 0; i < 10; i++) {   // (only from in front of the object: behind it the depth test hides the bubble)
    float dd = length((ndc - uAvoid[i].xy) * asp);
    float inFront = step(0.01, uAvoid[i].w) * step(cc.w, uAvoid[i].w);
    k *= mix(1.0, smoothstep(uAvoid[i].z * ${f4(B.avoid)} + rN * 0.5, uAvoid[i].z * ${f4(B.avoid)} + rN * 1.5 + 0.01, dd), inFront);
  }
  vKind = aB.z; vSeed = aB.y; vA = k;
  if (aB.z < 0.5) {
    mv.xy += position.xy * 2.0 * r;
    vRimW = clamp(${f4(B.rimPx)} / max(r * pxPerM, 0.5), 0.0, 0.9);
    vBend = 0.0;
  } else {
    // a streak along the band: its long side across the line to the vanishing point (on screen), bent round it
    vec2 radial = (ndc - uVP) * asp; float rl = length(radial);
    vec2 dirR = rl > 1e-4 ? radial / rl : vec2(0.0, 1.0), dirT = vec2(-dirR.y, dirR.x);
    float hw = max(fract(aB.w) * 0.1, 0.9 / pxPerM);          // half width (m), at least about a pixel
    vec2 off = dirT * position.x * 2.0 * r + dirR * position.y * 2.0 * hw * 2.5;
    mv.xy += off;
    vRimW = hw / r; vBend = (floor(aB.w) - 50.0) / 10.0;
  }
  gl_Position = projectionMatrix * mv;
  vQ = position.xy * 2.0;
}`,
    fragmentShader: /* glsl */ `
uniform float uTime;
varying vec2 vQ; varying float vA, vSeed, vKind, vRimW, vBend;
void main() {
  if (vA < 0.003) discard;
  if (vKind > 0.5) {   // a white streak: a tapered, slightly bent dash (y across it: 2.5 x its half width)
    float x = vQ.x, y = vQ.y * 2.5 - vBend * (x * x - 0.35);
    float body = exp(-y * y * 2.2) * (1.0 - smoothstep(0.55, 1.0, abs(x)));
    float a = clamp(body * 1.3, 0.0, 1.0) * ${f4(FL.alpha)} * vA;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vec3(0.93, 0.98, 1.0) * a, a);
    return;
  }
  float rr = dot(vQ, vQ);
  if (rr > 1.0) discard;
  float rad = sqrt(rr);
  float f = 1.0 - sqrt(1.0 - rr);   // 0 at the middle .. 1 at the outline
  // the outline: a thin bright ring at least rimPx wide (far bubbles read as small rings), the soap film inside it
  float ring = smoothstep(1.0 - vRimW * 1.6, 1.0 - vRimW * 0.4, rad) * (1.0 - smoothstep(0.985, 1.0, rad));
  float rim = max(pow(f, 2.5), ring);
  float body = ${f4(B.body)} * (0.6 + 0.8 * pow(f, 1.5));
  vec3 film = 0.6 + 0.4 * cos(6.2832 * (f * 1.3 + vQ.y * 0.4 + vec3(0.0, 0.33, 0.67) + uTime * 0.05 + vSeed));
  vec3 col = vec3(0.85, 0.95, 1.0) * body + mix(vec3(1.0), film, ${f4(B.film)}) * rim * ${f4(B.rim)};
  vec2 g1 = vQ - vec2(-0.42, 0.42), g2 = vQ - vec2(0.4, -0.38);
  float gs = max(0.018, vRimW * vRimW * 0.5);
  float gl = (exp(-dot(g1, g1) / gs) + 0.45 * exp(-dot(g2, g2) / (gs * 0.45))) * ${f4(B.glint)};
  float a = clamp(body + rim * 0.8 + gl, 0.0, 1.0) * vA;
  gl_FragColor = vec4((col + vec3(1.0) * gl) * vA, a);
}` });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'mwTunnelBubbles'; mesh.frustumCulled = false; mesh.renderOrder = 4;
  scene.add(mesh);
  // the collectibles (as tunnel_r8_liquid.js finds them for their reflections): coins are LODs, the gem, socks and hearts are
  // groups at the scene's root with a halo sprite
  const objs = [];
  scene.traverse((o) => { if (o.isLOD || (o.isGroup && o.parent === scene && o.children.some((c) => c.isSprite && c.name === 'r2Halo'))) objs.push(o); });
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  const sm = (x, a, b) => THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  updaters.push(() => {
    const t = time.value, c = aC.array, b = aB.array;
    for (let i = 0; i < n; i++) {
      const q = list[i], sp = q.u1 - q.u0;
      const u = q.u0 + ((((q.uB - q.u0 - q.drift * t) % sp) + sp) % sp);
      const th = q.th + q.w * t;
      // buoyancy: the bubble rises through its own band of heights and starts again lower (faded at both ends)
      const lift = q.rise ? ((q.seed * 7.0 + q.rise * t) % 0.6) : 0;
      const rho = q.rho * (1 + 0.03 * Math.sin(t * 1.3 + q.seed * 6.28));
      TR.frame(u, F);
      const x = rho * Math.cos(th), h = axisH + rho * Math.sin(th) + (q.kind ? 0 : 0.04 * Math.sin(t * 0.9 + q.seed * 9.0) + lift - 0.3);
      c[i * 4] = F.P.x + F.R.x * x + F.U.x * h; c[i * 4 + 1] = F.P.y + F.R.y * x + F.U.y * h; c[i * 4 + 2] = F.P.z + F.R.z * x + F.U.z * h;
      const din = u - TS;
      c[i * 4 + 3] = q.r * (1 + B.far[2] * sm(din, B.far[0], B.far[1]));
      // fade in and out at the ends of the loop and of the rise, and never under the water
      const fadeRise = q.rise ? sm(lift, 0, 0.08) * (1 - sm(lift, 0.5, 0.6)) : 1;
      b[i * 4] = sm(u, q.u0, q.u0 + 0.7) * (1 - sm(u, q.u1 - 0.7, q.u1)) * sm(h - W.WATER, 0.15, 0.35) * fadeRise;
      b[i * 4 + 1] = q.seed; b[i * 4 + 2] = q.kind;
      b[i * 4 + 3] = q.kind ? Math.round(50 + q.bend * 10) + Math.min(q.w2 * (1 + B.far[2] * sm(din, B.far[0], B.far[1])) / 0.1, 0.999) : 0;   // bend, half width / 0.1 m
    }
    aC.needsUpdate = true; aB.needsUpdate = true;
  });
  const wp = new THREE.Vector3(), near = [], vpW = new THREE.Vector3();
  mesh.onBeforeRender = (renderer, sc, cam) => {   // the collectibles' screen circles and the vanishing point, with the camera actually drawing
    near.length = 0;
    const P11 = cam.projectionMatrix.elements[5];
    for (const o of objs) {
      if (!o.visible) continue;
      o.getWorldPosition(wp);
      const dz = wp.clone().applyMatrix4(cam.matrixWorldInverse).z;
      if (dz > -0.3 || dz < -45) continue;
      wp.project(cam);
      if (Math.abs(wp.x) > 1.3 || Math.abs(wp.y) > 1.3) continue;
      const s = (o.isLOD ? 0.62 : 0.55) * Math.max(o.scale.x, o.scale.y, o.scale.z);
      near.push([wp.x, wp.y, s * P11 / -dz, -dz]);
    }
    near.sort((a, b2) => b2[2] - a[2]);
    for (let i = 0; i < avoid.length; i++) { const a = near[i]; if (a) avoid[i].set(a[0], a[1], a[2], a[3]); else avoid[i].set(0, 0, 0, 0); }
    TR.frame(Math.min((U && U.uHeroCam ? U.uHeroCam.value.z : TS) + 30, TE - 2), F);   // (the far axis point: the vanishing point)
    vpW.copy(F.P).addScaledVector(F.U, axisH).project(cam); uVP.value.set(vpW.x, vpW.y);
    renderer.getDrawingBufferSize(uRes.value);
  };
  return { count: B.count, flecks: FL.count, drawCalls: 1, triangles: n * 2, avoiding: objs.length };
}

// a private random sequence (never the game's seeded Math.random)
function mulberryMw(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
