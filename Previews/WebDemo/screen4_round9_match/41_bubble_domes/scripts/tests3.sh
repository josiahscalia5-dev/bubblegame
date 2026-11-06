#!/usr/bin/env bash
cd /workspace/bubblegame/WebDemo
until grep -q "IDENTITY DONE" /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/tests2.log; do sleep 10; done
cp /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/41_bubble_domes/identity_proof.txt /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/40_intunnel_start/identity_proof_intunnel.txt
A=$PWD
S3=intunnel node tools/screen3/s3_func.cjs $A > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/40_intunnel_start/gameplay/s3_func_intunnel.txt 2>&1
S3=intunnel VW=135 VH=270 node tools/screen3/r2_func.cjs $A > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/40_intunnel_start/gameplay/r2_func_intunnel.txt 2>&1
echo "GAMEPLAY DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/tests3.log
for M in straight:1 steering:0; do N=${M%%:*}; S=${M##*:}; F=/tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/frames_it_$N; rm -rf $F
  S3=intunnel ART_OFF=1 STRAIGHT=$S node /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil/scripts/record_phone.cjs $A $F 10 game > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/40_intunnel_start/videos/intunnel_$N.log 2>&1
  ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/40_intunnel_start/videos/intunnel_$N.mp4
  cp $F/track.json /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/40_intunnel_start/videos/intunnel_${N}_track.json
done
echo "VIDEOS DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/tests3.log
