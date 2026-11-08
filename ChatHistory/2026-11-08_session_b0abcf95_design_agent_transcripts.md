# Session b0abcf95, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Art director: Level 1 vs references (started 12:14 UTC)

**Lead → agent** (12:14 UTC):

You are the game art director for Bubble Wash Kingdom (repo /home/user/bubblegame, three.js game in WebDemo/). READ-ONLY: do not edit any file under WebDemo/ or anywhere else; do not render or run browsers (another agent does the rendering). Work only from existing images and source. Budget: about 20 minutes; read images at reduced size where possible (PIL thumbnails into your own scratch folder /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/).

Context: the user wants the playable Level 1 (after the existing girl / laundry toss / washer entry opening) to follow a 10-beat gameplay sequence: 01 washer entry, 02 start swimming with the goal "Rescue 5 lost socks 0/5", 03 jump to raised SIDE water paths, 04 drop down to a LOWER water path, 05 spinning brushes, 06 collect coins/gems/socks, 07 avoid enemies, 08 enter the Bubble Kingdom (must stay inside a water-filled chamber connected to the washer tunnel, never a dry road), 09 rescue progress 4/5 -> 5/5, 10 Level Complete with rewards (+300 coins, +10 gems, +5 socks) still in blue water. The main session (not you) is implementing the missing mechanics.

Authorities (read CLAUDE.md first, briefly):
- Visual authority: ORIGINAL approved Screen 4: Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg (the only Screen 4 target).
- Gameplay-flow authority: Design/ApprovedScreens/00_ORIGINAL_COMPLETE_12_SCREEN_BOARD.jpg and its panels 03_...png to 12_...png in the same folder; the user's new blueprint and preview: Design/ReferencePacks/2026-11-08_Level1_Blueprint_and_Strict_Prompt_from_user/ (BubbleWash_Level1_OriginalBoard_Annotated.png, BubbleWash_Level1_Generated_Gameplay_Preview.png, BubbleWash_Level1_STRICT_Claude_Prompt.txt).
- Current build's real gameplay captures (the latest verified build, bundle a62848a0): Previews/WebDemo/screen4_round9_match/70_level1_wet/sheets/*.jpg and frames/new_89e89f18/.

Deliver a report (return it as your final message, under 900 words) with:
A) For each of beats 01-10: what the current captures show versus the board panel: PRESENT / PARTLY / MISSING, one line each, visual evidence file named.
B) The top 8 visual differences between the current Level 1 sections and the original Screen 4's look (e.g. dominant purple/lavender ceiling, seams, dark horizontal streaks in water, white foam masses, opaque swirl cuts, odd objects in corners), ranked by importance, each with the file where you saw it and the approximate screen region.
C) A concise art spec for the NEW pieces being built, sized relative to the mascot (her body is about 0.8 m wide; lanes are 0.7 m apart): (1) raised side-water flumes (upper paths) with golden rims like board panel 03; (2) the lower-path chute / waterfall step like board panel 04; (3) a jump pad that launches her onto the side path; (4) the sock-goal HUD panel "Rescue 5 lost socks" with a progress bar (board 02 / 09); (5) the Level Complete rewards card (board 12). Give hex colours sampled from the references (say which file), materials, proportions, and what to avoid.
Start your report with one line listing the tools you actually used successfully.

- 12:15 `Bash`: List reference and capture folders
- 12:15 `Bash`: Read board readme, strict prompt, evidence README
- 12:15 `Bash`: List frames and image sizes
- 12:15 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-08_Level1_Blueprint_and_Strict_Prompt_from_user/BubbleWash_Level1_OriginalBoard_Annotated.png
- 12:15 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/70_level1_wet/sheets/00_every_transition_OLD_NEW_24_moments.jpg
**Lead → agent** (12:15 UTC):

[Image: original 3672x712, displayed at 2000x388. Multiply coordinates by 1.84 to map to original image.]

- 12:15 `Bash`: Build contact sheets of current build frames
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/new_0.jpg
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/new_1.jpg
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/new_2.jpg
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/new_3.jpg
- 12:15 `Bash`: Build a sheet of the original and board panels
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/refs.jpg
**Lead → agent** (12:15 UTC):

[Image: original 2107x760, displayed at 2000x721. Multiply coordinates by 1.05 to map to original image.]

- 12:15 `Bash`: Thumbnail side-path sheet and grep README
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/s06.jpg
- 12:15 `Bash`: Combine four full-res frames
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/full4.jpg
- 12:16 `Bash`: Thumbnail entry and castle-end sheets
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/entry_end.jpg
**Lead → agent** (12:16 UTC):

[Image: original 2500x564, displayed at 2000x451. Multiply coordinates by 1.25 to map to original image.]

- 12:16 `Bash`: Enlarge board panels 05, 06, 12 with a coordinate ruler
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/panels.jpg
- 12:16 `Bash`: Sample k-means palettes from board panels
- 12:16 `Bash`: Sample hue-filtered reference colours
- 12:17 `Bash`: Measure purple/blue/white shares by band, original vs build
- 12:17 `Bash`: Median water, coin and ceiling colours, original vs build
- 12:17 `Bash`: Thumbnail the generated gameplay preview
- 12:17 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/preview.jpg
- 12:17 `Bash`: Check enemy and hoop code references
- 12:18 `Bash`: Crop t46 chamber and t22 bottom band
- 12:18 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/crops.jpg
**Agent** (12:18 UTC):

Tools I used: Read (images and README), Bash with Python, PIL and numpy (thumbnails, contact sheets, HSV colour-class shares, colour sampling) and grep. Nothing was rendered and nothing was edited.

All frames are from `Previews/WebDemo/screen4_round9_match/70_level1_wet/frames/new_89e89f18/` (bundle a62848a0). Percentages come from my own HSV colour classes in Python; they are not the project's `compare_s4.py`.

## A) The 10 beats against the board

| Beat | Status | Evidence |
|---|---|---|
| 01 Washer entry | PRESENT | `sheets/03_entry_OLD_NEW.jpg`: the girl, the toss, the porthole spiral, the camera into the water |
| 02 Start swimming, 0/5 | PRESENT | `t0.png`, `t3.0.png`: "Rescue 5 lost socks 0/5" panel, vortex, coins, sock |
| 03 Jump to raised side paths | MISSING | `t22.0.png` only shows "Jump! Swipe up over the soap bars" on the one path. There are no raised flumes and no gold rims. |
| 04 Drop to a lower path | PARTLY (visual only) | `t26.0.png` "The drop" is just a slope on the single path. No branch, no lower lane, no waterfall step. |
| 05 Spinning brushes | PRESENT, look off | `t6.0`–`t10.0`: banner and brushes in her lanes. They are flat flower discs on orange poles, not the board's big fluffy rollers. |
| 06 Coins, gems, socks | PRESENT | `t14.0` banner, the sock at `t14.0`, the gem at `t42.0` |
| 07 Avoid enemies | PRESENT | `t30.0`, `t32.0`: grime balls roll toward her and knock her (`level1.js` lines 26 and 436). They are small black balls, not board 07's large navy blob with angry pink eyes. |
| 08 Bubble Kingdom | PARTLY | `t36.0`–`t48.0`: the banner and the wet chamber with hoops. The kingdom is only a small castle seen through the end portal (`t48.0`), with no towers or waterfalls in the chamber. |
| 09 Rescue 4/5 → 5/5 | PRESENT, out of order | 4/5 at `t26.0`, 5/5 already at `t36.0`, before the kingdom. Board 09 puts 4/5 inside the kingdom approach. |
| 10 Level Complete | PARTLY | `t50.0`: three stars and a checklist on blue water. Missing: the Rewards row (+300 / +10 / +5), "Next Level" (it says "Play again" plus "Level 2 not built yet"), "Collect 50 coins 50/50" (it shows "Coins collected 91"), and her celebration. |

