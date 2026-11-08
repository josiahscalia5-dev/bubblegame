# Bubble Wash Kingdom: ACCOUNT SWITCH HANDOFF (permanent; read this first on any Claude account)

Written 8 November 2026, about 17:05 UTC, by session `57091b57` (https://claude.ai/code/session_013kxR3NgrYJJC9HLHZ7n41J) at the user's
preservation mandate. Nothing in this file is a secret. Newer sessions: add a dated section at the top of section 1 and update section 9.

**FULL INVENTORY (every agent, plugin, MCP server, skill, command, integration and tool, with history, live tests and how to restore
each): `Tools/FULL_AGENT_PLUGIN_TOOL_INVENTORY.md`.** Read it after this file; it supersedes the short lists in sections 3, 4 and 7.

## 0. ONE-SHOT RESTORE: the single entry point (updated 8 November 2026 ~20:40 UTC, session `f70c9bd1`)
| | |
|---|---|
| Repository / branch | `josiahscalia5-dev/bubblegame`, branch **`claude/bubble-wash-account-switch-e1nndb`** (contains every earlier work branch; `git ls-remote origin claude/bubble-wash-account-switch-e1nndb` gives its head, which moves with the 5-minute autosave) |
| Approved | ONLY the Classic Screen 4 look `?s3=intunnel` (with swim2). Everything else is a candidate waiting for the user |
| Current task | Screen 09 "Avoid Enemies!" (`scene07`, opt-in), pass 16 MACH16 v1, UNFINISHED: `Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/README.md` (state, what failed and was rejected, next steps) |
| Rules | `CLAUDE.md`; the user's Screen 09 mandates: `Design/ReferencePacks/2026-11-08_Screen09_Strict_Handoff_from_user/00_ONE_SHOT_STRICT_PROMPT_FOR_CLAUDE.txt` and `.../2026-11-08_Screen09_Approved_Reference_Kit_from_user/README.md` |
| Tools / agents / plugins | `Tools/FULL_AGENT_PLUGIN_TOOL_INVENTORY.md` (section 12: the latest live results) |

**Restore in 5 minutes (no long audits):** (1) start the Claude Code session ON branch `claude/bubble-wash-account-switch-e1nndb` (the
SessionStart hook then starts one autosave by itself). (2) `source Tools/bw_tools_env.sh`; only if `~/.bubblewash-tools` is missing:
`bash Tools/cloud_env_setup.sh`. (3) `bash Tools/verify_restore.sh --build` (expect 0 failed). (4) ToolSearch `mcp__plugin_parallax-threejs`
and `mcp__spector` (tools listed = the MCP servers are up). (5) `TRIPO_API_KEY=tsk_proxy-injected tripo balance` (free). (6) Continue the
77_ README's "Next steps". Run a live check only for something that fails or changed.

**Must be reconnected by the user on a new account (cannot travel through Git):** the GitHub connection and the Claude GitHub App on the
repository; the `parallax-threejs` plugin (claude.ai, Customize / plugins, Anthropic Directory, enable, then start a NEW session); the
cloud environment (limited network with package registries and MCP servers allowed, plus hosts `download.blender.org`,
`download.pytorch.org`, `openapi-dl.data.tripo3d.com`; setup script
`if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed"; fi`);
the Tripo key as a network secret for host `openapi.tripo3d.ai` (Authorization: Bearer; secret name e.g. "Tripo API key"; never in Git).
Optional plugins (Superpowers, Frontend Design, ...) are not needed (inventory section 5).

**The one prompt for the other account (copy and paste):**
> Continue my EXISTING Bubble Wash Kingdom game (josiahscalia5-dev/bubblegame), on branch claude/bubble-wash-account-switch-e1nndb. Do not
> restart or redesign anything. Read BUBBLE_WASH_ACCOUNT_SWITCH_HANDOFF.md section 0 and CLAUDE.md, do the 5-minute restore in section 0
> (no long audits; never force-push; never touch the default branch claude/new-session-oth0dd), tell me only what failed or what I must
> reconnect, then continue Screen 09 from Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/README.md "Next steps": real 3D
> machinery that matches my approved original (00_AUTHENTIC_APPROVED_SCREEN09.png), no cards, projection or inpainted wallpaper, opt-in
> under scene07, Classic Screen 4 unchanged, no Tripo spending without asking me. Commit and push each verified step and give me the hash.

## 1. Where everything is (verified 8 November ~17:05 UTC)
**Update 8 November ~19:10 UTC, session `f70c9bd1` (https://claude.ai/code/session_019Rgj5g6iZsturQ5pdRxSux, the user's account
switch):** the newest work branch is **`claude/bubble-wash-account-switch-e1nndb`**; it contains all of `ccr-8cd911d8-0m96gr` (normal
merge; that branch's autosave may still add chat-history commits: merge them, never force). Short readiness check only (inventory
section 12): every tool present, `verify_restore.sh --build` 0 failed, all four MCP servers live (Spector included), Tripo 1,060.
**Update 8 November ~18:00 UTC, session `ce30359f` (https://claude.ai/code/session_01CUAtW4nh4Z5qW7Dm1JTSCB):** the newest work branch
is **`ccr-8cd911d8-0m96gr`**. It contains all of `ccr-b67aeffb-d94mmq` (to its 17:15 autosave), `ccr-50c66592-kcnqoy`,
`ccr-76d4bc77-rqhl8o` and `claude/bubble-wash-kingdom-continue-z9nmm1` (checked with 844 commits of history; normal merges only).
Session `57091b57` was idle (its account's usage limit). This session restored and live-tested the whole environment (the inventory
above), fixed Spector, the metrics install and Parallax's checkpoint launcher, and ran `/parallax-threejs:init`. No game code changed.

| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| **Newest work branch** | (superseded: see section 0, `claude/bubble-wash-account-switch-e1nndb`) **`ccr-b67aeffb-d94mmq`** (session `57091b57`). Its head moves with the 5-minute autosave: read it with `git ls-remote origin ccr-b67aeffb-d94mmq`. The last commit this session verified on GitHub is printed in the final save report and in `git log -1 origin/ccr-b67aeffb-d94mmq` |
| It contains | ALL of `ccr-50c66592-kcnqoy` (session `b0abcf95`: Level 1 flow, roof2, finale2; idle since 14:22 UTC), which contains `claude/bubble-wash-kingdom-continue-z9nmm1` (session `8140e507`) and `ccr-76d4bc77-rqhl8o` (session `dbccb9a3`) |
| Not merged on purpose | `claude/bubble-wash-kingdom-continue-z9nmm1`: 2 autosave commits (1 chat-history file); `ccr-d49c186b-ilso32` (session `18c5c9fa`, idle since 14:27): 1 commit, its own chat history. No game code in either |
| DO NOT use | the repository's DEFAULT branch `claude/new-session-oth0dd` (2 November, no `CLAUDE.md`, outdated); pull request #3 (draft, never merge without the user) |
| Rules | `CLAUDE.md` (project rules), `SESSION_FILE_RESERVATIONS.md` (which session edits which files), this file |

## 2. First message for the other Claude account (copy and paste)
> Continue my EXISTING Bubble Wash Kingdom game (repository josiahscalia5-dev/bubblegame). Do not restart, rebuild or redesign anything.
> 1) Read `BUBBLE_WASH_ACCOUNT_SWITCH_HANDOFF.md` and `CLAUDE.md`. 2) Run `git fetch origin` and `git ls-remote --heads origin`; the newest
> work branch is `ccr-b67aeffb-d94mmq` (or a newer one named at the top of that handoff). If this session has its own branch, merge the
> newest work branch into it with a NORMAL merge (rebuild `WebDemo/game.bundle.js` with `cd WebDemo && node build.mjs`, never hand-merge
> it); never force-push, reset, delete, or touch the default branch `claude/new-session-oth0dd` or PR #3. 3) Restore the tools:
> `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing, `source Tools/bw_tools_env.sh`, `cd WebDemo && npm ci`,
> `bash Tools/verify_restore.sh --build`, `bash Tools/preservation_audit.sh`. 4) Check exactly one autosave runs
> (`ps -eo pid,etime,cmd | grep '[a]utosave.sh'`), pinned to your branch. 5) ToolSearch `mcp__plugin_parallax-threejs` and run the
> checklist in section 4 of the handoff, live. 6) `TRIPO_API_KEY=tsk_proxy-injected tripo balance` (free). My standing authorization:
> use my AVAILABLE Tripo API credits for game assets without asking per job, ONE lead session at a time, every paid job through
> `bash Tools/tripo_job.sh`; never buy credits or upgrade. 7) Report what works and what I must reconnect, then continue section 9's
> exact next task: the "Avoid Enemies!" screen (`Design/ApprovedScreens/09_Avoid_Enemies.png` is the authority).

## 3. Restore, step by step
1. **Repository:** attach `josiahscalia5-dev/bubblegame` to the session (GitHub connected on claude.ai; the Claude GitHub app installed on it).
2. **Newest branch:** `git ls-remote --heads origin` and compare dates; the newest work branch is in section 1 (newer sessions update it).
3. **Verify the remote commit:** `git fetch origin <branch> && git rev-parse origin/<branch>`; after any save `bash Tools/save_now.sh` prints
   `Push: VERIFIED, GitHub's <branch> is at <sha>` (it asks GitHub with `git ls-remote`, not the push's exit code).
