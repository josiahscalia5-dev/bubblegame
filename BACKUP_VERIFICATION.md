# Backup verification (8 November 2026, session bb87ba9f, emergency account-transfer backup)

## NEWEST: verified backup of 9 November 2026 ~14:50 UTC, session d847dce2 (account-transfer backup to the user's next Claude account)
Primary transfer branch: **`claude/bubble-wash-restore-transfer-kc4ecl`** (repository josiahscalia5-dev/bubblegame). The session worked on the harness branch
`ccr-212bb6a5-36pep9`; every verified save fast-forwarded kc4ecl to the same commit (never force). The final commit is the last `Push: VERIFIED` line of
`~/.bubblewash-autosave/save_history.log` and the head of kc4ecl on GitHub (`git ls-remote origin claude/bubble-wash-restore-transfer-kc4ecl`).

| Component | Label | Evidence |
|---|---|---|
| Game source, bundle, package-lock | BACKED UP AND VERIFIED | clean partial clone of kc4ecl from GitHub (0aa9ddd): 54 src files + bundle + lockfile identical; `npm ci` (3 s) + `node build.mjs` = bundle BYTE-IDENTICAL (6a78d7ae); the game launched in Chromium from the clone: Tap to Start 0 px different from the working build, tap -> running (z 1.6 -> 15.8, coins 1280 -> 1286), 0 page errors |
| Gameplay | BACKED UP AND VERIFIED | route test (same source) upper / ledge / blocked: all Level Complete, 5 socks, enemies popped, blocked moves refused, 0 console errors (`Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/qa/routes/`) |
| Six approved scenes + Scene 5/6 pack + Scene 5/6 kit | BACKED UP AND VERIFIED | 10 + 11 + 15 files identical in the clone (`Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/01-06`, `..._Scenes5_6_Approved_Visual_Reference_Pack_from_user/02, 03`) |
| 3D models | BACKED UP AND VERIFIED | 110 GLB in the tree, all real glTF binaries, no LFS pointers (`MODEL_INVENTORY_2026-11-09_session_d847dce2.md`); the 48 game models identical in the clone; all 35 model paths named in the code resolve; Khronos validator 48 / 0 failed. The user's uploads: Machinery_small and 911_small (912 = byte-identical copy) saved; the "tiny" files, a distinct 912, yo_jj_optimized and "913 914" were NEVER uploaded to this session: MISSING (the user must re-send them) |
| Project agents (5), skill, SessionStart hook, settings, .mcp.json | BACKED UP AND VERIFIED (files) / REQUIRES a live test on the next account | identical in the clone; they load from the repository by themselves |
| Plugin agents scenario-author / shader-reviewer / visual-debugger, chrome-devtools + threejs-devtools MCP | REQUIRES ACCOUNT RECONNECTION | the parallax-threejs 0.4.12 plugin was NOT enabled on this account; enable it, new session, live test (TOOLS_AND_PLUGINS_RESTORE.md section 0) |
| Spector MCP, Playwright | REQUIRES REINSTALLATION (automatic) | `Tools/cloud_env_setup.sh` (via `restore_session.sh`) builds Spector and the tool venvs; Playwright's Chromium is in the cloud image |
| Tripo key / Ludo | REQUIRES ACCOUNT RECONNECTION | network secret for openapi.tripo3d.ai in the next environment; never in Git |
| Lanes | BACKED UP AND VERIFIED | all 5 lane branches on GitHub after `lanes.sh save` (VERIFIED pushes): arch56 b8ca82a6, s56 50f77c6a, washer34 605b8951, girl12 8b2fa7e9, ui be6a5681; arch56 + s56 build; next steps in PARALLEL_LANES.md |
| Rollback branches | BACKED UP AND VERIFIED | rollback-before-s56-default, rollback-before-tripo3-default, account-switch-e1nndb, account-transfer-52t7ym on GitHub |
| Secrets | VERIFIED CLEAN | pattern scan (Tripo tsk_, GitHub ghp_/gho_/github_pat_, sk-ant-/sk-, AWS, Slack, Google, private keys) over every tracked file of kc4ecl and all 5 lane branches: 0 matches; `.env.example` holds placeholders only |
| Autosave | WORKING in this session; RESTARTS by itself on the next account | exactly 1 process; every round `github=VERIFIED`; the SessionStart hook starts ONE on the next session (check: `ps -eo pid,etime,args \| grep '[a]utosave.sh'`) |
| Previews evidence (6,367 files) | BACKED UP, not re-downloaded in the clone test | present in the clone's tree listing (names only, to save disk: a full download did not fit the 7.7 GB free) |

