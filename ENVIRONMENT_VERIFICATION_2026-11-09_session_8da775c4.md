# Environment verification, 9 November 2026, sessions 8da775c4 and 208385b7 (new Claude account)

Two sessions ran on the new account this evening. **8da775c4** (branch `ccr-3007f6bb-28xi48`, started 21:07 UTC, BEFORE the parallax plugin was
enabled) and **208385b7** (branch `ccr-388d7871-d9noqr`, started 21:57 UTC, WITH the plugin). Each line says which session made the live test.
"Working" = called or run successfully in that session, not "the file exists".

| Component | Installed | Connected / enabled | Tested live | Result |
|---|---|---|---|---|
| Git + GitHub push (repo josiahscalia5-dev/bubblegame) | yes | yes | 8da775c4: 12+ verified pushes, a new checkpoint branch, fast-forwards of the active branch | Working |
| GitHub connector (MCP) | yes | yes | 8da775c4: `list_branches` | Working |
| Autosave every 5 min + SessionStart hook | yes | yes (1 process) | 8da775c4: hook ran at start and at both resumes; saves VERIFIED on GitHub | Working |
| Restore script `Tools/restore_session.sh` | yes | - | 8da775c4: 27 passed, 2 notes, 0 failed; committed bundle = fresh build | Working |
| Node 22.23 / npm / three r170 / esbuild build | yes | - | 8da775c4: many builds | Working |
| Playwright 1.63 + Chromium (software WebGL), phone viewports | yes | - | 8da775c4: every capture and route test (432x768, 864x1536) | Working |
| Level 1 route test `flow_routes.cjs` | yes | - | 8da775c4: baseline reproduced: Level Complete, 5 socks, 125 coins, 2 gems, 3 stars, 0 console errors | Working |
| Models | yes | - | 8da775c4: 183 GLB in the repository (72 in WebDemo/models: `check_models.cjs` 0 failed); girl, washer, basket, mascot, glow tank, gear present | Working |
| Approved references | yes | - | 8da775c4: six portrait scenes 6/6; the three journey references and the three opening references stored with SHA-256 | Working |
| Blender 5.2.3 (headless) | yes | - | 8da775c4: imported `glow_tank.glb` (5 meshes, 3,078 vertices); scripts `Tools/blender_glow_tank.py`, `blender_drop_parts.py` present | Working |
| glTF Transform 4.5.1, gltfpack 0.25, Khronos validator | yes | - | 8da775c4: `inspect`, `check_models.cjs` | Working |
| FFmpeg 6.1 | yes | - | 8da775c4: H.264 encode + ffprobe | Working |
| OpenCV 5.0 / scikit-image 0.26 (visual venv) | yes | - | 8da775c4: SSIM on the approved Screen 6 | Working |
| PyTorch 2.15 / LPIPS / Optuna 5 (metrics venv, optional) | yes | - | 8da775c4: an LPIPS evaluation | Working |
| Tripo CLI 0.11.2 + API (network secret) | yes | yes | 8da775c4: `tripo doctor` ok, `tripo balance` 700 (free calls; 0 credits spent) | Working |
| Sketchfab API (optional) | - | no | 8da775c4: no response through the proxy | Not connected (optional; needs a network secret for api.sketchfab.com) |
| Spector MCP (project `.mcp.json`) | yes | yes | 8da775c4: `load_url` + `capture_frame` on Classic Screen 4: 209 draw calls, 51 programs, no GL errors. 208385b7: the same numbers | Working |
| Playwright MCP (org-synced Microsoft plugin) | yes | yes | 8da775c4: `browser_tabs` | Working |
| parallax-threejs plugin 0.4.12 | 208385b7: yes; 8da775c4: no (enabled after it started) | 208385b7 only | 208385b7: its agents listed and launched, `chrome-devtools-mcp navigate_page` called | Working in sessions started after it was enabled |
| chrome-devtools-mcp / threejs-devtools-mcp (plugin) | 208385b7 | 208385b7 | 208385b7: chrome-devtools `navigate_page` called by the water engineer; threejs-devtools proxy started (9222 -> 3000), bridge call not completed (usage limit) | Partly verified |
| Specialist: game-art-director | yes | yes | 208385b7: completed a real review of the swim7 frames (ranked list, in `ChatHistory/2026-11-09_session_208385b7_design_agent_transcripts.md`) | Working |
| Specialist: character-animation-specialist | yes | yes | 8da775c4: launched on lane girl12, ran until the usage limit | Launched; stopped by the usage limit |
| Specialists: water-vfx-engineer, lighting-visual-matching, screen4-water-motion-engineer | yes | yes | 208385b7: each launched and used its tools (29, 23 and 3 steps) until the usage limit | Launched; stopped by the usage limit before reporting |
| Specialist: gameplay-visual-testing | yes | listed | not launched this evening | Installed only |
| Skill: bubble-wash-screen-matcher | yes | listed in both sessions | not invoked | Installed only |
| Plugin agents: visual-debugger, scenario-author | 208385b7 | yes | 208385b7: both completed (Spector capture; the visual test harness is scaffolded but has no scenarios) | Working (they get no browser MCP tools: the known plugin defect) |
| Plugin agent: shader-reviewer | 208385b7 | yes | 208385b7: launched, 9 steps, stopped by the usage limit | Launched |

## What needs the user
1. **Use ONE session at a time.** Both sessions' autosaves fast-forward `claude/bubble-wash-transfer-screen6-to82gp`; when both run, each must merge
   the other first (normal merges only). Session 8da775c4 merged 208385b7's commits at 22:27 UTC.
2. The parallax plugin is loaded only in sessions started after it was enabled (208385b7 and later). In 8da775c4 the project's Spector MCP and
   the Playwright MCP cover capture and WebGL inspection.
3. The account's usage limit stopped every specialist at about 22:07-22:12 UTC (reset shown as 02:00-02:50 UTC). Specialists were not relaunched.
4. Sketchfab (optional) is not connected. Nothing else is missing.
