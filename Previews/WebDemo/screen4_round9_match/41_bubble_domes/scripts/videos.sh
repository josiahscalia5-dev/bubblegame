#!/usr/bin/env bash
cd /workspace/bubblegame/WebDemo
for M in straight:1 steering:0; do N=${M%%:*}; S=${M##*:}; F=/tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/frames_bt_$N; rm -rf $F
  S3=bt ART_OFF=1 STRAIGHT=$S node /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil/scripts/record_phone.cjs $PWD $F 10 game > /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/videos/bt_$N.log 2>&1
  ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/videos/bt_$N.mp4
  cp $F/track.json /workspace/bubblegame/Previews/WebDemo/screen4_round9_match/39_breakthrough_pass/videos/bt_${N}_track.json
done
echo "VIDEOS DONE" >> /tmp/claude-0/-workspace-bubblegame/9add4357-64e4-5c80-a01a-8b2e091ae619/scratchpad/videos.log
