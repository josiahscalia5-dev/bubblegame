# The next corrections: investigation only (6 November 2026, about 02:30 UTC)

- **The user's brief (6 November):**
  - Restore the ACTUAL irregular white-and-aqua splashes of the approved image, with its vivid cobalt currents. No uniform
    white dashes, confetti, pale-blue blending or foam cushions.
  - Find how the texture derivation can keep those authentic patterns while the duplicate procedural flecks are reduced.
  - Investigate the bubbles veiling the walls and the extra lavender in the distant core.
  - **Do not implement yet.** Do not touch the pink character.
- **Nothing in the game was changed.** Every image here is the real 3D game (the step 4 build, `666905c`) rendered at the
  same frame (seed 7, 3.0 s, no steering, the game's camera), with either:
  - a test tune (`window.__BW_S3_TUNE__`), or
  - a ring map served in place of the shipped one (Playwright request interception, `layer_diag.cjs ROUTE_RINGS`).
- **Measures:** `WebDemo/tools/screen4/layer_metrics.py` (regions, mask and definitions as in `../26_layer_diagnosis`);
  `summary_metrics.json`, `runs_metrics.json`. No overall similarity percentage is claimed.

## 1. Why the authentic splashes are lost, and how to keep them

**The cause is in `WebDemo/tools/screen4/derive_ring_map.py` → `derive_tunnel_textures._lowfreq`.**

- `_lowfreq` is a normalised low-pass filter applied to EVERY texel, including those where the original's water is clearly
  visible. So the original's own splash shapes are thrown away everywhere, not only behind objects.
- `WHITE_OUT` (s < 0.22, v > 0.82) masks the white splash out before the blur.
- Only 29.6 % of the texels are the original's own; the rest are filled.
- The map is then downsampled to 512 columns. On its own this is not the limiting loss (test V6 in `../26_layer_diagnosis`).

**The alternative tested: a "fill-only" map** (`scripts/fill_only_map.py`, `maps/M2_fill_only_whites_kept.png`, 2048 x 1024):

- the original's own pixels kept wherever its water is visible, whites included (40.9 % of the texels);
- the low-pass fill used ONLY in the holes (objects, interface, character, beyond the mouth), with a soft edge.

Wrapped back onto the frame, before any rendering (`01_map_derivation_shipped_vs_fill_only.jpg`, `map_variants.json`):

| walls (box 1) | original | shipped map | fill-only map |
|---|---|---|---|
| white | 8.2 % | 0.1 % | 5.6 % |
| white pieces per 10k px / mean size | 3.45 / 237 px | 0.27 / 28 px | 2.39 / 233 px |
| fine texture (detail) | 4.89 | 2.15 | 3.95 |
| distant core (box 2): white / mean piece size | 21.7 % / 414 px | 1.7 % / 85 px | 20.2 % / 384 px |

**In the real 3D scene** (`02_walls_texture_2x.jpg`, `03_core_texture_2x.jpg`). In T3, the duplicate procedural whites
are off: the walls' flecks (`walls.flecks`) and the tunnel's floating white streaks (`bubbles.flecks`).

| walls (box 1) | original | step 4 (now) | T1 fill-only map | T3 + duplicate whites off |
|---|---|---|---|---|
| white pieces per 10k px / mean size | 3.45 / 237 px | 9.45 / 70 px | 6.80 / 214 px | 5.48 / 246 px |
| ring breakup (high = broken, low = smooth bands) | 10.31 | 8.08 | 10.51 | 9.47 |
| detail | 4.89 | 3.47 | 4.09 | 3.81 |
| lavender + periwinkle | 16.7 % | 27.7 % | 23.8 % | 23.7 % |
| saturated blue | 58.9 % | 50.2 % | 48.9 % | 49.9 % |

**What works:**

- The original's own curls, dot clusters and "~" marks appear in the 3D walls, at their places.
- They move with the walls' water.
- The white pieces take the original's size instead of confetti.

**What an implementation must fix (visible in the images):**

- **Blocky fill patches:** the holes are filled with the blur, and the object masks are rectangles, so lighter rectangular
  patches show where the original had a bubble or an object (above the core, right of it). A fill that copies texture along
  the same ring (angle-wise), with wider feathering, should hide them.
- **Soft whites:** the whites render softer and lower in contrast than the original's:
  - the map is sampled with mipmaps at an angle;
  - the wall shader still mixes 8 % procedural colour and its relief over the map.
- **The floor ahead cannot come from this map.** In the original, her body, the sock and the coins hide most of it (the
  fill-only map has 19.3 % periwinkle there against 7.4 %). The floor's authentic whites need their own source (for
  example a patch cut from the original's visible floor water). Its procedural white streaks should stay until then:
  without them the floor's white falls from 9.9 % to 4.2 % (`../26_layer_diagnosis`, V2).
- **Texture memory:** a 2048-column map is 4 x the shipped map (about 11 MB with mipmaps). 1024 columns may be enough;
  to measure.

## 2. The bubbles veiling the walls (`04_bubbles_tunnel.jpg`)

- **The layers drawn over the tunnel area (boxes 1 and 2) cover 35 % of it.**
  - Under them the water's saturation falls from 0.47 to 0.32 and its brightness rises by 23.
  - By layer:
    - the tunnel bubbles (`mwTunnelBubbles`: 160 bubbles and 80 white streaks in one draw call): 17.3 %;
    - `heroBubbles`: 9.2 %;
    - `r5Droplets`: 4.4 %;
    - `s4Bubbles`: 3.2 %.
- **The original:** about 4-5 clear bubbles in that area (counted by eye: one large at the upper right, two medium, one
  small). Its sparkle is white-aqua splash shapes, not bubbles. The game shows about 40 or more, mostly clustered over the
  middle rings.
- **Tests:**

  | test | walls saturated blue | core saturated blue |
  |---|---|---|
  | step 4 | 50.2 % | 15.8 % |
  | B1: 80 bubbles | 52.7 % | 18.6 % |
  | B3: 40 bubbles | 53.0 % (+2.8) | 19.3 % (+3.5) |
  | B2: bubble bodies clear, `body` 0 | +1.0 | +0.9 |

- **So the veil is mostly how many bubbles there are and how much they cover, not their tint.**
- The other bubble layers (`heroBubbles`, `s4Bubbles`) cover another 12 % and were not reduced in these tests.

## 3. The extra lavender in the distant core (`05_core_calibration_stripes.jpg`, `06_core_colour_original_vs_now_vs_R4.jpg`)

- **Where:** a ring 0.09-0.15 W round the centre, upper half.
  - lavender + periwinkle: 53.4 % against the original's 28.1 %;
  - mean colour (199, 197, 224) against (201, 213, 236); red above green, where the original has green 12 above red.
- **Not the cause:**
  - post-processing;
  - the overlays;
  - each of the wall shader's own settings (core tint, glint, lift, saturation, relief, map amount, flecks, specular:
    C1-C8, all 49.7-54.2 %);
  - the map's colours there (the fill-only map matches the original: 25.3 % against 28.1 %).
