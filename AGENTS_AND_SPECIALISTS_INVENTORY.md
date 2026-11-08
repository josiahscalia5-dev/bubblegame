# Agents and specialists (8 November 2026, session bb87ba9f; every status below was tested LIVE in this account this session)

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
