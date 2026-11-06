// ?s3=round6 (test only): round5 plus the architecture of the approved Screen 4's washing machine, rebuilt as real geometry.
// Round 5 and everything older are unchanged; nothing here runs without the switch.
//
//   - entrance: the drum's mouth is a washing-machine porthole: a large lavender drum face (brushed metal, a soft lavender
//               sheen up and to the left, cyan light bouncing back from the tunnel round the opening), a THICK rounded gold
//               bezel (a lathe profile about half a metre across, not a thin torus), a bronze step ring inside it, a glossy
//               royal-blue door seal, and gold rivets round the face. Round 5's thin torus rims are hidden.
//   - tunnel:   the thin neon rings are replaced by layered flanges: thick stepped rings standing out of the wall (royal-blue
//               face, a glowing cyan lip on the inner edge, darker underside), some with a gold lip, so the tube reads as
//               a structured drum with physical depth rather than a striped pipe.
//   - settings: ROUND6.round5 overrides round5's own settings (camera, water, vortex) when round6 is on. They are applied in
//               tunnel_r5.js before its shaders are written, so ?s3=round5 itself stays exactly as it was.
import * as THREE from 'three';
import { NOISE } from './shaders.js';
import { R7_WATER, buildR7Water } from './tunnel_r7_water.js';
import { HERO_ON, HERO, buildHero } from './tunnel_r7_hero.js';

// The switch is read here (not from screen3_models.js) so tunnel_r5.js can use it without an import cycle.
const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
// ?s3=round7 (test): round6 + the rich preview + the Screen 4 pass that matches the ORIGINAL approved Screen 4 (ROUND6.r7)
export const R7_ON = LIST.includes('round7') || LIST.includes('hero') || LIST.includes('liquid') || LIST.includes('splash') || LIST.includes('match') || LIST.includes('focus');   // ?s3=hero: round7's dedicated hero scene (tunnel_r7_hero.js)
export const R6_ON = LIST.includes('round6') || R7_ON;
// ?s3=match (Round 9): the face has no light panel above the door. It came from the Round 6 construction guide, not the
// original approved Screen 4, and on a phone it showed as a flat pale rectangle under the mission banner (the user's
// checkpoint 07, 5 November). Every other version keeps it.
const R9_MATCH = LIST.includes('match') || LIST.includes('focus');   // ?s3=focus: match plus the focused correction pass
// ?s3=round6,rich (preview): pass 3 (the board's architecture and composition, which the user likes and keeps as ?s3=round6)
// plus the ORIGINAL approved Screen 4's richness (ROUND6.rich below)
export const R6_RICH = R6_ON && (LIST.includes('rich') || R7_ON);

