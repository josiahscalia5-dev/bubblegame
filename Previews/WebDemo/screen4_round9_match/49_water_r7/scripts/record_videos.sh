#!/usr/bin/env bash
# R7 videos (Pixel 7 screen, 412 x 839 at 2x, 10 s, seed 7, the game stepped at 30 frames per game second; record_phone.cjs
# is a copy of ../../35_step7_bubble_veil/scripts/record_phone.cjs):
#   record_videos.sh <label> <s3 switches> <straight 0|1>   -> frames in the scratchpad, the MP4 in ../videos/
L="$1"; S="$2"; ST="$3"
R=/workspace/bubblegame; E=$R/Previews/WebDemo/screen4_round9_match/49_water_r7; D=$R/WebDemo
F=/tmp/claude-0/-workspace-bubblegame/9c6fb324-0d45-5383-b759-baaa6f4cba10/scratchpad/frames_$L
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E/videos; rm -rf $F
(cd $D && S3="$S" ART_OFF=1 STRAIGHT=$ST node $E/scripts/record_phone.cjs $D $F 10 game > $E/videos/$L.log 2>&1)
ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/$L.mp4
echo "$L: $(tail -n 1 $E/videos/$L.log) | $(ls $F | grep -c jpg) frames"
