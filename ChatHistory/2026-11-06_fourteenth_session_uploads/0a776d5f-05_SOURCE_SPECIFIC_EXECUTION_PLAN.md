# BUBBLE WASH KINGDOM — SCREEN 4 VISIBLE BREAKTHROUGH SPRINT
## SOURCE TRUTH & BASELINE
- `01_ACTUAL_APPROVED_CLASSIC_SCREEN4.png` is the user's AUTHENTIC ORIGINAL, cropped from the user upload `11849.png`. This is the sole exact visual target.
- `02_ACTUAL_PLAYABLE_STEP7_VIDEO_FRAME.png` is a real game frame extracted from the user's previously supplied comparison video (`11853.mp4`) at about 3.1 seconds after the tap. It shows **STEP 7, not Step 8**. It is diagnostic baseline evidence only, **NOT** the current live build.
- `03_REAL_SIDE_BY_SIDE_VISUAL_GAPS.png` marks four big differences. The actual images without boxes are separately included.
- GitHub commit `2a5cda2` ("Screen 4 step 8") has been independently checked: it restored authentic wall splashes with the fill map and removed duplicate procedural whites. The commit message reports white 5.3%→8.8% (approved 8.2%), white-piece average 75→182px (approved 237), periwinkle 14.2%→6.8% (approved 6.7), far-center white 7.7%→22.5% (approved 21.7). **DO NOT rerun or overwrite that completed fix**. Verify newest branch/HEAD before any changes.
- Any other later unreported fixes MUST be read from latest Git history / HANDOFF.md before work.

## THE DEVELOPMENT PROBLEM
The past approach succeeded at local technical metrics and regressions, but no team-wide visual quality gate proved a conspicuous improvement to the player. We must stop optimizing individual numbers in isolation.

## NEXT HIGH-IMPACT WORK — DO THESE IN ORDER
### 1. Capture the CURRENT Step 8-or-later hero moment first
Actual `?s3=focus` from HEAD. Same camera/pose/seed: seed 7, 3.0 seconds **after** the tap, no steer, render 767×1536 and Pixel 7 412×839. Also record moments inside the tunnel with motion / brush approach. Do not capture only a staged startup art frame. Compare target, Step 7 (historical only), and CURRENT build. Art director MUST describe the top 3 remaining *large* perceptual mismatches and point to the actual Three.js geometry/material/layer owner, not say "make it prettier."

### 2. ONE WHOLE-SCENE HERO COMPOSITION PASS (bigger than a tiny shader tweak)
Build a *reversible, controlled* visual test switch based on latest focus; do not change match/older/normal. Stage camera / viewpoint and ALL scene elements to recreate the approved composition in the live, moving tube:
- A clearly legible deep cobalt/turquoise concentric vortex in the middle; visibly bright white-aqua curls and varied glints; the small distant warm core remains bright but **not a giant white disc**.
- The character sits ON TOP of shiny blue water (not buried behind it), its rear silhouette central and unobstructed. Keep mascot mesh intact during this pass.
- Framing brushes: the near-camera actual **moving hazard brushes** must not swallow the frame, while two decorative edge brushes can stay at the approved left and right positions. Preserve collision footprints and interactive behavior.
- Paw coins / purple gem / smiling sock: original-sized, original-depth silhouettes, positioned in a playable path; no giant coins or sock; don't simplify the coin path into irrelevant clutter.
- Keep the reference HUD/framing and portrait viewport.
- Do not remove water motion, depth, controls, collisions, pickups, jump, power-ups.

### 3. THE FOREGROUND WATER MUST BE A DISTINCT 3D MATERIAL/SPLASH PASS
Do not recycle the Step 8 WALL texture as if it also solves the foreground. Original has a highly visible cobalt-blue water body with organic cyan + white crests and clear dome bubbles around the pink mascot. The recorded game shows flatter pastel water, shard-like white streaks and a lower/flattened-looking pink silhouette. Inspect `tunnel_r9_match_water.js`, the existing floor shader and the water-surface / particle layers. Use correct shader color space, tone mapping, flow UV and dynamic geometry, not screen-space static image overlays. If the model itself is the limiting difference, document it for a separate approved character phase (don't secretly remodel it).

### 4. ROOT-CAUSE DEBUG ONLY WHEN NEEDED
Existing `layer_diag.cjs`, `layer_metrics.py`, Playwright, Chromium and Three.js runtime scene census can isolate the draw layer. If the remaining cobalt loss or blur cannot be attributed to a particular layer/material, use **Spector.js**. It is a free WebGL inspection tool with an MCP server; it can inspect real draw calls, fragment shaders, blend modes and textures. Official source and setup: https://github.com/BabylonJS/Spector.js/ (MCP instructions in the readme). It diagnoses rendering. It does **NOT** automatically create exact game artwork. Do NOT use paid model generation for shader/UV problems.

### 5. VERIFICATION: THE USER MUST SEE A BIG IMPROVEMENT
Deliver TWO runs, straight and steering, from the existing playable game, including a 3.0s-after-tap matching frame and brush pass. The exact render must be compared against the original at the same framing. Deliver a three-panel full-res board: APPROVED | CURRENT BEFORE | NEW BUILD, plus crops of wall rings, far core, water around the hero, and moving brush approach. Also show small looping video or MP4 if possible.

In addition to color metrics, check:
- overall tunnel legibility and blue-white contrast;
- character/water silhouette and whether water is foreground or an opaque mask;
- prop center / size / overlap with vortex;
- whether white shapes resemble *the original*, rather than uniform spray dashes;
- whether tunnel and foreground remain consistent across actual motion.

### A GATE TO PREVENT ANOTHER FOUR-DAY LOOP
Work one focused **visual** pass. Make no more than two controlled candidates per major issue before presenting evidence. If no obvious improvement is visible by eye after those attempts, stop. Report exact responsible shader/material/mesh, show the failed variants, keep the previous working build, and propose a genuinely different technique rather than another micro-tune. No false statements such as "8.5/10 achieved" without direct side-by-side justification. No new pay-per-use assets, no feature scope creep, no Laundry Toss or exterior.

## SPECIFIC SOURCE TARGETS
- `WebDemo/src/tunnel_r9_focus.js` — focus settings and scene staging.
- `WebDemo/src/tunnel_r9_match.js` — 3D ring placement, camera, framing.
- `WebDemo/src/tunnel_r9_match_water.js` — floor and hero water/material/splashes.
- `WebDemo/src/tunnel_s4.js` — hazard / decorative brush geometry.
- `WebDemo/tools/screen4/derive_ring_map.py` — already-used approved-original water derivation; **Step 8 already used it**.
- `WebDemo/tools/screen4/layer_diag.cjs`, `layer_metrics.py` — existing actual draw-layer diagnostics.
- `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` — original approved authority in Git.
- `HANDOFF.md`, `CLAUDE.md` — project state and constraints.

## SUCCESS / STOP
Success is a **visibly** closer moving playable 3D scene, not just matching a single color statistic or a frame that is identical to yesterday's build. Show actual evidence and saved commit or revert. If source material cannot ever match the 2D painterly target pixel-perfectly in motion, say exactly which geometry/material behavior is preventing it and how close we reasonably can get.
