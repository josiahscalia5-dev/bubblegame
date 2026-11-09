# START HERE: Bubble Wash Kingdom on a new Claude account (updated 9 November 2026 ~20:40 UTC, session ddf175f2, ACCOUNT-TRANSFER BACKUP)

## 0000. COPY-READY RESTORATION PROMPT (session ddf175f2; paste ALL of it as the first message on the next account)
> Continue my EXISTING Bubble Wash Kingdom 3D mobile game (three.js r170, `WebDemo/`) in the GitHub repository josiahscalia5-dev/bubblegame.
> Do not restart, redesign or replace anything. Never force-push, delete or rewrite a branch. Do not spend Tripo or other paid credits without my approval.
> 1. Start from branch `claude/bubble-wash-transfer-screen6-to82gp` (the newest work, autosaved; it CONTAINS ccr-68def37c-grxgz1, claude/bubble-wash-restore-transfer-kc4ecl and
>    claude/bubble-wash-restore-tamzio). A fixed, verified snapshot of it is `claude/bubble-wash-account-transfer-backup-ddf175f2`. If the session opens on another branch, check it
>    contains one of these and develop there (git merge-base --is-ancestor).
> 2. Read, in order: `CLAUDE.md` (top block), this file's section 0000, `CURRENT_PROJECT_STATUS.md` (top), `TOOLS_AND_PLUGINS_RESTORE.md` (top), `PARALLEL_LANES.md` (top).
> 3. Run `bash Tools/restore_session.sh` (safe to rerun; installs only missing essentials). It must say "0 failed" for the build and models. Then do the
>    live checks it prints (ToolSearch the parallax-threejs MCP tools and mcp__spector, call each once; the Agent tool must list the project agents).
>    Tell me at once what needs my action (plugin, /mcp reconnect, network secrets) - see TOOLS_AND_PLUGINS_RESTORE.md section 0.
> 4. Resume the FIRST open task: natural SWIMMING controls in the Screen 6 gameplay (CURRENT_PROJECT_STATUS.md "Next tasks", task C), then the opening
>    girl-and-laundry scene (D) and the washing-machine entrance and magical spin into Screen 6 (E). Screen 6 = the 6th approved screen of the sequence, not Level 6.
> 5. Every visual change behind a reversible `?s3=` switch, judged only by real 864x1536 captures next to the approved image; prove the plain launch and
>    Classic Screen 4 (`?s3=intunnel`) unchanged; run the Level 1 route test; commit and push each tested step.

## 0001. What is where (verified 9 November 2026 ~20:40 UTC)
- The Screen 6 candidate (NOT approved, the user reviews it): `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,coin6,hero6,water6,brush6,arch56,env6,tank6,fin6,hero7`. The plain launch is unchanged (proved 0 px).
- Approved references: `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06` (01 Surprise hideout, 02 She loads laundry,
  03 Oops he goes in, 04 The wash begins, 05 Into the laundry tunnel, 06 Swim, collect and avoid enemies). Isolated Screen 6 asset cuts:
  `Design/ReferencePacks/2026-11-09_Screen6_Isolated_Asset_References/`.
- Evidence of this session: `Previews/WebDemo/six_scenes/17_screen6_env_ddf175f2/` (README per step; final side-by-side `16_hero7/SBS_FINAL_approved_vs_game_hero7.png`).
- Models: 72 GLB in the repository (no Git LFS; every model is a normal Git file; `node Tools/check_models.cjs` validates them). New this session:
  `WebDemo/models/s6tripo/` (3 Tripo models, 360 credits), `WebDemo/models/s6assets/glow_tank.glb` (Blender-modelled), `WebDemo/models/s6library/`
  (Sketchfab CC BY 4.0, credited in CREDITS.md).
- Agents: project agents in `.claude/agents/` (6) and the skill `.claude/skills/bubble-wash-screen-matcher/` load from the repository by themselves.
  The plugin agents (scenario-author, shader-reviewer, visual-debugger) need the parallax-threejs plugin enabled on the account; a reference copy
  of their text is in `Tools/plugin_snapshots/parallax-threejs-0.4.12/`.

