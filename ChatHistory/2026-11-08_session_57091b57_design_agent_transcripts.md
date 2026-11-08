# Session 57091b57 (8 November, account transfer): autosave verification and Tripo asset pass on branch ccr-b67aeffb-d94mmq, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Audit test: art director (started 16:34 UTC)

**Lead → agent** (16:34 UTC):

AUDIT TEST (read-only, harmless). Repository /home/user/bubblegame. Compare the ORIGINAL approved Screen 07 `Design/ApprovedScreens/09_Avoid_Enemies.png` with the current game frame `Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass7/upper_u233.0.jpg` (opt-in ?s3=...,tripo1,scene07 pass 7). Rank the 5 visual differences that matter most for the WHOLE screen (background structure first: the original has a busy, bright, layered laundry-machine corridor; the game has an open chamber with a lavender vault). For each: what the original shows (screen position as % across / down), what the game shows, and one concrete 3D-geometry correction. Under 220 words. Also state in one line which tools you were able to use (Read / Bash / etc.). Do not edit any file.

- 16:34 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
- 16:34 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/74_scene07_avoid_enemies/frames/pass7/upper_u233.0.jpg
**Agent** (16:35 UTC):

**Screen 07 audit: original `09_Avoid_Enemies.png` vs. game frame pass 7, `upper_u233.0`**

1. **The corridor walls.** The original has stacked washer drums, portholes and star-patterned shelves along both sides (left 0-30% across, right 70-100%, both 15-60% down). They lead to a bright vanishing point at about 50% across, 33% down. The game has a flat pink dotted back wall (15-80% across, 33-55% down) that ends the depth. Fix: remove that wall. Line both sides of the track with repeated drum cylinders, torus portholes and shelf boxes that recede to a far, lit opening.
2. **The ceiling.** The original's top band (10-30% down) is full of gears, pipes and bubbles. The game has a large, empty lavender vault of arch rings (0-100% across, 12-35% down). Fix: lower or remove the vault, and hang gear clusters and pipe arcs over the corridor at regular intervals.
3. **The water channel's depth.** In the original, the blue channel narrows from the bottom (30-70% across) into the vanishing point, with gold and lavender ledges on each side. In the game, the water is only in the foreground (55-100% down) and stops at a rail about 55% down. Fix: run the water ribbon and its side ledges far down the corridor so they converge.
4. **The enemy.** The original's enemy is at about 70% across, 38% down, about 25% of the screen wide, and well clear of her. The game's is at about 30% across, 55% down, about 35% wide, and overlaps the coins and her. Fix: place it in the right lane, further ahead, at about 0.75 of its current scale.
5. **The light.** The original has warm gold glows, light bulbs and many colours. The game is mostly flat purple. Fix: add rows of glowing bulbs and point lights along the side walls, and gold rims on the drums.

Tools used: Read only (I looked at the two images). Nothing was edited.


_2 tool steps._

---

## Gameplay & Visual Testing specialist: Audit test: gameplay testing (started 16:34 UTC)

**Lead → agent** (16:34 UTC):

AUDIT TEST (harmless, no game changes). Repository /home/user/bubblegame. Run these and report PASS/FAIL for each with the key output line: (1) `cd WebDemo && node -e "require('playwright').chromium.launch().then(async b=>{const p=await b.newPage();await p.setContent('<canvas id=c></canvas><script>window.ok=!!document.getElementById(\"c\").getContext(\"webgl2\")</script>');console.log('webgl2',await p.evaluate(()=>window.ok));await b.close()})"` (Playwright + Chromium + WebGL2); (2) `md5sum WebDemo/game.bundle.js` and confirm it equals the bundle committed at HEAD (`git show HEAD:WebDemo/game.bundle.js | md5sum`); (3) list `WebDemo/tools/level1/` and `WebDemo/tools/screen4/` scripts (names only). Under 150 words. State which tools you could use. Do not edit or commit anything.

- 16:34 `Bash`: Launch Chromium via Playwright and test WebGL2
- 16:34 `Bash`: Compare working bundle md5 with HEAD's bundle
- 16:34 `Bash`: List level1 and screen4 tool scripts
**Agent** (16:34 UTC):

All three checks pass. I did not edit or commit anything.

