# PARALLEL LANES (updated 9 November 2026 ~20:40 UTC, session ddf175f2)
Lane status (all pushed, 0 uncommitted; `bash Tools/lanes.sh status`; recreate worktrees: `bash Tools/lanes.sh create`):
| Lane | Branch | Head | State |
|---|---|---|---|
| arch56 (lighting-visual-matching) | claude/lane-s56-arch-d847dce2 | 818d4014 | Screen 6 pass 2 merged into claude/bubble-wash-transfer-screen6-to82gp; seq7 (washer transition) unjudged |
| brush6 (lighting-visual-matching) | claude/lane-s6-brush-47f75e22 | 08ab9105 | pass 2 merged |
| s56 water (screen4-water-motion-engineer) | claude/lane-s56-tunnel-ac4e3449 | b29d4a10 | water6 + hero6 pass 2 merged; opening water plan in its HANDOFF |
| girl12 (character-animation-specialist) | claude/lane-s12-girl-room-ac4e3449 | 1ffd6b8b | not touched this session; use for task D |
| washer34 (water-vfx-engineer) | claude/lane-s34-washer-ac4e3449 | 4c40aa5d | not touched this session; use for task E |
| ui | claude/lane-ui-hud-ac4e3449 | be6a5681 | not touched this session |
After this session the coordinator (main session) also owns: `src/s56_env6.js`, `s56_tank6.js`, `s56_tripo6.js`, `s56_crown6.js`, `s56_hero7.js` and the
section-0 hooks in `s56_tunnel.js`. A lane starting from an older head must merge `claude/bubble-wash-transfer-screen6-to82gp` first. Specialists get the measured targets in
`WebDemo/tools/env6/TARGETS.md` and the frozen-frame tool `WebDemo/tools/env6/var6.cjs`.

# Parallel specialist lanes: ownership plan (9 November 2026, session ac4e3449)

## Lane status (9 November 2026 ~17:25 UTC, session 3849f5c8, new account: THE USER'S SEQUENCE PRIORITY CORRECTION)
The user's priority is now the PLAYABLE SEQUENCE: girl -> laundry -> accidental fall -> washer -> tunnel -> Screen 6 gameplay
(`Design/ReferencePacks/2026-11-09_Sequence_Priority_Correction_from_user/README.md`).
- Real-game preview and gap list: `Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8/README.md`.
- Every lane was checkpointed (local = GitHub) and then brought up to the integration head `4c40aa5d` before the redirect (normal merges).
- Candidate switch for all new work: `,seq7`. The plain launch is unchanged until the user approves.

| Lane | Specialist | Branch @ start | Task (in this order) |
|---|---|---|---|
| girl12 | character-animation-specialist (new definition; this session: general-purpose with it) | `claude/lane-s12-girl-room-ac4e3449` @ 4c40aa5d | 1. Screen 3: he stays visible from the basket into the washer. 2. No detached eyes in the tumble. 3. Screen 2: her face visible while loading; the blue towel soft in her hands. |
| arch56 | lighting-visual-matching | `claude/lane-s56-arch-d847dce2` @ 6fabf71b | 1. A closed perforated drum back from 4.2 s, so the laundry room is never seen through the drum. 2. The fly-through opens into the glowing tunnel, with no room at 8.5 s. 3. Then the Scene 6 machinery, gear and the red tint at u 206. |
| s56 | screen4-water-motion-engineer | `claude/lane-s56-tunnel-ac4e3449` @ 541a07ea | 1. Screens 3-4 wash water churning round him behind the glass, with foam; he bobs. 2. Waves in the drum fly-through. 3. Then the Screen 6 water (water6 v2). |
| brush6 | lighting-visual-matching | `claude/lane-s6-brush-47f75e22` @ 83916bf6 | The Screen 6 rotating brushes: first real look at u 206, then tune. Gameplay untouched. |
| washer34 | paused | `claude/lane-s34-washer-ac4e3449` @ 4c40aa5d | Its files moved to arch56 (drum, tunnel look) and s56 (water). |
| girl12 -> qa | game-art-director + gameplay-visual-testing | none | After the lanes deliver: approved / before / after for every screen; route test; identity proof. |

