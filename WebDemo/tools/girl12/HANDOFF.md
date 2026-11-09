# Lane girl12: HANDOFF (character animation, Screens 1-3). PAUSED 9 November 2026 ~17:35 UTC, session 3849f5c8

**Why it is paused:** the user's priority changed (via the coordinator): Screen 6 first, then Screen 5. Screens 1-3 come after. Resume from here.

**Branch:** `claude/lane-s12-girl-room-ac4e3449` (worktree `/workspace/bubblegame_lanes/girl12`), based on the integration head `4c40aa5d`.
**Switch:** `seq7` (with `six` + `six2`). Every change is gated on it. NOTHING here is approved, and NOTHING has been seen in a frame yet (see "In progress").

## Briefs (read first)
- Role: `.claude/agents/character-animation-specialist.md`.
- The user's priority brief: `Design/ReferencePacks/2026-11-09_Sequence_Priority_Correction_from_user/README.md`.
- The gap list: `Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8/README.md` (main checkout). Baseline stills (plain launch, DPR 2):
  `Previews/WebDemo/six_scenes/14_real_game_preview_3849f5c8/stills/t_*.png`.
- Targets: `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/02_She_Loads_Laundry.png`, `03_Oops_He_Goes_In.png`.
- Ownership: `opening_six2_room.js`; in `opening_six2.js` SIX2.girl, SIX2.basket, the cam keys t <= 5.3, the knee timeline, the basket, the girl,
  the blue and yellow towels, the hero path for story s < 5.3; in `opening3d.js` only heroFace / heroExpr. The hero path for s >= 5.3 is the water
  lane's; the `inDrum` line and the drum are the architecture lane's.

## Timing (needed to read any of this)
Capture TIMES are REAL seconds after START. Story s = real for real < 2.65; real 2.65..4.45 maps to s 2.65..3.95 (slowed); s = real - 0.5 after.
Real 2.4 = s 2.4; real 3.3 = s 3.12; real 4.2 = s 3.77; real 4.35 = s 3.88 (the slip); real 5.0 = s 4.5; real 5.25 = s 4.75 (landing); real 5.6 = s 5.1.

