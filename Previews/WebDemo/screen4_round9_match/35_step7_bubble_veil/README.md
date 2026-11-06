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

## The result, by eye (the user's standard) and measured

Sheets (ORIGINAL | STEP 6 | STEP 7, the same positions, seed 7, no steering):
- `10_original_vs_step6_vs_step7_T3.0_767x1536.jpg` (and `_T4.0`, `_T5.0`, `_T6.0`): the full 1:2 frame;
- `11_pixel7_original_vs_step6_vs_step7_T3.0_T4.0.jpg`, `..._T5.0_T6.0.jpg`: the Pixel 7 screen with the HUD;
- `12_zoom_tunnel_T3.0_2x.jpg`: the tunnel enlarged.

Real gameplay videos (Pixel 7, 10 s from Tap to Start, into the tunnel, through it and past the brushes):
- `videos/compare_straight_original_step6_step7_10s.mp4`: straight down the middle lane (`STRAIGHT=1`);
- `videos/compare_steering_original_step6_step7_10s.mp4`: the step 4 video's real swipes (step 6's half is the step 6
  recording, `../32_step6_centre_placement/video/`);
- `13_video_frames_straight_step6_over_step7.jpg`, `13_video_frames_steering_step6_over_step7.jpg`: their frames at
  4.0-9.0 s (the tap at 2.0 s);
- the recorder is not frame-exact (`videos/determinism/README.md`).

**What changed, by eye:**
- **3.0 s:** the cloud of small and medium bubbles over the middle rings, the left side and the centre is gone; the rings
  read clearer and bluer. Kept: the large clear bubble upper right, a medium one upper middle, a few small ones by the walls,
  close to the original's set.
- **The entry (4.0-4.5 s, steering):** step 6's milky mass of bubbles filling the drum's mouth is gone; the blue rings show
  through it.
- **5.0-6.0 s:** a few fewer bubbles by the upper walls; otherwise the same (the tunnel bubbles sit mostly round the 3.0 s
  stretch of the tunnel; the Screen 4 bubbles there, about 8-10 clear ones, were left as they are).
- **Her water:** unchanged (waterline bubbles and splash untouched).

Measured (`measured.md`; saturated blue: hue 190-235, s >= 0.5, v >= 0.35):

| | original | step 6 | step 7 |
|---|---|---|---|
| walls, masked water, 3.0 s: saturated blue | 58.9 % | 51.8 % | **55.0 %** |
| distant core, masked water, 3.0 s: saturated blue | 29.7 % | 20.3 % | **24.8 %** |
| distant core: lavender | 16.0 % | 16.1 % | 15.7 % |
| tunnel box (objects included) at 3.0 / 4.0 / 5.0 / 6.0 s | | 26.3 / 19.6 / 29.6 / 23.3 | 27.9 / 19.5 / 29.9 / 23.7 |

No overall similarity percentage is claimed.

## Remaining differences (for the next steps, in the user's order)

- [ ] **White splash textures:** the original's chunky irregular white-aqua splashes (white pieces 237 px against 75 px); the
  walls' procedural white dashes and the floating streaks are still the game's own (the held step 5 map is the source).
- [ ] **Blue water and floor:** the walls' cobalt is still under the original's (55.0 against 58.9 %); the floor ahead and the
  water in front paler and smoother.
- [ ] **Brush sizes:** from 5.5 s the brushes fill the frame; the original shows two partly cropped at the edges.
- [ ] **The tunnel entry (4.0-4.5 s):** the lavender drum face and ceiling.
- [ ] **The distant centre:** the pale disc at 5.5 s (steering run).
- [ ] **Sock colours:** purple stripes and toe against the original's white sock with a blue toe.
- (postponed by the user: the pink character; the opening's shortening, option C)
