# DeepMotion Animate 3D: the girl's custom-character upload (10 November 2026, session b57cc1e7)

Made with real Blender 5.2.3 (`WebDemo/tools/blender/prepare_girl_v3.py`) from the user's existing girl, `WebDemo/models/opening/girl_v2_rigged.glb`
(unchanged). Same mesh (41,354 vertices), UVs and textures; nothing redesigned.

## Files
- `girl_v3_tpose_deepmotion.fbx`: UPLOAD THIS as the Custom Character (textures embedded). `girl_v3_tpose_deepmotion.glb` is the same character
  as GLB, if the FBX is refused.
- `preview_tpose_front.png`: the FBX re-imported in a fresh Blender scene (Cycles), in its T-pose rest.

## What was changed for DeepMotion (its documented rules: T-pose default pose, feet on the origin plane, one root, unique joint names, no spaces)
- Rest pose: the arms were hanging (63 deg below horizontal); now a T-pose (0 deg, measured on the re-imported FBX).
- Joints (23, one root `Hips`): Hips, Spine, Spine1, Neck, Head, LeftEye, RightEye, Left/RightShoulder, Arm, ForeArm, Hand, Left/RightUpLeg, Leg,
  Foot, ToeBase. Added: the feet, toes and eyes (the old rig ended at the shins). No finger or face joints (her model has none).
- Feet on the origin plane (lowest point z = 0.000), height 1.000 m (chibi proportions: hips at 0.30 m).
- Skin weights blended at the knees, ankles, shoulders, elbows and wrists (her old weights moved whole legs with the shins and the upper arms
  with the shoulders); head, hair, bow, torso and backpack weights unchanged.

## Steps for the user (deepmotion.com is blocked from the Claude session, so these are done in your browser; DeepMotion charges credits by the
## video's length: check the estimate it shows before you confirm, and the free monthly allowance may cover a short test)
1. Animate 3D -> Custom Characters (or "Create / Upload character") -> upload `girl_v3_tpose_deepmotion.fbx` from this folder (download it from
   GitHub: this repository, the session's branch). If it reports a T-pose or joint problem, send Claude the exact message.
2. Film the test video (5 to 8 s, one person, the WHOLE body in frame head to feet the whole time, the camera still, side-on or 3/4, even light,
   plain background): kneel facing a low box or basket, reach into it with both hands, lift a towel to chest height, turn the upper body about
   45-90 deg to the side and push the towel forward and down, as if into a front-loading washer at knee height. Stay on the knees.
3. New animation: the video + the custom character. Suggested settings (names may differ slightly in DeepMotion's page): output FBX, 30 fps,
   physics filter on, foot locking auto, hand tracking off, face tracking off, speed 1.0.
4. Download the result as FBX ON THE CUSTOM CHARACTER and give the file to Claude (attach it in the chat, or commit it to
   `Design/DeepMotion/2026-11-10_girl_v3_upload/result/`).
5. Claude then imports it in Blender, maps the joints back to her game names, fixes hand-to-towel contact and timing (IK), exports a GLB clip and
   plays it in the game behind the `girl3` switch, with real frames and a video for your review.
