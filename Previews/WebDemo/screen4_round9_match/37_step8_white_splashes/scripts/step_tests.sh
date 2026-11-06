#!/usr/bin/env bash
# The standard test set for one Screen 4 step (thirteenth session, from step 8 on; the same checks as step 7):
#   step_tests.sh <evidence dir> <before WebDemo> <after WebDemo> <before label> <after label>
# 1. stills (seed 7, no steering) at 3, 4, 5, 6 s after the tap: 1:2 (768 x 1536 canvas + page) and Pixel 7 (412 x 839), after only
#    (the before stills are the previous step's);
# 2. identity: the normal game, the ten older switches, match, match,nofoam (41 raw-canvas frames), before vs after;
# 3. gameplay: ?s3=focus s3_func and r2_func, the normal game's s3_func (after);
# 4. videos: Pixel 7, 10 s, straight and steering (after), and the 3-panel comparisons with the previous step's videos.
E="$1"; B="$2"; A="$3"; LB="$4"; LA="$5"
R=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match
SP=/tmp/claude-0/-workspace/19cc1b9f-f41f-59b0-8120-cc2c97fb2a7c/scratchpad/tests_$LA
cd /home/user/bubblegame && source Tools/bw_tools_env.sh
mkdir -p "$E/frames" "$E/gameplay" "$E/videos" "$SP"
stills() {
  for T in 3.0 4.0 5.0 6.0; do
    (cd $A && S3=focus T=$T node tools/screen4/layer_diag.cjs $A $E/frames/${LA}_T$T > $E/frames/${LA}_T$T.log 2>&1)
    (cd $A && S3=focus T=$T VIEW=412x839 DPR=2.625 node tools/screen4/layer_diag.cjs $A $E/frames/${LA}_pixel7_T$T > $E/frames/${LA}_pixel7_T$T.log 2>&1)
  done; echo "stills done"; }
identity() {
  $R/35_step7_bubble_veil/scripts/identity.sh $B $A $SP/identity > /dev/null 2>&1
  { echo "Identity proof: before = $LB ($B), after = $LA ($A). Raw 3D canvas (tools/models/game_eval.cjs SHOT, seed 7, 538 x 1076): the normal game and the ten older switches at Tap to Start, 2.85 and 4.2 s; match and match,nofoam also 3.0 s (35_step7_bubble_veil/scripts/identity.sh; 11_merged_final/scripts/identity_compare.py)."
    $BW_PY -I $R/11_merged_final/scripts/identity_compare.py $SP/identity/before $SP/identity/after; } > $E/identity_proof_$LA.txt
  echo "identity: $(tail -n 1 $E/identity_proof_$LA.txt); console messages in: $(grep -l -i 'error\|warning' $SP/identity/*/*.log 2>/dev/null | wc -l) logs"; }
gameplay() {
  (cd $A && S3=focus node tools/screen3/s3_func.cjs $A > $E/gameplay/s3_func_focus_$LA.txt 2>&1)
  (cd $A && S3=focus VW=135 VH=270 node tools/screen3/r2_func.cjs $A > $E/gameplay/r2_func_focus_$LA.txt 2>&1)
  (cd $A && S3= node tools/screen3/s3_func.cjs $A > $E/gameplay/s3_func_normal_$LA.txt 2>&1); echo "gameplay done"; }
video() { # straight 0|1, name
  local F=$SP/frames_$2; rm -rf $F
  (cd $A && S3=focus ART_OFF=1 STRAIGHT=$1 node $R/35_step7_bubble_veil/scripts/record_phone.cjs $A $F 10 game > $E/videos/${LA}_$2.log 2>&1)
  ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/${LA}_$2.mp4
  cp $F/track.json $E/videos/${LA}_$2_track.json; echo "video $2: $(tail -n 1 $E/videos/${LA}_$2.log)"; }
stills & identity & wait
gameplay & video 1 straight & wait
video 0 steering
echo "ALL TESTS DONE"