- **The cause, measured with a calibration map** (red and blue stripes every 0.01 W of map radius, served to the game):
  - outside 0.16 W the stripes land 0.01 W apart, as placed;
  - between 0.10 and 0.16 W, in the upper half, ONE stripe covers 0.04-0.06 W of screen: a 4-5 x radial stretch.
- **Why:** the walls' placement (`mtPlace` in `tunnel_r9_match.js`: cross-section offset over distance along the track)
  assumes a straight tube. The probe of the wall vertices (`scripts/wall_geometry_probe.cjs`, `wall_vertices_3.0s.json`)
  shows the path bending from about 15 m ahead:

  | distance ahead | axis x | axis y |
  |---|---|---|
  | 13 m | 0 | 1.5 |
  | 19.6 m | 0.28 | 1.92 |
  | 22.5 m | 0.41 | 1.97 |
  | 28.8 m | 0.88 | 1.46 |

  On the upper walls that bend stretches the ring radius over the screen band 0.10-0.16 W. The original's narrow pastel
  pink-violet ring (about 0.10 W) is therefore spread into a wide lavender band.
- **The centre blend (`MATCH.centre.r` 0.09-0.14) is not the cause.**
  - With it off (K2) the stretch stays.
  - Moved inward to 0.04-0.06 (K3, R3) it does not help: 58.5 %.