## Done (code written, builds clean; `node build.mjs` OK)
1. New file `WebDemo/src/opening_six2_girl12.js` (this lane's own module): `SEQ7_ON`, the tunable numbers `SEQ7` (`window.__bwSeq7` in the browser),
   and three helpers:
   - `softHang(U, out, pL, pR, S, t, sway, inward, camRight)`: the blue towel as a SOFT towel in both hands (the top edge between her fists with a
     drooping gathered cowl, deep vertical folds, near-constant width (no flaring cone), an uneven hem; `inward` = a world vector that pushes the
     lower part into the drum).
   - `cradle(U, out, c, R, L, k, rx, ry, t, flut, open)`: the yellow towel as a soft cradle round his LOWER half (a cup under him to ~64 deg, the rest
     rolling over outward and hanging, its four corners longest); `k` 0 = spread flat under him, 1 = gathered; `open` lowers the front lip as he slips out.
   - `tumble(s, from, ctrl, to, camPos, bez)`: his arc from the towel at the door into the drum: a quadratic bezier, a ROLL about the axis toward the
     camera (`SEQ7.tumble.roll` = -2 pi) so his face stays toward the camera (pitch only a small nod), yaw toward the camera, fading into the
     unchanged landing pose at s 4.75. (This is the fix for the detached eyes: the old tumble pitched him a full -2 pi face-down.)
2. Hooks in `WebDemo/src/opening_six2.js`, each gated on `g12` (null without `seq7`) or `G12_ON`:
   - import line (after the water import); `g12 = { blueU, yelU }` (cloth grids) after `makeCloth`.
   - knee timeline: `G = { ...S.girl, yaw2: SEQ7.yaw2 }` (1.38 instead of 1.75: at the washer she faces the camera's side).
   - hand targets: `g12Carry(q)` (the centre of her hands on the yellow towel: back to the basket 2.6-3.12, lift 3.15-3.35, carry to the door
     3.35-3.84, push in 3.86-3.95) and the seq7 grips for s 2.55-4.4 (no jump of the targets back to her chest after the push).
   - her chest twists toward the door (`SEQ7.chestTwist` 0.35 rad about world up, s 1.0-5.4) and an extra head yaw (`SEQ7.head` keys, negative =
     toward the camera) so her face reads 3/4 while her hands reach the drum (Screen 2).
   - the hero for s 2.95-4.75: stays in the basket (ducked) until her hands arrive, rises sitting in the cradle at her hands' midpoint + `sitUp`,
     facing the camera, wobbling, surprised ("O", lids open); from `SEQ7.tumble.start` (s 3.88) the tumble to `heroSit`; scale 0.56 -> 1 as before.
   - the "!" marks pop again as he is lifted (s 3.12-3.75); his eyelids stay open s 2.95-5.3.
   - blue towel: `softHang` instead of `hangW` in both hanging phases (s 0.45-2.55 in her hands, and the hang at the door before it lies in the drum).
   - yellow towel: shown from s 3.08 (the basket heap's yellow towel until then), the cradle round him while carried; from s 3.88 it opens and
     falls along a bezier to `lieYel` beside him (gather 1 -> 0.4, tilted, turned).
3. Without `seq7` every new term is either skipped or `+ 0` (and the private `rnd` sequence is untouched), so the opening SHOULD be pixel-identical,
   but this is NOT yet proven by frames (see next steps).

## In progress (NOT verified: zero frames were captured; the one capture was stopped while it waited for the browser lock)
- Every seq7 change above is untested in the browser. Expect to tune: the head / chest yaw signs and amounts (face 3/4 at real 2.4), the cradle's
  size, tilt (rx 0.3 lowers its front) and rim height vs his mouth, `sitUp`, the tumble arc (`SEQ7.tumble.lift` 0.26 above the porthole centre may clip
  at the porthole's top edge), the roll direction, the hand spacing `SEQ7.hold`, and the soft towel's cowl / folds / inward push.
- Screen 2 camera keys (t <= 3.2) are NOT changed yet: first see whether the yaw / head change alone shows her face with the fitted ref-02 camera.

## Next steps (in order)
1. Capture seq7 at DPR 1 (one browser at a time, through the lock):
   `cd /workspace/bubblegame_lanes/girl12/WebDemo && node build.mjs && S3=intunnel,structmatch,home,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,seq7 TIMES=2.4,3.3,3.7,4.2,4.7,5.0,5.6 VW=432 VH=768 DPR=1 flock /tmp/bw_browser.lock node tools/six2/shots6.cjs $PWD <out>`
   LOOK at every frame; fix anything broken (cloth inside out, him hidden, eyes off his fur) before tuning. Live tuning: `window.__bwSeq7`.
2. Screen 3: check he is visible at real 3.3 / 3.7 / 4.2 (head and eyes out of the yellow towel, surprised), the slip at ~4.35, the face toward the
   camera at 4.7 / 5.0 (eyes on his fur at every roll angle), and that the 5.6 landing still matches the baseline `t_5.60.png` (it was the best frame).
3. Screen 2: her face 3/4 at real 2.4 vs `02_She_Loads_Laundry.png`; the blue towel soft in both hands at 1.2 and 2.4. If her face still hides, then
   adjust the cam keys at t 2.0 / 3.2 (they were fitted to ref 02's landmarks: keep the composition).
4. Identity proof without seq7: capture the plain list at DPR 2, TIMES=2.4,5.0, and diff against the baseline stills `t_2.40.png`, `t_5.00.png`
   (same tool, same settings; PIL / numpy count of differing pixels). Must be 0.
5. Final evidence at DPR 2 in `/workspace/bubblegame/Previews/WebDemo/six_scenes/15_sequence_pass_3849f5c8/girl12/`: a sheet per moment,
   approved | before (baseline still) | after.
6. Screen 1: small polish only if time remains.

## Rules (unchanged)
No gameplay changes; never the game's seeded Math.random; no Tripo credits or new models; never call anything approved; revert anything worse.
