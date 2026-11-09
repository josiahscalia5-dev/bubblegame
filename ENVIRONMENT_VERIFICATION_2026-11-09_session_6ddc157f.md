# Environment verification, 9 November 2026, session 6ddc157f (new Claude account), branch `claude/bubble-wash-account-transfer-52t7ym`

Every status below comes from a **real test in this session** (not from a config file being present). Labels: FULLY WORKING, PARTIALLY
WORKING, MISSING, NEEDS USER AUTHORIZATION, NOT TESTED. Repository-restored items load from Git by themselves; account items (the plugin,
GitHub, the environment's network and secrets) had to exist in this account already, and they did.

**Standing procedure from now on:** the SessionStart hook runs `Tools/session_preflight.sh` (read-only, about 3 s) at every session start, and
`CLAUDE.md` ("STANDING PROCEDURE") tells every Claude session to check the MCP tools and agents live and to report anything missing at once.

## 1. Project agents and the skill (repository: `.claude/agents/`, `.claude/skills/`)
| Name | Status | Real test this session (evidence) |
|---|---|---|
| game-art-director | FULLY WORKING | reviewed 10 new models against the six-scene storyboard from real renders and game frames (30 tool calls), one verdict per asset (`Previews/WebDemo/six_scenes/06_tripo_new_models_6ddc157f/README.md`) |
| gameplay-visual-testing | FULLY WORKING | 4 Playwright runs of the real Level 1 (`flow_routes.cjs`, ROUTE upper): with and without sock3/coin3/enemy3, 0 differences in route, socks, coins, gems, hearts, pops, Level Complete; contact sheets in `06_.../gameplay/` |
| lighting-visual-matching | FULLY WORKING | measured the washer's pink / gold (HSV, pixel boxes) in game frames against storyboard panels 1 and 4, traced the shift to material lines, recommended 4 values (3 applied in `tripo3`) |
| water-vfx-engineer | FULLY WORKING | read-only inspection of the opening's water (`buildVortex`, scene 4 flood timing, line numbers) and proof that `tripo3` touches no water code: PASS |
| screen4-water-motion-engineer | PARTIALLY WORKING | its chrome-devtools tools work live (loaded `?s3=intunnel`, reached `heroSwell`, `lqFloor`, `lqWaterlineBubbles`, `r3Swirl` through `__bw.debug()`); its 9 threejs-devtools tools were absent because that server did not connect at session start (see 3) |
| bubble-wash-screen-matcher (skill) | FULLY WORKING | `WebDemo/tools/screen4/compare_s4.py` ran on panel 4 against two game frames (`06_.../proofs/matcher/`); its colour classes are Screen 4's |

## 2. The parallax-threejs plugin (account-level; does not travel through Git)
Installed and enabled in this account: **parallax-threejs 0.4.12** (synced plugin folder, its 4 MCP servers started at session start, 3 agents listed).
| Agent | Status | Real test |
|---|---|---|
| parallax-threejs:shader-reviewer | PARTIALLY WORKING | a real static GLSL / binding review of the opening's shaders (found a genuine old bug: `opening3d.js` ~757, a statement commented out by a `//` on the same line in the non-six opening; left as is, it would change accepted frames); no MCP tools attached |
| parallax-threejs:visual-debugger | PARTIALLY WORKING | runtime check by Bash + Playwright (r170, WebGL2, 0 errors, screenshot); NO MCP tools attached (threejs / chrome / playwright / spector) |
| parallax-threejs:scenario-author | NOT TESTED | its test was started (tool listing + a draft scenario, no file writes) but had not returned when this report was saved |
Known plugin limit (also in the previous account): the plugin's agents declare MCP tool names that do not match the attached servers' names, so they get no MCP tools; the project agent screen4-water-motion-engineer declares the real names and does get chrome-devtools.

## 3. MCP servers (this session)
| Server | Status | Real test |
|---|---|---|
| GitHub (built-in MCP + git) | FULLY WORKING | `mcp__github__list_branches`; git fetch and pushes VERIFIED (`git ls-remote`) |
| chrome-devtools-mcp 1.6.0 (plugin) | FULLY WORKING | from this session: navigate to the game, evaluate (three.js r170, WebGL2, `tripo3` ready: washer, door, gear, 12 housings), screenshot, console |
| playwright-mcp 0.0.78 (plugin) | FULLY WORKING | from this session: opened the PLAIN launch `index.html`, read `__BW_DEFAULT_GAME__ = six+tripo3`, bundle `?v=45f21c4a`, r170 |
| threejs-devtools-mcp 0.2.1 (plugin) | NEEDS USER (reconnect) | CONNECT_TIMEOUT at session start (its first `npx` download); started by hand over stdio it works (7.4 s, 51 tools). Now cached, and `Tools/cloud_env_setup.sh` pre-caches it for future sessions. To attach it to THIS session: type `/mcp` and reconnect it (or start a new session) |
| spector (project `.mcp.json`) and the plugin's spector | NEEDS USER (reconnect) | closed at session start because the Spector build did not exist yet (the environment's setup script had stopped early). Rebuilt this session; by hand over stdio it works: a real frame capture of the game (`?s3=intunnel`): 224 draw calls, 51 shader programs, WebGL 2, no GL errors. `/mcp` -> reconnect (or a new session) attaches it |