# START HERE: Bubble Wash Kingdom on any new Claude account or session (updated 9 November 2026 ~16:20 UTC, session 47f75e22, EMERGENCY BACKUP)

## 000. COPY-READY RESTORATION PROMPT (session 47f75e22; paste ALL of it as the first message on the next account)
> Continue my EXISTING Bubble Wash Kingdom 3D mobile game (three.js r170, `WebDemo/`) in the GitHub repository josiahscalia5-dev/bubblegame.
> Do not restart, redesign or replace anything. Never force-push, never delete or rewrite a branch, never use the default branch claude/new-session-oth0dd.
> 1. **GitHub:** fetch my primary branch `claude/bubble-wash-restore-transfer-kc4ecl` (the newest verified head; it equals `claude/bubble-wash-restore-tamzio`,
>    and contains `ccr-212bb6a5-36pep9` and `claude/bubble-wash-account-transfer-52t7ym`). Check with `git ls-remote` which is newest. If this session opened
>    on another branch, check it CONTAINS kc4ecl (`git merge-base --is-ancestor`), work there; `bash Tools/save_now.sh "<msg>"` fast-forwards kc4ecl at every verified save.
> 2. **Read:** CLAUDE.md (the newest "READ FIRST" block), this file (section 000), CURRENT_PROJECT_STATUS.md (top), PARALLEL_LANES.md (top "Lane status"),
>    Tools/lanes.json, TOOLS_AND_PLUGINS_RESTORE.md (section 00), AGENTS_AND_SPECIALISTS_INVENTORY.md (top), MODEL_INVENTORY_2026-11-09_session_47f75e22.md,
>    BACKUP_VERIFICATION.md (top).
> 3. **Restore:** review, then run `bash Tools/restore_session.sh`; it must end with `0 failed` (installs only missing tools, essential first, never spends Tripo
>    credits). The optional PyTorch / LPIPS / Optuna come LAST and need ~6 GB free disk: if the setup's 25-minute limit cuts them off, run the `uv pip install`
>    line from Tools/cloud_env_setup.sh again in the background, then `uv cache clean` (frees ~10 GB; the venv keeps working). Never let it delay game work.
> 4. **Agents:** the Agent tool must list the 5 project agents (`.claude/agents/`, they travel with the repository): game-art-director, gameplay-visual-testing,
>    lighting-visual-matching, water-vfx-engineer, screen4-water-motion-engineer; the skill bubble-wash-screen-matcher (`.claude/skills/`); and the 3 plugin
>    agents parallax-threejs:scenario-author / shader-reviewer / visual-debugger (they come with the plugin, not with Git). Each agent's first task is its live test.
> 5. **Plugins and MCP:** call one tool of each server: chrome-devtools `list_pages`, playwright `browser_tabs`, threejs-devtools `bridge_status`, spector (project
>    `mcp__spector__*` and plugin `mcp__plugin_parallax-threejs_spector__*`) `load_url` + `capture_frame`. Any server "failed" at start (threejs-devtools usually
>    does on the first start): tell me to type `/mcp`, pick it, Reconnect. If parallax-threejs (0.4.12) is not loaded at all: claude.ai -> Customize -> Plugins ->
>    enable `parallax-threejs`, then start a NEW session. Never call anything working without a live call.
> 6. **Lanes:** `bash Tools/lanes.sh create` then `bash Tools/lanes.sh status`. Read each active lane's `WebDemo/tools/<lane>/HANDOFF.md` on its branch
>    (arch56 `claude/lane-s56-arch-d847dce2`, s56 `claude/lane-s56-tunnel-ac4e3449`, brush6 `claude/lane-s6-brush-47f75e22`) and PARALLEL_LANES.md, then relaunch:
>    arch56 = lighting-visual-matching, s56 water = screen4-water-motion-engineer, brush6 = lighting-visual-matching (girl12, washer34, ui stay paused).
>    Every browser run goes through `flock /tmp/bw_browser.lock` (4 CPUs, software WebGL).
> 7. **Assets:** `node Tools/check_models.cjs WebDemo/models` (0 failed); `cd Design/TripoDeliveries/2026-11-09_Eight_Models_from_user && python3 verify_all_glbs.py`
>    (ALL 8 PASS); the six approved scenes `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06`.
> 8. **Real browser test:** `cd WebDemo && npm ci && node build.mjs` (the fresh bundle must equal the committed one), then
>    `S3= ZS=tap,206 VW=432 VH=768 DPR=2 flock /tmp/bw_browser.lock node tools/s56/shots56.cjs $PWD <out>` and look at the frames.
> 9. **Autosave:** exactly ONE (`ps -eo pid,etime,args | grep '[a]utosave.sh'`; the SessionStart hook starts it); a save must report `Push: VERIFIED`.
> 10. **Continue the unfinished SCENE 6 work (my highest priority)** without restarting: the ONLY target is
>    `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png`, compared at 864x1536 with the game at u 206.
>    Measured gaps: `Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/qa/art_director_ranking.md`. Order: the pink / white / blue side brushes (brush6),
>    the cobalt gear upper right + left / right machinery + camera (arch56, using my Tripo LODs), the water (s56: saturated cobalt / turquoise waves, thin crests,
>    no white patches; mascot sunk ~0.3 m on m.tilt only), the oversized coins (coordinator). Then merge the lanes (order s56, arch56, brush6) into ONE reversible
>    candidate switch (NEVER into the plain launch), capture approved / before / after at 864x1536, run the gameplay route test and the fixed-clock identity
>    proof (`?s3=intunnel` and the plain launch 0 px), show me, and wait for my approval.
> 11. No Tripo or Ludo credits and no new models without my explicit approval (the Tripo key is a network secret for `openapi.tripo3d.ai`, Authorization: Bearer,
>    in the cloud environment; never in Git or chat). Nothing is approved until I review it. Give me a truthful report (WORKING / PARTIAL / FAILED / NEEDS USER ACTION).

