# Work-in-progress snapshot: lighting-visual-matching (Tunnel & Lighting: camera, ribbons, objects)

- **Taken:** 2026-11-05 18:48 UTC, by `Tools/snapshot_agent_worktrees.py` during the automatic save. Unfinished work: it is not in the playable game until the lead merges it.
- **Worktree branch:** `worktree-agent-ae55466877e7d52cb` (local only), started from `d6e836d`.
- **Its own commits so far:** 
  - `0dae738 Focus camera: 0.85 m further back, 0.2 m higher, fov 68, 0.05 m right (off [-0.162, 1.126, -3.1], lookY 1.655, lookX 0.142): the character at the original's size and place at 3.0 s (width 0.473 W, top 0.695, base 0.850, centre (0.500, 0.780)); the gold rim 1.036x so its outer edge is the original's circle again (0.931 W round (0.550, 0.672)); rim ramp places for this camera (rimRho); water top 0.28`
  - `2164bd3 Tunnel & Lighting focus pass: baseline 3.0 s capture, measuring tools (AD-script runner, frame fit, tune candidates, hide probe with tune), notes: camera sweep and the lower-left wedge's cause (heroWalls before the mouth)`
- **To restore it:** copy `files/` over a checkout of the starting commit, then `cd WebDemo && node build.mjs`. `changes.patch` is the same change as a readable diff.

## Files (13; full copies in `files/`)

- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/NOTES.md`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_before_info.json`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_before_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_before_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_cam_info.json`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_cam_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_cam_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/frame_fit.py`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/hide_probe_tune.cjs`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/run_ad.py`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/tune_cands.cjs`
- `WebDemo/src/tunnel_r9_focus.js`
- `WebDemo/src/tunnel_r9_match.js`