## B) Top 8 visual differences from the original Screen 4 (most important first)

1. **The lilac ceiling dominates the top of the screen** (`t6.0`–`t46.0`, screen height 20–50%).
   - Purple share: 64% at `t10.0`, 65% at `t18.0`, 60% at `t42.0`; the original has 22%.
   - Its colour is a brighter, cooler lilac (median `#be95f6`) than the original's silver-lavender (`#9976ce`).
   - In the original that region is the blue and cyan vortex.
2. **The course water is a dark violet-indigo slab** (screen height 50–68%).
   - Median `#2a1ce6` at `t26.0` and `#3e41f5` at `t42.0`; the original's water ahead is `#619cec`.
   - Its flat facets read as dark stripes, with white confetti flecks on top.
   - There is a hard step where it meets her lighter surf, at about 70–75% of the height (`t10.0`, `t30.0`, `t42.0`).
3. **Seams and cut-outs.**
   - A wavy cyan-white cut line runs where the blue water walls meet the ceiling (left and right, 25–45% height), like an opaque swirl cutout.
   - `t22.0`: her surf ends in a hard edge at 83% height, and a flat lavender floor band (`#b3a1fd`) shows from 83% to 90%.
4. **Odd objects.**
   - `t46.0`: a flat pink bar crosses the chamber at about 38% height, and the finish arch's yellow foot block sits at the lower left (about 2% from the left, 62% height).
   - Green-topped island slabs show inside the portal.
   - A dark blob sits at the far top of `t26.0`.
   - Orange posts stand in the lanes at `t6.0`–`t10.0`.
5. **Thin orange hoops every 8 m** stack into a corridor of rainbow arches (`t5.0`–`t46.0`). The original has only one gold rim at the entrance, and no glowing centre is left after the drum.
6. **The coins are orange, not gold.** Median `#f69c3a` against the original's `#f7c826`, in every frame. Some are also oversized: at `t22.0` a coin about 0.17 W wide covers her.
7. **The brushes and glints are off.**
   - The hazards are flat flower discs on sticks in the middle of the tunnel; the original has big fluffy pom-poms framing the sides.
   - Generic pink four-point star glints appear at `t3.0`–`t26.0`, which the user has asked to avoid.
8. **There are no white crests in her water after the drum.**
   - White share at 50–92% height: 0–2% in the build; the original has 15–19% as crests.
   - Her surf is a uniform pale-cyan carpet. The original's bright crest lines and bubbles are missing (crests, not foam masses).

## C) Art spec for the new pieces

Scale: her body is 0.8 m wide, lanes are 0.7 m apart, so the main water is about 2.4 m wide.

**1. Raised side flumes (board 05)**
- Proportions:
  - Inner water width 1.0 m.
  - Water surface 0.9–1.0 m above the main water.
  - Centred about 1.8 m to each side, outside the three lanes, banked 15–20° inward.
  - Rails are round tubes 0.18 m across, standing no more than 0.25 m above the flume water.
  - Length 15–25 m, ending in a short spill back into the main water.
- Gold rails: mid `#f6bc3b`, highlight `#ffd257`, warm shadow `#ec9a63`, dark edge `#a85031` (board 05). Match the original's gold `#eeb613`–`#fcd941`. Use a standard metal material, metalness 0.7, roughness 0.3.
- Outer wall: the original's silver-lavender `#a78bd0` / `#c5a4e4`.
- Water: `#119ff6` body, `#35b2fb` highlights, crest lines `#f5f8ff` (board 06), flowing faster than the main path.
- Avoid: white rails or pillars (the rejected slide look), a visible dry top or underside, the orange of the current coins, z-fighting with the tunnel wall.

**2. Lower-path chute and waterfall step (board 06)**
- Proportions: the step is 0.8–1.0 m tall, about her height; the chute below is 1.8–2.0 m wide with gold rails on both sides, as above.
- The lip is one continuous curved water surface, with white spray only along the break line (`#f5f8ff`, capped at 12 px as in swim2).
- Water: `#047aec` deep, `#119ff6` body, `#35b2fb` light, streaks `#d3edfa` (board 06).
- Optional cue: a translucent pink down-arrow `#e47fd4` (board 05) on the water.
- Avoid: the current indigo `#2a1ce6`, black gaps under the step, horizontal seams, and the lavender floor showing through.