export const ROUND6 = {
  // where the camera has finished blending from the Tap to Start framing into the drum framing (metres from the drum's
  // mouth; round5 and older: 3 m inside it, so the entry was seen through a half-blended camera)
  // pass 3: where the drum's light and effects (colour grade, glow, droplets, bubbles, splashes) ramp in, in metres from the
  // mouth (round5 and older: -0.5 to 2.5); the hero moment is now 3.4 m before the mouth
  inside: [-5, -2.5],
  camBlendEnd: -4.3,   // pass 3: the drum framing is set by the earlier hero moment (2.8 s), with the whole porthole in view
  // the porthole at the drum's mouth (metres; z is along the path, negative toward the rider, from the drum's start)
  porthole: {
    bezel: { inner: 1.98, outer: 2.5, front: -0.34, back: 0.16, round: 0.55 },   // the thick gold bezel's cross-section
    step: { inner: 1.9, outer: 2.04, z: 0.22, depth: 0.14 },                       // a bronze step ring just inside it
    seal: { radius: 1.99, tube: 0.075, z: 0.36 },                                   // the royal-blue rubber door seal
    face: { inner: 2.42, outer: 9.0, z: -0.2, dish: 0.35 },                          // the lavender drum face
    rivets: { count: 16, radius: 2.82, size: 0.07 },
    rimRivets: { count: 24, size: 0.055 },   // the construction guide: rivets round the gold rim's front face
    panels: 12,                              // panel seams on the lavender wall, and a glowing light panel at the top
    lavender: [0.68, 0.6, 0.98], lilac: [0.88, 0.8, 1.0], shade: [0.34, 0.26, 0.62], goldColor: 0xffcf6e, goldGlow: 0x8a5212, goldRough: 0.2, goldEnv: 1.6, faceGloss: 0.55, lemon: 0,
  },
  // layered flanges standing out of the tunnel wall (replace round4's thin glow rings)
  flanges: { every: 2.3, from: 1.0, wall: 2.03, lip: 1.8, depth: 0.16, goldEvery: 3, arc: [-56, 236],
    // pass 3: brighter glowing layers (the target's luminous layered rings); pass 1-2: face [0.03, 0.1, 0.62], deep [0.01, 0.03, 0.26]
    face: [0.05, 0.35, 0.95], deep: [0.02, 0.14, 0.58], cyan: [0.6, 1.0, 1.2], gold: [1.0, 0.74, 0.32] },
  // the bow wave: curved sheets of water wrapping both sides of the character, from just in front of it round to behind it
  // (toward the camera), turquoise and translucent low down, a white foam crest broken into fingers along the top. Their
  // front parts sit behind the character and their back parts in front of it, so the character is in the water, not on it.
  // reach: angle from straight ahead [start, end] in degrees; radius [at start, at end]; height: crest height (m);
  // swerve: extra height per m/s of sideways speed; lean: how far the sheet leans outward at its top (m)
  bowWave: { reach: [25, 150], radius: [0.38, 1.05], height: 0.64, swerve: 0.12, lean: 0.22, flow: 1.6, rows: 14, cols: 64,
    body: [0.0, 0.52, 0.88], deep: [0.0, 0.22, 0.8], alpha: 0.85 },
  // pass 2 (the user's review of Round 6): the deeper walls as a washer drum's surface instead of uniform neon bands:
  // perforated drum metal (staggered dimples whose rims catch light), broad uneven light that drifts, deep blue shadow behind
  // each flange, turquoise water light playing over the lower walls, lavender bounce on the upper wall, sparse white streaks
  // (measured against the approved tunnel: pass 2's first walls were a little darker and more saturated than the approved and
  // had too little turquoise light, so the water light and white streaks were raised and the caustic cells made finer)
  walls: { hole: 0.2, holeFade: [5, 13], light: 0.62, drift: 0.35, caustic: 0.95, causticScale: 1.7, lowGlow: 0.5, lavender: 0.1, streaks: 0.55, glints: 0.9,
    glowFrom: [3, 12], glowMix: 0.75,
    // pass 3 (the user's exact target board: "glowing watery vortex", brighter, more magical): bright water walls
    lit: [0.0, 0.42, 1.0], cyanLit: [0.1, 0.82, 1.0], swirlCol: [0.12, 0.85, 1.0], ringCol: [0.3, 0.85, 1.0], midCol: [0.05, 0.72, 1.0],
    vband: 0.85, warmRing: 0, warmAt: 14, midRing: 0, farMix: 0.55, glintCut: 0.965, shade: [0.02, 0.16, 0.72], metal: 0.12, twist: 0.35, flow: 0.9, swirl: 0.55, ringStep: 1.15, rings: 0.55, foam: 0.8 },
  // flanges: each one different (lit brightness, cyan / turquoise / unlit deep blue, patchy light round it), not identical neon
  flangeVary: { dim: 0.5, patch: 0.85, lavender: 0.12 },   // pass 3: lavender reflections cut to a hint (measured: 14-23% violet in the tunnel against the target's 2%)
  // the water: saturated turquoise and electric blue kept under the white wherever it is not foam (amount), in the drum and on
  // the slide's last metres before the mouth (the hero moment); white crests stay white
  waterTint: { amount: 0.85, deep: [0.0, 0.3, 0.95], bright: [0.0, 0.8, 0.95], slideFrom: [-9, -4] },
  // the wake and waterline react to movement: the wake lengthens with speed and swings away from a swerve, the waterline foam
  // tilts toward the side the character moves to, squashes and spreads in a ring when it lands, and thins out in the air
  wake: { speedLen: 0.6, swing: 0.16, tilt: 0.1, land: 0.7 },
  // pass 3: the collectibles at the drum's mouth arranged as in the exact target board at the hero moment: a coin left of the
  // character's head and two in the middle just beyond it, the gem up and to the right, the first sock on the right. All
  // still real and collectable (heights within reach while riding); the mission is still five socks. Positions are metres
  // along the track (the drum's mouth is at 3.9). They replace round3's first coin line, first sock, and add one gem.
  layout: { coinLines: [[0, 4.6, 1, 1.0, 0.75, 0], [1, 5.6, 2, 1.0, 0.8, 0]], firstSock: [2, 2.8], extraGem: [2, 5.0] },
  hideFoamBubbles: true,   // round4's rounded blue bubble clusters on the water (the user: "too many rounded blue bubble clusters")
  hideCrestCards: true,    // round5's painted foam-lump cards: in the drum they merged into a pale white mass; the bow wave replaces them
  // round5's own settings, overridden for round6 (merged in tunnel_r5.js before its shaders are written)
  round5: {
    // the camera: level with the tube's axis and aimed straight down it, so the bright centre sits just below the middle of
    // the screen (approved 52%); a little closer and lower so the character is about half the frame wide at the bottom
    // Worked out from the approved picture: the character is about 0.87 of the gold rim's radius wide on screen, so the rim
    // is about 2.4 times further away than the character; a 72 degree lens then gives both their approved sizes. Then swept
    // in real captures (aim 0.6 to 2.7, height 0.45 to 0.9, distance 2.0 to 2.7): low and aimed high puts, at the hero moment
    // 3.1 s, the gold rim's arc at about 19% of the height with the lavender face in the top corners, the tunnel's centre at
    // about 48% (approved 52%) and the character at about 77% (approved 80%), about 40% of the screen wide.
    // pass 3 (the exact target board): further back, so the character is smaller (about 40% of the width) and the whole
    // porthole shows, slightly cut at the screen edges, with the tunnel's centre at about 52% and the character at about 70%
    camera: { off: [0, 0.75, -3.0], lookY: 2.2, fov: 72 },
    // the water vortex on the walls: round5's evenly spaced glowing crest lines read as a striped pipe and hid the flanges;
    // fewer, softer bands with more swirl, deeper troughs, more white water, so the flanges carry the structure
    // checkpoint C: rich saturated electric blue with cyan highlights, not pastel: the rainbow ring and the far white glow
    // were the pale stripes down the tube
    vortex: { bands: 1.0, twist: 0.12, warp: 0.6, crestLine: 0.45, lip: 0.2, ribs: 0.3, foam: 0.4, streaks: 0.28, deep: [0.0, 0.02, 0.3],
      body: [0.0, 0.3, 1.0], cyan: [0.3, 0.9, 1.0], rainbow: 0.18, farMix: 0.45, violet: 0.5 },
    // the drum water: deeper, more saturated turquoise, less blanket froth (white stays on crests and round the character)
    // churn: the white churned water round the character (round4 0.95) made a pale mass over its base; the bow wave carries it
    water: { middle: [0.0, 0.7, 0.95], side: [0.0, 0.2, 0.85], mix: 0.92, crest: 0.8, froth: 0.55, churn: 0.4 },
    // controlled glow: only the brightest highlights bloom (round5's bloom lifted the whole deep tunnel to pale)
    // pass 3: brighter and more magical (soft glow on the bright layers), still thresholded so the blues stay saturated
    bloom: { strength: 0.42, radius: 0.55, threshold: 0.95 },
    grade: { contrast: 1.2, saturation: 1.35 },
    // stronger white splashes and the character deeper in the water
    contact: { radius: 0.45, height: 0.66 },
    spray: { rate: 650, size: [0.03, 0.1] },
    heart: { core: 1.0, halo: 0.6 },
    // soap bubbles round the character: fewer, smaller, no big ones over it (they covered the character in rainbow rings)
    softBubbles: { count: 20, big: 0, size: [0.03, 0.11] },
    // bubbles streaming past: smaller and kept off the middle of the view (big rings near the camera hid the scenery)
    bubbles: { r: [0.03, 0.19], x: [0.75, 1.7] },
  },
};
// ?s3=round6,rich: the combination the user asked for. From the exact target board (kept from pass 3): the purple-and-gold
// entrance, the tunnel architecture, the brush placement and the water composition. From the ORIGINAL approved Screen 4:
// rich, sparkling, saturated blue water swirling round the drum (deeper troughs, more spiral, more white sparkle and foam
// filaments, fewer ring glows), glowing light without the pale cyan wash (more saturation, a slightly higher bloom
// threshold), and many glassy bubbles at different depths round the edges, plus more droplets and glints.
ROUND6.rich = {
  // measured: the original's richness is local contrast (0.041 against pass 3's 0.016) and sparkle (1.4% of the tunnel
  // against 0.05%), not saturation: so the glowing depth keeps its ring contrast, the far wash is lighter, and the floating
  // sparkles are bigger, brighter and more numerous
  walls: { glintCut: 0.935, glints: 1.5, shade: [0.0, 0.1, 0.62], twist: 0.6, swirl: 0.7, rings: 0.7, foam: 1.0, lavender: 0.08, midRing: 0.8, farMix: 0.3, glowMix: 0.6 },
  waterTint: { amount: 0.95, bright: [0.0, 0.85, 1.0] },
  porthole: { goldColor: 0xffe58f, goldGlow: 0x8a6a1a },   // a yellower gold, so the stronger grade does not turn it red-orange
  bowWave: { body: [0.0, 0.6, 0.95], deep: [0.0, 0.28, 0.9] },
  round5: {
    // a wider tonal range (the whole frame sat near white, so sparkle could not show) and less bloom haze
    grade: { contrast: 1.45, saturation: 1.35 },
    bloom: { strength: 0.32, radius: 0.5, threshold: 1.15 },
    softBubbles: { count: 34, size: [0.04, 0.17] },
    bubbles: { count: 90, r: [0.035, 0.27], x: [0.7, 1.9] },
    droplets: { count: 1600, size: [0.025, 0.085], scale: 700, maxPx: 18 },
  },
};
if (R6_RICH) mergeDeep(ROUND6, ROUND6.rich);
// ?s3=round7: the original approved Screen 4 is the authority (the guides explain how to build it); ROUND6.r7 is defined below
ROUND6.r7 = {
  // the deep tunnel: rich saturated cobalt with cyan-turquoise light (the user's fix board: "brighter deep-blue tunnel
  // interior, richer more saturated cobalt", "more cyan/turquoise glow"), not periwinkle; ring glows kept below white so the
  // tone mapping does not bleach them; swirl and white foam filaments stronger (the whirlpool), almost no lavender inside
  // (first try [0.0, 0.18, 0.85]-style blues came out violet after the grade: the blues here lean toward cyan)
  // Art Director's review #2 (whirlpool): the even ring glows (rings, ringStep, midRing: they kept their contrast in the depth
  // glow) read as a ribbed pipe, so they are nearly gone; the whirlpool's bands (whirl, below) carry the structure. The lit
  // wall a truer electric blue (measured: the tunnel was 30% one cyan, 248 bright, against the original's mix of electric
  // blue, cobalt, periwinkle and pale whites), more foam, glints and swirl, a stronger warm ring round the centre
  walls: { shade: [0.0, 0.05, 0.5], lit: [0.0, 0.3, 0.95], cyanLit: [0.1, 0.65, 1.0], swirlCol: [0.0, 0.78, 1.0], ringCol: [0.15, 0.75, 1.0],
    midCol: [0.3, 0.55, 1.0], rings: 0.15, ringStep: 3.2, midRing: 0.25, swirl: 0.85, twist: 1.2, foam: 1.6, lavender: 0.0, glowMix: 0.4, farMix: 0.35, vband: 0.1,
    warmRing: 1.0, warmAt: 13,
    // the original's sparkle: many white glints and bright water streaks over the rings
    glintCut: 0.85, glints: 2.2, streaks: 0.85 },
  // fewer, uneven flanges (#2): every 4.6 m, each lip its own depth (1 +- jitter), dimmer and patchier light on the lips, and
  // the faces a deep electric blue (they give the drum its cobalt depth) rather than violet navy
  flanges: { goldEvery: 1, every: 4.6, jitter: 0.6, face: [0.0, 0.2, 0.6],   // goldEvery 1: no gold lips (i % 1 is never 1)
    deep: [0.0, 0.1, 0.36], cyan: [0.4, 0.75, 1.05] },
  flangeVary: { lavender: 0.0, dim: 0.25, patch: 1.0 },
  // the entrance: a thicker, polished gold rim (smooth, mirror-bright) and glossier metallic lavender
  // the original's washer wall is a soft silver-lilac metal, not vivid violet
  // the Art Director's review #3: the original's rim is a slimmer peach-gold metal band (about 2.5% of the height, measured
  // 5.5% here) with a white highlight, not flat lemon: thinner (outer 2.64 -> 2.47), a warmer gold, much less lemon pull;
  // the bronze step ring inside it read as a separate orange line, so it is hidden (step.hide)
  porthole: { bezel: { outer: 2.47, front: -0.42 }, step: { hide: true }, sealColor: 0x0a55d8, sealGlow: 0x062a70, goldColor: 0xffc870, goldGlow: 0x9a6c12, goldRough: 0.1, goldEnv: 2.4, faceGloss: 0.85, lemon: 0.25,
    lavender: [0.8, 0.76, 0.96], lilac: [0.97, 0.94, 1.0], shade: [0.55, 0.5, 0.76] },
  // the collectibles at the hero moment as in the original: a big coin near the camera on each side (right low, left higher),
  // the sock on the right behind the right coin, a small coin and the gem up and to the left, a small coin far in the middle
  // (the right coin nearer the camera so it sits at the right edge; the gem out of the left brush at 6.0, where it was hidden)
  // The Art Director's review #7: the original shows one small coin in the middle and the gem clearly, up and to the left;
  // the gem was hidden behind the left coin and a run of 3-4 small coins filled the middle. So the left coin is lower (the
  // gem shows above it), and round3's next two lines (a lane-2 coin at 10.1, three lane-0 coins from 11.2) are replaced
  // (replace: how many of round3's lines this list replaces) by the same coins a little further on (a lane-2 coin after the
  // second sock, three in the middle lane leading into round3's 15.0 line), behind the glowing centre at the hero moment.
  // Every coin is still collectable (heights within reach while riding); none is lost; the mission is still five socks.
  layout: { coinLines: [[2, 1.9, 1, 1.0, 0.5, 0], [0, 2.7, 1, 1.0, 0.6, 0], [0, 5.2, 1, 1.0, 1.35, 0], [1, 7.4, 1, 1.0, 0.9, 0],
    [2, 13.0, 1, 1.0, 0.55, 0], [1, 12.0, 3, 1.0, 0.72, 0]], replace: 3,
    firstSock: [2, 3.3], extraGem: [0, 4.4] },
  // two decorative fluffy brushes framing the view as in the original (left high, right at mid height); not hazards:
  // [metres along the track, side (+1 screen-left), angle up from level, scale, radius from the axis (default 1.95, the wall)]
  // The Art Director's review #4: the original's brushes are cut off by the frame edges, top left (0-20% of the width, 22-42%
  // of the height) over the rim and right (80-100%, 38-62%): the left one sits on the washer's face just in front of the
  // mouth, higher (45-50 degrees) and further out; the right one nearer, so it reaches the edge. The six hazards do not move.
  deco: [[3.3, 1, 48, 0.66, 2.3], [4.4, -1, 14, 0.8]],
  coin: { color: [1.0, 1.24, 0.42], glow: 0.75, lemon: 0.6 },
  round5: { droplets: { scale: 950, maxPx: 22 }, bloom: { strength: 0.45, radius: 0.5, threshold: 0.9 }, grade: { contrast: 1.4, saturation: 1.2 } },   // lemon: pull toward the original's lemon gold (the grade turned them copper)   // brighter, glowing yellow paw coins (the fix board)
  // exposure and sparkle (the Art Director's review #6: the original is high-key, bright whites with warm accents; the game
  // was contrasty blue-violet): more of the bright layers bloom, a little less saturation (measured: pale milky blue 7% of
  // the play area against the original's 12%; the deep troughs of the whirlpool keep the depth), and a warm pink-peach
  // light from the top right (tunnel_s4.js warmLightR7: at, in screen units with y up; radius; colour; amount)
  warmLight: { at: [0.9, 0.8], radius: 0.3, color: [1.0, 0.7, 0.6], amount: 0.3 },
  hudEarly: 4.6,   // the mission card is already on screen at the hero moment, as in the original
  // the whirlpool (the Art Director's review #2, measured against the original at the hero moment): a log spiral of bands
  // (`perLog` bands per factor e of distance, so evenly spaced on screen as in the original, drawn inward at `flow`;
  // `spiral` bands per turn round the drum, `wobble` how unevenly), each a bright crest broken into swirling arcs (`arcs` per
  // radian) beside a deep cobalt trough (`troughFade`: how much shallower toward the pale centre); dense white flecks
  // (`fleckCut`: the share of cells without one; fleckA / fleckU: cells per radian / per metre); milky pastel toward the
  // centre from `paleFrom` metres (`pale` how much, `paleTint` how much lilac, pink and peach in it); `lip`: the original's
  // deep cobalt ring just inside the gold rim (its shadow), fading over `lipLen` metres
  whirl: { perLog: 2.4, flow: 0.25, spiral: 1.0, wobble: 0.5, arcs: 3.2, crestW: 0.14, troughW: 0.28, trough: 1.0, crest: 1.0,
    troughCol: [0.0, 0.1, 0.28], crestCol: [0.75, 0.9, 1.0], lilacCol: [0.8, 0.68, 1.0],
    flecks: 1.0, fleckCut: 0.5, fleckA: 14, fleckU: 8.0, fleckFar: [16, 30], pale: 0.65, paleFrom: [8, 18], paleTint: 0.4, troughFade: 0.4,
    lip: 0.85, lipLen: 1.2 },
  // the luminous centre: a camera-facing glow `ahead` metres in front of the character on the tube's axis (radius: half its
  // size in metres; ringAt: where the pastel ring sits, as a share of the radius)
  glow: { ahead: 11, radius: 3.2, lift: 0, core: 1.0, ring: 0.85, ringAt: 0.45, arms: 0.5, alpha: 0.9 },
};
if (R7_ON) { mergeDeep(ROUND6, ROUND6.r7); mergeDeep(ROUND6, R7_WATER.round6 || {}); }
if (HERO_ON) mergeDeep(ROUND6, HERO.round6);   // ?s3=hero: after round7's own settings (round7 itself is unchanged)
{
  const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.round6;
  if (tune) mergeDeep(ROUND6, tune);
}
export function mergeDeep(dst, src) { for (const k of Object.keys(src)) { if (src[k] && typeof src[k] === 'object' && !Array.isArray(src[k]) && dst[k]) mergeDeep(dst[k], src[k]); else dst[k] = src[k]; } return dst; }

