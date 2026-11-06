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
import { FOCUS_ON, FOCUS } from './tunnel_r9_focus.js';   // ?s3=focus (the focused correction pass)
import { PRE_FOCUSED_PASS, restoreSettings } from './tunnel_r9_focus_base.js';   // ?s3=focus: `match`'s settings as they were at 9a95c06

const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
// ?s3=focus: everything `match` does plus the user's focused correction pass (tunnel_r9_focus.js); `match` itself unchanged
export const MATCH_ON = LIST.includes('match') || FOCUS_ON;
export const MATCH_FOAM = MATCH_ON && !LIST.includes('nofoam');
// ?s3=match,bare (diagnostic only): the coins, socks, gem, the two framing brushes and the hero bubbles are not drawn (they
// are moved to a camera layer the game does not render; gameplay is unchanged), so the tunnel's own look can be compared
export const MATCH_BARE = MATCH_ON && LIST.includes('bare');

// The hero moment is now 3.0 s after the tap (the user's checkpoint): the camera is then 0.95 m further along the path than at
// 2.85 s, so everything the hero scene stages before the drum's mouth moves +0.95 m with it (the Art Director's area 1 and 4).
const STAGE = 0.95;
const HERO_BUBBLES = [[-1.75, -0.72, 2.67, 0.33], [-0.2, -0.17, 2.76, 0.17], [-1.35, 0.95, 2.76, 0.16], [-2.15, -1.29, 2.43, 0.15],
  [-3.2, 0.88, 0.62, 0.15], [-2.9, 0.72, 0.8, 0.1], [-3.0, 0.92, 2.91, 0.13], [0.6, 0.9, 2.2, 0.09], [1.2, -1.0, 2.5, 0.1], [-0.8, 1.2, 1.9, 0.08]];
