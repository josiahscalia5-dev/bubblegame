# Pass 4c sheets: ORIGINAL | pass 4a | pass 4c, every panel 767 x 1536 (game pages resized from 807 x 1602), with labels,
# and the corrected blue-water region (x 80-700, y 1000-1536 of the 767 x 1536 frame) enlarged 1.5x for all three.
#   "$BW_PY" sheets.py <pass4a page png> <pass4c page png> <out dir> [tag]
import os, sys
from PIL import Image, ImageDraw, ImageFont
HERE = os.path.dirname(os.path.abspath(__file__))
ORIG = os.path.normpath(os.path.join(HERE, *(['..'] * 6), 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'))
a4, c4, out = sys.argv[1:4]
tag = sys.argv[4] if len(sys.argv) > 4 else 't3.00'
W, H = 767, 1536
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
except Exception:
    font = ImageFont.load_default()
ims = [(n, Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)) for n, p in
       [('ORIGINAL', ORIG), ('pass 4a (before)', a4), ('pass 4c (this pass)', c4)]]
gap, top = 12, 48
s = Image.new('RGB', (3 * W + 2 * gap, H + top), 'white')
d = ImageDraw.Draw(s)
for i, (n, im) in enumerate(ims):
    s.paste(im, (i * (W + gap), top))
    d.text((i * (W + gap) + 10, 8), n, fill=(20, 20, 40), font=font)
s.save(os.path.join(out, f'sidebyside_original_pass4a_pass4c_{tag}.png'))
box, k = (80, 1000, 700, 1536), 1.5
cw, ch = int((box[2] - box[0]) * k), int((box[3] - box[1]) * k)
e = Image.new('RGB', (3 * cw + 2 * gap, ch + top), 'white')
d = ImageDraw.Draw(e)
for i, (n, im) in enumerate(ims):
    e.paste(im.crop(box).resize((cw, ch), Image.LANCZOS), (i * (cw + gap), top))
    d.text((i * (cw + gap) + 10, 8), n + '  (x 80-700, y 1000-1536, 1.5x)', fill=(20, 20, 40), font=font)
e.save(os.path.join(out, f'enlarged_blue_water_original_pass4a_pass4c_{tag}.png'))
print('wrote', out)
