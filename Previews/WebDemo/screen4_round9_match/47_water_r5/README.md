# Screen 4 water R5 (`?s3=intunnel,water5`), 6 November 2026 (fourteenth and fifteenth sessions); FOR THE USER'S APPROVAL

- **The target:** the ORIGINAL approved Screen 4 only.
- **The user's brief (17:49 UTC, kit `Design/ReferencePacks/2026-11-06_R3c_Review_and_Claude_Prompt_from_user/`):** R3c is
  not approved; the water round the pink character is still too soft, stretched and pale. Fix the actual texture-mapping,
  distortion, transparency, sampling or bloom cause; no artificial water objects; one reversible improvement at a time; the
  same camera; moving gameplay at 1 and 2 s; show what improved, what still differs, and whether it deserves approval.
- **Status:** a test switch only, NOT merged into `?s3=intunnel`, waiting for the user's decision.
  - Rollback: do not use `water5` (`water4` = R4, `water3` = R3c, `water2` = R2).
  - The accepted `?s3=intunnel` is unchanged: 0 differing pixels against the bundle from before the water work
    (`identity_proof.txt`).

## What R5 is

- **R4** (`../46_water_r4/`): the texture of the original's foreground water that the existing water face (`heroSwell`)
  samples has its holes (her body, the coins, the buttons) filled with exemplar patches of the original's own water instead
  of Telea smears. Filled share 64 -> 51.6 %.
- **R5 = R4 + ONLY the texture's registration corrected** (`WATER5.shift` -22 in `WebDemo/src/tunnel_s4_bt.js`, the shader
  line in `tunnel_s4_water2.js`).
  - The texture is pinned to her water frame through the start camera at the first render (t 3.017 s). By the compared
    start frame (t 3.517 s) the swell has bobbed, so the original's water was drawn 22 px too high, its foam lobes partly
    behind her body.
  - Measured on the face alone against the original's own pixels: NCC 0.203 as drawn, 0.954 with the shift
    (`../46_water_r4/diag/diagnosis.md`, section 4).
- No new objects; material, distortion, bloom and everything else as R3c.

## Measured at the same frames (`region_compare.py`, `regions/regions.md`; the foreground water zone; LPIPS lower is closer)

| frame | accepted | R3c | R4 | R5 |
|---|---|---|---|---|
| start: LPIPS | 0.656 | 0.576 | 0.556 | **0.530** |
| start: SSIM (higher is closer) | 0.375 | 0.397 | 0.371 | **0.407** |
| start: saturated blue (the original 24.6 %) | 18.7 % | 15.2 % | 16.2 % | 13.5 % |
| start: white (the original 16.8 %) | 15.1 % | 17.8 % | 20.0 % | 21.1 % |
| +1 s: LPIPS | | 0.652 | | 0.665 |
| +2 s: LPIPS | | 0.606 | | 0.632 |

- **The band at her base** (`band.md`): start icy pale blue 28.5 % (original 27.5), saturated 15.6 (19.6), white 23.4
  (18.6), lavender 15.1 (15.3); +1 s white 36.4 %, +2 s 43.2 %.

## The art director (`art_director/verdict.md`)

- **Start frame: clearly closer than R3c, below her.** R3c's vertical streaks, flat lavender triangle and lavender-white
  smear are gone; the original's rounded bubbly lobes and lavender bubbles sit at her base. Closer than the accepted build
  in the KIND of water, not in colour (paler).
- **Moving: about the same as R3c.** The difference is dominated by the white froth beads round her, the pink star glints
  at +2 s and her turning silhouette.
- **Verdict:** present R5 instead of R3c, labelled "stretching fixed, still pale"; keep it out of `intunnel` until the user
  approves.

## Corrected / remaining

- **Corrected:**
  - the vertical streaks and flat blocks under her (stretched): fixed under and below her;
  - the water's registration: the original's lobes now sit where the original has them at the start frame.
- **Partly corrected:** soft. The lobes have the original's shapes, but directly under her the fill is mottled, without
  crisp bright rims (exemplar fill where the original had her body).
- **Remaining:**
  1. **Pale:** saturated blue 13.5 % against 24.6 %, white 21.1 % against 16.8 % at the start; strongly pale while moving.
  2. **The contact edge:** a smooth, nearly straight geometric crest (`swellFront`) cuts her base, with filled texture under
     it. In the original the lobes themselves are the edge, rising over her lowest fur.
  3. **Moving:** the white froth beads round her (36-43 % white at +1 and +2 s against 18.6 %); the pink star glints.
  4. **Behind her:** white diagonal dash streaks over the floor and wall water at both sides (other layers, unchanged).
  5. Two faint vertical seams in the fill (x about 245 and 505, y 1320-1390), mostly under the buttons.
- **Proposed next, ONE controlled test, for the user's go:** make the water face see-through where the texture's mask marks
  the original's body, so her own fur shows and the original's lobe outlines become the contact edge. The risk: her base is
  about 23 px higher than the original's, so a thin gap could open.

## Tests

- **Identity** (`identity_proof.txt`): the accepted build at the start and +1 s, and R2, R3c, R4, R5 at the start: 0 differing
  pixels; no console errors.
- **Gameplay:** `gameplay/s3_func_water5.txt` (Tap to Start, real swipes, jump, the tunnel, keyboard start, coins, draw
  cost, console) is identical to R3c's report. `gameplay/r2_func_water5.txt` (hearts, pause, Bubble Blast, Turbo Spin):
  PENDING.
- **Videos** (`videos/`, a Pixel 7 screen, 30 frames per game second, seed 7): PENDING.

## Files

- `sheets/01_FULLRES_original_accepted_R5.jpg`, `01b_FULLRES_original_R3c_R5.jpg`: full resolution, the start frame.
- `sheets/02_closeup_water_x1.4.jpg`, `02b_closeup_original_R3c_R5_x1.6.jpg`: the water round her.
- `sheets/03_moving_1s_2s.jpg`, `04_moving_closeup_R3c_R4_R5.jpg`: moving.
- `final/{start,T1.0,T2.0}/`: the canvases, with the layer ablations of the start frame.
