# Screen 4 candidate `?s3=intunnel,fidelity` (7 November 2026): NOT merged, for the art director and the user

**Structural diagnosis** (live scene, threejs/chrome DevTools; seed 7; the ORIGINAL's framing). Neither cause was a colour.
1. **Her crown is her mesh.** The glTF body (`BubbleWash_PinkFuzzyMascot_Small`, 61 k vertices) is an egg: its half-width is 0.12 at the tuft, 0.33-0.67 over the crown, 1.0 at the arms and 0.95 below. With all water hidden she is 78/153/187 px wide 20/40/60 px below her top (`52_diagnosis` `abl_01_noSwell`). The ORIGINAL is 151/209/241, a dome of about 152 px radius. Blend's 0.88 squash only reached 98/173/206.
2. **Her waterline is one band.** heroSwell's crest is cut into even teeth (`tunnel_r9_match_water.js:412`, `fsCutT`). Nothing rises over her base and nothing shows her through the water, so every tint read as a flat film (blend). The ORIGINAL's contact is a few low glassy domes over her lower edge, violet where her pink is behind them and white-rimmed: a transmission effect. The camera, render order and post were not the cause and are unchanged.

**The change** (one pass; `WebDemo/src/tunnel_s4_fidelity.js`, hooks gated on `FIDELITY_ON`; swim2 stays on):
1. Crown: her model's crown envelope is broadened once at load (x and z about her axis, strongest at the top, none from her arms down) and the tuft's tip rounded. Fur, colours, face and lighting are hers.
2. Water caps: 6 low caps sunk into the swell's crest over her base (one geometry, 2 draw calls, 3,360 triangles), drawn as real transmission. A multiply pass tints what is behind them (her pink to violet, the water to deeper blue); an additive pass gives reflection, inner light, a white rim on the lit upper-left edge and a thin ragged foam line. They are born on her side of the crest, roll out over it and sink as she swims (swim2's distance swum), slump in a jump and rise on landing. Sizes and places come from the ORIGINAL (domes of about 55 / 40 / 25 px radius). Focus's teeth are softened in front of her (valley depth x 0.35).
3. From blend (imported, not copied): her drawn lift and 0.88 squash, the damped landing and the swell crest x 0.84. NOT its flat lavender tint.

**Files:** `tunnel_s4_fidelity.js` (new); `tunnel_s4_bt.js` (`FIDELITY_ON`; `fidelity` on the SWIM2_ON line); hooks in `game.js`, `tunnel_r7_hero_water.js` and `tunnel_r9_match_water.js`. `game.bundle.js` is rebuilt, md5 `092bbd05`.

**Evidence:**
- `sheets/pixel7_{1_start,2_moving_plus1s,3_swipe_left,4_swipe_right,5_jump,6_landing}.jpg` (Pixel 7, `record_phone.cjs` ART_OFF=1 SWIPEJUMP=1; frames in `frames/pixel7/`). The ACCEPTED frames are 59_blend's recording of bundle ea0c833c, which renders pixel-identical to 38466b67 for `intunnel`.
- `sheets/framing768_ORIGINAL_accepted_fidelity_{start,T1.0,T2.0}.jpg` (`layer_diag.cjs`; ACCEPTED = the committed bundle's identity renders).
- `sheets/closeup_contact_03region_ORIGINAL_accepted_fidelity_{start,T1.0}.jpg` (the 03 crop's region, x 0-742, y 1123-1485).
- `videos/clip_compare_ORIGINAL_ACCEPTED_fidelity.mp4` (7 s) and `videos/clip_key_moments_ACCEPTED_fidelity.jpg`.

**Evaluation** (767 x 1536 frames; her mask is `pink_silhouette.py`'s; px of the frame)

| measure: what it measures (script) | ORIGINAL | ACCEPTED start / +1 s | NEW start / +1 s |
|---|---|---|---|
| roundness: crown width 20/40/60 px below her top (`profile.py`) | 151/209/241 | 87/164/193 ; 78/153/187 | 149/225/254 ; 172/223/254 |
| above the water: visible height crown to lowest pink row; pink area | 258; 57,802 | 246 / 232; 53,289 / 47,905 | 254 / 256; 56,536 / 59,416 |
| waterline: largest lavender dome at her base, w x h; share of the zone (`waterline_shape.py`) | 187 x 83; 11.8 % | 18 x 15 / 25 x 9; 0.2 / 0.2 % | 115 x 91 / 68 x 44; 13.6 / 6.1 % |
| relative wave size: that dome's width / her widest width | 0.50 | 0.05 / 0.07 | 0.31 / 0.18 |
| colour 4-64 px under her: lavender / pale / white % (`contact_band.py`) | 41 / 29 / 20 | 0.4 / 52 / 17 ; 0.4 / 45 / 16 | 48 / 32 / 5 ; 18 / 53 / 8 |
| foreground y 0.72-0.97: lavender / pale / white / cobalt % (`zone_water.py`) | 11.0 / 30.9 / 22.3 / 2.9 | 0.5 / 41.5 / 18.8 / 1.3 | 9.6 / 39.3 / 16.2 / 1.6 |
| transparency: her pink seen through the water at her base | violet domes | none (opaque crest) | violet through the caps (multiply transmission) |
| swimming: water streaming past her in the contact strip, 2.1-2.95 s, against her wobble (`flow_metric.py`, px/s) | - | 343 against 167 | 271 against 162 (`proofs/flow_metric.txt`, contact row; landing 5.55-6.2 s: 109 against 219) |
| landing (trace row 107): drawn one-frame drop; her height above the swell base | none | 59 px; 0.27 m | 0 px; 0.40 m |

The tunnel zone (`zone_water.py`) is identical to the ACCEPTED build at both moments.

**Proofs** (`proofs/`):
- `identity/identity.txt`: committed 38466b67 against rebuilt 092bbd05 is **0 px** for `intunnel` (start, +1 s, +2 s), `intunnel,noswim2`, `intunnel,blend`, `intunnel,water9` (+1 s) and the normal game (start, +1 s).
- `s3_func_compare.txt`: only the switch list, the caps' report entry and +2 draw calls differ; every gameplay field is equal. `r2_func_fidelity.txt` (VW=135 VH=270) is byte-identical to the accepted's.
- `motion_trace_gameplay.txt`: 152 frames x 17 gameplay and camera fields, 0 differences.

**Judgement.** The engineer stopped at 12:04 UTC (the previous account's usage limit) before writing its own judgement, so none is given here. The independent judgement is the art director's: `../60_fidelity_review/ART_DIRECTOR_VERDICT.md`. Report completed by the nineteenth session from the saved files only (the flow numbers above are copied from `proofs/flow_metric.txt`; nothing re-measured). The code is NOT in the game: it is in `wip_snapshots_design_agents/screen4-water-motion-engineer_a5ba6876/files/` (over `f71e130`; rebuilds to md5 `092bbd05`).
