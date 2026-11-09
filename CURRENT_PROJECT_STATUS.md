# CURRENT PROJECT STATUS (updated 9 November 2026 ~20:40 UTC, session ddf175f2). NOTHING below is approved until the user reviews it.

## The user's current priorities (9 November 2026)
A. Finish Screen 6 visual matching against the ORIGINAL approved artwork (`06_Swim_Collect_Avoid_Enemies.png`).
B. The pink furry character: shape, fur, colour, swimming motion, natural interaction with the blue water.
C. Replace unnatural JUMPING in normal gameplay with smooth SWIMMING controls (swipe left / right = swim to that side; swipe up = swim forward with
   acceleration; gentle bob, tilt, flowing fur; wake and small splashes; always connected to the water).
D. The opening girl-and-laundry scene closer to the approved opening (references 01-04); the girl must NEVER notice the hidden pink character.
E. An exciting washing-machine entrance: he tumbles in with the clothes, a magical spin in the drum, the drum becomes the tunnel, the camera follows him
   into Screen 6 gameplay without a teleport, pop or unrelated fade.

## Screen 6 switches (all reversible; the candidate is `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6,hero7`)
| Switch | What | State |
|---|---|---|
| (lanes) arch56, brush6, water6, coin6, hero6 | the three specialist lanes' scenery, brushes, water; coins drawn smaller; hero dome | merged, tested in the candidate |
| env6 | hero grade inside the s56 tunnel + bloom only on HDR lights (removed the peach haze; arch56's ungrade bug measured and capped) | tested |
| tank6 | the glowing glass tank as a Blender-modelled asset (glow_tank.glb) with glass / glowing-core / halo materials in every tank slot | tested |
| fin6 | finishing pass: lavender control-box station on the left bank, white brush tier, final grade, lavender pedestals, hotter lamps, icy far haze, bigger wall holes | tested |
| hero7 | the approved pink fur character: real-time shell fur dome + 2 nubs (s56_hero7.js), water contact fitted, broken white highlights | tested (route, motion, perf) |
| tripo6 | the user's 3 new Tripo models (brush, star drum; tank rejected) | opt-in; NOT better than the procedural ones (art director) |
| tanklib | Sketchfab "Glass Enclosure" (CC BY 4.0) as the tank | opt-in experiment; comparable, not better |
| crown6 | a splash crown round him | opt-in only; REJECTED (read as a white ring / artefacts) |

Measured (u 206, 864x1536): the character's silhouette IoU with the approved one 0.722 (old body) -> 0.855 (hero7); its colour bands within a few
units of the approved; its cost 1.23 M -> 186 k triangles. Gameplay: the Level 1 route (`WebDemo/tools/level1/flow_routes.cjs`, ROUTE=upper) on the
candidate = the baseline (Level Complete, 5 socks, 125 coins, 2 gems, 3 stars, 0 console errors). The plain launch's 3D canvas and Classic Screen 4
(`?s3=intunnel`) are 0 px changed. Tripo: 360 credits spent with approval (balance 700); no other paid job.

## Remaining Screen 6 differences (the art director's last ranking + measurements)
1. The tunnel's glowing far end (the tunnel curves at u 206; the approved straight vanishing glow cannot show there).
2. The water: lighter / more cyan than the approved royal blue; few white caps (near-white 1 % vs 15 %).
3. The right bank: the gear hidden behind the gameplay coin arc at u 206; the star cabinet's stars hidden.
4. The splash at his base: broken white lines (5 %) vs the approved tall curling crests (11 %). The fur a little darker / softer than approved.

## Next tasks, in order (C first; nothing of C, D, E is implemented yet)
C. SWIMMING CONTROLS (gameplay; game.js `changeLane`, `jump`, `level1_flow.js`, `s56_tunnel.js heroOffset`). Facts found this session:
   - `swipe up` = `jump()` (game.js:961). Jump is a GAMEPLAY dependency: the raised side path needs a jump or the bounce pad
     (`level1_flow.js:224-249`, "Jump first! Use the bounce pad"); enemies and soap bars are avoided while airborne (`level1.js:907, 938`).
   - Plan: behind a switch (e.g. `swim7`), make `up` a forward swim burst (speed + surge, drawn as a dive-and-surface stroke, not a hop), keep a SHORT
     surface leap only where the course needs it (bounce pad auto-launch onto the side path; a "dive under" for enemies/bars instead of a jump:
     same airborne flag for collisions, drawn below / through the surface), smooth lateral swimming for lane changes (ease, roll, wake), the bob /
     tilt already in hero7. Then rerun the Level 1 routes (upper, ledge, blocked) and the motion sheet (`WebDemo/tools/hero7/motion.json`).
D. OPENING (Screens 1-4): code `WebDemo/src/opening_six2*.js` (switch six2, in the plain launch), `opening_tripo3.js` (models), the rigged girl
   `WebDemo/models/opening/girl_v2_rigged.glb`, washer `washer_tripo_hj748.glb`, basket `basket_v2_tripo.glb`; agent `character-animation-specialist`
   (lane girl12, branch claude/lane-s12-girl-room-ac4e3449). First: capture the opening at each approved scene's moment, compare with 01-04, check
   the girl's head / gaze keys so she never looks at him.
E. WASHER ENTRANCE: the arch56 lane's `seq7` (closed perforated drum back, iris and dissolve into the tunnel, `opening_six2_tunnel.js`, NOT yet judged)
   and the s56 lane's opening water plan (its HANDOFF) are the starting points; the opening hands over at real 8.95 s into the s56 tunnel.

# Bubble Wash Kingdom: current project status (8 November 2026 ~23:55 UTC, session bb87ba9f)

## NEWEST: 9 November 2026 ~14:40 UTC, session d847dce2, ACCOUNT-TRANSFER BACKUP. NOTHING here is approved by the user.
- **In the DEFAULT game (the plain launch, `WebDemo/index.html` with no `?s3=`):** `intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56`,
  bundle `6a78d7ae` (= the f28099bc look; this session added only the arch56 hook, proven 0 px). None of this session's Scene 5/6 visual work is in it yet.
- **Behind switches / on lane branches (NOT in the default game, NOT reviewed):**
  - `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,arch56` on lane `claude/lane-s56-arch-d847dce2` (`b8ca82a6`): the new
    architecture module (`s56_arch.js`, procedural pink housings / glass chambers / gears), builds, not captured yet.
  - lane `claude/lane-s56-tunnel-ac4e3449` (`50f77c6a`): the water A/B tools and an unfinished per-pixel water material (plain launch URL on that lane).
  - the user's Tripo models (`WebDemo/models/s56tm/`): evaluated + optimized; model 911 recommended as the bank housing (MODIFY: add a glowing chamber
    core), the machinery model at most a variant; neither is in the game yet. `MODEL_INVENTORY_2026-11-09_session_d847dce2.md`.
