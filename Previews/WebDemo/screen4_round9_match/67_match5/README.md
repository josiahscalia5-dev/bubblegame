# Screen 4 `match5` in `?s3=intunnel,structmatch`: longer, finer, combed fur (7 November 2026, about 23:00 UTC, session `398ed88c`)

The user's mascot correction (`Design/ReferencePacks/2026-11-07_Bubble_Wash_Mascot_Water_Focused_Correction_Pack/`): "a flatter
mound, fur too short and compact" against the ORIGINAL's full dome with long fine directional strands. Rollback:
`?s3=intunnel,structmatch,nomatch5` = the match4 build (bundle 3fff8982), 0 px. Bundle **2e9ce682**.

## The change (`WebDemo/src/tunnel_s4_struct.js`, `SHELL_FUR5`, `STRUCT.match4.scale5`; gated on `STRUCT_PARTS.match5`)
- Her shell fur: strands 2.2 x longer (0.22 of her model's units), thinner (thick 0.30) and denser (74), 8 shells, combed down
  and out over her dome (`comb` 0.45: each strand bends down along her surface), deeper at the roots, paler at the tips.
- The longer strands widened her outline (0.578 of the frame); her body is narrowed under them (x, z 0.89; y 0.985), so her
  outline keeps the ORIGINAL's width and the dome reads taller and rounder.

## Measured (Tap to Start, page captures; `scripts/her_box.py`, `scripts/pink_stats.py`)
| | outline width x height (of the frame) | her fur luminance p25 / p50 / p75 | hue / saturation |
|---|---|---|---|
| ORIGINAL | 0.513 x 0.167 | 0.38 / 0.49 / 0.61 | 317 / 0.66 |
| match4 | 0.530 x 0.170 | 0.42 / 0.51 / 0.57 | 319 / 0.64 |
| **match5** | **0.519 x 0.178** (+2 s 0.520 x 0.177; +4 s 0.517 x 0.177) | **0.38 / 0.51 / 0.58** | 319 / 0.64 |

## Water contact through the run
`sheet_2_3_4_5_6_8s.jpg` (no steering, no jump): at +2, +3, +4, +5, +6 and +8 s her lower fur is in the water and her back
above it. In the recordings the 6.0 s frame shows a JUMP (the recording script swipes up at 5.9 s; `air: true` in its track),
not a contact fault.

## Proofs (`proofs/`)
- Identity (`proofs/identity.txt`): 0 pixels differ for the accepted `?s3=intunnel` (start, 3.0 s) and the normal game (1 s)
  against 38466b67; `,nomatch5` against the match4 bundle 3fff8982 (start, 3.0 s). Seed-7 3.0 s canvases: `proofs/seed7_3.0s_*`.
- `r2_func` identical; `s3_func` differs in the switch list and the draw count (209 -> 211 draw calls, 1.42 M -> 2.52 M
  triangles: the 8 shells are her mesh repeated, drawn as one instanced call); the seeded swipe-and-jump motion trace:
  0 differences in 152 frames x 17 gameplay and camera fields. No console errors.
- Recording: `videos/swim_steer_coins_new.mp4` (Pixel 7, 9 s, real swipes and a jump at 5.9 s), committed by the autosave when
  it finished (it was still rendering at the time of this README).

## Remaining (candid)
- Not measured on a real phone: the fur doubles the scene's triangles (one draw call); on a weak phone, lower `SHELL_FUR5.layers`.
- The ORIGINAL's strands are crisper and more separate at the very rim; the water's shapes are still the accepted swell's.
