# Scene 6: the approved art against the current game (art director, session 47f75e22)

Read-only review. Nothing here is approved; the user reviews.

- **Target, the only one:** `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png`, 864 x 1536.
  - The kit's `02_APPROVED_SCENE_6_FULL.png` has the same pixels (mean absolute difference 0.0).
  - Its UI is masked out of every measurement: top bar, logo, Laundry Toss plaque (y 0.095-0.225), caption (y 0.795-0.86) and Start bar (y > 0.86).
- **Game:** `baseline/s56_206.png`, bundle 6a78d7ae, mascot at u 206. `baseline/s56_tap.png` is Tap to Start.
  - The game's HUD is masked out too: top bar, mission panel, pause, hint and power-up buttons.
- **Side by side:** `qa/sbs_approved_u206_tap.png`.
- **Scripts:** `qa/scripts/*.py`.
  - Run `hero.py` first, from any scratch folder. It writes the hero masks that `water.py` and `water2.py` read.
  - Use `$BW_PY`, the visual venv with OpenCV 5.0, scikit-image 0.26 and SciPy 1.18.
- **Live test (new account):**
  - Reading images worked.
  - Bash worked.
  - Python worked: system python3 with PIL 12.3 and NumPy 2.5, and the visual venv.
  - No browser was launched.
- **Coordinates:** fractions of W (x) and H (y), origin at the top left.
- **Colours:**
  - "frame" colours are sRGB hex as displayed.
  - "lin" is the displayed value in linear light.
  - "pre-grade input" is my inverse of the grade pass (`uSat` 1.32, `uContrast` 1.12 about 0.18). It does **not** include the `uS4Grade` path, which stays at 1 after the drum mouth. Verify it with a probe.

## Ranking by visual impact (my judgement)

The user's order is 1 to 5. On screen, the size of each gap is:

| Impact | Item | Why |
|---|---|---|
| 1 | (4) Water | It covers the most area. Its hue is wrong (violet-cobalt instead of azure-turquoise), it is three times flatter, and its white sits in soft clouds. At Tap to Start, 66 % of the foreground water is pale. |
| 2 | (1) Brushes | They are absent. In the approved they fill about 12 % of the frame at both edges and frame the whole shot. |
| 3 | (5) Hero height | He is the right width but shows 1.5 times too much height, so his top sits 0.09 H too high. He blocks the runway to the vanishing point and hides the enemy. |
| 4 | (3) Machinery | The upper bank zones are bare wall. The tanks are about half the approved height and pale. |
| 5 | Other | Coins are twice the approved size, and orange crown-pipe diagonals run from the top corners. |
| 6 | (2) Gear | It is on the wrong side, seen edge-on and navy-violet. It is small on screen but a named landmark. |

---

## 1. Rotating brushes, left and right foreground (impact rank 2)

**Approved, measured on gridded 2x crops (`grid.py`):**

| | Left brush | Right brush |
|---|---|---|
| Overall extent | x 0.00-0.20, y 0.34-0.72 | x 0.82-1.00, y 0.444-0.70. Slightly farther away, so a little smaller. |
| Gold top cylinder or axle cap | y 0.34-0.41, x 0-0.10. Frame #f08a53, light #ffeab9. | — |
| Pink dome housing | y 0.41-0.463, x 0-0.155. Frame #fa5dcb, shadow #dc2598. | y 0.444-0.483, x 0.89-1.0 |
| Gold band | y 0.463-0.483. Frame #dd6f1c, light #fcb345. | y 0.483-0.502 |
| Bristle cylinder | y 0.483-0.72, about 0.24 H tall | y 0.502-0.70 |
| Inner edge | x 0.16 at the pink band, widening to 0.20 at the blue band | x 0.862 at the pink band, widening to 0.82 at the blue band |

- **Bands, from the top, as a share of the bristle height:**

  | Band | Share | Frame colour | Lin | Shadow | Light |
  |---|---|---|---|---|---|
  | Hot pink | 26 % | #f519a1 | (0.91, 0.01, 0.36) | #d2036f | #ff54d4 |
  | White-lavender | 23 % | #b28ee8 | (0.45, 0.27, 0.81) | — | — |
  | Royal blue | 34 % | #045ee6 | (0.00, 0.11, 0.79) | #0042c0 | — |
  | Pale-blue tips | 17 % | #3d81e1 | — | — | — |

  - Each band is a layered skirt of fine strands that splays outward and slightly down, overlapping the band below it, like a car-wash brush.
  - The bristles stand in the water. The splash at their foot is the same white as the crests.