export function buildRound6({ scene, TR, L, W, mascot, updaters, time, env, waterSheets, drumSheet, fogAnchor }) {
  const TS = L.tunnelStart, TE = L.tunnelEnd, axisH = W.WATER + W.AXIS_H, report = {};
  for (const n of ['r5Entrance', 'r4GlowRings']) { const o = scene.getObjectByName(n); if (o) o.visible = false; }
  report.porthole = porthole({ scene, TR, TS, axisH, env, time });
  report.flanges = flanges({ scene, TR, TS, TE, axisH, env, time });
  report.walls = drumWalls({ scene, time, TS });
  report.waterTint = waterTint({ waterSheets, drumSheet, fogAnchor, TS });
  const motion = trackMotion({ L, W, mascot, updaters });
  report.bowWave = bowWave({ scene, TR, L, W, mascot, updaters, time, motion });
  report.wake = reactiveWake({ scene, mascot, updaters, motion });
  if (R7_ON) report.r7water = buildR7Water({ scene, TR, L, W, mascot, updaters, time, motion });
  if (R7_ON && ROUND6.glow) report.r7glow = r7Glow({ scene, TR, L, mascot, updaters, time, axisH });
  if (ROUND6.hideFoamBubbles) { const o = scene.getObjectByName('r4FoamBubbles'); if (o) updaters.push(() => { o.visible = false; }); report.foamBubblesHidden = !!o; }
  if (ROUND6.hideCrestCards) { const o = scene.getObjectByName('r5Crests'); if (o) updaters.push(() => { o.visible = false; }); report.crestCardsHidden = !!o; }
  if (HERO_ON) report.hero = buildHero({ scene, TR, L, W, mascot, updaters, time, waterSheets, drumSheet, fogAnchor });   // last: it restyles the walls and water
  return report;
}

