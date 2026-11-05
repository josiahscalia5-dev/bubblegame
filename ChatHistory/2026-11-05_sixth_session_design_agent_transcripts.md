# Design agents' transcripts, 5 November 2026 (sixth session, branch ccr-4aef2c77-0cdeu2)

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Art Director six-area gate (started 13:30 UTC)

**Lead → agent** (13:30 UTC):

You are the Game Art Director for Bubble Wash Kingdom (three.js r170, `WebDemo/`), working in the main checkout `/home/user/bubblegame` on branch `ccr-4aef2c77-0cdeu2`. Read `CLAUDE.md` and your agent file's "THE ONE REFERENCE" and "Newest: Round 9 ART MATCH" sections first. Run `source /home/user/bubblegame/Tools/bw_tools_env.sh` in every shell (it sets `$BW_PY`, a Python with OpenCV, scikit-image, NumPy, Pillow, SciPy). You are READ-ONLY for game code: do not edit anything under `WebDemo/src/`, do not rebuild, do not commit. You may write ONLY inside `Previews/WebDemo/screen4_round9_match/05_art_director_gate/` (create it). An automatic save commits the work branch every 5 minutes; that is expected.

## The one target
The ORIGINAL CLASSIC APPROVED Screen 4: `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536). It is the only authority. Detail close-ups of it: the user's precision kit `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` (`01` housing, `02` cobalt-cyan whirlpool, `03` pink swimmer in blue water, `04` coins/gem/sock, `05` brushes, `06` foreground splashes, `07` HUD; `10` the user's annotated target zones; `08`/`09`/`11` are game frames, not targets). Supporting material references (look and finish only, never layout): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/` (README there).

## The frames to judge (already captured, real seeded gameplay, `?s3=match`, merged commit `2a6ab30`, DPR 1.5, HUD on)
- PRIMARY: `Previews/WebDemo/screen4_round9_match/04_merged/match_t3.00.png` (page) and `match_t3.00_canvas.png` (raw 3D canvas).
- Checks: `match_t2.85*.png`, `match_t3.10*.png` in the same folder. Draw-call cost in `match_info.json`.
- The side by side the lead made: `04_merged/approved_vs_waterVFX_vs_merged_3.00s.png`.
- History to read: your own first report `Previews/WebDemo/screen4_round9_match/01_art_director/README.md` (reuse your scripts in `01_art_director/scripts/`, adapt paths), Tunnel & Lighting's `02_tunnel_lighting/README.md`, and Water & VFX's `03_water_vfx/README.md` (their verdicts, numbers and "what still differs").
- If you need an extra diagnostic frame (for example `?s3=match,bare`, or a hide probe), you may capture it read-only: `cd /home/user/bubblegame/WebDemo && S3=match,bare TIMES=3.0 DPR=1.5 CANVAS=1 node tools/screen4/liquid_shots.cjs "$PWD" <abs out dir>`; hide probes with `tools/screen4/hide_probe.cjs` (read its header). SwiftShader is slow (about 1 minute a frame): at most 4 extra captures, one browser at a time.

## The job: a quality gate in six areas, at 3.0 s
Score each of these six areas SEPARATELY against the original, using the precision kit's zones (`10`) for where each area lives:
1. housing and framing (lavender housing, gold/bronze rim, how much of the frame the opening fills, how immersive it is);
2. deep blue tunnel (cobalt depth, band structure, the centre: warm/pink luminous core vs lavender);
3. light and reflections (cyan streaks, glints, highlights, warm core glow; no generic star sparkles);
4. character immersion (waterline, see-through water on the fur, waves wrapping the body);
5. foreground waves (the splash bank: glossy translucent lobes, white bubbly crests, density, blue between crests);
6. object size and placement (coins, gem, sock, brushes, bubbles: boxes in frame fractions, approved vs now).

For each area give: a 0-10 score with one sentence why; the 2-4 measured numbers that matter (approved / merged now), saying which script and which box produced each; and a verdict (close / partly / far).

Then give ONE ranked list of fixes, largest visible difference first (at most 10). Each fix must be implementation-specific: the owner (Tunnel & Lighting = `WebDemo/src/tunnel_r9_match.js` and its gated hooks; Water & VFX = `WebDemo/src/tunnel_r9_match_water.js` and its gated pieces), the object/shader/setting to change (name it from the code: read `WebDemo/src/tunnel_r9_match.js`, `tunnel_r9_match_water.js`, `tunnel_r8_liquid.js`, `tunnel_r8_splash.js`, `tunnel_r7_hero.js`), the measured target, and how to check it. In particular, CONFIRM OR REJECT with evidence the Water & VFX finding that the centre's lilac (lavender 46% against 11%, warm 18% against 47%) is drawn by `heroWalls` because far wall points get their screen radius from their track-frame position rather than their real screen position, and say what the right fix is. Also judge: less lavender round the opening and a more immersive opening; deep cobalt contrast; the sock and the lower-right coin; the gem.

