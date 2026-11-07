# Session 4fd798d9, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## screen4-water-motion-engineer: Build swim2 water candidate (started 01:07 UTC)

_Worked in its own worktree, branch `worktree-agent-adb55eb6aad0cc08b`._

**Lead → agent** (01:07 UTC):

You are building ONE Screen 4 candidate for Bubble Wash Kingdom, behind the flag `?s3=intunnel,swim2`. The user has approved exactly one candidate and is very concerned about cost (Claude credits): work efficiently, reuse existing tools and findings, do NOT repeat investigations, do NOT start other agents, keep reports short. If the job turns out unusually expensive or complicated (for example the change needs a new shader system, or the identity proof keeps failing), STOP early and return a short explanation of why instead of pushing on.

Read first, briefly: `CLAUDE.md` (project rules, they apply), `CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md` sections 4, 10 and 12, and only the parts you need of `Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md` and `54_specialists/` (`water_vfx_engineer.md`, `lighting_visual_matching.md`, `animation_review.md`). These are finished, measured investigations: treat their findings as known. The rejected `?s3=intunnel,swim` pass (`53_swim/README.md`) shows what NOT to make: the art director called its tight collar "a frilled glass bowl on blue pillows"; its motion parts measured well.

The ONLY visual target: the ORIGINAL approved Screen 4, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536).

THE TASK: one focused improvement to the water and the swimming motion as seen WHILE PLAYING, the visible problem being that in motion the water looks pale and the water touching her travels with her instead of her moving through it. Choose the smallest change from the existing reports that gives the biggest VISIBLE step toward the original in a moving gameplay clip. Suggested scope, in priority order (do fewer if that is what makes it clean):
  1. keep the moving tunnel's water saturated cobalt: `r3Swirl`, `r3Whirlpool` and `r3Bubbles` are re-shown by their own updaters after u 3.0 m (`tunnel_r3.js` about lines 286, 358, 388); under `SWIM2_ON` keep them hidden (lighting report S1). The start frame of `?s3=intunnel` must not get worse;
  2. the water touching her should read as water she moves through, not a pale mound pinned to her (`heroSwell`, `WebDemo/src/tunnel_r7_hero_water.js`): the minimal version of the water report's idea, its flow tied to her travel distance. Never a stationary mound, a glass collar, a container look or a white cloud; the character sits ON TOP of blue water with small splashes, never sunk into it;
  3. only if cheap: the animation report's damped landing dip instead of the one-frame 17 cm drop.
Do not redesign her, the tunnel, coins, gems or the HUD.