// ---------------------------------------------------------------- ?s3=round7: the whirlpool's luminous centre
// A soft camera-facing glow on the tube's axis this far ahead of the character (the vanishing point at the hero moment): a
// near-white warm centre, a pastel ring round it (peach, pink, lilac, cyan) and faint spiral arms of light, blended over
// the walls (depth-tested, so the coins, sock and brushes pass in front of it). The Art Director's review #2.
function r7Glow({ scene, TR, L, mascot, updaters, time, axisH }) {
  const P = ROUND6.glow, TS = L.tunnelStart;
  const u = { uTime: time, uFade: { value: 0 }, uCore: { value: P.core }, uRing: { value: P.ring }, uArms: { value: P.arms }, uRingAt: { value: P.ringAt },
    uAlpha: { value: P.alpha } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: GLOW_VERTEX, fragmentShader: GLOW_FRAGMENT, transparent: true, depthWrite: false });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat); mesh.name = 'r7Glow'; mesh.frustumCulled = false; mesh.visible = false; mesh.renderOrder = 3;
  mesh.onBeforeRender = (r, s, cam) => { mesh.quaternion.copy(cam.quaternion); mesh.updateMatrixWorld(); };
  scene.add(mesh);
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  updaters.push(() => {
    const at = Math.min(mascot.z + P.ahead, L.tunnelEnd - 1);
    const k = THREE.MathUtils.smoothstep(mascot.z, TS + ROUND6.inside[0], TS + ROUND6.inside[1]) * (1 - THREE.MathUtils.smoothstep(mascot.z + P.ahead, L.tunnelEnd - 4, L.tunnelEnd + 2));
    mesh.visible = k > 0.001; u.uFade.value = k;
    if (!mesh.visible) return;
    TR.frame(at, F);
    mesh.position.copy(F.P).addScaledVector(F.U, axisH + P.lift);
    mesh.scale.setScalar(P.radius);
  });
  return { ahead: P.ahead, radius: P.radius };
}
const GLOW_VERTEX = /* glsl */ `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
const GLOW_FRAGMENT = /* glsl */ `
uniform float uTime, uFade, uCore, uRing, uArms, uRingAt, uAlpha; varying vec2 vUv;
float gh(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec2 p = (vUv - 0.5) * 2.0; float r = length(p), a = atan(p.y, p.x), lr = log(max(r, 0.02));
  float core = exp(-r * r / 0.035);                                                        // the near-white warm centre
  float ring = exp(-pow((r - uRingAt) / 0.17, 2.0));                                        // the pastel ring round it
  vec3 pastel = 0.68 + 0.32 * cos(6.2832 * (a / 6.2832 + vec3(0.0, 0.33, 0.67) - uTime * 0.05));
  pastel = mix(pastel, vec3(1.0, 0.8, 0.64), 0.35 * (0.5 + 0.5 * sin(a * 2.0 + uTime * 0.3)));   // peach drifting round it
  float arm = smoothstep(0.45, 0.95, 0.5 + 0.5 * sin(a * 3.0 + lr * 5.5 - uTime * 1.6)) * exp(-r * 2.0) * smoothstep(0.08, 0.3, r);
  vec2 g = vec2(a * 9.0, lr * 7.0 - uTime * 1.2), c = floor(g);
  float fleck = step(0.7, gh(c)) * (1.0 - smoothstep(0.08, 0.3, length((fract(g) - 0.5) * vec2(0.6, 1.4)))) * smoothstep(0.1, 0.35, r);
  vec3 col = vec3(1.0, 0.97, 0.93) * core * uCore + pastel * ring * uRing + vec3(0.88, 0.96, 1.0) * arm * uArms + vec3(1.0) * fleck;
  float al = clamp(core * uCore + ring * uRing * 0.85 + arm * uArms * 0.7 + fleck * 0.9 + exp(-r * r / 0.2) * 0.35, 0.0, 1.0);
  al *= (1.0 - smoothstep(0.7, 1.0, r)) * uFade * uAlpha;
  gl_FragColor = vec4(col / max(max(col.r, max(col.g, col.b)), 1.0), al);
}
`;

// ---------------------------------------------------------------- the bow wave round the character
// the character's movement, measured once a frame for the bow wave and the wake: sideways speed (smoothed), forward speed,
// height above its float height, and a landing pulse that decays
function trackMotion({ L, W, mascot, updaters }) {
  const M = { lat: 0, speed: 0, lift: 0, landing: 0, ride: 0 };
  let wasAir = false;
  updaters.push((dt) => {
    dt = dt || 0;
    M.ride = W.baseHeight ? W.baseHeight(L, mascot.x, mascot.z) : W.WATER;
    M.lift = Math.max(0, mascot.yAbs - M.ride - W.FLOAT_H);
    if (wasAir && !mascot.air) M.landing = 1;
    wasAir = mascot.air; M.landing = Math.max(0, M.landing - dt * 2.2);
    M.lat += ((mascot.xv || 0) - M.lat) * (1 - Math.exp(-dt / 0.12));
    M.speed += ((mascot.speed || 0) - M.speed) * (1 - Math.exp(-dt / 0.3));
  });
  return M;
}

// ---------------------------------------------------------------- the wake and waterline react to movement (round5's r5Contact)
function reactiveWake({ scene, mascot, updaters, motion }) {
  const P = ROUND6.wake, g = scene.getObjectByName('r5Contact');
  if (!g || g.children.length < 2) return null;
  const [disc, collar] = g.children, W0 = ROUND5_CONTACT_DEFAULTS(disc, collar), u = collar.material.uniforms;
  // the waterline: round5's collar was white from the waterline up (a pale mass round the character's base); round6 makes it
  // clear turquoise water climbing the body with a ragged white crest only along its top
  collar.material = new THREE.ShaderMaterial({ uniforms: u, vertexShader: collar.material.vertexShader, fragmentShader: COLLAR_R6,
    transparent: true, depthWrite: false, side: THREE.DoubleSide });
  updaters.push(() => {
    if (!g.visible) return;
    const M = motion, sp = THREE.MathUtils.clamp(M.speed / 7, 0, 1.6);
    // wake: longer with speed, swung away from the swerve (it trails behind, so it bends the other way)
    const swing = THREE.MathUtils.clamp(-M.lat * P.swing, -0.5, 0.5);
    disc.scale.set(W0.discS.x * (1 + M.landing * P.land), 1, W0.discS.z * (0.75 + P.speedLen * sp));
    disc.rotation.y = swing; disc.position.set(Math.sin(swing) * W0.discP.z, W0.discP.y, W0.discP.z * Math.cos(swing));
    // waterline: tilts toward the side it moves to, squashes and spreads in a ring on landing, thins out in the air
    collar.rotation.z = THREE.MathUtils.clamp(-M.lat * P.tilt, -0.3, 0.3);
    const ring = 1 + M.landing * P.land;
    collar.scale.set(ring, Math.max(0.35, 1 - M.landing * 0.4), ring);
    u.uFade.value *= 1 - THREE.MathUtils.smoothstep(M.lift, 0.1, 0.6) * 0.85;
  });
  return { speedLen: P.speedLen, swing: P.swing };
}
const COLLAR_R6 = /* glsl */ `
${NOISE}
uniform float uTime, uFade; varying vec2 vUv;
void main() {
  float h = vUv.y;                                                          // 0 at the waterline, 1 at the collar's top
  float n = bwFbm(vec2(vUv.x * 18.0 + uTime * 0.6, h * 3.0 - uTime * 2.2)), n2 = bwFbm(vec2(vUv.x * 40.0 - uTime, h * 6.0 - uTime * 3.0));
  float top = 0.5 + 0.45 * n;                                               // ragged, churning top edge
  if (h > top) discard;
  float crest = smoothstep(top - 0.2, top - 0.03, h + 0.1 * n2);            // white only along the top
  float streak = smoothstep(0.66, 0.85, n2) * (1.0 - crest);
  vec3 water = mix(vec3(0.0, 0.3, 0.92), vec3(0.0, 0.78, 0.95), smoothstep(0.0, 0.7, h) * (0.6 + 0.4 * n));
  vec3 col = mix(water, vec3(1.0), clamp(crest + streak * 0.35, 0.0, 1.0));
  float a = mix(0.62, 0.95, crest) * smoothstep(0.0, 0.08, h + 0.02) * uFade;
  gl_FragColor = vec4(col, a);
}`;
function ROUND5_CONTACT_DEFAULTS(disc, collar) { return { discS: disc.scale.clone(), discP: disc.position.clone(), collarS: collar.scale.clone() }; }

// ---------------------------------------------------------------- the drum's walls as a washer drum's surface (pass 2)
function drumWalls({ scene, time, TS }) {
  const mesh = scene.getObjectByName('r5Vortex');
  if (!mesh) return null;
  mesh.material = new THREE.ShaderMaterial({ uniforms: { uTime: time, uStart: { value: TS } }, vertexShader: mesh.material.vertexShader,
    fragmentShader: WALL_FRAGMENT, side: THREE.DoubleSide });
  mesh.name = 'r6Walls';
  return { replaced: 'r5Vortex' };
}
// ?s3=round7, the whirlpool (the Art Director's review #2: the drum's evenly spaced smooth hoops read as a ribbed pipe). Applied
// last, over the glows, so they cannot wash it out: toward the bright centre the water turns milky pastel (pale blue-white with
// lilac, pink and peach drifting round the drum); the wall's light is gathered into a few spiral bands (a log spiral in the
// distance from the camera, so evenly spaced on screen as in the original, winding round the drum and drawn slowly inward;
// with bands fixed along the tube they crowded into a ribbed pipe), each a bright streaky crest broken into arcs of water, with
// a deep cobalt trough beside it (shallower toward the pale centre), some crests lilac; and dense short white flecks, thickest
// on the crests. Not on the lavender shell before the mouth. W: ROUND6.whirl (round7 only; nothing is added without it).
function r7Whirl(W) {
  const v = (a) => a.map((x) => x.toFixed(3)).join(', '), f = (x) => x.toFixed(3);
  return `  { // ?s3=round7: the whirlpool
    float wIn = smoothstep(uStart + 0.05, uStart + 0.3, u);
    float pk = smoothstep(${f(W.paleFrom[0])}, ${f(W.paleFrom[1])}, vDepth);
    vec3 pastel = mix(vec3(0.8, 0.88, 1.0), 0.7 + 0.3 * cos(6.2832 * (a / 6.2832 * 2.0 + vec3(0.0, 0.33, 0.67) + uTime * 0.04)), ${f(W.paleTint)});
    col = mix(col, pastel * (0.85 + 0.3 * w2), pk * ${f(W.pale)} * wIn);
    float wsp = log(max(vDepth, 0.5)) * ${f(W.perLog)} + a / 6.2832 * ${f(W.spiral)} + ${f(W.wobble)} * (w1 - 0.5) - uTime * ${f(W.flow)};   // a log spiral: evenly spaced on screen, drawn inward
    float wk = fract(wsp), wi = floor(wsp), wr = fract(sin(wi * 17.13 + 3.1) * 4375.85);
    float arcs = smoothstep(0.32, 0.72, bwFbm(vec2(a * ${f(W.arcs)} + wi * 5.3 - uTime * 0.7, wsp * 2.3 + wi)));
    float crest = exp(-pow((wk - 0.55) / ${f(W.crestW)}, 2.0)) * (0.6 + 0.4 * wr);
    float trough = exp(-pow((wk - 0.12) / ${f(W.troughW)}, 2.0)) + exp(-pow((wk - 1.12) / ${f(W.troughW)}, 2.0));
    col = mix(col, vec3(${v(W.troughCol)}) * (0.8 + 0.4 * w2), clamp(trough * ${f(W.trough)} * (1.0 - ${f(W.troughFade)} * pk), 0.0, 1.0) * wIn);
    col = mix(col, vec3(${v(W.troughCol)}) * (0.85 + 0.3 * w2), ${f(W.lip)} * exp(-(u - uStart) / ${f(W.lipLen)}) * wIn);   // the cobalt shadow just inside the rim
    vec3 crestC = mix(vec3(${v(W.crestCol)}), vec3(${v(W.lilacCol)}), step(0.62, wr));
    col = mix(col, crestC, clamp(crest * (0.3 + 0.7 * arcs) * ${f(W.crest)}, 0.0, 1.0) * wIn);
    vec2 fg = vec2(a * ${f(W.fleckA)}, (u - uStart) * ${f(W.fleckU)} - uTime * 1.3), fc = floor(fg);
    float fh = h21(fc + 11.0), fh2 = h21(fc + 37.0), fh3 = h21(fc + 53.0);
    vec2 fq = fract(fg) - vec2(0.3 + 0.4 * fh2, 0.3 + 0.4 * fh3);   // short dashes round the drum, scattered in their cells
    float fleck = (1.0 - smoothstep(0.12, 0.3, abs(fq.x))) * (1.0 - smoothstep(0.05, 0.16, abs(fq.y)));
    float fleckK = step(${f(W.fleckCut)}, fh) * (0.35 + 0.65 * max(crest, arcs * 0.6)) * (1.0 - smoothstep(${f(W.fleckFar[0])}, ${f(W.fleckFar[1])}, vDepth));
    col = mix(col, vec3(1.0, 0.99, 1.0), clamp(fleck * fleckK * ${f(W.flecks)}, 0.0, 1.0) * wIn);
  }
