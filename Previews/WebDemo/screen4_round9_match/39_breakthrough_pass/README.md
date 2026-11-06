# Screen 4 breakthrough pass (`?s3=bt`; 6 November 2026, fourteenth session)

- **Authority:** the ORIGINAL approved Screen 4 only
  (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
- **The user's brief:** `Design/ReferencePacks/2026-11-06_Screen4_Breakthrough_Kit_from_user/05_SOURCE_SPECIFIC_EXECUTION_PLAN.md`
  and the 11:33 UTC message (one major, visible improvement in the water and her water contact, the tunnel, and the
  objects; no more than two controlled candidates per issue). Then the user's message of about 12:20 UTC: verify that the
  candidate uses all of step 8, compare at the same camera, seed and moment, and revert it unless clearly closer.
- **Before:** step 8, `?s3=focus` (commit `7b7a9e2`, bundle `e6cd9334`). **After:** `?s3=bt`, a NEW test switch: `focus`
  plus this pass. `focus`, `match`, the normal game and every older switch are unchanged (proof below).
- **Status: for the user's review.** It is not merged into `focus` or the normal game.
  - Rollback: do not open `?s3=bt`, or revert the commit.

## Outcome in one line

| item | result |
|---|---|
| brushes | **kept: closer.** At 4-6 s they stay at the sides and the tunnel shows |
| sock's toe | **kept: closer.** Blue, as the original's |
| water and her contact | two candidates, **both rejected** and reverted. Stopped by the user's gate; a different technique is proposed below |
| sock's stripes | **rejected** and reverted (greyish; the original's are violet) |
| tunnel | **unchanged from step 8**. The diagnosis below says what limits it |

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
     -1.4, lightness +1.2.
   - Then come the grade pass and the output pass (Neutral tone mapping). The walls' shader already inverts both
     (`mtUndisplay`).
   - Spector's MCP server cannot be added to a running session, so the same Spector library was driven through
     Playwright. It works here (SwiftShader).
   - It pointed at the right layers. The deciding evidence came from the same-frame ablations below.
2. **Same-frame ablations** (`layer_diag.cjs`, `diagnosis/`):
   - bloom off changes little by eye (`step8_T3.0_bloom_off.png`);
   - with `heroSwell` hidden she is a round dome (`step8_T3.0_heroSwell_hidden.png`). Step 8's waterline height matches
     the original (her pink ends at 0.831 H, the original's at 0.833 H). But the original's dome narrows into bubbly
     lumps there, where the swell cuts her straight at her widest point.
3. **The water's palette** (k-means, y 0.80-0.95 H, the character and coin left out):

   | | colours (share of the zone) |
   |---|---|
   | original | `#e5effa` 30 %, `#acd4f5` 24 %, `#53aff0` 18 %, `#8fa6e9` 17 %, `#178ee8` 9 % |
   | step 8 | `#a3d4f5` 28 %, `#8ac6f5` 18 %, `#71b7f4` 18 %, `#edeff6` 13 %, `#4e95ef` 13 % |

4. **Moving moments** (4, 5, 6 s; `before/`): the hazard brushes (radius 1.0 m) fill 35-45 % of the width each and bury the
   tunnel.
   - Their hit test is the lane alone (`tunnel_s4.js`: within 1.25 m along the path and `side * x > 0.33`), so their drawn
     size can shrink with no gameplay change.
5. **The sock:** step 8's toe is purple; the original's is blue.

## What `bt` changes (`WebDemo/src/tunnel_s4_bt.js`; code gated on `BT_ON`)

1. **The brushes frame the sides:**
   - each hazard brush is drawn at 0.62 of its size, scaled round the point of its rim 45 degrees down toward the middle
     lane, so its edge in the outer lane stays where it was (`tunnel_s4.js`);
   - the high wall brushes (scenery) are drawn at 0.66;
   - the knock is unchanged.
2. **The sock's toe is blue** (`btSock` in `tunnel_r9_match.js`): its purple texels below the model's middle become
   `#2f55d8`. The cuff's violet stripes and the white knit are kept. The one shared material is changed in place (no new
   object, no UUID from the seeded `Math.random`).
