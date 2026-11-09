# Six-scene implementation status (8 November 2026 ~23:55 UTC, session bb87ba9f). NOT APPROVED: the user reviews the actual gameplay

**NEWEST (9 November 2026 ~02:45 UTC, session 6ddc157f, new account): THE ACTIVE GAME CHANGED.** The user selected the six-scene game with their
new Tripo models ("tripo3 final", the "second row") as THE game: a plain launch of `WebDemo/index.html` (no `?s3=`) now runs
`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3` (bundle `45f21c4a`, stamped `game.bundle.js?v=45f21c4a`). New models in it:
girl_v2_rigged, washer_tripo_hj748, door_tripo_oit748_gold, gear_v2_tripo, housing_tripo_821 (`WebDemo/src/opening_tripo3.js`). Opt-in for the
user's review: `sock3`, `coin3`, `enemy3`, `basket3`, `doorpink`. Evidence: `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/` (plain-launch
frames vs the user's second-row pack, the continuous video) and `06_tripo_new_models_6ddc157f/` (all 12 models). Rollback branch:
`claude/bubble-wash-rollback-before-tripo3-default` (`33bf67ba`). Environment: `ENVIRONMENT_VERIFICATION_2026-11-09_session_6ddc157f.md`; every session
runs `Tools/session_preflight.sh` (SessionStart hook) and follows CLAUDE.md "READ FIRST". Do not redesign this version; do not revert to the first row.


**LATEST (9 November ~00:10 UTC, session bb87ba9f, final emergency backup):** six-scene build at pass 3 (bundle `7d39b9e6`, opt-in `six`);
all six scenes exist as real 3D (Scenes 1-5 in `WebDemo/src/opening3d.js` `SIX`, Scene 6 = the existing Level 1). Evidence: sheet
`Previews/WebDemo/six_scenes/04_final_8823adc8/SIX_SCENES_REFERENCE_vs_GAME.png`; recording (PARTIAL, 23 s, pass 2 bundle `8823adc8`: Laundry Toss
-> START -> the whole six-scene opening -> into the live game) `Previews/WebDemo/six_scenes/05_recording_8823adc8/six_scenes_opening_into_level1_PARTIAL.mp4`;
identity proof 0 px at all 5 checkpoints vs v5 (`Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/proofs/identity_7d39b9e6.txt`).
**EXACT NEXT TASK:** (1) capture the pass 3 Scene 5 stills and rebuild the reference-vs-game sheet (`o3d_shots.cjs`, SEQ 6.6 / 7.4); (2) a full continuous
recording on the current bundle: `S3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six ROUTE=upper FPS=12 RUN=30 O_END=8.85 O_HAND=7.9 node
WebDemo/tools/level1/record_flow.cjs WebDemo <frames>` (JPEG frames; then `ffmpeg -framerate 12 -pattern_type glob -i '*.jpg' ...`); (3) gameplay route
test `S3=intunnel,structmatch,level1,six ROUTE=upper node WebDemo/tools/level1/flow_routes.cjs WebDemo <out>`; (4) the remaining differences in
`SIX_SCENE_IMPLEMENTATION_STATUS.md` (Scene 2: walk her to the washer; Scene 1: her pink hoodie; Scene 5: wider shot; Scene 6: the first Level 1 stretch
after the hand-over toward panel 6). Nothing is approved; the user reviews.

References (the user's, unchanged): `Design/ReferencePacks/Six_Scene_New_Direction/` (`00_FULL_SIX_SCENE_STORYBOARD_from_user_message.jpg`,
`01_FRESH_pack/` = board + six crops + mandate, `02_STRICT_master_kit/` = the strict master prompt + asset / agent index).
Story rule: the girl NEVER notices the pink character; he is carried into the washer by accident inside the blue towel bundle.
Switch: `six` (opt-in; with `home` + `level1`). Full app: `index.html?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six`.
Code: `WebDemo/src/opening3d.js` (search `SIX`: `SIX_ON`, the `six` props block, `poseSix`, `sixC` camera keys, `SIX_DRUM_END` drum shader).
Without `six` the opening's code path is unchanged (`pose()` returns into `poseSix` only when `six` is on).
First real captures (bundle 76581f46): `Previews/WebDemo/six_scenes/01_first_build_76581f46/` (`contact_sheet.png`).

