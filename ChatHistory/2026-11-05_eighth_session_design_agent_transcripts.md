# Eighth session: design agents, focused correction pass (?s3=focus)

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Art Director: rank focus vs original (started 18:02 UTC)

**Lead → agent** (18:02 UTC):

You are reviewing the newest build of Bubble Wash Kingdom Screen 4, `?s3=focus` (branch `ccr-3d8a1ae9-hhgml1`, commit `6cf3701`), against the user's ORIGINAL APPROVED Screen 4, the only target: `/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536). Read the "Newest: the FOCUSED CORRECTION PASS" section of your agent file first, then `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/README.md`.

Use the frames already captured and committed; do NOT start a browser (two other browser jobs are running and a third breaks software rendering). They are real gameplay, seed 7, 538 x 1076 at DPR 1.5, 3.0 s after the tap:
- `Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00.png` (page, HUD on) and `focus_final_t3.00_canvas.png` (3D canvas);
- `final/match_before_t3.00.png` and `_canvas.png` (the previous build, `?s3=match`);
- the sheets in `final/` (full side by side, close-ups, a 50% overlay, a tunnel-only difference view) and the numbers in `final/*.txt`.
You may write your own Python measurements (run with `source Tools/bw_tools_env.sh` then `"$BW_PY" -I script.py`); put scripts and outputs in `Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/` (create it).

The user's latest instructions, which override earlier ones:
1. Round the pink character: sparkling BLUE water with small bubbles, small splashes and blue-white highlights. NO thick white or lavender foam cushion or clumps. She sits ON TOP of the water and must not be submerged or hidden. Do not redesign her.
2. The tunnel (`Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/`, read its CLAUDE_SEND_THIS_PROMPT.txt and look at 00, 01, 04, 05, 07, 09, 10): the water itself as twisting, irregular cobalt ribbons with turquoise currents, distinct dark-blue depth between them, curved broken white splash streaks (not star glitter), and a warm centre kept compact. Not smooth, even, wide pastel rings or a big peach band. Bubbles at several depths are secondary.
3. The sock lies sideways like the original's. The composition is close and full like the original's. Coins, gem and sock sit where the original has them.

Your job: rank the 8 most important REMAINING visual differences between focus at 3.0 s and the original, most important first. Cover the tunnel water (shape, ring widths, colours, depth, streaks), the water round the character, the character's on-screen size and place, the objects, and the overall colour and brightness. For each difference give:
- what differs, where (screen fractions);
- the measurement that shows it (numbers for both images, and which script produced them);
- a concrete, measurable target for the fix;
- which specialist owns it: `lighting-visual-matching` (tunnel walls, the ribbons in `tunnel_r9_match.js`, camera, objects, colour grade) or `water-vfx-engineer` (the water round the character, splashes, spray, bubbles, `tunnel_r9_match_water.js`);
- the settings or functions most likely involved (e.g. `FOCUS.match.walls.ribbons`, `FOCUS.water.sparkle`).
Also say plainly what is already as good as the original and should not be touched. Do not claim any similarity percentage without saying which measurement produced it. Do not edit game code. Commit nothing; the lead commits your folder. End with a short ranked list the lead can hand to the two specialists.

- 18:02 `Grep`: FOCUSED CORRECTION PASS
- 18:02 `Bash`: Show branch, recent commits, and focus pass files
- 18:02 `Read`: /home/user/bubblegame/.claude/agents/game-art-director.md
- 18:02 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/README.md
- 18:02 `Bash`: List vortex kit, read prompt and focus numbers
- 18:03 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
- 18:03 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00.png
- 18:03 `Bash`: Print image sizes and the focus measurement scripts
- 18:03 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/04_ANNOTATED_VORTEX_COMPARISON.png
- 18:03 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/01_APPROVED_TUNNEL_WATER_RAW.png
- 18:03 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/05_APPROVED_COBALT_WATER_BANDS_ZOOM.png
- 18:03 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/07_APPROVED_SPLASH_STREAKS_ZOOM.png
- 18:03 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/09_MATCHED_BANDS_CLOSEUP.png
- 18:03 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/10_MATCHED_STREAKS_CLOSEUP.png
- 18:03 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/full_original_vs_now_3.00s.png
- 18:03 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png
- 18:03 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/closeup_water_round_character.png
**Lead → agent** (18:03 UTC):

[Image: original 2312x623, displayed at 2000x539. Multiply coordinates by 1.16 to map to original image.]

- 18:03 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/closeup_tunnel_swirling_water.png
**Lead → agent** (18:03 UTC):