- **Current u 206:** no brush in either edge strip.
  - The left strip (x 0-0.16) is wall, railing and water.
  - The right strip is coins and wall.
  - `s56_brush6.js` is still an empty stub.
- **Current Tap to Start:** the old round pom-pom brushes.
  - Right: x 0.79-1.0, y 0.25-0.47. Its colours are right (pink, white and blue rings), but it is a ball, not a vertical banded cylinder. It is about 0.2 H too high and has no cap or housing.
  - Left: a pom-pom at the top-left corner (y 0.03-0.23), hidden behind the HUD.
- **Correction, in `WebDemo/src/s56_brush6.js` (lane brush6):**
  - **Shape:** vertical-axis cylinders rotating about their own axis, with the cap and housing on top.
  - **Supports:** separate and stationary. No slab on the rotating part.
  - **Screen target at the checkpoint:** the extents above.
  - **World estimate:** this assumes the camera is about 1.1 m above the water at the hero, inferred from `S56.cam` and the hero's waterline at y 0.743-0.758.
    - The brush foot sits about at the hero's depth to 0.4 m ahead (z about 3.1-3.4 m from the camera).
    - The inner edge is about 0.75 m from the channel centre.
    - Axis about 1.2-1.3 m from the centre, bristle radius about 0.5 m.
    - Bristles about 1.0 m tall above the waterline; housing and cap about 0.6 m more.
    - Visible rotation about 1 rev/s.
  - **Colours:** frame colours as in the band table.
    - Keep shader channels at 0.76 or below. The pink's red channel is 0.91 in the frame: use about (0.74, 0.01, 0.30) before the grade and let the grade's saturation carry it.
    - Use the fur-shell strand technique of the hero's fur for the bristles, not solid cones.
  - **Gameplay:** an inner edge at 0.75 m overlaps the side lanes, which sit at about ±0.9 m (from the approved coin positions). The brushes must therefore be the timed hazards whose knock is the lane, with colliders that turn with them. They must not be decor that silently blocks a lane.

## 2. The large cobalt gear, upper right (impact rank 6)

- **Approved:**
  - The gold hub is centred at (0.807, 0.392).
  - The visible cobalt spans x 0.682-0.868 and y 0.326-0.457. The right third is hidden behind the near right tank (x > 0.84).
  - The outer diameter is about 0.24 W (about 205 px), or 0.135 H. The aspect is about 0.94, so it is almost face-on to the camera.
  - Body: frame #1e3cda (lin 0.013, 0.045, 0.70). Lit teeth: #3f54f1. Shadow: #0632ba. Hub: copper-gold #be653d, diameter about 0.064 W.
- **Current u 206:**
  - The gear is on the **left**: bbox x 0.172-0.265, y 0.419-0.540, centre (0.219, 0.479).
  - It is seen **edge-on**: 0.093 W by 0.122 H, aspect 0.43.
  - It is **navy-violet**, mean #3023b9 (H 246 against the approved 229).
- **Current Tap to Start:** no gear in view.
- **Correction, in `WebDemo/src/s56_tunnel.js`, `S56.gears` / `S56.gear` and section 4:**
  - **Position:**
    - The entry nearest the checkpoint is `[214, 1]` (screen-left). Make it `[211, -1]`: screen-right, about 5 m ahead of the hero and about 8 m from the camera.
    - At that depth the existing `d 1.45`, `x 1.72` and `h 1.05` already give the approved size (about 0.18·z = 1.43 m at z 8).
  - **Facing:**
    - The holder's yaw `-side·π/2` mounts it flush to the wall, facing across the channel.
    - Turn it about 60-65° toward the camera, so its axis lies within about 25° of the tunnel axis. Target screen aspect: 0.9 or more.
  - **Colour:**
    - `dress()` adds a magenta emissive `0x3a0f30` at 0.5, which drives the blue toward violet.
    - For the gear, use a blue emissive (about `0x0a1a70` at 0.4) and a body colour that lands at #1e3cda in the frame. The pre-grade input is about (0.05, 0.07, 0.51).
  - **Keep:** it must stay partly behind the right near tank, as in the art.

## 3. Left and right machinery density (impact rank 4)

**Measured by zone. Shares are % of zone pixels; edges are Canny 60/140.**

