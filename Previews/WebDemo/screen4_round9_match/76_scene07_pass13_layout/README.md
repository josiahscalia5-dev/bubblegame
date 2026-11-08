# Screen 09 "Avoid Enemies!": pass 13b, LAYOUT FIRST (8 November 2026, session ce30359f). OPT-IN, NOT APPROVED

Authority: `Design/ApprovedScreens/09_Avoid_Enemies.png` (the ONLY target for this screen). Switch, unchanged: the full app
`index.html?s3=intunnel,structmatch,home,level1,tripo1,scene07`; without `scene07` nothing changes (proofs below). Bundle `6579f556`.
Code: `WebDemo/src/tripo_l1.js` (scene07's own module) and two lines in `WebDemo/src/game.js` (an import and one call gated on
`SCENE07_ON`). Classic Screen 4, the opening, the girl, Level 1's gameplay, controls, coins, socks, enemies' lanes and hit tests: untouched.

## The user's direction (8 Nov) and what was done
"FIRST match the original overall screen layout and silhouettes. THEN add detailed materials and machinery." The game-art-director
agent measured a LAYOUT MAP of the original (screen fractions; `../75_scene07_pass9_shell/README.md` history); a probe
(`../75_scene07_pass9_shell/scripts/probe_layout.cjs`) projects track positions through the REAL game camera, so every piece was placed
by calculation:
1. **Camera** (this stretch only, blended in over u 212-220 and out over 250-258; `SCENE07.camera`): aimed down and to the right like the
   original's view down the channel. A steeper look-down matched the vanishing point exactly but exposed the edge of the surf that rides
   with her (a dark slab), so the gentler aim was kept.
2. **Left washer housing**: the old ring was almost entirely OFF-SCREEN (x -0.91..-0.01); now a tall rounded pink body with the gold ring
   and iridescent glass, on a raised lavender ledge with a gold rim (`SCENE07.housings`, `houseBody`, `ledge`). Procedural three.js.
3. **Right side**: three small tubs -> the original's one big curved pink-gold star drum at the edge, beside lane 2, and a smaller one
   behind (`SCENE07.tubs`).
