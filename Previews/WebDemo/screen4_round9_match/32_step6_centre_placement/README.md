# Step 6: the far rings follow the bent tube (`?s3=focus` only; 6 November 2026, thirteenth session)

- **Authority:** the ORIGINAL approved Screen 4 only
  (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
- **The user's go-ahead:** "Yes start step 6" (6 November, after the recovery audit).
- **Rules applied** (the strict brief, `Design/ReferencePacks/2026-11-06_Strict_Motion_Match_Kit_from_user/05_...`): one
  correction; original / previous / new at seed 7, 3.0 s, no steering, 767 x 1536 and Pixel 7; moving moments; revert if it
  looks less like the original. The pink character is not touched.
- **Before:** step 4 (`666905c`, bundle md5 `73ed2a8b...`; rollback checkpoint `2f88104`).

## The cause (measured first, `01_calibration_stripes_step4_vs_step6.jpg`)

The walls take their ring map's place from `mtPlace` (`WebDemo/src/tunnel_r9_match.js`). Away from the centre it worked out
each wall point's screen radius from the point's own cross-section (`cs - uHeroCam.xy`, over `u - uHeroCam.z`), which is
exact only for a straight tube. The path bends 15-30 m ahead (`../28_next_investigation/`, the wall vertex probe), so there
the original's rings were smeared. A calibration ring map (`calib_stripes_0.01W.png`, `scripts/calib_map.py`: red / blue
stripes every 0.01 W of map radius) was served in place of the shipped one, the walls drawn alone, and each stripe's screen
width measured along rays from the centre (`scripts/stretch.py`; 1.0 = the stripe lands 0.01 W wide, as the original's ring):

| distance from the centre (W) | step 4 upper half | step 6 upper half | step 4 lower half | step 6 lower half |
|---|---|---|---|---|
| 0.03-0.06 | 1.04 | 1.04 | 2.02 (16 samples) | 2.02 (16) |
| 0.06-0.10 | 1.04 | 1.04 | 1.04 | 1.04 |
| **0.10-0.13** | **1.36** | **1.04** | 1.00 | 1.08 |
| **0.13-0.16** | **1.56** | **1.04** | 1.08 | 1.04 |
| **0.16-0.20** | **0.72** | **1.04** | 1.08 | 1.04 |
| 0.20-0.25 | 1.04 | 1.00 | 1.04 | 1.04 |
| 0.25-0.32 | 1.00 | 1.00 | 1.04 | 1.04 |
| 0.32-0.42 | 1.04 | 1.04 | 1.08 | 1.08 |

(Medians; the sampling step is 0.0004 W, so 1.04 is the closest reading to 1.0. Locally, step 4's stripes merged into blobs
several times wider, visible in the sheet.) That smear is what turned the original's narrow pastel ring into the lavender /
pale band round the far centre.

## The change (`step6_game_changes.patch`)

- `tunnel_r9_focus.js`: `FOCUS.match.centre.bend: true` (`?s3=focus` only).
- `tunnel_r9_match.js`: `MT_BEND`; with it, `mtPlace` takes the point's world position and works out its place from where it
  really is seen from the camera, in the camera's own track frame (`W - cameraPosition` along `uLqSide`, `uLqUp`, `uLqFwd`,
  the frame the liquid already sets each picture). On a straight tube this is exactly the old number; where the far tube
  bends it follows the bend, so the original's rings stay concentric on screen. Walls, floor and the far exit all use it.
- `tunnel_r9_match_water.js`: the floor's call passes its world position when `MT_BEND` is on.
- Without the switch the generated shaders are the old ones character for character.
- `WebDemo/tools/screen4/layer_diag.cjs`: optional `VIEW` (for the Pixel 7 checkpoint); the default is unchanged.

## Proof that nothing else moved

- The step 6 build with the switch turned off by a test tune (`{"match":{"centre":{"bend":false}}}`): **0 differing pixels**
  against step 4's frame (`../30_step5_fill_map/layers_step4/base_canvas.png`).
