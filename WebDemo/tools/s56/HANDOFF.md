# Lane s56 (water): session ddf175f2 update (9 November ~19:05 UTC, env6 integrated candidate). NOTHING is approved.

Judge in the integrated list `intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56,coin6,hero6,water6,brush6,arch56,env6` (env6 = the hero
grade at u 206 too, so the water uses its `*H` palette). Evidence: `/home/user/bubblegame/Previews/WebDemo/six_scenes/17_screen6_env_ddf175f2/water6/`.
Tools: `tools/env6/var6.cjs` (frozen u 206 frame, live variants; `B.advance(0.3)` inside a variant gives real motion frames on the same run).
Measures need scipy: `uv venv` + `uv pip install scipy numpy pillow` (the metrics venv is not installed in this environment).

## Done (commits a60ebeee, then this one)
- His dome (`hero6`, only with water6 + hero6, `HERO6W`): his model is a squat ball (x +-1, y -0.94..0.87, side nubs HIGH at y ~0.3), so
  sunk to the nubs it was a flat trapezoid. Now: `STRUCT.match4.scaleS6` [1.07, 1, 1.07] (round, approved width), `S56.hero6` squash 1.6
  (m.tilt.scale.y in the water, eased back to round in the air), sink 0.78 (waterline through his nubs), the swim bob (m.squash.position.y)
  kept at its own size under the stretch, shell fur short and radial (`hero6.fur` len 0.06, comb 0, lean 0.05: struct's shell uniforms set
  from s56_tunnel.js). water6 WITHOUT hero6 keeps v2's body (`S56.water6Hero`).
- Water (hero ramp, R ~ 0): deepH (0, 0.09, 0.60), midH (0, 0.36, 0.76), turqH (0.06, 0.72, 0.98); the height shading split into the
  swell's and the chop's shares (`hSwell` 0.8, `hChop` 2.0, new uniform uW6; the long swells alone made whole-foreground light/dark bands);
  lean 4, height 3, bias -0.07, turqAt 0.6, chop 1.4, crest 0.10, line 1.4, collar 1.5, froth 2.0. splash6: rate 110, size 0.010-0.026, stretch 3.
- Measured at u 206 (aw56, fg): approved cob 9.5 az 40.8 tq 21.3 pale 19.7 grad 3.86 p5 0.32 ring 33.4 % | before cob 0.2 az 55.5 tq 28.8
  pale 10.9 grad 1.89 p5 0.44 ring 5.8 % | now cob 22.7 az 25.2 tq 33.2 pale 13.0 grad 2.84 p5 0.31 ring 7.9 %. Hero box (pink): approved
  x 0.260-0.736 top 0.600 bot 0.758; now x 0.303-0.753 top 0.612 bot 0.772, widths at 10/25/50/75 % of its height 0.148/0.231/0.391/0.353
  (approved 0.172/0.279/0.366/0.418; before 0.182/0.345/0.449/0.378 = flat top).
- Identity: without water6 + hero6 the build is 0 px different at u 206 (var6) and tap (shots56) from the df3b4256 bundle (`water6/06_identity/`).

## Next (in order)
1. The swells between him and the camera cover his base at +0.3 / +0.6 s (pink height 0.115-0.119 H vs 0.160 at the placed frame): in the
   vertex shader damp the geometry waves inside ~1.5 m behind him toward his own wave height (the ring), or make his ride follow the
   higher of his own and the near-side wave.
2. The splash crown: still too little white at his sides (ring pale 7.9 % vs 33.4 %): spiky upward spray sheets at both sides, not dots.
3. Cobalt now above approved (22.7 vs 9.5 %) and azure below (25 vs 41 %): move midH toward azure (G ~0.30) and bias ~ -0.04.
4. His fur colour: approved lighter pink with a lighter crown (struct's fur, ask the coordinator).

# Lane s56 (water): session 3849f5c8 update (9 November ~17:40 UTC). NOTHING is approved.

## Priority (coordinator, the user): SCREEN 6 water FIRST (water6 v2 at u 206), then Screen 5; the wash water of Screens 3-4 is POSTPONED.
- Screens 3-4 (postponed, not started in code): `tools/s56/op56.cjs` = fast opening frames + probes (hero / porthole projected) with VARIANTS;
  plan noted below. No `seq7` code exists yet in `opening_six2_water.js` / `opening_six2.js` (the plain launch is untouched).
- Plan for Screens 3-4 when resumed (gate on `seq7`): replace `vortex.water`'s material in `opening_six2_water.js` with a churning surface (rolling
  waves 0.04-0.06 m, turquoise faces, thin white crests, foam band round him), level from the drum bottom (story 4.6) to his chest (~0.46 m, his mouth
  is at ~0.486, eyes ~0.572) during story 5.3-7.3, climbing the drum wall on one side (swirl); bob/tilt him in the `s < 7.7` branch; fly-through
  (story 7.5-8.45) real waves continuous with the s56 water.

