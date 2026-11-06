#!/usr/bin/env bash
# Step 7 still frames (seed 7, no steering): T = 3, 4, 5, 6 s after the tap; 1:2 (768 x 1536 canvas + page) and Pixel 7
# (412 x 839 at 2.625, page with the HUD); the reversibility proof (step 7 + the old settings by test tune at 3.0 s).
E=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil; A=/home/user/bw-step7/WebDemo; B=/home/user/bubblegame/WebDemo
source /home/user/bubblegame/Tools/bw_tools_env.sh
run() { # label demo T [env...]
  local L=$1 D=$2 T=$3; shift 3
  (cd $D && env S3=focus T=$T "$@" node $A/tools/screen4/layer_diag.cjs $D $E/frames/$L > $E/frames/$L.log 2>&1); echo "$L: $(tail -n 1 $E/frames/$L.log)"; }
mkdir -p $E/frames
OLDZ='[[0.3,[20,160],[0.62,0.93],[4.5,10]],[0.2,[160,222],[0.62,0.93],[4.5,10]],[0.2,[-42,20],[0.62,0.93],[4.5,10]],[0.24,[-30,210],[0.42,0.62],[4.5,5.5]],[0.02,[20,200],[0.75,0.93],[10,30]],[0.01,[0,360],[0.08,0.4],[16,34]]]'
run step7_rollback_T3.0 $A 3.0 "TUNE={\"matchWater\":{\"bubbles\":{\"count\":160,\"zones\":$OLDZ}}}"
for T in 3.0 4.0 5.0 6.0; do run step7_T$T $A $T; done
for T in 3.0 4.0 5.0 6.0; do run step7_pixel7_T$T $A $T VIEW=412x839 DPR=2.625; run step6_pixel7_T$T $B $T VIEW=412x839 DPR=2.625; done
