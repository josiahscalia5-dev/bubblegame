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
      // (gate fix F6: inner 2.39 -> 2.42, a thinner gold band; the approved's warm rim is 0.019 H thick, ours was 0.032 H)
      porthole: { bezel: { inner: 2.42, outer: 2.55 }, face: { inner: 2.5 } },
      // the collectibles +0.7 to +0.95 m along the path (the Art Director's world targets, probe at 3.0 s); lanes fractional and
      // within reach as before; [lane, metres along the path (the mouth at 3.9), count, step, height, arc]
      // the centre coin just under the vanishing point as approved (0.468-0.571, 0.529-0.579), 1.15 m up: still within reach
      // (0.87 m) of the riding height in the middle lane; the far three-coin line stays in the middle lane, lowered to
      // 0.55 m (it piled up just under the vanishing point at 0.72 m)
      // (gate fixes F7 / F10, solved with hero_probe PICKS at 3.0 s: the right coin 0.1 m further and 0.08 W further right,
      // its centre on the approved's (0.907, 0.736); the first sock 0.17 m up and 0.03 m right, on the approved's (0.742,
      // 0.61), within reach from the right lane without a jump (0.81 m); the gem up 0.22 m onto the approved's (0.323, 0.509),
      // within reach from the left lane with a jump; the far three-coin line (it stood under the centre coin, the "totem";
      // the original has only the small centre coin and one far sock at the vanishing point) raised 0.35 m onto the line from
      // the camera through the centre coin, so at the hero moment it is hidden behind it; still in the middle lane, in reach)
      // (the user's checkpoint 05, 14:43 UTC: the upper-left coin stood on the big left coin, "a huge left coin pair". Solved
      // with hero_probe PICKS at 3.0 s onto the original's boxes: the big coin on (0.193, 0.602), 0.09 m up; the upper-left
      // coin on (0.150, 0.470): at its old distance that is 2.1 m up and 1.05 m outside the left lane, out of reach, so it
      // comes 1.6 m nearer (4.6 m from the camera), 2.03 m up, 0.47 m outside the left lane: 0.68 m from the body at the jump's
      // top (1.53 m; 0.73 m with the coin's bob), inside the 0.82 m pick-up reach; drawn smaller there (MATCH.coinScales) so it
      // is the original's 0.126 W.
      // The small lower-right coin by the centre coin 2 m further (the original's is smaller, at 0.589, 0.574))
      layout: { coinLines: [[-0.231, 2.77, 1, 1.0, 1.14, 0], [-0.674, 3.4, 1, 1.0, 2.03, 0], [1.07, 7.3, 1, 1.0, 1.15, 0], [2.357, 2.3, 1, 1.0, 0.57, 0],
        [2, 15.0, 1, 1.0, 0.5, 0], [1, 12.0, 3, 1.0, 0.9, 0]], replace: 3,
        firstSock: [2.0, 3.2, 1.14], extraGem: [-0.414, 5.7, 1.67] },
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
    glow: { alpha: 0.65, ahead: 9, core: 0.85, halo: 0.38 },   // (checkpoint 03: 0.8 / 0.5 washed the tight inner rings into a haze)
  },
  // the far gem (round3's, 10.7 m past the mouth, lane 0) sat within 0.08 W of the vanishing point at 3.0 s: 0.25 m further
  // left, still within the pick-up reach (0.87 m) from the left lane (game.js applies it, gated)
  // (gate fix F7: it sat 0.088 W left of the centre, a second small gem beside the centre coin: now in the middle lane at
  // 0.82 m, on the line from the camera through the centre coin, so at the hero moment it is hidden behind it; in reach)
  farGem: [1, 14.6, 0.82],
  // the second sock (round3's, lane 2 at 12.1 m) stood right of the centre coin: 5.1 m nearer and 0.6 m further right, at
  // 0.61 m, behind the big first sock at the hero moment; within reach from the right lane without a jump (0.63 m)
  secondSock: [2.85, 7.0, 0.61],
  // the far collectibles converge on the vanishing point (four coin lines and two socks 19-34 m ahead at the hero moment;
  // the original has only the small centre coin and one far sock there): visual only, coins and gems shrink away between
  // these distances from the camera (m) and grow back in as the character comes on, socks further out (the nearest far
  // sock, 23 m ahead, stays as the original's). Their places, pick-up radii and the counts are unchanged
  farFade: { coins: [17, 21], socks: [25, 28] },
  gemScale: 0.89,   // the gem beside the big left coin (gems[0]): its visual size (the approved's is 0.103 W wide, ours 0.115)
  // single coins' visual size, [layout u, scale] (checkpoint 05): the upper-left coin, brought nearer to stay in reach, at the
  // original's 0.126 W; the big left coin toward the original's 0.216 W (ours 0.188). Pick-up places unchanged
  coinScales: [[3.4, 0.69], [2.77, 1.1]],
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
    // the warm centre (the approved: r < 0.06 W warm 47%, white 37%, median #f1d7db): a pink-peach tint on the core zone.
    // (Gate fixes: with the centre's place corrected the core rows show there, and the old tint 1.03, 0.9, 0.72 at 0.9 made
    // an orange ball, white 17%)
    // white: on the walls (and the far end), the core zone's pale lilac turned warm white first (the floor takes tint only)
    core: { r: [0.035, 0.085], tint: [1.0, 0.94, 0.92], amount: 0.5, white: 1.0 },
    // the glints tinted (the approved's brightest wall texels are #cae0ff, not pure white); `glint` is also the floor's
    // (tunnel_r9_match_water.js); the walls now take `glintWall`: bluer (ours read lilac-white #e6e0f9 S 0.14 against #cae0ff
    // S 0.27) and not on the warm patches (blue-tinting a bright yellow made it lime: the gate's 783 lime pixels)
    glint: { tint: [0.84, 0.92, 1.0], from: [0.78, 0.96], amount: 0.85 },
    // (only the brightest, and only on the walls: over the whole bright range it turned the mid vortex's whites pale blue,
    // white 11% against the approved's 22%)
    glintWall: { tint: [0.76, 0.86, 1.0], from: [0.88, 0.98], amount: 0.7 },
    // the gate fixes F3 / F4 on the walls (from rw zone[0], fully from zone[1]; the warm patches kept):
    // contrast: the colour map's own bands round its blur (the approved's crisper bands: band contrast 0.17-0.20, ours 0.13)
    contrast: 1.2,
    // the relief's troughs toward the approved's deep cobalt (#4a64d2, 3.9% of the upper wall; ours 1.2%) and its crests and
    // the streak map's highlights toward the approved's cyan (#2fb2f5, 13.3%; ours 6.6%, too light and green)
    // (narrow ranges: crisp band edges, as the approved's painted bands)
    trough: { col: '#3c56cf', amount: 0.3, from: [0.08, 0.12] },
    crest: { col: '#2fb2f5', amount: 0.85, from: [0.02, 0.06], streak: 0.12 },
    zone: [0.12, 0.18],
    // the mid vortex's pastel lilac (the map's rows rw 0.06-0.12: lavender 20-33%) toward pale blue and white (approved mid
    // vortex r 0.08-0.20: lavender 12%, white 22%, pale blue 18%); [in, full, full to, out] in rw
    delilac: { amount: 1.0, r: [0.03, 0.06, 0.17, 0.24] },
    // the concentric bands (see matchWall): perLog bands per unit of ln r (about 9 between 0.04 and 0.45 W), spiral bands per
    // turn (a whole number: seamless), warp the spacing's irregularity (bands) at warpF per ln, wobble from the variation map,
    // flow ln r per second outward and travel per metre ridden; r: [in, full, full to, out] in rw; gap: the dark cobalt
    // between bands (from: where in the band it deepens); rim: the broken cyan-white edge at each band's inner side
    // glow: the azure light on each band's inner part (to: where it fades); smooth: the water's cell pattern halved inside
    // the bands by this much; rim.broken: how much the relief breaks the rim line
    // blueFrom: the gaps and the azure light only outside the warm core (rw)
    // (the user's checkpoint 03, 14:43 UTC, "several distinct deep cobalt rings lead to a tight vortex": the wobble 0.6 bent
    // the bands into topographic blobs; at 0.15 they are the approved's concentric drum rings. Narrower, deeper gaps; the
    // water's cell pattern kept a little more (turbulence); ice-blue rims, wider)
    // inner: the gaps' pastel pink inside the core's reach (blueFrom); splash: white where the relief crests (dl, from) on
    // the band's lit part (bk under `to`)
    bands: { perLog: 3.7, spiral: 1, warp: 0.22, warpF: 2.6, wobble: 0.15, flow: 0.05, travel: 0.03, r: [0.035, 0.065, 0.5, 0.62], smooth: 0.7,
      blueFrom: [0.075, 0.12],
      gap: { col: '#2646c4', from: [0.68, 0.88], amount: 0.85 }, rim: { col: '#cfe9ff', w: [0.0, 0.11], amount: 0.9, broken: 0.5 },
      glow: { col: '#3fbcf7', to: [0.3, 0.6], amount: 0.5 },
      inner: { col: '#e8a6d0', amount: 0.8 }, splash: { col: '#f2f8ff', from: [0.14, 0.19], to: [0.3, 0.6], amount: 0.9 },
      // edge: the thin ice-blue ring lines (w: [full to, out] in band phase; broken: the relief's dl where they show; second:
      // [phase, half width] of the sparser inner line; boost: over the whites' cap, so #c2dcff shows as about #cee2f9 against
      // the approved's brightest #cae0ff; at 1.3 they turned white and broke into specks, at 1.05 the glints went lilac again)
      edge: { col: '#c2dcff', w: [0.02, 0.045], broken: [-0.13, -0.07], amount: 1.0, second: [0.42, 0.025], secondAmount: 0.6, boost: 1.12 } },
    royal: { amount: 0.6, to: 0.37 },   // see matchWall (to: the green's place between red and blue, 0.37 = 218 degrees)
    // the pastel rainbow arc (the approved: about 0.2-0.25 W above the centre): radius and half width in rw, colours inner,
    // middle, outer and the left side's pink
    rainbow: { r: 0.225, w: 0.036, amount: 0.85, cols: ['#f4b9e6', '#ffd3a0', '#fff1b0', '#f59ad8'] },
    // the mid vortex (the approved r 0.08-0.20 W: white 22%, pale blue 18%; ours white 8%, pale blue 32%): its brightest
    // pale blue whitened; r: [in, full, full to, out] in rw, from: the brightness where it starts and is full
    midWhite: { r: [0.05, 0.08, 0.17, 0.24], from: [0.66, 0.82], amount: 0.9 },
    white: 0.93,     // the brightest linear value drawn (the approved's whites; just under the bloom's threshold after the grade)
    grade: { contrast: 1.08, saturation: 1.16, exposure: 1.0 },   // the hero grade to undo (HERO.grade), so the colours show as measured
  },
  // the centre (the Art Director's gate F1): the colour map's place (rw, tu) is worked out in each point's own track frame,
  // which is exact on the straight part of the tube but not where the far tube bends across the line of sight (the lining
  // ends 38 m ahead and the path pitches and turns at 16-30 m): no wall point inside 0.09 W sampled the map's warm core rows,
  // so the centre read lilac. Inside screen radius r[1] (fully inside r[0]) it is worked out from the fragment's real place
  // on the screen round the projected axis `ahead` metres in front of the camera (at most `end` before the tunnel's end),
  // shifted by `offset` (screen fractions, x right, y down)
  // (offset: the far axis lands at (0.500, 0.531) at 3.0 s, 0.028 W left of the approved centre (0.528, 0.532), and the
  // luminous core goes where the approved has it); exitGlow: the exit's additive glow (round2: a blue 0.12, 0.16, 0.3)
  centre: { ahead: 30, end: 2, offset: [0.028, 0], r: [0.09, 0.14], exitGlow: [0.2, 0.15, 0.11] },
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
  // the centre's place on the screen (drawing-buffer fractions, y up) and the size in pixels of the target being drawn
  // (set before each picture by buildMatch; MATCH.centre)
  uMatchVP: { value: new THREE.Vector2(0.5, 0.5) }, uMatchRes: { value: new THREE.Vector2(0, 0) },
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
const hx = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f4((n >> 16 & 255) / 255)}, ${f4((n >> 8 & 255) / 255)}, ${f4((n & 255) / 255)})`; };   // sRGB as written (a screen colour)
// the rim ramp (textures/screen4/rim_ramp.png): columns the angle 0..pi round the rim's centre (0 = screen right), rows rho =
// r / the rim's outer radius from RAMP[0] (the housing just outside) to RAMP[1] (the blue inside the navy ring)
const RAMP = [1.04, 0.80];
// the rim on the approved: its band from rho 0.937 to 1; inside it, at 3.0 s, the collar spans rho 0.937 .. 0.9015 and the
// tube's first metre 0.9015 .. 0.80 (worked out from the camera: the tube's top edge at 1.95 m above the camera, 4.9 m ahead)
const RIM_RHO = { inner: 0.937, mouth: 0.9015, perMetre: 0.0991 };
// (the collar's top arc starts at the bezel's inner edge, rho = inner / outer radius: 0.937 at 2.39 / 2.55; gate fix F6 made
// the bezel thinner)
{ const B = MATCH.hero.round6.porthole.bezel; RIM_RHO.inner = B.inner / B.outer; }
// the bezel's inner and outer sides take the ramp at these rho (the violet bevel, the housing)
const BEZEL_SIDES = [0.912, 1.03];
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
// the colour map's place for a point (the walls' matchWall and the floor's matchFloor, tunnel_r9_match_water.js): rw, the
// screen radius round the vanishing point in screen widths, and tu, the screen angle / 2 pi (0 = screen right, counter-
// clockwise). Away from the centre it is worked out in the point's own track frame (exact on the straight part of the tube);
// inside MATCH.centre.r it is blended into the fragment's real place on the screen round uMatchVP (the projected far axis),
// so the far tube, which bends across the line of sight, shows the map's warm core rows where it appears at the centre. The
// angle is blended through unit vectors (no jump where it wraps)
function matchPlaceGLSL() {
  const C = MATCH.centre;
  return /* glsl */ `
