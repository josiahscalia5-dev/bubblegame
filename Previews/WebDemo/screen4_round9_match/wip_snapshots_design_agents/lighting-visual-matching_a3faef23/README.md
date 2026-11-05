# Work-in-progress snapshot: lighting-visual-matching (Tunnel & Lighting: finish gate fixes)

- **Taken:** 2026-11-05 15:02 UTC, by `Tools/snapshot_agent_worktrees.py` during the automatic save. Unfinished work: it is not in the playable game until the lead merges it.
- **Worktree branch:** `worktree-agent-a3faef23dd555533b` (local only), started from `5d742e0`.
- **Its own commits so far:** 
  - `485893d Round 9 Tunnel & Lighting gate fixes (checkpoint): concentric drum rings with thin ice-blue lines, tight pink inner rings, royal-blue walls, far-collectible fade fixed, left coins separated as in the original (?s3=match only)`
  - `942b8cd Round 9 Tunnel & Lighting gate fixes (restored WIP): screen-space centre placement (mtPlace) and warm far end, star removal and lime pull in the Reference 5 maps, wall troughs and bands, thinner rim, gem / right coin / sock places (?s3=match only)`
- **To restore it:** copy `files/` over a checkout of the starting commit, then `cd WebDemo && node build.mjs`. `changes.patch` is the same change as a readable diff.

## Files (10; full copies in `files/`)

- `WebDemo/src/game.js`
- `WebDemo/src/tunnel_r9_match.js`
- `WebDemo/src/tunnel_r9_match_water.js`
- `WebDemo/textures/screen4/textures.json`
- `WebDemo/textures/screen4/tunnel_base.png`
- `WebDemo/textures/screen4/tunnel_colour.png`
- `WebDemo/textures/screen4/tunnel_detail.png`
- `WebDemo/textures/screen4/tunnel_normal.png`
- `WebDemo/textures/screen4/tunnel_var.png`
- `WebDemo/tools/screen4/derive_ref5_water.py`
