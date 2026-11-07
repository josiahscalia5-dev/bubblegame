# Screen 4 `match4` in `?s3=intunnel,structmatch` (7 November 2026, about 21:30-22:30 UTC, session `398ed88c`)

The user's exact-match execution order and reference packs (`Design/ReferencePacks/2026-11-07_Exact_Match_Execution_Order_from_user/`,
`..._Water_Tunnel_and_Character_References_from_user/`). Rollback: `?s3=intunnel,structmatch,nomatch4` = the swim3 build
(bundle 81f55c8e, commit 9566f7b), 0 px. Code: `WebDemo/src/tunnel_s4_struct.js` (`STRUCT.match4`, `SHELL_FUR`), gated on
`STRUCT_PARTS.match4` (`tunnel_s4_bt.js`). Committed `e7c7953` (bundle bb2cffb8).

## The changes (measured against the ORIGINAL)
- **The washer rim through the whole run (no empty lilac area):** the lining on the tunnel's upper wall takes the ORIGINAL's
  rim bands, sampled at x .86-.93, y .15-.39 of the ORIGINAL (periwinkle #7d9ee8, lavender #c099df-#d1b0ed, violet #9775d0,
  a mauve groove #825a8c, the gold-peach band #e5957c-#eea78e with a bevel highlight, the pink-lavender face #e4b4c6), one band
  per distance to its edge, so perspective draws them as curved arcs round the blue tunnel; its edge is crisp.
- **The tunnel rings' cobalt:** the walls' grade (structTunnelGLSL) with saturation x1.32 and periwinkle pulled to azure,
  without a warm core. y .30-.60 of the page: pixels above saturation 0.75 are 11-12 % (5.5-7.6 % before; the ORIGINAL 24.5 %),
  median saturation 0.69-0.70 (ORIGINAL 0.64), luminance 0.54-0.55 (ORIGINAL 0.55) (`scripts/tunnel_stats.py`).
- **Her fur:** shell fur of her own mesh (6 instanced shells, strands rooted on her surface, tapering, deeper at the roots,
  paler at the tips) and her fur colour graded to the ORIGINAL's: her region y .66-.86 hue 319 / saturation 0.64 / luminance
  median 0.51 against the ORIGINAL's 317 / 0.66 / 0.49 (`scripts/pink_stats.py`); her box 0.530 x 0.170 of the frame against
  0.513 x 0.167 (`scripts/her_box.py`). 10 shells looked the same as 6, so 6 (cost below).

## Proofs (`proofs/`, scripts in `scripts/`; bundle bb2cffb8)
- Identity (`proofs/identity.txt`): 0 pixels differ for the accepted `?s3=intunnel` (start, +1, +3 s), `noswim2`, `blend`, the
  normal game (start, +1 s) against 38466b67; `,noswim3` against 452f9568 (+1 s); `,nomatch4` against 81f55c8e (start, +1, +3 s).
- `r2_func` identical; `s3_func` differs in the switch list and the draw count (209 -> 211 draw calls; triangles 1.42 M ->
  2.79 M at 10 shells, about 2.2 M at 6: the shells are her mesh repeated, drawn as one instanced call); the seeded
  swipe-and-jump motion trace: 0 differences in 152 frames x 17 gameplay and camera fields. No console errors.
- Frames: `frames_new/` (0, 1, 2, 3, 4, 5, 8, 14 s); the established seed-7 3.0 s canvases: `proofs/seed7_3.0s_*`.
- Recording: `videos/swim_steer_coins_new.mp4` (Pixel 7, 9 s, real swipes; NOTE: the script jumps at 5.9 s, so the 6.0 s
  frame shows her mid-jump, `air: true` in `videos/track_new.json`).

## Remaining (candid)
- The user still sees her as a flatter mound with shorter fur than the ORIGINAL's taller dome with long strands.
- The water's shapes are the accepted swell's; the ORIGINAL's curling ribbons and lavender glass bubbles are not reproduced.
- The tunnel is still less saturated than the ORIGINAL (11-12 % against 24.5 % strongly saturated pixels).
- Triangle cost of the shell fur on low-end phones not yet measured on a device.
