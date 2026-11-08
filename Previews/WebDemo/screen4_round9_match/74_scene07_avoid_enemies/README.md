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

5. **current** (the user's review of pass 4; `frames/pass5/`, `01_original_before_after.jpg`, `02_original_before_pass4_pass5.jpg`): the
   copper gear and the straight channel walls REMOVED; ROUND pink-lavender star ENCLOSURES with gold rims at the water's edge, alternating
   sides (kit crop 10); larger pink PORTHOLE rings on BOTH upper walls (crop 09), covering more of the plain tube; BLUE GEARS built in
   three.js (blue teeth, lavender ring, gold hub) in place of the copper `gear.glb`; the game's particle bursts at 55 % size only while
   the camera is in this stretch (fewer large white stars over the blue water; the exact previous size restored outside). Gameplay
   identical (`proofs/route_upper_scene07_pass5.json.log`), no console errors.

## Passes 6 and 7 (the user's environment corrections: "not another pass that only adds decorations to the wrong tunnel")
6. (not approved by the user: "a giant flat hot-pink ceiling") the tube OPENED above the water in this stretch (level1.js's wall shader
   patched at run time from `tripo_l1.js`, its hoops hidden here; `level1.js` itself unchanged) into one open laundry CHAMBER: a facade
   shell, decks either side of the water with gold edges, gold-pink portals where the tube enters and leaves, the big pink washer housing
   (left), big star tubs (right). Frames `frames/pass6/`, `03_original_before_pass5_pass6.jpg`.
7. **current** (`frames/pass7/`, `04_original_before_pass6_pass7.jpg`, video `videos/scene07_pass7_layered_chamber_seed7_412x915.mp4`):
   structures mapped to the original's screen positions: the pink housing with its bubble at the left edge; the game's own colourful
   machinery models (blue-gold machines, towers, pink-gold pipes) stacked high on the chamber walls as the layered upper background; pink
   rings high; blue gears top right and top centre; a gold balustrade on posts along the left walkway; the chamber shortened so the bright
   exit portal sits at the vanishing point; soft coloured lights; a light lavender vault (no hot pink); the original-style red warning
   banner styled (title only, warning icon) while scene07 is on. Gameplay identical, no console errors; identity `proofs/identity.txt`.

**Still NOT the original (honest):** the vault still reads as a big lavender dome above the window band, where the original is a busy,
bright, layered corridor; the enemy is in the left lane (the original's is right of centre: its lane is gameplay, in `level1.js`); the
restyled banner was not caught in a frame yet (it did not show at u 205-233 in these captures: not verified); the coins and the water are
unchanged; the HUD's mission panel is the game's own. The user has NOT approved passes 6 or 7.

## Checklist: the original's objects (the kit's annotations 1-6) in the game now (pass 5)
| # | Original | In the game (pass 4) | Status |
|---|---|---|---|
| 1 | left: big pink porthole ring with a bubble, gold rims; colourful platforms | pink porthole rings with gold rims and a bubble on both upper walls (6), round star enclosures | CLOSER: the rings read; the board's ring is lower and larger at the left edge |
| 2 | glossy navy enemy floating, angry pink eyes | the Tripo enemy floating clear of the water, glossy, halo (`tripo1` v2) | CLOSER: still left of centre and lower than the board's, and more violet than navy |
| 3 | right: round pink / gold side enclosure with stars, blue machinery | round pink-lavender star enclosures with gold rims (7, alternating sides); blue gears high | CLOSER: the board's enclosure is taller and nearer at the right edge; the gears read periwinkle, not the board's deep blue |
| 4 | the mascot ON saturated blue water, restrained splashes | unchanged (the accepted mascot and Level 1 water) | NOT CHANGED in this pass |
| 5 | large gold paw coins framing the path | unchanged (the game's coins, in their lanes) | NOT CHANGED: the board's coins sit higher and at the sides |
| 6 | pink curved "Avoid Enemies!" banner | the game's smaller "Avoid enemies! Tap to spin-attack them" banner | NOT CHANGED |

## Remaining differences (honest)
- The blue swirl TUBE still dominates the middle of the screen; the board shows an open, deep corridor of machinery, coins and lights.
  The tube and the course belong to `level1.js` (session `b0abcf95`'s file: roof2 is its candidate for the upper tunnel).
- The enclosures should be taller and nearer the screen edges; the gears read periwinkle under the tunnel's purple light (the board: deep blue).
- The mascot's silhouette is the accepted one (not changed: the Screen 4 baseline is the user's first priority after the opening).
- The water, the coins' placement and the banner are not changed yet.
- Mobile cost: pass 5 adds 7 enclosures, 6 portholes, 5 gears (procedural, a few thousand triangles each, drawn only within 34 m) and 18 bubbles.

## Proofs
- Gameplay: the route with `tripo1,scene07` has the identical event log and identical states (through Level Complete) as without
  (`proofs/route_upper_scene07.json.log` against `72_tripo1_enemy/proofs/route_upper_base.json.log`).
- Identity without the switches: `proofs/identity.txt` (`scripts/identity.sh`).
- Recording: `videos/` (the moving camera through the stretch, the enemies, the coins).
