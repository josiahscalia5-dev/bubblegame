# Parallel specialist lanes: ownership plan (9 November 2026, session ac4e3449)

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