Rules: measurements and visual judgement reported separately; never claim an overall similarity percentage (the user wants about 90-95% resemblance eventually, but any figure must name the measurement that produced it, so prefer per-area scores). Be concrete and honest; do not soften. Bounded: aim to finish in about 30-40 tool steps.

## Deliverable
In `Previews/WebDemo/screen4_round9_match/05_art_director_gate/`: `README.md` (the six-area table, the ranked fix list, the centre diagnosis), an annotated side by side (original | merged 3.0 s, both at portrait height 1536, with the six zones and the top fixes marked), a crop sheet per area (original vs merged), `measured.txt`, and any scripts you wrote in `scripts/`. Reply with: the six scores and verdicts, the ranked fix list (owner, what, target), the centre diagnosis, and the paths.

- 13:30 `Bash`: Read agent Round 9 section and list round 9 folders
- 13:30 `Bash`: Read my first report and Water VFX README
- 13:30 `Bash`: Read rest of my first report
- 13:30 `Bash`: Read still-differs sections of specialists' READMEs
- 13:30 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/04_merged/approved_vs_waterVFX_vs_merged_3.00s.png
- 13:31 `Bash`: Read match_info and image sizes
**Lead → agent** (13:31 UTC):

[Image: original 2411x1630, displayed at 2000x1352. Multiply coordinates by 1.21 to map to original image.]

- 13:31 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/10_TARGET_ZONES_ANNOTATED.jpg
- 13:31 `Bash`: Read precision kit verified README
- 13:31 `Bash`: Inspect my earlier measurement scripts
- 13:31 `Bash`: Read remaining measurement scripts
- 13:31 `Bash`: Copy scripts and find vanishing points of merged frames
- 13:31 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/04_merged/match_t3.00_canvas.png
- 13:31 `Bash`: Locate rw computation in match wall shader
- 13:31 `Bash`: Read match settings header
- 13:31 `Bash`: Read matchWall GLSL
- 13:32 `Bash`: List diagnostics and read Water VFX verdict b
- 13:32 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/03_water_vfx/diagnostic/centre_hide_probe_all_noGlow_noWalls_noS4Bubbles_noHeroBubbles_noFloor.jpg
**Lead → agent** (13:32 UTC):

[Image: original 2770x700, displayed at 2000x505. Multiply coordinates by 1.39 to map to original image.]

- 13:32 `Bash`: Inspect derived textures and their metadata
- 13:32 `Bash`: Read how uHeroCam and wall cs are computed
- 13:32 `Bash`: Classify colour map rows by screen radius
- 13:33 `Bash`: Find uHeroTanW definition and drum turn geometry
- 13:33 `Bash`: Read heroWalls construction range
- 13:33 `Bash`: Read heroWalls geometry source
- 13:33 `Bash`: Find hero lining and tunnel extents
- 13:33 `Bash`: Read hero_probe header and scene access
- 13:33 `Bash`: Read hero_probe page load and output
- 13:34 `Bash`: Run read-only rw probe on the real game at 3.0 s
- 13:35 `Bash`: Show rw probe head results
- 13:35 `Bash`: Read match water settings and floor rw usage
- 13:36 `Bash`: Get approved object boxes from earlier reports
**Agent** (13:36 UTC):

Now the measurement suite on the merged frames.

- 13:36 `Bash`: Adapt scripts to merged frames and run full measurement suite
- 13:37 `Bash`: Measure brushes, sock and log rw probe results
- 13:38 `Bash`: Build per-area crop sheet and gridded object zoom
- 13:38 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/05_art_director_gate/crops_per_area_original_vs_merged_3.00s.jpg
**Lead → agent** (13:38 UTC):

[Image: original 1550x3230, displayed at 960x2000. Multiply coordinates by 1.61 to map to original image.]

- 13:38 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/05_art_director_gate/objects_zoom_grid_original_vs_merged_3.00s.jpg
- 13:40 `Bash`: Measure opening edge strips and build annotated side by side
- 13:40 `Read`: /home/user/bubblegame/Previews/WebDemo/screen4_round9_match/05_art_director_gate/approved_vs_merged_3.00s_gate_annotated.png
- 13:41 `Bash`: Read draw-call cost and fix annotation label
- 13:42 `Bash`: Write gate README and verify deliverables
- 13:42 `Bash`: Remove Python cache from gate scripts
**Agent** (13:43 UTC):

I scored the merged build at 3.0 s in all six areas. Two areas are far, four are partly, and none is close yet. Water & VFX's centre finding is confirmed, with two refinements. No game code was edited or rebuilt. I made one read-only diagnostic capture.

## Six areas at 3.0 s

Scores are my visual judgement. Numbers are approved / merged, from my scripts on 538 x 1076 resizes (raw output in `measured.txt`).

