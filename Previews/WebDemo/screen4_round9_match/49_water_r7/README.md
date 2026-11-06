# Screen 4 water R7 (`?s3=intunnel,water7`), 6 November 2026, fifteenth session; FOR THE USER'S APPROVAL

- **The target:** the ORIGINAL approved Screen 4 only.
- **The user's brief (about 19:20 UTC):** the foreground water round the pink character darker, sharper, more rounded, more
  naturally structured, meeting her cleanly with an irregular flowing edge (no hard horizontal cut, no jagged white zigzag,
  no separate foam cushion), also while moving. Fix it at the source with the existing tools; nothing new added; one focused,
  reversible correction (R6, `../48_water_r6/`) and at most one evidence-based refinement (R7, this).
- **Status:** a test switch only, NOT merged into `?s3=intunnel`, waiting for the user's decision.
  - Rollback: do not use `water7` (`water6` = R6, `water5` = R5).
  - The accepted `?s3=intunnel`, R5 and R6 are unchanged on the final bundle `46fad479`: 0 differing pixels
    (`identity_proof_raw.txt`).

## What R7 is

- **R6** (`../48_water_r6/README.md`):
  - the existing water face is cut where the ORIGINAL draws her body, so the original's lobe outline is the water's top edge
    in front of her, instead of the face's own straight crest 10-60 px higher on her body;
  - the old opening's suds and foam bubbles, drawn as milky rings over her water, are hidden.
- **R7 = R6 + the spray's look.**
  - **The cause:** moving, the water round her was dominated by round white beads (R6 at +1 s, the band at her base: white
    37.1 %; the original 18.6). Hiding the game's own spray pool (`fx`, `game.js` `Particles`) gives 24.8 %. The beads are
    round3's kind-3 "white spray droplet", which `stepRound3` throws round her at `ROUND5.spray`'s 450 a second, with alpha
    0.85 and a 1.25 (over-white) glint that bloom turns into glowing beads.
  - **The fix:** the same particles drawn as clear blue drops with a small blue-white glint below 1 (no bloom halo),
    less opaque. Kinds 0 and 1 (wake and bow droplets, foam puffs) are drawn the same way.
  - **Unchanged:** the emission, counts, sizes and both random sequences; the sparkle stars (kind 2, collect feedback).
  - **Code:** `WATER7` in `WebDemo/src/tunnel_s4_bt.js`; `water7DropFragment` and `water7Spray` in `tunnel_s4_water2.js`;
    the two lines in `game.js`.
  - (R7's first build changed only kinds 0 and 1: white 37.1 -> 37.0 %, no effect; the band check found kind 3.)

## Measured (the same seed, camera, canvas and moments)

**The band at her base** (y 0.80-0.97, pink, gold and buttons left out; `44_water_material/diag/band.py`):

| | icy pale | saturated blue | mid blue | white | lavender | mean saturation |
|---|---|---|---|---|---|---|
| original | 27.5 % | 19.6 % | 11.4 % | 18.6 % | 15.3 % | 0.35 |
| accepted, start | 42.3 | 17.5 | 23.1 | 14.4 | 0.9 | 0.37 |
| R5, start | 29.9 | 14.1 | 11.8 | 22.6 | 15.0 | 0.31 |
| R6, start | 26.9 | 19.0 | 12.4 | 20.7 | 12.8 | 0.34 |
| **R7, start** | **26.1** | **20.3** | **12.2** | **20.6** | **12.8** | **0.34** |
| R6, +1 s | 25.0 | 11.8 | 7.4 | 37.1 | 11.5 | 0.26 |
| **R7, +1 s** | **33.4** | **14.9** | **14.6** | **17.5** | **12.2** | **0.33** |

**Regions** (`regions/regions.md`, `WebDemo/tools/screen4/region_compare.py`; LPIPS lower is closer, SSIM higher is
closer, dE the mean-colour CIEDE2000):

| | accepted | R5 | R6 | R7 |
|---|---|---|---|---|
| start, foreground water: LPIPS | 0.656 | 0.530 | 0.526 | **0.524** |
| start, character + contact: LPIPS / dE | 0.593 / 8.9 | 0.551 / 8.1 | 0.524 / 5.5 | **0.525 / 5.4** |
| start, whole colour balance: dE | 2.0 | 1.6 | 1.1 | **1.1** |
| +1 s, foreground water: LPIPS / hist | 0.679 / 0.411 | | 0.682 / 0.353 | **0.673 / 0.333** |
| +2 s, foreground water: LPIPS / hist | 0.647 / 0.370 | | 0.645 / 0.324 | **0.635 / 0.313** |
| +1 s, character + contact: LPIPS | 0.626 | | 0.642 | 0.640 |
| +2 s, character + contact: LPIPS | 0.642 | | 0.656 | 0.656 |

- The tunnel, brushes, coins and upper zones: identical in every build (unchanged layers).
- **Moving:** the water's colour mix is clearly closer (hist), LPIPS about level with the accepted build. The character
  zone is slightly worse by LPIPS: the sparkle stars over her and her turning pose dominate it in every build.

## The art director (`art_director/verdict.md`)

- **R7 is clearly closer to the original than the accepted build, at the start and while moving,** but still paler and softer
  than the original; "darker" is not met yet.
- **R6 against the accepted build, at the start:** the contact edge now follows the original's own lobes (x 180-530,
  y 1240-1340), where the accepted build has a nearly level crest with white hook streaks. The lower water has the
  original's mid-blue, lavender and white lobes instead of an even sky-blue sheet. Richer in hue, not darker.
