# Screen 4 water candidate `?s3=intunnel,mounds`: REJECTED, not in `?s3=intunnel` (6 November 2026, fifteenth session)

- **The user's brief (about 15:10 UTC):** the water directly round her as the original's: large, rounded, connected,
  glossy blue water formations, a natural contact boundary, white highlights, a few lavender-blue bubble domes. The
  approved waterline and placement kept. ONE reversible candidate; revert it unless it is noticeably closer.
- **The target:** only `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.

## The idea

Every rejected water candidate (water lowered, white strip, the domes, W1/W1b's bank lobes, W2/W2b's domes painted on the
face) kept the swell's straight top edge across her base, which squares her off. Here the swell's own cut edge
(`focusSwellGLSL`'s spiky teeth, 22 per m, too small to read) is cut into a few large ROUND mounds (5.5 per m, widths and
heights varied, slowly rising and falling), and each mound is shaded as a glossy lobe (`moundGLSL`). Settings `MOUNDS` in
`WebDemo/src/tunnel_s4_bt.js`; shader in `tunnel_r9_match_water.js`, emitted only when `teeth.round` is set.

## What was tried (all at the in-tunnel start, seed 7; `variants/`)

| variant | change | by eye |
|---|---|---|
| first | round mounds, waterline as approved | edge rounded, but low gentle ripples; dome shading invisible |
| A, C | crest 4 cm up, valleys down, fewer white commas | big rounded lobes, but they hide too much of her |
| B, D, E | crest 2 cm up (average waterline kept) | the rounded contact is right; the lobes pale periwinkle |
| red diagnostic | the mounds painted pure red | the shading covered only a thin band along the edge: near her base the face is seen almost edge-on |
| F, G | the lobe's body filling 0.3 / 0.45 m down the face | vertical pleats: a curtain (forbidden) |
| H (the build) | lit top to bottom, side shading soft | rounded contact, but smooth matte gel, less sparkle |

## Verdict: not noticeably closer, so not accepted

- **Closer:** the contact line. A few connected rounded water lobes of varied height cover her base's square corners;
  the average waterline is unchanged.
- **Further:** the material. Painted on the swell's face, the lobes read as smooth matte gel or folded cloth and lose the
  bright white sparkle that makes the accepted build read as water. Sheets: `sheets/01_...` (start), `02_...` (1 s after
  the tap, moving), `03_CLOSEUP_water_contact.jpg`. No video was recorded for a rejected candidate.
- **The technical limitation:** the original's mounds stand up TOWARD the camera. Anything drawn in the swell face's own
  surface coordinates is either squeezed into a thin strip (the face near the crest is seen edge-on) or stretched into
  columns. A shader on the existing surface cannot make that shape.
- **Proposed next (for the user's decision):** real geometry. ONE connected, displaced bank mesh of lobes facing the
  camera round her front and sides (not separate spheres), animated in its vertex shader, shaded with the swell's screen
  colours (`mtUndisplay`, so the grade cannot wash it out, W1's failure), fresnel white rims, glints and sparkle, plus 2-3
  lavender lobes with clear centres. Procedural three.js, not Tripo: a static Tripo GLB cannot flow with the swell.

## Proof that nothing accepted changed

- The final bundle (md5 `abe13969...`) draws `?s3=intunnel` (Tap to Start, 1, 2, 3 s) and `?s3=focus` (Tap to Start,
  3, 4 s) with **0 differing pixels** against the accepted build `cb69eac` (`tools/models/game_eval.cjs`, seed 7, raw
  canvas); no console errors.
- **Pitfall found:** `game_eval.cjs` frames depend on how time is stepped. `TIMES=4.0` and `TIMES=3.0,4.0` differ at
  4.0 s (116,067 px for the same bundle). Compare identity frames only with identical `TIMES` lists.
- Earlier this session, the head bundle (with the rejected W1/W2 code behind its `bank` / `wave` flags, autosaved after
  `cb69eac` when the old account hit its limit) drew `intunnel`, `bt`, `focus`, `match` and the normal game identical to
  `cb69eac` in all 15 frames.