Rules:
- `SWIM2_ON` is already exported in `WebDemo/src/tunnel_s4_bt.js` and nothing reads it yet. Put your settings and code in a new file `WebDemo/src/tunnel_s4_swim2.js`, with minimal gated hooks elsewhere (`if (SWIM2_ON)`). Visual only: gameplay state (lanes, jump, spin, coins, gem, socks, hearts, pause, Bubble Blast, Turbo Spin) untouched. Never touch the game's seeded Math.random (use a private generator if you need randomness). three.js stays r170.
- Look at the live scene first and try values at runtime (your DevTools tools; serve your worktree's `WebDemo` with `python3 -m http.server 3000` in the background and open `http://localhost:9222/index.html?s3=intunnel,swim2`) before writing code. Close browser pages when done: an open page rendering the game keeps a CPU core busy and slows every other test.
- Setup in your worktree: `cd WebDemo && npm install && node build.mjs`; tools: `source Tools/bw_tools_env.sh` (they are installed in ~/.bubblewash-tools).
- Reuse the swim pass's scripts, adapting paths: `Previews/WebDemo/screen4_round9_match/53_swim/scripts/` (`render.sh`, `record_clip.sh`, `clip_compare.sh`, `identity.sh`, `sheet3.py`) and `WebDemo/tools/screen4/` (`motion_trace.cjs`, `frame_dump.cjs`).
- `r2_func` must be run with `VW=135 VH=270` (`S3=... VW=135 VH=270 node tools/screen3/r2_func.cjs $PWD`): the accepted report was made at that size; at full size it times out (this was just measured, see `56_bubblegame_environment/`).
- Do NOT commit, push, merge or switch branches. Leave your changes in your worktree; the main session reviews and commits them. Do not edit `.claude/agents/` files.

Deliverables, in `Previews/WebDemo/screen4_round9_match/57_swim2/` in your worktree (keep it lean):
1. Before / after MOBILE screenshots at the Pixel 7 framing (as the 53_swim renders did): ORIGINAL | accepted `?s3=intunnel` | `?s3=intunnel,swim2`, at the start, +1 s and +2 s moving. One side-by-side sheet per moment (JPEG), plus the full-resolution frames.
2. A SHORT gameplay recording (about 6-8 s, swipes and a jump), accepted vs swim2 side by side (with the ORIGINAL as a still panel if the existing clip_compare.sh does that), MP4.
3. Proofs, as plain text: (a) the accepted `?s3=intunnel`, `?s3=intunnel,water9` (R9) and the normal game render 0 px different between the committed bundle (md5 5bb24e28...) and your rebuilt bundle; (b) `s3_func` and `r2_func` (VW=135 VH=270) for `intunnel` identical to `53_swim/gameplay/*_intunnel.txt`, and for `intunnel,swim2` identical in every gameplay field; (c) the motion trace's gameplay fields identical (`53_swim/motion/trace_accepted_swipejump.json`).
4. A README of at most about 40 lines: what changed and why (one paragraph), the files changed, the evidence list, and your honest judgement of whether it is closer to the ORIGINAL in motion, with what still differs.

Return a short summary: files changed, the evidence paths, the proof results (pass/fail), and your judgement. Keep it brief.

**Agent** (01:07 UTC):

I'll start by reading the key documents briefly.

- 01:07 `Bash`: Show branch state and evidence folders
- 01:07 `Grep`: ^## 
- 01:07 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md
- 01:07 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/CLAUDE_ACCOUNT_TRANSFER_HANDOFF.md
- 01:07 `Bash`: Get report sizes and headings
- 01:07 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/54_specialists/lighting_visual_matching.md
- 01:07 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/53_swim/README.md
- 01:07 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/54_specialists/water_vfx_engineer.md
- 01:07 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/54_specialists/water_vfx_engineer.md
- 01:07 `Bash`: Show diagnosis headings and first section
- 01:07 `Bash`: Read diagnosis motion and second pass sections
- 01:08 `Bash`: Check WebDemo state and flags
- 01:08 `Bash`: Check WebDemo state and flags
- 01:08 `Bash`: Read swim pass scripts
- 01:08 `Bash`: List swim evidence and sheet script
**Agent** (01:08 UTC):

Now setup: npm install, build, keep the committed bundle as "old" copy, serve.

- 01:08 `Bash`: Copy old bundle, install deps, build
- 01:08 `Bash`: Copy committed bundle to scratch as old reference
- 01:08 `Bash`: Install WebDemo dependencies
- 01:08 `Bash`: Check running browsers and servers
- 01:08 `Bash`: Build the bundle from current source
- 01:08 `Bash`: Read the hide hooks and round3 updaters
- 01:08 `Bash`: Find HERO.hide composition and build order
- 01:08 `Bash`: Locate how MATCH.hero feeds HERO
- 01:09 `Bash`: Serve WebDemo on port 3000 and read init script
- 01:09 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status`
- 01:09 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`
- 01:13 `Bash`: Read the CDP inspect flow and test API
- 01:13 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 01:14 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__take_screenshot`
- 01:14 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 01:14 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__take_screenshot`
- 01:14 `Bash`: Crop live screenshots into a pair
- 01:14 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/live_T1_pair.jpg
- 01:14 `Bash`: Find time and travel uniforms in hero water
- 01:14 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/WebDemo/src/tunnel_r7_hero_water.js
- 01:14 `Bash`: Map the swell shading chain in R9 water
- 01:14 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/WebDemo/src/tunnel_r9_match_water.js
- 01:15 `Bash`: Locate the swell's flow variable in the liquid pass
- 01:15 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/WebDemo/src/tunnel_r8_liquid.js
- 01:15 `Bash`: Read lqShade's flow handling
- 01:15 `Grep`: vec3 lqShade\(
- 01:15 `Bash`: Find the swell face settings
- 01:16 `Bash`: Read layer_diag usage header
- 01:16 `Bash`: Check 53_swim render sizes
- 01:16 `Bash`: Render accepted intunnel start frame
- 01:16 `Bash`: Create evidence folders
- 01:16 `Bash`: Read the tools env script
**Agent** (01:16 UTC):

Let me write an adapted render script for this worktree.

- 01:16 `Write`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/57_swim2/scripts/render.sh
- 01:16 `Bash`: Render accepted intunnel at +1 s with committed bundle
- 01:17 `Bash`: Render accepted start and +2 s frames
- 01:17 `Bash`: Render accepted start and +2 s frames
**Agent** (01:17 UTC):

Now a quick look at the accepted moving frames next to the ORIGINAL (adapted sheet script).

- 01:17 `Bash`: Build an ORIGINAL vs accepted look sheet
- 01:17 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/acc_look_s.jpg
- 01:18 `Grep`: WATER7_ON|SWIM_ON
- 01:18 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/WebDemo/src/game.js
- 01:18 `Bash`: Read flow metric and recorder headers
- 01:18 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 01:18 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`
- 01:18 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 01:19 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__take_screenshot`
- 01:19 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 01:19 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__take_screenshot`
- 01:19 `Bash`: Crop runtime test screenshots for viewing
- 01:19 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/rt_pair.jpg
- 01:20 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/54_specialists/animation_review.md
- 01:20 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/54_specialists/animation_review.md
- 01:20 `Bash`: Read the landing code proposal and updateMascot
- 01:20 `Read`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/WebDemo/src/tunnel_r7_hero_water.js
- 01:20 `Bash`: Check build order and imports
- 01:20 `Bash`: Check where the hero scene is built
- 01:20 `Write`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/WebDemo/src/tunnel_s4_swim2.js
- 01:20 `Bash`: Insert gated SWIM2 hooks in four files
- 01:21 `Bash`: Rebuild the bundle with swim2 hooks
**Agent** (01:21 UTC):

Now render swim2 at the three moments.

- 01:21 `Bash`: Render swim2 at start, +1 s, +2 s
- 01:22 `Bash`: Diff swim2 vs accepted frames and build sheet
- 01:23 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/cmp_T1_s.jpg
- 01:23 `Bash`: Inspect start frame difference
- 01:23 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/start_pair.jpg
- 01:23 `Bash`: Inspect particle kinds and emitters
- 01:23 `Bash`: Find particle update and cap settings
- 01:23 `Bash`: View the step function around fx.update
- 01:23 `Bash`: Ease in the droplet cap with travel and rebuild
- 01:24 `Bash`: Re-render swim2 start and compare with accepted
- 01:24 `Write`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/57_swim2/scripts/record_clip.sh
- 01:24 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`
- 01:24 `Bash`: Record the accepted intunnel swipe-and-jump clip
- 01:24 `Bash`: Record the swim2 swipe-and-jump clip
- 01:24 `Bash`: Inspect gameplay test reports and tool usage
- 01:25 `Bash`: Find motion trace gameplay fields
- 01:25 `Bash`: Read the motion report's gameplay comparison
**Agent** (01:25 UTC):

Now write the identity script while the clips record.

- 01:25 `Write`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/57_swim2/scripts/identity.sh
- 01:25 `Bash`: Adapt the clip compare script for accepted vs swim2
- 01:25 `Bash`: Fix comment and check clip progress
- 01:25 `Bash`: Read zone_water and silhouette usage
- 01:25 `Bash`: Measure tunnel and foreground water classes
- 01:25 `Bash`: Copy measurement scripts with fixed paths
- 01:25 `Bash`: Measure tunnel and foreground water classes
- 01:25 `Bash`: Check clip recording progress
- 01:25 `Bash`: List top CPU processes
- 01:25 `Bash`: Check current CPU usage
- 01:26 `Bash`: Read prior gameplay test notes
- 01:26 `Bash`: Check how func tests report
- 01:26 `Write`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/57_swim2/scripts/gameplay.sh
- 01:26 `Bash`: Check clip recording progress
- 01:26 `Bash`: Wait and check clip progress
- 01:26 `Bash`: Review the source diff of the hooks
- 01:26 `Bash`: Check clip recording progress
- 01:26 `Bash`: Look for an existing accepted intunnel clip
- 01:26 `Bash`: Wait for the swim2 clip to finish
- 01:36 `Bash`: Wait for both clips to finish
- 01:37 `Bash`: Wait for the accepted clip
- 01:37 `Bash`: Run identity renders old vs new bundle
**Agent** (01:37 UTC):

Both clips done. Building the side-by-side and key-moments sheet, and running the flow metric.

- 01:38 `Bash`: Build the side-by-side clip and key moments sheet
- 01:38 `Bash`: Downscale the key-moments sheet for viewing
- 01:38 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/km_s.jpg
- 01:38 `Bash`: Crop lower halves of clip frames for a close look
- 01:38 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/contact_rows.jpg
- 01:38 `Bash`: Run the flow metric on both clips
- 01:39 `Bash`: Re-render swim2 +1 s and +2 s on the final build
- 01:40 `Bash`: Build ORIGINAL/accepted/swim2 sheets per moment
- 01:40 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/T2_low.jpg
- 01:40 `Bash`: Find particle kind meanings
- 01:40 `Bash`: Read the particle vertex shader
- 01:40 `Bash`: Check the particle kind attribute name
- 01:40 `Grep`: vKind|uScale /
- 01:40 `Bash`: Exempt sparkles from the swim2 cap and rebuild
- 01:41 `Bash`: Check identity job progress
- 01:41 `Bash`: Stop the stale identity job
- 01:41 `Bash`: Re-render swim2 +2 s with sparkles exempt
- 01:41 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/T2_final.jpg
- 01:41 `Bash`: Re-record the swim2 clip on the final build
- 01:41 `Bash`: Run identity renders on the final bundle
- 01:41 `Bash`: Wait for the identity renders
- 01:49 `Bash`: Render swim2 start and +1 s on the final build and diff
- 01:50 `Bash`: Run s3_func, motion trace and r2_func
**Agent** (01:50 UTC):

Meanwhile, the sheets on the final frames and the silhouette check.

- 01:50 `Bash`: Build final sheets and zone and silhouette metrics
- 01:50 `Bash`: Downscale the final +1 s sheet
- 01:50 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/T1_sheet_s.jpg
- 01:50 `Bash`: Check clip and gameplay test progress
- 01:50 `Bash`: Wait for the swim2 clip re-record
**Agent** (01:52 UTC):

Clip done; rebuild the comparison video and sheet, rerun the flow metric, and compare s3_func and the trace.

- 01:52 `Bash`: Build compare video and rerun the flow metric
- 01:52 `Bash`: Build the side-by-side compare video
- 01:53 `Bash`: Rerun the flow metric on final clips
**Agent** (01:53 UTC):

Now the gameplay comparisons (s3_func vs accepted reports, trace gameplay fields).

- 01:53 `Bash`: Compare s3_func reports with accepted
- 01:53 `Bash`: Compare motion trace gameplay fields
- 01:53 `Bash`: Save s3_func comparison and downscale key moments
- 01:53 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/km2_s.jpg
- 01:54 `Bash`: Crop consecutive swim2 clip frames at the contact
- 01:54 `Read`: /tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad/consec.jpg
- 01:54 `Bash`: Check evidence folder sizes
- 01:54 `Bash`: Trim duplicate frame files from evidence
- 01:54 `Bash`: Wait for the r2_func runs
- 01:57 `Bash`: Compare r2_func reports with accepted
- 01:58 `Bash`: Save r2_func comparison and list proofs
- 01:58 `Bash`: Confirm bundle hash, changed files and hook lines
- 01:58 `Write`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/57_swim2/README.md
- 01:58 `Bash`: Count README lines and stop the dev server
- 01:58 `Write`: /home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/57_swim2/README.md
**Agent** (01:59 UTC):

The `?s3=intunnel,swim2` candidate is built in the worktree, and every proof passes. Nothing is committed or pushed. In motion it looks closer to the ORIGINAL to me, but the art director was not run, so that is my judgement only.

**What it changes** (visual only, all behind `SWIM2_ON`):
1. **Tunnel stays cobalt while moving.** `r3Swirl`, `r3Whirlpool` and `r3Bubbles` now stay hidden every frame instead of switching back on 0.2 s after the tap.
2. **The water touching her flows past her.** The face of `heroSwell` used to flow on the clock only. Its flow now also advances 0.5 per metre she swims, so its currents, white crest pieces, rings and glints stream down the face as she travels. Its shape, size and colours are unchanged.
3. **No white cotton-ball piles in front of her.** I added one thing outside your list: R7's 12 px cap on spray droplets, which the water report recommends. It eases in over her first 0.5-3 m so the start view keeps its bubbles, and the pickup sparkles are not capped.

I left out the landing dip: it needs a ride-height model and changes to her drawn pose, which is not cheap.

**Files changed:**
- `WebDemo/src/tunnel_s4_swim2.js` (new: settings and code)
- Small gated hooks in `WebDemo/src/game.js`, `tunnel_r7_hero.js`, `tunnel_r7_hero_water.js` and `tunnel_r8_liquid.js`
- `WebDemo/game.bundle.js` rebuilt (md5 `1199348a`)

**Proofs:**
- **(a) Pixel identity: pass.** Committed bundle (`5bb24e28`) against the rebuilt one: 0 px different for `intunnel` (start, +1 s, +2 s), R9 (start, +1 s) and the normal game (start, +1 s). The swim2 start frame is also 0 px different from the accepted start.
- **(b) Function tests: pass.** `s3_func` for `intunnel` is byte-identical to the accepted report. For `swim2`, every gameplay field is identical; only the switch list, the hidden-layer list and the draw calls (192 to 189) differ. `r2_func` at VW=135 VH=270 is byte-identical to the accepted report for both.
- **(c) Motion trace: pass.** 152 frames x 16 gameplay fields, 0 differences. The HUD coin count in the recorded clips is one apart from the jump on; that is the recorder's known timing noise (documented in `53_swim/gameplay/coin_timing_check.md`), not a gameplay change.

**Supporting numbers** (these support the judgement, they are not a similarity score):

| at +1 s | ORIGINAL | accepted | swim2 |
|---|---|---|---|
| tunnel zone pale | 8.3 % | 22.1 % | 7.5 % |
| tunnel zone cobalt | 14.6 % | 10.7 % | 15.2 % |
| tunnel zone saturation | 0.55 | 0.46 | 0.57 |
| foreground white | 22.3 % | 28.8 % | 20.6 % |

- **Water past her** (optical flow at her contact strip, straight run): it now streams past her at 346 px/s, up from 107. That is about twice its wobble (166 px/s); before, the wobble was larger than the flow.
- **She still sits on top of the water:** her lowest fur row moves by only 2-4 px.

**What still differs from the ORIGINAL:**
- The swell keeps its footprint and moves with her; only its surface flows, so it is not yet the water report's travelling heaps.
- The lavender inner rings and the washer bevel are missing while moving.
- Two cream bars remain in the upper corners (lighting report S3, not done).
- There are fewer bubbles near the tunnel centre.
- The landing still has the one-frame drop.

Everything is in `/home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Previews/WebDemo/screen4_round9_match/57_swim2/`:
- `README.md`
- `sheets/ORIGINAL_accepted_swim2_{start,T1.0,T2.0}.jpg`, with full-resolution frames in `frames/`
- `videos/clip_compare_ORIGINAL_accepted_swim2.mp4` and `videos/clip_key_moments_accepted_swim2.jpg`
- `proofs/` and `motion/`: the test outputs
- `scripts/`: the scripts used, with this worktree's paths

The dev server is stopped and the browser page is on about:blank.


_158 tool steps._
