# Lane arch56 handoff (9 November 2026 ~16:15 UTC, session 47f75e22, lighting-visual-matching). NOTHING here is approved.

Switch: `?s3=...,s56,arch56` (needs `level1`). Without `arch56` nothing changes. `,notm` = procedural modules B instead of the models; `,gearv2` = old gear.
File: `WebDemo/src/s56_arch.js` (all numbers in `ARCH56`, live in the page as `window.__bwArch56`). Tools: `WebDemo/tools/arch56/`.
Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png` (864x1536), game at u 206.

## Capture (the baseline was taken WITHOUT `home`: `home` puts up the Home screen over the game)
`cd WebDemo && EVAL="$(cat tools/arch56/probe.js)" S3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56,arch56 ZS=tap,206 VW=432 VH=768 DPR=2 flock /tmp/bw_browser.lock node tools/s56/shots56.cjs $PWD <out>`
`probe.js` = projected vanishing point, mascot bounds, gear centres (instanced model entries are meaningless: they sit at the origin).
`postdump.js` = post passes, grade uniforms and lights (to find the u 206 red tint). `orient.cjs` = a model from +x/-x/+z/-z.

## Done (built, captured at tap + 206; frames in Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/arch56/)
- Bays not of type A (k mod 5 != 0): left = the user's Machinery_tiny cluster (front = model +x, turned 0.4 rad toward the camera, 2.4 m tall,
  far-front corner at 1.25 m), right = procedural pink star housing (`moduleStar`) + the user's 913_914 glass chamber on its near outer corner;
  additive glows `tmHalo`/`tmCore` in the chambers. InstancedMesh per 30 m chunk; LOD switched per chunk in update() (near = m.z-6 .. m.z+22).
- Gear: the user's blue_jt (cobalt, gold hub) replaces gear_v2; axle to the camera, turned 0.35 rad out; ring 56 (u 206) centre measured
  (0.816, 0.397) vs the art director's target (0.807, 0.392); ring 0 (Scene 5) has its own `gear0` place. No violet emissive.
- Gold/brass: yellower base + yellow emissive (they were salmon / red-orange). Camera: kept as s56's (coordinator's call), `cam: null`.
- The orange diagonals in the baseline = s56's crown pipes (s56_tunnel.js section 3); arch56 skips that section, so they are gone.
- Models in `WebDemo/models/s56tm/` (copies of the coordinator's gltfpack mobile LODs, re-copied after 15:57): Machinery_tiny_lod1 (27,381 tris,
  512 tex), Machinery_tiny_far (6,573 tris, 256 tex, made here: gltfpack -si 0.25 -sa of lod2), 913_914_lod1 (15,000, 512), 913_914_lod2 (4,843, 256),
  blue_jt_tiny_lod1 (16,160, 512). Older unused: mach_lod*, t911_lod* (previous session).

## In progress (where I stopped)
- Finding why lit materials (Machinery texture, pink module A, gold rails) turn RED at u 206 (#b21f15, #f53c3b) while the unlit shell keeps
  its violet; at tap they are pink. Suspects: the hero grade `uHero` (tunnel_r7_hero.js) is on only inside the old drum (off at 206), or env
  reflections in the turned track. Run `postdump.js` at tap + 206 and compare.
- The Machinery reads small and low at 206 (tops ~0.40, target 0.26-0.30): R 2.55 drum is narrow, half the model is inside the wall. Next: bays
  closer to the camera (tm.mach.dz ~ -1.4), squash model depth (non-uniform scale x ~0.6) so the tall front stays inside the drum.
- The gear at u 206 is hidden behind the game's own big right-lane coins (gameplay, not movable). Report, do not move pickups.

## Next steps
1. Fix the u 206 red tint for arch56 materials (own neutral env for MeshStandard, or emissive floors), re-capture tap + 206.
2. Machinery size/placement as above; side-by-side vs approved with `Previews/.../11_scene56_match_d847dce2/scripts/sheets56.py` or a crop sheet.
3. Prove 0 px change without `,arch56` (bundle vs main), commit, push `claude/lane-s56-arch-d847dce2`.
