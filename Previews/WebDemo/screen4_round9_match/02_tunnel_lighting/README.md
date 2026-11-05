# Round 9, step 2: Tunnel & Lighting, `?s3=match` (5 November 2026). Checkpoint after the wall-material stage

- **Authority:** the ORIGINAL approved Screen 4,
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.
- **Material reference for the wall water:** the user's Reference 5,
  `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/05_REF5_BLUE_WATER_VORTEX.png`. It is used for
  the look only. It is graded to the original's measured palette and placed in the original's layout.
- **Frames:** real gameplay, seed 7, `tools/screen4/liquid_shots.cjs`, DPR 1.5, HUD on.
- **Measurements:** the Art Director's scripts (`../01_art_director/scripts/`), output in `measured_3.00s.txt`. No
  similarity percentage is claimed anywhere.

## Files here

| file | what |
|---|---|
| `approved_vs_splash_vs_match_3.00s.png` | **the checkpoint:** ORIGINAL, then `splash` 3.0 s (before), then `match` 3.0 s, full resolution, portrait height 1536 |
| `approved_vs_splash_vs_matchbare_vs_match_3.00s.jpg` | the same with `match,bare` (no props) as a third panel |
| `match_{2.85,3.00,3.10}s_fullres.png`, `match_2.85_3.00_3.10s.jpg` | `match` at the three times |
| `match_bare_3.00s_fullres.png` | `?s3=match,bare`: the coins, socks, gem, framing brushes and hero bubbles not drawn (diagnostic only) |
| `overlay_approved_over_match_3.00s_{blend50,edges,diff}.png` | the approved at matching scale over `match`, centred on the two vanishing points |
| `measured_3.00s.txt` | approved, splash 3.0 s and match 3.0 s: walls, rings, rim, frame, palette, character, brushes, objects |
| `pixel_identity_vs_b0c03c7.txt` | the normal game, `splash` and `liquid` against the starting bundle |
| `diagnostic/` | step A: the approved over the old procedural walls, the unwrap sheets, the object mask |

## Checkpoint: five verdicts at 3.0 s (approved, then splash, then match)

