# Real-game preview of the whole sequence (9 November 2026 ~17:20 UTC, session 3849f5c8). NOTHING here is approved.

The user's priority correction (`Design/ReferencePacks/2026-11-09_Sequence_Priority_Correction_from_user/README.md`): show the REAL game, girl -> laundry
-> accidental fall -> washer -> tunnel -> Screen 6 gameplay, then fix the missing pieces in that order.

**What was captured:** the PLAIN LAUNCH of `WebDemo/index.html`, exactly as a player opens it:
`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56`, committed bundle (identical to a fresh build, `verify_restore.sh --build`).
It ran in headless Chromium 153 with software WebGL at 432x768 CSS px, DPR 2 (864x1536, the references' size), seeded.
- Opening frames: `tools/six2/shots6.cjs`, real seconds after START, in `stills/`. The page logged 0 console errors.
- Live game: `tools/s56/shots56.cjs` at Tap to Start, u 46 and u 206, in `game/`.
- Continuous recording, opening into Level 1 gameplay with the flow autopilot (swipes, taps): `tools/level1/record_flow.cjs`,
  frames in `recording_frames/` (excluded from Git by the size limit; the mp4 is kept).
- Sheets:
  - `SHEET_approved_vs_real_game_screens_1-6.png`: approved (top) vs real game (bottom).
  - `SHEET_real_game_sequence_15_frames.png`: every captured moment.
- How to reproduce: `bash Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8/capture_all.sh` (all three captures, serialized through
  `flock /tmp/bw_browser.lock`), then `python3 .../sheet.py <out> <ref1> <game1> ...` for the side-by-side.

## Status per screen (judged by eye against `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06`, same 864x1536 frame)

| Screen | Real game moment | Status | What works in the running game | What is missing or wrong (largest first) |
|---|---|---|---|---|
| 1 The surprise hideout | Laundry Toss, waiting | MOSTLY THERE | Rigged Tripo girl kneeling (brown curly ponytail, pink bow, pink jacket), breathing, blinking, patting the towel. Purple Tripo basket on the rug. Pink mascot under the blue cloth towel, eyes peeking. Pink-gold washer, room. | Her mouth and face are painted on the model (no face rig), so her expression cannot change. A yellow towel stack covers the lower-left foreground. |
| 2 She loads the laundry | 0.9-3.4 s | PARTIAL | Door swings open. She grips the blue towel with both hands (IK), lifts it off him, knee-walks to the washer and pushes it in. He is left peeking with the "!" marks. | Camera behind her at the washer: her face is hidden (the approved shows her smiling 3/4 face). The towel hangs as a stiff cone, not a soft fluffy towel. She knee-walks; her hands hold the towel's top edge only. |
| 3 Oops! He goes in too | 3.5-5.8 s | PARTIAL, WITH DEFECTS | She scoops the yellow towel with him in it and pushes it into the drum. He lands sitting in the drum with the blue towel on his head, yellow towel beside him, surprised "O" face (5.6 s, the best frame). | 3.3-4.2 s: he is HIDDEN inside a smooth yellow dome, so the player does not see him go in. 5.0 s: mid-tumble his EYES DETACH (two white discs below him, his back to the camera). 4.2-7.2 s: the drum's back is OPEN: the room's window and curtain show behind him. No water swirl in the drum. |
| 4 The wash begins | 5.8-7.8 s | PARTIAL | Front view of the pink washer fills the frame (paw medallion, lights, pipes, tanks). The door swings shut with a bounce. The lights come on. He is behind the glass, surprised. | Almost NO WATER behind the glass. The approved has a churning blue swirl with white foam round him at chest height. At 7.9 s a single flat blue band crosses his eyes. He does not react to the water (no bob or tilt). |
| 4 -> 5 transition | 8.0-8.9 s | BROKEN AT 8.5 s | The camera flies through the porthole behind him into the drum. | 8.5 s: the camera looks out of the drum's far end INTO THE LAUNDRY ROOM (window, curtain, shelf). The room is hidden only once the camera passes the porthole plane, and the room's back wall stands inside the drum tube behind the washer. One eye floats beside his body. The water is a flat solid blue plane. |
| 5 Into the laundry tunnel | 8.9 s, then the live Tap to Start | GOOD BASE, NOT MATCHED | Perforated lavender drum tunnel, pink-gold arches with lamps, the cobalt gear on the right, pink-gold machinery on both banks, the hand-over into the live game at 8.95 s. He stays visible from the washer into the game. | He is far too big and close to the camera. The water is flat solid blue (opening) or white blotches and a bubble ring (Tap to Start). Round pom-pom brushes at the top corners (approved: none in 5). Coins float in the air. |
| 6 Swim, collect, avoid enemies | live game, u 206 | PLAYABLE, LOOK NOT MATCHED | Real Level 1 gameplay: swipe lanes, jump, tap spin, coins, socks, gems, enemy grime balls, hearts, mission "Rescue 5 lost socks", Bubble Blast, Turbo Spin, Level Complete (route test in the recording below). | No side roller BRUSHES (lane brush6 has them built, not merged). Coins about 2x too big, floating. White cloud patches on the water instead of thin crests, hue violet-cobalt instead of azure-turquoise. He shows about 1.5x too much height. The gear is on the wrong side and edge-on. Orange diagonal pipes from the top corners. The machinery's upper zones are bare. Measured: `../13_scene6_match_47f75e22/qa/art_director_ranking.md`. |

## The missing pieces, in the user's order (the work list for the specialists)
1. **The fall (Screen 3):**
   - He must be VISIBLE going from the basket into the washer: face and eyes out of the yellow bundle, surprised, then slipping out and tumbling in a readable arc.
   - Fix the detached eyes in the tumble.
   - Her face visible while she loads (Screen 2 camera).
   - The blue towel as a soft towel in her hands.
   - Lane girl12 -> character-animation specialist.
2. **The washer interior and transition (Screens 3-5):**
   - A closed, perforated drum back behind him from 4.2 s (no room through it), as approved 03 / 04.
   - It opens into the glowing tunnel only during the fly-through. The room is hidden from the moment the camera's view goes through the porthole.
   - No room at 8.5 s.
   - Lane arch56 -> architecture specialist.
3. **The wash water (Screens 3-5):**
   - Water rising and churning round him behind the glass, with foam crests and bubbles. He bobs with it.
   - Real waves, not a flat plane, in the drum fly-through.
   - Lane s56 -> water specialist.
   - Then the Screen 6 water (water6 v2: azure / turquoise, thin crests, no white clouds, sink him about 0.3 m on m.tilt).
4. **Screen 6:**
   - The rotating brushes (lane brush6).
   - Machinery, gear and its colour; the red tint at u 206 (lane arch56).
   - Coin scale about 0.5x drawn only, pickup radius unchanged (coordinator).
5. **Verification:**
   - game-art-director: approved vs before vs after for every screen.
   - gameplay-visual-testing: route test, controls, console.
   - Proof that `?s3=intunnel` and the plain launch are unchanged without the new switch.

All new work goes behind ONE candidate switch, `seq7` (each lane gates its own changes on it). The plain launch stays as captured here until the user approves.
