# Why R3c's water round her looks soft, vertically stretched and pale (6 November 2026, fourteenth session)

- **The question:** the user's review of R3c (17:49 UTC): "too soft, stretched and pale ... Fix the actual
  texture-mapping, distortion, transparency, sampling or bloom problem."
- **The target:** the ORIGINAL approved Screen 4 only.
- **The frame:** the in-tunnel start view (`layer_diag.cjs`, seed 7, `NOTAP=1`, the 768 x 1536 canvas), with the same
  frame rendered again for each layer change (the ablations: `ablations_R3c.json`, `ablations_contrast_chain.json`;
  captures in `R3c_layers/` and `R4_layers/`).

## 1. Is the texture landing 1:1? (`scripts/map_check.py`, then the layer isolation)

- **R3c as rendered:** in 64 px patches over the foreground band, the cross-correlation with the original is near 0
  almost everywhere (median 0.035).
- **The face alone** (`heroSwell` solo, no bloom; `01_R3c_face_alone_vs_original.jpg`): only its top strip (screen y
  about 1100-1210) shows the original's bubbly water. Below that come long vertical streaks and flat light-blue blocks.
  **That is the "vertically stretched" look, and it is in the face itself, not in bloom or an overlay.**

## 2. The streaks are the texture's own content (`02_R3c_texture_vs_original_crop.jpg`)

- **64 % of R2 / R3c's texture is filled in, not water.** The mask covers her body and the coins, dilated by 11 px, and
  BOTH bottom corners from y 1344 for the power buttons.
- **The Telea inpainting** fills those holes with smears:
  - a pale lavender-white blur where the original has her body;
  - long vertical streaks and a flat triangle where it has the buttons.
- **In the game** she sits higher than in the original (her body ends at about y 1245, the original's at about 1330),
  and the game's buttons are placed differently. So those fills are exactly what is seen under her.

## 3. The fix in the sampling source: R4 (`?s3=intunnel,water4`)

- **The buttons masked by their own outline**, measured on the original (`07_buttons_measured.jpg`): rounded panels
  from y 1392 and 1394, and a badge circle (r 48) on each. The real foam above and between them is kept.
- **The holes filled with exemplar patches** of the original's own water (Criminisi-style, `derive_water_map.py --fill
  exemplar`): 15 px windows, sources within 120 rows, one of the best 3, and the overlaps between filled windows blended.
  Nothing is softened.
  - `03_` and `06_`: the first fill;
  - `04_`: 21 and 31 px windows, rejected for square seams;
  - `05_`: the final texture.
- **The filled share** falls from 64.1 to 51.6 %.
- **The ordering bug found on the way:** the earlier "patch" fill (R3b) had been saved BEFORE its patch step ran, so it
  showed nothing. That is why it "changed nothing" (fixed).

## 4. The registration (`scripts/probe_ref.cjs`)

- **How it is pinned:** the texture is pinned to her water frame through the start camera, captured at the first
  render (t 3.017 s).
- **At the compared start frame (t 3.517 s):**
  - her swell frame has risen 0.027 m and the camera dropped 0.02 m;
  - points at the water's level land 15.6-16.9 px higher than registered;
  - her body moved 12 px DOWN on screen meanwhile;
  - +1 s into the run the offset is +18 px.
- **Measured on the face alone** against the original's own pixels (texels the mask keeps):
  - NCC 0.203 as drawn;
  - NCC 0.954 with the water 22 px lower.
- **So the original's foam lobes at her base were drawn 22 px up,** partly behind her body. Fixed in R5
  (`?s3=intunnel,water5`, `../../47_water_r5/`).

## 5. Where the contrast goes (R4, under her: x 150-620, y 1255-1385; her pink and the coins excluded)

| step | saturation | light-dark spread (L P90-P10) | deep cobalt | white |
|---|---|---|---|---|
| the original's own water there | 0.318 | 0.361 | 11.0 % | 20.0 % |
| the R2 / R3c texture landing there | 0.326 | 0.343 | 8.4 % | 15.4 % |
| the R4 texture landing there | 0.336 | 0.355 | 14.2 % | 17.4 % |
| the face alone (no bloom, no grade) | 0.322 | 0.378 | 14.8 % | 19.3 % |
| no overlays, no bloom | 0.358 | 0.345 | 18.8 % | 17.7 % |
| everything but bloom | 0.342 | 0.331 | 16.5 % | 18.3 % |
| R4 as rendered | 0.323 | 0.317 | 14.0 % | 18.9 % |

- **The face draws the texture opaque and exact:** its brightness is 0.98 x the texture's.
- **The floor behind it** shows through by almost nothing.
- **The overlays** (splash lumps, curls, waterline bubbles, the floating bubbles) cost about 0.015 of the spread, and
  **bloom** another 0.015.
- **What is left of the "pale" look:**
  - **the composition:** the original's deep-magenta lower body reaches down into the foam, while the game's body ends
    higher, so the area under her is water and fill;
  - the haze of the overlays and bloom;
  - while moving, the white splash overlays (white 33-43 % at +1 and +2 s, against 18.6 %).
