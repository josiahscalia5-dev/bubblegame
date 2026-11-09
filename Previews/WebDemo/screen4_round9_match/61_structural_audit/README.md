# Screen 4 structural audit (7 November 2026, nineteenth session): read-only, NO game changes

The user's brief (about 13:15 UTC), with the user's Structural Repair Kit
(`Design/ReferencePacks/2026-11-07_Screen4_Structural_Repair_Kit_from_user/`, checksums verified; its copy of the original
is 748 px wide, so measurements use the repository's 767 x 1536 ORIGINAL, the authority in `CLAUDE.md`).
Method: the live scene of the accepted `?s3=intunnel` (swim2) through threejs-devtools-mcp and chrome-devtools-mcp
(`window.__bw.debug()`, `__bw.advance()`; debug page only), the source, the earlier reports (`52_diagnosis`,
`54_specialists`, `59_blend`, `60_fidelity`) and measurements on 768 x 1536 canvas renders at the original's framing
(`scripts/measure.py`, output `measurements.txt`; frames = the committed bundle's identity renders in `60_fidelity/frames/`).
Sheet: `ORIGINAL_vs_ACCEPTED_start_plus1s_plus2s.jpg`.

## Measured facts

- **Camera** (live): fov 68 deg vertical, aspect 0.5, 3.1 m behind her, looking straight down the tube; y 1.61 m at the
  start, 1.40 m at +2 s. Post: RenderPass, bloom 0.16, grade, output; Neutral tone mapping, exposure 1.05, sRGB output.
- **Start composition already matches:** the four staged coins' centres are within 0.01 of the original's (x, y as
  fractions of the frame); drawn 7-23 % larger (d 166/165/96/81 px against 153/155/78/73).
- **Tunnel colour at the start is close:** zone x .30-.70, y .30-.52: mean blue hue 217.5 deg (ORIGINAL 214.6), saturation
  0.63 (0.71), periwinkle-violet 26 % (19 %).
- **The staged set does not survive motion** (live, `__bw.advance`): the washer rim `r6Porthole` (`r6Face`, `r6Bezel`,
  `tunnel_r6.js`) is ONE fixed object at z 2.8, 4.3 m in front of the start camera. 0.5 s after the tap the camera is
  0.68 m from it; at +1 s it is 2.9 m behind the camera. The tube `heroWalls` runs z 3.5-41.2, the layout's tunnel
  z 3.9-37.2 (about 4.9 s of riding). At +1 s / +2 s the top third becomes the tube's ceiling with two cream radial beams,
  the staged coins are gone and one gameplay coin fills the centre (d 134 / 208 px), and the hazard brushes loom.
- **Her fur** (y .62-.90): hue 327 deg (ORIGINAL 317, magenta), saturation 0.51 (0.68), value 0.97 (0.92).
- **The water in front of her** (y .80-.84, above the HUD): ORIGINAL azure 16.7 %, periwinkle/lavender 12.7 %, white 22.8 %
  in separate rounded glassy forms; ACCEPTED azure 50.4 %, lavender 0.3 %, white 19.9 %, one continuous surface.

## Root causes (file / scene object), what to change, what to keep

| # | mismatch | measured cause | structural change (behind one flag) | keep |
|---|---|---|---|---|
| 1 | rim, housing and composition lost while moving | `r6Porthole` fixed at z 2.8; the stage (`heroCollar`, `heroBubbles`, framing brushes, staged coins) placed for the start camera only (`tunnel_r9_match.js` `STAGE`, `MATCH_CAM`) | **carried stage:** the rim, housing and collar held at the start view's offset from the camera through the tunnel (z 3.9-37.2), handed over before the exit; gameplay objects stay in world space | camera, the start frame |
| 2 | cream beams at the top | `tunnel_colour.png` clamped in log r (`tunnel_r9_match.js:383`): its outer row's cream columns become endless radial bars once the housing has passed (lighting report S3) | the carried housing keeps covering them; mirror the map's edge (S3) | the colour map |
| 3 | rings flat while moving | the ring map `uFocusRings` (`tunnel_r9_focus.js:126`) is sampled at the static screen-polar `bv`, no travel term (`tunnel_r9_match.js:642`) | rings stream outward with her travel (ln r flow tied to distance swum, as swim2 does for her water) | its colours (close at the start) |
| 4 | narrow, peaked, egg-like body | (a) Screen 3's presentation `MASCOT_PRESENTATION.stretch [0.95, 1.07, 0.95]` (`opening.js:580`, applied at `:430-431`) draws her 12.6 % taller than her mesh on Screen 4 too; (b) the mesh's egg crown (60_fidelity); (c) a dark gap between her legs, shown when she rides higher (60_fidelity_review) | Screen 4 presentation: stretch off; a smooth crown profile fitted to the ORIGINAL's widths (151 / 209 / 241 px at 20 / 40 / 60 px under her top; fidelity reached 149 / 225 / 254, too square); a fur-coloured underside fill closing the gap | mesh, collider, ride height, animation |
| 5 | pale bubblegum fur with square flecks | Screen 3's `uSpike 1` droplets, hashed per fur cell (`shaders.js:593-595`); violet ambient `uGround` and a key light that push the fur to value 0.97, where Neutral tone mapping desaturates (`game.js:888-893`, `shaders.js:581-583`) | Screen 4 fur settings: no droplets, lighting kept below the white point, the fur's hue and saturation set to the ORIGINAL's measured 317 deg / 0.68, a whiter rim edge | the fur shader and texture |
| 6 | flat water carried with her; no glassy mounds | `heroSwell` (`tunnel_r7_hero_water.js`): one transparent pad, 2.6 m wide, built in her frame (no depth write, render order 5), 24 % of the frame on its own; every recolour (water2-R9, blend) kept the pad; fidelity's caps sat on her with a multiply violet tint (the balloons) | **replace the pad** with a field of separate rounded glassy wave lobes on the floor water, in water space (they flow past her), sized and placed from the ORIGINAL; azure bodies, lavender where light passes through, darker cores, crisp white rims; a low contact ring at her waterline that follows the water, not her bob; the floor's existing wake left visible. No spheres, no multiply tint, no white sheet | swim2's flow, spray cap, the floor water |
| 7 | coins, gem, sock, brushes, bubbles | start positions already match; while moving they are gameplay (lanes, hazards) | none, apart from the staged coins' drawn size x 0.88 (pickup radius unchanged) | all gameplay objects |
| 8 | colour pipeline | the walls are already written as screen colours through the inverse grade and tone mapping (`tunnel_r9_match.js:27-30`) | the new water and fur use the same compensation, so their measured colours land on screen | tone mapping, bloom, grade |

## Why this differs from the earlier passes

Every earlier pass changed only the water at her or her mesh, on a set built for ONE camera position, and was judged mostly
at the start frame. The moving frames lost the rim and gained the beams whatever was done to the water. This plan changes
the structure: the set holds while moving, the inherited Screen 3 settings come off her, and the water at her stops being
an object carried with her.

## The candidate (only after the user's approval)

`?s3=intunnel,structmatch` (`STRUCT_ON = BT_ON && LIST.includes('structmatch')` in `tunnel_s4_bt.js`, added to the
`SWIM2_ON` line), one engineer (`screen4-water-motion-engineer`) in one worktree, new file `tunnel_s4_struct.js` plus gated
hooks. Three parts that can be switched off for the single review: `structmatch,nostage`, `,nohero`, `,nowater`. Proofs:
the accepted `intunnel`, `noswim2`, `blend`, `fidelity`, `water9` and the normal game 0 px; `s3_func`, `r2_func`
(VW=135 VH=270) and the motion trace's gameplay fields identical; Pixel 7 sheets ORIGINAL | ACCEPTED | NEW at start,
+1 s, +2 s, swipes, jump, landing; contact close-ups; the 7 s clip; flow metric; then one `game-art-director` review.

## Stopping rule

If the review still finds it clearly short, the blocker is most likely the painted illustration against real-time
rendering in the foreground foam and the fur. The next step would then be art production, not another tuning pass: a
Blender-sculpted dome mascot with shell fur, or painted wave and foam sprite sheets, costed then.