4. **Design agents:** nothing to install: `.claude/agents/*.md` load automatically from the repository (five: game-art-director,
   gameplay-visual-testing, lighting-visual-matching, water-vfx-engineer, screen4-water-motion-engineer). Test each with a harmless task.
5. **Project skill:** `.claude/skills/bubble-wash-screen-matcher/` loads automatically. There is no `.claude/commands/` folder.
6. **parallax-threejs plugin 0.4.12 (PER ACCOUNT):** on claude.ai enable it (Customize / plugins, Anthropic Directory, `parallax-threejs`),
   then START A NEW SESSION (plugins load at session start). Check: ToolSearch `mcp__plugin_parallax-threejs`.
7. **MCP servers:** chrome-devtools, playwright, threejs-devtools come with the plugin. **Spector** ships without its server, and the
   plugin's own `setup-spector.sh` now FAILS (and its Playwright 1.59 cannot launch this image's browser): since session `ce30359f`,
   `bash Tools/cloud_env_setup.sh` builds a fixed copy in `~/.bubblewash-tools/spector` BEFORE Claude starts, and the project's
   `.mcp.json` starts it as the server `spector` (enabled in `.claude/settings.json`); its tools are `mcp__spector__*`. Cloud sessions
   have no `/mcp` reconnect: a server that failed at startup stays failed until the next session.
   **threejs-devtools** attaches only to a page served on port 3000 and opened through its proxy, with the game's scene exposed
   (`cd WebDemo && python3 -m http.server 3000`; chrome-devtools `navigate_page http://localhost:9222/index.html?s3=...`; evaluate
   `const d=window.__bw.debug(); window.__THREE_SCENE__=d.scene; window.__THREE_CAMERA__=d.camera; window.__THREE_RENDERER__=d.renderer`).
   `.mcp.json` is empty on purpose (the servers come from the plugin).