- **Locking the rings to the screen over the whole bent part (`centre.r` 0.17-0.21; K4, R4):**
  - the widest stripe goes from 0.041-0.057 to 0.030-0.039 W;
  - the band's lavender + periwinkle goes 53.4 → 40.5 % (original 28.1);
  - mean colour (197, 203, 225);
  - core saturated blue 15.8 → 20.2 % (29.7);
  - the walls' ring breakup 8.08 → 10.44 (10.31).
  - Some stretch remains inside the new blend band, so the proper fix is a placement that follows the bent axis, not a
    wider blend.

## 4. Together (preview only: `07_combined_preview_full_frames.jpg`, `08_combined_preview_tunnel_1to1.jpg`)

- **P1:** the fill-only map, the duplicate wall flecks and tunnel streaks off, the core screen-locked.
- **P2:** P1 with 40 tunnel bubbles.

| | original | step 4 | P1 | P2 |
|---|---|---|---|---|
| walls: white pieces / mean size | 3.45 / 237 px | 9.45 / 70 px | 6.01 / 198 px | 3.71 / 291 px |
| walls: ring breakup | 10.31 | 8.08 | 12.38 | 10.39 |
| walls: saturated blue | 58.9 % | 50.2 % | 51.5 % | 54.6 % |
| walls: lavender + periwinkle | 16.7 % | 27.7 % | 23.0 % | 21.7 % |
| core: white pieces / mean size | 5.25 / 414 px | 14.27 / 57 px | 10.50 / 264 px | 6.40 / 415 px |
| core: lavender + periwinkle | 23.8 % | 36.1 % | 27.0 % | 25.5 % |
| core: saturated blue / white | 29.7 / 21.7 % | 15.8 / 8.8 % | 17.5 / 28.2 % | 20.6 / 26.8 % |

- Still short: cobalt saturation (walls 54.6 against 58.9; core 20.6 against 29.7), the soft whites, and the floor ahead's
  white.

## Recommended next correction (step 5; NOT implemented; waiting for the user)

**Draw the walls from a fill-only ring map that keeps the original's own pixels and whites, and remove the duplicate
procedural whites it replaces on the walls.**

- **The map:** `derive_ring_map.py` gets a fill-only mode. It keeps the original's own pixels where the water is visible,
  whites included, and fills ONLY the holes, angle-wise along the ring with feathered edges, so there are no rectangular
  patches.
- **The duplicate whites removed:** the walls' fleck layer and the tunnel's floating white streaks.
- **Kept for now:** the floor ahead's streaks, until the floor has an authentic source.
- **Scope:** `?s3=focus` only. The pink character untouched. The same tests as step 4.

It is the user's main request, and the measured gain is the largest one available: white pieces at the original's size
instead of confetti, ring breakup back to the original's, and texture +10 %.

**Then, each as its own step:**

- **step 6:** the core's ring placement made to follow the bent tube (the lavender band; R4 is the measured first
  approximation);
- **step 7:** the tunnel bubbles from 160 toward the original's handful, and a review of `heroBubbles` and `s4Bubbles`.

T3 alone leaves the core's white a little over the original (29.4 against 21.7 %) and its blue a little lower (13.2
against 15.8 %). Step 6 corrects most of that (P1).
