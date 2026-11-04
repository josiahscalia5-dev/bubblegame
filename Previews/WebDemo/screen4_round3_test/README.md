# Round 3: the inside of the washing machine toward the approved Screen 4 (`?s3=round3`, test, not approved)

What you asked for (4 November):

- match the approved Screen 4 as closely as possible in the real, playable 3D game;
- never use the approved pictures as flat backdrops;
- keep the pink character, controls, mission, opening and gameplay.

Round 3 runs on top of round 2 (its controls, hearts, Bubble Blast, Turbo Spin, pause and brush hazards).

- **The normal game and `?s3=round2` are unchanged:** pixel-identical to the build before this round. The check is
  described below.
- **The approved images are measured against, never shown in the game.** Round 3 also drops round 2's painted opening and
  the approved Screen 3 picture at Tap to Start: its opening is live 3D.

## What changed (all live 3D: models, animated shaders, particles)

| Approved Screen 4 has | Round 3 does | Where |
|---|---|---|
| Big white foam and splashes round the pink character | **96 foam heaps** (bubbly white and lavender, blue in the shade) rising and sinking round its body, beside it and in front of the camera, following it through the drum; white spray thrown up as it ploughs through the water | `src/tunnel_r3.js` (`foamHeaps`), `game.js` (`stepRound3`) |
| Turquoise water churned white | The drum's water an azure turquoise with white foam lace in patches, thicker near the character | `tunnel_s4.js` (`waterR3`) |
| A deep blue tunnel of glowing rings and white water | Drum walls deep royal blue. Rings cyan, blue, pink and lavender, dimmer close by so the deep blue shows, whiter further down. **Bands of white water** turning round the drum. Sparkles twinkling down the tunnel. | `tunnel_s4.js`, `tunnel_r3.js` (`swirlLayer`) |
| Giant fluffy pink, white and blue brushes framing the sides | The brushes' bristles in soft clumps of hot pink and white. On the right-hand brushes, a deep royal-blue centre (round 2's was pale periwinkle). No gold rings on the wheels. | `tunnel_s4.js` (`r3Brush`) |
| Gold paw coins, a purple gem and a sock arranged round the character | New layout: big coins rising on both sides, a purple gem up on the left, a sock on the right, and the middle lane ahead left open for depth. Every item is still real and collectable. | `game.js` (`R3` layout) |
| Soap bubbles everywhere, some large and close | 32 soap bubbles streaming past both sides of the view, besides the drum's own | `tunnel_r3.js` (`streamBubbles`) |
| The character low in the picture | The drum camera aimed a little higher (Tap to Start unchanged) | `game.js` (`S4.look`) |
| A real Screen 3 opening | Your five Meshy opening models (castle, entrance (A1), machinery, brush, bubbles), the icy slide edges and the cinematic opening camera, all 3D. They measured closest to the approved Screen 3 of the fully 3D options. | `screen3_models.js` |

## Files here

- `bubblewash_round3_gameplay.mp4`: real gameplay, recorded frame by frame in Chromium with real swipes and real clicks on
  the HUD buttons. It shows the character steering, jumping and collecting coins, socks and the gem, pause, Bubble
  Blast and Turbo Spin.
