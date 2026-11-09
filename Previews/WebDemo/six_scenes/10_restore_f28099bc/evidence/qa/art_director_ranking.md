# Art director ranking: six approved portrait scenes vs the real game (QA 5b, read-only, 9 November 2026)

Targets: `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06` (864x1536).
Game frames (all real three.js renders, plain-launch switch list `intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56`):
- Scenes 1-5 of the opening: `_evidence/baseline/t_-1.00.png` (waiting Laundry Toss), `t_2.40`, `t_4.80`, `t_7.00`, `t_8.40` (864x1536, DPR 2, captured 12:39-12:46 UTC by the coordinator; the baseline arrived, no fallback used).
- Scenes 5-6 in the live game: `Previews/WebDemo/six_scenes/09_s56_ac4e3449/s56_tap.png`, `s56_206.png` (432x768, upscaled x2 for measuring; fine detail is not judged there).
Side by sides (yellow lines every 96 px): `_evidence/qa/sbs/`. Scripts: `_evidence/qa/scripts/` (`measure.py spec.json`, `track.py`, `herobox.py`).
Coordinates below are pixels in the 864x1536 frame (x right, y down). Lanes: girl12, washer34, s56, ui, coordinator.

## Measurements (separate from the visual judgement; for tracking only, not similarity percentages)
Colour classes = share of pixels in a zone by HSV class (my definitions in `measure.py`: cyan/turquoise hue 175-205, azure/cobalt 205-235, ultramarine 235-262, pale = S<0.18 and V>0.85, gold = hue 28-55, S>0.45).

| Scene / zone | approved | game |
|---|---|---|
| S1 porthole glass mean colour | #a96cac, V 0.76 (violet glass) | #a694e3, V 0.92 (room seen through it) |
| S2 open-drum interior mean colour | #5c70c3, V 0.77 (deep blue drum) | #9f81cb, V 0.88 (room seen through it) |
| S2 hero fur median hue / mean RGB | 324 deg / (238,88,178) | 336 deg / (238,69,143) redder |
| S3 lower drum (200-780 x 900-1120): cyan / pale crests / ultramarine | 7.8 / 10.3 / 5.3 % | 3.9 / 4.4 / 18.5 % |
| S4 inside porthole: azure-cobalt / pink / pale crests | 30.3 / 12.6 / 10.5 % | 2.9 / 28.0 / 7.8 % |
| Gold pixels, median brightness V (scene band y 330-1180), S1/S2/S3/S4 | 0.98 / 0.98 / 0.98 / 0.98 | 0.83 / 0.70 / 0.70 / 0.63 (bronze) |
| Gold share of scene band S1 / S4 | 2.8 / 6.8 % | 20.4 (towel stack + rim) / 29.8 (thick rim) % |
| S5 opening 8.4 s water band (y 1000-1200): azure-cobalt / cyan / pale | 37.7 / 13.4 / 9.3 % | 99.6 / 0.0 / 0.2 % (flat plane) |
| S5 live tunnel upper (y 330-700): lavender / pink machinery / ultramarine | 33.5 / 33.3 / 11.1 % | 53.4 / 16.4 / 2.3 % |
| S6 water band (y 1150-1300): ultramarine / cyan / pale crests | 20.0 / 13.9 / 14.7 % | 63.4 / 0.0 / 1.0 % |
| Hero visible pink body S5 (w x h, top y, w/h) | 433x256, 866, 1.69 | 385x348, 862, 1.11 |
| Hero visible pink body S6 (w x h, top y, w/h) | 396x222, 936, 1.78 | 402x339, 806, 1.19 |
| HSV hue-sat histogram correlation, scene band: S1..S6 (S5 opening / S5 live) | - | 0.42, 0.48, 0.35, 0.39, 0.52 / 0.62, 0.43 |
| SSIM gray, scene band at 216x212: S1..S6 | - | 0.06, 0.07, 0.07, 0.10, 0.06 / 0.04, 0.06 (not discriminating yet: layouts differ too much) |

