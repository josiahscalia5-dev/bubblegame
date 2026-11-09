# Lane arch56: Task 1 checkpoint (9 November 2026 ~18:00 UTC, session 3849f5c8). POSTPONED by the coordinator (Screen 6 first). NOT approved.

**Task 1 = the washer-to-tunnel transition, switch `seq7`** (add `,seq7` to the plain launch list). Code: `WebDemo/src/opening_six2_tunnel.js`
(`SEQ7_ON`, `SIX2T.back`, the `S7` block before `update`). Nothing else changed; without `seq7` the `S7` block never runs.
- **Measured cause:** the room's back wall (z -1.3) stands INSIDE the drum tube, 1.57 m behind the porthole; its curtains reach d ~1.41
  and the window's light shafts reach d 1.094 (computed from `opening_six2_room.js`). Everything seen through the porthole past d ~1.1 was the room.
- **What is built:**
  1. A closed, perforated drum back, `seq7DrumBack`, at d 1.02 (dish centre 1.07, in front of every room piece). It is an opaque ShaderMaterial
     with lavender-silver metal, ring holes with lit lips, a hub with a gold ring, six iris-blade seams, the tube's deep navy when seen from
     outside (camera z > 1.8) and the tube's uFill water swirl.
  2. The room's MESHES (never its lights, so the washer's light does not jump) are hidden once the washer's face covers the whole frame. The
     test: the four frame corners land inside the face rectangle `back.face` [-0.12, 0.74, 0.2, 1.0] on z 0.26. Computed: story ~7.79 = real ~8.29 s.
  3. The fly-through:
     - The holes glow violet (story 7.25-7.5).
     - The iris opens onto the tunnel's violet light (story 7.45-7.82).
     - Only while the room is hidden does the light dissolve, centre first, into the real tunnel (`fade` 0.13 s of story time, discard).
     - The hero's front reaches d 1.02 at story ~7.88.
- **State:** it builds. The first low-resolution check frames are in
  `Previews/WebDemo/six_scenes/15_sequence_pass_3849f5c8/arch56/task1_wip/`. NOT yet judged against approved 03 / 04 / 05, NOT yet proven identical without seq7.
- **Next when resumed:**
  1. Look at real 4.2 / 5.0 / 5.6 / 6.4 / 7.2 / 8.0-8.95 (every 0.05 s) at DPR 1.
  2. Tune the back's look against 03 / 04.
  3. Check that the camera's stop at the porthole (keys() eases to zero speed at story 8.0 = real 8.5) reads as continuous. The camera keys are not
     this lane's: propose a change to the coordinator.
  4. Prove 0 px without seq7 at real 5.60 / 8.50, DPR 2, against `14_real_game_preview_3849f5c8/stills/`.

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
