// ?s3=match (test only): Round 9, the bounded art-match pass toward the user's ORIGINAL CLASSIC APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg, the ONLY target).
// `match` turns on everything `splash` does (Round 8's real water + the translucent splashes) plus this pass;
// `?s3=match,nofoam` is the same without the white foam layer. `?s3=splash`, `liquid`, `hero` and everything older are
// unchanged: nothing here runs without the switch, and the hooks elsewhere only add `|| match` to the hero switch, gated
// settings merges and one gated build call.
//
// Owned by the Tunnel & Lighting specialist (tunnel shape, proportions, depth, camera composition, wall/ring/centre light,
// the gold rim and lavender housing, object sizes and placement). The water floor and the water round the character are
// the Water & VFX specialist's: tunnel_r9_match_water.js.
//
// The method (the user, 5 November 2026): the procedural ring shaders gave the wrong look, so the walls' water is a
// REFERENCE-DERIVED material on the real 3D tube, animated (textures/screen4/, made by the tools named):
//   - tunnel_colour.png  the user's Reference 5 (a prop-free blue-water vortex, 2026-11-05 supporting references; look and
//                        finish only) unwrapped in log-polar space round its warm core, 1:1 in angle (seamless), rows on
//                        the game's own layout (log of rw, the screen radius round the vanishing point in widths, as in
//                        lqRing), its log r compressed 0.66 in the walls for the original's 8-10 bands, and colour-graded
//                        zone by zone (core / mid vortex / walls) to the ORIGINAL's own clear tunnel texels with a smooth
//                        linear colour transfer (tools/screen4/derive_ref5_water.py); clamped in log r;
//     tunnel_base.png    its blur (the centre of the contrast-keeping flow-map blend);
//     tunnel_detail.png, tunnel_normal.png, tunnel_var.png   its band-scale detail, a normal map from it, and streaks / warm
//                        tint / broken brightness, periodic in angle and in log r (12 bands of 0.25 ln) for continuous flow;
//   - rim_ramp.png       the ORIGINAL's rim band by angle round the rim's centre (housing, gold / mauve rim, violet bevel,
//                        lilac line, navy ring, blue), on the rim, the collar's top arc and the tube's first metre at the
//                        approved proportions (tools/screen4/derive_tunnel_textures.py, which also holds the original's
//                        object mask and unwrap used as the grade's targets).
//   The walls (heroWalls) and the collar's water draw the colour map with Water2's two-phase flow map (bounded offsets, so
//   the colour zones stay where the original has them) and the relief and streak maps scrolling on; the colours are written
//   as SCREEN colours (sRGB) and passed back through the inverse of the hero grade and the Neutral tone mapping, so they
//   show on screen as measured.
// Colours are sRGB hex converted to linear light by THREE.Color. Private random numbers only (never the game's seeded
// Math.random).
import * as THREE from 'three';

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const MATCH_ON = LIST.includes('match');
export const MATCH_FOAM = MATCH_ON && !LIST.includes('nofoam');
// ?s3=match,bare (diagnostic only): the coins, socks, gem, the two framing brushes and the hero bubbles are not drawn (they
// are moved to a camera layer the game does not render; gameplay is unchanged), so the tunnel's own look can be compared
export const MATCH_BARE = MATCH_ON && LIST.includes('bare');

// The hero moment is now 3.0 s after the tap (the user's checkpoint): the camera is then 0.95 m further along the path than at
// 2.85 s, so everything the hero scene stages before the drum's mouth moves +0.95 m with it (the Art Director's area 1 and 4).
const STAGE = 0.95;
const HERO_BUBBLES = [[-1.75, -0.72, 2.67, 0.33], [-0.2, -0.17, 2.76, 0.17], [-1.35, 0.95, 2.76, 0.16], [-2.15, -1.29, 2.43, 0.15],
  [-3.2, 0.88, 0.62, 0.15], [-2.9, 0.72, 0.8, 0.1], [-3.0, 0.92, 2.91, 0.13], [0.6, 0.9, 2.2, 0.09], [1.2, -1.0, 2.5, 0.1], [-0.8, 1.2, 1.9, 0.08]];
