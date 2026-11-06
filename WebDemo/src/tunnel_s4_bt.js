// ?s3=bt (test only): the Screen 4 BREAKTHROUGH pass (6 November 2026, fourteenth session; the user's kit
// Design/ReferencePacks/2026-11-06_Screen4_Breakthrough_Kit_from_user/05_SOURCE_SPECIFIC_EXECUTION_PLAN.md). `bt` is
// everything `focus` does (step 8, tunnel_r9_focus.js) plus the settings below; `?s3=focus`, `match`, the normal game and
// every older switch are unchanged: nothing here runs without the switch (`?s3=bt` alone turns `focus` on under it).
// The ONLY target stays the ORIGINAL APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg).
//
// What the diagnosis found (Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/README.md; a Spector.js capture of
// the real 3.0 s frame, tools/screen4/spector_capture.cjs + spector_report.py, and same-frame ablations, layer_diag.cjs):
//   1. her FLAT silhouette is not her model: the swell (heroSwell, a transparent draw over 19 % of the frame) rises in
//      front of her as a wall of water and cuts her off at about 0.84 H; hidden, she is the original's round fluffy dome;
//   2. the water there is one pale mid-blue (64 % of the zone in three pale blues) with white comma arcs (the swell face's
//      `lace`), where the original is two-tone: white froth 30 %, vivid azure 27 %, lavender-tinted bubbles 17 %;
//   3. from 4 s the hazard brushes (radius 1.0 m) fill 35-45 % of the width each and bury the tunnel; their hit test is the
//      lane alone (tunnel_s4.js: |u| < 1.25 m and side * x > 0.33), so their DRAWN size can shrink with no gameplay change;
//   4. the sock is purple where the original's is white with lilac stripes and a blue toe.
// Settings only (plain data); the code that reads them is gated on BT_ON in the files named.
const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const BT_ON = LIST.includes('bt');
// `bt` is `focus` plus this pass: the switch list handed on with `focus` in it, before any other module reads it (game.js
// imports this file first; every switch module reads window.__BW_S3__ before the address). Without `bt` nothing happens.
if (BT_ON && !LIST.includes('focus')) window.__BW_S3__ = [...LIST, 'focus'];

export const BT = {
  // deep-merged into MATCH_WATER (tunnel_r9_match_water.js) right after FOCUS.water, before the test tune
  water: {
    // 1. she sits ON TOP of the water: the swell's crest lowered in front of her body 0.36 m (focus: 0.08), fully within 26
    //    degrees of straight ahead, none beyond 56 (focus: 22, 48), so her round body shows down to her base and the water
    //    meets her there; her sides keep their splash (live tunes at 3.0 s: 0.36 showed her down to 0.915 H, too tall; 0.26
    //    0.885 H; 0.20 0.867 H, her round dome narrowing into the froth at her base, as the original at 0.833 with its froth)
    swellFront: { dip: 0.2, full: 26, to: 56 },
    face: {
      // 2. the face's water two-tone like the original's (its zone, k-means: #e5effa 30 %, #acd4f5 24 %, #53aff0 18 %,
      //    #8fa6e9 17 %, #178ee8 9 %): vivid azure currents with light sky between, not one pale blue
      water: { light: '#acd4f5', mid: '#53aff0', deep: '#178ee8', amount: 0.92 },
      // the white comma arcs off (the user: "no flat white shards"); the froth below replaces them
      lace: { amount: 0 },
      spark: { cell: 30.0, share: 0.8, dot: [0.14, 0.3], reach: 0.6, amount: 1.0 },
      rings: { cell: 9.0, share: 0.3, r: [0.22, 0.42], reach: 0.6, col: '#c9c8f6', amount: 0.9 },
    },
    // the bubbly white-aqua froth on the swell's face (btFrothGLSL in the water file): irregular patches of white froth made
    // of small round bubbles (white walls, light sky holes with a glint), aqua at their edges, most along the crest and in
    // bands down the face, vivid blue water between them
    //   scale: noise cells [along, down] per m; th: the noise threshold [at the crest, far down]; reach: m down the face over
    //   which it goes from the first to the second; edge: the patch edge's width (noise units); cell: bubbles per m; hole: a
    //   bubble's radius [min, max] as a share of its cell; holeShare: the share of cells WITHOUT a hole; holeK: how blue
    btFroth: { scale: [2.2, 3.0], th: [0.44, 0.66], reach: [0.04, 0.5], edge: 0.06, cell: 26.0, hole: [0.2, 0.36], holeShare: 0.35, holeK: 0.75,
      white: '#eef5fd', aqua: '#9fdcfa', holeCol: '#7fc4f4', glint: '#ffffff', amount: 1.0 },
  },
  // the hazard and wall brushes' DRAWN size (tunnel_s4.js; where they knock is the lane, unchanged): the brush scaled by
  // `scale` round the point of its rim nearest the middle lane at the water, so its inner, lower edge stays in the outer
  // lane where it knocks, and the rest no longer reaches over the tunnel; `deco`: the high wall brushes (scenery) smaller
  brushes: { scale: 0.62, deco: 0.66 },
  // the sock's purple parts (its toe and cuff stripes) recoloured as the original's: the toe blue, the stripes lilac
  // (btSockGLSL in tunnel_r9_match.js: purple texels by hue; below `split` in the model's height the toe, above it the stripes)
  sock: { toe: '#2f55d8', stripe: '#a99cf0', split: 0.0, amount: 1.0 },
};
