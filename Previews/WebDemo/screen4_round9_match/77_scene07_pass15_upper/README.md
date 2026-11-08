# Screen 09 "Avoid Enemies!": passes 15 and 16 (8 November 2026, session f70c9bd1). OPT-IN (`scene07`), NOT APPROVED, UNFINISHED

Authority: the user's master `Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/00_AUTHENTIC_APPROVED_SCREEN09.png`
(the same artwork as `Design/ApprovedScreens/09_Avoid_Enemies.png`, higher resolution; phone frame rows 38-1422). The user's kits and
mandates of this session: `Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/` (README: the mandate) and
`Design/ReferencePacks/2026-11-08_Screen09_Strict_Handoff_from_user/` (`00_ONE_SHOT_STRICT_PROMPT_FOR_CLAUDE.txt`: the strict mandate).
Full app with the candidate: `index.html?s3=intunnel,structmatch,home,level1,tripo1,scene07` (checkpoint u 229.5, centre lane).
Without `scene07` nothing changes (proof below). Code: `WebDemo/src/scene07_recon16.js` (pass 16), `WebDemo/src/scene07_wall15.js`
(pass 15, now opt-in only), hooks in `WebDemo/src/tripo_l1.js` (all gated on `RECON16_ON` / `WALL15_ON` / `SCENE07_ON`).

## Where it stands (honest; updated ~21:10 UTC)
**Candidate: pass 16 v4, bundle `393d9d29` (NOT approved).** v4 = v3 + PASTEL16 (every pass-16 material moved toward the master's measured
pastel palette and softly self-lit), the level tube's hoops hidden for 18 m beyond the far end, warm luminous windows on the columns, 48
bright bubbles along both banks, a larger pale far glow. Full size: `01_ORIGINAL_PASS13b_NEW_u229.5_centre_FULLSIZE.png` and
`02_ORIGINAL_CURRENT_v3_IMPROVED_v4_u229.5_centre_FULLSIZE.png` (the same checkpoint: u 229.5, centre lane, 412 x 915, seed 7; the game's mission panel is gameplay HUD and differs by design).
Built as real three.js geometry (scene07 only):
- LEFT: a round washer drum (fat pink rim, darker magenta inner lip, gold bands, a lavender glowing interior with a paw-emblem bubble, a gold
  drum body running back) on a raised cream-gold ledge with a light peach star front; machine columns rising behind it.
- RIGHT: a long curved wall of solid pink panels with large gold stars and a cream rim, rising out of the water 1.3 m from the centre line
  (the closest the right lane allows); machine columns behind it; the big saturated-cobalt gear with a cyan frill at the upper right.
- UPPER: gantry beams joining the columns across the room at 7.6-7.9 m, with washer units (round glowing doors, gold control strips), tanks
  (gold bands, domes), gears and the master's green-topped machine mounted on them at 4.4-8 m, each placed with the checkpoint camera's
  projection grid where the master shows machinery; above the gameplay space (the hero enemy floats to ~3 m).
- FAR: the far end wall shows the master's own distant scenery (`textures/scene07/far_art_lama.webp`: the master's pixels; LaMa only where
  its enemy / banner / HUD covered them), a far arch with a glowing washer door and stacks; a pale cyan-white glow in the opening.
- ONE hero enemy floats high (upper right, (0.74, 0.38), 0.34 W: the art director measured the original at (0.73, 0.38), 0.33 W); the other
  gameplay enemies keep their own height (looks only; hit tests are level1.js's).
**Still NOT matching (honest):** the vanishing point still shows the level's tube rings through the opening (the LaMa far disc that covered
it was rejected by the art director as a "hot rainbow disc"); the upper area is lighter but still reads as a lavender machine hall, not the
master's bright cluttered pastel street; the mounted machines are simpler and more regular than the master's; the channel's middle water is
deep indigo where the master's is light azure, and the surf edge behind the mascot is unchanged (water: zone D, not touched by pass 16).
The art director's structural review of v2 (and what v3 changed): `ART_DIRECTOR_REVIEW_pass16_v2.md`. v3 itself is not re-reviewed yet.
Background-only measurement (HUD, banners, mascot, coins and enemies masked; `scripts/bg_metric.py`, results in
`bg_metric_original_pass13b_v3_v4.txt`; supporting evidence only): mean colour difference to the original, pass 13b / v3 / v4: zone A
62.1 / 50.5 / 43.9, B 62.3 / 55.2 / 50.4, C 60.9 / 56.4 / 51.5, D (water, not changed) 52.6 / 52.7 / 52.0; chroma in A 66 / 55 / 45
(original 31); brightness in A 60 / 65 / 71 (original 69). Structure (SSIM) barely moves: the architecture is still simpler than the master's.
Reconstruction map (every structure of the master, its screen position, colours, 3D build and status): `RECONSTRUCTION_MAP.md`.
Moving tests (the REAL game with the flow autopilot, 12 fps, u 212-258, real parallax and occlusion, no flat image edges):
`video/pass16_v3_moving_u212-258.mp4` (+ contact sheet) and `video/pass16_v4_moving_u212-258.mp4` (+ contact sheet).