void mtPlace(vec2 cs, float u, out float rw, out float tu) {
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
  rw = length(rel) / du / uHeroTanW;
  vec2 at = vec2(-rel.x, rel.y);
  vec2 sd = gl_FragCoord.xy - uMatchVP * uMatchRes;
  // (in widths of the 1:2 reference frame: on screens narrower than 1:2 the camera keeps the original's vertical framing
  // and uHeroTanW carries the 1:2 width, so the reference width is half the height; identical at 1:2)
  float rs = length(sd) / max(min(uMatchRes.x, 0.5 * uMatchRes.y), 1.0);
  float k = (1.0 - smoothstep(${f4(C.r[0])}, ${f4(C.r[1])}, rs)) * step(1.0, uMatchRes.x);
  rw = mix(rw, rs, k);
  vec2 ab = mix(at / max(length(at), 1e-5), sd / max(length(sd), 1e-5), k);
  tu = atan(ab.y, ab.x) / 6.2831853;
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
uniform vec2 uMatchVP, uMatchRes;
${RIM_SAMPLE}
${undisplayGLSL()}
${matchPlaceGLSL()}
// cs: the point in the tube's cross-section (x sideways, + screen-left; h above the water), u along the path; W world, N0 its
// normal (toward the axis), T0 the path's direction
vec3 matchWall(vec2 cs, float u, vec3 W, vec3 N0, vec3 T0) {
  float rw, tu;
  mtPlace(cs, u, rw, tu);
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
  // (on the walls the bands round the blur a little crisper: the gate's F3)
  float wz = smoothstep(${f4(M.zone[0])}, ${f4(M.zone[1])}, rw);
  vec3 c = clamp(base + ((cA - base) * wA + (cB - base) * wB) / sqrt(wA * wA + wB * wB) * mix(1.0, ${f4(M.contrast)}, wz), 0.0, 1.0);
  // the colourless maps (relief, streaks) scroll on continuously, without a seam (periodic)
  float fl = uTime * ${f4(M.flow)} + uHeroTravel * ${f4(M.travel)};
  vec2 dv = vec2(tu + uTime * ${f4(M.swirl)}, (lr - ${f4(M.lnR0)} - fl) / ${f4(M.detailSpan)});
  vec2 ddx = vec2(dx.x, dx.y * ${f4(M.span / M.detailSpan)}), ddy = vec2(dy.x, dy.y * ${f4(M.span / M.detailSpan)});
  vec3 det = textureGrad(uMatchDet, dv, ddx, ddy).rgb - 0.5;
  vec4 vr = textureGrad(uMatchVar, dv, ddx, ddy);
  c = mix(c, vec3(1.0), vr.r * ${f4(M.shimmer)} * (0.5 + 0.5 * sin(uTime * 3.1 + vr.b * 25.0 + tu * 40.0)));
  // the gate's F3 / F4 on the walls (not the centre, not the warm patches): the relief's troughs deep cobalt, its crests and
  // the streak map's highlights cyan
  float dl = dot(det, vec3(0.2126, 0.7152, 0.0722));
  float wk = wz * (1.0 - smoothstep(-0.02, 0.08, c.r - c.b));
  c = mix(c, ${hx(M.trough.col)}, smoothstep(${f4(M.trough.from[0])}, ${f4(M.trough.from[1])}, -dl) * ${f4(M.trough.amount)} * wk);
  float gl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, ${hx(M.crest.col)}, smoothstep(${f4(M.crest.from[0])}, ${f4(M.crest.from[1])}, dl + vr.r * ${f4(M.crest.streak)}) * ${f4(M.crest.amount)} * wk * (1.0 - smoothstep(0.8, 0.94, gl)));   // (the whites kept)
  // the mid vortex's pastel lilac (blue above red above green) toward pale blue: red brought under green turns its hue
  // under 235 degrees
  float lil = clamp((c.b - c.r + 0.03) * 15.0, 0.0, 1.0) * smoothstep(${f4(M.delilac.r[0])}, ${f4(M.delilac.r[1])}, rw) * (1.0 - smoothstep(${f4(M.delilac.r[2])}, ${f4(M.delilac.r[3])}, rw));
  c.r = mix(c.r, min(c.r, c.g * 0.9), lil * ${f4(M.delilac.amount)});
  // the approved's concentric bands spiralling into the centre (the user's first priority, 14:16 UTC: crisp bands, 7-10 per
  // sector, cobalt depth between them, no smooth open tube): a band phase in log r with a one-band-per-turn spiral, an
  // irregular spacing (the approved's log spacing varies by about 60%) and a wobble from the variation map, flowing outward;
  // in each band a dark cobalt gap and a broken cyan-white rim on the water's own colours. Faded where the bands get finer
  // than the pixels (seam-free: from the wrap-corrected derivatives)
  float mtEdge = 0.0;
  {
    float bs = lr * ${f4(M.bands.perLog)} + tu * ${f4(M.bands.spiral)} + ${f4(M.bands.warp)} * sin(lr * ${f4(M.bands.warpF)} + 1.3) + (vr.b - 0.5) * ${f4(M.bands.wobble)}
      - uTime * ${f4(M.bands.flow * M.bands.perLog)} - uHeroTravel * ${f4(M.bands.travel * M.bands.perLog)};
    float bk = fract(bs);
    float aw = (abs(dx.y) + abs(dy.y)) * ${f4(M.span * M.bands.perLog)} + (abs(dx.x) + abs(dy.x)) * ${f4(M.bands.spiral)};
    float bz = smoothstep(${f4(M.bands.r[0])}, ${f4(M.bands.r[1])}, rw) * (1.0 - smoothstep(${f4(M.bands.r[2])}, ${f4(M.bands.r[3])}, rw)) * (1.0 - smoothstep(0.2, 0.45, aw));
    // (the water's cell pattern softened toward its blur inside the bands: it broke the rings up)
    c = mix(c, clamp(base + (c - base) * 0.5, 0.0, 1.0), ${f4(M.bands.smooth)} * bz);
    // (the cobalt gaps and the azure light kept out of the warm core: the approved's inner rings are pink, peach and white)
    float bout = smoothstep(${f4(M.bands.blueFrom[0])}, ${f4(M.bands.blueFrom[1])}, rw);
    float gapK = smoothstep(${f4(M.bands.gap.from[0])}, ${f4(M.bands.gap.from[1])}, bk) * (1.0 - smoothstep(0.965, 1.0, bk)) * bz * bout;
    float rimK = (1.0 - smoothstep(${f4(M.bands.rim.w[0])}, ${f4(M.bands.rim.w[1])}, bk)) * mix(1.0, smoothstep(-0.12, 0.04, dl), ${f4(M.bands.rim.broken)}) * bz;
    float glowK = smoothstep(${f4(M.bands.rim.w[0])}, ${f4(M.bands.rim.w[1])}, bk) * (1.0 - smoothstep(${f4(M.bands.glow.to[0])}, ${f4(M.bands.glow.to[1])}, bk)) * bz * bout;
    float bl = dot(c, vec3(0.2126, 0.7152, 0.0722)), bkeep = 1.0 - smoothstep(0.0, 0.1, c.r - c.b);   // (the warm patches kept)
    c = mix(c, ${hx(M.bands.glow.col)} * mix(0.9, 1.1, bl), glowK * ${f4(M.bands.glow.amount)} * bkeep);
    c = mix(c, ${hx(M.bands.gap.col)} * mix(0.85, 1.2, bl), gapK * ${f4(M.bands.gap.amount)} * bkeep);
    // (inside the core's reach, where the cobalt is kept out, the gaps pastel pink: the approved's tight inner rings, pink,
    // peach and white, run right down to the centre coin)
    float ginK = smoothstep(${f4(M.bands.gap.from[0])}, ${f4(M.bands.gap.from[1])}, bk) * (1.0 - smoothstep(0.965, 1.0, bk)) * bz * (1.0 - bout);
    c = mix(c, ${hx(M.bands.inner.col)} * mix(0.9, 1.08, bl), ginK * ${f4(M.bands.inner.amount)});
    c = mix(c, ${hx(M.bands.rim.col)}, rimK * ${f4(M.bands.rim.amount)});
    // white water broken over each band's lit part where the relief crests (the approved's turbulent splash bits along the
    // rings; blobs of the relief's own cells, not star shapes)
    float spK = smoothstep(${f4(M.bands.splash.from[0])}, ${f4(M.bands.splash.from[1])}, dl) * (1.0 - smoothstep(${f4(M.bands.splash.to[0])}, ${f4(M.bands.splash.to[1])}, bk)) * bz;
    c = mix(c, ${hx(M.bands.splash.col)}, spK * ${f4(M.bands.splash.amount)});
    // the approved's brightest texels are a dense net of thin ice-blue (#cae0ff) ring lines across every band: a thin line
    // at each band's inner edge and a sparser one inside it, both broken into arcs by the relief (MATCH.walls.bands.edge)
    float eK = (1.0 - smoothstep(${f4(M.bands.edge.w[0])}, ${f4(M.bands.edge.w[1])}, bk)) * smoothstep(${f4(M.bands.edge.broken[0])}, ${f4(M.bands.edge.broken[1])}, dl) * bz;
    float e2 = (1.0 - smoothstep(${f4(M.bands.edge.second[1] * 0.5)}, ${f4(M.bands.edge.second[1])}, abs(bk - ${f4(M.bands.edge.second[0])}))) * smoothstep(0.0, 0.05, dl) * bz * bout;
    mtEdge = max(eK, e2 * ${f4(M.bands.edge.secondAmount)}) * ${f4(M.bands.edge.amount)};   // (drawn after the display compensation, below)
  }
  {   // the approved's pastel rainbow arc above the centre (pink at the left, peach and pale yellow over the top and right),
      // across the bands, on the upper half (MATCH.walls.rainbow)
    float ra = tu * 6.2831853;                         // 0 = screen right, pi/2 = up
    float rk = exp(-pow((rw - ${f4(M.rainbow.r)}) / ${f4(M.rainbow.w)}, 2.0)) * smoothstep(-0.15, 0.35, sin(ra)) * ${f4(M.rainbow.amount)};
    float rq = clamp((rw - ${f4(M.rainbow.r)}) / ${f4(M.rainbow.w)} * 0.5 + 0.5, 0.0, 1.0);   // inner -> outer across the arc
    vec3 rc = mix(${hx(M.rainbow.cols[0])}, ${hx(M.rainbow.cols[1])}, smoothstep(0.0, 0.5, rq));
    rc = mix(rc, ${hx(M.rainbow.cols[2])}, smoothstep(0.5, 1.0, rq));
    rc = mix(rc, ${hx(M.rainbow.cols[3])}, smoothstep(0.2, -0.6, cos(ra)) * 0.6);   // pinker on the left
    float rl = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = mix(c, rc * mix(0.85, 1.08, rl), rk);
  }
  {   // the mid vortex's bright pale blue toward the approved's white water (MATCH.walls.midWhite; the warm patches kept)
    float mz = smoothstep(${f4(M.midWhite.r[0])}, ${f4(M.midWhite.r[1])}, rw) * (1.0 - smoothstep(${f4(M.midWhite.r[2])}, ${f4(M.midWhite.r[3])}, rw));
    float ml = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float mk = mz * smoothstep(${f4(M.midWhite.from[0])}, ${f4(M.midWhite.from[1])}, ml) * (1.0 - smoothstep(0.0, 0.1, c.r - c.b)) * ${f4(M.midWhite.amount)};
    c = mix(c, min(vec3(ml * 0.97, ml * 1.0, ml * 1.04) + 0.04, 1.0), mk);
  }
  // the core's pale lilac rows toward warm white (blue brought down to the larger of red and green)
  float coreK = 1.0 - smoothstep(${f4(M.core.r[0])}, ${f4(M.core.r[1])}, rw);
  c.b = mix(c.b, min(c.b, max(c.r, c.g) * 1.02), coreK * ${f4(M.core.white)});
  gl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(c, c * vec3(${M.glintWall.tint.map(f4)}), smoothstep(${f4(M.glintWall.from[0])}, ${f4(M.glintWall.from[1])}, gl) * ${f4(M.glintWall.amount)} * wz * (1.0 - smoothstep(0.0, 0.08, c.r - c.b)));
  c = mix(c, min(c * vec3(${M.core.tint.map(f4)}), 1.0), (1.0 - smoothstep(${f4(M.core.r[0])}, ${f4(M.core.r[1])}, rw)) * ${f4(M.core.amount)});
  {   // the walls' electric blue toward the approved's royal hue (its median 215 degrees against our 210): hue 203-216 pulled
      // to about 218 by bringing green down; the cyan streaks (205 degrees and under) and the warm patches kept (MATCH.walls.royal)
    float tq = (c.g - c.r) / max(c.b - c.r, 1e-4);   // 0 at 240 degrees, 1 at 180 (blue above green above red)
    float rk = step(c.r, c.g) * step(c.g, c.b) * smoothstep(0.3, 0.42, tq) * (1.0 - smoothstep(0.52, 0.58, tq)) * wz * ${f4(M.royal.amount)};
    c.g = mix(c.g, c.r + ${f4(M.royal.to)} * (c.b - c.r), rk);
  }
  c = clamp((c - ${f4(M.lift)}) / ${f4(1 - M.lift)}, 0.0, 1.0);
  float cl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = clamp(cl + (c - cl) * ${f4(M.sat)}, 0.0, 1.0);
  vec3 col = mtUndisplay(c);
  // the thin ice-blue ring lines, a little over the whites' cap so they are the brightest texels (as the approved's)
  col = mix(col, mtUndisplay(${hx(M.bands.edge.col)}) * ${f4(M.bands.edge.boost)}, mtEdge);
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
    vertexShader: /* glsl */ `varying vec3 vL; varying vec3 vN; varying vec3 vW; varying vec3 vLN;
void main() { vL = position; vLN = normal; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `uniform sampler2D uMatchRim; uniform float uMatchOn, uTime; varying vec3 vL; varying vec3 vN; varying vec3 vW; varying vec3 vLN;
${RIM_SAMPLE}
${undisplayGLSL()}
void main() {
  float r = length(vL.xy), t = clamp((r - ${f4(B.inner)}) / ${f4(B.outer - B.inner)}, 0.0, 1.0);
  // the ring's inner and outer sides (seen in perspective toward the frame's edges, where they made the gold band 0.068 H
  // thick at x 0.95 against the approved's 0.019): the ramp's bevel inside, its housing outside, not the gold of its face
  float rad = dot(normalize(vLN), vec3(vL.xy / max(r, 1e-4), 0.0));
  float rho = mix(${f4(rin)} + (1.0 - ${f4(rin)}) * t, rad < 0.0 ? ${f4(BEZEL_SIDES[0])} : ${f4(BEZEL_SIDES[1])}, smoothstep(0.55, 0.85, abs(rad)));
  vec3 c = mtRimS(vL.xy, rho);
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
const FAR = { coins: [], socks: [] };   // the collectibles for the far fade (MATCH.farFade; applied in buildMatch's hook)
export function matchCollectibles({ coins, gems, socks }) {
  const report = {};
  FAR.coins = [...coins, ...gems].map((c) => c.obj).filter(Boolean); FAR.socks = socks.map((c) => c.obj).filter(Boolean);
  // the first sock (the approved's big right sock): 0.85 of its size, as the Art Director measured (its holder, and so its
  // pick-up place, is unchanged)
  if (socks[0] && socks[0].turn) { socks[0].turn.scale.multiplyScalar(MATCH.sockScale); report.sockScale = MATCH.sockScale; }
  // the gem beside the big left coin at MATCH.gemScale of its size, round its own centre (its holder, the pick-up place and
  // the pop animation's scale are unchanged)
  const gi = gems[0] && gems[0].obj && gems[0].obj.children[0];
  if (gi && MATCH.gemScale !== 1) { gi.scale.multiplyScalar(MATCH.gemScale); gi.position.multiplyScalar(MATCH.gemScale); report.gemScale = MATCH.gemScale; }
  // single coins' visual size (MATCH.coinScales; their LOD levels, so the game's own pop and pass scales still apply on top)
  report.coinScales = 0;
  for (const [u, s] of MATCH.coinScales || []) for (const c of coins) {
    if (Math.abs(c.u - u) > 0.01 || !c.obj || !c.obj.isLOD) continue;
    for (const lv of c.obj.levels) lv.object.scale.multiplyScalar(s);
    report.coinScales++;
  }
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

// the tube's far end (see buildMatch): the exit portal's plane draws the walls' map (matchWall), its place in the track frame
// taken from the camera's frame (as the swell's, tunnel_r9_match_water.js); the hero and liquid uniforms are the walls' own
function matchExit(scene) {
  const wall = scene.getObjectByName('heroWalls'), wu = wall && wall.material && wall.material.uniforms;
  let exit = null, glow = null;
  scene.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    if (!exit && o.material.fragmentShader && o.material.fragmentShader.includes('// a small white heart')) exit = o;
    if (!glow && o.material.blending === THREE.AdditiveBlending && o.material.map && o.geometry.parameters && o.geometry.parameters.width === 7) glow = o;
  });
  const need = ['uTime', 'uHeroTravel', 'uHeroTanW', 'uHeroCam', 'uLqGlow', 'uLqKey', 'uLqFwd', 'uLqUp', 'uLqSide'];
  if (!exit || !wu || need.some((k) => !wu[k])) return { exit: false };
  const uniforms = { ...MATCH_UNIFORMS }; for (const k of need) uniforms[k] = wu[k];
  exit.material = new THREE.ShaderMaterial({ uniforms,
    vertexShader: /* glsl */ `varying vec3 vMtW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vMtW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `uniform float uTime, uHeroTravel, uHeroTanW; uniform vec3 uHeroCam, uLqGlow, uLqKey, uLqFwd, uLqUp, uLqSide;
varying vec3 vMtW;
${matchWallGLSL()}
void main() {
  vec3 rc = vMtW - cameraPosition;
  vec2 cs = uHeroCam.xy + vec2(dot(rc, uLqSide), dot(rc, uLqUp));
  float u = uHeroCam.z + dot(rc, uLqFwd);
  gl_FragColor = vec4(matchWall(cs, u, vMtW, -uLqFwd, uLqUp), 1.0);
}` });
  if (glow) glow.material.color.setRGB(...MATCH.centre.exitGlow);
  return { exit: true, glow: !!glow };
}

// Called at the end of buildHero (tunnel_r7_hero.js), after the liquid and the splash bank are built.
export function buildMatch({ scene, TR, L, W, mascot, updaters, time, U, HERO, waterSheets, drumSheet }) {
  const report = { textures: MATCH_UNIFORMS.uMatchOn.value === 1 };
  // the centre's place on the screen (MATCH.centre, mtPlace), worked out just before each picture is drawn (after the hero's
  // camera frame): the tube's axis `ahead` metres in front of the camera, projected with this frame's camera; and the size of
  // the target being drawn (gl_FragCoord is in its pixels)
  {
    const C = MATCH.centre, axisH = W.WATER + W.AXIS_H, Fc = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
    const pv = new THREE.Vector3(), size = new THREE.Vector2();
    const prev = scene.onBeforeRender;
    scene.onBeforeRender = function (renderer, sc, cam, rt) {
      if (prev) prev.call(this, renderer, sc, cam, rt);
      if (!cam || !cam.isPerspectiveCamera) return;
      TR.frame(Math.min(U.uHeroCam.value.z + C.ahead, L.tunnelEnd - C.end), Fc);
      pv.copy(Fc.P).addScaledVector(Fc.U, axisH).project(cam);
      MATCH_UNIFORMS.uMatchVP.value.set((pv.x + 1) / 2 + C.offset[0], (pv.y + 1) / 2 - C.offset[1]);
      if (rt) MATCH_UNIFORMS.uMatchRes.value.set(rt.width, rt.height);
      else MATCH_UNIFORMS.uMatchRes.value.copy(renderer.getDrawingBufferSize(size));
      // the far collectibles' fade (MATCH.farFade): only their visual scale, and only while they are far (the game's own pop
      // and pass animations act near the character, where this leaves the scale alone). The renderer has already worked out
      // the world matrices when this runs (and the game's passBy sets the scale back to 1 every frame), so the faded ones are
      // brought up to date here, or the fade would never show
      for (const [list, R] of [[FAR.coins, MATCH.farFade.coins], [FAR.socks, MATCH.farFade.socks]]) for (const o of list) {
        const d = o.position.distanceTo(cam.position);
        if (d > R[0]) { o.scale.setScalar(Math.max(1e-3, 1 - THREE.MathUtils.smoothstep(d, R[0], R[1]))); o.userData.mtFar = true; o.updateMatrixWorld(true); }
        else if (o.userData.mtFar) { o.scale.setScalar(1); o.userData.mtFar = false; o.updateMatrixWorld(true); }
      }
    };
    report.centre = C;
  }
  // the rim takes the approved rim ramp once the textures are in (game.js waits for them before the first frame); without
  // them it keeps the hero rim
  MATCH_READY.then((ok) => { if (ok) privately(0x9a73, () => { report.bezel = matchBezel(scene, HERO); const b = scene.getObjectByName('r6Bezel'); if (b && b.material.uniforms) b.material.uniforms.uTime = time; }); });
  // the tube's far end: the lining ends 38 m ahead and, through its open end, the centre showed Screen 4's exit portal
  // (tunnel_s4.js round2Light: violet, pink and lavender spiral arms round a white heart, 42.6 m ahead at 3.0 s; the ray
  // probe), the centre's lilac. It draws the walls' own map instead, placed on the screen round the same centre (mtPlace),
  // so the far end continues the walls' rings into the approved's warm luminous core; its additive glow warm, not blue
  // (on the first frame with the textures in: the exit's round2 material is made while Screen 3's models load)
  let exitDone = false;
  updaters.push(() => { if (!exitDone && MATCH_UNIFORMS.uMatchOn.value === 1) { exitDone = true; report.exit = privately(0x9a74, () => matchExit(scene)); } });
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