- **Measured this session:** the machinery is out of the portrait frame (coverage numbers below); LPIPS approved Scene 5 vs game Tap to Start = 0.609
  (alexnet, 432x768; lower = closer); gameplay routes upper / ledge / blocked all reach Level Complete with 5 socks, 0 console errors.
- **Evidence:** `Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/` (baseline/ frames + sheet, tmach/ model renders, water56/ A/B, qa/routes/).
  Comparison sheets: `python3 Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/scripts/sheets56.py <out> <ref5> <ref6> label=<tap.png>,<206.png>`.
- **Next:** PARALLEL_LANES.md "Lane status" (arch56 first, then s56 water); merge only reviewed, tested improvements; then the 864x1536 sheets with the
  ceiling / far-left / far-right / water / character crops, the continuous recording (washer -> Scene 6) and the route test.

## 9 November 2026 ~14:00 UTC, session d847dce2 (new account). NOTHING here is approved by the user.
- **Branch:** the user's primary branch `claude/bubble-wash-restore-transfer-kc4ecl` (fast-forwarded at every verified save); environment record
  `ENVIRONMENT_VERIFICATION_2026-11-09_session_d847dce2.md`.
- **The user's task (9 November ~13:35 UTC):** Scene 5 / 6 visual accuracy in the REAL game against the reference pack
  `Design/ReferencePacks/2026-11-09_Scenes5_6_Approved_Visual_Reference_Pack_from_user/` (02 = Scene 5, 03 = Scene 6; pixel-equivalent to the six-scene refs 05/06).
  Order: machinery / gear / violet vessels / lamp + pipes / tunnel geometry -> water + mascot -> PBR, lighting, rails, arches, depth -> Scene 6 props -> small details.