3. **The switch:** `?s3=bt` hands `focus` on to every switch module (`game.js` imports `tunnel_s4_bt.js` first). Without
   `bt` nothing happens.

## The rejected candidates (`rejected_water_candidates/`, `cand2/`, `diagnosis/`)

Both were for the water round her.
- **Candidate 1:** the swell's crest lowered 0.36 m in front of her. She shows down to 0.915 H: too tall.
  - Its first render showed the OLD tunnel, because `bt` did not yet hand `focus` on to the other modules (fixed). Those
    frames were discarded.
- **Candidate 2** (the user saw it as the second comparison):
  - the crest lowered 0.20 m, so her pink ends at 0.867 H;
  - the swell face two-tone (`#178ee8` / `#53aff0` / `#acd4f5`);
  - bubbly white-aqua froth patches in place of the white comma arcs;
  - lilac sock stripes.
- **The art director's review** (read-only agent, at 3.0 and 4-6 s): mixed, not clearly closer.
  - the brushes: closer;
  - the sock's toe: closer (`#4a6af5` against the original's `#3f56e1`; step 8 `#8033e4`);
  - the swell lowered: further. She reads as a taller, squarer pink block (visible pink 67k px; the original 44k, step 8
    50k);
  - the froth: further. A white strip under her (white at y 1300-1380: 53 %; the original 22 %, step 8 14 %);
  - the stripes: further (greyish `#8f7fdc` against the original's violet `#9b58de`; step 8 `#873be9`).
- **By the user's rule** the water and stripe changes were reverted; their values are kept, not applied, as `BT_REJECTED`.

### Why the water could not get closer this way, and the different technique proposed

- **The limit is her model's silhouette.** The original shows a low, wide dome whose base narrows into bubbles. Ours is
  taller and squarer below its widest point, so lowering the water only shows more of the wrong shape. Reshaping her is the
  character phase the user postponed (C1). Step 8's waterline height is right.
- **A shader-made froth on the swell's face reads as a flat white strip.** The original's white at her base is
  three-dimensional: separate translucent lavender-blue bubble domes with white rims, and blue water between them.
- **Proposal (NOT started; needs the user's go):** keep step 8's waterline and add real 3D bubble domes along her base:
  - an instanced soap-film sphere cluster, 0.06-0.15 m, in front of and beside her body, lavender-tinted with white rim
    highlights, as the original's;
  - riding on the swell with the existing frame uniforms, so they move with her swerves and jumps;
  - no water lowering, no white strip.
  - This changes geometry, not shader numbers.

## Proof that `bt` is step 8 plus only these changes

| test | result |
|---|---|
| `?s3=focus` on the `bt` build vs step 8's bundle, raw canvas, 3.0 s and 4.0 s | **0 differing pixels** |
| `?s3=bt` with every change set to zero (a scratch copy, candidate 2's code) vs step 8, 3.0 s and 4.0 s | **0 differing pixels** |
| the step 8 bundle re-rendered vs the before captures | 0 differing pixels (deterministic) |
| the same textures (`tunnel_rings_fill.png` and the six others), the same 244 objects, the same game state | yes |
| `?s3=bt` (final) vs step 8 at 3.0 s | 2.35 % of the frame differs: the sock's toe and the far brushes; the tunnel, character, water, coins, gem and interface identical |

- A bug was found and fixed on the way: the brush lines were first inserted between an `if` and its `else`, which moved
  plain `focus`'s hazard brushes (422,563 pixels at 4.0 s). A file-by-file bisect found it.

## Sheets (`sheets/`)

- `01_FULLRES_original_current_new_T3.0.jpg`: ORIGINAL | CURRENT (step 8) | NEW (`bt`), full resolution, 3.0 s;
- `02_closeup_sock_T3.0.jpg`;
- `03_closeup_tunnel_T3.0.jpg`: unchanged, by design;
- `04_closeup_water_T3.0_unchanged.jpg`: the water is step 8's, the candidates having been rejected;
- `05_moving_T4.0/5.0/6.0_original_current_new.jpg`: the brushes while she moves;
- `06_moving_current_vs_new_T4_T5_T6.jpg`.

Full-resolution frames: `before/step8_T*/` and `cand3/bt_T*/` (`base_page.png` with the HUD, `base_canvas.png` the raw
3D). The final `bt` build differs from step 8 by 41.7 % of the frame at 4.0 s, 35.5 % at 5.0 s and 44.8 % at 6.0 s (the
brushes, and what they no longer cover).

## Tests (the final `bt` build, bundle `74f5c844`)

| test | result | file |
|---|---|---|
| identity: the normal game, the ten older switches, `match`, `match,nofoam`, `focus` (45 raw-canvas frames), step 8's bundle vs this one | **all identical, 0 differing pixels** | `identity_proof_bt.txt` |
| gameplay `?s3=bt` `s3_func` (lanes, jump, spin, pick-ups) | identical to step 8's `focus` report but for the switch's name: 12 coins, 1 gem, 2 socks, 135 draw calls | `gameplay/s3_func_bt.txt` |
| gameplay `?s3=bt` `r2_func` (hearts, brush knocks, pause, Bubble Blast, Turbo Spin) | identical to step 8's: 5 knocks, hearts 4 -> 0, the restart at 5 Full | `gameplay/r2_func_bt.txt` |
| gameplay, the normal game, `s3_func` | identical to step 8's | `gameplay/s3_func_normal.txt` |
| stills 3, 4, 5, 6 s (768 x 1536) | captured, no console errors | `cand3/` |
| videos, Pixel 7, 10 s, straight and steering | recorded, no console errors | `videos/bt_straight.mp4`, `videos/bt_steering.mp4` |
| 3-panel videos ORIGINAL (still) / step 8 / bt, the same scripted inputs | made | `videos/compare_straight_original_step8_bt_10s.mp4`, `videos/compare_steering_original_step8_bt_10s.mp4` |

- **The straight run's pick-ups:** the path is the same at every frame, but the phone recorder is not frame-exact (found
  at step 7), so a few pick-up moments shift by a frame. That is why its log says 2 socks where step 8's run said 1; step 7's
  two straight runs of one build both said 2. The frame-exact gameplay checks above are identical to step 8's.

## Corrected / remaining (against the original)

- [x] Brushes frame the sides while she moves (4-6 s), the tunnel's rings and centre visible between them; knocks
      unchanged.
- [x] The sock's toe blue.
- [x] `?s3=bt` is step 8 plus only these (proven); the first broken `bt` render and the duplicate setting fixed.
- [ ] Her water contact: step 8's kept. Two candidates rejected; 3D bubble domes at her base proposed (above). Waiting for
      the user's go.
- [ ] The tunnel walls still read more pastel and lavender than the original's saturated cobalt, with less of its glowing
      centre (the art director's item 2: `heroWalls`, the hero grade, the porthole's inner face).
- [ ] The floor behind and beside her: white diagonal streaks over pale blue (`lqFloor`'s streaks), where the original has
      saturated blue water with round bubbles.
- [ ] The character's silhouette (her model: the postponed character phase).
- [ ] The sock's pose and size, the coins' warmth, the interface items (see `../38_checklist_to_match_original/`).

**By eye, honestly:** at 3.0 s `bt` is step 8 with the original's blue sock toe, a small step. The visible gain is while
playing: the brushes no longer bury the tunnel. This is not the 8/10 the user asked for. The remaining large gaps are the
water at her base, the walls' pastel, and the floor's streaks.
