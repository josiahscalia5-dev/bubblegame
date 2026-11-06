#!/usr/bin/env bash
# The user's swipe-and-jump clip (Pixel 7 screen, 412 x 839 at 2x, seed 7, 7 s, real pointer input: Tap to Start at 2.0 s,
# swipe left 3.0 s, right 3.9 s, up = jump 4.8 s, the landing):   record_clip.sh <label> <s3 switches>
L="$1"; S="$2"; R=/workspace/bubblegame; E=$R/Previews/WebDemo/screen4_round9_match/51_swim; D=$R/WebDemo
F=/tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/frames_$L
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E/videos; rm -rf $F
(cd $D && S3="$S" ART_OFF=1 SWIPEJUMP=1 node $E/scripts/record_phone.cjs $D $F 7 game > $E/videos/$L.log 2>&1)
ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/$L.mp4
echo "$L: $(tail -n 1 $E/videos/$L.log) | $(ls $F | grep -c jpg) frames"