# Lane s56 (water) handoff: session 47f75e22, screen4-water-motion-engineer

Branch `claude/lane-s56-tunnel-ac4e3449`. Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png`.
Evidence: `/home/user/bubblegame/Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/water/` (main checkout, evidence only).

## Done and tested
- Merged the integration head (20be0c50, brush6 hook) into the lane. The earlier pass-3 water WIP now sits behind the switch `,water6`
  (`WATER6_ON` in `src/s56_tunnel.js`). With water6 off, the s56 default was 0 px different from the integration build at tap and u 206
  (`water/off_lane/` against `proofs/hook_off/`; commit 48eb6615). Re-prove this after every change.
- The cause of the pale patches was measured by ablation on the s56 default (`water/cause_default/`, `tools/s56/ab56.cjs` + `ab56.py`).
  - Measured with the canvas only, inside the water mask: at tap, the horizon "sun" spec lobe took pale from 27.5 % to 15.6 % (those are the blocky
    foreground blotches). The collar, wake and crest whites took pale from 27.5 % to 16.1 %.
  - At u 206 the whites took pale from 11.1 % to 1.9 %.
  - The s3 / s4 / l1 soap bubbles changed nothing (0.00). The suds changed 0.8, particles 0.9 or less, bloom 0.3 or less, the grade 0.
- Colour probe (`water/probe/`, lut.json): the water drew 210 known colours through the real post chain.
  - At u 206 the drum grade (`tunnel_s4.js:532-537`, round4/5 contrast about a 0.5 pivot) crushes shader green below about 0.2 to violet.
  - Under the hero grade (tap) the same input stays azure. The palettes inverted from the probe are in `S56.water` (deep/mid/turq for the drum, deepH/midH/turqH for the hero grade).
- `tools/s56/aw56.py`: the art director's water measures for any frame. It reproduces the qa numbers for the approved image and the baseline.

## In progress (where I stopped)
- water6 v2 is written and builds:
  - calibrated ramp shading (no multiplication toward black);
  - a 7-wave fine chop (`CHOP_SPEC`);
  - crest lines with a screen-pixel width (`s56Chop(..., lw, out line)`);
  - a thin broken collar strongest at his sides, ripple rings round him, thin wake lines;
  - the palette blended by the grade's own `uHero` (read via `window.__bw.debug().composer`);
  - `S56.hero6.sink` 0.4 (on m.tilt only);
  - `S56.splash6` side droplets stretched along their flight.
- I was running the first tuning A/B (`water/tune1/`, variants of lean / crest / chop / height) at DPR 2. It is NOT yet captured with shots56, nor judged.

## Next steps
1. `cd WebDemo && node build.mjs`. Capture with `S3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56,water6 ZS=tap,206 VW=432 VH=768 DPR=2 flock /tmp/bw_browser.lock node tools/s56/shots56.cjs $PWD <out>`.
   With `home` in S3 the Home screen covers the game: the coordinator's baseline used the shots56 default S3.
2. Measure with `$BW_PY tools/s56/aw56.py <approved> <frames>`. Approved fg: cob 9.5, az 40.8, tq 21.3, pale 19.7 (17 % thin), grad 3.86, p5 0.32, hero h 0.158 H.
   Baseline u 206: cob 51.7, az 5.9, tq 0, grad 1.28, p5 0.14, hero 0.238 H.
3. Tune live with `ab56.cjs` VARS (S56.water fields), then judge side by side with the approved image; revert anything that looks less like it.
4. Re-prove the default: S3 without water6 gives 0 px against `proofs/hook_off/`. Run trace56.cjs: the gameplay fields must equal the default's.

## Known problems
- The approved camera framing and the brushes belong to other lanes (arch56, brush6).
- At tap the hero grade differs from u 206, so check both.
