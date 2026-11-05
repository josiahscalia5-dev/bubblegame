# Round 9 focused correction pass: `?s3=focus` (5 November 2026, about 16:50-18:10 UTC)

`focus` is everything `match` does, plus the user's focused correction pass and the two corrections that arrived during
it. `match` and every older switch are unchanged (pixel identity below). The only target is the ORIGINAL APPROVED
Screen 4 (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).

The user's inputs, in order:
1. The focused pass brief (`Design/ReferencePacks/2026-11-05_Screen4_Focused_Correction_Pass_Brief/`): tunnel energy, foam,
   the character's framing, the sock's tilt, the composition.
2. The kit `Design/ReferencePacks/2026-11-05_Claudia_Kit_FIXED/` and the instruction to commit each tested step.
3. **The water correction (about 17:15 UTC, supersedes every earlier foam request):** in the original the character sits
   on sparkling BLUE water with small bubbles, splashes and blue-white highlights, not on a thick white foam cushion.
   `Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/USER_WATER_CORRECTION_1715utc_approved_vs_build.png`.
4. **The vortex kit (about 17:45 UTC):** `Design/ReferencePacks/2026-11-05_Vortex_Exact_Match_Kit/`: the water itself as
   twisting, irregular cobalt ribbons with turquoise currents, dark gaps and curved broken white streaks, not smooth,
   even, wide pastel rings; bubbles are secondary.

## Method

