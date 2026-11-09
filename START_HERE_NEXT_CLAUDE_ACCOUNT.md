# START HERE: Bubble Wash Kingdom on any new Claude account or session (updated 9 November 2026, session ac4e3449)

This is the EXISTING game (three.js r170, `WebDemo/`). Do not restart, redesign or rebuild it. Nothing in this repository is a secret; never commit keys.

## 0. The one message to send a new Claude account (copy and paste)
> Continue my existing Bubble Wash Kingdom game in josiahscalia5-dev/bubblegame. Work on branch claude/bubble-wash-account-transfer-52t7ym
> (fetch the newest head first; never force-push, never use the default branch). Read START_HERE_NEXT_CLAUDE_ACCOUNT.md and CLAUDE.md, run
> `bash Tools/restore_session.sh`, do the preflight's LIVE CHECKS (one call per MCP server, the agent list), tell me only what needs my action,
> recover the specialist lanes with `bash Tools/lanes.sh create`, then continue the exact next task in CURRENT_PROJECT_STATUS.md.

## 1. Where everything is
| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| Work branch | **`claude/bubble-wash-account-transfer-52t7ym`** (head moves with the 5-minute autosave: `git ls-remote origin claude/bubble-wash-account-transfer-52t7ym`; the last verified backup SHA is in `BACKUP_VERIFICATION.md`) |
| Rollbacks (never overwrite) | `claude/bubble-wash-rollback-before-s56-default` (before the plain launch became six2 + s56), `claude/bubble-wash-rollback-before-s56-lanes`, `claude/bubble-wash-rollback-before-tripo3-default`, `claude/bubble-wash-account-switch-e1nndb` |
| Active game | plain launch = `intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56` (CLAUDE.md READ FIRST item 0) |
| Approved references | `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06_*.png` (the six scenes); `Design/ReferencePacks/2026-11-09_Scene5_Scene6_Full_Kit_from_user/` (Scene 5/6 kit, crops, asset maps; `11_` = the OLD blue tunnel, NOT a target) |
| Models | `WebDemo/models/` (plain files in Git, no LFS pointers): opening `girl_v2_rigged`, `washer_tripo_hj748`, `door_tripo_oit748_gold`, `gear_v2_tripo`, `housing_tripo_821`, `basket_tripo`, `towels_tripo`; game `mascot`, `l1_enemy_v2_tripo`, `coin_v2_tripo(_lo)`, `sock_v2_tripo`, brushes, drum, machinery (`ASSET_AND_MODEL_INVENTORY.md`) |
| Parallel specialist work | `PARALLEL_LANES.md` + `Tools/lanes.json` (owner, files, branch, task); each lane's code is pushed to its own branch by the autosave |
| Status and next task | `CURRENT_PROJECT_STATUS.md`, `SIX_SCENE_IMPLEMENTATION_STATUS.md` |

## 2. Restore (one command, safe to repeat)
`bash Tools/restore_session.sh` (about 1 minute). It checks git, tool versions, the build (`Tools/verify_restore.sh --build`: the committed
bundle must equal a fresh build of its source), agents, the skill, hooks, the autosave, the lanes, and the free Tripo balance. It installs tools
only if `~/.bubblewash-tools` is missing (`Tools/cloud_env_setup.sh`, idempotent). It never spends Tripo credits, buys anything, or prints a key.