[Image: original 2312x812, displayed at 2000x702. Multiply coordinates by 1.16 to map to original image.]

- 18:04 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/closeup_cobalt_turquoise_bands.png
**Lead → agent** (18:04 UTC):

[Image: original 2312x887, displayed at 2000x767. Multiply coordinates by 1.16 to map to original image.]

- 18:04 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/closeup_splash_streaks_bubbles.png
**Lead → agent** (18:04 UTC):

[Image: original 2312x900, displayed at 2000x779. Multiply coordinates by 1.16 to map to original image.]

- 18:04 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/overlay_50pct_original_over_now_canvas.png
- 18:04 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/closeup_sock.png
- 18:04 `Bash`: Create review folder and gridded centre crops of original vs focus
- 18:04 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/grid_centre.png
- 18:05 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/grid_full.png
- 18:05 `Bash`: Measure colour classes, brightness, texture per zone
- 18:06 `Bash`: Compute low-frequency brightness and white-share difference maps
- 18:06 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/lowfreq_maps.png
- 18:07 `Bash`: Unwrap tunnel to polar and measure ring structure
- 18:07 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/polar_unwrap.png
- 18:08 `Bash`: Measure ring-zone lightness/hue and polar stability
- 18:08 `Bash`: Measure character size/colour and water round her
- 18:09 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/USER_WATER_CORRECTION_1715utc_approved_vs_build.png
- 18:09 `Bash`: Detect coins and gem positions and sizes
- 18:09 `Bash`: Make gridded crops of sock and character base
- 18:09 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/grid_sock.png
- 18:09 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/grid_base.png
- 18:10 `Bash`: Rough bubble count via Hough circles
- 18:10 `Bash`: Retry bubble detection with stricter thresholds
- 18:10 `Bash`: Measure white streak sizes, thickness and orientation
- 18:10 `Bash`: Fix streak orientation via moments and validate
- 18:11 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png
- 18:11 `Bash`: Measure tunnel core colour classes
- 18:11 `Bash`: Remove unreliable disc measure and rerun core script
- 18:11 `Bash`: Read the focus pass settings file
- 18:12 `Bash`: Locate the top of the tunnel water in each image
- 18:13 `Bash`: Check side-sector coherence and global tonal range
- 18:14 `Bash`: Check why the deep-blue class undercounts the original
- 18:14 `Bash`: Build the numbered ranked-differences sheet
- 18:14 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/ranked_differences_sheet.png
- 18:16 `Bash`: Fix rim profile top detection and rerun
- 18:16 `Bash`: Confirm only the review folder changed
- 18:16 `Bash`: Make bubble script use stricter thresholds and rerun
- 18:17 `SubagentHandback`

_54 tool steps._

---

## Tunnel & Lighting specialist: Tunnel & Lighting: camera, ribbons, objects (started 18:18 UTC)

_Worked in its own worktree, branch `worktree-agent-ae55466877e7d52cb`._

**Lead → agent** (18:18 UTC):