// The focused pass (the user's brief, 5 November about 15:55 UTC, item 3: the pink character "appears larger and more present"
// in the original; the model and its scale are not changed). Measured at 3.0 s (scripts in Previews/WebDemo/
// screen4_round9_match/13_focused_pass_tunnel_lighting/scripts): the original's dome is about 1.25 times as broad at the same
// depth under its top (0.27 / 0.34 / 0.39 W at y 0.72 / 0.74 / 0.76 against our 0.20 / 0.27 / 0.32) with its top at the same
// height (0.696 against 0.704) and its centre about 0.015 W further left; the side tufts span about the same (0.56 against 0.53).
// So the hero camera comes MATCH_CAM nearer the character (track metres: dx sideways, + screen-left; dh up; du along the path):
// the character draws about 1.2 times larger round its dome top, which stays where it was, and 0.015 W further left. Every
// object staged for the camera (the rim, the housing and collar, the hero bubbles, the framing brushes, the collectibles near
// the drum) moves with it, so they keep their screen places exactly (the path is straight from 6 m before the mouth to 9 m in);
// only the world's own objects (the character and the water round it, the tube, the floor) change on screen. The far tunnel
// keeps its vanishing point (the aim point moves with the camera). The camera stays inside the drum, 0.44 m nearer the mouth.
// (Scale k round the dome top: du = 2.66 (1 - 1/k), dh = -0.61 (1 - 1/k); 0.44 / -0.10 is k = 1.2. The rim, housing, bubbles
// and brushes follow MATCH_CAM by themselves; the collectibles' layout below (and farGem, secondSock, coinScales' u) holds
// numbers re-solved for this MATCH_CAM: if it changes, re-solve them with Previews/WebDemo/screen4_round9_match/
// 13_focused_pass_tunnel_lighting/scripts/stage_probe.cjs ITEMS / DELTA, which adds the water heights.)
export const MATCH_CAM = { dx: -0.006, dh: -0.10, du: 0.44 };
const restage = ([u, x, h, ...rest]) => [u + MATCH_CAM.du, x + MATCH_CAM.dx, h + MATCH_CAM.dh, ...rest];
// The near hero bubbles that were too big (Water & VFX's finding; the focused pass): {index: [dx, dh, radius]} after the
// re-staging, from the probe at 3.0 s (with the shader's drift) against the original's own bubbles (diameter in widths at
// its centre):
//   2 mid-left    0.097 at (0.215, 0.352) -> original 0.09  at (0.275, 0.348)
//   3 right edge  0.113 at (0.976, 0.377) -> original 0.076 at (0.96, 0.365)
//   4 lower-left  0.158 at (0.034, 0.743) -> original 0.137 at (0.084, 0.751)
//   5 lower-left  0.095 at (0.172, 0.692) -> original 0.08  at (0.197, 0.699)
//   6 upper-left  0.123 at (0.067, 0.201) -> original 0.105 at (0.128, 0.23)
const BUBBLE_FIX = { 2: [-0.198, 0.026, 0.148], 3: [0.042, 0.064, 0.101], 4: [-0.095, -0.03, 0.13], 5: [-0.053, -0.03, 0.084], 6: [-0.129, -0.122, 0.111] };
const fixBubble = ([u, x, h, r], i) => { const f = BUBBLE_FIX[i]; return f ? [u, x + f[0], h + f[1], f[2]] : [u, x, h, r]; };
// the bubbles' shader seeds each one's drift (up and sideways) from its world place, fract(3.1 x + 7.7 z) (tunnel_r7_hero.js):
// a moved bubble would drift to another place by the hero moment, so its move along the path is trimmed (at most 0.065 m) to
// keep the seed
const keepSeed = (b0, b1) => { const k = 3.1 * (b1[1] - b0[1]) + 7.7 * (b1[0] - b0[0]); return [b1[0] - (k - Math.round(k)) / 7.7, ...b1.slice(1)]; };
const heroBubble = (b0, i) => keepSeed(b0, fixBubble(restage(b0), i));
// a framing brush [u, side (+1 screen-left), angle up from level (degrees), scale, radius from the drum's axis]: moved by
// MATCH_CAM round the axis
const restageDeco = ([u, side, a, sc, rr]) => {
  const r = a * Math.PI / 180, x = Math.cos(r) * rr + side * MATCH_CAM.dx, y = Math.sin(r) * rr + MATCH_CAM.dh;
  return [u + MATCH_CAM.du, side, Math.atan2(y, x) * 180 / Math.PI, sc, Math.hypot(x, y)];
};
export const MATCH = {
  // deep-merged into HERO (tunnel_r7_hero.js) at load, before anything is built
  hero: {
    round6: {
      round5: {
        // pitched up 1.5 degrees and turned 0.4 degrees right: the vanishing point from (0.540, 0.512) to the approved (0.53, 0.53)
        // (the focused pass: the camera and its aim point both moved by MATCH_CAM, so the view's direction is unchanged; the
        // hero scene's camera was off [-0.11, 1.08, -2.6], aim [0.194, 1.62, 6.42] from the character)
        camera: { off: [-0.11 + MATCH_CAM.dx, 1.08 + MATCH_CAM.dh, -2.6 + MATCH_CAM.du], lookX: 0.194 + MATCH_CAM.dx, lookY: 1.62 + MATCH_CAM.dh, lookZ: 6.42 + MATCH_CAM.du },
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
      // (the focused pass: every one re-solved for the camera moved by MATCH_CAM with the probe's water heights,
      // scripts/stage_probe.cjs: the same place relative to the camera, so the same screen box; lanes 0.009 further right,
      // heights 0.06-0.13 m lower, all still within reach. Before: [-0.231, 2.77, .., 1.14], [-0.674, 3.4, .., 2.03],
      // [1.07, 7.3, .., 1.15], [2.357, 2.3, .., 0.57], [2, 15.0, .., 0.5], [1, 12.0, 3, .., 0.9]; sock [2.0, 3.2, 1.14]; gem
      // [-0.414, 5.7, 1.67])
      layout: { coinLines: [[-0.222, 3.21, 1, 1.0, 1.048, 0], [-0.665, 3.84, 1, 1.0, 1.924, 0], [1.079, 7.74, 1, 1.0, 1.087, 0], [2.366, 2.74, 1, 1.0, 0.476, 0],
        [2.009, 15.44, 1, 1.0, 0.437, 0], [1.009, 12.44, 3, 1.0, 0.8, 0]], replace: 3,
        // (the first sock 0.037 m further right than the re-solve, lane 2.061, so the posed sock is centred on the original's box)
        firstSock: [2.061, 3.64, 1.053], extraGem: [-0.405, 6.14, 1.565] },
      // the two framing brushes +0.95 m; the right one smaller (it hid the vortex)
      // the left one smaller and nearer the axis, so it shows as the approved's round pom-pom at the left edge (approved box
      // x 0.01-0.20, y 0.233-0.415, 2.0% of the frame; measured at 3.0 s: x 0.01-0.17, y 0.238-0.459, 2.1%)
      // (the focused pass: moved with the camera, MATCH_CAM)
      r7: { deco: [restageDeco([1.15 + STAGE, 1, 34, 0.48, 1.62]), restageDeco([2.6 + STAGE, -1, 2, 0.8, 1.98])] },
    },
    // (x corrected after the probe: the centre was 0.023 W right of target; the focused pass: moved with the camera)
    rim: { u: -2.1 + STAGE + MATCH_CAM.du, centre: [-0.097 + MATCH_CAM.dx, 0.755 + MATCH_CAM.dh] },
    coinScale: 1.02,   // visual only (pick-up distances unchanged)
    // the big bubble in front of the rim plane (the collar cut it into a "ghost dome"), at the approved box (0.65-0.86,
    // 0.285-0.36) from the probed camera; the others +0.95 m
    // (the focused pass: all moved with the camera, MATCH_CAM, and the five too big ones resized and placed, BUBBLE_FIX)
    bubbles: [[-1.7, -0.63, 2.52, 0.244], ...HERO_BUBBLES.slice(1).map(([u, x, h, r]) => [u + STAGE, x, h, r])].map(heroBubble),
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
  // (the focused pass: re-solved for the camera moved by MATCH_CAM; before [1, 14.6, 0.82])
  farGem: [1.009, 15.04, 0.757],
  // the second sock (round3's, lane 2 at 12.1 m) stood right of the centre coin: 5.1 m nearer and 0.6 m further right, at
  // 0.61 m, behind the big first sock at the hero moment; within reach from the right lane without a jump (0.63 m)
  // (the focused pass: re-solved for the camera moved by MATCH_CAM, before [2.85, 7.0, 0.61]; then 0.06 m further right and
  // 0.1 m lower, so it stays hidden behind the first sock now that one lies tilted (it peeked out at its upper left): 0.67 m
  // from the body riding in the right lane, inside the 0.82 m pick-up reach)
  secondSock: [2.95, 7.44, 0.45],
  // the far collectibles converge on the vanishing point (four coin lines and two socks 19-34 m ahead at the hero moment;
  // the original has only the small centre coin and one far sock there): visual only, coins and gems shrink away between
  // these distances from the camera (m) and grow back in as the character comes on, socks further out (the nearest far
  // sock, 23 m ahead, stays as the original's). Their places, pick-up radii and the counts are unchanged
  farFade: { coins: [17, 21], socks: [25, 28] },
  gemScale: 0.89,   // the gem beside the big left coin (gems[0]): its visual size (the approved's is 0.103 W wide, ours 0.115)
  // single coins' visual size, [layout u, scale] (checkpoint 05): the upper-left coin, brought nearer to stay in reach, at the
  // original's 0.126 W; the big left coin toward the original's 0.216 W (ours 0.188). Pick-up places unchanged
  coinScales: [[3.84, 0.69], [3.21, 1.1]],   // (the focused pass: the coins' new layout u)
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
  // the first sock's visual size (the focused pass: 0.85 -> 0.74, so the posed sock keeps the original's box, x 0.65-0.84,
  // y 0.552-0.66; posed at 0.85 its mesh spanned 0.621-0.846 x 0.546-0.666)
  sockScale: 0.74,
  // the first sock's pose (the user's brief, 5 November about 15:55 UTC, item 4: in the original it lies tilted, more
  // sideways, its cuff up-right, its toe down-left, its face toward the viewer; ours stood upright with its toe toward the
  // camera): degrees round the sock's own centre, applied to the model inside the game's animated holder (its bob and gentle
  // sway still play on top; at 2.85-3.1 s they move it by under 5 degrees). roll: round the line of sight (negative =
  // clockwise on screen); yaw: round its upright axis (negative = toe toward screen-left); pitch: round its sideways axis
  // (six poses tried at 3.0 s; this one puts the cuff on top tilted clockwise, the face level toward the viewer and the toe out
  // to the lower left, as the original's)
  sockPose: { roll: -20, yaw: -40, pitch: 25 },
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
    // (lift is also the floor's, tunnel_r9_match_water.js; the walls have their own since the focused pass: 0.12 was tried and
    // only made the band contrast worse, so it stays 0.08)
    lift: 0.08, liftWall: 0.08, sat: 1.2,
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
    // (the focused pass: amount 0.85 -> 0.6, with the streaks the walls were too azure)
    crest: { col: '#2fb2f5', amount: 0.6, from: [0.02, 0.06], streak: 0.12 },
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
      // (the focused pass: gap 0.85 -> 0.92, glow #3fbcf7 / 0.5 -> #5ab8fa / 0.75: brighter band tops over deeper gaps, against
      // the streaks' flattening; the band contrast up / left / right 0.147 / 0.211 / 0.159 at the checkpoint, the original's
      // 0.184 / 0.167 / 0.201)
      gap: { col: '#2646c4', from: [0.68, 0.88], amount: 0.92 }, rim: { col: '#cfe9ff', w: [0.0, 0.11], amount: 0.9, broken: 0.5 },
      glow: { col: '#5ab8fa', to: [0.3, 0.6], amount: 0.75 },
      inner: { col: '#e8a6d0', amount: 0.8 }, splash: { col: '#f2f8ff', from: [0.14, 0.19], to: [0.3, 0.6], amount: 0.9 },
      // edge: the thin ice-blue ring lines (w: [full to, out] in band phase; broken: the relief's dl where they show; second:
      // [phase, half width] of the sparser inner line; boost: over the whites' cap, so #c2dcff shows as about #cee2f9 against
      // the approved's brightest #cae0ff; at 1.3 they turned white and broke into specks, at 1.05 the glints went lilac again)
      edge: { col: '#c2dcff', w: [0.02, 0.045], broken: [-0.13, -0.07], amount: 1.0, second: [0.42, 0.025], secondAmount: 0.6, boost: 1.12 } },
    // the focused pass (the user's brief, 15:55 UTC, item 1: "still too clean and too smooth"; more energetic, irregular,
    // turbulent): measured at 3.0 s the rings were smoother along their length than the original's (along-ring brightness
    // std up / left / right 0.123 / 0.079 / 0.112 against 0.148 / 0.118 / 0.169, rings.py) and its walls paler (upper wall
    // pale blue 20.6% against 11.2%, saturation 0.48 against 0.58, walls.py).
    // turb: the band phase broken by a second, finer sampling of the relief (scale: [turns, log r], the turns a whole number
    // so the angle stays seamless; amp in bands per unit of the relief's spread, 0.11) and a swirl wave round the ring
    // (m waves per turn, k per unit of ln r, drifting at speed rad/s; amp in bands): jagged, broken band edges and curling
    // turbulence
    // (amp 0.16 / swirl 0.1 shattered the rings into shards at 3.0 s: the original's ring edges are smooth arcs; kept small)
    turb: { scale: [3, 2.3], amp: 0.05, m: 9, k: 5.0, speed: 0.9, swirl: 0.05 },
    // streaks: the original's busy rings are many thin concentric sub-stripes (cyan, electric blue, cobalt) broken into
    // arcs, not wide smooth fills: the relief sampled `scale` [turns (a whole number), log r] finer, so its cells stretch along
    // the rings, flowing round with the swirl; above +from (in the relief's spread, 0.11) toward the cyan, under -from toward
    // the cobalt, by amount (bands only, outside the warm core; the whites and warm patches kept)
    // (seven variants measured at 3.0 s, walls.py / rings.py: a cobalt dark streak made the upper wall's deep cobalt 8.7%
    // against the original's 3.9% and flattened the bands; cyan light streaks made it azure 24% against 13%. The dark streak
    // is electric blue, the light one a lighter electric blue)
    streak: { scale: [2, 7.0], from: [0.7, 1.5], amount: 0.4, light: '#58acf8', dark: '#3a6ee8', speed: 0.02 },
    // deepen: the walls' pale mid blues toward the original's saturated electric blue and azure (saturation times `amount`
    // under luminance lum[0], fading out by lum[1] so the whites and splash stay; blue hues only, the warm patches kept)
    // (screen luminance of the sRGB values: the original's pale blue #a3d1f6 is 0.79, its electric blue #337ced 0.46, white 0.95)
    deepen: { amount: 1.7, lum: [0.84, 0.92] },
    // (the focused pass: 0.6 / 0.37 -> 1.0 / 0.4, so the walls' light cyan turns the original's electric blue, median hue 215)
    royal: { amount: 1.0, to: 0.4 },   // see matchWall (to: the green's place between red and blue, 0.37 = 218 degrees)
    // the pastel rainbow arc (the approved: about 0.2-0.25 W above the centre): radius and half width in rw, colours inner,
    // middle, outer and the left side's pink
    // (the focused pass, "less pastel peach band": measured round the upper sector, the original's warm band is at rw
    // 0.24-0.29, peak 0.26 (warm share 24 / 60 / 36% at 0.24 / 0.26 / 0.28); ours peaked at 0.22 (87%) over 0.18-0.27, so
    // it sat in the original's saturated blue bands: moved out and narrowed, 0.225 / 0.036 -> 0.262 / 0.022)
    rainbow: { r: 0.262, w: 0.022, amount: 0.85, cols: ['#f4b9e6', '#ffd3a0', '#fff1b0', '#f59ad8'] },
    // the original's pastel inner ring round the mid vortex (rw 0.10-0.13, sampled round the whole circle: pink and lilac at
    // the sides #f18ef0 / #f2b0ea / #efd3f0, pink-white at the top #f2e2e9, cream below #faf4cd / #f6f0b9; ours was
    // periwinkle #8791f7 there): radius and half width in rw, colours sides, top, bottom (the focused pass)
    innerRing: { r: 0.117, w: 0.016, amount: 0.75, cols: ['#f2b4ee', '#f3e3ef', '#f9f2cc'] },
    // the mid vortex (the approved r 0.08-0.20 W: white 22%, pale blue 18%; ours white 8%, pale blue 32%): its brightest
    // pale blue whitened; r: [in, full, full to, out] in rw, from: the brightness where it starts and is full
    // (the focused pass: only inside rw 0.155; from 0.14 out the original's bands are saturated blue, S 0.5-0.8)
    midWhite: { r: [0.05, 0.08, 0.12, 0.155], from: [0.66, 0.82], amount: 0.9 },
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
// ?s3=focus: `match`'s settings as they were at 9a95c06, before the seventh session's focused pass changed them for `match`
// (tunnel_r9_focus_base.js), then the focused correction pass's own settings (tunnel_r9_focus.js)
if (FOCUS_ON) { restoreSettings(MATCH, PRE_FOCUSED_PASS.MATCH); deepMerge(MATCH, FOCUS.match); }
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.match;
  if (tune) deepMerge(MATCH, tune);
}

// ---------------------------------------------------------------- the textures derived from the approved picture
// (the walls draw the clean colour map, flowing; tunnel_base.png is its blur, the centre of the contrast-keeping blend)
const TEX = { colour: 'tunnel_colour.png', base: 'tunnel_base.png', detail: 'tunnel_detail.png', normal: 'tunnel_normal.png', variation: 'tunnel_var.png', rim: 'rim_ramp.png' };
// ?s3=focus with MATCH.walls.ringMap (step 3): the original's own rings (tools/screen4/derive_ring_map.py)
const FOCUS_RINGS = FOCUS_ON && !!MATCH.walls.ringMap;
// (step 5: the file from the settings, MATCH.walls.ringMap.file: the fill map keeps the original's own water and whites)
if (FOCUS_RINGS) TEX.rings = MATCH.walls.ringMap.file || 'tunnel_rings_original.png';
// ?s3=focus step 6 (MATCH.centre.bend, tunnel_r9_focus.js): mtPlace from the point's real position seen from the camera
// (its world position in the camera's track frame), so the rings stay concentric on screen where the far tube bends
export const MT_BEND = FOCUS_RINGS && !!MATCH.centre.bend;
export const MATCH_UNIFORMS = {
  uMatchOn: { value: 0 },   // 1 once every texture has loaded (otherwise the walls keep the Round 8 look)
  uMatchCol: { value: null }, uMatchBase: { value: null }, uMatchDet: { value: null }, uMatchNrm: { value: null }, uMatchVar: { value: null }, uMatchRim: { value: null },
  // the centre's place on the screen (drawing-buffer fractions, y up) and the size in pixels of the target being drawn
  // (set before each picture by buildMatch; MATCH.centre)
  uMatchVP: { value: new THREE.Vector2(0.5, 0.5) }, uMatchRes: { value: new THREE.Vector2(0, 0) },
  uMatchRimU: { value: 0 },   // the rim's plane, metres along the path (set by buildMatch; mtRimRho)
};
if (FOCUS_RINGS) MATCH_UNIFORMS.uFocusRings = { value: null };   // ?s3=focus: the original's rings (tunnel_rings_original.png)
// ?s3=focus with the ring map: where the path's own vanishing point is on the screen (drawing-buffer fractions, y up), so mtPlace
// can centre the whole ring field on uMatchVP (set by buildMatch)
if (FOCUS_RINGS) MATCH_UNIFORMS.uMatchPathVP = { value: new THREE.Vector2(0.5, 0.5) };
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
      if (FOCUS_RINGS) MATCH_UNIFORMS.uFocusRings.value = got.rings;
    }
    resolve(!failed);
  };
  for (const k of keys) loader.load(`textures/screen4/${TEX[k]}`, (t) => {
    // raw values (the shader combines them in the approved's own sRGB space and converts to linear itself)
    t.colorSpace = THREE.NoColorSpace; t.flipY = false; t.wrapS = k === 'rim' ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;   // the rim ramp spans 0..pi only
    t.wrapT = k === 'colour' || k === 'base' || k === 'rim' || k === 'rings' ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
    t.generateMipmaps = true; t.minFilter = THREE.LinearMipmapLinearFilter; t.magFilter = THREE.LinearFilter; t.anisotropy = 4;
    t.needsUpdate = true; got[k] = t; done();
  }, undefined, () => { failed = true; done(); });
})) : Promise.resolve(false);
// for the shaders: placeholder textures until the real ones arrive (a sampler must always be bound); ?s3=match only
if (MATCH_ON) privately(0x9a72, () => {
  const blank = new THREE.DataTexture(new Uint8Array([128, 128, 255, 255]), 1, 1); blank.needsUpdate = true;
  for (const k of ['uMatchCol', 'uMatchBase', 'uMatchDet', 'uMatchNrm', 'uMatchVar', 'uMatchRim']) if (!MATCH_UNIFORMS[k].value) MATCH_UNIFORMS[k].value = blank;
  if (FOCUS_RINGS && !MATCH_UNIFORMS.uFocusRings.value) MATCH_UNIFORMS.uFocusRings.value = blank;
});

