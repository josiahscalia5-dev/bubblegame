# 74: `scene07`, the whole "Avoid Enemies!" screen (8 November 2026, session 57091b57, branch `ccr-b67aeffb-d94mmq`)

**NOT accepted; IN PROGRESS; waiting for the user.** Opt-in: `index.html?s3=intunnel,structmatch,home,level1,tripo1,scene07`.
Master reference: `Design/ApprovedScreens/09_Avoid_Enemies.png` (board panel 07). The user's kit:
`Design/ReferencePacks/2026-11-08_Screen07_Claude_Tripo_Reference_Kit_from_user/` (annotated targets 1-6, object crops 08-15, Tripo guidance).
Code: `WebDemo/src/tripo_l1.js` (`SCENE07`, `buildArchitecture`, `applyScene07`), one hook line in `game.js`. No Tripo credits spent.

## Passes (all real three.js geometry along the track, with parallax as the camera moves; no picture)
1. (not kept) the game's own washer models on the walls: wheel brushes, gold portal rings, towers, gears.
2. denser and bigger (`frames/pass2/`): both sides framed, but the rosette wheel brushes and towers are BOARD 05's, not 07's, and the gold
   read orange-copper under the tunnel's warm-purple grade.
3. (not kept) a cool tint: the gold turned muddy maroon.
4. **current** (`frames/pass4/`, `01_original_before_after.jpg`): what Screen 07 itself shows (kit crops 09, 10, 13): both sides of the
   water channel bordered by curved pink-lavender CHANNEL WALLS with yellow star ornaments and a GOLD TOP RAIL (built from the track's own
   curve, u 216-268); thick PINK PORTHOLE RINGS with gold rims and an iridescent bubble inside on the upper left wall; gears high on the
   walls; big iridescent bubbles. Plus `tripo1` v2 (the floating Tripo enemy, `72_tripo1_enemy/`).

## Checklist: the original's objects (the kit's annotations 1-6) in the game now
| # | Original | In the game (pass 4) | Status |
|---|---|---|---|
| 1 | left: big pink porthole ring with a bubble, gold rims; colourful platforms | pink porthole rings with gold rims and a bubble on the upper left wall (u 233, 251) | PARTLY: visible at u 230 top left; smaller and higher than the board's; the left channel wall barely shows |
| 2 | glossy navy enemy floating, angry pink eyes | the Tripo enemy floating clear of the water, glossy, halo (`tripo1` v2) | CLOSER: still left of centre and lower than the board's, and more violet than navy |
| 3 | right: round pink / gold side enclosure with stars, blue machinery | the right channel wall: pink-lavender, yellow stars, gold rail, curving into the distance | CLOSER: lower than the board's wall, which rises to about two thirds of the screen height at the right edge |
| 4 | the mascot ON saturated blue water, restrained splashes | unchanged (the accepted mascot and Level 1 water) | NOT CHANGED in this pass |
| 5 | large gold paw coins framing the path | unchanged (the game's coins, in their lanes) | NOT CHANGED: the board's coins sit higher and at the sides |
| 6 | pink curved "Avoid Enemies!" banner | the game's smaller "Avoid enemies! Tap to spin-attack them" banner | NOT CHANGED |

## Remaining differences (honest)
- The blue swirl TUBE still dominates the middle of the screen; the board shows an open, deep corridor of machinery, coins and lights.
  The tube and the course belong to `level1.js` (session `b0abcf95`'s file: roof2 is its candidate for the upper tunnel).
- The walls should be taller and the left one more visible; the gears read orange-copper (their texture's gold under the grade).
- The water, the coins' placement and the banner are not changed yet.
- Mobile cost: pass 4 adds 2 walls, 2 rails, 3 portholes, 4 gears (18,748 triangles each, drawn only within 34 m) and 18 bubbles.

## Proofs
- Gameplay: the route with `tripo1,scene07` has the identical event log and identical states (through Level Complete) as without
  (`proofs/route_upper_scene07.json.log` against `72_tripo1_enemy/proofs/route_upper_base.json.log`).
- Identity without the switches: `proofs/identity.txt` (`scripts/identity.sh`).
- Recording: `videos/` (the moving camera through the stretch, the enemies, the coins).