export const MATCH = {
  // deep-merged into HERO (tunnel_r7_hero.js) at load, before anything is built
  hero: {
    round6: {
      round5: {
        // pitched up 1.5 degrees and turned 0.4 degrees right: the vanishing point from (0.540, 0.512) to the approved (0.53, 0.53)
        camera: { lookY: 1.62, lookX: 0.194 },
        // the walls now carry the approved picture's own glow: the drum's bloom halved (a decrease; it was lifting their darks)
        bloom: { strength: 0.16 },
      },
      // the rim (the approved's outer edge fitted as a circle: 0.936 W round a centre 0.019 W right of and 0.292 W below the
      // vanishing point; band 0.03-0.04 H): at 3.75 m from the camera at 3.0 s that is a 2.55 m outer radius round (x -0.16,
      // h 0.755), 0.16 m thick
      porthole: { bezel: { inner: 2.39, outer: 2.55 }, face: { inner: 2.5 } },
      // the collectibles +0.7 to +0.95 m along the path (the Art Director's world targets, probe at 3.0 s); lanes fractional and
      // within reach as before; [lane, metres along the path (the mouth at 3.9), count, step, height, arc]
      // the centre coin just under the vanishing point as approved (0.468-0.571, 0.529-0.579), 1.15 m up: still within reach
      // (0.87 m) of the riding height in the middle lane; the far three-coin line stays in the middle lane, lowered to
      // 0.55 m (it piled up just under the vanishing point at 0.72 m)
      layout: { coinLines: [[-0.257, 2.75, 1, 1.0, 1.05, 0], [-1.14, 5.0, 1, 1.0, 1.5, 0], [1.07, 7.3, 1, 1.0, 1.15, 0], [2.243, 2.2, 1, 1.0, 0.51, 0],
        [2, 13.0, 1, 1.0, 0.55, 0], [1, 12.0, 3, 1.0, 0.55, 0]], replace: 3,
        firstSock: [1.97, 3.2, 0.97], extraGem: [-0.471, 5.7, 1.45] },
      // the two framing brushes +0.95 m; the right one smaller (it hid the vortex)
      // the left one smaller and nearer the axis, so it shows as the approved's round pom-pom at the left edge (approved box
      // x 0.01-0.20, y 0.233-0.415, 2.0% of the frame; measured at 3.0 s: x 0.01-0.17, y 0.238-0.459, 2.1%)
      r7: { deco: [[1.15 + STAGE, 1, 34, 0.48, 1.62], [2.6 + STAGE, -1, 2, 0.8, 1.98]] },
    },
    rim: { u: -2.1 + STAGE, centre: [-0.097, 0.755] },   // (x corrected after the probe: the centre was 0.023 W right of target)
    coinScale: 1.02,   // visual only (pick-up distances unchanged)
    // the big bubble in front of the rim plane (the collar cut it into a "ghost dome"), at the approved box (0.65-0.86,
    // 0.285-0.36) from the probed camera; the others +0.95 m
    bubbles: [[-1.7, -0.63, 2.52, 0.244], ...HERO_BUBBLES.slice(1).map(([u, x, h, r]) => [u + STAGE, x, h, r])],
    // round7's own bubbles duplicated the hero bubbles (a second big bubble, a column of small ones over the centre)
    hide: ['r6Flanges', 'r7Glow', 'r5Heart', 's4Rings', 'r7Bubbles'],
    vortex: { perLog: 4.5 },   // the procedural rings that remain (the floor's) as dense as the approved's 8-10 bands
    // the small warm glow at the centre (the walls' derived core is warm too); 9 m ahead instead of 16: the far floor, which
    // curves up in the drum and fills the centre with its lilac spiral, stood in front of it (depth test) at the hero moment;
    // the centre coin (8.3 m) stays in front of it
    // core / halo: a fuller warm-white core and peach halo (the approved centre, r < 0.06 W: warm 47%, median #f1d7db; the
    // hero's 0.45 / 0.12 gave a faint 0.02 W spot, so the floor's lilac showed through: centre lavender 59% at 3.0 s)
    glow: { alpha: 0.8, ahead: 9, core: 0.85, halo: 0.5 },
  },
  // the far gem (round3's, 10.7 m past the mouth, lane 0) sat within 0.08 W of the vanishing point at 3.0 s: 0.25 m further
  // left, still within the pick-up reach (0.87 m) from the left lane (game.js applies it, gated)
  farGem: [-0.35, 14.6],
  // deep-merged into LIQUID (tunnel_r8_liquid.js) after the splash pass's settings. The ring stops by screen radius now only
  // colour the far floor round the centre (the walls draw the derived map): the pastel lilac ring at 0.08 W made the centre
  // lavender (53% at 3.0 s; approved 11%), so it is the approved's warm white there (centre median #f1d7db)
  liquid: {
    grade: { glowSize: 0.13 },   // the small warm glow at the centre (splash: 0.105)
    stops: [
      [0.02, '#ffd29c', '#ffe7c4', '#fff8ec'], [0.05, '#f4b47a', '#ffd3a0', '#ffe8c8'], [0.08, '#efc6b4', '#fbe3d4', '#fff6ee'],
      [0.11, '#168ae6', '#20b2f4', '#8eeaff'], [0.135, '#1450d0', '#2a8cf0', '#5fd2fb'], [0.15, '#1747cc', '#2e95f1', '#79eefc'],
      [0.19, '#1747cc', '#2e95f1', '#5ec7f9'], [0.24, '#1d5fe0', '#4aa6f4', '#d4f3ff'], [0.29, '#123fc0', '#18a8f4', '#79eefc'],
      [0.36, '#0a2fa6', '#1f78f0', '#5ec7f9'], [0.43, '#123fc0', '#2e95f1', '#06cffd'],
    ],
  },
  splash: {},      // deep-merged into SPLASH (tunnel_r8_splash.js)
  heroWater: {},   // deep-merged into HERO_WATER (tunnel_r7_hero_water.js) after the splash pass's settings
  sockScale: 0.85, // the first sock's visual size
  // the coins' ramp (sRGB 0..1 as on screen): shade, yellow gold (hue 46), lemon; lum: the coin's lit linear brightness
  // mapped onto it; amount: how much of it replaces the coin's own colour
  coin: { shade: [0.839, 0.486, 0.008], mid: [0.973, 0.776, 0.11], lemon: [1.0, 0.945, 0.533], lum: [0.18, 0.95], amount: 0.85 },
  // the walls' derived material (see the header). The unwrap's constants come from textures/screen4/textures.json (written by
  // tools/screen4/derive_tunnel_textures.py): lnR0 = ln(0.025), span = ln(0.85 / 0.025), detailSpan = the detail's period
  walls: {
    lnR0: Math.log(0.025), span: Math.log(0.85 / 0.025), detailSpan: 2.99947,   // textures.json detail_ln_span (Reference 5's maps; 3.22676 was the dropped first texture's)
    period: 0.7,     // the colour map's flow cycle (s): each sample moves flowAmp outward and swirlAmp round per cycle
    flowAmp: 0.08,   // ln r per cycle (a third of a band: the two cross-faded samples stay close, so the bands stay crisp)
    swirlAmp: 0.012, // turns per cycle
    flow: 0.07,      // the relief and streak maps' continuous outward flow, ln r per second (toward the viewer)
    travel: 0.03,    // and per metre the character travels (the rings rush past as it rides in)
    swirl: 0.012,    // turns per second round the tube
    spec: 0.15,      // glossy glints from the derived normal map (the glow ahead and the key light), on top of the colours
    shimmer: 0.06,   // the variation map's streaks twinkling
    // measured display compensation: drawn through the inverse display transform, the walls still showed about 4% lighter
    // and less saturated than the approved at the same places (zero-flow test at 3.0 s: the drum's translucent layers and
    // texture filtering); undone before the transform
    lift: 0.08, sat: 1.2,
    // the warm centre (the approved: r < 0.06 W warm 47%, peach-gold #f1d7db .. #ffec87): a peach tint on the core zone
    core: { r: [0.035, 0.085], tint: [1.03, 0.9, 0.72], amount: 0.9 },
    // the glints tinted (the approved's brightest wall texels are #cae0ff, not pure white)
    glint: { tint: [0.84, 0.92, 1.0], from: [0.78, 0.96], amount: 0.85 },
    white: 0.93,     // the brightest linear value drawn (the approved's whites; just under the bloom's threshold after the grade)
    grade: { contrast: 1.08, saturation: 1.16, exposure: 1.0 },   // the hero grade to undo (HERO.grade), so the colours show as measured
  },
};
// a deep merge: objects merge key by key at every level, arrays and values replace
export function deepMerge(target, over) {
  for (const k of Object.keys(over || {})) {
    const v = over[k], t = target[k];
    if (v && typeof v === 'object' && !Array.isArray(v) && t && typeof t === 'object' && !Array.isArray(t)) deepMerge(t, v);
    else target[k] = v;
  }
  return target;
}
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.match;
  if (tune) deepMerge(MATCH, tune);
}

