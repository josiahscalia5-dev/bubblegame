# Screen 4 candidate `?s3=intunnel,swim2` (7 November 2026): NOT merged, for the user's review

**What changed and why.** Three small visual pieces from the measured reports (`52_diagnosis/`, `54_specialists/`), all gated
on `SWIM2_ON` (code: `WebDemo/src/tunnel_s4_swim2.js`):
1. `r3Swirl`, `r3Whirlpool` and `r3Bubbles` stay hidden. Their own updaters (`tunnel_r3.js:286/358/388`) turned them back on
   0.2 s after the tap, and that made the moving tunnel pale (lighting S1).
2. The face of `heroSwell` flows with her travel. Its one flow phase (`fl`, `tunnel_r8_liquid.js:736`) ran on the clock only, so
   the water touching her rode with her. It now also gains 0.5 per metre she swims, so the currents, crest pieces, rings and
   glints stream down the face and out along the bank. Shape, size and colours are unchanged.
3. R7's 12 px cap on spray droplets: no white cotton-ball piles in front of her. It eases in over her first 0.5-3 m, so the start
   view keeps its bubbles, and sparkles (particle kind 2) are not capped.

The landing dip (animation report) was left out: it needs a ride-height model and changes to her pose, which is not cheap.

**Files:** `WebDemo/src/tunnel_s4_swim2.js` (new); hooks in `game.js:6, 1599, 1652, 1656`, `tunnel_r7_hero.js:29, 298`,
`tunnel_r7_hero_water.js:31, 96, 175, 185` and `tunnel_r8_liquid.js:43, 726, 736`. `game.bundle.js` was rebuilt (md5 `1199348a`;
the committed bundle is `5bb24e28`).

**Evidence** (seed 7, no steering, 768 x 1536 canvas as in `53_swim`; clips on a Pixel 7 screen):
- `sheets/ORIGINAL_accepted_swim2_{start,T1.0,T2.0}.jpg`, with the full-resolution `frames/*/base_canvas.png`;
- `videos/clip_compare_ORIGINAL_accepted_swim2.mp4` (7 s, two swipes and a jump) and `videos/clip_key_moments_accepted_swim2.jpg`;
- `scripts/`: the `53_swim` / `52_diagnosis` scripts with this worktree's paths, and `gameplay.sh`.

**Proofs** (`proofs/`):
- (a) `identity/identity.txt`, committed against rebuilt bundle: `intunnel` (start, +1 s, +2 s), R9 (start, +1 s) and the
  normal game (start, +1 s) all **0 px**. `swim2_vs_accepted_pixels.txt`: the swim2 start frame is **0 px** from the accepted one.
- (b) `s3_func_compare.txt`: `intunnel` byte-identical to `53_swim`. For `swim2`, every gameplay field is identical; only the
  switch list, the hidden list (+3) and the draw calls (192 to 189) differ. `r2_func_compare.txt` (VW=135 VH=270): both
  byte-identical to `53_swim/gameplay/r2_func_intunnel.txt`.
- (c) `motion_trace_gameplay.txt`: 152 frames x 16 gameplay fields, **0 differences**. The clips' HUD coin count is one apart from
  the jump on: recorder timing noise (`53_swim/gameplay/coin_timing_check.md`).

**Measures** (support only, not a similarity score):
- `zone_water.md`, tunnel zone at +1 s (ORIGINAL / accepted / swim2): cobalt 14.6 / 10.7 / 15.2 %, turquoise 11.4 / 5.3 / 9.3,
  pale 8.3 / 22.1 / 7.5, white 5.8 / 15.6 / 7.9, saturation 0.55 / 0.46 / 0.57. At +2 s, pale 26.4 to 10.6.
- Foreground white at +1 s / +2 s: 28.8 / 34.1 to 20.6 / 24.1 % (ORIGINAL 22.3).
- `flow_metric.txt`, 2.1-2.95 s, at the contact strip: streaming 107 to **346 px/s** against a 166 px/s wobble.

**Judgement (mine; no art director run).** In motion it is closer to the ORIGINAL:
- the tunnel stays cobalt and turquoise, with readable rings and a clearer centre;
- the cotton-ball piles are gone;
- the water at her base streams past her, with no strobing between frames;
- she still sits on top of it: her lowest fur row moves by only 2-4 px.

What still differs:
- the swell keeps its footprint and moves with her; only its surface flows (not yet the water report's heap field);
- the ORIGINAL's lavender inner rings and washer bevel are missing while moving;
- the two cream bars in the upper corners (lighting S3) are still there;
- there are fewer bubbles near the centre than in the ORIGINAL;
- the landing still has the one-frame drop.