## Scene 1, The surprise hideout (ref 01 vs t_-1.00)
1. **Hidden hero and blue towel** (centre, x 380-660, y 770-960). Approved: a large bubblegum-pink fluffy face with big glossy brown eyes peeks out from under a DRAPED sky-blue terry towel that hangs over the basket rim. Game: the towel is a rigid upright dome (reads as a blue ball). Only a small red face shows behind a yellow flap; the fur does not read. Owner: girl12 (towel); hero eyes/model: washer34.
2. **Girl pose and foreground** (left, x 0-470, y 380-1180). Approved: a kneeling three-quarter girl, full figure down to the pink sneakers (y 1000-1160), face turned right with an open delighted smile. Game: she stands and leans. Her legs are hidden by a big folded-towel stack in the foreground (x 0-280, y 920-1180), which the approved image does not have (only small blurred towels in the corners below the caption). Her expression is a teeth-showing grimace looking down. Owner: girl12.
3. **Washer porthole** (right, x 640-864, y 560-900). Approved: a closed door with violet reflective glass. Game: no glass and a hollow ring, so the room and curtain show through the drum. The washer also sits about 85 px higher (paw badge y ~420 vs ~505) and the gold reads bronze. Owner: washer34.
4. **Room light and depth** (background, y 330-900). Approved: a warm sunset window glow, deep violet shadows between shelves (dark share upper-left 21 % vs game 10 %), bottles, a glossy reflective floor. Game: flat pale pink/white with low contrast and no sunlight. Owner: girl12.
5. **UI** (top and bottom). The logo has no soap-cloud plate, and a stray white bar sits behind "Kingdom" (x 245-620, y 110-150). The coin and gem pills overlap each other and the logo (x 560-864, y 15-75). The plaque is a plain pill with a flat coin instead of the scalloped, bubble-trimmed plaque with an embossed paw. Start has no gold rim and no bubble clouds. Owner: ui.

## Scene 2, She loads the laundry (ref 02 vs t_2.40)
1. **The open washer has no drum** (right, x 590-864, y 480-950). Approved: a deep blue perforated drum takes the towel. Game: a hollow ring showing the room and the blue curtain behind the machine. Owner: washer34 (`SIX2_DRUM_END` / washer).
2. **Girl pose and camera** (x 130-560, y 400-1000). Approved: a right-facing three-quarter profile with the face fully visible (freckles, open smile), both hands gripping the towel at the drum mouth, leaning in. Game: mostly the back of her head and ponytail, the face only an edge, one hand at the door hinge, standing upright. The camera is too far behind her. Owner: girl12.
3. **The door reads as a second porthole** (x 90-500, y 540-900). Game: a full face-on gold ring directly behind her. Approved: the door swung open to the left, seen nearly edge-on behind her arms (x 410-560). Owner: washer34 (`SIX2.door`), with the camera from girl12.
4. **Blue towel** (x 430-640, y 730-1080). Approved: a thick terry towel over both hands, with folds hanging into the drum. Game: a flat vertical sheet hanging to the floor. Owner: girl12.
5. **Hero and basket** (left, x 190-380, y 800-980). The hero is redder (hue 336 vs 324) with flat white-ringed googly eyes; the approved hero is bubblegum pink with glossy brown eyes and a smile (washer34). The basket holes are empty rounded rectangles instead of round holes showing coloured laundry, and the paw badge is dull (girl12).

