# Environment verification, 8 November 2026 about 16:45 UTC, session 57091b57 (branch `ccr-b67aeffb-d94mmq`)

Every row was tested LIVE in this session (not read from earlier notes). Nothing in the game was changed by the audit.
"In GitHub" = the definition / script is in the repository; "usable here" = it worked in this container.

## Design agents (`.claude/agents/`, in GitHub, loaded in this session)
| Agent | Test (harmless) | Result | Tools it actually had |
|---|---|---|---|
| game-art-director | ranked the 5 biggest whole-screen differences, pass 7 vs `09_Avoid_Enemies.png` | PASS | Read (images), Bash |
| gameplay-visual-testing | Playwright launched Chromium, WebGL2 true; bundle md5 = HEAD's; listed the test tools | PASS | Bash, Read, Grep, Glob |
| lighting-visual-matching | read `tripo_l1.js`, recommended 3 parameter changes (read-only) | PASS | Read, Grep, Bash |
| water-vfx-engineer | traced Level 1's water colours and the white flecks in `level1.js` (read-only) | PASS | Grep, Read, Bash |
| screen4-water-motion-engineer | chrome-devtools navigate / evaluate (WebGL2 true) / console: PASS; threejs-devtools bridge_status answered (no page attached in its test) | PASS (MCP tools present) | its declared parallax MCP tools |

## parallax-threejs 0.4.12 (enabled on this account; plugin files are per account, NOT in GitHub)
| Part | Result | Note / restoration |
|---|---|---|
| chrome-devtools-mcp 1.6.0 | PASS (navigate, evaluate, console) | - |
| playwright-mcp 0.0.78 | PASS (tab list) | - |
| threejs-devtools-mcp 0.2.1 | PASS once the game page is opened through its proxy AND the game's scene exposed | serve WebDemo on :3000 (`python3 -m http.server 3000`), open `http://localhost:9222/index.html?s3=...` with chrome-devtools, then evaluate `const d=window.__bw.debug(); window.__THREE_SCENE__=d.scene; window.__THREE_CAMERA__=d.camera; window.__THREE_RENDERER__=d.renderer`. Then find_objects found the mascot mesh (61,062 vertices) and heroSwell; renderer_info works (its draw counts show only the final post pass) |
| spector MCP | was FAIL (the plugin ships without `vendor/spector`); FIXED in this container: the plugin's own `scripts/setup-spector.sh` cloned Spector.js and built `vendor/spector/mcp/dist/index.js`; tested over stdio: `spector-mcp` 1.1.0, 13 tools | joins a session only after the next session start or `/mcp` reconnect; per container: `Tools/cloud_env_setup.sh` now runs it when missing |
| agents scenario-author, shader-reviewer, visual-debugger | run, but get NO MCP tools (scenario-author: Read/Glob/Write/Bash; shader-reviewer: Read/Grep/Glob/Bash, did a correct static review of the `uOpen07` shader patch; visual-debugger: Bash only) | the plugin's defect: their `tools:` lines name `mcp__playwright-mcp` etc. without the `plugin_parallax-threejs_` prefix; only the plugin's author can fix it. Use the main session or screen4-water-motion-engineer for live MCP work |
| Deno (checkpoint / diff / sweep / ship-check / shader-binding check) | was MISSING; INSTALLED: Deno 2.9.6 (`npm install -g deno@2`, outside the repository; the setup script now does it) | the checkpoint / diff / sweep / replay / export-report tasks also need `/parallax-threejs:init` to scaffold them into the project (adds `deno.json`, scripts and `test/visual/`; never overwrites): NOT run, waiting for the user's yes |
| memcheck, sync-view | available as skills (no Deno needed) | not exercised in this audit |

## Skills, hooks, save system
| Item | Result |
|---|---|
| `bubble-wash-screen-matcher` skill, `CLAUDE.md` | in GitHub, loaded (listed in this session) |
| `.claude/commands/` | none exist (none documented) |
| SessionStart hook (`.claude/settings.json` -> `.claude/hooks/session-start.sh`) | PASS: started the autosave at this session's start; manual test: one start, no duplicate |
| 5-minute autosave | PASS: exactly ONE process, pinned to `ccr-b67aeffb-d94mmq`, parent `ccr-50c66592-kcnqoy` reported (not merged); every round `github=VERIFIED` |
| `Tools/save_now.sh` (SAVE NOW) | PASS (several verified pushes today) |
| `Tools/tripo_job.sh` (one lead Tripo session) | PASS (six check-only tests, nothing spent) |

## Tools
| Tool | Result |
|---|---|
| Blender 5.2.3 | PASS (headless: added a cube) |
| Tripo CLI 0.11.2 + API (network secret) | PASS: `tripo balance` 1,300 credits, 0 frozen (free); key never in the container |
| three.js 0.170.0, WebGL2 | PASS (in Chromium, software rendering: SwiftShader) |
| Playwright 1.63 + preinstalled Chromium | PASS |
| Vite 8.3.5, glTF Transform 4.5.1, glTF Validator 2.0.0-dev.3.10 | PASS (inspect, validate: 0 errors) |
| OpenCV 5.0, scikit-image 0.26, PyTorch 2.15, LPIPS, Optuna 5.0 | PASS (resize, SSIM, LPIPS distance 0.0 on identical images, a study created) |
| Git 2.43, GitHub (push + GitHub API) | PASS |
| rembg 2.0.87 (scratch venv) | PASS (used this session; not part of the setup script) |