| | verdict | evidence |
|---|---|---|
| **(a) cobalt and cyan colour distribution** | **partly** | Upper wall: electric blue 43.0 / 47.7 / **51.0%**; cyan 13.3 / 2.2 / **6.9%**; white 8.8 / 15.5 / **9.6%**; pale blue 11.2 / 20.1 / **9.1%**; deep cobalt 3.9 / 5.4 / **0.7%**; warm tints 6.4 / 0.0 / **4.8%**. Glints were pure white (#f0eefb); they are now tinted (#b1d6f9; approved #cae0ff). Still short: cyan streaks and deep cobalt. |
| **(b) luminous swirling water detail** | **partly, visibly better** | The walls are Reference 5's glossy water, flowing and swirling, with glints and warm gold patches at the upper right of the centre, instead of evenly spaced neon rings with white caps. Bands per sector (upper / left / right): 8/10/7 / 5/7/6 / **7/8/8**. Spacing spread: 0.54-0.66 / 0.31-0.59 / **0.42-0.62**. Band contrast: 0.17-0.20 / 0.25-0.35 / **0.12-0.15**, now a little softer than the approved, whose bands are crisper. |
| **(c) tunnel housing and camera depth** | **mostly fixed** | Rim warm band at x 0.75 / 0.85 / 0.95: approved 0.220-0.261 / 0.237-0.270 / 0.263-0.282; splash under the HUD; match **0.217-0.270 / 0.230-0.280 / 0.252-0.320**. Rim colour #eea98b / #d49f71 / **#eca48d**. Inside the rim (column x 0.53), approved and match row by row: mauve rim 0.21-0.24, violet bevel 0.25-0.28 (#6b61d2 against #444ba1 to #7c69d1), blue from 0.29-0.30 (#517bf7 then #1a65dd, against #5977ee then #225cd5). Flat lavender in the frame 3.9 / 14.4 / **5.0%**. Axis vanishing point at (0.53, 0.53) (approved 0.528, 0.532). Centre (r < 0.06 W): warm 47 / 11 / **18%**, lavender 11 / 46 / **46%**. Still lavender: what shows there is the far floor curving up in the drum (see the hand-over). |
| **(d) opaque or flat water round the character** | **not addressed (Water & VFX's next step)** | Unchanged from splash. Floor ahead lavender 3.0 / 30.5 / 32.4%. |
| **(e) object positions and scale** | **mostly fixed** | Right coin 0.778-0.996, 0.671-0.800 against **0.746-0.996, 0.689-0.808**. Left coins inside the approved boxes (0.093-0.281, 0.507-0.681; the upper-left coin is as high as a jump allows, y about 0.52). Gem 0.271-0.374, 0.489-0.529 against **0.254-0.369, 0.510-0.561** (0.115 W against 0.103). Centre coin under the vanishing point. Sock 0.85 of its size, moved +0.95 m, beside its approved place. Big bubble at its box; the clipped "ghost dome" is gone. Left brush back in frame: **x 0.011-0.197, y 0.194-0.493, 3.5% of the frame** (approved 0.011-0.199, 0.233-0.415, 2.0%), still too tall. Right brush **0.829-0.987, 0.406-0.648, 2.0%** (approved 0.786-0.987, 0.393-0.611, 1.6%). |

## What changed, by area

**Method history (the user's instructions, in order).**
1. The Round 8 procedural ring shaders were judged the wrong look. The diagnostic overlay
   (`diagnostic/overlay_approved_over_splash_bare_3.00s_*`) shows why:
   - evenly spaced neon rings with white caps and almost no cyan streaks (2.2% against 13.3%);
   - a pale lilac centre;
   - their band luminance does not line up with the approved's at any alignment (correlation about 0 to 0.1).
2. First attempt: the wall material unwrapped from the original itself (`tools/screen4/derive_tunnel_textures.py --walls`).
   The mapping was verified in gameplay: a zero-flow overlay at the plain alignment gave correlation +0.19, against
   +0.07 mirrored and -0.05 / +0.02 at scales 0.9 / 1.1. But the original is about 70% props. Its filled holes showed
   patch seams and repeated rows (`diagnostic/derive_contact_sheet.jpg`), so it was dropped as the wall source.
3. Now: **Reference 5, graded to the original** (`tools/screen4/derive_ref5_water.py`, sheet
   `diagnostic/ref5_contact_sheet.jpg`):
   - a log-polar unwrap of Reference 5 round its own warm core;
   - 1:1 in angle, a full 360-degree vortex, so it is seamless by construction;
   - no props and no copied artwork;
   - each radial zone (core, mid vortex, walls) colour-graded to the original's own clear tunnel texels with a smooth linear
     colour transfer (Monge-Kantorovich: colour mean and covariance). A per-channel quantile map amplified noise into
     speckles and was replaced.
   - Inspected on the game geometry at 3.0 s: no seams, no radial smearing, no repeated rows. Reference 5's star glints
     come out a little large and soft.

**Area 1: camera, depth, staging** (`tunnel_r9_match.js` `MATCH.hero`):
- camera `lookY` 1.38 to 1.62 and `lookX` 0.26 to 0.194 (pitched up 1.5 degrees, turned 0.4 degrees right): axis
  vanishing point (0.53, 0.53);
- the rim, framing brushes, hero bubbles and hero-placed collectibles moved +0.95 m along the path (`STAGE`), so 3.0 s
  frames what 2.85 s framed;
- `vortex.perLog` 3.0 to 4.5 (only the floor's procedural rings still use it).

**Area 2: walls, collar water, centre:**
- the walls (`heroWalls`) and the collar's water draw the graded Reference 5 map (`matchWall`, inserted into
  `tunnel_r8_liquid.js`'s `lqWall`);
- the colour map flows with Water2's two-phase flow map, each phase offset by at most 0.04 ln from its place, and is
  blended round its own blur so the contrast holds;
- the colourless relief and streak maps scroll on continuously (periodic);
- glossy cyan-white glints come from the derived normal map;
- the colours are written as the screen's sRGB and passed through the exact inverse of the hero grade and the output's
  Neutral tone mapping (`mtUndisplay`);
- a measured display compensation (lift 0.08, saturation 1.2): a zero-flow test showed the drum's translucent layers
  still lifting the walls;
- a peach tint on the core zone, and glints tinted toward the approved's #cae0ff;
- the drum's bloom halved inside the drum (0.32 to 0.16; a decrease);
- the warm glow: 9 m ahead instead of 16 (the far floor stood in front of it), core 0.85, halo 0.5, alpha 0.8, size
  0.13 W;
- `LIQUID.stops` (the far floor's centre rings): the pastel lilac 0.08 stop made warm white.

**Area 4: objects** (settings, plus `matchCollectibles` called from `game.js`):
- `coinScale` 1.3 to 1.02;
- the coins' shared material: a ramp in screen colours from the shade #d67c02 through yellow gold to lemon #fff188;
- the first sock at 0.85 of its size;
- the centre coin at lane 1.07, 1.15 m (within reach);
- the far gem 0.25 m further left (lane -0.35, within reach);
- the far three-coin line kept in the middle lane, lowered to 0.55 m;
- the hero bubble [0] in front of the rim plane (the collar cut it);
- round7's duplicate bubbles (`r7Bubbles`) hidden;
- Screen 3's entrance model (`s3Entrance`) not drawn: it now stood in front of the moved face. It was always hidden
  behind the face before.

**Area 5: rim and housing:**
- the rim circle fitted to the approved's outer edge: centre 0.019 W right of and 0.292 W below the vanishing point,
  0.936 W radius;
- in the game: `rim.u` -1.15, centre (-0.097, 0.755), bezel 2.39-2.55 m;
- the bezel, the collar's top arc and the tube's first metre take the approved rim band, sampled into
  `textures/screen4/rim_ramp.png`:
  - by angle round the rim centre;
  - rows by rho = r / outer radius, from 1.04 to 0.80;
  - housing, then gold or mauve rim, violet bevel, lilac line, navy ring, then blue;
  - placed at the approved proportions (collar rho 0.937 to 0.9015, tube rho 0.9015 minus 0.0991 per metre);
- a slow polished glint on the gold;
- Reference 2's metallic housing finish is **not done yet**: the colours are the original's.

**Code:**
- `WebDemo/src/tunnel_r9_match.js`: settings, textures, GLSL, collectibles, `bare`, bezel;
- `WebDemo/src/tunnel_r8_liquid.js`: gated hooks for the uniforms, the wall GLSL, the mouth, and the collar's top arc;
- `WebDemo/src/game.js`: gated import, `matchCollectibles`, the far gem, `await MATCH_READY`;
- `WebDemo/tools/screen4/derive_ref5_water.py`, `derive_tunnel_textures.py` (rim ramp; `--walls` for the dropped
  version), `match_overlay.py`;
- `WebDemo/textures/screen4/` (5.2 MB).

## Hand-over to Water & VFX: continuing the same water onto the floor

- **The layout** is the hero's (`lqRing`, `heroVortex`):
  - `rel = cs - uHeroCam.xy`, `du = max(u - uHeroCam.z, 0.25)`;
  - `rw = length(rel) / du / uHeroTanW` (the screen radius round the axis vanishing point, in screen widths);
  - **screen angle** `atan(rel.y, -rel.x)`: 0 = screen right, counter-clockwise; track x is + screen-left.
- **Texture coordinates:**
  - `u = angle / 2 pi` (repeat);
  - colour and base: `v = (ln rw - ln 0.025) / ln(0.85 / 0.025)` (ln span 3.5264, clamped);
  - detail, normal and variation: `v = (ln rw - ln 0.025 - flow) / 2.9995` (repeat: 12 bands of 0.25 ln).
- **Reference 5's unwrap:**
  - centre (0.5125, 0.515) of its frame;
  - ln r5 = f(ln rw), slope 0.66 in the walls, easing logistically to 1 inside rw 0.1;
  - rw 0.5 maps to r5 = 0.48 of its width;
  - samples of `r5_at` in `textures/screen4/textures.json`.
  - Its lower flowing water is already at the bottom of the map (the angles below the horizontal).
- **Flow constants** (`MATCH.walls`):
  - colour flow map: period 0.7 s, 0.08 ln and 0.012 turn per cycle;
  - relief and streaks: 0.07 ln/s plus 0.03 ln per metre travelled, swirl 0.012 turn/s.
- **GLSL to reuse:**
  - `matchWallGLSL()` declares the samplers and `mtUndisplay(srgb)`; `matchWall(cs, u, W, N0, T0)` shades one point;
  - the uniforms are `MATCH_UNIFORMS` (already in the liquid's `LU`, so the floor material has them).
- **Textures** (`WebDemo/textures/screen4/`): `tunnel_colour.png`, `tunnel_base.png`, `tunnel_detail.png`,
  `tunnel_normal.png`, `tunnel_var.png`, `rim_ramp.png`, `textures.json`.
- **APK:** the Android build (`Tools/android_apk/build_apk.sh`) copies only `models/` and `ui/`. It must also copy
  `WebDemo/textures/`. Without the folder, the walls fall back to the Round 8 look, and the browser logs a 404 for each
  missing file.
- **What changes for you under `match`:**
  - the camera pitch moved the waterline to **0.855** (approved 0.836; the splash pass had 0.83);
  - the far floor curves up in the drum and fills the centre with its lilac spiral (`lqRing`, spiral 2.0). It is most of
    the centre's remaining lavender;
  - `LIQUID.stops` (0.08 stop warm) and `HERO.vortex.perLog` 4.5 now feed the floor's procedural rings;
  - the warm glow sits 9 m ahead;
  - the floor ahead is still 32% lavender (approved 3%).

## Checks

- **Pixel identity** (`pixel_identity_vs_b0c03c7.txt`): the raw canvas (`game_eval.cjs` SHOT, seed 7) at Tap to Start and
  2.85 s is **identical** to the starting bundle for the normal game, `splash` and `liquid` (0 differing pixels).
  - A first run differed everywhere. This file created a placeholder texture at load in every mode, and three.js draws
    every new texture's UUID from `Math.random`, so the game's seeded sequence shifted.
  - Fixed: the placeholder is made only under `match`, and everything this file creates outside the opening's
    private-random build is made with a private generator.
- **Gameplay** (`S3=match tools/screen3/s3_func.cjs`):
  - lanes 1, then 0, then 2, and a jump;
  - in the tunnel: **12 coins and 2 socks collected**, as in splash;
  - no console errors;
  - tunnel cost 135 draw calls (splash 133-134).
- No new render passes, no Tripo, no plugins.

## Remaining (for the camera and objects stage, and for Water & VFX)

- **Walls:** cyan streaks 6.9% (target ≥ 10%) and deep cobalt 0.7% (target 4-6%); band contrast 0.12-0.15 (target
  0.17-0.22); Reference 5's star glints a little large and soft.
- **Centre:** still 46% lavender, from the far floor's spiral. Warm 18% against 47%.
- **Objects:**
  - left brush 1.75 times too large in area: scale it down or move it further in;
  - gem about 0.02 H low and 12% too big;
  - the waterline 0.02 H low from the pitch.
- **Housing:** Reference 2's metallic housing finish (the rim takes the original's ramp colours).
- About 20 capture runs used, plus identity and gameplay runs.
