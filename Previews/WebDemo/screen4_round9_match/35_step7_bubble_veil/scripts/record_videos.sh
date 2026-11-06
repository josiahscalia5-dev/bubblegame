#!/usr/bin/env bash
# Step 7 videos (Pixel 7, 412 x 839 at 2x, 10 s, seed 7, the game stepped at 30 frames per game second):
#   record_videos.sh <label> <WebDemo> <straight 0|1>   -> frames in the scratchpad, MP4s in ../videos/
L="$1"; D="$2"; ST="$3"; E=/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil
F=/tmp/claude-0/-home-user-bubblegame/19cc1b9f-f41f-59b0-8120-cc2c97fb2a7c/scratchpad/frames_$L
source /home/user/bubblegame/Tools/bw_tools_env.sh; mkdir -p $E/videos; rm -rf $F
(cd $D && S3=focus ART_OFF=1 STRAIGHT=$ST node $E/scripts/record_phone.cjs $D $F 10 game > $E/videos/$L.log 2>&1)
ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/$L.mp4
echo "$L: $(tail -n 1 $E/videos/$L.log) | $(ls $F | grep -c jpg) frames"