- Sheets (real game frames, seed 7):
  - `01_screen4_approved_vs_round2_vs_round3.png`
  - `02_screen4_during_movement.png` (five moments of one run)
  - `03_screen4_round2_during_movement.png`
  - `04_screen3_tap_to_start.png`
  - `05_feature_comparison.jpg` (Screen 4) and `06_screen3_feature_comparison.jpg` (Screen 3) (the comparison tool's masks and heat map)
- `measures.md` and `measures.json`: the comparison tool's numbers.
- `model_checks/`: validator report before and after the repair, Blender passage checks of A1 and A2, the drum scan, the
  traversal runs.
- `HOUDINI_AND_SUBSTANCE_ASSESSMENT.md`: whether those tools would help (assessment only, nothing bought or installed).
- `frames/`: the frames the sheets use.

## Checks

All on the real game in headless Chromium, with Math.random seeded with 7.

- **Controls** (`S3=round3 node tools/screen3/s3_func.cjs`): all pass, with no console errors or warnings.
  - The settings button and Tap to Start work.
  - Real pointer swipes work: left, right twice, and up to jump.
  - The ride into the tunnel collects coins and rescues socks (7 coins and 2 socks by 20 m in the middle lane).
  - Enter starts the run from the keyboard.
- **Round 2's rules under round 3** (`S3=round3 node tools/screen3/r2_func.cjs`): all pass, with no console errors.
  - Hearts go 5 to 0 through brush knocks, "Out of hearts!" shows, and the game returns to Tap to Start with 5 hearts.
  - Pause works from the button and the keyboard.
  - Bubble Blast clears the brushes ahead and counts down to a disabled button.
  - Turbo Spin raises the speed from 6.1 to 7.9 m/s with no knocks.
- **The tunnel can really be ridden through** (`model_checks/`):
  - Scan: none of the drum's 524,418 vertices is inside the space the body can occupy (any lane, riding or jumping).
    The nearest part is the drum's floor under the water, 3 cm below the lowest the body goes.
  - Runs: all four reach the drum's end with nothing stuck, nothing going backwards and no errors. They are a run in each
    lane jumping every 0.8 s, and one weaving across all lanes.
- **Models** (Khronos glTF Validator, `model_checks/validator_report.txt`):
  - A1, the portal (`s3_entrance.glb`): 48 errors, all non-unit normals, before; **0 after the repair**. The repair is
    minimal: the same 46,683 triangles, materials and textures.
  - `s3_brush.glb`: 1 alignment error before; 0 after.
  - A2, the Tripo tunnel: valid, but Blender's passage check confirms it is forced-perspective with a closed back. Only
    9% of rays pass, and the clear opening shrinks to nothing at 65% of its depth. Not used in the game.
- **Unchanged:** the normal game, `?s3=round2` and `?s3=paint,tunnel` render pixel-identical to the build before
  round 3, at Tap to Start, 2.0 s and 4.2 s.
  - The check compared the 3D canvas against the previous commit built in a git worktree.
  - Page screenshots are not repeatable to the pixel: the HUD's CSS fades run on real time.
- **Frame cost** (`frame_cost.json`, draw calls and triangles per frame; frame times cannot be measured with software
  WebGL):

| | Tap to Start | 5 m | 11 m | 20 m | 30 m |
|---|---|---|---|---|---|
| normal game | 322, 1.91 M | 221, 1.12 M | 184, 1.08 M | 129, 0.85 M | 87, 0.55 M |
| round 2 | 190, 1.04 M | 181, 1.27 M | 153, 1.18 M | 117, 1.05 M | 75, 0.63 M |
| **round 3** | **226, 1.63 M** | **178, 1.44 M** | **156, 1.28 M** | **120, 1.14 M** | **78, 0.72 M** |

Round 3's heaviest frame is its Tap to Start, with the five 3D opening models in place of the painting. It is still below
the normal game's Tap to Start. In the tunnel it adds 0.1–0.17 M triangles over round 2, for the foam, white-water bands
and bubbles.

## Measured against the approved screens (`measures.md`, `WebDemo/tools/screen4/compare_s4.py`)

The play area between the HUD bands is compared. Features are measured as the share of that area each ingredient covers,
and, in brackets, how well its place matches the approved picture (1.0 = same places).

**Screen 4** (the moment just inside the drum, 3.6 s, and with the coins, gem and sock, 4.2 s):

| Feature | Approved | Round 2, 3.6 s | **Round 3, 3.6 s** | Round 2, 4.2 s | **Round 3, 4.2 s** |
|---|---|---|---|---|---|
| White foam and splash | 20.8% | 3.3% | **18.7%** | 6.2% | **14.1%** |
| Deep blue tunnel | 6.2% | 0.1% | 1.3% | 0.6% | **4.0%** (place 0.42) |
| Turquoise water (too much before) | 1.9% | 3.0% | 0.6% | 10.2% | 0.6% |
| Pink (character, brushes) | 13.9% | 29.8% | 24.1% | 22.6% | 21.4% |
| Gold paw coins | 8.0% | 6.6% | 5.9% | 8.1% | 10.7% |
| Pale milky blue (too much) | 11.5% | 12.2% | 19.4% | 12.2% | 18.5% |
| Region colour ΔE2000, left / right side | | 13.9 / 17.9 | **10.2 / 12.7** | 4.7 / 21.6 | **3.1 / 8.6** |
| Mean ΔE2000 per pixel | | 23.6 | 24.0 | 22.5 | 22.7 |

- The water around the character now has the approved colour. Measured on the water band at hue 104 (OpenCV scale), the
  approved, round 3 and round 2 values are:
  - hue 104, saturation 129, white 27% (approved);
  - hue 104, saturation 128, white 24% (round 3);
  - hue 99, saturation 183, white 5% (round 2).

**Screen 3, Tap to Start:**

| Feature | Approved | Normal game (3D) | Round 2 (the painting itself) | **Round 3 (live 3D)** |
|---|---|---|---|---|
| White foam and splash | 23.4% | 11.2% | 16.6% | 11.0% |
| Pink, place match | 13.3% | 12.3% (0.57) | 13.3% (0.77) | 12.1% (**0.81**) |
| Gold | 3.6% | 12.0% | 4.6% | 11.7% |
| Mean ΔE2000 per pixel | | 18.3 | 11.2 | 18.2 |

Round 2 scores best on Screen 3 only because it shows the approved painting itself. Round 3 replaces that with real 3D,
and measures as close as the normal game overall, with the pink placed closest.

## Honest score and what still separates the game from the approved art

- **About 7.5 out of 10 by eye** (round 2: about 7). We are **not** at 90–95%, and the numbers do not claim it.
  - The ingredients the user named are now there, measured, as live 3D: white foam round the character, the turquoise
    water's colour, the deep blue tunnel, pink-white-blue brushes, gold coins, the purple gem and bubbles.
  - Whole-picture similarity has hardly moved: the mean colour difference per pixel stays about 23, because the pieces
    are not yet in exactly the painting's places.
- **The largest remaining differences, biggest first:**
  1. **The tunnel's heart.** The approved picture has a dense, sparkling white and cyan whirlpool in the middle. Ours shows
     brushes, coins and a sock there at that moment, with blue rings behind (the centre region's colour is still ΔE
     8–12 away). There is also too much pale blue: 19% against 11.5%.
  2. **The foreground foam is under the HUD.**
     - The approved picture's foam crest sits where the game's Bubble Blast and Turbo Spin buttons are. The approved image
       seems cropped lower than a real screen, with its buttons cut off at the bottom.
     - Our foam is there, but the buttons cover much of it.
     - Moving the buttons would change the controls' layout, so it is the user's decision.
  3. **Brush shape.** The approved brushes are round pom-poms of layered tufts. Ours are the user's Meshy brush wheel,
     recoloured, so it still reads as a disc. A pom-pom brush would need a new model: a Blender rebuild, or Meshy or Tripo
     (which spend credits, so the user must agree).
  4. **Too much pink** (21–24% against 13.9%). The brushes are large and close at these moments. The approved brushes sit
     further out at the edges.
  5. **Painterly glow.** The approved art has a soft dreamy haze and sparkle everywhere. That is achievable with more
     sparkle particles and bloom tuning, but risks washing out the deep blue that was just recovered.
- **Next steps, if wanted:**
  - a brighter whirlpool at the tunnel's heart (an animated vortex shader on the far rings);
  - a pom-pom brush model;
  - a looping crown splash made with Blender's fluid simulation and played as a flipbook or vertex animation (see
    `HOUDINI_AND_SUBSTANCE_ASSESSMENT.md`);
  - the user's decision on the bottom buttons' position.
