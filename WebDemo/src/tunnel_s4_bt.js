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
export const WATER7_ON = BT_ON && LIST.includes('water7');   // (R7, below: water6 with the spray drawn as blue drops, not white beads)
export const WATER6_ON = BT_ON && (LIST.includes('water6') || WATER7_ON);   // (R6, below: water5 with the original's contact edge and without the opening's suds)
export const WATER5_ON = BT_ON && (LIST.includes('water5') || WATER6_ON);   // (R5, below: water4 with the texture's registration corrected)
export const WATER4_ON = BT_ON && (LIST.includes('water4') || WATER5_ON);   // (R4, below: water3 with the exemplar-filled texture)
export const WATER3_ON = BT_ON && (LIST.includes('water3') || WATER4_ON);   // (R3, below: water2 plus its corrections)
export const WATER2_ON = BT_ON && (LIST.includes('water2') || WATER3_ON);
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
// ?s3=intunnel,water3 (R3; the user's brief of about 18:25 UTC: R2's remaining softness, smearing and low saturation, in the
// existing material, texture sampling and compositing). The diagnosis (45_water_r3/diag/): in the band at her base the
// face's own extras over the original's texture (sparkle dots, white rim pieces, bubble rings, the pale-cyan grazing sheen,
// the specular points) and the flow distortion cost about 2 points of saturated blue (14.8 -> 16.9 % without them; the
// original 19.6) and 2 of icy pale blue (32.4 -> 30.5; 27.5); bloom about 1 point; the floor and the overlays nothing. The
// smear is not missing detail (the strip under her: fine-detail energy 97.5 against the original's 25.3, the accepted
// 208.6) but streaks: that strip is where the original has her fur, filled by inpainting, which draws streaks toward the
// hole's middle. R3: the texture's holes filled by mirroring the original's own water about each hole's edge
// (derive_water_map.py --fill reflect), the face's extras off where the texture shows (a few twinkles kept), the distortion
// almost off (a slight shimmer), and the texture's colours lifted a little (saturation 1.1 round its luminance, a 1.06 power
// that deepens the mid-tones; white stays white) against the bloom's haze, as step 8 did for the walls
// (R3 first used foreground_water_original_r3.png, the holes filled by MIRRORING the original's water: the art director
// rejected it for a hard seam on the mirror line, a mirrored blotch and a kaleidoscope symmetry; a translated-patch fill
// changed nothing, because derive_water_map.py saved its picture before the patch step ran (found and fixed in R4). So R3c: R2's own texture (no mirror artefacts) with
// R3's other corrections: band icy 28.6 % / saturated 18.5 / mid 11.3 / white 18.4 / lavender 17.0 / mean saturation 0.35,
// the original 27.5 / 19.6 / 11.4 / 18.6 / 15.3 / 0.35; 45_water_r3/r3c)
export const WATER3 = { file: 'foreground_water_original.png', wobble: 0.004, gain: [1.1, 1.06],
  face: { spark: { amount: 0.2 }, rim: { amount: 0 }, rings: { amount: 0 } }, look: { rim: 0.03, frontRim: 0, spec: 1.0 } };