`;
}
const WALL_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uStart;
varying vec2 vAU; varying float vDepth;
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  float a = vAU.x, u = vAU.y, s = a * 2.0;                       // s: metres round the wall (radius 2)
  float up = sin(a);                                              // 1 at the top, about -0.75 at the water's edge
  // broad, uneven light: big still patches, and slower brighter light drifting down the tube (no repeating bands)
  float broad = bwFbm(vec2(a * 0.9 + 7.0, u * 0.22));
  float drift = bwFbm(vec2(a * 1.4 - uTime * 0.2, u * 0.33 - uTime * ${ROUND6.walls.drift.toFixed(2)}));
  float light = ${ROUND6.walls.light.toFixed(2)} * (0.45 + broad) + 0.4 * drift;
  // pass 3 (the exact target board): the walls are glowing water, not dark metal: royal blue in the deepest shade, electric
  // blue, and bright turquoise where the light falls (pass 2's deep blue-black shadows made the tunnel too dark)
  vec3 col = mix(vec3(${ROUND6.walls.shade.join(', ')}), vec3(${ROUND6.walls.lit.join(', ')}), clamp(light, 0.0, 1.0));
  col = mix(col, vec3(${ROUND6.walls.cyanLit.join(', ')}), smoothstep(0.75, 1.2, light) * 0.6);
  // layered panels between the flanges: lit toward the front of each, a soft shadow just behind each flange
  float sec = fract((u - uStart - ${ROUND6.flanges.from.toFixed(2)}) / ${ROUND6.flanges.every.toFixed(2)});
  col *= 0.82 + 0.3 * smoothstep(0.03, 0.3, sec) * (1.0 - smoothstep(0.6, 1.0, sec));
  col *= 1.0 - 0.3 * exp(-pow((sec - 0.03) / 0.06, 2.0));
  // the water film over the walls: water swirling round the drum as it rushes toward the rider (a spiral), bright turquoise
  // swirls, and soft glowing ring layers of uneven brightness (the target's layered rings, not identical neon hoops)
  vec2 fp = vec2(a + u * ${ROUND6.walls.twist.toFixed(2)} - uTime * 0.35, u * 0.5 - uTime * ${ROUND6.walls.flow.toFixed(2)});
  float w1 = bwFbm(fp * vec2(2.0, 1.4)), w2 = bwFbm(fp * vec2(4.5, 3.0) + 7.0);
  col = mix(col, vec3(${ROUND6.walls.swirlCol.join(', ')}), smoothstep(0.55, 0.85, w1 * 0.7 + w2 * 0.5) * ${ROUND6.walls.swirl.toFixed(2)});
  float ringP = (u - uStart) / ${ROUND6.walls.ringStep.toFixed(2)} + 0.25 * w1, ringK = fract(ringP), ringI = floor(ringP);
  float ringB = fract(sin(ringI * 41.31) * 9134.7);                                         // each ring layer its own brightness
  float ringGlow = exp(-pow((ringK - 0.5) / 0.16, 2.0)) * (0.35 + 0.65 * ringB) * (0.6 + 0.6 * smoothstep(0.3, 0.7, bwNoise(vec2(a * 1.7 + ringI, uTime * 0.4))));
  col += vec3(${ROUND6.walls.ringCol.join(', ')}) * ringGlow * ${ROUND6.walls.rings.toFixed(2)};
  float ridge = 1.0 - abs(2.0 * bwFbm(fp * vec2(3.0, 2.2) + 3.0) - 1.0);                  // white foam filaments in the swirl
  col = mix(col, vec3(0.93, 0.99, 1.0), clamp(smoothstep(0.86, 0.97, ridge) * 0.7 + smoothstep(0.7, 0.86, w2) * smoothstep(0.45, 0.7, w1) * 0.45, 0.0, 1.0) * ${ROUND6.walls.foam.toFixed(2)});
  col = mix(col, vec3(1.0), exp(-pow((up + 0.72) / 0.09, 2.0)) * smoothstep(0.35, 0.65, w2) * 0.8);   // foam where the wall meets the water
  // perforated drum metal: staggered round dimples, dark inside, the rim facing the light catching it
  vec2 gp = vec2(s, u) / ${ROUND6.walls.hole.toFixed(3)}; gp.x += 0.5 * mod(floor(gp.y), 2.0);
  vec2 f = fract(gp) - 0.5; float d = length(f);
  float holeK = 1.0 - smoothstep(${ROUND6.walls.holeFade[0].toFixed(1)}, ${ROUND6.walls.holeFade[1].toFixed(1)}, vDepth);
  float hole = (1.0 - smoothstep(0.16, 0.21, d)) * holeK, rim = smoothstep(0.17, 0.21, d) * (1.0 - smoothstep(0.23, 0.3, d)) * smoothstep(0.0, -0.3, f.y) * holeK;
  float holeVar = 0.45 + 0.55 * smoothstep(0.3, 0.7, bwNoise(vec2(s * 0.7, u * 0.5)));   // worn in places, crisp in others
  col = col * (1.0 - ${ROUND6.walls.metal.toFixed(2)} * hole * holeVar) + vec3(0.2, 0.55, 1.0) * rim * 0.2 * holeVar * (0.4 + light);   // drum metal faint under the water
  // turquoise water light on the walls: a moving caustic web, strongest low down near the water, coming and going in patches
  vec2 cw = vec2(s * 1.5, u * 1.05 - uTime * 0.85) * ${ROUND6.walls.causticScale.toFixed(2)} + vec2(0.6 * bwNoise(vec2(u * 0.6, uTime * 0.35)), 0.0);
  vec2 cv = bwVoronoi(cw); float web = 1.0 - smoothstep(0.0, 0.07, cv.y - cv.x);
  float low = 1.0 - smoothstep(-0.6, 0.85, up);
  float patchW = smoothstep(0.3, 0.75, bwFbm(vec2(a * 1.6 + uTime * 0.25, u * 0.45 - uTime * 0.7)));
  col += vec3(0.05, 0.85, 0.95) * web * (0.25 + 0.9 * low) * (0.25 + 1.0 * patchW) * ${ROUND6.walls.caustic.toFixed(2)};
  col += vec3(0.0, 0.42, 0.62) * low * ${ROUND6.walls.lowGlow.toFixed(2)} * (0.6 + 0.5 * drift);                 // light bouncing up off the water
  col += vec3(0.24, 0.1, 0.42) * smoothstep(0.25, 1.0, up) * (0.35 + 0.65 * broad) * ${ROUND6.walls.lavender.toFixed(2)};   // lavender, up top
  // sparse white streaks of water swirling round the drum, and twinkling star glints
  // thin arcs round the drum (stretched round the circumference, narrow along the tube), as the approved swirling water lines
  float st = smoothstep(0.72, 0.9, bwFbm(vec2(a * 1.1 + u * 0.15 - uTime * 0.9, u * 3.4 - uTime * 1.1))) * smoothstep(0.35, 0.65, bwNoise(vec2(a * 2.0, u * 0.4 - uTime * 0.3)));
  col = mix(col, vec3(0.86, 0.97, 1.0), st * ${ROUND6.walls.streaks.toFixed(2)});
  vec2 g2 = vec2(a * 22.0, u * 2.8 - uTime * 0.6), c2 = floor(g2); float hs = h21(c2);
  vec2 q2 = fract(g2) - 0.5; float star = (1.0 - smoothstep(0.0, 0.04, abs(q2.x))) * (1.0 - smoothstep(0.05, 0.4, abs(q2.y))) + (1.0 - smoothstep(0.0, 0.04, abs(q2.y))) * (1.0 - smoothstep(0.05, 0.4, abs(q2.x)));
  col += vec3(0.9, 1.0, 1.0) * step(${ROUND6.walls.glintCut.toFixed(3)}, hs) * star * (0.55 + 0.45 * sin(uTime * 4.0 + hs * 50.0)) * ${ROUND6.walls.glints.toFixed(2)};
  // the lavender metal shell up to the mouth and the violet band just inside it: exactly round5's (the approved entrance)
  { float door = 1.0 - smoothstep(uStart - 0.06, uStart + 0.06, u);
    float brushed = 0.82 + 0.18 * bwNoise(vec2(a * 40.0, u * 2.0)), sheen = pow(max(0.0, sin(a)), 6.0);
    vec3 lav = vec3(0.62, 0.55, 0.92) * brushed + vec3(0.35, 0.3, 0.45) * sheen + vec3(0.2, 0.12, 0.3) * smoothstep(0.4, 0.0, u - uStart + 0.4);
    float vband = smoothstep(uStart, uStart + 0.05, u) * (1.0 - smoothstep(uStart + 0.30, uStart + 0.35, u));
    col = mix(col, vec3(0.5, 0.28, 1.0) * 0.95, vband * ${ROUND6.walls.vband.toFixed(2)});
    col = mix(col, lav, door); }
  // luminous depth: the near walls keep their deep shadows, and down the tube the drum brightens into the approved picture's
  // glowing cyan-turquoise centre (measured: with the heart only beyond 18 m the middle distance stayed deep royal blue and
  // the centre's colour difference to the approved doubled), then to the white-cyan heart far away
  float mid = smoothstep(${ROUND6.walls.glowFrom[0].toFixed(1)}, ${ROUND6.walls.glowFrom[1].toFixed(1)}, vDepth);
  float midRing = 1.0 - ${ROUND6.walls.midRing.toFixed(2)} + ${ROUND6.walls.midRing.toFixed(2)} * (0.35 + 1.7 * ringGlow + 0.6 * smoothstep(0.86, 0.97, ridge));   // rich: rings keep their contrast in the glow
  col = mix(col, col * 0.5 + vec3(${ROUND6.walls.midCol.join(', ')}) * (0.75 + 0.35 * drift) * midRing + vec3(0.3, 0.95, 1.0) * web * 0.4, mid * ${ROUND6.walls.glowMix.toFixed(2)});   // pass 3: toward cyan
  float far = smoothstep(16.0, 36.0, vDepth);
  col = mix(col, mix(vec3(0.45, 0.88, 1.0), vec3(1.0, 0.98, 1.0), 0.35 + 0.4 * broad), far * ${ROUND6.walls.farMix.toFixed(2)});
  // a warm peach and pastel-rainbow glow ring round the bright centre (the original's whirlpool heart)
  col += mix(vec3(1.0, 0.72, 0.55), 0.6 + 0.4 * cos(6.2832 * (a / 6.2832 + vec3(0.0, 0.33, 0.67) + uTime * 0.05)), 0.4) * exp(-pow((vDepth - ${ROUND6.walls.warmAt.toFixed(1)}) / 3.0, 2.0)) * ${ROUND6.walls.warmRing.toFixed(2)};
${R7_ON && ROUND6.whirl ? r7Whirl(ROUND6.whirl) : ''}  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- saturated turquoise water under the white (pass 2)
function waterTint({ waterSheets, drumSheet, fogAnchor, TS }) {
  const P = ROUND6.waterTint, done = [];
  const code = (factor) => `  {   // ?s3=round6: saturated turquoise-blue water kept under the white wherever it is not foam
    float r6Lum = dot(lit, vec3(0.299, 0.587, 0.114));
    vec3 r6Water = mix(vec3(${P.deep.join(', ')}), vec3(${P.bright.join(', ')}), smoothstep(0.25, 0.85, r6Lum)) * (0.7 + 0.55 * r6Lum);
    float r6Keep = (1.0 - smoothstep(0.3, 0.75, foam)) * (${factor}) * ${P.amount.toFixed(3)};
    lit = mix(lit, r6Water, r6Keep);
  }
