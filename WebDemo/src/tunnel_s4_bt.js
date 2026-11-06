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
// clock: the game clock at the start (s): the approved moment's (the old start's 3.0 s after the tap), so the sock's rocking,
// the brushes' turning and the water's flow are in its pose on the start screen (the art director's review: the sock was side-on)
export const INTUNNEL = { u: 1.592, speed: 7.21, clock: 3.0 };
// ?s3=intunnel,domes (or bt,domes): real 3D translucent bubble domes along her base (tunnel_s4_domes.js), the visual
// correction tested on top of the in-tunnel start. REJECTED (6 November, the art director's reviews of both controlled
// candidates: candidate 1 'about the same, not yet closer', milky balloons hiding her fur; candidate 2 'not clearly closer',
// clear soap bubbles, only the lavender share nearer the original): NOT part of ?s3=intunnel, kept behind its own `domes`
// flag as a record (Previews/WebDemo/screen4_round9_match/41_bubble_domes/README.md). Colours sampled from the ORIGINAL at her base (y 1220-1340, x 120-680:
// lavender 20 % of the zone, k-means #a295ee 34 %, #b9b6f2 27 %, #dcd2fa 26 %, #8879db 14 %; its aqua #a6d1f5, #c6e6fa,
// #87b9ed, #5ea2eb). Sizes and places from the original's domes there (about 30-65 px radius, 0.07-0.15 m at the swell's
// front): [phi round her (degrees, + screen-left), radius (m), out from the crest (m), sink (share of the radius below the
// crest), kind (0 a lavender soap dome, 1 a light aqua water dome)]
// ?s3=intunnel,bank (the user's brief of 6 November, about 14:50 UTC: "broad, rounded, animated blue wave forms, varied
// transparent cyan-white crests, and a small number of properly shaded lavender-blue bubble domes with clear centers,
// luminous rims"): the splash bank's existing water lobes (spLumps, tunnel_r8_splash.js, shaded by focusLumpGLSL) as a bank
// of rounded glossy blue lobes round her base and sides (focus kept 4 small ones low in the corners), in the original's
// water colours, their outlines rounded (focus cut them into spiky points), fewer and varied white crest pieces; plus 3
// clear lavender domes at her sides only. NOT the rejected ideas: no lowering, no white strip, nothing in front of her body.
export const BANK_ON = BT_ON && LIST.includes('bank');
export const BANK = {
  water: {
    // [phi round her (degrees, + screen-left), how many, biggest radius (m), outward from the crest (m), height from it (m)]
    splash: { lumps: [[30, 3, 0.13, 0.15, -0.04], [-30, 3, 0.13, 0.15, -0.04], [44, 3, 0.15, 0.25, -0.08], [-44, 3, 0.15, 0.25, -0.08],
      [58, 3, 0.18, 0.4, -0.18], [-58, 3, 0.18, 0.4, -0.18], [12, 2, 0.08, 0.25, -0.09], [-12, 2, 0.08, 0.25, -0.09]], lumpMin: 0.55, lumpSquash: 0.8 },
    // the lobes' water: the original's foreground colours (k-means #178ee8, #53aff0, #acd4f5; white #e5effa)
    crest: { low: '#1a6fe3', mid: '#3d9cf0', hi: '#9fd8fb', white: '#f4fbff', alpha: 0.9, spec: 2.2, spray: 0.9, sprayShare: 0.82, edge: 0.7,
      rag: [0.72, 0.22, 4.0], cap: { cell: 6.0, share: 0.42, r: [0.12, 0.3], up: [0.3, 0.7], amount: 0.9, edge: 0.6 } },
  },
  // [phi, radius (m), out (m), sink (share of the radius), kind]: at her sides only, never in front of her body
  domes: [[34, 0.085, 0.08, 0.3, 0], [-36, 0.075, 0.08, 0.3, 0], [50, 0.06, 0.12, 0.25, 0]],
};
export const DOMES_ON = BT_ON && (LIST.includes('domes') || BANK_ON);
// (the bank, candidates W1 and W1b: REJECTED by eye: smooth pale matte blue pillows beside her, not the original's glossy
// water; its lobes are lit and pass through the grade and tone mapping, which wash them out. Not part of ?s3=intunnel)
// (REJECTED, 6 November, the art director: W2 too blue; W2b 'smooth, evenly sized pale-blue pillows packed like
// cobblestones ... a still pile of balloons, not splashing water': not part of ?s3=intunnel; a record behind its flag)
// ?s3=intunnel,wave: a DIFFERENT technique after the two failed lobe-object candidates: the swell's own water face
// (heroSwell, focusSwellGLSL) draws the original's rounded water lobes itself, in place of its white comma arcs (`lace`):
// a field of rounded domes on the face's surface coordinates (along the crest s, down the face), flowing down it, each
// shaded as a lit bulge (its 2D normal from the dome's profile): cobalt in the gaps, azure bodies, pale cyan rims, a white
// glint upper left; a share of them lavender bubbles with clear centres and white rims. Its colours are the screen's,
// through the inverse display transform (mtUndisplay), so they land as the original's (the step that washed W1 out).
// Geometry, waterline and character unchanged.
//   cell: domes per m [along, down]; r: a dome's radius [min, max] as a share of its cell; share: cells with a dome; flow:
//   how fast they run down the face (m/s); reach: m down the face the domes cover; lav: the share of lavender bubbles
export const WAVE_ON = BT_ON && LIST.includes('wave');
// (REJECTED, 6 November: C1 curled toward the camera and showed as edge-on slivers; C2, standing taller (tune in
// Previews/WebDemo/screen4_round9_match/43_curling_crests/c2/tune.json), read as 'pale, frosted, vertically streaked fins ...
// no visible curl and no bright white lip' (the art director), more pale milky blue (Screen Matcher 17.1 -> 18.7 %, the
// original 11.8). Not part of ?s3=intunnel; a record behind its flag)
// ?s3=intunnel,crest (the user's approval of 6 November, about 16:25 UTC: ONE controlled experiment with real curling
// water-crest geometry round her, reusing the existing curling splash sheets; not replacing the accepted water until it is
// visibly closer): the splash bank's curling sheets (spCurls, tunnel_r8_splash.js: thin real 3D sheets rising from the
// swell's crest, leaning out and curling over, a broken white lip, streaks running up them, animated by the flow, her
// swerves and landings) placed as the original's crests: pairs rising beside her lower body and out to the screen's
// lower corners, taller and more curled than focus's four, and two small low curls at the front contact, under her base so
// her body stays clear; the sheets in the original's cobalt and cyan with bright white lips. Nothing else changes.
//   curls: [phi (degrees round her, + screen-left), height (m), width (m), curl (radians at the top), lean (radians outward
//   at the base), shift along the crest (m)]
export const CREST_ON = BT_ON && LIST.includes('crest');
// ?s3=intunnel,water2 (the user's brief of 6 November, about 17:00 UTC: correct the EXISTING water, no new objects):
// heroSwell's own face material takes the original's foreground water (tunnel_s4_water2.js). y0: the texture's top in the
// frame (derive_water_map.py's Y0); flow / wobble: the slow animated distortion (texture units per s; how far); amount: how
// much of the face's colour it is; water.face: the face's procedural comma arcs off (the original's own whites are in the
// texture), its bubble rings lower
export const WATER2_ON = BT_ON && LIST.includes('water2');
// (candidate c1: wobble 0.025, amount 0.92, the face's spiky crest, white rim pieces and sparkle unchanged; the art director:
// "moderately closer", the remaining gaps a white zigzag at her base and too much icy pale blue. R2, the user's brief of
// about 17:45 UTC, the same candidate refined, only the existing surface: the crest rounded (teeth sharpness 1.2 -> 0.6, no
// fine notches, rounder lobes), the white rim pieces 1.0 -> 0.35, the sparkle 1.0 -> 0.6, a gentler distortion, the
// texture full strength, and the crest in front of her 3 cm higher (swellFront lift 0.02 -> 0.05) so the original's water
// flows over her lower edge. In the band at her base: icy pale blue 38.7 -> 32.4 % (the original 27.5), white 18.7 -> 21.2
// (18.6), lavender 10.7 -> 16.0 (15.3); 44_water_material/r1, r2)
export const WATER2 = { file: 'foreground_water_original.png', y0: 0.72, flow: 0.06, wobble: 0.012, amount: 1.0,
  water: { face: { lace: { amount: 0 }, rings: { amount: 0.3 }, teeth: { sharp: 0.6, fine: 0.0, lobe: 0.06 }, rim: { amount: 0.35 },
    spark: { amount: 0.6 } }, swellFront: { lift: 0.05 } } };
{ const t = typeof window !== 'undefined' && window.__BW_S3_TUNE__ && window.__BW_S3_TUNE__.water2; if (t) Object.assign(WATER2, t); }   // (test tunes only)
export const CREST = {
  water: { splash: {
    curls: [[22, 0.2, 0.26, 1.7, 0.18, 0], [-22, 0.18, 0.26, 1.7, 0.18, 0], [34, 0.26, 0.32, 1.6, 0.14, 0], [-34, 0.24, 0.32, 1.6, 0.14, 0],
      [50, 0.22, 0.32, 1.5, 0.12, 0], [-50, 0.2, 0.3, 1.5, 0.12, 0], [66, 0.18, 0.3, 1.4, 0.1, 0], [-66, 0.16, 0.28, 1.4, 0.1, 0],
      [6, 0.08, 0.2, 1.8, 0.25, 0], [-8, 0.07, 0.2, 1.8, 0.25, 0]],
    curlAlpha: 0.85, curlLip: 1.0,
    colours: { glassDeep: '#1466d8', glass: '#3aa8f4', white: '#e6f4ff', lip: '#ffffff' },
  } },
};
// (W2: gap #178ee8, body #3d9ff0, light #9fd3f7, rim #cfeafc, glint [0.86, 0.95], share 0.85, r [0.42, 0.62], lav 0.16: the
// rounded lobes right, but too blue: in the foreground water saturated blue 47.8 % against the original's 24.6 %, white 11 %
// against 16.8 %, LPIPS 0.708 against the previous 0.656. W2b: the original's own balance there (k-means: white #e5effa 30 %,
// pale #acd4f5 24 %, azure #53aff0 18 %, lavender #8fa6e9 17 %, cobalt #178ee8 9 %): lighter bodies, bigger white glints and
// rims, thin cobalt gaps (more and bigger domes), a fifth of them lavender)
export const WAVE = { cell: [7.0, 6.0], r: [0.5, 0.68], share: 0.95, flow: 0.9, reach: 1.1, lav: 0.2,
  gap: '#2a8ae8', body: '#5fb2f2', light: '#b8def8', rim: '#eaf4fd', white: '#ffffff', lavBody: '#98a4ec', lavRim: '#e8e6fc',
  glint: [0.7, 0.88], amount: 1.0 };
