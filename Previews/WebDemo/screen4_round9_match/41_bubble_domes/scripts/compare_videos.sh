#!/usr/bin/env bash
# ORIGINAL (still) | STEP 8 | NEW bt, each 618 x 1258, labelled; 10 s at 30 fps
R=/workspace/bubblegame/Previews/WebDemo/screen4_round9_match; O=/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
lab() { echo "drawbox=x=0:y=0:w=iw:h=46:color=0x0e1424@0.85:t=fill,drawtext=fontfile=$FONT:text='$1':x=12:y=10:fontsize=26:fontcolor=white"; }
for N in straight steering; do
  ffmpeg -v error -y -loop 1 -framerate 30 -t 10 -i $O -i $R/37_step8_white_splashes/videos/step8_$N.mp4 -i $R/39_breakthrough_pass/videos/bt_$N.mp4 \
    -filter_complex "[0:v]scale=618:1258,setsar=1,$(lab 'ORIGINAL (approved)')[a];[1:v]setsar=1,$(lab 'CURRENT step 8')[b];[2:v]setsar=1,$(lab 'NEW bt')[c];[a][b][c]hstack=inputs=3[v]" \
    -map "[v]" -t 10 -c:v libx264 -pix_fmt yuv420p -crf 22 -movflags +faststart $R/39_breakthrough_pass/videos/compare_${N}_original_step8_bt_10s.mp4
done
ls -la $R/39_breakthrough_pass/videos/