`;
  const inject = (mesh, factor) => {
    const m = mesh.material;
    if (!m || !m.fragmentShader || !m.fragmentShader.includes(fogAnchor) || !m.fragmentShader.includes('vec3 lit')) return false;
    m.fragmentShader = m.fragmentShader.replace(fogAnchor, code(factor) + fogAnchor); m.needsUpdate = true; return true;
  };
  if (drumSheet && inject(drumSheet, 'inDrum')) done.push('drum');
  // the slide's sheet shares the normal game's material: round6 gives it its own copy (same uniforms) before changing it
  const slide = (waterSheets || []).find((s) => s !== drumSheet);
  if (slide && slide.material) {
    const src = slide.material, m = src.clone(); m.uniforms = src.uniforms; slide.material = m;
    if (inject(slide, `smoothstep(${(TS + P.slideFrom[0]).toFixed(2)}, ${(TS + P.slideFrom[1]).toFixed(2)}, xz.y)`)) done.push('slide');
  }
  return { sheets: done };
}

function bowWave({ scene, TR, L, W, mascot, updaters, time, motion }) {
  const P = ROUND6.bowWave, R = P.rows, C = P.cols;
  // one sheet per side: (t along the wave from in front of the character round to behind it) x (v up the sheet)
  const pos = [], uv = [], side = [], idx = [];
  for (const s of [-1, 1]) {
    const base = pos.length / 3;
    for (let j = 0; j <= R; j++) for (let i = 0; i <= C; i++) { pos.push(0, 0, 0); uv.push(i / C, j / R); side.push(s); }
    for (let j = 0; j < R; j++) for (let i = 0; i < C; i++) { const q = base + j * (C + 1) + i; idx.push(q, q + 1, q + C + 1, q + 1, q + C + 2, q + C + 1); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('aSide', new THREE.Float32BufferAttribute(side, 1)); g.setIndex(idx);
  const u = { uTime: time, uFade: { value: 0 }, uAmp: { value: 1 }, uReach: { value: new THREE.Vector2(...P.reach).multiplyScalar(Math.PI / 180) },
    uRad: { value: new THREE.Vector2(...P.radius) }, uH: { value: P.height }, uLean: { value: P.lean }, uFlow: { value: P.flow }, uLat: { value: 0 },
    uBody: { value: new THREE.Color(...P.body) }, uDeep: { value: new THREE.Color(...P.deep) }, uAlpha: { value: P.alpha } };
  const mat = new THREE.ShaderMaterial({ uniforms: u, vertexShader: BOW_VERTEX, fragmentShader: BOW_FRAGMENT, transparent: true, depthWrite: false, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(g, mat); mesh.name = 'r6BowWave'; mesh.frustumCulled = false; mesh.renderOrder = 6; mesh.visible = false;
  scene.add(mesh);
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() }, v = new THREE.Vector3(), m4 = new THREE.Matrix4();
  updaters.push(() => {
    const k = THREE.MathUtils.smoothstep(mascot.z, L.tunnelStart - 7, L.tunnelStart - 4);   // already up on the slide's last metres (the hero moment)
    mesh.visible = k > 0.01; if (!mesh.visible) return;
    const M = motion;   // sideways speed, height in the air and the landing pulse (trackMotion)
    u.uLat.value = M.lat;
    u.uAmp.value = (1 + Math.abs(M.lat) * P.swerve * 4 + M.landing * 0.9) * (1 - THREE.MathUtils.smoothstep(M.lift, 0.05, 0.45));
    u.uFade.value = k;
    TR.frame(mascot.z, F); TR.map(mascot.x, M.ride, mascot.z, v);
    mesh.position.copy(v); m4.makeBasis(F.R, F.U, F.T); mesh.quaternion.setFromRotationMatrix(m4);
  });
  return { rows: R, cols: C, triangles: idx.length / 3 };
}
const BOW_VERTEX = /* glsl */ `
${NOISE}
attribute float aSide; uniform float uTime, uAmp, uH, uLean, uFlow, uLat; uniform vec2 uReach, uRad;
varying vec2 vUv; varying float vSide; varying vec3 vW; varying vec3 vN;
void main() {
  float t = uv.x, v = uv.y;
  float phi = aSide * mix(uReach.x, uReach.y, t);                      // from just in front of the character round its side to behind it
  float r = mix(uRad.x, uRad.y, t);
  // the crest rises fast from the bow, peaks beside the character and trails off behind; the swerve side throws a taller sheet
  float swerve = 1.0 + clamp(aSide * uLat * 0.35, -0.4, 0.8);
  float h = uH * uAmp * swerve * pow(max(sin(3.14159 * pow(t, 0.55)), 0.0), 1.2) * (0.8 + 0.35 * bwNoise(vec2(t * 6.0 - uTime * uFlow, aSide * 3.0 + uTime * 0.7)));
  float lean = uLean * v * v * (0.6 + 0.4 * t);                         // the top curls outward
  float rr = r + lean;
  vec3 p = vec3(sin(phi) * rr, h * v, cos(phi) * rr);
  vUv = uv; vSide = aSide;
  vec3 tang = vec3(cos(phi), 0.0, -sin(phi)) * aSide, up = vec3(sin(phi) * uLean * 2.0 * v, max(h, 0.01), cos(phi) * uLean * 2.0 * v);
  vN = normalize(mat3(modelMatrix) * cross(tang, up));
  vec4 w = modelMatrix * vec4(p, 1.0); vW = w.xyz;
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const BOW_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uFade, uFlow, uAlpha; uniform vec3 uBody, uDeep;
varying vec2 vUv; varying float vSide; varying vec3 vW; varying vec3 vN;
void main() {
  float t = vUv.x, v = vUv.y;
  vec2 q = vec2(t * 9.0 - uTime * uFlow * 1.3, v * 2.5 + vSide * 4.0);
  float n = bwFbm(q), n2 = bwFbm(q * 2.7 + vec2(uTime * 0.9, 0.0));
  float edge = 0.62 + 0.3 * n;                                          // the ragged top edge: foam fingers, not a clean line
  if (v > edge + 0.12 * n2) discard;
  float foam = smoothstep(edge - 0.24, edge - 0.03, v + 0.12 * n2);     // a thick white foam crest along the top; clear water below
  float streak = smoothstep(0.62, 0.8, bwFbm(vec2(t * 22.0 - uTime * uFlow * 2.2, v * 3.0)));   // white streaks running back
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (!gl_FrontFacing) N = -N;
  float fres = pow(1.0 - abs(dot(N, V)), 2.0);
  // clear turquoise, a little lit at grazing angles (the sheets are mostly seen edge-on, so a strong rim light turned them white)
  vec3 water = mix(uDeep, uBody, 0.35 + 0.65 * v) + vec3(0.3, 0.85, 1.0) * fres * 0.15;
  vec3 col = mix(water, vec3(1.0), clamp(foam + streak * 0.45 * (1.0 - foam), 0.0, 1.0));
  float fadeEnds = smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.82, 1.0, t)) * smoothstep(0.0, 0.12, v + 0.06);
  float a = mix(0.62 + 0.3 * fres, 0.97, foam) * uAlpha * fadeEnds * uFade;
  gl_FragColor = vec4(col, a);
}
`;

// ---------------------------------------------------------------- geometry helpers
// A ring swept from a closed or open (r, z) profile round the local Z axis, between two angles (degrees; 0 = +X, 90 = up).
function sweep(profile, arc = [0, 360], seg = 160) {
  const a0 = THREE.MathUtils.degToRad(arc[0]), a1 = THREE.MathUtils.degToRad(arc[1]), n = profile.length;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= seg; i++) {
    const a = a0 + (a1 - a0) * i / seg, c = Math.cos(a), s = Math.sin(a);
    for (let j = 0; j < n; j++) { const [r, z] = profile[j]; pos.push(c * r, s * r, z); uv.push(i / seg, j / (n - 1)); }
  }
  for (let i = 0; i < seg; i++) for (let j = 0; j < n - 1; j++) {
    const q = i * n + j; idx.push(q, q + 1, q + n, q + 1, q + n + 1, q + n);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals(); return g;
}
// a rounded-rectangle cross-section (superellipse), as an (r, z) loop; round: 0 a box, 1 an ellipse
function roundedSection(r0, r1, z0, z1, round, n = 40) {
  const rc = (r0 + r1) / 2, zc = (z0 + z1) / 2, hr = (r1 - r0) / 2, hz = (z1 - z0) / 2, e = Math.max(0.1, round), out = [];
  for (let i = 0; i <= n; i++) {
    const t = Math.PI * 2 * i / n, c = Math.cos(t), s = Math.sin(t);
    out.push([rc + hr * Math.sign(c) * Math.pow(Math.abs(c), e), zc + hz * Math.sign(s) * Math.pow(Math.abs(s), e)]);
  }
  return out;
}
function frameAt(TR, u, axisH) {
  const F = { P: new THREE.Vector3(), R: new THREE.Vector3(), U: new THREE.Vector3(), T: new THREE.Vector3() };
  TR.frame(u, F);
  const m = new THREE.Matrix4().makeBasis(F.R, F.U, F.T); m.setPosition(F.P.clone().addScaledVector(F.U, axisH)); return m;
}

// ---------------------------------------------------------------- the porthole at the drum's mouth
function porthole({ scene, TR, TS, axisH, env, time }) {
  const P = ROUND6.porthole, g = new THREE.Group(); g.name = 'r6Porthole';
  // thick gold bezel: champagne gold, mirror-like, warm self-light so it glows in the drum's blue light
  const B = P.bezel;
  const gold = new THREE.MeshStandardMaterial({ color: P.goldColor, metalness: 1.0, roughness: P.goldRough, envMap: env || null, envMapIntensity: P.goldEnv,
    emissive: P.goldGlow, emissiveIntensity: 0.75 });
  if (P.lemon > 0) lemonGold(gold, P.lemon, 'r6BezelLemon');
  const bezel = new THREE.Mesh(sweep(roundedSection(B.inner, B.outer, B.front, B.back, B.round), [0, 360], 192), gold);
  bezel.name = 'r6Bezel';
  // bronze step ring inside the bezel and the royal-blue rubber seal behind it
  const S = P.step;
  const bronze = new THREE.MeshStandardMaterial({ color: 0xd8904a, metalness: 1.0, roughness: 0.3, envMap: env || null, envMapIntensity: 1.3,
    emissive: 0x5a2a08, emissiveIntensity: 0.6 });
  if (P.lemon > 0) lemonGold(bronze, P.lemon, 'r6BronzeLemon');   // round7: the step ring gold too (it read as a red line)
  const step = new THREE.Mesh(sweep(roundedSection(S.inner, S.outer, S.z - S.depth / 2, S.z + S.depth / 2, 0.4), [0, 360], 160), bronze);
  if (R7_ON && S.hide) step.visible = false;   // round7: the step ring read as a separate orange line inside the gold rim (the Art Director's #3)
  const seal = new THREE.Mesh(new THREE.TorusGeometry(P.seal.radius, P.seal.tube, 16, 160),
    new THREE.MeshStandardMaterial({ color: (R7_ON && P.sealColor) || 0x1a2fb8, metalness: 0.2, roughness: 0.18, envMap: env || null, envMapIntensity: 1.2, emissive: (R7_ON && P.sealGlow) || 0x0a1460, emissiveIntensity: 0.6 }));
  seal.position.z = P.seal.z;
  // the lavender drum face: a shallow dish (it curves back toward the rim), shaded in its own shader so it never depends on
  // the scene's lights: brushed concentric grain, a lavender-lilac sheen up and to the left, cyan bounce light near the rim
  const F = P.face, prof = [];
  for (let i = 0; i <= 24; i++) { const t = i / 24, r = F.inner + (F.outer - F.inner) * t; prof.push([r, F.z - F.dish * Math.sin(t * Math.PI * 0.5)]); }
  // ?s3=focus (Screen 3 step S3-1): F.cut builds the dish only out to that radius, its shading still spanning inner..outer
  // (uIn, uOut) and every point inside the cut where it was, so the drum's mouth reads the same from inside the tunnel,
  // while from the opening, further back, the castle round the washer door shows instead of a lavender wall 14 m wide
  if (F.cut && F.cut < F.outer) {
    const k = prof.findIndex(([r]) => r > F.cut), [r0, z0] = prof[k - 1], [r1, z1] = prof[k];
    prof.splice(k, prof.length - k, [F.cut, z0 + (z1 - z0) * (F.cut - r0) / (r1 - r0)]);
  }
  const faceMat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uIn: { value: F.inner }, uOut: { value: F.outer },
    uLav: { value: new THREE.Color(...P.lavender) }, uLilac: { value: new THREE.Color(...P.lilac) }, uShade: { value: new THREE.Color(...P.shade) } },
    vertexShader: FACE_VERTEX, fragmentShader: FACE_FRAGMENT, side: THREE.DoubleSide });
  const face = new THREE.Mesh(sweep(prof, [0, 360], 160), faceMat); face.name = 'r6Face';
  // gold rivets round the face
  const R = P.rivets, rivet = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 16, 10), gold, R.count), m4 = new THREE.Matrix4();
  for (let i = 0; i < R.count; i++) {
    const a = (i + 0.5) / R.count * Math.PI * 2, rr = R.radius, z = F.z - F.dish * Math.sin((rr - F.inner) / (F.outer - F.inner) * Math.PI * 0.5);
    m4.compose(new THREE.Vector3(Math.cos(a) * rr, Math.sin(a) * rr, z - 0.02), new THREE.Quaternion(), new THREE.Vector3(R.size, R.size, R.size * 0.55));
    rivet.setMatrixAt(i, m4);
  }
  // rivets round the gold rim's front face (the construction guide)
  const RR = P.rimRivets, rimRivet = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 16, 10), gold, RR.count), rm = (B.inner + B.outer) / 2;
  for (let i = 0; i < RR.count; i++) {
    const a = (i + 0.5) / RR.count * Math.PI * 2;
    m4.compose(new THREE.Vector3(Math.cos(a) * rm, Math.sin(a) * rm, B.front + 0.02), new THREE.Quaternion(), new THREE.Vector3(RR.size, RR.size, RR.size * 0.7));
    rimRivet.setMatrixAt(i, m4);
  }
  g.add(face, bezel, step, seal, rivet, rimRivet);
  g.applyMatrix4(frameAt(TR, TS, axisH));
  for (const o of g.children) o.frustumCulled = false;
  scene.add(g);
  return { bezel: [B.inner, B.outer], face: [F.inner, F.outer], rivets: R.count };
}
const FACE_VERTEX = /* glsl */ `
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() { vL = position; vN = normalize(mat3(modelMatrix) * normal); vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }
`;
const FACE_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uIn, uOut; uniform vec3 uLav, uLilac, uShade;
varying vec3 vL; varying vec3 vN; varying vec3 vW;
void main() {
  float r = length(vL.xy), a = atan(vL.y, vL.x), t = clamp((r - uIn) / (uOut - uIn), 0.0, 1.0);
  vec3 col = mix(uLav, uShade, smoothstep(0.15, 1.0, t) * 0.75);                         // lavender, deepening outward
  float grain = 0.9 + 0.1 * bwNoise(vec2(r * 38.0, a * 3.0)) + 0.04 * sin(r * 160.0);       // brushed concentric grain
  col *= grain;
  float sheen = pow(max(0.0, dot(normalize(vL.xy + 0.0001), normalize(vec2(-0.55, 0.85)))), 3.0) * (1.0 - t);   // up and to the left
  col = mix(col, uLilac * 1.15, sheen * ${ROUND6.porthole.faceGloss.toFixed(2)});
  float bounce = exp(-pow((r - uIn) / 0.35, 2.0));                                           // cyan light from the tunnel
  col += vec3(0.25, 0.7, 1.0) * bounce * (0.45 + 0.15 * sin(a * 6.0 + uTime * 2.0));
  float groove = exp(-pow((r - (uIn + 0.95)) / 0.05, 2.0)) + exp(-pow((r - (uIn + 1.9)) / 0.07, 2.0));   // pressed rings
  col = mix(col, uShade * 0.8, groove * 0.5); col += uLilac * 0.25 * exp(-pow((r - (uIn + 1.0)) / 0.04, 2.0));
  float pa = a / 6.2832 * ${ROUND6.porthole.panels.toFixed(1)} + 0.5;                     // panel seams (the construction guide)
  float seam = exp(-pow((fract(pa) - 0.5) * r * 6.2832 / ${ROUND6.porthole.panels.toFixed(1)} / 0.025, 2.0)) * step(uIn + 0.95, r);
  col = mix(col, uShade * 0.7, seam * 0.6); col += uLilac * 0.18 * exp(-pow((fract(pa) - 0.47) * r * 6.2832 / ${ROUND6.porthole.panels.toFixed(1)} / 0.02, 2.0)) * step(uIn + 0.95, r);
${R9_MATCH ? '' : `  float lightPanel = smoothstep(0.2, 0.17, abs(a - 1.5708)) * smoothstep(uIn + 0.42, uIn + 0.5, r) * (1.0 - smoothstep(uIn + 0.8, uIn + 0.88, r));
  col = mix(col, vec3(0.75, 0.95, 1.0) * 1.35, lightPanel);                                 // a glowing light panel above the door
