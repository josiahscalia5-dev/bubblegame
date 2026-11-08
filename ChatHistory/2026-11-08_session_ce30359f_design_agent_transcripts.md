# Session ce30359f, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Test game-art-director agent (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Harmless verification task for an account-restoration audit (read-only; do not edit, commit or create any files).

Compare this live gameplay capture, taken a few minutes ago from the real three.js game at `?s3=intunnel` (412 x 915, chrome-devtools MCP):
`/tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/mcp_live_intunnel.png`
against the ORIGINAL approved Screen 4:
`/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`

Note: `?s3=intunnel` is the look the user has ACCEPTED, and this capture is the pre-start "Tap to Start" frame, so differences are expected and nothing will be changed. The goal is only to prove you load, can read images, and can run one Bash command.

Report, in under 200 words: (1) which tools you actually had available (list them); (2) the output of `md5sum /home/user/bubblegame/WebDemo/game.bundle.js`; (3) the 3 most visible differences between the two images, ranked, one line each.

- 17:40 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/mcp_live_intunnel.png
- 17:40 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
- 17:40 `Bash`: Compute the game bundle checksum
**Agent** (17:40 UTC):

1. **Tools I had:** Read, Grep, Glob and Bash. Your instructions also mention Claude_Docs and GitHub MCP servers, but I had no tools from them, and I did not need them.

2. **Bundle checksum:**
```
d2a666bd70926c4a1360dc08d02ecc41  /home/user/bubblegame/WebDemo/game.bundle.js
```

3. **The 3 most visible differences, largest first** (the capture is 412 x 915 and the original 767 x 1536, so the framing is not exactly the same):
   1. **Tunnel:** the game's tunnel is a busy, high-contrast rainbow-and-white swirl with a pale, washed-out centre. The original has clear cobalt and turquoise rings round a soft, warm, glowing centre.
   2. **Character:** in the game she is a smaller, flatter pink fur hump, partly hidden behind pale white surf. In the original she is larger, rounder and magenta, with little ears, sitting on top of blue water.
   3. **Washer rim and brushes:** the game's rim is a flat silver-lavender band, and its pom-pom brushes are smaller and pushed to the screen edges. The original has a gold-orange metal rim at the upper right and larger brushes.

The game also shows a "Tap to Start" button and labels on the power-up buttons, which is expected before the run starts.


_3 tool steps._

---

## Gameplay & Visual Testing specialist: Test gameplay-visual-testing agent (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Harmless verification task for an account-restoration audit. Do not edit, commit or push anything; write output only under `/tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests/`.

The game is already served at http://127.0.0.1:3000/ (python http.server in /home/user/bubblegame/WebDemo). Another browser is open on it, so launch only ONE Chromium and close it promptly (software WebGL on 4 cores).

1. `cd /home/user/bubblegame && source Tools/bw_tools_env.sh`.
2. With Playwright (require('playwright'), chromium.launch() with no options, run the script from /home/user/bubblegame/WebDemo so the module resolves), open `http://127.0.0.1:3000/index.html?s3=intunnel` at 412 x 915, wait until `window.__bw && window.__bw.debug` exists (up to 30 s), then report: WebGL2 true/false, the three.js REVISION if available, console errors (ignore favicon.ico 404 and SwiftShader/GPU-stall warnings), and save one screenshot to the folder above.
3. Report `md5sum WebDemo/game.bundle.js` and `git -C /home/user/bubblegame log -1 --format=%h -- WebDemo/game.bundle.js`.

Reply in under 200 words: the tools you actually had, PASS/FAIL for each step, the screenshot path.

- 17:40 `Bash`: Source tool env, get bundle md5 and commit, check server
- 17:40 `Bash`: Write Playwright probe script and check browser lock
- 17:40 `Bash`: Check browser lock file and running Chromium count
- 17:40 `Bash`: Run one headless Chromium probe of the intunnel game
- 17:41 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests/intunnel_412x915.png
**Agent** (17:41 UTC):

All three steps passed. I edited, committed and pushed nothing. The only new files are the probe script and the screenshot in the scratch folder.

**Tools I had:** `Tools/bw_tools_env.sh` sourced without problems (`BW_PY` and `NODE_PATH` both set), Node with Playwright and the pre-installed Chromium, `md5sum`, `git`, `curl` and `flock`. The server at port 3000 answered 200.

