# Round 9, step 6: Tunnel & Lighting gate fixes (5 November 2026, resumed after the lost session)

- **Target:** the ORIGINAL approved Screen 4 only, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.
- **Build:** `?s3=match`, worktree branch `worktree-agent-a3faef23dd555533b`. `game.bundle.js` md5 `0c2caa715cf33c51750a5e90f2e43214`.
- **Started from:** `36c8676`, whose `WebDemo/` matches `af5791d` (the merged `2a6ab30` plus the Art Director's gate). The lost run's work-in-progress was restored from `../wip_snapshots_design_agents/lighting-visual-matching_af500937/` and committed first (`942b8cd`).
- **Captures:** real seeded gameplay (seed 7, DPR 1.5, HUD on) with `tools/screen4/liquid_shots.cjs`, with the camera locked. 3.0 s is the main moment; 2.85 s and 3.1 s are checks.
- **Measurements:** the Art Director's step-5 scripts, copied to `scripts/` with the frames passed as an argument. Raw output is in `measured.txt`: approved | before (`../04_merged/match_t3.00.png`) | now at 3.0, 2.85 and 3.1 s.
- **No overall similarity percentage is claimed.** The numbers below are per-zone class shares and boxes, named by script.

## Images
- `original_vs_before_vs_now_3.00s_1536.png`: original | merged 3.0 s before this pass | match 3.0 s now, all 1536 px tall.
- `original_over_match_3.00s_blend50.png`, plus `_edges` and `_diff`: the original over the new 3.0 s frame (`tools/screen4/match_overlay.py`, vanishing points 0.528,0.532 and 0.53,0.53).
- `match_t3.00.png`, `match_t2.85.png`, `match_t3.10.png`: the page frames. `*_canvas.png` are the raw 3D canvas. `match_info.json` holds the cost: 207 / 209 / 202 draw calls, the same as the merged build.
- Close-ups, each original | before | now:
  - `checkpoint03_vortex_original_before_now.png`
  - `checkpoint05_objects_original_before_now.png`
  - `checkpoint06_upper_frame_original_before_now.png`
  - `centre_closeup_original_before_now.png`
- `rw_probe/rw_probe_t3.00.json`: the Art Director's `rw_probe`, extended in `scripts/rw_probe_corrected.cjs` to evaluate the corrected placement.
- `pixel_identity_vs_ba0c7f6c.txt`: the identity proof (see Checks below).

## What changed (all under `?s3=match`; `WebDemo/src/tunnel_r9_match.js` unless named)
1. **Centre, F1:** `mtPlace()` takes the colour map's place from the fragment's real screen position round the projected far axis (`uMatchVP`) inside 0.09-0.14 W. It is used by the walls and by the floor's `matchFloor()`; that one call is the only change in `tunnel_r9_match_water.js`. The tube's open far end draws the walls' map (`matchExit`), the core is tinted warm white, and the centre glow is a little softer (0.65 / 0.38), so the tight inner rings show. For the lead's phone fix, the screen radius is in widths of the 1:2 reference frame, `min(width, 0.5 * height)`; at 1:2 this is identical.
2. **Rings, F3 and checkpoint 03:**
   - concentric drum rings (band wobble 0.6 to 0.15; it had bent the bands into topographic blobs);
   - narrower, deeper cobalt gaps (#2646c4);
   - thin ice-blue ring lines broken into arcs by the relief (`bands.edge`, drawn just over the whites' cap);
   - pastel pink inner gaps down to the centre coin (`bands.inner`);
   - white splash bits where the relief crests (`bands.splash`);
   - the mid vortex's bright pale blue turned white (`midWhite`);
   - a stronger rainbow arc.
3. **Light colour, F4 and F5:**
   - electric blue pulled from 210 to the original's 217 degrees, with the cyan streaks kept (`royal`), and more relief crests turned cyan;
   - kept from the restored work: four-point stars removed and lime pulled toward peach in `derive_ref5_water.py` (textures regenerated).
4. **Housing, F6 (restored):** a thinner bezel (inner 2.42); its sides take the bevel and housing colours of the rim ramp.
5. **Objects, F7, F10 and checkpoint 05:**
   - **Big left coin:** on the original's place, 0.09 m higher, drawn 1.1x.
   - **Upper-left coin:** at its old distance, the original's place is 2.1 m up and 1.05 m outside the left lane, out of reach. It now stands 1.6 m nearer (4.6 m from the camera), 2.03 m up and 0.47 m outside the left lane, drawn 0.69x (`MATCH.coinScales`). That is 0.68 m from the body at the top of a jump (1.53 m), or 0.73 m with the coin's bob, inside the 0.82 m pick-up reach.
   - **Small coin by the centre coin:** 2 m further away (the original's is smaller).
   - **Kept from the restored work:** the gem's place and 0.89x size, the right coin, the first and second socks, and the far gem.
6. **Bug fixed:** the far-collectible fade (`MATCH.farFade`) never showed. It set the scale in `scene.onBeforeRender`, but three.js r170 has already worked out the world matrices by then, and `passBy()` sets the scale back to 1 every frame. The faded objects now get `updateMatrixWorld(true)`. This is what removed the coin and gem clutter beside the centre coin.

## The Art Director's fixes: verdicts at 3.0 s (approved / before / now)
| fix | verdict | numbers (script) |
|---|---|---|
| F1 centre | **fixed** at 3.0 s; just over at 2.85 / 3.1 s | Centre r < .06: warm 46.7 / 18.5 / **39.7%**, lavender 11.1 / 45.2 / **14.7%**, white 36.7 / 21.2 / 41.2%, median #f1d7db / #dac1f2 / #ebcfd4. At 2.85 / 3.1 s: warm 37.7 / 41.2%, lavender 15.1 / 15.3%. Mid vortex: lavender 12.1 / 19.2 / 11.0%, white 22.3 / 13.7 / 19.5% (`walls.py`). `rw_probe`: inside 0.09 W the corrected `rw` equals the true screen radius by construction. Cells at r .035-.06 have a median 0.058 (the old formula gave 0.076) and a core share of 0.65 (was 0). The rest are vertices just outside 0.06 in cells that straddle it. |
| F3 wall depth | **partly** | Upper-wall deep cobalt 3.9 / 1.2 / **3.9%**. Side walls 4.1 / 1.1 / **1.7%**: not met, likely because the original's side zone holds its right brush's blue tufts (ours are pink and white). Texture hp5 0.094 / 0.062 / **0.087**. Bands up / left / right: 8/10/7, then 6/4/7, now **6/8/8**. Band contrast: 0.184/0.167/0.201, then 0.126/0.242/0.175, now **0.180/0.240/0.206**. Up meets 0.17-0.20; right is 0.006 over; left is still high. At 3.1 s the up contrast is 0.128 (`walls.py`, `rings.py`). |
| F4 light colour | **partly** | Lime (hue 70-100) 29 / 783 / **11 px** (`palette.py`). Electric blue 43.0 / 51.4 / **44.6%**, median hue 217 / 220 / 217. Upper-wall azure 13.3 / 6.6 / **9.6%**: target 11 not met. |
| F5 sparkles | **partly** | Four-point stars are gone. Small sparkle (upper wall) 0.20 / 0.85 / **0.53%**: target 0.3 not met; what remains is short pieces of the ring lines and splash bits. Brightest 2%: #cae0ff S 0.27 / #e6e0f9 S 0.14 / **#cee2f9 S 0.19**. They are now the ring lines, as in the original, not bubble outlines. |
| F6 housing | **partly** | Rim thickness 0.019 / 0.032 / **0.019 H** (`rim.py`). Zone 1 lavender 45.5 / 41.6 / 43.9%: none added. Left strip x < .08 white 21.1 / 6.6 / **2.9%**: **not fixed**. The original's white there is soft white-pink fluff (a brush shape) and splash, not the wall; it needs a new element or Water & VFX's splash. |
| F7 gem and centre | **fixed** | Gem 0.271-0.374 x 0.489-0.529 / 0.254-0.369 x 0.510-0.561 / **0.270-0.373 x 0.490-0.536** (`objects.py`). Beside the centre coin there are now only the small coin (the original has one at 0.589, 0.574; ours is at about 0.60, 0.575) and the far sock above it (the original has it too). The centre coin reads about 0.016 W right of and 0.013 H below the original's (0.468-0.571 x 0.529-0.579); it was left there so the coin lines hidden behind it stay hidden. |
| F10 right coin and sock | **fixed** | Right coin 0.778-0.996 x 0.671-0.800 / 0.746-0.996 x 0.689-0.822 / **0.773-0.996 x 0.674-0.810** (`objects.py`). Sock, read off the grid: 0.645-0.84 x 0.555-0.665 / 0.635-0.83 x 0.583-0.695 / **0.647-0.825 x 0.556-0.668**. |

## The user's checkpoints (14:43 UTC evidence package)
- **03 Vortex geometry and depth: partly verified** (`checkpoint03_...png`, `centre_closeup_...png`).
  - Corrected: distinct concentric rings with deep cobalt gaps; tight pink and white inner rings leading to a vanishing point at (0.528, 0.531) against the original's (0.528, 0.532); a warm peach centre; no smooth open tube.
  - Remaining:
    - our rings are cleaner and smoother than the original's busy, turbulent rings;
    - their radii do not line up with the original's (wall band correlation -0.014, before -0.013, `match_overlay.py`), because ours flow outward over time;
    - the up-sector contrast drops at 3.1 s.
- **05 Coin / gem / sock composition: verified at 3.0 s** (`checkpoint05_...png`). The "huge left coin pair" is separated:
  - big coin 0.093-0.300 x 0.544-0.669 (original 0.085-0.301 x 0.544-0.660);
  - upper-left coin 0.092-0.209 x 0.438-0.504 (original 0.087-0.213 x 0.441-0.499), within reach as shown above;
  - gem, sock and right coin as in the F7 and F10 rows.
  - Remaining: the sock stands upright where the original's lies on its side.
- **06 Upper frame at 538 x 1076: partly** (`checkpoint06_...png`).
  - The rim's top edge at x 0.5 is at **0.209** (original 0.212); this pass did not move it.
  - The gap under the mission banner is wider because the banner is shorter: it ends at 0.175 (original 0.186). The gap is 0.034 H of flat lavender-blue, against the original's 0.026 H light cyan strip. That is the HUD and phone framing (the lead's); the 1:2 camera framing itself is on target.

## The user's fidelity brief (14:16 UTC): my parts
- **Priority 1, tunnel shape and depth:**
  - More ring and spiral structure: **corrected**.
  - Stronger cobalt depth between bands: **corrected** (upper wall 3.9%).
  - The warm glowing centre kept: **corrected**.
  - Deeper swirling vortex: **partly**. The rings flow outward and spiral one band per turn, but the swirl's turn is slow.
  - No smooth open tube: **partly**. The rings are distinct, but smoother than the original's.
- **Priority 3, objects:**
  - The original's arrangement, no oversized foreground coin (big coin 0.207 W against the original's 0.216; right coin 0.223 against 0.218), gem and socks placed, no clutter round the centre coin: **corrected**.
- **Priority 4, colour and finish:**
  - Deeper cobalt: **corrected**.
  - Turquoise: **partly** (azure 9.6% against 13.3%).
  - Warm centre highlights: **corrected**.
  - No lime patches: **corrected**.
  - No star sparkles: **corrected** for stars. Small specks are still 0.53% against 0.20%.

## Still different from the original (honest list)
- The walls are cleaner than the original's: fewer white splash bits and thin arcs, a lighter sky blue (upper-wall median #65acf6 against #5b99ef), and a fainter rainbow arc.
- The core glow is peach-orange behind the coin; the original's is whiter and yellower.
- The left edge lacks the original's white-pink fluff and splash (F6 left strip).
- The side walls have little deep cobalt.
- Small specks are 0.53% against 0.20%. Azure is 9.6% against 13.3%.
- The centre coin sits about 13 px (807-wide frame) right of and below the original's.
- The bubbles, the foam bank and the water round the character are Water & VFX's and were not touched.

## Checks
- **Gameplay** (`S3=match node tools/screen3/s3_func.cjs`): lanes 1 / 0 / 2, the jump (in the air), 12 coins, 1 gem and 2 socks collected in the tunnel run, no console errors.
- **Pixel identity** (`tools/models/game_eval.cjs` SHOT, raw canvas, seed 7, at Tap to Start and 2.85 s): the normal game, `splash` and `liquid` match the baseline bundle `ba0c7f6c9b02e9b538182cade4a923ab` exactly, with 0 differing pixels in all six frames (`pixel_identity_vs_ba0c7f6c.txt`).
- **Iterations:** 10 capture iterations (t1-t10). t10 (less boost on the ring lines, greyer splash bits) made the sparkle worse, so it was reverted to t9.
