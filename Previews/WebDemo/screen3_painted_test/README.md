# Painted scenery in the 3D opening (`?s3=paint`, test only, not approved, not merged)

These are seeded Playwright screenshots of the running game, from headless Chromium with software WebGL. Nothing was tried on a real phone. The full-screen opening artwork is off in every shot, so this is the live scene.

- **Switches:** `?s3=paint` (door open) and `?s3=paint,vortex` (painted vortex at Tap to Start).
- **Saved checkpoints:** `591db28`, `ad518e3`, `4711680` and `2e11011` are untouched.
- **Your normal game:** unchanged.

## What it is

**Painted, exactly as approved:** the far part of the approved Screen 3: the castle, its towers, the gold washer-door ring with its violet band, and the gears at the door's foot.

**Real 3D, unchanged:** everything near the camera:
- the pink mascot, the slide, the water, the foam and soap suds, and the bubbles;
- the Number 1 brush and the Number 2 machinery;
- the icy slide edges and the opening camera from the saved camera test.

**The painting as scenery:**
- It is a flat facade standing across the run at the door. It is projected from the Tap to Start camera, so at Tap to Start it lines up with the approved screen.
- After the tap it moves like a real wall at that distance as the camera rides toward it.
- The door's centre is open. The real tunnel shows through it, and the mascot rides through it.

**Exact colours:**
- The painting is laid in after the game's glow, colour grade and tone mapping, so its colours are shown exactly as painted.
- The earlier attempt tried to pre-correct the colours instead. That cannot work for the brightest pinks and golds, because tone mapping cannot produce them.

**What stays in front:** wherever the 3D scene has something solid nearer than the facade (slide, water, mascot, brush, machinery, coins), that is drawn instead. This is read from the scene's depth.

**Hidden while the test is on:** the old castle model, the door's lavender wall facing, the four Meshy entrance decorations and the code-built waterfalls. These are the parts the painting replaces, and all of them stand in front of the facade. The Meshy castle and entrance models are not loaded.

**`?s3=paint,vortex`:**
- The painted vortex fills the door at Tap to Start.
- It dissolves into the real tunnel from 0.1 to 0.7 s after the tap.
- The duck is left out: the vortex fades out just above it.

**Code and tools:**
- Code: `WebDemo/src/painted_layer.js`. It is switched on in `screen3_models.js`, and `game.js` hands it the composer and the waterfalls.
- Painting: `WebDemo/ui/s3_painted_far.png`, made by `WebDemo/tools/paint_prep.py` from `ui/approved_screen3.png`, which is left untouched.

## The painted interface, and what replaces it

The approved picture has the game's interface painted into it.

| Painted part | What the test does |
|---|---|
| Top bar | Under the live top bar at Tap to Start, then it slides off the top. Filled with the soft colour just below it. |
| "Let's go!" banner | Covered by the live banner at Tap to Start. It shows for about 1.5 s after the tap while it scrolls off the top. Filled: the castle wall's own colour spread in from around it, a soft grain, the two inner towers carried down, and the gold ring's top rebuilt from its own sides (`05_banner_fill_before_after.png`). |
| Tap to Start panel, slide, mascot, duck | Not used: everything below the castle is real 3D. |
| Phone frame border | Mirrored from just inside. |

The prepared layer is in `06_prepared_layer_over_checkerboard.png`; the checkerboard is where the 3D scene shows. It includes margins for screens wider or taller than 1:2.

## Files

| File | What it shows |
|---|---|
| `01_tap_to_start.png` | Approved, the saved camera test (`2e11011`, 7/10), the painted test, and the vortex variant at Tap to Start |
| `02_after_the_tap.png` | 2.5–5.5 s, the saved test above and the painted test below, with the same seed and inputs |
| `03_vortex_opening.png` | `?s3=paint,vortex`: the painted vortex opening into the real tunnel |
| `04_phone_shapes.png` | A tall phone (390 × 844) and a wider stage (600 × 1000) |
| `05_banner_fill_before_after.png` | The banner area, painted and filled |
| `06_prepared_layer_over_checkerboard.png` | The prepared layer |
| `frames/` | Full-size frames: the saved test, the painted test and the vortex variant at Tap to Start, and the painted test at 3.0 and 4.0 s |

## Measured against the approved Screen 3 at Tap to Start

From `tools/paint_measure.py`, all at 538 × 1076:
- **Colour** is the CIE76 ΔE of each region's mean colour. Lower is closer.
- **SSIM** and **edges** measure structure. Higher is closer, and 1.0 would be identical.
- The live interface areas are left out of every region.
- These are not the same region boxes as the earlier rounds' tables, so compare within this table only.

