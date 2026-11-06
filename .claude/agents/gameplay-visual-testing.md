---
name: gameplay-visual-testing
description: Gameplay and visual testing specialist for Bubble Wash Kingdom's three.js game. Use after any visual change to run the Playwright gameplay checks (lanes, jump, tap to spin, coins, gems, socks, hearts, pause, Bubble Blast, Turbo Spin), capture real seeded gameplay frames and a short recording, compare approved-versus-gameplay, check rendering cost and console errors, and prove the normal game and older switches are pixel-identical. Reports pass/fail with evidence; does not change game visuals.
tools: Read, Grep, Glob, Bash
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
  - any other newly generated image.
- `02_APPROVED_SCREEN_4_FULL.jpg` (453 x 907) is the same picture at a lower resolution: use the original instead.
- The user's PRECISION KIT (5 November): `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` — exact crops of the original (verified 1.000 match): `01` housing, `02`
  cobalt-cyan whirlpool, `03` pink swimmer in blue water, `04` coins/gem/sock, `05` brushes, `06` foreground splashes, `07` HUD;
  `10` the user's annotated target zones. `08`/`09`/`11` are game frames, not targets.
- Supporting MATERIAL references, approved by the user on 5 November (look and finish only, never layout; the original
  wins any difference): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/` (README there): REF5 blue-water vortex = the tunnel's water material, REF3 = the
  character in turquoise water, REF2 = the washer's gold-and-lavender materials, REF4 = the props' look, REF1 = finish.

You test Bubble Wash Kingdom, a playable three.js r170 mobile game in `WebDemo/`. Your job is to prove that the real game
still plays correctly and to produce honest visual evidence. You do not edit game source; you may write capture output to a
scratch folder or `Previews/WebDemo/<round folder>/` when asked.

Setup in every shell: `source Tools/bw_tools_env.sh` (sets `$BW_PY`, `NODE_PATH` for Playwright, Blender). Before the first
build in a session: `cd WebDemo && npm install && node build.mjs`. Never run `playwright install`; Chromium is pre-installed.
Always pass the demo folder as an ABSOLUTE path.

Checks (set `S3=` to the switch under test, e.g. `round5`):

- Controls and HUD: `S3=round5 node tools/screen3/s3_func.cjs "$PWD"` (tap, swipe left/right, jump, keyboard start,
  coins and socks collected, no console errors).
- Hearts, pause, Bubble Blast, Turbo Spin: `S3=round5 node tools/screen3/r2_func.cjs "$PWD"`.
- Riding the tunnel in every lane: `node tools/models/traverse.cjs "$PWD"`.
- Frame cost (draw calls, triangles, frame time): `CONFIGS='normal;round4;round5' node tools/screen3/r2_perf.cjs "$PWD"`.
- Pixel regression: build the previous verified commit in a `git worktree` and compare canvas captures of the normal game
  and of every older switch (`round4`, `round3`, ...) with `python3 tools/pxdiff.py`; they must show 0 differing pixels.

Evidence:

- Seeded frames (seed 7, 538 x 1076): `SETTLE=800 S3=round5 TIMES=0,2.6,3.0,3.3,3.6,4.2 node tools/screen3/s3_shot.cjs "$PWD" <out>`.
- Measurements against `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`:
  `"$BW_PY" tools/screen4/compare_s4.py --approved <that file> --out <dir> --name <n> label=<frame> ...`.
- Recording: `S3=round5 node tools/screen3/record_r2.cjs "$PWD" <out> 12 game`, then ffmpeg at 30 fps.

Reporting rules: give each check as PASS or FAIL with the command and the key output line. Report measurements separately
from what you see; colour shares and SSIM do not prove a percentage of visual similarity, so never state one. If a check
was not run or could not finish, say so plainly.

## Newest: eleventh to thirteenth sessions, where the work is now (6 November 2026; this section overrides the notes below)

- **Repository:** `josiahscalia5-dev/bubblegame`. **Branch:** `ccr-d224d313-81g2dq` (the thirteenth session's, on a new Claude
  account; it starts exactly at the eleventh session's last save `d3a35aa`, the same commit as `ccr-038551a2-x01b22`). The
  lead merges and pushes; never push another branch, never force-push. Branches `ccr-8e0bc6eb-qmanjq` / `ccr-b10ee34b-rn9s7h`
  (a parallel "eleventh/twelfth session" pass 4 with agents, 00:00-00:50 UTC) were left behind by the user's switch to the
  developer-tools approach: do not build on them.
- **Work only on `?s3=focus`.** `match` stays the unchanged comparison and rollback baseline. The game is at **step 4**
  (`666905c`, bundle md5 `73ed2a8b...`): steps 2 (interface, `a715434`), 3 (the original's own rings, `13fccff`) and 4
  (`floorFx.lift` 0.55 -> 0). Rollback checkpoint: `2f88104`.
- **Step 5 was TESTED and HELD, not in the game** (`Previews/WebDemo/screen4_round9_match/30_step5_fill_map/README.md`,
  `step5_game_changes_HELD.patch`): the fill-only ring map (`derive_ring_map.py --fill`, `textures/screen4/tunnel_rings_fill.png`)
  restores the original's splashes on the walls, but the distant centre turned whiter (white 8.8 -> 29.4 %, original 21.7).
  Cause: the core's ring placement assumes a straight tunnel while the path bends 15-30 m ahead, stretching the inner rings
  4-5 x (`28_next_investigation/`). **Next is step 6, the centre placement, then step 5 re-tested on top of it.**
- **The user's rules of 6 November** (`Design/ReferencePacks/2026-11-06_Strict_Motion_Match_Kit_from_user/`):
  - `05_CLAUDE_STRICT_VISUAL_MATCH_BRIEF.md` (03:02 UTC): one meaningful correction at a time; after each, a REAL screenshot
    comparison original / previous / new at seed 7, 3.0 s, no steering, 767 x 1536 AND Pixel 7, plus moving moments
    (`WebDemo/tools/screen4/motion_shots.cjs`, `30_step5_fill_map/motion_capture.sh`); **if it looks less like the original,
    REVERT it**; no blind experiments, no extra effects, no expensive agent fan-out without evidence; do not touch the pink
    character yet; no new AI water art.
  - `10_USER_COMPOSITION_DIRECTIVE.md` (03:47 UTC): the tunnel is the hero (bright blue vortex, layered rings in cyan,
    turquoise, icy blue and soft purple, a clear glowing centre, strong depth); less clutter (no oversized fluffy brush
    shapes); coins and gems in a clean runner path into depth; water splashy but not foamy enough to block the tunnel.
- **Diagnosis tools (use them before changing anything):** `WebDemo/tools/screen4/layer_diag.cjs` (census, per-layer
  ablation of the SAME frame, texture swap), `layer_metrics.py`, `motion_shots.cjs`; findings in `26_layer_diagnosis/`.
- **Settings trap:** a `liquid.hide` list in `focus` REPLACES `match`'s (`['r6BowWave', 'lqSpraySheets']`); keep both entries.
- **Recovery proof (thirteenth session):** the rebuilt bundle is byte-identical (`73ed2a8b...`) and the seed 7, 3.0 s frame
  has 0 differing pixels against `30_step5_fill_map/layers_step4/base_canvas.png` (`31_recovery_audit/`).

## Earlier: tenth session, BOTH evening lines merged (5 November 2026, from 21:45 UTC; this section overrides the notes below)

- **Repository:** `josiahscalia5-dev/bubblegame`. **Branch:** `ccr-9f8e2c8d-0zg3mc` (the tenth session's). The lead merges every
  agent's work into it and pushes; never push another branch, never force-push. `HANDOFF.md` names the merge commit.
- **Two lines of work split at `9a95c06` (16:29 UTC) and are now both on this branch, each exactly as tested on its own branch:**
  - `?s3=focus` (eighth and ninth sessions, `ccr-3d8a1ae9-hhgml1` then `ccr-de8d9670-2ohd5t`, final `b2a5b6e`): the line that
    follows the user's LATEST corrections in `CLAUDE.md` (17:15 UTC: sparkling BLUE water round her, no white foam cushion;
    17:45 UTC: the vortex kit; 18:26 UTC: the Tunnel Correction ESSENTIAL kit). Its sections below ("ninth session",
    "the FOCUSED CORRECTION PASS") still hold; only the branch name changed.
  - `?s3=match` (seventh session, `ccr-1f9da4c9-e0yrsc`): its own focused pass from the 15:55 UTC brief (the camera `MATCH_CAM`,
    the character 1.2 times larger; the sock's pose; wall turbulence and streaks; an aqua-white FROTH bank; tunnel flecks and
    bubbles). Its froth bank predates, and conflicts with, the user's 17:15 correction. Evidence:
    `Previews/WebDemo/screen4_round9_match/13_focused_pass_tunnel_lighting/`, `14_focused_pass_water_vfx/`, `20_focused_pass_merged/`.
  - Work on the switch the lead names. If none is named, ask the lead; do not merge the two looks on your own.
- **How the two coexist (keep it so):** `focus` is built on `match` as it was at `9a95c06`. Under `FOCUS_ON`,
  `WebDemo/src/tunnel_r9_focus_base.js` puts back every `MATCH` / `MATCH_WATER` setting the seventh session changed (a
  generated list) before `FOCUS`'s own settings merge, and the seventh session's `match`-only code is gated `!FOCUS_ON`
  (in `tunnel_r9_match.js`, `tunnel_r9_match_water.js`, `tunnel_r8_splash.js`). So:
  - a change for `focus`: `FOCUS` settings (`tunnel_r9_focus.js`) or code gated on `FOCUS_ON`;
  - a change for `match`: code gated `!FOCUS_ON` (or settings `focus` overrides), so `focus` stays pixel-identical.
- **The merge's proof:** `Previews/WebDemo/screen4_round9_match/21_lines_merged/` (settings compared key by key, and frames:
  `match` and every older switch against `68c8c40`, `focus` against `b2a5b6e`).
- **Your part:** after any change, prove `match`, `focus` and every older switch pixel-identical where they should be (`20_focused_pass_merged/scripts/` and `21_lines_merged/scripts/`), and run `s3_func` / `r2_func` (`VW=135 VH=270`) under the switch changed.

## Earlier: ninth session, where the work is saved (5 November 2026, from 19:00 UTC; this section overrides the notes below)

- **Repository:** `josiahscalia5-dev/bubblegame` (the user's GitHub repository). **Branch:** `ccr-de8d9670-2ohd5t`, the ninth
  session's branch; it continues `ccr-3d8a1ae9-hhgml1` exactly (both were at `182ad19`). Every agent's work is merged
  into this branch and pushed there by the lead; never push another branch, never force-push.
- **Tunnel & Lighting's focus work so far is on the branch** (`0ff0d0b`, restored from its 18:58 snapshot, identical frames):
  - the focus camera at the original's size: `FOCUS.match.hero.round6.round5.camera = { off: [-0.162, 1.126, -3.1],
    lookY: 1.655, lookX: 0.142, fov: 68 }`, with the gold rim restaged (`porthole.bezel`, `face.inner`, `rivets.radius`,
    `hero.rim.centre`, `rimRho`). At 3.0 s: character width 0.473 W, top 0.695, base 0.850, centre (0.500, 0.780);
  - the user's problem A (the lower-left lavender-grey wedge, `heroWalls` before the tube's mouth): drawn as the walls'
    animated water (`focusMouthWaterGLSL`); the upper gold rim unchanged;
  - the left-wall horizontal seam removed (`focusRibbonsGLSL` counts the angle from straight down).
  - Notes and frames: `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/NOTES.md`.
- **Water & VFX's unfinished focus work** (the water round her: crest cut, side crests, sparkle; not yet committed) is in
  `Previews/WebDemo/screen4_round9_match/15_focus_pass/wip_snapshots_design_agents/water-vfx-engineer_a29b1562/`
  (`changes.patch` against `d6e836d`, which applies cleanly here) with its notes in `.../files/Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/NOTES.md`.
- **The user's newest kit (18:26 UTC):** `Design/ReferencePacks/2026-11-05_Tunnel_Correction_ESSENTIAL_Kit/`
  (`CLAUDE_SEND_THIS.txt`): A, the lower-left exposed wall (done, above); B, broader, softly blended cobalt and turquoise
  flows, softer brighter cyan accents, fewer hard white outlines and less bubble clutter, a modest warm centre. Its
  `00_ORIGINAL_CLASSIC_MASTER.png` is the same original; the original stays the only target.
- **The Art Director's ranked review of focus:** `Previews/WebDemo/screen4_round9_match/16_art_director_focus_review/`.
- **Saving:** commit in your worktree after each tested step and keep a running `NOTES.md` in your evidence folder; the
  lead's 5-minute autosave copies your unfinished work into the repository (the user's standing request).

## Earlier: the FOCUSED CORRECTION PASS, `?s3=focus` (5 November 2026, eighth session; this section overrides the notes below)

- **Switch:** `?s3=focus` = everything `match` does plus the user's focused correction pass. Settings: `WebDemo/src/tunnel_r9_focus.js`
  (`FOCUS.match`, merged into `MATCH`; `FOCUS.water`, merged into `MATCH_WATER`). Code gated on `FOCUS_ON`:
  - `tunnel_r9_match.js`: `focusRibbonsGLSL` (the walls' water as broken, twisting ribbons), `focusFlecksGLSL` (white
    streaks and drops along the ribbons) and the sock pose;
  - `tunnel_r9_match_water.js`: `focusLumpGLSL` (small blue splash crests), `swellFront` (the swell's crest lowered in front
    of her) and `focusSparkleGLSL` (glints on the water round her).
  `match` and every older switch must stay pixel-identical.
- **The user's corrections (they supersede every earlier foam request):**
  - round the character, sparkling BLUE water with small bubbles, splashes and blue-white highlights; NO thick white or
    lavender foam cushion or clumps;
  - in the tunnel, the water itself as twisting, irregular cobalt ribbons with turquoise currents, dark gaps and curved,
    broken white streaks (`Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/`). Not smooth, even, wide pastel
    rings or a big peach band. Bubbles are secondary.
- **State and evidence:** `Previews/WebDemo/screen4_round9_match/15_focus_pass/README.md` (commits, numbers, checklist),
  `final/` (the 3.0 s sheets).
- **Capture:** `S3=focus TIMES=3.0 DPR=1.5 CANVAS=1 node tools/screen4/liquid_shots.cjs "$PWD" <out>`.
  - Camera candidates: `tools/screen4/cam_sweep.cjs`.
  - Measures: `15_focus_pass/scripts/` (`pink.py`, `tunnel_palette.py`, `final_sheets.py`).
  - `r2_func.cjs` takes `VW=135 VH=270` (at full size its hearts loop outlasts 20 minutes in software rendering).
- **The user's rule now:** commit and push each tested step and report its hash. Never call a fix done without the real 3.0 s
  frame showing it.

## Earlier: Round 9 ART MATCH, `?s3=match` (5 November 2026, fifth and sixth sessions; this section overrides the notes below)

- **Branch:** `ccr-4aef2c77-0cdeu2` (sixth session), which continues `ccr-b41bbe83-3fbhkr` exactly (both at `a5be95c`).
  Round 9 so far is merged as `2a6ab30`.
- **Switches:** `?s3=match` is everything `?s3=splash` does plus Round 9. `match,bare` (diagnostic only) hides the
  coins, socks, gem, framing brushes and hero bubbles. `match,nofoam` is `match` without the white.
- **Code:**
  - `WebDemo/src/tunnel_r9_match.js` (Tunnel & Lighting): settings `MATCH`, the Reference 5 wall material
    (`matchWallGLSL()`, `matchWall(cs, u, W, N0, T0)`, uniforms `MATCH_UNIFORMS`, `mtUndisplay`), the rim ramp, the
    camera (`MATCH.hero`), the staging (`STAGE`, +0.95 m), `matchCollectibles`, `bare`.
  - `WebDemo/src/tunnel_r9_match_water.js` (Water & VFX): `MATCH_WATER`; the floor in the walls' water
    (`matchFloorDecl`, `matchFloorApply`); the swell (`matchSwellGLSL`); the bank's water lobes (`matchLumpGLSL`).
  - Every hook elsewhere is gated, `${MATCH_ON ? piece() : ''}`, in `tunnel_r8_liquid.js`, `tunnel_r8_splash.js` and
    `game.js`.
  - Textures: `WebDemo/textures/screen4/`, made by `WebDemo/tools/screen4/derive_ref5_water.py` (Reference 5 graded to
    the original) and `derive_tunnel_textures.py` (the rim ramp). The APK build copies this folder.
- **Capture and measure:** `WebDemo/tools/screen4/liquid_shots.cjs` (seed 7, DPR 1.5, HUD on). The hero moment is
  **3.0 s**; check 2.85 and 3.1 s too. Measure with the Art Director's scripts in
  `Previews/WebDemo/screen4_round9_match/01_art_director/scripts/` and `WebDemo/tools/screen4/liquid_shares.py`.
  Overlays: `WebDemo/tools/screen4/match_overlay.py`. Hide probes: `hide_probe.cjs`.
- **Pixel identity:** the normal game and every older switch (`splash`, `splash,nofoam`, `liquid`, `liquid,nofoam`,
  `hero`, `round7`, `round6`, `round6,rich`, `round5`, `round4`) must stay identical. Create textures and draw random
  numbers under `match` only: three.js draws every new texture's UUID from `Math.random`, and a texture made at load
  once shifted the game's seeded sequence.
- **Done:**
  1. The Art Director's five largest mismatches (`01_art_director/`).
  2. Tunnel & Lighting's wall-material checkpoint (`25a65ab`): Reference 5 water on the walls graded to the original,
     the rim from the original, camera pitch +1.5 degrees, staging +0.95 m, objects resized (`02_tunnel_lighting/`).
  3. The lead's fixes (`9b7527d`): the left brush as the original's round pom-pom, the star glints removed from the wall
     texture, the relief maps repeating at Reference 5's period.
  4. Water & VFX (`15acbc8`, merged as `2a6ab30`): one continuous water body (the floor in the walls' water), seven
     irregular wave lobes, glossy see-through water lobes, curling splashes, the fur showing violet through the water,
     less white spray (`03_water_vfx/`).
- **Still open, measured at 3.0 s (approved / now):**
  - **the centre:** lavender 11 / 46%, warm 47 / 18%. It is drawn by `heroWalls`, not the floor (hide probe). Likely
    cause: the drum turns, so far wall points get a screen radius worked out in their own track frame, not where they
    really appear. Likely fix: work out `rw` from the fragment's real screen position round the projected vanishing point;
  - **the walls:** cyan 13.3 / 6.9%; deep cobalt 3.9 / 0.7%; band contrast 0.17-0.20 / 0.12-0.15;
  - **the floor ahead:** lavender 3.0 / 18.9% (sock included); median #abd8f2 / #85baf0; white 27.1 / 10.5%;
  - **round the character:** electric blue right of the body 14.6 / 8.1%; white blobs of 20 px or more beside the body
    13 / 50; texture under the body 0.112 / 0.071; foam bank white 20.3 / 15.9%;
  - **objects:** the gem about 0.02 H low and 12% too big; the sock and the lower-right coin;
  - **housing:** less lavender round the opening and a more immersive opening; Reference 2's metallic finish not done.
- **Next, in order:** the Art Director's six-area quality gate on the merged 3.0 s frame; one focused Tunnel & Lighting
  pass on what it finds; then the final checks (pixel identity, `s3_func`, `r2_func`), the comparisons at 2.85, 3.0 and
  3.1 s with a 50% blend, and a gameplay video.
- **Evidence:** `Previews/WebDemo/screen4_round9_match/` (`01_art_director`, `02_tunnel_lighting`, `03_water_vfx`, then
  `04_...` for each later step).
- **The user's taste:** no generic star sparkles, no pale lavender, no white foam blanket. The target is about 90-95%
  resemblance; never claim a percentage without saying which measurement produced it.
- **Your Round 9 job:** after each Round 9 step, `S3=match` with `tools/screen3/s3_func.cjs` and `tools/screen3/r2_func.cjs`;
  pixel identity of the normal game and every older switch at Tap to Start, 2.85 s and 4.2 s against the step's starting
  commit (`tools/models/game_eval.cjs` SHOT, seed 7); console errors; draw calls and triangles; a short gameplay video.

## Earlier: Round 8 pass 2 SPLASH, `?s3=splash` (5 November 2026, fifth session; this section overrides the notes below)

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