**What runs by itself:** the SessionStart hook (`.claude/hooks/session-start.sh`, registered in `.claude/settings.json`) runs
`Tools/session_preflight.sh` (read-only, about 5 s, labelled report) and starts exactly ONE autosave pinned to the checked-out branch. The
autosave commits and pushes every 5 minutes (chat history, agent transcripts, unfinished work, and every lane's code), never force.

**What only Claude can check (the preflight prints it):** call one tool of each MCP server and confirm the Agent tool lists the 8 agents.

**What only YOU can do (cannot travel through Git):**
1. GitHub connected on claude.ai, with the Claude GitHub App on the repository.
2. The `parallax-threejs` plugin enabled (claude.ai, Customize, plugins), then a NEW session. It provides chrome-devtools, playwright,
   threejs-devtools, spector and the agents scenario-author, shader-reviewer and visual-debugger.
3. The environment: limited network, package managers and MCP servers allowed. Hosts: `download.blender.org`, `download.pytorch.org`,
   `openapi-dl.data.tripo3d.com`. Setup script: `if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh; fi`.
4. The Tripo key as a network SECRET for `openapi.tripo3d.ai` (Authorization: Bearer) in the environment settings.
5. If an MCP server shows "failed": type `/mcp` and reconnect it.

## 3. Run, capture, test
- Build: `cd WebDemo && npm ci && node build.mjs`.
- Serve: `python3 -m http.server 3000`, then open `index.html` (the plain launch is the active game).
- Opening frames: `WebDemo/tools/six2/shots6.cjs`. TIMES are real seconds; Scene 1 = -1, Scene 2 = 0.9-3.4, Scene 3 = 3.5-5.8, Scene 4 = 5.8-7.8, Scene 5 = 7.8-, game from 8.95.
- Live-game Scenes 5/6: `WebDemo/tools/s56/shots56.cjs` (`ZS=tap,46,206`; `EVAL`/`TUNE`/`TAG`).
- Gameplay routes: `WebDemo/tools/level1/flow_routes.cjs`. Continuous video: `WebDemo/tools/level1/record_flow.cjs` (`O_HAND=8.95 O_END=9.75` with s56).
- Identity proof: `Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/scripts/identity.sh`.
- Every browser run goes through `flock /tmp/bw_browser.lock`.

---
## History (older sections, kept for the record)

# START HERE: Bubble Wash Kingdom on a new Claude account (written 8 November 2026 ~23:55 UTC, session bb87ba9f)

**NEWEST (9 November 2026 ~02:45 UTC, session 6ddc157f, new account): THE ACTIVE GAME CHANGED.** The user selected the six-scene game with their
new Tripo models ("tripo3 final", the "second row") as THE game: a plain launch of `WebDemo/index.html` (no `?s3=`) now runs
`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3` (bundle `45f21c4a`, stamped `game.bundle.js?v=45f21c4a`). New models in it:
girl_v2_rigged, washer_tripo_hj748, door_tripo_oit748_gold, gear_v2_tripo, housing_tripo_821 (`WebDemo/src/opening_tripo3.js`). Opt-in for the
user's review: `sock3`, `coin3`, `enemy3`, `basket3`, `doorpink`. Evidence: `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/` (plain-launch
frames vs the user's second-row pack, the continuous video) and `06_tripo_new_models_6ddc157f/` (all 12 models). Rollback branch:
`claude/bubble-wash-rollback-before-tripo3-default` (`33bf67ba`). Environment: `ENVIRONMENT_VERIFICATION_2026-11-09_session_6ddc157f.md`; every session
runs `Tools/session_preflight.sh` (SessionStart hook) and follows CLAUDE.md "READ FIRST". Do not redesign this version; do not revert to the first row.
**EXACT NEXT TASK (the user's message of 9 November ~02:50 UTC, not started):** Scene 6 = REUSE the built Pass 18 gameplay (scene07: `tripo_l1.js`,
`scene07_build18.js`, `scene07_recon16/17.js`) and improve its LOOK toward storyboard Scene 6 (~90 %), continuous with the new scenes 1-5; full brief:
`Design/ReferencePacks/2026-11-09_P18_Reuse_Scene6_Pack_from_user/SCENE6_TASK_from_user_message.md`; baseline frames: `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/pass18_baseline/`.


This is the EXISTING game. Do not restart, redesign or rebuild it. Nothing in this repository is a secret; never commit keys.

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

| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| **Latest working branch** | **`claude/bubble-wash-account-transfer-52t7ym`** (session bb87ba9f). Its head moves with the 5-minute autosave: `git ls-remote origin claude/bubble-wash-account-transfer-52t7ym` |
| Verified backup commit | see `BACKUP_VERIFICATION.md` (full SHA, remote check, clean-clone restore test) |
| Rollback checkpoint (last playable build before the six-scene work) | branch **`claude/bubble-wash-account-switch-e1nndb`** at **`0aa216213188b...`** (`0aa21621`): pass 18 Screen 09 work, everything opt-in. Keep it as is |
| DO NOT use | the repository's DEFAULT branch `claude/new-session-oth0dd` (2 November, outdated); pull request #3 (draft) |
| Current direction | **the user's NEW SIX-SCENE storyboard** (`Design/ReferencePacks/Six_Scene_New_Direction/`). It supersedes the Classic Screen 4 and "Avoid Enemies!" background-matching for this sequence. Do NOT resume the old background-matching cycle unless the user asks |
| Current task | `SIX_SCENE_IMPLEMENTATION_STATUS.md` ("Next steps") |

## 1. Restore in about 5 minutes
1. Start the Claude Code session on branch `claude/bubble-wash-account-transfer-52t7ym` (the SessionStart hook starts ONE autosave pinned to the checked-out branch).
2. `bash Tools/restore_session.sh` (~1 min: git, tool versions, `verify_restore.sh --build`, agents, autosave, free Tripo balance; installs tools only if `~/.bubblewash-tools` is missing). Its build check must say `0 failed`.
3. ToolSearch `mcp__plugin_parallax-threejs` and `mcp__spector` (listed = the MCP servers are up). Details: `TOOLS_AND_PLUGINS_RESTORE.md`.
4. `TRIPO_API_KEY=tsk_proxy-injected tripo balance` (free; the real key is injected by the network secret).
5. Per-account items the user must reconnect (cannot travel through Git): `TOOLS_AND_PLUGINS_RESTORE.md` section 1.
6. Continue `SIX_SCENE_IMPLEMENTATION_STATUS.md` "Next steps". Do not repeat audits that already passed.

## 2. Build, run and see the six scenes
```
cd WebDemo && npm ci && node build.mjs          # three.js r170 + esbuild; commit game.bundle.js with its sources
python3 -m http.server 3000                       # then open in a browser:
http://localhost:3000/index.html?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six
```
Home -> Laundry Toss (Scene 1, waiting) -> START -> Scenes 2-5 (the 3D opening, ~8.7 s) -> the live game's Tap to Start in the tunnel (Scene 6, playable).
Without `,six` the opening is exactly the previous one. The ACCEPTED game (Classic Screen 4) is `?s3=intunnel` and must stay pixel-identical.

## 3. Real captures and tests (never mock-ups)
- Opening frames: `S3=intunnel,structmatch,home,level1,tripo2,six IDLE=1.5 SEQ=0.9,1.45,2.2,2.75,3.6,4.9,6.3,7.4 WAIT='window.__bwTripo2 && window.__bwTripo2.ready' node WebDemo/tools/level1/o3d_shots.cjs WebDemo <out>`
- Continuous recording (opening -> Level 1): `WebDemo/tools/level1/record_flow.cjs` (header has usage; S3 with `home`; it records the opening, START, the run with the flow autopilot) then ffmpeg.
- Gameplay routes: `WebDemo/tools/level1/flow_routes.cjs`. Checkpoint probe: `Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/scripts/probe_variants.cjs`.
- Identity proof that the accepted game is unchanged: `Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/scripts/identity.sh <repo> <scratch> <old demo dir> <new demo dir>`.

## 4. The other documents
`CURRENT_PROJECT_STATUS.md` (what is accepted, what is a candidate, switches) · `SIX_SCENE_IMPLEMENTATION_STATUS.md` (per scene: status, files, next step) ·
`AGENTS_AND_SPECIALISTS_INVENTORY.md` · `TOOLS_AND_PLUGINS_RESTORE.md` · `ASSET_AND_MODEL_INVENTORY.md` · `BACKUP_VERIFICATION.md` ·
history: `BUBBLE_WASH_ACCOUNT_SWITCH_HANDOFF.md`, `Tools/FULL_AGENT_PLUGIN_TOOL_INVENTORY.md` (section 14 = this account's live tool test), `CLAUDE.md` (project rules).
`CLAUDE.md`'s "What the user wants now" describes the Classic Screen 4 work: it remains the rule for THAT screen (keep it unchanged), but it does not
override the six-scene direction for the new opening / Level 1 sequence.

## 5. Rules that still hold
Never force-push; never touch the default branch; commit `game.bundle.js` with its sources; every visual change behind an `?s3=` switch until the user
approves; the accepted `?s3=intunnel` stays pixel-identical (prove it); keys only as network secrets; Tripo: dry-run first, log every paid job in
`Design/TripoDeliveries/TRIPO_JOBS_LOG.md`, never buy credits; the girl NEVER notices the pink character.