// ---------------------------------------------------------------- the textures derived from the approved picture
// (the walls draw the clean colour map, flowing; tunnel_base.png is its blur, the centre of the contrast-keeping blend)
const TEX = { colour: 'tunnel_colour.png', base: 'tunnel_base.png', detail: 'tunnel_detail.png', normal: 'tunnel_normal.png', variation: 'tunnel_var.png', rim: 'rim_ramp.png' };
export const MATCH_UNIFORMS = {
  uMatchOn: { value: 0 },   // 1 once every texture has loaded (otherwise the walls keep the Round 8 look)
  uMatchCol: { value: null }, uMatchBase: { value: null }, uMatchDet: { value: null }, uMatchNrm: { value: null }, uMatchVar: { value: null }, uMatchRim: { value: null },
};
// three.js gives every new texture and material a UUID drawn from Math.random: anything this file makes outside the
// opening's private-random build (the textures at load, the rim's material after they arrive) is made with a private
// sequence, so the game's seeded Math.random is never touched
function privately(seed, fn) { const keep = Math.random; Math.random = mulberryMt(seed); try { return fn(); } finally { Math.random = keep; } }
// resolves (never rejects) when the textures have loaded or failed; game.js waits for it before the first frame
export const MATCH_READY = MATCH_ON && typeof window !== 'undefined' ? new Promise((resolve) => privately(0x9a71, () => {
  const loader = new THREE.TextureLoader(), keys = Object.keys(TEX), got = {};
  let left = keys.length, failed = false;
  const done = () => {
    if (--left > 0) return;
    if (!failed) {
      MATCH_UNIFORMS.uMatchCol.value = got.colour; MATCH_UNIFORMS.uMatchBase.value = got.base; MATCH_UNIFORMS.uMatchDet.value = got.detail; MATCH_UNIFORMS.uMatchNrm.value = got.normal;
      MATCH_UNIFORMS.uMatchVar.value = got.variation; MATCH_UNIFORMS.uMatchRim.value = got.rim; MATCH_UNIFORMS.uMatchOn.value = 1;
    }
    resolve(!failed);
  };
  for (const k of keys) loader.load(`textures/screen4/${TEX[k]}`, (t) => {
    // raw values (the shader combines them in the approved's own sRGB space and converts to linear itself)
    t.colorSpace = THREE.NoColorSpace; t.flipY = false; t.wrapS = k === 'rim' ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;   // the rim ramp spans 0..pi only
    t.wrapT = k === 'colour' || k === 'base' || k === 'rim' ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.anisotropy = 4;
    t.needsUpdate = true; got[k] = t; done();
  }, undefined, () => { failed = true; done(); });
})) : Promise.resolve(false);
// for the shaders: placeholder textures until the real ones arrive (a sampler must always be bound); ?s3=match only
if (MATCH_ON) privately(0x9a72, () => {
  const blank = new THREE.DataTexture(new Uint8Array([128, 128, 255, 255]), 1, 1); blank.needsUpdate = true;
  for (const k of ['uMatchCol', 'uMatchBase', 'uMatchDet', 'uMatchNrm', 'uMatchVar', 'uMatchRim']) if (!MATCH_UNIFORMS[k].value) MATCH_UNIFORMS[k].value = blank;
});

