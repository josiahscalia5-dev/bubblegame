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
//    (Focused pass, 5 November ~16:00-20:30 UTC, the user: the foam "too transparent and too purple", wanted "thick, bright,
//    blue-white / aqua-white, frothy and dimensional"; the character sits ON TOP of the water) the lobes are now opaque
//    aqua-white FROTH in the original's own screen colours (MATCH_WATER.froth, matchLumpGLSL), the swell's top a band of white
//    froth with blue holes where she sits (look.froth), the curling sheets aqua-white spray, two small soap-bubble clusters on
//    her front waterline.
// 3. THE TUNNEL'S ENERGY (tunnelBubbles): soap bubbles at near, mid and far depth on the walls' rings, and bold white splash
//    flecks (torn streaks, droplet clusters, short wavy splashes) riding the bands with the swirl; one instanced draw call.
// Colours are written as the screen's sRGB and passed through the inverse display transform (mtUndisplay, tunnel_r9_match.js)
// where noted (lin3: sRGB to linear for the lobes, which go through the grade like the other splash layers).
import * as THREE from 'three';
import { MATCH_ON, MATCH_FOAM, MATCH, deepMerge, MT_BEND } from './tunnel_r9_match.js';
import { FOCUS_ON, FOCUS } from './tunnel_r9_focus.js';   // ?s3=focus (the focused correction pass)
import { PRE_FOCUSED_PASS, restoreSettings } from './tunnel_r9_focus_base.js';   // ?s3=focus: `match`'s settings as they were at 9a95c06
import { BT_ON, BT, BANK_ON, BANK, WAVE_ON, WAVE, CREST_ON, CREST, WATER2_ON, WATER2 } from './tunnel_s4_bt.js';
import { water2GLSL, water2Decl } from './tunnel_s4_water2.js';   // ?s3=...,water2   // ?s3=bt (the breakthrough pass, on top of focus); ?s3=...,bank
import { swimCollarGLSL } from './tunnel_s4_swim.js';   // ?s3=intunnel,swim: the contact collar's water ('' without the switch)