1. **Setup: PASS.**
2. **Browser probe: PASS.** I launched one headless Chromium under the shared browser lock, ran from `WebDemo`, and closed it at the end. The run exited with code 0.
   - `window.__bw.debug` appeared within 30 s.
   - WebGL2: **true**.
   - three.js REVISION: **"170"**, read from a page global (`window.THREE` or `window.__THREE__`; the probe didn't record which).
   - Console and page errors: **none**, and no failed requests or 4xx/5xx responses at all.
   - The screenshot shows the in-tunnel Tap to Start screen with the HUD, the socks mission, coins, gem, sock, brushes and the pink character on the blue water.
   - One oddity: `__bw.debug` exists but has no enumerable keys.
3. **Bundle: PASS.**
   - `md5sum WebDemo/game.bundle.js`: `d2a666bd70926c4a1360dc08d02ecc41`
   - The last commit touching the bundle (`git log -1 --format=%h`): `4c7868eb`

Files are in `/tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests/`:
- intunnel_412x915.png
- probe.cjs


_5 tool steps._

---

## Tunnel & Lighting specialist: Test lighting-visual-matching agent (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Harmless READ-ONLY verification task for an account-restoration audit. Do NOT edit, write, commit or push anything; do not launch browsers.

In /home/user/bubblegame, read `WebDemo/src/tripo_l1.js` (the opt-in `scene07` "Avoid Enemies!" chamber). Find where the pink-lavender channel walls and gold rails get their colour and lighting (material types, colour values, any emissive or light objects). Report in under 200 words: (1) the tools you actually had available; (2) file:line references for the wall material, the rail material and any lights; (3) one sentence on which of those would most affect how bright the corridor reads compared with `Design/ApprovedScreens/09_Avoid_Enemies.png` (you may view that image).

- 17:40 `Grep`: Material|emissive|Light\(|color|0x[0-9a-fA-F]{6}|#[0-9a-fA-F]{6}
- 17:40 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 17:40 `Grep`: chamberShell|PointLight|SpotLight|HemisphereLight|AmbientLight|DirectionalLight|RectAreaLight|toneMappingExposure
- 17:40 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
- 17:40 `Grep`: scene07_chamberShell|scene07_rail
- 17:40 `Grep`: scene07_chamberShell
**Agent** (17:40 UTC):

1. **Tools I had:** Read, Grep, Glob, Bash, Edit and Write. I only used Read and Grep. I made no edits, ran no builds and opened no browsers.

2. **Where the colour and lighting come from** (all in `/home/user/bubblegame/WebDemo/src/tripo_l1.js`):
   - **Pink-lavender walls:** the colours are painted into a canvas texture by `starTexture()` at lines 66-67 (#f6d2ff, #c58cf0, #ff9fd9, #cf6cc0). `wallM` at lines 83-84 is a MeshStandardMaterial that uses this texture as its own glow map (emissive 0xffffff, intensity 0.32). The tubs use the same setup at line 221 (0.35).
   - **Chamber walls and vault:** `shellM` at line 158 (glowing at 0.45) and `vaultM` at line 174 (0.42).
   - **Gold rails:** `goldM` at lines 85 and 177 (MeshStandardMaterial, colour 0xffdc7a, fully metallic, environment map 1.4, emissive 0x7a5a1c at 0.55). The rail and its posts use it at lines 247 and 249.
   - **Lights:** there are no real three.js light objects. The "lights" are additive glow sprites: the portal glow at line 253, the coloured lights at line 257 and the warm bulbs at lines 262-263.

3. **What most affects brightness:** the walls' self-glow (`emissiveMap` = the texture, at 0.32-0.45) matters most. But line 174 has a bug: the code that creates and adds `scene07_chamberShell` sits after `//`, so it is commented out. That large wall-and-vault mesh is never drawn, and `game.bundle.js` has no `scene07_chamberShell` in it. That likely makes the corridor read darker than the bright pink-lavender walls in `09_Avoid_Enemies.png`.


_6 tool steps._

---

## Water & VFX specialist: Test water-vfx-engineer agent (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Harmless READ-ONLY verification task for an account-restoration audit. Do NOT edit, write, commit or push anything; do not launch browsers.

In /home/user/bubblegame/WebDemo/src, find where Level 1's water surface colour is defined (`level1.js` and anything it imports for the `wet` chamber water). Report in under 150 words: (1) the tools you actually had available; (2) file:line of the water material(s) and their main colour values; (3) whether that water shares any material or shader with the accepted Screen 4 tunnel water (heroSwell / lqFloor / matchFloor), yes or no with the evidence line.

- 17:40 `Grep`: ^import|Material\(|color|Color\(
- 17:40 `Grep`: WET|wet
- 17:40 `Grep`: function waterFrag|function waterFragWet|vec3 [A-Za-z]+ = vec3\(|heroSwell|lqFloor|matchFloor|lqShade|tunnel_r8|tunnel_r9
- 17:40 `Grep`: ^import|heroSwell|lqFloor|matchFloor|lqShade|waterMat|Material\(
- 17:40 `Grep`: waterFragWet|WATER_VERT_WET|WATER_VERT\b
- 17:40 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 17:40 `Read`: /home/user/bubblegame/WebDemo/src/level1_flow.js
- 17:40 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
**Agent** (17:40 UTC):

1. **Tools I had:** Read, Grep, Glob, Bash, Edit and Write. I used only Grep and Read, and changed nothing.

2. **Where the water is defined**, all in `/home/user/bubblegame/WebDemo/src/level1.js`:
   - `waterFrag()` at line 248 sets the colours: deep `#0b2fb8`, mid `#1d63f2`, turquoise `#35c9ff`, foam `#f2fbff`, lavender `#a99cf0`.
   - `waterMat` at line 360 uses `WATER_VERT` (line 236) with `waterFrag()`.
   - The `wet` chamber's `wetWaterMat` is at line 389. It uses `waterFragWet()` (lines 290-299), which is `waterFrag()` with text edits. It adds a distant mean blue `vec3(0.012,0.1,0.7)`, a hand-off blend `vec3(0.06,0.5,0.95)` and a lighter strip just ahead of her `vec3(0.05,0.42,1.0)`.
   - Separately, the trough walls in `/home/user/bubblegame/WebDemo/src/level1_flow.js` (`troughM`, line 137) use cobalt `vec3(0.02,0.09,0.62)` to `vec3(0.06,0.28,0.95)`.

3. **Shared with the Screen 4 tunnel water? No.** Both shaders are written separately inside these files, and the only imports are three, `fluffy_brush`, `world` and `level1_flow` (lines 29-32). heroSwell appears only in a comment (line 12). lqFloor and matchFloor appear in neither file.


_8 tool steps._

---

## screen4-water-motion-engineer: Test screen4-water-motion-engineer MCP (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Harmless READ-ONLY live-tool verification for an account-restoration audit. Do NOT edit or write files, commit, navigate, reload, resize, or change any uniform, material or scene state.

The real game is ALREADY open in the chrome-devtools MCP browser at http://localhost:9222/index.html?s3=intunnel (412 x 915), and its scene is exposed to threejs-devtools (window.__THREE_SCENE__ etc.).

Using ONLY your MCP tools:
1. threejs-devtools `bridge_status`.
2. threejs-devtools `object_details` or `geometry_details` on the mesh named `output_unwrapped` (the character), and report its vertex count and material type.
3. threejs-devtools `renderer_info`: report programs and texture count.
4. chrome-devtools `evaluate_script` with `() => ({ url: location.href, webgl2: !!document.createElement('canvas').getContext('webgl2') })`.
5. chrome-devtools `list_console_messages` (errors only).

Reply in under 200 words: which MCP tools you actually had (exact names), and the result of each step, PASS or FAIL.

- 17:40 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status`
- 17:40 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__geometry_details`
- 17:40 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__object_details`
- 17:40 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__renderer_info`
- 17:40 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 17:40 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__list_console_messages`
- 17:41 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__run_js`
**Agent** (17:42 UTC):

All five checks passed. I changed nothing. The only extra call was one read-only `run_js` lookup, because the devtools showed the material's type only as a minified name.

**Tools I used:** `mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status`, `__object_details`, `__geometry_details`, `__renderer_info`, `__run_js`, `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script` and `__list_console_messages`. The `plugin:parallax-threejs:spector` server failed to connect ("Connection closed"), so none of its tools were available.

1. **`bridge_status`: PASS.** The bridge is connected, the proxy runs from localhost:9222 to localhost:3000, and the three.js app is reachable.
2. **`output_unwrapped`: PASS.**
   - It has 147,212 vertices and 150,071 triangles (450,213 indices).
   - It is a plain mesh, not skinned.
   - Its material is `MeshBasicMaterial`: double-sided, opaque, normal blending, one colour map.
3. **`renderer_info`: PASS.** 54 programs and 36 textures (also 115 geometries, a 412 x 915 canvas, pixel ratio 1).
4. **`evaluate_script`: PASS.** It returned `{"url":"http://localhost:9222/index.html?s3=intunnel","webgl2":true}`.
5. **`list_console_messages` (errors only): PASS.** There is one error, "Failed to load resource: 404 (Not Found)". The console doesn't say which file is missing, and the scene renders anyway.


_7 tool steps._

---

## parallax-threejs:visual-debugger: Test parallax visual-debugger agent (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Tool-access check for an account-restoration audit (READ-ONLY: do not navigate, reload, change scene state, or run any Bash command that modifies files).

A three.js game is already open in the chrome-devtools MCP browser at http://localhost:9222/index.html?s3=intunnel and its scene is exposed to threejs-devtools. Please try, in order: threejs-devtools `bridge_status`; threejs-devtools `renderer_info`; chrome-devtools `list_console_messages`; spector `list_canvases`.

Report in under 150 words: the EXACT list of tool names you actually have in this run, and for each of the four calls: worked / tool not available / error (with the message). Do not substitute Bash or other workarounds for a missing tool: if a tool is not available, say so.

**Agent** (17:40 UTC):

I only have one tool in this run: **`Bash`**. No threejs-devtools, chrome-devtools or spector MCP tools are available to me, and no deferred tools appeared during the run.

Results for the four calls:

1. threejs-devtools `bridge_status`: tool not available. I did not call it.
2. threejs-devtools `renderer_info`: tool not available. I did not call it.
3. chrome-devtools `list_console_messages`: tool not available. I did not call it.
4. spector `list_canvases`: tool not available. I did not call it.

As you asked, I didn't use Bash or anything else instead. I didn't run any commands, touch the browser, or change any files or scene state.

For the audit, this means the MCP servers aren't reaching this subagent. Either they aren't set up in this account's environment, or they aren't passed through to subagents. It's worth checking the MCP server registration (`.mcp.json` / settings) and the agent's tool allowlist in `.claude/agents/`.


_0 tool steps._

---

## parallax-threejs:shader-reviewer: Test parallax shader-reviewer agent (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Tool-access and harmless review check for an account-restoration audit (READ-ONLY: do not edit or write files).

1. Report the EXACT list of tool names you have in this run. Try one threejs-devtools MCP call (`shader_list`) against the game already open at http://localhost:9222/index.html?s3=intunnel; report worked / tool not available / error.
2. Statically review the ShaderMaterial(s) in `/home/user/bubblegame/WebDemo/src/tripo_l1.js` (the opt-in scene07 chamber): check that every uniform declared in GLSL is supplied in the JS `uniforms` object and vice versa, and that vertex/fragment varyings match. Report findings with file:line, or "no binding mismatches".

Under 200 words.

- 17:40 `Glob`: **/check-shader-bindings.ts
- 17:40 `Grep`: ShaderMaterial|uniforms\s*:|uniform |varying 
- 17:40 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 17:40 `Bash`: Run static shader binding check on tripo_l1.js
- 17:40 `Grep`: l1Wall|vTU
- 17:41 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 17:41 `Grep`: wallMat\s*=|ShaderMaterial
- 17:41 `Grep`: function wallFrag\b|^const NOISE|void main
**Agent** (17:41 UTC):

**1. Tools in this run:** `Read`, `Grep`, `Glob`, `Bash`. I have no threejs-devtools MCP tool, so I couldn't run `shader_list`. Separately, the MCP server `plugin:parallax-threejs:spector` failed to connect ("Connection closed"). That's a connection failure, not a missing setup, so it can be retried. Because of this, the review below is from the source files only, not the live shader.

**2. Static review of `/home/user/bubblegame/WebDemo/src/tripo_l1.js`:**

This file creates no `ShaderMaterial`. It changes one that already exists: in `openTube()` it finds the Level 1 wall material (`l1Wall`, a `ShaderMaterial` built at `/home/user/bubblegame/WebDemo/src/level1.js:331`) and edits its fragment shader.

- The script's only finding was: `JS uniforms object sets "uOpen07", no matching GLSL uniform declaration found`. **This is a false positive.** Line 146 adds `uniform vec3 uOpen07;` to the shader through a string `.replace()`, which the regex-based script doesn't follow. Line 145 supplies the value, so the two match.
- **Varyings match.** The injected code reads `vTU`. The wall fragment shader declares it (`level1.js:185`, before `void main()` at line 187), and both vertex shader versions write it (`level1.js:135-139`).
- The fragment shader has a single `void main()`, so the replace at line 146 hits the right place.

**Result: no binding mismatches.**


_8 tool steps._

---

## parallax-threejs:scenario-author: Test parallax scenario-author agent (started 17:40 UTC)

**Lead → agent** (17:40 UTC):

Tool-access check only, for an account-restoration audit. Do NOT write, create or edit any file, and do not run Bash commands that change anything (read-only commands like `ls` are fine).

1. Report the EXACT list of tool names you have in this run.
2. Try the playwright MCP tool `browser_tabs` with action "list"; report worked / tool not available / error.
3. Check whether `/home/user/bubblegame/test/visual/scenarios/` exists (it should not: the project has not run /parallax-threejs:init). Report what a first scenario for this project would need, in two sentences, without writing it.

Under 150 words.

- 17:40 `Bash`: Check whether visual scenarios directory exists
**Agent** (17:40 UTC):

1. **Tools in this run:** `Read`, `Glob`, `Write`, `Bash`. No MCP tools were exposed to me. The `github` and `Claude_Docs` servers sent instructions but none of their tools reached me. The `plugin:parallax-threejs:spector` server failed to connect ("Connection closed"). That is a connection failure, not a missing setup, so it is worth retrying.

2. **`browser_tabs` (action "list"):** tool not available. No playwright MCP tool was in my tool list, so I couldn't call it.

3. **`/home/user/bubblegame/test/visual/scenarios/`:** does not exist. `/home/user/bubblegame/test/` doesn't exist either, so there is no `lib/types.ts` schema yet. A first scenario needs `/parallax-threejs:init` to create the schema and the `deno task replay` path. After that it would be steps that open `WebDemo/` at a locked `?s3=intunnel` URL and wait for the canvas, with a keyframe compared against the approved Screen 4 and a threshold suited to the moving water (about 0.035 or looser), checked with `replay` before saving.

Nothing was written or changed.


_1 tool steps._

---

## Game Art Director: Art director: Screen 09 differences (started 18:01 UTC)

**Lead → agent** (18:01 UTC):

Activation test for the restored design team, on the CURRENT task. READ-ONLY: do not edit, commit or create files in the repository.

The user's current major goal: the opt-in "Avoid Enemies!" scene (`?s3=intunnel,structmatch,home,level1,tripo1,scene07`) must match the user's approved Screen 09, `/home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png` (the ONLY authority for this screen). The latest game frame at the comparison checkpoint (pass 8, u 233) is `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u233.0.jpg`; the side-by-side of earlier passes is `.../74_scene07_avoid_enemies/05_original_before_pass7_pass8.jpg`; the pass history and remaining list are in `.../74_scene07_avoid_enemies/README.md`. The user approved none of passes 1-8.

Note: a teammate found that in `/home/user/bubblegame/WebDemo/src/tripo_l1.js` line 174 the code that builds and adds `scene07_chamberShell` (the corridor's vault/walls) sits after a `//` comment, so it is never drawn (absent from `WebDemo/game.bundle.js`). You may verify that.

Report in under 300 words: (1) the tools you actually had; (2) the 6 largest visual differences between the approved Screen 09 and the pass 8 frame, ranked by visual impact, each with its owner (architecture/lighting, water, objects/enemy, camera/composition) and whether it is code work or a possible Tripo asset; (3) the ONE correction to make first, and whether restoring the commented-out shell is likely to move the frame closer or further from the original.

**Agent** (18:01 UTC):

I'll look at the approved Screen 09, the pass 8 frame, and the README.

- 18:01 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
- 18:01 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u233.0.jpg
- 18:01 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/README.md
**Agent** (18:01 UTC):

Now I'll check the claim about line 174 and the side-by-side.

- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:01 `Grep`: chamberShell
- 18:01 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/05_original_before_pass7_pass8.jpg
- 18:01 `Grep`: scene07_(deck|portal|chamberShell)
- 18:01 `Grep`: chamber:\s*\{
- 18:01 `Grep`: scene07_(deck|portal|chamberShell)\b
- 18:02 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
**Agent** (18:02 UTC):

**Tools I had:** Read (for images and code), Grep, Glob and Bash. I had no browser, DevTools or Playwright, and I did not run the measurement script. So what follows is visual judgement only, with no numbers.

**The 6 largest differences, by visual impact (approved Screen 09 against pass 8 at u 233):**
1. **The top half.** The original is an enclosed corridor packed with bright machinery all the way up. The game shows empty pale sky with a sun-like glow over about 40% of the frame. Owner: architecture/lighting. Code work (the shell bug below).
2. **Depth.** The original's blue channel winds to a vanishing point near the centre, with objects spread along it. The game camera sees only a short stretch, and everything piles up in the lower middle. Owner: camera/composition. Code.
3. **The enemy.** In the original it is navy, medium-sized, high and right of centre, and clear of her. In the game it is violet, large, on the left, and overlaps her. Owner: objects/enemy. Code: colour and size (the Tripo model exists, so no new job). Its lane is gameplay in `level1.js`.
4. **The coins.** The original's paw coins frame the path at the sides and recede into the distance. The game's sit in the centre and cover her and the enemy. Owner: objects/camera. Code.
5. **The side structures.** The original has a large pink porthole housing on the left and a pink-gold star tub on the right, both at the screen edges. The game's are small and far away, and its gears float in the sky. Owner: architecture. Code first; the housing and tub are possible Tripo assets (kit crops 09/10).
6. **Water and bubbles.** The original's channel stays visible into the distance, with white foam edges and many iridescent bubbles. The game has foreground surf only. Owner: water. Code.

Also different, but outside this ranking: she reads as a flat grainy mat, not the original's round pom-pom (the rules say not to redesign her), and the red "Avoid Enemies!" banner is missing.

**Fix first: restore the shell.** The teammate is right. On line 174 of `/home/user/bubblegame/WebDemo/src/tripo_l1.js`, `const shell = …; root.add(shell);` sits after a `//`, so it never runs. The built game file `/home/user/bubblegame/WebDemo/game.bundle.js` contains `scene07_deck` and `scene07_portal` but not `scene07_chamberShell`. That means the README's pass 8 walls and periwinkle vault were never on screen.

Restoring the shell will likely move the frame closer, because it closes in the empty sky and the original has no sky at all. Two risks to watch:
- The pass 7 complaints could come back: the flat pink-dotted wall and the empty lavender vault.
- The pipes placed 3.7–4.4 m high may poke through the vault, which is only about 4.8–5.0 m high where they stand.

Compare the original, pass 8 and the new frame at u 233, and revert if the new frame looks less like the original.


_10 tool steps._

---

## Gameplay & Visual Testing specialist: Testing agent: gameplay test status (started 18:01 UTC)

**Lead → agent** (18:01 UTC):

Activation test for the restored design team. Do NOT edit game files, commit or push; write any output only under `/tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/`.

1. Inventory the existing gameplay tests in /home/user/bubblegame/WebDemo/tools (e.g. `level1/flow_routes.cjs`, `level1/l1_run.cjs`, `screen3/s3_func.cjs`, `screen3/r2_func.cjs`, `models/traverse.cjs`, `seeded_run.cjs`, `playtest.cjs`): one line each on what it checks.
2. Report their LAST RECORDED status from the evidence logs, e.g. `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/proofs/` (route logs for scene07 passes 5-8 and `identity.txt`) and `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/proofs/`.
3. Run ONE quick live gameplay test of your choice that exercises real controls (lanes / jump / spin / collectibles) on the current build, with at most ONE Chromium at a time (another software-WebGL page is open; respect any browser lock the tools use), and stop it if it would take longer than about 6 minutes. `cd /home/user/bubblegame && source Tools/bw_tools_env.sh` first; the game is also served at http://127.0.0.1:3000/.

Reply in under 250 words: the tools you had, the test inventory, last recorded statuses, and the live test's command and PASS/FAIL with numbers.

- 18:01 `Bash`: List test tools and proof folders
- 18:01 `Bash`: Read header comments of each test tool
- 18:01 `Bash`: Read scene07 route logs and identity proof
- 18:01 `Bash`: Read level1_flow proofs and README test lines
- 18:01 `Bash`: Check build state, browser lock and server
- 18:01 `Bash`: List browser/node processes, server, route test table
- 18:01 `Bash`: Read s3_func and find related logs
- 18:01 `Bash`: Summarise level1 route test JSON and baseline s3_func
- 18:01 `Bash`: Check baseline s3_func switch and variant diff
**Agent** (18:01 UTC):

Running the live test now: `s3_func` on the current build (md5 d2a666bd), using the shared browser lock and a 6-minute limit.

- 18:01 `Bash`: Run s3_func live gameplay check under browser lock
**Lead → agent** (18:04 UTC):

[Request interrupted by user for tool use]


_10 tool steps._

---

## Tunnel & Lighting specialist: Lighting agent: Screen 09 lighting review (started 18:01 UTC)

**Lead → agent** (18:01 UTC):

Activation test for the restored design team, on the CURRENT task. READ-ONLY this time: do not edit, write, build, commit or launch browsers.

Review the LIGHTING and architecture-lighting differences between the user's approved Screen 09, `/home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png` (the authority), and the current opt-in scene07 game frame (pass 8, checkpoint u 233), `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u233.0.jpg`. You may measure both images with `source /home/user/bubblegame/Tools/bw_tools_env.sh` and `$BW_PY` (OpenCV / NumPy), writing only to `/tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/`.

The scene's code is `/home/user/bubblegame/WebDemo/src/tripo_l1.js` (you mapped its materials earlier: walls `wallM` l.83-84, `shellM` l.158, `vaultM` l.174, gold `goldM`, glow sprites l.253-263; and line 174's `scene07_chamberShell` creation is swallowed by a `//` comment).

Report in under 300 words: (1) the tools you had; (2) the 3-4 largest lighting / brightness / colour-temperature differences, with measured numbers where you can (e.g. mean luminance or hue of named regions in both images); (3) the concrete parameter changes (file:line, old -> new) you would make first, in order, all behind the existing `scene07` flag; (4) whether restoring line 174's shell should come first.

- 18:01 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
- 18:01 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u233.0.jpg
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:01 `Bash`
- 18:01 `Grep`: pass 8|chamberShell|shell
- 18:01 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/README.md
- 18:02 `Bash`
- 18:02 `Bash`
- 18:02 `Bash`
- 18:02 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/sbs.png
- 18:02 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/game_portal.png
- 18:02 `Bash`
- 18:02 `Bash`
- 18:03 `Bash`
- 18:03 `Bash`
**Lead → agent** (18:04 UTC):

[Request interrupted by user]


_17 tool steps._

---

## Water & VFX specialist: Water VFX agent: blue-water shaders (started 18:01 UTC)

**Lead → agent** (18:01 UTC):

Activation test for the restored design team, on the CURRENT task. READ-ONLY this time: do not edit, write, build, commit or launch browsers.

Inspect the blue-water shaders and effects the player sees in the "Avoid Enemies!" stretch of Level 1 (`/home/user/bubblegame/WebDemo/src/level1.js`: `waterFrag` ~l.248, `waterMat` ~l.360, `wetWaterMat`/`waterFragWet` ~l.290-389; `level1_flow.js` `troughM` ~l.137; plus any splash / foam / bubble / spray effects layered on that water in level1.js, level1_flow.js or tripo_l1.js). Compare how the water reads in the pass 8 frame `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u233.0.jpg` with the approved Screen 09 `/home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png` (the authority: saturated blue water through a bright pink-gold waterway). You may measure the two images with `source /home/user/bubblegame/Tools/bw_tools_env.sh` and `$BW_PY`, writing only to `/tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/`.

Remember the user's standing water rules (CLAUDE.md): visibly blue/turquoise water, white only as accents, never a white foam blanket, bloom or pale wash; the accepted Screen 4 water must not change.

Report in under 250 words: (1) the tools you had; (2) the water shaders/effects active in that stretch (file:line); (3) the 2 largest water differences with measured numbers; (4) the first correction you would make (file:line, old -> new), behind the `scene07` flag.

- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 18:01 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u233.0.jpg
- 18:01 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
- 18:01 `Grep`: troughM|splash|foam|spray|bubble|Bubble
- 18:01 `Grep`: SCENE07|scene07|water|Water|foam|bubble|splash|spray
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/level1_flow.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:01 `Grep`: splash|foam|Foam|spray|Spray|bubble|Bubble|surf|pad|sparkle|droplet
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 18:01 `Grep`: heroSwell
- 18:01 `Glob`: Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/*
- 18:01 `Grep`: water|Water
- 18:02 `Bash`: Check image sizes and available tools
- 18:02 `Bash`: Make gridded side-by-side of both images
- 18:02 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/grid.png
- 18:02 `Bash`: Measure water colour classes in both images
- 18:02 `Bash`: Crop zoomed lower water regions of both images
- 18:02 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/p8_lower.png
- 18:02 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/agent_tests2/app_lower.png
- 18:03 `Bash`: Measure clean course-water regions
- 18:03 `Grep`: ^const lin|function lin|const v3|colorspace_fragment|tonemapping_fragment
- 18:03 `Grep`: openTube|uChamber|scene07.*wall|wallMat|l1Water
- 18:03 `Grep`: heroGrade|round2Light|gradePass|GradeShader|uGrade
- 18:03 `Grep`: heroGrade|round2Light
- 18:03 `Grep`: Grade|grade
- 18:03 `Grep`: GradeShader = |GradeShader:|export const GradeShader
- 18:04 `Grep`: toneMapping\s*=|toneMappingExposure\s*=
**Lead → agent** (18:04 UTC):

[Request interrupted by user]


_30 tool steps._

---

## screen4-water-motion-engineer: Water-motion agent: swim and live tools (started 18:01 UTC)

**Lead → agent** (18:01 UTC):

Activation test for the restored design team. READ-ONLY: do not edit or write files, commit, navigate, reload, resize, or change any uniform, material, transform or scene state.

1. Code: summarise the CURRENT swim and water-motion implementation in the accepted look and its default layers: `/home/user/bubblegame/WebDemo/src/tunnel_s4_swim2.js` (`SWIM2_ON`, accepted), swim3 in `tunnel_s4_struct.js` / `tunnel_s4_bt.js` (`STRUCT_PARTS`), and Level 1's swim strokes (`level1.js`, `,noswim1`): what drives her stroke, how the water at her follows her travel, and the spray cap.
2. Live tools: the real game is ALREADY open in the chrome-devtools MCP browser at http://localhost:9222/index.html?s3=intunnel (412 x 915) with its scene exposed to threejs-devtools. Using your MCP tools: `bridge_status`; find the hero water mesh (heroSwell or the object your code reading says carries the swell) and read its material (`material_details`) and one shader (`shader_source`), reporting 2-3 uniforms that drive the motion and their current values; chrome-devtools `evaluate_script` to read the game clock or swim phase if the code exposes one (read-only); `list_console_messages` (errors).

Reply in under 300 words: the exact MCP tools you had, PASS/FAIL per live step, and the swim/water-motion summary with file:line references.

- 18:01 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status`
- 18:01 `Grep`: SWIM2_ON|swim|spray|cap|travel|uFlow|uTime|scroll
- 18:01 `Grep`: swim3|SWIM3|STRUCT_PARTS
- 18:01 `Grep`: noswim1|swim1|SWIM1|stroke
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/tunnel_s4_swim2.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/game.js
- 18:01 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 18:01 `Grep`: SWIM2_ON|INTUNNEL_ON =|STRUCT_ON =
- 18:01 `Grep`: swim2FlowPhase|swim2Travel|swim2CapPx|SWIM2_POINT|swim2Hide|SWIM2\.hide
- 18:01 `Grep`: export function swimPose|export const SWIM\b|SWIM = \{|rate:|settle
- 18:01 `Grep`: swim: \{|swim:\{
- 18:01 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__object_details`
- 18:01 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__material_details`
- 18:01 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__shader_source`
- 18:01 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 18:01 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__list_console_messages`
- 18:02 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 18:02 `Read`: /home/user/bubblegame/WebDemo/src/tunnel_s4_swim.js
- 18:02 `Read`: /home/user/bubblegame/WebDemo/src/tunnel_r7_hero_water.js
- 18:02 `Grep`: maxPx
**Agent** (18:02 UTC):

Every live step passed and nothing was changed.

**MCP tools I had:**
- **threejs-devtools:** `bridge_status`, `scene_tree`, `object_details`, `material_details`, `shader_source`, `set_uniform`, `run_js`, `geometry_details`, `renderer_info`.
- **chrome-devtools:** `navigate_page`, `evaluate_script`, `take_screenshot`, `list_console_messages`.
- The Spector server failed to connect ("Connection closed"), so its tools were not available.

**Live steps:**
1. `bridge_status`: **PASS**. Connected, port 9222 proxies to 3000.
2. heroSwell `object_details` / `material_details`: **PASS**. It is a ShaderMaterial: transparent, normal blending, depth test on, no depth write, render order 5, 6,944 vertices.
3. `shader_source`: **PASS**. The fragment shader's water phase is `fl = uTime * uFlow + uSwim2Fl`, which scrolls the texture by `(-fl*0.3, -fl*1.1)`. Values read:
   - `uTime` 5.42 to 5.62, so the clock is running;
   - `uFlow` 1.012;
   - `uSwim2Fl` 0, because she has not travelled yet;
   - `uHeroTravel` 1.592.
4. `evaluate_script`: **PASS**. `__bw.state()` gives phase `intro`, time 5.967, z 1.592, speed 0, not in the air.
5. `list_console_messages`: **PASS**. No errors, only Chrome's software-WebGL deprecation warning.

**Swim and water-motion code:**
- **swim2** (`tunnel_s4_swim2.js`, on in bare `intunnel` per `tunnel_s4_bt.js:142`):
  - `swim2Travel` (:38) adds up the distance she swims, at most 1 m per frame. It is called once a frame from `tunnel_r7_hero_water.js:101`.
  - `swim2FlowPhase` (:43) is that distance × 0.5. It goes into `uSwim2Fl` (`tunnel_r7_hero_water.js:191`), so the swell's water streams past her as she travels.
  - It also hides r3Swirl, r3Whirlpool and r3Bubbles every frame (:26, `tunnel_r7_hero.js:299`).
  - **Spray cap:** droplets are drawn no bigger than 12/1536 of the canvas height (`WATER7.maxPx`, `tunnel_s4_bt.js:235`). It eases in between 0.5 and 3 m swum (`swim2CapPx` :48, `game.js:1620`); sparkles keep their size (:46).
- **swim3** (`STRUCT_PARTS.swim3`, `tunnel_s4_bt.js:130`) needs `structmatch`, so it is **not active on this page**. Where on, `swimPose` (`tunnel_s4_swim.js:233`) bobs, pitches, rolls and breathes her model at 1.2 Hz and cancels the game's own bob (`game.js:1052-1057`).
- **Level 1 strokes** (`level1.js:992-1008`, `,noswim1`) are also not active here. They are a 1.55 Hz roll and surge scaled by speed, with a side paddle splash on a private generator (`mulberry(0x5e1a)`).

All three only change how she is drawn; her gameplay state is untouched.


_20 tool steps._

---

## Game Art Director: Art director verdict on pass 9 (started 18:07 UTC)

**Lead → agent** (18:07 UTC):

Verdict needed (READ-ONLY; do not edit or create repository files). One correction was made to the opt-in "Avoid Enemies!" scene: the chamber's walls and vault (`scene07_chamberShell`), which pass 8 never drew because of a `//` comment bug, are now drawn. Nothing else changed.

Compare at the same checkpoint (u 233, same seed, route and inputs):
- APPROVED (the only authority): `/home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png`
- pass 8: `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u233.0.jpg`
- pass 9: `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/75_scene07_pass9_shell/frames/pass9/upper_u233.0.jpg`
- the side-by-side: `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/75_scene07_pass9_shell/01_original_pass8_pass9.jpg`
- also u 230: `.../74_scene07_avoid_enemies/frames/pass8/upper_u230.0.jpg` vs `.../75_scene07_pass9_shell/frames/pass9/upper_u230.0.jpg`

Measured (original resized to 412 x 915; lower is closer): upper band 0.18-0.50 of the height: LPIPS 0.792 -> 0.710, mean ΔE2000 30.2 -> 30.6, saturation 95 -> 144 (original 115), value 246 -> 243 (original 213); lower band unchanged (LPIPS 0.835 -> 0.838); play area LPIPS 0.821 -> 0.782.

The user's rule: revert anything that looks less like the original. Reply in under 200 words: KEEP or REVERT pass 9, why, and the single next correction in the upper half (with the number you would change, e.g. the vault colour `SCENE07.chamber.vault` or the vault glow `vaultM.emissiveIntensity` 0.42 in `/home/user/bubblegame/WebDemo/src/tripo_l1.js`), given the original's upper half is dense, bright, varied machinery rather than a plain surface.

- 18:07 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/75_scene07_pass9_shell/01_original_pass8_pass9.jpg
- 18:07 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
- 18:07 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/75_scene07_pass9_shell/frames/pass9/upper_u230.0.jpg
- 18:07 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass8/upper_u230.0.jpg
- 18:07 `Grep`: chamber|vaultM|vault
- 18:07 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:07 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 18:07 `Bash`
- 18:07 `Read`: /tmp/claude-0/-home-user-bubblegame/ce30359f-7fd9-55e1-9a74-76ff9b96318f/scratchpad/upper3.png
- 18:08 `Grep`: function facadeTexture
**Agent** (18:08 UTC):

**KEEP pass 9.**

**Why:** Pass 8's upper half looked like an open, pale sky with a sun. The original has no sky; it is an enclosed machinery chamber. Pass 9 closes that chamber, so the gears, rings and facade now sit inside a room, as they do in the original. My visual judgement is that it is closer. The numbers agree: upper LPIPS 0.792 → 0.710 and play area 0.821 → 0.782. The ΔE change (30.2 → 30.6) is negligible.

**What pass 9 got wrong** (my own measure, rows 0.18–0.40, saved images not re-rendered):
- **Colour:** the vault is one flat blue-violet. 91 % of its pixels fall in hue 220–260°. The original spreads across violet, magenta and pink (about 50 % in 260–340°).
- **Saturation:** 156, against the original's 120.
- **Flatness:** brightness spread 11, against the original's 39.

**Next single correction:** in `/home/user/bubblegame/WebDemo/src/tripo_l1.js`, change `SCENE07.chamber.vault` from `0x8f9cff` to about `0xf2c4ec`, a pale pink tint.
- The vault reads the facade texture's top lavender (#b58ae8) and multiplies it by this tint. The periwinkle tint is what makes it blue-violet and over-saturated.
- A pink tint should keep the lavender and move it toward the original's pink-lavender (median #b781c2).
- Leave `emissiveIntensity` at 0.42 for this step. Re-measure upper saturation (aim for about 120) and the hue spread.

**After that:** the density. Raise the existing `upper.items` machinery heights (2.0–4.4 m) into the vault band so machinery covers it, not a plain surface.


_10 tool steps._

---

## claude-code-guide: How to reconnect plugin MCP server (started 18:09 UTC)

**Lead → agent** (18:09 UTC):

Short factual question about Claude Code (answer from the official docs, cite the page): A user runs a Claude Code CLOUD session (Claude Code on the web, claude.ai/code, also followed from the Claude mobile/desktop app). A plugin-provided stdio MCP server (from an enabled plugin) failed to connect at session start because its file was missing; the file now exists. The user said they "reconnected" it, but the session's MCP log shows no new connection attempt. 1) Is the `/mcp` slash command (with its Reconnect option) available in Claude Code on the web / remote cloud sessions, and where does the user type it (the session's own prompt box)? 2) Is there any other supported way to make a running session retry a failed MCP server (e.g. a reconnect button in the web UI, resuming the session, /reload-plugins or similar)? 3) Does starting a NEW session retry it? Reply in under 150 words with exact steps.

- 18:09 `WebFetch`
- 18:09 `WebFetch`
- 18:10 `WebFetch`
**Agent** (18:10 UTC):

**1)** Not documented for cloud sessions. The MCP page describes `/mcp` > server > **Reconnect**, and `/mcp reconnect all` (v2.1.284+), for interactive terminal sessions only. The cloud page says terminal-only commands aren't available there. Type it in a local `claude` terminal session, not the web prompt box.

**2)** No documented web reconnect button. The only documented route that re-runs session startup is reopening a session after its environment expired, which provisions a fresh VM. The docs don't say this retries MCP servers. Also, cloud sessions clone from GitHub, so commit and push the plugin file, or the new session won't have it.

**3)** Not explicitly documented for cloud sessions. A new session should start fresh, but `claude -p` runs skip failed plugin servers for 15 minutes, so retry after that window if it still fails.

Sources:
- https://code.claude.com/docs/en/mcp.md
- https://code.claude.com/docs/en/claude-code-on-the-web.md


_3 tool steps._
