# Screen 4 water and swim correction: `swim3` in `?s3=intunnel,structmatch` (7 November 2026, about 20:40-21:30 UTC, session `398ed88c`)

The user's correction mandate (their phone recording of the APK at bundle 452f9568, `Design/ReferencePacks/2026-11-07_Exact_Match_Execution_Order_from_user/`):
pale icy water with white comma arcs round her, a white band, swimming that slides. Rollback checkpoint: `7bf5507` (bundle
452f9568); in this build `?s3=intunnel,structmatch,noswim3` draws exactly that previous candidate (0 px, below).

## Diagnosis (layer isolation at the established 3.0 s, seed 7 frame, `layer_diag.cjs` ablations)
- The pale icy band round her is `heroSwell` itself. Hidden, the band's pink rises from 15 % to 34 % of the band (the
  ORIGINAL 21 %), the pale blue falls from 29 % to 18 %. Its face is light (#acdffc / #78c4f8 / #3f8cf0) and printed with
  white comma arcs (`MATCH_WATER.face.lace`, from the focus pass). The spray points and the splash bank add 3 points of white.
- Her waterline is NOT too high: her visible pink box (her_box.py) is 0.156-0.178 of the frame through the run, the ORIGINAL
  0.167. Lowering the crest to 0.6 showed her as a tall egg (0.245) and was reverted (crest 1.0).
- The water's colour (page, y .80-.93): the ORIGINAL's blue has median luminance 0.71, saturation 0.41, quartiles 0.60-0.81,
  20 % white; the previous candidate 0.71 / 0.45 but flat (0.62-0.77) with 13 % white from the comma arcs. It lacked
  contrast, not darkness.

## The change (`swim3`, `WebDemo/src/tunnel_s4_struct.js` STRUCT.swim3; hooks gated on `STRUCT_PARTS.swim3`)
- The swell face's own material: the comma arcs off (`lace` 0); deeper cores and the ORIGINAL's foreground blues
  (#a6defd / #4a9ff0 / #2577e2); crisp white only as splash accents at the crest (rim 0.95, small clear bubble rings 0.95,
  glints); the earlier grade eased (hue 3, saturation 1.08, deep 0.86). The floor's white streaks 0.95 -> 0.55.
- Her swim rhythm: `swimPose` (tunnel_s4_swim.js; the 1.2 Hz bob replacing the visible 1.7 Hz one, a small pitch rock and side
  sway), drawn only, on top of the game's own lean into steering, slope pitch, jump tumble and landing squash.
- The washer lining refined: more metallic contrast, a silver highlight with a shade under it, a gold-peach lip line.

## Measured (`proofs/water_colour_band_y80-93.txt`, `proofs/her_silhouette_box.txt`)
| y .80-.93 | white | blue luminance p25 / p50 / p75 | saturation | hue |
|---|---|---|---|---|
| ORIGINAL | 20.0 % | 0.60 / 0.71 / 0.81 | 0.41 | 210 |
| PREVIOUS t0 / +1 / +3 | 12.8 / 14.3 / 14.7 % | 0.62-0.65 / 0.71-0.73 / 0.77-0.78 | 0.44-0.46 | 210-212 |
| NEW t0 / +1 / +3 | 6.5 / 8.9 / 10.1 % | 0.54-0.58 / 0.67-0.72 / 0.79-0.80 | 0.46-0.52 | 209-212 |

## Proofs
- Identity (`proofs/identity.txt`): 0 pixels differ, the committed accepted bundle 38466b67 against this build 81f55c8e,
  for `?s3=intunnel` at the start, +1 and +3 s, `noswim2`, `blend`, the normal game (start, +1 s); and the rollback
  `?s3=intunnel,structmatch,noswim3` against the previous candidate 452f9568 `?s3=intunnel,structmatch` at the start, +1, +3 s.
- Gameplay: `r2_func` identical; `s3_func` differs only in the switch list and one draw call; the seeded swipe-and-jump
  motion trace: 0 differences in 152 frames x 17 gameplay and camera fields (her DRAWN position moves with the swim rhythm:
  drawn only). No console errors.
- Recording: `videos/swim_steer_coins_new.mp4` (Pixel 7, 9 s, real swipes and a jump).
- Sheets: `sheets/01_...` Tap to Start, `02_...` the established seed-7 3.0 s frame, `03_`/`04_` moving, `05_` the lining,
  `06_` the water round her.

## Remaining differences (candid)
- The water's SHAPES are still the accepted swell's; the ORIGINAL's layered curling ribbons and lavender glass bubbles at
  her lower left are not reproduced. White is below the ORIGINAL's share (the user asked for no white band).
- The tunnel rings are less saturated than the ORIGINAL's (pixels above saturation 0.75 in y .30-.60: 5.5-7.6 % against
  24.5 %), and the lining reads as a lilac plane rather than the ORIGINAL's banded rim: the next step.