`}  float view = clamp(dot(normalize(vN), normalize(cameraPosition - vW)), 0.0, 1.0);
  col *= 0.75 + 0.35 * view;
  gl_FragColor = vec4(col, 1.0);
}
`;

// ---------------------------------------------------------------- layered flanges along the tunnel
function flanges({ scene, TR, TS, TE, axisH, env, time }) {
  const P = ROUND6.flanges, us = [];
  for (let u = TS + P.from; u < TE + 3; u += P.every) us.push(u);
  // the section: a slab standing out of the wall, thick at the wall, rounded at its inner lip (r, z with z toward the drum)
  const prof = [[P.wall + 0.05, -P.depth * 0.5], [P.wall, -P.depth * 0.5], [P.lip + 0.08, -P.depth * 0.42], [P.lip + 0.02, -P.depth * 0.3],
    [P.lip, 0.0], [P.lip + 0.02, P.depth * 0.3], [P.lip + 0.08, P.depth * 0.42], [P.wall, P.depth * 0.5], [P.wall + 0.05, P.depth * 0.5]];
  const geo = sweep(prof, P.arc, 128);
  const aU = new Float32Array(us.length), aGold = new Float32Array(us.length);
  us.forEach((u, i) => { aU[i] = u; aGold[i] = (i % P.goldEvery === 1) ? 1 : 0; });
  geo.setAttribute('aU', new THREE.InstancedBufferAttribute(aU, 1)); geo.setAttribute('aGold', new THREE.InstancedBufferAttribute(aGold, 1));
  // ?s3=round7: uneven flanges (the Art Director's review #2): each stands its own depth out of the wall (1 +- jitter)
  const jit = R7_ON ? (P.jitter || 0) : 0;
  const rnd = (u) => { const x = Math.sin(u * 91.7) * 43758.5453; return x - Math.floor(x); };
  if (jit) geo.setAttribute('aLipK', new THREE.InstancedBufferAttribute(Float32Array.from(us, (u) => 1 + jit * (2 * rnd(u) - 1)), 1));
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uFace: { value: new THREE.Color(...P.face) }, uDeep: { value: new THREE.Color(...P.deep) },
    uCyan: { value: new THREE.Color(...P.cyan) }, uGold: { value: new THREE.Color(...P.gold) }, uLip: { value: P.lip }, uWall: { value: P.wall } },
    vertexShader: jit ? FLANGE_VERTEX_R7 : FLANGE_VERTEX, fragmentShader: FLANGE_FRAGMENT, side: THREE.DoubleSide });
  const mesh = new THREE.InstancedMesh(geo, mat, us.length);
  us.forEach((u, i) => mesh.setMatrixAt(i, frameAt(TR, u, axisH)));
  mesh.name = 'r6Flanges'; mesh.frustumCulled = false; scene.add(mesh);
  return { count: us.length, every: P.every, triangles: geo.index.count / 3 };
}
const FLANGE_VERTEX = /* glsl */ `
attribute float aU; attribute float aGold; varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  vL = position; vU = aU; vGold = aGold;
  vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
// ?s3=round7: the same, with each flange's inner lip moved toward or away from the wall (aLipK: 1 = as built); the fragment
// shader still sees the built section (vL), so the lip glow stays on the lip
const FLANGE_VERTEX_R7 = /* glsl */ `
attribute float aU; attribute float aGold; attribute float aLipK; uniform float uWall; varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  vL = position; vU = aU; vGold = aGold;
  vec3 p = position; float rr = length(p.xy); p.xy *= (uWall - (uWall - rr) * aLipK) / max(rr, 1e-3);
  vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0); vW = w.xyz;
  vN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * w;
}
`;
const FLANGE_FRAGMENT = /* glsl */ `
${NOISE}
uniform float uTime, uLip, uWall; uniform vec3 uFace, uDeep, uCyan, uGold;
varying vec3 vL; varying vec3 vN; varying vec3 vW; varying float vU; varying float vGold;
void main() {
  float r = length(vL.xy), a = atan(vL.y, vL.x);
  vec3 V = normalize(cameraPosition - vW), N = normalize(vN); if (!gl_FrontFacing) N = -N;
  float facing = clamp(dot(N, V), 0.0, 1.0);
  float toLip = 1.0 - smoothstep(uLip, uLip + 0.14, r);                                   // 1 on the rounded inner lip
  float front = step(vL.z, 0.0);                                                            // the face toward the rider
  vec3 col = mix(uDeep, uFace, (0.35 + 0.65 * facing) * mix(0.55, 1.0, front));
  col += uFace * 0.5 * smoothstep(uWall - 0.08, uWall, r) * front;                          // light catching the outer step
  float up = smoothstep(0.2, 1.0, sin(a));                                                  // lavender reflections on the upper wall
  col = mix(col, col + vec3(0.18, 0.08, 0.32), up * ${ROUND6.flangeVary.lavender.toFixed(2)});
  float wave = 0.75 + 0.25 * sin(vU * 0.9 - uTime * 3.0);                                   // the glow pulses down the tunnel
  float sheen = pow(1.0 - facing, 2.0);
  // pass 2: every flange different: its own brightness and tint (cyan, turquoise, or an unlit deep-blue lip), and patchy
  // light round it that drifts, so the rings are not a row of identical neon hoops
  float hv = fract(sin(vU * 12.9898) * 43758.5453), ht = fract(sin(vU * 78.233) * 12543.1);
  float patchL = mix(1.0, smoothstep(0.25, 0.8, bwFbm(vec2(a * 2.2 + vU * 3.1 + uTime * 0.25, vU * 0.7 - uTime * 0.4))) * 1.3, ${ROUND6.flangeVary.patch.toFixed(2)});
  float bright = mix(${ROUND6.flangeVary.dim.toFixed(2)}, 1.0, hv) * patchL;
  vec3 tint = mix(uCyan, vec3(0.05, 0.95, 0.85), step(0.5, ht)) * bright + uFace * 0.6 * (1.0 - bright);
  vec3 lipCol = mix(tint * (0.8 + 0.5 * sheen), uGold * (1.0 + 0.8 * pow(abs(sin(a * 3.0 + uTime * 0.6)), 6.0)), vGold);
  col = mix(col, lipCol * wave, toLip);
  float caustic = pow(0.5 + 0.5 * sin(a * 14.0 + vU * 2.0 - uTime * 2.6) * sin(a * 9.0 - uTime * 1.7 + vU), 6.0);   // water light
  col += vec3(0.3, 0.8, 1.0) * caustic * 0.35 * front * (1.0 - toLip);
  gl_FragColor = vec4(col, 1.0);
}
`;

// pulls a gold material's final colour toward a lemon gold, keeping its light and shade (the strong drum grade turned the gold
// copper-orange); used by round7 for the porthole bezel and the paw coins
export function lemonGold(mat, amount, key) {
  const prev = mat.onBeforeCompile;
  mat.onBeforeCompile = (sh, r) => {
    if (prev) prev(sh, r);
    sh.fragmentShader = sh.fragmentShader.replace('#include <tonemapping_fragment>', `{ float lgL = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(1.0, 0.86, 0.26) * lgL * 1.45, ${amount.toFixed(3)}); }
  #include <tonemapping_fragment>`);
  };
  mat.customProgramCacheKey = () => key;
  mat.needsUpdate = true;
}