## Lane status (9 November 2026 ~15:45 UTC, session 47f75e22, the user's SCENE 6 MANDATE: brushes, cobalt gear, side machinery, water, camera)
Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png`, compared at 864x1536 with
the live game at u 206 (`ZS=tap,206 VW=432 VH=768 DPR=2`). Baseline (bundle 6a78d7ae): `Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/baseline/`.
Every change is behind a switch; the plain launch is unchanged until the user approves. No Tripo credits.
| Lane | Specialist | Task this session |
|---|---|---|
| arch56 | lighting-visual-matching | left / right machinery density (pink-gold housings, glowing violet chambers, control panel with lights, brass pipes, gold railings), the cobalt gear upper right behind the right machinery, ceiling lamp + pipes, camera / composition vs the approved Scene 6 |
| s56 | screen4-water-motion-engineer | the water: saturated cobalt / turquoise dimensional waves, thin white crests, no pale-white patches or white cloud round him |
| brush6 (NEW) | lighting-visual-matching | `WebDemo/src/s56_brush6.js` + `WebDemo/tools/brush6/`, switch `,brush6` (coordinator hook in `s56_tunnel.js` section 0): the large rotating pink / white / blue side brushes |
| qa | gameplay-visual-testing + game-art-director | ranking of the differences; after the merge: routes, identity proof, side by sides |

## Lane status (9 November 2026 ~14:40 UTC, session d847dce2, ACCOUNT-TRANSFER BACKUP; refresh with `bash Tools/lanes.sh status`)
Every specialist was STOPPED for the account switch; each lane's unfinished work was committed and pushed as is (`lanes.sh save`, VERIFIED). No agent
or process transfers to the next account: relaunch each specialist on its lane with the "next step" below (its first task is its live test).
Nothing below is merged into the default game; none of it is approved.

| Lane | Specialist | Branch @ commit | State (as saved) | Exact next step |
|---|---|---|---|---|
| arch56 | lighting-visual-matching | `claude/lane-s56-arch-d847dce2` @ `b8ca82a6` | `s56_arch.js` +361 lines: its own drum/arches/banks with procedural module A (tall pink housing, gold bands/cap, left paw medallion, right lights/stars) and module B (pink base, turquoise porthole, violet glass chamber), gears; returns skip all of sections 1-4; cam = S56 framing (off [0,0.48,-3], look [0,0.64,6]). BUILDS; NOT captured or reviewed yet. The user's models are copied into the lane (`models/s56tm/`) but NOT yet used | (1) capture `S3='intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,arch56' ZS=tap,206 VW=432 VH=768 DPR=2` and compare with the approved Scene 5/6 using `Previews/.../11_scene56_match_d847dce2/scripts/sheets56.py`; (2) place the banks so the near left housing's medallion sits at ~(0.05,0.63) of the frame and the gear at ~(0.85,0.47), d ~0.3 W; keep x in [-1.2,1.2] clear (lanes +/-0.7); (3) use the user's Tripo model 911 (`models/s56tm/t911_lod0/1/2.glb`, paw face toward the channel, add a glowing core in its chamber) as the bank housing, switches `,arch56` (with t911), `,arch56,notm` (procedural), `,arch56,tmmach` (machinery model); (4) draw calls and the 0 px proof without arch56 |
| s56 | screen4-water-motion-engineer | `claude/lane-s56-tunnel-ac4e3449` @ `50f77c6a` | pass 2 WIP (S56.water tunables, shorter WAVES, CHOP) + this session: A/B tools `tools/s56/ab56.cjs`, `ab56.py`, `trace56.cjs`; A/B frames in `Previews/.../11_scene56_match_d847dce2/water56/` (ab_before, ab_after1, tune2-4, before, after); it was mid-way through replacing the water material with a per-pixel version when stopped. BUILDS; NOT reviewed | (1) read its A/B frames and finish the cause of the pale water (the transparent s3Bubbles / s4Bubbles / l1Bubbles layers over the lower screen are the lead; also crest/lace/collar/wake whites, bloom, grade); (2) fix the cause, keep his bob on m.tilt, narrow wake; (3) before/after at tap + 206 vs crop 07; (4) ?s3=intunnel 0 px |
| washer34 | water-vfx-engineer | `claude/lane-s34-washer-ac4e3449` @ `605b8951` | no code change (stopped right after its tool check) | close the drum's far end from 5.8 s to the 8.95 s hand-over (no room visible), glowing like the Scene 5 vanishing point; then Scene 4 blue water behind the glass |
| girl12 | lighting-visual-matching | `claude/lane-s12-girl-room-ac4e3449` @ `8b2fa7e9` | paused (no change since f28099bc) | Scene 1 kneeling 3/4 pose, blue towel draped over him, warm window light; Scene 2 camera shows her face |
| ui | general-purpose | `claude/lane-ui-hud-ac4e3449` @ `be6a5681` | `hud56.js` restyle WIP (+103 lines, f28099bc), paused | review the hud56 restyle; hint card covering the vanishing point |
| qa | gameplay-visual-testing + game-art-director | none | QA ran the route test on the s56 game (s3 `intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56`): upper / ledge / blocked ALL reach Level Complete with 5 socks, swipes 11-16, spins, enemies popped 2-3, blocked moves refused correctly, 0 console errors (`qa/routes/*.json`, `*.jpg`); the art director's inventory was not finished | after each merge: routes, identity proof, sheets56.py sheets, art director ranking |

## Lane status (earlier: 9 November 2026 ~14:00 UTC, session d847dce2, new account)
All worktrees recreated from GitHub (`lanes.sh create`); girl12 / washer34 fast-forwarded and s56 / ui merged with the integration head (normal merges).
NEW lane **arch56** (`claude/lane-s56-arch-d847dce2`, lighting-visual-matching): `WebDemo/src/s56_arch.js` + `WebDemo/tools/arch56/`, switch `,arch56`
(the coordinator's hook in `s56_tunnel.js` section 0 lets it replace sections 1-4 and own the camera). s56 (screen4-water-motion-engineer) now owns only
the water (sections 5-7, heroOffset, WAVES/CHOP, S56.water/hero/splash). Running: arch56, s56 water, washer34 (water-vfx-engineer: drum continuity into
Scene 5, Scene 4 water), QA (gameplay-visual-testing baseline, game-art-director inventory). Paused (4 CPUs, software WebGL; the user's newest
priority is Scenes 5/6): girl12, ui. Merge order: s56, arch56, ui, washer34, girl12. Evidence: `Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/`.

## Lane status (earlier: 9 November 2026 ~13:10 UTC, session f28099bc)
The previous session's five lane agents all died at 12:08 UTC on a usage limit; only s56 had saved code. This session recreated all four worktrees
from GitHub (`bash Tools/lanes.sh create`), fast-forwarded girl12 / washer34 / ui to the integration head (no game source had changed since their
base 6f5d6dfd), merged the integration head into s56 (83c6225a, docs/tools only) and relaunched every specialist on its lane (live test = real task).
Unfinished work is pushed by the autosave every 5 minutes (`lanes.sh save`); nothing below is merged or approved yet.

| Lane | Specialist | Branch @ last pushed commit | Done | Remaining (next step) |
|---|---|---|---|---|
| s56 | screen4-water-motion-engineer | `claude/lane-s56-tunnel-ac4e3449` @ see `lanes.sh status` | pass 2 WIP: `S56.water` tunables, shorter WAVES, `CHOP`/`s56Chop`, metrics `water56.py`/`pipe56.py`; this session: controlled pale-water diagnosis (`_evidence/s56/pass3_diag`) | consume S56.water in the shader with foam brightness < ~0.9 linear (bloom threshold 0.97), crest lines generated from WAVES, chop normals in track frame; then gold railings, brushes, machinery density (art director: Scene 6 cyan 0 % vs 14 %, thin crests 1 % vs 15 %) |
| ui | general-purpose | `claude/lane-ui-hud-ac4e3449` @ see status | hud56.js in-game HUD restyle under `body.s56` (WIP) | logo white bar behind "Kingdom", soap-cloud plate, coin/gem pill overlap (six2_ui.js); hint card covering the vanishing point |
| washer34 | water-vfx-engineer | `claude/lane-s34-washer-ac4e3449` | before frames captured | close the drum back (`SIX2_DRUM_END`, room shows through in Scenes 1-3 and 8.4 s); Scene 4 blue water behind the glass (azure 2.9 % vs 30.3 %), brighter gold rim, lit lights; Scene 3 his face toward the camera |
| girl12 | lighting-visual-matching | `claude/lane-s12-girl-room-ac4e3449` | before frames captured | Scene 1: kneeling 3/4 pose, sneakers visible, remove the foreground towel stack, drape the blue towel over him, warm window light; Scene 2: camera so her face shows, towel not a flat sheet |
| qa | gameplay-visual-testing + game-art-director | none (read-only) | art director ranking `Previews/WebDemo/six_scenes/10_restore_f28099bc/evidence/qa/art_director_ranking.md`; route test running | after each merge: routes, identity proof, six-scene sheet |

Evidence of this session (frames, sheets, reviews): `Previews/WebDemo/six_scenes/10_restore_f28099bc/evidence/`.

Coordinator: the main Claude session on **`claude/bubble-wash-account-transfer-52t7ym`** (the integration branch). Machine-readable registry:
`Tools/lanes.json`. Lane tool: `bash Tools/lanes.sh create | save | status`. Nothing is approved until the user reviews it.

| Lane | Specialist (agent) | Branch | Worktree | Owns (edits ONLY these) |
|---|---|---|---|---|
| `girl12` | 1: girl, laundry room, opening, Scenes 1-2 (`lighting-visual-matching`) | `claude/lane-s12-girl-room-ac4e3449` | `<repo>_lanes/girl12` | `opening_six2_room.js`; in `opening_six2.js` the blocks *the girl's knee timeline*, *basket on the rug*, *the girl*, *the blue towel*, `SIX2.girl`, `SIX2.basket`, camera keys t <= 3.2 |
| `washer34` | 2: washer accident, wash start, Scenes 3-4 (`water-vfx-engineer`) | `claude/lane-s34-washer-ac4e3449` | `<repo>_lanes/washer34` | `opening_six2_water.js`; `opening_six2_tunnel.js` (washer look); `SIX2_DRUM_END` in `opening3d.js`; in `opening_six2.js` the blocks *the door*, *the hero*, *the yellow towel*, *the washer*, `SIX2.door`, `SIX2.water`, camera keys 3.25 <= t <= 7.4 |
| `s56` | 3: tunnel, gameplay world, Scenes 5-6 (`screen4-water-motion-engineer`) | `claude/lane-s56-tunnel-ac4e3449` | `<repo>_lanes/s56` | `s56_tunnel.js`, `WebDemo/tools/s56/` |
| `ui` | 4: UI, HUD, interface, all scenes (`general-purpose`) | `claude/lane-ui-hud-ac4e3449` | `<repo>_lanes/ui` | `six2_ui.js`, `hud56.js` (CSS scoped to `body.s56`) |
| `qa` | 5: QA, matching, capture (`gameplay-visual-testing`, `game-art-director`, skill `bubble-wash-screen-matcher`) | none (read-only) | none | nothing: captures, side-by-sides, checklists, route tests |
| coordinator | the main session | the integration branch | `/workspace/bubblegame` | everything else: `game.js`, `page.html`, `screens12.js`, `opening3d.js` (except `SIX2_DRUM_END`), `level1*.js`, `tripo_l1.js`, `play_tripo3.js`, `build.mjs`, `Tools/`, the docs; the hand-over timing (`SIX2.handOver`, camera keys t > 7.4) |

**Rules.**
- One owner per file or block.
- A lane that needs a change outside its files asks the coordinator.
- Merges go in the order `s56`, `ui`, `washer34`, `girl12`; each is a normal `git merge` of the lane branch, never forced, then rebuilt and visually checked.
- Browser runs always go through `flock /tmp/bw_browser.lock`: 4 CPUs and software WebGL mean one capture at a time.
- No Tripo jobs and no new models.

**Backup of parallel work.** Every 5 minutes the autosave runs `Tools/lanes.sh save`, which commits each lane's unfinished code as a checkpoint and pushes its branch (never force).

**Recovery on another account.**
1. `bash Tools/lanes.sh create` re-creates each worktree from its GitHub branch.
2. `bash Tools/lanes.sh status` shows the last checkpoint.
3. The lane's task and owned files are in `Tools/lanes.json`.

Scene clock for captures (`WebDemo/tools/six2/shots6.cjs` TIMES are REAL seconds; real 2.65-4.45 s plays story 2.65-3.95 s, after that real = story + 0.5):

| Scene | Story s | Real s |
|---|---|---|
| 1 | waiting | -1 |
| 2 | 0-3.25 | 0.9-3.4 |
| 3 | 3.25-5.3 | 3.5-5.8 |
| 4 | 5.3-7.3 | 5.8-7.8 |
| 5 | 7.3- | 7.8- |

The game takes over at real 8.95 (with `s56`). The live game's Scenes 5-6: `WebDemo/tools/s56/shots56.cjs` (`ZS=tap,46,206`).