## 4. Tools (restored by `Tools/cloud_env_setup.sh`; `Tools/restore_session.sh` checks them)
| Tool | Version | Status | Test |
|---|---|---|---|
| Node.js / npm | 22.23.4 / 10.9.9 | FULLY WORKING | builds, every capture tool |
| three.js | r170 | FULLY WORKING | `window.__THREE__ = "170"` in the running game |
| esbuild (`node build.mjs`) | WebDemo pin | FULLY WORKING | bundle `45f21c4a` rebuilt byte-identically from its source (`verify_restore.sh --build`) |
| Vite | 8.3.5 | FULLY WORKING (version) | side tests only |
| Playwright + Chromium | 1.63.0 / 153 | FULLY WORKING | o3d_shots, flow_routes, record_flow, identity proofs |
| Python | 3.13.18 | FULLY WORKING | |
| OpenCV / scikit-image (visual venv) | 5.0.0 / 0.26.0 | FULLY WORKING | comparisons, SSIM |
| PyTorch / LPIPS / Optuna (metrics venv) | 2.15.0 / ready / 5.0.0 | FULLY WORKING | the setup's install had failed silently (uv -q); reinstalled; LPIPS ran on real frames |
| Blender | 5.2.3 | FULLY WORKING | meshopt import, decimation of 12 models, rigging, renders |
| FFmpeg / ImageMagick | 6.1.1 / 6.9.12 | FULLY WORKING | the continuous video |
| Git LFS | 3.4.1 | FULLY WORKING (version) | the repository uses no LFS |
| glTF Transform / glTF Validator | 4.5.1 / 2.0.0-dev.3.10 | FULLY WORKING | meshopt compression; 0 validation errors on the game GLBs |
| gltfpack / meshoptimizer | 0.25 | FULLY WORKING (version) | added to the setup script this session |
| Tripo CLI + API | 0.11.2 | FULLY WORKING | `tripo doctor` OK, balance 1,060 (0 frozen); no credits spent |
| Tripo download host `openapi-dl.data.tripo3d.com` | | FULLY WORKING | was blocked (proxy 403); added to the environment's allowed hosts with your approval; the host now answers |
| Deno | 2.9.6 | installed; parallax Deno tasks NOT TESTED this session | |
| Spector MCP build | upstream | FULLY WORKING (by hand, see 3) | |

## 5. GitHub, autosave, safety
- Branch `claude/bubble-wash-account-transfer-52t7ym` (fast-forwarded from the session branch; never force-pushed); backup `d79c54c` contained.
- Rollback branches untouched: `claude/bubble-wash-account-switch-e1nndb` = `0aa21621`; NEW `claude/bubble-wash-rollback-before-tripo3-default` = `33bf67ba` (the game before the plain launch became six + tripo3). Tags cannot be pushed through this environment's git proxy, so the checkpoint is a branch.
- Autosave: ONE process, pinned to the work branch, every round `github=VERIFIED` (`~/.bubblewash-autosave/save_history.log`); restarted by the SessionStart hook only if none runs.
- No key in the repository; Tripo's key is the environment's network secret.

## 6. What needs you
1. In this session, `/mcp` -> reconnect **threejs-devtools-mcp** and **spector** (both work when started; they missed the session start). A new session should connect both by itself now.
2. Nothing else: the plugin, GitHub, Tripo key and network were already set on this account.

## 7. Final proofs of this session
- The ACTIVE game (plain launch = six + tripo3): `Previews/WebDemo/six_scenes/07_active_game_plain_launch_6ddc157f/` (8 checkpoints vs the user's second row, the 42.7 s continuous video, identity 0 px on bundle `45f21c4a`).
- Session preflight: `Tools/session_preflight.sh` = 17 OK / 0 WARN / 0 MISSING / 0 NEEDS USER (2.7 s); the hook tested with a simulated session start (1 autosave process kept).
