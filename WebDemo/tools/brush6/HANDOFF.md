# Lane brush6 handoff (session ddf175f2, pass 2, 9 November 2026). Branch `claude/lane-s6-brush-47f75e22`, worktree /home/user/bubblegame_lanes/brush6

Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png` (864x1536), the two large
roller brushes at the left / right foreground. Measured targets: `WebDemo/tools/env6/TARGETS.md`. Judge in the integrated candidate
`S3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56,coin6,hero6,water6,brush6,arch56,env6` at u 206 (var6.cjs).

## State (pass 2, commit 3c0a67c2 and later)
- File `WebDemo/src/s56_brush6.js` only (switch `,brush6` with `s56`; the coordinator hook in s56_tunnel.js section 0). Off: nothing is built.
- Bristles: the see-through shell fur is gone. Each tier = two staggered rows of OPAQUE scalloped cones (BRUSH6.fur: 30 tufts, a ridge per
  tuft, rounded clump tips with a ragged fringe `jag`, fine strands `strands`/`contrast` kept down to ~1.5 px, a few stray strands, the tier
  above's shadow `shade`), a convex skirt profile, strand gloss tinted by the tier's light colour (`light.specWhite`). One draw call per brush.
- Colours (BRUSH6.colours, light.amb 0.75) corrected by the measured linear ratios approved / frame under env6's hero grade (`tools/brush6/tiers.py`):
  pink, white-lavender, blue within ~5-10 % in the main channels; the blue tier still a little light (R/G high).
- Placement refitted with `tools/brush6/fit6.js` (runs as a var6 variant on the frozen u 206 frame; fits du, x, h, s, sy, flare per side;
  lane bound minX 1.05 m). Per side `sy` (vertical proportion) and `flare` (the lower tiers widened as a pagoda, root and tip alike).
- Depth pull: near 2.6 m, k 0.01 (the anchor pair draws at ~2.6 m over the near water and the bank; at the old 3.45/0.15 and at 3.2 the near
  water cut the right brush's lower tiers off at y 0.60-0.67). He is 3.0 m ahead of the camera, never under the brushes on screen.
- LOD: brushes more than `lod.dist` (14 m) ahead draw the light bristle mesh (back row, 2 segments per tuft).

## Measured at u 206 (var6, measure()): approved -> now
- Left: top 0.34 -> 0.341; bell inner x 0.13 -> 0.134; tier inner x 0.17/0.19/0.20/0.21 -> 0.167/0.188/0.202/0.210; tier tips y
  0.551/0.597/0.656/0.714 -> 0.546/0.598/0.662/0.714; inner bristle tips 1.27 m from the centre-line.
- Right: top 0.44 -> 0.437; bell inner 0.89 -> 0.879; tier inner x 0.86/0.84/0.82/0.80 -> 0.869/0.842/0.820/0.800; tips y
  0.565/0.617/0.669/0.714 -> 0.573/0.617/0.669/0.711; inner tips 1.17 m.
- renderer.info at u 206 (all passes): with brushes 122 calls / 2,134,454 triangles, hidden 104 / 2,049,398 -> brushes 18 calls, 85,056
  triangles (pass 1: 138,432).

## Still differs (next steps, in order)
1. LEFT brush look: seen almost side-on, its strands read as long diagonal streaks and the tuft clumps are too subtle; the approved shows plump
   rounded clumps on each tier's face. Try fur.scallop 0.18-0.22 with tufts 20-24, a shorter visible strand (more tier overlap) and a
   stronger clump shading; judge on `b6_pass2_left_crop2x.png`-style crops.
2. Left cap: the pink bell is too tall and matte; the approved has a glossy, lower bell (y 0.41-0.46) under a separate taller gold drum
   with a flange (y 0.34-0.40). Lower cap.bell, raise `hat`, add gloss (bell rough 0.12, env 1.6).
3. Blue tier slightly light: lite '#1b94fa' -> ~'#0a84fa' (R/G lin ratios 0.03/0.7).
4. The game's white spray particles are drawn over the lower tiers (nearer than 2.6 m, or no depth test): water lane's call.
5. Pixel proof that the build with `brush6` off is unchanged (by construction: only s56_brush6.js changed and it builds nothing when off),
   and a Tap to Start capture (by construction: the first pair is at u 159.3 and drawn only within 60 m ahead of him; the run starts at
   u ~3.9).

## Tools
- `tools/env6/var6.cjs` (coordinator's, frozen frame) + `tools/brush6/fit6.js` (the fit as a variant) + `tools/brush6/tiers.py` (tier colours).
- Evidence: `Previews/WebDemo/six_scenes/17_screen6_env_ddf175f2/brush6/` (b6_pass2_*).
