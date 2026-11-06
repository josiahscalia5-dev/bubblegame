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