// ---------------------------------------------------------------- the walls' GLSL (inserted into tunnel_r8_liquid.js's wallCode)
const f4 = (x) => (+x).toFixed(5);
const hx = (hex) => { const n = parseInt(hex.slice(1), 16); return `vec3(${f4((n >> 16 & 255) / 255)}, ${f4((n >> 8 & 255) / 255)}, ${f4((n & 255) / 255)})`; };   // sRGB as written (a screen colour)
// the rim ramp (textures/screen4/rim_ramp.png): columns the angle 0..pi round the rim's centre (0 = screen right), rows rho =
// r / the rim's outer radius from RAMP[0] (the housing just outside) to RAMP[1] (the blue inside the navy ring)
const RAMP = [1.04, 0.80];
// the rim on the approved: its band from rho 0.937 to 1. Inside it the collar's top arc and the tube's top wall take the ramp
// at the rho where they show on screen (mtRimRho: each point seen through the rim's plane from the camera). (Before the focused
// pass this was two constants worked out for one camera, at 3.0 s: the collar rho 0.937 .. 0.9015, the tube's first metre
// 0.9015 .. 0.80; with the camera nearer the mouth the tube's top edge shows at rho 0.99, behind the bezel, and the ramp's
// bevel, lilac line and navy ring fall 0.35-1.7 m into the tube.)
// ?s3=focus only (`match` as it was at 9a95c06, with the camera then): inside the rim, at 3.0 s, the collar spans rho 0.937 .. 0.9015 and the
// tube's first metre 0.9015 .. 0.80 (worked out from the camera: the tube's top edge at 1.95 m above the camera, 4.9 m ahead)
const RIM_RHO = { inner: 0.937, mouth: 0.9015, perMetre: 0.0991 };
// (the collar's top arc starts at the bezel's inner edge, rho = inner / outer radius: 0.937 at 2.39 / 2.55; gate fix F6 made
// the bezel thinner)
{ const B = MATCH.hero.round6.porthole.bezel; RIM_RHO.inner = B.inner / B.outer; }
// ?s3=focus: the camera further back (tunnel_r9_focus.js), so the collar's end (the tube's mouth) and the tube's first metre
// sit at other places in the rim's screen circle: measured from the camera at 3.0 s (MATCH.rimRho: mouth, perMetre)
if (FOCUS_ON && MATCH.rimRho) Object.assign(RIM_RHO, MATCH.rimRho);
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
  return /* glsl */ `${FOCUS_RINGS ? 'uniform vec2 uMatchPathVP;\n' : ''}
void mtPlace(vec2 cs, float u${MT_BEND ? ', vec3 W' : ''}, out float rw, out float tu) {
  vec2 rel = cs - uHeroCam.xy;
  float du = max(u - uHeroCam.z, 0.25);
${MT_BEND ? `  {   // ?s3=focus step 6: the point's real place seen from the camera, in the camera's own track frame (x along the track's
      // R, screen-left, as cs; h along its U; depth along its T). On a straight tube this is exactly cs - uHeroCam.xy and
      // u - uHeroCam.z; where the far tube bends it follows the bend, so the rings stay concentric on screen
    vec3 cw = W - cameraPosition;
    rel = vec2(dot(cw, uLqSide), dot(cw, uLqUp));
    du = max(dot(cw, uLqFwd), 0.25);
  }
