# Assets and models (8 November 2026, session bb87ba9f). All in plain Git (no Git LFS rules; no file over 50 MB): a clone has the real binaries

## The user's six Tripo assets: `Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/` (originals, never overwrite; sha256 in `Bubble_Wash_Tripo_GLB_Manifest.json`)
| Asset | Original GLB | Status in the game |
|---|---|---|
| cartoon girl | `cartoon girl 3d model.glb` | RIGGED in Blender (`rig/rig_girl.py`: hips, spine, chest, neck, head, arms, hands, legs; automatic weights) -> `WebDemo/models/opening/girl_rigged.glb`. IN USE (`girl2`, default in the opening): no embedded animation clips; driven procedurally (bones + two-bone IK, eyelid caps for blinks). Her eyes are painted (gaze = head direction) |
| purple laundry basket | `purple laundry basket ...glb` | IN USE with `tripo2` (`WebDemo/models/opening/basket_tripo.glb`, violet lifted) |
| plush towels | `soft plush towels ...glb` | IN USE with `tripo2` (`WebDemo/models/opening/towels_tripo.glb`, split into yellow / blue / pink by `WebDemo/tools/tripo/split_loose_parts.py`) |
| washing machine | `washing machine ...glb` | NOT used in the opening (a single mesh: no door to animate); optimised copies `WebDemo/models/scene07/washer_user_1k(_lod).glb`. The opening's washer is code-built (`buildWasher` in `opening3d.js`) with a real hinged door; `six` restyles it pink-and-gold |
| pink fluffy creature | `pink ...glb` | NOT used: the user rejected it as the mascot. The mascot is `WebDemo/models/mascot.glb` (+ `mascot_furshell.glb` in the game; the opening adds a code face) |
| sock character | `sock ...glb` | NOT used (the game's sock pickups are `WebDemo/models/sock.glb`) |

## Game models: `WebDemo/models/` (all used by switches; see `CLAUDE.md`)
mascot.glb, mascot_furshell.glb (the player), coin_p2(.lo).glb (paw coins), gem.glb, sock.glb, brush_p2.glb / s3_brush.glb (brushes),
l1_enemy_tripo.glb (Tripo grime ball, `tripo1`), drum.glb, liner.glb, machinery(_lod).glb, gear.glb, pipe.glb, tower.glb, roller(_candidate_1/2).glb,
s3_machinery.glb, s3_entrance.glb, s3_castle.glb, castle.glb, crown.glb, opening/girl_rigged.glb, opening/basket_tripo.glb, opening/towels_tripo.glb,
scene07/washer_user_1k(_lod).glb. Textures: `WebDemo/textures/`. Every other Tripo job and its decision: `Design/TripoDeliveries/*/README.md` and
`Design/TripoDeliveries/TRIPO_JOBS_LOG.md` (rejected: the castle card, the Screen 09 architecture blobs, the pink mascot rear).

## References
- NEW six-scene direction: `Design/ReferencePacks/Six_Scene_New_Direction/` (storyboard, six crops, both of the user's mandate packs).
- Screen 09 "Avoid Enemies!" (history): `Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/00_AUTHENTIC_APPROVED_SCREEN09.png`
  and the packs `2026-11-08_Avoid_Enemies_*`. Classic Screen 4 (accepted game): `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.
