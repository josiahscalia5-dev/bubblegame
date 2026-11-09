# Parallel specialist lanes: ownership plan (9 November 2026, session ac4e3449)

## Lane status (9 November 2026 ~14:00 UTC, session d847dce2, new account; refresh with `bash Tools/lanes.sh status`)
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
