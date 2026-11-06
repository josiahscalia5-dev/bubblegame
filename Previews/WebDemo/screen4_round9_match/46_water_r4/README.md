# Screen 4 water R4 (`?s3=intunnel,water4`), 6 November 2026, fourteenth session; superseded by R5

- **The target:** the ORIGINAL approved Screen 4 only.
- **The user's brief (about 17:49 UTC, kit `Design/ReferencePacks/2026-11-06_R3c_Review_and_Claude_Prompt_from_user/`):**
  R3c (`../45_water_r3/`) improved the colour and removed R3's mirrored artefact, but the water round the pink character is
  still too soft, stretched and pale. Fix the actual texture-mapping, distortion, transparency, sampling or bloom cause; no
  new water objects; one reversible improvement at a time; inspect moving gameplay at 1 and 2 seconds.
- **Status:** experimental, not approved, not merged. The accepted `?s3=intunnel` is unchanged (0 pixels; proof in
  `../47_water_r5/README.md`).

## The cause (`diag/diagnosis.md`, the layer isolation of R3c)

- **The water mesh drawn alone** (`heroSwell` solo, no bloom; `diag/01_R3c_face_alone_vs_original.jpg`) shows the
  original's bubbly water only in its top strip. Below it are long vertical streaks and flat light-blue blocks. **The
  "vertically stretched" look is in the face's texture, not in bloom or an overlay.**
- **64 % of R2 / R3c's texture is filled in, not water** (`diag/02_...`): her body, the coins and both bottom corners for
  the buttons are masked, and the Telea inpainting fills them with:
  - a lavender-white blur where the original has her body;
  - long vertical streaks and a flat triangle where it has the buttons.
- **She sits higher in the game than in the original** (her body ends at about y 1245, the original's at about 1330) and the
  game's buttons are placed differently, so those fills are what is seen under her.

## The change: only the texture

- **The buttons masked by their own outline,** measured on the original (`diag/07_buttons_measured.jpg`): rounded panels from
  y 1392 and 1394 and a badge circle (r 48) on each; the real foam above and between them kept.
- **The holes filled with exemplar patches of the original's own water** (Criminisi-style, `derive_water_map.py --fill
  exemplar`): 15 px windows, sources within 120 rows, one of the best 3, overlaps blended, nothing softened.
  - `diag/03_` and `06_`: the first fill;
  - `diag/04_`: 21 and 31 px windows, rejected for square seams;
  - `diag/05_`: the final texture, `WebDemo/textures/screen4/foreground_water_original_r4.png`.
- **The filled share** falls from 64.1 to 51.6 %.
- **Fixed on the way:** the R3b patch fill had been saved before its patch step ran (why it "changed nothing").
- Mapping, material, distortion, bloom and everything else as R3c.

## Measured at the start frame (`region_compare.py`, lower LPIPS is closer)

- Foreground water LPIPS: R3c 0.576 -> R4 0.556; character and contact 0.555 -> 0.547.
- **Found while checking R4:** its texture lands 22 px too high at the compared frame (`diag/scripts/probe_ref.cjs`), so the
  original's foam lobes at her base were drawn partly behind her body. Corrected in R5 (`../47_water_r5/`).

## Files

- `final/{start,T1.0,T2.0}/`: the canvases (seed 7; start = the in-tunnel start view, then +1.0 and +2.0 s after the tap).
- `sheets/01_FULLRES_original_accepted_R4.jpg`, `01b_FULLRES_original_R3c_R4.jpg`, `02_closeup_water_x1.4.jpg`,
  `03_moving_1s_2s.jpg`.
- `regions/regions.md`: the region comparison.
