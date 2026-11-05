# Round 8 pass 2: visible translucent splashes and a deeper swirl (`?s3=splash`), 5 November 2026

**Authority:** the user's ORIGINAL APPROVED Screen 4,
`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.

**Why:** after Round 8 (`?s3=liquid`), the user found that the foam-on version looked almost the same as foam-off. In
Round 8, white was 5-19% of the band beside and under the character; the approved picture has about 35% there, as a bank
of splash and bubbles with the blue water showing between. The user asked for:

- visible translucent splashes round the pink character: broken white crests, curling see-through spray (the biggest
  just right of the body), droplets, and clusters of clear bubbles;
- more deep cobalt between the wall's bands;
- a bigger, warmer core.

Blue water stays the first thing seen.

- **Open it:**
  - `WebDemo/index.html?s3=splash`: everything `liquid` does, plus this pass;
  - `WebDemo/index.html?s3=splash,nofoam`: the deeper swirl and the warmer core only, with no white foam layer.
  - Hero moment: **2.85 s** after the tap, as before.
- **Unchanged:** `?s3=liquid`, `?s3=liquid,nofoam`, `?s3=hero`, every older switch and the normal game. They are proven
  pixel-identical below.
- **Code:** `WebDemo/src/tunnel_r8_splash.js` (new: settings `SPLASH`, the splash bank, and GLSL pieces). Hooks elsewhere,
  each inert without `splash`:
  - `screen3_models.js`, `tunnel_r6.js`, `tunnel_r7_hero.js`: `|| LIST.includes('splash')` on the hero switch;
  - `tunnel_r8_liquid.js`: `LIQUID_ON` also covers `splash`, and `SPLASH.liquid` is merged into `LIQUID` before its tune.
    Gated `${SPLASH_ON ? ... : ''}` GLSL goes into the walls, the floor's foam block and the swell's foam block, and one
    `buildSplashBank` call goes at the end of `waterlineFoam`. With the switch off, every generated shader string is the
    same as before.

## What was built

All of it is in the character's frame and rides with the swell. It reacts to movement: bigger on the side the character
swerves to, a burst on landing, smaller in the air (the same `uLat`, `uLand` and `uAir` the swell uses).

1. **Curling sheets of see-through water** (`spCurls`, one draw call, 2,688 triangles): eight sheets rising from the
   waterline either side of the body.
   - They curl over toward the camera and outward, the biggest just right of the body (0.5 m at -34 degrees).
   - Each is turquoise glass, whiter where seen edge-on, with white streaks running up it.
   - The top is a white lip torn into fingers that ripple.
   - The sheets face the camera; the first try curled them straight at it, so they showed edge-on as thin strips (found
     with `SPLASH.debug = 1`, which draws them flat magenta).
2. **Rounded foam lumps** (`spLumps`, one instanced draw call, 41 lumps, 13,120 triangles): clusters on the waterline
   beside the body.
   - Lumpy, slowly boiling and flattened where they sit in the water.
   - White only where lit; see-through cobalt-azure in their shade.
   - A web of bubble outlines, a glossy cyan rim and a white specular point.
   - Biggest on the right, smaller on the left; none straight in front of the body.
3. **Stronger spray and bubbles:**
   - `heroSplash`: 900 droplets instead of 560, 72% of them round flecks rather than streaks (the streaks looked like
     confetti at full opacity), 92% opaque instead of 40%, and all of them beside the body, none in front;
   - the waterline bubbles: 46 instead of 22, radius 2.6-8.5 cm;
   - the swell's crest: a broken foam band 6 cm wide beside the body, with none in front of it, so the fur still shows
     through violet there as approved;
   - the floor: foam clumps on the water round the swell's foot, mostly beside it (blobs; a first version drawn from the
     caustic web looked like a net and was replaced).
4. **The deeper swirl** (`splash` and `splash,nofoam`):
   - deep cobalt `#0a2ea4` mixed into each wall band's trough (42%);
   - deeper trough colours in the ring stops.
5. **The core** (`splash` and `splash,nofoam`):
   - the warm white-gold and peach-gold stops reach further out (to 0.05 of the width);
   - a pastel pink-lavender and white ring at 0.08, as approved;
   - the cyan pushed out to 0.11;
   - the glowing centre 0.105 of the width (Round 8: 0.085).

Only private random numbers (`mulberrySp`) are used; the game's seeded `Math.random` is untouched.