// ---------------------------------------------------------------- the walls' GLSL (inserted into tunnel_r8_liquid.js's wallCode)
const f4 = (x) => (+x).toFixed(5);
// the rim ramp (textures/screen4/rim_ramp.png): columns the angle 0..pi round the rim's centre (0 = screen right), rows rho =
// r / the rim's outer radius from RAMP[0] (the housing just outside) to RAMP[1] (the blue inside the navy ring)
const RAMP = [1.04, 0.80];
// the rim on the approved: its band from rho 0.937 to 1; inside it, at 3.0 s, the collar spans rho 0.937 .. 0.9015 and the
// tube's first metre 0.9015 .. 0.80 (worked out from the camera: the tube's top edge at 1.95 m above the camera, 4.9 m ahead)
const RIM_RHO = { inner: 0.937, mouth: 0.9015, perMetre: 0.0991 };
// sampling the ramp: d = the point relative to the rim's centre (x + screen-left, h up), rho as above; sRGB out
const RIM_SAMPLE = /* glsl */ `
vec3 mtRimS(vec2 d, float rho) {
  float ang = atan(d.y, -d.x);
  float uu = ang < 0.0 ? (ang < -1.5708 ? 1.0 : 0.0) : ang / 3.14159265;
  return texture2D(uMatchRim, vec2(uu, clamp((${f4(RAMP[0])} - rho) / ${f4(RAMP[0] - RAMP[1])}, 0.0, 1.0))).rgb;
}
`;
// the value to draw so that it shows on screen as the sRGB colour c: the inverse of the output's Neutral tone mapping
// (exposure 1.05) and of the hero grade's contrast and saturation (whites capped just under the bloom's threshold)
function undisplayGLSL() {
  const M = MATCH.walls, G = M.grade;
  return /* glsl */ `
vec3 mtLin(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 mtUndisplay(vec3 c) {
  vec3 T = clamp(mtLin(c), 0.0, ${f4(M.white)});
  float np = max(T.r, max(T.g, T.b));
  vec3 x = T;
  if (np >= 0.76) {
    float peak = 0.0576 / (1.0 - np) - 0.24 + 0.76;
    float g = 1.0 - 1.0 / (0.15 * (peak - np) + 1.0);
    x = (T - np * g) / (1.0 - g) * (peak / np);
  }
  float mn = min(x.r, min(x.g, x.b));
  float off = mn >= 0.04 ? 0.04 : sqrt(max(mn, 0.0) / 6.25) - mn;
  vec3 g = max((x + off) / 1.05, 0.0);
  float L1 = max(dot(g, vec3(0.2126, 0.7152, 0.0722)), 1e-5);
  vec3 h = L1 + (g - L1) / ${f4(G.saturation)};
  float L0 = pow(L1 * pow(0.18, ${f4(G.contrast - 1)}) / ${f4(G.exposure)}, ${f4(1 / G.contrast)});
  return max(h * (L0 / L1), 0.0);
}
`;
}
// declarations and the shading, placed just before lqWall (the liquid's uniforms uTime, uHeroTravel, uHeroTanW, uHeroCam,
// uLqGlow and uLqKey are declared above it)
export function matchWallGLSL() {
  const M = MATCH.walls;
  return /* glsl */ `
// ?s3=match: the walls' material derived from the approved picture (tunnel_r9_match.js)
uniform sampler2D uMatchCol, uMatchBase, uMatchDet, uMatchNrm, uMatchVar, uMatchRim; uniform float uMatchOn;
${RIM_SAMPLE}
${undisplayGLSL()}
// cs: the point in the tube's cross-section (x sideways, + screen-left; h above the water), u along the path; W world, N0 its
// normal (toward the axis), T0 the path's direction
vec3 matchWall(vec2 cs, float u, vec3 W, vec3 N0, vec3 T0) {
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
  float rw = length(rel) / du / uHeroTanW;
  float tu = atan(rel.y, -rel.x) / 6.2831853;            // the screen angle round the vanishing point, 0 = right
  float lr = log(max(rw, 1e-4));
  vec2 bv = vec2(tu, (lr - ${f4(M.lnR0)}) / ${f4(M.span)});
  vec2 dx = dFdx(bv), dy = dFdy(bv);
  dx.x -= floor(dx.x + 0.5); dy.x -= floor(dy.x + 0.5);  // no mip seam where the angle wraps
  vec3 base = textureGrad(uMatchBase, bv, dx, dy).rgb;
  // the approved's own colours flowing outward (toward the viewer) and round: Water2's flow map on the clean colour map, two
  // samples whose offsets run half a cycle apart (each at most half a band from its place, so the approved's colour zones
  // stay where they are), cross-faded, the blend keeping the contrast round the static base (a plain cross-fade greys it)
  float cyc = uTime / ${f4(M.period)};
  float p0 = fract(cyc), p1 = fract(cyc + 0.5), wB = abs(0.5 - p0) * 2.0, wA = 1.0 - wB;
  vec2 oA = vec2(-${f4(M.swirlAmp)} * (p0 - 0.5), -${f4(M.flowAmp / M.span)} * (p0 - 0.5));
  vec2 oB = vec2(-${f4(M.swirlAmp)} * (p1 - 0.5) + 0.0037, -${f4(M.flowAmp / M.span)} * (p1 - 0.5));
  vec3 cA = textureGrad(uMatchCol, bv + oA, dx, dy).rgb, cB = textureGrad(uMatchCol, bv + oB, dx, dy).rgb;
  vec3 c = clamp(base + ((cA - base) * wA + (cB - base) * wB) / sqrt(wA * wA + wB * wB), 0.0, 1.0);
  // the colourless maps (relief, streaks) scroll on continuously, without a seam (periodic)
  float fl = uTime * ${f4(M.flow)} + uHeroTravel * ${f4(M.travel)};
  vec2 dv = vec2(tu + uTime * ${f4(M.swirl)}, (lr - ${f4(M.lnR0)} - fl) / ${f4(M.detailSpan)});
  vec2 ddx = vec2(dx.x, dx.y * ${f4(M.span / M.detailSpan)}), ddy = vec2(dy.x, dy.y * ${f4(M.span / M.detailSpan)});
  vec3 det = textureGrad(uMatchDet, dv, ddx, ddy).rgb - 0.5;
  vec4 vr = textureGrad(uMatchVar, dv, ddx, ddy);
  c = mix(c, vec3(1.0), vr.r * ${f4(M.shimmer)} * (0.5 + 0.5 * sin(uTime * 3.1 + vr.b * 25.0 + tu * 40.0)));
  float gl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, c * vec3(${M.glint.tint.map(f4)}), smoothstep(${f4(M.glint.from[0])}, ${f4(M.glint.from[1])}, gl) * ${f4(M.glint.amount)});
  c = mix(c, min(c * vec3(${M.core.tint.map(f4)}), 1.0), (1.0 - smoothstep(${f4(M.core.r[0])}, ${f4(M.core.r[1])}, rw)) * ${f4(M.core.amount)});
  c = clamp((c - ${f4(M.lift)}) / ${f4(1 - M.lift)}, 0.0, 1.0);
  float cl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = clamp(cl + (c - cl) * ${f4(M.sat)}, 0.0, 1.0);
  vec3 col = mtUndisplay(c);
  // glossy light on the derived relief: the glowing centre ahead and the key light behind the camera
  vec2 nm = textureGrad(uMatchNrm, dv, ddx, ddy).rg * 2.0 - 1.0;
  vec3 TA = normalize(T0 - N0 * dot(T0, N0)), TB = normalize(cross(N0, TA));
  vec3 N = normalize(N0 + TB * nm.x * 1.4 - TA * nm.y * 1.4);
  vec3 V = normalize(cameraPosition - W);
  float sg = pow(max(dot(N, normalize(normalize(uLqGlow - W) + V)), 0.0), 90.0);
  float sk = pow(max(dot(N, normalize(uLqKey + V)), 0.0), 160.0);
  float crest = smoothstep(-0.02, 0.12, dot(det, vec3(0.2126, 0.7152, 0.0722)));
  col += vec3(0.82, 0.95, 1.0) * (sg * 0.8 + sk) * ${f4(M.spec)} * crest;
  return col;
}
`;
}
// at the end of lqWall: the derived material replaces the procedural rings once the textures are in
export function matchWallApply() {
  return /* glsl */ `  col = mix(col, matchWall(cs, u, W, N0, T0), uMatchOn);   // ?s3=match (tunnel_r9_match.js)
`;
}
// in the wall's main (tunnel_r8_liquid.js wallFragment), after its own mouth edge: on the tube's first metre, round the upper
// part of the mouth, the approved's violet bevel, lilac line and navy ring (the rim ramp), so the blue starts at 0.29-0.30
// as approved (the tube's own mouth is at 0.256 at 3.0 s); object-anchored (metres from the mouth), so it stays on the tube
export function matchMouthGLSL(HERO, axisH, radius) {
  const C = HERO.rim.centre;
  return /* glsl */ `  {   // ?s3=match: the bevel, lilac line and navy ring inside the rim (tunnel_r9_match.js)
    float du0 = u - uStart;
    float rho = ${f4(RIM_RHO.mouth)} - ${f4(RIM_RHO.perMetre)} * du0;
    float upA = (cs.y - ${f4(axisH)}) / ${f4(radius)};
    float k = smoothstep(-0.06, 0.0, du0) * (1.0 - smoothstep(0.82, 1.0, du0)) * smoothstep(-0.15, 0.3, upA) * uMatchOn;
    col = mix(col, mtUndisplay(mtRimS(cs - vec2(${f4(C[0])}, ${f4(C[1])}), rho)), k);
  }
`;
}
// the collar's top arc (tunnel_r8_liquid.js liquidCollar): the bevel's outer part instead of the flat pale lavender
export function matchCollarGLSL(HERO) {
  const C = HERO.rim.centre;
  return /* glsl */ `  col = mix(col, mtUndisplay(mtRimS(vXHU.xy - vec2(${f4(C[0])}, ${f4(C[1])}), ${f4(RIM_RHO.inner)} + (${f4(RIM_RHO.mouth)} - ${f4(RIM_RHO.inner)}) * t)), uMatchOn);   // ?s3=match: the approved rim ramp (tunnel_r9_match.js)
`;
}
// the gold rim (round6's bezel, moved by heroRim): the approved rim band by angle round its centre and across its width
function matchBezel(scene, HERO) {
  const bezel = scene.getObjectByName('r6Bezel');
  if (!bezel) return null;
  const B = HERO.round6.porthole.bezel, rin = B.inner / B.outer;
  bezel.material = new THREE.ShaderMaterial({ uniforms: { uTime: { value: 0 }, ...MATCH_UNIFORMS }, side: THREE.DoubleSide,
    vertexShader: /* glsl */ `varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() { vL = position; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `uniform sampler2D uMatchRim; uniform float uMatchOn, uTime; varying vec3 vL; varying vec3 vN; varying vec3 vW;
${RIM_SAMPLE}
${undisplayGLSL()}
void main() {
  float r = length(vL.xy), t = clamp((r - ${f4(B.inner)}) / ${f4(B.outer - B.inner)}, 0.0, 1.0);
  vec3 c = mtRimS(vL.xy, ${f4(rin)} + (1.0 - ${f4(rin)}) * t);
  // a slow polished glint running round the gold
  float ang = atan(vL.y, -vL.x);
  float warm = smoothstep(0.05, 0.25, c.r - c.b);
  float glint = pow(max(0.0, sin(ang * 3.0 - uTime * 0.6)), 24.0) * exp(-pow((t - 0.55) / 0.15, 2.0)) * warm;
  gl_FragColor = vec4(mtUndisplay(min(c + vec3(0.12, 0.1, 0.06) * glint, 1.0)), 1.0);
}` });
  return { rho: [rin, 1] };
}

// ---------------------------------------------------------------- the collectibles (called from game.js after they are built)
// ?s3=match,bare: not drawn (camera layer 5). Visual only: positions, pick-up radii and the game's lists are untouched.
const HIDDEN_LAYER = 5;
const hideFromCamera = (o) => o.traverse((q) => q.layers.set(HIDDEN_LAYER));
export function matchCollectibles({ coins, gems, socks }) {
  const report = {};
  // the first sock (the approved's big right sock): 0.85 of its size, as the Art Director measured (its holder, and so its
  // pick-up place, is unchanged)
  if (socks[0] && socks[0].turn) { socks[0].turn.scale.multiplyScalar(MATCH.sockScale); report.sockScale = MATCH.sockScale; }
  if (MATCH_BARE) { for (const it of [...coins, ...gems, ...socks]) hideFromCamera(it.obj); report.bare = coins.length + gems.length + socks.length; }
  // the paw coins' look (one shared material): the approved's yellow gold, shinier and more dimensional (the Art Director:
  // hue 46, brightness range 0.34-0.42, lemon highlights #fff188, shade #d67c02; ours hue 39-41, range 0.18-0.21). The coin's
  // own lit brightness drives a ramp from the shade through yellow gold to lemon, drawn as those SCREEN colours (through
  // the inverse display transform); the embossed paw's relief comes out in the ramp. Visual only.
  const lod = coins.find((c) => c.obj && c.obj.isLOD);
  const mat = lod && lod.obj.levels[0] && lod.obj.levels[0].object.material;
  if (mat && mat.isMeshStandardMaterial) {
    const C = MATCH.coin, prev = mat.onBeforeCompile;
    mat.onBeforeCompile = (sh, r) => {
      if (prev) prev(sh, r);
      sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>\n${undisplayGLSL()}`)
        .replace('#include <tonemapping_fragment>', `{   // ?s3=match: the approved's yellow-gold coin ramp (tunnel_r9_match.js)
    float cL = dot(gl_FragColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    float ck = smoothstep(${f4(C.lum[0])}, ${f4(C.lum[1])}, cL);
    vec3 cRamp = ck < 0.5 ? mix(vec3(${C.shade.map(f4)}), vec3(${C.mid.map(f4)}), ck * 2.0) : mix(vec3(${C.mid.map(f4)}), vec3(${C.lemon.map(f4)}), ck * 2.0 - 1.0);
    gl_FragColor.rgb = mix(gl_FragColor.rgb, mtUndisplay(cRamp), ${f4(C.amount)});
  }
  #include <tonemapping_fragment>`);
    };
    mat.customProgramCacheKey = () => 'tripoCoinMatch';
    mat.needsUpdate = true;
    report.coin = C;
  }
  return report;
}