const f4 = (x) => (+x).toFixed(5);
export const MATCH_WATER = {
  // 1. the floor (sRGB adjustments on the derived map, then the inverse display transform)
  floor: {
    amount: 1.0,      // how much the derived water replaces the Round 8 floor
    wave: 0.22,       // the liquid's wave facets: lit toward the glow, shaded away from it (share of the colour)
    trough: 0.35,     // the wave troughs toward deep cobalt
    cobalt: '#0e4fd0',
    caustic: 0.35,    // luminous caustic web (cyan-white, added)
    glint: 0.9,       // the glow's glints on the waves (white, added) (follow-up: 0.5 tried: the separate white specks left of the body did not change, so kept)
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
    // (the user's correction after 14:43: she sits ON the water, supported by it and framed by foam, not sunk into it: the left
    // front, front, right front and right side lowered, so the water meets her at her base as approved: waterline 0.836,
    // her left side 0.809, her right side 0.860)
    mounds: [[32, 0.079, 10], [13, 0.07, 8], [-4, 0.0, 6], [-21, -0.1, 9], [-42, 0.0, 9], [55, 0.049, 9], [-62, 0.055, 9]],
  },
  // the swell's look: sRGB (as on screen). Near the top it is thin and see-through (the fur behind it reads violet), lower
  // down it is the floor's derived water (one body of water)
  look: {
    glassHi: '#5cb6ff', glass: '#3a8af2', glassDeep: '#2264dc', sky: '#c6ebff',
    clear: 0.97,      // (follow-up: 0.9 -> 0.97: the blue showing between the froth patches under her must not let the fur through as lilac) opacity at the very top in front of the body (no see-through purple glass in front of her: the user's checkpoint 02 and correction)
    sideClear: 0.93,  // and beside it (follow-up: 0.85 -> 0.93)
    soft: 0.7,        // the floor's map on the swell's lower face: its blur (the lower water's cells read as cracked glass)
    solid: [0.05, 0.24],   // m below the crest over which it becomes solid
    top: 0.18,        // m below the crest over which the see-through glass turns into the floor's water
    rim: 0.38,        // the glassy rim at grazing angles (white-cyan)
    frontRim: 0.12,   // its share in front of the body (gate fixes, step 7: the pale glass-bowl lip)
    spec: 1.4,        // the key light's specular points
    crest: 0.95,      // white on the crest, broken into bubbly pieces (foam layer only)
    crestFront: 0.5,  // its share in front of the body (a broken foam rim at her base, where she sits on the water; a full-strength rim read as a flat white plate)
    crestW: [0.03, 0.06, 0.015, 0.035],   // the crest's width (m below it): beside the body [base, + noise], in front of it [base, + noise]
    // (focused pass) the froth band along the top (foam layer only): depth below the crest [in front of the body, beside it]
    // (m, ragged by noise), its small bubbles (cells per unit of the swell's angle and per metre), the share without a hole
    // (iteration 2: 90% white under the body against the original's 14%: thinner, lacier; periwinkle-blue holes in front of
    // the body, where the original has lilac-blue bubbles under her)
    // (iterations 5-10: its cells were 2.5x taller than wide on screen, a striped row of ovals: cell per unit of the swell's
    // angle, cellD per metre down the face; a colour-marked diagnostic run showed the angle's cells were the narrow ones)
    // (follow-up: under the body 29% white against the original's 14%: patches along the crest with blue water between them
    // (gap: the share of the crest without froth, noise along the swell's angle), more and bigger holes)
    froth: { amount: 1.0, depth: [0.026, 0.035], gap: 0.45, gapFront: 0.62, cell: 15.0, cellD: 110.0, holeShare: 0.25, holeK: 0.9, white: '#f2f8ff', side: '#cfe6fb', hole: '#47a6ef', holeFront: '#7fa8f2' },   // (iteration 6: fewer, more varied holes: it read as polka dots)
  },
  // the bank's lobes (spLumps reshaded). (Gate fixes, step 7: glossy see-through domes with white caps, a violet soap tint
  // in front; replaced in the focused pass by the froth below)
  // (focused pass, 5 November ~16:00: the user: the foam "still looks too transparent and too purple"; the original's is
  // "thick, bright, blue-white / aqua-white, frothy and dimensional, more like bubbly foam, not glassy lavender lumps") the
  // lobes are now FROTH (matchLumpGLSL): opaque, written in the original's own screen colours (its bank's palette, k-means:
  // #e9f0fc white, #bed3f4 / #97c0f2 pale blue, #4b93e9 sky in the shade; aqua #7ac3f0 / #44adee lower down), white froth
  // patches made of small bubbles (white walls, aqua holes with a glint), fine white droplets over the aqua, a bubbly white
  // crest along the top of each outline, a ragged bubbly outline; no violet soap tint and no indigo shade (the before's domes:
  // hue 228-235 on 16.5% of the bank against the original's 3.7%)
  froth: {
    // (iteration 5: 34% pale aqua in the bank against the original's 15%: a more saturated sky-blue body, so the white froth
    // reads crisp against it, as in the original)
    // (iteration 6: '#3a9aec', '#7cbaf3', '#a8d2f8', hole '#45a2ee', low '#34a6ee': aqua-cyan in the shade, as the user asked; follow-up: below)
    shade: '#3270c8', mid: '#8ccaf4', light: '#c0e2fa', white: '#f2f8ff', side: '#c8e2fa', hole: '#4f94e6', low: '#3f88dc',
    // (follow-up, the lead: the colour one uniform sky blue: white tops, aqua-cyan mid-tones, pale periwinkle zones (per, of
    // perScale cells per unit radius), deeper blue shadows, a little periwinkle-lilac only on the froth bubbles' edges)
    midPer: '#a0c0f2', lightPer: '#c9dcf8',   // (hue about 217: pale periwinkle-blue, not lavender)
    per: 1.0, perScale: 1.1, poreRim: '#a6a6f2', poreRimK: 0.7,
    oct2: 0.1, halo: [0.4, 0.5], holeGlint: '#b4d8f8',   // the froth noise's second octave (less: smoother patch edges); droplets only where the noise is in this halo round a patch
    // (iteration 2: iteration 1 was 72% white in the bank against the original's 20%: white cotton clouds) the light: [the key
    // light's N.L, the normal's up, base]: pale blue facing the camera, sky blue below, light on the tops
    // (iteration 4: 44% white in the bank, 67% under the body: chalky) darker base light, less cover, less in front of the body
    lit: [0.5, 0.45, 0.22],
    cover: 0.02, upK: 0.3, scale: 1.5, coverFront: -0.25,   // (follow-up: scale 2.2 -> 1.5, broader patches; cover -0.1 -> -0.02: smoother noise, fewer exceedances)   // froth patches (value noise, mean 0.5): base, + the normal's up x upK; noise cells per unit radius; in front of the body (+)
    cell: 6.5, holeShare: 0.45, holeK: 0.9,   // (follow-up: holeShare 0.3 -> 0.45)       // its small bubbles: cells per unit radius, share without a hole, how blue the holes
    speckCell: 11.0, speckShare: 0.92, speck: 0.95, speck2Cell: 21.0, speck2Share: 0.85,   // (follow-up: 80 separate white shapes left of the body against 13: droplets 0.45 -> 0.7 and only round the patches)   // (iteration 7: + a finer layer: the froth's texture was smoother than the original's, hp5 0.079 against 0.095)   // fine white droplets on the aqua body
    crest: 0.95, crestW: 0.56, crestCell: 5.0, crestBreak: 0.8,   // (follow-up: crestBreak 0.55 -> 0.8, fewer breaks: each break made a separate white piece)   // the bubbly white crest along the top of the outline (from 1 - n.v), its bubbles
    edgeCut: [0.62, 0.3],                        // the ragged bubbly outline: cut from 1 - n.v = [0] minus [1] x the cell's bump
    spec: 0.9, specPow: 60,   // (iteration 9: a little stronger, for dimension: the lobes read matte)
    alpha: 0.98,
    lowFrom: [-0.35, -0.75],                     // toward aqua below (the normal's up), as the original's lower froth
  },
  // settings handed to the splash pass and the liquid (merged into MATCH.splash, MATCH.liquid, MATCH.heroWater before those
  // files merge them)
  splash: {
    // the bank: clusters of glossy lobes on the crest, [phi, how many, biggest radius (m), outward (m), height from the crest (m)]
    // (gate fixes, step 7: the bank's mass) big clusters where the bank is on screen at 3.0 s (lobe probe: phi 46 lands at
    // 3% across, 34 at 11%, 22 at 22%, 9 at 37%, -4 at 50%, -16 at 62%, -28 at 76%, -42 at 90%; phi beyond +-55 is off the
    // frame), the front ones smaller and the right-front lower (the original's waterline: 0.81 at the left front, 0.85-0.86
    // at the right front)
    lumps: [
      [34, 4, 0.22, 0.05, -0.08], [46, 3, 0.2, 0.06, -0.09], [22, 3, 0.16, 0.05, -0.07], [9, 2, 0.13, 0.04, -0.11], [-4, 2, 0.12, 0.04, -0.13],
      [-16, 2, 0.12, 0.05, -0.28], [-28, 3, 0.18, 0.05, -0.22], [-42, 3, 0.2, 0.05, -0.1], [-56, 2, 0.16, 0.06, -0.1], [60, 2, 0.14, 0.06, -0.09],
    ],
    lumpSquash: 0.66,   // flatter: rolling wave lobes, not balls
    lumpBump: 0.08,     // smoother domes than splash's foam lumps (0.16), so the white rim follows the outline
    lumpMin: 0.55,      // the smaller lobes of a cluster from this share of its biggest (splash: 0.35): no tiny lobes, whose thin rims broke into specks
    // (focused pass) frothy bulges on each lobe's outline (share of its radius), a finer mesh for them, and depth writes (the
    // froth is opaque, so nearer lobes must hide farther ones whatever their draw order)
    lumpFroth: 0.15, lumpDetail: 4, lumpDepthWrite: true,
    // curling sheets: [phi, height, width, curl, lean, shift]: short curved splashes curling over, two in front toward the
    // camera, and at both sides (low on the right: the approved right coin's face stays clear); saturated turquoise water
    // with a broken white lip, not tall glass fins
    curls: [
      [9, 0.16, 0.34, 1.35, 0.2, 0], [-13, 0.0, 0.28, 1.35, 0.2, 0],   // (the user's correction: lower at her base, the right one most)   // (gate fixes, step 7: the right-front one lower, 0.1 not 0.18: the fur shows pink to 0.85 there)
      [36, 0.27, 0.36, 1.45, 0.12, 0], [56, 0.24, 0.32, 1.4, 0.12, 0], [-36, 0.2, 0.32, 1.4, 0.12, 0], [-56, 0.17, 0.28, 1.4, 0.12, 0],
    ],
    curlAlpha: 0.8, curlLip: 0.95,   // (the lip crisp white, not a pale wash)
    // (focused pass: aqua-white spray, not turquoise glass: the user, "not glassy")
    colours: { glass: '#3a9cf2', glassDeep: '#2274dc', white: '#b4defc', lip: '#f4fbff' },   // (follow-up: '#62bcf8', '#2a90e6', '#d8f0ff' read as a pale plate in front of her once the froth band opened)
    apron: { amount: 0.13 },
  },
  liquid: {
    // fewer flecks; fewer, bigger clusters of clear bubbles on the waterline
    // (gate fixes, step 7: one on the left, not five: their thin rims over the new lobes broke into specks; the faint spray
    // sheets hidden: at 5% only their white drops were left, more specks)
    hide: ['r6BowWave', 'lqSpraySheets'],
    foam: { flecks: 0.12, plumeAlpha: 0.05,   // (follow-up: flecks 0.35 -> 0.12: separate white specks left of the body)
      bubbles: [[-60, 3], [-30, 2], [40, 1], [66, 2], [-3, 2], [15, 1]], bubbleR: [0.035, 0.095] },   // (focused pass: two small clusters at her front waterline, as the original's bubbles under her)
  },
  heroWater: {
    // fewer, larger droplets (the Art Director: at most 30 white shapes of 20 px or more beside the body; splash had 900 small
    // ones), more of them round, the right-hand ones lower (the approved right coin's face is clear)
    // (gate fixes, step 7: 30, not 180: many of the small white shapes beside the body were these)
    splash: { count: 18, flecks: 0.7,   // (follow-up: 30 -> 18, the same reason)
     
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
    count: 230,              // (focused pass: 160 -> 230; follow-up: + 40 for the far zone, more medium ones on the near and mid rings, fewer far specks round the centre)
    tube: 2.0,               // the hero lining's radius (m; the layout's tunnelRadius, 2.5, is the old drum's)
    // sizes: [share, world radius (m)]; far ones are drawn up to `far` times bigger (else they would be under a pixel). On
    // screen (0.69 r / distance frame widths): small 2-6 px, medium 8-20 px, an occasional large one 25-40 px (at 767 wide)
    sizes: [[0.45, [0.045, 0.085]], [0.45, [0.09, 0.17]], [0.1, [0.18, 0.28]]],
    far: [5, 24, 1.0],       // from 5 m into the drum, +100% by 24 m
    minPx: 2.4,              // never drawn under this radius (px): far ones stay readable rings, not sub-pixel dust
    // where round the tube: [share, angle (degrees from the side, 90 = the top, -40 and 220 just above the water), radius
    // (share of the tube's), distance ahead of the hero camera (m; drawn with a density of 1 / distance^2, so the near and
    // mid rings, which cover most of the screen, get most of them: spread evenly along the drum, perspective packed them into
    // the middle of the screen, 147 of 248 within 0.12 W of the vanishing point)]: all round the walls, inside the water's
    // swirl, and a few round the far centre. Each loops over its own `loop` metres, drifting toward the camera.
    // (focused pass: the centre was crowded with bubbles where the original has white squiggles: the walls' zones nearer,
    // the inner zone smaller and nearer, the far centre zone gone)
    zones: [[0.4, [20, 160], [0.66, 0.93], [5.3, 18]], [0.25, [160, 222], [0.66, 0.93], [5.3, 18]], [0.25, [-42, 20], [0.66, 0.93], [5.3, 18]],
      [0.1, [-30, 210], [0.4, 0.66], [5.3, 10]],
      [0.26, [-40, 220], [0.82, 0.95], [18, 26]]],   // (follow-up: far 17 shown against 29 before: a bigger share, nearer the walls so they stay out of the centre)   // (final: a few far ones on the far walls' rings, so there are bubbles at every depth without crowding the centre)
    camAt: -4.9,             // the hero camera's place along the path at 3.0 s (m from the drum's mouth; hero probe)
    loop: 4.0,               // m each one loops over (faded at both ends)
    drift: [0.15, 0.45],     // m/s toward the camera (the walls' water flows toward the viewer)
    swirl: [0.06, 0.14],     // rad/s round the tube (the walls turn 0.012 turns/s, 0.075 rad/s)
    rise: [0.03, 0.09],      // m/s buoyancy (up, wrapping round the loop)
    avoid: 0.9,              // the collectibles' clear circle (x their size on screen): no bubble IN FRONT of a coin's, gem's or sock's face (behind them the depth test hides them)
    rim: 1.3, film: 0.5, body: 0.08, glint: 1.25, rimPx: 1.5,   // (focused pass: brighter, wider outlines: 1.0, 0.6, 0.07, 1.0, 1.1)
      // rimPx: the outline's least width in pixels
    // the white water streaks among the bands (brief item 3): short white crescents and dashes on the walls' water, turning
    // with its swirl and flowing toward the camera. [count, length x width (m), share of the tube's radius, bend]
    // (focused pass, the user: "the tunnel is still too clean and too smooth", "more white splash flecks and streaks"; measured
    // with scripts/specks_size.py: the original's mid-ring white shapes average 86 px with 30 chunks over 160 px, the before's
    // 34 px with 5x too many specks under 20 px) bolder, bigger and varied: curved dashes thick at the head (shape 0), rows of
    // round droplets (1), short thick crescents (2), [shares]; white cores with a cyan edge; more of them on the near and mid rings
    // (iteration 2: the crescents read as white moons and the droplet rows as pearl strings: torn streaks, scattered droplets
    // with a spray tail, and squiggles; at most maxPx long on screen (half length, px at 1614 px tall))
    // (iteration 4: the squiggles read as thin bird marks: thicker, blobbier pieces, fewer far ones (they were specks))
    flecks: { count: 380, size: [[0.06, 0.17], [0.026, 0.05]], rho: [0.8, 0.95], bend: [0.0, 1.6], alpha: 0.95, ahead: [5.5, 17], angles: [-50, 230],
      shapes: [0.45, 0.3, 0.25], edge: '#9adcff', maxPx: 19 },
  },
};
const MW_TUNE = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.matchWater;
if (FOCUS_ON) {   // ?s3=focus: the focused correction pass's settings (tunnel_r9_focus.js)
  restoreSettings(MATCH_WATER, PRE_FOCUSED_PASS.MATCH_WATER);   // (`match`'s water as it was at 9a95c06, tunnel_r9_focus_base.js)
  deepMerge(MATCH_WATER, FOCUS.water);
  if (BANK_ON) deepMerge(MATCH_WATER, BANK.water);
  if (CREST_ON) deepMerge(MATCH_WATER, CREST.water);
  if (WATER2_ON) deepMerge(MATCH_WATER, WATER2.water);   // ?s3=...,water2: the face's comma arcs off (tunnel_s4_water2.js)   // ?s3=...,crest: the curling crests (tunnel_s4_bt.js)   // ?s3=...,bank: the bank of rounded blue lobes (tunnel_s4_bt.js)
  if (BT_ON && BT.water) deepMerge(MATCH_WATER, BT.water);   // ?s3=bt: the breakthrough pass's water (tunnel_s4_bt.js; none since candidate 2 was rejected)
  if (MW_TUNE) deepMerge(MATCH_WATER, MW_TUNE);   // (focus: the test tune first, so swellFront and the crest can be tried too)
  // the swell's crest lowered in front of her body (frontDip m, fully within `full` degrees of straight ahead, none beyond
  // `to`), so the water meets her at her base with the new, lower camera; her sides keep their foam. lift: the whole crest
  // raised (m) by about the depth of the spiky teeth cut into it (focusSwellGLSL), so the teeth's tips stand above the old
  // crest and their valleys below it
  const Fd = MATCH_WATER.swellFront;
  if (Fd) MATCH_WATER.swell.line = MATCH_WATER.swell.line.map((h, i) => {
    const phi = -110 + 5 * i, t = Math.min(Math.max((Math.abs(phi) - Fd.full) / (Fd.to - Fd.full), 0), 1);
    return +(h + (Fd.lift || 0) - Fd.dip * (1 - t * t * (3 - 2 * t))).toFixed(4);
  });
} else if (MW_TUNE) deepMerge(MATCH_WATER, MW_TUNE);
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
  return water2Decl() + /* glsl */ `
// ?s3=match: the floor's water, the walls' derived map at the same place (tunnel_r9_match_water.js). cs: (x, h) in the track's
// cross-section, u along the path; W world; N0 the surface's normal (up), T0 the path's direction; Nw the liquid's wave normal,
// hDet its wave height (0 trough .. 1 crest), caus its caustic web; onWall: 1 where the water meets the walls (the walls' own look);
// nearK: 1 round the character (the water there deeper, vivid electric blue as approved); soft: the map's blur instead of its
// detail (on the swell, where the lower water's cell pattern read as cracked glass)
vec3 matchFloor(vec2 cs, float u, vec3 W, vec3 N0, vec3 T0, vec3 Nw, float hDet, float caus, float onWall, float nearK, float soft${FOCUS_ON ? ', float fx' : ''}) {
  float rw, tu;
  mtPlace(cs, u${MT_BEND ? ', W' : ''}, rw, tu);   // the walls' place, corrected at the centre (tunnel_r9_match.js matchPlaceGLSL)
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
${FOCUS_ON ? focusFloorGLSL() : ''}${FOCUS_ON && MATCH.walls.ringMap ? focusFloorRingsGLSL() : ''}  vec3 col = mtUndisplay(c);
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
// ?s3=focus only (the Art Director's review, item 5: the floor ahead, behind her, read as dark glassy cyan-and-lilac rings,
// L* 71 against the original's 83.5; the original's is pale blue-white water with broken white crest streaks along the
// whirlpool's circles): inside matchFloor, in screen colour, on the floor's own water only (fk: not where it meets the walls,
// fading out toward the centre) and only for the floor itself (fx: the swell's lower water, which also calls matchFloor, keeps
// its look): the map's lilac turned pale blue, the colour lifted toward the original's pale blue, and white crest streaks
// (MATCH_WATER.floorFx, tunnel_r9_focus.js): cells round the centre (tu) and out from it (log radius, moving with the walls'
// flow), one streak per cell, elongated along the circle, broken (a share of cells), thicker in the middle.
function focusFloorGLSL() {
  const P = MATCH_WATER.floorFx, S = P.streak, M = MATCH.walls;
  return /* glsl */ `  {   // ?s3=focus: the floor ahead as the original's pale blue-white water (tunnel_r9_match_water.js focusFloorGLSL)
    float ffK = fk * fx;
    float ffLil = clamp((c.r - c.g) * 20.0, 0.0, 1.0) * clamp((c.b - c.r) * 20.0, 0.0, 1.0);
    c.r = mix(c.r, c.g * 0.8, ffLil * ${f4(P.delilac)} * ffK);
    c = mix(c, ${v3s(P.pale)}, ${f4(P.lift)} * ffK);
    vec2 ffQ = vec2(tu * ${f4(S.along)}, (lr - ${f4(M.lnR0)} - fl) * ${f4(S.across)}), ffI = floor(ffQ);
    ffQ.x += lqHash(vec2(ffI.y, 7.1)) * 0.5;   // (rows offset, so the streaks do not line up)
    ffI = floor(ffQ);
    vec2 ffO = fract(ffQ) - 0.5;
    float ffH = lqHash(ffI + 3.3);
    float ffL = mix(${f4(S.len[0])}, ${f4(S.len[1])}, lqHash(ffI + 5.7)) * 0.5;
    float ffT = mix(${f4(S.thick[0])}, ${f4(S.thick[1])}, lqHash(ffI + 9.1)) * 0.5;
    float ffAl = clamp(abs(ffO.x) / ffL, 0.0, 1.0);
    float ffY = ffO.y - (lqHash(ffI + 11.9) - 0.5) * 0.3 - ${f4(S.bend)} * (ffAl * ffAl - 0.3) * (ffH > 0.5 ? 1.0 : -1.0);
    float ffShape = (1.0 - smoothstep(0.8, 1.0, ffAl)) * (1.0 - smoothstep(ffT * (1.0 - 0.6 * ffAl * ffAl) * 0.6, ffT * (1.0 - 0.6 * ffAl * ffAl), abs(ffY)));
    // clustered in irregular bands (white water) with blue dashes between (the original's floor ahead)
    float ffB = smoothstep(${f4(S.band[0])}, ${f4(S.band[1])}, texture2D(uLqTex, vec2(tu * ${f4(S.band[2])}, (lr - ${f4(M.lnR0)} - fl) * ${f4(S.band[3])})).b);
    float ffS = step(1.0 - ${f4(S.share)} * ffB, ffH) * ffShape;
    float ffD = step(ffH, ${f4(S.blue.share)}) * ffShape;
    c = mix(c, ${v3s(S.blue.col)}, ffD * ${f4(S.blue.amount)} * ffK);
    c = mix(c, ${v3s(P.white)}, ffS * ${f4(S.amount)} * ffK);
  }
`;
}
// ?s3=focus with the ring map (step 3 of the user's fidelity plan): the floor ahead takes the ORIGINAL's own rings and floor
// water (tunnel_rings_original.png, the walls' map, uFocusRings declared with the walls' GLSL), at the radius and angle where the
// original has them; the floor itself only (fx; the swell's lower water keeps its look), faded out before her body
// (MATCH.walls.ringMap.floor.r, in rw). Here c is already the screen colour (after the lift and saturation), so the map's
// colour goes in as it is, with the derived relief's light and dark moving over it as on the walls.
function focusFloorRingsGLSL() {
  const R = MATCH.walls.ringMap, F = R.floor;
  return /* glsl */ `  {   // ?s3=focus: the original's own floor water and rings (tunnel_r9_match_water.js focusFloorRingsGLSL)
    vec3 frS = clamp(textureGrad(uFocusRings, bv, dx, dy).rgb + dot(det, vec3(0.2126, 0.7152, 0.0722)) * ${f4(R.detail)}, 0.0, 1.0);
    c = mix(c, frS, ${f4(F.amount)} * fx * (1.0 - smoothstep(${f4(F.r[0])}, ${f4(F.r[1])}, rw)));
  }
`;
}
// in the floor's main, after its own colour (tunnel_r8_liquid.js floorFragment): the derived water replaces it once the
// textures are in (the Round 8 floor stays as the fallback)
export function matchFloorApply() {
  const F = MATCH_WATER.floor;
  return /* glsl */ `  {   // ?s3=match: the walls' water continued onto the floor (tunnel_r9_match_water.js)
    float mwNear = exp(-rP * rP / ${f4(F.deepR * F.deepR)});
    vec3 mwCol = matchFloor(vec2(xu.x, vTrk.y), xu.y, vW, N0, normalize(vT), N, hDet, caus, side, mwNear, 0.0${FOCUS_ON ? ', 1.0' : ''});
    col = mix(col, mwCol, uMatchOn * ${f4(F.amount)});
  }
`;
}

// ---------------------------------------------------------------- 2. the swell round the character (GLSL)
// in the swell's main (tunnel_r8_liquid.js liquidSwell), after its own colour and foam: see-through glossy turquoise near the
// crest (the fur behind it shows violet), the floor's derived water lower down (one body of water), a glassy rim at grazing
// angles, the key light's specular points, a white crest broken into bubbly pieces (foam layer only). Its place in the track
// frame comes from the camera's frame (the hero stretch is straight there).
// ?s3=focus only (the Art Director's review, 18:19 UTC, item 1: the water round her read as a flat, smooth light-blue sheet;
// the original's is broken, sparkling splash water): on the swell's face, after its own colour (MATCH_WATER.face):
//   1. the crest cut into irregular spiky teeth (valleys cut down between them; they travel out from the front, rise and
//      fall), so no long smooth water edge runs across her;
//   2. short broken white pieces along the cut edge, widest on the teeth's tips (white crests, never a rim);
//   3. small irregular white splash pieces down the face, flowing down it, fewer and smaller further down (blue between);
//   4. small clear bubble rings sitting on the water;
//   5. round twinkling glints;
//   6. the face's water broken into light-cyan, vivid-blue and deeper-blue currents running down it.
// All in the surface's own coordinates (s: m along the crest; t: the profile over the crest, 0 outer foot .. 0.5 crest .. 1
// inner foot; pd: about m down the outer face from the crest), so the pieces stay round on its steep face. (The cut uses t,
// not d: near the crest d is nearly flat and clamped to 0 by the running waves, so any cut in d took the whole top away.)
// Inside matchSwellGLSL (mwCol, mwA, mwFront, mwSpec, s, vS, fl, uTime).
function focusSwellGLSL() {
  const F = MATCH_WATER.face, T = F.teeth, R = F.rim, L = F.lace, B = F.rings, S = F.spark, Wt = F.water;
  return /* glsl */ `    {   // ?s3=focus: broken, sparkling splash water at her base (tunnel_r9_match_water.js focusSwellGLSL)
      // 1. the spiky crest: keep t below a jagged limit (tips at about the natural silhouette, valleys down the outer face)
      float fsT = vS.y, fsPd = (0.5 - fsT) * 1.9;
      float fsK = s * ${f4(T.per)} + fl * ${f4(T.speed)};
      float fsI = floor(fsK), fsF = fract(fsK);
      float fsH = lqHash(vec2(fsI, 3.7)), fsPk = 0.25 + 0.5 * lqHash(vec2(fsI, 8.1));
      float fsTooth = pow(fsF < fsPk ? fsF / fsPk : (1.0 - fsF) / (1.0 - fsPk), ${f4(T.sharp)});
      float fsTip = (0.35 + 0.65 * fsH) * (${f4(1 - T.bob)} + ${f4(T.bob)} * sin(uTime * 3.1 + fsH * 23.0));
      float fsN = texture2D(uLqTex, vec2(s * 3.1 + fl * 0.25, 0.31 + uTime * 0.05)).b;
      float fsCutT = ${f4(T.hi)} - (${f4(T.hi - T.lo)} * (1.0 - fsTooth * fsTip) + ${f4(T.fine)} * fsN) * mix(${f4(T.side)}, ${f4(T.front)}, mwFront);
      fsCutT += ${f4(T.lobe)} * (0.6 * sin(s * 11.0 + 1.3 + fl * 0.4) + 0.4 * sin(s * 23.0 + 4.1 - fl * 0.7));   // rounder crests and troughs along it
      float fsE = fsCutT - fsT;
      float fsKeep = smoothstep(0.0, max(fwidth(fsT), 1e-5) * 1.5, fsE);
      fsE *= 1.9;   // (m down the face from the cut edge)
      // 2. broken white pieces along the cut edge
      float fsRc = floor(s * ${f4(R.cell)} + fl * 0.8);
      float fsRw = mix(${f4(R.w[0])}, ${f4(R.w[1])}, lqHash(vec2(fsRc, 5.3))) * (0.45 + 0.75 * fsTooth);
      float fsRim = (1.0 - smoothstep(fsRw * 0.55, fsRw, fsE)) * step(${f4(1 - R.share)}, lqHash(vec2(fsRc, 1.9)));
      // 3. broken white crest arcs down the face (the original's water there: curving white crest lines over blue, not
      //    dots): per cell one arc of a circle, mostly its upper side, tilted a little, broken; clustered in bands that run
      //    down the face (blue gaps between), fewer further down
      //    (the 2 x 2 nearest cells, so an arc may reach past its own cell without being cut off square)
      vec2 fsLq = vec2(s * ${f4(L.cell)} + fl * 0.3, fsPd * ${f4(L.cell)} - fl * ${f4(L.flow)}), fsLb = floor(fsLq - 0.5);
      float fsReach = 1.0 - smoothstep(0.0, ${f4(L.reach)}, fsE);
      float fsBand = smoothstep(${f4(L.band[0])}, ${f4(L.band[1])}, texture2D(uLqTex, vec2(s * ${f4(L.band[2])} + fl * 0.1, fsPd * ${f4(L.band[2] * 1.4)} - fl * 0.5)).b);
      float fsLace = 0.0;
      for (int j = 0; j < 4; j++) {
        vec2 fsLi = fsLb + vec2(mod(float(j), 2.0), floor(float(j) * 0.5));
        vec2 fsLo = fsLq - fsLi - 0.5 - (vec2(lqHash(fsLi + 4.0), lqHash(fsLi + 7.0)) - 0.5) * 0.4;
        float fsLr = mix(${f4(L.r[0])}, ${f4(L.r[1])}, lqHash(fsLi + 2.0));
        float fsLw = mix(${f4(L.w[0])}, ${f4(L.w[1])}, lqHash(fsLi + 3.0)) * (0.6 + 0.4 * fsReach);
        float fsLa = atan(fsLo.x, -fsLo.y) - (lqHash(fsLi + 13.0) - 0.5) * ${f4(L.tilt)};
        float fsLs = mix(${f4(L.span[0])}, ${f4(L.span[1])}, lqHash(fsLi + 9.0));
        // (irregular, not a row of commas: the radius wobbles along the arc and the line tapers toward one end)
        float fsLh = lqHash(fsLi + 17.0);
        fsLr *= 1.0 + ${f4(L.wobble || 0)} * sin(fsLa * (2.0 + 2.0 * fsLh) + fsLh * 6.28);
        fsLw *= 1.0 - ${f4(L.taper || 0)} * smoothstep(-fsLs, fsLs, fsLa * (fsLh > 0.5 ? 1.0 : -1.0));
        float fsArc = (1.0 - smoothstep(fsLw * 0.55, fsLw, abs(length(fsLo) - fsLr))) * (1.0 - smoothstep(fsLs * 0.75, fsLs, abs(fsLa)));
        fsLace = max(fsLace, step(1.0 - ${f4(L.share)} * fsReach * fsBand, lqHash(fsLi + 11.0)) * fsArc);
      }
      // 4. small clear bubble rings
      vec2 fsBq = vec2(s * ${f4(B.cell)} + 0.15 * sin(uTime * 0.6), fsPd * ${f4(B.cell)} - fl * 0.35), fsBi = floor(fsBq);
      float fsBr = mix(${f4(B.r[0])}, ${f4(B.r[1])}, lqHash(fsBi + 29.0));
      vec2 fsBo = fract(fsBq) - 0.5 - (vec2(lqHash(fsBi + 31.0), lqHash(fsBi + 37.0)) - 0.5) * 0.3;
      float fsBl = length(fsBo);
      float fsRing = step(${f4(1 - B.share)}, lqHash(fsBi + 23.0)) * (1.0 - smoothstep(0.05, ${f4(B.reach)}, fsE));
      float fsRingGl = fsRing * (1.0 - smoothstep(0.0, fsBr * 0.22, length(fsBo - vec2(-0.45, 0.45) * fsBr)));
      fsRing *= smoothstep(fsBr - 0.08, fsBr - 0.03, fsBl) * (1.0 - smoothstep(fsBr, fsBr + 0.03, fsBl));
      // 5. round twinkling glints
      vec2 fsSq = vec2(s * ${f4(S.cell)}, fsPd * ${f4(S.cell)} - fl * 0.6), fsSi = floor(fsSq);
      float fsSh = lqHash(fsSi + 41.0);
      float fsSpark = step(${f4(1 - S.share)}, fsSh) * (1.0 - smoothstep(${f4(S.dot[0])}, ${f4(S.dot[1])}, length(fract(fsSq) - 0.5 - (vec2(lqHash(fsSi + 43.0), lqHash(fsSi + 47.0)) - 0.5) * 0.5)))
        * (0.55 + 0.45 * sin(uTime * 6.0 + fsSh * 40.0)) * (1.0 - smoothstep(0.05, ${f4(S.reach)}, fsE));
      // 6. light-cyan, vivid-blue and deeper-blue currents running down the face
      float fsC = texture2D(uLqTex, vec2(s * ${f4(Wt.scale[0])} + fl * 0.08, fsPd * ${f4(Wt.scale[1])} - fl * 0.45)).b;
      vec3 fsW = mix(${v3s(Wt.deep)}, ${v3s(Wt.mid)}, smoothstep(0.3, 0.55, fsC));
      fsW = mix(fsW, ${v3s(Wt.light)}, smoothstep(0.55, 0.8, fsC));
      mwCol = mix(mwCol, mtUndisplay(fsW), ${f4(Wt.amount)});
${WATER2_ON ? water2GLSL() : ''}      mwCol += vec3(1.0) * mwSpec * ${f4(Wt.amount)};
      mwCol = mix(mwCol, mtUndisplay(${v3s(B.col)}), clamp(fsRing * ${f4(B.amount)} + fsRingGl, 0.0, 1.0));
      mwCol = mix(mwCol, mtUndisplay(${v3s(F.white)}), clamp(max(max(fsRim * ${f4(R.amount)}, fsLace * ${f4(L.amount)}), fsSpark * ${f4(S.amount)}), 0.0, 1.0));
${BT_ON && MATCH_WATER.btFroth ? btFrothGLSL() : ''}${WAVE_ON ? btWaveGLSL() : ''}      mwA *= fsKeep;
${F.debug === 2 ? `      {   // (debug: the face's coordinates, s in 0.05 m stripes red / green, pd in 0.05 m steps of blue)
        mwCol = vec3(mod(floor(s / 0.05), 2.0), 1.0 - mod(floor(s / 0.05), 2.0), mod(floor(fsPd / 0.05), 2.0)); mwA = fsKeep;
      }
` : F.debug ? `      {   // (debug: the crest's angle round her in 10-degree stripes, red / green, white at 0)
        vec3 fsO = vW - uC; float fsPhi = degrees(atan(dot(fsO, uR) / 0.95, -dot(fsO, uT) / 0.55));
        mwCol = mod(floor(fsPhi / 10.0), 2.0) < 0.5 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
        if (abs(fsPhi) < 1.5) mwCol = vec3(1.0); mwA = fsKeep;
      }
` : ''}    }
`;
}
// ?s3=bt (the breakthrough pass, tunnel_s4_bt.js), only with MATCH_WATER.btFroth set (candidate 2's, REJECTED: none now):
// bubbly white-aqua froth on the swell's face, in place of focus's white comma arcs. The original's white there is froth made of small round bubbles in irregular patches, thickest along the crest,
// with vivid blue water between; noise patches (two octaves of the liquid's noise, flowing down the face), white inside
// with small round light-sky bubble holes and a glint, aqua at the patch edge, and a white glint on top. (Inside
// focusSwellGLSL's block: s, fsPd, fsE, fl, fsSpark and mwCol are its.)
function btFrothGLSL() {
  const P = MATCH_WATER.btFroth;
  return /* glsl */ `      {   // ?s3=bt: the froth patches
        float btN = texture2D(uLqTex, vec2(s * ${f4(P.scale[0])} + fl * 0.15, fsPd * ${f4(P.scale[1])} - fl * 0.6)).b * 0.65
          + texture2D(uLqTex, vec2(s * ${f4(P.scale[0] * 2.7)} - fl * 0.1, fsPd * ${f4(P.scale[1] * 2.7)} - fl * 0.9 + 0.37)).b * 0.35;
        float btTh = mix(${f4(P.th[0])}, ${f4(P.th[1])}, smoothstep(${f4(P.reach[0])}, ${f4(P.reach[1])}, fsE));
        float btP = smoothstep(btTh, btTh + ${f4(P.edge)}, btN);
        vec2 btQ = vec2(s * ${f4(P.cell)} + fl * 0.2, fsPd * ${f4(P.cell)} - fl * 1.1), btI = floor(btQ);
        vec2 btO = fract(btQ) - 0.5 - (vec2(lqHash(btI + 51.0), lqHash(btI + 53.0)) - 0.5) * 0.35;
        float btR = mix(${f4(P.hole[0])}, ${f4(P.hole[1])}, lqHash(btI + 57.0)), btL = length(btO);
        float btHole = step(${f4(P.holeShare)}, lqHash(btI + 59.0)) * (1.0 - smoothstep(btR - 0.07, btR, btL));
        float btGl = btHole * (1.0 - smoothstep(btR * 0.1, btR * 0.3, length(btO - vec2(-0.4, 0.4) * btR)));
        vec3 btC = mix(${v3s(P.white)}, ${v3s(P.holeCol)}, btHole * ${f4(P.holeK)});
        btC = mix(btC, ${v3s(P.glint)}, btGl);
        btC = mix(${v3s(P.aqua)}, btC, smoothstep(btTh + ${f4(P.edge * 0.4)}, btTh + ${f4(P.edge * 1.6)}, btN));
        mwCol = mix(mwCol, mtUndisplay(btC), btP * ${f4(P.amount)});
      }
`;
}
// ?s3=...,wave (tunnel_s4_bt.js WAVE): the original's rounded water lobes drawn by the swell's face itself (inside
// focusSwellGLSL's block: s along the crest (m), fsPd down the face (m), fsE m below the cut edge, fl the flow, mwCol)
function btWaveGLSL() {
  const P = WAVE;
  return /* glsl */ `      {   // ?s3=...,wave: rounded glossy water lobes flowing down the face
        vec2 bwQ = vec2(s * ${f4(P.cell[0])} + fl * 0.15, fsPd * ${f4(P.cell[1])} - uTime * ${f4(P.flow * P.cell[1])}), bwB = floor(bwQ - 0.5);
        float bwH = 0.0, bwLav = 0.0; vec2 bwN = vec2(0.0);
        for (int j = 0; j < 4; j++) {   // the 2 x 2 nearest cells: the highest dome wins (their union)
          vec2 bwI = bwB + vec2(mod(float(j), 2.0), floor(float(j) * 0.5));
          float bwS = lqHash(bwI + 61.0);
          if (bwS > ${f4(P.share)}) continue;
          vec2 bwO = bwQ - bwI - 0.5 - (vec2(lqHash(bwI + 63.0), lqHash(bwI + 67.0)) - 0.5) * 0.45;
          float bwR = mix(${f4(P.r[0])}, ${f4(P.r[1])}, lqHash(bwI + 71.0)), bwD = length(bwO) / bwR;
          if (bwD >= 1.0) continue;
          float h = sqrt(1.0 - bwD * bwD);
          if (h > bwH) { bwH = h; bwN = bwO / bwR; bwLav = step(1.0 - ${f4(P.lav)}, lqHash(bwI + 73.0)); }
        }
        float bwReach = 1.0 - smoothstep(${f4(P.reach * 0.6)}, ${f4(P.reach)}, fsE);
        vec3 bwNrm = normalize(vec3(bwN.x, -bwN.y, bwH + 0.15));   // the dome's normal on the face (x along, y up the face, z out)
        float bwLit = clamp(dot(bwNrm, normalize(vec3(-0.45, 0.55, 0.7))), 0.0, 1.0), bwEdge = 1.0 - smoothstep(0.0, 0.35, bwH);
        vec3 bwC = mix(${v3s(P.body)}, ${v3s(P.light)}, smoothstep(0.35, 0.95, bwLit));
        bwC = mix(bwC, ${v3s(P.rim)}, bwEdge * 0.85);
        bwC = mix(bwC, mix(${v3s(P.lavBody)}, ${v3s(P.lavRim)}, bwEdge), bwLav * 0.9);          // the lavender bubbles: light centre, white rim
        bwC = mix(bwC, ${v3s(P.white)}, smoothstep(${f4(P.glint[0])}, ${f4(P.glint[1])}, bwLit) * smoothstep(0.25, 0.6, bwH));   // the glint
        vec3 bwW = mix(${v3s(P.gap)}, bwC, smoothstep(0.0, 0.08, bwH));                         // cobalt between the domes
        mwCol = mix(mwCol, mtUndisplay(bwW), bwReach * ${f4(P.amount)} * (1.0 - fsSpark * 0.5));
      }
`;
}
export function matchSwellGLSL() {
  const K = MATCH_WATER.look;
  return /* glsl */ `  {   // ?s3=match: the swell as glossy see-through water (tunnel_r9_match_water.js)
    vec3 mwRc = vW - cameraPosition;
    vec2 mwCs = uHeroCam.xy + vec2(dot(mwRc, uLqSide), dot(mwRc, uLqUp));
    float mwU = uHeroCam.z + dot(mwRc, uLqFwd);
    vec3 mwFloor = matchFloor(mwCs, mwU, vW, uU, uT, N, hDet, 0.0, 0.0, 1.0, ${f4(K.soft)}${FOCUS_ON ? ', 0.0' : ''});   // (no caustic web, softer map: they read as cracks)
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
${FOCUS_ON ? '' : `    {   // (focused pass) a band of opaque white-aqua froth along the top of the swell, in front of and beside the body, so she
        // sits on froth (the original: white froth with bubbles right under her; the before: a flat pale-lilac glass plate)
      float mfN = texture2D(uLqTex, vec2(as * 1.7 - fl * 0.1, 0.23 + uTime * 0.04)).b;
      float mfD = mix(${f4(K.froth.depth[1])}, ${f4(K.froth.depth[0])}, mwFront) * (0.6 + 0.8 * mfN);   // m below the crest, ragged
      float mfZ = (1.0 - smoothstep(mfD * 0.75, mfD, d)) * ${f4(K.froth.amount)};
      float mfGi = floor(as * 9.0 - fl * 0.05), mfGf = fract(as * 9.0 - fl * 0.05);
      float mfG = texture2D(uLqTex, vec2(as * 2.9 - fl * 0.07, 0.61 + uTime * 0.03)).b * 0.5
        + mix(lqHash(vec2(mfGi, 3.0)), lqHash(vec2(mfGi + 1.0, 3.0)), mfGf * mfGf * (3.0 - 2.0 * mfGf)) * 0.5;
      mfZ *= smoothstep(0.0, 0.08, mfG - mix(${f4(K.froth.gap)}, ${f4(K.froth.gapFront)}, mwFront));   // (follow-up) patches with blue water between
      vec2 mfQ = vec2(as * ${f4(K.froth.cell)} - fl * 0.4, d * ${f4(K.froth.cellD)} - fl * 0.7), mfI = floor(mfQ);
      float mfH = lqHash(mfI + 31.0);
      vec2 mfO = fract(mfQ) - 0.5 - (vec2(lqHash(mfI + 4.0), lqHash(mfI + 8.0)) - 0.5) * 0.35;
      float mfR = 0.22 + 0.24 * fract(mfH * 7.3), mfL = length(mfO);
      float mfHole = step(${f4(K.froth.holeShare)}, mfH) * (1.0 - smoothstep(mfR - 0.07, mfR, mfL));
      float mfGl = mfHole * (1.0 - smoothstep(mfR * 0.12, mfR * 0.32, length(mfO - vec2(-0.35, 0.4) * mfR)));
      // white at the top, pale aqua lower in the band; the holes sky blue
      vec3 mfC = mix(${v3s(K.froth.white)}, ${v3s(K.froth.side)}, smoothstep(0.2, 1.0, d / max(mfD, 1e-3)));
      mfC = mix(mfC, mix(${v3s(K.froth.hole)}, ${v3s(K.froth.holeFront)}, mwFront), mfHole * ${f4(K.froth.holeK)});
      mfC = mix(mfC, ${v3s(K.froth.white)}, mfGl);
      mwCol = mix(mwCol, mtUndisplay(mfC), mfZ); mwA = max(mwA, mfZ);
    }
`}#endif
${FOCUS_ON ? focusSwellGLSL() : ''}${swimCollarGLSL()}    col = mix(col, mwCol, uMatchOn);
    a = mix(a, mwA * smoothstep(-0.06, 0.06, hUp + 0.02), uMatchOn);
  }
`;
}
// ---------------------------------------------------------------- the inverse display transform, a private copy
// (tunnel_r9_match.js's mtUndisplay, which the lumps' shader does not include): the value to draw so that it shows on screen
// as the sRGB colour c, through the output's Neutral tone mapping (exposure 1.05) and the hero grade's contrast and
// saturation; whites capped under the bloom's threshold (MATCH.walls.white)
function mwUndisplayGLSL() {
  const M = MATCH.walls, G = M.grade;
  return /* glsl */ `
vec3 mwLin(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 mwUndisp(vec3 c) {
  vec3 T = clamp(mwLin(clamp(c, 0.0, 1.0)), 0.0, ${f4(M.white)});
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
float mwHash3(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
// smooth 3D value noise (mean 0.5, spread about 0.16): a known distribution for the froth's cover (the wave texture's height
// channel is ridged and biased high)
float mwVNoise(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(mwHash3(i), mwHash3(i + vec3(1, 0, 0)), f.x), mix(mwHash3(i + vec3(0, 1, 0)), mwHash3(i + vec3(1, 1, 0)), f.x), f.y);
  float b = mix(mix(mwHash3(i + vec3(0, 0, 1)), mwHash3(i + vec3(1, 0, 1)), f.x), mix(mwHash3(i + vec3(0, 1, 1)), mwHash3(i + vec3(1, 1, 1)), f.x), f.y);
  return mix(a, b, f.z);
}
`;
}
// declarations for the lumps' fragment shader (tunnel_r8_splash.js, ?s3=match only)
export function matchLumpDecl() { return mwUndisplayGLSL(); }

// ---------------------------------------------------------------- the bank's lobes (spLumps, tunnel_r8_splash.js), reshaded
// at the end of the lumps' main. (Focused pass) FROTH: an opaque aqua-white foam mass lit from above (sky blue in the shade,
// pale blue, white on the tops), white froth patches of small bubbles, fine white droplets, a bubbly white crest along the top
// of the outline and a ragged bubbly outline; written in screen colours (mwUndisp)
const lin3 = (hex) => { const c = new THREE.Color(hex); return `vec3(${f4(c.r)}, ${f4(c.g)}, ${f4(c.b)})`; };   // sRGB -> linear
// ?s3=focus only (the focused correction pass, the user's correction of about 17:15 UTC): what is left of the bank, a few
// small low splash crests beside her and in the bottom corners, as glossy BLUE water (MATCH_WATER.crest, from
// tunnel_r9_focus.js): cobalt low down to turquoise, light cyan where they face the light, a thin broken white edge along the
// top of the outline, fine white spray dots on the upper half, a glint. Never lavender, never a white mass. Same inputs as
// matchLumpGLSL.
function focusLumpGLSL() {
  const B = MATCH_WATER.crest;
  return /* glsl */ `  {   // ?s3=focus: small blue water splash crests (tunnel_r9_match_water.js, tunnel_r9_focus.js)
    float cUp = dot(N, uU), cF = 1.0 - ndv;
    vec3 cc = mix(${lin3(B.low)}, ${lin3(B.mid)}, smoothstep(0.25, 0.6, d));
    cc = mix(cc, ${lin3(B.hi)}, smoothstep(0.62, 0.92, d + max(cUp, 0.0) * 0.15));
    vec3 cP = vO * 1.6 + vSeed * 5.0, cPi = floor(cP);
    float cBr = step(0.3, fract(sin(dot(cPi, vec3(39.346, 11.135, 83.155))) * 24634.6345));
    float cEdge = smoothstep(0.55, 0.72, cF) * smoothstep(0.0, 0.4, cUp) * cBr;
    vec3 cQ = vO * ${f4(B.sprayCell)} + vSeed * 13.0, cQi = floor(cQ);
    float cH = fract(sin(dot(cQi, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    float cSpray = step(${f4(B.sprayShare)}, cH) * (1.0 - smoothstep(0.1, 0.18, length(fract(cQ) - 0.5))) * smoothstep(-0.1, 0.4, cUp);
${B.rag ? `    // (item 1) a splash crest, not a smooth dome: its upper outline eaten into irregular points, and its top broken into
    // separate small white pieces (blue water between them; a white cap with holes read as one white mass)
    float cRn = texture2D(uLqTex, vO.xz * 0.9 + vO.y * vec2(0.37, -0.29) + vSeed * 3.0 + vec2(uTime * 0.04, 0.0)).b;
    float cRn2 = fract(sin(dot(floor(vO * ${f4(B.rag[2])} + vSeed * 9.0), vec3(17.13, 53.71, 29.37))) * 43758.5453);
    if (cUp > -0.15 && cF > ${f4(B.rag[0])} + ${f4(B.rag[1])} * (cRn * 0.7 + cRn2 * 0.3)) discard;
    vec3 cCq = vO * ${f4(B.cap.cell)} + vSeed * 11.0, cCi = floor(cCq);
    float cCh = fract(sin(dot(cCi, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
    float cUpK = smoothstep(${f4(B.cap.up[0])}, ${f4(B.cap.up[1])}, cUp + (cRn - 0.5) * 0.5);
    float cCr = mix(${f4(B.cap.r[0])}, ${f4(B.cap.r[1])}, cUpK * fract(cCh * 17.3));
    vec3 cCo = fract(cCq) - 0.5 - (fract(cCh * vec3(7.13, 3.71, 5.29)) - 0.5) * 0.2;
    float cCap = step(${f4(1 - B.cap.share)}, cCh) * step(0.02, cUpK) * (1.0 - smoothstep(cCr - 0.05, cCr, length(cCo))) * ${f4(B.cap.amount)};
    cEdge = max(cEdge * ${f4(B.cap.edge)}, cCap);
` : ''}    cc = mix(cc, ${lin3(B.white)}, clamp(max(cEdge * ${f4(B.edge)}, cSpray * ${f4(B.spray)}), 0.0, 1.0));
    float cRd = max(dot(reflect(-L, N), V), 0.0);
    cc += vec3(1.0) * pow(cRd, 120.0) * ${f4(B.spec)} + ${lin3(B.hi)} * pow(cF, 3.0) * 0.25;
    col = cc;
    a = clamp(max(${f4(B.alpha)}, max(cEdge, cSpray)), 0.0, 1.0) * clamp(vK * 1.5, 0.0, 1.0);
  }
`;
}
export function matchLumpGLSL() {
  if (FOCUS_ON) return focusLumpGLSL();   // ?s3=focus: small blue water splash crests (above)
  const B = MATCH_WATER.froth;
  return /* glsl */ `  {   // ?s3=match: thick bright aqua-white froth (tunnel_r9_match_water.js, focused pass)
    float fUp = dot(N, uU);
    float fF = 1.0 - ndv;                                   // 0 facing the camera .. 1 at the outline
    float fX = dot(vW - cameraPosition, uR);
    float fFront = 1.0 - smoothstep(0.32, 0.62, abs(fX));  // in front of the body (the camera rides behind it)
    // the froth's small bubbles (3D cells on the lobe): their bump also makes the outline ragged
    vec3 fBq = vO * ${f4(B.cell)} + vSeed * 11.0, fBi = floor(fBq);
    float fBh = mwHash3(fBi);
    vec3 fBo = fract(fBq) - 0.5 - (fract(fBh * vec3(7.13, 3.71, 5.29)) - 0.5) * 0.35;
    float fBr = 0.22 + 0.16 * fract(fBh * 11.7), fBl = length(fBo);
    float fBump = 1.0 - smoothstep(0.0, 0.5, fBl);
    if (fF > ${f4(B.edgeCut[0])} + ${f4(B.edgeCut[1])} * fBump + 0.25 * (1.0 - smoothstep(-0.2, 0.3, fUp))) discard;   // (the lower outline stays whole: it sits in the water)
    // the light: the key light and the up direction; deep blue in the shade, pale blue, light on the tops; blue low down.
    // (follow-up: one uniform sky blue before: pale aqua 36.8% and electric blue 29.8% in the bank against 14.6% and 12.2%)
    // the pale tones vary by region between aqua and pale periwinkle (hue 218-224: under the purple hues), as in the original
    float fPer = smoothstep(0.36, 0.56, mwVNoise(vO * ${f4(B.perScale)} + vSeed * 3.7 + 1.3)) * ${f4(B.per)};
    float fLit = clamp((d - 0.5) * ${f4(B.lit[0])} * 2.0 + fUp * ${f4(B.lit[1])} + ${f4(B.lit[2])}, 0.0, 1.0);
    vec3 fCol = mix(${v3s(B.shade)}, mix(${v3s(B.mid)}, ${v3s(B.midPer)}, fPer), smoothstep(0.25, 0.62, fLit));
    fCol = mix(fCol, mix(${v3s(B.light)}, ${v3s(B.lightPer)}, fPer), smoothstep(0.72, 0.97, fLit));
    fCol = mix(fCol, ${v3s(B.low)}, smoothstep(${f4(B.lowFrom[0])}, ${f4(B.lowFrom[1])}, fUp) * 0.6);
    // 1. froth patches, most on the tops (broad, smooth-edged: few separate white shapes)
    vec3 fNq = vO * ${f4(B.scale)} + vSeed * 9.0 + vec3(uTime * 0.05, 0.0, 0.0);
    float fNin = mwVNoise(fNq) * ${f4(1 - B.oct2)} + mwVNoise(fNq * 2.3 + 4.1) * ${f4(B.oct2)} + ${f4(B.cover)} + ${f4(B.coverFront)} * fFront + ${f4(B.upK)} * fUp;
    float fCover = smoothstep(0.5, 0.6, fNin);
    // 2. in the froth: white bubble walls, each bubble a blue hole with a white glint at its upper left and a thin periwinkle
    //    soap-film edge (the only periwinkle-lilac: a few percent)
    float fHole = step(${f4(B.holeShare)}, fBh) * (1.0 - smoothstep(fBr - 0.06, fBr, fBl));
    vec3 fGo = fBo - vec3(0.35, 0.45, 0.0) * fBr;   // (the lobe's own axes: x = uR, screen-left; y = up)
    float fGl = fHole * (1.0 - smoothstep(fBr * 0.12, fBr * 0.3, length(fGo)));
    vec3 fWhite = mix(${v3s(B.side)}, ${v3s(B.white)}, smoothstep(-0.2, 0.5, fUp));
    vec3 fHoleC = mix(${v3s(B.hole)}, ${v3s(B.poreRim)}, smoothstep(fBr * 0.55, fBr * 0.95, fBl) * ${f4(B.poreRimK)});
    vec3 fFroth = mix(fWhite, fHoleC, fHole * ${f4(B.holeK)});
    fFroth = mix(fFroth, ${v3s(B.holeGlint)}, fGl);   // (follow-up: a pale reflection, not white: each white glint was a separate white speck)
    fCol = mix(fCol, fFroth, fCover);
    // 3. white droplets only in a halo round the froth patches (they join them, not scattered over the water); blue pores
    //    in the froth
    vec3 fSq = vO * ${f4(B.speckCell)} + vSeed * 17.0, fSi = floor(fSq);
    float fSh = mwHash3(fSi + 3.0);
    vec3 fSo = fract(fSq) - 0.5 - (fract(fSh * vec3(3.1, 7.7, 5.3)) - 0.5) * 0.4;
    float fSpeck = step(${f4(B.speckShare)}, fSh) * (1.0 - smoothstep(0.16 + 0.1 * fract(fSh * 9.1), 0.24 + 0.1 * fract(fSh * 9.1), length(fSo)));
    fCol = mix(fCol, ${v3s(B.white)}, fSpeck * ${f4(B.speck)} * smoothstep(${f4(B.halo[0])}, ${f4(B.halo[1])}, fNin) * (1.0 - fCover));
    vec3 fTq = vO * ${f4(B.speck2Cell)} + vSeed * 23.0, fTi = floor(fTq);
    float fTh = mwHash3(fTi + 5.0);
    float fT = step(${f4(B.speck2Share)}, fTh) * (1.0 - smoothstep(0.14, 0.24, length(fract(fTq) - 0.5 - (fract(fTh * vec3(5.3, 2.9, 7.1)) - 0.5) * 0.4)));
    fCol = mix(fCol, ${v3s(B.hole)}, fT * 0.85 * fCover);
    // 4. a bubbly white crest along the top of the outline (broken into round bubbles)
    vec3 fCq = vO * ${f4(B.crestCell)} + vSeed * 5.0, fCi = floor(fCq);
    float fCh = mwHash3(fCi + 7.0);
    float fCrest = smoothstep(${f4(B.crestW)}, ${f4(B.crestW + 0.14)}, fF) * smoothstep(-0.35, 0.15, fUp);
    fCrest *= 1.0 - step(${f4(B.crestBreak)}, fCh) * (1.0 - smoothstep(0.18, 0.26, length(fract(fCq) - 0.5)));
    fCol = mix(fCol, ${v3s(B.white)}, clamp(fCrest * ${f4(B.crest)}, 0.0, 1.0));
    // 5. one small sharp glint
    float fRd = max(dot(reflect(-L, N), V), 0.0);
    float fSpec = pow(fRd, ${f4(B.specPow)}) * ${f4(B.spec)};
    col = mwUndisp(min(fCol + fSpec, 1.0));
    a = ${f4(B.alpha)} * clamp(vK * 1.5, 0.0, 1.0);
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
  const aT = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3), aN = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3);
  aT.setUsage(THREE.DynamicDrawUsage); aN.setUsage(THREE.DynamicDrawUsage);
  g.setAttribute('aC', aC); g.setAttribute('aB', aB); g.setAttribute('aT', aT); g.setAttribute('aN', aN); g.instanceCount = n;
  const avoid = Array.from({ length: 10 }, () => new THREE.Vector4());
  const uRes = { value: new THREE.Vector2(1, 1) };
  const mat = new THREE.ShaderMaterial({ uniforms: { uTime: time, uAvoid: { value: avoid }, uRes }, transparent: true, depthWrite: false,
    blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
    vertexShader: /* glsl */ `
attribute vec4 aC, aB;   // centre (world), radius or half length (m) | fade, seed, kind (0 bubble, 1 streak), streak half width (m) and bend packed
attribute vec3 aT, aN;   // streaks: the band's direction round the axis and the direction in to the axis (world)
uniform vec4 uAvoid[10];  // the collectibles on screen: NDC centre, radius (NDC y units), view depth (0: none)
uniform vec2 uRes;        // the drawing buffer (px)
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
    // a streak along the band (its ring round the axis), bent toward the axis
    vec2 dirT = (viewMatrix * vec4(aT, 0.0)).xy, dirI = (viewMatrix * vec4(aN, 0.0)).xy;
    dirT = dirT / max(length(dirT), 1e-4);
${FL.rot ? `    {   // ?s3=focus: turned off the band by up to rot degrees (the original's white bits do not all follow the rings)
      float ro = (fract(aB.y * 13.7) - 0.5) * ${f4(2 * FL.rot * Math.PI / 180)};
      dirT = vec2(dirT.x * cos(ro) - dirT.y * sin(ro), dirT.x * sin(ro) + dirT.y * cos(ro));
    }
` : ''}    vec2 dirR = vec2(-dirT.y, dirT.x);
    dirR *= -sign(dot(dirR, dirI) + 1e-6);                     // across it, pointing away from the axis
${FOCUS_ON ? `    float hw = max(fract(aB.w) * 0.1, 0.9 / pxPerM);          // half width (m), at least about a pixel
` : `    float hw = max(fract(aB.w) * 0.1, 1.3 / pxPerM);          // half width (m), at least 1.3 px (bold)
    // (focused pass) on screen at most maxPx long (half), the width scaled with it: near the rim they were white moons
    float rs = min(r, ${f4(FL.maxPx)} * uRes.y / 1614.0 / pxPerM);
    hw *= max(rs / r, 0.6); r = rs;
`}    mv.xy += dirT * (position.x * 2.0 * r) + dirR * (position.y * 5.0 * hw);
    vRimW = hw / r;
    vBend = (floor(aB.w) - 50.0) / 10.0;
  }
  gl_Position = projectionMatrix * mv;
  vQ = position.xy * 2.0;
}`,
    fragmentShader: /* glsl */ `
uniform float uTime;
varying vec2 vQ; varying float vA, vSeed, vKind, vRimW, vBend;
void main() {
  if (vA < 0.003) discard;
${FOCUS_ON ? `  if (vKind > 0.5) {   // a white streak: a tapered, slightly bent dash (y across it: 2.5 x its half width)
    float x = vQ.x;
    float y = vQ.y * 2.5 - vBend * (x * x - 0.35);
    float body = exp(-y * y * 3.5) * (1.0 - smoothstep(0.5, 1.0, abs(x)));   // (crisp: the original's flecks are small sharp white bits)
    float a = clamp(body * 1.7, 0.0, 1.0) * ${f4(FL.alpha)} * vA;
    if (a < 0.004) discard;
    gl_FragColor = vec4(vec3(0.93, 0.98, 1.0) * a, a);
    return;
  }
` : `  if (vKind > 0.5) {   // a white splash fleck (x along the band -1..1, yq across it in half widths, -2.5..2.5)
    float x = vQ.x, yq = vQ.y * 2.5;
    float y = yq - vBend * (x * x - 0.35);
    float asp = max(vRimW, 0.02);                 // half width / half length
    float k = fract(vSeed * 13.7), body = 0.0;
    float ph = vSeed * 40.0;
    if (k < ${f4(FL.shapes[0])}) {   // a broken streak along the band: ragged width, thick at its head, tapering, torn once or twice
      float dir = sign(fract(vSeed * 3.1) - 0.5);
      float w = (0.45 + 0.8 * smoothstep(-1.0, 0.7, x * dir)) * (0.8 + 0.3 * sin(x * 9.0 + ph) * sin(x * 4.0 + ph * 0.7));
      body = exp(-y * y * 2.0 / max(w * w, 0.02)) * (1.0 - smoothstep(0.7, 1.0, abs(x)));
      float gap = (fract(vSeed * 5.3) - 0.5) * 1.1;
      body *= mix(1.0, smoothstep(0.05, 0.13, abs(x - gap)), step(0.3, fract(vSeed * 2.3)));
      body *= mix(1.0, smoothstep(0.04, 0.1, abs(x + gap * 0.6 - 0.3)), step(0.7, fract(vSeed * 6.1)));
    } else if (k < ${f4(FL.shapes[0] + FL.shapes[1])}) {   // a few scattered droplets of different sizes with a short spray tail
      for (int i = 0; i < 3; i++) {
        float fi = float(i), h = fract(vSeed * (3.7 + fi * 1.9));
        float cx = -0.6 + fi * 0.55 + (h - 0.5) * 0.35, cy = (fract(h * 7.1) - 0.5) * 2.0 + vBend * (cx * cx - 0.35);
        float rr = 0.6 + 0.8 * fract(h * 3.3) * (1.0 - fi * 0.25);
        float dd = length(vec2((x - cx) / asp, yq - cy));
        body = max(body, 1.0 - smoothstep(rr * 0.55, rr, dd));
      }
      body = max(body, exp(-y * y * 6.0) * smoothstep(-0.9, -0.2, x) * (1.0 - smoothstep(0.1, 0.6, x)) * 0.8);
    } else {   // a short thick wavy splash (the original's curls and "~" marks)
      float yw = y - 0.6 * sin(x * 3.6 + ph);
      float w = 0.5 + 0.6 * (1.0 - x * x);
      body = exp(-yw * yw * 2.2 / (w * w)) * (1.0 - smoothstep(0.75, 1.0, abs(x)));
    }
    float core = smoothstep(0.5, 0.8, body), a = clamp(smoothstep(0.1, 0.45, body), 0.0, 1.0) * ${f4(FL.alpha)} * vA;
    if (a < 0.004) discard;
    vec3 c = mix(${v3s(FL.edge)}, vec3(0.95, 0.99, 1.0), core);   // white cores, a cyan edge
    gl_FragColor = vec4(c * a, a);
    return;
  }
`}  float rr = dot(vQ, vQ);
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
    const t = time.value, c = aC.array, b = aB.array, tg = aT.array, nn = aN.array;
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
      if (q.kind) {   // the ring's direction at the streak, and in to the axis
        const ct = Math.cos(th), st = Math.sin(th);
        tg[i * 3] = -st * F.R.x + ct * F.U.x; tg[i * 3 + 1] = -st * F.R.y + ct * F.U.y; tg[i * 3 + 2] = -st * F.R.z + ct * F.U.z;
        nn[i * 3] = -ct * F.R.x - st * F.U.x; nn[i * 3 + 1] = -ct * F.R.y - st * F.U.y; nn[i * 3 + 2] = -ct * F.R.z - st * F.U.z;
      }
      const din = u - TS;
      c[i * 4 + 3] = q.r * (1 + B.far[2] * sm(din, B.far[0], B.far[1]));
      // fade in and out at the ends of the loop and of the rise, and never under the water
      const fadeRise = q.rise ? sm(lift, 0, 0.08) * (1 - sm(lift, 0.5, 0.6)) : 1;
      b[i * 4] = sm(u, q.u0, q.u0 + 0.7) * (1 - sm(u, q.u1 - 0.7, q.u1)) * sm(h - W.WATER, 0.15, 0.35) * fadeRise;
      b[i * 4 + 1] = q.seed; b[i * 4 + 2] = q.kind;
      b[i * 4 + 3] = q.kind ? Math.round(50 + q.bend * 10) + Math.min(q.w2 * (1 + B.far[2] * sm(din, B.far[0], B.far[1])) / 0.1, 0.999) : 0;   // bend, half width / 0.1 m
    }
    aC.needsUpdate = true; aB.needsUpdate = true; aT.needsUpdate = true; aN.needsUpdate = true;
  });
  const wp = new THREE.Vector3(), near = [];
  mesh.onBeforeRender = (renderer, sc, cam) => {   // the collectibles' screen circles, with the camera actually drawing
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
    renderer.getDrawingBufferSize(uRes.value);
  };
  return { count: B.count, flecks: FL.count, drawCalls: 1, triangles: n * 2, avoiding: objs.length };
}

// a private random sequence (never the game's seeded Math.random)
function mulberryMw(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
