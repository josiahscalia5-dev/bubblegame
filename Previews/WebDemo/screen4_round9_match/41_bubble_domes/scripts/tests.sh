#!/usr/bin/env bash
cd /workspace/bubblegame/WebDemo
source ../Tools/bw_tools_env.sh >/dev/null 2>&1
A=$PWD; B=/tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/wd_H; O=/tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/identity
bash /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil/scripts/identity.sh $B $A $O > /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/identity.log 2>&1
for side in before after; do D=$B; [ $side = after ] && D=$A
  (cd $D && S3=focus TIMES=2.85,3.0,4.2 EVAL='0' SHOT="$O/$side/focus_%.png" node tools/models/game_eval.cjs $D > $O/$side/focus.log 2>&1); done
{ echo "Identity proof: before = step 8 (bundle e6cd9334, commit 7b7a9e2), after = the bt build (bundle $(md5sum game.bundle.js | cut -c1-8)). Raw 3D canvas (tools/models/game_eval.cjs SHOT, seed 7, 538 x 1076): the normal game and the ten older switches at Tap to Start, 2.85 and 4.2 s; match, match,nofoam and focus also 3.0 s.";
  $BW_PY -I /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/11_merged_final/scripts/identity_compare.py $O/before $O/after; } > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/identity_proof_bt.txt 2>&1
echo "IDENTITY DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/identity.log
S3=bt node tools/screen3/s3_func.cjs $A > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/gameplay/s3_func_bt.txt 2>&1
S3=bt VW=135 VH=270 node tools/screen3/r2_func.cjs $A > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/gameplay/r2_func_bt.txt 2>&1
S3= node tools/screen3/s3_func.cjs $A > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/gameplay/s3_func_normal.txt 2>&1
echo "GAMEPLAY DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/identity.log
