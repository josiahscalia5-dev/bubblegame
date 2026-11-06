# Step 7: the bubble veil (`?s3=focus` only; 6 November 2026, thirteenth session)

- **Authority:** the ORIGINAL approved Screen 4 only
  (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
- **The user's instruction (after the recovery audit):** "Start with the bubble veil correction ONLY. Reduce the excessive
  tunnel bubbles while keeping the appropriate clear bubbles, especially those around the water and character. Restore the
  strong cobalt-blue appearance ... Do not simply remove all bubbles." Comparisons at the same scene position with the
  character fully inside the tunnel; straight and steering MP4s; Pixel 7 and the normal game tested; then stop for review.
- **Before:** step 6 (bundle md5 `1784ffd7...`). **After:** step 7 (bundle md5 `57b06911...`).

## What covers the tunnel (measured first; `inventory/`, `scripts/inv_runs.sh`, `scripts/coverage.py`)

Each bubble layer hidden alone in the SAME frame (seed 7, no steering), at four positions where she is fully inside the
tunnel (3, 4, 5 and 6 s after the tap; at 8 s the course has looped back to the washing machine). Share of the tunnel box
(x 0.05-0.95, y 0.25-0.70) that the layer changes by more than 12 levels / saturated blue it hides there (points):

| layer | 3.0 s | 4.0 s | 5.0 s | 6.0 s |
|---|---|---|---|---|
| tunnel bubbles (`mwTunnelBubbles`, 160) | **7.7 % / 2.5** | 0.6 / 0.2 | 1.3 / 0.3 | 3.9 / 0.4 |
| hero bubbles (`heroBubbles`, the large clear ones) | 5.2 / 0.8 | 0 | 0 | 0 |
| Screen 4 bubbles (`s4Bubbles`) | 1.3 / 0.3 | 0.6 / 0.1 | 2.1 / 1.1 | 2.0 / 1.1 |
| white droplets (`r5Droplets`) | 1.2 / 0.3 | 0.7 / 0.2 | 0.7 / 0.2 | 0.6 / 0.2 |
| the game's splash and pick-up particles (`Points`) | 0 | 2.6 / 1.3 | 9.8 / 1.1 (the gem's pick-up burst) | 0.2 / 0.1 |
| her waterline bubbles (`lqWaterlineBubbles`) | 0 | 0 | 0 | 0 |

`01_bubble_layers_hidden_one_by_one_T3.0.jpg`: the tunnel bubbles are the cloud of small and medium bubbles over the
middle rings and the far centre; the hero bubbles are the few large clear ones by the walls, which correspond to the
original's large clear bubbles. The original, counted by eye (the water file's notes): about 7 outlined bubbles in the upper
tunnel, 3 at the lower left, none floating over the centre rings.

## The change (`step7_game_changes.patch`)

`WebDemo/src/tunnel_r9_focus.js`, `FOCUS.water.bubbles`: `count` 160 -> 40, and the zones along the walls only (the inner
zone, bubbles floating inside the open tube over the centre rings, and the far-centre zone removed; their share to the walls).

- **Kept, unchanged:** the large clear hero bubbles, the Screen 4 bubbles, the bubbles at her waterline and in her splash,
  the game's pick-up particles (gameplay feedback), the white streaks and droplets (a later step: white splash textures).
- **Chosen from three test variants** (`variants/`, `scripts/variant_runs.sh`; test tunes only): V1 40 in the old zones, V2
  40 along the walls (chosen: the original has no outlined bubbles over the centre), V3 60 along the walls. V1 and V2 measure
  the same; V3 slightly less blue.
- **Reversible:** the step 7 build with the old values put back by a test tune is identical to step 6 (0 differing pixels at
  3.0 s); the step 7 build is identical to the V2 test at all four positions.

## Tests

| test | result | file |
|---|---|---|
| the old settings by test tune on the step 7 build | identical to step 6 at 3.0 s, 0 differing pixels | (above) |
| identity: the normal game, the ten older switches, `match`, `match,nofoam` (41 raw-canvas frames) | all 41 identical, 0 differing pixels, no console errors | `identity_proof_step7.txt`, `scripts/identity.sh` |
| gameplay `?s3=focus`: `s3_func` and `r2_func` (lanes, jump, coins, gem, socks, keyboard start, hearts, pause, Bubble Blast, Turbo Spin) | identical to step 6's reports but for the bubble count and 240 fewer triangles; no console errors | `gameplay/` |
| gameplay, the NORMAL game: `s3_func` | identical on step 6 and step 7; no console errors (the normal game has no hearts, pause or power-ups: `gameplay/README.md`) | `gameplay/` |
| Pixel 7 (412 x 839) at 3, 4, 5 and 6 s | captured, no console errors | `frames/step7_pixel7_T*`, `11_pixel7_*.jpg` |
| build | the main checkout rebuilds md5 `57b069116c2baf1b66644fba87c8fe14`, the tested build byte for byte | |