| Zone | Approved | Current u 206 |
|---|---|---|
| Upper left, x 0-0.32, y 0.26-0.47 | pink 23.3, gold 4.8, bright violet glow 12.5, edges 17.8 | pink 10.9, gold 0.8, glow 2.9, edges 13.3 |
| Upper right, x 0.68-1, y 0.26-0.47 | pink 14.4, gold 5.1, glow 11.1, cobalt (gear) 16.2, edges 16.4 | 46 % of it is the oversized coins; cobalt 0.0 |
| Lower bank, x 0.16-0.36 / 0.64-0.84, y 0.47-0.56 | gold 17.7 / 11.7, cyan and yellow control lights 3.1 / 4.2 | gold 0.8 on the left (no medallions or railings lit gold), control lights 0.0 |

- **Approved layout** (`qa` crops; left and right bank zones):
  - On each side, at the near depth, there is a stack about 0.3 H tall.
  - On the left:
    - A glowing violet glass tank with gold caps and an elbow pipe: x 0.21-0.31, y 0.28-0.43, glass #dc52f6 (H 291, S 0.64) with a white-violet core.
    - A pink-violet control box with two big round lights, cyan and yellow: x 0.12-0.22, y 0.33-0.48.
    - A pink deck with a gold paw medallion: about (0.23, 0.53), 0.078 W.
  - On the right:
    - The tank: x 0.83-1.0, y 0.30-0.45.
    - A pink drum with two gold stars: x 0.735-0.86, y 0.47-0.53.
  - A row of identical tanks recedes to the vanishing point on both sides.
  - The machine tops reach y 0.26-0.30, which is 0.16-0.19 H above the vanishing point.
- **Current:**
  - The near machines top out at y about 0.42, only 0.02 H above the vanishing point.
  - The tank glass is pale and clear: #c483fc (H 270, S 0.48).
  - The domes are salmon: #fa9462 (H 17). The approved caps are brass.
  - Above them is bare perforated wall.
  - There is no control box and no star drum.
- **Correction, in `s56_tunnel.js` section 3 (or `s56_arch.js`, lane arch56, through `skip.banks`):**
  - Make every module about twice as tall in frame:
    - Glass tank 0.6 m to about 1.2 m.
    - Tall tank 0.9 m to about 1.6 m.
    - Base housing 0.66 m to about 0.9 m.
  - Move the modules closer to the channel: `xi + 0.52` to about `xi + 0.35`.
  - Place a module on **each** side every bank step of about 2.6 m. Today it is one side per half-step of 3.9 m.
  - Add the control-box module, with two round lights about 0.06 W each on screen at the near depth.
  - Add the pink star drum on the right.
  - Run gold elbow pipes from each tank top into the wall.
  - `M.glass`: move toward magenta so the frame shows #dc52f6. Pre-grade, keep it under 0.76, for example colour about (0.55, 0.10, 0.70) with a stronger emissive. Make the core brighter.
  - Domes and caps: gold, not `pinkDeep`. Under the u 206 light they render salmon (see O3).
  - Targets in the upper zones: pink about 20 %, gold 5 % or more, bright glow about 11 %, edges about 17 %.

## 4. Water (impact rank 1)

**Region:** foreground water, x 0.15-0.85, y 0.70-0.795, with UI, hero (+6 px), coins and pink masked out.

| Measure | Approved | u 206 | Tap to Start |
|---|---|---|---|
| Median hue (S > 0.25) | 208 (azure) | 219 | 223 |
| Median saturation | 0.94 | 0.70 | 0.17 |
| Mean colour | #4ca9f4 | #617ef2 | #a8b9e2 |
| Class shares: cobalt / azure / turquoise | 9.5 / 40.8 / 21.3 % | **51.7 / 5.9 / 0.0 %** | 13.0 / 2.8 / 0.1 % |
| Troughs (darkest 15 % of the blue) | #025bdb | #1614ed (violet) | #022f9b |
| Body (40-60 %) | #1495f7 | #234bf1 | #4163b8 |
| Highlights (top 10 %) | #75d4fb | #93b6f5 | #8ba7e2 |
| Pale pixels (S < 0.25, V > 0.8) | 19.7 % | 19.8 % | **65.9 %** |
| Share of the pale that is thin (removed by a 2-pixel opening) | 17 % | **1 %** | 6 % |
| Pale that survives a 4 px erosion (thick blobs) | 23.5 % | 64.4 % | 60.3 % |
| Soft pastel halo (S 0.25-0.5, V > 0.75) | 11.9 % | 22.1 % | 16.6 % |
| Mean luminance gradient (×100; relief and detail) | **3.92** | **1.28** | 2.08 |
| High-pass luminance std (6 px) | 0.102 | 0.029 | 0.069 |
| Luminance p5 / p50 / p95 | 0.31 / 0.58 / 0.98 | 0.14 / 0.51 / 0.81 | 0.24 / 0.81 / 0.89 |
| Pale beside his base, left / right | 33 / 28 %, crisp spray, 16-20 % thin | **64** / 39 %, soft cloud, 1 % thin | 56 / 84 % (bubble ring) |

