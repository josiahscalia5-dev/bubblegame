# Screen 4 water floor and tunnel: layer diagnosis (eleventh session, 6 November 2026, about 01:00 UTC)

- **Authority:** the ORIGINAL approved Screen 4 only
  (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`, 767 x 1536).
- **Scope:** `?s3=focus` as it stands on this branch, water floor and tunnel only; the pink character untouched.
  - That is step 3 (`13fccff`) plus one change the tenth session left in its 23:45 UTC autosave (`fa55483`), never
    reported as a tested step: "pass 4a". It turned the brushes' warning stripes on the floor from a magenta glow into
    aqua-white (`FOCUS.water.liquid.hazard`: `#c4f2ff`, 0.3; `tunnel_r8_liquid.js`; bundle rebuilt).
  - That magenta stripe was the floor's "pink-violet" in the user's step 3 review. It explains why the floor ahead here
    measures only 0.9% lavender.
  - The bundle is not changed by this session.
- **Diagnosis only: no game code or setting was changed.** Every test is a runtime switch (layers hidden, post passes off),
  a test tune (`window.__BW_S3_TUNE__`), or a texture served in place of the shipped one through Playwright's request
  interception. `WebDemo/textures/` and `WebDemo/src/` are untouched.

## The frame

- Seed 7, `advance(0.5)`, tap, `advance(3.0)`, no steering, the game's own camera: exactly `tools/screen4/liquid_shots.cjs`.
- Game time 3.517, z 1.592, camera (-0.162, 1.599, -1.508): the same state as the previous session's `25_pass4_water`
  capture, and the same in every variant (`variant_metrics.json`, `_state`).
- Device scale 1536/1076: the 3D canvas is 768 x 1536, resized to 767 x 1536 for comparison.
  - `07_current_focus_3.0s_canvas_767x1536.png`
  - `08_V1_floor_lift_off_3.0s_canvas_767x1536.png`
  - The page screenshot with the interface (`abl/base_page.png`) clips at 768 x 1525 at this scale, so the analysis uses
    the raw canvas.
- **Determinism:** rendering the frame twice gives 0 differing pixels. After all 42 ablations, the restored frame also has
  0 differing pixels against the first.

## Tools (new, diagnostic only)

- `WebDemo/tools/screen4/layer_diag.cjs`:
  - captures the frame;
  - takes a census of every visible layer (`census/census.json`: 245 renderables with material, blending, transparency,
    render order, screen box, sampled textures and shader output line);
  - re-renders the SAME frame with each layer group hidden or each post pass off (`ablations.json` → `abl/abl_<label>.png`);
  - `TUNE=` for test settings, `ROUTE_RINGS=` to serve another ring map.
- `WebDemo/tools/screen4/layer_metrics.py` (OpenCV 5.0, scikit-image 0.26): region metrics, original against game and
  every ablation (`metrics.json`). Its docstring has every definition.
- `scripts/map_stages.py`: the ring map at each derivation stage, wrapped back onto the frame and measured (`map_stages.json`).
- `scripts/variant_metrics.py`: the six in-engine variants (`variant_metrics.json`).
- `scripts/sheets.py`: the images below.

## Regions and measures

- **Regions:** the user's four annotated boxes from the step 3 review pack, plus a front-water strip:
  1. wall rings;
  2. distant core;
  3. floor ahead;
  4. front splash;
  5. front water, y 0.845-0.905.
- **Mask:** coins, gem, sock, brushes and the character are masked out of BOTH images with one union mask, so only water
  and tunnel pixels are compared.
- **HSV colour classes (shares of the region):**
  - saturated blue: hue 190-235, s ≥ 0.5;
  - pale blue: hue 165-215, s 0.12-0.5, v ≥ 0.7;
  - periwinkle: hue 215-235, s 0.12-0.5, v ≥ 0.7;
  - lavender: hue 235-320, s ≥ 0.08;
  - white: s < 0.12, v ≥ 0.85.
- **Other measures:**
  - Lab chroma;
  - "detail": the standard deviation of a difference of Gaussians on L*, sigma 1-4 px;
  - white pieces: count per 10k px and mean area;
  - ring breakup: the variance along each ring against the variance across rings, in a polar unwrap round the original's
    vanishing point.
- **No overall similarity percentage is claimed.**

## Findings

### 1. The original is two-tone everywhere; the game sits in the middle

In each region the original is white splash next to saturated blue. The game has the mid-tone between them: pale blue or
periwinkle.

| region | measure | original | focus now |
|---|---|---|---|
| floor ahead | pale blue / saturated blue / white | 34.5 / 18.0 / 32.0 % | **74.5** / 11.5 / 9.0 % |
| floor ahead | detail; L* p5-p95 spread | 3.41; 32.7 | 2.29; 26.2 |
| distant core | saturated blue / white / lavender + periwinkle | 29.7 / 21.7 / 23.8 % | 15.8 / 8.7 / 36.1 % |
| wall rings | saturated blue / lavender + periwinkle / detail | 58.9 % / 16.7 % / 4.89 | 50.2 % / 27.7 % / 3.47 |
| wall rings | white pieces per 10k px / mean area / ring breakup | 3.45 / 237 px / 10.3 | 9.45 / 70 px / 8.1 |
| front splash | pale blue / white | 18.0 / 28.9 % | 64.2 / 15.8 % |
| front water | saturated blue / pale blue / white / L* p5 | 21.3 / 41.3 / 18.0 % / 60.0 | 27.3 / 60.9 / 9.4 % / 61.3 |

- **White splashes:** the game's whites are "confetti": 2.7-3.6 times as many pieces, each 3-7 times smaller, thinner
  (elongation 3.4-3.8 against 2.0-2.4), and less white in total. **More streaks would make that worse.**
- **Foreground depth:** the front water is NOT short of deep blue (more saturated blue than the original; dark end L* p5
  about equal, 61.3 against 60.0). What it lacks is the white crests; `heroSwell`'s palette makes it 61% pale blue.
- **Lavender:** at this frame and framing the excess is in the TUNNEL (walls +11, core +12 points of lavender + periwinkle),
  not the floor ahead (0.9% against the original's 11.1%).

### 2. Which layer does what (`metrics.json`, `04_layer_ablations.jpg`)

- **Post-processing is not the cause.**
  - With bloom, grade and tone mapping all off, every region gets LESS saturated: saturated blue −5.5 (walls) to −10.4
    (front water). The shaders already pre-invert the display chain (`mtUndisplay`; step 3's constant-colour test showed
    the display path exact).
  - Bloom alone changes the front water by 2.3 of 255.
- **The floor ahead is `lqFloor` alone.**
  - Its alpha is 1 at this moment.
  - Hiding every overlay changes the floor ahead by +1.8 points of saturated blue. Hiding `lqFloor` exposes the old base
    water (periwinkle).
  - So the pale blue is produced INSIDE `lqFloor`'s shader (`matchFloor`), not by transparency over the lavender shell.
- **The tunnel's veil is its overlays.**
  - Hiding all overlays: walls' saturated blue 50.2 → 59.5 (original 58.9), core 15.8 → 23.1.
    (That ablation also hid the brushes, sock and gem; their pixels are in the mask, so not measured.)
  - `mwTunnelBubbles` alone: +5.0 and +4.8.
- **The core's lavender is drawn by `heroWalls` itself.** Hiding it removes 12.7 points of lavender and 5.3 of periwinkle.
  The map underneath carries the original's level (15.4% lavender against 16.0%), so the wall shader adds about 5 points
  over it. Not yet pinned to one line.
- **The front water is `heroSwell`.** Hiding it changes the strip by 57 of 255; it alone is the 61% pale blue there.

### 3. Why the water loses its original texture (`map_stages.json`)

The original unwrapped round its vanishing point and wrapped straight back is lossless: identical shares, detail 4.86
against 4.89. The loss is in the derivation (`tools/screen4/derive_ring_map.py`; the default derivation reproduces the
shipped map byte-for-byte):

| stage, wall rings / floor ahead | saturated blue | white | detail |
|---|---|---|---|
| original | 58.9 / 18.0 | 8.2 / 32.0 | 4.89 / 3.41 |
| shipped map (whites masked, 6° x 1.2 rows blur, 512 columns) | 68.5 / 50.6 | **0.1 / 0.0** | **2.15 / 1.38** |
| whites kept, 1° x 0.5 rows | 65.3 / 11.0 | 5.4 / 17.2 | 3.42 / 2.31 |

- The shipped map KEEPS the blue: it is more saturated than the original.
- It loses 56-60% of the texture and all the white:
  - `WHITE_OUT` (s < 0.22, v > 0.82) masks out the white splash and the palest blue;
  - only 29.6% of the texels are the original's own pixels; the rest are filled by the blur;
  - the 6° blur along each ring makes bands of the average colour.
- The white then comes back as separate procedural flecks, streaks and bubbles: the confetti above.

### 4. Why the floor loses its saturation (`variant_metrics.json`, `05_zoom_floor_ahead_2x.jpg`)

**The cause:** `MATCH_WATER.floorFx` in `WebDemo/src/tunnel_r9_focus.js` (`focusFloorGLSL`):
`c = mix(c, #b6dcf6, 0.55)` on every floor pixel. Every pixel is pulled 55% toward ONE pale blue.

- #b6dcf6 was the original's median there. The median of white splash mixed with cobalt is exactly that pale blue, so
  matching it flattens the two-tone water into the mid-tone.

| floor ahead | saturated blue | pale blue | white | detail | L* mean | L* p5-p95 |
|---|---|---|---|---|---|---|
| original | 18.0 | 34.5 | 32.0 | 3.41 | 84.7 | 66.0-98.7 (32.7) |
| focus now (lift 0.55) | 11.5 | 74.5 | 9.0 | 2.29 | 81.4 | 69.7-95.9 (26.2) |
| **V1: lift 0** | **28.2** | **53.9** | 9.9 | **3.09** | 78.8 | 62.3-96.1 (**33.8**) |
| V2: lift 0 and the floor's streaks off | 34.9 | 51.6 | 4.2 | 2.57 | 76.7 | 59.9-94.0 |
| V7: the warning stripe (pass 4a) at 0, lift kept | 13.6 | 72.0 | 9.3 | 2.46 | | |
| V8: the warning stripe at 0 and lift 0 | 32.7 | 48.4 | 10.4 | 3.46 | | |

- The aqua-white warning stripe adds only about 2.5 points of the pale blue (V7). The lift is the main cause (20.6
  points, V1). The stripe is gameplay feedback and stays.
- V1 also lifts the front splash's saturated blue from 16.3 to 23.1%.
- V1 leaves the walls unchanged and the core within 0.1 point.

### 5. Can the reference texture be preserved better in the 3D scene? (variants V3-V6)

The same frame was rendered with another ring map served to the game.

- **V3, whites kept with a light blur (1° x 0.5 rows, 2048 columns):**
  - the walls' white pieces take the original's size: 213 px mean against 237 (now 70);
  - ring breakup 9.95 against the original's 10.31 (now 8.08);
  - detail 3.47 → 3.85.
  - But white overshoots (walls 14.5% against 8.2; core 30.2% against 21.7), because the procedural flecks and bubbles
    still draw on top, and the whites render soft (`06_zoom_upper_wall_2x.jpg`).
  - **Promising, but it needs the procedural whites removed in the same step.**
- **V4, the map carried over the whole floor ahead:** worse (periwinkle 23.6%). The original's floor ahead does not map
  cleanly through the walls' angle and log-radius frame: her body and the sock are filled in there.
- **V5, the walls with only the map (extras off):** close to V3. The wall shader's extras are not what desaturates it.
- **V6, the default map at 2048 columns:** identical to now. The 512-column downsample is not the limiting loss; the blur
  and white mask are.

## The single most promising correction (proposed; NOT applied, waiting for the user's review)

**Remove the floor's pale lift: `floorFx.lift` 0.55 → 0 in `WebDemo/src/tunnel_r9_focus.js` (`?s3=focus` only).**

- **Measured in the real 3D scene:** it is the largest single measured flattening on the floor, and the user's first
  priority (a visibly blue water body). Removing it restores the floor's saturation and tonal range and most of its lost
  texture (table in 4).
- **Narrow:** one value. Walls, core, character, gameplay and every other switch are untouched.
- **No white streaks are added.**
- **Remaining after it:** the original's chunky white splash (32% of the floor ahead against 10%). Next, as its own step:
  the original's own whites through the map (V3) in place of the procedural confetti and the tunnel bubbles' veil.
  Not by more streaks.

## Images

- `01_full_original_vs_now_vs_V1_vs_V3.jpg`: the regions boxed.
- `02_colour_classes_original_vs_now_vs_V1_vs_V3.jpg`: each pixel coloured by its class; objects black.
  - saturated blue: blue;
  - pale blue: light blue;
  - periwinkle: violet-blue;
  - lavender: lilac;
  - white: white.
- `03_crop_<region>.jpg`: 1:1 crops.
- `04_layer_ablations.jpg`: now, `lqFloor` hidden, tunnel bubbles hidden, all overlays hidden, all post off, `heroSwell`
  hidden.
- `05_zoom_floor_ahead_2x.jpg` and `06_zoom_upper_wall_2x.jpg`.
- `map_stages/`: each map wrapped back onto the frame.
