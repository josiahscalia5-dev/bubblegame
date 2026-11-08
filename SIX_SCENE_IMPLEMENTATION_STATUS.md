# Six-scene implementation status (8 November 2026 ~23:55 UTC, session bb87ba9f). NOT APPROVED: the user reviews the actual gameplay

References (the user's, unchanged): `Design/ReferencePacks/Six_Scene_New_Direction/` (`00_FULL_SIX_SCENE_STORYBOARD_from_user_message.jpg`,
`01_FRESH_pack/` = board + six crops + mandate, `02_STRICT_master_kit/` = the strict master prompt + asset / agent index).
Story rule: the girl NEVER notices the pink character; he is carried into the washer by accident inside the blue towel bundle.
Switch: `six` (opt-in; with `home` + `level1`). Full app: `index.html?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six`.
Code: `WebDemo/src/opening3d.js` (search `SIX`: `SIX_ON`, the `six` props block, `poseSix`, `sixC` camera keys, `SIX_DRUM_END` drum shader).
Without `six` the opening's code path is unchanged (`pose()` returns into `poseSix` only when `six` is on).
First real captures (bundle 76581f46): `Previews/WebDemo/six_scenes/01_first_build_76581f46/` (`contact_sheet.png`).

| Scene | Status | What exists (real 3D) | Missing / known issues | Next step |
|---|---|---|---|---|
| 1 Hidden in the basket | BUILT, first pass | laundry room, rigged Tripo girl (girl2) breathing / blinking, head turned to the washer (never to him); the Tripo purple basket (tripo2) on a pink stand; the pink character (mascot.glb + code face) under a draped blue terry towel, peeking; the washer restyled pink-and-gold (pink body, gold rims, gold paw medallion on top, three control lights + dial, glass door) | the girl's eye-line is set by head yaw only (her eyes are painted); towel drape is a folded cap (no cloth sim) | compare with ref 01; a slightly smaller towel; her hands patting the laundry |
| 2 Loads the laundry | BUILT, first pass | IK hands grip the bundle; the towel closes round him (lower cap); lift to her chest, chest + head turn to the washer | the bundle reads as a large smooth blue ball ("balloon"): make it smaller and lumpy / folded, with towel corners | reshape the bundle (more folds, flaps, ~0.75 size) |
| 3 Accidental tumble | BUILT, first pass | toss arc into the open drum with the other laundry (socks, towels); he slips out of the towel tumbling, grows to his game size, lands surprised (O mouth) | towel drops on the drum floor and later blocks the push-in camera (seq 6.3) | hide / move the dropped towel before 5.9 s |
| 4 Door closes, wash begins | BUILT, first pass | her push gesture, the door swings shut with a bounce + thunk; she turns away; porthole close-up: lights come on, the water floods in round him, splash rings, bubbles; he goes from surprised to delighted | the door hinge is on the RIGHT (the ref shows left: a left hinge would sweep across the girl from this camera); she does not walk away | optional: a left-hinged door with a different camera |
| 5 Into the tunnel | BUILT, first pass | the camera pushes through the glass into the drum; the drum tunnel restyled to the ref's perforated silver-lavender metal with pink-gold ring bands, blue water, bright far heart; he turns to face into it and the water carries him; hand-over (7.9 s) cross-fades into the live game's Tap to Start inside the tunnel | the ref's machinery inside the drum (pink-gold housings, cobalt gear, gold railings) is not yet in the opening's drum | add 3D props (gear, railings, housings) to the opening's drum |
| 6 Playable swimming | EXISTING gameplay (unchanged) | Level 1 (`level1`, `flow`): swimming on blue water, swipes, coins, socks, enemies (Tripo grime ball with `tripo1`), brushes, HUD, Bubble Blast / Turbo Spin; the machine chamber (`scene07` + pass 16-18 machinery) | not yet compared with ref 06; the transition camera / environment continuity not yet checked in a continuous recording | continuous recording; compare with ref 06 |

**Still to deliver to the user:** six authentic screenshots next to the six references (side-by-side sheet), one continuous recording from the basket
through the swimming (the recorder `WebDemo/tools/level1/record_flow.cjs` may assume the old 6.1 s opening: check its timing with `six`), gameplay checks
(`flow_routes.cjs`, controls, coins, enemies, socks), the identity proof that `?s3=intunnel` is unchanged.
Tripo: connected (1,060 credits); model downloads allowed since this session (host `openapi-dl.data.tripo3d.com` added to the environment). No job was
needed or run: every asset used exists. Agents: see `AGENTS_AND_SPECIALISTS_INVENTORY.md` (the art director's older instructions name Classic Screen 4:
give it the six-scene references explicitly).