` : ''}  rw = length(rel) / du / uHeroTanW;
  vec2 at = vec2(-rel.x, rel.y);
${FOCUS_RINGS ? `  {   // ?s3=focus with the ring map (step 3): the whole ring field concentric round uMatchVP (where the original has its
      // centre), not only the inner part: the walls' 3D offset from the path's own vanishing point (uMatchPathVP), less
      // the offset of uMatchVP from it, in widths of the 1:2 reference frame (y up). Still on the 3D tube: as the camera moves
      // the rings move with it
    vec2 mtOff = (uMatchVP - uMatchPathVP) * uMatchRes / max(min(uMatchRes.x, 0.5 * uMatchRes.y), 1.0);
    vec2 mtV = at / du / uHeroTanW - mtOff * step(1.0, uMatchRes.x);
    rw = length(mtV); at = mtV;
  }
` : ''}  vec2 sd = gl_FragCoord.xy - uMatchVP * uMatchRes;
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
// ?s3=focus only (the user's vortex kit, 5 November about 17:45 UTC: "deep twisting cobalt-blue water streams, irregular
// turquoise swirling currents, broken white splash streaks, layered water motion", not smooth, wide, evenly circular bands):
// the walls' water rebuilt as BROKEN, TWISTING RIBBONS inside matchWall's band block (it uses bs, aw, bz, bout, rw, tu, lr,
// vr, c). The band phase is twisted by two slow travelling curls (angle x log r, moving with time) and the variation map;
// each band is cut into arcs (a different count per band), each arc pushed in or out by its own offset, so the ribbons
// break and step instead of closing into rings; across each ribbon a light cyan leading edge, a royal-blue or turquoise
// body (the arc's own pick: the currents), deeper cobalt, then a dark gap; the derived water's own light and dark kept as
// variation. Colours are the original's measured ring-zone colours, written through the inverse of the walls' display
// compensation (lift, saturation) so they land as measured. Sets fRq, the ribbon phase the flecks follow.
// ?s3=focus: smooth value noise (cells of 1 in p, smoothstep-blended; seed: another pattern) for the flows below
const FOCUS_NOISE_GLSL = /* glsl */ `
float fcH(vec2 i, float s) { return fract(sin(dot(i, vec2(12.9898, 78.233)) + s * 17.17) * 43758.5453); }
float fcNz(vec2 p, float s) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(fcH(i, s), fcH(i + vec2(1.0, 0.0), s), f.x), mix(fcH(i + vec2(0.0, 1.0), s), fcH(i + vec2(1.0, 1.0), s), f.x), f.y);
}
`;
// the screen colour before matchWall's lift and saturation (both applied at its end): for colours drawn inside matchWall
function preLiftSat(M, hex) {
  const n = parseInt(hex.slice(1), 16), t = [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
  const l = 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
  return `vec3(${t.map((v) => f4(Math.min(Math.max((l + (v - l) / M.sat) * (1 - M.lift) + M.lift, 0), 1))).join(', ')})`;
}
// ?s3=focus only (the Art Director's item 5, the kit's "modest warm centre glow concentrated round the inner arcs"): the
// original's tight pastel rings round its warm core, measured by radius round the centre (r < 0.12 W: salmon-peach #edada0
// at 0.04-0.07 W, pink-violet #e1adeb-#eea0f0 at 0.07-0.12 W between white rings, almost no saturated blue inside 0.12 W;
// ours had royal flows down to 0.075 W). Concentric bands on the walls' own band spacing, flowing outward with them; across
// each band pale blue, a white ring (whiteAt), then a soft pink-violet ring (pinkAt: its place in the band, soft: the rings'
// soft edges), salmon-peach instead of pink toward the core (peachTo: [full to, out] in rw); r: [in, full, full to, out] in
// rw; after the mid vortex's whitening
// and the core's tint (which would wash the pink out), before the hue pull, lift and saturation (colours pre-compensated)
function focusInnerGLSL(M) {
  const I = M.innerRings, B = M.bands;
  return /* glsl */ `  {   // ?s3=focus: the original's pastel inner rings round the warm core (tunnel_r9_focus.js walls.innerRings)
    float iz = smoothstep(${f4(I.r[0])}, ${f4(I.r[1])}, rw) * (1.0 - smoothstep(${f4(I.r[2])}, ${f4(I.r[3])}, rw));
    float ik = fract(lr * ${f4(B.perLog)} + tu * ${f4(B.spiral)} + (vr.b - 0.5) * ${f4(B.wobble)} - uTime * ${f4(B.flow * B.perLog)} - uHeroTravel * ${f4(B.travel * B.perLog)}
      + ${f4(I.twist || 0)} * sin(6.2831853 * tu * 2.0 + lr * 1.6 + uTime * 0.35));   // (bent a little, as the original's: not a target)
    float ipk = smoothstep(${f4(I.pinkAt[0] - I.soft)}, ${f4(I.pinkAt[0] + I.soft)}, ik) * (1.0 - smoothstep(${f4(I.pinkAt[1] - I.soft)}, ${f4(I.pinkAt[1] + I.soft)}, ik));
    vec3 iring = mix(${preLiftSat(M, I.pink)}, ${preLiftSat(M, I.peach)}, 1.0 - smoothstep(${f4(I.peachTo[0])}, ${f4(I.peachTo[1])}, rw));
    float iwk = smoothstep(${f4(I.whiteAt[0] - I.soft)}, ${f4(I.whiteAt[0] + I.soft)}, ik) * (1.0 - smoothstep(${f4(I.whiteAt[1] - I.soft)}, ${f4(I.whiteAt[1] + I.soft)}, ik));
    vec3 icol = mix(mix(${preLiftSat(M, I.pale)}, ${preLiftSat(M, I.white)}, iwk), iring, ipk);
    c = mix(c, icol, iz * ${f4(I.amount)});
  }
