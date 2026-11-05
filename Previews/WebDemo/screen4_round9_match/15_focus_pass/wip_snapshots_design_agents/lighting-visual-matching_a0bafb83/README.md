# Work-in-progress snapshot: lighting-visual-matching (Tunnel & Lighting: objects, bands, centre)

- **Taken:** 2026-11-05 19:55 UTC, by `Tools/snapshot_agent_worktrees.py` during the automatic save. Unfinished work: it is not in the playable game until the lead merges it.
- **Worktree branch:** `worktree-agent-a0bafb8338e8bc494` (local only), started from `565eb07`.
- **Its own commits so far:** 
  - `24fd87e Screen 4 ?s3=focus, the walls' water as broad, softly blended flows without outlines (Tunnel & Lighting, kit problem B / AD item 3)`
  - `82d568c Screen 4 ?s3=focus, objects on the original's spots for the new camera (Tunnel & Lighting, AD item 8)`
- **To restore it:** copy `files/` over a checkout of the starting commit, then `cd WebDemo && node build.mjs`. `changes.patch` is the same change as a readable diff.

## Files (20; full copies in `files/`)

- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/NOTES.md`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/crop_rings_original_before_after_ribbons.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_obj_sock_only_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_obj_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_obj_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_rib_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_rib_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_rib_t3.10_canvas.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/phone_412x839_focus_obj_3.00s.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/phone_412x839_focus_rib_3.00s.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/numbers/s3_func_focus_after_objects.json`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/brushes.py`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/crops.py`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/lbins.py`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/live_sweep.cjs`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/maskbox.py`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/minima_hist.py`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/ring_metrics.py`
- `WebDemo/src/tunnel_r9_focus.js`
- `WebDemo/src/tunnel_r9_match.js`