- **R7 against R6:** clearly closer while moving (the white bead clumps beside her become blue); nothing worse at the start.
- **Verdict:** present R7.

## Corrected / remaining

- **Corrected:**
  1. **The hard cut and the zigzag:** the water's top edge in front of her is the original's irregular lobe outline, and
     her rounded lower body shows down to it. She sits on the water, not cut by a straight crest.
  2. **The milky bubble rings over the bottom water** (the opening's suds): gone; the bottom water is 48.6 % saturated blue
     (36.6 before, the original 53.5).
  3. **The white bead cushion beside her while moving** (the kind-3 spray): now blue drops; white at her base 17.5 % at
     +1 s (37.1 before, the original 18.6).
  4. **The band at her base matches the original's colour mix** within about 2 points per class at the start.
  5. **The water's colour mix while moving is closer** (hist 0.411 -> 0.333 at +1 s, 0.370 -> 0.313 at +2 s).
- **Remaining (the art director's ranking, with the likely layer):**
  1. **Still paler and hazier than the original;** its dark cobalt pockets are missing (dark pixels 11.9 % against 18.0).
     The face alone is nearly as dark as the original, so it is bloom and the layers drawn over the face.
  2. **Soft, low-contrast forms** (the same haze).
  3. **The contact has no shading, and the cut edge is hard** (`WATER6.cut`; her fur's darkening is in her material).
  4. **A small window at her right paw** (x 520-560): the body mask is wider than her model there.
  5. **Moving, the waterline sits 30-50 px lower on her** than the original's line, and during the waiting look-back her
     mouth now shows.
  6. **R7's drops bunch into soft pale-blue discs.**
  7. **A violet fringe** under her right side (x 455-505).
  8. **Pink sparkle stars over her at +2 s**, in every build.
  9. **Behind her:** the floor's white crest streaks (`floorFx.streak`, `tunnel_r9_focus.js`), in every build.
- **Proposed next, for the user's go (one at a time):** the bloom and haze over the water face (item 1), then the right-paw
  window and the fringe (items 4 and 7, mask only).

## Tests

- **Identity:** see `identity_proof_raw.txt` (the accepted build at the start and +1 s, R6 at the start and +1 s, R5 at the
  start: 0 differing pixels; R7 rendered twice: 0; no console errors).
- **Gameplay:** PENDING.
- **Videos:** PENDING.

## Files

- `sheets/01_FULLRES_original_accepted_R6_R7.jpg`: full resolution with the HUD, the start view.
- `sheets/02_closeup_water_start_x1.4.jpg`: the water round her at the start.
- `sheets/03_closeup_water_moving_T1.0.jpg`, `_T2.0.jpg`: 1 and 2 s after the tap.
- `final/{start,T1.0,T2.0}/`: the canvases and pages. `scripts/sheets.py`: the sheets.