1. **Playwright, Chromium and WebGL2: PASS.** I ran the `node -e` command from `/home/user/bubblegame/WebDemo` and it printed `webgl2 true`.
2. **Bundle matches HEAD: PASS.** HEAD is `8ab7c70c`. `md5sum WebDemo/game.bundle.js` and `git show HEAD:WebDemo/game.bundle.js | md5sum` both give `6bf58438917d17226bc15f950a58d7b2`, and `git status` shows no changes to the file.
3. **Tool listing: PASS.**
   - `WebDemo/tools/level1/`: cost_probe.cjs, flow_routes.cjs, l1_run.cjs, o3d_shots.cjs, record_flow.cjs, record_full.cjs
   - `WebDemo/tools/screen4/`: brush_view, cam_sweep, cdp_inspect, frame_dump, haze_check, hero_probe, hide_probe, layer_diag, liquid_moves, liquid_shots, motion_shots, motion_trace, spector_capture (.cjs); compare_s4, derive_ref5_water, derive_ring_map, derive_tunnel_textures, derive_water_map, hero_shares, hero_sheet, layer_metrics, liquid_shares, match_overlay, optuna_domes, r3_sheets, r4_sheets, region_compare, spector_report, three_way_sheet (.py)

**Tools I could use:** Bash, Read, Grep and Glob, plus GitHub and Claude Docs through their servers. For this audit I only needed Bash.


_3 tool steps._

---

## Tunnel & Lighting specialist: Audit test: lighting specialist (started 16:34 UTC)

**Lead → agent** (16:34 UTC):

AUDIT TEST (read-only: do NOT edit or write any file). Repository /home/user/bubblegame. Read `WebDemo/src/tripo_l1.js` (the SCENE07 config and buildChamber / buildUpper) and the original `Design/ApprovedScreens/09_Avoid_Enemies.png`. Recommend the 3 most effective lighting / material / composition changes (with exact parameter names and values in that file) that would make the chamber's upper half read as the original's bright, busy, layered corridor instead of a big lavender dome. Under 180 words. State which tools you could use.

- 16:34 `Grep`: SCENE07|function buildChamber|function buildUpper
- 16:34 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
- 16:34 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 16:35 `Grep`: SCENE07|scene07
- 16:35 `Grep`: SCENE07|scene07|__BW_S3_TUNE__
**Agent** (16:35 UTC):

I edited nothing and rendered nothing. These three changes come from reading the code and looking at the original, so none of them has been tested.

**Why the top reads as a lavender dome:** `chamber.vault: 0xd6dcff` only tints the shell's base colour. Its glow comes from the facade texture at strength 0.42, and above 3.6 m that texture is the lavender of its top edge (about #b58ae8). The shell is also 14.4 x 8.5 m, so it fills the top of the frame.

1. **Composition:** set `chamber.height` 8.5 → 5.0 and `halfW` 7.2 → 4.4. Then move `upper.items` x from 4.1-5.4 to 3.2-3.8 and `upper.rings` x from 5.2/5.3 to 3.6, so the walls close in like a corridor.
2. **Material:** line 168, `vaultM.emissiveIntensity` 0.42 → 0.12. Set `vault` to 0x7f8cff. Line 163, `hgt < 3.6` → `hgt < Ch.height`, so the gold arched windows run up the walls.
3. **Layers and light:** grow `upper.items` from 6 to 12, two tiers per side (h 2.8 and 4.4, size 2.6-3.2, every 3 u from 230 to 252). Set `upper.lights` 14 → 30 and the light opacity (line 251) 0.55 → 0.8. Set `upper.glow.r` 3.2 → 2.2.

**Tools I could use:** Playwright captures inside u 222-268 (`game_eval.cjs`, `s3_shot.cjs`), `layer_diag.cjs` to hide `scene07_chamberShell`, `region_compare.py` (OpenCV, scikit-image, LPIPS) on the top half, `hero_probe.cjs` and Spector.js. `SCENE07` can't be tuned through `__BW_S3_TUNE__`, so each trial needs a rebuild with `node build.mjs`.


_5 tool steps._

---

## Water & VFX specialist: Audit test: water VFX engineer (started 16:34 UTC)

**Lead → agent** (16:34 UTC):

