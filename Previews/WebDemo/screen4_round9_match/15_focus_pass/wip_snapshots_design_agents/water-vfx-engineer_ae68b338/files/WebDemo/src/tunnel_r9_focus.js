// ?s3=focus (test only): the user's FOCUSED CORRECTION PASS on Round 9 (5 November 2026; the brief:
// Design/ReferencePacks/2026-11-05_Screen4_Focused_Correction_Pass_Brief/README.md). `focus` is everything `match` does
// (tunnel_r9_match.js, tunnel_r9_match_water.js) plus the settings below; `?s3=match` and everything older are unchanged:
// nothing here runs without the switch. The ONLY target stays the ORIGINAL APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg).
//
// The five items, in the user's order:
//   1. the tunnel: more energetic, irregular swirling water, many more white splash flecks and streaks, more bubbles at
//      every depth (the walls' band settings, a white fleck layer on the walls' water, more instanced streaks and bubbles);
//   2. the foam: no glassy lavender domes. The user's correction (about 17:15 UTC, superseding the thick-foam requests): she
//      sits on sparkling BLUE water with small bubbles, splashes and blue-white highlights, not on a white foam cushion; so
//      the big lobes round her are removed and the few left are small blue water splash crests;
//   3. the pink character's framing: larger in the frame and clearly ON TOP of the water (the camera closer and lower; the
//      swell's crest and the curling sheets in front of her body lowered or removed, so the water meets her at her base);
//      her model unchanged;
//   4. the sock: lying sideways, its toe to the lower left, as in the original (a pose inside its rocking group);
//   5. the composition: closer and fuller (the camera, and the fuller tunnel and foam).
// Settings only (plain data); the code that reads the new keys is gated on FOCUS_ON in the files named. Colours are sRGB hex.
const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const FOCUS_ON = LIST.includes('focus');

