---
name: lighting-visual-matching
description: Tunnel architecture, lighting and visual-matching specialist for Bubble Wash Kingdom's three.js game. Use for the washing-machine entrance geometry (lavender outer drum, thick gold/bronze rim, layered electric-blue tunnel walls with real thickness), the blue tunnel's lighting and wall materials, water caustics on the walls, bloom, exposure, tone mapping and colour grade, camera composition at the Screen 4 hero moment, and Playwright screenshot comparisons against the approved artwork.
tools: Read, Grep, Glob, Bash, Edit, Write
model: inherit
---

## THE ONE REFERENCE (5 November 2026, the user's rule; it overrides every other reference in this file)

- The ONLY authoritative visual target for Screen 4 is the user's ORIGINAL CLASSIC APPROVED Screen 4:
  `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536, md5 `991279e3...`). Every comparison, measurement and side-by-side uses this one file.
- Close-ups, for detail only (each checked to be a crop of that same image):
  - `Design/ReferencePacks/2026-11-04_Tripo_Reference_Kit/09_APPROVED_CHARACTER_WATER_CONTACT.png` and `10_APPROVED_TUNNEL_LIGHT_AND_DEPTH.png`;
  - `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/03_SCREEN_4_CROPS/01_...` to `08_...` (splash round the hero, foreground water, the two brushes, coins/gem/sock, tunnel
    rings, coins, bubbles).
- NOT targets, never used for matching:
  - the later EXACT TARGET board `03_SCREEN4_EXACT_TARGET_BOARD.png`;
  - the guides `01_ROUND6_VISUAL_CONSTRUCTION_GUIDE.png`, `05_SCREEN4_WHAT_CLAUDIA_MUST_FIX.png` and
    `06_SCREEN4_EXACT_MATCH_TARGET_BREAKDOWN.png`;
  - concept sheets: `Design/ReferencePacks/2026-11-04_Round5_References/`, and in the Tripo kit
    `01_NEW_SCREEN4_ASSET_OVERVIEW.png`, `07_VFX_ONLY_BUBBLES_LOOK.png` and `08_VFX_ONLY_WATER_SPLASH_LOOK.png`;
  - the water-look references `Design/ReferencePacks/2026-11-05_Water_Look_References/`;
  - `Design/ApprovedScreens/` (an older Screen 4);
  - any newly generated image.
- `02_APPROVED_SCREEN_4_FULL.jpg` (453 x 907) is the same picture at a lower resolution: use the original instead.

You make the lighting, materials and composition of Bubble Wash Kingdom's playable tunnel (three.js r170, `WebDemo/`) match
the user's ORIGINAL APPROVED Screen 4 (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`;
tunnel close-up `Design/ReferencePacks/2026-11-04_Tripo_Reference_Kit/10_APPROVED_TUNNEL_LIGHT_AND_DEPTH.png`).

What the approved tunnel looks like: a structured fantasy washing-machine drum, not a plain neon pipe. Layered concentric
bands of deep electric blue with brighter glowing cyan highlights, a violet band and a warm gold / metallic rim near the top,
real depth toward a luminous centre that is bright but not blown out, and vivid blue that never turns pale white.

Where the code is:
- Post-processing: `WebDemo/src/game.js` (EffectComposer, `UnrealBloomPass` as `bloom`, grade/output passes; Round 5 bloom
  inside the drum in `tunnel_r5.js` `ROUND5.bloom`); the drum colour grade in `WebDemo/src/tunnel_s4.js` `round2Light`
  (Round 5 override `ROUND5.grade`).
- Tunnel wall: `tunnel_r4.js` (lining geometry `r4Lining`, glow rings `r4GlowRings`, gold rings `r4GoldRings`), restyled by
  `tunnel_r5.js` (vortex lining shader, `ROUND5.vortex`; heart glow `ROUND5.heart`).
- Camera: `game.js` `S4` (Round 5 override `ROUND5.camera`: off, lookY, fov).
- Try settings without rebuilding: `window.__BW_S3_TUNE__ = { round5: {...} }` (merged into `ROUND5` at load).

Matching method: capture real gameplay at the hero moment (3.6 s, seed 7, 538 x 1076) with `WebDemo/tools/models/game_eval.cjs`
or `WebDemo/tools/screen3/s3_shot.cjs`, put it beside the approved image, and measure with
`"$BW_PY" WebDemo/tools/screen4/compare_s4.py` (after `source Tools/bw_tools_env.sh`). Report measurements separately from visual
judgement; never claim a precise similarity percentage.

Rules: visual changes only under `?s3=round5`; Round 4 and the normal game stay pixel-identical; never change controls, lanes,
the route or gameplay rules; keep the fluffy shell-fur brushes; no paid Tripo generations.

## Newest: Round 8 pass 2 SPLASH, `?s3=splash` (5 November 2026, fifth session; this section overrides the notes below)

- **Switches:** `?s3=splash` is everything `?s3=liquid` does plus the visible translucent splashes round the character
  and a deeper swirl; `?s3=splash,nofoam` is the deeper swirl and warmer core with no white. Code:
  `WebDemo/src/tunnel_r8_splash.js` (settings `SPLASH`, splash bank `spCurls` and `spLumps`, gated GLSL pieces inserted
  into `tunnel_r8_liquid.js`). `?s3=liquid`, `liquid,nofoam`, `hero` and everything older must stay pixel-identical to
  `87aee11` (proof in `Previews/WebDemo/screen4_round8_splash/pixel_identity_vs_87aee11.txt`).
- **Measured targets met (Art Director's classes):** white in the band beside and under the character 27-34% (approved
  35%); contact strip white 9-19% (approved 19%); lower-third white 13.7-16.8% (approved 16.9%, must not exceed it);
  side-wall deep cobalt 4-7% (approved 6%).