- **Root cause found (ID-buffer coverage at Tap to Start, `11_scene56_match_d847dce2/`):** the s56 machinery exists but is out of frame (banks at
  x 1.5-2.4 m, housings ~2.0 m; the portrait frame is only ~+/-1.1 m wide 3 m ahead): banks + housings cover ~3.7 % of the frame; water 31 %, shell 17 %,
  arches 8.5 %, the s4Brush lane brushes 16 % (top corners), coins ~6.5 %. Transparent bubble layers (s3Bubbles) cover much of the lower screen (pale-water lead).
- **Coordinator hook:** `s56_tunnel.js` section 0 calls `s56_arch.js` under `?s3=...,arch56` (may skip sections 1-4, own the camera); proven 0 px without it.
- **Running specialists:** arch56 (lighting-visual-matching), s56 water (screen4-water-motion-engineer), washer34 continuity (water-vfx-engineer),
  art director inventory, QA baseline. Paused: girl12, ui.
- **Next:** review each lane's evidence, merge s56 then arch56 into the integration branch, put `arch56` into the plain launch only after a visual
  check, then Scene 6 props (brushes, enemies, coins), the continuous recording (washer -> Scene 6) and the route test.

## 9 November 2026 ~13:10 UTC, session f28099bc. Visual status of the ACTIVE game. NOTHING here is approved by the user.
- **Accepted by the user:** only the Classic Screen 4 `?s3=intunnel` (must stay pixel-identical).
- **Latest running build (the plain launch):** `intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56`, bundle `c0361e72`
  (reproducible from source). The six-scene opening (Scenes 1-5, `opening_six2*.js`) hands over inside the drum at real 8.95 s to the live game in
  the s56 lavender tunnel (Scenes 5-6, `s56_tunnel.js`), Level 1 gameplay unchanged. Working code: the m.tilt pickup fix; water kept under the
  Neutral tone-mapping knee.
- **Baseline frames (864x1536) and the art director's ranking:** `Previews/WebDemo/six_scenes/10_restore_f28099bc/evidence/baseline/` and
  `.../evidence/qa/art_director_ranking.md`. Outstanding differences (largest first):
  - Scene 1: she stands instead of kneeling; a foreground towel stack hides her legs; the blue towel is a rigid dome; flat pale room light; the
    washer shows the room through its drum.
  - Scene 2: the open washer has no drum (room visible); her face hidden (camera behind her); the towel hangs as a flat sheet.
  - Scene 3: he faces away (no "Oops" face); the drum is open at the back; camera too close; flat water band.
  - Scene 4: no blue water behind the glass (azure-cobalt 2.9 % vs 30.3 %); his face too big; the rim dull bronze; lights unlit.
  - Scene 5 (opening, compare at ~8.9 s, the 8.4 s frame is mid-turn): the drum's open end shows the room before the hand-over.
  - Scenes 5-6 (live game): pale white cloud patches on the water and a broad foam film round him (cyan 0 % vs 14 %, thin crests 1 % vs 15 %);
    missing side machinery / gear on the right / lamp arches; orange railings instead of gold; oversized coins; cylindrical side brushes missing;
    he rides high; the hint card covers the vanishing point.
- **In progress (unreviewed, on lane branches, see PARALLEL_LANES.md "Lane status"):** s56 water (diagnosis + S56.water), ui HUD restyle,
  washer34 Scenes 3-4, girl12 Scenes 1-2.
- **Next:** review and merge the lanes (s56, ui, washer34, girl12), rebuild, the six-scene sheet at 864x1536, the continuous recording
  (`WebDemo/tools/level1/record_flow.cjs`, `O_HAND=8.95 O_END=9.75`), the route test and the identity proof.


