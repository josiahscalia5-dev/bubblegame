# Screen 09 "Avoid Enemies!": passes 15 and 16 (8 November 2026, session f70c9bd1). OPT-IN (`scene07`), NOT APPROVED, UNFINISHED

Authority: the user's master `Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/00_AUTHENTIC_APPROVED_SCREEN09.png`
(the same artwork as `Design/ApprovedScreens/09_Avoid_Enemies.png`, higher resolution; phone frame rows 38-1422). The user's kits and
mandates of this session: `Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/` (README: the mandate) and
`Design/ReferencePacks/2026-11-08_Screen09_Strict_Handoff_from_user/` (`00_ONE_SHOT_STRICT_PROMPT_FOR_CLAUDE.txt`: the strict mandate).
Full app with the candidate: `index.html?s3=intunnel,structmatch,home,level1,tripo1,scene07` (checkpoint u 229.5, centre lane).
Without `scene07` nothing changes (proof below). Code: `WebDemo/src/scene07_recon16.js` (pass 16), `WebDemo/src/scene07_wall15.js`
(pass 15, now opt-in only), hooks in `WebDemo/src/tripo_l1.js` (all gated on `RECON16_ON` / `WALL15_ON` / `SCENE07_ON`).

## Where it stands (honest)
**The current candidate (pass 16 MACH16 v1, bundle `5ab92333`) does NOT yet resemble the original's upper background.** See
`01_ORIGINAL_PASS13b_CURRENT_u229.5_centre_FULLSIZE.png`. What improved over pass 13b: the left housing is now a round pink drum with gold
bands, a lavender interior and a paw-emblem bubble on a raised cream-and-gold ledge (instead of a tall pink slab); the right side is a
curved pink star wall with lavender pilasters, a cream rim and gold lines (instead of a separate tub); ONE enemy floats high as the hero,
the others stay low; no rib ceiling, no concentric arch tunnel. What is still wrong: the upper 40 % still reads as a pale lavender-pink
chamber; the new 3D machine towers (MACH16) are barely visible from the checkpoint (hidden behind the drum and the hero enemy, too small
and too far); the far end still shows the level's tube through the portal; the water's raised surf edge (the "slab") is unchanged; no
moving-camera recording was made for pass 16 (the user asked for the backup first).

## What was tried, in order (all at u 229.5, centre lane, 412 x 915; sheets in `steps/`, frames in `frames/`)
| Step | What | Result |
|---|---|---|
| pass 15 (`,norecon16,wall15`) | machine band at deck level, cream rib ceiling, facade recoloured | the band is invisible from this camera (the housing and drum hide the walls; probed by tinting it green); ribs = a "gradient ceiling" the user rejected. Superseded |
| pass 16 recon v1-v4 | drum housing, raised ledge, curved right wall, gear, arches over the channel, instanced machinery on the vault (greebles) | drum and right wall closer; the ARCHES + portal read as a ring tunnel (removed); the greebles read as small lilac blocks ("flat building blocks", rejected by the user) |
| ART16 projection (`,art16`, opt-in) | the master's own distant scenery projected from the checkpoint camera onto the chamber's walls and vault | exact only from one viewpoint; the master's top band is its HUD and banner, so the projected top was an inpainted haze; the user REJECTED it ("blurry and smeared ... do not project across mismatched surfaces") |
| ART16 texture fills | Telea inpaint; mirrored donor rows; tiled high-pass detail; LaMa generative inpainting (big-lama, CPU) | all REJECTED by the user (smears, kaleidoscope repeats, wallpaper). Final texture: authentic pixels only, the hidden areas transparent (`steps/art16_authentic_only_texture.png`; `scripts/make_backdrop_art.py <master> - <out>`) |
| ART16 depth cards (`,art16`) | three planes square to the approved camera at the scenery's depths | the cards drew behind other geometry and their overlaps doubled; then the user's strict mandate forbade cards for nearby scenery. Kept only as the opt-in `art16` for the record |
| **MACH16 v1 (current default in scene07)** | real 3D machine towers (washer units with glowing round doors and control strips, tanks with gold bands and domes) on the ledge and behind the right wall, the original's green-topped machine at its screen position, pipes joining the two sides overhead, a far arch with a glowing washer door and stacks round the opening, high bubbles, the big blue gear restored | built and running (no console errors); barely visible from the checkpoint: needs the next steps below |

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
`proofs/identity_5ab92333.txt`: the accepted `?s3=intunnel`, the normal game, the 3D opening and Level 1 (start and 20 s), pass 13b build
`6579f556` against this build `5ab92333`, WebGL canvases, seed 7 (written by `scripts/identity.sh`).

## Cost (one plain render of the 3D scene at the checkpoint; SwiftShader, so no phone frame rate is claimed)
| Build | Draw calls | Triangles |
|---|---|---|
| pass 13b | 288 | 2,516,903 |
| pass 16 recon v4 | 257 | 2,404,557 |
| pass 16 MACH16 v1 (current) | 329 | 2,276,361 |

## Tripo
No job, no credits (1,060 available). The user's new mandate: no new Tripo spending without authorization.
