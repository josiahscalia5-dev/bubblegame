# Round 9 focused pass, Tunnel & Lighting (5 November 2026)

- **Target:** the ORIGINAL approved Screen 4 only, `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`.
- **Brief:** `Design/ReferencePacks/2026-11-05_Screen4_Focused_Correction_Pass_Brief/README.md`, my items 3 (the character's framing), 4 (the sock), 1 (the walls, my part) and 5 (composition).
- **Build:** `?s3=match` only. Worktree branch `worktree-agent-a1aff7a0d4ce10e34`, started from `9a95c06` (whose `WebDemo/` equals `b91e952`). Framing checkpoint `4029424`. Final `game.bundle.js` md5 `17101d7aa470be995b455c30017da338`; baseline `811c697764f610a4fc0f39534cfc3780`.
- **Captures:** real seeded gameplay, seed 7, DPR 1.5, HUD on, `WebDemo/tools/screen4/liquid_shots.cjs`; 3.0 s is the main moment, 2.85 and 3.1 s are checks.
- **Measurements:** `measured.txt`, written by `scripts/measure_all.py`. It holds approved | before (`b91e952`) | now at 3.0, 2.85 and 3.1 s, and names the script for each block. Scene-side numbers come from `scripts/stage_probe.cjs` (`probe_*.json`).
- **No overall similarity percentage is claimed.**

## Images
- `original_vs_before_vs_now_3.00s_1536.png`: original | before (`b91e952`) | now, all 1536 px tall.
- `original_over_match_3.00s_blend50.png`, plus `_edges` and `_diff`: the original over the new 3.0 s frame (`tools/screen4/match_overlay.py`, vanishing points 0.528,0.532 and 0.527,0.53).
- Close-ups, each original | before | now:
  - `closeup_character_original_before_now.jpg`
  - `closeup_sock_original_before_now.jpg`
  - `closeup_tunnel_walls_original_before_now.jpg`
- `closeup_sock_original_now_2.85_3.00_3.10.jpg`: the sock's tilt through the acceptance window.
- `pixel7_original_vs_before_vs_now_3.00s.jpg` and `pixel7_match_3.00s.png`: Pixel 7, 412 x 839, `10_phone_fix/scripts/phone_shot.cjs`.
- `match_t2.85.png`, `match_t3.00.png`, `match_t3.10.png`, `match_t3.00_canvas.png`, `before_b91e952_t3.00.png`, `match_info.json`.
  - Cost: 206 / 205 / 201 draw calls, the same as before this pass. The software-rendering times in the JSON are not comparable: another agent's browser was sharing the CPUs.

## What changed (`WebDemo/src/tunnel_r9_match.js`, plus one gated line in `game.js`)
1. **The character's framing (checkpoint `4029424`).** The camera moves `MATCH_CAM` (0.44 m nearer, 0.10 m lower, 0.006 m right) together with its aim point.
   - The view's direction and the vanishing point are unchanged. `game.js` gets a gated `lookZ`.
   - The character draws 1.2x larger round its dome top, which stays at y 0.69-0.70.
   - Everything staged for the camera moves with it, so it keeps its screen box: the rim and housing, the collar's start, the hero bubbles, the framing brushes, and the collectibles near the drum. The collectibles were re-solved with the water heights through `stage_probe.cjs` ITEMS / DELTA.
   - The rim ramp inside the rim (the tube's top wall and the collar) now takes each point's real screen rho, projected through the rim's plane (`mtRimRho`). Before, it used two constants worked out for one camera distance.
   - Five oversized near hero bubbles now have the original's sizes and places (`BUBBLE_FIX`). Each bubble's drift seed is kept (`keepSeed`): the bubble shader seeds the drift from the world position.
2. **The sock's pose (`MATCH.sockPose`).**
   - Roll -20, yaw -40, pitch 25 degrees round the model's own centre, inside the game's animated holder, so the bob and sway still play. No new object is created.
   - The sock is drawn at 0.74 (was 0.85) and moved 0.037 m right, so it keeps the original's box.
   - The second sock moved 0.06 m right and 0.1 m down, to stay hidden behind it.
3. **The walls.**
   - Thin streaks along the rings (`walls.streak`): the relief sampled 7x finer across the rings, pushed toward lighter or darker electric blue.
   - A slight edge irregularity (`walls.turb`). At full strength it shattered the rings into shards, so it was kept small.
   - The pale mid-blues are saturated (`walls.deepen`), and the hue is pulled to the original's royal blue (`royal` 1.0).
   - Stronger band glow and gaps.
   - The rainbow arc moved out and narrowed (rw 0.225 / 0.036 to 0.262 / 0.022), so it sits where the original's warm band is.
   - A pastel inner ring at rw 0.117 (`walls.innerRing`).
   - The mid-vortex whitening is kept inside rw 0.155.
   - The floor's settings (`lift`, `sat`, `glint`, `core`) are unchanged: the walls have their own `liftWall`.

## Verdicts (approved / before / now at 3.0 s; scripts named)
| item | verdict | numbers |
|---|---|---|
| 3 character size | **partly** | See the details below the table. |
| 3 character place | **fixed** | Dome top (any-pink mask) 0.696 / 0.704 / **0.700**. Dome centre at y 0.72-0.76 about 0.485-0.50 / 0.50 / **0.48** (`char_rows.py`). Vanishing point 0.528,0.532 / 0.528,0.531 / **0.527,0.530**. Rim top at x 0.5: 0.212 / 0.2132 / **0.2119** (`stage_probe.cjs`). |
| 3 on top of the water | **partly** | The camera change does not sink her. Her lower body is now more visible above the bank, but the base still sits behind the HUD's bottom buttons (y 0.84 and below). The foam round her is Water & VFX's. |
| collectibles kept | **fixed** | Each within 0.005 of before (`objects.py`). Big left coin 0.085-0.301 x 0.544-0.660 / now **0.088-0.305 x 0.542-0.668**. Upper-left 0.087-0.213 x 0.441-0.499 / **0.088-0.213 x 0.436-0.502**. Gem 0.271-0.374 x 0.489-0.529 / **0.269-0.372 x 0.489-0.535**. Right coin 0.778-0.996 x 0.671-0.800 / **0.773-0.996 x 0.672-0.801**. |
| 4 sock tilt | **fixed** | Cuff on top tilted clockwise, face level toward the viewer, toe down-left. It holds at 2.85, 3.0 and 3.1 s (close-up). Mesh box: original 0.65-0.84 x 0.552-0.66 (read at 3x zoom); before 0.643-0.825 x 0.552-0.664; **now 0.649-0.845 x 0.554-0.658** (`stage_probe.cjs`). |
| 1 near bubbles too big | **fixed** | See the details below the table. |
| 1 walls: deeper saturated blue | **partly** | See the details below the table. |
| 1 walls: less pastel peach band | **fixed** | Warm share by radius, upper sector (`warm_radius.py`): the original peaks at rw 0.26 (24 / 60 / 36% at 0.24 / 0.26 / 0.28); before at 0.22 (82%); **now at 0.24-0.26 (56 / 51 / 26%)**. |
| 1 walls: energetic, irregular, turbulent | **partly / not by the measures** | See the details below the table. |
| 1 warm centre kept, peach-white | **kept** | Centre r < 0.06: warm 46.7 / 37.2 / 37.0%, median #f1d7db / #ebd2d6 / #edd4d7. |
| 5 composition | **partly** | See "Empty areas" below. |

**3 character size** (measured on a colour-independent any-pink silhouette, `character.py` and `char_rows.py`)
- Mesh footprint (`stage_probe.cjs`): 0.536 W wide before, **0.648 W now**.
- Dome width at y 0.72 / 0.74 / 0.76: original 0.27 / 0.34 / 0.39, before 0.20 / 0.27 / 0.32, **now 0.22 / 0.30 / 0.36**.
- The side tufts now reach x 0.16-0.80, against the original's 0.21-0.73. Ours are wider: the model's dome is flatter and its tufts are larger than the original's, so no single scale fits both.
- The lead's saturated-pink share is 4.11 / 2.20 / **2.97%**. It stays under the original's because our fur is a lighter pink: that is the material, not the framing.
- The swimmer zone's pink is now over the original's: 30.4 / 30.4 / **43.6%** (`zones.py`). In the original, foam covers her lower body.

**1 near bubbles too big** (diameter in widths, `stage_probe.cjs`)
| bubble | original | before | now |
|---|---|---|---|
| upper-left | 0.105 | 0.121 | **0.104** |
| mid-left | 0.09 | 0.096 | **0.088** |
| right edge | 0.076 | 0.112 | **0.076** |
| lower-left, larger | 0.137 | 0.156 | **0.136** |
| lower-left, smaller | 0.08 | 0.093 | **0.079** |

Each now sits within 0.01 of the original's centre.

**1 walls: deeper saturated blue** (upper wall, `walls.py`)
| measure | original | before | now |
|---|---|---|---|
| pale blue | 11.2% | 20.1% | **16.7%** |
| azure | 13.3% | 8.9% | **11.5%** |
| electric blue | 43.0% | 42.8% | **39.5%** |
| deep cobalt | 3.9% | 3.7% | **8.2% (overshoots)** |
| median | #5b99ef | #6eaff6 | **#60aef8** |

- Mid vortex pale blue: 17.9 / 31.8 / **26.2%**.
- Mid vortex lavender got worse: 12.1 / 11.6 / **15.3%**.

**1 walls: energetic, irregular, turbulent**
- To the eye, the rings are streakier and busier than before (the walls close-up).
- But the measures did not follow (`rings.py`):

| measure, up / left / right | original | before | now |
|---|---|---|---|
| band contrast | 0.184 / 0.167 / 0.201 | 0.164 / 0.218 / 0.200 | **0.123 / 0.171 / 0.151** |
| along-ring brightness std | 0.148 / 0.118 / 0.169 | 0.119 / 0.080 / 0.109 | **0.109 / 0.081 / 0.098** |

- The left contrast is now right, but up and right are worse, and the along-ring std is unchanged.
- The original's busy look is mostly white splash flecks and bubbles in the rings, which are Water & VFX's.

### Empty areas and what still differs
- **Bottom 16% (y 0.84-1.0):**
  - our HUD's Bubble Blast / Turbo Spin buttons and hint panel start at y 0.84; the original's start at y 0.90;
  - they cover the foam bank and the character's base, which is the main reason ours reads less full at the bottom;
  - this is the HUD layout (the lead's), not the camera.
- **Left edge (x < 0.08, y 0.40-0.76):** the original has soft pink-white fluff and splash there (white 21.1%); ours shows the blue wall (white 2.3%, `strips.py`). A framing element is missing; not added in this pass.
- **The tunnel's white flecks and bubbles, and the dense white-aqua foam bank:** fewer than the original's. These are Water & VFX's, in progress in parallel.
- **The walls:**
  - still wavier and smoother along the rings than the original's;
  - deep cobalt overshoots (8.2% against 3.9%);
  - the up and right band contrast is low;
  - the pastel inner ring (rw 0.117) is pink-white at the top, where the original's is pinker: warm share at rw 0.12 is 0% against 58%.
- **The character:** a larger dome, but a different silhouette: wider tufts, narrower dome top. Its pink is lighter.
- **The upper frame:**
  - rim warm pixels 1.12 / 1.26 / 0.84%; its glint rotates with time (`rim.py`);
  - the gap under the mission banner is the HUD's, unchanged.

## Checks
- **Pixel identity** (`scripts/identity.cjs` + `identity_compare.py`, `tools/models/game_eval.cjs` SHOT, raw canvas, seed 7, Tap to Start and 2.85 s): the normal game, `splash` and `liquid` match the baseline bundle `811c6977` exactly, 0 differing pixels in all six frames (`pixel_identity_vs_811c6977.txt`).
- **Gameplay** (`S3=match node tools/screen3/s3_func.cjs`, `gameplay_s3_func_match.txt`): lanes 1 / 0 / 2, the jump (in the air), 12 coins, 1 gem and 2 socks collected in the tunnel, no console errors. The same at the checkpoint (`gameplay_s3_func_checkpoint.txt`).
- **Pixel 7** (`pixel7_match_3.00s.png`): the phone framing follows the new camera. The rim, vanishing point and larger character carry over; no console errors.
- **Iterations:** about 20 browser renders at 3.0 s, over the bound of about 15 (counted at the end):
  - t1-t2: framing and bubbles;
  - six sock poses;
  - t3: turbulence, rejected (shattered rings);
  - t4: streaks;
  - eight wall variants (wA-wH);
  - the final capture.