## Scene 3, Oops! He goes in too (ref 03 vs t_4.80)
1. **The hero faces away** (centre, x 230-610, y 480-830). Approved: his face toward the camera, surprised open "Oops" mouth, tiny arms, tumbling in an arc. Game: only the back of his fur and ears; no face at all. Owner: washer34.
2. **The drum is open-backed and half-perforated** (inside the porthole, x 200-700, y 450-1100). The room (pink wall, window lattice, green) shows through the drum's back, and the holes cover only the right half. Approved: a closed lavender-silver cylinder with holes in perspective all round and a cobalt glow. Owner: washer34 (`SIX2_DRUM_END`).
3. **The camera is too close** (whole frame). The porthole rim fills the full width (x 0-864, y 330-1230). Approved: the machine face stays in view, with the open door and hinges at left (x 0-170), the top paw badge (y 330-430), lights at right and the porthole about 2/3 of the width. Owner: washer34 (camera keys 3.25-7.4).
4. **Water and towels** (lower drum, y 850-1110). Approved: luminous swirling cobalt water with white crests, rising bubbles and a motion arrow; the blue towel on his head, the yellow towel tumbling beside him. Game: a flat blue band with opaque white ball bubbles, the blue towel lying as a translucent mound in the water, and a dark-blue rectangular block under him (x 255-410, y 850-910). Owner: washer34.
5. **Large pale foreground bubbles** over the lower third (x 90-650, y 1160-1536) wash the frame out; the approved bubbles stay at the margins. Owner: washer34.

## Scene 4, The wash begins (ref 04 vs t_7.00)
1. **No water behind the glass** (porthole, x 250-610, y 660-1020). Approved: a deep blue-violet vortex with white-crested waves wrapping round him, plus bubbles. Game: no visible water, just lavender-tinted glass (azure-cobalt 2.9 % vs 30.3 %). Owner: washer34.
2. **The hero is oversized and flat** (same zone). Game: his face fills the glass, with white-ringed googly eyes, an O-mouth and a towel cap. Approved: the hero is about half the glass width, with a happy smile, glossy eyes and arms out. Owner: washer34.
3. **Rim and gold** (x 165-720, y 560-1120). Game: a very thick, dull bronze rim (gold V 0.63 vs 0.98) and a smaller glass opening (~365 px vs ~480 px across). Approved: a polished bright gold rim with highlights and rivets. Owner: washer34.
4. **Silhouette and framing** (whole frame). Game: a boxy cabinet with vertical sides and feet, cut at the left edge, bottom at y ~1310, two big glass tanks on top. Approved: a rounded tub shape with curved shoulders, ~30 px margins with the room visible on both sides, bottom at y ~1180, a small tank at top-left and a brass pipe at top-right. Owner: washer34.
5. **Machine lights**. Approved: glowing violet bulbs along the top band and a lit white/grey/cyan/yellow column at right. Game: the same bulbs, but flat and unlit, and no glow on the ring or glass. The room behind is blank. Owner: washer34. (The logo bar and pills are the same as in Scene 1; owner ui.)

## Scene 5, Into the laundry tunnel
### a) Opening frame at 8.4 s (before the 8.95 s hand-over, ref 05 vs t_8.40)
1. **No tunnel.** The camera inside the drum looks at an open drum end that shows the laundry room (window, blue curtain, pink walls). There are no arches, machinery, tanks, gear or lamps. Owner: coordinator (camera keys 8.45-9.15, hand-over), with washer34 (`SIX2_DRUM_END`).
2. **The water is a flat solid plane** over the bottom 60 % (water band azure-cobalt 99.6 %, cyan 0 %, crests 0.2 %, against 37.7 / 13.4 / 9.3 %). Owner: washer34 (`SIX2.water`) / coordinator.
3. **The hero is seen side-on, with an eye floating outside the fur** (x 600-800, y 730-880). Approved: his round fluffy back centred low (centre 429, 1004). Owner: washer34 (hero) / coordinator (camera).
### b) Live game, s56 Tap to Start (ref 05 vs s56_tap)
1. **Water.** Game: flat ultramarine with large white cloud-like foam patches, in a narrow channel between walkways with railings. Approved: saturated cobalt-to-cyan with lacy crests and splashes round him, filling the tunnel from wall to wall (water band cyan 0.1 % vs 13.4 %). Owner: s56.
2. **Missing landmarks.** Approved: pink/gold machine modules on both sides, glowing violet liquid tanks, gold railings, a paw badge module (x 30-140, y 870-980), a big cobalt gear on the RIGHT (x 600-800, y 560-860), an overhead brass pipe and lamp at top centre, and warm lamp strips on every arch. Game: a plain lavender tube (upper zone lavender 53 % vs 33.5 %, pink machinery 16 % vs 33 %), thin rods crossing the top, no gear and no lamps. Owner: s56.
3. **Clutter that is not in the approved image.** Coins ~170 px wide at left (x 100-280, y 600-800) and right (x 670-840, y 820-990), a large sock character (x 560-700, y 590-850) and a face-on pom-pom brush in the top-right corner (x 680-864, y 360-720). Owner: s56 (draw scale), coordinator (spawns at Tap to Start).
4. **The hero rides high and boxy.** Visible body 385x348 (w/h 1.11) vs 433x256 (1.69): the approved hero is half-submerged with splashes at the waterline (y ~1120). The game puts a ring of bubbles round his base. Owner: s56.

