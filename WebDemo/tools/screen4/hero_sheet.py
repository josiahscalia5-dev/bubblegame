"""Side-by-side sheet: the approved Screen 4 and gameplay frames at the same size, labelled.
    python3 hero_sheet.py out.jpg "APPROVED (original)=approved.jpg" "ROUND 7 before, 3.0 s=r7.png" "HERO SCENE now, 2.85 s=hero.png"
"""
import sys
from PIL import Image, ImageDraw, ImageFont

out, items = sys.argv[1], [a.rsplit('=', 1) for a in sys.argv[2:]]
import os
W, H, PAD, LAB = int(os.environ.get('SHEET_W', 538)), int(os.environ.get('SHEET_H', 1076)), 14, 46
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
except OSError:
    font = ImageFont.load_default()
sheet = Image.new('RGB', (PAD + len(items) * (W + PAD), H + LAB + PAD * 2), (22, 26, 48))
d = ImageDraw.Draw(sheet)
for i, (label, path) in enumerate(items):
    im = Image.open(path).convert('RGB').resize((W, H), Image.LANCZOS)
    x = PAD + i * (W + PAD)
    sheet.paste(im, (x, PAD))
    tw = d.textlength(label, font=font)
    d.text((x + (W - tw) / 2, H + PAD + 10), label, fill=(235, 240, 255), font=font)
sheet.save(out, quality=92)
print(out, sheet.size)
