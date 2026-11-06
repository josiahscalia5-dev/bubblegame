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
// ?s3=intunnel (the user's directive of 6 November, about 13:30 UTC: "the playable game must start directly inside this
// blue laundry tunnel, with my pink character traveling on top of the water. No girl scene, no extra opening, and no
// separate swimming sequence"): `bt` plus the run STARTING at the approved inside-tunnel viewpoint (game.js, INTUNNEL).
export const INTUNNEL_ON = LIST.includes('intunnel');
export const BT_ON = LIST.includes('bt') || INTUNNEL_ON;
// `bt` is `focus` plus this pass: the switch list handed on with `bt` and `focus` in it, before any other module reads it
// (game.js imports this file first; every switch module reads window.__BW_S3__ before the address). Without `bt` or
// `intunnel` nothing happens.
if (BT_ON && !(LIST.includes('focus') && LIST.includes('bt'))) window.__BW_S3__ = [...new Set([...LIST, 'bt', 'focus'])];
// (intunnel: no painted Screen 3 picture at Tap to Start; the live 3D tunnel is the start screen)
if (INTUNNEL_ON) window.__BW_OPENING_OFF__ = [...new Set([...(window.__BW_OPENING_OFF__ || []), 'art'])];
// the start: where she waits at Tap to Start and where every lap begins (m along the path; the drum's mouth is at 3.9), and
// her speed the moment the run starts (m/s). These are the approved hero moment's: at seed 7, 3.0 s after the tap from the
// old start on the slide, she was at 1.592 m going 7.21 m/s (layer_diag.cjs state), with the camera at its drum framing
// (its blend ends at -0.4 m) and the hero water up (position-based). So the start screen is that composition, and she
// moves on at once from it.
export const INTUNNEL = { u: 1.592, speed: 7.21 };
// ?s3=intunnel,domes (or bt,domes): real 3D translucent bubble domes along her base (tunnel_s4_domes.js), the visual
// correction tested on top of the in-tunnel start. Colours sampled from the ORIGINAL at her base (y 1220-1340, x 120-680:
// lavender 20 % of the zone, k-means #a295ee 34 %, #b9b6f2 27 %, #dcd2fa 26 %, #8879db 14 %; its aqua #a6d1f5, #c6e6fa,
// #87b9ed, #5ea2eb). Sizes and places from the original's domes there (about 30-65 px radius, 0.07-0.15 m at the swell's
// front): [phi round her (degrees, + screen-left), radius (m), out from the crest (m), sink (share of the radius below the
// crest), kind (0 a lavender soap dome, 1 a light aqua water dome)]
export const DOMES_ON = BT_ON && LIST.includes('domes');
export const DOMES = {
  list: [[16, 0.10, 0.03, 0.35, 0], [27, 0.06, 0.05, 0.3, 0], [2, 0.12, 0.05, 0.45, 1], [-9, 0.07, 0.05, 0.3, 0],
    [-20, 0.09, 0.03, 0.35, 0], [-31, 0.065, 0.04, 0.3, 0], [37, 0.07, 0.02, 0.3, 0], [-43, 0.08, 0.02, 0.35, 1]],
  look: { lavender: '#a295ee', top: '#dcd2fa', foot: '#87b9ed', aqua: '#a6d1f5', rim: '#f4f2ff', film: 0.35, rimPow: 2.2, rimAlpha: 0.55,
    alpha: [0.42, 0.5], arc: [0.55, 0.85], arcK: 0.9, glintPow: 60 },
};
{ const tune = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.domes; if (tune) for (const k of Object.keys(tune)) DOMES[k] = typeof tune[k] === 'object' && !Array.isArray(tune[k]) ? { ...DOMES[k], ...tune[k] } : tune[k]; }   // (test tunes only)

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