- **Mid water** (x 0.20-0.80, y 0.55-0.70): approved azure 58.8 %, pale 15.5 %; u 206 cobalt 24.7 %, lavender 26.1 %, pale 27.0 %.
- **Lowest game water** (y 0.795-0.87, which the approved covers with its caption): a flat violet-blue band, 1.1 % pale.
- **Reading:**
  - The **amount** of white at u 206 already equals the approved.
  - What differs:
    - The **form**: one big soft cloud instead of thin broken crest lines and sharp droplets.
    - The **hue**: about 11-25° toward violet, with almost no green channel. Body G/B is 0.08 against the approved's 0.33.
    - The **relief**: three times flatter.
    - The troughs are near-black violet (p5 luminance 0.14) where the approved's are light, saturated cobalt (0.31).
  - At Tap to Start, the first thing the user sees, two thirds of the foreground water is white.
  - The shader's own palette has green (turquoise 0.015, 0.4, 0.74), yet the frame has 0 % turquoise. So the grade chain removes green. Its links are the base `GradeShader` (sat 1.32, contrast 1.12) and the `uS4Grade` vibrance / round4 path, which stays at 1 for the whole run after the drum mouth (`tunnel_s4.js` `round2Light`). **Verify with a colour-patch probe before tuning.**
- **Correction, in `s56_tunnel.js` section 5, `waterMat` (water lane):**
  1. **Frame colour targets:**

     | | Frame | Lin | Capped at 0.76 | Pre-grade input (base grade only) |
     |---|---|---|---|---|
     | Trough | #025bdb | (0.001, 0.105, 0.708) | — | about (0.05, 0.12, 0.53) |
     | Body | #1495f7 | — | (0.006, 0.246, 0.76) | about (0.07, 0.24, 0.58) |
     | Lit face | #75d4fb | — | (0.14, 0.52, 0.76) | about (0.21, 0.47, 0.63) |

     - Class targets: azure 40-60 %, turquoise 10-20 %, cobalt 10 % or less (now 52 %).
     - If `uS4Grade` cannot be compensated cleanly, gate it off under s56 only, so older switches stay pixel-identical.
  2. **Relief, three times the detail:**
     - Raise the mean gradient from 1.3 to about 3.9.
     - Add 2-3 shorter wave components for the near field (ku about 4-8, A 0.01-0.03).
     - Strengthen the slope shading (`0.72 + 0.3·face` to about `0.55 + 0.55·face`).
     - Lee sides go to the cobalt trough colour, lit faces to cyan. Never darken to violet-black: p5 luminance should be at least 0.28.
  3. **White as thin lines:**
     - The crest and `lace` noise is in world units (`vXU·(6, 2.5)`), so near the camera one cell covers about 100 px and reads as a cloud.
     - Limit crest width in screen space, with a `fwidth`-scaled smoothstep, to 6 px or less. Drop the `lace` blotches.
     - Keep total pale at 15-20 %, with a thin share of 15 % or more and a soft halo of 12 % or less.
  4. **His contact:**
     - Crisp splash crowns and droplets at the sides of his base: pale 25-35 % within 40 px of the body, of which 15 % or more thin.
     - No soft white collar, and no ring of soap bubbles (Tap to Start).

## 5. Camera and composition (impact rank 3)

| Measure | Approved | u 206 | Tap to Start |
|---|---|---|---|
| Hero bbox (fur mask, `hero.py`) | x 0.260-0.736 (w 0.476 W), y 0.600-0.758 (h **0.158 H**) | x 0.266-0.734 (w 0.468 W), y **0.506**-0.743 (h **0.238 H**) | x 0.287-0.748, y 0.557-0.788 (h 0.231 H) |
| Dome aspect, visible height / width in px | 0.67 | 0.94 | — |
| Fur centroid | (0.496, 0.683) | (0.508, 0.629) | — |
| Vanishing point | (0.50, 0.455): the bright tunnel end and the bank lines | about (0.50, 0.44) from the extrapolated railing lines; the enemy hides the tunnel end | about (0.495, 0.445) |
| Runway from the vanishing point to his top | 0.14 H of open water with coins and two enemies | 0.066 H, blocked by the enemy | — |
| Channel at his waterline | water visible x 0.17-0.83 between the brushes | full width | — |