8. **Development tools:** `bash Tools/cloud_env_setup.sh` (Blender 5.2.3, Tripo CLI 0.11.2, glTF Transform 4.5.1, glTF Validator, Vite 8.3.5,
   OpenCV, scikit-image, PyTorch, LPIPS, Optuna into `~/.bubblewash-tools`; Deno 2.x via npm; Spector), then `source Tools/bw_tools_env.sh`
   in every shell; `cd WebDemo && npm ci` (three 0.170, esbuild, Playwright 1.63 with the preinstalled Chromium).
   Cloud environment (per account): limited network with package registries and MCP servers allowed, plus the hosts
   `download.blender.org`, `download.pytorch.org`, `openapi-dl.data.tripo3d.com` (Tripo downloads); setup script
   `if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed"; fi`.
9. **Tripo (PER ACCOUNT / ENVIRONMENT, never in Git):** a network secret for host `openapi.tripo3d.ai` (Authorization: Bearer, the user's
   `tsk_...` key) in the environment's settings, or Claude opens the secure credential form. Run `tripo` with `TRIPO_API_KEY=tsk_proxy-injected`.
   Free checks: `tripo doctor`, `tripo balance`. Paid jobs: ONLY `bash Tools/tripo_job.sh <name> make <image> -p texture_quality=detailed -p pbr=true -o <dir>`.
10. **Autosave:** the SessionStart hook (`.claude/settings.json` -> `.claude/hooks/session-start.sh`) starts ONE detached autosave
    (`Tools/autosave.sh`, every 5 minutes, 288 rounds = 24 h) pinned to the checked-out branch; add your session to
    `Tools/autosave_sessions.json` (chat file name, title, link, parent branch). Check: `ps -eo pid,etime,cmd | grep '[a]utosave.sh'`
    (one line) and `tail ~/.bubblewash-autosave/save_history.log` (`github=VERIFIED`). Restart by hand: the command in `CLAUDE.md`, Safety.