if (WATER3_ON) {
  Object.assign(WATER2, { file: WATER3.file, wobble: WATER3.wobble, gain: WATER3.gain });
  for (const k of Object.keys(WATER3.face)) WATER2.water.face[k] = { ...(WATER2.water.face[k] || {}), ...WATER3.face[k] };
  WATER2.water.look = { ...(WATER2.water.look || {}), ...WATER3.look };
}
// ?s3=intunnel,water4 (R4; the user's brief of about 18:55 UTC: R3c still soft, vertically stretched and pale round her;
// fix the actual mapping / sampling cause). The layer isolation (Previews/WebDemo/screen4_round9_match/46_water_r4/diag/): heroSwell drawn ALONE
// shows the original's bubbly water only in its top strip; below it the face shows the texture's inpainted holes, a pale
// lavender-white blur where the original has her body and long vertical streaks and a flat triangle where it has the power
// buttons (64 % of the old texture is filled, not water). She sits higher in the game than in the original and the buttons
// differ, so those fills are what is seen under her: the "soft, stretched, pale" water. R4 is R3c with ONLY the texture
// changed: the buttons masked by their own outline (the foam above them kept; filled share 51.6 %) and the holes filled
// by exemplar patches of the original's own water (derive_water_map.py --fill exemplar), the original's pixels unsoftened.
// Mapping, material, distortion, bloom and everything else as R3c.
export const WATER4 = { file: 'foreground_water_original_r4.png' };
if (WATER4_ON) WATER2.file = WATER4.file;
// ?s3=intunnel,water5 (R5): R4 with ONLY the texture's registration corrected. The texture is pinned to her water frame
// through the start camera captured at the first render (t 3.017 s). Her swell frame bobs against the camera, so at the
// compared start frame (t 3.517 s) the face shows the original's water 22 px HIGHER than the original draws it: the
// original's foam lobes, which sit at her base, are drawn partly behind her body. Measured on the face alone (no bloom, no
// grade) against the original's own pixels: NCC 0.203 as drawn, 0.954 with the water 22 px lower; the probe of the two
// matrices gives 15.6-16.9 px for points at the water's level (46_water_r4/diag/). shift: the texture read that many px
// (of the 1536 frame) higher, so its water lands 22 px lower, where the original has it at that frame. It still rides with
// her water (the same frame, so it bobs with the swell as before).
export const WATER5 = { shift: -22 };
if (WATER5_ON) WATER2.shift = WATER5.shift;
// ?s3=intunnel,water6 (R6; the user's brief of about 19:20 UTC: darker, sharper, more rounded water meeting her cleanly with
// an irregular flowing edge, not a hard cut, a zigzag or a foam cushion; the existing water corrected at its source). Measured
// on R5's start frame (Previews/WebDemo/screen4_round9_match/48_water_r6/diag/):
// 1. the contact edge: the face's top edge in front of her is its own geometric crest, 10-60 px HIGHER on her body than the
//    original's lobe line in every column, and under it the face draws its texture opaque over the filled patch where the
//    original has her body (the mottled lavender-white band). Her model goes on, lit, behind the face (to about y 1381).
//    So the face is cut where the original draws her body (body: foreground_water_original_r6_body.png, her outline from
//    the original, anti-aliased): her own fur shows down to the original's lobe outline, which is the water's edge. Its
//    colour texture (r6) is R4's with the 11 px ring round her body back to the original's own pixels (the lobe tops).
//    tools/screen4/derive_water_contact.py.
// 2. the washout: hiding the opening's soap suds and foam bubbles (opening.js, 'openingLook', drawn round her in the
//    in-tunnel start) takes the bottom water from 36.6 to 48.5 % saturated blue and its icy pale blue from 26.7 to 17.2 %
//    (the original 53.5 and 17.0); the splash lumps, curls and waterline bubbles change it by 1-2 points (kept).
// Nothing is added. The texture, registration (R5), material and everything else as R5.
export const WATER6 = { file: 'foreground_water_original_r6.png', body: 'foreground_water_original_r6_body.png', cut: 0.5, suds: false };
if (WATER6_ON) Object.assign(WATER2, { file: WATER6.file, body: WATER6.body, cut: WATER6.cut });
// ?s3=intunnel,water7 (R7, the one evidence-based refinement of R6): moving, the water round her is dominated by round white
// beads (R6 +1 s, the band at her base: white 37.1 %, saturated blue 11.8; the original 18.6 and 19.6). The same-frame
// ablation (48_water_r6/diag/): they are the game's own spray pool (game.js Particles, `fx`: the wake, bow and foam spray
// she throws, dozens a second); hiding it gives white 24.8 %, saturated 16.7; her splash meshes together change 1 point.
// The droplets are drawn with a cyan body and a 1.25 (over-white) rim and glint, which the bloom turns into glowing white
// beads. R7 draws the same particles as the original's small splashes: a clear blue drop (drop) with a small blue-white glint
// (glint, under 1 so it does not bloom), less opaque (body, rim, hl: the alpha of the body, the rim and the glint), and the
// foam puffs fainter and blue (foam: colour, alpha). The emission, counts, sizes and the game's random sequence unchanged;
// the sparkle stars (kind 2, the collect feedback) unchanged.
// (R7 first drew only kinds 0 and 1 so: the band at +1 s white 37.1 -> 37.0 %, no change. The white beads are kind 3,
// round3's "white spray droplet (bright white body, cyan edge)" that stepRound3 throws round her at ROUND5.spray's 450 a
// second (game.js; its own random numbers), alpha 0.85 and a 1.25 glint. spray: kind 3 the same way, a clear blue drop.)
export const WATER7 = { drop: [0.22, 0.55, 1.0], glint: [0.9, 0.96, 1.0], body: 0.22, rim: 0.3, hl: 0.45, foam: [0.7, 0.86, 1.0, 0.18],
  spray: { drop: [0.25, 0.58, 1.0], glint: [0.88, 0.95, 1.0], body: 0.3, rim: 0.3, hl: 0.4 } };
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