**What cannot travel through Git (the user does it once per account):** (1) GitHub connected on claude.ai + the Claude GitHub App on the repository;
(2) the `parallax-threejs` plugin 0.4.12 (on this account it arrived through the organization's synced plugins; elsewhere: claude.ai -> Customize -> Plugins ->
enable it, then a NEW session); (3) a cloud environment for the repository: limited network, package registries and MCP servers allowed, hosts
`download.blender.org`, `download.pytorch.org`, `dl.google.com`, `openapi-dl.data.tripo3d.com`; setup script
`if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed"; fi`;
(4) the Tripo key as a NETWORK SECRET for `openapi.tripo3d.ai` (Authorization: Bearer) in that environment (Claude can open the secure form with
request_credential); (5) `/mcp` -> reconnect any server that failed at start. Running agents, processes and in-memory context do NOT transfer: their work
is on the lane branches (HANDOFF.md per lane) and in the files above. The autosave stops when the cloud session ends; the next session's hook restarts it.

**State at this backup:** `BACKUP_VERIFICATION.md` (top) has the verified commits of every branch and the clean-clone restore test.

---
## (older) 00. Session d847dce2's prompt (superseded by 000 above)

## 00. COPY-READY PROMPT FOR THE NEXT CLAUDE ACCOUNT (paste all of it as the first message)
> Continue my EXISTING Bubble Wash Kingdom 3D mobile game (three.js, WebDemo/) in the GitHub repository josiahscalia5-dev/bubblegame.
> My branch is claude/bubble-wash-restore-transfer-kc4ecl. Do not restart, redesign or replace anything; never force-push; never use the default branch.
> 1. Fetch my branch's newest head (`git fetch origin claude/bubble-wash-restore-transfer-kc4ecl`). If this session opened on another branch (ccr-*), check
>    it CONTAINS my branch, work there; `bash Tools/save_now.sh` fast-forwards my branch at every verified save.
> 2. Read CLAUDE.md (newest "READ FIRST" block), this file (sections 00-2), CURRENT_PROJECT_STATUS.md (top), PARALLEL_LANES.md ("Lane status"),
>    Tools/lanes.json, TOOLS_AND_PLUGINS_RESTORE.md (top), AGENTS_AND_SPECIALISTS_INVENTORY.md (top), MODEL_INVENTORY_2026-11-09_session_d847dce2.md.
> 3. Review, then run `bash Tools/restore_session.sh`. It must end with `0 failed` (it installs only missing tools, essential first; never spends Tripo credits).
> 4. Check what is ACTIVE in THIS session with real calls: ListPlugins; ToolSearch for chrome-devtools / threejs-devtools (plugin parallax-threejs),
>    playwright and spector; call one tool of each (spector: load_url on the running game + capture_frame). Confirm the Agent tool lists
>    game-art-director, gameplay-visual-testing, lighting-visual-matching, water-vfx-engineer, screen4-water-motion-engineer (project) and
>    parallax-threejs:scenario-author / shader-reviewer / visual-debugger (plugin). Tell me AT ONCE what needs my action (plugin enable + new session,
>    /mcp reconnect, the Tripo network secret for openapi.tripo3d.ai). Never call anything working without a live test.
> 5. Verify the game builds and renders: `cd WebDemo && npm ci && node build.mjs`, then a real 864x1536 capture
>    (`S3= ZS=tap,206 VW=432 VH=768 DPR=2 flock /tmp/bw_browser.lock node tools/s56/shots56.cjs $PWD <out>`).
> 6. Restore the lanes: `bash Tools/lanes.sh create` then `bash Tools/lanes.sh status`; continue each from its last pushed commit with its specialist
>    (PARALLEL_LANES.md "Lane status": what is done and the exact next step). Each agent's first task is its live test. Browser runs: `flock /tmp/bw_browser.lock`.
> 7. Check exactly ONE autosave runs (`ps -eo pid,etime,args | grep '[a]utosave.sh'`; the SessionStart hook starts it) and that a save shows `Push: VERIFIED`.
> 8. Continue the Scene 5/6 visual-match work (CURRENT_PROJECT_STATUS.md top): targets ONLY
>    Design/ReferencePacks/2026-11-09_Scenes5_6_Approved_Visual_Reference_Pack_from_user/02_APPROVED_SCENE_5.png and 03_APPROVED_SCENE_6.png (and the six
>    approved scenes in Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06). First: finish lane arch56 (bring the machinery,
>    glowing chambers, cobalt gear, ceiling lamp and pipes, gold rails and the far-left/far-right scenery into the visible portrait frame, with my
>    Tripo model 911 as the bank housing) and lane s56 (the pale water and transparent overlays), review, merge only tested improvements.
> 9. No Tripo or Ludo credits and no new models without my explicit approval. Nothing is approved until I review it. Keep gameplay working.
> 10. Give me a truthful verification report (WORKING / PARTIAL / FAILED / MISSING / NEEDS USER ACTION) before claiming anything works.

