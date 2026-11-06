# Screen 4 water R6, `?s3=intunnel,water6` (6 November 2026, fifteenth session): the candidate, a marginal step; not merged

- **The change (the previous art director's recommendation after R5):** R4 (`../46_water_r4/`) with ONLY the texture's fill
  under her changed. The hole where the original has her body is widened 13 px up and to the sides, so the original's white
  fur halo goes too, and refilled only from the original's lower cobalt-and-white water, never from lavender windows
  (`derive_water_map.py --fill exemplar --body-grow 13 --body-src-row 140`, `textures/screen4/foreground_water_original_r6.png`;
  it regenerates byte-identical, md5 `c10f5650`).
- **Frames:** `final/start|T1.0|T2.0/` (seed 7, the in-tunnel start view and +1 s / +2 s after the tap, bundle `3b0c8e17`).
- **Sheets:** `sheets/01_FULLRES_ORIGINAL_ACCEPTED_R4_NEWR6.jpg`, `02_closeup_water_x1.6.jpg`,
  `03_moving_closeup_x1.4.jpg` (`scripts/r6_sheets.py`).
- **Band at her base** (`../44_water_material/diag/band.py`; icy pale / saturated / mid / white / lavender %, mean saturation):

  | frame | icy | saturated | mid | white | lavender | sat |
  |---|---|---|---|---|---|---|
  | ORIGINAL | 27.5 | 19.6 | 11.4 | 18.6 | 15.3 | 0.35 |
  | accepted | 40.6 | 21.3 | 20.3 | 14.2 | 0.3 | 0.39 |
  | R4 | 29.5 | 18.6 | 10.7 | 20.4 | 13.0 | 0.34 |
  | R6 | 31.6 | 19.3 | 11.9 | 19.2 | 9.9 | 0.35 |
  | R4 +1 s / R6 +1 s | 28.3 / 31.1 | 11.3 / 12.1 | 8.3 / 9.6 | 33.6 / 32.3 | 12.7 / 9.0 | 0.27 / 0.27 |
  | R4 +2 s / R6 +2 s | 24.8 / 27.0 | 8.3 / 8.4 | 7.4 / 8.0 | 38.6 / 37.3 | 14.1 / 12.6 | 0.24 / 0.24 |

- **The art director (independent review):**
  - R6 against R4: about the same at the start and moving. R6 against the accepted build: clearly closer at the start,
    slightly closer moving.
  - The leftover fur fringe at her lower left and right is gone and the water is bluer there; under her centre it lost
    lavender the original has (the strip right under her 28.8 -> 19.7 %). Neither R4 nor R6 has the original's two large
    lavender domes with white rims rising in front of her lower edge: both show a flat, ragged cut.
  - "Keep R6 as THE candidate ... Don't present it to the user as the fix."
- **Proof:** the accepted `?s3=intunnel` and R4 rendered on this bundle are 0 differing pixels from their stored frames
  (`identity/`).

## The diagnosis of what is left (`diag/`)

1. **The texture mapping is exact; nothing is stretched by the sampling** (`diag/uv/`, `diag/scripts/uv_texture.py`,
   `uv_read.py`; `layer_diag.cjs ROUTE_WATER=` serves a coordinate-coded texture in place of the face's, the face drawn alone).
   - Texture rows per screen pixel: 0.99-1.00 at the start, 0.94-1.00 at +1 s and +2 s; columns 0.95-0.98.
   - What the face shows in the band (`uv_start.png`, `uv_T1.png`; blue = the original's own water at its own place,
     orange = filled holes, red = the clamped edge): at the start 53 % real / 45 % fill / 2 % clamped; at +1 s 58 / 41 / 1.
   - At the start the texture lands about 22 px high, so the bottom 30 px of the screen repeat the texture's last rows
     (vertical streaks between the buttons).
2. **The moving frames' white is NOT the water** (`diag/T1_ablate/`, `T1_groups/`, `T1_drops/`, `T2_drops/`;
   `scripts/white_trace.py`).
   - At +1 s the texels the face samples are 19.8 % white, the face drawn alone 20.6 %; the same pixels in the full
     frame 33.8 %.
   - Hiding the splash bank, every bubble layer, the glow, bloom, the floor or any other scene group changes the band's
     white by at most 1.7 points. Hiding the game's spray particles (`game.js` `Particles`): 33.3 -> 21.4 % at +1 s,
     37.6 -> 21.4 % at +2 s.
   - By kind: round3's white spray (kind 3) is nearly all of it (33.3 -> 21.4 % at +1 s; 37.6 -> 26.7 % at +2 s); the
     sparkle stars (kind 2) add about 5 points at +2 s.
   - Why: each droplet's drawn size grows as 1 / distance, so droplets thrown towards the camera are drawn 50-90 px wide:
     the matte "cotton-ball" piles beside her. Capping the drawn size: 12 px gives white 23.4 / 23.5 % and saturated blue
     17.4 / 17.5 % at +1 / +2 s (20 px: 26.3 / 26.7 and 16.3 / 15.9; 30 px: 30.0 / 30.6).
   - The art director found the same cause independently.
   - **This is R7** (`../49_water_r7/`).
