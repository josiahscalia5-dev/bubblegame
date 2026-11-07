# Screen 4 opening: diagnosis and repair plan for the user's Visual Mandate (7 November 2026, nineteenth session)

READ-ONLY: no game file was changed. The user's mandate kit is stored in
`Design/ReferencePacks/2026-11-07_Screen4_Opening_Visual_Mandate_Kit_from_user/` (its five images are byte-identical to the
repair kit's). Its 748 x 1536 "authentic" copy of the original is the same artwork at the same scale (template match 0.994 at
scale 1.005) with a narrow strip cropped off, so the comparison uses the repository's fuller 767 x 1536 ORIGINAL, scaled
UNIFORMLY to 537 x 1076 (never stretched). Builds on `../61_structural_audit/README.md` (live inspection, colours, coins).

**Captures:** the accepted `?s3=intunnel` (swim2, bundle `38466b67`), real page screenshots WITH the HUD, the game's
538 x 1076 stage (the original's own 1 : 2 shape), seed 7: `S3=intunnel TIMES=0,1,2,3 SETTLE=900 node tools/screen3/s3_shot.cjs`
(no console errors) -> `frames_accepted/t0.png` (Tap to Start), `t1.0`, `t2.0`, `t3.0`. Sheet:
`ORIGINAL_vs_ACCEPTED_opening_t0_t1_t2_t3.jpg`. Measurements: `scripts/measure_opening.py` -> `measurements_opening.txt`.

| measure (fractions of the frame) | ORIGINAL | Tap to Start | +1 s | +2 s | +3 s |
|---|---|---|---|---|---|
| lavender washer housing, y .16-.36 | 21.3 % | 16.3 % | 1.7 % | 1.3 % | 0.7 % |
| her crown width 8 / 16 / 25 % below her top | 0.19 / 0.27 / 0.32 | 0.09 / 0.20 / 0.23 | 0.09 / 0.18 / 0.24 | 0.06 / 0.22 / 0.26 | 0.10 / 0.20 / 0.24 |
| her width at 50 % (where the water cuts her) | 0.41 | 0.45 | 0.45 | 0.42 | 0.34 |
| her box | x .25-.73, y .70-.86 | x .23-.72, y .68-.85 | similar | similar | similar |

From `61_structural_audit` (canvas renders at the original's framing): the staged coins' centres are within 0.01 of the
original's (drawn 7-23 % larger); tunnel blue hue 217.5 deg against 214.6, saturation 0.63 against 0.71; fur hue 327 / sat
0.51 / value 0.97 against 317 / 0.68 / 0.92; foreground water azure 50 % / lavender 0.3 % / white 20 % against 17 / 13 / 23
in separate rounded forms. Live: camera fov 68 deg, aspect 0.5, 3.1 m behind her; the rim `r6Porthole` fixed at z 2.8
(behind the camera 0.4-0.5 s after the tap); the staged tube z 3.5-41.2, the layout's tunnel z 3.9-37.2.

## Diagnosis (what the ORIGINAL shows, what the game shows, why, where, what kind of fix)

| # | ORIGINAL | game now | reason (H = hypothesis, to confirm with one hide-render first) | source / object | fix type | smallest structural fix | difficulty / usage risk |
|---|---|---|---|---|---|---|---|
| 1 | washer lip, rim and lavender housing frame the top during the whole look | right at Tap to Start; gone by +0.5 s (housing 21 % -> 1-2 %), the tube's ceiling and two cream beams instead | the rim is one fixed object 4.3 m ahead of the start camera; the stage (collar, hero bubbles, framing wall brushes, staged coins) is placed for that one camera | `r6Porthole` (`r6Face`, `r6Bezel`, `tunnel_r6.js`); `tunnel_r9_match.js` `STAGE`, `MATCH_CAM`; beams: `tunnel_colour.png` clamped (`tunnel_r9_match.js:383`) | scene staging | **carried stage**: rim, housing, collar and the two framing wall brushes (decor at y 1.8-2.6 m, not hazards) held at the opening view's offset from the camera through the tunnel, released before the exit; map edge mirrored | medium-high / medium |
| 2 | deep concentric cobalt/cyan rings to a warm golden centre, high contrast | similar at the start but a pastel rainbow band mid-tunnel and a weaker warm core; rings static while moving | H: the colour map's iridescent band (derived from the user's Reference 5) and the centre glow settings; the ring map has no travel term | `tunnel_colour.png`, `uFocusRings` (`tunnel_r9_focus.js:126`, sampled at static `bv`, `tunnel_r9_match.js:642`); `MATCH.centre` | material + motion | grade the map's mid band to the ORIGINAL's measured colours, warmer core; rings stream outward with her travel | low-medium / low |
| 3 | thick lavender-to-gold metallic lip | thinner, paler band | the bezel is a 0.135 m ring (inner 2.506, outer 2.641 m) with `rim_ramp.png` | `r6Bezel` (`tunnel_r6.js`), `rim_ramp.png` | geometry + material | a thicker bevelled lathe profile with the original's lavender-to-gold sheen | low-medium / low |
| 4 | broad round magenta dome above the water, side tufts | narrow top (0.09 against 0.19 just under her top), wider cut-off base, bubblegum colour, square pale flecks | Screen 3's presentation applied on Screen 4: stretch [0.95, 1.07, 0.95] (12.6 % taller) and `uSpike 1` droplets (hashed per fur cell); the mesh's egg crown; violet ambient and a key light near white, desaturated by Neutral tone mapping; a gap between her legs | `opening.js:580` (applied `:430-431`); `shaders.js:581-595`; `game.js:888-893`; `BubbleWash_PinkFuzzyMascot_Small` (61 k vertices) | character geometry (drawn only) + material | Screen 4 presentation: stretch off, the crown reshaped at load to the ORIGINAL's measured widths (smooth arc, not fidelity's square top), an underside fill, no droplets, fur at 317 deg / 0.68 under the white point, a whiter rim edge. Blender only if the load-time reshape cannot hold | medium / medium |
| 5 | saturated, varied foreground: separate rounded glassy forms (azure bodies, lavender-blue mounds at her lower left, white rims, darker cores) | one flat azure surface with white comma strokes, carried with her | `heroSwell` is one transparent 2.6 m pad in her own frame (24 % of the frame alone); recolours (water2-R9, blend) kept the pad; fidelity's violet multiply caps sat on her | `heroSwell` (`tunnel_r7_hero_water.js`, `tunnel_r9_match_water.js`); the floor `lqFloor` | water geometry + material | replace the pad by a field of separate glassy wave lobes on the water, in water space (they flow past her), staged at the start in the ORIGINAL's arrangement; a low contact ring that follows the water; no spheres, no multiply tint, no white sheet | high / high (the biggest part) |
| 6 | sock lying diagonally, smiling; gem bright; coins as placed | sock upright; gem smaller; staged coins 7-23 % larger | staged poses and drawn sizes | `MATCH.sockPose` (`tunnel_r9_match.js:942`); staged coin / gem scales | staging (drawn only) | sock pose, gem and staged coin drawn sizes from the ORIGINAL; pickups unchanged | low / low |
| 7 | two ability cards in the bottom corners, partly off the frame, no labels | larger labelled buttons fully on screen, a Tap to Start pill between them, covering the foreground water | the HUD's own layout | `index.html` (`#blastBtn`, the Turbo Spin button, the Tap to Start panel; lines 224-316) | HUD CSS only (needs the user's OK) | under the flag: smaller buttons lower in the corners, labels kept small; Tap to Start kept; functions unchanged | low / low |
| 8 | the two framing brushes stay at the sides | from +1 s the lane hazards (z 9.4 m onward) loom large as she reaches them | gameplay: hazards approach | `s4Brush` hazards | keep | none (gameplay); the framing wall brushes are carried with the stage (row 1) | - |
| 9 | small sparkles in the tunnel | big pink pickup stars over her at +2 s | pickup bursts (particle kind 2, uncapped) | `game.js` `fx` | polish (P3) | drawn size cap on the bursts | low / low |
| 10 | one fixed painted viewpoint | the camera follows the path's slopes (y 1.60 -> 1.42 -> 1.45 -> 1.90 m by +3 s) | `updateCamera` rides higher on drops (`game.js:1219`) | `game.js` `updateCamera` | keep | none: the path and camera response stay | - |

