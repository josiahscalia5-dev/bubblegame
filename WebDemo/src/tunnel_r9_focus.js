// ?s3=focus (test only): the user's FOCUSED CORRECTION PASS on Round 9 (5 November 2026; the brief:
// Design/ReferencePacks/2026-11-05_Screen4_Focused_Correction_Pass_Brief/README.md). `focus` is everything `match` does
// (tunnel_r9_match.js, tunnel_r9_match_water.js) plus the settings below; `?s3=match` and everything older are unchanged:
// nothing here runs without the switch. The ONLY target stays the ORIGINAL APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg).
//
// The five items, in the user's order:
//   1. the tunnel: more energetic, irregular swirling water, many more white splash flecks and streaks, more bubbles at
//      every depth (the walls' band settings, a white fleck layer on the walls' water, more instanced streaks and bubbles);
//   2. the foam: thick, bright, aqua-white froth, not glassy lavender domes (the bank's lobes reshaded as froth);
//   3. the pink character's framing: larger in the frame and clearly ON TOP of the water (the camera closer and lower; the
//      foam and the curling sheets in front of her body lowered, so the water meets her at her base); her model unchanged;
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
      bands: { warp: 0.3, wobble: 0.3, rim: { broken: 0.8 }, splash: { from: [0.09, 0.14], to: [0.4, 0.75], amount: 1.0 } },
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
    // 2. the bank's lobes as thick froth (focusLumpGLSL): bright white where the light falls and where they face up,
    //    aqua-white on the sides, light aqua-blue only in the creases and where they meet the water; a dense bubbly texture
    //    (two sizes of round foam bubbles, each a white rim round a pale aqua inside, and a fine web), a few soap-film tints;
    //    nearly opaque
    froth: { white: '#f7fcff', side: '#b3e1fc', shade: '#64b4ef', crease: '#3d9cea', water: '#2f96ee',
      cells: [6.0, 12.0], bubble: 1.0, inside: [0.62, 0.8, 0.95], web: 0.4, film: 0.12, alpha: 0.97, rim: 0.9, spec: 1.2, lit: [0.2, 0.6, 0.66, 0.95] },
    // 3. the swell (the water's surface round her): its crest lowered in front of her body (see the water file), opaque (no
    //    see-through plate over her base: match's front was 0.9 opaque, so the fur behind it read lilac), and a full froth
    //    rim at her base in front (match kept it at half there)
    swellFront: { dip: 0.08, full: 22, to: 48 },
    look: { clear: 1.0, sideClear: 1.0, crestFront: 1.0, crestW: [0.03, 0.06, 0.05, 0.05], frontRim: 0.3 },
    splash: {
      // lumpier and puffier (froth, not smooth domes), a wider spread of sizes
      lumpSquash: 0.78, lumpBump: 0.17, lumpMin: 0.35,
      // [phi, how many, biggest radius (m), outward (m), height from the crest (m)]: the lobes straight in front of her body
      // (phi -16 to 9, 37-62% across) lowered and pushed out, so her lower body shows and the foam meets her at her base; the
      // sides kept high (foam up her sides, higher on the left, as the original's); more, smaller lobes further out in front
      // and at the sides, so the bank is a full froth across the bottom
      // (they ride the swell's crest, so the front ones follow it down: a low froth cushion at her base, phi -16 to 9)
      lumps: [
        [34, 5, 0.22, 0.05, -0.06], [46, 4, 0.21, 0.07, -0.08], [22, 4, 0.16, 0.06, -0.08], [9, 3, 0.13, 0.03, -0.05], [-4, 3, 0.13, 0.03, -0.06],
        [-16, 3, 0.13, 0.03, -0.07], [-28, 4, 0.18, 0.08, -0.16], [-42, 4, 0.2, 0.06, -0.09], [-56, 3, 0.17, 0.06, -0.09], [60, 3, 0.15, 0.06, -0.08],
        [16, 4, 0.18, 0.3, -0.18], [-12, 4, 0.18, 0.32, -0.2], [3, 4, 0.17, 0.52, -0.26], [40, 3, 0.18, 0.3, -0.12], [-36, 3, 0.18, 0.3, -0.14],
        [26, 3, 0.17, 0.55, -0.24], [-24, 3, 0.17, 0.55, -0.26],
      ],
      // the curling glass sheets straight in front of her body taken out (they drew a see-through sheet over her base); the
      // side splashes kept
      curls: [[36, 0.27, 0.36, 1.45, 0.12, 0], [56, 0.24, 0.32, 1.4, 0.12, 0], [-36, 0.2, 0.32, 1.4, 0.12, 0], [-56, 0.17, 0.28, 1.4, 0.12, 0]],
    },
    bubbles: {
      // 1. many more bubbles through the tunnel, at every depth (match: 160), more of them inside the open tube (not only
      //    along the walls) and more mid-size ones; the camera's place at 3.0 s with the new framing
      count: 340,
      camAt: -4.55,
      sizes: [[0.66, [0.035, 0.075]], [0.29, [0.085, 0.16]], [0.05, [0.18, 0.27]]],
      zones: [[0.26, [20, 160], [0.62, 0.93], [4.5, 34]], [0.16, [160, 222], [0.62, 0.93], [4.5, 34]], [0.16, [-42, 20], [0.62, 0.93], [4.5, 34]],
        [0.34, [-30, 210], [0.25, 0.62], [4.5, 28]], [0.08, [0, 360], [0.08, 0.4], [16, 34]]],
      // more, bolder white streaks among the bands (match: 200)
      flecks: { count: 560, size: [[0.04, 0.12], [0.012, 0.026]], ahead: [5.0, 34] },
    },
  },
};