export const DOMES = {
  // (first build: the radii below / 1.106, body alpha [0.42, 0.5], lavender #a295ee, highlight 0.9: too small and too faint by
  // eye, glassy pale circles. Then 12 Optuna trials on the real game, tools/screen4/optuna_domes.py; LPIPS hardly moved, 0.567-
  // 0.595 round her base, so the choice was by eye among the best-scored: trial 8, lavender round her base 6.7 % against the
  // original's 6.5 %; trial 11's bigger domes hid her base, trial 4's were pale. Previews/WebDemo/screen4_round9_match/41_bubble_domes/)
  // (candidate 2, the art director's review of trial 8: 'about the same, not yet closer': milky, nearly opaque balloons hiding
  // her fur (visible pink 29 -> 17 %, the original's 29), no bright rims, the big centre dome a sticker. So: clear violet-tinted
  // centres (body alpha 0.73 -> 0.38), near-white Fresnel rims (rim #ffffff, alpha 0.55 -> 0.85, thinner: power 2.2 -> 3), the
  // centre dome (index 2) 30 % smaller, the lavender deepened at each dome's foot (foot #87b9ed -> #7a6cd6))
  list: [[16, 0.1106, 0.03, 0.35, 0], [27, 0.0664, 0.05, 0.3, 0], [2, 0.093, 0.05, 0.45, 1], [-9, 0.0774, 0.05, 0.3, 0], [-20, 0.0996, 0.03, 0.35, 0], [-31, 0.0719, 0.04, 0.3, 0], [37, 0.0774, 0.02, 0.3, 0], [-43, 0.0885, 0.02, 0.35, 1]],
  look: { lavender: '#8d7fdf', top: '#dcd2fa', foot: '#7a6cd6', aqua: '#a6d1f5', rim: '#ffffff', film: 0.35, rimPow: 3.0, rimAlpha: 0.85,
    alpha: [0.38, 0.46], arc: [0.55, 0.85], arcK: 0.912, glintPow: 60 },
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
