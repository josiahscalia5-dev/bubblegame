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