## What was tried, in order (all at u 229.5, centre lane, 412 x 915; sheets in `steps/`, frames in `frames/`)
| Step | What | Result |
|---|---|---|
| pass 15 (`,norecon16,wall15`) | machine band at deck level, cream rib ceiling, facade recoloured | the band is invisible from this camera (the housing and drum hide the walls; probed by tinting it green); ribs = a "gradient ceiling" the user rejected. Superseded |
| pass 16 recon v1-v4 | drum housing, raised ledge, curved right wall, gear, arches over the channel, instanced machinery on the vault (greebles) | drum and right wall closer; the ARCHES + portal read as a ring tunnel (removed); the greebles read as small lilac blocks ("flat building blocks", rejected by the user) |
| ART16 projection (`,art16`, opt-in) | the master's own distant scenery projected from the checkpoint camera onto the chamber's walls and vault | exact only from one viewpoint; the master's top band is its HUD and banner, so the projected top was an inpainted haze; the user REJECTED it ("blurry and smeared ... do not project across mismatched surfaces") |
| ART16 texture fills | Telea inpaint; mirrored donor rows; tiled high-pass detail; LaMa generative inpainting (big-lama, CPU) | all REJECTED by the user (smears, kaleidoscope repeats, wallpaper). Final texture: authentic pixels only, the hidden areas transparent (`steps/art16_authentic_only_texture.png`; `scripts/make_backdrop_art.py <master> - <out>`) |
| ART16 depth cards (`,art16`) | three planes square to the approved camera at the scenery's depths | the cards drew behind other geometry and their overlaps doubled; then the user's strict mandate forbade cards for nearby scenery. Kept only as the opt-in `art16` for the record |
| MACH16 v1 | real 3D machine towers (washer units with glowing round doors and control strips, tanks with gold bands and domes) on the ledge and behind the right wall, the original's green-topped machine at its screen position, pipes joining the two sides overhead, a far arch with a glowing washer door and stacks round the opening, high bubbles, the big blue gear restored | built (no console errors) but invisible from the checkpoint: the left towers stood exactly behind the drum, the right ones behind the wall's top and the hero enemy (screen rectangles computed from the grid) |
| MACH16 v2 + FAR16 | columns, gantries, mounted machinery at 4.4-8 m; LaMa-repaired master art on the far end wall and a disc in the opening | the upper area finally holds machinery; art director: zone B clearly closer, C closer in shape, A slightly closer, the disc a "hot rainbow disc" |
| v3 | the art director's three ranked corrections (pastel shell, varied cyan/blue machines, cobalt gear lowered, no disc + pale glow; fat drum with a gold body, peach star ledge; solid pink star wall, nearer, no base) | closer on the left and right; the vanishing point still showed the tube |
| **v4 (candidate)** | PASTEL16 materials, tube hoops hidden 18 m beyond the far end, warm windows, bank bubbles, larger pale glow | background-only colour difference down in A / B / C (table above); a light ring shape (the portal's gold ring and the far arch) still at the vanishing point |

## Next steps (in the user's priority order; one correction at a time, art director review each)
1. Make the MACH16 towers visible and dominant in the upper half: taller (to 7-8 m) and nearer the channel edge (|x| 2.3-3.0 m), more of
   them between u 239 and 253 on BOTH sides, the drum not covering them (the drum's right edge must stop at screen x 0.21); measure each
   tower's screen rectangle with `scripts/probe_variants.cjs` (NAMES) against the master's map (`scripts/projection_grid_u229.5_centre.json`
   gives the screen position of any track point (u, x, h) from this checkpoint: `inv.py`-style lookup).
2. The chamber shell behind them: the deep blue-violet of the master's recesses, not lavender-pink; overhead, more connecting pipes and
   machinery so no plain vault shows between the towers.
3. The far end: the level tube visible through the portal reads as a ring tunnel; cover with the far arch, stacks and glow.
4. The water's surf edge behind the mascot (the user's "rectangular slab"): owner screen4-water-motion-engineer, scene07 stretch only.
5. ORIGINAL / PASS 13b / NEW at full size, a moving recording (u 214-258), the art director's structural comparison, costs, identity proofs.

## Tools made this session (all in `scripts/`)
- `probe_variants.cjs`: the layout probe with VARIANTS (JS run before each capture, e.g. tint or hide a mesh) and POST (JS run after the
  camera is set, e.g. a projection grid). Example: `S3=intunnel,structmatch,level1,tripo1,scene07 Z=229.5 LANE=1 NAMES='^scene07_' node probe_variants.cjs <WebDemo> <out>`.
- `projection_grid_u229.5_centre.json`: [u, x, h, screen x, screen y, depth] for track points u 229-256, x -5..5, h -0.5..8 (step 0.5/0.25/0.25).
- The checkpoint camera in track space: u 226.66, x -0.616, h 1.489, forward (0.187, -0.026, 0.982), up (-0.022, 0.999, 0.031), fov 68,
  aspect 0.450 (in `ART16.cam`, `scene07_recon16.js`).
- `sheet_stats.py`: sheet + 3 x 3 mean-colour grid of the upper area against the original (supporting evidence only).
- `make_backdrop_art.py`: the ART16 texture (authentic pixels only by default).
- `identity.sh`: the scene07-off identity proof (pass 13b build against this build).

## Regression proof (scene07 off)
`proofs/identity_5ab92333.txt` (MACH16 v1), `proofs/identity_1db26fd8.txt` (v3) and `proofs/identity_393d9d29.txt` (v4, the candidate): the accepted `?s3=intunnel`, the normal game, the 3D opening and Level 1 (start and 20 s), pass 13b build
`6579f556` against these builds, WebGL canvases, seed 7 (written by `scripts/identity.sh`).

## Cost (one plain render of the 3D scene at the checkpoint; SwiftShader, so no phone frame rate is claimed)
| Build | Draw calls | Triangles |
|---|---|---|
| pass 13b | 288 | 2,516,903 |
| pass 16 recon v4 | 257 | 2,404,557 |
| pass 16 MACH16 v1 | 329 | 2,276,361 |
| pass 16 v2 (MACH16 v2 + FAR16) | 328 | 2,292,225 |
| pass 16 v3 | 318 | 2,292,925 |
| **pass 16 v4 (candidate)** | **351** | **2,320,381** |

## Tripo
No job, no credits (1,060 available). The user's new mandate: no new Tripo spending without authorization.
