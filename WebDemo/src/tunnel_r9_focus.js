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
        // the objects re-placed for the focus camera below (Tunnel & Lighting, the Art Director's item 8; solved with
        // tools/screen4/hero_probe.cjs PICKS at 3.0 s onto the original's boxes, then measured on real 3.0 s frames with the
        // review's objects.py). [lane, metres along the path (the drum's mouth at 3.9), count, step, height, arc]:
        //  - the lower-right coin 4.4 m from the camera, 0.41 m outside the right lane, 0.47 m up: centre (0.894, 0.736), width
        //    0.214 W (the original (0.893, 0.733), 0.219; with the camera moved back it sat at (0.751, 0.723)); 0.42 m from the
        //    body riding in the right lane, in reach;
        //  - the small upper-left coin 0.3 m nearer and 0.1 m lower than match's, at (0.151, 0.472), 0.115 W (the original
        //    (0.152, 0.471), 0.123): no longer behind the left brush; 0.62-0.69 m from the body at the top of a jump from the
        //    left lane (the pick-up reach 0.82 m);
        //  - the big left coin unchanged in place (it measures (0.195, 0.607), the original (0.198, 0.602));
        //  - the gem 0.07 m nearer the middle (lane -0.314): (0.324, 0.514) against the original's (0.326, 0.511); in reach
        //    from the left lane with a jump;
        //  - the first sock 0.05 m further right (lane 2.07): centre (0.735, 0.604), the original's (0.735, 0.61); its distance
        //    from the body riding in the right lane 0.737 m (0.735 before)
        layout: { coinLines: [[-0.231, 2.77, 1, 1.0, 1.14, 0], [-0.543, 3.1, 1, 1.0, 2.025, 0], [1.07, 7.3, 1, 1.0, 1.15, 0], [2.586, 2.65, 1, 1.0, 0.47, 0],
          [2, 15.0, 1, 1.0, 0.5, 0], [1, 12.0, 3, 1.0, 0.9, 0]], extraGem: [-0.314, 5.7, 1.67], firstSock: [2.07, 3.2, 1.14] },
        // 5. the two framing brushes (decorative, not hazards) where the original has them ([u, side, angle, scale, radius]):
        //    with the camera moved back they were drawn larger and lower than the original's pom-poms (left x 0-0.236, y
        //    0.268-0.501, over the small coin; right x 0.734-1.0, y 0.393-0.671); now the left one higher on the wall and smaller
        //    (measured x 0-0.186, y 0.240-0.418; the original 0.010-0.171, 0.240-0.416) and the right one smaller and a little
        //    higher (x 0.795-1.0, y 0.393-0.606; the original 0.789-0.984, 0.394-0.610)
        r7: { deco: [[2.07, 1, 42.5, 0.378, 1.60], [3.55, -1, 9.6, 0.62, 1.744]] },
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
    // (Tunnel & Lighting, the Art Director's item 8: at [0.45, -0.8, -0.1] it was tipped toward the camera, its opening
    // showing and its cuff 17 degrees off level. Upright, turned 0.65 rad and rolled 0.18 rad: cuff level (+0.4 degrees),
    // opening hidden, the toe low on the left; its silhouette x 0.642-0.829, y 0.551-0.657 at 3.0 s, the original's
    // 0.64-0.83, 0.555-0.665.) sockLift: the pose group raised 0.047 m inside the rocking group (visual only; the pick-up
    // place is the holder's)
    sockPose: [0, -0.65, 0.18], sockLift: [0, 0.047, 0], sockScale: 0.9,
    // the second sock (match's, 7.0 m) 0.09 m further in, so it stays hidden behind the smaller first sock as in the original
    // (it showed beside it); 0.55 m from the body riding in the right lane
    secondSock: [2.726, 7.0, 0.61],
    // the gem's height (the original's 0.033 H; ours 0.045): see matchCollectibles
    gemSquash: 0.78,
    // single coins' visual size ([layout u, scale]; pick-up places unchanged): the small upper-left coin at its new place, the
    // big left coin and the lower-right coin a little smaller (gold area 4.67% of the frame at 3.0 s, the target 4.0-4.8%;
    // it was 4.96%), the small far coin beside the centre coin half size, as the original's tiny one (0.023 W)
    coinScales: [[3.1, 0.69], [2.77, 1.12], [2.65, 0.96], [15.0, 0.5]],
    walls: {
      // 1. less clean and perfect: the band spacing more irregular, the wobble from the variation map stronger (0.6 bent them
      //    into blobs at checkpoint 03; 0.3 keeps concentric rings), the bright rims more broken, more white water breaking
      //    over each band's crest
      //    (Tunnel & Lighting, the kit's problem B: 4.3 -> 3.4 bands per ln r, broader flows; with the walls alone 6.1 dark
      //    bands per ray against the original's 6.3)
      bands: { perLog: 3.4, warp: 0.3, wobble: 0.3, splash: { from: [0.09, 0.14], to: [0.4, 0.75], amount: 1.0 },
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
      //    (Tunnel & Lighting, the user's kit problem B: rebuilt without outlines, see focusRibbonsGLSL: offset now smooth noise
      //    over soft.cells [round a turn, per band]; across a band deep -> body (soft.body: in, out from, out to) with a soft
      //    light-cyan accent (soft.accent: at, half width, amount) -> the gap (gapFrom: from, full, back to deep from) -> deep)
      //    Measured at 3.0 s (the Art Director's polar_rings / ring_dark / zones, upper ring): turquoise 10.8 -> 7.3% (the
      //    original 7.5), median L* 73 -> 66 (64), darker than L* 55 17 -> 22% (30.5), hue 214 -> 219 (215); the curl a
      //    little weaker (the original's layers are more concentric: ray coherence 0.60, the walls alone now 0.61);
      //    satBoost: the flows' colours more saturated (in a render without the bubbles their darks went from 0.85 to 0.91)
      ribbons: { curl: [[0.22, 2, 1.6, 0.35], [0.1, 5, 3.1, 0.6]], wobble: 0.4, offset: 0.5,
        edge: '#6fd4fb', royal: '#1a62e2', turq: '#18acf4', peri: '#5f74e0', deep: '#1c58d6', gap: '#142f96', gapFrom: [0.72, 0.86, 0.95],
        soft: { body: [0.12, 0.5, 0.72], accent: [0.1, 0.08, 0.95], cells: [6, 1.0] },
        turqShare: 0.35, periShare: 0.08, keep: 0.15, satBoost: 1.3, amount: 0.92 },
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
      //    (Tunnel & Lighting, the Art Director's item 4 and the kit's "overcomplicated white pattern": fewer, chunkier, broken
      //    splash shapes instead of thin dashes: bigger cells (cols 96 -> 36, rows 3 -> 1.5), thicker and more bent, the
      //    outline broken by smooth noise (breakup: [cells across, cells along, how much the shape's core resists]), a crisp
      //    edge (edge: the shape's soft edge, from / to), drawn late (after the display compensation: match's glintWall tinted
      //    them pale blue). Measured with the bubble layer hidden (upper ring at 3.0 s): thickness 1.8 -> 3.7 px (the original
      //    3.2), median area 10 -> 60 px (44), 3.5 -> 4.1 pieces per 10k px (3.6). The full frame's thin dashes are the
      //    instanced streaks of the water file (FOCUS.water.bubbles.flecks), not these)
      flecks: { cols: 36, rows: 1.5, dens: 0.28, len: [0.2, 0.46], wid: [0.11, 0.22], bend: 2.2, amount: 1.0, col: '#f6fbff',
        breakup: [6, 3, 0.55], edge: [0.78, 0.9], late: true,
        drops: { cols: 64, rows: 2, dens: 0.08, r: [0.16, 0.28] },
        r: [0.07, 0.12, 0.62, 0.8], fade: [0.22, 0.5], lit: 0.3 },
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
    crest: { low: '#1a5fe0', mid: '#1f9af6', hi: '#8fe0ff', white: '#f4fbff', spray: 0.9, sprayCell: 9.0, sprayShare: 0.86,
      edge: 0.85, alpha: 0.9, spec: 1.6 },
    // 3. the swell (the water's surface round her): its crest lowered in front of her body (see the water file), opaque blue
    //    water (no see-through plate over her base: match's front was 0.9 opaque, so the fur behind it read lilac); its white
    //    crest only as a broken highlight at her base
    swellFront: { dip: 0.08, full: 22, to: 48 },
    //    (the grazing-angle rim low and bluer)
    //    (the swell's upper face, between her body and its crest, is all "at the crest" for its white layer: at match's 0.95
    //    that white washed the whole face pale lavender-white (found with a colour-coded diagnostic render); 0.3 leaves
    //    broken highlights on vivid cobalt-turquoise water)
    look: { clear: 1.0, sideClear: 1.0, crest: 0.3, crestFront: 0.45, crestW: [0.025, 0.04, 0.03, 0.035], top: 0.05, rim: 0.12, frontRim: 0.5,
      sky: '#5ec8ff', glassHi: '#3fb4f8', glass: '#1f86ee', glassDeep: '#1450d0', spec: 2.2 },
    // sparkle on the water's upper face round her base: twinkling white glints (cells per metre, the share of cells with one,
    // the dot's radius as a share of the cell, how far down the face in m) and light turquoise, most where it turns to the light
    sparkle: { cell: 24.0, share: 0.42, dot: [0.13, 0.22], reach: 0.3, amount: 0.95, white: '#f2fbff', light: '#6cd0ff', lightAmount: 0.4 },
    // the floor round her: more sparkle (luminous blue-white highlights on vivid blue water)
    floor: { caustic: 0.55, glint: 1.3, deep: 0.85 },
    splash: {
      // small splash crests, not domes: lumpier, a wide spread of sizes
      lumpSquash: 0.72, lumpBump: 0.16, lumpMin: 0.4,
      // [phi, how many, biggest radius (m), outward (m), height from the crest (m)]: nothing in front of her body (phi -20 to
      // 20 near the crest); a few small crests at her sides and low in the bottom corners (match: 30 lobes up to 0.22 m)
      lumps: [
        [40, 2, 0.11, 0.08, -0.1], [52, 2, 0.12, 0.08, -0.1], [-40, 2, 0.11, 0.08, -0.1], [-54, 2, 0.12, 0.08, -0.1],
        [24, 2, 0.09, 0.5, -0.27], [-22, 2, 0.09, 0.5, -0.29], [36, 2, 0.1, 0.45, -0.22], [-34, 2, 0.1, 0.45, -0.24],
      ],
      // the curling glass sheets straight in front of her body taken out (they drew a see-through sheet over her base); the
      // side splashes kept, a little smaller, as the irregular blue splashes beside her
      curls: [[36, 0.22, 0.3, 1.45, 0.12, 0], [56, 0.2, 0.28, 1.4, 0.12, 0], [-36, 0.17, 0.28, 1.4, 0.12, 0], [-56, 0.15, 0.26, 1.4, 0.12, 0]],
    },
    // small clear soap bubbles sitting on the water round her base ([phi, how many]; match: 8 in four clusters), and more fine
    // droplets of spray (match: 30)
    liquid: { foam: { bubbles: [[-58, 3], [-38, 3], [-20, 2], [-4, 2], [12, 2], [28, 3], [46, 3], [64, 2]], bubbleR: [0.025, 0.07] } },
    heroWater: { splash: { count: 120 } },
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
      flecks: { count: 560, size: [[0.04, 0.12], [0.012, 0.026]], ahead: [5.0, 34] },
    },
  },
};
