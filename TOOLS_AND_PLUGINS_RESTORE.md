# Tools and plugins: what transfers and how to restore (8 November 2026, session bb87ba9f; statuses tested LIVE this session)

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
