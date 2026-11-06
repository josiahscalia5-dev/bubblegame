// ?s3=bt (test only): the Screen 4 BREAKTHROUGH pass (6 November 2026, fourteenth session; the user's kit
// Design/ReferencePacks/2026-11-06_Screen4_Breakthrough_Kit_from_user/05_SOURCE_SPECIFIC_EXECUTION_PLAN.md). `bt` is
// everything `focus` does (step 8, tunnel_r9_focus.js) plus the settings below; `?s3=focus`, `match`, the normal game and
// every older switch are unchanged: nothing here runs without the switch (`?s3=bt` alone turns `focus` on under it).
// The ONLY target stays the ORIGINAL APPROVED Screen 4
// (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg).
//
// What the diagnosis found (Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/README.md; a Spector.js capture of
// the real 3.0 s frame, tools/screen4/spector_capture.cjs + spector_report.py, and same-frame ablations, layer_diag.cjs):
//   1. her flat silhouette comes from the swell (heroSwell, a transparent draw over 19 % of the frame), which cuts her off
//      straight at her widest point; hidden, she is a round dome. The original's waterline is at the same height (0.833 H)
//      but its dome narrows into bubbly lumps there;
//   2. the water there is one pale mid-blue (64 % of the zone in three pale blues) with white comma arcs (the swell face's
//      `lace`), where the original is two-tone: white froth 30 %, vivid azure 27 %, lavender-tinted bubbles 17 %;
//   (1 and 2: two controlled candidates REJECTED, see BT_REJECTED below; not applied)
//   3. from 4 s the hazard brushes (radius 1.0 m) fill 35-45 % of the width each and bury the tunnel; their hit test is the
//      lane alone (tunnel_s4.js: |u| < 1.25 m and side * x > 0.33), so their DRAWN size can shrink with no gameplay change;
//   4. the sock's toe is purple where the original's is blue (its stripes are violet in both).
// Settings only (plain data); the code that reads them is gated on BT_ON in the files named.
const CLASSIC = typeof window !== 'undefined' && (window.__BW_CLASSIC__ || /[?&]classic(=|&|$)/.test(location.search));
const LIST = typeof window === 'undefined' || CLASSIC ? [] : (window.__BW_S3__ || ((location.search.match(/[?&]s3=([^&]*)/) || [])[1] || '').split(','));
export const BT_ON = LIST.includes('bt');
// `bt` is `focus` plus this pass: the switch list handed on with `focus` in it, before any other module reads it (game.js
// imports this file first; every switch module reads window.__BW_S3__ before the address). Without `bt` nothing happens.
if (BT_ON && !LIST.includes('focus')) window.__BW_S3__ = [...LIST, 'focus'];

export const BT = {
  // the hazard and wall brushes' DRAWN size (tunnel_s4.js; where they knock is the lane, unchanged): the brush scaled by
  // `scale` round the point of its rim nearest the middle lane at the water, so its inner, lower edge stays in the outer
  // lane where it knocks, and the rest no longer reaches over the tunnel; `deco`: the high wall brushes (scenery) smaller.
  // (The art director's review of candidate 2: CLOSER: at 4-6 s the brushes stay at the edges and the tunnel shows)
  brushes: { scale: 0.62, deco: 0.66 },
  // the sock's purple toe recoloured as the original's blue (btSock in tunnel_r9_match.js: purple texels by hue, below
  // `split` in the model's own height; the cuff's stripes above it keep step 8's violet: `stripe` null). (Review: the toe
  // CLOSER, #4a6af5 against the original's #3f56e1, step 8 #8033e4; candidate 2's lilac stripes, #a99cf0, came out greyish
  // #8f7fdc against the original's violet #9b58de, further than step 8's #873be9, so they were reverted)
  sock: { toe: '#2f55d8', stripe: null, split: 0.0, amount: 1.0 },
};

// REJECTED and NOT applied (kept as a record; nothing reads it): candidate 2's water, judged FURTHER from the original by
// the art director and so reverted by the user's rule (Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/README.md):
// lowering the swell's crest in front of her showed her model down to 0.867-0.915 H, a taller, squarer pink block than the
// original's low dome (visible pink 67k px against the original's 44k and step 8's 50k), and the froth patches made a white
// strip under her (white at y 1300-1380: 53 % against the original's 22 % and step 8's 14 %). Candidate 1 was the same
// swell at 0.36 m. Two controlled candidates without a visible improvement: per the user's gate, a different technique is
// proposed instead (the README).
export const BT_REJECTED = {
  water: {
    swellFront: { dip: 0.2, full: 26, to: 56 },
    face: { water: { light: '#acd4f5', mid: '#53aff0', deep: '#178ee8', amount: 0.92 }, lace: { amount: 0 },
      spark: { cell: 30.0, share: 0.8, dot: [0.14, 0.3], reach: 0.6, amount: 1.0 },
      rings: { cell: 9.0, share: 0.3, r: [0.22, 0.42], reach: 0.6, col: '#c9c8f6', amount: 0.9 } },
    btFroth: { scale: [2.2, 3.0], th: [0.44, 0.66], reach: [0.04, 0.5], edge: 0.06, cell: 26.0, hole: [0.2, 0.36], holeShare: 0.35, holeK: 0.75,
      white: '#eef5fd', aqua: '#9fdcfa', holeCol: '#7fc4f4', glint: '#ffffff', amount: 1.0 },
  },
  sock: { stripe: '#a99cf0' },
};
