# Environment verification: session d847dce2 (9 November 2026, ~13:28-14:00 UTC, new Claude account)

Every status below was tested LIVE in this session (labels: WORKING / PARTIAL / FAILED / MISSING / NEEDS USER ACTION).

## 1. Git
| Item | Status | Evidence |
|---|---|---|
| User's primary branch `claude/bubble-wash-restore-transfer-kc4ecl` | WORKING | fetched at 19586f03 (= `52t7ym`); the session branch `ccr-212bb6a5-36pep9` contains it; `Tools/save_now.sh` now fast-forwards kc4ecl at every verified save (never force); kc4ecl verified on GitHub at 8b2fa7e, 5c57f94 and later |
| `claude/bubble-wash-account-transfer-52t7ym` | historical | left at 66a7544 (no longer updated) |
| Rollback branches | WORKING | rollback-before-s56-default, rollback-before-tripo3-default, account-switch-e1nndb present on GitHub (preflight) |

## 2. Build and game
| Item | Status | Evidence |
|---|---|---|
| `Tools/restore_session.sh` | WORKING | 28 passed, 1 note, **0 failed**; bundle rebuilds byte-identically; 40 GLB checked, 0 failed (Khronos validator) |
| Plain launch (active game) | WORKING | bundle c0361e72 at start; real frames at 864x1536 (`Previews/WebDemo/six_scenes/11_scene56_match_d847dce2/baseline/`) |
| `?s3=intunnel` identity after the arch56 hook | WORKING | 0 px at Tap to Start (old vs new build); plain launch Tap 0 px; u206 0 px against an old-build run of the same capture (that frame has ~23k px run-to-run noise) |

## 3. MCP servers and plugins
| Item | Status | Live operation |
|---|---|---|
| Spector MCP (project `.mcp.json`) | WORKING | load_url on the game (`?s3=intunnel`), list_canvases (`#view` 540x1080 WebGL2), get_context_info (WebGL2, GLSL ES 3.00), capture_frame: 1409 commands, 209 draw calls, 51 programs, no GL errors |
| Playwright MCP (org-synced `playwright` plugin, Microsoft) | PARTIAL | browser_tabs, navigate, evaluate (three r170, WebGL2) work; browser_take_screenshot times out on the live game (5 s limit; known): use the project scripts for frames |
| `parallax-threejs` plugin 0.4.12 | NEEDS USER ACTION | not enabled on this account (ListPlugins: none; synced plugins: playwright, typescript-lsp only) |
| chrome-devtools MCP, threejs-devtools MCP | MISSING (plugin) | no tools in this session; they come with parallax-threejs |
| Agents scenario-author / shader-reviewer / visual-debugger | MISSING (plugin) | not in the Agent list; they come with parallax-threejs |

## 4. Tools (each ran a real operation)
| Tool | Version | Test | Status |
|---|---|---|---|
| Node / npm / esbuild | 22.23.4 | `node build.mjs` | WORKING |
| three.js | r170 | game renders | WORKING |
| Playwright + Chromium | 1.63.0 | shots56 captures, coverage diagnosis | WORKING |
| Blender | 5.2.3 LTS | imported gear_v2_tripo.glb: 1 mesh, 11,774 verts | WORKING |
| glTF Transform | 4.5.1 | inspect gear_v2_tripo.glb (meshopt + quantization) | WORKING |
| gltfpack | 0.25 | repacked coin_v2_tripo.glb | WORKING |
| glTF Validator | (check_models.cjs) | 40 GLB, 0 errors | WORKING |
| FFmpeg | 6.1.1 | H.264 encode 432x768, 60 frames, ffprobe | WORKING |
| OpenCV / scikit-image | 5.0.0 / 0.26.0 | import | WORKING |
| PyTorch / LPIPS / Optuna | 2.15 | LPIPS approved Scene 5 vs game Tap to Start = 0.609 | WORKING |
| Deno, ImageMagick, Git LFS, Vite | 2.9.6 / 6.9.12 / 3.4.1 / 8.3.5 | versions | WORKING |
| Tripo CLI + API | 0.11.2 | network secret saved this session for openapi.tripo3d.ai; `tripo balance` 1,060 (0 frozen); `tripo doctor` ok | WORKING (0 credits spent) |

## 5. Autosave
Exactly ONE `Tools/autosave.sh` process (started by the SessionStart hook, pinned to `ccr-212bb6a5-36pep9`); every round pushes the session branch,
the lanes (`lanes.sh save`) and fast-forwards kc4ecl; save history in `~/.bubblewash-autosave/save_history.log` (every line `github=VERIFIED`).

## 6. Lanes and specialists (live tests = their first real task)
See `PARALLEL_LANES.md` "Lane status". Lanes recovered from GitHub: girl12, washer34, s56, ui (+ new arch56). Launched this session: game-art-director
(Scene 5/6 inventory), gameplay-visual-testing (baseline QA), lighting-visual-matching (arch56), screen4-water-motion-engineer (s56 water),
water-vfx-engineer (washer34 continuity). Paused (CPU: 4 cores, software WebGL; the user's newest priority is Scenes 5/6): girl12, ui.
Results are recorded in `CURRENT_PROJECT_STATUS.md` as they arrive.

## 7. What only the user can do (cannot travel through Git)
1. Enable `parallax-threejs` (claude.ai -> Customize -> Plugins -> Anthropic Directory, community publisher -> enable), then start a NEW session.
2. If an MCP server shows "failed" at start: type `/mcp` and reconnect it.
3. The Tripo key: done this session (network secret on the environment `bubblegame`); other environments need their own.