## Evidence (real gameplay, seed 7, the 538 x 1076 game area at 1.5x, HUD on)

| file | what |
|---|---|
| `approved_vs_liquid_vs_splash_nofoam_vs_splash_{2.85,3.00,3.10}s.jpg` | the approved Screen 4, Round 8 `liquid`, `splash,nofoam`, `splash`, full resolution |
| `splash_{2.85,3.00,3.10}s_fullres.png`, `splash_nofoam_{2.85,3.00,3.10}s_fullres.png` | the frames (807 x 1602) |
| `measured_splash_shares.txt`, `measured_art_director_regions.txt` | the raw measurements below |
| `pixel_identity_vs_87aee11.txt` | the pixel-identity proof |
| `moves_sheet.jpg`, `moves_*.png`, `moves_state.json` | the splashes reacting to a swerve, a jump and a landing |
| `gameplay_checks.txt` | the gameplay checks: `s3_func.cjs` for `hero`, `liquid`, `liquid,nofoam`, `splash` and `splash,nofoam`; `r2_func.cjs` for `splash` |
| `splash_gameplay_9s.mp4`, `splash_gameplay_frames_strip.jpg` | 9 s of real gameplay at true game speed (`record_s3.cjs`), and stills from it |

Captured with `WebDemo/tools/screen4/liquid_shots.cjs`. Measured with `WebDemo/tools/screen4/liquid_shares.py` and the Art
Director's `regions.py` (`Previews/WebDemo/screen4_round8_art_director_baseline/scripts/`).

## Measured

The colour classes are the Art Director's HSV classes. `regions.py` leaves pink and gold objects out of each region's
shares.

| region (`regions.py`) | approved | Round 8 `liquid` (2.85 / 3.0 / 3.1) | `splash,nofoam` | `splash` |
|---|---|---|---|---|
| band beside and under the character (y .667-.825): white | **35%** | 5 / 12 / 19% | 2 / 10 / 17% | **27 / 30 / 34%** |
| contact strip (y .78-.88, x .33-.67): white | 19% | 10 / 20 / 16% | 2 / 15 / 12% | **9 / 19 / 15%** |
| beside the character, left (x < .22, y .66-.83): white | 23% | 5 / 16 / 6% | 4 / 13 / 4% | 23 / 37 / 27% |
| walls left and right (r .22-.45): deep cobalt | **6%** | 3 / 1 / 1% | 7 / 4 / 5% | **7 / 4 / 5%** |
| upper wall: deep cobalt | 8% | 3 / 1 / 1% | 10 / 7 / 6% | 9 / 7 / 6% |
| centre (r < .08): white / lavender / warm (other) | 28 / 31 / 27% | 13-17 / 19-23 / 3-4% | 22-23 / 38-39 / 7-12% | 23-24 / 38 / 6-10% |

**The rule from Round 8: white in the lower third (y > 2/3, full width, HUD included) must not exceed the approved's
16.9%** (`liquid_shares.py`):

| frame | 2.85 s | 3.0 s | 3.1 s |
|---|---|---|---|
| approved | 16.9% | | |
| Round 8 `liquid` | 6.0% | 10.2% | 11.4% |
| `splash,nofoam` | 4.4% | 8.5% | 10.1% |
| `splash` | **13.7%** | **16.1%** | **16.8%** |

- **Splashes visible:** foam on now clearly differs from foam off.
  - White in the band beside and under the character went from 5-19% to 27-34%, against the approved's 35%.
  - In front of the body, white stays at the approved's level (9-19% against 19%).
  - The lower third stays under the approved's white.
- **Deeper swirl:** deep cobalt on the side walls went from 1-3% to 4-7% (approved 6%), and on the upper wall to 6-9%
  (approved 8%).
- **Core:** white and lavender in the centre moved toward the approved's (white 13-17% to 23-24%, against 28%). The warm
  share is still far below: 6-10% against 27%.

## Pixel identity

The Round 8 bundle (`87aee11`, md5 `05ba504c...`) was put aside before any change. The test is
`WebDemo/tools/models/game_eval.cjs` with `SHOT`: raw 3D canvas frames, seed 7, real taps and game time. It was run on
that bundle and on this pass's final bundle (md5 `1f045f85...`, the committed `game.bundle.js`), at Tap to Start, 2.85 s
and 4.2 s, and every pixel was compared:

