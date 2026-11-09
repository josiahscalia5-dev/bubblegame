# Lane brush6 handoff (session 47f75e22, 9 November 2026). Branch `claude/lane-s6-brush-47f75e22`, worktree /home/user/bubblegame_lanes/brush6

Target: ONLY `Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png` (864x1536): the two
large rotating roller brushes at the left/right foreground. Art director's measures: `Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/qa/art_director_ranking.md` section 1.

## DONE (built, compiles, fit run; NOT yet visually verified in a frame, see IN PROGRESS)
- Switch `,brush6` (with `s56`, `level1`); file `WebDemo/src/s56_brush6.js` only (called by the coordinator hook in s56_tunnel.js section 0).
  Without `,brush6` nothing is built (BRUSH6_ON false).
- Built in code (no model fitted: brush_p2.glb = pink scale ball, s3_brush.glb = round wheel brush, Meshy WashingRoller = wrong band order, 133k tris):
  gold top drum (left only), studded gold flange, glossy pink bell with 8 gold 4-point stars, gold rim band, four flared bristle skirts
  (pink 26 %, white-lavender 23 %, royal blue 34 %, pale blue 17 % of the bristle height), fluffy_brush.js's shell-fur technique on cones:
  7 instanced shells, discard-drawn tapered strands, tufts, ragged lobed tips, dark roots / pale tips, strand gloss, sheen, s56 haze.
  Colours kept under the ~0.76 linear knee. Cap uses s56's `M.gold`. Spin 3.0 rad/s about each brush's own axis.
- Placement: track-fixed pairs at u = anchor(206) + k*26 + du inside spans [[150, 258]] (5 pairs: 157,183,209,235,261 approx); drawn only
  within -4..60 m of him. Numbers in `BRUSH6` (window.__bwBrush6; after a change call `__bwBrush6.place()`).
- Fit: `tools/brush6/fit_eval.js` (EVAL body for tools/s56/shots56.cjs) fits du/x/h/s per side to the AD's screen targets with the lane
  bound (inner bristle tips |x| >= 1.25 m). Result now the defaults: left du 5.431 x 2.057 h -0.632 s 0.612; right du 5.379 x -1.89 h -0.618 s 0.485.
- Cost: 23,872 (left) / 22,272 (right) triangles per brush (18,816 of them the 7 bristle shells); 3 draw calls per brush; at u 206 one pair
  (plus far pairs within 60 m) is drawn.

## KNOWN PROBLEM (design conflict, report to the coordinator)
- The approved placement needs the inner edge at ~0.75 m (AD) = over the side lanes. With |x| >= 1.25 m the brushes must stand ~2.3 m ahead
  of him, and the waterline/bank deck hides their foot at screen y ~0.62 (approved 0.70-0.72). Top, cap and inner edges fit (errors < 0.03).
- Captures with `home` in S3 show the Home menu over a blank scene in this worktree (both tap and 206): use the list WITHOUT `home`
  (being checked: capture c3 compares the brush6-off frames to the coordinator's baseline).

## IN PROGRESS (where I stopped)
- Verifying that S3 without `home` reproduces the coordinator's baseline (scratch c3), then the first real look at the brushes at 206.

## NEXT STEPS for a fresh agent
1. `cd WebDemo && node build.mjs`; capture: `S3=intunnel,structmatch,level1,tripo1,tripo2,scene07,six,tripo3,six2,s56,brush6 ZS=tap,206 VW=432 VH=768 DPR=2
   EVAL="$(cat tools/brush6/fit_eval.js)" flock /tmp/bw_browser.lock node tools/s56/shots56.cjs $PWD <out> > <out>/out.json` (window.__b6NoFit=1 to only measure).
2. Look at the brushes: shape, band colours, strand look, lathe faces (gold/bell may render inside-out: reverse the profile if so), intersections
   with the bank machinery and drum shell; tune `BRUSH6` and re-fit.
3. Check the tap frame (Scene 5) shows no brushes; check the hook-off frames are identical to the baseline.
4. Side-by-side vs approved into `Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/brush6/`; commit, push.
