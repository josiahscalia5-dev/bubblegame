"""Side-by-side crop sheet (60_fidelity): crop_sheet.py out.jpg x0,y0,x1,y1 scale LABEL=frame.png ...
Each frame is brought to the ORIGINAL's 767 x 1536, the same box is cropped and magnified by `scale`, labelled."""
import sys
from PIL import Image, ImageDraw, ImageFont
out = sys.argv[1]; box = tuple(map(int, sys.argv[2].split(','))); k = float(sys.argv[3])
try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)
except Exception: font = None
ims = []
for it in sys.argv[4:]:
    lab, p = it.split('=', 1)
    im = Image.open(p).convert('RGB')
    if im.size != (767, 1536): im = im.resize((767, 1536), Image.LANCZOS)
    c = im.crop(box); c = c.resize((round(c.width * k), round(c.height * k)), Image.LANCZOS)
    d = ImageDraw.Draw(c); d.rectangle((0, 0, 17 * len(lab) + 16, 36), fill=(10, 10, 30)); d.text((8, 4), lab, fill=(255, 255, 255), font=font)
    ims.append(c)
W = sum(i.width for i in ims) + 8 * (len(ims) - 1); H = max(i.height for i in ims)
s = Image.new('RGB', (W, H), (0, 0, 0)); x = 0
for i in ims: s.paste(i, (x, 0)); x += i.width + 8
s.save(out, quality=88)
print(out, s.size)