| switch | Tap to Start | 2.85 s | 4.2 s |
|---|---|---|---|
| normal game (no switch) | identical | identical | identical |
| `hero` | identical | identical | identical |
| `round7` | identical | identical | identical |
| `round6` | identical | identical | identical |
| `round6,rich` | identical | identical | identical |
| `round5` | identical | identical | identical |
| `round4` | identical | identical | identical |
| `liquid` | identical | identical | identical |
| `liquid,nofoam` | identical | identical | identical |

- **Result:** all 27 pairs have 0 differing pixels (`pixel_identity_vs_87aee11.txt`), and the mascot's track position at
  each time is the same in both builds.
- **The test can tell versions apart:** `hero` and `liquid` differ in 386,595 pixels at 2.85 s, and `liquid` and
  `liquid,nofoam` in 232,451.

## Gameplay

- **Basic checks** (`WebDemo/tools/screen3/s3_func.cjs`, seed 7): the settings, Tap to Start, real pointer swipes (left,
  then right twice: lanes 1, 0, 2), the jump, the ride into the tunnel and a keyboard start.
  - `splash` and `splash,nofoam` give exactly the same states as `hero`, `liquid` and `liquid,nofoam` at every step: z
    20.561 in the tunnel, 12 coins and 2 socks collected.
  - There are no console errors or warnings in any of the five.
- **Hearts, pause, Bubble Blast, Turbo Spin** (`WebDemo/tools/screen3/r2_func.cjs`): the full report for `splash` is
  identical to the one for `liquid`.
  - Each brush knock takes one heart; at none, the run goes back to Tap to Start with 5 hearts.
  - Pause stops game time, by button and with the P key.
  - Bubble Blast clears the brushes ahead and runs out after 3.
  - Turbo Spin raises the speed from 6.68 to 8.78 with no knocks.
- **Video:** `splash_gameplay_9s.mp4` (`record_s3.cjs`): 270 frames stepped at 30 per game second, with real pointer
  swipes. It visits lanes 1, 0 and 2, collects 2 socks, and has no console errors. Stills:
  `splash_gameplay_frames_strip.jpg`.
- **Reacting to moves** (`liquid_moves.cjs`, `moves_sheet.jpg`):
  - after a swerve to the left lane (3.38 s), the splash piles up on that side;
  - in the air (3.85 s), the swell and the splashes shrink;
  - just after landing (4.22 s), the splashes burst out.
- Results in `gameplay_checks.txt`. Collision, lanes, collectibles and the seeded `Math.random` are untouched: the pass
  only adds drawing.

## Performance

One frame at the hero moment (2.85 s), counted with the WebGL draw-call and triangle counter (`liquid_shots.cjs COST=1`,
DPR 1). Each was timed alone on an idle machine, one after another:

| | `liquid` | `splash,nofoam` | `splash` |
|---|---|---|---|
| draw calls | 207 | 202 | 209 |
| triangles | 1,375,496 | 1,368,820 | 1,398,032 |
| shader programs | 64 | 60 | 66 |
| textures | 41 | 41 | 41 |
| software frame time (SwiftShader, relative only) | 1173 ms | 1119 ms | 1185 ms (+1%) |

- **Added objects:**
  - `spCurls`: 1 draw call, 2,688 triangles;
  - `spLumps`: 1 draw call, 13,120 triangles;
  - more waterline bubbles (+6,300 triangles) and droplets (+340 quads).
- **Same as before:** no new textures and no extra render passes; the deeper swirl and core are a few shader lines on
  existing materials.
- In the tunnel (z 20.56): 136 draw calls for `splash` against 134 for `liquid`.
- Not measured on a phone (software rendering here).

## What still differs from the approved picture

1. **The splash's sculpting.** The approved foreground is a thick, sculpted bank of glossy splash crowns and bubbles,
   with sharp white highlights over saturated blue. Our lumps and sheets have the right amount of white in the right
   places, but they are softer and less defined.
2. **The left side at 3.0 s:** 37% white against 23%. The camera is closest there, so the left lumps and sheets fill more
   of the frame.
3. **The core's warmth.** The approved centre is a luminous pastel core round a golden glow (27% warm). At this camera,
   the coins, the sock and the gem sit on the vanishing point and cover most of the warm core, so ours measures 6-10%
   warm.
4. **The rings:** still fewer and broader bands than the approved's many narrow rings (unchanged from Round 8).
5. **Not measured on a phone:** all numbers are from software rendering (SwiftShader).