You are the Tunnel & Lighting specialist for Bubble Wash Kingdom Screen 4. Continue the focused correction pass on `?s3=focus` (lead branch `ccr-3d8a1ae9-hhgml1`, your worktree starts at `d6e836d`). Read first: the "Newest: the FOCUSED CORRECTION PASS" section of your agent file; `Previews/WebDemo/screen4_round9_match/15_focus_pass/README.md`; and the Art Director's review `Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/` (its numbers are in the `*.txt` files, its scripts in `scripts/`, run with `source Tools/bw_tools_env.sh` then `"$BW_PY" -I scripts/<name>.py`). The ONLY target is the user's ORIGINAL APPROVED Screen 4, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`. The vortex kit `Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/` shows what the user wants of the tunnel water: twisting, irregular cobalt ribbons with turquoise currents, distinct dark-blue depth between them, curved broken white splash streaks, a compact warm centre; NOT smooth even pastel rings or a big peach band.

Setup in your worktree: `cd WebDemo && npm install && node build.mjs` (esbuild); `source Tools/bw_tools_env.sh` in every shell. Capture real gameplay at the locked moment: `S3=focus TIMES=3.0 DPR=1.5 CANVAS=1 node tools/screen4/liquid_shots.cjs "$PWD" <out-dir>` (seed 7, 538 x 1076, 3.0 s after the tap). Try settings without rebuilding through the third argument, e.g. `'{"match":{"walls":{"ribbons":{"turqShare":0.3}}}}'` (deep-merged into MATCH). Camera candidates: `tools/screen4/cam_sweep.cjs` (one load, real renders). Object places: `tools/screen4/hero_probe.cjs` with `PICKS`. Run AT MOST ONE browser at a time (another specialist runs one too; three at once breaks software rendering).

YOUR FILES ONLY: `WebDemo/src/tunnel_r9_match.js` and the `FOCUS.match` part of `WebDemo/src/tunnel_r9_focus.js` (do not touch `FOCUS.water` or `tunnel_r9_match_water.js`: the Water & VFX specialist owns them and works in parallel). Everything stays gated on `FOCUS_ON`: `?s3=match` and every older switch must stay pixel-identical. Gameplay must keep working (collectibles within reach; lanes, jump, coins, gem, socks).

Your items from the Art Director's ranked list, in this order:
1. (AD item 2) Camera: she is drawn too large and low (canvas: width 0.600 W vs the original's 0.465, top 0.687 vs 0.702, base 0.894 vs 0.859, centre (0.521, 0.799) vs (0.502, 0.778)). Move the camera back and narrow the fov together (the AD suggests z toward -2.8 to -3.0, fov toward 66-68) and adjust lookY/x: target width 0.46-0.49 W, top 0.70 +- 0.01, base <= 0.865, centre (0.50, 0.78) +- 0.01, with the tunnel's water top kept at 0.27-0.29 (`rim_profile.py`). Settings: `FOCUS.match.hero.round6.round5.camera`. As soon as this camera is decided and committed in your worktree, say so in your report's first line AND keep going (the lead will pass the camera to the Water & VFX specialist).
2. (AD item 8, after the camera) Re-place the objects onto the original's spots with `hero_probe` PICKS, keeping every collectible within reach: lower-right coin centre (0.893, 0.733), width about 0.22; big left coin (0.198, 0.602); small left coin (0.152, 0.471); gem (0.326, 0.511), height <= 0.037; total gold area 4.0-4.8%; the sock's top 0.55-0.56, its cuff level within +-7 degrees with its opening hidden, toe still to the lower left (`FOCUS.match.sockPose`, now [0.45, -0.8, -0.1]: tip x down to about 0.15-0.2, then level the roll). The two decorative brushes stay where the original has them.
3. (AD item 3) Ribbons (`focusRibbonsGLSL`, `FOCUS.match.walls.ribbons`, `walls.bands.perLog`): too many, thin, light and cyan. The AD's measures (upper ring half): dark bands per ray 6.3 / 7.7 (orig / focus), lightness spread 14.9 / 10.5 L*, darker than L* 55: 30.5 / 16.8% (`ring_dark.py`, y < 0.45), median L* 64 / 73, saturated blue hue 215 / 210, sat 0.83 / 0.69, turquoise 7.5 / 12.6%. Targets: 6.0-6.6 bands per ray, spread >= 14, median L* 62-66, darker than L* 55 27-32%, hue 213-217, sat >= 0.78, turquoise 6-9%. Starting points: perLog about 3.5, turqShare about 0.3, edgeTo about 0.15, deepFrom about [0.5, 0.8], gapFrom about [0.78, 0.93], keep about 0.12. Do NOT add more twist (irregularity already matches). Do not use `tunnel_palette.py`'s deep-blue class (it misses the original's cobalt).
4. (AD item 4, the wall part) White streaks on the walls (`focusFlecksGLSL`, `FOCUS.match.walls.flecks`): chunky broken splash shapes, not thin dashes. `streaks.py` orig / focus: thickness 3.5 / 1.9 px, median area 59 / 28 px, 90th percentile 1160 / 126 px, 3.2 / 12.7 pieces per 10k px, along-ring 28 / 71%. Targets: thickness >= 3 px, median area >= 45, p90 >= 500, <= 5 per 10k px, 30-45% along the ring, the same total white (22% of the ring zone). Suggested: cols about 45, wid about [0.2, 0.4], len about [0.15, 0.35], random rotation, hooked C / 7 splash shapes.
5. (AD item 6, colours) The centre: within 0.12 W of the vanishing point pink-violet 8.6 / 0.9%, warm 13.0 / 7.8%, saturated blue 3.1 / 15.7% (`core.py`). Targets: pink-violet 6-10%, warm 10-14%, saturated blue <= 6%; warmth in the wider ring zone stays <= 5%; remove the two flat yellow star-shaped patches at about (0.43, 0.47) and (0.62, 0.43) if they are yours (rainbow / walls).
6. (AD item 7, after the camera) The left wall (x 0-0.30, y 0.44-0.79) glows pale in the original (L* 78, white 28%) where focus is a dark blue wedge (L* 64.6, white 4.7%); lavender slivers at x 0-0.05 / 0.93-1.0, y 0.66-0.78. Targets: left zone L* 74-80, white >= 20%, lower-left L* >= 72, no lavender slivers. Never fix brightness with bloom, exposure or haze.

Method: one change at a time, captured at 3.0 s and measured with the AD's scripts against the original; look at the frames too (a number can improve while the picture gets worse). COMMIT in your worktree after each item that is tested (rebuild `game.bundle.js` and commit it with the source; the lead merges and pushes; the user wants each step saved). At the end, prove `?s3=match` is pixel-identical to before your changes for the 3.0 s canvas frame (capture with `S3=match` before and after), and run `S3=focus node tools/screen3/s3_func.cjs "$PWD"` (lanes, jump, 12 coins, 1 gem, 2 socks, no console errors). Put evidence (frames, crops, numbers, a README with an original / before / after 3.0 s sheet and a verified / partly / not table per item) in `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/`. Report: your commits (hashes), the numbers before and after per item, what remains, and the final camera values.

- 18:18 `Bash`: Check worktree state and preview folders
- 18:18 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/Previews/WebDemo/screen4_round9_match/15_focus_pass/README.md
- 18:18 `Bash`: List and read Art Director review folder
- 18:18 `Bash`: Print all Art Director number files
- 18:19 `Bash`: Inspect AD scripts' inputs
- 18:19 `Bash`: Read focus settings file
- 18:19 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/WebDemo/src/tunnel_r9_match.js
- 18:19 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/WebDemo/src/tunnel_r9_match.js
- 18:19 `Bash`: Check node_modules and screen4 tools
- 18:19 `Bash`: Install packages and build bundle
- 18:19 `Bash`: Read liquid_shots tool header
- 18:19 `Bash`: Read cam_sweep and hero_probe headers
- 18:19 `Bash`: Capture baseline focus frame at 3.0 s
- 18:19 `Bash`: Read tools env script
- 18:19 `Bash`: Print tool environment values
- 18:19 `Bash`: Locate tool paths directly
- 18:19 `Bash`: Check playwright availability
- 18:19 `Bash`: Find playwright installation
- 18:20 `Bash`: Check playwright resolution
- 18:20 `Bash`: Capture baseline focus frame at 3.0 s
- 18:20 `Bash`: Capture baseline focus frame at 3.0 s
- 18:20 `Bash`: Compare baseline with previous final frame
- 18:21 `Bash`: Write AD-script runner for new frames
- 18:21 `Write`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/run_ad.py
- 18:21 `Bash`: Verify runner reproduces AD numbers
- 18:21 `Bash`: Find camera setting usage
- 18:21 `Bash`: Find S4 camera use in game.js
- 18:21 `Bash`: Read camera follow code
- 18:22 `Bash`: Read rest of hero_probe tool
- 18:22 `Bash`: Probe focus scene at 3.0 s
- 18:22 `Bash`: Probe focus scene at 3.0 s
- 18:22 `Bash`: List objects in view from probe
- 18:22 `Bash`: Read rim_profile and objects scripts
- 18:23 `Bash`: Make original vs focus side by side
- 18:23 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sbs0.png
- 18:23 `Bash`: Find debug API exposure
- 18:23 `Bash`: Check camera blend end setting
- 18:24 `Write`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/WebDemo/tools/screen4/tune_cands.cjs
- 18:24 `Bash`: Move sweep tool into evidence scripts folder
**Agent** (18:24 UTC):

Now a measuring script for the sweep frames (character box by the AD's pink mask, water top by rim_profile's rule).

- 18:24 `Write`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/frame_fit.py
- 18:24 `Bash`: Write first camera candidate set
- 18:25 `Write`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sw1/cands.json
- 18:25 `Bash`: Render camera candidates at 3.0 s
- 18:27 `Bash`: Read the user's new kit instructions
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/tkit/05_LOWER_LEFT_WATER_VS_GRAY_WEDGE.png
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/tkit/04_REAL_SIDE_BY_SIDE_MARKED.png
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/tkit/06_TUNNEL_CIRCLES_LIGHT_AND_FLOW.png
- 18:27 `Bash`: Read hide_probe header and kit README
- 18:27 `Bash`: Check sweep progress
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/tasks/bezzceoc0.output
- 18:27 `Bash`: Find collar and face definitions
- 18:27 `Bash`: Read hero rim and collar code
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/tasks/bezzceoc0.output
- 18:27 `Bash`: Read liquidCollar code
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/tasks/bezzceoc0.output
- 18:27 `Bash`: Measure first sweep frames
- 18:28 `Bash`: Side by side of sweep frames with guide lines
- 18:28 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sw1/sbs1.png
- 18:28 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/tasks/bezzceoc0.output
- 18:28 `Bash`: Read porthole face code
- 18:28 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/tasks/bezzceoc0.output
- 18:29 `Bash`: Read rest of hide_probe
- 18:29 `Bash`: Measure all sweep frames
- 18:29 `Bash`: Side by side of further-back candidates
- 18:29 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sw1/sbs2.png
- 18:30 `Bash`: Copy hide_probe for a tune-capable variant
- 18:30 `Bash`: Add DPR and TUNE support to the copy
- 18:30 `Bash`: Hide probe on current focus at 3.0 s
- 18:32 `Bash`: Crop lower-left region for each hidden object
- 18:32 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/hp_base/crops.png
**Lead → agent** (18:32 UTC):

[Image: original 2576x968, displayed at 2000x752. Multiply coordinates by 1.29 to map to original image.]

- 18:33 `Bash`: Lower-left changes per hidden object
- 18:33 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/hp_base/crops2.png
**Lead → agent** (18:33 UTC):

[Image: original 2240x1292, displayed at 2000x1154. Multiply coordinates by 1.12 to map to original image.]

- 18:33 `Bash`: Read wall fragment main and heroWalls refs
- 18:33 `Bash`: Read heroWalls geometry creation
- 18:34 `Bash`: Find vanishing point used in AD scripts
- 18:34 `Write`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/NOTES.md
- 18:34 `Bash`: Commit evidence tools and notes
- 18:35 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/tune_cands.cjs
- 18:35 `Bash`: Find porthole rivet settings
- 18:35 `Write`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sw2/cands_in.json
- 18:35 `Bash`: Render camera plus rim restaging candidates
- 18:38 `Write`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sw3/cands_in.json
- 18:38 `Bash`: Render and measure refined camera candidates
- 18:40 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/WebDemo/src/tunnel_r9_match.js
- 18:40 `Bash`: Rebuild bundle
- 18:40 `Write`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sw4/cands_in.json
- 18:40 `Bash`: Render and measure candidate E
- 18:41 `Bash`: Upper half comparison for candidate E
- 18:41 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sbs4.png
- 18:42 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/WebDemo/src/tunnel_r9_focus.js
- 18:42 `Bash`: Build, capture camera step, and measure
- 18:43 `Bash`: Full page comparison after camera step
- 18:43 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/sbs5.png
- 18:43 `Bash`: Commit camera step
**Agent** (18:43 UTC):

Now update NOTES.md with the camera decision as the first line.

- 18:43 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-ae55466877e7d52cb/Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/NOTES.md
- 18:43 `Bash`: Hide probe with new camera, lower corners

_96 tool steps._

---

## Water & VFX specialist: Water & VFX: splash round her, floor (started 18:19 UTC)

_Worked in its own worktree, branch `worktree-agent-a29b1562d2b9d7e06`._

**Lead → agent** (18:19 UTC):

You are the Water & VFX specialist for Bubble Wash Kingdom Screen 4. Continue the focused correction pass on `?s3=focus` (lead branch `ccr-3d8a1ae9-hhgml1`, your worktree starts at `d6e836d`). Read first: the "Newest: the FOCUSED CORRECTION PASS" section of your agent file; `Previews/WebDemo/screen4_round9_match/15_focus_pass/README.md`; and the Art Director's review `Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/` (numbers in `*.txt`, scripts in `scripts/`, run with `source Tools/bw_tools_env.sh` then `"$BW_PY" -I scripts/<name>.py`). The ONLY target is the user's ORIGINAL APPROVED Screen 4, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.

THE USER'S RULE FOR THE WATER ROUND THE CHARACTER (it supersedes every earlier foam request; see `Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/USER_WATER_CORRECTION_1715utc_approved_vs_build.png`): she sits ON TOP of sparkling BLUE water with small bubbles, small irregular blue-water splashes, subtle white highlights and fine spray. NO large opaque white or lavender foam geometry, cushion or clumps round her, and never a see-through water curtain over her. Do not redesign or recolour her. White is made of broken crests, spray and glints, never a mass.

Setup in your worktree: `cd WebDemo && npm install && node build.mjs`; `source Tools/bw_tools_env.sh` in every shell. Capture real gameplay at the locked moment: `S3=focus TIMES=3.0 DPR=1.5 CANVAS=1 node tools/screen4/liquid_shots.cjs "$PWD" <out-dir>` (seed 7, 538 x 1076, 3.0 s after the tap). Try settings without rebuilding through the third argument, e.g. `'{"matchWater":{"sparkle":{"share":0.7}}}'` (deep-merged into MATCH_WATER before it hands its settings on). Find what draws a region with `tools/screen4/hide_probe.cjs` (`DPR=1.5 S3=focus AT=3.0 HIDE='nothing,heroSwell,spLumps,spCurls,heroSplash,lqWaterlineBubbles,mwTunnelBubbles'`). Run AT MOST ONE browser at a time (the Tunnel & Lighting specialist runs one in parallel; three at once breaks software rendering).

YOUR FILES ONLY: `WebDemo/src/tunnel_r9_match_water.js` and the `FOCUS.water` part of `WebDemo/src/tunnel_r9_focus.js` (do not touch `FOCUS.match` or `tunnel_r9_match.js`: Tunnel & Lighting owns them and is changing the camera). Everything stays gated on `FOCUS_ON`: `?s3=match` and every older switch must stay pixel-identical. Gameplay must keep working, and the water must keep reacting to a swerve, a jump and a landing.

THE CAMERA WILL CHANGE: Tunnel & Lighting is moving the camera back with a narrower view so she is drawn at the original's size (about 0.47 W wide, centre (0.50, 0.78), base about 0.86). The lead will send you the new camera values as soon as they are committed; from then on add them to every capture's tune JSON as `{"match":{"hero":{"round6":{"round5":{"camera":{...}}}}}}` and re-check your work with them. Until then, work with the current camera, judging the zones relative to her body.

Your items from the Art Director's ranked list, in this order:
1. (AD item 1, the most important) The water round her is a flat, smooth light-blue sheet (the swell `heroSwell`, its crest and upper face) instead of sparkling, broken splash. `character_water.py` (zone without her or the coins), orig / focus: white 27.7 / 4.8%, vivid blue 12.9 / 32.4%, lavender 16.9 / 3.6%, texture 5.47 / 4.53, largest white piece 10247 / 492 px; left of her white 27.9 / 3.8%, L* 79.3 / 73.8; right white 31.2 / 7.1%, L* 82.6 / 78.0. Her pink stays 0.36-0.41 W wide down to y 0.86 and then a flat cut, where the original's splash crests rim her lower sides (0.16 W wide at y 0.84). Targets: white 15-22% made of crests, spray and glints (at least half of it in pieces <= 400 px, no piece over about 2,500 px, never a cushion); vivid blue 15-22%; texture >= 5.2; L* 78-82 on both sides; lavender <= 5%; small spiky splash crests rimming her lower sides so her pink is <= 0.2 W wide 0.02 H above her lowest point; no smooth water edge longer than 0.1 W across her, and no water above about y 0.82 in front of her centre. Levers: `FOCUS.water.look` (`crest` 0.3, `crestFront`, `crestW`), `swellFront`, `matchSwellGLSL` (break the crest line), `sparkle` (`share` 0.42 -> about 0.7, bigger dots) in `focusSparkleGLSL`, `crest.spray` / `sprayShare` in `focusLumpGLSL`, `splash.lumps` (small, spiky, low crests at phi +-10 to 60 along her base; small, not domes), `heroWater.splash.count` 120 -> about 250 kept at her sides, the side `curls`.
2. (AD item 5) The water band behind her (y 0.60-0.70, the floor ahead) is darker with flat lavender caustic stripes where the original is bright white-cyan splash water: `zones.py` floor ahead (x 0.25-0.65) L* 83.5 / 71.1, white 26.9 / 6.3%, lavender 3.6 / 12.4%, median #aad7f4 / #80aee6. Targets: L* 80-84, white 20-27% as broken crests, lavender <= 5%, median near #aad7f4. Levers: `matchFloorApply`, `FOCUS.water.floor` (`caustic` 0.55 lower, `deep` 0.85 toward 0.5, more crest white). Never brighten with bloom, exposure or haze.
3. (AD item 4, the flying part) The white streaks among the bands (`FOCUS.water.bubbles.flecks`, the instanced streaks in `tunnelBubbles`): fewer and chunkier: count 560 -> about 220, larger, some hooked or rotated, so the ring zone's streaks reach thickness >= 3 px, p90 area >= 500 px (`streaks.py`; Tunnel & Lighting changes the wall flecks at the same time, so judge your part with `hide_probe` on `mwTunnelBubbles`).
4. (AD item 6, the bubble part) No more than about 10 visible bubbles within 0.2 W of the tunnel's centre (now about 45 by eye in x 0.38-0.70, y 0.40-0.56): `FOCUS.water.bubbles.zones` (the open-tube zone and the far zone; fewer near the axis), keeping bubbles at near, middle and far depth along the walls.

Method: one change at a time, captured at 3.0 s and measured with the AD's scripts against the original; look at the frames too. COMMIT in your worktree after each item that is tested (rebuild `game.bundle.js` and commit it with the source; the lead merges and pushes; the user wants each step saved). At the end, prove `?s3=match` is pixel-identical to before your changes for the 3.0 s canvas frame, and run `S3=focus node tools/screen3/s3_func.cjs "$PWD"`. Evidence (frames, an enlarged original / before / after crop of the water round her, numbers, a README with a verified / partly / not table per item) in `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/`. Report: your commits (hashes), the numbers before and after per item, and what remains.

- 18:19 `Bash`: Show branch state and evidence folders
- 18:19 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/Previews/WebDemo/screen4_round9_match/15_focus_pass/README.md
- 18:19 `Bash`: List the Art Director review folder and read its README
- 18:19 `Bash`: Read the AD's numbers and the main scripts
- 18:19 `Bash`: Read streak and bubble scripts and list focus pass evidence
**Agent** (18:19 UTC):

Now the source files.

- 18:19 `Bash`: Show file sizes and read the focus settings file
- 18:19 `Bash`: Read the water file
- 18:19 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_match_water.js
- 18:19 `Bash`: Find the hooks into the water file
- 18:19 `Bash`: Read the swell shader and waterline foam code
- 18:20 `Bash`: Read the hero water swell geometry and vertex shader
- 18:20 `Bash`: Read the hero splash droplets code
- 18:20 `Bash`: Read the splash bank settings and code
- 18:20 `Bash`: Check node_modules and tools environment
- 18:20 `Bash`: Check node_modules presence
- 18:20 `Bash`: List WebDemo directory in worktree
- 18:20 `Bash`: Link node_modules into the worktree
- 18:20 `Bash`: Read the tools environment script
- 18:20 `Bash`: Check tool install locations
- 18:20 `Bash`: Source tools env and build the game
- 18:20 `Bash`: Source tools env and build the game
- 18:20 `Bash`: Build the game bundle
- 18:20 `Bash`: Check build cleanliness and read capture tool
- 18:20 `Bash`: Locate playwright installation
- 18:20 `Bash`: Search for playwright module
- 18:21 `Bash`: Capture baseline focus frame at 3.0 s
- 18:21 `Bash`: Create evidence folders and a capture wrapper script
- 18:21 `Bash`: Capture the baseline focus frame at 3.0 s
- 18:21 `Bash`: Check capture sizes and compare with AD's focus frame
- 18:22 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/USER_WATER_CORRECTION_1715utc_approved_v
- 18:22 `Bash`: Write a crop comparison script and crop the base region
- 18:22 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/c_base.png
- 18:23 `Bash`: Write combined measurement script and measure the baseline
- 18:23 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/scripts/measure.py
- 18:24 `Bash`: Measure the baseline frame
- 18:24 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/focus_before_t3.00_canvas.png
- 18:24 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
- 18:24 `Bash`: Crop the base region enlarged
- 18:24 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/c_base2.png
**Lead → agent** (18:24 UTC):

[Image: original 2076x369, displayed at 2000x355. Multiply coordinates by 1.04 to map to original image.]

- 18:25 `Bash`: Read hide probe tool and tune hooks
- 18:25 `Bash`: Read the rest of the hide probe tool
- 18:25 `Bash`: Run hide probe on the water layers
- 18:25 `Write`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/probe.sh
- 18:25 `Bash`: Run the hide probe on the water layers
- 18:27 `Bash`: Read the user's new kit message
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/tkit/06_TUNNEL_CIRCLES_LIGHT_AND_FLOW.png
- 18:27 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/tkit/05_LOWER_LEFT_WATER_VS_GRAY_WEDGE.png
- 18:27 `Bash`: Wait for the hide probe output
- 18:28 `Bash`: Check hide probe progress
- 18:28 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/scripts/hide_diff.py
- 18:28 `Bash`: Compute what each water layer draws
- 18:28 `Bash`: Fix the montage script and rerun it
- 18:28 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/hide0_montage.png
**Lead → agent** (18:28 UTC):

[Image: original 3766x1076, displayed at 2000x571. Multiply coordinates by 1.88 to map to original image.]

- 18:28 `Bash`: Zoom on the lower-left in each probe frame
- 18:28 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/ll.png
- 18:29 `Bash`: List the visible named objects
- 18:29 `Bash`: Probe the floor, walls, collar and bubble layers
- 18:29 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_match_water.js
**Agent** (18:30 UTC):

Now the new focus swell shader.

- 18:30 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_match_water.js
- 18:30 `Bash`: Find sparkle function references
- 18:30 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_match_water.js
- 18:30 `Bash`: Remove the old sparkle function and call the new one
**Agent** (18:30 UTC):

Now the settings in `FOCUS.water`.

- 18:30 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_focus.js
- 18:30 `Bash`: Build and check the second probe
- 18:31 `Bash`: Capture the phi debug render
- 18:31 `Bash`: Montage the second probe's lower-left
- 18:31 `Bash`: Check timestamps in the shared scratchpad
- 18:31 `Bash`: Move my probe files into a private subfolder and recompute
- 18:31 `Bash`: Copy my probe files into a private subfolder
- 18:31 `Bash`: Recompute the layer contributions
- 18:31 `Bash`: Crop the lower-left of the probe frames
- 18:31 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/ll1.png
- 18:31 `Bash`: Check the debug capture output
- 18:32 `Bash`: Crop the floor ahead region
- 18:32 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/floor0.png
- 18:32 `Bash`: Read the floor fragment shader
- 18:32 `Bash`: Crop the phi debug render
- 18:32 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/dbg.png
- 18:33 `Bash`: Capture with smaller teeth and raised side mounds
- 18:33 `Bash`: Crop and measure the first trial
- 18:33 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/c_t1.png
**Lead → agent** (18:33 UTC):

[Image: original 2082x471, displayed at 2000x452. Multiply coordinates by 1.04 to map to original image.]

- 18:34 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_match_water.js
- 18:34 `Write`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/NOTES.md
**Agent** (18:34 UTC):

Now add a `lift` to swellFront and switch the face patterns to the signed coordinate.

- 18:34 `Edit`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_match_water.js
- 18:34 `Bash`: Switch the face patterns to the signed arc coordinate
- 18:34 `Bash`: Rebuild and capture with crest lift
- 18:35 `Bash`: Crop and measure trial 2
- 18:35 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/c_t2.png
**Lead → agent** (18:35 UTC):

[Image: original 2082x471, displayed at 2000x452. Multiply coordinates by 1.04 to map to original image.]

- 18:36 `Write`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/batch.sh
- 18:36 `Bash`: Capture three debug renders of the crest
- 18:38 `Bash`: Crop the three debug renders
- 18:38 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/c_d.png
**Lead → agent** (18:38 UTC):

[Image: original 2899x346, displayed at 2000x239. Multiply coordinates by 1.45 to map to original image.]

- 18:38 `Bash`: Crop debug renders closer
- 18:39 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/c_d.png
**Lead → agent** (18:39 UTC):

[Image: original 2054x262, displayed at 2000x255. Multiply coordinates by 1.03 to map to original image.]

- 18:39 `Bash`: Crop the hide probe at the base
- 18:39 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/c_h0.png
**Lead → agent** (18:39 UTC):

[Image: original 2966x461, displayed at 2000x311. Multiply coordinates by 1.48 to map to original image.]

- 18:40 `Read`: /home/user/bubblegame/.claude/worktrees/agent-a29b1562d2b9d7e06/WebDemo/src/tunnel_r9_match_water.js
**Agent** (18:40 UTC):

Rewrite the block to cut in the profile coordinate `t` and to use the distance along the face for the patterns.

- 18:40 `Bash`: Rewrite the crest cut in the profile coordinate
- 18:40 `Bash`: Update teeth settings and rebuild
- 18:40 `Bash`: Capture the new crest cut, normal and debug
- 18:42 `Bash`: Crop and measure trial 3
- 18:42 `Read`: /tmp/claude-0/-home-user-bubblegame/8c78cdea-9bde-5c76-a992-3bfd55a5d099/scratchpad/wv/c_t3.png
**Lead → agent** (18:42 UTC):

[Image: original 2350x307, displayed at 2000x261. Multiply coordinates by 1.18 to map to original image.]

- 18:42 `Bash`: Add rounded lobes and smaller teeth, rebuild
- 18:42 `Bash`: Capture trials 4 and 5 (more white; side mounds)

_104 tool steps._