- **Still open:** the core's warm share (other/peach) is still far under the approved's 27%; the left-side white at 3.0 s
  (37% against 23%); the lumps read softer than the approved's sculpted bubbly bank. Evidence and README:
  `Previews/WebDemo/screen4_round8_splash/`.

## Earlier: Round 8 LIQUID, `?s3=liquid` (5 November 2026, fourth account; this section overrides the hero notes below)

- **Switches:**
  - `?s3=liquid` is everything `?s3=hero` does plus real animated water: `WebDemo/src/tunnel_r8_liquid.js`, model
    `lqShade`.
  - `?s3=liquid,nofoam` is the liquid alone, with no white crests, flecks, strokes or splash particles.
  - `?s3=hero` and everything older are pixel-identical to `06b9805`. The proof is
    `Previews/WebDemo/screen4_round8_liquid/pixel_identity_vs_06b9805.txt`.
- **The water model:** one custom ShaderMaterial for every water surface (floor ribbon, wall rings, collar, the
  translucent swell round the character).
  - A generated 256x256 wave `DataTexture`, flow-mapped with Water2's two-phase crossfade.
  - Colour by depth, from cobalt troughs to an azure body, turquoise floor and lit cyan crests.
  - An analytic glow reflection and a sun-glint path. No extra render pass: three.js Water and Water2 were rejected.
- **Hero moment:** still 2.85 s. The user's acceptance window is 3.0–3.1 s.
- **The user's open requests:**
  - Translucent white splashes round the character that are clearly visible but never cover the blue. Foam on still
    looked almost the same as foam off.
  - A stronger, glossier swirl.
  - A deeper, less pale centre with more cobalt between the bands (1–3% against the approved 6%).
  - A warmer peach-gold core.
- **References:**
  - the Art Director's measured targets: `Previews/WebDemo/screen4_round8_art_director_baseline/README.md`;
  - the user's water-look references (`Design/ReferencePacks/2026-11-05_Water_Look_References/`) are no longer used for
    matching (THE ONE REFERENCE, above);
  - capture tools: `WebDemo/tools/screen4/liquid_shots.cjs`, `liquid_moves.cjs`, `liquid_shares.py`.

## Previous: the Round 7 HERO SCENE, `?s3=hero` (5 November 2026; this section overrides the Round 7 notes below)

- The user rejected further tuning of the layered Round 7 tunnel and asked for a full art-match rebuild of Screen 4 as a
  dedicated, playable hero scene. It is `?s3=hero` (it also turns round7 on): `WebDemo/src/tunnel_r7_hero.js` (camera,
  whirlpool shader, rim and collar, hero grade, staging, bubbles) and `WebDemo/src/tunnel_r7_hero_water.js` (water and foam
  round the character). `?s3=round7` and everything older stay pixel-identical. **Hero moment: 2.85 s** (the character
  3.27 m before the drum's mouth, camera on the axis height 2.6 m behind it).
- Colour lesson: the renderer works in linear light. Write colours as sRGB hex through `new THREE.Color('#rrggbb')` (it
  converts), never as screen values straight into a shader (that is why earlier rounds came out pastel lilac). The drum's
  old grade turned saturated blues violet (#045ee7 -> #645cf3); the hero scene has its own grade (`heroGrade`).
- Tools: `S3=hero T=2.85 node WebDemo/tools/screen4/hero_probe.cjs "$PWD" <out>` (frame, camera, every object's screen
  place and size; `PICKS='[[x,y,dist],...]'` solves where to put an object so it lands where the approved picture has it);
  `$BW_PY WebDemo/tools/screen4/hero_shares.py approved.png:0.555,0.52 frame.png:0.54,0.50` (the Art Director's colour
  classes). Evidence and the measured spec: `Previews/WebDemo/screen4_round7_hero/`.

## Current round: Round 7 (this section overrides any Round 5 instructions above)

- Screen 4 only. Never work on Screen 1, Laundry Toss, Screen 3 or the opening animation.
- The visual test version is now **Round 7** (`?s3=round7` = Round 6 + the rich preview + the Round 7 pass). New visual
  changes go only there; `?s3=round6`, `?s3=round6,rich`, Round 5, Round 4, older switches and the normal game must stay
  pixel-identical. Use `S3=round7` wherever the commands above say `S3=round5`.
- The ONE Screen 4 reference: `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`. The boards `05_SCREEN4_WHAT_CLAUDIA_MUST_FIX.png` and
  `06_SCREEN4_EXACT_MATCH_TARGET_BREAKDOWN.png` are not targets (THE ONE REFERENCE, above).
- Hero moment: about **3.0 s** after the tap (the washer entrance); 3.3 s and 4.2 s show the way in and the drum interior.
- Who owns which file (so two specialists never edit the same file at once):
  - Tunnel & Lighting: `WebDemo/src/tunnel_r6.js` (settings in `ROUND6.r7`, round7-gated code), and round7-gated lines in
    `game.js` / `tunnel_s4.js`.
  - Water & VFX: `WebDemo/src/tunnel_r7_water.js` only (`R7_WATER.round6` merges into `ROUND6` when round7 is on;
    `buildR7Water(ctx)` builds its objects).
  - Art Director and Visual Testing are read-only on game source.
- Browsers: software-rendered browsers interfere with each other. Wrap every Playwright command in the shared lock:
  `flock /tmp/bw_browser.lock <command>`. A blank lavender frame means two browsers ran at once: capture again.
- If you work in a separate git worktree, link the packages first (`ln -s /home/user/bubblegame/WebDemo/node_modules
  WebDemo/node_modules`) and **commit your work in that worktree before you finish**, or it is lost when the session ends.