**NEWEST (9 November 2026 ~02:45 UTC, session 6ddc157f, new account): THE ACTIVE GAME CHANGED.** The user selected the six-scene game with their
new Tripo models ("tripo3 final", the "second row") as THE game: a plain launch of `WebDemo/index.html` (no `?s3=`) now runs
`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3` (bundle `45f21c4a`, stamped `game.bundle.js?v=45f21c4a`). New models in it:
girl_v2_rigged, washer_tripo_hj748, door_tripo_oit748_gold, gear_v2_tripo, housing_tripo_821 (`WebDemo/src/opening_tripo3.js`). Opt-in for the
user's review: `sock3`, `coin3`, `enemy3`, `basket3`, `doorpink`. Evidence: `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/` (plain-launch
frames vs the user's second-row pack, the continuous video) and `06_tripo_new_models_6ddc157f/` (all 12 models). Rollback branch:
`claude/bubble-wash-rollback-before-tripo3-default` (`33bf67ba`). Environment: `ENVIRONMENT_VERIFICATION_2026-11-09_session_6ddc157f.md`; every session
runs `Tools/session_preflight.sh` (SessionStart hook) and follows CLAUDE.md "READ FIRST". Do not redesign this version; do not revert to the first row.


The game: plain JavaScript on three.js r170 in `WebDemo/` (esbuild bundle `WebDemo/game.bundle.js`, committed with its sources). Every visual pass is an
opt-in `?s3=<switch>`; nothing unapproved is in the default game. (`Assets/`, `Packages/`, `ProjectSettings/` are the older Unity version of the
project, kept for the record; the live game is `WebDemo/`.)

## Accepted by the user
- **Classic Screen 4** `?s3=intunnel` (with swim2): the start inside the blue tunnel. Must stay pixel-identical; every pass proves 0 px changed
  (`Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/proofs/`).

## Candidates (NOT approved, waiting for the user)
| Switch | What | Evidence |
|---|---|---|
| `six` (NEW, current direction) | the six-scene storyboard as the 3D opening into Level 1 | `SIX_SCENE_IMPLEMENTATION_STATUS.md`, `Previews/WebDemo/six_scenes/` |
| `home,level1` | Home + Laundry Toss as a real-time 3D opening (`opening3d.js`, rigged Tripo girl `girl2`), Level 1 with `wet`, `port`, `flow` (raised side path, lower path, grime balls, 5 socks, Level Complete) | `68_level1/`, `70_level1_wet/`, `71_level1_flow/` |
| `tripo1`, `tripo2` | the Tripo grime-ball enemy; the user's Tripo basket and towels in the opening | `72_...`, `73_...` |
| `scene07` | the "Avoid Enemies!" machine chamber: pass 16 v5, pass 17 (receding rows, machine far wall, jewel tones), pass 18 (six-zone 3D construction: drum body, cobalt gear assembly, dense interior, rail catwalk, right cabinet, deco). `,nobuild18` = 17c, `,norecon17` = v5 | `77_scene07_pass15_upper/`, `78_scene07_pass17/README.md` |
| `match6`, `roof2`, `finale2`, `water2`-`water8` | older candidates | `CLAUDE.md` |

Superseded for THIS sequence by the six-scene direction: matching the old "Avoid Enemies!" master and the Classic Screen 4 tunnel art (kept as history).

## Branches
- Working: `claude/bubble-wash-account-transfer-52t7ym` (newest). Rollback checkpoint: `claude/bubble-wash-account-switch-e1nndb` at `0aa21621`.
- `claude/bubble-wash-transfer-tcgbof`: an older line from 2 November history (no shared base with the working branch); not used.
- Default branch `claude/new-session-oth0dd`: outdated, never use.

## Save system
`Tools/autosave.sh` every 5 minutes (started by the SessionStart hook `.claude/hooks/session-start.sh`), `Tools/save_now.sh "<msg>"` for verified saves
(`Push: VERIFIED` from `git ls-remote`). Session registry: `Tools/autosave_sessions.json`.