// Called at the end of buildHero (tunnel_r7_hero.js), after the liquid and the splash bank are built.
export function buildMatch({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet }) {
  const report = { textures: MATCH_UNIFORMS.uMatchOn.value === 1 };
  // the rim takes the approved rim ramp once the textures are in (game.js waits for them before the first frame); without
  // them it keeps the hero rim
  MATCH_READY.then((ok) => { if (ok) privately(0x9a73, () => { report.bezel = matchBezel(scene, HERO); const b = scene.getObjectByName('r6Bezel'); if (b && b.material.uniforms) b.material.uniforms.uTime = time; }); });
  // Screen 3's washer entrance model stood 1.3 m before the mouth, behind the hero's lavender face (1 m nearer the camera,
  // radius 14 m), so it never showed; with the rim and face moved 0.95 m in, it would stand in front of them: not drawn
  let entrance = null;
  updaters.push(() => { if (!entrance) entrance = scene.getObjectByName('s3Entrance'); if (entrance) entrance.visible = false; });
  if (MATCH_BARE) {   // the two framing brushes (and the hazard brushes, far away at the hero moment) and the hero bubbles
    let done = false;
    updaters.push(() => {
      if (done) return;
      scene.traverse((o) => { if (o.name === 's4Brush' || o.name === 'heroBubbles') hideFromCamera(o); });
      done = true;
    });
    report.bare = true;
  }
  return report;
}

// a private random sequence (never the game's seeded Math.random)
export function mulberryMt(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
