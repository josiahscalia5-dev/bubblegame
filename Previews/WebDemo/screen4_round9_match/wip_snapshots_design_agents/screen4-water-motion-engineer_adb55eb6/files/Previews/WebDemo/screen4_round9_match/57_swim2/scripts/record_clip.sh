#!/usr/bin/env bash
# The user's swipe-and-jump clip (53_swim/scripts/record_clip.sh adapted): Pixel 7 screen, 412 x 839 at 2x, seed 7, 7 s,
# real pointer input (Tap to Start 2.0 s, swipe left 3.0 s, right 3.9 s, up = jump 4.8 s, the landing).
#   record_clip.sh <label> <s3> [old|new]     old = the committed bundle 5bb24e28 (scratch copy), new = this worktree
L="$1"; S="$2"; WHICH="${3:-new}"
R=/home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b; E=$R/Previews/WebDemo/screen4_round9_match/57_swim2; D=$R/WebDemo
SP=/tmp/claude-0/-home-user-bubblegame/4fd798d9-8469-584c-9cb4-d91fe93a1905/scratchpad; F=$SP/frames_$L
ROOT=$D; [ "$WHICH" = old ] && ROOT=$SP/webdemo_old
source $R/Tools/bw_tools_env.sh > /dev/null 2>&1; mkdir -p $E/videos; rm -rf $F; mkdir -p $F
(cd $D && S3="$S" ART_OFF=1 SWIPEJUMP=1 node $R/Previews/WebDemo/screen4_round9_match/51_swim/scripts/record_phone.cjs $ROOT $F 7 game > $E/videos/$L.log 2>&1)
ffmpeg -v error -y -framerate 30 -i $F/f%04d.jpg -vf scale=618:-2 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $E/videos/$L.mp4
echo "$L: $(tail -n 1 $E/videos/$L.log) | $(ls $F | grep -c jpg) frames"
