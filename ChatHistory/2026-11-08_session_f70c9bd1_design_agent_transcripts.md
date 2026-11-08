# Session f70c9bd1, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Verify game-art-director runs (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight read-only availability check (session f70c9bd1). Do exactly this and nothing else: 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD && md5sum Design/ApprovedScreens/09_Avoid_Enemies.png | cut -c1-8`. 2) Read the image /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png and name in a few words what is at its upper right. 3) List the tool names you have. Reply in at most 4 short lines. Do not edit files, do not launch browsers, do not do a review.

- 19:31 `Bash`: Show current commit and image checksum prefix
- 19:31 `Read`: /home/user/bubblegame/Design/ApprovedScreens/09_Avoid_Enemies.png
**Agent** (19:31 UTC):

1) HEAD is `15acbfdc`. The image md5 starts with `359ee674`.
2) At the upper right is a dark navy grime ball with angry pink eyes; above it in the HUD are the gem counter (36) and the pause button.
3) My tools are Read, Grep, Glob and Bash. The MCP servers (Claude_Docs, github) are mentioned, but their tools are deferred and not loaded.
4) I edited nothing and launched no browsers.


_2 tool steps._

---

## Gameplay & Visual Testing specialist: Verify gameplay-visual-testing runs (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight read-only availability check (session f70c9bd1). Do exactly this and nothing else: 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD && node -e "console.log('playwright', require('playwright/package.json').version)" && ls WebDemo/tools/level1/flow_routes.cjs`. 2) List the tool names you have. Reply in at most 3 short lines. Do not edit files, do not launch a browser, do not run tests.

- 19:31 `Bash`: Show HEAD, Playwright version, and check route test file
**Agent** (19:31 UTC):

All three checks pass: HEAD is `15acbfdc`, Playwright is 1.63.0, and `WebDemo/tools/level1/flow_routes.cjs` exists.
Tools I have: Read, Grep, Glob, Bash. Some deferred tools (the github and Claude_Docs MCP servers) are not loaded yet.
I edited nothing, launched no browser and ran no tests.


_1 tool steps._

---

## Tunnel & Lighting specialist: Verify lighting-visual-matching runs (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight READ-ONLY availability check (session f70c9bd1). Do exactly this and nothing else: 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD && grep -c "chamber" WebDemo/src/tripo_l1.js`. 2) List the tool names you have. Reply in at most 3 short lines. Do NOT edit or write any file, do not launch browsers.

- 19:31 `Bash`: Show current commit and count chamber matches
**Agent** (19:31 UTC):

HEAD is `15acbfdc`, and `WebDemo/src/tripo_l1.js` has 11 lines containing "chamber".
My tools are Read, Grep, Glob, Bash, Edit and Write. The Claude_Docs and github MCP servers sent instructions, but none of their tools are available to me.
I changed no files and launched no browsers.


_1 tool steps._

---

## Water & VFX specialist: Verify water-vfx-engineer runs (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight READ-ONLY availability check (session f70c9bd1). Do exactly this and nothing else: 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD && grep -c "waterMat" WebDemo/src/level1.js`. 2) List the tool names you have. Reply in at most 3 short lines. Do NOT edit or write any file, do not launch browsers.

- 19:31 `Bash`: Show HEAD commit and count waterMat matches
**Agent** (19:31 UTC):

HEAD is `15acbfdc`, and `grep -c "waterMat" WebDemo/src/level1.js` found 3 lines.
My tools are Read, Grep, Glob, Bash, Edit and Write. Some others are deferred and not listed; the instructions mention Claude_Docs and github servers.
I edited no files and launched no browsers.


_1 tool steps._

---

## screen4-water-motion-engineer: Verify screen4-water-motion-engineer MCP (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight READ-ONLY availability check (session f70c9bd1). Do exactly this and nothing else: 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD`. 2) Call the MCP tool mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status once and quote its first line. 3) Call mcp__plugin_parallax-threejs_chrome-devtools-mcp__list_console_messages once (or say it is not available) and say how many messages it returned. Reply in at most 4 short lines. Do NOT edit files, do NOT navigate any page, do not change uniforms.

- 19:31 `Bash`: Show short commit hash of HEAD
- 19:31 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status`
- 19:31 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__list_console_messages`
**Agent** (19:31 UTC):