| Area | Score | Verdict | Why | Key numbers (script, box) |
|---|---|---|---|---|
| 1 Housing and framing | 7 | partly (layout close) | The gold rim is a heavy bronze band; the lilac collar arc on the left is too smooth and clean. | rim thickness 0.019 / 0.032 H (`rim.py`); zone 1 lavender 45.5 / 41.6% (`zones.py`); left strip x<.08 white 21.1 / 6.6% (`strips.py`) |
| 2 Deep blue tunnel | 5 | partly | Lilac-pink centre instead of a warm luminous core; walls too smooth, with too little cobalt. | centre r<.06 warm 46.7 / 18.5%, lavender 11.1 / 45.2%; upper-wall deep cobalt 3.9 / 1.2%, texture 0.094 / 0.062 (`walls.py`); bright bands up/left/right 8/10/7 vs 6/4/7 (`rings.py`) |
| 3 Light and reflections | 4 | far | Four-point star sparkles; the "warm patches" read lime-yellow, not peach; glints are white-lilac, not ice blue; no warm core. | wall cyan 13.3 / 6.6%; small sparkles 0.20 / 0.85% (`walls.py`); lime pixels 29 / 783 (`palette.py`); glints #cae0ff / #e6e0f9 |
| 4 Character immersion | 6 | partly | The waterline and the violet see-through are right, but the body sits behind a glass-bowl lip, not bubbly foam. | waterline 0.836 / 0.824 (`char.py`); under body violet 36.8 / 40.3%, texture 0.112 / 0.071, pale blue 20.5 / 34.4% (`bank.py`) |
| 5 Foreground waves | 4 | far | The original's massive foam bank is missing: a thin lip over flat water with many tiny flecks. | bank white 20.3 / 15.9%, saturated blue 14.0 / 10.7% (`bank.py`); white blobs left of the body 13 / 105 (`contact.py`) |
| 6 Object size and placement | 7 | partly (most objects close) | See the object notes below. | gem 0.271-0.374, 0.489-0.529 / 0.254-0.369, 0.510-0.561 (`objects.py`) |

## Centre diagnosis: confirmed, with two refinements

The lilac centre is drawn by `heroWalls`. `matchWall()` works out `rw` from each point's own track-frame position, not from where it appears on screen. The probe projected every `heroWalls` vertex with the real camera at 3.0 s:

| Screen ring | Shader `rw` | Distance ahead | Ratio to true screen radius |
|---|---|---|---|
| r < 0.035 | 0.071 | 37 m | 2.4 |
| r 0.035-0.06 | 0.087 | 31 m | 1.7 |
| r 0.06-0.09 | 0.099 | not tabulated | 1.3 |
| r 0.09 and beyond | not tabulated | not tabulated | 1.00 |

- **None of the centre samples the map's warm core.** No wall point inside r < 0.09 uses the map's core rows (rw < 0.06): 0%.
- **Refinement 1: the lining is finite.** It ends 38.2 m ahead, so the formula can never give an `rw` below about 0.072. That is outside the 0.06 W centre disc, so the warm core can never appear.
- **Refinement 2: the path bends.** It is straight to 12 m, then pitches up at 16 m, turns at 20 m and pitches down at 30 m. The far wall therefore faces the camera across the centre at 26-37 m. The "drum turns" is this bend, not the drum mesh spinning.
- **Why it comes out lilac.** The map rows those points sample (rw 0.06-0.12) are 20-33% lavender and 25-39% pale lilac. The peach core tint is keyed on the same wrong `rw`, so it barely applies there.

**The right fix (Tunnel & Lighting):**
- In `matchWall`, work out `rw` and `tu` from `gl_FragCoord`, round the projected centre of the far tube. That needs new uniforms `uMatchVP` and `uMatchRes`, set each frame in a gated hook.
- Blend this in only under about 0.14 W screen radius. Outside 0.09 the ratio is already 1.00, so the matched outer walls stay as they are.
- Drive the core tint from the corrected `rw`.
- Water & VFX's floor uses the same formula (`tunnel_r9_match_water.js` line 135) and needs the same correction.
- Then de-lilac the map's rw 0.06-0.12 rows.
- Targets: centre warm at least 35%, lavender at most 15%. Check with `walls.py` and `rw_probe.cjs`.

## Ranked fixes, largest visible difference first

1. **Tunnel & Lighting (floor part: Water & VFX): the centre, F1 above.**
2. **Water & VFX: foreground bank mass.**
   - **What:** add large lobe clusters at the outer angles (±50 to ±80, 0.18-0.24 m) in `MATCH_WATER.splash.lumps`, with bubbly caps (`lobe.cap`, `lobe.foam`). Cut the tiny flecks (`lobe.fleck` 0.72 to about 0.85, fewer `heroSplash` spray points).
   - **Target:** bank white 18-22%, saturated blue at least 13%; white blobs left of the body at most 40.
3. **Tunnel & Lighting: wall depth.**
   - **What:** add a cobalt trough term from the relief map's `det` (a new `MATCH.walls.trough`, about 0.3). Make the left bands denser through the left-sector compression in `derive_ref5_water.py` or `MATCH.walls.detailSpan`.
   - **Target:** deep cobalt 3-5%, texture at least 0.085, at least 7 bands per sector, band contrast 0.17-0.20.
