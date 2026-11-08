# Six-scene implementation status (8 November 2026 ~23:55 UTC, session bb87ba9f). NOT APPROVED: the user reviews the actual gameplay

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