## Pass 2 (bundle 8823adc8, ~00:30 UTC): the user's final decision: match the NEWER six-scene artwork, fix the balloon bundle and the 6.3 s towel
Sheet (reference | real game capture): `Previews/WebDemo/six_scenes/04_final_8823adc8/SIX_SCENES_REFERENCE_vs_GAME.png`; frames in the same folder;
pass 1 frames: `01_first_build_76581f46/`, `02_bundle_fix_2fc5d8e8/`, `03_cloth_drum_1113d38e/`.

| Scene | Status | What exists now (real 3D) | Differences still visible vs the reference | Next step |
|---|---|---|---|---|
| 1 Hidden in the basket | BUILT (pass 2) | closer camera; the rigged Tripo girl breathing / blinking, head turned to the washer (never to him); the Tripo purple basket on a pink stand; the pink character under a CLOTH towel (a 28 x 28 draped mesh with hanging corners and folds), peeking; the pink-and-gold washer (gold rim, paw medallion, three lights + dial, glass door) | the reference is a close landscape shot; her outfit is the Tripo girl's own (lavender top, not the pink hoodie and backpack); the game's Laundry Toss UI covers part of the frame | a pink hoodie material swap on the girl (or a Tripo job); her hands patting the towel |
| 2 Loads the laundry | BUILT (pass 2) | IK hands grip the bundle; the cloth wraps him into a soft bundle with corner tufts, fluttering; lift, turn to the washer | in the reference she is already at the open washer with the towel hanging from her hands; ours shows him wrapped (face visible to the player, never to her) | move her to the washer for the load (a walk or a second stand position) |
| 3 Accidental tumble | BUILT, close to the reference | toss arc with the socks and towels; he tumbles in, the towel stays on his head like a hat, surprised face; perforated silver-lavender drum | the reference's yellow towel beside him; the door open on the left | add the yellow towel resting in the drum |
| 4 Door closes, wash begins | BUILT, close to the reference | her push, the door swings shut with a bounce and thunk; she turns away; porthole framed by the pink machine front, medallion and lights; lights come on, water floods in, bubbles; the towel is lifted off by the water and carried away (it no longer blocks the camera) | door hinge on the right (reference: left); the reference's brass pipes on the machine's side | |
| 5 Into the tunnel | BUILT (pass 2) | camera through the glass into the perforated silver-lavender drum tunnel; pink-gold housings with glowing lilac glass, gold railing, cobalt gear, warm lamps, bubbles; he turns to face into it; hand-over (7.9 s) into the live game | far fewer machines than the reference (its walls are lined with housings and a huge gear); the camera sits close behind him | denser props; a wider camera at 6.6 s |
| 6 Playable swimming | EXISTING gameplay, unchanged | Level 1: swimming, swipes, coins, socks, enemies, HUD, powers; the machine chamber (`scene07` + passes 16-18) | the reference's brushes on both sides, star tubs and ring tunnel are not all on screen together; the game's own HUD differs | continuity pass on the first Level 1 stretch after the hand-over |

**Still to deliver to the user:** six authentic screenshots next to the six references (side-by-side sheet), one continuous recording from the basket
through the swimming (the recorder `WebDemo/tools/level1/record_flow.cjs` may assume the old 6.1 s opening: check its timing with `six`), gameplay checks
(`flow_routes.cjs`, controls, coins, enemies, socks), the identity proof that `?s3=intunnel` is unchanged.
Tripo: connected (1,060 credits); model downloads allowed since this session (host `openapi-dl.data.tripo3d.com` added to the environment). No job was
needed or run: every asset used exists. Agents: see `AGENTS_AND_SPECIALISTS_INVENTORY.md` (the art director's older instructions name Classic Screen 4:
give it the six-scene references explicitly).