4. **Enemy**: drawn at 0.95 of its size; it floats `1.9 m` higher while far ahead (the original's enemy over the far channel) and comes
   down to its own height over the last metres to her, so what the player sees at contact is where level1.js's unchanged hit test is.
5. **Checkpoint**: u 229.5 with the mascot in the CENTRE lane and the next grime ball (u 234) ahead in the lane to her right, which is the
   original's composition; the route test's checkpoint (u 233) had her in lane 2. Same seed, same build conditions for before and after.

## A. Original / before / after (same checkpoint, same camera conditions)
`01_ORIGINAL_BEFORE_AFTER_u229.5_centre_lane.jpg` (frames in `frames/`). Real game renders (412 x 915), not concept art.
The route test's own frames (u 226 / 230 / 233 / 238, real gameplay with the autopilot): `frames/upper_u*.jpg`.

## B. Phone-sized screenshot
`02_phone_412x915_pass13b_u229.5.png` (412 x 915 CSS px, the Pixel 7 portrait size), the real 3D scene with the HUD.

## C. Moving-camera recording
`video/` (the real game, frame by frame at 20 fps through u 214-250: the camera moves past the housing, the drums, the enemies).

## D. Element by element (centres / extents as fractions of the screen; original from the art director's layout map)
| Element | Original | Before (pass 10) | After (pass 13b) | Closer? |
|---|---|---|---|---|
| Vanishing point (the glowing far end) | (0.48, 0.41) | (0.31, 0.53) | (0.44, 0.46) | yes |
| Left housing body | x 0-0.24, y 0.18-0.47 | a small ring, mostly off-screen (x 0-0.21, y 0.40-0.63) | x 0-0.21, y 0.19-0.52 | yes |
| Gold-rimmed ledge, left | x 0-0.40, y 0.43-0.48 | none | x 0-0.43, y 0.48-0.57 | yes (a little low) |
| Right curved pink-gold drum | x 0.68-1.0, y 0.47-0.70 | small tubs mostly off-screen right | x 0.64-1.0, y 0.42-0.78 | yes |
| Enemy | (0.72, 0.38), 0.31 W, high | (0.67, 0.60), 0.43 W box, over her | (0.76, 0.37), clear of her | yes |
| Mascot | (0.43, 0.67), 0.46 W | (0.48, 0.81), 0.59 W | (0.42, 0.73), 0.56 W | yes (still large) |
| Upper 40 % | dense, overlapping machinery | purple vault, a pink sun | purple vault, the housing, gears | NO: the next step |
| Coins | one each side at y 0.52 | in the centre lane | in the centre lane | gameplay positions: unchanged |
| Banner | pink curved "Avoid Enemies!" | the game's red banner at this moment | same | partly (shape/colour differ) |

## E. Mobile cost (one plain render of the 3D scene at the checkpoint, the probe's `perf`)
| Build | Draw calls | Triangles |
|---|---|---|
| pass 10 (before) | 287 | 2,564,330 |
| **pass 13b** | **288** | **2,516,903** |
| pass 14b (the user's washers, REVERTED) | 308 | 2,580,745 |
Pass 13b adds no measurable cost (the housing body, ledge and drums are a few thousand triangles; fewer tubs). Most of the scene's
2.5 M triangles are older content (the mascot's fur alone is 150k). Frame rate: this container renders WebGL in SOFTWARE (SwiftShader),
so its frame times say nothing about a phone; not reported as a phone frame rate.

## F. Regression proofs
- Without `scene07` (accepted `?s3=intunnel`, the normal game, the 3D opening, Level 1 at start and 20 s): `proofs/identity.txt`
  (frozen pass 8 build `d2a666bd` against `6579f556`, WebGL canvases, seed 7).
- Gameplay with `scene07`: `proofs/route_upper_scene07_pass13b.json.log` compared with pass 8's route log (events, states through Level
  Complete, console errors).

## Reviews
- Passes 11-12 (generic machinery in the vault): REVERTED by the art director's whole-scene review ("isolated clumps floating in the
  empty purple sky"; pass 12 also failed its numeric test). Evidence: `../75_scene07_pass9_shell/05_original_pass10_pass11_pass12_REVERTED.jpg`.
- Pass 13: KEPT by the art director (vanishing point, enemy, housing and drum, mascot height closer); its notes (enemy too small and low,
  mascot 0.05 W left, a dark slab in the foreground water) are what pass 13b changed.
- Pass 14b (18 copies of the user's own Tripo washing machine, the 4096 texture resized to 1024 and simplified to 3,872 triangles,
  `WebDemo/models/scene07/washer_user_1k*.glb`): REVERTED by the art director ("scattered stickers, not attached architecture"; it
  crowds the far end). Kept for a retry mounted on the walls, left and right only. `03_pass14b_washers_REVERTED.jpg`.
- The user: not reviewed. NOT approved.

## Tripo
No new job this pass. The last Screen 09 job (housing and machinery from crops of the original, 240 credits) returned shapeless blobs:
the original is 254 x 466 px and its structures are 40-80 px. The housing and drum are simple rounded shapes that procedural geometry
matches more exactly; the user's own unused Tripo washer was tried first for the machinery (pass 14b). Balance: 1,060 credits.

## Remaining differences (honest, ranked)
1. The upper 40 %: the original is wall-to-wall cream / gold / lavender machinery and arcades with soft glow and bubbles; the game still
   shows a purple vault (next: wall-mounted machinery on both sides, none above the vanishing point; a lavender drum ceiling).
2. The foreground: the original's bright white-blue foam with many bubbles at the bottom.
3. The mascot is still ~20 % larger than the original's; the coins sit in the centre lane (gameplay).