4. **Tunnel & Lighting: colour of the light.**
   - **What:** pull lime (hue 60-100) toward peach #ffd3a0 or pink #efc9d9. Draw cyan streaks at #2fb2f5 from the variation map.
   - **Target:** lime pixels at most 100, wall cyan at least 11%, electric blue at most 46%.
5. **Tunnel & Lighting: remove the star sparkles.**
   - **What:** first find the source with `hide_probe.cjs`. Candidates are Reference 5's stars baked into `tunnel_colour.png`, the `shimmer` term, or the `spec` glints. Then tint the remaining glints to #cae0ff (`MATCH.walls.glint`).
   - **Target:** small sparkles at most 0.3%.
6. **Tunnel & Lighting: housing.**
   - **What:** thin the rim (`porthole.bezel.inner` 2.39 to about 2.45). Break the left collar arc with droplets.
   - **Target:** rim thickness about 0.019 H, left-strip white at least 15%.
7. **Tunnel & Lighting: gem and centre crowding.**
   - **What:** move `extraGem` up and shrink it to about 0.89 visual scale, solved with `hero_probe` `PICKS`. Push the far coin line, the far sock and `MATCH.farGem` away from the centre coin.
   - **Target:** gem at 0.271-0.374, 0.489-0.529; only the centre coin within 0.08 W of the centre.
8. **Water & VFX: water under the body.**
   - **What:** break the glass-bowl lip into foam lobes (`matchSwellGLSL`, `MATCH_WATER.look.crest`, `top`, `clear`, and the front lumps).
   - **Target:** texture at least 0.10, white 12-16%, pale blue at most 24%.
9. **Water & VFX: floor ahead.** Re-measure after fix 1, then raise `MATCH_WATER.floor.delilac` and the white share. Target: lavender at most 5% with the sock excluded, white 25-30%.
10. **Tunnel & Lighting: right coin and sock.**
    - **What:** move the right coin about 0.3 m further along, or scale it to 0.87, and raise it 0.02 H. Raise `firstSock` about 0.1 m.
    - **Target:** right coin at 0.778-0.996, 0.671-0.800.

## Your specific questions

- **Less lavender round the opening: rejected as the lever.** Lavender is already at or below the approved level: zone 1 41.6% against 45.5%, the top bevel 68% against 62%, the left strip 15% against 13%. The opening feels less immersive because the rim is 1.7 times too thick, the left collar arc is too clean, and the centre has no luminous pull.
- **Deep cobalt contrast: short.** Upper wall 1.2% against 3.9%, side walls 1.1% against 4.1%.
- **The sock:** the right size, 0.025 H low.
- **The lower-right coin:** 15% too wide and 0.02 H low.
- **The gem:** confirmed, 12% too wide and 0.027 H low.
- **The upper-left coin:** 0.065 H low and touching the big coin. The jump reach limits how high it can go, so I left it.

One item outside the six areas: the game's HUD buttons start at 0.835 of the height, against about 0.90 in the approved, so they hide much of the foam bank. They are out of scope.

Files are in `/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/05_art_director_gate/`:
- `README.md`
- `measured.txt`
- `approved_vs_merged_3.00s_gate_annotated.png`
- `crops_per_area_original_vs_merged_3.00s.jpg`
- `objects_zoom_grid_original_vs_merged_3.00s.jpg`
- `rw_probe/rw_probe_t3.00.json`
- `scripts/` (the diagnostic is `scripts/rw_probe.cjs`)


_40 tool steps._

---

## Tunnel & Lighting specialist: Tunnel & Lighting focused pass (started 13:44 UTC)

_Worked in its own worktree, branch `worktree-agent-af5009374d98fe44c`._

**Lead → agent** (13:44 UTC):

You are the Tunnel & Lighting specialist for Bubble Wash Kingdom (three.js r170, `WebDemo/`). You work in your OWN git worktree (your current directory), which starts at the main branch's current commit (it contains the merged Round 9 build `2a6ab30` and the Art Director's gate report). Read `CLAUDE.md` and your agent file's "THE ONE REFERENCE" and "Newest: Round 9 ART MATCH" sections first. Run `source /home/user/bubblegame/Tools/bw_tools_env.sh` in every shell. Your worktree has no `WebDemo/node_modules`: run `ln -s /home/user/bubblegame/WebDemo/node_modules WebDemo/node_modules` once; build with `cd WebDemo && node build.mjs`. Pass ABSOLUTE paths of YOUR worktree's WebDemo to capture tools. Copy `WebDemo/game.bundle.js` aside before your first build (for the pixel-identity proof). The Water & VFX specialist is working IN PARALLEL in another worktree on the foreground bank and the water under the body; the lead merges both afterwards.