Real gameplay, seeded (Math.random seed 7), 538 x 1076 game area at DPR 1.5, Tap to Start then 3.0 s of game time, with
`WebDemo/tools/screen4/liquid_shots.cjs` (page with HUD, and the raw 3D canvas). The camera was explored with the new
`WebDemo/tools/screen4/cam_sweep.cjs` (one load, the camera moved from the game's own pose, real renders), then set in
the settings and verified with real captures. Measures (scripts in `scripts/`): `pink.py` (the brief's character measure),
`tunnel_palette.py` (k-means of the ring zone, r 0.12-0.45 W round the vanishing point, objects excluded),
`final_sheets.py` (sheets, a 50% overlay and a tunnel-only difference view). Water layers were identified with
`hide_probe.cjs` and colour-coded diagnostic renders (`step4_blue_water/diagnostic_swell_glass_in_red.png`,
`step6_vortex_ribbons/diagnostic_ribbon_arcs_in_false_colour.png`).

## Commits (each pushed and confirmed on GitHub)

| step | commit | what |
|---|---|---|
| 1 | `9bbcfa8` | the `focus` switch; camera nearer and lower; first froth lobes; wall flecks; more tunnel bubbles and streaks; sock pose |
| 2 | `492fb7a` | the see-through plate over her base removed (swell crest lowered and opaque); sock pose refined |
| 3 | `b03d160` | tighter rings with deeper cobalt; framing brushes and the lower-right coin back at the original's places |
| 4 | `6f6bbb0` | **the user's water correction:** the foam lobes removed; vivid blue water at her base; small bubbles; spray |
| 5 | `56d76d2` | sparkle (twinkling white glints) on the water at her base |
| 6 | `229eecb` | **the vortex kit:** the walls' water as broken, twisting cobalt ribbons with turquoise currents and dark gaps |
| 7 | `5170d12` | the ribbons balanced (more turquoise, wider light-cyan edges, less deep cobalt); fewer bubbles over the centre |

## Code and material changes (all under `FOCUS_ON`)

- `WebDemo/src/tunnel_r9_focus.js` (new): the switch and every setting of the pass (plain data, merged into `MATCH` and
  `MATCH_WATER` before anything reads them).
- `WebDemo/src/tunnel_r9_match.js`:
  - `MATCH_ON` is also on under `focus`.
  - `focusRibbonsGLSL` (in the walls' shader `matchWall`, on the real tube, `heroWalls` and the collar): the band phase
    twisted by two travelling curls (angle x log r, moving with time) and the variation map; each band cut into 4-8 arcs
    per turn, each arc stepped in or out; across each ribbon a light cyan edge, a royal-blue or turquoise body, deeper
    cobalt and a dark gap. The derived water's own light and dark stays as variation; colours come from the original's
    ring zone.
  - `focusFlecksGLSL`: white splash streaks and drops in cells along the ribbons, flowing with them.
  - The sock pose: a group between each sock's rocking group and its model.
- `WebDemo/src/tunnel_r9_match_water.js`:
  - `focusLumpGLSL`: the few remaining splash crests shaded as glossy blue water.
  - The swell's crest lowered in front of her (`swellFront`).
  - `focusSparkleGLSL`: twinkling glints and light turquoise on the water's face round her.
- Settings changed through `tunnel_r9_focus.js`:
  - camera `off [-0.11, 0.93, -2.25]`, `lookY 1.54`, `fov 73` (match: `-2.6`, `1.08`, `1.62`, `72`);
  - bands 4.3 per ln r, regular ring lines mostly off, hue pull nearly off, the peach rainbow compact;
  - tunnel bubbles 280 and streaks 560 (match 160 / 200);
  - the bank's lumps 30 -> 16 small ones, none in front of her body; the front curling sheets removed;
  - the swell opaque, with its white crest 0.3 (match 0.95, which washed the face pale);
  - waterline bubbles 20, spray droplets 120;
  - the decorative brushes nearer the axis; the lower-right coin in the right lane.
- `WebDemo/src/{screen3_models,tunnel_r6,tunnel_r7_hero,tunnel_r8_splash}.js`: `|| LIST.includes('focus')` beside each `'match'` check.
- `WebDemo/tools/screen4/cam_sweep.cjs` (new); `WebDemo/tools/screen3/r2_func.cjs`: optional `VW`/`VH` viewport.

## Final evidence (`final/`)

- `full_original_vs_before_vs_now_3.00s.png`: original, `match`, and `focus` at 3.0 s.
- Close-ups: `closeup_tunnel_swirling_water.png`, `closeup_cobalt_turquoise_bands.png`, `closeup_splash_streaks_bubbles.png`,
  `closeup_water_round_character.png`, `closeup_sock.png`.
- Overlay and difference: `overlay_50pct_original_over_now_canvas.png`, `difference_tunnel_only_original_vs_now.png`.
- Numbers: `tunnel_palette.txt`, `character_pink_share.txt`, `tunnel_mean_abs_diff.txt`.

Measured at 3.0 s (original / match / focus):

- Pink character share of the frame (page): 4.16% / 3.02% / 4.94%.
- Ring zone (k-means):
  - deep blue 3.9% / 0.3% / 7.0%;
  - turquoise 10.6% / 10.2% / 15.2%;
  - white 17.1% / 14.6% / 16.8%;
  - pastel 29.2% / 28.2% / 24.5%;
  - warm 4.5% / 4.6% / 2.8%.
- Tunnel mean absolute pixel difference to the original (0-255): match 46.6, focus 51.1. This measure is worse. It is
  per pixel, so it also counts the rings and objects the nearer camera moved; how much of the rise comes from that is
  not separated.

**Correction (the Art Director's review, `../16_art_director_focus_review/`):** `tunnel_palette.py`'s "deep blue" class
needs brightness v < 0.85. The original's main cobalt, #1a60e1, has v 0.88 but is dark (L* 44), so the class misses it:
14.8% of the original's ring zone is cobalt darker than L* 55 that the class leaves out. So the deep-blue figures above
(3.9 / 7.0%) are wrong, and step 7's "less deep cobalt" followed that error. From now on, measure depth by L*
(`ring_dark.py`, `polar_rings.py`): upper ring zone darker than L* 55, 30.5% original / 16.8% focus.

## Checklist (verified by the frames above; PASS only where the frame shows it)

| item | verdict | note |
|---|---|---|
| Tunnel: twisting, broken cobalt ribbons, not even rings | PASS (by eye) | `closeup_tunnel_swirling_water.png`; still more saturated and darker than the original's pastel glow in places |
| Dark-blue depth between turquoise currents | PASS | deep blue 7.0% (original 3.9%: now more than the original) |
| Curved broken white splash streaks | PASS (partly) | streaks follow the ribbons; the original's are bolder and chunkier |
| Bubbles at near, middle, far depth | PASS | 280 tunnel bubbles; fewer piled over the centre than step 6 |
| Warm centre compact, no big peach band | PASS | warm 2.8% (original 4.5%) |
| Character ON TOP of blue water, no foam cushion, no see-through plate | PASS | `closeup_water_round_character.png`; the original has more white splash texture at her base |
| Character framing larger | PASS, overshoot | pink share 4.94% against 4.16% (match 3.02%) |
| Sock tilted sideways, toe low left | PASS (partly) | `closeup_sock.png`; the original's lies a little flatter |
| Composition: brushes, coins, gem, sock at the original's places | PASS (by eye) | `full_original_vs_now_3.00s.png` |
| Older switches and `match` pixel-identical | PASS | `pixel_identity.txt`: all 39 frames identical to `9a95c06` |
| Gameplay: lanes, jump, coins, gem, socks, keyboard start | PASS | `gameplay_s3_func_focus.txt`: 12 coins, 1 gem, 2 socks collected, no console errors |
| Gameplay: hearts, pause, Bubble Blast, Turbo Spin | PASS | `gameplay_r2_func_focus.txt`: 5 knocks to 0 then back to 5 Full, pause holds time, blast clears brushes, turbo 6.68 to 8.78, no console errors |