- Where step 6 changes the frame (pixels changed by more than 8 levels, by distance from the original's centre): 0.06-0.10 W
  5.4 %, **0.10-0.16 W 71.8 %**, 0.16-0.25 W 12.0 %, everywhere else 0.0 %. Floor ahead, front water and the splash measure
  the same as step 4 (below).

## The result at the checkpoint (seed 7, 3.0 s, no steering)

Sheets: `10_original_vs_before_vs_after_3.0s_767x1536.jpg` (full frames), `11_zoom_distant_centre_2x.jpg` (new),
`11_zoom_tunnel_centre_2x.jpg`, `11_zoom_wall_bands_2x.jpg`, `11_zoom_floor_ahead_2x.jpg`, `11_zoom_front_water_2x.jpg`,
`12_layer_isolation_before_after.jpg`, `06_pixel7_original_vs_step4_vs_step6_3.0s.jpg` (Pixel 7, 412 x 839, with the HUD).

**By eye:** step 4's distant centre has a smeared pastel patch (pink, mint, cream) stretched over its upper left. In step 6
it is gone: the blue rings continue in toward the centre as concentric bands, then the narrower pink-lavender ring and the
warm core, the original's arrangement.

Measured on the masked water only (`WebDemo/tools/screen4/layer_metrics.py`, its definitions and regions; full table in
`measured.md`):

| region | measure | original | step 4 | step 6 |
|---|---|---|---|---|
| wall rings | ring breakup (along / across rings) | 10.31 | 8.08 | **10.62** |
| wall rings | saturated blue | 58.9 % | 50.2 % | **51.8 %** |
| wall rings | lavender | 10.0 % | 13.5 % | **11.7 %** |
| wall rings | periwinkle | 6.7 % | 14.2 % | 15.2 % (slightly further) |
| distant core | saturated blue | 29.7 % | 15.8 % | **20.3 %** |
| distant core | lavender | 16.0 % | 21.1 % | **16.1 %** |
| distant core | white | 21.7 % | 8.8 % | 8.8 % |
| distant core | pale blue | 20.6 % | 31.2 % | 32.2 % (slightly further) |
| floor ahead, front splash, front water | every measure | | | the same as step 4 |

No overall similarity percentage is claimed.

## The moving game (`13_motion_t*.jpg`; seed 7, the step 4 video's real swipes; Pixel 7 and 1:2)

- **7.7 s** (the path bends hardest): step 6 keeps the original's concentric vortex, rings and the rainbow arc round the far
  centre; step 4 smears it into broad bands across the upper walls.
- **9.0 s:** step 4's far tube is a twisted, off-centre pale swirl; step 6 has concentric rings round the centre.
- **6.5 s:** nearly the same; the rings a little rounder.
- **5.5 s:** almost no change (2 % of the pixels); the bright pale disc at the centre (the user's kit, 02 frame) is in both:
  it has another cause and is NOT fixed by this step.
- The per-region numbers at these moments are mixed (`measured.md`, `motion_*`): the boxes are the 3.0 s frame's, while
  the tunnel's centre and the objects move, so they mix objects and water; judged by eye, as the brief asks.
- The step 4 shots are the last session's (`../30_step5_fill_map/motion/before_*`); re-captured here at 5.5 s, the raw 3D
  canvas is identical (0 differing pixels) on both framings. (The page shots differ only in the interface text, which this
  new machine draws a few pixels differently.)

## Tests

| test | result | file |
|---|---|---|
| step 6 with the switch off (test tune) | identical to step 4, 0 differing pixels | (above) |
| identity: the normal game, the ten older switches, `match`, `match,nofoam` (41 raw-canvas frames, the same set as steps 3 and 4) | all 41 identical, 0 differing pixels, no console errors | `identity_proof_step6.txt`, `scripts/identity.sh` |
| gameplay `s3_func` (`focus`) | lanes, jump, 12 coins, 1 gem, 2 socks, keyboard start, no console errors; the report identical to step 4's but for the new setting `"bend": true`; draw calls 136 in the tunnel, the same triangles | `gameplay_s3_func_focus.txt` |
| gameplay `r2_func` (`focus`) | hearts (5 knocks, back to "5 Full"), pause (and keyboard pause), Bubble Blast (and empty), Turbo Spin; the report identical to step 4's; no console errors | `gameplay_r2_func_focus.txt` |
| build | `node build.mjs` in the main checkout gives md5 `1784ffd71974d25999c65c53f0848e27`, the tested build byte for byte | |
| cost | no new texture, pass or draw call; a few multiplies per wall and floor pixel | |

## Corrected / remaining (against the original)

Corrected by step 6:
- [x] the far rings concentric on screen while the path bends (stripe stretch 1.36-1.56 / 0.72 -> 1.0 in every band);
- [x] the smeared pastel / lavender band above the far centre (core lavender 21.1 -> 16.1 %, the original 16.0 %);
- [x] the walls' ring structure (breakup 8.08 -> 10.62, the original 10.31);
- [x] holds while moving (7.7 s and 9.0 s).

Remaining (in the plan's order):
- [ ] the original's crisp white splashes and deeper cobalt on the walls and in the core: step 5 (the fill-only map) is now
  re-tested ON TOP of step 6, the reason it was held;
- [ ] the bubble overlays veiling the walls (35 % of the tunnel; the original has a handful): step 7;
- [ ] the pale disc at the far centre at 5.5 s (another cause; to diagnose);
- [ ] the 03:47 directive: fewer oversized brush shapes, a clean coin / gem runner path;
- [ ] the floor ahead and the water in front: paler and smoother than the original (unchanged since step 4).