**3. Jump pad**
- A floating bubble-spring pad 0.9 m across and about 0.12 m thick, in one lane, 6–8 m before the flume entrance.
- Gold ring `#f7c826` with shadow `#eeb613`; a translucent cyan dome `#5bbff4` (the original's tunnel cyan) with pink up-chevrons `#e47fd4`.
- A gentle glow pulse and rising bubbles.
- Avoid: the soap-bar look, a white disc, mechanical springs.

**4. Sock-goal HUD panel (the original Screen 4 and board 11)**
- Keep the original's panel exactly, using the precision kit's `07` HUD crop:
  - blue `#1470ea` (range `#085bc6`–`#2c81f5`);
  - bar track navy `#071e65`;
  - white text with a navy outline, the sock icon on the left, "N/5" on the right.
- Fill: green `#90e51d`, highlight `#a1ec3a`, shade `#80da15` (board 11), in place of the current peach-pink gradient.
- Drop the extra course strip, its caption and the castle icon under the panel: the original has none.

**5. Level Complete card (board 12)**
- A big star row (`#fad928`, shade `#d48f23`) above a blue title banner (`#1578d0`, white text).
- Checklist card `#e5eff9` with green checks `#4ca439`.
- Rewards panel `#dbe8fa` in a `#148ff0` frame: coin, gem and sock icons with "+300", "+10" and "+5" in navy `#202e83`.
- Green "Next Level" button `#0eb31c` / `#74f029`.
- Card about 0.85 W wide, with her celebrating and socks behind it, over visible blue water.
- Avoid: the plain white card and the "not built yet" note.

Images I made (scratch only): `/tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/art_director/` (`new_0.jpg` to `new_3.jpg`, `full4.jpg`, `crops.jpg`, `refs.jpg`, `panels.jpg`).


_29 tool steps._

---

## Gameplay & Visual Testing specialist: Gameplay tester: baseline Level 1 (started 12:15 UTC)

**Lead → agent** (12:15 UTC):

You are the gameplay and visual testing specialist for Bubble Wash Kingdom (repo /home/user/bubblegame). Do NOT edit any source file. Test ONLY the frozen copy of the current verified build at /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/baseline_demo_5f57c76 (bundle md5 a62848a060079f447f2c86173aae2d97); the live WebDemo/ folder is being edited by the main session, so never test it. Run `source /home/user/bubblegame/Tools/bw_tools_env.sh` in each shell. Software rendering only (SwiftShader, 4 cores shared with others): keep viewports at 412 x 915 or smaller, no video recording, and finish within about 35 minutes.

Goal: a BASELINE of what the current Level 1 does, before new mechanics are added. Build switch: S3=intunnel,structmatch,level1 (the full app adds ,home; skip home for speed unless needed).
Tools that exist (read their headers before use): /home/user/bubblegame/WebDemo/tools/level1/l1_run.cjs (seeded frames with AUTO=1 autopilot; prints state JSON per frame), tools/level1/cost_probe.cjs (draw calls / triangles), tools/screen3/s3_func.cjs and tools/screen3/r2_func.cjs (functional checks), Previews/WebDemo/ccr_branch_verification_2026-11-08/scripts/abilities_probe.cjs (pause, Bubble Blast, Turbo Spin). The game exposes window.__bw (state(), swipe('left'|'right'|'up'), tap(), advance(s), step(s), info(), hazards(), blast(), turbo(), pause()) and window.__bwLevel1 / window.__bwLevel1Plan(). Run the tools with the snapshot dir as their demo-dir argument (cd into it first).

Deliver:
1. Seeded full-height frames (412 x 915) with AUTO=1 at game seconds after the tap 0, 3, 8, 15, 22, 28, 34, 40, 46 and at Level Complete if reached, saved into /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/baseline/frames/ (jpg quality 88 is fine), plus the printed state JSON as baseline/frames/states.json. Note each frame's u (z) and section name.
2. Functional results (pass/fail with numbers) of s3_func and the abilities probe on the snapshot for S3=intunnel,structmatch,level1, saved as text in baseline/.
3. Draw calls and triangles at 0, 3, 20, 38 s (cost_probe) saved in baseline/cost.txt.
4. A table of the user's 10 gameplay beats (01 washer entry, 02 sock goal 0/5 shown, 03 jump to raised side path, 04 drop to a lower path, 05 spinning brushes, 06 coins/gems/socks, 07 enemies that affect gameplay, 08 Bubble Kingdom inside a wet chamber, 09 rescue progress to 5/5, 10 Level Complete with rewards) marked WORKS / PARTLY / MISSING in the current build with the evidence (state numbers or frame file). Be strict: a jump over soap bars is not a side path, and a downhill slope on the same path is not a lower path.
Return your report as your final message (under 700 words), starting with one line listing the tools you actually used successfully and their exit codes.

- 12:15 `Bash`: List snapshot contents and verify bundle checksum
- 12:15 `Bash`: Read headers of l1_run and cost_probe tools
- 12:15 `Bash`: Read s3_func and abilities probe headers, check running browsers
- 12:15 `Bash`: Check viewport options and abilities probe header
- 12:15 `Bash`: Survey level1 source for course and completion logic
- 12:15 `Bash`: Read level1 header, course definition, HUD code
- 12:15 `Bash`: Run seeded autopilot frame capture in background
- 12:15 `Bash`: Check that the frame capture is running
- 12:15 `Bash`: Read course socks, gems, kingdom definitions
- 12:15 `Bash`: Find enemy, collision and sock logic in level1
- 12:15 `Bash`: Find sock goal HUD and finish logic
- 12:16 `Bash`: Check frame capture progress
- 12:16 `Bash`: Inspect browser processes and lock holders
- 12:16 `Bash`: Check children of the capture node process
- 12:16 `Bash`: Read the body of s3_func
- 12:16 `Bash`: Copy s3_func with 412x915 viewport into scratch
- 12:16 `Bash`: Queue s3_func, abilities probe, cost probe behind the browser lock
- 12:16 `Bash`: Read level1 per-frame obstacle and HUD update
- 12:16 `Bash`: Read bumpMascot and track drop handling
- 12:17 `Bash`: Write scratch hit probe for enemy/brush/bar effects
- 12:17 `Bash`: Queue hit probe behind the browser lock
- 12:17 `Bash`: Wait and check frame capture completion
- 12:17 `Bash`: Wait until the frame capture finishes
- 12:17 `Bash`: Summarize per-frame state JSON
- 12:17 `Bash`: Convert frames to JPEG and save state JSON
- 12:17 `Bash`: Build a contact sheet of the baseline frames
- 12:17 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/baseline/contact_sheet.jpg
- 12:17 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/baseline/frames/t46.0.jpg
- 12:17 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/baseline/frames/t22.0.jpg
- 12:17 `Bash`: Wait for checks and print their results
- 12:19 `Bash`: Find earlier s3_func results for comparison
- 12:19 `Bash`: Compare previous s3_func swipe results
- 12:20 `Bash`: Print hit probe log
- 12:20 `Bash`: Look for the user's gameplay beats mandate text
- 12:20 `Bash`: Read beat definitions in the user's mandate
- 12:20 `Bash`: Read the kingdom, sock progress, Level Complete and enemy beats
- 12:20 `Bash`: Read beats one to five of the mandate
- 12:20 `Bash`: Save functional, abilities, hit and cost results to baseline
- 12:20 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/baseline/frames/t28.0.jpg
**Agent** (12:21 UTC):

The baseline is done: the current Level 1 runs from Tap to Start to Level Complete without errors, but the side path and the lower path (beats 03 and 04) are missing.

**Tools used (all exit 0):** `tools/level1/l1_run.cjs`, a copy of `tools/screen3/s3_func.cjs` with the viewport set to 412 x 915 (its built-in size is 700 x 1076), `ccr_branch_verification_2026-11-08/scripts/abilities_probe.cjs`, `tools/level1/cost_probe.cjs`, and a new scratch probe of mine, `hit_probe.cjs`.

Everything ran on the frozen snapshot only (bundle md5 a62848a0…), with `S3=intunnel,structmatch,level1`, seed 7, all browsers under the shared lock. The `home` opening was not run.

## 1. Seeded frames (AUTO=1, 412 x 915)

| Frame (game s) | u (m) | Section | Socks | Coins | Hearts |
|---|---|---|---|---|---|
| Tap to Start | 1.59 | Washer drum | 0 | 1280 | 5 |
| 3 | 22.16 | Washer drum | 0 | 1290 | 5 |
| 8 | 58.05 | Spinning brushes | 1 | 1307 | 5 |
| 15 | 107.05 | Treasure run | 2 | 1321 | 5 |
| 22 (in the air) | 156.05 | Soap bars | 3 | 1336 | 5 |
| 28 | 202.73 | The drop | 4 | 1346 | 5 |
| 34 | 244.75 | Grime balls | 4 | 1355 | 5 |
| 40 | 287.08 | Bubble Kingdom | 5 | 1368 | 5 |
| 46 | 332.41 | Bubble Kingdom | 6 | 1371 | 5 |
| 52, Level Complete | 341.74 | Bubble Kingdom (complete) | 6 | 1371 | 5 |

- The finish (u 340) is reached at about 47 s. The frames at 58, 64 and 70 s showed the same state as 52 s, so I did not keep them.
- No console errors or warnings.
- One thing seen, not measured: in the 22 s jump frame a flat pale-lavender band crosses the lower screen under her (y about 765 to 830 of 915).

## 2. Functional checks

**`s3_func` (412 x 915): PASS except one swipe.**
- Tap starts the run (`running`); keyboard Enter starts it too; 0 console errors.
- Two right swipes put her in lane 2; the up swipe sets `air: true`.
- By z 40.96 she has collected 13 coins and 1 sock.
- **The left swipe did not show a lane change:** lane 1 before and after, at z 8.588. The earlier proof `70_level1_wet/proofs/s3_func_level1.txt` has the same numbers, so this is not new. Its cause is not established.
- Cost from this run: 222 draw calls / 2,815,453 triangles at Tap to Start; 116 / 2,506,144 in the tunnel.

**`abilities_probe`: PASS.** Pause opens its panel and freezes time, and the game runs again after Resume. Bubble Blast count 3 → 2; Turbo Spin 3 → 2 (speed 8.45); 0 errors.

**`hit_probe` (my addition), letting her hit things instead of avoiding them:**

| What she hit | Where | Hearts | Speed |
|---|---|---|---|
| Brush | u 63.46 | 5 → 4 | 7.00 → 4.30 |
| Brush | u 70.61 | 4 → 3 | 6.78 → 4.20 |
| Soap bar (no jump) | u 145.73 | 3 → 2 | 7.00 → 3.85 |
| Soap bar (no jump) | u 155.64 | 2 → 1 | 6.90 → 3.81 |
| Grime ball | u 209.21 | 1 → 0 | 7.01 → 4.30 |

With 0 hearts the run went back to Tap to Start (u 1.59, socks 0) about 1.4 s later.

## 3. Draw calls and triangles (`cost_probe`, 412 x 915)

| Moment | u (m) | Draw calls | Triangles |
|---|---|---|---|
| Tap to Start | 1.59 | 222 | 2,816,420 |
| 3 s | 22.16 | 167 | 2,711,064 |
| 20 s | 142.05 | 105 | 1,817,797 |
| 38 s | 272.75 | 154 | 2,340,692 |

## 4. The user's 10 beats

| Beat | Status | Evidence |
|---|---|---|
| 01 Washer entry | PARTLY | The run starts inside the tunnel with the mission shown (Tap to Start frame, u 1.59). The girl / porthole entry needs `,home` and was not tested. |
| 02 Sock goal 0/5 shown | WORKS | "Rescue 5 lost socks 0/5" on the HUD at Tap to Start and at 3 s. |
| 03 Jump to raised side path | MISSING | The level is one 3-lane path. The only jumps are over two soap bars (u 146, 156) in the same lanes (22 s frame: in the air at u 156.05). |
| 04 Drop to a lower path | MISSING | "The drop" (u 166–203) is a downhill slope on the same path (`COURSE.pitch`, about −0.42 rad over u 172–190). The banner says "Drop down to the lower path!" but there is no second path (28 s frame). |
| 05 Spinning brushes | WORKS | 11 brushes (u 52–132), and hitting one costs a heart and speed (table above); 8 s frame. |
| 06 Coins, gems, socks | WORKS | Coins +91 (1280 → 1371), 6 socks picked up, HUD gems 36 → 38. The level places 114 coins, 2 gems and 5 socks (plus the Screen 4 drum's own items). The Level Complete card shows gem 1/1. |
| 07 Enemies that affect gameplay | WORKS | 6 grime balls roll toward her (28 s frame). A hit takes a heart and speed (u 209.21); 0 hearts resets the run. |
| 08 Bubble Kingdom inside a wet chamber | PARTLY | The chamber widens over u 266–292 (40 s and 46 s frames). The castle is only seen through a portal in the end wall at u 360, past the finish (u 340), so she never enters the kingdom. |
| 09 Rescue progress to 5/5 | WORKS | 1/5 at 8 s, 2/5 at 15 s, 3/5 at 22 s, 4/5 at 28–34 s, 5/5 at 40 s (u 287). There are 6 sock pickups (the count reaches 6) and the HUD stops at 5/5; no resets along the way. |
| 10 Level Complete with rewards | PARTLY | The card appears after u 341.74 with 3 stars, socks 5/5, coins 91, gem 1/1. But it only has "Play again" and says "Level 2 (Soap Lagoon) is not built yet": no Next Level button and no reward beyond these counts. |

Everything is in `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/71_level1_flow/baseline/`:
- `frames/` (10 jpgs and `states.json`)
- `contact_sheet.jpg`
- `s3_func.txt`, `abilities_probe.txt`, `hit_probe.txt`, `cost.txt`
- `scripts/` (`s3_func_412.cjs`, `hit_probe.cjs`)


_39 tool steps._

---

## Tunnel & Lighting specialist: Lighting: tunnel artifacts and housing (started 12:15 UTC)

**Lead → agent** (12:15 UTC):

You are the lighting and visual-matching specialist for Bubble Wash Kingdom (repo /home/user/bubblegame). THIS ROUND IS READ-ONLY: do not edit or write any file in the repository (the main session owns WebDemo/src/level1.js, game.js and track.js and is editing them now). Do not render or launch browsers. Budget: about 20 minutes. Read CLAUDE.md briefly first.

Inputs: WebDemo/src/level1.js (the Level 1 course: the drum tunnel wall shader wallFrag ~lines 120-176, the water, hoops, the wet chamber K and its end wall/portal ~lines 540-585, the update loop ~670-770), and the latest real captures of that build: Previews/WebDemo/screen4_round9_match/70_level1_wet/sheets/*.jpg and frames/new_89e89f18/ (read images at reduced size). Visual authority: Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg. The user's rules: the silver / lavender / purple metal washer housing round the upper tunnel is wanted, but the upper half must not become a dominant dry purple ceiling; the interior must stay blue, watery, enclosed; no visible seams, clipping, opaque swirl cuts, messy white foam, or water shaders with horizontal dark streaks.

Deliver as your final message (under 900 words, start with one line listing the tools you actually used successfully):
1. Each visible artifact or deviation you can find in those captures (purple ceiling dominance, seams at the 15 m chunk joins or at the Screen-4-drum hand-off around u 35-50, horizontal dark streaks, the chamber end wall, corners), with the capture file, the screen region, the most likely root cause in code with line numbers, and an exact proposed change (a small diff snippet), ranked by visual impact. Mark each as CONFIRMED (you can see it and point to code) or SUSPECTED.
2. The main session is adding a section where the tunnel widens from radius 2.55 m to about 3.6 m (using the existing radiusAt(u) mechanism of the wet build) so raised side-water flumes with golden rims can run at x = +/-1.85 m, 1.1 m above the main water, and a later section where the middle lane drops 1.4 m to a lower channel between golden divider rails. Say concretely how the wall shader's metal band (the `edge` / `metal` terms, which use the angle a) should behave in the widened section so the upper wall stays mostly blue water with a narrower metal crown, and how to light the flumes' gold (which existing materials in level1.js to reuse: goldM, silverM, violM) so they read like the original's gold rims. Give code-level suggestions only; do not apply them.

- 12:15 `Bash`: List level1.js size and capture folders
- 12:15 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 12:15 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 12:15 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 12:15 `Bash`: Read README head and image sizes
- 12:15 `Bash`: Find README sections and time mapping
- 12:15 `Bash`: Read route mapping of frames to u
- 12:15 `Bash`: Build reduced contact sheets in scratchpad
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/sheet0.jpg
- 12:15 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/sheet1.jpg
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/sheet2.jpg
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/sheet3.jpg
- 12:16 `Bash`: Downscale comparison sheets to scratchpad
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/05_swim_handoff_OLD_NEW_s.jpg
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/07_castle_end_OLD_NEW_s.jpg
- 12:16 `Bash`: Read results section and git state
- 12:16 `Bash`: Crop upper regions of chamber and drum frames
- 12:16 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/drum_crops.jpg
- 12:16 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/chamber_crops.jpg
- 12:17 `Bash`: Measure colour classes in upper band and floor
- 12:18 `Bash`: Crop brush arms, drop and hand-off regions
- 12:18 `Read`: /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/l1/misc.jpg
- 12:18 `Grep`: DRUM_R|drumR|drum_r|R4\.radius|radius:\s*[0-9.]+
- 12:19 `Bash`: Sample gold rim colours: original vs game hoops
- 12:20 `Grep`: heroWalls.*(Cylinder|radius)|const heroWalls|tubeR\s*=|wallR\s*=
- 12:20 `Grep`: heroWalls
- 12:20 `Bash`: Check hero wall geometry radius
- 12:20 `Bash`: Find level1 hooks in game.js
**Agent** (12:21 UTC):

Tools I used: Read, Grep, and Bash with Python/PIL (contact sheets and crops in the scratchpad, plus colour-class measurements). Nothing in the repository was edited and no browser was launched.

**Measurements** (colour classes, in the band from 0.20 to 0.45 of the screen height):
- **Lavender/purple share:** original 26% (that counts its housing rim and the pink brush); captures t6, t14, t32, t40 and t44 give 59%, 58%, 75%, 61% and 69%.
- **Warm rim pixels:** the original's rim has median #e99d8b, highlights #fdd3a7 and shadows #b87168. The game's hoops (goldM) have median #f5966a and shadows #943f25 (more orange, with brown shadows).

## 1. Artifacts, ranked by visual impact

**A. Purple ceiling dominance — CONFIRMED** (t6–t44; worst at t32 and in the chamber at t40–t48, from the top of the frame down to the vanishing point).
- Cause, lines 151–152: the metal is a fixed angle, `|a| < 0.78` rad (±45°).
- On a portrait screen a ±45° wedge above the vanishing point covers the whole upper half (the screen's top corners are only about 26° off vertical).
- In the chamber it is 0.78 × 5.6 = 4.4 m of metal each side of the top.
- Fix: make the crown a fixed arc length, so the upper corners show water.
```glsl
float Rr = ${wet ? 'vR' : f4(R)};
float edge = 1.1 / Rr + 0.025 * sin(u * 0.45 + t * 0.8);   // 0.43 rad drum, 0.31 at 3.6 m, 0.20 chamber
float ra = abs(a) / edge;
float metal = 1.0 - smoothstep(0.82, 1.08, ra);
vec3 mc = mix(PURPLE, LAV, 1.0 - smoothstep(0.38, 1.0, ra));
mc = mix(mc, SILVER, (1.0 - smoothstep(0.0, 0.41, ra)) * 0.6);
```
The `ra`-relative ramps are required. Line 154's fixed 0.32 would turn a narrow crown entirely silver. Line 153's `smoothstep(edge, 0.3, …)` already has edge0 > edge1, which GLSL ES leaves undefined.

**B. Wavy "cut-out" metal edge with white and orange outlines — CONFIRMED** (crops of t6, t14, t32 and t40: lobed boundaries traced in white and orange).
- Line 151: a wobble of 0.07·sin(u·1.1 + t·1.6).
- Line 152: a hard ±0.05 edge.
- Line 164: a full-strength white line.
- Line 165: a gold line that follows the wobble.
- Fix: use the softer `metal` above, then
```glsl
float wl = abs(ra - 1.0) * edge;
col = mix(col, WHITE, (1.0 - smoothstep(0.0, 0.05, wl)) * 0.25 * (0.55 + 0.45 * l1n(vec2(u*3.0 - t*4.0, a*9.0))));
col = mix(col, GOLD, (1.0 - smoothstep(0.0, 0.02, abs(ra - 0.88) * edge)) * 0.35);
```

**C. Floating orange poles — CONFIRMED** (t7 left, t8 right, the sheet 05 frame NEW 6 s).
- Line 416: the brush's gold axle is 1.0 m long at y 0.95, so it stops about 2.2 m above the water. The wall top is at 4.05 m.
- Fix:
```js
const top = C.axisH + Math.sqrt(C.radius ** 2 - x * x) - 0.74, len = top - 0.45;
const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, len, 12), brushHub); arm.position.set(0, 0.45 + len / 2, -0.25);
```

**D. Fine stripes on the side walls toward the centre — CONFIRMED** visually (t14, t32: vertical hairline striping and dashed white streaks).
- Lines 139–145, 148 and 155 have no fwidth fade (the water got one, `aaW`, line 238).
- Fix, after line 140:
```glsl
float aaR = clamp(fwidth(u) * 1.4 - 0.1, 0.0, 1.0);
rib *= 1.0 - aaR; rib2 *= 1.0 - aaR;   // and multiply streak and ring by (1.0 - aaR); line 155: 0.05 * (1.0 - aaR)
```

**E. Hand-off at u 35–50 — CONFIRMED** (t5): the course tube's crown, its outlines and the hoop at 44 show as a nested tube inside the Screen 4 drum.
- Lines 167–170: the intro blend runs after the metal and keeps 30% of it.
- A step from the Screen 4 lining's radius (2.0, `tunnel_r7_hero.js:254`) to 2.55 is SUSPECTED.
- Fix, before line 161: `metal *= smoothstep(41.0, 52.0, u);`, and the same factor on both waterline lines.

**F. Pale far centre — SUSPECTED deviation** (t14, t44: white-lavender).
- Line 173 mixes 0.92 toward #e6f8ff × 1.3; the original keeps the middle depth azure.
- Fix: `col = mix(col, mix(AZURE, GLOW, 0.6) * 1.2, smoothstep(12.0, 60.0, d) * 0.7);`

**G. Chamber end wall.**
- Green island slabs seen edge-on through the portal — CONFIRMED (t44–t48). Line 93 puts the islands at h 0.4–1.0, at eye height. Move them to h −2.5 to −1.0 or +3 to +5.
- The violM band — SUSPECTED, from the geometry; I can't see it clearly at t48. Line 552 puts it at radius Rk − 0.6 around the portal centre (P.h 2.4, 0.9 m above the drum axis), so its top reaches 7.62 m against the 7.1 m ceiling and is cut by the wall. Fix: `band.position.y = C.axisH - P.h` for that band, at radius `Rk - 0.35`.

**H. Pink bar across the chamber** (t44, t46 in `frames/new_89e89f18`) — this is the finish ribbon, already hidden at line 536 in the final build. Recapture to confirm.

**I. Chunk joins.** No seam is visible at 50.6, 65.6 and so on, since joining rows use the same `TR.frame(u)`.
- SUSPECTED: at 260.6, line 282 switches from 64 to 112 columns. That leaves a T-junction crescent of up to 3 mm, which could show the sky as sparkle once it is visible (u > 220).
- Use one constant `nA` (112) for every chunk once any widening exists.

No horizontal dark streaks show in the water in these captures; the `aaW` fix holds.

## 2. The widened section (R 2.55 → 3.6) and the lower channel

**Metal crown.**
- Formula A gives `edge` = 1.1/3.6 = 0.31 rad there (18°, 1.1 m of arc each side), so the crown edge sits at h ≈ 4.9 m. The walls beside and behind the flumes are then water ribbons.
- If the drum must stay as it is for now (one correction at a time), use instead: `float edge = mix(0.78, 1.1 / vR, smoothstep(2.6, 3.4, vR)) + 0.025 * sin(u * 0.45 + t * 0.8);`
- The `ra` ramps and the softened outlines from B are needed in either case.
- `vR` already reaches the shader (`aR`); size every chunk's `nA` from its largest `radiusAt`.

**Hoops.** Uniform `hk` = 1.41 makes them 41% thicker. Their 170° arc ends at h ≈ 1.8 m, x ≈ ±3.5, just behind the flumes. Give the widened section its own InstancedMesh with a 110–120° arc.

**Flumes.**
- At h 1.1–1.4 the wall is at |x| ≈ 3.58, so flumes at x = ±1.85 float about 1.2 m off it. Give each a violM outer skirt down to the main water, or silverM brackets to the wall every 4 m.
- Flume water: `waterFragWet` with `aHalf` set to the flume's half-width, so its foam sits at its rims.

**Gold that reads like the original's rim.** goldM (line 364) gives the orange and brown above (emissive 0x6a3a00, metalness 1 against a blue env map). Don't change goldM itself (the gate, portal and finish share it); clone it:
```js
const rimGoldM = goldM.clone();
rimGoldM.color.set(0xffd9a6); rimGoldM.metalness = 0.8; rimGoldM.roughness = 0.3;
rimGoldM.emissive.set(0x8a4e5e); rimGoldM.emissiveIntensity = 0.5; rimGoldM.envMapIntensity = 1.1;
```
- The rim: a TubeGeometry (radius 0.08) along each flume edge, built with the rail pattern at lines 479–480 (`TR.map(s*x, h, u)` into a `CatmullRomCurve3`).
- Inside it, a silverM lip (radius 0.035, 0.06 m inward), with violM underneath as at line 482.
- Optional: bulbM lights every 2 m, matching the hoops.

**Lower channel (−1.4 m).**
- Don't let `W.baseHeight` step inside one wetChunk. With 96 columns the step becomes near-vertical faces that stretch the noise into streaks.
- Split the water into the side water and the channel's own ribbon.
- Line the channel's side walls with a metal-free variant of the wall shader (for example a `uCrown` uniform set to 0), so they show dark-blue water ribbons, not lavender.
- Divider rails: rimGoldM on top, violM base tubes (the pattern at lines 479–482), placed so they hide the step edges.


_29 tool steps._

---

## Water & VFX specialist: Water VFX: flume and chute water spec (started 12:15 UTC)

**Lead → agent** (12:15 UTC):

You are the water and VFX engineer for Bubble Wash Kingdom (repo /home/user/bubblegame). THIS ROUND IS READ-ONLY: do not edit or write any file in the repository (the main session owns WebDemo/src/level1.js, game.js and track.js and is editing them now). Do not launch browsers. Budget: about 20 minutes. Read CLAUDE.md briefly (the water rules: saturated cobalt / turquoise water, the pink mascot sits ON the water, white is only an accent, no foam blanket, no pale wash).

Read WebDemo/src/level1.js: WATER_VERT, waterFrag(), WATER_VERT_WET, waterFragWet() (lines ~178-245) and the wet water chunks (wetChunk, ~lines 327-352; the water's per-vertex height comes from W.baseHeight(L, x, u) in WebDemo/src/world.js and the path frame from TR.frame(u, F)); and game.js updateMascot (~lines 975-1060) for how her riding height, landing splash (fx.burstT / fx.emitT) and ripples work. Reference look: Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg and board panels Design/ApprovedScreens/05_Jump_To_Side_Paths.png and 06_Drop_Down_To_Lower_Paths.png.

The main session is building, inside the Level 1 course (track coordinates: x sideways, lanes at x = +0.7 / 0 / -0.7, u metres along the path):
(a) raised SIDE flumes: water strips about 1.0 m wide centred at x = +/-1.85, 1.1 m above the main water, from u = S0 to S1, sitting in golden-rimmed troughs, ending in a 4 m ramp that lowers them into the main water (she rides them after a jump);
(b) a LOWER path: in a drop section the middle lane's water (|x| < ~0.5) falls 1.4 m over about 3 m (a waterfall chute) into a lower channel, while the side lanes continue level on ledges and later ramp down to the same lower level; golden divider rails hide the vertical steps between them.
Deliver as your final message (under 900 words, starting with one line listing the tools you actually used successfully): a precise implementation spec with GLSL/JS snippets: how to build the flume strips reusing waterFragWet (which attributes/uniforms; how vHalf should be set so the wall-climb foam appears at the trough walls, not mid-strip); how to shape the chute in the main water heightfield (a height offset function of x and u added to W.baseHeight for the mesh vertices) without texture stretching or the dark-streak aliasing the wet build already guards against (fwidth term aaW); whitewater at the chute lip and the flume ramp merge (where, how much, kept as small accents); the splash when she lands on a flume (which fx calls with which parameters); and anything in the current water that risks horizontal dark streaks or seams when the mesh gets steep. Keep it implementable in about 120 lines.

- 12:15 `Bash`: Count lines and locate water shader pieces
- 12:15 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 12:15 `Read`: /home/user/bubblegame/WebDemo/src/world.js
- 12:15 `Read`: /home/user/bubblegame/WebDemo/src/game.js
- 12:15 `Bash`: Read level1.js header, course and noise
- 12:15 `Bash`: Find L tunnel bounds, rider uniform, ripple and fx functions
- 12:15 `Read`: /home/user/bubblegame/WebDemo/src/game.js
- 12:15 `Bash`: Read rider uniform update and swim function
- 12:15 `Bash`: Locate layout JSON with tunnel bounds
- 12:16 `Bash`: Read layout tunnel values and track frame API
- 12:16 `Bash`: Find height function call sites
- 12:19 `Bash`: Check rider uniform components and camera height use
**Agent** (12:24 UTC):

Tools used successfully: Read, Bash (grep, sed, wc). Nothing was edited and no browser was launched.

# Spec: side flumes and lower-path chute for the Level 1 water

**Where the water sits now:** past u 37.2, `W.baseHeight` is 0, because its `inside` and `before` terms are both zero. So everything below can be added to it as an offset.

## 1. Chute heightfield (`wetChunk`)
```js
const D = { u0: 168, len: 3, depth: 1.4, inner: 0.5, step: 0.16, ledge: [172, 175], rec: [176, 186] };
const keepD = (u) => 1 - smooth(D.rec[0], D.rec[1], u);   // back to 0 during the track's own downhill (pitch bump 176-186): reads as downhill, not a climb
const dropOff = (x, u) => -D.depth * keepD(u) * Math.max(smooth(D.u0, D.u0 + D.len, u) * (1 - smooth(D.inner, D.inner + D.step, Math.abs(x))), smooth(D.ledge[0], D.ledge[1], u));
const fine = (u) => (u > D.u0 - 0.8 && u < D.u0 + D.len + 0.8) || (u > D.ledge[0] - 0.5 && u < D.ledge[1] + 0.5);
const us = [u0]; while (us.at(-1) < u1 - 1e-6) us.push(Math.min(u1, us.at(-1) + (fine(us.at(-1)) ? 0.15 : 0.4)));
// rows = us.length; u = us[i]; h = W.baseHeight(L, x, u) + dropOff(x, u). Keep nx = 96: the step is 3.5 columns wide, and chunk edges still meet exactly
```
- **Texture:** keep `aXU = (x, u)`. Do not re-map u by arc length. The steepest slope is 0.7, so the pattern stretches by at most 1.22 on the chute face, which reads as water speeding up. Re-mapping u would shift her wake and rings against `uRider.y`.
- **Drum floor (this one matters):** the wall's bottom is at h = 1.5 - 2.55 = -1.05. A channel at -1.4 is outside the drum, so the wall's opaque bottom arc would cover it. In `tubeChunk`, after computing `h`:
```js
const uni = -D.depth * keepD(u) * smooth(D.ledge[0], D.ledge[1], u), deep = Math.min(0, dropOff(x * 0.6, u) - uni);
h += uni + (h < 0 ? deep * smooth(0, -0.6, h) : 0);   // the waterline on the walls is unchanged; the ledge water hides the lowered arc
```
- The hoop at u 180 and the coins at 176-187 need `uni` too.

## 2. Main-water whitewater and level gate
Build it at the material with `waterFragWet().replace('uniform vec4 uRider;', 'uniform vec4 uRider; uniform vec4 uLand;').replace(WHITE, CHUTE + NEW_WHITE)`. `WHITE` is the unchanged line `float white = clamp(fl * 0.75 + glint + wake * uRider.z * 0.9 + rings * 0.55, 0.0, 1.0);`.
```glsl
float mid = 1.0 - smoothstep(DI, DI + DS, abs(x)), kC = clamp((u - D0) / DL, 0.0, 1.0);
float off = -DD * (1.0 - smoothstep(R0, R1, u)) * max(smoothstep(0.0, 1.0, kC) * mid, smoothstep(G0, G1, u));
float steep = 4.0 * kC * (1.0 - kC) * mid;
float lip = exp(-pow((u - D0 - 0.3) / 0.3, 2.0)) * mid;
float pool = smoothstep(D0 + DL - 0.3, D0 + DL + 0.3, u) * (1.0 - smoothstep(D0 + DL + 0.3, D0 + DL + 2.2, u)) * mid;
float fast = l1n(vec2(x * 9.0, (u - t * 6.5) * 0.7));        // its own CONSTANT speed
float aaX = clamp(fwidth(x) * 9.0 - 0.6, 0.0, 1.0);
float ww = lip * smoothstep(0.38, 0.62, fast) * 0.7 + steep * smoothstep(0.66, 0.82, fast) * 0.3
         + pool * smoothstep(0.58, 0.76, l1n(vec2(x * 7.0, uf * 3.0))) * 0.55;
col = mix(col, vec3(0.03, 0.5, 1.0), steep * 0.35);         // face: lighter turquoise, not white
float lvl = 1.0 - smoothstep(0.3, 0.7, abs(off - uRider.w));
float age = t - uLand.z, lr = length(vec2(x - uLand.x, (u - uLand.y) * 1.2));
float pulse = (1.0 - smoothstep(0.0, 0.05 + age * 0.06, abs(lr - 0.3 - age * 1.8))) * exp(-age * 3.0) * step(0.0, age) * uLand.w;
float white = clamp(fl * 0.75 + glint + (wake * uRider.z * 0.9 + rings * 0.55 + pulse) * lvl + ww * (1.0 - max(aaW, aaX)), 0.0, 1.0);
```
- **How much white:** a broken crest about 0.3 m deep at the lip, about 15% streak coverage on the face, and broken flecks in a 2 m plunge band that fade out downstream.
- **`riderU.w` becomes her level:** set it to `hAt(m.x, m.z) - W.baseHeight(...)`. It currently carries `m.xv`, which no water shader reads. Her rings and wake then stop showing on the ledges while she is in the channel, and on the main water while she is up on a flume.

## 3. Flume strips (built inside `privately(0x7e72, …)`)
Every new geometry, material and mesh takes a UUID from `Math.random`, so building them outside `privately` would shift the game's seeded sequence.
```js
const FL = { u0: S0, u1: S1, ramp: 4, h: 1.1, half: 0.5, c: 1.85, cEnd: 1.45 }, fk = (u) => smooth(FL.u1 - FL.ramp, FL.u1, u);
const flumeH = (u) => (FL.h + 0.12) * (1 - fk(u)) - 0.12;   // ends 0.12 m under the main water: crosses it at ~16°, no flat coplanar z-fight
const flumeC = (u) => FL.c + (FL.cEnd - FL.c) * fk(u);      // the drum wall is at x 2.06 at h 0: a fixed 1.85 centre pokes the ramp's end through it
// per vertex (nx 20, rows every 0.25 m, TR.frame(u, F)): xl in [-0.5, 0.5]; x = sg*flumeC(u) + xl  (GLOBAL x: same waves and colour as the main water at the merge)
// h = W.baseHeight(L, x, u) + flumeH(u) + 0.05 * smooth(0.3, 0.5, |xl|) ** 2;  aXU = (x, u); aUp = F.U; aHalf = 0.5; aFl = (sg*flumeC(u), flumeH(u))
const FV = WATER_VERT_WET.replace('attribute float aHalf;', 'attribute float aHalf; attribute vec2 aFl; varying vec2 vFl;').replace('vHalf = aHalf;', 'vHalf = aHalf; vFl = aFl;');
const FF = waterFragWet().replace('varying float vHalf;', 'varying float vHalf; varying vec2 vFl;').replace('uniform vec4 uRider;', 'uniform vec4 uRider; uniform vec4 uLand;')
  .replace('smoothstep(vHalf - 0.75, vHalf - 0.05, abs(x))', 'smoothstep(vHalf - 0.24, vHalf - 0.03, abs(x - vFl.x))')
  .replace('(vHalf > 2.0 ? 0.7 : 0.25)', '0.7')
  .replace(WHITE, PULSE_AND_LVL_WITH('abs(vFl.y - uRider.w)') + 'float merge = (1.0 - smoothstep(0.03, 0.3, vFl.y)) * smoothstep(0.42, 0.68, l1n(vec2(x * 8.0, uf * 2.5))) * 0.6;\n' + NEW_WHITE_WITH('merge'));
```
- **Why `vHalf` = 0.5 alone is wrong:** with the stock width, `smoothstep(-0.25, 0.45, |x|)` already gives 0.29 of the wall foam at the middle of the strip.
- **With the replace:** the foam climbs only the outer 0.21 m on each side (|xl| from 0.26 to 0.47).
- **Far sheen:** the `0.7` replace matters. Without it, the strip would look darker than the water beside it in the distance.
- **Material:** build it with an explicit uniforms object (`uTime: timeU, uCam: camU, uRider: riderU, uLand: landU`), not `.clone()`, which deep-copies the uniforms and stops them updating.
- **Trough:** put the trough's inner walls at |xl| = 0.47 so the water's edge tucks under them.

## 4. Splashes (in `update`, private `lprnd = mulberry(0x1a4d)`; use `emitT`, never `burstT`, which draws from `Math.random`)
```js
if (wasAir && !m.air && running) { const lv = riderLevel; landU.value.set(m.x, m.z, t, lv > 0.5 ? 1 : 0.5);
  if (lv > 0.5) { const c = Math.sign(m.x) * flumeC(m.z), s0 = W.baseHeight(L, m.x, m.z) + lv;   // water slapping up both trough walls
    for (const s of [-1, 1]) for (let i = 0; i < 5; i++) ctx.fx.emitT(c + s * (0.42 + lprnd() * 0.05), s0 + 0.04, m.z + lprnd() * 0.5,
      -s * (0.2 + lprnd() * 0.4), 2.0 + lprnd() * 1.2, m.speed * (0.6 + lprnd() * 0.25), 0.04 + lprnd() * 0.035, 0.4 + lprnd() * 0.25, 0); } }
wasAir = m.air;
```
- `game.js` 1010 already throws its landing burst, and the 12 px droplet cap still applies.
- On a flume, 20 droplets at power 1.0 (`up` 0.85) instead of 34 at power 1.4 keeps most of them inside the 1 m trough.
- **Lip spray:** when she crosses `D.u0 + 0.2`, emit about 8 droplets through `fx.emit(..., null)` with no floor. `emitT`'s floor plane is at the lip's level, so its droplets would vanish right at the edge.
- **Plunge splash:** it comes for free from `game.js` 1019-1026, as long as `slopeAt` includes the chute.

## 5. Risks of dark streaks and seams
- **Dark line at the lip:** where the surface is seen nearly edge-on (the lip crest, the chute while she descends), `aaW` switches to its average blue (about #1d59da). That is darker than the lightened water ahead of her (about #3fadff), so a dark line forms exactly at the lip. The turquoise lift and the lip white are applied after `aaW`, and the lift is not scaled by `(1 - aaW)`.
- **Flow speed:** never write `uf = u - t*speed(x,u)` with a speed that varies in space. Its gradient grows with time, so `fwidth(uf)` keeps rising and within about a minute `aaW` darkens the chute area in bands. Use the separate constant-speed layer (`fast`) instead.
- **`fwidth` in a branch:** if you gate the chute block with an `if`, compute `aaX` (and anything else using `fwidth`) before it. `fwidth` inside a branch that varies per pixel is undefined.
- **The 1.4 m step between channel and ledge:** it spans only 0.16 m of x, so the pattern smears about 9 times into vertical stripes, and `aaW` cannot catch it because u is constant down the face. The golden divider has to cover the full height (h -1.45 to +0.1), not a 0.2 m rail.
- **Height routing in `game.js`:** these all use `W.baseHeight` and need one shared `hAt` (base + chute + flume): 825 (the `emitT` floor), 989 (`slopeAt`, which drives her pitch, speed and the plunge splash), 1002 (`surf`), 1218 and 1222 (the camera's height and tilt), plus `level1.js` 590-592 (coins and gems).
- **Her ride height on the slope:** use `W.FLOAT_H * Math.hypot(1, slope)`. With the plain value, her back sinks into the chute face, which breaks the rule that she sits on top of the water.


_12 tool steps._

---

## screen4-water-motion-engineer: Water-motion engineer: live three.js inspection (started 12:15 UTC)

**Lead → agent** (12:15 UTC):

You are the Screen 4 water-motion engineer for Bubble Wash Kingdom (repo /home/user/bubblegame). THIS ROUND IS READ-ONLY: do not edit or write any file in the repository (the main session is editing WebDemo/src/level1.js, game.js and track.js). Your job is LIVE runtime inspection with the parallax-threejs MCP tools, and to prove those tools work for you in this session. Budget: about 25 minutes; the browser uses software rendering, so keep the page at 412 x 915 and avoid repeated full-page screenshots.

Setup already done by the main session: a static server on http://localhost:3000 serves /home/user/bubblegame/WebDemo, the threejs-devtools proxy is http://localhost:9222 -> 3000, and the chrome-devtools MCP has one page open at http://localhost:9222/index.html?s3=intunnel,structmatch (bridge_status reported "connected"). NOTE: the main session will rebuild WebDemo/game.bundle.js during your work; if a reload shows a different build, say so; the bundle you start from has md5 a62848a060079f447f2c86173aae2d97 (check with: fetch('/game.bundle.js') size or ask the main session's evidence).

Steps:
1. Call bridge_status and renderer_info. Then navigate (chrome-devtools navigate_page) to http://localhost:9222/index.html?s3=intunnel,structmatch,level1 and wait until document.body has class 'ready' (evaluate_script). The threejs-devtools automatic scene pick lands on the final post pass: with evaluate_script set window.__THREE_SCENE__, window.__THREE_CAMERA__, window.__THREE_RENDERER__ from window.__bw.debug() (scene, camera, renderer) so scene_tree etc. inspect the main scene.
2. Start the run with window.__bw.tap(), then advance with window.__bw.advance(seconds) (this steps the game deterministically and renders). Visit roughly u = 10 (Screen 4 drum), u = 60 (brushes), u = 175 (the drop), u = 300 (wet chamber); read window.__bwLevel1 for u and section.
3. At each: renderer info via window.__bw.info() (draw calls / triangles of the main pass), the visible children of the 'level1' group (scene_tree / find_objects), the materials of l1Water and l1Wall (material_details: transparent, depthWrite, side, renderOrder), and whether the Screen 4 drum's heroSwell / surf layers that sit under the mascot still follow her in the course and how they overlap the course water (object_details on the objects near her; renderOrder; transparency).
4. One take_screenshot (chrome-devtools) at u = 175 is enough for visual evidence; save it with filePath under /tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/wme/.
Deliver as your final message (under 800 words): first a table of every MCP tool you called with OK / FAILED; then the measurements (draw calls, triangles, programs per checkpoint); then findings about the water touching her in the course (heroSwell continuity, render order, any z-fighting or see-through lines), and a frame-cost budget recommendation for adding two flume meshes, divider rails and a jump pad (how many extra draw calls are reasonable, and which existing meshes could be merged or instanced).

- 12:15 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__bridge_status`
- 12:15 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__renderer_info`
- 12:15 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`
- 12:16 `Grep`: Math.random|__BW_TEST__|__BW_OPENING_OFF__
- 12:16 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:16 `Bash`: Check bundle checksum and size on disk
- 12:16 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:16 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__scene_tree`
- 12:16 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:16 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:17 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:17 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:17 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`
- 12:17 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:17 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:17 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`
- 12:17 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:18 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:19 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:19 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:19 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:19 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__material_details`
- 12:19 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__material_details`
- 12:19 `mcp__plugin_parallax-threejs_threejs-devtools-mcp__object_details`
- 12:21 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:22 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:23 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:23 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:23 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:24 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:25 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:26 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:27 `Bash`: Check browser CPU load
- 12:27 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:28 `Grep`: l1Water|l1Wall|l1Hoops|l1Bubbles|fluffyShells|renderOrder|frustumCulled
- 12:28 `Grep`: fluffyShells|fluffyFringe
- 12:28 `Read`: /home/user/bubblegame/WebDemo/src/level1.js
- 12:28 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:29 `Bash`: Recheck browser CPU load
- 12:29 `Grep`: advance\s*[:(=]
- 12:29 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__evaluate_script`
- 12:30 `mcp__plugin_parallax-threejs_chrome-devtools-mcp__navigate_page`

_42 tool steps._

---

## parallax-threejs:visual-debugger: Probe plugin visual-debugger tools (started 12:15 UTC)

**Lead → agent** (12:15 UTC):

Tool availability probe only (do not inspect or change anything else; finish in under 2 minutes). 1) List the exact names of the tools you have available in this session. 2) Try to call the threejs-devtools bridge status tool, the chrome-devtools list-pages tool, and the playwright tabs-list tool, whatever their names are in your tool list. 3) Report, as a short table, each tool name you attempted and OK or FAILED with the error text. Do not run Bash commands other than `echo probe`.

- 12:15 `Bash`: Confirm the Bash tool works
**Agent** (12:15 UTC):

The three tools you asked me to probe aren't available in this session, so I couldn't call any of them. The only tool I can call is `Bash`. No MCP tools have been loaded for me.

**1) Tools available:**
- `Bash` is the only callable tool.
- Instructions arrived from two MCP servers, `Claude_Docs` and `github`, but none of their tools are in my tool list.
- No deferred tools were loaded during the session.

**2–3) Results:**

| Tool attempted | Result | Detail |
|---|---|---|
| `Bash` (`echo probe`) | OK | Printed `probe` |
| threejs-devtools bridge status tool | FAILED (not called) | No tool by this name or anything like it is in my list. The system did report that the MCP server `plugin:parallax-threejs:spector` failed to connect: `CONNECTION_CLOSED: "Connection closed"`. That is the same plugin family, so the threejs-devtools bridge probably comes from it too. |
| chrome-devtools list-pages tool | FAILED (not called) | Not in my list, and no error was reported for it. Either the server isn't set up for this agent or its tools weren't loaded. |
| playwright tabs-list tool | FAILED (not called) | Not in my list, and no error was reported for it. Same two possibilities as chrome-devtools. |

**What this means:** `plugin:parallax-threejs:spector` is set up but is failing to connect, which is a connection fault rather than a missing setup. Reconnecting or restarting that plugin, then probing again, should show whether the threejs-devtools and Spector tools come back. Until chrome-devtools and playwright appear in my list, I can't do any live-browser diagnosis. `deno task checkpoint` might still work through Bash, but you limited me to `echo probe`, so I didn't try it.


_1 tool steps._