## Scene 6, Swim, collect, avoid enemies (ref 06 vs s56_206)
1. **Water** (lower half). Game: ultramarine 63 % vs 20 %, cyan 0 % vs 14 %, crests 1 % vs 15 % (band y 1150-1300), with big flat white foam patches like clouds round him. Approved: luminous cyan-cobalt with lacy white crests. Owner: s56.
2. **The hero is too high and blocks the lane** (top y 806 vs 936, visible height 339 vs 222 px). His head covers the enemy and the centre lane. Owner: s56 (swim height), coordinator (camera follow).
3. **Coins oversized and clustered.** Game: a stack of 3-4 coins ~250 px wide at right (x 530-820, y 520-850) over the railing. Approved: 5 coins of ~90-120 px in three lanes on the water (x 210-660, y 730-950), receding toward the vanishing point. Owner: s56 (draw scale, on `m.tilt` not `m.root`), coordinator (lane placement).
4. **Brushes missing.** Approved: huge rotating pink/white/blue cylindrical brushes framing the left (x 0-180) and right (x 700-864), y 450-1050. Game: none in frame. (At Tap to Start they are face-on rosettes in the top corners instead.) Owner: s56.
5. **Landmarks.** The gear is on the LEFT (x ~150-230) and dark; approved, it is on the RIGHT (x 590-750, y 500-690). The star modules, glowing tanks and warm lamp arches are missing, the railings are orange-red instead of gold, and diagonal rods cross the top. Owner: s56.
6. **UI.** The "Collect coins, gems & rescue socks!" hint card sits right over the vanishing point (x 200-670, y 340-480). Owner: ui.

## Cross-scene issues
- **The drum has no back** (Scenes 1, 2, 3 and the 8.4 s frame of 5): the room shows through the washer every time. One fix closes four scenes (washer34, `SIX2_DRUM_END`).
- **Four different heroes:** S1-S2 a red face with googly eyes, S3 back only, S4 a big flat face, S5-S6 a fur ball. Approved: one bubblegum-pink hero with glossy brown eyes (washer34 owns the hero block).
- **The gold reads bronze in S1-S4** (median V 0.63-0.83 vs 0.98).
- **The same UI defects in every opening frame** (logo bar, overlapping pills, plain plaque).

## Single most important fix per lane
- **girl12:** the Scene 1 composition. Kneel the girl in three-quarter view with her sneakers visible lower-left, and remove the foreground folded-towel stack that hides her legs. Next: drape the blue towel over the basket so his face peeks out under it.
- **washer34:** close the drum. Give it a perforated lavender-silver back with a cobalt glow, so that no frame shows the room through the washer (S1, S2, S3, S5 at 8.4 s). Next: turn him to face the camera in S3, and show the swirling water behind the glass in S4.
- **s56:** the water. Make it a cobalt-to-cyan gradient with lacy white crests and splashes at his waterline, filling the tunnel wall to wall, and remove the cloud-like white foam patches. Next: the side machinery, with the gear on the RIGHT, the tanks and the lamp arches.
- **ui:** the logo block. Remove the white bar behind "Kingdom", give the logo its soap-cloud plate, and separate the coin and gem pills so they no longer overlap the logo or each other.
- **coordinator:** the 7.4-8.95 s hand-over. The camera must never face the drum's open end, so make the push-in reveal the s56 tunnel, or hand over before it turns. Scene 5 should open on arches and machinery, not the laundry room and a flat blue plane.
