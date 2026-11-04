# Screen 3 test tools (3 November 2026, second session)

These are the scripts behind the evidence in `Previews/WebDemo/opening_artwork`, `phase_a_castle_water`, `screen3_castle_test`, `screen3_five_assets`, `screen3_edges_test` and `screen3_cine_test`.

- All browser scripts run the real game in headless Chromium through Playwright.
- They seed `Math.random` with 7, so runs can be compared frame by frame.
- Run them from `WebDemo/` with the demo folder as the first argument.

| Script | What it does |
|---|---|
| `s3_shot.cjs` | Seeded frames of the real 3D opening (painted artwork layer off). Settings come from the environment: `S3=all,edges,cine` for the `?s3` switches, `FLAGS=phaseA`, and `TIMES=0,0.5,1,1.5,2` (game seconds after the tap; 0 is Tap to Start). The third argument is JSON tuning for `window.__BW_S3_TUNE__`. |
| `s3_func.cjs` | Functional check: settings click, Tap to Start, real pointer swipes (left, right, up to jump), the ride into the tunnel, keyboard start, console errors, and draw calls and triangles for one frame. Use `S3=...` to test a switch, and compare its JSON output with a run on the protected build. |
| `scene_vs_art.cjs` | The same frames as `s3_shot.cjs`, without the `?s3` switches; `phaseA` as the third argument. |
| `opening_art_test.cjs` | Tests the approved-artwork opening screen: the painted gear against the real settings button, taps, keyboard start, `?classic`, and phone sizes. Set `QUERY='?phaseA'` to add a switch. |
| `region_compare.py` | Region-by-region comparison against the approved Screen 3: colour (ΔE) versus structure (SSIM and edge correlation). |
| `match_metrics.py` | Castle and slide-water colour measurements (Phase A). |
| `glb_info.py`, `glb_geom.py` | Read a GLB without a browser: meshes, triangles, bounds, materials, textures, silhouettes and the open passage through the middle. |
| `cmp4.py`, `*_sheets.py` | The comparison sheets in `Previews/WebDemo/`. |
| `make_paint_backdrop.py` | **Unfinished.** It makes `WebDemo/ui/s3_paint_backdrop.png` for the painted-layer test. Its colour inversion is still wrong for some bright and saturated pixels (99th percentile error about 105 levels), and no game code uses the file yet. |
| `remove_duck.py` | The duck-removal fill. You declined its results; it is kept for reference only. |
| `record_r2.cjs` | Records the `?s3=round2` test. It uses real swipes and real mouse clicks on the HUD buttons (pause, Bubble Blast, Turbo Spin), and each input fires when the mascot reaches a set point on the track. Use `dry` mode to print the game state at each input. |
| `r2_func.cjs` | Functional checks for `?s3=round2`: hearts down to zero and back to Tap to Start, pause (button and keyboard), Bubble Blast clearing brushes and counting down to a disabled button, and Turbo Spin speed and protection. |
| `r2_sheets.py` | The comparison sheets in `Previews/WebDemo/screen4_round2_test`. |

Seeded copies of `tools/seeded_run.cjs` with a switch turned on were made with a one-line `sed`: insert `window.__BW_S3__ = ['all', 'edges'];` after `window.__BW_TEST__ = true;`.
