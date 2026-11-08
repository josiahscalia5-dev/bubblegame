# Restoration and verification report (8 November 2026, session `8140e507`)

Session link: https://claude.ai/code/session_019Rgj5g6rGF39SnNVz1TmuP. Nothing in this file is a secret.

## Branches and commits
| | |
|---|---|
| Repository | https://github.com/josiahscalia5-dev/bubblegame |
| The user's development line | `ccr-76d4bc77-rqhl8o` (session `dbccb9a3`, the old session; the Tripo girl, the opening, level1) |
| This session's own branch | `claude/bubble-wash-kingdom-continue-z9nmm1` (contains ALL of `ccr-76d4bc77-rqhl8o`, merged with normal merges, plus this session's Screen 4 work) |
| File ownership while both sessions work | `SESSION_FILE_RESERVATIONS.md` (the user's choice "split by files") |

## What was checked, and how (statuses: VERIFIED WORKING = a real test passed in this session)
| Item | Saved in GitHub | On this account / session | Tested | Status | Action for the user |
|---|---|---|---|---|---|
| Agent `game-art-director` | yes (`.claude/agents/`) | discoverable | pinged: read the ORIGINAL (767 x 1536); then a real review | VERIFIED WORKING | none |
| Agent `gameplay-visual-testing` | yes | discoverable | pinged: Playwright 1.63.0 | VERIFIED WORKING | none |
| Agent `lighting-visual-matching` | yes | discoverable | pinged (read a tunnel source file) | VERIFIED WORKING | none |
| Agent `water-vfx-engineer` | yes | discoverable | pinged (read a water source file) | VERIFIED WORKING | none |
| Agent `screen4-water-motion-engineer` | yes | discoverable | pinged: **13 of 13** live-scene MCP tools present, called `bridge_status` (connected) and `renderer_info` (56 programs) | VERIFIED WORKING | none (the 13 tools it lacked before now load) |
| Skill `bubble-wash-screen-matcher` | yes (`.claude/skills/`) | listed in the session's skills | its method used for the comparisons below | INSTALLED, used | none |
| Plugin `parallax-threejs` 0.4.12 (Anthropic Directory, plugin id `plugin_01SJe4pCHfcPHj3rpJyyMMBf`) | no (account level) | **synced into this session** (`~/.claude/plugins/synced/...`, version 0.4.12); `ListPlugins` returns an empty list all the same | its servers, agents and commands load (below) | PARTIALLY WORKING (see the three items below) | none for what works |
| MCP `threejs-devtools-mcp` 0.2.1 | (plugin) | running | `bridge_status` connected (proxy 9222 -> the game on 3000); `scene_tree`, `renderer_info`, `performance_snapshot`, `run_js` answered on `index.html?s3=intunnel,structmatch` | VERIFIED WORKING | its automatic scene pick lands on the final post pass; for the main scene set `window.__THREE_SCENE__` / `__THREE_CAMERA__` / `__THREE_RENDERER__` at runtime (done in this session with a read-only render hook: 365 meshes, 2.26 M vertices) |
| MCP `chrome-devtools-mcp` 1.6.0 | (plugin) | running | `new_page`, `navigate_page` (Pixel 7 412 x 915), `evaluate_script`, `take_screenshot` of the live game | VERIFIED WORKING | use a phone viewport: at 1905 x 2053 the software renderer draws 0.17 frames per second and tools time out |
| MCP `playwright-mcp` 0.0.78 | (plugin) | running | `browser_resize` (412 x 915), `browser_navigate` to the game, `browser_evaluate` read its state (ready, phase intro, 5 hearts) | VERIFIED WORKING | its logs go to `.playwright-mcp/` in the working folder (excluded locally in `.git/info/exclude`) |
| MCP `spector` | (plugin) | **failed to connect** (CONNECTION_CLOSED) | the plugin package has no `vendor/spector/mcp/dist/index.js` (the server it starts is not shipped in 0.4.12) | MISSING (plugin defect) | nothing on our side; the repository's own `WebDemo/tools/screen4/spector_capture.cjs` (npm `spectorjs`) still does Spector frame captures |
| Plugin agent `scenario-author` | (plugin) | discoverable | pinged (Bash works) | PARTIALLY WORKING | its `tools:` line names `mcp__playwright-mcp` without the `plugin_parallax-threejs_` prefix this session gives the tools, so it gets no MCP tools (a plugin defect); the repository has no `test/visual/scenarios/` (its harness is not scaffolded; `/parallax-threejs:init` would add it) |
| Plugin agent `shader-reviewer` | (plugin) | discoverable | pinged (counted 20 ShaderMaterial files) | PARTIALLY WORKING | same prefix defect: no threejs-devtools tools; reviewing GLSL source works |
| Plugin agent `visual-debugger` | (plugin) | discoverable | pinged: it reported it has only Bash | PARTIALLY WORKING | same prefix defect; `screen4-water-motion-engineer` (project agent, correct tool names) does live-scene work instead |
| Plugin command `memcheck` | (plugin) | listed (`parallax-threejs:memcheck`) | RUN live: `dispose_check` no orphaned geometries / textures; `memory_stats` 285 MB estimated (80.5 MB geometry, 204.6 MB textures); 20 hidden meshes still hold geometry (three of 174,806 vertices: a phone-memory lead for the old session's priority 5) | VERIFIED WORKING | none |
| Plugin commands `checkpoint`, `diff`, `sweep`, `replay`, `export-report` | (plugin) | listed | each runs `deno task ...` scripts the plugin scaffolds into a project with `/parallax-threejs:init`; Deno is not installed and the repository was never scaffolded; the game does not expose `window.scene` | LOADED, CANNOT RUN YET | the user's permission to (1) install Deno, (2) run `/parallax-threejs:init` (adds its scripts, `deno.json` and `test/visual/` to the repository, never overwriting), (3) expose `window.scene` behind a debug flag (a one-line game change). Until then the same captures are made by hand with the MCP tools (done in this session) |
| Plugin commands `ship-check` (Lighthouse), `sync-view` (sets the camera); skill `qa-visual-test-harness` | (plugin) | listed | not run (ship-check is a long Lighthouse run on the software renderer; sync-view changes the live camera) | LOADED BUT UNTESTED | none |
| Custom slash commands (`.claude/commands/`) | none ever existed | - | - | - | - |
| SessionStart hook + 5-minute autosave | yes | the hook started it at session start; restarted once with this session's link and title (one process) | pushes verified on GitHub every 5 minutes (`~/.bubblewash-autosave/`, the scratchpad `autosave.log`) | VERIFIED WORKING | none |
| GitHub | n/a | connected; this session pushes its own branch | pushes and merges in this session; the GitHub API (`get_commit`) read `ccr-76d4bc77-rqhl8o` = `7e5dd685cc541be0ea614d0ca0dd9dd0ccd7a77c`, the same as `git ls-remote` | VERIFIED WORKING | none |
| Cloud environment `bubblegame` (`env_01Nm5qMuXdrUG7vTsPKQCqUG`, personal) | its setup script is `Tools/cloud_env_setup.sh` | in use | allowed hosts `download.blender.org`, `download.pytorch.org` (+ package registries, MCP servers) | VERIFIED WORKING | for a Tripo DOWNLOAD (after a paid job) the host `openapi-dl.data.tripo3d.com` must be added; `dl.google.com` only for the Android SDK |
| Tripo (CLI 0.11.2, `openapi.tripo3d.ai`) | key never in Git | the key was missing on this environment; the user saved it through the secure form (network secret for `openapi.tripo3d.ai`) | `tripo doctor`: all checks OK; `tripo balance`: **640 credits, 0 frozen** (free checks; nothing generated, nothing spent) | VERIFIED WORKING | none; every paid job still needs the user's yes with the job and its cost |
| Blender 5.2.3 LTS | installer in `Tools/cloud_env_setup.sh` | installed | `blender --version` | VERIFIED WORKING | none |
| Node 22.23.4, three 0.170.0, esbuild 0.24.0 | pinned in `WebDemo/package.json` / lock | installed (`npm ci`) | `node build.mjs`; the bundle rebuilds byte-identically from its source | VERIFIED WORKING | none |
| Playwright 1.63.0 + Chromium | pre-installed | yes | every capture in this session | VERIFIED WORKING | none |
| OpenCV 5.0.0, scikit-image 0.26.0, NumPy, Pillow, SciPy | `Tools/cloud_env_setup.sh` | installed | SSIM on her crop, ORIGINAL vs match5 0.161, vs match6 0.170; the colour-band and outline measurements | VERIFIED WORKING | none |
| PyTorch 2.15.0, LPIPS, Optuna 5.0.0 | `Tools/cloud_env_setup.sh` | installed | LPIPS (AlexNet) on her crop, ORIGINAL vs match5 0.7545, vs match6 0.7346; a 3-trial Optuna study ran | VERIFIED WORKING | none |
| glTF Transform 4.5.1 | `Tools/cloud_env_setup.sh` | installed | read the mascot model's geometry in this session | VERIFIED WORKING | none |
| glTF Validator 2.0.0-dev.3.10 | `Tools/cloud_env_setup.sh` | installed | validated `girl_rigged.glb` (0 errors, 1 warning) and `mascot.glb` (0 errors) | VERIFIED WORKING | none |
| Vite 8.3.5 | `Tools/cloud_env_setup.sh` | installed | `vite --version` (side tests only; the game builds with esbuild) | LOADED BUT UNTESTED on a build | none |
| Spector.js | npm in a scratch folder when needed | not installed | - | NOT INSTALLED (by design, until needed) | none |
| Android SDK | only for an APK | not installed | - | NOT INSTALLED (not needed now; needs `dl.google.com`) | ask when an APK is wanted |
| `Tools/verify_restore.sh --build` | yes | - | 26 passed, 0 failed after its stale branch / bundle checks were updated in this session | VERIFIED WORKING | none |

## The game (unchanged by the restoration)
- The accepted `?s3=intunnel`, the normal game and the candidate are proven 0 pixels different across this session's work
  (`Previews/WebDemo/screen4_round9_match/69_match6/proofs/identity.txt`).
- The branch `ccr-76d4bc77-rqhl8o` was verified on its own exact files (an export of its commit, not this session's tree):
  `Previews/WebDemo/ccr_branch_verification_2026-11-08/README.md`.

## State for the next session (8 November, about 05:00 UTC)
- **Two branches, one game.** `ccr-76d4bc77-rqhl8o` (`7e5dd685`, the old session `dbccb9a3`: the girl, the opening, level1; idle
  since 02:56 UTC) and this session's `claude/bubble-wash-kingdom-continue-z9nmm1` (it contains ALL of `ccr-76d4bc77-rqhl8o`,
  merged with normal merges, plus `match6`). Nothing of this session is on `ccr-76d4bc77-rqhl8o`: this session never writes the
  old session's branch. To bring `match6` onto `ccr-76d4bc77-rqhl8o`, the user decides; the merge is clean (this branch contains
  that one), so it is a fast-forward of `ccr-76d4bc77-rqhl8o` to this branch's head.
- **Waiting for the user:** `match6` (her rear silhouette, `Previews/WebDemo/screen4_round9_match/69_match6/README.md`; rollback
  `,nomatch6`); the level1 opening and course (`68_level1/`, verified on its own branch in `ccr_branch_verification_2026-11-08/`);
  the six Tripo models' KEEP / REJECT / REWORK (the user's 02:35 message decided two: the pink creature is not to replace her, the
  washer not without its porthole cut open); permission for the parallax-threejs scaffold (Deno + `/parallax-threejs:init` +
  `window.scene` behind a debug flag).
