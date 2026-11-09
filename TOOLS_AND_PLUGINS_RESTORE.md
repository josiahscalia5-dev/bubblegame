# TOOLS AND PLUGINS RESTORE (updated 9 November 2026 ~20:40 UTC, session ddf175f2). Statuses below are LIVE results of this session.

## 0. Status of every tool (W = working, tested this session; P = partly; C = configured, not live-called; N = not connected / not installed)
| Tool | Status | How it was checked | What a new account must do |
|---|---|---|---|
| Git + GitHub (repo josiahscalia5-dev/bubblegame) | W | pushes verified with git ls-remote; branch creation via the GitHub MCP tool | connect GitHub on claude.ai; Claude GitHub App on the repo. Note: this session's git proxy refused TAG pushes; branches work |
| Node 22, npm, three r170, esbuild build (`cd WebDemo && npm ci && node build.mjs`) | W | `Tools/verify_restore.sh --build`: 28 passed, 0 failed | nothing (npm ci) |
| Playwright 1.63 + Chromium (`/opt/pw-browsers`) | W | every capture (var6.cjs, shots56.cjs, flow_routes.cjs) | nothing (cloud image) |
| chrome-devtools-mcp (parallax plugin, 1.6.0) | W | list_pages, new_page on the game | enable the plugin (below) |
| threejs-devtools-mcp (parallax plugin, 0.2.1) | P | bridge connected + renderer_info on the live game (port 3000 via 9222); after a session resume: CONNECT_TIMEOUT | `/mcp` -> reconnect; serve WebDemo on port 3000 (`python3 -m http.server 3000` in WebDemo) |
| playwright-mcp (parallax plugin, 0.0.78) | W | browser_tabs | enable the plugin |
| playwright (org synced plugin, Microsoft) | P | "browser already in use" while the parallax playwright ran | use one at a time |
| Spector MCP: project `spector` (.mcp.json) and `plugin:parallax-threejs:spector` | C | failed at first start (build missing); after `Tools/cloud_env_setup.sh` both servers start and list capture_frame (restore check); tools appeared after resume, not called | `/mcp` -> reconnect if failed; live proof `Tools/spector_live.cjs` |
| serena (org synced plugin) | N | CONNECT_TIMEOUT | not used by this project |
| Blender 5.2.3 (headless) | W | built glow_tank.glb (`Tools/blender_glow_tank.py`), cut Tripo parts (`Tools/blender_drop_parts.py`) | `bash Tools/cloud_env_setup.sh` (downloads, checksum) |
| gltf-transform 4.5.1, gltfpack, Khronos validator | W | `Tools/tripo_mobile_lods.sh`, `node Tools/check_models.cjs`: 72 GLB, 0 failed | cloud_env_setup.sh |
| FFmpeg 6.1, ImageMagick, git-lfs | W | versions (restore check) | cloud image |
| Python visual venv (OpenCV 5, scikit-image 0.26, NumPy, Pillow) | W | all measurements | cloud_env_setup.sh |
| PyTorch / LPIPS / Optuna (metrics venv) | N | not installed (needs ~16 GB disk at peak) | optional: cloud_env_setup.sh (last step) |
| Tripo CLI 0.11.2 + API | W | `tripo balance` = 700; 3 jobs this session (360 credits, approved) | NETWORK SECRET for host `openapi.tripo3d.ai` (Bearer) in the environment settings; run with `TRIPO_API_KEY=tsk_proxy-injected`; paid jobs only through `Tools/tripo_job.sh` and only with the user's approval |
| Sketchfab API (downloads) | W | `/v3/me` ok, one free CC model downloaded (`Tools/assetfinder/import_sketchfab.py`) | optional NETWORK SECRET for `api.sketchfab.com` (Authorization: Token) |
| CGAxis remote MCP `https://mcp.cgaxis.com/mcp` | W (read-only) | initialize, tools/list, search_assets via `Tools/assetfinder/mcp_http.py` | nothing (no sign-in) |
| Meshy, Hyper3D Rodin, Poly Pizza, Blender MCP (princicode) | N | not configured | not needed (see Tools/assetfinder/README.md) |
| Autosave (5 min) + SessionStart hook | W | 1 process; pushes VERIFIED; also fast-forwards kc4ecl and tamzio | starts by itself (`.claude/hooks/session-start.sh`) |
| Project agents (6) + skill bubble-wash-screen-matcher | W | game-art-director, lighting-visual-matching, screen4-water-motion-engineer used live this session | load from `.claude/` automatically |
| parallax-threejs 0.4.12 plugin agents (scenario-author, shader-reviewer, visual-debugger) | C | listed by the Agent tool | the plugin must be enabled on the account (org synced plugins / claude.ai Customize -> plugins), then a NEW session. Text copy: `Tools/plugin_snapshots/parallax-threejs-0.4.12/` (MIT) |

