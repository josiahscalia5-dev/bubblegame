# Round 9 focused pass, Water & VFX (5 November 2026, about 16:00-20:30 UTC)

- **Who and where:** the Water & VFX specialist, worktree branch `worktree-agent-a6a478aa3fef314d3`, from `3394dc0` (its
  `WebDemo/` is byte-identical to `b91e952`: both specialists' gate fixes, the phone fix and the face's light panel removed).
  Checkpoint `0cf8193`, then the final commit.
- **Brief:** the user's focused correction pass (`Design/ReferencePacks/2026-11-05_Screen4_Focused_Correction_Pass_Brief/README.md`):
  my parts are the foam (priority 2), the character on top of the water (priority 3, the water's side) and the tunnel's
  energy (priority 1, the layer on top of the walls).
- **Target:** the ORIGINAL approved Screen 4 only (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
- **Switch:** `?s3=match` only. Files: `WebDemo/src/tunnel_r9_match_water.js` and gated lines in `WebDemo/src/tunnel_r8_splash.js`.
  Not touched: `tunnel_r9_match.js`, `match_phone.js`, `game.js`, the character model, the camera.
- **Method:** camera locked by the seeded run (seed 7, 538 x 1076, DPR 1.5, real tap and game time), compared with the original
  at 3.0 s before each change; 9 capture iterations at 3.0 s, 3 diagnostic runs (the walls' own specks with my layer off,
  the hide probe, a colour-marked run of the froth band), then the final set at 2.85, 3.0 and 3.1 s (taken twice: the second
  after adding back a few far bubbles).
- **Framing:** NOT yet re-checked at Tunnel & Lighting's new framing (closer camera, larger character): its checkpoint had not
  arrived when this pass was committed. After merging it, the waterline and the froth round her must be re-measured
  (`scripts/meas.py`, `scripts/hues.py`).

## Images

| file | what |
|---|---|
| `original_vs_before_vs_now_3.00s_fullres.png` | ORIGINAL / before (`b91e952`) / now, 3.0 s, page frames with the HUD, all 1536 px tall |
| `original_vs_before_vs_now_2.85s.jpg`, `..._3.10s.jpg` | the same at 2.85 and 3.1 s |
| `closeup_01_tunnel_interior.jpg`, `closeup_01b_mid_rings_zoom.jpg` | the tunnel interior: original / before / now (raw canvas) |
| `closeup_02_foam_and_water_round_the_character.jpg`, `closeup_02b_her_base_zoom.jpg` | the foam and water round the character |
| `match_t3.00.png` (page), `match_t3.00_canvas.png` (3D canvas), `match_t2.85*`, `match_t3.10*` | the real frames; `before/` the same for `b91e952` |
| `moves/moves_sheet.jpg` (+ frames, `match_moves.json`) | the water reacting to a swerve (3.38 s), a jump (3.85 s) and the landing (4.22 s) |
| `measured.txt`, `pixel_identity_vs_b91e952.txt`, `gameplay_checks_match_s3_func.txt`, `probe/` | the numbers |

## Checklist (fixed / partly / not), 3.0 s; approved / before / now; scripts named in `measured.txt`

**Foam material and colour (priority 2)**
- **"Too purple": fixed.** Purple share (hue 228-290: indigo, lavender, violet; `hues.py`, canvas) in the bank 17.7 / 23.5 /
  **0.4%**, under the body 47.8 / 54.6 / **1.4%** (target: at or below the original's). The Art Director's lavender in the
  bank 15.2 / 7.9 / **0.2%**. The indigo dome shading (hue 228-235: 3.7 / 16.5 / 0.3%) and the violet soap tint are gone.
- **"Too transparent": fixed.** The lobes are opaque froth (alpha 0.98, depth-written, no fur showing through); the swell's top
  where she sits is opaque froth, not see-through glass.
- **"Thick, bright, blue-white / aqua-white, frothy, bubbly": partly.** The lobes are now an aqua-sky-blue body (the original's
  bank palette, written in screen colours through a private copy of the inverse display transform) with white froth patches made
  of small bubbles (white walls, blue holes with a glint), white droplets at two sizes, a bubbly white crest along each top, a
  ragged outline and frothy bulges. Bank white (canvas) 20.2 / 16.7 / **19.5%**, page 20.3 / 17.4 / **20.2%** (Art Director's
  18-22: met); mean brightness 0.93 / 0.96 / 0.95. **Still different:** they read as rounded froth lumps, not the original's
  splashy spray crests; the original mixes sky blue, periwinkle and lilac soap bubbles where ours is a uniform sky blue:
  pale-aqua 14.6 / 16.4 / **36.8%** and electric blue 12.2 / 12.0 / **29.8%** (both now above the original's); texture
  (Art Director's hp5) 0.095 / 0.096 / **0.078** (smoother than the original: not met).
- **Under her ("a flat pale-lilac plate where the original has white froth"): fixed in look, over in white.** The plate (the
  swell's front face, found with the hide probe) is now a band of white froth with blue holes. White under the body (canvas)
  13.8 / 15.0 / **29.2%**, page 14.2 / 16.1 / **34.9%** (the original's 12-16: over); pale 20.5 / 35.6 / 34.4%.

**The character on top of the water (priority 3, the water's side)**
- **Kept: fixed at the current framing.** Waterline (page, `char.py`) 0.836 / 0.835 / **0.836**; her sides 0.809 / 0.806 /
  **0.806** and 0.860 / 0.856 / **0.860**; contact strip pink 85.1 / 83.6 / **83.2%**, white 3.6 / 2.6 / 6.1% (at most 19).
  She sits on the froth band and the lobes, which stay at her base. Not yet re-measured at the new framing (see above).

**Tunnel energy (priority 1, my layer)**
- **White splash flecks and streaks bolder, denser, more irregular: mostly fixed.** 380 flecks (was 200 thin crescents): torn
  streaks thick at the head, scattered droplets with a spray tail, short wavy splashes, white cores with a cyan edge, at most
  19 px half-length on screen, riding the bands with the swirl. Shown at 3.0 s (`bubble_probe.cjs`): 137 / **245**. Bold and
  chunk-sized white shapes (`specks_size.py`), mid rings: chunks 30 / 18 / **27**, bold 81 / 119 / **121**, cover 10.3 / 10.0 /
  **12.1%**; walls: chunks 49 / 28 / **54**, cover 5.7 / 4.5 / **7.3%**. **Still different:** the original's mean white shape is
  bigger (86 px against 41.5 in the mid rings): most of our small specks (186 of 272 in the mid rings) come from the walls' own
  material (Tunnel & Lighting's), measured with my layer switched off.
- **More bubbles, more visible, near / mid / far: partly.** Shown 129 / **148**; medium 46 / **83**, large 11 / **24**, small
  72 / 41; depth near 46 / **57**, mid 54 / **74**, far 29 / **17**; the crowded centre 32 / **12** (the original has none
  there). Brighter, wider outlines (rimPx 1.5) and a stronger glint. Far ones now sit on the far walls' rings, not floating in
  the middle; fewer far ones than before.

**First priority (a visibly blue water body; white only froth and splash, never a blanket):** kept: lower-third white 16.9 /
9.9 / **9.9%**; bank white at the original's.

## What changed (all under `MATCH_ON`)

1. `matchLumpGLSL` (the bank's lobes, `spLumps`): rebuilt as froth (`MATCH_WATER.froth`): the light from the key light and
   the up direction maps sky blue (shade) to pale blue to light; froth cover from a private 3D value noise (the wave texture's
   height channel is ridged and biased high: with it, 72% of the bank went white in the first iteration); small froth bubbles
   (3D cells), white droplets at two sizes, a bubbly crest, a ragged outline (cell-based discard), one glint; all in screen
   colours (`mwUndisp`, a private copy of `mtUndisplay`, declared through `matchLumpDecl`). Old `lobe` settings removed.
2. `tunnel_r8_splash.js` (gated): the froth's declarations, frothy bulges on the lobes (`lumpFroth`), a finer sphere
   (`lumpDetail` 4) and depth writes (`lumpDepthWrite`) under match. Other switches' shader text is unchanged.
3. `matchSwellGLSL`: a band of opaque white froth with blue holes along the swell's top (`look.froth`), replacing the pale glass
   plate under her; its cells sized from a colour-marked diagnostic run.
4. The curling sheets aqua-white spray (`splash.colours`, `curlAlpha` 0.8), not turquoise glass; two small soap-bubble clusters
   on her front waterline (`liquid.foam.bubbles`).
5. `tunnelBubbles`: the flecks' new shapes, size cap (`flecks.maxPx`) and count; the bubbles' zones (walls' rings at near, mid
   and far depth, a small inner zone, no far centre), sizes, `minPx` 2.4, brighter outlines.

## Checks

- **Pixel identity** (`pixel_identity_vs_b91e952.txt`): the normal game, `?s3=splash` and `?s3=liquid`, raw canvas at Tap to
  Start and 2.85 s: 0 differing pixels in all six pairs against the baseline bundle `811c6977...` (bundle now `3e7fc194...`).
- **Gameplay** (`gameplay_checks_match_s3_func.txt`, S3=match): lanes 1 -> 0 -> 2, the jump (in the air), 12 coins, 1 gem and
  2 socks collected, keyboard start, no console errors. Moves (`moves/`): the bank piles on the swerve side, shrinks in the air,
  grows on landing; no console errors.
- **Cost:** 209 draw calls and 1,428,937 triangles at 3.0 s (before 209 and 1,423,081); 207 / 1.34 M at 2.85 s, 202 / 1.32 M
  at 3.1 s. No new textures, render passes, materials or draw calls; private random numbers only.

## What still differs (water and VFX)

1. The bank reads as rounded aqua froth lumps; the original's foreground is splashy spray crests with lilac soap-bubble domes
   among them (its hue mix: sky blue, periwinkle, lilac; ours: one sky blue). Pale aqua 36.8% and electric blue 29.8% against
   14.6% and 12.2%; texture 0.078 against 0.095.
2. Under her: white froth 29% (canvas) against the original's 14%; the original's lilac bubbles there (purple 47.8%) are not
   reproduced (deliberately: the user's "too purple").
3. Separate white shapes left of the body 13 / 51 / 80 (page; the droplets add to it: the Art Director's limit was 40).
4. The tunnel's flecks are at the original's coverage but smaller on average; most small specks are the walls' own material.
5. Not checked at Tunnel & Lighting's new framing yet.

## Scripts (`scripts/`)

`meas.py` (the Art Director's measures), `hues.py` (hue histogram, purple and pale-aqua shares), `specks_size.py` (white flecks
by size and zone), `specks.py`, `bubble_probe.cjs` (bubbles and streaks shown, by zone, size and depth), `bubbles_eye.py`,
`bubbles.py`, `sheets.py` and `sbs.py` (the comparison images), `pixid.sh` and `pixcmp.py` (pixel identity),
`liquid_moves_long.cjs` (the moves capture with a longer screenshot timeout).
