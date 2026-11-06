# Screen 4 water R8, `?s3=intunnel,water8` (6 November 2026, fifteenth session): the contact edge; not merged

- **The art director's first-ranked difference after R7:** the water face's top edge crosses her as a flat, ragged cut, where
  the original's water meets her body in a scalloped outline of lavender domes with white rims.
- **Measured** (`scripts/edge_profile.py`, `edge_start.png`; where her pink ends per column at the start view, the original
  against R7): the game's edge is a nearly flat line, y 1212-1286; the original's outline runs 1240-1323. In the texture's
  own registration (it lands about 22 px high at the start) the original's outline is 0-27 px below the game's edge.
- **The change (R8 = R7 + only this):** the face's texture (R6's colour, byte-identical) gets an alpha channel, 0 where the
  ORIGINAL has her body (its largest pink region, not grown, 1 px feather; `derive_water_map.py --alpha-body`), and the face
  discards its pixels there (`tunnel_s4_water2.js`, `WATER2.alpha`). Its edge in front of her then follows the original's
  own outline, and the water right under her edge is the original's own lavender domes, not fill. No geometry,
  registration, colour or other layer changed.
  - **R8 as first tried** (`r8/`, texture `foreground_water_original_r8.png`): the art director judged it slightly closer
    than R7 at the start and moving. Her edge now slopes down to the right as in the original (20-35 px lower at x 400-500),
    more of her lower body shows, she reads rounder and more supported, and she is not a taller, squarer block (visible
    pink 46.8k -> 51.5k px, the original 62.8k). Under her centre-right a dome's rounded top with a thin blue-white rim
    crosses her edge. But there were two small see-through notches at her outer sides, where the original's silhouette is
    wider than her 3D model and the cut showed the far tunnel water (`art_director_r8/gapz.jpg`).
  - **R8b, now the `water8` texture** (`foreground_water_original_r8b.png`, `--alpha-x 248 522`): no cut outside her
    model's span, faded over 8 px (cut share of the texture 18.9 -> 14.4 %). R8 as first tried is reproduced on the new
    bundle by the tune `{"water2": {"file": "foreground_water_original_r8.png"}}` (0 differing pixels, `r8b/T1.0_r8tune`).
  - **The final R8** (`final/`, bundle `215f35c5`) is R8b on the fixed R7 (the mirrored edge sampling, `../49_water_r7/`).
- **Band at her base** (first R8 against R7; icy / saturated / mid / white / lavender %): start 31.2 / 19.3 / 11.9 / 19.5 /
  9.9 -> 29.9 / 19.8 / 11.6 / 19.7 / 10.3; +1 s 31.8 / 15.6 / 12.6 / 22.2 / 10.4 -> 30.7 / 15.9 / 12.4 / 22.2 / 10.9; +2 s
  30.5 / 15.1 / 11.7 / 23.9 / 11.6 -> 29.2 / 15.3 / 12.0 / 23.8 / 12.1 (original 27.5 / 19.6 / 11.4 / 18.6 / 15.3).
- **Sheets:** `sheets/` (the first R8 against R7), `sheets_final/` (ORIGINAL | ACCEPTED | R7 | final R8, close-up and
  moving).
- **Proof:** the accepted `?s3=intunnel` start view is 0 differing pixels on bundle `215f35c5` (`identity_intunnel_start/`).
- **Still different (the art director):** over the left dome (x 230-340) the edge did not move: there the face's top edge is
  lower than the original's outline, so her fur covers the dome's top and white rim and only half the row of domes reads;
  the domes are soft lavender-blue masses with few of the original's bright rim arcs.
