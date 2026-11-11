# Screen 6 Tripo assets (session ddf175f2, 9 November 2026). The user's approval: three models, budget 360 credits ("Option 1").

References: `Design/ReferencePacks/2026-11-09_Screen6_Isolated_Asset_References/` (isolated cuts of the EXACT approved Screen 6).
Jobs through `Tools/tripo_job.sh` (free dry run first, one lead session; logged in `Design/TripoDeliveries/TRIPO_JOBS_LOG.md`).
The Tripo key is a network secret for `openapi.tripo3d.ai` on this session's environment (never in the repository or chat).

| # | Asset | Task | Credits | Balance | Verdict |
|---|---|---|---|---|---|
| 01 | roller brush machine | `9a3b99d8-e2f2-4832-aa92-c0a67305a261` | 120 | 1060 -> 940 | **usable, NOT in the candidate.** Right structure (gold top drum, pink star bell, gold band, pink / lavender / blue / pale tiers). Tripo also built a pink wall bracket (from the wall beside the approved brush): removed in Blender (`Tools/blender_drop_parts.py`, 404 of 3,854 faces), `cleaned/brush/brush.glb`. In the u 206 frame its tiers read as glassy lavender frills and its cap sits off the spin axis: lane brush6's procedural brushes are closer to the approved, so they stay. Opt-in under `tripo6`. |
| 02 | tall glowing glass tank | `5bafa5d6-43c6-4284-946a-f984fba0061e` | 120 | 940 -> 820 | **REJECTED.** Two objects (a small pink box on legs and a squat opaque violet tank), no glow, not the approved tall glass tank. Lane arch56's procedural glowing tank is closer. Not used. |
| 03 | pink star drum housing | `c76e1944-3412-4162-9be9-f55997df0d1b` | 120 | 820 -> 700 | **usable, NOT in the candidate.** Right form (gold railing, big gold stars), too violet: shifted to hot pink in the shader. At u 206 it reads no closer than arch56's procedural star drum. Opt-in under `tripo6` (stands in arch56's slots). |

Total: **360 credits** (the approved maximum). Balance after: **700**. No other paid job.

Files: `0N_*/tripo-out/<task>/model.glb` (Tripo's originals, 4096 textures), `cleaned/` (brush without bracket; tank and drum copies),
`mobile/` (LOD0/1/2: gltfpack `-si`, textures 1024 / 512 / 256, meshopt; `Tools/tripo_mobile_lods.sh`; Khronos validator 0 errors),
game copies `WebDemo/models/s6tripo/`. Code: `WebDemo/src/s56_tripo6.js` (switch `tripo6`, Screen 6 only; without it nothing changes).
Evidence: `Previews/WebDemo/six_scenes/17_screen6_env_ddf175f2/10_integrated/` (`brush_drum_approved_procedural_tripo6_2x.png`).
