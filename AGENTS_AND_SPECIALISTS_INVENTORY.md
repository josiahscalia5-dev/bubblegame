# Agents and specialists (8 November 2026, session bb87ba9f; every status below was tested LIVE in this account this session)

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