11. **Approved references:** section 6 below (all in the repository, original names).
12. **Continue:** section 9 (exact state and next task).

## 4. Environment verification checklist (run LIVE; never mark a row PASS from notes)
- [ ] `git rev-parse HEAD` = `git ls-remote origin <branch>` after `bash Tools/save_now.sh "check"`; the report says `Push: VERIFIED`
- [ ] exactly one `Tools/autosave.sh` process; `BW_AUTOSAVE_BRANCH` = your branch (`tr '\0' '\n' < /proc/<pid>/environ | grep BW_`)
- [ ] `bash Tools/preservation_audit.sh <branch>`: all present, the six GLBs VERIFIED, no credential pattern, no file over 50 MB
- [ ] `bash Tools/verify_restore.sh --build`: 0 failed; `node build.mjs` rebuilds the committed bundle byte-identical
- [ ] each of the five agents completes a harmless task (screen4-water-motion-engineer must reach its MCP tools)
- [ ] chrome-devtools `navigate_page` + `evaluate_script`; playwright `browser_tabs`; threejs-devtools `bridge_status` + `find_objects` (method in 3.7)
- [ ] Spector: its `mcp__plugin_parallax-threejs_spector__*` tools are listed (ToolSearch); standalone, a real `load_url` + `capture_frame`
      (`node Previews/WebDemo/environment_restore_2026-11-08_ce30359f/spector_live_test.mjs <plugin>/vendor/spector/mcp/dist/index.js <url>`)
- [ ] `deno --version` (2.x); `/parallax-threejs:init` was RUN on 8 Nov (session ce30359f): expose the scene with
      `expose_scene.cjs` (same folder), then `PARALLAX_HEADLESS=true deno task checkpoint <label>` (no `--`), `diff-checkpoints`, `export-report`
- [ ] `blender -b --python-expr "import bpy; print(bpy.app.version_string)"`; `gltf-transform --version`; `vite --version`
- [ ] metrics python (`~/.bubblewash-tools/metrics/bin/python`): import cv2, skimage, torch, lpips, optuna; one LPIPS distance
- [ ] `TRIPO_API_KEY=tsk_proxy-injected tripo balance` (free); `BW_TRIPO_CHECK_ONLY=1 bash Tools/tripo_job.sh test make <image>` (no spend)

## 5. What transfers and what does not
| Category | Items |
|---|---|
| SAVED ON GITHUB (transfers by itself) | the whole game (`WebDemo/`: sources, bundle, models, textures, UI, tools/tests), all approved references and evidence, the five agents, the skill, the hook and settings, all scripts (setup, save, guard, audit, Tripo wrapper), the handoffs, chat histories, the Tripo GLBs with manifests / READMEs / job log |
| RESTORABLE FROM GITHUB (run the scripts) | the tool installs (`Tools/cloud_env_setup.sh`), `node_modules` (`npm ci`), the autosave (hook), Spector's build and Deno (setup script) |
| MUST BE RECONNECTED ON EACH ACCOUNT | the parallax-threejs plugin (enable + new session), the Tripo network secret, the cloud environment (network hosts, setup script), GitHub connection / app access |
| NEVER TRANSFERS | running processes (autosave, browsers, agents, recordings), the scratchpad, `~/.bubblewash-tools` installs, account-level plugin installs and secrets |
| Ignored on purpose (recreated) | `WebDemo/node_modules/` (npm ci), `WebDemo/artifact-models/` (build), `.tripo/` (CLI state) |

