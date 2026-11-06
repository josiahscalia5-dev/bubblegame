# Screen 4: the existing water's own material corrected (`?s3=intunnel,water2`; 6 November 2026): for the user's approval

- **The user's brief** (about 17:00 UTC): stop adding objects to the water; correct the existing water itself. Find what
  makes it pale and flat, rebuild the original's colour pattern and rounded shapes in the existing material, behind its own
  flag; do not replace the accepted build until it is visibly closer.
- **The target:** the ORIGINAL approved Screen 4 only. **Before:** `?s3=intunnel` (accepted). **After:**
  `?s3=intunnel,water2`, NOT merged.

## The investigation (`diag/`, `diag/band.py`, `diag/band_ablations.md`)

- **The method:** same-frame ablations on the in-tunnel start (`layer_diag.cjs`, `diag/ablations.json`), measured in the
  water band at her base (y 0.80-0.97; the character, coins and buttons left out).

| | icy pale blue | saturated blue/cyan | mid blue | white | lavender | palette (k-means) |
|---|---|---|---|---|---|---|
| ORIGINAL | 27.5 % | 19.6 % | 11.4 % | 18.6 % | 15.3 % | `#e8effb` 30 %, `#8eadee` 24 %, `#b5d2f6` 23 %, `#4ca9f2` 19 %, `#5f52b3` 4 % |
| accepted | 40.6 % | 21.3 % | 20.3 % | 14.2 % | 0.3 % | `#abd7f5` 32 %, `#81bff4` 27 %, `#eaedf5` 19 %, `#559af0` 16 % |
| `heroSwell` hidden | **20.3 %** | 35.5 % | 14.3 % | 15.9 % | 3.4 % | |
| the face's comma arcs and rings off | 39.5 % | 27.6 % | 24.1 % | **5.4 %** | 0.3 % | |
| bloom off / grade off / floor hidden / extras hidden | 39.6 / 47.7 / 42.9 / 41.4 % | | | | | |

- **Established:**
  1. The pale flat water is `heroSwell`'s own face material. Its palette (`#acdffc` / `#78c4f8`) is the game's two
     largest colour clusters there. Hiding it halves the icy pale blue.
  2. Our white is the face's procedural comma arcs, not the original's broken highlights.
  3. Bloom, the colour grade, the floor and the extra splash layers are not the cause (1-2.5 points each). Spector.js
     (`../39_breakthrough_pass/spector/`) had shown `heroSwell` as the transparent draw covering 19 % of the frame there.
- **No water-layer extraction assets are in the repository** (the extraction kit never arrived), so the original image
  itself is the source.

## The change (no new objects; the swell's geometry, waterline and her model unchanged)

- **The texture** (`WebDemo/tools/screen4/derive_water_map.py`, `textures/screen4/foreground_water_original.png`): the
  original from y 0.72 down. The pink character, gold coins and power buttons are filled from the water round them (the
  buttons cover those corners in the game too).
- **The material** (`WebDemo/src/tunnel_s4_water2.js`):
  - `heroSwell`'s face colour becomes that texture, placed in HER water frame: each face point (the swell's frame
    uniforms) is projected through the camera as it was at the start view (captured once). At the start it lands where
    the original has it; while she moves, it rides with her water. It is not a screen overlay.
  - A slow flow distortion keeps it moving.
  - The face's comma arcs are off, its bubble rings lower. Colours go through the inverse display transform.
  - Gated on `WATER2_ON` (`tunnel_s4_bt.js` `WATER2`); `?s3=intunnel` is 0 pixels changed.

## Result (`c1/`, `sheets/`)

| | band icy pale | saturated | mid | white | lavender | foreground water LPIPS / hist | character + contact LPIPS / hist |
|---|---|---|---|---|---|---|---|
| original | 27.5 % | 19.6 % | 11.4 % | 18.6 % | 15.3 % | | |
| accepted | 40.6 % | 21.3 % | 20.3 % | 14.2 % | 0.3 % | 0.656 / 0.381 | 0.593 / 0.628 |
| **`water2`** | 38.7 % | 14.6 % | **10.8 %** | **18.7 %** | **10.7 %** | **0.613 / 0.301** | **0.557 / 0.589** |

- The new palette is `#bed8f5` 28 %, `#e5ecf6` 26 %, `#98bbf0` 24 %, `#65a6ef` 16 %, `#2554c2` 7 %: the original's
  structure (white, periwinkle-lavender, pale, azure).
- **Screen Matcher** (`c1/screen_matcher/`): the mean colour difference 11.9 -> 11.8. The play area's pale milky blue is
  unchanged at 17.1 % (the original 11.8): it is mostly the floor ahead, not this face.
- **The art director:** "yes, moderately closer, and visible by eye ... lavender bubbles and broken white froth now sit at
  her base, as in the original, in place of the flat blue with white comma arcs. Present it to the user for approval."
  - The caveat, stated plainly: the texture is the original's own pixels, so the numbers partly match themselves. It lines
    up exactly from the start view; while moving it rides with her water, held together by the flow distortion. The user
    should judge it in the video (`videos/`).
- **Remaining:**
  1. **The shape:** in the original the froth rises in front of her and overlaps her lower body. Ours is a low band below
     a white zigzag at her base, from `heroSwell`'s unchanged crest geometry (its teeth and `swellFront` cut).
  2. **The icy pale blue** is still high (38.7 %): a soft, upscaled texture, and the flow distortion blending white and
     blue.
- **Sheets:**
  - `sheets/01_FULLRES_original_accepted_new.jpg`;
  - `02_closeup_water_x1.6.jpg`;
  - `03_moving_accepted_vs_new.jpg`;
  - the video `videos/compare_steering_original_accepted_water2.mp4`.
- **Status:** presented for the user's approval; NOT replacing the accepted build. Rollback: do not use `water2`.

## Tripo / Meshy (the user's question)

- No credits were spent.
- Image-to-3D tools make static meshes. They cannot make animated, see-through flowing water, so they cannot fix this.
- They could suit standalone objects (the brushes, the diamond), only with the user's approval and a cost estimate first.