**What cannot travel through Git (the user does it once per account):** (1) GitHub connected on claude.ai + the Claude GitHub App on the repository;
(2) the `parallax-threejs` plugin (0.4.12): claude.ai -> Customize -> Plugins -> enable it, then start a NEW session; (3) a cloud environment for the
repository (limited network, package registries + MCP servers allowed, hosts `download.blender.org`, `download.pytorch.org`, `dl.google.com`,
`openapi-dl.data.tripo3d.com`; setup script `if [ -d bubblegame ]; then bash bubblegame/Tools/cloud_env_setup.sh; fi`); (4) the Tripo key as a NETWORK
SECRET for `openapi.tripo3d.ai` (Authorization: Bearer) in that environment (Claude can open the secure form with request_credential); (5) `/mcp` ->
reconnect any MCP server that failed at start. Claude's background agents, running processes and in-memory context do NOT transfer: their work is on the
lane branches and in the files listed in PARALLEL_LANES.md.

**State at the backup (9 November ~14:40 UTC):** see `BACKUP_VERIFICATION.md` (top) for the final commit, the clean-restore test and the per-component labels.

---

**Session d847dce2 (new account, 9 November ~13:30 UTC):** the user's PRIMARY branch is now **`claude/bubble-wash-restore-transfer-kc4ecl`** (`52t7ym` is historical). Verification record: `ENVIRONMENT_VERIFICATION_2026-11-09_session_d847dce2.md`. Current task: the user's Scene 5/6 visual-accuracy mandate and reference pack `Design/ReferencePacks/2026-11-09_Scenes5_6_Approved_Visual_Reference_Pack_from_user/`; work and evidence in `Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/`; new lane `arch56` (`s56_arch.js`, switch `,arch56`).