- **Reading:**
  - Width, horizontal position and vanishing point already match (within about 0.01-0.015).
  - The gap is his **visible height**. The approved shows a dome sunk to about its widest line, with the side lobes at the waterline. The game shows almost a full ball.
- **Correction:**
  - Sink his drawn body about 0.3 m more: `S56.hero.sink` 0.1 to about 0.4, on `m.tilt` (never `m.root`). That brings his top from y 0.506 to about 0.59-0.60 with the waterline unchanged at about 0.75.
    - This estimate comes from the visible height and the camera's 66° vertical fov at about 3 m.
    - It opens the runway to the vanishing point.
  - Keep `S56.cam`.
  - Only after the sink, re-measure the vanishing point on the railings. If it is above 0.45, pitch up at most 1° (look y 0.45 to about 0.6).
  - Composition also depends on (1): the brushes narrow the visible channel to x 0.17-0.83.

---

## Other large differences that hurt the match

| # | Difference | Approved | Current | Correction |
|---|---|---|---|---|
| O1 | Orange diagonal lines from the top corners | none. There is one brass pipe from the central lamp, running right to about (0.72, 0.33) | Hough segments (0.00, 0.25)→(0.34, 0.41) and (0.99, 0.17)→(0.73, 0.34), colour #f04e27 (H 11). These are the "crown pipes along the ceiling", `s56_tunnel.js` section 3 (`ang ±0.98`, radius 0.085). | Remove them, or replace them with short gold elbow pipes from the tank tops into the wall plus the one lamp pipe. Gold should read at H 25-35. |
| O2 | Coins about twice too big and in the air | near pair inscribed 0.095-0.118 W (bbox 0.115-0.14 W) at y 0.585; mid 0.084 W at (0.51, 0.542); far 0.046 / 0.034 W. They sit **on the water** with a splash ring. | inscribed 0.27 W at (0.80, 0.41) (u 206); 0.21 / 0.20 / 0.11 W (Tap to Start), floating at y 0.26-0.50 | Drawn scale about 0.5x (`play_tripo3.js` coin3), pickup radius unchanged. Add a water-contact splash ring when a coin is at water height. Arcs stay gameplay. |
| O3 | Railing and caps go red-orange at u 206 | railing #e88434 / #d4693b (H 20-26) | #f56540 (H 12) at u 206 and salmon domes #fa9462, but #e98637 (H 25) at Tap to Start | A warm or red light, or a grade, along the enemy stretch turns gold red and pink salmon. Find it (lighting lane). Also make the railings thicker and gold, with ball finials. |
| O4 | Drum interior | mauve #aa4ebb (H 281, V 0.84); near perforations are big dark ovals about 30 x 20 px | #b45cf6 (H 273, V 0.96), brighter and bluer; near perforations about 3x finer | Darker, more magenta metal. Perforation cells about 3x larger on the near wall. |
| O5 | Enemies | two flanking at (0.36, 0.505) and (0.64, 0.505), 0.14 W, body #6a33df (S 0.76, V 0.87), shadow #341dc5, half in the water with a splash | one at 0.17 W behind him, #876dfa (S 0.55, V 0.98), washed out | Colour: saturation to about 0.76, value to about 0.87. Placement is gameplay: do not stage it. The sink in (5) reveals the centre lane. |
| O6 | Large iridescent bubbles | about 0.15 W at the lower corners (x 0-0.14, y 0.70-0.81; x 0.85-1.0, y 0.695-0.775), plus about 0.07 W mid-right (0.77-0.84, 0.545-0.58) | at most 0.05 W | — |
| O7 | Fur, minor | H 317, S 0.84 | H 325, S 0.71 | Slightly pinker and less saturated now. Do not redesign; note only. |
| O8 | Arch rhythm | 9-10 light peaks per ray from the vanishing point | 9-12 | Comparable; not a priority. |

## Not measured here

- Motion: brush spin, wave travel and splash timing.
- Pixel 7 framing.
- These need the browser, which another specialist holds.
