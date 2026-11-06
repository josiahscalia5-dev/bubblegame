# Screen 4 water R7, `?s3=intunnel,water7` (6 November 2026, fifteenth session): THE WATER CANDIDATE, not merged

- **The change:** R6 (`../48_water_r6/`) with ONLY the drawing of the game's spray droplets changed. Every droplet of the
  game's particle system (`game.js` `Particles`, `fx`) is drawn no bigger than 12 px of the 1536 px canvas height
  (`WATER7.maxPx` in `WebDemo/src/tunnel_s4_bt.js`; a `uMaxPx` cap in the drop vertex shader, kept in step with the canvas on
  resize, so on a phone it is the same share of the screen). Emitters, counts, sizes, colours, alpha and random numbers are
  untouched: the same droplets fly in the same places.
- **Why (the diagnosis, `../48_water_r6/README.md`):** the moving frames were 33-38 % white in the band at her base (the
  original 18.6 %) while the water face alone is 20.6 %. Nearly all the extra white is round3's white spray droplets, whose
  drawn size grows as 1 / distance: the ones thrown towards the camera were 50-90 px matte white balls, the "cotton-ball"
  piles beside her. Caps tried at +1 s / +2 s: white 30.0 / 30.6 % at 30 px, 26.3 / 26.7 at 20 px, 23.4 / 23.5 at 12 px
  (no droplets at all: 21.4 / 21.4).
- **Frames:** `final/start|T1.0|T2.0/` (seed 7; the in-tunnel start view, +1 s and +2 s after the tap; bundle `5ae28f9f`).
- **Sheets:** `sheets/04_FULLRES_moving_1s.jpg`, `04_FULLRES_moving_2s.jpg` (ORIGINAL | ACCEPTED | R6 | R7 at full
  resolution, moving), `03_moving_closeup_x1.4.jpg`, `01_FULLRES_ORIGINAL_ACCEPTED_R6_NEWR7.jpg`, `02_closeup_water_x1.6.jpg`
  (the start view: only the small resting bubbles change, 644 px by the art director's count).
- **Measured (supporting only):**
  - Band at her base (`../44_water_material/diag/band.py`), +1 s: white 32.3 -> 22.2 %, saturated blue 12.1 -> 15.6 %,
    lavender 9.0 -> 10.4 % (original 18.6 / 19.6 / 15.3).
  - The art director's white share, y 1150-1400 (whole / left / right): +1 s R6 23.9 / 32.9 / 39.7 -> R7 16.8 / 22.6 / 22.9;
    +2 s R6 28.8 / 38.3 / 47.8 -> R7 18.9 / 25.4 / 26.8; accepted +2 s 27.2 / 38.6 / 44.0; original 14.9 / 21.4 / 15.5.
  - Region LPIPS, foreground water (`regions/regions.md`): start accepted 0.656 / R6 0.559 / R7 0.558; +1 s 0.679 / 0.649 /
    0.641; +2 s 0.647 / 0.602 / 0.586 (colour distance dE 7.0 / 7.5 / 4.6).
- **The art director:** R7 against R6 and against the accepted build, moving: clearly closer ("the matte white cotton-ball
  piles at both sides are gone ... the blue and lavender water now shows round her, as it does in the original"); at the
  start about the same as R6, clearly closer than the accepted build. "R7 should replace R6 as THE candidate."
  - Caveats: the near flecks are now all about 12 px, an even dot field on the right at +1 s; the cap is on the whole
    particle material, so the coin-pickup sparkle, the Bubble Blast burst and the round3 tunnel sparkles are drawn smaller
    too (the mechanics are unchanged). At +2 s the large pink four-point sparkle crosses over her body are gone.
  - Crops: `art_director/`.
- **Proofs:** R7's +1 s and +2 s frames are 0 differing pixels from the 12 px cap test (`../48_water_r6/diag/T*_drops/`);
  R6 (+1 s) and the accepted `?s3=intunnel` (start and +1 s) are 0 differing pixels on the new bundle (`identity/`); no
  console errors.
- **Videos** (Pixel 7 screen, 10 s, seed 7, real pointer input; `scripts/record_videos.sh`): `videos/water7_straight.mp4`,
  `water7_steering.mp4`, the accepted build's `accepted_straight.mp4`, `accepted_steering.mp4`, and side by side
  `compare_straight_original_accepted_R7.mp4`, `compare_steering_original_accepted_R7.mp4` (`scripts/compare_video.sh`).
  - Both runs have the same positions, lanes and hearts in every frame; the coin count differs from frame 82 by one edge
    coin, the recorder's known inexactness (`../35_step7_bubble_veil/videos/determinism/`); the deterministic tests below
    are identical.
- **Gameplay tests** (`scripts/gameplay.sh`, bundle `5ae28f9f`): `gameplay/s3_func_water7.txt` is identical to the
  accepted build's `s3_func_intunnel.txt` apart from the switch name (settings, Tap to Start, real swipes, jump, the ride,
  keyboard start, console errors, draw calls and triangles); `r2_func_water7.txt` (hearts, knock-out, restart) is identical
  to `r2_func_intunnel.txt`.

## A defect found in the steering video, in every water candidate since R2, and fixed in R7

- **What:** when she steers into the left lane, a dark grey "fin" appears at the lower left of the screen
  (`water7_steering.mp4` from about 4 s; also in the fourteenth session's `../44_water_material/videos/water2_steering.mp4`
  at 4 s). The accepted build does not have it.
- **The cause:** the water face samples the texture left of its edge once the camera swings, and the lookup clamps to the
  edge texel. The texture's first 4 columns are the original screenshot's own dark frame border (column 0 RGB 19 / 22 / 36,
  column 1 57 / 61 / 73), so the clamp smears dark grey across the face. The same clamping of the last rows draws the
  vertical streaks along the bottom 30 px of the start view (`../48_water_r6/diag/uv/uv_start.png`, red).
- **The fix (`WATER7.mirror`):** beyond the texture's edges the original's water is mirrored back in (skipping the 4-px
  border) instead of the edge texel being smeared. The older candidates' shader text is byte-identical (checked by
  emitting it from the old and new files); the R7 frames the art director reviewed are reproduced by the tune
  `{"water2": {"mirror": null}}` (`mirror_fix/`).
- **Next (the art director's ranking):** 1. the contact edge (`../50_contact_edge/`, R8); 2. varied fleck sizes (the cap
  scaled with each droplet's own size); 3. the softness of the filled areas; 4. the remaining paleness.
