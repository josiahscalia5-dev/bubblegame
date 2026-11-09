# Tools and plugins: what transfers and how to restore (8 November 2026, session bb87ba9f; statuses tested LIVE this session)

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
