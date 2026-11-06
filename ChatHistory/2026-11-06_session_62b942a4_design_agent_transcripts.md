# Session 62b942a4, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Art director verdict on swim (started 22:05 UTC)

**Lead → agent** (22:05 UTC):

You are reviewing ONE candidate for Bubble Wash Kingdom Screen 4. Be candid; the user is tired of four days of passes that were declared "closer" and were not. Do NOT run any renders, browsers, Playwright or node (the machine's 4 cores are busy recording); only look at the existing images with Read and, if useful, crop/measure with python (PIL/numpy are available via ~/.bubblewash-tools/visual/bin/python).

The ONLY authority: the ORIGINAL approved Screen 4, /workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg (767 x 1536).

What changed and why (read /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md for the evidence): the diagnosis found the pale water that travels with the pink character is one object, heroSwell, a 1.9 m pad locked to her (covering the bottom fifth of the screen) whose face, since water2, was a still picture of the original's foam pinned to her. The candidate `?s3=intunnel,swim` replaces it with a tight contact collar on her waterline (crest solved through the start camera onto the original's own outline of her), shaded as clear flowing water (cobalt / azure / turquoise, rounded water shapes, bubbles, a sparkling broken waterline), her lower body showing faintly violet through it; the floor's wake coloured; a calmer 1.2 Hz swim rhythm drawn on her model. Tunnel, collectibles, HUD and gameplay are unchanged by rule.

The user's two goals, equally important: (1) VISUAL MATCHING to the original: deeper cobalt-blue water, strong turquoise highlights, large irregular rounded water shapes, the pink silhouette and placement, natural water contact; "the current pale, cloudy foreground is not acceptable"; match overall composition and colour balance, not shader statistics. (2) NATURAL SWIMMING (you judge the stills now; the motion clip will follow in a message).
The user's standing correction: the character sits ON TOP of the water and splash, supported by it, surrounded by splash and foam at its base and sides; never sunk, buried, hidden by a water wall or floating inside it. Round her: sparkling BLUE water with small bubbles, small splashes, blue-white highlights; no thick white or lavender foam cushion.

Images (full resolution, side by side ORIGINAL | R9 (the current candidate the user rejected) | NEW swim, with HUD):
- /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/sheets/ORIGINAL_R9_SWIM_start.jpg
- /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/sheets/ORIGINAL_R9_SWIM_T1.0.jpg
Raw canvases if you want to crop: R9 /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/ablation/R9_start/base_canvas.png and R9_T1.0/base_canvas.png; NEW /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/frames/swim_start/base_canvas.png and swim_T1.0/base_canvas.png (768 x 1536; resize to 767 x 1536 to compare with the original). The internal looks rejected while building (c1 ribbed blue bucket, c2 quilted basket, c3 glass jar, c4 violet blob) are in 53_swim/frames/c1_* .. c4_* if you want context.

Answer, in under 400 words:
1. At the start and at +1 s: is NEW closer to the ORIGINAL than R9 overall? Say "clearly closer", "slightly closer", "about the same" or "further", for (a) the whole frame and (b) the zone round her base (y about 1150-1450).
2. Does the water round her read as water she is in / on, or as an object (pad, wall, jar, basket)? Is the pale cloudy carpet gone?
3. The three most important things still wrong at her base versus the original, concretely (where, what colour/shape), ranked.
4. Anything in NEW that is worse than R9.
Do not soften the verdict.

- 22:05 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/sheets/ORIGINAL_R9_SWIM_start.jpg
**Lead → agent** (22:05 UTC):

[Image: original 2317x1582, displayed at 2000x1366. Multiply coordinates by 1.16 to map to original image.]

- 22:05 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/sheets/ORIGINAL_R9_SWIM_T1.0.jpg
**Lead → agent** (22:05 UTC):

[Image: original 2317x1582, displayed at 2000x1366. Multiply coordinates by 1.16 to map to original image.]

- 22:05 `Bash`: Crop base zone of original, R9, NEW side by side
- 22:05 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/base_start.png
**Lead → agent** (22:05 UTC):

[Image: original 2321x536, displayed at 2000x462. Multiply coordinates by 1.16 to map to original image.]

- 22:05 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/base_T1.0.png
**Lead → agent** (22:05 UTC):

[Image: original 2321x536, displayed at 2000x462. Multiply coordinates by 1.16 to map to original image.]

- 22:05 `Bash`: Zoom crops and colour stats in base zone
- 22:05 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/zoom.png
- 22:06 `Bash`: Luminance percentiles and local detail at base
- 22:06 `Bash`: List swim evidence folders
- 22:06 `Bash`: Compare rejected c2/c3 looks with swim at base
- 22:06 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ctx.png
**Agent** (22:07 UTC):