`;
}
// ?s3=focus only (the Art Director's item 6, the left wall: x 0-0.30, y 0.44-0.79 glows pale in the original, L* 77, white
// 25%, pale 30%; ours was saturated royal, L* 66, white 7%): on the walls' left sector (an angle window round `centre`
// degrees, counter-clockwise from screen-right; cos: [from, full] of the cosine to it) and beyond r (rw), the water's own
// light and dark are mapped onto a pale luminous palette (dark -> periwinkle blue, middle -> pale blue, bright -> white;
// lum: [dark to middle from, to; middle to white from, to]), so the bands and splashes keep their shapes. The material's
// colour, not a post effect: no bloom, exposure or haze
function focusLeftGLSL(M) {
  const G = M.leftGlow, a = (G.centre * Math.PI) / 180;
  return /* glsl */ `  {   // ?s3=focus: the left wall's pale glowing water (tunnel_r9_focus.js walls.leftGlow)
    float lw = smoothstep(${f4(G.cos[0])}, ${f4(G.cos[1])}, cos(6.2831853 * tu - ${f4(a)})) * smoothstep(${f4(G.r[0])}, ${f4(G.r[1])}, rw);
    float ll = dot(c, vec3(0.2126, 0.7152, 0.0722));
    vec3 lpal = mix(${G.dark ? preLiftSat(M, G.dark) : 'c'}, ${preLiftSat(M, G.mid)}, smoothstep(${f4(G.lum[0])}, ${f4(G.lum[1])}, ll));   // (dark null: the darks kept vivid)
    lpal = mix(lpal, ${preLiftSat(M, G.white)}, smoothstep(${f4(G.lum[2])}, ${f4(G.lum[3])}, ll));
    c = mix(c, lpal, lw * ${f4(G.amount)});
  }
`;
}
function focusRibbonsGLSL(M) {
  if (M.ringMap) return '    float fRq = bs;   // (?s3=focus: the ring map replaces the ribbons; the flecks follow the band phase)\n';
  const R = M.ribbons;
  const pre = (hex) => preLiftSat(M, hex);
  // (the user's kit, 18:26 UTC, problem B: "tighter hard-outline ribbons, more even concentric circles": the ribbons were a
  // sawtooth across each band (the dark gap jumped straight to the light cyan edge where the phase wrapped) and each arc was
  // pushed by a step offset keyed on its band's index (hard breaks at every arc end and band boundary, dark lines where the
  // arcs ended). Now every part is continuous: the offsets and the currents' colours are smooth value noise over (angle,
  // band phase), and across a band the colour runs deep cobalt -> body (royal, turquoise and periwinkle currents blended
  // softly) with a soft light-cyan accent near its inner side -> deep -> the dark-blue gap -> deep again, the same colour
  // at both ends, so no outline is drawn anywhere. R.soft: [body in, body out from, body out to], the accent [at, half
  // width, amount], cells: [noise cells round a turn, per band])
  const S = R.soft;
  const nz = (p, seed) => `fcNz(${p}, ${f4(seed)})`;
  return /* glsl */ `    float fRq = bs;
    {   // ?s3=focus: broad, softly blended, twisting cobalt and turquoise flows (tunnel_r9_focus.js)
      float rTw = ${f4(R.curl[0][0])} * sin(6.2831853 * tu * ${f4(R.curl[0][1])} + lr * ${f4(R.curl[0][2])} + uTime * ${f4(R.curl[0][3])})
        + ${f4(R.curl[1][0])} * sin(6.2831853 * tu * ${f4(R.curl[1][1])} - lr * ${f4(R.curl[1][2])} - uTime * ${f4(R.curl[1][3])} + 1.7)
        + (vr.g - 0.5) * ${f4(R.wobble)};
      // (the spiral's seam: tu wraps at the screen-left, on the horizontal through the camera, where bs steps by one band; the
      // angle is counted from straight down instead, so that step falls on the tube's bottom, under the water floor)
      float rTu = tu < -0.25 ? tu + 1.0 : tu;
      float rq = bs + (rTu - tu) * ${f4(M.bands.spiral)} + rTw;
      vec2 rnp = vec2((rTu + 0.25) * ${f4(S.cells[0])}, rq * ${f4(S.cells[1])});
      float rqo = rq + (${nz('rnp', 0)} - 0.5) * ${f4(R.offset)};
      float rk = fract(rqo);
      fRq = rqo;
      vec2 rcp = vec2((rTu + 0.25) * ${f4(S.cells[0])}, rqo * ${f4(S.cells[1])});
      float rn1 = ${nz('rcp', 1)}, rn2 = ${nz('rcp * 1.7', 2)}, rn3 = ${nz('rcp * 2.3', 3)};
      vec3 rBody = mix(${pre(R.royal)}, ${pre(R.turq)}, smoothstep(${f4(1 - R.turqShare - 0.12)}, ${f4(1 - R.turqShare + 0.12)}, rn1));
      rBody = mix(rBody, ${pre(R.peri)}, smoothstep(${f4(1 - R.periShare - 0.1)}, ${f4(1 - R.periShare + 0.1)}, rn2) * 0.8);
      vec3 rc = mix(${pre(R.deep)}, rBody, smoothstep(0.0, ${f4(S.body[0])}, rk) * (1.0 - smoothstep(${f4(S.body[1])}, ${f4(S.body[2])}, rk)));
      rc = mix(rc, ${pre(R.edge)}, exp(-pow((rk - ${f4(S.accent[0])}) / ${f4(S.accent[1])}, 2.0)) * ${f4(S.accent[2])} * smoothstep(0.2, 0.7, rn3));
      rc = mix(rc, ${pre(R.gap)}, smoothstep(${f4(R.gapFrom[0])}, ${f4(R.gapFrom[1])}, rk) * (1.0 - smoothstep(${f4(R.gapFrom[2])}, 1.0, rk)));
      float rl = dot(c, vec3(0.2126, 0.7152, 0.0722));
      rc = clamp(rc * (${f4(1 - R.keep)} + ${f4(2 * R.keep)} * clamp(rl, 0.0, 1.0)), 0.0, 1.0);
      ${R.satBoost ? `{ float rs = dot(rc, vec3(0.2126, 0.7152, 0.0722)); rc = clamp(rs + (rc - rs) * ${f4(R.satBoost)}, 0.0, 1.0); }   // (measured: the flows showed less saturated than drawn)` : ''}
      float rKeep = 1.0 - smoothstep(0.0, 0.1, c.r - c.b);   // (the warm patches kept)
      c = mix(c, rc, ${f4(R.amount)} * bz * bout * rKeep);
    }