## Earlier: verified backup of 9 November 2026 ~13:15 UTC, session f28099bc (account transfer)
| Item | Result |
|---|---|
| Repository / branch | `josiahscalia5-dev/bubblegame`, `claude/bubble-wash-account-transfer-52t7ym` (= this session's `claude/bubble-wash-restore-transfer-kc4ecl`) |
| Verified commit | `04f2b8161a218528981f3d81045ac6d9227c0d5b`: local HEAD = GitHub head of both branches (`git ls-remote`); later autosave commits only add to it |
| Contains | checkpoint `b4eb9e1f`, all four rollback branches (`...-before-s56-default`, `...-before-s56-lanes`, `...-before-tripo3-default`, `...-account-switch-e1nndb`) and every 9 November ccr-* / six2-lane branch (`git merge-base --is-ancestor`) |
| Specialist lanes | `claude/lane-s56-tunnel-ac4e3449`, `claude/lane-ui-hud-ac4e3449`, `claude/lane-s34-washer-ac4e3449`, `claude/lane-s12-girl-room-ac4e3449`: local = GitHub (`bash Tools/lanes.sh status`), pushed every 5 minutes |
| Clean-clone test | fresh `git clone --depth 1 --filter=blob:none --sparse` of the branch (WebDemo, Tools, .claude, both 9 November reference packs): HEAD `04f2b816`; `npm ci` + `node build.mjs` = byte-identical bundle; `Tools/check_models.cjs` 40 GLB, 0 failed; 5 agents + skill + `.mcp.json`; 6 approved references; scripts parse; no broken symlinks |
| Git LFS / large files | no LFS files, no file over 50 MB: every GLB / PNG is a real binary |
| Secrets | pattern scan of every tracked file (Tripo `tsk_`, GitHub `ghp_` / `gho_` / `github_pat_`, `sk-`, AWS, private keys): 0 matches |
| Autosave | 1 process, every round `github=VERIFIED`; `save_now.sh` skips a round during a merge / cherry-pick / rebase or while `index.lock` exists |
| Tripo | 0 credits spent (balance 1,060) |


**NEWEST (9 November 2026 ~02:45 UTC, session 6ddc157f, new account): THE ACTIVE GAME CHANGED.** The user selected the six-scene game with their
new Tripo models ("tripo3 final", the "second row") as THE game: a plain launch of `WebDemo/index.html` (no `?s3=`) now runs
`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3` (bundle `45f21c4a`, stamped `game.bundle.js?v=45f21c4a`). New models in it:
girl_v2_rigged, washer_tripo_hj748, door_tripo_oit748_gold, gear_v2_tripo, housing_tripo_821 (`WebDemo/src/opening_tripo3.js`). Opt-in for the
user's review: `sock3`, `coin3`, `enemy3`, `basket3`, `doorpink`. Evidence: `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/` (plain-launch
frames vs the user's second-row pack, the continuous video) and `06_tripo_new_models_6ddc157f/` (all 12 models). Rollback branch:
`claude/bubble-wash-rollback-before-tripo3-default` (`33bf67ba`). Environment: `ENVIRONMENT_VERIFICATION_2026-11-09_session_6ddc157f.md`; every session
runs `Tools/session_preflight.sh` (SessionStart hook) and follows CLAUDE.md "READ FIRST". Do not redesign this version; do not revert to the first row.


| Item | Result | Evidence |
|---|---|---|
| REPOSITORY | https://github.com/josiahscalia5-dev/bubblegame | |
| WORKING BRANCH | `claude/bubble-wash-account-transfer-52t7ym` | contains all of `claude/bubble-wash-account-switch-e1nndb` (ancestor check) |
| CODE CHECKPOINT (six-scene first build) | `27eae34988f969908cbdef775820343243c1bdec` | `save_now.sh`: Push VERIFIED (git ls-remote) |
| BACKUP COMMIT (docs, references, captures) | `e51f5029e2649268bd17ae1c3fe250bea8d2394f` | `save_now.sh`: Push VERIFIED; `git fetch` + `git cat-file -e` of 35 required files in GitHub's copy: 0 missing |
| ROLLBACK CHECKPOINT (last playable build before the six-scene work) | `claude/bubble-wash-account-switch-e1nndb` at `0aa216213188b...` (`0aa21621`) | pushed and verified earlier this session |
| Later commits | the 5-minute autosave keeps adding chat-history / WIP commits on the working branch; `git ls-remote origin claude/bubble-wash-account-transfer-52t7ym` gives the head | `~/.bubblewash-autosave/save_history.log` (`github=VERIFIED` every round) |
| On GitHub (checked in GitHub's copy) | the seven handoff documents (this one in the next save), `CLAUDE.md`, `.mcp.json`, `.claude/` (5 agents, skill, hook, settings), the `Tools/` setup / save / verify scripts, `WebDemo/` sources + bundle + package manifests, 29 GLBs in `WebDemo/models/`, the user's 6 Tripo GLBs + `rig/rig_girl.py`, 20 six-scene reference files, the six-scene captures | `git ls-tree` / `git cat-file` on `origin/claude/bubble-wash-account-transfer-52t7ym` |
| Git LFS | not used (0 LFS files; no file over 50 MB): every GLB / PNG is a real binary in Git (`girl_rigged.glb` starts with `glTF` in GitHub's copy) | `git lfs ls-files` = 0 |
| node_modules | not committed on purpose (`npm ci` from `WebDemo/package-lock.json`) | |
| Secrets | none in the repository (keys only as the environment's network secret) | `Tools/preservation_audit.sh` checks credential patterns |
| AUTOSAVE | WORKING: one `Tools/autosave.sh` process, pinned to the working branch (`BW_AUTOSAVE_BRANCH`), every round `github=VERIFIED`; restarted by the SessionStart hook in a new session; this session registered in `Tools/autosave_sessions.json`. The backup does not depend on this session: everything above is on GitHub | `ps`, `/proc/<pid>/environ`, save history |
| RESTORE TEST (clean clone) | see below | |

## Clean-clone restore test
A fresh `git clone --depth 1 -b claude/bubble-wash-account-transfer-52t7ym` from GitHub into an empty folder (code checkpoint `27eae349`), then the
model files' magic bytes, `npm ci`, `node build.mjs` and a comparison of the rebuilt bundle with the committed one.
**RESTORE TEST: PASS** (8 Nov ~00:10 UTC). A FULL clone of this repository (about 6 GB: the evidence images) exceeded the cloud session's disk
allowance (the first attempt filled it and was deleted), so the test used a fresh BLOBLESS SPARSE clone from GitHub (`git clone --filter=blob:none
--depth 1 -b claude/bubble-wash-account-transfer-52t7ym` + `git sparse-checkout set WebDemo .claude Tools Design/TripoDeliveries/2026-11-08_Six_Assets_from_user
Design/ReferencePacks/Six_Scene_New_Direction`): clone head `d2a2ff194ea8df26547ce636df6a65cec3a02e54` in 6 s, 119 MB checked out; all seven handoff
documents, `CLAUDE.md`, `.mcp.json` and the five agents present; every GLB checked starts with `glTF` (real binaries); 20 six-scene references;
`npm ci` exit 0; `node build.mjs` exit 0; **the rebuilt bundle is IDENTICAL to the committed one** (`76581f46`).
Tip for the next account: the cloud session clones the repository itself; for a manual second copy use the same blobless sparse clone.
