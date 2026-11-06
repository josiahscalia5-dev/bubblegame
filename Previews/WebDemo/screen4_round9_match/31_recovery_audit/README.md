# Recovery audit on a new Claude account (6 November 2026, thirteenth session; no game changes)

- **Branch:** `ccr-d224d313-81g2dq` at `d3a35aa` (the eleventh session's last save, 03:53 UTC). The game is `?s3=focus` at
  step 4 (`666905c`); step 5 is held (`../30_step5_fill_map/`).
- **Build:** `cd WebDemo && npm install && node build.mjs` gives `game.bundle.js` md5 `73ed2a8bed22760a8800838e04e6dea9`, the
  committed bundle byte for byte.
- **Frame:** `S3=focus node WebDemo/tools/screen4/layer_diag.cjs <abs WebDemo> <out>` (seed 7, 3.0 s, no steering, 768 x 1536
  canvas): `recovered_step4_canvas_3.0s.png`, 0 differing pixels (max difference 0) against
  `../30_step5_fill_map/layers_step4/base_canvas.png`; 245 visible objects as before; no console errors or warnings.
- `01_original_vs_recovered_step4_3.0s.jpg`: the ORIGINAL approved Screen 4 beside this frame (with the interface).
