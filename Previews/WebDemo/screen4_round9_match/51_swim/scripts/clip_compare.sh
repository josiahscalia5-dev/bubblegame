#!/usr/bin/env bash
# Side by side: R7 | R9, the same swipe-and-jump run (seed 7), labelled; and a strip of key moments from the frames.
R=/workspace/bubblegame; V=$R/Previews/WebDemo/screen4_round9_match/51_swim/videos
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
lab() { echo "drawtext=fontfile=$FONT:text='$1':x=14:y=14:fontsize=30:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=8"; }
ffmpeg -v error -y -i "$V/clip_R7.mp4" -i "$V/clip_R9.mp4" -filter_complex \
  "[0:v]$(lab 'R7')[a];[1:v]$(lab 'NEW R9 (swim)')[b];[a][b]hstack=inputs=2[v]" -map "[v]" -c:v libx264 -pix_fmt yuv420p -crf 22 \
  -movflags +faststart "$V/clip_compare_R7_R9.mp4"
echo "wrote clip_compare_R7_R9.mp4"
