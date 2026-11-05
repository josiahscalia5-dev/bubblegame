# `?s3=match`: the seventh session's focused pass, merged (tenth session, 5 November 2026)

- **What:** Tunnel & Lighting's framing / sock / walls pass and Water & VFX's follow-up (froth colour, less white under her,
  far bubbles), restored from the 21:32 UTC snapshots and merged as `68c8c40` (bundle md5 `e74ba8c9...`). The
  before-build is `6b96449` (bundle `3e7fc194...`): Water & VFX's main focused pass without these two.
- **Frames:** real seeded gameplay, seed 7, DPR 1.5, HUD on, `WebDemo/tools/screen4/liquid_shots.cjs`: `match_t2.85/3.00/3.10`
  (+ `_canvas`), and the before set in `before_6b96449/`.
- **Pixel identity:** `pixel_identity_vs_6b96449.txt`. The normal game and the ten older switches, 33 raw-canvas frames,
  0 differing pixels.
- **Measured** at the new framing, which nobody had done yet: `measured_tunnel_lighting.txt` (Tunnel & Lighting's
  `measure_all.py`, copied to `scripts/`) and `measured_water.txt` (Water & VFX's `14_.../scripts/meas.py`, the Art
  Director's boxes).
  - **The waterline moved down with the closer camera.** Her base's waterline (`char.py`) is 0.873 / 0.869 / 0.866 at 3.0 /
    2.85 / 3.1 s, against the original's 0.836. The before-build had 0.836. Her sides are at 0.874 / 0.875, against the
    original's 0.809 / 0.860.
    - The camera brought her 1.2 times larger round her dome top (fixed at y 0.70), so her base drops by about 0.035 of
      the height (about 38 px at 1076).
    - The fixed "under the body" box (y 0.835-0.875) is now 84% her pink fur (the original's 16%).
    - The bank box's white is 11.3% (the original's 20.3%; the before-build's 20.2%): the froth is lower than the boxes.
  - So the two specialists' passes do not line up exactly. Water & VFX tuned the froth for the old framing, and the re-check
    planned at the new framing never ran because both stopped at the usage limit.
- **Superseded in direction:** the user's corrections of 17:15 and 17:45 UTC, given in the parallel `focus` line, rule out a
  white foam cushion round her. The Art Director (tenth session) judges `focus` closer to the original's water round the
  character. See `21_lines_merged/`.
