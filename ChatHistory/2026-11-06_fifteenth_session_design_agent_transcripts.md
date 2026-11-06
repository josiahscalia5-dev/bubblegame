# Fifteenth session (6 November): Screen 4 water R6, design agents

Each agent's brief and messages from the lead, its notes, one line per tool step (tool output left out) and its final report. The work itself is in the commits on this branch. Keys and passwords are replaced with [REDACTED].


---

## Game Art Director: Art director verdict on R6 (started 18:55 UTC)

**Lead → agent** (18:55 UTC):

You are reviewing Bubble Wash Kingdom's Screen 4 water candidate R6 (`?s3=intunnel,water6`). Read-only review. First read the "Newest" section of your own agent file if there is one, and `CLAUDE.md` in /workspace/bubblegame.

THE ONLY TARGET: the ORIGINAL approved Screen 4, `/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536). Judge against it alone.

Context (the user's latest brief): the water round the pink character is "too soft, stretched and pale" compared with the original. The original has saturated shiny blue water, irregular rounded bubbly forms, fine bright white and cyan highlights, subtle transparent lavender bubbles; the water supports her from underneath and surrounds her lower body without submerging or hiding her. Judge by eye; numbers are supporting only. "Do not claim success merely because tests pass."

History: the water face (`heroSwell`) draws the ORIGINAL's own foreground water as a texture. R4 (the current candidate, which a previous art-director review recommended) filled the texture's holes (where the original has her body, coins and buttons) with exemplar patches of the original's water. R5 (texture registered 22 px lower) was rejected. Your predecessor's recommended next correction, which is R6: widen the hole where the original has her body 13 px up and to the sides (so the original's white fur halo goes), and refill it ONLY from the original's lower cobalt-and-white water, with no lavender source windows (no purple blobs). Everything else as R4.

Files (all real game frames, seed 7, the in-tunnel start view and +1 s / +2 s after the tap, base_page.png at 768 x 1536):
- Sheets in `/workspace/bubblegame/Previews/WebDemo/screen4_round9_match/48_water_r6/sheets/`:
  - `01_FULLRES_ORIGINAL_ACCEPTED_R4_NEWR6.jpg` (full resolution side by side);
  - `02_closeup_water_x1.6.jpg` (ORIGINAL | ACCEPTED | R4 | R6, the water round and under her, x 60-707, y 1030-1440);
  - `03_moving_closeup_x1.4.jpg` (ORIGINAL | R4 +1 s | R6 +1 s | R4 +2 s | R6 +2 s).
- Frames: R6 `48_water_r6/final/{start,T1.0,T2.0}/base_page.png`; R4 `46_water_r4/final/{start,T1.0,T2.0}/base_page.png`; accepted `40_intunnel_start/final/intunnel_start/base_page.png`. Crop and zoom them yourself as needed (Python with PIL is available: `~/.bubblewash-tools/visual/bin/python`).

Supporting band measures (y 0.80-0.97, her pink, coins and buttons left out; icy pale / saturated / mid / white / lavender / mean saturation): ORIGINAL 27.5 / 19.6 / 11.4 / 18.6 / 15.3 / 0.35; ACCEPTED 40.6 / 21.3 / 20.3 / 14.2 / 0.3 / 0.39; R4 29.5 / 18.6 / 10.7 / 20.4 / 13.0 / 0.34; R6 31.6 / 19.3 / 11.9 / 19.2 / 9.9 / 0.35. At +1 s R4 28.3 / 11.3 / 8.3 / 33.6 / 12.7, R6 31.1 / 12.1 / 9.6 / 32.3 / 9.0. At +2 s R4 24.8 / 8.3 / 7.4 / 38.6 / 14.1, R6 27.0 / 8.4 / 8.0 / 37.3 / 12.6. Mean absolute pixel difference R4 vs R6 directly under her (x 200-600, y 1180-1360): 4.0 levels, so it is a small change.

Please answer, concisely:
1. Verdict, R6 vs R4 and R6 vs accepted, at the start AND moving: each one of "clearly closer", "slightly closer", "about the same" or "worse".
2. Directly under her: is R6's water shaped and coloured more like the original's (rounded lavender domes and bubbly blue-white water supporting her lower edge) than R4's, or did removing the lavender sources lose the domes the original has there?
3. Regressions or anything less like the original.
4. Recommendation: keep R4 or R6 as THE candidate, and the single most important next correction for the water round her, within the existing water material (texture registration or warp, the fill, bloom, the white splash overlays that make the moving frames 33-43 % white against the original's 18.6 %). No new objects, no redesign of the character.

- 18:55 `Grep`: ^## 
- 18:55 `Bash`: List R6 evidence folder contents
- 18:55 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/48_water_r6/sheets/02_closeup_water_x1.6.jpg
**Lead → agent** (18:55 UTC):

[Image: original 4200x706, displayed at 2000x336. Multiply coordinates by 2.10 to map to original image.]

- 18:55 `Bash`: Crop and zoom water region comparisons
- 18:56 `Bash`: Check sheet script alignment handling
- 18:56 `Bash`: Build zoomed comparison crops for review
- 18:56 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/under_start.png
- 18:56 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/full_low.png
- 18:56 `Bash`: Difference maps between R4 and R6
- 18:56 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/d_start.png
- 18:56 `Bash`: Tight zoomed crops of band under her
- 18:56 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/tight_start.png
- 18:56 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/tight_T1.png
- 18:56 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/tight_T2.png
- 18:56 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/full_low_moving.png
- 18:56 `Bash`: Full-width water band at start and moving
- 18:57 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/band_r6.png
- 18:57 `Bash`: Measure lavender, white, sharpness by zone
- 18:57 `Bash`: Contact zone 2x2 grid crop
- 18:57 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/contact4.png
- 18:57 `Bash`: Look for accepted moving frames
- 18:57 `Bash`: Compare accepted moving frames with R6
- 18:57 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/acc_moving.png
- 18:58 `Bash`: Inspect census structure for layer names
- 18:58 `Bash`: List visible objects in census
- 18:58 `Bash`: Find notes on moving white clumps
- 18:58 `Bash`: Read R4 notes on moving white
- 18:58 `Read`: /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/46_water_r4/README.md
- 18:58 `Bash`: Check layer ablation names
- 18:58 `Bash`: Check layer_diag env options
- 18:58 `Bash`: Prepare ablation list for T1.0
- 18:58 `Bash`: Run layer ablations on R6 at +1 s
- 19:00 `Bash`: Sheet and white share of ablations
- 19:00 `Bash`: Build ablation sheet and verify base matches
- 19:00 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/abl_sheet.png
- 19:00 `Bash`: Split bubble layers ablation at +1 s
- 19:01 `Bash`: Attribute side white to bubble layer
- 19:01 `Bash`: Inspect census entries 1 and 199
- 19:01 `Bash`: Find source of the Points particle system
- 19:01 `Bash`: Find particle emitters in game.js
- 19:02 `Bash`: Zoom left and right of her edges
- 19:02 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/sides.png
- 19:02 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/under_acc.png
- 19:02 `Bash`: Read drop shader and wake emitters
**Agent** (19:03 UTC):

1. **Verdicts** (judged by eye against the original only)

| | Start | Moving (+1 s, +2 s) |
|---|---|---|
| R6 vs R4 | About the same | About the same |
| R6 vs accepted | Clearly closer | Slightly closer |

- **R6 vs R4:** at her lower left and right, R6 has removed the white fringe left over from the original's fur, and the water is bluer there. Directly under her centre, though, it has lost lavender the original has. In motion the area under her is a little less white, but the sides are unchanged.
- **R6 vs accepted:** R6 uses the original's own bubbly blue, white and lavender water, while the accepted build has a flat pale sky-blue sheet with white brush strokes. In motion, the white piles at the sides look much the same in all three builds and dominate the picture.

2. **Directly under her:** neither R4 nor R6 has the original's domes, so removing the lavender lost colour but no shape.
   - **The original:** two large rounded periwinkle-lavender domes with bright white rims overlap her lower edge (about x 230-440, y 1225-1300), with a small lavender ring at about x 460. The top edge of the water is scalloped and rises in front of her.
   - **R4:** lavender in that place, but as shapeless violet smears with no rims, below a flat, ragged, roughly horizontal cut across her body.
   - **R6:** the same cut. The centre of that band is now periwinkle-blue and white, with a thin white lip along her edge; lavender remains only at her lower left.
   - So R6 is cleaner but less like the original's colour there. Supporting numbers: lavender in the strip right under her is 28.8 % in R4 and 19.7 % in R6, and in the band 13.0 % and 9.9 %, against the original's 15.3 %.

3. **Regressions and remaining differences**
   - **Caused by R6:** less lavender (above), and slightly more icy-pale water (band 29.5 % to 31.6 %, original 27.5 %). Nothing else changed.
   - **Already there in R4 and R6 alike:**
     - In motion, matte white "cotton-ball" piles at both sides, the largest difference from the original.
     - The flat cut across her body instead of the original's scalloped domes.
     - The water looks soft and blurred, without the original's crisp white rims.
     - At +2 s, pink four-point star sparkles over her body. These are the generic star sparkles the user dislikes, drawn as the "sparkle star" in the particle shader (`dropFragment` in `shaders.js`).

4. **Recommendation: keep R6 as THE candidate.** It is a marginal step: the leftover fur fringe is gone and nothing new looks worse, apart from the lost lavender. Don't present it to the user as the fix.

   **The most important next correction is the white in the moving frames, and it does not come from the water material.** I ran one diagnostic myself: a layer-removal test on R6's +1 s frame with `layer_diag.cjs`. My base render matches the delivered frame with 0 differing pixels. White share in y 1150-1400 (whole width / left / right):

| What was hidden | Whole width | Left | Right |
|---|---|---|---|
| Nothing (R6 as is) | 26.7 % | 38.0 % | 44.1 % |
| The game's spray particles (with one tiny brush-fringe plane) | 16.4 % | 22.9 % | 20.1 % |
| Original, for comparison | 14.9 % | 21.4 % | 15.5 % |

   - Other removals hardly change it: bloom off gives 26.7 to 25.8 %; hiding the splash bank (`heroSplash`, `spCurls`, `spLumps`, `lqWaterlineBubbles`) or the tunnel bubbles changes nothing.
   - **Cause:** the game's own wake and bow spray. It is the `Particles` system in `game.js` (`fx.emitT`, about lines 1036-1050), drawn as water droplets by `dropFragment` in `WebDemo/src/shaders.js`. Each droplet has a rim brightened to 1.25, alpha up to about 0.87, and a size that grows the closer it is to the camera. So droplets thrown towards the camera turn into big white balls.
   - **Fix, under `intunnel` only:** change how these droplets are drawn, not how many are made.
     - Cap the drawn point size, as `tunnel_r5.js`'s drop shader already does with `uMaxPx`, so near droplets stay small speckles.
     - Shift the rim's white towards the original's cyan and blue-white, and lower the droplets' alpha.
     - Don't touch the emitters: they draw from the game's seeded `Math.random`, so changing the counts would shift the run.
   - **Aim:** side white at +1 s and +2 s back to about 15-21 %.
   - **After that:** the contact edge, giving the water's top contour the original's scalloped lavender domes with white rims, instead of the flat ragged cut.

Files are in `/tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/`:
- `abl_sheet.png` (the layer-removal test at +1 s)
- `contact4.png` (the area right under her: original, accepted, R4, R6)
- `sides.png` (her lower left and right: original, R4, R6)
- `band_r6.png` (the water band: original, R6 at start, +1 s and +2 s)
- `abl_T1/` and `abl2_T1/` (the raw layer-removal frames)

**Lead → agent** (19:09 UTC):

The coordinator sent a message while you were working:
R7 is ready for your strict review: `?s3=intunnel,water7` = R6 + ONLY your recommended correction, the game's spray droplets (game.js `Particles`, `fx`) drawn no bigger than 12 px of the 1536 px canvas height (a uMaxPx cap in the drop vertex shader, scaled with the canvas, so on a Pixel 7 it is the same share of the screen). Emitters, counts, sizes, alpha, colours and random numbers are untouched, so the same droplets fly in the same places. Before choosing 12 px I tested caps at the +1 s and +2 s frames: 12 px white 23.4 / 23.5 % and saturated 17.4 / 17.5 %; 20 px 26.3 / 26.7 and 16.3 / 15.9; 30 px 30.0 / 30.6 and 15.0 / 14.5; no droplets at all 21.4 / 21.4 and 18.6 / 18.8 (original 18.6 white, 19.6 saturated). I did NOT change the rim colour or alpha (one change at a time).

Proofs: R7's +1 s and +2 s frames are 0 differing pixels from the 12 px cap test; R6 and the accepted build are 0 pixels changed on the new bundle; no console errors.

Files in `/workspace/bubblegame/Previews/WebDemo/screen4_round9_match/49_water_r7/`:
- `sheets/04_FULLRES_moving_1s.jpg` and `04_FULLRES_moving_2s.jpg` (ORIGINAL | ACCEPTED | R6 | R7, full resolution, at +1 s and +2 s);
- `sheets/03_moving_closeup_x1.4.jpg` (ORIGINAL | R6 +1 s | R7 +1 s | R6 +2 s | R7 +2 s);
- `sheets/01_FULLRES_ORIGINAL_ACCEPTED_R6_NEWR7.jpg`, `02_closeup_water_x1.6.jpg` (the start view; there only the small resting bubbles change);
- frames `final/{start,T1.0,T2.0}/base_page.png`.
Band (page frames): +1 s R6 31.1 / 12.1 / 9.6 / 32.3 / 9.0 → R7 31.8 / 15.6 / 12.6 / 22.2 / 10.4 (icy / saturated / mid / white / lavender). Start: R6 white 19.2, R7 19.5.

Please answer concisely:
1. Verdict, R7 vs R6 and R7 vs accepted, moving (+1 s, +2 s) and at the start: "clearly closer", "slightly closer", "about the same" or "worse".
2. Do the remaining flecks read like the original's small white sparkles and splashes, or as noise? Any regression (e.g. lost splash energy, the water looking empty, the sparkle stars)?
3. Should R7 replace R6 as THE candidate to present to the user?
4. The next single correction for the water round her, ranked (your earlier list: the contact edge, the flat ragged cut instead of the original's scalloped lavender domes with white rims; softness; the remaining paleness).

Address this before completing your current task.

- 19:09 `Bash`: List R7 evidence folder
- 19:09 `Bash`: Build R7 comparison crops and white shares
- 19:09 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_band.png
- 19:09 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_left1.png
- 19:09 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_right1.png
- 19:10 `Bash`: Original vs R7 side crops
- 19:10 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_right_orig.png
- 19:10 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_left_orig.png
- 19:10 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_T2.png
- 19:10 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_vs_acc.png
- 19:10 `Read`: /tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/r7_start.png
- 19:10 `Bash`: Find the R7 point-size cap code
**Agent** (19:11 UTC):

1. **Verdicts**

| | Moving (+1 s, +2 s) | Start |
|---|---|---|
| R7 vs R6 | Clearly closer | About the same (only 644 px differ: the small resting bubbles) |
| R7 vs accepted | Clearly closer | Clearly closer (the same as R6) |

   - **By eye:** the matte white cotton-ball piles at both sides are gone. At +1 s and +2 s the blue and lavender water now shows round her, as it does in the original. The accepted build still has those piles at both times, plus its pale glassy sheet with white strokes.
   - **My white share, y 1150-1400 (whole width / left / right):**

| | Whole width | Left | Right |
|---|---|---|---|
| R6 +1 s | 23.9 % | 32.9 % | 39.7 % |
| R7 +1 s | 16.8 % | 22.6 % | 22.9 % |
| R6 +2 s | 28.8 % | 38.3 % | 47.8 % |
| R7 +2 s | 18.9 % | 25.4 % | 26.8 % |
| Accepted +2 s | 27.2 % | 38.6 % | 44.0 % |
| Original | 14.9 % | 21.4 % | 15.5 % |

2. **The remaining flecks mostly read as fine spray, like the original's small white droplets.** Two caveats, one of them a gameplay check:
   - **One size for every fleck:** the cap squashes all the near droplets to about 12 px, so they are uniform round dots. On the right at +1 s (about x 560-720, y 1250-1380) they form an even, dense field that starts to look like a polka-dot pattern rather than the original's irregular flecks and crest strands.
   - **Splash energy:** a little is lost (no thrown volume), but the water does not look empty; the texture underneath carries it. Fine for now.
   - **The sparkle stars, which need a check:** at +2 s the pink four-point crosses over her body are gone, which is closer to the original and matches the user's dislike of star sparkles. But the cap is on the whole particle material (`game.js` lines 1642-1646), not only the spray. It also shrinks the coin-pickup sparkle, the Bubble Blast pop burst and every other `fx` effect. Mechanics are unchanged, but in play that feedback will be smaller. Check it in a gameplay video and tell the user. If it is too faint, the vertex shader already has the `kind` attribute, so the cap could be limited to the droplets and foam puffs. That would bring the stars back.
   - **Still a bit pale:** at +2 s the right side is 26.8 % white against the original's 15.5 %. In the band at +1 s, white is 22.2 % against 18.6 %, and saturated blue 15.6 % against 19.6 %.

3. **Yes, R7 should replace R6 as THE candidate.** It is the first water step that is clearly closer in motion. When you present it, mention the smaller coin and Bubble Blast feedback.

4. **Next corrections, ranked**
   1. **The contact edge.** This is now the largest difference from the original, both at the start and in motion. The water's top edge crosses her body as a flat, ragged, roughly horizontal cut. The original has rounded periwinkle-lavender domes with bright white rims overlapping her lower edge (about x 230-440, y 1225-1300, plus the small ring at about x 460).
      - **Fix, within the existing material:** make `heroSwell`'s top edge (its transparency) follow the original's own outline of the water against her body, so the face ends in the original's rounded dome tops. Register or warp the texture so those domes sit across her lower edge.
      - **Fill:** take it from the original's lavender dome pixels at that place, not from lower cobalt water. That would also bring back the lavender R6 lost (band 10.4 % against 15.3 %).
   2. **Varied fleck size.** Scale the cap with each droplet's own `size` value, for example `uMaxPx * (0.4 + 0.6 * clamp(size / 0.11, 0, 1))`, so small and large flecks stay distinct. Emitters and random numbers stay untouched.
   3. **Softness.** The blurred fill areas lack the original's crisp white rims. This is about texture resolution and filtering; edge strength overall is not below the original's, so it ranks below the edge.
   4. **Remaining paleness.** Icy-pale water is 31.8 % against 27.5 % (band, +1 s, the coordinator's measure). It will probably shrink once the edge and fill change.

My comparison crops are in `/tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/`:
- `r7_band.png` (original, R6, R7 at +1 s and +2 s)
- `r7_vs_acc.png` (original, accepted and R7, moving)
- `r7_right_orig.png` and `r7_left_orig.png` (fleck character against the original)
- `r7_T2.png` (R6 and R7 at +2 s: the stars are gone)


_56 tool steps._