| Region: colour / SSIM / edges | Saved camera test | Painted, door open | Painted + vortex |
|---|---|---|---|
| Castle top | 10.3 / 0.306 / 0.023 | **1.0 / 0.883 / 0.789** | **1.0 / 0.883 / 0.789** |
| Castle sides | 13.0 / 0.108 / 0.012 | **2.4 / 0.530 / 0.303** | **2.4 / 0.530 / 0.303** |
| Door | 8.3 / 0.123 / −0.044 | 8.6 / 0.367 / 0.228 | **1.8 / 0.443 / 0.389** |
| Left brush | 5.8 / 0.127 / 0.011 | 5.7 / 0.131 / 0.012 | 6.7 / 0.140 / 0.022 |
| Right machinery + bubble | 7.4 / 0.200 / 0.059 | 5.2 / 0.204 / 0.061 | 5.0 / 0.208 / 0.062 |
| Slide, water and mascot | 17.5 / 0.138 / 0.015 | 18.1 / 0.138 / 0.006 | 16.9 / 0.140 / 0.011 |
| **Average** | 10.4 / 0.167 / 0.013 | **6.8 / 0.376 / 0.233** | **5.6 / 0.391 / 0.263** |

What the numbers say:
- **The castle now matches the approved screen.** Its colour difference fell from 10–13 to 1–2.4.
- **The door matches only with the vortex variant.** With the door open, the opening shows the real blue tunnel instead of the approved white-pink vortex.
- **The near half is the same 3D as before**, so it measures the same. It is now the main difference: the approved slide is pale icy water with heavy white foam.

## Honest scores (out of 10)

| | Saved camera test | Painted, door open | Painted + vortex |
|---|---|---|---|
| Castle (#4) | 6.5 | 9.5 at Tap to Start, 8 while riding in | same |
| Washer entrance (#3) | 6 | 8 | 9.5 at Tap to Start |
| Blue brush (#1), gold machinery (#2), bubbles (#5) | 6.5 / 6.5 / 6 | unchanged | unchanged |
| Slide, water and mascot composition | 7.5 | 7.5 | 7.5 |
| **Whole opening at Tap to Start** | **7** | **8** | **8.5** |
| **While riding to the door** | 7 | 7.5–8 | 7.5–8 |

**What holds it back:**
1. **The banner fill.** From about 2.5 to 4.0 s the area above the door is the filled wall: plain and soft next to the painting around it.
2. **Sharpness.** The approved picture is only 735 pixels wide, so the castle and door look soft once the door fills the screen (4–5 s).
3. **The near half** is unchanged 3D: the slide's colour and foam, the brush and machinery designs.

**What would help most:** a copy of the approved Screen 3 without the interface (no banner, top bar or Tap to Start panel), ideally larger. With it, `paint_prep.py` needs no fill, and the castle stays sharp longer.

## Checks

**Gameplay.** Same seed and inputs as the earlier tests.
- At every shot the game state is identical with and without the test: position, lane, speed, coins, gems, socks and the gameplay camera.
- At 9.0 s every version is at z 29.895, lane 2, 1,292 coins, 37 gems, 3 socks.
- **Per-frame traces** (13 s, 390 frames, seed 7, `tools/trace.cjs` with `tools/trace_diff.py`):
  - `?s3=paint` and `?s3=paint,vortex` match your normal game in every frame: position, height, lane, speed, jumps, laps, gameplay camera and pickups.
  - All end with 12 coins, 2 gems and 3 socks collected, after 1 lap.
  - Your normal game's trace is byte-identical before and after this change, and the `?s3=all,edges,cine` checkpoint's matches in every frame too.

**Pixels** (more than 2/255 counts as different):

| Comparison | 3D view |
|---|---|
| Your normal game (no switch), previous build vs this build, at 0, 3.5, 5.5 and 9.0 s | identical (0 px) |
| Saved checkpoint `?s3=all,edges,cine`, previous build vs this build, at 0, 3.5, 5.5, 7.0 and 9.0 s | identical (0 px) |
| Inside the tunnel, `?s3=paint` vs the saved checkpoint, at 5.5, 7.0 and 9.0 s | identical (0 px; with both runs from the same batch, 0 px including the top bar) |

- **The top bar's counters** differed by up to 548 px between runs taken at different times, even with no switch. That is the page's text, drawn by the browser over the game, not the 3D view or this change.
- **Errors:** no console errors or warnings in any run.

## How these were made (from `WebDemo/`)

```sh
python3 -I tools/paint_prep.py [debug-dir]       # the painted layer (deterministic: the same bytes every run)
node build.mjs
VIEWPORT=700x1084 node tools/paint_shots.cjs "$PWD" <frames> s3=paint paint 0 2.5 3.0 3.5 4.0 4.5 5.0 5.5
VIEWPORT=700x1084 node tools/paint_shots.cjs "$PWD" <frames> s3=paint,vortex vortex 0 2.2 2.4 2.6 2.8 3.0
VIEWPORT=700x1084 node tools/paint_shots.cjs <build before this change> <frames> s3=all,edges,cine saved 0 2.5 3.0 3.5 4.0 4.5 5.0 5.5
VIEWPORT=390x844 node tools/paint_shots.cjs "$PWD" <frames> s3=paint tall 0 3.0
VIEWPORT=600x1000 node tools/paint_shots.cjs "$PWD" <frames> s3=paint wide 0 3.0
python3 -I tools/paint_evidence.py <frames> <this folder>
python3 -I tools/paint_measure.py ui/approved_screen3.png <frames>/saved_t00.0.png <frames>/paint_t00.0.png <frames>/vortex_t00.0.png
QUERY=s3=paint node tools/trace.cjs "$PWD" trace.json 7    # per-frame game state; compare with tools/trace_diff.py
```