export const FOCUS = {
  // deep-merged into MATCH (tunnel_r9_match.js) right after it is defined, before the test tune and before anything reads it
  match: {
    hero: {
      round6: {
        // 5. the lower-right coin in the right lane (match: 0.357 lane widths outside it): with the nearer camera it sat at the
        //    frame's edge (x 0.89-1.0; the original's 0.78-1.0); easier to reach than before (the rest of match's layout kept)
        layout: { coinLines: [[-0.231, 2.77, 1, 1.0, 1.14, 0], [-0.674, 3.4, 1, 1.0, 2.03, 0], [1.07, 7.3, 1, 1.0, 1.15, 0], [1.95, 2.3, 1, 1.0, 0.57, 0],
          [2, 15.0, 1, 1.0, 0.5, 0], [1, 12.0, 3, 1.0, 0.9, 0]] },
        // 5. the two framing brushes (decorative, not hazards) nearer the axis, so the nearer camera keeps them in the frame
        //    as the original's pom-poms at the top left and the right ([u, side, angle, scale, radius]; match: radius 1.62
        //    and 1.98)
        r7: { deco: [[1.15 + 0.95, 1, 34, 0.5, 1.45], [2.6 + 0.95, -1, 2, 0.8, 1.72]] },
        round5: {
          // 3 / 5. (Tunnel & Lighting, after the Art Director's review 16: at off [-0.11, 0.93, -2.25], fov 73 she was drawn
          // too large and low: width 0.600 W against the original's 0.465, base 0.894 against 0.859.) The camera 0.85 m
          // further back and 0.2 m higher, the view narrowed to 68 degrees, so she is the original's size and place at 3.0 s
          // (measured: width 0.473 W, top 0.695, base 0.850, centre (0.500, 0.780); the original 0.465, 0.702, 0.859, (0.502,
          // 0.778)); 0.05 m to the right with its aim (off x and lookX together), so she is centred without moving the
          // vanishing point; pitched so the tube's axis lands at (0.497, 0.531) (the warm core, 0.028 W right of it, at the
          // original's 0.53). Her model and her size in the world are unchanged. (Real renders of each candidate:
          // Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/tune_cands.cjs.)
          camera: { off: [-0.162, 1.126, -3.1], lookY: 1.655, lookX: 0.142, fov: 68 },
        },
        // the gold rim with the camera further back: 1.036 times larger (outer 2.55 -> 2.641 m; the face's hole and its rivets
        // with it), so its outer edge is the original's circle on screen again (measured at 3.0 s: radius 0.931 W round
        // (0.550, 0.672 H), its top at 0.207 H; the original 0.936 W round (0.549, 0.676 H), top 0.208 H)
        porthole: { bezel: { inner: 2.506, outer: 2.641 }, face: { inner: 2.59 }, rivets: { radius: 3.42 } },
      },
      // (its centre 0.087 m higher and 0.019 m to the right, for the higher camera)
      rim: { centre: [-0.1155, 0.8415] },
    },
    // the rim ramp's places for this camera (see RIM_RHO in tunnel_r9_match.js): the tube's mouth at rho 0.864 of the rim's
    // screen radius, its first metre 0.0855 further in (measured at 3.0 s; match's camera: 0.9015 and 0.0991)
    rimRho: { mouth: 0.864, perMetre: 0.0855 },
    // 4. the sock's pose inside its rocking group (radians, the sock's own axes: x tips it toward the camera, y turns it, z
    //    rolls it as seen from the camera; + is counter-clockwise): the original's sock lies sideways, its toe low on the left,
    //    the cuff up to the right
    sockPose: [0.45, -0.8, -0.1],
    walls: {
      // 1. less clean and perfect: the band spacing more irregular, the wobble from the variation map stronger (0.6 bent them
      //    into blobs at checkpoint 03; 0.3 keeps concentric rings), the bright rims more broken, more white water breaking
      //    over each band's crest
      bands: { perLog: 4.3, warp: 0.3, wobble: 0.3, splash: { from: [0.09, 0.14], to: [0.4, 0.75], amount: 1.0 },
        // more, tighter rings with deeper cobalt between them (the original's layered drum rings; the nearer camera drew
        // match's bands wider on screen)
        gap: { from: [0.6, 0.86], amount: 0.95 }, edge: { amount: 0.2 }, rim: { broken: 0.8, amount: 0.4 } },
      trough: { amount: 0.42 },
      // 1. (the user's vortex kit, about 17:45 UTC) the water as broken, twisting ribbons (focusRibbonsGLSL): curl: two slow
      //    travelling twists of the band phase [amount (bands), waves round a turn, per ln r, speed (rad/s)]; wobble: from the
      //    variation map; arcs: how many arcs a band is cut into (per turn, picked per band); offset: how far each arc steps
      //    in or out (bands); colours: the original's ring zone measured (k-means at 3.0 s: azure #2396f1 13%, royal #1a60e1
      //    12%, periwinkle #6173e0 12%, pale blue #a7d8f4 11%; and cyan splash water, hue under 205 degrees, 10.6%): edge (the
      //    light cyan leading edge), royal and turq (the bodies, turqShare of the arcs turquoise), peri (periShare
      //    periwinkle), deep (from deepFrom across the ribbon), gap (from gapFrom), the edge's width (edgeTo); keep: how much of the derived water's own
      //    light and dark stays as variation; amount: over the walls' water (not in the warm core, not on warm patches)
      ribbons: { curl: [[0.36, 2, 1.6, 0.35], [0.15, 5, 3.1, 0.6]], wobble: 0.4, arcs: [4, 8], offset: 0.42,
        edge: '#86e2fb', royal: '#1a62e2', turq: '#18acf4', peri: '#5f74e0', deep: '#1c4fd2', gap: '#142f96', gapFrom: [0.86, 0.95], deepFrom: [0.68, 0.9], edgeTo: 0.26,
        turqShare: 0.6, periShare: 0.2, keep: 0.24, amount: 0.8 },
      // match's hue pull (203-216 degrees toward royal 218) turned the turquoise currents royal: nearly off
      royal: { amount: 0.1 },
      // match's mid-vortex whitening (the brightest pale blue toward white, r 0.05-0.24 W) narrowed to the inner part, so it
      // does not wash the ribbons pale
      midWhite: { r: [0.04, 0.07, 0.12, 0.17] },
      // the old regular ring lines and rims mostly off (they drew perfect circles over the ribbons)
      // and the pastel rainbow arc compact (the original's peach is a small arc: 5% of the ring zone; ours was 9%)
      rainbow: { amount: 0.45, w: 0.028 },
      // 1. the white splash flecks and streaks on the walls' water (the original: hundreds of small white bits along the
      //    rings): cells round each ring, `cols` round a turn, `rows` per band, flowing with the bands; in each cell, with
      //    probability `dens`, a white streak along the ring (length and width as shares of the cell, bent) or a round drop;
      //    r: [in, full, full to, out] in rw (screen radius round the vanishing point, in widths); fade: the cell size (in
      //    band phase per pixel) over which they fade out where they would be under about two pixels
      flecks: { cols: 96, rows: 3, dens: 0.34, len: [0.3, 0.5], wid: [0.06, 0.13], bend: 1.2, amount: 0.95, col: '#f6fbff',
        drops: { cols: 160, rows: 5, dens: 0.16, r: [0.12, 0.22] },
        r: [0.07, 0.12, 0.62, 0.8], fade: [0.22, 0.5], lit: 0.45 },
    },
  },
  // deep-merged into MATCH_WATER (tunnel_r9_match_water.js) right after it is defined, before it hands its splash, liquid and
  // hero-water settings on
  water: {
    // 2 / 3. THE USER'S CORRECTION (5 November, about 17:15 UTC; it supersedes the thick-foam requests): in the original she
    //    sits ON TOP of sparkling BLUE water: small bubbles, splashes and luminous blue-white highlights, NOT a thick white
    //    foam cushion. So the big lobes round her are gone; what is left of the bank is a few small, low splash crests at the
    //    sides and the bottom corners, shaded as glossy cobalt-to-turquoise water (focusLumpGLSL): light cyan where they
    //    face the light, a thin broken white edge on top, fine white spray dots, glints; never lavender, never a white mass
    //    (item 1, the AD's review) rag: their upper outline eaten into irregular points (from 1 - n.v [start, + noise], cells
    //    per unit radius), so they read as splash crests, not smooth blue domes; cap: their tops broken into separate small
    //    white pieces with blue water between (cells per unit radius, the share of cells with a piece, its radius as a share
    //    of the cell [min, max], bigger where the normal is up [from, to], how much; edge: the outline's white arc kept). (A
    //    white cap with round holes measured as one white mass of 2,800-4,250 px beside her: a cushion.)
    //    (step 1b, ninth session) lighter, as the swell face's water (light cyan to vivid blue): the dark cobalt read as blue
    //    pillows beside the light water round her
    crest: { low: '#3f8cf0', mid: '#78c4f8', hi: '#acdffc', white: '#f4fbff', spray: 0.9, sprayCell: 9.0, sprayShare: 0.86,
      edge: 0.85, alpha: 0.9, spec: 1.6, rag: [0.35, 0.5, 5.0],
      cap: { cell: 8.0, share: 0.7, r: [0.14, 0.34], up: [0.15, 0.6], amount: 0.95, edge: 0.6 } },
    // 3. the swell (the water's surface round her): its crest lowered in front of her body (see the water file), opaque blue
    //    water (no see-through plate over her base: match's front was 0.9 opaque, so the fur behind it read lilac); its white
    //    crest only as a broken highlight at her base
    // (item 1, with Tunnel & Lighting's new camera, 18:50 UTC: off [-0.162, 1.126, -3.1], lookY 1.655, lookX 0.142, fov 68)
    // lift: the crest 0.02 m higher, about what the spiky teeth cut out of it (focusSwellGLSL), so her base stays at about
    // y 0.85 (the original's 0.86) and her pink narrows to it as in the original (0.23 W wide 0.02 H above her lowest point;
    // the original 0.20, before 0.27). (Raised mounds either side of her body were tried with the old camera, and covered her
    // to the middle with the new one: match's mounds are kept.)
    swellFront: { dip: 0.08, full: 22, to: 48, lift: 0.02 },
    //    (the grazing-angle rim low and bluer)
    //    (the swell's upper face, between her body and its crest, is all "at the crest" for its white layer: at match's 0.95
    //    that white washed the whole face pale lavender-white (found with a colour-coded diagnostic render); 0.3 leaves
    //    broken highlights on vivid cobalt-turquoise water)
    look: { clear: 1.0, sideClear: 1.0, crest: 0.3, crestFront: 0.45, crestW: [0.025, 0.04, 0.03, 0.035], top: 0.05, rim: 0.12, frontRim: 0.5,
      sky: '#5ec8ff', glassHi: '#3fb4f8', glass: '#1f86ee', glassDeep: '#1450d0', spec: 2.2 },
    // (the Art Director's review, 18:19 UTC, item 1) the swell's face as broken, sparkling splash water, not a flat light-blue
    // sheet (focusSwellGLSL in the water file; sizes in m on the surface, cells per m):
    //   teeth: the crest cut into spiky teeth: per m along the crest; where the edge is on the profile over the crest (t: 0.5
    //          the crest, the natural silhouette from the camera about 0.53; less is further down the outer face) at the tips
    //          (hi) and in the valleys (lo); sharpness; fine notches (in t); drift along the crest (per m of flow); how much
    //          each tooth rises and falls; lobe: rounder crests and troughs along it (in t); the valleys' depth factor at her sides and
    //          in front of her;
    //   rim: short white pieces along the cut edge: width [min, max] (m), pieces per m, the share kept;
    //   lace: broken white crest arcs down the face (the original's curving white crest lines over blue; round dots read as
    //         a polka-dot print): cells per m, the share near the crest (fewer further down, over `reach` m), the arc's
    //         radius and line width [min, max] as shares of the cell, its half-span [min, max] (radians from its top), random
    //         tilt (radians), how fast they run down the face, band: the arcs clustered in bands [noise from, to, per m];
    //   rings: small clear bubble rings: cells per m, share, radius, how far down (m), colour;
    //   spark: round twinkling glints: cells per m, share, dot radius, how far down (m);
    //   water: the face's currents (light cyan, vivid blue, deeper blue), noise scale [along, down], how much
    face: {
      teeth: { per: 22.0, hi: 0.56, lo: 0.49, sharp: 1.2, fine: 0.02, lobe: 0.03, speed: 0.5, bob: 0.25, side: 1.0, front: 1.0 },
      // (step 1c: smaller, denser arcs, 8.5 per m, so there are more of them in smaller pieces; a wider rim; more glints;
      // wobble: the arc's radius wobbling along it (share), taper: the line thinning toward one end (share), so they read
      // as irregular broken crests and not a row of white commas)
      rim: { w: [0.03, 0.08], cell: 16.0, share: 0.78, amount: 1.0 },
      lace: { cell: 8.5, share: 1.0, reach: 0.75, r: [0.26, 0.48], w: [0.17, 0.28], span: [0.8, 1.7], tilt: 1.2, flow: 1.4,
        band: [0.05, 0.4, 2.2], wobble: 0.22, taper: 0.75, amount: 1.0 },
      rings: { cell: 11.0, share: 0.22, r: [0.2, 0.4], reach: 0.4, col: '#d8f4ff', amount: 0.85 },
      spark: { cell: 34.0, share: 0.85, dot: [0.12, 0.24], reach: 0.45, amount: 1.0 },
      water: { light: '#acdffc', mid: '#78c4f8', deep: '#3f8cf0', scale: [1.7, 2.4], amount: 0.8 },
      white: '#f4fbff',
      debug: 0,
    },
    // the floor round her: more sparkle (luminous blue-white highlights on vivid blue water)
    floor: { caustic: 0.55, glint: 1.3, deep: 0.85 },
    // (item 2, the AD's review item 5) the floor ahead, behind her, as the original's pale blue-white water (focusFloorGLSL in
    // the water file; the floor's own water only, not where it meets the walls): the map's lilac turned pale blue (how much),
    // the colour lifted toward the original's median there (#aad7f4; how much), and broken white crest streaks along the
    // whirlpool's circles: cells round it (along) and per unit log radius (across), the share of cells with one, length and
    // thickness [min, max] as shares of the cell, bend (a shallow arc), how white; band: the white clustered in irregular
    // bands (noise from, to; scale round and out); blue: blue dashes in the other cells (colour, share of cells, how much)
    // (tunes f2-f6: 0.35 toward #aad7f4 gave L* 76; 0.55 toward a paler #b6dcf6 with thicker streaks in wider bands and
    // stronger blue dashes gives the original's white water with blue dashes)
    floorFx: { delilac: 1.0, pale: '#b6dcf6', lift: 0.55, white: '#f6fbff',
      streak: { along: 20.0, across: 9.0, share: 0.95, len: [0.6, 1.0], thick: [0.35, 0.75], bend: 0.12, amount: 0.95,
        band: [0.2, 0.5, 3.0, 1.5], blue: { col: '#4f9ff0', share: 0.35, amount: 0.75 } } },
    splash: {
      // small splash crests, not domes: lumpier, a wide spread of sizes
      lumpSquash: 0.72, lumpBump: 0.16, lumpMin: 0.4,
      // [phi, how many, biggest radius (m), outward (m), height from the crest (m)]: nothing in front of her body (phi -20 to
      // 20 near the crest); a few small crests low in the bottom corners (match: 30 lobes up to 0.22 m). (Step 1b, ninth
      // session: the four beside her, phi +-40 to +-54, taken out: with the new camera they were two smooth blue pillows
      // 0.2 W wide at x 0.78-0.98 and a dark dome at the left edge; without them the swell's broken water with its white
      // crest arcs runs on there, as the original's water does. Small crests at her lower sides, phi 9 and -14, narrowed her
      // pink at the base to 0.19 W but read as blue blobs stuck on her fur.)
      lumps: [
        [24, 2, 0.09, 0.5, -0.27], [-22, 2, 0.09, 0.5, -0.29], [36, 2, 0.1, 0.45, -0.22], [-34, 2, 0.1, 0.45, -0.24],
      ],
      // the curling glass sheets straight in front of her body taken out (they drew a see-through sheet over her base); the
      // side splashes kept, a little smaller, as the irregular blue splashes beside her
      curls: [[36, 0.22, 0.3, 1.45, 0.12, 0], [56, 0.2, 0.28, 1.4, 0.12, 0], [-36, 0.17, 0.28, 1.4, 0.12, 0], [-56, 0.15, 0.26, 1.4, 0.12, 0]],
    },
    // small clear soap bubbles sitting on the water round her base ([phi, how many]; match: 8 in four clusters), and more fine
    // droplets of spray (match: 30)
    liquid: { foam: { bubbles: [[-58, 3], [-38, 3], [-20, 2], [-4, 2], [12, 2], [28, 3], [46, 3], [64, 2]], bubbleR: [0.025, 0.07] } },
    // (item 1: fine spray thrown up round her lower sides; 120 -> 250, the zones match's: beside her, not in front of her)
    // (step 1c: 300 FINE droplets, half match's size, 90% of them round: at match's size the droplets are drawn 2:1 tall
    // (tunnel_r7_hero_water.js) and read as falling rain beside her; the original's spray is fine white specks)
    heroWater: { splash: { count: 300, flecks: 0.9,
      zones: [[0.22, [-48, -16], [0.7, 1.6], [0.2, 0.6], [0.007, 0.016], 0.05], [0.4, [16, 50], [1.2, 2.8], [0.25, 0.8], [0.007, 0.017], 0.06],
        [0.16, [-80, -24], [0.5, 1.3], [0.15, 0.5], [0.006, 0.013], 0.03], [0.22, [24, 80], [0.7, 2.0], [0.15, 0.6], [0.006, 0.013], 0.03]] } },
    bubbles: {
      // 1. more bubbles through the tunnel, at every depth (match: 160), more of them inside the open tube (not only along
      //    the walls) and more mid-size ones, but not piled up over the centre (the open tube's ones within 20 m); the
      //    camera's place at 3.0 s with the new framing
      count: 280,
      camAt: -4.55,
      sizes: [[0.66, [0.035, 0.075]], [0.29, [0.085, 0.16]], [0.05, [0.18, 0.27]]],
      zones: [[0.26, [20, 160], [0.62, 0.93], [4.5, 34]], [0.16, [160, 222], [0.62, 0.93], [4.5, 34]], [0.16, [-42, 20], [0.62, 0.93], [4.5, 34]],
        [0.3, [-30, 210], [0.25, 0.62], [4.5, 20]], [0.02, [0, 360], [0.08, 0.4], [16, 34]]],
      // more, bolder white streaks among the bands (match: 200)
      // (item 3, the AD's review item 4 and the user's 18:26 kit: "an overcomplicated white/bubble pattern": 560 -> 220,
      // chunkier (half width 2-4 cm), some hooked (bend), turned off the band by up to rot degrees (the original's white bits
      // do not all follow the rings: along the tangent 28%, ours 74%))
      flecks: { count: 220, size: [[0.05, 0.12], [0.02, 0.04]], bend: [0.3, 2.2], rot: 35, ahead: [5.0, 34] },
    },
  },
};