## 6. Approved references (never replace; original names)
`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (the ORIGINAL CLASSIC Screen 4, sha256
`b30dc6a1794213be...`); `Design/ApprovedScreens/09_Avoid_Enemies.png` ("Avoid Enemies!", the user's "board 07" / "Screen 09", sha256
`1314ceed6636e2a7...`); `Design/ApprovedScreens/00_ORIGINAL_COMPLETE_12_SCREEN_BOARD.jpg` (sha256 `628681d10cfd2080...`) and its per-screen
crops in `Design/ApprovedScreens/`; the girl and Laundry Toss art `Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg`;
the Level 1 FRESH pack's ten crops `Design/ReferencePacks/2026-11-08_Approved_References_FRESH_Match_Prompt_from_user/original_crops/`;
the Screen 07/09 kit `Design/ReferencePacks/2026-11-08_Screen07_Claude_Tripo_Reference_Kit_from_user/` (annotations, object crops, Tripo guidance).

## 7. Agents, plugin, tools: status in session 57091b57 (live tests; details `ENVIRONMENT_VERIFICATION_2026-11-08_session_57091b57.md`)
**Superseded by `Tools/FULL_AGENT_PLUGIN_TOOL_INVENTORY.md` (session ce30359f, all rows re-tested live).** Changes since: Spector
really captures a frame now (it never could before: wrong Playwright); the metrics venv was broken at that session's start and is
fixed; Parallax init / checkpoint / diff / export-report / sweep / memcheck / sync-view PASS; Tripo 1,060 credits.
- Five design agents: installed (repo), loaded, live-tested PASS. Plugin agents scenario-author / shader-reviewer / visual-debugger: run
  but get NO MCP tools (the plugin's tool-naming defect; only its author can fix it): use the main session or screen4-water-motion-engineer.
- chrome-devtools, playwright, threejs-devtools: PASS. Spector: rebuilt in this container and answering (needs a new session to appear).
- Deno 2.9.6 installed; the plugin's checkpoint / diff / sweep / ship-check not run (they need `/parallax-threejs:init`, the user's yes).
- Blender, Tripo CLI + API (1,300 credits at 16:40 UTC), three.js, Vite, Playwright + Chromium, glTF Transform / Validator, OpenCV,
  scikit-image, PyTorch, LPIPS, Optuna, Git: PASS.

## 8. Tripo
- Standing authorization (`CLAUDE.md`, Safety): the designated LEAD session may spend the AVAILABLE API credits on useful game assets
  without asking per job; never buy credits, top up, upgrade or charge a payment method without the user. One lead session at a time:
  `Tools/tripo_job.sh` refuses while another session's job is queued, running or less than 30 minutes old (Tripo's account-wide history).
- Every job: `Design/TripoDeliveries/TRIPO_JOBS_LOG.md`. Spent in total 360 (three jobs); 1,300 available at 16:40 UTC.
- Assets (status): the user's six (`Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/`, sha256 = manifest): girl RIGGED and IN USE
  (`WebDemo/models/opening/girl_rigged.glb`); basket and towels IN USE in the `tripo2` candidate (recoloured / split copies in
  `WebDemo/models/opening/`); sock character, washing machine NOT used; pink creature REJECTED by the user as the mascot. Session 57091b57:
  the grime-ball enemy (CANDIDATE, `tripo1`, `WebDemo/models/l1_enemy_tripo.glb`); the castle (REJECTED, a flat card, kept as record).
  Earlier: the pink mascot rear (REJECTED), paw coin (in use), brush (not used): `Design/TripoDeliveries/*/README.md`.
- **No pink-and-gold architecture GLBs exist in the repository or in session 57091b57's uploads** (the Screen 07 kit says "NO 3D GLB
  INCLUDED"). If the user has such GLBs, they must be uploaded to the session (or committed) before they can be inspected.

## 9. EXACT GAME STATE AND NEXT TASK
**Update 8 November ~20:40 UTC, session f70c9bd1 (branch `claude/bubble-wash-account-switch-e1nndb`):** Screen 09 (`scene07`, opt-in)
is at **pass 16 MACH16 v1** (bundle `5ab92333`; NOT approved; it does NOT yet resemble the original's upper background). The user sent two
kits this session (saved unchanged in `Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/` and
`.../2026-11-08_Screen09_Strict_Handoff_from_user/`) and rejected: wall-hugging machinery bands, a rib ceiling, generic arches, small
"greeble" blocks, projecting the master onto the chamber, inpainted fills (Telea, mirrored, tiled, LaMa) and depth cards for nearby
scenery. Kept (in scene07): the round drum housing on a raised cream-gold ledge (left), the curved pink star wall (right), one hero enemy,
the big blue gear, real 3D machine towers and pipes (MACH16; too small and hidden from the checkpoint so far). Opt-in for the record:
`,art16` (cards), `,norecon16` (= pass 13b), `,norecon16,wall15` (pass 15), `,nomach16`. Evidence, tried/failed table, tools (the
projection grid of the checkpoint camera, the variant probe) and the NEXT STEPS: `Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/README.md`.

**Update 8 November ~19:00 UTC, session ce30359f (branch `ccr-8cd911d8-0m96gr`):** Screen 09 ("Avoid Enemies!", opt-in `scene07`) is at
**pass 13b** (bundle `6579f556`; NOT approved): layout first, from the art director's measured map of the original: the stretch's camera
aimed down the channel, the left washer housing as a tall rounded pink body with ring and glass on a gold-rimmed ledge, one big curved star
drum at the right edge, the enemy floating high while far ahead (hit test unchanged). Evidence, element table, costs, proofs:
`Previews/WebDemo/screen4_round9_match/76_scene07_pass13_layout/README.md`; passes 9-12 and the reverted 14b: `75_scene07_pass9_shell/`.
Same-checkpoint tool: `75_.../scripts/probe_layout.cjs` (u 229.5, centre lane; screen rectangles, scene draw calls and triangles).
**Next:** the upper 40 % (wall-mounted machinery left and right, none above the vanishing point; the user's own Tripo washer, already
optimised in `WebDemo/models/scene07/`, is available), then the foreground foam and bubbles; one correction at a time, art director review.

### Earlier state (8 November ~17:05 UTC, session 57091b57)
**Accepted by the user:** the ORIGINAL CLASSIC Screen 4 look `?s3=intunnel` (with swim2). Proven 0 px unchanged by every pass since.
**Candidates waiting for the user (NOT approved):** the full app `index.html?s3=intunnel,structmatch,home,level1` (the 3D opening with the
rigged Tripo girl, the Laundry Toss, the washer entry, Level 1 with `wet`, `port`, `flow`: raised side path, lower path, grime balls, 5
socks, Level Complete); opt-in: `roof2`, `finale2` (session b0abcf95), `match6`, and this session's `tripo1` (floating Tripo grime ball),
`tripo2` (the user's Tripo basket and towels in the toss), `scene07` (the "Avoid Enemies!" chamber, pass 8). Evidence folders
`Previews/WebDemo/screen4_round9_match/71_level1_flow/`, `72_tripo1_enemy/`, `73_tripo2_opening_basket_towels/`, `74_scene07_avoid_enemies/`.
**Gameplay:** every candidate is looks only; the Level 1 route's events and states are identical with and without them; no console errors.
**The user's CURRENT MAJOR GOAL:** the whole "Avoid Enemies!" screen must match `Design/ApprovedScreens/09_Avoid_Enemies.png`: a rich,
bright, layered pink-and-gold magical laundry waterway (left circular washer housing, right curved pink-gold star structure, colourful
machinery clusters above, a bright receding corridor, saturated blue water, the floating navy enemy upper right, the red banner), NOT a
purple tube, pink dome, flat ceiling or repeating grid. Pass 8 (`scene07`): the tube opened into a corridor with the game's own machinery in
two tiers, pink rings, star tubs, bulbs; still airier and less dense than the original, the enemy in the left lane (its lane is in
`level1.js`), the red banner never caught in a frame (unverified), the water and coins unchanged. The user has approved none of passes 1-8.
**Exact next task:** (1) blockout of the original's composition with real geometry at the u 233 checkpoint (the user's latest method);
(2) clean isolated references (cut-outs) of the original's left washer housing, right pink-gold structure and machinery clusters, then
Tripo image-to-3D through `Tools/tripo_job.sh` (never the whole screenshot; reject flat cards); (3) integrate, compare ORIGINAL / BEFORE /
AFTER at u 233 and a moving recording; (4) the enemy upper right needs a lane / height change in `level1.js` (coordinate with its owner,
session b0abcf95, or the user); (5) find when the banner shows and capture it.
**Screen 09 Tripo attempt (8 Nov ~17:10 UTC):** the left washer housing and the top-right machinery, from clean crops of the original
(mirror-completed), both came back as shapeless blobs: REJECTED (`Design/TripoDeliveries/2026-11-08_session_57091b57_Screen09_architecture/README.md`);
240 credits; balance 1,060. The original's structures are too small (40-80 px) for image-to-3D. Options there; ask the user before more jobs.
**Known issues:** the clone is shallow (ancestry checks of old branches can read "not contained": deepen with `git fetch --unshallow`);
the plugin's agents have no MCP tools; captures run in software WebGL (slow; one browser at a time is safest).
**Nothing is running** at the writing of this file except the autosave.