Manual per account (cannot travel through Git; never commit a key): GitHub connection + app; the parallax-threejs plugin; the network secrets
(Tripo; optionally Sketchfab); the cloud environment's network access (this session ran on the Default environment with UNRESTRICTED network) and,
optionally, its setup script `if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh; fi`.

# Tools and plugins: restore and verify (NEWEST: 9 November 2026 ~14:40 UTC, session d847dce2, account-transfer backup; tested LIVE)

## 0. Session d847dce2 (new account): what was really active
| Item | Version | Live test | Status | Next account |
|---|---|---|---|---|
| parallax-threejs plugin | 0.4.12 (Anthropic Directory, community publisher) | ListPlugins: none enabled on this account | NOT ENABLED | REQUIRES ACCOUNT ACTION: claude.ai -> Customize -> Plugins -> enable `parallax-threejs`, then a NEW session (plugins load at start). Test: ToolSearch "chrome-devtools" + "threejs-devtools", call `list_pages` and `bridge_status` on the running game |
| chrome-devtools MCP, threejs-devtools MCP | (from the plugin: chrome-devtools-mcp 1.6.0, threejs-devtools-mcp 0.2.1 cached by the setup) | no tools in the session | MISSING (plugin) | come back with the plugin; `/mcp` -> reconnect if "failed" |
| Spector MCP (project `.mcp.json`, built by `Tools/cloud_env_setup.sh` into `~/.bubblewash-tools/spector`) | Spector.js + Playwright 1.63 | load_url on the game, list_canvases, get_context_info, capture_frame: 209 draw calls, 51 programs, no GL errors | WORKING | restored by the setup script; `/mcp` -> reconnect if "failed" |
| Playwright MCP (the org-synced `playwright` plugin, Microsoft) | @playwright/mcp | browser_tabs / navigate / evaluate on the game | PARTIAL (screenshots of the live game time out at 5 s) | arrives with the account's synced plugins; else the project scripts |
| Node / npm / esbuild / three.js | 22.23.4 / 10.9 / pinned / r170 | `npm ci`, `node build.mjs` (bundle rebuilds byte-identically) | WORKING | `cd WebDemo && npm ci` |
| Playwright + Chromium | 1.63.0 + the image's /opt/pw-browsers | every capture this session | WORKING | never `playwright install` |
| Blender | 5.2.3 LTS | imported `gear_v2_tripo.glb` (1 mesh, 11,774 verts) | WORKING | setup script (host download.blender.org) |
| glTF Transform / gltfpack / Khronos validator | 4.5.1 / 0.25 / 2.0.0-dev | inspect; weld + simplify + resize + meshopt of the user's models; 48 GLB 0 errors | WORKING | setup script |
| FFmpeg / ImageMagick / Git LFS / Deno | 6.1.1 / 6.9.12 / 3.4.1 / 2.9.6 | H.264 encode + ffprobe; versions | WORKING | system packages / setup script |
| Python visual venv (OpenCV 5.0, scikit-image 0.26) and metrics venv (PyTorch 2.15, LPIPS, Optuna) | | imports; LPIPS ref 5 vs game = 0.609 | WORKING | setup script (PyTorch last, host download.pytorch.org) |
| Tripo CLI + API | 0.11.2 | network secret saved for openapi.tripo3d.ai via the secure form; `tripo balance` 1,060 (0 frozen), `tripo doctor` ok; 0 credits spent | WORKING on THIS environment | REQUIRES ACCOUNT ACTION if the environment differs: the network secret for `openapi.tripo3d.ai` (Authorization: Bearer); run the CLI with `TRIPO_API_KEY=tsk_proxy-injected` (placeholder) |
| Ludo.ai | - | not connected, not used | NOT CONFIGURED | only with the user's approval |
New tool this session: `WebDemo/tools/tmach/tm_view.cjs` (any GLB in an isolated three.js scene with the game's lighting, 6 views + stats).

## A. One command, safe to repeat
`bash Tools/restore_session.sh` -> runs `Tools/cloud_env_setup.sh` only if an essential tool is missing (idempotent, ~10 s when complete), then checks
git, versions, the build (`Tools/verify_restore.sh --build`: the committed bundle must equal a fresh build), the 40 GLB models (`Tools/check_models.cjs`),
the plugin sync, the threejs-devtools cache, that the Spector MCP server starts, the single autosave, the lanes and the free Tripo balance.
This session: `27 passed, 2 notes, 0 failed`; models `40 checked, 0 failed`; autosave processes `1`.

**Install order (`Tools/cloud_env_setup.sh`, fixed this session):** Blender -> Mesa EGL -> visual venv (OpenCV, scikit-image) -> Node tools (glTF Transform,
glTF Validator, Vite, Tripo CLI, gltfpack) -> Git LFS -> WebDemo npm -> checks + Deno + the Spector MCP build + the threejs-devtools npx cache ->
LAST the optional metrics venv (PyTorch, LPIPS, Optuna; ~5.6 GB, 10-minute cap). Before the fix, the environment's setup was cut off inside PyTorch at
session start and nothing after it ran, so Spector and threejs-devtools failed to connect.

## B. Live results in this session (each tool actually executed)
| Tool | Version | Live test this session | Status |
|---|---|---|---|
| Git + GitHub | git, GitHub MCP | fetch, ancestry check, pushes verified with `git ls-remote` | WORKING |
| Node.js / npm | 22.23.4 / 10.9.9 | `npm ci`, `node build.mjs` (bundle byte-identical to the commit) | WORKING |
| three.js | 0.170 (r170) | the game builds and renders | WORKING |
| Playwright + Chromium | 1.63.0 / 153 | all captures (shots6, shots56, flow_routes) | WORKING |
| chrome-devtools MCP (plugin) | chrome-devtools-mcp 1.6.0 | `list_pages` | WORKING |
| playwright MCP (plugin) | @playwright/mcp 0.0.78 | `browser_tabs` | WORKING |
| threejs-devtools MCP (plugin) | threejs-devtools-mcp 0.2.1 | CONNECT_TIMEOUT at session start (package not cached); now cached | NEEDS `/mcp` RECONNECT |
| Spector MCP (project `.mcp.json` + plugin link) | Spector.js main + Playwright 1.63 | failed at start (build missing); rebuilt; `Tools/spector_live.cjs` on the real game: load_url, list_canvases, get_context_info (WebGL2), capture_frame (253 draw calls, 41 programs, no GL errors) | WORKING via stdio; `/mcp` reconnect for in-session tools |
| Blender | 5.2.3 LTS | imported girl_v2_rigged.glb (1 armature, 3 images) | WORKING |
| FFmpeg | 6.1.1 | H.264 encode + ffprobe | WORKING |
| glTF Transform | 4.5.1 | `inspect` girl_v2_rigged.glb | WORKING |
| gltfpack | 0.25 | repacked coin_v2_tripo.glb | WORKING |
| glTF Validator | 2.0.0-dev.3.10 | 40 GLB, 0 errors (`Tools/check_models.cjs`) | WORKING |
| Tripo CLI + API | 0.11.2 | `tripo doctor` ok, `tripo balance` 1,060 (0 frozen); no paid job | WORKING (0 credits spent) |
| Deno | 2.9.6 | version; the plugin's `check-shader-bindings.ts` ran under it | WORKING (subagent shells may not have it on PATH: `source Tools/bw_tools_env.sh`) |
| Python | 3.13 | | WORKING |
| OpenCV / scikit-image | 5.0.0 / 0.26.0 | imports; art director's measurements | WORKING |
| PyTorch / LPIPS / Optuna | 2.15 / lpips / 5.0.0 | LPIPS of ref 02 vs the real game frame = 0.473 | WORKING |
| ImageMagick, Git LFS | 6.9.12 / 3.4.1 | versions | WORKING |

## C. Troubleshooting
- A plugin MCP server "failed" at start: type `/mcp`, pick it, reconnect. If still failing: `bash Tools/cloud_env_setup.sh` (re-caches threejs-devtools,
  rebuilds Spector, links it into the plugin) and reconnect again.
- The plugin's agents (scenario-author, shader-reviewer, visual-debugger) get NO MCP tools (their frontmatter names `mcp__playwright-mcp` etc., which do
  not match the plugin's real tool names): they work with Read / Bash. Give them the project's scripts (shots56.cjs EVAL, spector_live.cjs).
- `screen4-water-motion-engineer` lists the plugin's real chrome-devtools / threejs-devtools tool names, so it gets them when those servers are connected.
- Software WebGL on 4 CPUs: one browser at a time (`flock /tmp/bw_browser.lock`); close MCP pages after use (a page running the game costs ~120 % CPU).
- Never run `playwright install` (the image's Chromium is used). Never put a key in Git or chat: Tripo uses the environment's network secret
  (`TRIPO_API_KEY=tsk_proxy-injected` is a placeholder the proxy replaces).

---
# Tools and plugins: what transfers and how to restore (8 November 2026, session bb87ba9f; statuses tested LIVE this session)

**NEWEST (9 November 2026 ~02:45 UTC, session 6ddc157f, new account): THE ACTIVE GAME CHANGED.** The user selected the six-scene game with their
new Tripo models ("tripo3 final", the "second row") as THE game: a plain launch of `WebDemo/index.html` (no `?s3=`) now runs
`intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3` (bundle `45f21c4a`, stamped `game.bundle.js?v=45f21c4a`). New models in it:
girl_v2_rigged, washer_tripo_hj748, door_tripo_oit748_gold, gear_v2_tripo, housing_tripo_821 (`WebDemo/src/opening_tripo3.js`). Opt-in for the
user's review: `sock3`, `coin3`, `enemy3`, `basket3`, `doorpink`. Evidence: `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/` (plain-launch
frames vs the user's second-row pack, the continuous video) and `06_tripo_new_models_6ddc157f/` (all 12 models). Rollback branch:
`claude/bubble-wash-rollback-before-tripo3-default` (`33bf67ba`). Environment: `ENVIRONMENT_VERIFICATION_2026-11-09_session_6ddc157f.md`; every session
runs `Tools/session_preflight.sh` (SessionStart hook) and follows CLAUDE.md "READ FIRST". Do not redesign this version; do not revert to the first row.


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

**Does NOT transfer through GitHub (re-activate on the new account):** the parallax-threejs plugin (and with it chrome-devtools / threejs-devtools / playwright MCP and its 3 agents), GitHub connection + Claude GitHub App, the cloud environment (allowed hosts incl. `openapi-dl.data.tripo3d.com`, setup script), the Tripo key (network secret for `openapi.tripo3d.ai`). **Transfers by itself:** the 5 project agents, the skill, the hook, `.claude/settings.json`, `.mcp.json` (project Spector server, built by the setup script), every script in `Tools/`.

## 1. Per account: the user must reconnect these (they cannot travel through Git; never put a key in the repository)
1. **GitHub**: connect GitHub on claude.ai and install the Claude GitHub App on `josiahscalia5-dev/bubblegame`.
2. **parallax-threejs plugin** (Anthropic Directory, community publisher, 0.4.12): claude.ai -> Customize / plugins -> enable `parallax-threejs`,
   then START A NEW SESSION (plugins load at session start). It brings chrome-devtools-mcp, threejs-devtools-mcp, playwright-mcp and 3 agents.
3. **Cloud environment** (limited network): package registries and MCP servers allowed; hosts `download.blender.org`, `download.pytorch.org`,
   `openapi-dl.data.tripo3d.com` (Tripo model downloads; added this session); setup script:
   `if [ -f bubblegame/Tools/cloud_env_setup.sh ]; then bash bubblegame/Tools/cloud_env_setup.sh || echo "Bubble Wash setup: a step failed"; fi`
4. **Tripo key**: a NETWORK SECRET for host `openapi.tripo3d.ai`, header `Authorization`, Bearer (the environment's settings). Run the CLI with
   `TRIPO_API_KEY=tsk_proxy-injected` (a placeholder; the proxy injects the real key).

## 2. Restored from the repository by scripts
`bash Tools/restore_session.sh` (checks everything, installs only if missing) -> `Tools/cloud_env_setup.sh` (Blender 5.2.3, Tripo CLI 0.11.2, glTF
Transform 4.5.1, glTF Validator, Vite 8.3.5, OpenCV, scikit-image, PyTorch 2.15, LPIPS, Optuna into `~/.bubblewash-tools`; Deno 2.x; the project's
Spector MCP build) ; `source Tools/bw_tools_env.sh` in every shell ; `cd WebDemo && npm ci` (three 0.170, esbuild, Playwright 1.63 with the
preinstalled Chromium; never `playwright install`) ; `bash Tools/verify_restore.sh --build` (0 failed; the bundle rebuilds byte-identically).

## 3. Status in this account (live)
| Tool | Status | Test |
|---|---|---|
| GitHub (git + built-in MCP) | WORKING | fetch / push VERIFIED; MCP `list_branches` |
| chrome-devtools-mcp, threejs-devtools-mcp | WORKING | navigate + evaluate (WebGL2, r170); bridge connected, renderer_info |
| playwright-mcp | WORKING (screenshot limited) | `browser_tabs`; its screenshots time out on the live game (use chrome-devtools or the project scripts) |
| Spector (project `.mcp.json` server `mcp__spector__*`) | WORKING | `load_url` + `capture_frame` on a test page (1 draw call, no GL errors). The plugin's own `spector` fails at startup (harmless, known) |
| Node 22.23.4, npm, Playwright 1.63.0 + Chromium | WORKING | builds, captures |
| Python 3.13 + visual / metrics venvs (OpenCV 5.0, scikit-image, PyTorch 2.15, LPIPS, Optuna) | WORKING | imports; comparisons run |
| Blender 5.2.3, glTF Transform 4.5.1, glTF Validator, Vite 8.3.5, Deno 2.9.6, FFmpeg 6.1.1, ImageMagick, Git LFS 3.4.1 | WORKING | versions executed |
| Tripo CLI 0.11.2 + API | WORKING | `tripo doctor` OK, balance 1,060 (0 frozen); download host now reachable. No paid job run |
| Parallax Deno tasks (checkpoint, diff, sweep, export-report, replay, visual:run/accept) | present | passed in session ce30359f; not re-run |
Captures run in software WebGL (slow): one browser at a time.
