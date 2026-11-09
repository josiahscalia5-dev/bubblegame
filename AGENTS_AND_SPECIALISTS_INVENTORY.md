# Agents and specialists: inventory

## NEWEST: 9 November 2026 ~14:40 UTC, session d847dce2 (account-transfer backup). Saving a definition does NOT activate it on another account.
| Agent / skill | Owner (where it lives) | Declared tools | Live test this session (a real task) | Status | Restore on the next account |
|---|---|---|---|---|---|
| game-art-director | PROJECT: `.claude/agents/game-art-director.md` | Read, Grep, Glob, Bash | launched (Scene 5/6 inventory); stopped by the user's pause before its report | INVOKED, result not delivered | loads from the repo by itself; relaunch with a real task |
| gameplay-visual-testing | PROJECT: `.claude/agents/gameplay-visual-testing.md` | Read, Grep, Glob, Bash | ran the route test: 3 routes to Level Complete, 5 socks, 0 errors (`Previews/.../11_scene56_match_d847dce2/qa/routes/`) | WORKING (Bash + Playwright scripts) | loads from the repo |
| lighting-visual-matching | PROJECT: `.claude/agents/lighting-visual-matching.md` | Read, Grep, Glob, Bash, Edit, Write | wrote `s56_arch.js` (+361 lines, builds) on lane arch56 | WORKING, task unfinished | loads from the repo; continue lane arch56 |
| screen4-water-motion-engineer | PROJECT: `.claude/agents/screen4-water-motion-engineer.md` | Read, Grep, Glob, Bash, Edit, Write + plugin chrome-devtools / threejs-devtools tools | water A/B tools and frames on lane s56; its MCP tools were ABSENT (plugin not enabled) | PARTIAL (works with Bash; no DevTools) | loads from the repo; DevTools need the plugin |
| water-vfx-engineer | PROJECT: `.claude/agents/water-vfx-engineer.md` | Read, Grep, Glob, Bash, Edit, Write | launched on lane washer34; confirmed its tools; stopped by the pause before any edit | INVOKED, no output | loads from the repo |
| bubble-wash-screen-matcher (skill) | PROJECT: `.claude/skills/bubble-wash-screen-matcher/SKILL.md` | (instructions) | loaded with the Skill tool; header updated with the current Scene 5/6 targets and the no-credits rule | WORKING | loads from the repo |
| scenario-author, shader-reviewer, visual-debugger | PLUGIN `parallax-threejs` 0.4.12 (not in the repo) | Read / Bash only (known plugin defect: no MCP tools in subagents) | not available: the plugin is not enabled on this account (ListPlugins empty) | MISSING, NEEDS USER ACTION | the user enables `parallax-threejs` (claude.ai -> Customize -> Plugins), then a NEW session; test each with a real task |
| SessionStart hook | PROJECT: `.claude/hooks/session-start.sh` + `.claude/settings.json` | runs `Tools/session_preflight.sh`, starts ONE autosave | ran at this session's start and resume | WORKING | loads from the repo |

## NEWEST: live tests of 9 November 2026, session f28099bc (account transfer). Each agent's live test was a REAL task.

| Agent / skill | Source | Tools it really had | Live test this session | Result |
|---|---|---|---|---|
| game-art-director | project `.claude/agents/` | Read, Grep, Glob, Bash (+ image viewing, Python/OpenCV) | per-scene ranking of the six approved scenes vs the real baseline (`evidence/qa/art_director_ranking.md`) | WORKING |
| gameplay-visual-testing | project | Read, Grep, Glob, Bash | route test + `?s3=intunnel` identity proof (see PARALLEL_LANES.md for its result) | see lane status |
| lighting-visual-matching | project | + Edit, Write | girl12 lane: Scenes 1-2 pass | see lane status |
| water-vfx-engineer | project | + Edit, Write | washer34 lane: Scenes 3-4 pass | see lane status |
| screen4-water-motion-engineer | project | + chrome-devtools MCP; threejs-devtools MCP only when connected | s56 lane: controlled pale-water diagnosis + fix | see lane status |
| parallax-threejs:shader-reviewer | plugin 0.4.12 | Read, Grep, Bash (+ Deno); NO MCP | review of the s56 lane's GLSL: no blockers; foam colour above the bloom threshold (P1), stale crest lines (W1), 2 latent compile traps (B1, B2) (`evidence/shader_review/REVIEW.md`) | PARTIALLY WORKING (no MCP) |
| parallax-threejs:scenario-author | plugin 0.4.12 | Read, Glob, Write, Bash; NO MCP | regression scenario for the pickup fix (offset on m.tilt), type-checked against `test/visual/lib/types.ts` (`evidence/qa/scenario_draft/`) | PARTIALLY WORKING (no MCP; not yet replayed) |
| parallax-threejs:visual-debugger | plugin 0.4.12 | Bash; NO MCP | runtime GL state at Tap to Start (`evidence/visual_debugger/FINDINGS.md`) | see lane status |
| general-purpose | Claude Code | all | ui lane: HUD restyle under body.s56 | see lane status |
| skill bubble-wash-screen-matcher | project `.claude/skills/` | instructions | used by the coordinator for the six-scene sheets | present |