## The one target
The ORIGINAL CLASSIC APPROVED Screen 4, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536), the only authority. Close-ups: the precision kit `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` (`01` housing, `02` whirlpool, `04` coins/gem/sock; `10` the annotated zones). Material references (look only, never layout): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/` (REF5 = the tunnel's water material, REF2 = gold and lavender housing).

## Read first
- The Art Director's gate on the merged build: `Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md` and `measured.txt`, its annotated sheet, its scripts in `05_art_director_gate/scripts/` (including `rw_probe.cjs`, the diagnostic that projected every `heroWalls` vertex with the real camera) and `rw_probe/rw_probe_t3.00.json`.
- Your own earlier checkpoint `Previews/WebDemo/screen4_round9_match/02_tunnel_lighting/README.md` and Water & VFX's `03_water_vfx/README.md`.
- The merged frames: `Previews/WebDemo/screen4_round9_match/04_merged/match_t3.00.png` (and `_canvas`, 2.85, 3.10).

## The job: your part of the Art Director's ranked fixes, largest first (`?s3=match` only)
1. **F1, the centre (the largest difference).** Confirmed: `matchWall()` in `WebDemo/src/tunnel_r9_match.js` computes `rw`/`tu` from each point's own track-frame position; the lining ends 38.2 m ahead and the path bends (pitch up at 16 m, turn at 20 m, pitch down at 30 m), so no wall point inside screen radius 0.09 W samples the map's warm core rows (rw < 0.06), and the centre reads lilac (warm 18.5% / lavender 45.2%, approved 46.7% / 11.1%). Fix: work out `rw` and `tu` from `gl_FragCoord` round the projected centre of the far tube (new uniforms, e.g. `uMatchVP`, `uMatchRes`, set each frame in a gated hook), blended in only below about 0.14 W screen radius (outside 0.09 the ratio is already 1.00, so the matched outer walls must stay as they are); drive the core tint from the corrected `rw`. Put the correction in ONE GLSL helper exported from `tunnel_r9_match.js`, and apply it to the floor too: in `WebDemo/src/tunnel_r9_match_water.js`, `matchFloor()`'s three lines computing `du`, `rw` and `tu` (about lines 133-136) may be replaced by a call to your helper. That is the ONLY change you may make to Water & VFX's file (they are editing other parts of it). Then de-lilac the map's rw 0.06-0.12 rows if needed. If the true far end of the tube (beyond 38.2 m) shows nothing warm, add a warm luminous core (a gated glow disc or the existing warm glow at the projected centre) so the centre reads warm and luminous, not blown out. Targets: centre r < 0.06 W warm ≥ 35%, lavender ≤ 15% (`walls.py`), and re-run `rw_probe.cjs`.
2. **F3, wall depth:** a cobalt trough term from the relief map's `det` (e.g. a new `MATCH.walls.trough`, about 0.3); denser left bands (left-sector compression in `derive_ref5_water.py` or `MATCH.walls.detailSpan`). Targets: upper-wall deep cobalt 3-5% (now 1.2%), side walls similar (now 1.1%, approved 4.1%), texture ≥ 0.085 (now 0.062), ≥ 7 bands per sector, band contrast 0.17-0.20.
3. **F4, the colour of the light:** pull lime (hue 60-100) toward peach #ffd3a0 or pink #efc9d9; cyan streaks at about #2fb2f5 from the variation map. Targets: lime pixels ≤ 100 (now 783, `palette.py`), wall cyan ≥ 11% (now 6.6%), electric blue ≤ 46%.
4. **F5, no star sparkles:** first find the source with `tools/screen4/hide_probe.cjs` (candidates: Reference 5 stars still baked into `tunnel_colour.png`, the `shimmer` term, the `spec` glints); remove four-point stars; tint remaining glints toward #cae0ff (`MATCH.walls.glint`; now #e6e0f9). Target: small sparkles ≤ 0.3% (now 0.85%). The user dislikes generic star sparkles.
5. **F6, housing:** thin the rim (`porthole.bezel.inner` 2.39 to about 2.45; rim thickness 0.032 H now, approved 0.019 H); break the too-clean left collar arc with droplets/sparkle so the left strip x < .08 reads wet (white 6.6% now, approved 21.1%; target ≥ 15%). Do NOT add lavender (zone 1 lavender is already at or below the approved).
6. **F7, gem and centre crowding:** move `extraGem` up and shrink it to about 0.89 of its visual scale, solved with `tools/screen4/hero_probe.cjs` `PICKS`; push the far coin line, the far sock and `MATCH.farGem` away from the centre coin so only the centre coin sits within 0.08 W of the centre. Target gem box 0.271-0.374, 0.489-0.529 (now 0.254-0.369, 0.510-0.561).
7. **F10, right coin and sock:** the lower-right coin 15% too wide and 0.02 H low (move it about 0.3 m further along or scale to 0.87, raise 0.02 H; target 0.778-0.996, 0.671-0.800); raise `firstSock` about 0.1 m (it is 0.025 H low). Collectibles must stay within reach (lanes, jump height) and keep the counts below.

## Rules
- Visual changes only under `?s3=match` (gate every change on `MATCH_ON`; insertions like `${MATCH_ON ? piece() : ''}`), so the normal game and every older switch stay pixel-identical. Never create textures or draw random numbers outside `match` (three.js texture UUIDs come from the game's seeded `Math.random`); private random generators only.
- Gameplay preserved: `S3=match node tools/screen3/s3_func.cjs <abs WebDemo>` must still give lanes 1/0/2, the jump, 12 coins and 2 socks, no console errors.
- No new render passes, no Tripo, no plugins, no other screens. Keep the fluffy shell-fur brushes. Do not edit Water & VFX's swell, lumps, curls or spray code.
- Captures: `tools/screen4/liquid_shots.cjs` (S3=match TIMES=2.85,3.0,3.1 DPR=1.5, CANVAS=1 for the raw canvas); measure with the Art Director's scripts. SwiftShader is slow and another specialist shares the 4 CPUs: ONE browser at a time. BOUNDED: about 20-25 capture iterations; focused high-impact changes in the order above; if time runs short, F1, F3, F4 and F5 matter most.

## Checkpoint and deliverable
- Prove pixel identity of the normal game, `splash` and `liquid` (raw canvas, `tools/models/game_eval.cjs` SHOT, seed 7, at Tap to Start and 2.85 s) against the bundle you started from.
- Evidence and a README in `Previews/WebDemo/screen4_round9_match/06_tunnel_lighting_gate_fixes/`: the real 3.0 s frame and a full-resolution side by side at matching portrait height 1536: ORIGINAL | merged 3.0 s before you (`04_merged/match_t3.00.png`) | match 3.0 s now; 2.85 and 3.1 s frames; a 50% blend overlay of the original over the new 3.0 s (`tools/screen4/match_overlay.py`); `measured.txt` (approved / before / now for every target above, naming the script); per fix one line: fixed / partly / not, with numbers. Be honest; if a change does not visibly improve the frame, say so.
- Commit in your worktree (source + rebuilt `game.bundle.js` + evidence), message starting "Round 9 Tunnel & Lighting gate fixes:"; do not push and do not touch other branches. Reply with the commit hash, your worktree branch name, the comparison path, the per-fix verdicts with key numbers, and what still differs from the original.

**Agent** (13:44 UTC):

I'll start by reading the project state and the Art Director's gate report.

- 13:44 `Bash`: Show git state and gate folder contents
- 13:44 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md
- 13:44 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/Previews/WebDemo/screen4_round9_match/05_art_director_gate/measured.txt
- 13:44 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/Previews/WebDemo/screen4_round9_match/02_tunnel_lighting/README.md
- 13:44 `Bash`: List file sizes and tools
- 13:44 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/WebDemo/src/tunnel_r9_match.js
- 13:44 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/WebDemo/src/tunnel_r9_match_water.js
- 13:44 `Grep`: MATCH|uHeroCam|uHeroTanW|uLqGlow|onBeforeRender|heroWalls
- 13:44 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/WebDemo/src/tunnel_r8_liquid.js
- 13:44 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/WebDemo/src/tunnel_r8_liquid.js
- 13:45 `Bash`: Find where hero uniforms are set and MATCH hooks
- 13:45 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/WebDemo/src/tunnel_r7_hero.js
- 13:45 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/WebDemo/src/tunnel_r8_liquid.js
- 13:45 `Bash`: Link node_modules, back up bundle, verify rebuild reproduces it
- 13:45 `Bash`: Link node_modules and back up the starting bundle
- 13:45 `Bash`: Inspect the tools env script
- 13:45 `Bash`: Source the tools environment and show paths
- 13:45 `Bash`: Source the worktree copy of the tools environment
- 13:45 `Bash`: Inspect the installed tools folder
- 13:45 `Bash`: Check for playwright availability
- 13:45 `Bash`: Read capture tool and locate playwright
- 13:45 `Bash`: Check playwright resolves and flock exists
- 13:45 `Bash`: Rebuild and confirm the bundle is reproduced
**Agent** (13:45 UTC):

Now the Art Director's probe script and measuring scripts.

- 13:45 `Bash`: Read the probe and measurement scripts
- 13:45 `Bash`: Read the other measurement scripts
- 13:45 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/Previews/WebDemo/screen4_round9_match/05_art_director_gate/approved_vs_merged_3.00s_gate_annotat
- 13:46 `Bash`: Crop centres of original and merged frame
- 13:46 `Read`: /tmp/claude-0/-home-user-bubblegame/bf88ac6f-6adc-5c45-963a-b6a0b145986e/scratchpad/m/centre_before.png
- 13:46 `Bash`: Show the rw probe JSON
- 13:47 `Read`: /home/user/bubblegame/.claude/worktrees/agent-af5009374d98fe44c/WebDemo/src/tunnel_r7_hero.js
- 13:47 `Bash`: Find axis height constants
- 13:47 `Bash`: Read hero_probe and constants

_32 tool steps._

---

## Water & VFX specialist: Water & VFX bank and under-body (started 13:44 UTC)

_Worked in its own worktree, branch `worktree-agent-ada634b5fcdf40e0f`._

**Lead → agent** (13:44 UTC):

You are the Water & VFX specialist for Bubble Wash Kingdom (three.js r170, `WebDemo/`). You work in your OWN git worktree (your current directory), which starts at the main branch's current commit (it contains the merged Round 9 build `2a6ab30`, including your own previous stage `15acbc8`, and the Art Director's gate report). Read `CLAUDE.md` and your agent file's "THE ONE REFERENCE" and "Newest: Round 9 ART MATCH" sections first. Run `source /home/user/bubblegame/Tools/bw_tools_env.sh` in every shell. Your worktree has no `WebDemo/node_modules`: run `ln -s /home/user/bubblegame/WebDemo/node_modules WebDemo/node_modules` once; build with `cd WebDemo && node build.mjs`. Pass ABSOLUTE paths of YOUR worktree's WebDemo to capture tools. Copy `WebDemo/game.bundle.js` aside before your first build (for the pixel-identity proof). The Tunnel & Lighting specialist is working IN PARALLEL in another worktree on the walls, the centre, the light, the rim and the objects; the lead merges both afterwards.

## The one target
The ORIGINAL CLASSIC APPROVED Screen 4, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536), the only authority. Close-ups: the precision kit `Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/` (`03` pink swimmer in blue water, `06` foreground splashes; `10` the annotated zones), and `Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/03_SCREEN_4_CROPS/01_WHITE_WATER_SPLASH_AROUND_PINK_HERO.jpg`, `02_BLUE_WATER_FOAM_FOREGROUND.jpg`. Material reference for the water round the character (look only): `Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/03_REF3_PINK_CHARACTER_IN_TURQUOISE_WATER.png`.

## Read first
- The Art Director's gate on the merged build: `Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md` and `measured.txt`, its annotated sheet and per-area crops, and its scripts in `05_art_director_gate/scripts/` (`bank.py`, `contact.py`, `char.py`).
- Your own previous report `Previews/WebDemo/screen4_round9_match/03_water_vfx/README.md` ("What still differs").
- The merged frames: `Previews/WebDemo/screen4_round9_match/04_merged/match_t3.00.png` (and `_canvas`, 2.85, 3.10).

## The job: your part of the Art Director's ranked fixes (`?s3=match` only)
The Art Director scored foreground waves 4/10 (far) and character immersion 6/10 (partly): "the original's massive foam bank is missing: a thin lip over flat water with many tiny flecks", and "the body sits behind a glass-bowl lip, not bubbly foam".
1. **F2, the foreground bank's mass (the second largest difference in the frame):** the original has a big, sculpted, bubbly white-and-turquoise foam bank across the bottom (zone 6) and round the character's lower body: large glossy translucent water lobes with dense bubbly white caps, clear soap bubbles in it, turquoise and electric blue between the crests. Add large lobe clusters at the outer angles (about ±50 to ±80 degrees, 0.18-0.24 m) in `MATCH_WATER.splash.lumps`, with bubbly caps (`lobe.cap`, `lobe.foam`); cut the many tiny flecks (`lobe.fleck` 0.72 to about 0.85; fewer `heroSplash` spray points). Targets (`bank.py`, `contact.py`): bank white 18-22% (now 15.9%, approved 20.3%), saturated blue ≥ 13% (now 10.7%, approved 14.0%), white blobs of 20 px or more left of the body ≤ 40 (now 105, approved 13). White stays an accent over blue water, never a blanket: lower-third white ≤ 16.9% and contact strip white ≤ 19% (`tools/screen4/liquid_shares.py`).
2. **F8, the water under the body:** break the smooth glass-bowl lip in front of the body into bubbly foam lobes and textured see-through water (`matchSwellGLSL`, `MATCH_WATER.look.crest`, `top`, `clear`, and the front lumps), keeping the fur showing violet through the water. Targets (`bank.py`, `char.py`): texture under the body ≥ 0.10 (now 0.071, approved 0.112), white 12-16%, pale blue ≤ 24% (now 34.4%, approved 20.5%), violet under the body ≥ 30% (now 40.3%), waterline about 0.83 (now 0.824, approved 0.836).
3. Keep the water's reactions to a swerve, a jump and a landing (`tools/screen4/liquid_moves.cjs` with S3=match).
- NOT yours this time: F9 (the floor ahead) waits until the centre fix is merged. In `WebDemo/src/tunnel_r9_match_water.js`, do NOT change `matchFloor()`'s lines computing `du`, `rw` and `tu` (about lines 133-136): Tunnel & Lighting is replacing exactly those with a helper. Do not edit `tunnel_r9_match.js` (walls, rim, staging, objects).

## Rules
- Visual changes only under `?s3=match` (gated on `MATCH_ON`, insertions like `${MATCH_ON ? piece() : ''}`), so the normal game and every older switch stay pixel-identical. Never create textures or draw random numbers outside `match` (three.js texture UUIDs come from the game's seeded `Math.random`); private random generators only.
- Gameplay preserved: `S3=match node tools/screen3/s3_func.cjs <abs WebDemo>` must still give lanes 1/0/2, the jump, 12 coins and 2 socks, no console errors. Keep the cost reasonable (report draw calls and triangles; the merged hero frame is 209 draw calls, 1.42 M triangles).
- No new render passes, no Tripo, no plugins, no other screens. Keep the character model unchanged.
- Captures: `tools/screen4/liquid_shots.cjs` (S3=match TIMES=2.85,3.0,3.1 DPR=1.5, CANVAS=1); measure with the Art Director's scripts. SwiftShader is slow and another specialist shares the 4 CPUs: ONE browser at a time. BOUNDED: about 20-25 capture iterations; focused high-impact changes.

## Checkpoint and deliverable
- Prove pixel identity of the normal game, `splash` and `liquid` (raw canvas, `tools/models/game_eval.cjs` SHOT, seed 7, at Tap to Start and 2.85 s) against the bundle you started from.
- Evidence and a README in `Previews/WebDemo/screen4_round9_match/07_water_vfx_gate_fixes/`: the real 3.0 s frame and a full-resolution side by side at matching portrait height 1536: ORIGINAL | merged 3.0 s before you (`04_merged/match_t3.00.png`) | match 3.0 s now; 2.85 and 3.1 s frames; close-up crops of the bank and the body (original / before / now); `measured.txt` (approved / before / now for every target, naming the script); per fix one line: fixed / partly / not, with numbers; the moves check. Be honest; if a change does not visibly improve the frame, say so.
- Commit in your worktree (source + rebuilt `game.bundle.js` + evidence), message starting "Round 9 Water & VFX gate fixes:"; do not push and do not touch other branches. Reply with the commit hash, your worktree branch name, the comparison path, the per-fix verdicts with key numbers, and what still differs from the original.

**Agent** (13:44 UTC):

I'll start by reading the key documents and setting up the worktree.

- 13:45 `Bash`: Show branch state and folders
- 13:45 `Bash`: Link node_modules, back up bundle, list gate files
- 13:45 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/Previews/WebDemo/screen4_round9_match/05_art_director_gate/README.md
- 13:45 `Bash`: Read measured.txt and measure scripts
- 13:45 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/Previews/WebDemo/screen4_round9_match/03_water_vfx/README.md
**Agent** (13:45 UTC):

Now let me look at the original and the merged frame.

- 13:45 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
- 13:45 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/Previews/WebDemo/screen4_round9_match/04_merged/match_t3.00.png
- 13:45 `Bash`: Crop the bank zone from original and merged
- 13:45 `Bash`: Inspect tools env script and precision kit
- 13:45 `Bash`: Locate the visual Python
- 13:45 `Bash`: Make bank-zone side-by-side crop
- 13:45 `Write`: /tmp/claude-0/-home-user-bubblegame/bf88ac6f-6adc-5c45-963a-b6a0b145986e/scratchpad/sp/crop.py
- 13:45 `Bash`: Make bank-zone side-by-side crop
- 13:45 `Read`: /tmp/claude-0/-home-user-bubblegame/bf88ac6f-6adc-5c45-963a-b6a0b145986e/scratchpad/bank_cmp.png
- 13:45 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/06_FOREGROUND_GLOSSY_SPLASHES_BUBBLES.jpg
- 13:45 `Read`: /home/user/bubblegame/Design/ReferencePacks/2026-11-05_Classic_Screen4_Precision_Kit/03_PINK_SWIMMER_BLUE_WATER_WAVES.jpg
**Agent** (13:45 UTC):

Now the code.

- 13:46 `Bash`: Count lines of source files
- 13:46 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/WebDemo/src/tunnel_r9_match_water.js
- 13:46 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/WebDemo/src/tunnel_r8_splash.js
- 13:46 `Bash`: Find deepMerge and match hooks in liquid file
- 13:46 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/WebDemo/src/tunnel_r8_liquid.js
- 13:46 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/WebDemo/src/tunnel_r8_liquid.js
- 13:46 `Bash`: Locate swell and splash code in hero water
- 13:46 `Read`: /home/user/bubblegame/.claude/worktrees/agent-ada634b5fcdf40e0f/WebDemo/src/tunnel_r7_hero_water.js
- 13:46 `Bash`: Crop left bank: original vs merged canvas
- 13:46 `Read`: /tmp/claude-0/-home-user-bubblegame/bf88ac6f-6adc-5c45-963a-b6a0b145986e/scratchpad/app_bankL.png
- 13:46 `Bash`: Read capture tool and merged info
- 13:46 `Bash`: Build bundle and check it matches start
- 13:46 `Bash`: Check working tree after build
- 13:46 `Bash`: Capture baseline match frame at 3.0 s
- 13:46 `Bash`: Find where playwright is installed
- 13:47 `Bash`: Search for playwright package
- 13:47 `Bash`: Capture baseline match frame at 3.0 s

_33 tool steps._
