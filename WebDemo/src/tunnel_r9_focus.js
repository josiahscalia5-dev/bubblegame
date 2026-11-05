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
          // 3 / 5. The camera 0.35 m nearer the character and 0.15 m lower, aimed 0.08 m lower, the view 1 degree wider: she
          // is drawn about 1.15 times larger (the original draws her larger than match did: pink 4.16% of the frame against
          // 3.06%) and higher (her top at 0.68 of the height, as the original's), and the tunnel comes a little closer. Her
          // model and her size in the world are unchanged. (Swept in real renders: tools/screen4/cam_sweep.cjs.)
          camera: { off: [-0.11, 0.93, -2.25], lookY: 1.54, fov: 73 },
        },
      },
    },
    // 4. the sock's pose inside its rocking group (radians, the sock's own axes: x tips it toward the camera, y turns it, z
    //    rolls it as seen from the camera; + is counter-clockwise): the original's sock lies sideways, its toe low on the left,
    //    the cuff up to the right
    sockPose: [0.45, -0.8, -0.1],
    walls: {
      // 1. less clean and perfect: the band spacing more irregular, the wobble from the variation map stronger (0.6 bent them
      //    into blobs at checkpoint 03; 0.3 keeps concentric rings), the bright rims more broken, more white water breaking
      //    over each band's crest
      bands: { perLog: 4.3, warp: 0.3, wobble: 0.3, rim: { broken: 0.8 }, splash: { from: [0.09, 0.14], to: [0.4, 0.75], amount: 1.0 },
        // more, tighter rings with deeper cobalt between them (the original's layered drum rings; the nearer camera drew
        // match's bands wider on screen)
        gap: { from: [0.6, 0.86], amount: 0.95 } },
      trough: { amount: 0.42 },
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
      // 1. many more bubbles through the tunnel, at every depth (match: 160), more of them inside the open tube (not only
      //    along the walls) and more mid-size ones; the camera's place at 3.0 s with the new framing
      count: 340,
      camAt: -4.55,
      sizes: [[0.66, [0.035, 0.075]], [0.29, [0.085, 0.16]], [0.05, [0.18, 0.27]]],
      zones: [[0.26, [20, 160], [0.62, 0.93], [4.5, 34]], [0.16, [160, 222], [0.62, 0.93], [4.5, 34]], [0.16, [-42, 20], [0.62, 0.93], [4.5, 34]],
        [0.36, [-30, 210], [0.25, 0.62], [4.5, 28]], [0.03, [0, 360], [0.08, 0.4], [16, 34]]],
      // more, bolder white streaks among the bands (match: 200)
      flecks: { count: 560, size: [[0.04, 0.12], [0.012, 0.026]], ahead: [5.0, 34] },
    },
  },
};