- **Next (this session's files, `SESSION_FILE_RESERVATIONS.md`):** priority 4, the water: the crest in front of her hides her lower
  body and right nub (the ORIGINAL shows her down to about y 1330 of 1536, ours about 1275) and draws a hard white "torn paper"
  line (the swell's crest foam, `tunnel_r8_liquid.js` LQ_FOAM, reachable through `structSwellGLSL` in `tunnel_s4_struct.js`);
  then the metal housing, the brushes, the lighting.
- **For the old session (priority 5, not this session's files):** per `dispose_check`, 20 hidden meshes still hold geometry
  (three of 174,806 vertices): freeing or not creating them would save phone memory.

## Update 8 November, about 11:00 UTC: the Level 1 mandate (continuous water to the castle)
- The user gave this session `level1.js` and `opening3d.js` ("Take both over"; `SESSION_FILE_RESERVATIONS.md`). Checked first: the old
  session left nothing uncommitted; both files were byte-identical on `ccr-76d4bc77-rqhl8o` (`7e5dd685`) and this branch.
- New `level1` sub-switches, on by default: `wet` (the drum widens into one wet washer chamber to the castle portal; the hand-off out of
  the Screen 4 drum no longer hides her; the course's water double-sided, deep blue to the end) and `port` (the opening's porthole shows
  the blue spiral). Rollback `,nowet` / `,noport`. Evidence: `Previews/WebDemo/screen4_round9_match/70_level1_wet/README.md`.
- `match6` is now opt-in (`,match6`): a candidate until the user approves it (the user's order); the default candidate look is match5.
- Final candidate bundle 89e89f18 (commit `03e8455`); a pull request from this branch into `ccr-76d4bc77-rqhl8o` is the review route.
