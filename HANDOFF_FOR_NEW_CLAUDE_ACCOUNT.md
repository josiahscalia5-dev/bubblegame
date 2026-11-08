# Bubble Wash Kingdom: handoff for a new Claude account (READ THIS FIRST: section 0000 is the newest, 8 November about 14:50 UTC; then 000)

Written 7 November 2026, about 23:10 UTC, by session `398ed88c`, at the user's handoff order
(`Design/ReferencePacks/2026-11-07_Full_Screen4_Brief_from_user/User_GitHub_Handoff_Order.md`). Nothing in this file is a
secret. It supersedes the older handoff files for the CURRENT state; they stay as history (`BUBBLE_WASH_ACCOUNT_HANDOFF.md`,
`CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md`, `START_HERE_NEW_CLAUDE_ACCOUNT.md`, `HANDOFF.md`). The project rules are `CLAUDE.md`.

## 0000. NEWEST STATE (8 November 2026, about 14:50 UTC, session `57091b57`): READ THIS FIRST, then section 000

Session link: https://claude.ai/code/session_013kxR3NgrYJJC9HLHZ7n41J. Nothing here is a secret.

### 0000.1 Branches (TWO sessions were live at once)
| Branch | Session | State at 14:50 UTC |
|---|---|---|
| **`ccr-b67aeffb-d94mmq`** | `57091b57` (this one; the harness gave it this branch) | contains ALL of `ccr-50c66592-kcnqoy` up to `fc57eba2` (normal merge `24ca897b`); plus the save-system fixes, the Tripo authorization in every instruction, `tripo1`. Head: `git ls-remote origin ccr-b67aeffb-d94mmq` |
| `ccr-50c66592-kcnqoy` | `b0abcf95` | STILL LIVE at 14:18 UTC (autosave `fc57eba2` at 14:17:45: Level 1 route frames from its running jobs). Never written by `57091b57` |
| `claude/bubble-wash-kingdom-continue-z9nmm1` (PR #3, draft) / `ccr-76d4bc77-rqhl8o` | `8140e507` / `dbccb9a3` | contained in both branches above; PR #3 untouched, not merged |

**To continue:** `git fetch origin ccr-b67aeffb-d94mmq ccr-50c66592-kcnqoy`; if one contains the other (`git merge-base --is-ancestor`),
continue from the newer; otherwise merge both into your own branch with normal merges (expected overlap: `game.js` near `buildLevel1`
(keep both sides), `CLAUDE.md` / handoffs (keep both sections), `game.bundle.js` (REBUILD with `node build.mjs`, never hand-merge)).

### 0000.2 The save system: verified in session `57091b57` (real evidence, not assumed)
- The SessionStart hook started the 5-minute autosave by itself when this NEW session opened (14:18 UTC, its first save `88201e87`,
  `github=VERIFIED`). Tested by hand too: a first hook call started exactly one autosave, a second started none (no duplicates).
- Strengthened: the autosave is pinned to the branch checked out at its start (`BW_AUTOSAVE_BRANCH`, set by the hook); it reports each
  round whether the parent branch (`ccr-50c66592-kcnqoy`, from `Tools/autosave_sessions.json`) has commits not merged yet, and never
  merges it by itself (a merge would change files under a running build or recording); `Tools/save_guard.py` also holds back any file
  over 95 MB (GitHub refuses 100 MB, and one such file would stop every later push). Guard tested: a fake key, a file written seconds
  ago and a 97 MB file held back; the proxy placeholder and an old image passed.
- **SAVE NOW (tested, `9314182b` and `7eefa537`, both `Push: VERIFIED`):** `bash Tools/save_now.sh "Save before account switch"`.
  It saves the CHECKED-OUT branch only (check `git branch --show-current` first).
- Audit of GitHub's copy (`bash Tools/preservation_audit.sh ccr-b67aeffb-d94mmq`, 14:37 UTC): 57 present, 0 missing; the five agents
  byte-identical, the six Tripo GLBs sha256 = manifest, the original Screen 4 sha256 `b30dc6a1794213be`, the 12-screen board, the girl art,
  the FRESH pack's ten crops; no file over 50 MB; no key or token pattern. Cross-checked with the GitHub API (branch head, the agents,
  `WebDemo/models/`).
- NOT YET VERIFIED: the hook after a container is reclaimed and the session RESUMES (it is written for it; not observed); the autosave
  runs only while this container runs.

### 0000.3 Tripo (verified 14:24 and 14:40 UTC)
- Connected through the network secret for `openapi.tripo3d.ai` (`TRIPO_API_KEY=tsk_proxy-injected`); `tripo doctor` all OK.
- Balance: 640 -> 400 after this session's two jobs (240) -> **1,300 at 14:40 UTC** (the user's purchase: +900 on the API balance).
- **The user's standing authorization** (`CLAUDE.md`, Safety; confirmed by the user about 14:55 UTC) now stands in every active
  instruction (CLAUDE.md, the skill, all five agents, the handoffs, DEV_TOOLS.md, the save checklist): available credits, no per-job
  approval; never buy credits, top up or change the subscription. **ONE lead session submits paid jobs**, always with
  `bash Tools/tripo_job.sh <name> make ...` (checks Tripo's account-wide history so two sessions or accounts never spend at once; dry
  run; logs to `Design/TripoDeliveries/TRIPO_JOBS_LOG.md`). Agents recommend jobs, never submit them.
- **The repository's DEFAULT branch is `claude/new-session-oth0dd` (2 November, no `CLAUDE.md`).** A session started on it sees none of
  this: start the other account's session on `ccr-b67aeffb-d94mmq` (or the newest branch in 0000.1), or paste 0000.7 as its first message.