`;
}
// ?s3=focus only (the focused correction pass, MATCH.walls.flecks from tunnel_r9_focus.js): white splash flecks and streaks
// on the walls' water, inside matchWall's band block (it uses bs, bk, aw, bz, dl, rw, tu). Cells round each ring flowing
// with the bands: in some a short white streak along the ring, slightly bent, in others a round drop. Hashes over small cell
// indices only (the angle's index wrapped, so the seam at the left is invisible). Faded out where a cell would be under about
// two pixels (aw: the band phase per pixel).
function focusFlecksGLSL(M) {
  const F = M.flecks, D = F.drops;
  return /* glsl */ `    {   // ?s3=focus: the white splash flecks and streaks (tunnel_r9_focus.js)
      float fz = smoothstep(${f4(F.r[0])}, ${f4(F.r[1])}, rw) * (1.0 - smoothstep(${f4(F.r[2])}, ${f4(F.r[3])}, rw)) * bz;
      float flit = mix(1.0, 1.0 - smoothstep(0.35, 0.7, fract(fRq)), ${f4(F.lit)});   // more on each ribbon's lit edge
      float fa = tu + uTime * ${f4(M.swirl * 1.6)};
      vec2 fq = vec2(fa * ${f4(F.cols)}, fRq * ${f4(F.rows)});
      vec2 fi = floor(fq); fi.x = mod(fi.x, ${f4(F.cols)});
      float fh = fract(sin(dot(fi, vec2(12.9898, 78.233))) * 43758.5453);
      float fh2 = fract(fh * 17.13), fh3 = fract(fh * 31.71);
      vec2 fo = fract(fq) - 0.5 - (vec2(fh2, fh3) - 0.5) * vec2(0.35, 0.45);
      fo.y += fo.x * fo.x * (fh2 - 0.5) * ${f4(F.bend)};
      float fe = length(vec2(fo.x / mix(${f4(F.len[0])}, ${f4(F.len[1])}, fh3), fo.y / mix(${f4(F.wid[0])}, ${f4(F.wid[1])}, fh2)));
      float fpx = 1.0 - smoothstep(${f4(F.fade[0])}, ${f4(F.fade[1])}, aw * ${f4(F.rows)});
      float fk = step(${f4(1 - F.dens)}, fh) * (1.0 - smoothstep(${f4((F.edge || [0.6, 1.0])[0])}, ${f4((F.edge || [0.6, 1.0])[1])}, fe)) * fpx;
      ${F.breakup ? `// (the Art Director's item 4: broken splash shapes, not clean dashes: the shape's edge eaten by smooth noise, so it
      // breaks into an irregular blob with a ragged outline and a gap or two)
      fk *= smoothstep(0.42, 0.58, fcNz(fq * vec2(${f4(F.breakup[0])}, ${f4(F.breakup[1])}) + fh * 31.0, 7.0) + (1.0 - fe) * ${f4(F.breakup[2])});` : ''}
      vec2 dq = vec2(fa * ${f4(D.cols)}, fRq * ${f4(D.rows)} + 0.37);
      vec2 di = floor(dq); di.x = mod(di.x, ${f4(D.cols)});
      float dh = fract(sin(dot(di, vec2(39.3468, 11.1351))) * 24634.6345);
      vec2 dO = fract(dq) - 0.5 - (vec2(fract(dh * 13.7), fract(dh * 7.31)) - 0.5) * 0.4;
      float dr = mix(${f4(D.r[0])}, ${f4(D.r[1])}, fract(dh * 23.1));
      float dpx = 1.0 - smoothstep(${f4(F.fade[0])}, ${f4(F.fade[1])}, aw * ${f4(D.rows)});
      float dk = step(${f4(1 - D.dens)}, dh) * (1.0 - smoothstep(dr * 0.7, dr, length(dO * vec2(0.72, 1.0)))) * dpx;
      ${F.late
    // (late: drawn after the display compensation, as the thin ring lines: match's glintWall below tints every bright wall
    // texel toward #cae0ff, so the splashes came out as pale translucent blue blobs instead of white water)
    ? `mtFleck = clamp(max(fk, dk * 0.9) * fz * flit, 0.0, 1.0) * ${f4(F.amount)};`
    : `c = mix(c, ${hx(F.col)}, clamp(max(fk, dk * 0.9) * fz * flit, 0.0, 1.0) * ${f4(F.amount)});`}
    }
`;
}
// ?s3=focus with MATCH.walls.ringMap (step 3 of the user's fidelity plan): the ORIGINAL's own rings on the walls. Placed just
// before the walls' lift and saturation, so it replaces what the bands, rainbow, mid-vortex whitening, core tint and hue pull
// drew (by `amount`) and is pre-compensated for the lift and saturation that follow, so it shows as the original's colours.
// The map (tunnel_rings_original.png) has the base map's rows and columns, so it is sampled at bv; the derived relief's own
// light and dark (dl: the detail map, flowing outward and round) moves over it as the water's flow.
function focusRingMapGLSL(M) {
  const R = M.ringMap;
  return /* glsl */ `  {   // ?s3=focus: the original's own rings (tunnel_rings_original.png, tools/screen4/derive_ring_map.py)
    vec3 rmS = clamp(textureGrad(uFocusRings, bv, dx, dy).rgb + dl * ${f4(R.detail)}, 0.0, 1.0);
${R.debugCol ? `    rmS = vec3(${R.debugCol.map(f4).join(', ')});   // (debug only: a constant colour, to test the display path)
` : ''}    float rmL = dot(rmS, vec3(0.2126, 0.7152, 0.0722));
    vec3 rmP = clamp((rmL + (rmS - rmL) / ${f4(M.sat)}) * ${f4(1 - M.lift)} + ${f4(M.lift)}, 0.0, 1.0);
    float rmK = ${f4(R.amount)} * smoothstep(${f4(R.r[0])}, ${f4(R.r[1])}, rw) * (1.0 - smoothstep(${f4(R.r[2])}, ${f4(R.r[3])}, rw));
    c = mix(c, rmP, rmK);
    mtEdge *= 1.0 - rmK * ${f4(R.edgeOff)};
  }
`;
}
export function matchWallGLSL() {
  const M = MATCH.walls;
  return /* glsl */ `