The camera itself (fov, aspect, distance) is not the cause: at Tap to Start the composition already matches (coins
within 0.01, the rim under the mission card, brushes at the sides, her box).

## The plan: ONE integrated candidate `?s3=intunnel,structmatch` (only after approval)

One engineer (`screen4-water-motion-engineer`), one worktree, new `tunnel_s4_struct.js` plus gated hooks
(`STRUCT_ON = BT_ON && LIST.includes('structmatch')`, added to the `SWIM2_ON` line), the accepted build untouched.
Parts switchable for the review: `,nostage`, `,nohero`, `,nowater`, `,nohud`.

- **Checkpoint A, the opening (Priority 1):** rows 2-7 (tunnel grade, rim profile, her shape and fur, the new water, props,
  HUD). Then ONE sheet ORIGINAL | ACCEPTED | NEW at Tap to Start with close-ups. If the improvement is not clearly visible,
  STOP and report (no second loop).
- **Checkpoint B, the first 0-3 s (Priority 2):** row 1 (carried stage, streaming rings), row 9 optional.
- **Proofs:** the accepted `intunnel`, `noswim2`, `blend`, `fidelity`, `water9` and the normal game 0 px; `s3_func`,
  `r2_func` (VW=135 VH=270), motion trace gameplay fields identical; Tap to Start, +1, +2, +3 s; close-ups of her waterline,
  the washer opening and the rings; swipes, jump, landing; a short real gameplay clip; then ONE `game-art-director` review,
  measured changes and its subjective verdict reported separately.

## Limits (cannot be reproduced exactly as moving 3D)

The painted foam micro-detail and sparkle density; the illustration's artistic perspective (coins and brushes composed
for one picture, while gameplay coins follow lanes and hazards approach); the fur's painted needle strokes. If checkpoint A
falls clearly short on her or the water, the next step is art production (a Blender-sculpted dome mascot with shell fur,
or painted wave and foam sprite sheets), costed then, not another tuning pass.