- Jobs: the grime ball (board panel 09): SUCCESS, in `tripo1` (`72_tripo1_enemy/README.md`); the castle (board panel 02): REJECTED (a
  flat card; the board's castle has no clean silhouette at 1536 x 1024; a clean, larger castle view is needed first).
- Asset decisions so far (`Design/TripoDeliveries/2026-11-08_session_57091b57_Level1_assets/README.md`): `sock.glb` KEEP (matches the
  board's socks); board 05's wall brushes = the game's own wheel brush (`machinery.glb`, "big blue wheel with pink, white and blue
  bristles") placed large on Level 1's walls (code, no credits); the opening's basket = the user's Tripo basket recoloured to the approved
  art's violet, with the user's Tripo towels (colours already match): no new job needed; done as `tripo2`. The brushes are not done yet.

### 0000.4 Plugin, MCP and tools in session `57091b57` (checked live)
- parallax-threejs 0.4.12 enabled on this account: threejs-devtools 0.2.1 answers (no page attached), playwright-mcp 0.0.78 and
  chrome-devtools 1.6.0 connected; **spector FAILS** (the plugin ships without `vendor/spector`); the plugin's agents declare unprefixed
  MCP tool names (its defect); Deno not installed (checkpoint, diff, sweep, replay, export-report, ship-check, init need it; memcheck does not).
- Installed and working: Blender 5.2.3, Tripo CLI 0.11.2, glTF Transform 4.5.1, glTF Validator 2.0.0-dev.3.10, Vite 8.3.5, three 0.170.0,
  Playwright 1.63.0 (preinstalled Chromium), PyTorch 2.15, LPIPS, Optuna 5.0, scikit-image 0.26, OpenCV 5.0, Git LFS 3.4.1 (not needed).

### 0000.5 What lives where
| | |
|---|---|
| SAVED ON GITHUB | everything in 000.4 below plus: `tripo1` (source, bundle `aa85e7ac`, model), the Tripo deliveries with inputs and checksums, `WebDemo/tools/tripo/`, evidence `72_tripo1_enemy/` |
| RESTORABLE FROM GITHUB | the tools (`bash Tools/cloud_env_setup.sh`, `cd WebDemo && npm ci`), the autosave (the hook, or the command in `CLAUDE.md`) |
| INSTALLED AND VERIFIED IN THIS SESSION ONLY | the running autosave process, the tool installs in `~/.bubblewash-tools`, rembg (scratch, for cut-outs), scratch build copies |
| MUST BE RECONNECTED ON THE OTHER ACCOUNT | the parallax-threejs plugin (enable, new session), the Tripo network secret, the cloud environment (hosts incl. `openapi-dl.data.tripo3d.com`, setup script), Deno if wanted |

### 0000.6 Next (in the user's order: Home, Laundry Toss, Screen 4, Level 1)
1. DONE as `tripo2` (opt-in, waiting for the user): the user's Tripo basket (the art's violet) and towels in the toss
   (`73_tripo2_opening_basket_towels/README.md`). Remaining in the opening: the basket bigger and higher as in the art, the flight's
   diagonal, the flying socks (placement / animation in `opening3d.js`).
2. Level 1 board 05: the wheel brushes large on the walls; board 07: the enemy higher and larger (in `level1.js`: coordinate with `b0abcf95`).
3. The castle: a clean castle reference, then one Tripo job; finale2 (session `b0abcf95`) places it.
4. A full phone recording only after these.

### 0000.7 First message for the other account (copy and paste)
> Continue my Bubble Wash Kingdom game: repository josiahscalia5-dev/bubblegame. Read `CLAUDE.md` and section 0000 of
> `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md`. Fetch `ccr-b67aeffb-d94mmq` and `ccr-50c66592-kcnqoy`; continue from the one that contains the other,
> else merge both into your own branch with normal merges (rebuild the bundle); never force-push, reset, or merge PR #3 or an unapproved
> candidate. Run `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing, `source Tools/bw_tools_env.sh`, `cd WebDemo && npm ci`,
> `bash Tools/verify_restore.sh --build`, `bash Tools/preservation_audit.sh`; check one autosave process runs; ToolSearch `mcp__plugin_parallax-threejs`;
> `TRIPO_API_KEY=tsk_proxy-injected tripo balance`. Use my available Tripo credits under my standing authorization, one lead session at a
> time, every paid job through `bash Tools/tripo_job.sh` (never buy credits). Report what works and what I must reconnect, then continue 0000.6.

## 000. (8 November 2026, about 13:30 UTC, session `b0abcf95`, the user's other account): the state before section 0000

Section 00 below (11:20 UTC, session `8140e507`) is history; where they differ, THIS section is right. Session link:
https://claude.ai/code/session_01CUAtW8wdgwPxistiKwJw7V. Nothing here is a secret.

### 000.1 Where everything is
| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| **Continue on** | **`ccr-50c66592-kcnqoy`** (session `b0abcf95`): it contains ALL of `claude/bubble-wash-kingdom-continue-z9nmm1` (normal merges; that branch kept receiving proof logs from session `8140e507`'s container, merge its newest first) and of `ccr-76d4bc77-rqhl8o` (proven an ancestor after deepening the shallow clone). Never force-push. |
| Its head | moves with the 5-minute autosave: `git ls-remote origin ccr-50c66592-kcnqoy`. The final commit of session `b0abcf95` is named in `Previews/WebDemo/screen4_round9_match/71_level1_flow/README.md`. |
| Review route | pull request #3 (draft, from `claude/bubble-wash-kingdom-continue-z9nmm1`) is NOT merged and was not touched. This branch is not in a pull request yet (the user did not ask for one). |
| File ownership | `SESSION_FILE_RESERVATIONS.md` (12:50 UTC update): this session edited `level1.js`, `game.js` (gated hooks), `world.js` (`HOOK`), new `level1_flow.js`. |

### 000.2 What is new: `flow`, the 10-beat Level 1 (NOT accepted; waiting for the user)
- Full app: `index.html?s3=intunnel,structmatch,home,level1` (flow is on by default with level1; `,noflow` = the previous level1 exactly).
- In the board's order: Let's go (washer entry) -> rescue 5 socks -> **a REAL raised side path** (bounce pad in the left lane, swipe left in
  the air onto a golden-rimmed water flume 0.9 m up; it has its own sock, gem and coins; it ends in the main water; from the water you
  cannot get on: "Jump first!") -> **a REAL lower path** (the drop: the middle lane falls 1.2 m down a chute into a lower channel between
  gold-railed water walls, the side lanes stay up on ledges with their own soap bar and sock; from the lower path you cannot climb back;
  the routes rejoin) -> spinning brushes -> treasure -> grime balls (some patrol across lanes; a tap-spin, Turbo or Blast pops them for
  5 coins, else they knock her) -> the Bubble Kingdom chamber -> rescue progress (4/5, 5/5 banners) -> Level Complete (goals: 5 socks,
  50 coins, 1 special gem; rewards +300 coins, +10 gems, +5 socks added to the totals).
- Exactly 5 socks on ANY route (2 drum socks; the drum's 3 far socks are parked, not removed; one per route of each branch; the Kingdom's).
- Evidence, proofs, recordings, specialists' reports: `Previews/WebDemo/screen4_round9_match/71_level1_flow/README.md`.

### 000.3 Agents, plugin, tools in session `b0abcf95` (all checked live; details in that README)
- Five project agents: all invoked with real tasks in parallel (reports in `71_level1_flow/agents/`); screen4-water-motion-engineer used
  the threejs-devtools and chrome-devtools MCP tools live (partial: the shared page hung under the 4-core load).
- parallax-threejs: threejs-devtools, chrome-devtools, playwright MCP WORK in the main session; spector FAILS to connect; the plugin's own
  agents still get no MCP tools (only Bash: its tool-naming defect); checkpoint / diff / sweep need Deno (not installed).
- `verify_restore.sh --build`: 28 passed, 0 failed. Tripo: authenticated through the proxy, 640 credits, nothing spent. Blender 5.2.3.

### 000.4 Preservation: what is where (audited against GitHub's copy, 8 November 13:28 UTC; re-run `bash Tools/preservation_audit.sh`)
| | |
|---|---|
| SAVED ON GITHUB (branch `ccr-50c66592-kcnqoy`) | the game (`WebDemo/` sources, bundle, models), the five design agents (byte-identical), the skill, the SessionStart hook and settings, all setup / save / verify scripts, the handoffs, the six Tripo GLBs (sha256 = manifest), `girl_rigged.glb`, the original Screen 4 (sha256 `b30dc6a1794213be`), the 12-screen board, the girl reference, the FRESH pack's ten original crops, all evidence and chat histories. 57 of 57 checked items present; no file over 50 MB (largest 28 MB: Git LFS not needed); no credential pattern anywhere |
| RESTORABLE FROM GITHUB | the tools: `bash Tools/cloud_env_setup.sh` (Blender, Tripo CLI 0.11.2, glTF Transform, glTF Validator, Vite, OpenCV, scikit-image, PyTorch, LPIPS, Optuna into `~/.bubblewash-tools`); `cd WebDemo && npm ci` (three.js 0.170, esbuild, Playwright 1.63 uses the preinstalled Chromium); then `bash Tools/verify_restore.sh --build` |
| MUST BE RECONNECTED ON THE OTHER ACCOUNT | the parallax-threejs 0.4.12 plugin (enable it, start a NEW session: `Tools/PLUGIN_AND_MCP_RESTORE.md`); the Tripo key as a network secret for `openapi.tripo3d.ai` (never in Git; check free with `TRIPO_API_KEY=tsk_proxy-injected tripo balance`); the cloud environment's network hosts and setup script (00.4 below); Deno only if the plugin's checkpoint / diff / sweep are wanted |
| NEVER TRANSFERS | running processes (the autosave, recordings, browsers, agents): they live in one container and stop when it is reclaimed; scratchpad files (raw frames, frozen build copies); account-level plugin installs and secrets |

**The save system (verified in session `b0abcf95`).**
- The 5-minute autosave: `Tools/autosave.sh` (one process, started by the SessionStart hook if none runs; never on `main`, `master` or a
  detached head). Each round exports the chat history and the agents' transcripts, then runs `Tools/save_now.sh`. Since 13:26 UTC it is
  pinned to the branch it started on (`BW_AUTOSAVE_BRANCH`, else the checked-out branch), so a switched working copy is never saved.
  Log: `~/.bubblewash-autosave/autosave_<session>.log`; one line per round in `~/.bubblewash-autosave/save_history.log`
  (time, branch, commit, `github=VERIFIED`); the durable record is GitHub's commit list.
- `Tools/save_now.sh "<message>"` (the SAVE NOW command; tested 13:26 UTC): commits all changes on the checked-out branch, holds back
  any file with a key / token pattern and any media file written in the last 30 s (`Tools/save_guard.py`; tested with a fake key and a
  fresh video: both held back, the rest saved), skips during a merge / rebase / another git command, pushes with retries, merges a
  newer remote with a normal merge (never force), and checks GitHub's head with `git ls-remote`: `Push: VERIFIED, GitHub's <branch> is at <commit>`.
  With nothing changed it makes no commit and still verifies.
- Limits: it runs only while this container runs. When the session ends, pauses or the container is reclaimed, saving stops until
  a session on this branch starts again (the hook restarts it). The hook's automatic start on the OTHER account is NOT YET VERIFIED
  there (it did start the autosave at this session's start).

### 000.5 Running and unfinished at 13:30 UTC (session `b0abcf95`)
- RUNNING on the frozen final build `8363541c`: the full phone recording (girl to Level Complete), the identity proofs again, the cost
  probes, the alternative-route clip, the frames of both routes. When done: the 10-row acceptance matrix against the FRESH pack's crops,
  the Screen 4 side by side, `71_level1_flow/README.md` completed. If this session ended before that, rerun
  `Previews/WebDemo/screen4_round9_match/71_level1_flow/scripts/identity.sh` and `after_identity.sh`, and
  `WebDemo/tools/level1/record_flow.cjs` (headers explain).
- NOT STARTED (the user's next priorities, after the evidence): the Bubble Kingdom arrival seen close (castle towers inside the wet
  chamber), the remaining lilac crown at the top centre, the brushes' look, the hoops, her shell fur's cost.
- Unapproved candidates, never on by default without the user: `structmatch` (default in the full app), `level1` (`wet`, `port`, `flow`),
  `match6` (opt-in only).

### 000.6 First message for the other account (copy and paste)
> Continue my Bubble Wash Kingdom game: repository josiahscalia5-dev/bubblegame. Check the remote heads first; continue from branch
> `ccr-50c66592-kcnqoy` (it contains all of `claude/bubble-wash-kingdom-continue-z9nmm1` and `ccr-76d4bc77-rqhl8o`); if this session has its own
> branch, merge `origin/ccr-50c66592-kcnqoy` into it with a normal merge first; never force-push, reset or merge an unapproved candidate or PR #3.
> Read `CLAUDE.md` and section 000 of `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md`. Run `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing,
> `source Tools/bw_tools_env.sh`, `cd WebDemo && npm ci`, `bash Tools/verify_restore.sh --build`, `bash Tools/preservation_audit.sh`; check one
> autosave process runs; ToolSearch `mcp__plugin_parallax-threejs` (`Tools/PLUGIN_AND_MCP_RESTORE.md`); `TRIPO_API_KEY=tsk_proxy-injected tripo balance`.
> Report what works and what I must reconnect, then continue section 000.5. Use my available Tripo credits for game assets without asking per job (my standing authorization of 8 November); never buy credits.

## 00. NEWEST STATE (8 November 2026, about 11:20 UTC, session `8140e507`): history since section 000

Section 0 below (02:00 UTC, session `dbccb9a3`) and sections 1-8 are history; where they differ, THIS section is right.
Session link: https://claude.ai/code/session_019Rgj5g6rGF39SnNVz1TmuP. Nothing here is a secret.

### 00.1 Where everything is
| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| **Continue on** | **`claude/bubble-wash-kingdom-continue-z9nmm1`** (session `8140e507`): it contains ALL of `ccr-76d4bc77-rqhl8o` (merged with normal merges) plus everything below. A new cloud session gets its own branch: merge `origin/claude/bubble-wash-kingdom-continue-z9nmm1` into it with a normal merge first (and `origin/ccr-76d4bc77-rqhl8o`, already contained). Never force-push. |
| Its head | moves with the 5-minute autosave; read it with `git ls-remote origin claude/bubble-wash-kingdom-continue-z9nmm1`. At this writing: `05a3461bd903397db14687fde7cd34e0ead27b47` (11:18 UTC, verified on GitHub). |
| The candidate build | commit `6b5d46fd` (bundle `a62848a060079f447f2c86173aae2d97`): level1 `wet` + `port`, match6 opt-in |
| `ccr-76d4bc77-rqhl8o` | `7e5dd685cc541be0ea614d0ca0dd9dd0ccd7a77c` (the old session `dbccb9a3`, idle since 02:56 UTC; its last code commit `890167c`, the Tripo girl rigged and the course culled; bundle `92bd9272`). Not written by session `8140e507`. |
| Review route | **pull request #3** (draft): https://github.com/josiahscalia5-dev/bubblegame/pull/3, from `claude/bubble-wash-kingdom-continue-z9nmm1` into `ccr-76d4bc77-rqhl8o`; nothing is merged into `ccr-76d4bc77-rqhl8o` without the user's approval |
| File ownership | `SESSION_FILE_RESERVATIONS.md`: since 10:40 UTC session `8140e507` owns `level1.js`, `opening3d.js` and the tunnel files |
| Git LFS | not used; the largest tracked file is 29 MB (a video); GitHub's limit is 100 MB |
| Ignored on purpose | `WebDemo/node_modules/` (`npm ci`), `WebDemo/artifact-models/` (made by the build) |

### 00.2 The game and what waits for the user (all real three.js gameplay)
- Accepted: `?s3=intunnel` (proven 0 px against `ccr`'s build). Candidate: `?s3=intunnel,structmatch` (the match5 look; 0 px against `ccr`).
- **Full app, waiting for the user: `index.html?s3=intunnel,structmatch,home,level1`**: Home and the Laundry Toss with the rigged Tripo
  girl (live 3D, 17 bones, blinks, basket, toss, wave), the mascot carried through the open porthole, the camera into the tunnel, Tap to
  Start, then Level 1 (drum, brushes, treasure run, soap-bar jumps, the drop, grime balls, the golden gate) and, NEW (`wet`, on by
  default; `,nowet` = before): the drum widens into one wet washer chamber, continuous deep-blue water to its walls, the castle framed by a
  glowing portal in its end wall, Level Complete on the water in the chamber. The hand-off out of the Screen 4 drum no longer hides her.
  NEW (`port`; `,noport` = before): the porthole shows the blue spiral, not a white foam mass. Evidence:
  `Previews/WebDemo/screen4_round9_match/70_level1_wet/README.md`; branch check of `ccr`: `Previews/WebDemo/ccr_branch_verification_2026-11-08/`.
- **Candidate, NOT merged into the default look (the user's order): `,match6`** (her rear silhouette: round dome, pom-pom side nubs,
  radiating strands; `69_match6/README.md`). Opt in: `?s3=intunnel,structmatch,match6`.
- The six Tripo models (`Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/`, sha256 in its manifest, verified 8 November 11:17
  UTC): the girl is rigged and in the opening; the pink creature is REJECTED as her replacement (the user, 02:35 UTC); the washer is not
  used until its porthole is cut open (the user); basket, sock and towels wait for KEEP / REJECT / REWORK. Nothing spent (640 credits).
- **Next major task: the user's 10-beat Level 1 gameplay mandate** (`Design/ReferencePacks/2026-11-08_Level1_Gameplay_Flow_and_Account_Transfer_from_user/`):
  FUNCTIONAL jump to upper side paths and drop to lower paths (branching wet routes that rejoin), brushes, collectibles, patrolling
  enemies, the watery kingdom, the final sock, Level Complete; one continuous phone recording plus each branch. Today the course is ONE
  path: soap bars to jump, a drop that is a slope on the same path, brushes and grime balls that knock her, coins / gems / socks, the
  wet chamber and Level Complete. Branching routes are NOT built yet.

### 00.3 Never replace
The ORIGINAL approved Screen 4 (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`, sha256
`b30dc6a1794213be...`), the approved Screen 3, the girl art (`.../2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg`), the
12-screen board (`Design/ApprovedScreens/00_ORIGINAL_COMPLETE_12_SCREEN_BOARD.jpg`), the six Tripo GLBs, `WebDemo/models/opening/girl_rigged.glb`,
the accepted `?s3=intunnel` (prove 0 px for every change). Unapproved candidates: `structmatch`, `match6`, `level1` (with `wet`, `port`).

### 00.4 Agents, plugin, tools: what travels and what to restore (tested in session `8140e507`; details `RESTORATION_REPORT_2026-11-08_session_8140e507.md`)
- In GitHub and loaded automatically on this branch: the five agents (`.claude/agents/`), the skill `bubble-wash-screen-matcher`,
  `CLAUDE.md`, `.claude/settings.json` + `.claude/hooks/session-start.sh` (restarts the autosave), `.mcp.json` (empty on purpose).
- **parallax-threejs 0.4.12 is per ACCOUNT, not in Git.** On claude.ai (the account in use) enable it from the Anthropic Directory, then
  start a NEW cloud session (plugins load at session start). Check: ToolSearch `mcp__plugin_parallax-threejs`. On the account of session
  `8140e507` it loaded: threejs-devtools, chrome-devtools and playwright-mcp WORK (threejs-devtools' scene pick lands on the post pass:
  set `window.__THREE_SCENE__` / `__THREE_CAMERA__` / `__THREE_RENDERER__` at runtime; use a 412 x 915 page); **spector does not**
  (the plugin ships without its server file); its agents scenario-author / shader-reviewer / visual-debugger run but get no MCP tools
  (their tool names lack the `plugin_parallax-threejs_` prefix: a plugin defect); `memcheck` works; `checkpoint` / `diff` / `sweep` /
  `replay` / `export-report` need Deno + `/parallax-threejs:init` (asks the user first; not done).
- Tools: `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing, then `source Tools/bw_tools_env.sh` in every shell;
  `cd WebDemo && npm ci && node build.mjs`; `bash Tools/verify_restore.sh --build` (28 passed, 0 failed on 8 November).
- Cloud environment (per account): a personal environment `bubblegame` with limited network, package registries + MCP servers
  allowed, hosts `download.blender.org`, `download.pytorch.org` (+ `openapi-dl.data.tripo3d.com` before a paid Tripo download,
  `dl.google.com` only for the Android SDK); setup script `if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed"; fi`.
- **Tripo key: NEVER in Git.** On a new account/environment ask Claude to open the secure credential form for host
  `openapi.tripo3d.ai` (Authorization: Bearer, the user's `tsk_...` key), or add it in the environment's settings, Network secrets.
  Run `tripo` with `TRIPO_API_KEY=tsk_proxy-injected` (a placeholder the proxy replaces). Free checks: `tripo doctor`, `tripo balance`.
  Every paid job needs the user's yes with the job and its cost.

### 00.5 Saving: the autosave and save-now (and their limit)
- The 5-minute autosave (`Tools/autosave.sh`, started by the SessionStart hook, one process per session; names from
  `Tools/autosave_sessions.json`) commits the chat history, the agents' transcripts and all work in progress, pushes, and checks that
  GitHub has the commit (log: `~/.bubblewash-autosave/`). Check: `ps -eo pid,etime,cmd | grep '[a]utosave.sh'`.
- **Save now, before closing a session or switching accounts:** `bash Tools/save_now.sh "<what was done>"`: commits everything, pushes
  with retries and prints a save report whose "Push: VERIFIED" line names the commit GitHub really has (tested 8 November 11:18 UTC).
- **Limit:** the autosave runs only while the cloud session's container runs. When the session ends, is paused or the container is
  reclaimed, it stops (the hook restarts it when a session resumes on this branch). Work done after the last save exists only in that
  container until the next save. Not in Git by design: `node_modules`, `~/.bubblewash-tools` (rebuilt by the setup script), keys and
  network secrets, account plugins, scratch files in the session's scratchpad (recordings' raw frames; finished videos are committed).

### 00.6 First message for the other account (copy and paste)
> Continue my Bubble Wash Kingdom game: repository josiahscalia5-dev/bubblegame, branch `claude/bubble-wash-kingdom-continue-z9nmm1`
> (it contains all of `ccr-76d4bc77-rqhl8o`). If this session is given its own branch, merge `origin/claude/bubble-wash-kingdom-continue-z9nmm1`
> into it with a normal merge first; never force-push, reset or merge an unapproved candidate. Read `CLAUDE.md`, then section 00 of
> `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md`, and follow them. Do not rebuild or redesign anything. Run `bash Tools/cloud_env_setup.sh` if
> `~/.bubblewash-tools` is missing, `source Tools/bw_tools_env.sh`, `cd WebDemo && npm ci && node build.mjs`, `bash Tools/verify_restore.sh --build`;
> check the autosave runs (one process) and add this session to `Tools/autosave_sessions.json`. Verify, do not assume: ToolSearch
> `mcp__plugin_parallax-threejs` (if missing, tell me to enable parallax-threejs on this account and start a new session), a one-line ping of
> the five project agents, `tripo doctor` (free; if the key is missing, open the secure credential form for openapi.tripo3d.ai),
> `blender --version`. Report what works and what I must reconnect. Then continue: my verdicts are pending on `level1` (the wet chamber,
> `port`), `structmatch` and `match6` (opt-in, not merged); the next task is my 10-beat Level 1 gameplay mandate in
> `Design/ReferencePacks/2026-11-08_Level1_Gameplay_Flow_and_Account_Transfer_from_user/`. Use my available Tripo credits for game assets without asking per job (my standing authorization of 8 November); never buy credits.

## 0. CURRENT STATE AND RESTORATION MANUAL (8 November 2026, about 02:00 UTC, session `dbccb9a3`)

Sections 1-8 below are the 7 November handoff (kept as history); where they differ, section 00 above and then THIS section are right.

### 0.1 Where everything is
| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| **Development branch** | **`ccr-76d4bc77-rqhl8o`** (it carries all of `claude/bubble-wash-account-handoff-yhk8dy`, merged up to `2c72c2f`) |
| Verified commit | the commit that adds this section and every later one on that branch (`git log -1`; the session's final report names it) |
| Rollback checkpoints | `2be9200` (before the level1 / opening work), `15b3a66` (before the old account's last commits were merged), `3e5c5a3` (that merge), `7a5f7db` (the first 3 screens corrected) |
| Git LFS | NOT used; no tracked file is above 26 MB; everything is ordinary Git (the tree is 6.2 GB: clone with `--branch ccr-76d4bc77-rqhl8o --single-branch`, or a sparse clone, see 0.7) |
| Ignored on purpose | `WebDemo/node_modules/` (npm install), `WebDemo/artifact-models/` (made by the build); `WebDemo/package-lock.json` is tracked (force-added 8 November) |

### 0.2 The game and its progress
- Three.js r170 game in `WebDemo/` (esbuild): `cd WebDemo && npm ci && node build.mjs`; open `WebDemo/index.html` from any static server.
- Accepted Screen 4: `?s3=intunnel`. Candidate (waiting for the user): `?s3=intunnel,structmatch`. **Newest, waiting for the user:**
  `?s3=intunnel,structmatch,home,level1`: Home and Laundry Toss as a live 3D scene (`WebDemo/src/opening3d.js`: a code-built,
  jointed, animated girl, the basket, socks and towels flying, the pink character carried along a curve into the washer, one
  camera move through the door into the glowing tunnel, cross-fade into the live Tap to Start), then the whole of Level 1 without
  looping (`WebDemo/src/level1.js`, `track.js` COURSE) to Level Complete. Evidence: `Previews/WebDemo/screen4_round9_match/68_level1/`.
- Proven: the accepted `?s3=intunnel`, the candidate, the normal game, `noswim2`, `blend` 0 px against the build before this work;
  with `level1` Tap to Start 0 px; the seeded motion trace 0 differences (152 frames x 17 gameplay fields); `s3_func` / `r2_func`
  differ only where the run no longer loops.
- Open: the user's verdicts (candidate, level1); the girl's look (code-built, plainer than the art; see the six Tripo models);
  the course's draw calls at Tap to Start (322 against 211); the six Tripo models' rework (0.5); the parallax-threejs check (0.4).
- The continuous phone recording of the corrected sequence: `68_level1/videos/` if it finished in session `dbccb9a3`; else rerun
  `cd WebDemo && S3=intunnel,structmatch,home,level1 FPS=20 VW=412 VH=915 RUN=56 node tools/level1/record_full.cjs "$PWD" <frames dir>`
  (about an hour on software rendering), then `ffmpeg -framerate 20 -i <dir>/f%05d.jpg -c:v libx264 -pix_fmt yuv420p -crf 22 <out.mp4>`.

### 0.3 The visual authorities (in this order; never replace one with a newer generated image)
1. ORIGINAL approved Screen 3: `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/01_APPROVED_TARGETS/01_APPROVED_SCREEN_3_OPENING.jpg`.
2. ORIGINAL CLASSIC approved Screen 4 (the ONLY Screen 4 target): `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`
   (767 x 1536, sha256 starts `b30dc6a1794213be`).
3. The girl and Laundry Toss reference: `Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg` (+ the two phone previews for the UI).
4. The 12-screen Level 1 board: `Design/ApprovedScreens/00_ORIGINAL_COMPLETE_12_SCREEN_BOARD.jpg` (and its panels `01_...`-`12_...`);
   also `Design/ReferencePacks/2026-11-07_Animation_and_Movement_Mandate_from_user/Level1_12_screen_flow_board.jpg`.
5. Explanation and animation storyboards (guides, not targets): `Design/ReferencePacks/2026-11-08_Motion_Instructions_from_user/`,
   `..._2026-11-07_Animation_and_Movement_Mandate_from_user/` (the mandate and the user's phone recording).
6. The latest real gameplay captures: `Previews/WebDemo/screen4_round9_match/68_level1/` (sheets, `screens/`, proofs).
Requirements, in short: the same pink fluffy rear-view character, a full round fuchsia dome with long fine fur, sitting ON saturated
cobalt / cyan water, no white film or foam blanket; a circular glowing blue tunnel with depth; gold paw coins, smiling socks,
bubbles; the silver / lavender / purple / gold washer; the cartoon girl with curly brown hair, pink bow, lavender and purple
clothes; bright premium mobile-game polish; real 3D gameplay, never a static poster.

### 0.4 Agents, skills, commands, plugins, MCP (what travels and what does not)
| Item | Saved in GitHub | Transfers automatically | Manual step on a new account |
|---|---|---|---|
| Agents `game-art-director`, `gameplay-visual-testing`, `lighting-visual-matching`, `water-vfx-engineer`, `screen4-water-motion-engineer` (`.claude/agents/`) | yes (full files) | yes, in any session on this branch | none; `screen4-water-motion-engineer` also needs the plugin's 13 live-scene tools |
| Skill `bubble-wash-screen-matcher` (`.claude/skills/`) | yes | yes | none |
| Hook (`.claude/hooks/session-start.sh`, `.claude/settings.json`): restarts the 5-minute autosave | yes | yes (cloud sessions) | add the new session id to `Tools/autosave_sessions.json` |
| `.mcp.json` | yes (empty on purpose: the MCP servers come from the plugin) | yes | none |
| Custom slash commands (`.claude/commands/`) | none ever existed | - | - |
| **parallax-threejs 0.4.12** (Anthropic Directory, plugin id `plugin_01SJe4pCHfcPHj3rpJyyMMBf`, by Sean Corbett O'Donnell, MIT): MCP servers chrome-devtools-mcp, threejs-devtools-mcp, playwright-mcp, spector (spector failed on the old account too); agents scenario-author, shader-reviewer, visual-debugger; commands checkpoint, diff, export-report, init, memcheck, replay, ship-check, sweep, sync-view; skill qa-visual-test-harness | NO (account-level) | NO | on claude.ai (the account you will use), enable parallax-threejs from the Anthropic Directory; then start a NEW cloud session (plugins are copied in only when a session starts). Check with `ListPlugins` (must list it) and ToolSearch `mcp__plugin_parallax-threejs`. Session `dbccb9a3` could not verify it: its account catalog still read `"enabled": false` |
| GitHub connection | n/a | NO | connect GitHub on claude.ai; the Claude GitHub App must reach `josiahscalia5-dev/bubblegame` |
| Cloud environment `bubblegame` | its setup script is `Tools/cloud_env_setup.sh` | NO (per account) | create a personal environment `bubblegame`: limited network, package registries + MCP servers allowed, hosts `download.blender.org`, `download.pytorch.org`, `dl.google.com`, `openapi-dl.data.tripo3d.com`; setup script: `if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh \|\| echo "Bubble Wash setup: a step failed"; fi` |
| Tripo key | NEVER in Git | NO | in the environment's settings, Network secrets, host `openapi.tripo3d.ai`, Authorization: Bearer, the key (`tsk_...`); or ask Claude to open the secure form. Run `tripo` with `TRIPO_API_KEY=tsk_proxy-injected`; free check: `tripo balance` (640 credits on 8 November) |

### 0.5 Tools (installed by `bash Tools/cloud_env_setup.sh`; checked 8 November; then `source Tools/bw_tools_env.sh` in every shell)
Blender 5.2.3 LTS (download.blender.org, sha256-checked; headless Cycles and Eevee render), Tripo CLI 0.11.2, Node 22.23.4, Python
3.13, Playwright 1.63.0 with its Chromium (pre-installed in cloud sessions), glTF Transform 4.5.1, glTF Validator 2.0.0-dev.3.10,
Vite 8.3.5, OpenCV 5.0.0, scikit-image 0.26.0, NumPy 2.5.4, Pillow 13.0.0, SciPy 1.18.1, PyTorch 2.15.0, LPIPS (AlexNet weights),
Optuna 5.0.0; the game: three 0.170.0, esbuild 0.24.0 (pinned in `WebDemo/package.json` and `package-lock.json`).
Not installed until needed: Spector.js (`npm i spectorjs` in a scratch folder for `WebDemo/tools/screen4/spector_capture.cjs`);
Android SDK (command-line tools from dl.google.com, then `sdkmanager --sdk_root=$HOME/android-sdk "platforms;android-34" "build-tools;34.0.0"`;
build: `ANDROID_HOME=~/android-sdk bash Tools/android_apk/build_apk.sh <out.apk>`). Restore check: `bash Tools/verify_restore.sh --build`.

### 0.6 The user's six Tripo models (8 November)
`Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/`: the six GLBs unchanged (girl, pink creature, basket, sock, towels,
washer; sha256 in the manifest), the user's review and import prompt, and `inspection/README.md` (renders, statistics, the washer's
depth map, KEEP / REJECT / REWORK). None is in the game yet; nothing spent.

### 0.7 First message for the next account (copy and paste)
> Continue my Bubble Wash Kingdom game: repository josiahscalia5-dev/bubblegame, branch `ccr-76d4bc77-rqhl8o` (if this session
> is given its own branch, merge `ccr-76d4bc77-rqhl8o` into it with a normal merge first; never force-push). Read `CLAUDE.md`, then
> section 0 of `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md`, and follow them. Do not reset, redesign or rebuild anything. Run
> `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing, `source Tools/bw_tools_env.sh`, `cd WebDemo && npm ci && node build.mjs`,
> `bash Tools/verify_restore.sh --build`; check the autosave runs and add this session to `Tools/autosave_sessions.json`. Verify, do not
> assume: `ListPlugins` and the parallax-threejs tools (threejs-devtools `bridge_status` and a read-only `scene_tree` of
> `index.html?s3=intunnel,structmatch`), a one-line ping of each project agent and of scenario-author / shader-reviewer /
> visual-debugger, `tripo doctor` (free), `blender --version`. Report what works and what I must reconnect. Then continue from section
> 0.2: the level1 opening and course are waiting for my verdict; the six Tripo models wait for my KEEP / REJECT / REWORK decisions;
> use my available Tripo credits for game assets without asking per job (my standing authorization of 8 November); never buy credits.

## 1. Where the project is

| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame (remote `origin`) |
| **Working branch** | **`claude/bubble-wash-account-handoff-yhk8dy`** |
| Remote HEAD at handoff | see the final report of session `398ed88c` (the commit that adds this file, or a later autosave on the same branch) |
| Default branch (identification only, never push there) | `claude/new-session-oth0dd` |
| Other branches that matter | `claude/bubble-wash-transfer-tcgbof` (the previous account's transfer branch, fully merged here; that account may still autosave to it: never push to it); `ccr-10503be1-pnv5vq` (the older accepted line; pull request #2 from the transfer branch into it waits for the user: never merge without the user) |
| Git LFS / submodules | none; ordinary Git (the `.git` folder is about 4 GB: clone with `--branch <working branch> --single-branch`) |

**Rollback checkpoints on the working branch** (each later one is a superset; every flag below is reversible in the URL):
`8343381` (the old account's work merged, before any change here); `7bf5507` (candidate `structmatch` at bundle 452f9568);
`9566f7b` (+ swim3); `e7c7953` (+ match4); `22dae44` / its merge `8c338c5` (+ Screens 1-2, bundle 3fff8982).

## 2. What the game is and how to run it

- A plain JavaScript three.js r170 game in `WebDemo/` (esbuild). The Unity project in `Assets/` is an older line, not used.
- `cd WebDemo && npm install && node build.mjs` builds `game.bundle.js` (commit it with its source). Open
  `WebDemo/index.html` from any static server (for example `npx http-server WebDemo` or the test tools' own server).
- **Versions are URL switches** (`?s3=...`, comma separated). The ones that matter now:

| URL | What | Status |
|---|---|---|
| `index.html?s3=intunnel` | **the ACCEPTED Screen 4** (starts inside the blue tunnel; includes swim2) | the user's accepted baseline, unchanged (0 px) by everything below |
| `?s3=intunnel,structmatch` | **the current candidate**: her rounder magenta shape and shell fur, the swell's water in the original's deeper blues without white comma arcs, the swim rhythm, the original's banded washer rim on the tunnel's upper wall through the whole run, cobalt tunnel rings | waiting for the user's verdict |
| `?s3=intunnel,structmatch,nomatch5` / `,nomatch4` / `,noswim3` | the candidate one / two / three steps back (0 px against their own earlier bundles) | rollbacks |
| `?s3=intunnel,structmatch,home` (or `?s3=intunnel,home`) | **Screens 1-2** (Home, Laundry Toss) in front of the game, then the live Screen 4 | new, waiting for the user |
| no switch | the normal game | unchanged |

- Code of the candidate: `WebDemo/src/tunnel_s4_struct.js` (settings `STRUCT`, `HOUSING`, `SHELL_FUR`; parts `STRUCT_PARTS` in
  `WebDemo/src/tunnel_s4_bt.js`: `hero`, `swell`, `housing`, `swim3`, `match4`, `match5` (longer combed fur, `SHELL_FUR5`); opt-in `mounds`, `tunnel2`, `props2`, `hud2`).
  Screens 1-2: `WebDemo/src/screens12.js`, assets `WebDemo/ui/screens12/`.
- **Android preview APK:** `ANDROID_HOME=~/android-sdk bash Tools/android_apk/build_apk.sh <out.apk>` (start page
  `Tools/android_apk/start.html`). The SDK is NOT in the setup script; install it once per machine:
  download Google's command-line tools from `dl.google.com`, then
  `sdkmanager --sdk_root=$HOME/android-sdk "platforms;android-34" "build-tools;34.0.0"` (needs `dl.google.com` allowed).
  APKs are not committed (`*.apk` is ignored); the debug signing key lives in `~/.bubblewash-android/`.

## 3. The visual authorities (in order)

1. **The ORIGINAL approved Screen 4:** `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`
   (767 x 1536). The ONLY Screen 4 target. Crops of it the user made: `Design/ReferencePacks/2026-11-07_Water_Tunnel_and_Character_References_from_user/`,
   `..._Bubble_Wash_Mascot_Water_Focused_Correction_Pack/`, `..._Bubble_Wash_Screen4_Exact_Water_Size_3D_Spec_Pack/` (with the
   user's screen-space measurements and suggested 3D starting dimensions).
2. **The ACCEPTED Tap to Start** (`?s3=intunnel`): the foundation to keep (`Design/ReferencePacks/2026-11-07_Final_Screen4_Reference_Pack_from_user/`).
3. **Screens 1-2:** the user's girl + laundry artwork `Design/ReferencePacks/2026-11-07_First_Two_Screens_Girl_Laundry_from_user/11109.jpg`
   (the phone previews there only place the UI).
4. Guides only, never targets: the storyboards and concept images (`..._Full_Screen4_Brief_from_user/`, `..._Washer_Interior_Continuity_from_user/02_...`).

**The user's Screen 4 requirements (all their briefs of 7 November, summarised):** the same recognisable pink fluffy rear-view
character, a full round dome with long fine fuchsia strands and small side nubs, sitting ON saturated cobalt / cyan water: its
back above the water, its lower fur touching rounded moving waves; no white film, cloud, crescent streaks or foam blanket; gentle
bob, swimming and responsive steering with the water and ripples following her, through the whole tunnel; the silver /
lavender / purple / gold washer rim recognisable throughout but not an oversized ceiling; coins, socks, gems, bubbles, brushes,
HUD and every gameplay system unchanged; about 90 % visual similarity (never claim a percentage without a measurement).

## 4a. Newest (8 November, session `dbccb9a3`, branch `ccr-76d4bc77-rqhl8o`, the new account)

- Branch `ccr-76d4bc77-rqhl8o` (this session's own) carries everything from `claude/bubble-wash-account-handoff-yhk8dy` (its
  last autosave `f3dcce0` merged). Reconnected on the new account: GitHub works; the personal cloud environment `bubblegame`
  was created with the hosts above and the guarded setup script (unproven until a fresh session starts on it); the Tripo key
  was saved as a network secret for `openapi.tripo3d.ai` but Tripo refuses it (401 "Invalid API key"): a new key is needed;
  the parallax-threejs plugin is NOT installed on this account (install card offered).
- **Restoration of 8 November, about 01:10 UTC (the user's approval):** the old account's last three commits (`2f7977e`, `afd0ee6`,
  `2c72c2f`) merged into `ccr-76d4bc77-rqhl8o` (merge `3e5c5a3`, checked on GitHub; checkpoint before it `15b3a66`; no game
  code in them); Blender 5.2.3 installed by `Tools/cloud_env_setup.sh` (checksum matches blender.org; Cycles and Eevee render
  headless); the new Tripo key works (free balance check: 640 credits, 0 frozen; nothing generated). Still needs the user:
  enabling the parallax-threejs plugin on this account, then a NEW session to load its servers, agents and commands.
- The user's ANIMATION AND MOVEMENT MANDATE: `?s3=...,level1` (see `CLAUDE.md` and
  `Previews/WebDemo/screen4_round9_match/68_level1/README.md`): the real-time 3D Laundry Toss opening and real travel through
  Level 1 to Level Complete. Accepted `?s3=intunnel`, the candidate and the normal game: 0 px different.

## 4b. FRESH SESSION FOR THE PLUGIN (8 November, session `dbccb9a3` hands over)

Plugins are copied into a cloud session only when it STARTS; session `dbccb9a3` started before parallax-threejs was enabled, so
it cannot load it. A fresh session on the SAME environment (`bubblegame`) and the SAME branch (`ccr-76d4bc77-rqhl8o`) continues
the work; `dbccb9a3` stops its autosave before the hand-over, so only one session writes the branch.

The fresh session's first checks (read-only, nothing spent, no game change):
1. `ListPlugins` / `SearchPlugins parallax-threejs`: enabled, version 0.4.12. If NOT enabled, say so plainly (the account's catalog
   in `dbccb9a3` still read `"enabled": false` at 01:45 UTC although the user had turned it on: possibly another account or org).
2. ToolSearch `mcp__plugin_parallax-threejs`: the chrome-devtools-mcp, threejs-devtools-mcp, playwright-mcp tools (spector is
   optional; it failed on the old account too); the 13 tools named in `.claude/agents/screen4-water-motion-engineer.md`.
3. Serve the game (`npx http-server WebDemo -p 3000` or the test tools' own server), open `index.html?s3=intunnel,structmatch` with
   chrome-devtools-mcp, then threejs-devtools-mcp `bridge_status`, `scene_tree`, `renderer_info` (read-only), one screenshot.
4. The agents `scenario-author`, `shader-reviewer`, `visual-debugger` and the five project agents: a one-line ping each (no edits).
5. The plugin commands listed (`checkpoint`, `diff`, `sweep`, `ship-check`, `memcheck`, `replay`, `export-report`, `init`,
   `sync-view`): present, not run.
6. `tripo doctor` with `TRIPO_API_KEY=tsk_proxy-injected` (free); `bash Tools/verify_restore.sh`; `blender --version`.
Then resume: the `?s3=...,home,level1` work (section 4a; `Previews/WebDemo/screen4_round9_match/68_level1/README.md`), waiting for
the user's verdict; open items: the opening girl's look (a Tripo model: since 8 November covered by the user's standing authorization, see CLAUDE.md, Safety), the
course's draw calls at Tap to Start (322 against 211 without level1: cull the course's far parts), the user's Screen 4 verdict.

## 4. State of the work (what is done, what is not)

Evidence folders (each has a README with the proofs): `Previews/WebDemo/screen4_round9_match/64_final_pass/` (structmatch),
`65_swim3/`, `66_match4/`, and `Previews/WebDemo/screens12_first_two_screens/`.

- **Done and proven** (accepted `?s3=intunnel` and the normal game 0 px; `r2_func` identical; `s3_func` only the switch list and
  draw calls; the seeded swipe-and-jump motion trace 0 differences in 152 frames x 17 gameplay fields; no console errors):
  - the pale icy band round her: its cause was the swell's own face (light colours + white comma arcs, `MATCH_WATER.face.lace`),
    corrected at the source (swim3);
  - the washer metal: the original's banded rim (periwinkle, lavender, violet, mauve groove, gold-peach band, pink-lavender face)
    on the tunnel's own upper wall through the whole run (match4);
  - the tunnel rings' saturation raised (pixels above saturation 0.75 in the tunnel: 11-12 % against 5.5-7.6 % before; the
    ORIGINAL 24.5 %);
  - her fur: shell fur (6 shells of her own mesh) and her colour measured to the original (her region: hue 319 vs 317,
    saturation 0.64 vs 0.66, luminance median 0.51 vs 0.49);
  - Screens 1-2 working in a browser at three phone sizes, recorded; Screen 4 0 px unchanged by them.
- **The "floating at 6 s" in the user's frame strip:** that frame is mid-JUMP. The recording script swipes up at 5.9 s
  (`Previews/WebDemo/screen4_round9_match/51_swim/scripts/record_phone.cjs`); the recorded state says `air: true` at frame 180.
  It is the intended jump, not a contact fault. Use a recording without the jump to judge contact.
- **NOT done (the user's open requests, in priority order):**
  1. The user's verdict on `?s3=intunnel,structmatch` (match4) and on Screens 1-2.
  2. **Her silhouette:** after match4 the user still saw a flatter mound with shorter fur. match5 (`67_match5/README.md`) answers it
     first: strands 2.2 x longer, finer and combed down her dome, her body narrowed under them (outline 0.519 x 0.178 of the frame,
     the ORIGINAL 0.513 x 0.167). Still open if the user wants more:
     Measured at Tap to Start her pink box is 0.530 x 0.170 of the frame, the ORIGINAL 0.513 x 0.167 (similar size); the
     difference the user sees is the dome's profile and the fur's length and direction. Next: longer shells with directional
     lean and pale tips, and the crown profile (`structCrown`, `STRUCT.hero.crown`), compared at the same frame.
  3. **Tripo:** one image-to-3D job was run (120 credits; balance 640) from the rear-view crop and produced a MUSHROOM
     (`Design/TripoDeliveries/Round10_PinkMascot_Rear/README.md`). Recommended second attempt, ONLY after the user says yes:
     the same character's full front view from `11109.jpg` (cut-out `WebDemo/ui/screens12/mascot_sprite.png`).
  4. The water's SHAPES (the original's layered curling ribbons and lavender glass bubbles at her lower left) and the user's
     water dimension spec (`..._Exact_Water_Size_3D_Spec_Pack/`): not yet applied. Calibrate it to the game's real scale first
     (her width in the game is `MASCOT_WIDTH` 1.04 m in `game.js`, not the spec's example 1.5 m).
- **NEWEST REQUEST (7 November, about 23:50 UTC): `Design/ReferencePacks/2026-11-07_Animation_and_Movement_Mandate_from_user/`**
  (the mandate, the user's phone recording of the APK, the 12-screen Level 1 flow board). The old account's diagnosis below;
  **superseded on 8 November: implemented behind `?s3=...,level1` (section 4a)**:
  1. **"She does not travel":** she does (the recorded state: z 1.8 m -> 34.3 m in 5 s, about 7 m/s), but the drum is only
     about 35 m long, so every ~5 s the run LOOPS back to its start (`loopRun` in `game.js`, `if (running && m.z > L.tunnelEnd - 2.0)`),
     and the camera follows at a fixed distance (normal for a runner). So Level 1 is one ~35 m section repeating: she never
     reaches anywhere. The fix is a longer Level 1 route with connected sections in the board's order (brush zone, side paths /
     jumps, drops, collect zone, enemies, the Bubble Kingdom, Level Complete) instead of the loop: a large engineering task
     (the track `TR`, the layout `L`, the tunnel's lining / rings / water built along `L`, the collectible placement, the camera).
  2. **"The girl must really move":** no 3D girl exists in the project (`Design/LAUNDRY_TOSS_INTRO_ASSETS.md`); Screens 1-2 use
     the user's 2D artwork. A rigged, animated 3D girl needs Tripo (PAID): image-to-model + rig + animation retarget. Free dry run
     (`tripo make <girl crop> --for anim --dry-run`): 110 credits for the model, plus the rig and per-animation retarget (not
     estimated; presets idle / walk; a throw is not a listed preset). The artwork shows her only from the waist up behind the
     basket, so Tripo must invent her lower body. (Was: ask before any paid job, balance 640. Since 8 November the user's standing authorization covers the available credits: CLAUDE.md, Safety.)
  3. The opening sequence (girl throws laundry, the character swept along, tumbling into the washer, the camera following into
     the drum, the hand-over) then builds on 2 in `WebDemo/src/screens12.js` (today a 2D toss + dive into the live game).
- **Running at handoff:** the match4 Pixel 7 recording (`66_match4/videos/swim_steer_coins_new.mp4`) was still being written;
  the 5-minute autosave commits it if it finished. If it is missing, rerun:
  `bash Previews/WebDemo/screen4_round9_match/66_match4/scripts/chain.sh` (its header has the arguments) or only the clip part.

## 5. How results are proven (use the same tools)

- `source Tools/bw_tools_env.sh` in every shell (installs: `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing).
- Page captures with the HUD: `cd WebDemo && SETTLE=900 S3=intunnel,structmatch TIMES=0,1,2,3,5 node tools/screen3/s3_shot.cjs "$PWD" <out>`.
- **The established frame:** seed 7, 3.0 s, 768 x 1536 canvas: `S3=... T=3.0 node tools/screen4/layer_diag.cjs "$PWD" <out> [ablations.json]`
  (ablations hide layers by name regex, e.g. `{"label":"no_swell","hide":["heroSwell$"]}`).
- Identity (0 px against an older bundle), gameplay (`s3_func`, `r2_func`, motion trace) and the recording: the `scripts/`
  of `66_match4/` (`chain.sh`, `identity.sh`, `gameplay.sh`, `sheet.py`, and the measurements `her_box.py`, `pink_stats.py`,
  `tunnel_stats.py`, `water_stats.py`).
- Screens 1-2: `node WebDemo/tools/screens12/screens12_check.cjs "$PWD/WebDemo" <out> intunnel,structmatch,home 412x839`.
- Restore check: `bash Tools/verify_restore.sh --build` (it knows the current bundle md5; the "branch" check expects an older
  branch name and fails harmlessly).

## 6. Agents, skills, tools, plugins: what is in the repository and what must be reconnected

**In the repository (they load automatically in a session on this branch):**
- `.claude/agents/`: `screen4-water-motion-engineer` (the one owner of water, swim motion and overlays; it uses the
  parallax-threejs MCP tools), `game-art-director` (read-only reviewer), `water-vfx-engineer`, `lighting-visual-matching`,
  `gameplay-visual-testing` (read-only tests).
- `.claude/skills/bubble-wash-screen-matcher/`; `.claude/hooks/session-start.sh` + `.claude/settings.json` (restarts the
  5-minute autosave on session start); `.mcp.json` (empty on purpose: the MCP servers come from the plugin).
- Tools: `Tools/` (autosave, save, verify, environment setup, chat export with key redaction, Android APK builder) and
  `WebDemo/tools/` (captures, layer isolation, gameplay tests, recordings, Spector capture).
- `.env.example`: placeholder variable names only.

**Account level: they do NOT travel; redo on the new account:**
1. Connect GitHub on claude.ai and make sure the Claude GitHub App can reach `josiahscalia5-dev/bubblegame`.
2. Install the **parallax-threejs** plugin (0.4.12) from the plugin directory: it brings the MCP servers chrome-devtools-mcp,
   threejs-devtools-mcp and playwright-mcp (working here) and Spector (it failed to connect here: optional), plus its agents
   (`scenario-author`, `shader-reviewer`, `visual-debugger`) and skills (`checkpoint`, `diff`, `sweep`, ...).
3. Create a personal cloud environment named `bubblegame` for this repository: limited network with package registries and MCP
   servers allowed, plus the hosts `download.blender.org`, `download.pytorch.org`, `dl.google.com` (Android SDK) and
   `openapi-dl.data.tripo3d.com` (Tripo downloads); setup script (exactly):
   ```
   #!/bin/bash
   if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then
     bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed (above); run bash Tools/verify_restore.sh"
   fi
   ```
4. **Tripo key:** add it as a NETWORK SECRET of that environment for host `openapi.tripo3d.ai` (Authorization: Bearer), never
   in the repository or the chat; run `tripo` with `TRIPO_API_KEY=proxy-injected`. **The previous key was pasted into the chat
   on 7 November: the user should create a new key on Tripo's site and delete the old one.** Paid Tripo jobs: the user's standing
   authorization of 8 November covers the AVAILABLE API credits without asking per job; never buy credits or top up (`CLAUDE.md`, Safety;
   `tripo doctor` and `tripo balance` are free).
5. Live sessions, running jobs, agents' in-memory state and local worktrees never transfer; their files are in the repository.

## 7. First-session checklist for the new account

1. Start a session on the repository, branch `claude/bubble-wash-account-handoff-yhk8dy` (or `git clone --branch claude/bubble-wash-account-handoff-yhk8dy --single-branch https://github.com/josiahscalia5-dev/bubblegame`).
2. `git log -1` and compare with the commit the user was given; `git status` clean.
3. Read `CLAUDE.md`, then this file, then the top of `HANDOFF.md`.
4. `bash Tools/cloud_env_setup.sh` if `~/.bubblewash-tools` is missing; `source Tools/bw_tools_env.sh`; `cd WebDemo && npm install && node build.mjs`;
   `bash Tools/verify_restore.sh --build`.
5. Check the autosave runs (`ps -eo pid,etime,cmd | grep '[a]utosave.sh'`); add the new session to `Tools/autosave_sessions.json`.
6. Tell the user what needs reconnecting (section 6) and wait for their verdict on the candidate before more changes.

## 8. First message to paste into the new account

> Continue my Bubble Wash Kingdom game from GitHub: repository josiahscalia5-dev/bubblegame, branch
> `claude/bubble-wash-account-handoff-yhk8dy`. Read `CLAUDE.md` and `HANDOFF_FOR_NEW_CLAUDE_ACCOUNT.md` first and follow them.
> Do not reset, redesign or rebuild anything; the accepted Screen 4 is `?s3=intunnel`, the candidate `?s3=intunnel,structmatch`
> and Screens 1-2 `?s3=intunnel,structmatch,home` wait for my verdict. Run the first-session checklist, tell me what must be
> reconnected (plugin, environment, Tripo key, GitHub), and do not assume any agent or plugin is installed until you have checked.