// ?s3=match: the walls' material derived from the approved picture (tunnel_r9_match.js)
uniform sampler2D uMatchCol, uMatchBase, uMatchDet, uMatchNrm, uMatchVar, uMatchRim; uniform float uMatchOn;
uniform vec2 uMatchVP, uMatchRes;${FOCUS_ON ? '' : ' uniform float uMatchRimU;'}${FOCUS_RINGS ? ' uniform sampler2D uFocusRings;' : ''}
${RIM_SAMPLE}
${FOCUS_ON ? '' : `// a point of the collar or the tube (cs in the cross-section, u along the path) seen from the camera through the rim's plane:
// d, its place there relative to the rim's centre (x + screen-left, h up), and the return value rho = |d| / the rim's outer
// radius, so the ramp's colour lands where the original has it on screen whatever the camera's distance (the focused pass)
float mtRimRho(vec2 cs, float u, out vec2 d) {
  float s = (uMatchRimU - uHeroCam.z) / max(u - uHeroCam.z, 0.25);
  d = uHeroCam.xy + (cs - uHeroCam.xy) * s - vec2(${f4(MATCH.hero.rim.centre[0])}, ${f4(MATCH.hero.rim.centre[1])});
  return length(d) / ${f4(MATCH.hero.round6.porthole.bezel.outer)};
}
`}${undisplayGLSL()}
${matchPlaceGLSL()}
${FOCUS_ON ? FOCUS_NOISE_GLSL : ''}
// cs: the point in the tube's cross-section (x sideways, + screen-left; h above the water), u along the path; W world, N0 its
// normal (toward the axis), T0 the path's direction
vec3 matchWall(vec2 cs, float u, vec3 W, vec3 N0, vec3 T0) {
  float rw, tu;
  mtPlace(cs, u${MT_BEND ? ', W' : ''}, rw, tu);
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
  float mtEdge = 0.0;${FOCUS_ON ? ' float mtFleck = 0.0;' : `
  // (the focused pass, MATCH.walls.turb: the turbulence breaking the bands; a finer relief sample, flowing the other way)
  vec2 tsc = vec2(${f4(M.turb.scale[0])}, ${f4(M.turb.scale[1])});
  float dl2 = dot(textureGrad(uMatchDet, dv * tsc + vec2(0.37 - uTime * 0.013, 0.61 + uTime * 0.05), ddx * tsc, ddy * tsc).rgb - 0.5, vec3(0.2126, 0.7152, 0.0722));
  float turbB = ${f4(M.turb.amp / 0.11)} * dl2 + ${f4(M.turb.swirl)} * sin(tu * ${f4(6.2831853 * M.turb.m)} + lr * ${f4(M.turb.k)} - uTime * ${f4(M.turb.speed)} + dl2 * 6.0);`}
  {
    float bs = lr * ${f4(M.bands.perLog)} + tu * ${f4(M.bands.spiral)} + ${f4(M.bands.warp)} * sin(lr * ${f4(M.bands.warpF)} + 1.3) + (vr.b - 0.5) * ${f4(M.bands.wobble)}
      - uTime * ${f4(M.bands.flow * M.bands.perLog)} - uHeroTravel * ${f4(M.bands.travel * M.bands.perLog)}${FOCUS_ON ? '' : ' + turbB'};
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
${FOCUS_ON ? '' : `    // the thin streaks along the rings (MATCH.walls.streak; the focused pass), under the rim line and splash
    {
      vec2 ssc = vec2(${f4(M.streak.scale[0])}, ${f4(M.streak.scale[1])});
      float sn = dot(textureGrad(uMatchDet, dv * ssc + vec2(0.53 + uTime * ${f4(M.streak.speed)}, 0.19), ddx * ssc, ddy * ssc).rgb - 0.5, vec3(0.2126, 0.7152, 0.0722)) / 0.11;
      float sl = dot(c, vec3(0.2126, 0.7152, 0.0722));
      float sk = bz * bout * ${f4(M.streak.amount)} * (1.0 - smoothstep(0.82, 0.92, sl)) * (1.0 - smoothstep(0.0, 0.08, c.r - c.b));
      c = mix(c, ${hx(M.streak.light)} * mix(0.95, 1.1, sl), smoothstep(${f4(M.streak.from[0])}, ${f4(M.streak.from[1])}, sn) * sk);
      c = mix(c, ${hx(M.streak.dark)} * mix(1.0, 1.12, sl), smoothstep(${f4(M.streak.from[0])}, ${f4(M.streak.from[1])}, -sn) * sk);
    }
`}    c = mix(c, ${hx(M.bands.rim.col)}, rimK * ${f4(M.bands.rim.amount)});
    // white water broken over each band's lit part where the relief crests (the approved's turbulent splash bits along the
    // rings; blobs of the relief's own cells, not star shapes)
    float spK = smoothstep(${f4(M.bands.splash.from[0])}, ${f4(M.bands.splash.from[1])}, dl) * (1.0 - smoothstep(${f4(M.bands.splash.to[0])}, ${f4(M.bands.splash.to[1])}, bk)) * bz;
    c = mix(c, ${hx(M.bands.splash.col)}, spK * ${f4(M.bands.splash.amount)});
${FOCUS_ON ? focusRibbonsGLSL(M) + focusFlecksGLSL(M) : ''}    // the approved's brightest texels are a dense net of thin ice-blue (#cae0ff) ring lines across every band: a thin line
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
${FOCUS_ON ? '' : `    // the pastel inner ring (MATCH.walls.innerRing; the focused pass): pink at the sides, pink-white at the top, cream below,
    // broken by the turbulence like the bands
    float ik = exp(-pow((rw - ${f4(M.innerRing.r)} + turbB * 0.006) / ${f4(M.innerRing.w)}, 2.0)) * ${f4(M.innerRing.amount)};
    vec3 ic = mix(${hx(M.innerRing.cols[0])}, ${hx(M.innerRing.cols[1])}, smoothstep(0.4, 0.95, sin(ra)));
    ic = mix(ic, ${hx(M.innerRing.cols[2])}, smoothstep(-0.3, -0.8, sin(ra)));
    c = mix(c, ic * mix(0.92, 1.04, rl), ik);
`}  }
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
${FOCUS_ON && M.innerRings ? focusInnerGLSL(M) : ''}${FOCUS_ON && M.leftGlow ? focusLeftGLSL(M) : ''}  {   // the walls' electric blue toward the approved's royal hue (its median 215 degrees against our 210): hue 203-216 pulled
      // to about 218 by bringing green down; the cyan streaks (205 degrees and under) and the warm patches kept (MATCH.walls.royal)
    float tq = (c.g - c.r) / max(c.b - c.r, 1e-4);   // 0 at 240 degrees, 1 at 180 (blue above green above red)
    float rk = step(c.r, c.g) * step(c.g, c.b) * smoothstep(0.3, 0.42, tq) * (1.0 - smoothstep(0.52, 0.58, tq)) * wz * ${f4(M.royal.amount)};
    c.g = mix(c.g, c.r + ${f4(M.royal.to)} * (c.b - c.r), rk);
  }
${FOCUS_ON ? '' : `  {   // the walls' pale mid blues toward saturated electric blue and azure (MATCH.walls.deepen; the focused pass): blue the
      // largest channel, outside the warm core, under the whites' brightness (screen luminance)
    float dlum = dot(c, vec3(0.2126, 0.7152, 0.0722));
    float dk = step(c.r, c.b) * step(c.g, c.b) * smoothstep(0.07, 0.11, rw) * (1.0 - smoothstep(${f4(M.deepen.lum[0])}, ${f4(M.deepen.lum[1])}, dlum));
    c = clamp(dlum + (c - dlum) * mix(1.0, ${f4(M.deepen.amount)}, dk), 0.0, 1.0);
  }
`}${FOCUS_RINGS ? focusRingMapGLSL(M) : ''}  c = clamp((c - ${f4(FOCUS_ON ? M.lift : M.liftWall)}) / ${f4(1 - (FOCUS_ON ? M.lift : M.liftWall))}, 0.0, 1.0);   // (focus: match's one lift at 9a95c06)
  float cl = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = clamp(cl + (c - cl) * ${f4(M.sat)}, 0.0, 1.0);
  vec3 col = mtUndisplay(c);
  // the thin ice-blue ring lines, a little over the whites' cap so they are the brightest texels (as the approved's)
  col = mix(col, mtUndisplay(${hx(M.bands.edge.col)}) * ${f4(M.bands.edge.boost)}, mtEdge);
${FOCUS_ON ? `  col = mix(col, mtUndisplay(${hx(M.flecks.col)}), mtFleck);   // ?s3=focus: the white splashes (focusFlecksGLSL, late)
` : ''}
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
// ?s3=focus (the user's kit, 5 November about 18:26 UTC, problem A: "the exposed lavender-grey inner wall at the lower left"):
// the lining (heroWalls) runs on before the tube's mouth, and there wallFragment paints it as the washer's flat lavender
// shell (#c4b8f0) with the navy mouth edge at uStart + 0.1. The rim's collar is centred low, so round the lower sides its
// opening is wider than the tube and that part of the lining shows through it, in front of the collar's water: a flat
// lavender strip with a navy line at the lower left and right (found with hide probes at 3.0 s: it goes with heroWalls;
// heroCollar, r6Face and the floor do not draw it). Below the rim ramp's reach (its complement in upA), on the lining before
// the mouth and over the navy edge, the walls' own animated water is drawn instead (lqWall: the same material and the same
// screen-space placement as the collar's water round it, so the two meet without a seam). The upper part, where the gold
// rim, the bevel and the ramp are, is unchanged.
function focusMouthWaterGLSL(radius, axisH) {
  return /* glsl */ `  {   // ?s3=focus: the lining before the mouth, below the rim ramp, is the walls' water (tunnel_r9_match.js)
    float fdu = u - uStart, fup = (cs.y - ${f4(axisH)}) / ${f4(radius)};
    float fk = (1.0 - smoothstep(-0.15, 0.3, fup)) * (1.0 - smoothstep(0.2, 0.32, fdu)) * uMatchOn;
    if (fk > 0.001) col = mix(col, lqWall(vW, normalize(vN), normalize(vT), cs, a, u, a * ${f4(radius)}), fk);
  }
`;
}
export function matchMouthGLSL(HERO, axisH, radius) {
  if (FOCUS_ON) {   // ?s3=focus: `match`'s mouth as it was at 9a95c06 (RIM_RHO), with the lining's water before it
    const C = HERO.rim.centre;
    return /* glsl */ `${focusMouthWaterGLSL(radius, axisH)}  {   // ?s3=match: the bevel, lilac line and navy ring inside the rim (tunnel_r9_match.js)
    float du0 = u - uStart;
    float rho = ${f4(RIM_RHO.mouth)} - ${f4(RIM_RHO.perMetre)} * du0;
    float upA = (cs.y - ${f4(axisH)}) / ${f4(radius)};
    float k = smoothstep(-0.06, 0.0, du0) * (1.0 - smoothstep(0.82, 1.0, du0)) * smoothstep(-0.15, 0.3, upA) * uMatchOn;
    col = mix(col, mtUndisplay(mtRimS(cs - vec2(${f4(C[0])}, ${f4(C[1])}), rho)), k);
  }
`;
  }
  // (the focused pass: the ramp at the screen rho, mtRimRho; it fades into the walls' own colours where the ramp reaches the
  // blue inside the navy ring, rho 0.80-0.82, as the old first metre did between 0.82 and 1.0 m)
  return /* glsl */ `  {   // ?s3=match: the bevel, lilac line and navy ring inside the rim (tunnel_r9_match.js)
    float du0 = u - uStart;
    vec2 rd; float rho = mtRimRho(cs, u, rd);
    float upA = (cs.y - ${f4(axisH)}) / ${f4(radius)};
    float k = smoothstep(-0.06, 0.0, du0) * smoothstep(0.802, 0.82, rho) * smoothstep(-0.15, 0.3, upA) * uMatchOn;
    col = mix(col, mtUndisplay(mtRimS(rd, rho)), k);
  }
`;
}
// the collar's top arc (tunnel_r8_liquid.js liquidCollar): the bevel's outer part instead of the flat pale lavender (at the
// screen rho, mtRimRho, since the focused pass)
export function matchCollarGLSL(HERO) {
  if (FOCUS_ON) {   // ?s3=focus: `match`'s collar as it was at 9a95c06 (RIM_RHO)
    const C = HERO.rim.centre;
    return /* glsl */ `  col = mix(col, mtUndisplay(mtRimS(vXHU.xy - vec2(${f4(C[0])}, ${f4(C[1])}), ${f4(RIM_RHO.inner)} + (${f4(RIM_RHO.mouth)} - ${f4(RIM_RHO.inner)}) * t)), uMatchOn);   // ?s3=match: the approved rim ramp (tunnel_r9_match.js)
`;
  }
  return /* glsl */ `  { vec2 rd; float rho = mtRimRho(vXHU.xy, vXHU.z, rd); col = mix(col, mtUndisplay(mtRimS(rd, rho)), uMatchOn); }   // ?s3=match: the approved rim ramp (tunnel_r9_match.js)
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
  // its pose (MATCH.sockPose; `match` only, focus has its own below): the model (the holder's turn group's child, centred on the turn's origin) turned round its own
  // centre; no new object is made (a new object would draw a UUID from the game's seeded Math.random)
  const sockModel = socks[0] && socks[0].turn && socks[0].turn.children[0];
  if (!FOCUS_ON && sockModel && MATCH.sockPose) {
    const P = MATCH.sockPose, D = Math.PI / 180, q = new THREE.Quaternion(), e = new THREE.Quaternion();
    q.setFromAxisAngle(new THREE.Vector3(0, 0, 1), P.roll * D)
      .multiply(e.setFromAxisAngle(new THREE.Vector3(0, 1, 0), P.yaw * D))
      .multiply(e.setFromAxisAngle(new THREE.Vector3(1, 0, 0), P.pitch * D));
    sockModel.quaternion.premultiply(q); sockModel.position.applyQuaternion(q);
    report.sockPose = P;
  }
  // ?s3=focus: every sock lies sideways as the original's (MATCH.sockPose, tunnel_r9_focus.js): a fixed pose between its
  // rocking group and the model, so the game's bob and rock still play on top. Visual only (its holder, the pick-up place,
  // is unchanged)
  if (FOCUS_ON && MATCH.sockPose) {
    for (const k of socks) {
      if (!k.turn || !k.turn.children[0]) continue;
      const model = k.turn.children[0], pose = new THREE.Group();
      pose.name = 'focusSockPose'; pose.rotation.set(...MATCH.sockPose);
      if (MATCH.sockLift) pose.position.set(...MATCH.sockLift);   // (m, in the rocking group's frame: y up; visual only)
      k.turn.remove(model); pose.add(model); k.turn.add(pose);
    }
    report.sockPose = MATCH.sockPose;
  }
  // the gem beside the big left coin at MATCH.gemScale of its size, round its own centre (its holder, the pick-up place and
  // the pop animation's scale are unchanged)
  const gi = gems[0] && gems[0].obj && gems[0].obj.children[0];
  if (gi && MATCH.gemScale !== 1) { gi.scale.multiplyScalar(MATCH.gemScale); gi.position.multiplyScalar(MATCH.gemScale); report.gemScale = MATCH.gemScale; }
  // ?s3=focus: the original's gem is a wide, flat cut seen from the side (1.5 times as wide as tall on screen; ours 1.1): its
  // height squashed round its own centre (MATCH.gemSquash, tunnel_r9_focus.js; it spins about this axis). Visual only
  if (FOCUS_ON && gi && MATCH.gemSquash) { gi.scale.y *= MATCH.gemSquash; gi.position.y *= MATCH.gemSquash; report.gemSquash = MATCH.gemSquash; }
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
  const report = { textures: MATCH_UNIFORMS.uMatchOn.value === 1, camera: MATCH_CAM };
  MATCH_UNIFORMS.uMatchRimU.value = L.tunnelStart + HERO.rim.u;   // the rim's plane (mtRimRho)
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
      if (FOCUS_RINGS) {   // ?s3=focus with the ring map: the path's own vanishing point (straight ahead along the path, mtPlace)
        TR.frame(U.uHeroCam.value.z, Fc); pv.copy(cam.position).addScaledVector(Fc.T, 1e4).project(cam);
        MATCH_UNIFORMS.uMatchPathVP.value.set((pv.x + 1) / 2, (pv.y + 1) / 2);
      }
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