1. HEAD is `15acbfdc`.
2. Bridge status, first line: "Bridge: NOT connected" (proxy http://localhost:9222 → http://localhost:3000; no page is open on it).
3. The console messages tool is available and returned 0 messages.
4. Also, the separate `spector` MCP server failed to connect ("Connection closed"). I edited nothing and navigated nothing.


_3 tool steps._

---

## parallax-threejs:scenario-author: Verify Parallax scenario-author runs (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight READ-ONLY availability check only (session f70c9bd1); do NOT write any scenario or file. 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD && ls test/visual`. 2) Try to call a Playwright MCP tool that lists browser tabs (e.g. browser_tabs with action list); report whether it was available. 3) List the tool names you actually have. Reply in at most 4 short lines.

- 19:31 `Bash`: Show HEAD commit and list visual test folder
**Agent** (19:31 UTC):

1) HEAD is `15acbfdc`. `/home/user/bubblegame/test/visual` contains `lib`, `run.ts` and `scenarios`.
2) No Playwright MCP tool is available to me (there's no `browser_tabs` or other `browser_*` tool), so I couldn't make the call. The `plugin:parallax-threejs:spector` MCP server is configured but failed to connect ("Connection closed").
3) The tools I actually have are Read, Glob, Write and Bash. No files were written.


_1 tool steps._

---

## parallax-threejs:shader-reviewer: Verify Parallax shader-reviewer runs (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight READ-ONLY availability check only (session f70c9bd1); do not do a full review. 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD && grep -c "onBeforeCompile" WebDemo/src/tripo_l1.js`. 2) Try to call the threejs-devtools MCP tool bridge_status once; report whether it was available. 3) List the tool names you actually have. Reply in at most 4 short lines. Do not edit files.

- 19:31 `Bash`: Show short HEAD hash and count onBeforeCompile uses
**Agent** (19:31 UTC):

HEAD is `15acbfdc`, and `onBeforeCompile` appears in 1 line of `/home/user/bubblegame/WebDemo/src/tripo_l1.js`.
I couldn't call `bridge_status` because no threejs-devtools tool was ever loaded in this session, so the live compiled-shader check isn't available.
Separately, the `plugin:parallax-threejs:spector` MCP server failed to connect ("Connection closed"), so it may need a retry or restart.
The only tools I actually have are Read, Grep, Glob and Bash; nothing was edited.


_1 tool steps._

---

## parallax-threejs:visual-debugger: Verify Parallax visual-debugger runs (started 19:31 UTC)

**Lead → agent** (19:31 UTC):

Lightweight READ-ONLY availability check only (session f70c9bd1); there is no bug to diagnose. 1) Run with Bash: `cd /home/user/bubblegame && git rev-parse --short HEAD`. 2) Try to call the threejs-devtools MCP tool bridge_status once and the chrome-devtools MCP tool list_pages once; report whether each was available. 3) List the tool names you actually have. Reply in at most 4 short lines. Do not navigate pages or edit files.

- 19:31 `Bash`: Show short hash of current commit
**Agent** (19:31 UTC):

1. HEAD is `15acbfdc` (from `git rev-parse --short HEAD` in /home/user/bubblegame).
2. threejs-devtools `bridge_status`: not available. No tool by that name is loaded in this session, so I couldn't call it.
3. chrome-devtools `list_pages`: not available. No chrome-devtools tools are loaded, so I couldn't call it either.
4. Tools I have: `Bash` and the Spector tools (`mcp__spector__capture_frame`, `get_command_details`, `get_console_logs`, `get_context_info`, `get_draw_calls`, `get_shaders`, `get_textures`, `get_webgl_state`, `list_canvases`, `select_canvas`, `load_playground`, `load_url`, `take_screenshot`). The Spector server (`plugin:parallax-threejs:spector`) failed to connect with "Connection closed", so those calls won't work until it's reconnected.


_1 tool steps._

---

## Game Art Director: Art director structural review of pass 16 (started 20:38 UTC)

**Lead → agent** (20:38 UTC):

Structural review for Bubble Wash Kingdom Screen 09 "Avoid Enemies!" (session f70c9bd1). READ-ONLY; do not edit files, do not launch browsers.

