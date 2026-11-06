#!/usr/bin/env bash
cd /workspace/bubblegame/WebDemo
source ../Tools/bw_tools_env.sh >/dev/null 2>&1
A=$PWD; B=/tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/wd_H; O=/tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/identity2; rm -rf $O
bash /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil/scripts/identity.sh $B $A $O > /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/identity2.log 2>&1
for s in focus bt; do for side in before after; do D=$B; [ $side = after ] && D=$A
  [ $s = bt ] && [ $side = before ] && D=/workspace/bubblegame/WebDemo_bt_ref
  [ -d "$D" ] || continue
  (cd $D && S3=$s TIMES=2.85,3.0,4.2 EVAL='0' SHOT="$O/$side/${s}_%.png" node tools/models/game_eval.cjs $D > $O/$side/$s.log 2>&1); done; done
{ echo "Identity proof: before = step 8 (bundle e6cd9334, commit 7b7a9e2), after = the intunnel,domes build (bundle $(md5sum game.bundle.js | cut -c1-8)). Raw 3D canvas (tools/models/game_eval.cjs SHOT, seed 7, 538 x 1076): the normal game and the ten older switches at Tap to Start, 2.85 and 4.2 s; match, match,nofoam and focus also 3.0 s.";
  $BW_PY -I /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/11_merged_final/scripts/identity_compare.py $O/before $O/after; } > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/41_bubble_domes/identity_proof.txt 2>&1
echo "IDENTITY DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/tests2.log
S3=intunnel,domes node tools/screen3/s3_func.cjs $A > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/41_bubble_domes/gameplay/s3_func_intunnel_domes.txt 2>&1
S3=intunnel,domes VW=135 VH=270 node tools/screen3/r2_func.cjs $A > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/41_bubble_domes/gameplay/r2_func_intunnel_domes.txt 2>&1
echo "GAMEPLAY DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/tests2.log
for M in straight:1 steering:0; do N=${M%%:*}; S=${M##*:}; F=/tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/frames_dm_$N; rm -rf $F
  S3=intunnel,domes ART_OFF=1 STRAIGHT=$S node /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil/scripts/record_phone.cjs $A $F 10 game > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/41_bubble_domes/videos/intunnel_domes_$N.log 2>&1
  ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/41_bubble_domes/videos/intunnel_domes_$N.mp4
  cp $F/track.json /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/41_bubble_domes/videos/intunnel_domes_${N}_track.json
done
echo "VIDEOS DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/tests2.log
