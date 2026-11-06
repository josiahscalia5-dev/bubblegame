#!/usr/bin/env bash
# Side-by-side MP4: the ORIGINAL approved Screen 4 (still) | the accepted ?s3=intunnel | R7, the same 10 s run (seed 7).
#   compare_video.sh <straight|steering>
K="$1"; R=/workspace/bubblegame; V=$R/Previews/WebDemo/screen4_round9_match/49_water_r7/videos
O=$R/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
lab() { echo "drawtext=fontfile=$FONT:text='$1':x=14:y=14:fontsize=30:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=8"; }
ffmpeg -v error -y -loop 1 -framerate 30 -i "$O" -i "$V/accepted_$K.mp4" -i "$V/water7_$K.mp4" -filter_complex \
  "[0:v]scale=-2:1258,pad=628:1258:(ow-iw)/2:0,$(lab ORIGINAL)[a];[1:v]scale=618:1258,$(lab ACCEPTED)[b];[2:v]scale=618:1258,$(lab 'NEW R7')[c];[a][b][c]hstack=inputs=3[v]" \
  -map "[v]" -t 10 -c:v libx264 -pix_fmt yuv420p -crf 23 -movflags +faststart "$V/compare_${K}_original_accepted_R7.mp4"
echo "wrote compare_${K}_original_accepted_R7.mp4"