Authority (the ONLY target): /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/original_master_frame.png (the user's approved master, 756 x 1385 phone frame). The user's zone map: /home/user/bubblegame/Design/ReferencePacks/2026-11-08_Screen09_Strict_Handoff_from_user/03_APPROVED_BACKGROUND_3D_ZONE_MAP.png (A distant machine world, B left architecture, C right architecture, D water + player).

Real gameplay renders at the SAME checkpoint (u 229.5, centre lane, 412 x 915, same seed):
- BEFORE (pass 13b): /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/pass13b_u229.5_centre.png
- NEW (pass 16: round drum housing on a raised cream-gold ledge at left; curved pink star wall at right; real 3D machine columns, gantries and mounted washer units / tanks / gears at 4-8 m over the channel; the big blue gear upper right; the master's own distant scenery (LaMa-repaired only where its enemy/banner hid it) on the far end wall only; one hero enemy floating high): /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/pass16_mach16_v2_far16_CURRENT.png
- Side by side: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/01_ORIGINAL_PASS13b_NEW_u229.5_centre_FULLSIZE.png
Note the HUD differs by design (the game shows a mission panel; ignore HUD differences).

Compare the ARCHITECTURE of NEW against the ORIGINAL (not a generic art opinion), zone by zone (A, B, C, D): for each, say what now matches, what is still structurally wrong (silhouette, position as screen fractions, scale, depth, colour relationship), and whether NEW is closer to the original than BEFORE. Then give the 3 most important corrections, ranked, each concrete (which structure, where on screen it should be, what shape/colour). Be honest; if a zone is not recognizable, say so. Answer in at most 30 lines.

- 20:38 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/original_master_frame.png
- 20:38 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-08_Screen09_Strict_Handoff_from_user/03_APPROVED_BACKGROUND_3D_ZONE_MAP.png
- 20:38 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/pass13b_u229.5_centre.png
- 20:38 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/pass16_mach16_v2_far16_CURRENT.png
- 20:38 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/01_ORIGINAL_PASS13b_NEW_u229.5_centre_FULLSIZE.png
- 20:38 `Bash`
- 20:38 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/o_upper.png
- 20:38 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/n_upper.png
- 20:38 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/b_upper.png
- 20:39 `Bash`
- 20:39 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/zB.png
- 20:39 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/zC.png
- 20:39 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/zA.png
- 20:40 `Bash`
- 20:40 `Bash`
**Agent** (20:40 UTC):

**Screen 09, pass 16 (NEW) against the original master, at u 229.5, centre lane. The screen positions below are fractions of the frame width (W) and height (H).**

**Zone A, the distant machine world.** NEW is slightly closer than BEFORE, but it still doesn't read as the original.
- **What matches:** the far end now holds machinery: columns, gantries and units mounted high up. BEFORE had a spiral portal and a pink wall of windows there. The hero enemy is in the right place and size: (0.74, 0.38) at 0.34 W, against the original's (0.73, 0.38) at 0.33 W.
- **What's wrong:** the original is a light, pastel, cluttered street of machines that keeps going into a bright glow at about (0.50, 0.43). NEW has rows of identical pink washer boxes under a dark violet ceiling. The repaired scenery shows as a hot rainbow disc at about (0.45, 0.44), 0.14 W across. It caps the corridor, so the depth looks short and the disc catches the eye more than anything else.
- **The big gear:** it sits at about (0.92, 0.20), but it's pale lavender and mostly hidden behind the mission panel. The original's is saturated cobalt with a cyan rim at (0.92, 0.24).
- **Brightness:** the original's enemy is the darkest thing against a light background. In NEW it doesn't stand out against mid-violet.

**Zone B, the left architecture.** Clearly closer than BEFORE.
- **What matches:** the drum is in the right place, x 0–0.26 W, y 0.23–0.42 H (original x 0–0.30, y 0.19–0.43). The pink and gold ring and the lavender window with the paw bubble are right. BEFORE's orange crab ornament is gone.
- **What's wrong, the drum:** it's a thin, flat pink ring. The original is a chunky cylinder: a fat rim with a darker magenta inner lip, and a gold drum body visibly running back toward the centre (x 0.20–0.35).
- **What's wrong, the ledge:** NEW's ledge reads as a magenta fence with slats, and its pink wall runs on down to about 0.62 H. The original's ledge is a solid cream-gold counter top at y 0.43–0.46, with a light peach front and stars, a coin and a green blob below it.

**Zone C, the right architecture.** Closer in shape than BEFORE, but the stars are a step back.
- **What matches:** a curved tub now stands where BEFORE had a square pillar. Its rim is at 0.49 H (original 0.48) and its left edge at 0.69 W (original 0.70).
- **What's wrong:**
  - The body is too short: 0.49–0.59 H, against the original's 0.49–0.65, which reaches the water near 0.70 H at the right edge.
  - It reads as pale columns, not solid pink panels with big gold stars. BEFORE at least showed the stars.
  - It stands on a lavender base. The original stands in white-foamed water.

**Zone D, the water and the player.** Unchanged from BEFORE (my four measurements of this zone are identical).
- **What matches:** the foreground surf round her.
- **What's wrong:** the middle of the channel (0.45–0.65 H) is deep indigo with white flecks. The original's is light azure, with white crests along both banks. Three gameplay enemies sit on the lane right over the vanishing point and hide the distance. The original shows only the one enemy.

**Measured (my own quick script on the four zone boxes; colour shares only, not a similarity score; original / BEFORE / NEW):**
- Brightness, A: 0.58 / 0.51 / 0.53.
- Share of near-white pixels, A: 30 / 12 / 16 %.
- Share of saturated violet and magenta, B: 13 / 30 / 45 %. NEW moved further from the original here.
- Same share, C: 13 / 29 / 15 %.
- Caveat: the game's Avoid Enemies banner sits inside zone A, which skews the A numbers a little.

**The three most important corrections, ranked:**
1. **Zone A, the far end.**
   - Delete the rainbow disc, or push it much further back, smaller and paler, so it no longer caps the corridor.
   - Lift the far wall and ceiling to pastel periwinkle, cyan and lilac, with warm white glints. Aim for about 30 % near-white pixels there, so the navy enemy is the darkest thing in the upper half.
   - Replace the repeated pink washer boxes with varied gears, pipes and tanks that converge on a pale cyan-white glow at (0.50, 0.43).
   - Make the big gear saturated cobalt with a cyan rim, radius about 0.15 W, and lower it to y 0.20–0.34 so the mission panel doesn't cover it.
2. **Zone B, the drum and the ledge.**
   - Rebuild the drum as a thick cylinder: a fat pink rim with a darker inner lip, and a gold drum body visible running back toward the centre (x 0.20–0.35, y 0.25–0.42).
   - Replace the slatted fence with a solid cream-gold counter: its top at y 0.43–0.46, angled toward (0.40, 0.42), with a light peach front and stars.
   - Remove the tall magenta wall below it.
3. **Zone C, the tub wall.**
   - Extend the body down to about 0.65 H, reaching about 0.70 H at the right edge.
   - Make it solid pink panels with three or four large gold stars, each about 0.05 W wide.
   - Thin the cream-gold rim and drop the lavender base so the tub rises out of foam-edged water.


_15 tool steps._

---

## Game Art Director: Art director judges v4 vs v5 vs original (started 21:17 UTC)

**Lead → agent** (21:17 UTC):

Structural judgement for Bubble Wash Kingdom Screen 09 "Avoid Enemies!" (session f70c9bd1). READ-ONLY: do not edit files or launch browsers. Be concise (max 25 lines).

Authority: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/original_master_frame.png (the user's approved master).
Real gameplay renders at the same checkpoint (u 229.5, centre lane, 412 x 915, seed 7):
- V4: .../77_scene07_pass15_upper/frames/pass16_v4_FINAL_CANDIDATE_u229.5_centre.png (pastel materials everywhere)
- V5: .../77_scene07_pass15_upper/frames/pass16_v5_u229.5_centre.png (V4 + ten more mounted 3D machines in the upper middle, machines re-saturated (cobalt/pink/gold/cyan) against the pale hall, no portal rings / far arch, machine stacks hugging the far opening with a lintel, larger pale far glow, larger saturated cobalt gear)
- Side by side: .../77_scene07_pass15_upper/03_ORIGINAL_CURRENT_v4_IMPROVED_v5_u229.5_centre_FULLSIZE.png
(full prefix /home/user/bubblegame/Previews/WebDemo/screen4_round9_match). A background-only metric (HUD/mascot/coins/enemies masked) says zone A colour difference V4 43.9, V5 46.6 (V5 more saturated); other zones equal. Ignore HUD differences (the game's mission panel is by design).

Answer: (1) Which of V4 or V5 resembles the ORIGINAL more as a whole scene, and per region (left housing, right machinery, upper background, far distance)? Judge structure and recognizability, not only colour. (2) Give an honest overall resemblance estimate for the better one (as a rough percentage of how recognizable the original's environment is, stating it is a judgement, not a measurement). (3) The 3 most important remaining structural obstacles, concrete (where on screen, what shape), and whether each is fixable with scene geometry or blocked by the game's fixed elements (camera height, lane positions, the level tube, the HUD).

- 21:17 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/original_master_frame.png
- 21:17 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/pass16_v4_FINAL_CANDIDATE_u229.5_centre.png
- 21:17 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/frames/pass16_v5_u229.5_centre.png
- 21:17 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/03_ORIGINAL_CURRENT_v4_IMPROVED_v5_u229.5_centre_FULLSIZE.png
- 21:17 `Bash`: Crop upper region of the three frames side by side into scratchpad
- 21:17 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/upper_cmp.png
- 21:17 `Bash`: Zoom V4 vs V5 upper middle and find changed area bbox
- 21:17 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/v4v5_upper_zoom.png
- 21:18 `Bash`: Crop matching fractional middle band of original and V5
- 21:18 `Read`: /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/orig_v5_mid.png
**Agent** (21:19 UTC):

**Screen 09 judgement, V4 vs V5 against the master.** This is visual judgement. The only number used is your background metric, and it is reported separately.

**(1) Which is closer.** V5, by a small margin. At full-frame size the two read almost the same.
- **Left housing:** a tie. Both have the pink torus porthole in about the master's place (x 0 to 0.27 W, y 0.20 to 0.42 H). In both it is a thick pastel tube with a flat lavender disc inside. The master's is a gold-trimmed metal rim with a glass bubble inside.
- **Right machinery:** V5. Its gear is more cobalt and reads a little more like the master's large, saturated cobalt gear at the top right. The pink-star drum at the right (y 0.48 to 0.61) matches the master well in both.
- **Upper background:** V5, slightly. It has more machinery and fewer bare castle turrets. But the extra machines are small, fine-scale pieces on a pale lavender wall. The master has large, chunky, saturated clutter. Your metric (zone A: V4 43.9, V5 46.6) says V5's colour lands in the wrong places, even though its structure is a bit closer.
- **Far distance:** V5, clearly. The master has no gold portal ring, only a bright glow where the water channel disappears. Removing the ring and enlarging the glow both move toward that.

**(2) Overall estimate for V5:** roughly 40 to 45% of the master's environment is recognizable. This is my judgement, not a measurement. What reads: the left porthole, the right star drum, a water channel running to a central vanishing point, the enemy and coins. What does not: the depth of the tunnel walls, the light, and the density of the clutter.

**(3) The three largest remaining structural obstacles.**
1. **The upper middle faces the camera instead of receding** (x 0.25 to 0.75, y 0.25 to 0.45). The game shows a flat backdrop of castle towers with gold rings in a pale hall. The master shows two side walls of dense, saturated machinery angling in toward the vanishing point, with light streaks radiating from it.
   - **Fixable with scene geometry:** move the machines onto receding side walls and a ceiling, add streak cards, and darken the lavender wash.
2. **The glass ring tube in the centre** (x 0.30 to 0.65, y 0.38 to 0.52) is a distinct shape the master lacks. The master has a white-gold glow with the channel winding into it.
   - **Blocked by the level tube.** It can only be softened, for example with a brighter glow card in front of its far end and lower ring contrast. Removing it needs permission to change the tube.
3. **The channel's width and shape.** The master's water is a narrow, winding, light sparkly ribbon about 0.25 W wide at y 0.5, between low gold-and-cream ledges. The game's is a straight, wide, deep cobalt sheet covering x 0.1 to 0.85.
   - **Mostly blocked** by the camera height and the three lane positions.
   - **Partly fixable:** replace the large smooth pink slab on the left (x 0 to 0.3, y 0.40 to 0.62) with the master's detailed gold counter, bring the side ledges in at mid-distance, and lighten the water.

There is also a smaller blocker from the HUD. The mission panel takes the slot where the master's "Avoid Enemies!" banner sits, which pushes the banner down to y 0.21 to 0.30. There it hides the top of the porthole and most of the cobalt gear, and no scene change can fix that.

Files are in /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/77_scene07_pass15_upper/:
- master: frames/original_master_frame.png
- V4: frames/pass16_v4_FINAL_CANDIDATE_u229.5_centre.png
- V5: frames/pass16_v5_u229.5_centre.png

I also made zoomed crops for this check:
- /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/v4v5_upper_zoom.png
- /tmp/claude-0/-home-user-bubblegame/f70c9bd1-e78b-5e2f-8359-1182a397dbc6/scratchpad/orig_v5_mid.png


_10 tool steps._
