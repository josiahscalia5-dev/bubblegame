# Screen 4 water R8 (`?s3=intunnel,water8`), 6 November 2026, fifteenth session: REJECTED, reverted to R7

- **The user's approval (about 20:00 UTC):** ONE isolated experiment on the excessive bloom, glow and haze over the
  foreground water round the pink character, only after R7's tests and recordings passed (they did:
  `../49_water_r7/README.md`).
  - Reveal the existing deeper cobalt water by adjusting only the responsible glow / haze layers; no global darkening of the
    tunnel, no geometry change.
  - Keep R7's contact, lavender domes, character, HUD, coins, brushes, camera, gameplay and the cyan-white highlights.
  - Compare with the ORIGINAL and R7 at the start, +1 s and +2 s (seed 7, no steering).
  - "If R8 is not visibly better, revert to R7. Do not make R8 the default or begin another round without my approval."
- **Result: NOT visibly better** (the art director, `art_director/verdict.md`), so **reverted: R7 stays the candidate.**
  - R8 remains only as a record behind its own switch (`water8`), like the earlier rejected experiments.
  - R7 and the accepted `?s3=intunnel` are unchanged: 0 differing pixels on R8's bundle (`identity_proof_raw.txt`).

## The diagnosis (`diag/haze_ablations.md`: R7's frames re-rendered with one layer off at a time, the same moment)

- **The live post settings** (`__bw.debug().composer`, the same at all three moments): bloom strength 0.16, radius 0.42,
  threshold 1.0; exposure 1.05; grade saturation 1.32, contrast 1.12, vignette 0.18.
- **The start's opening-grade term** (`uOpen` 0.272, 0 once running) darkens slightly (exposure x 0.9, deeper mid-darks):
  it is not a haze.
- **Bloom off, the water band** (x 60-700, y 1250-1420; `scripts/haze_metrics.py`):
  - the dark pockets: 12.1 -> 15.8 % at the start (the original 14.6), 10.1 -> 12.0 at +1 s, 7.2 -> 9.8 at +2 s;
  - saturated blue up 2-2.5 points;
  - the white and the crisp highlights unchanged.
- **The grade off makes the water paler,** so the grade is not the haze.
- **Most of the bloom over the water is the face's own whites** (`scripts/bloom_src.py`).

## The change (code behind `water8` only)

- `WATER8` in `WebDemo/src/tunnel_s4_bt.js`, `water8Bloom` in `tunnel_s4_water2.js`, one line in `game.js`.
- The bloom pass's own blend (`UnrealBloomPass.blendMaterial`) is faded over the lower screen where the foreground water is:
  y 0.74 -> 0.80 from the top, no glow below.
- 0 differing pixels above y 0.74. Below, on average 2.3 levels darker.

## Measured (the water band; the original first)

| | dark | saturated blue | white | mean luma | crisp highlights |
|---|---|---|---|---|---|
| original | 14.6 % | 12.2 % | 20.7 % | 0.773 | 0.00 % |
| R7 start -> R8 | 12.1 -> 15.8 | 13.3 -> 15.7 | 22.5 -> 21.9 | 0.780 -> 0.767 | 0.55 -> 0.56 |
| R7 +1 s -> R8 | 10.1 -> 12.0 | 6.4 -> 8.0 | 18.8 -> 18.3 | 0.774 -> 0.765 | 0.82 -> 0.86 |
| R7 +2 s -> R8 | 7.2 -> 9.8 | 3.9 -> 5.9 | 20.9 -> 19.8 | 0.794 -> 0.782 | 0.72 -> 0.80 |

- **Region comparison** (`regions/regions.md`), foreground water:
  - LPIPS 0.524 -> 0.526 at the start, 0.673 -> 0.675 at +1 s, 0.635 -> 0.639 at +2 s;
  - SSIM 0.399 -> 0.388 at the start;
  - dE and hist slightly better.

## The art director (`art_director/verdict.md`)

- **Not visibly better at any moment.** Even at 4x, flipping between R7 and R8, the two can only just be told apart.
- **Nothing worse:** not too dark, highlights kept, no seam at y 0.74-0.80, nothing changed above.
- **The numbers are mixed:** the darker tones get closer, while LPIPS, SSIM, sharpness and saturated blue at the start move
  away.
- **The key finding:** the bloom only ever added about 2-3 of 255 levels over the water. **The milky look is not the
  bloom;** it is the water's own colour and its white layers.
- **The largest remaining differences** (for a future round, only with the user's approval):
  1. the hard white diagonal streaks behind and beside her (the floor's white crest streaks / flecks);
  2. the front water's pastel periwinkle with soft lobes (the face's own colour and its white overlays);
  3. the pink-white cross-shaped glints right of her at +2 s (the sparkle stream).

## Tests

- `gameplay/s3_func_water8.txt` and `gameplay/r2_func_water8.txt`: identical to R7's (hence the accepted build's).
- Identity: `identity_proof_raw.txt`.

## Files

- `sheets/01_FULLRES_original_R7_R8.jpg`, `_T1.0.jpg`, `_T2.0.jpg`: the full scene with the HUD at the start, +1 s, +2 s.
- `sheets/02_closeup_water_start_x1.4.jpg`, `03_closeup_water_moving_T1.0.jpg`, `_T2.0.jpg`: ORIGINAL | R7 | R8, the water.
- `final/{start,T1.0,T2.0}/`: the canvases and pages. `diag/`: the ablations and their crops. `scripts/`: the measurement
  scripts.