**Verdict: NEW is not closer.** It replaces the pale cloud with a blue object that reads as a container. The tunnel is unchanged, so only the bottom fifth of the frame differs.

**1. Closer or not**
- **Start:** (a) whole frame **about the same**; (b) her base **about the same**. The colour moves the right way and the form moves the wrong way.
- **+1 s:** (a) whole frame **about the same**; (b) her base **further**. R9's spray at least spread across the full width with a broken crest, like the original. NEW turns into a bounded block under her.

**2. Water or object?**
It reads as an **object**: a frilled glass bowl on a pile of blue pillows, close to the rejected c3 jar with the colour toned down. I put c2, c3 and NEW side by side at her base, and all three have the same build. The pale, cloudy lavender carpet is gone, yes. The blue that replaced it is mid azure, not cobalt.

**3. Three things still wrong at her base, ranked**
1. **Shape.** NEW has a column with near-vertical sides at about x 170 and x 560, running from her waterline (about y 1230) down to about y 1420, topped by an even scalloped rim like a pie crust. The original has uneven heaps in front of her: the tallest is left of centre (x 180-330, top about y 1225), a lower one sits to the right (x 330-470, about y 1250). These spread sideways into froth across the whole width (y 1230-1450). Nothing in the original has edges.
2. **Light and contrast.** NEW's lumps are flat mid azure with brushed, ribbed lines. Measured, not judged by eye (my own luminance and near-white counts in that zone):
   - middle half of brightness: NEW 166-199, original 158-224;
   - darkest 5 %: NEW 132, original 112;
   - near-white: NEW about 9.5 %, original 16 %.

   The original's heaps are glassy: periwinkle-lavender bodies, crisp white rims and highlights on top of each heap, darker blue-violet cores, and white droplets between them. None of that is in NEW. Her lower body barely shows violet through the water at the start (the zone's median colour is #87aff2).
3. **Contact with her.** A continuous pale glass ribbon cuts her fur cleanly at one height, so she sits in a cup. In the original, splash overlaps her lower fur irregularly, with violet-tinted bubbles on her body at about x 380-420, y 1260, and the heaps pick up a pink-violet tint from her.

**4. Worse than R9**
- It reads as an object; R9 read as splash, even though it was pale and pinned to her.
- It lost the full-width spread. The water now narrows to her width, and the rest of the screen's width shows plain floor.
- Taking the pad away uncovered more of the floor's white diagonal dashes (lower left at the start, right at +1 s). They look like paper scraps and are not in the original.
- The striped texture on the lumps looks like ribbed plastic.
- The row of half-dome bubbles at about y 1400 is unchanged from R9 and is not in the original either.

**Swimming, from stills only:** a swimmer needs a broken wake trailing out to her sides. A bowl round her reads as seated, whatever the 1.2 Hz motion does. The clip will tell.

The crops are in `/tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/`: `base_start.png` and `base_T1.0.png` (original | R9 | NEW), `zoom.png` and `ctx.png` (c2 | c3 | NEW).


_11 tool steps._

---

## Water & VFX specialist: Water VFX: foreground water design (started 22:30 UTC)

**Lead → agent** (22:30 UTC):

