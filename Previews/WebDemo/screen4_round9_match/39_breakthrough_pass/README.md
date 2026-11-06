# Screen 4 breakthrough pass, candidate 2 (`?s3=bt`; 6 November 2026, fourteenth session)

- **Authority:** the ORIGINAL approved Screen 4 only
  (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
- **The user's brief:** `Design/ReferencePacks/2026-11-06_Screen4_Breakthrough_Kit_from_user/05_SOURCE_SPECIFIC_EXECUTION_PLAN.md`
  and the 11:33 UTC message: one major, visible improvement. The three areas are the foreground water and her water contact,
  the whole tunnel's composition, and the brushes, coins, gem and sock. No more than two controlled candidates per issue.
- **Before:** step 8, `?s3=focus` (commit `7b7a9e2`, bundle `e6cd9334`). **After:** `?s3=bt`, a NEW test switch: `focus`
  plus this pass. `focus`, `match`, the normal game and every older switch are unchanged (proof below).
- **Status: a candidate for the user's review.** It is not merged into `focus` or the normal game.
  - Rollback: do not open `?s3=bt`, or revert the commit.

## What the tools found (seed 7, 3.0 s after the tap, no steering, 768 x 1536)

1. **Spector.js** (the official open-source WebGL debugger, npm `spectorjs` 0.9.33, injected into the real game page by
   `WebDemo/tools/screen4/spector_capture.cjs`; table by `spector_report.py`, `spector/drawcalls_step8_T3.0.tsv`, after-draw
   thumbnails `spector/after_draw_*.png`).
   - The capture holds 209 draw calls into 14 framebuffers. The scene draws into a 768 x 1536 RGBA16F target.
   - `heroWalls` (draw 150) gives the tunnel its colour: +7.2 saturation in the tunnel zone. It draws step 8's
     `tunnel_rings_fill.png`.
   - `lqFloor` (154) is transparent, SRC_ALPHA blending, and changes 23 % of the frame.
   - `heroSwell` (185), the water round her, is transparent and covers 19 % of the frame.
   - The bloom chain (10 targets from 384 x 768 down to 24 x 48) is added back over 28 % of the frame: tunnel saturation
     -1.4, lightness +1.2. Then come the grade pass and the output pass (Neutral tone mapping). The walls' shader already
     inverts the last two (`mtUndisplay`).
   - Spector's MCP server cannot be added to a running session, so the same Spector library was driven through Playwright.
     It works here (SwiftShader).
2. **Same-frame ablations** (`layer_diag.cjs`, `diagnosis/`):
   - bloom off changes little by eye (`step8_T3.0_bloom_off.png`);
   - **with `heroSwell` hidden, she is the original's round fluffy dome** (`step8_T3.0_heroSwell_hidden.png`). Her flat
     silhouette was not her model: the swell rose in front of her as a wall of water and cut her off straight at her widest
     point. (Her pink ends at 0.831 H in the middle, the original's at 0.833, but the original's dome narrows into the froth
     below its widest point.)
3. **The water's palette** (k-means, y 0.80-0.95 H, the character and coin left out):

   | | colours (share of the zone) |
   |---|---|
   | original | `#e5effa` 30 %, `#acd4f5` 24 %, `#53aff0` 18 %, `#8fa6e9` 17 %, `#178ee8` 9 % |
   | step 8 | `#a3d4f5` 28 %, `#8ac6f5` 18 %, `#71b7f4` 18 %, `#edeff6` 13 %, `#4e95ef` 13 % |

   The original is two-tone: white froth, vivid azure, lavender bubbles. Step 8 is mostly one pale mid-blue, with the swell
   face's white comma arcs (`lace`) on it.
4. **Moving moments** (4, 5, 6 s; `before/`): the hazard brushes (radius 1.0 m) fill 35-45 % of the width each and bury the
   tunnel.
   - Their hit test is the lane alone (`tunnel_s4.js`: within 1.25 m along the path and `side * x > 0.33`), so their drawn
     size can shrink with no gameplay change.
5. **The sock:** purple toe and stripes; the original's is white with lilac stripes and a blue toe.

## The change (`WebDemo/src/tunnel_s4_bt.js` settings; code gated on `BT_ON`)

1. **She sits on top of the water:** the swell's crest in front of her lowered 0.20 m (focus 0.08), fully within 26 degrees
   of straight ahead, none beyond 56 (`BT.water.swellFront`).
   - Live tunes at 3.0 s, base of her pink in the middle: 0.36 m gives 0.915 H (too tall, rejected), 0.26 m gives 0.885 H,
     **0.20 m gives 0.867 H**. The original is 0.833 H, with its froth over her base. Sheets in `diagnosis/`.
2. **The water two-tone, with bubbly white-aqua froth:**
   - the swell face's currents are now vivid azure `#178ee8` / `#53aff0` and light sky `#acd4f5`, taken from the original's
     palette (focus: `#3f8cf0` / `#78c4f8` / `#acdffc`);
   - the white comma arcs are off;
   - new froth patches (`btFrothGLSL`, `tunnel_r9_match_water.js`): two octaves of the liquid's own noise flowing down the
     face, white inside with small round light-sky bubble holes and glints, aqua at the edges, thickest along the crest;
   - bigger, lilac-tinted bubble rings.
3. **The brushes frame the sides:**
   - each hazard brush is drawn at 0.62 of its size, scaled round the point of its rim 45 degrees down toward the middle
     lane, so its edge in the outer lane stays where it was;
   - the high wall brushes (scenery) are drawn at 0.66;
   - the knock (lane and distance) is unchanged.
4. **The sock** (`btSock` in `tunnel_r9_match.js`): purple texels by hue become the toe blue `#2f55d8` below the model's
   middle and lilac `#a99cf0` above it. The white knit is kept. The one shared material is changed in place (no new object,
   no UUID from the seeded `Math.random`).
5. **The switch:** `?s3=bt` hands `focus` on to every switch module (`game.js` imports `tunnel_s4_bt.js` first). Without
   `bt` nothing happens.

## Proof that `bt` is step 8 plus only these changes

| test | result |
|---|---|
| `?s3=focus` on the new bundle vs step 8's bundle, 3.0 s and 4.0 s, raw canvas | **0 differing pixels** |
| `?s3=bt` with every change set to zero (a scratch copy) vs step 8, 3.0 s and 4.0 s | **0 differing pixels** |
| the step 8 bundle re-rendered vs the before captures | 0 differing pixels (deterministic) |
| the same textures in both (`tunnel_rings_fill.png` and the six others), the same 244 objects, the same game state | yes |

- A bug was found and fixed on the way: the brush lines were first inserted between an `if` and its `else`. That moved
  plain `focus`'s hazard brushes (422,563 pixels at 4.0 s), found by a file-by-file bisect (`proof/`).
- The first `bt` renders, before the switch handed `focus` on, showed the old tunnel. They were discarded and are not in
  this candidate.

## Result

Sheets in `sheets/`:
- `01_original_current_new_T3.0.jpg`: ORIGINAL | CURRENT (step 8) | NEW at 3.0 s;
- `02_closeup_water_T3.0.jpg`: the water and her contact;
- `03_closeup_sock_T3.0.jpg`: the sock;
- `04_moving_current_vs_new_T4_T5_T6.jpg`: the moving moments.

Full-resolution frames: `before/step8_T*/` and `cand2/bt_T*/` (`base_page.png` with the HUD, `base_canvas.png` the raw 3D).

| seed 7, 3.0 s | original | step 8 | bt |
|---|---|---|---|
| her pink: top / base in the middle (H) | 0.700 / 0.833 | 0.697 / 0.831 | 0.697 / 0.867 |
| her pink area (share of the frame) | 4.4 % | 3.9 % | 5.3 % |

TESTS_PLACEHOLDER
