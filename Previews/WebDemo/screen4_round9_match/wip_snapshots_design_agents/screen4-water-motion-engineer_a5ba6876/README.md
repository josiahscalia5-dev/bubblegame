# Work-in-progress snapshot: screen4-water-motion-engineer (Decisive Screen 4 fidelity pass)

- **Taken:** 2026-11-07 11:22 UTC, by `Tools/snapshot_agent_worktrees.py` during the automatic save. Unfinished work: it is not in the playable game until the lead merges it.
- **Worktree branch:** `worktree-agent-a5ba6876e8752066d` (local only), started from `f71e130`.
- **Its own commits so far:** none yet
- **To restore it:** copy `files/` over a checkout of the starting commit, then `cd WebDemo && node build.mjs`. `changes.patch` is the same change as a readable diff.

## Files (23; full copies in `files/`)

- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/clip_compare.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/contact_band.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/crop_sheet.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/flow_metric.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/gameplay.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/grab_decode.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/identity.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/identity_all.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/measure.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/pink_silhouette.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/profile.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/record_clip.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/render.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/sheet3.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/sheet_p7.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/sheets768.sh (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/trace_compare.py (new)`
- `Previews/WebDemo/screen4_round9_match/60_fidelity/scripts/zone_water.py (new)`
- `WebDemo/src/game.js`
- `WebDemo/src/tunnel_r7_hero_water.js`
- `WebDemo/src/tunnel_r9_match_water.js`
- `WebDemo/src/tunnel_s4_bt.js`
- `WebDemo/src/tunnel_s4_fidelity.js (new)`
