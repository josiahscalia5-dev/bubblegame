# Step 8: the original's white splashes on the walls, at the original's cobalt (`?s3=focus` only; 6 November 2026)

- **Authority:** the ORIGINAL approved Screen 4 only.
- **The user's order (after step 7):** the original white splash textures, then blue water and floor, brush sizes, the
  tunnel entry, the distant centre, sock colours; each separately testable and reversible. The user (about 09:55 UTC): "Fix
  all the errors ... help me to get it where my screen's almost exactly like my original approved screen".
- **Before:** step 7 (bundle `57b06911...`). **After:** step 8 (bundle `e6cd9334...`).

## Why step 5 (the fill map) was held twice, measured (`iso/`, `scripts/iso.sh`)

The same frame (seed 7, 3.0 s) drawn whole, with the overlays hidden, and with ONLY the walls (masked water,
`layer_metrics.py`):

| walls | original | step 7 whole | step 7 walls alone | fill map whole | fill map walls alone |
|---|---|---|---|---|---|
| saturated blue | 58.9 % | 55.0 | 62.2 | 51.7 | 56.9 |
| white | 8.2 % | 5.3 | 1.2 | 11.4 | **8.5** |
| white pieces, mean | 237 px | 75 | 44 | 278 | **291** |

Drawn alone, the fill map's walls already had the original's white and splash size; the colour was lost in the layers over
them (hiding each: the hero bubbles 2.0 points of blue, the Screen 4 bubbles 1.5, the tunnel bubbles 1.0; light rings,
halos, glows and particles none) and in the 8 % of procedural band colour and the moving relief mixed under the map.

## The change (`step8_game_changes.patch`)

- `tunnel_r9_focus.js` `FOCUS.match.walls.ringMap`: `file: 'tunnel_rings_fill.png'` (the original's own pixels, holes filled
  along each ring: `tools/screen4/derive_ring_map.py --fill`, from step 5), `amount` 0.92 -> 1, `detail` 0.25 -> 0, and
  `gain: [1.15, 1.15]` (new: saturation round the luminance, then a power curve deepening the mid-tones; white stays white).
- The game's duplicate whites off (step 5's): the walls' procedural flecks (`walls.flecks.amount` 0), the floating white
  streaks (`bubbles.flecks.count` 0), the 1,600 additive white specks (`r5Droplets` hidden; the list keeps match's two).
- `tunnel_r9_match.js`: the texture file from the settings (step 5's line) and the `gain` code, only when `gain` is set.
- **Chosen from tests by tune** (`iso/G1`, `G2`, `G3`): gain [1.15, 1.0], [1.15, 1.15] (chosen), [1.25, 1.25] (over-coloured).
  The gain code without a gain is identical to the pure map (0 differing pixels).

## Result (seed 7, 3.0 s, masked water; `iso/G2` = the step 8 build, 0 differing pixels)

| | original | step 7 | step 8 |
|---|---|---|---|
| walls: white | 8.2 % | 5.3 | **8.8** |
| walls: white pieces, mean | 237 px | 75 | **182** |
| walls: periwinkle | 6.7 % | 14.2 | **6.8** |
| walls: chroma | 46.4 | 44.0 | **47.4** |
| walls: saturated blue | 58.9 % | 55.0 | **55.9** |
| walls: lavender | 10.0 % | 11.6 | 13.3 (further) |
| far centre: pale blue | 20.6 % | 31.2 | **22.2** |
| far centre: white | 21.7 % | 7.7 | **22.5** |
| far centre: saturated blue | 29.7 % | 24.8 | 24.9 |

By eye (`10_pixel7_original_vs_step7_vs_step8_T3.0.jpg`, `12_zoom_tunnel_original_vs_step7_vs_step8_T3.0.jpg`): the walls
carry the original's own white curls, dot clusters and splotches at their places, with deeper blue bands and a stronger
rainbow arc; step 7's smooth pastel bands and procedural dashes are gone. Still softer than the original, and the cobalt a
little under it.

## Tests

| test | result | file |
|---|---|---|
| the step 8 build vs the tested G2 tune | identical, 0 differing pixels at 3.0 s | |
| identity: the normal game, the ten older switches, `match`, `match,nofoam` (41 raw-canvas frames) | all identical, no console messages | `identity_proof_step8.txt` |
| gameplay `?s3=focus` `s3_func`, `r2_func` | identical to step 7's reports but for the intended settings (droplets hidden, streaks 0: 160 fewer triangles, one draw call fewer) | `gameplay/` |
| gameplay, the normal game, `s3_func` | identical to step 7's | `gameplay/` |
| stills at 3, 4, 5, 6 s, 1:2 and Pixel 7 | captured, no console errors | `frames/` |
| build | the main checkout rebuilds md5 `e6cd9334e52d35ad7f3b131773c3af05`, the tested build | |
| videos, straight and steering | recording (`videos/`) | |
