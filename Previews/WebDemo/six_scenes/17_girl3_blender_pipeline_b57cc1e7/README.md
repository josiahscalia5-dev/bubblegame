# girl3: the Blender + DeepMotion pipeline check in the real game (10 November 2026, session b57cc1e7). NOT approved; a candidate switch.

Run it: `?s3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,girl3` (without `girl3` the game is unchanged:
0 differing pixels at the Scene 1 waiting frame and at 2.1 s against this session's baseline, `16_girl13_b57cc1e7/baseline/`).

- `blender/original_model_in_blender_studio_light.png`: her existing model (girl_v2_rigged.glb) in Blender 5.2.3, Cycles, neutral light: the
  face, eyes, smile, hair and pink jacket are clean there. The game's flat magenta look comes from the game's light and material on her.
- `blender/original_inspect_report.json`: the model's facts (41,354 vertices, 57,208 triangles, 1 UV map, 1 material, 1024 colour + 512 normal +
  512 ORM maps, no shape keys, no animations; 17 joints, no feet / fingers / face joints; her weights: whole legs on the shins, upper arms on the shoulders).
- `blender/prepare_report.json`, `blender/fbx_validate.json`, `blender/fbx_reimport_tpose_and_test_pose.png`: girl_v3 (T-pose rest, feet and toes,
  eye joints, limb weights) re-imported from its FBX in a fresh Blender scene, at rest and in a bend / kneel / reach test pose.
- `blender/clip_keys_blender_cycles.png`: the PIPELINE-CHECK clip keyed in Blender on her own bones (0 stand, 0.8 s kneel, 1.6 s reach, 2.4 s lift).
  It is not the final motion; the motion is to come from DeepMotion (`Design/DeepMotion/2026-11-10_girl_v3_upload/README.md`).
- `girl3_clip_in_game.mp4` (15 fps, real three.js frames) and `girl3_clip_in_game_4keys.png`: that clip played by the game's AnimationMixer on
  `models/opening/girl_v3_test_clip.glb` (23 joints, 69 channels, 2.4 s), in the Scene 1 room at the waiting camera; she wears the current girl's
  in-game material. Console: no errors.
Tools: `WebDemo/tools/blender/` (inspect_girl.py, prepare_girl_v3.py, validate_girl_v3.py, make_test_clip.py, gltf_decode_meshopt.mjs,
gltf_encode_meshopt.mjs; Blender = `~/.bubblewash-tools/blender-bpy/bin/python`, the official bpy 5.2.3 module from PyPI), `WebDemo/tools/girl13/probe.cjs` (G3T=clip times).
