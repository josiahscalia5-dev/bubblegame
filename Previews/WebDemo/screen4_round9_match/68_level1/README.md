# `?s3=...,level1`: the animated Laundry Toss opening and real travel through Level 1 (8 November 2026, session `dbccb9a3`)

The user's mandate and storyboards: `Design/ReferencePacks/2026-11-07_Animation_and_Movement_Mandate_from_user/` (the mandate,
the 12-panel Level 1 board, the 34 s phone recording of the APK) and `Design/ReferencePacks/2026-11-08_Motion_Instructions_from_user/`
(how the pink character enters the washer; how it swims through the tunnel). The detailed tunnel target stays the ORIGINAL
approved Screen 4. Branch `ccr-76d4bc77-rqhl8o` (this session's own; it carries everything from
`claude/bubble-wash-account-handoff-yhk8dy`). Checkpoint before any edit: `2be9200`.

**URLs:** the full app `index.html?s3=intunnel,structmatch,home,level1`; the course alone `?s3=intunnel,structmatch,level1`;
parts off: `,noswim1` (no swim strokes), `,noopening3d` (the painted Laundry Toss as before). Without `level1` nothing changes.

## Stage A: the causes (from the code and the user's recording, not guesses)

| what the user saw | cause |
|---|---|
| the "Laundry Toss!" opening is a static poster | it IS a picture: `screens12.js` shows the painted artwork (`ui/screens12/laundry_scene.jpg`) with a cut-out sprite; its only motion is a CSS bob, then a CSS zoom of the image. The repository has no girl model or rig at all (no glTF, FBX or Blender file of her) |
| he seems stuck near the bottom while a pattern scrolls | (1) the playable level was only the 33 m Screen 4 drum (u 3.9-37.2), about 4.7 s of riding; then `game.js` `loopRun()` ("Screens 5 onward are not built yet") flashed and put her back at the start, the sock count back to 0/5 (visible in the user's recording at about 30 s). (2) In those 4.7 s most of the picture is fixed to the camera: the tunnel wall's rings are painted in SCREEN polar coordinates (`tunnel_r9_match.js`: `bv` = screen angle and log screen radius; travel moves them only 0.03 ring per metre), the washer housing is drawn at a fixed distance ahead of the camera (`tunnel_s4_struct.js` HOUSING), and the water at her is a pad carried in her frame (`heroSwell`). Only coins, socks and brushes really pass |

## Stage B: the opening (`WebDemo/src/opening3d.js`, mounted by `screens12.js` under `home,level1`)

A real-time three.js scene in its own canvas behind the real UI (top bar, titles, PLAY, START, panels unchanged):
- **the girl**, built here in code because no model existed: a jointed cartoon character (hips, spine, chest, neck, head;
  shoulders, upper arms, elbows, forearms, hands), curly hair, headband and bow; a face with eyes that blink (eyelids), brows
  that rise, a mouth that smiles, laughs and opens in surprise, cheeks. Her hands follow the basket's handles by a two-bone IK.
  While waiting (behind Home and Laundry Toss) she breathes, sways, blinks and smiles. At START she lifts and tips the basket,
  leans into the toss, then laughs and waves with her right hand.
- **the laundry**: two striped socks and three towels as separate objects, each on its own arc into the washer's door.
- **the pink character**: the game's own model (`models/mascot.glb`); its texture has no face, so 3D eyes (blinking) and a
  mouth (smile; an O in surprise) are added for the opening. He sits on the laundry, hops in surprise as the basket swings,
  flies on a curved path with the laundry, reaches the door's rim, is pulled in by the glow tumbling, and lands on the blue
  water inside, seen from behind as in the game, with a splash and ripples.
- **the washer**: a hollow body with a round opening, gold rim, silver lip and bezel, the open glass door, the crown emblem;
  inside, a glowing swirling blue tunnel with water that the camera flies into.
- **one continuous camera move** (no cut): the room, then following him, a dolly to the door, through it into the tunnel, ending
  at the game's Tap to Start framing at his scale; the view then cross-fades into the live game's Tap to Start (0.8 s).

## Stage C: real travel (`WebDemo/src/level1.js`, `track.js` COURSE, gated hooks in `game.js`)

- **No loop.** After the Screen 4 drum the run goes on, about 300 m more, in the board's order, each part real geometry fixed in
  the world along the path (its own turns and a drop, `track.js` `opts.course`):
  the washer drum tunnel (perforated lavender / silver metal over the top, cobalt water swirling up the walls in twisting
  ribbons, glowing rings every 2.6 m and gold-and-silver hoops with lights every 8 m, all streaming past) with spinning
  brushes ("Watch out! Spinning brushes!"), coin lines, socks and a gem ("Collect coins, gems & rescue socks!"), soap bars to
  jump ("Jump!"), a drop down to the lower path ("Drop down to the lower path!"), grime-ball enemies rolling at her ("Avoid
  enemies!"), the golden gate out into the Bubble Kingdom (sky, the game's castle model, floating islands with towers and
  waterfalls, the slide with rails), the finish arch, then **Level Complete** (stars, socks x/5, coins, the gem; Play again).
- **Progress is in the game state and on screen**: `window.__bwLevel1` (u, section, progress 0-1, complete), a progress bar
  under the sock card with the sections ticked, and a banner as each section begins.
- **Gameplay is the game's own**: course coins, gems and socks go in its lists (`collect()`, `resetRun()`, the sock mission);
  a brush, soap bar or grime ball knocks her with `bumpMascot()` (a heart, slowed, middle lane); Bubble Blast, Turbo Spin,
  pause, hearts, the hero tunnel's brushes unchanged. A brush, bar or ball she has passed folds away before it reaches the
  camera. Private random numbers only; the course's gems join the game's list only after the Screen 4 drum (the game's loop
  draws a random number per gem), so the seeded sequence is untouched until then.
- **Swimming** (drawn on her model only; her lane, height and jumps unchanged): a stroke rhythm (1.55 strokes/s) with
  alternating roll and a forward surge, paddle splashes at the side that strokes, a stronger lean and turn into each swipe,
  over the existing bob, pitch, lean and squash; on the course water her V-wake behind her and rings round her body.

## Not done / limits (honest)

- The girl is a code-built cartoon character, not a sculpted, rigged production model: it moves and emotes as asked, but it is
  simpler than the painted artwork. A Tripo model (image-to-3D, then rigging) is the way to a closer likeness; it costs credits
  and needs the user's yes per job, and the Tripo key saved on 8 November is refused by Tripo (401 "Invalid API key").
- The board's "Jump to side paths" is a jump section (soap bars with coin arcs over them), not a branching side path; the
  "Drop down" is a real drop of the path. Level 2 is not built ("Play again" restarts Level 1).
- The first 4.7 s (the accepted Screen 4 drum) keep their accepted look, which includes the camera-fixed parts listed above;
  the strongest travel cues (hoops, rings, metal, wall water fixed to the world) start where the course begins.

## Proofs (final build `992bd377`, 8 November)

- **Identity** (`proofs/identity.txt`, `scripts/identity.sh`): against the bundle before this work (`2e9ce682`), 0 pixels differ for
  the accepted `?s3=intunnel` (Tap to Start, +1 s, +3 s), the normal game (Tap to Start, +1 s), the candidate
  `?s3=intunnel,structmatch` (Tap to Start, +1 s, +3 s), `noswim2` and `blend`; with `level1`, Tap to Start is 0 px against the
  candidate; at +3 s 317,427 px differ (the drum's rings stream at her speed, her swim strokes): intended.
- **Gameplay** (`scripts/gameplay.sh`): the seeded swipe-and-jump motion trace, 152 frames x 17 gameplay fields: 0 differences;
  `s3_func` and `r2_func` differ only where the run no longer loops (the candidate is back at 7.3 m with 0 socks after the drum;
  level1 goes on to 41 m with its sock; the 4th and 5th knocks of `r2_func` happen on the course's brushes, hearts and the restart
  behave the same). Cost at Tap to Start: 322 draw calls with level1 against 211 (the course ahead; to be culled).
- **The continuous phone recording** (`videos/full_sequence_home_toss_washer_level1_pixel7.mp4`, 48.5 s, 412 x 916, 20 frames
  per game second, seed 7, every frame the real game; swipes labelled by the recorder): Home, Laundry Toss, START, the toss, the
  character carried into the washer, the entry and landing, Tap to Start, the run through every section with swipes, Level
  Complete (`videos/record_log.json`: 6 socks, 89 coins, the gem, 5 hearts, 0 knocks, no console errors). Sheet:
  `videos/full_sequence_contact_sheet.jpg`.
- **Screens** (`screens/`): the approved Screens 1-2 against the new live 3D versions; the toss, entry and landing;
  `seed7_TapToStart_ORIGINAL_BEFORE_AFTER.jpg` and `seed7_3.0s_ORIGINAL_BEFORE_AFTER.jpg` against the ORIGINAL Screen 4.