Read /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/BRIEF.md first. This is an INSPECTION AND DESIGN task: do NOT edit any game file and do NOT launch browsers or renders. Your subject: the water round and in front of the pink character (heroSwell and the layers that follow its crest: spLumps, spCurls, lqWaterlineBubbles, heroSplash; the floor's wake lqWake in tunnel_r8_liquid.js), and the water-to-fur contact edge.

Inspect independently: the geometry (tunnel_r7_hero_water.js swellGeometry / swellVertex, its per-frame updater), the shading chain (tunnel_r8_liquid.js liquidSwell -> tunnel_r9_match_water.js matchSwellGLSL / focusSwellGLSL -> tunnel_s4_water2.js), the compiled GLSL in 52_diagnosis/cdp/R9_T1.0_water_shaders.json, and the ORIGINAL's foreground (crop it yourself: y 1150-1536).

Design the single strongest technically justified correction for this zone that gives: the original's full-width foreground of uneven rounded water heaps in deep cobalt / turquoise / periwinkle with crisp white rims and darker cores; a clean water-to-fur contact edge; and water that visibly MOVES relative to her (the heaps form and stream outward and toward the camera as she swims; on a swerve the water piles on the side she moves to and she leaves open water behind; in a jump the water closes under her; on landing a splash ring), WITHOUT a stationary pedestal, a glass wall, a white cloud or a pinned picture. Be concrete: which existing mesh to reuse and how to reshape it (numbers), what the vertex shader must do (e.g. heap heights that travel along the crest driven by her travel distance, not time alone), what the fragment shader must compute (colours as sRGB hex through mtUndisplay, rim/core logic, world- or travel-anchored pattern coordinates), what to do with the pinned picture (water2..9) and the crest-following layers, and how to keep the start frame's composition close to the original. Give file:line insertion points and code (GLSL / JS) ready to paste behind a new flag SWIM2_ON (exported from tunnel_s4_bt.js; settings in a new file tunnel_s4_swim2.js). Name the main risk of your design and how to check it on a frame.

Write the report to /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/water_vfx_engineer.md (under 1200 words plus code) and reply with a 10-line summary.

- 22:30 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/BRIEF.md
- 22:30 `Bash`: List specialist and diagnosis folders and git state
- 22:30 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md
- 22:30 `Bash`: Count lines of relevant source files
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r7_hero_water.js
- 22:30 `Grep`: liquidSwell|heroSwell|lqWake|uRipples|function |MATCH_ON|SPLASH_ON|export
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_liquid.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_liquid.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_liquid.js
**Agent** (22:30 UTC):

Now the match water and water2, and the swim file.

- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_s4_water2.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_s4_swim.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_s4_bt.js
- 22:30 `Grep`: export function|^function|^const|^export const|swellFront|focusSwell|matchSwellGLSL|mwFloor|mwCol|mwA|mwKey|mwSpec|mtUndisplay
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match_water.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match_water.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_focus.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_splash.js
- 22:30 `Bash`: Inspect structure of compiled shader dump and scene JSON
- 22:30 `Bash`: Show rest of scene JSON
- 22:30 `Bash`: Crop the original's foreground region
- 22:31 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/wv/orig_lower.png
- 22:31 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/wv/orig_fg_x2.png
- 22:31 `Bash`: K-means palette of the original's foreground zones
- 22:31 `Bash`: Project her water frame through the captured start camera
- 22:34 `Grep`: SWIM_ON|swimPose|WATER7_ON|maxPx|addRipple|visSpeed|FLOAT_H|BODY_R
- 22:34 `Read`: /workspace/bubblegame/WebDemo/src/game.js
- 22:34 `Bash`: Print compiled heroSwell vertex shader main
- 22:34 `Bash`: List uniforms and functions in compiled heroSwell fragment shader
- 22:34 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_liquid.js
- 22:34 `Grep`: vec3 mtUndisplay|void mtPlace|export const MT_BEND|uHeroTravel|travel:
- 22:34 `Grep`: surface\(|baseHeight\(|FLOAT_H|BODY_R|CRUISE|bwWaves|HEIGHT_GLSL
- 22:34 `Read`: /workspace/bubblegame/WebDemo/src/world.js
- 22:34 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match.js
- 22:34 `Bash`: List swim evidence and diagnosis report files
- 22:34 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/report/T1.0_lower_original_R9_noswell_nodressing.jpg
**Lead → agent** (22:34 UTC):

[Image: original 3086x696, displayed at 2000x451. Multiply coordinates by 1.54 to map to original image.]

- 22:34 `Bash`: List swim sheets and read swim README head
- 22:34 `Bash`: Build a lower-frame comparison sheet of original, R9 and swim
- 22:34 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/wv/cmp_lower.png
- 22:35 `Bash`: Measure the lowest visible pink row per column (contact edge)
- 22:36 `Bash`: Inspect swim solve inputs
- 22:36 `Bash`: Project her frame through the real start camera and solve heap heights
- 22:37 `Grep`: samples|antialias|EffectComposer\(|WebGLRenderTarget\(
- 22:38 `Grep`: INTUNNEL\.(speed|u|clock)
- 22:39 `Bash`: Check WATER constant, TR.map and uHeroTravel source

_44 tool steps._

---

## Tunnel & Lighting specialist: Lighting: tunnel water colour fix (started 22:30 UTC)

**Lead → agent** (22:30 UTC):

Read /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/BRIEF.md first. This is an INSPECTION AND DESIGN task: do NOT edit any game file and do NOT launch browsers or renders. Your subject: the tunnel's water (walls and the floor ahead of and beside her) while she is MOVING, plus bloom / tone mapping / grade as they affect it.

Inspect independently: r3Swirl (tunnel_r3.js:24, 263-310, and the round4 hide at tunnel_r4.js:65 overridden by tunnel_r3.js:286), the walls' material (tunnel_r9_match.js matchWallGLSL and its flow: why the moving tunnel keeps only 5-7 % lavender against the original's 28.5 % while the start frame matches), the floor's focusFloorGLSL streaks and delilac (tunnel_r9_match_water.js:264-355, tunnel_r9_focus.js:270-290), matchFloor, the bubble layers' whites, and the post chain. Use the existing frames and the zone table (52_diagnosis/report/zone_water_T1.0.md; frames in 52_diagnosis/ablation/R9w_T1.0/ and R9_T1.0/), and crop the ORIGINAL's tunnel (x 0.32-0.68, y 0.22-0.52 and the floor ahead) yourself.

Design the single strongest technically justified correction that makes the moving tunnel water deep cobalt and turquoise with the original's rounded wave bands and lavender rings, with NO paper-like white streaks and no white haze, without changing the tunnel's layout, the camera or the start frame's match. Be concrete: the exact code change for r3Swirl (one gated line?), what replaces the floor's white dashes (e.g. rounded crest bands lit from the water's own normals, with numbers), how to keep the lavender while moving (find the actual cause in the flow / travel mapping or delilac, quote the lines), and whether bloom / grade need any change (with the numbers from the ablations). Give file:line insertion points and code ready to paste behind a new flag SWIM2_ON (exported from tunnel_s4_bt.js; settings in a new file tunnel_s4_swim2.js). Predict each change's effect on the tunnel-zone table and name how to check it.

Write the report to /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/lighting_visual_matching.md (under 1000 words plus code) and reply with a 10-line summary.

- 22:30 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/BRIEF.md
- 22:30 `Bash`
- 22:30 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md
- 22:30 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/report/zone_water_T1.0.md
- 22:30 `Bash`
- 22:30 `Bash`
- 22:30 `Bash`
- 22:30 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/tunnel.png
- 22:30 `Bash`
- 22:30 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/lavmap.png
- 22:31 `Bash`
- 22:31 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/full_s.png
**Lead → agent** (22:31 UTC):

[Image: original 2256x900, displayed at 2000x798. Multiply coordinates by 1.13 to map to original image.]

- 22:31 `Bash`
- 22:31 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/t1_four.png
- 22:31 `Bash`
- 22:31 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r3.js
- 22:31 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r4.js
- 22:31 `Grep`: r3Swirl|swirl\b|buildRound4\(|buildRound3\(
- 22:31 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match.js
- 22:31 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match.js
- 22:32 `Grep`: uHeroCam|uHeroTravel|uHeroTanW
- 22:32 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r7_hero.js
- 22:32 `Bash`
- 22:32 `Bash`
- 22:32 `Bash`
- 22:32 `Bash`
- 22:32 `Grep`: r3Whirlpool|r3Bubbles|'s4Bubbles'|heroBubbles'|hide:
- 22:33 `Bash`
- 22:33 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/centre.png
- 22:33 `Bash`
- 22:33 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match.js
- 22:33 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_focus.js
- 22:34 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match_water.js
- 22:34 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match_water.js
- 22:34 `Bash`
- 22:34 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/floor.png
**Lead → agent** (22:34 UTC):

[Image: original 2310x442, displayed at 2000x383. Multiply coordinates by 1.16 to map to original image.]

- 22:35 `Bash`
- 22:35 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/floorahead.png
- 22:35 `Bash`
- 22:36 `Bash`
- 22:36 `Bash`
- 22:36 `Bash`
- 22:36 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/tex.png
- 22:38 `Bash`
- 22:38 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_s4_bt.js
- 22:38 `Bash`
- 22:38 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r9_match.js
- 22:38 `Grep`: buildHero\(|buildMatch\(|buildRound3\(|buildRound4\(|buildR7Water|buildHeroWater\(|buildSwim|SWIM_ON
- 22:38 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_s4.js
- 22:38 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r7_hero.js
- 22:39 `Grep`: hDet|float caus|vec3 Nw|lqWaves|lqWake\(|uLqTex
- 22:39 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_liquid.js
- 22:39 `Bash`
- 22:39 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/ins/floor2.png

_54 tool steps._

---

## general-purpose: Animation: swimming motion review (started 22:30 UTC)

**Lead → agent** (22:30 UTC):

You are acting as a 3D gameplay-animation reviewer (character locomotion in water, game feel). Read /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/BRIEF.md first. This is an INSPECTION AND DESIGN task: do NOT edit any game file and do NOT launch browsers or renders (the 4-core machine is busy). Your subject: making the pink character visibly SWIM through the water during forward travel, left/right swipes, jumps and landings, synchronised with the water, as a purely visual layer (her gameplay state x, yAbs, air, lane, speed, collisions must stay identical frame by frame; no Math.random).

Inspect independently: WebDemo/src/game.js updateMascot (about lines 970-1080: bob, lean, yaw, flip, squash, spray, ripples), changeLane / jump / landing, updateCamera (the camera follows 35 % of bob and jumps), the swell's updater in tunnel_r7_hero_water.js (how the water round her follows her: lag, base, uLat / uAir / uLand), the rejected candidate's swimPose in tunnel_s4_swim.js and its motion data (53_swim/motion/trace_swim_swipejump.json and trace_accepted_swipejump.json; 52_diagnosis/motion/trace_R9_swipejump.json; per frame t, x, xv, yAbs, surf, rollDeg, pitchDeg, flipDeg, squashY, her screen position, the swell's frame and uLat / uAir / uLand), and the clips 51_swim/videos/clip_R9.mp4 and 53_swim/videos/clip_swim.mp4 (extract frames with ffmpeg if useful: the run taps at 2.0 s, swipes left at 3.0 s, right at 3.9 s, jumps at 4.8 s, lands about 5.5 s).

Decide, with reasons a game animator would accept: (1) the forward swim cycle (rate, bob, pitch, roll, squash; e.g. is a full forward somersault on every jump right for a swimmer, or should the drawn rotation be a dive-and-surface arc while the gameplay flip state stays as it is?); (2) the swerve (lean, a body offset that leads or lags, how the water should respond: pile on the leading side, open water left behind, timing in frames); (3) the jump (take-off splash, the water closing under her) and (4) the landing (dip under the surface and rebound, splash ring, how long). Specify exact formulas and constants, where each goes (file:line), what the water layers must receive each frame (uniform names / values) to stay in sync, and how to verify each with the existing motion_trace.cjs fields. Code ready to paste behind a new flag SWIM2_ON (exported from tunnel_s4_bt.js; settings in a new file tunnel_s4_swim2.js).

Write the report to /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/animation_review.md (under 1000 words plus code) and reply with a 10-line summary.

- 22:30 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/54_specialists/BRIEF.md
- 22:30 `Bash`: Check repo state and list evidence folders
- 22:30 `Grep`: function (updateMascot|updateCamera|changeLane|jump|land|startJump|doJump)\b
- 22:30 `Bash`: Count lines of key source files
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/game.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_s4_swim.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_s4_bt.js
- 22:30 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r7_hero_water.js
- 22:30 `Bash`: Inspect motion trace file structure
- 22:30 `Bash`: Summarise trace events and sampling
- 22:30 `Bash`: Locate motion_trace.cjs
- 22:30 `Read`: /workspace/bubblegame/WebDemo/tools/screen4/motion_trace.cjs
- 22:31 `Bash`: Print accepted vs swim trace tables
- 22:31 `Bash`: Find world constants and surface functions
- 22:31 `Read`: /workspace/bubblegame/WebDemo/src/world.js
- 22:31 `Bash`: Search swim README for motion findings
- 22:31 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/53_swim/README.md
- 22:31 `Bash`: Search diagnosis README for motion findings
- 22:31 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/README.md
- 22:32 `Bash`: Probe clip properties and log
- 22:32 `Bash`: Extract contact sheets of swerve and jump moments
- 22:32 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/frames/swim_jump.png
- 22:32 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/frames/swim_swR.png
- 22:32 `Bash`: Extract larger swerve and landing frames
- 22:32 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/frames/R9_swerve4.jpg
- 22:32 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/frames/R9_land4.jpg
- 22:32 `Read`: /tmp/claude-0/-workspace-bubblegame/62b942a4-aa69-5385-baf7-492a86a446ba/scratchpad/frames/swim_land4.jpg
- 22:33 `Bash`: Find player-driven water uniforms
- 22:33 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_liquid.js
- 22:33 `Bash`: Check ribbon resolution, ripple count and flip readers
- 22:35 `Bash`: Find users of mascot transforms and swim imports
- 22:36 `Bash`: Find game loop ordering
- 22:36 `Read`: /workspace/bubblegame/WebDemo/src/game.js
- 22:36 `Bash`: Find where updaters run
- 22:36 `Bash`: Find updater runner and swell state readers
- 22:36 `Bash`: Locate updater loop and splash/match uniform use
- 22:36 `Bash`: Find all updaters writing swell uniforms
- 22:36 `Bash`: See how splash bank gets swell uniforms
- 22:36 `Read`: /workspace/bubblegame/WebDemo/src/tunnel_r8_splash.js
- 22:40 `Bash`: Check whether later modules replace swell shaders
- 22:40 `Bash`: Trace which updaters array the tunnel uses
- 22:40 `Bash`: Confirm updaters come from opening

_42 tool steps._
