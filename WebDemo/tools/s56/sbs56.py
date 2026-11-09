#!/usr/bin/env python3
# s56 side by side (lane s56, session 47f75e22): APPROVED | previous | new ... at 864 x 1536 each (resized if needed), with labels.
#   python3 sbs56.py <out.png> <label=image> [<label=image> ...]      e.g. approved=06_Swim...png before=s56_206.png water6=s56_206.png
# CROP=y0,y1 (fractions) keeps only that band (e.g. CROP=0.45,0.87 for the water); SCALE=0.5 halves the output.
import os, sys
from PIL import Image, ImageDraw
out, items = sys.argv[1], [a.split('=', 1) for a in sys.argv[2:]]
W, H = 864, 1536
y0, y1 = [float(v) for v in os.environ.get('CROP', '0,1').split(',')]
k = float(os.environ.get('SCALE', '1'))
tiles = []
for label, path in items:
    im = Image.open(path).convert('RGB').resize((W, H), Image.LANCZOS).crop((0, int(y0 * H), W, int(y1 * H)))
    d = ImageDraw.Draw(im); d.rectangle((0, 0, 12 + 9 * len(label), 26), fill=(0, 0, 0)); d.text((6, 6), label, fill=(255, 255, 255))
    tiles.append(im)
th = tiles[0].height
o = Image.new('RGB', (W * len(tiles) + 8 * (len(tiles) - 1), th), (255, 255, 255))
for i, t in enumerate(tiles): o.paste(t, (i * (W + 8), 0))
if k != 1: o = o.resize((int(o.width * k), int(o.height * k)), Image.LANCZOS)
o.save(out)
print(out, o.size)