This is the EXISTING game (three.js r170, `WebDemo/`). Do not restart, redesign or rebuild it. Nothing in this repository is a secret; never commit keys.

## 0. The one message to send a new Claude account (copy and paste all of it)
> Continue my EXISTING Bubble Wash Kingdom 3D mobile game in josiahscalia5-dev/bubblegame. My branch is claude/bubble-wash-restore-transfer-kc4ecl:
> fetch its newest head first; if this session opened on another branch, check that branch contains it, work there and fast-forward my branch to it
> at every verified save (never force-push, never use the default branch claude/new-session-oth0dd, keep every rollback branch). Do not restart,
> redesign or rebuild anything. Steps:
> 1. Read CLAUDE.md ("READ FIRST", newest block) and START_HERE_NEXT_CLAUDE_ACCOUNT.md.
> 2. Run `bash Tools/restore_session.sh`; it must end with `0 failed` (it installs only missing tools, essential ones first).
> 3. Live-test every MCP server with one real call: chrome-devtools `list_pages`, playwright `browser_tabs`, threejs-devtools `bridge_status`,
>    spector `list_canvases`. If one failed at startup, tell me to type `/mcp` and reconnect it. Prove Spector on the real game with
>    `flock /tmp/bw_browser.lock node Tools/spector_live.cjs $PWD/WebDemo /tmp/s.png '?s3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56'`.
> 4. Restore the specialist lanes: `bash Tools/lanes.sh create` then `bash Tools/lanes.sh status`. Read PARALLEL_LANES.md "Lane status" and continue
>    each lane from its last pushed commit with its specialist (girl12 = lighting-visual-matching, washer34 = water-vfx-engineer,
>    s56 = screen4-water-motion-engineer, arch56 = lighting-visual-matching, ui = general-purpose, QA = gameplay-visual-testing + game-art-director). Each agent's first task is its live test.
>    Every browser run goes through `flock /tmp/bw_browser.lock`. Review each lane before merging, in the order s56, ui, washer34, girl12.
> 5. The ONLY visual targets are Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06 (864x1536). Compare real game
>    frames at 864x1536 (Scene 5 at real ~8.9 s and the live Tap to Start; Scene 6 at u 206), fix the largest differences first, report honestly,
>    never call anything approved; I review.
> 6. Keep gameplay working (swipes, lanes, jump, spin, coins, socks, gems, enemies, hearts, power-ups) and `?s3=intunnel` pixel-identical.
> 7. No Tripo credits and no new models without my explicit approval. Keep the one 5-minute autosave running and verify every push.
> Then tell me only what needs my action, and continue the next task in CURRENT_PROJECT_STATUS.md.

**What only YOU (the user) can do on a new account (cannot travel through Git):**
1. GitHub connected on claude.ai and the Claude GitHub App installed on `josiahscalia5-dev/bubblegame`.
2. The `parallax-threejs` plugin (0.4.12, Anthropic Directory, community publisher): claude.ai -> Customize -> Plugins -> enable it, then start a
   NEW session (plugins load at session start). It brings chrome-devtools, playwright, threejs-devtools, spector and the agents scenario-author,
   shader-reviewer, visual-debugger.
3. A cloud environment for the repository: limited network, package registries and MCP servers allowed; hosts `download.blender.org`,
   `download.pytorch.org`, `dl.google.com`, `openapi-dl.data.tripo3d.com`; setup script
   `if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed"; fi`.
4. The Tripo key as a NETWORK SECRET for host `openapi.tripo3d.ai`, header `Authorization`, Bearer, in that environment's settings. Never in chat or Git.
5. If an MCP server shows "failed": type `/mcp` and reconnect it (threejs-devtools and spector can miss the first start).

## 1. Where everything is
| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| Work branch | **`claude/bubble-wash-restore-transfer-kc4ecl`** (since session d847dce2; `52t7ym` is historical; head moves with the 5-minute autosave: `git ls-remote origin claude/bubble-wash-restore-transfer-kc4ecl`; the last verified backup SHA is in `BACKUP_VERIFICATION.md`) |
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
