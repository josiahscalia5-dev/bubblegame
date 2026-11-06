#!/usr/bin/env bash
# Side by side: the ORIGINAL approved Screen 4 (still) | R9 (?s3=intunnel,water9) | the candidate (?s3=intunnel,swim), the same
# 7 s swipe-and-jump run (seed 7, Pixel 7 screen; R9's clip from 51_swim/videos/clip_R9.mp4, recorded with the same script)
R=/workspace/bubblegame; V=$R/Previews/WebDemo/screen4_round9_match/53_swim/videos
O=$R/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg
FONT=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
lab() { echo "drawtext=fontfile=$FONT:text='$1':x=14:y=14:fontsize=30:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=8"; }
ev() { echo "drawtext=fontfile=$FONT:text='%{eif\:t\:d}.%{eif\:mod(t*10\,10)\:d} s':x=14:y=h-60:fontsize=28:fontcolor=white:box=1:boxcolor=black@0.6:boxborderw=8"; }
ffmpeg -v error -y -loop 1 -framerate 30 -i "$O" -i "$R/Previews/WebDemo/screen4_round9_match/51_swim/videos/clip_R9.mp4" -i "$V/clip_swim.mp4" -filter_complex \
  "[0:v]scale=-2:1258,pad=628:1258:(ow-iw)/2:0,$(lab ORIGINAL)[a];[1:v]scale=618:1258,$(lab 'R9 (current)'),$(ev)[b];[2:v]scale=618:1258,$(lab 'NEW swim')[c];[a][b][c]hstack=inputs=3[v]" \
  -map "[v]" -t 7 -c:v libx264 -pix_fmt yuv420p -crf 23 -movflags +faststart "$V/clip_compare_ORIGINAL_R9_swim.mp4"
# key moments (the 51_swim strip's): swipe left, swipe right, jump, landing, 0.4 s after landing: R9 row, swim row
python3 - "$R/Previews/WebDemo/screen4_round9_match/51_swim/videos/clip_R9.mp4" "$V/clip_swim.mp4" "$V/clip_key_moments_R9_swim.jpg" <<'PY'
import sys, subprocess, io
from PIL import Image, ImageDraw, ImageFont
r9, sw, out = sys.argv[1:4]
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
moments = [('forward', 2.6), ('swipe left', 3.2), ('swipe right', 4.1), ('jump', 5.05), ('landing', 5.5), ('0.4 s after landing', 5.9)]
def grab(v, t):
    png = subprocess.run(['ffmpeg', '-v', 'error', '-ss', str(t), '-i', v, '-frames:v', '1', '-f', 'image2', '-c:v', 'png', '-'], capture_output=True).stdout
    return Image.open(io.BytesIO(png)).convert('RGB')
W, H = 300, 610
sheet = Image.new('RGB', (len(moments) * (W + 6), 2 * (H + 34)), (10, 12, 26))
for row, (name, v) in enumerate([('R9', r9), ('NEW swim', sw)]):
    for i, (lab, t) in enumerate(moments):
        im = grab(v, t).resize((W, H))
        x, y = i * (W + 6), row * (H + 34)
        sheet.paste(im, (x, y + 34)); ImageDraw.Draw(sheet).text((x + 6, y + 5), f'{name}: {lab} ({t} s)', font=font, fill='white')
sheet.save(out, quality=88)
PY
echo "wrote clip_compare_ORIGINAL_R9_swim.mp4 and clip_key_moments_R9_swim.jpg"
