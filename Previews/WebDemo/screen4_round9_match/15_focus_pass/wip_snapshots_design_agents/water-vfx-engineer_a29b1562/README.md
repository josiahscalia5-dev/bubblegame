# Work-in-progress snapshot: water-vfx-engineer (Water & VFX: splash round her, floor)

- **Taken:** 2026-11-06 00:34 UTC, by `Tools/snapshot_agent_worktrees.py` during the automatic save. Unfinished work: it is not in the playable game until the lead merges it.
- **Worktree branch:** `worktree-agent-a29b1562d2b9d7e06` (local only), started from `d6e836d`.
- **Its own commits so far:** 
  - `3b685be Focus floor ahead of her (AD item 5), tested at 3.0 s with the new camera: bright white-cyan splash water with bold broken white crests (white 6.8 -> 27.2%, L* 71.5 -> 79.9, median #7daee5 -> #b0d0f2, texture 4.16 -> 4.28); the zone's remaining lavender is the brushes' lane-warning glow and the sock (evidence in NOTES)`
  - `1d8b24c Focus water round her (AD item 1), tested at 3.0 s with the new camera: broken sparkling splash water instead of a flat light-blue sheet (white 5.3 -> 17.1% in small pieces, vivid blue 46.3 -> 19.8%, texture 4.98 -> 6.46, L* 71.9/74.8 -> 78.8/80.5, base 0.849); the side crests ragged with small white pieces, smaller`
  - `06edd34 WIP (not finished): focus water round her as broken splash water (spiky crest cut in the profile coordinate, white crest pieces, splash pieces, bubble rings, glints, lighter currents), ragged side crests, crest lift for the new camera; evidence and running NOTES in 18_water_vfx_focus`
- **To restore it:** copy `files/` over a checkout of the starting commit, then `cd WebDemo && node build.mjs`. `changes.patch` is the same change as a readable diff.

## Files (25; full copies in `files/`)

- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/NOTES.md`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/before_cam_info.json`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/before_cam_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/before_cam_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/focus_before_info.json`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/focus_before_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/focus_before_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/before/measure_before.txt`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/item1_water_round_her_original_before_after.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/item2_floor_ahead_original_before_after.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/item2_floor_debug_zone_green.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/measure_step1_cam.txt`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/measure_step2_cam.txt`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/step1_cam_info.json`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/step1_cam_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/step1_cam_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/step2_cam_info.json`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/step2_cam_t3.00.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/frames/step2_cam_t3.00_canvas.png`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/scripts/bubble_count.cjs`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/scripts/crops.py`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/scripts/hide_diff.py`
- `Previews/WebDemo/screen4_round9_match/18_water_vfx_focus/scripts/measure.py`
- `WebDemo/src/tunnel_r9_focus.js`
- `WebDemo/src/tunnel_r9_match_water.js`