AUDIT TEST (read-only: do NOT edit or write any file). Repository /home/user/bubblegame. In `WebDemo/src/level1.js`, find where Level 1's water colour and surface are defined (the water fragment shader, `waterFrag` / `WATER_VERT`, and the `l1Water` mesh). Report: the main colour constants (vec3 values) and where the white foam / glints come from, and one change that would make the water read as the original Screen 07's (`Design/ApprovedScreens/09_Avoid_Enemies.png`) saturated cobalt-turquoise with restrained white. Under 160 words. State which tools you could use.

- 16:34 `Grep`: waterFrag|WATER_VERT|l1Water|vec3\(|foam|glint|sparkle
- 16:34 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 16:34 `Bash`: List the approved screens folder
- 16:34 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
**Agent** (16:35 UTC):

The water is defined in `/home/user/bubblegame/WebDemo/src/level1.js`, lines 236-299:
- `WATER_VERT`: four sine waves.
- `waterFrag()`: the colour, starting at line 248.
- `waterFragWet()`: the wet variant.
- The `l1Water` meshes: lines 376 and 405.

**Colours (written as sRGB hex and converted to linear):** deep `#0b2fb8`, mid `#1d63f2`, turquoise `#35c9ff` (strength 0.75), lavender `#a99cf0` (0.25), foam `#f2fbff`. The far sheen is `vec3(0.75,0.9,1.0)*1.15`, at up to 0.7 strength (line 279). The wet variant adds `vec3(0.06,0.5,0.95)` and `vec3(0.05,0.42,1.0)`.

**Where the white comes from (line 275):** `white = fl*0.75 + glint + wake*0.9 + rings*0.55`, then mixed toward the foam colour.
- `fl`: flecks, stronger where the water climbs the walls.
- `glint`: up to 0.6.
- The V-wake and the rings round her body.

**One change:** at line 279, change the far sheen's target to turquoise (`vec3(0.06,0.5,0.95)`) and cap its strength at 0.3. The pale wash then goes and the far water keeps its cobalt-turquoise.

Your filename doesn't match: `09_Avoid_Enemies.png` is board screen 09; screen 07 is `07_Watch_Out_Spinning_Brushes.png`.

**Tools:** I used Grep, Read and Bash (read-only). I edited and rendered nothing, so the change is unverified.


_4 tool steps._

---

## screen4-water-motion-engineer: Audit test: Screen 4 water engineer (started 16:34 UTC)

**Lead → agent** (16:34 UTC):

AUDIT TEST (harmless; do NOT edit or write any file, do NOT change any material). Purpose: prove which of your live MCP tools work in this session. Call, and report PASS/FAIL with the key output for each: (1) mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status; (2) mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page to the URL `data:text/html,<canvas id=c></canvas><script>window.gl=!!document.getElementById('c').getContext('webgl2')</script>` (or list pages if navigation is not allowed); (3) mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script returning `window.gl`; (4) mcp__plugin_parallax-threejs_chrome-devtools-mcp__list_console_messages. Then one line: whether threejs-devtools could attach to a three.js scene (it needs a page opened through its proxy at localhost:9222). Under 150 words.

- 16:34 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status`
- 16:34 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`
- 16:35 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 16:35 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__list_console_messages`
**Agent** (16:35 UTC):

Three of the four tools worked. The threejs-devtools bridge is the one that isn't connected yet. I didn't edit any file or change any material.

1. **threejs-devtools `bridge_status`: FAIL (not connected).** It reported "Bridge: NOT connected. Proxy: http://localhost:9222 → http://localhost:3000". The tool itself answers, but no page was open through the proxy.
2. **chrome-devtools `navigate_page`: PASS.** It opened the data: URL as page 1, which is selected.
3. **chrome-devtools `evaluate_script`: PASS.** It returned `true`, so WebGL2 is available.
4. **chrome-devtools `list_console_messages`: PASS.** It listed 3 messages: a warning that software WebGL fallback is deprecated (the GPU is SwiftShader, a software renderer), a Quirks Mode notice, and a "GPU stall due to ReadPixels" performance warning.

The separate Spector MCP server failed to start in this session ("Connection closed"), so its tools aren't available.

**Attach to three.js:** not yet. threejs-devtools can only attach once the game is served on port 3000 and opened at `http://localhost:9222/...`. Neither step was part of this test.


_4 tool steps._

---

## parallax-threejs:visual-debugger: Audit test: plugin visual-debugger (started 16:34 UTC)

**Lead → agent** (16:34 UTC):

AUDIT TEST (harmless, read-only). List exactly which tools you have available in this session (by name). Then try to call the threejs-devtools bridge status tool and the chrome-devtools list-pages tool if you have them, and report PASS/FAIL with the output. If you have no MCP tools, say so plainly. Under 120 words. Do not change anything.

**Agent** (16:35 UTC):

**Available tools:** Only `Bash`. I have no MCP tools in this session. No deferred tools have been loaded, so no threejs-devtools, chrome-devtools, Spector, `dispose_check` or `memory_stats`.

**threejs-devtools bridge status:** FAIL. The tool isn't available to me, so I couldn't call it and have no output.

**chrome-devtools list-pages:** FAIL. Same reason: the tool isn't available, so there's no output.

This means I can't follow AGENTS.md §2's scene graph, console and Spector steps, or the leak checks, directly in this session. The only possible route is `deno task checkpoint` through Bash, and that only works if its MCP bridge is reachable from the shell. I haven't tested that because this was a read-only audit. I changed nothing.


_0 tool steps._

---

## parallax-threejs:shader-reviewer: Audit test: plugin shader-reviewer (started 16:35 UTC)

**Lead → agent** (16:35 UTC):

AUDIT TEST (harmless, read-only). List exactly which tools you have (by name), and whether any threejs-devtools MCP tool is among them. Then review only the GLSL string that `openTube` patches in `/home/user/bubblegame/WebDemo/src/tripo_l1.js` (the `uOpen07` uniform and the discard line added to level1.js's wall shader, whose varyings are `vTU` and `vW`): is the uniform declared and bound correctly, and is the varying used correctly? Under 120 words. Do not edit anything.

- 16:35 `Grep`: openTube|uOpen07
- 16:35 `Bash`: Locate the shader binding check script and deno
- 16:35 `Read`: /home/user/bubblegame/WebDemo/src/tripo_l1.js
- 16:35 `Grep`: vTU|vW\b|wallMat|ShaderMaterial
- 16:35 `Bash`: Check whether deno is installed
- 16:35 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 16:35 `Grep`: aTU|void main
- 16:35 `Grep`: chamber\s*[:=]|u0:|open:
- 16:35 `Bash`: Check NOISE chunk for main and how aTU is built
**Agent** (16:35 UTC):

**Tools:** Read, Grep, Glob, Bash. None of them is a threejs-devtools MCP tool. A separate `plugin:parallax-threejs:spector` MCP server is configured but failed to connect, so I couldn't check the live compiled shader.

**Static pass:** I couldn't run `check-shader-bindings.ts` because deno isn't installed, so I checked by reading the source.

**Findings:** no binding bug.
- `/home/user/bubblegame/WebDemo/src/tripo_l1.js:144-145`: `uOpen07` is set as a `Vector3` and declared `uniform vec3` just before `main()`, so the types match. The regex hits the wall fragment shader's only `main` (`level1.js:187`).
- `vTU` is declared in both stages (`level1.js:135,185`). `.x` is the angle (0 is the roof) and `.y` is the position along the course, so the discard opens the roof between 218 and 254, within ±2.3 rad of the top. That's the right use.
- The patch doesn't use `vW`.
- No cleanliness issues.


_9 tool steps._

---

## parallax-threejs:scenario-author: Audit test: plugin scenario-author (started 16:35 UTC)

**Lead → agent** (16:35 UTC):

AUDIT TEST ONLY: do NOT write or create any file. List exactly which tools you have available in this session (by name), and whether you can call any playwright MCP tool; if you have one, call its tab-list tool once and report the output. Also check (with Bash `ls`) whether `/home/user/bubblegame/test/visual/scenarios/` exists. Under 100 words.

- 16:35 `Bash`: Check whether the scenarios directory exists
**Agent** (16:35 UTC):

I can call four tools in this session: Read, Glob, Write and Bash.

- **Playwright MCP:** I have no Playwright MCP tool, so I couldn't call its tab-list tool and have no output to report.
- **Other MCP servers:** The `spector` server (`plugin:parallax-threejs:spector`) failed to connect with the error "Connection closed". That's a connection failure you'd need to fix or retry, not a missing setup. Two other servers, `Claude_Docs` and `github`, sent instructions, but none of their tools are available to me.
- **Scenarios folder:** `/home/user/bubblegame/test/visual/scenarios/` does not exist (`ls`: "No such file or directory").

I didn't write or create any files.


_1 tool steps._
