# Work-in-progress snapshot: lighting-visual-matching (Tunnel & Lighting: camera, ribbons, objects)

- **Taken:** 2026-11-06 00:39 UTC, by `Tools/snapshot_agent_worktrees.py` during the automatic save. Unfinished work: it is not in the playable game until the lead merges it.
- **Worktree branch:** `worktree-agent-ae55466877e7d52cb` (local only), started from `2975aea`.
- **Its own commits so far:** 
  - `f994933 Focus objects re-placed for the new camera (hero_probe PICKS, real captures at 3.0 s): lower-right coin (0.894, 0.734) w 0.219 [original (0.893, 0.733) 0.219]; small upper-left coin out from behind the left brush to (0.151, 0.470) [0.152, 0.471]; big left coin (0.195, 0.608); gem (0.324, 0.508) h 0.035 [0.326, 0.511, 0.033]; first sock smaller, cuff top 0.565 [0.565], x 0.665-0.80 [0.65-0.80], tipped less so its opening is hidden; the two framing brushes smaller and higher (left x 0-0.20, y 0.23-0.42; right x 0.81-1.0, y 0.41-0.62); four coins' gold 4.78% (target 4.0-4.8). All pick-ups in reach (s3_func under focus: 12 coins, 1 gem, 2 socks, no console errors); Pixel 7 checked`
  - `12f11f1 Tunnel & Lighting notes: the seam's cause and fix, object measures and probe picks for the new camera`
- **To restore it:** copy `files/` over a checkout of the starting commit, then `cd WebDemo && node build.mjs`. `changes.patch` is the same change as a readable diff.

## Files (9; full copies in `files/`)

- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/NOTES.md`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_obj_info.json`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_obj_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/focus_obj_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/frames/phone_412x839_focus_obj_3.00s.png`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/b_metrics.sh (new)`
- `Previews/WebDemo/screen4_round9_match/17_tunnel_lighting_focus/scripts/tune_cands.cjs`
- `WebDemo/src/tunnel_r9_focus.js`
- `WebDemo/src/tunnel_r9_match.js`