**How to verify each agent in the next session (small real tests, ~5-10 min each; every browser run through `flock /tmp/bw_browser.lock`):**
- game-art-director: "rank the 3 largest differences of `<baseline frame>` vs `01_Surprise_Hideout.png`, with measurements" (read-only).
- gameplay-visual-testing: `S3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56 ROUTE=upper node WebDemo/tools/level1/flow_routes.cjs $PWD/WebDemo <out>`; report coins, socks, enemies, errors.
- lighting-visual-matching / water-vfx-engineer / screen4-water-motion-engineer: one capture of their lane's scene (`shots6.cjs` / `shots56.cjs`) and a list of differences vs the reference, in their lane worktree.
- shader-reviewer: review `WebDemo/src/s56_tunnel.js` GLSL + bindings (read-only); scenario-author: draft a scenario into a scratch folder;
  visual-debugger: collect renderer / bloom / water-material state with `shots56.cjs EVAL=...`.
- MCP: the coordinator calls one tool per server itself (subagents of the plugin get none).


## NEWEST: live tests of 9 November 2026, session ac4e3449 (a new account)

Machine-readable: `Tools/agents_inventory.json`. The parallel lanes these agents work in are in `PARALLEL_LANES.md`.

Project agents (`.claude/agents/`) and the project skill load from the repository on any account. The three `parallax-threejs:` agents and the
four MCP servers need the plugin enabled on the account (claude.ai, Customize, plugins), followed by a new session.

| Agent / skill | Source | Tools it really had | Live test (this session) | Lane / use |
|---|---|---|---|---|
| game-art-director | project | Read, Grep, Glob, Bash | PASSED: Scene 5/6 gap ranking with measurements | QA (read-only) |
| gameplay-visual-testing | project | Read, Grep, Glob, Bash | running: route test + identity proof | QA |
| lighting-visual-matching | project | + Edit, Write | PASSED: Scene 5 colour/geometry targets | girl12 (Scenes 1-2) |
| water-vfx-engineer | project | + Edit, Write | PASSED: track/water API audit | washer34 (Scenes 3-4) |
| screen4-water-motion-engineer | project | + chrome-devtools, threejs-devtools MCP | PARTIALLY WORKING: chrome-devtools fine; threejs-devtools picks the opening's renderer, `run_js` timed out under load. It found the pickup-offset bug | s56 (Scenes 5-6) |
| parallax-threejs:scenario-author | plugin 0.4.12 | Read, Glob, Write, Bash (no Playwright MCP: plugin naming defect) | PASSED: capability check; the harness has no scenarios yet | after the user accepts a scene |
| parallax-threejs:shader-reviewer | plugin 0.4.12 | Read, Grep, Glob, Bash (no MCP) | PASSED: tunnel lane GLSL review, 2 fixes applied | GLSL review before merges |
| parallax-threejs:visual-debugger | plugin 0.4.12 | Bash + Spector MCP (12 tools) | PASSED: Spector `list_canvases`; hero screen box | runtime diagnosis |
| general-purpose (built in) | Claude Code | all | running | ui lane (HUD) |
| skill bubble-wash-screen-matcher | project | (instructions) | present; written for Screens 3/4, so give it the six-scene references | comparisons |

MCP servers, each called live by the coordinator this session:

| Server | Tools called | Status |
|---|---|---|
| chrome-devtools | `list_pages`, `navigate_page` | ACTIVE AND TESTED |
| threejs-devtools | `bridge_status`, `renderer_info`, through the `localhost:9222` proxy | ACTIVE AND TESTED |
| playwright | `browser_tabs` | ACTIVE AND TESTED |
| spector | `load_url`, `list_canvases` | ACTIVE AND TESTED |

If one is listed but fails, type `/mcp` and reconnect it. Park pages on `about:blank` after use: a page left running the game costs about 120 % CPU.

---

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

Agent work this session is all finished (no agent was running at the backup); their reports are in the chat history `ChatHistory/2026-11-08_session_bb87ba9f*.md` (exported by the autosave).

Project agents live in the repository (`.claude/agents/*.md`) and load automatically in any account. The three Parallax agents come with the
account-level plugin `parallax-threejs` (they do NOT travel through Git). Full history: `Tools/FULL_AGENT_PLUGIN_TOOL_INVENTORY.md` (sections 2, 3, 13, 14).

| Name | Kind / file | Purpose | Tools it needs | Status in this account (live test) | Restore on a new account | Known limits |
|---|---|---|---|---|---|---|
| game-art-director | project agent `.claude/agents/game-art-director.md` | read-only visual reviewer: compares real captures with an approved image, ranks differences | Read, Grep, Glob, Bash | WORKING (compared master / v5 / pass 17a / 18b with pixel measures) | automatic | its instructions name the Classic Screen 4 as the target: for the six scenes, name the references in the prompt |
| gameplay-visual-testing | project agent | Playwright gameplay checks, captures, recordings, identity proofs | Read, Grep, Glob, Bash (+ Playwright 1.63, Chromium) | WORKING (`?s3=intunnel` ready 24 s, WebGL2, r170, 0 errors) | automatic | software WebGL: slow; one browser at a time |
| lighting-visual-matching | project agent (edits) | architecture, lighting, materials, colour | Read, Grep, Glob, Bash, Edit, Write | WORKING (mapped PASTEL16 with line numbers) | automatic | give it its own files / worktree |
| water-vfx-engineer | project agent (edits) | water, splash, bubbles, VFX | Read, Grep, Glob, Bash, Edit, Write | WORKING (verified the pass 17 water patch anchors in node) | automatic | the user forbids water changes outside switches |
| screen4-water-motion-engineer | project agent (edits; live MCP) | the water touching the character, swim motion, post passes, with live DevTools | the above + 9 threejs-devtools + 4 chrome-devtools MCP tools | WORKING with MCP (bridge_status, renderer_info, object_details, console) | automatic; needs the parallax plugin for its MCP tools | MCP tools need a page on :3000 opened via :9222 |
| bubble-wash-screen-matcher | project SKILL (not an agent) `.claude/skills/bubble-wash-screen-matcher/` | compare game captures with approved screens (`WebDemo/tools/screen4/compare_s4.py`) | Python visual venv | WORKING (ΔE2000 comparison ran; arguments `label=path`) | automatic | its colour classes are Screen 4's |
| parallax-threejs:shader-reviewer | plugin agent | static GLSL / binding review | Read, Grep, Glob, Bash (+ threejs-devtools, missing) | WORKING for static review; LIMITED (no MCP tools) | enable the plugin (TOOLS doc) | plugin naming defect: its MCP tools never attach |
| parallax-threejs:visual-debugger | plugin agent | runtime render debugging | Bash + the project's 13 `mcp__spector__*` | LIMITED: Spector only; no threejs / chrome / playwright tools | enable the plugin | same defect |
| parallax-threejs:scenario-author | plugin agent | writes visual-regression scenarios (`test/visual/`) | Read, Glob, Write, Bash (+ playwright, missing) | LIMITED: no Playwright MCP | enable the plugin | same defect; no scenario exists yet |

No custom slash commands exist (`.claude/commands/` never existed). Hooks: `.claude/hooks/session-start.sh` (autosave), registered in `.claude/settings.json`
(which also enables the project MCP server `spector` from `.mcp.json`).
Suggested split for the six-scene work (separate files, no shared edits): characters / opening timeline (`opening3d.js`) = lead session; drum-tunnel
props and materials = lighting-visual-matching (a new module); captures / recordings / checks = gameplay-visual-testing; reviews = game-art-director.
