# side-by-side sheet: pairs of (label, path) as args; all scaled to height H
import sys
from PIL import Image, ImageDraw
H = int(sys.argv[1]); out = sys.argv[2]; items = sys.argv[3:]
ims = []
for it in items:
    lab, p = it.split('=', 1); im = Image.open(p).convert('RGB'); w = round(im.width * H / im.height); ims.append((lab, im.resize((w, H))))
W = sum(i.width for _, i in ims) + 6 * (len(ims) - 1); sheet = Image.new('RGB', (W, H + 22), (255, 255, 255)); d = ImageDraw.Draw(sheet); x = 0
for lab, im in ims: sheet.paste(im, (x, 22)); d.text((x + 4, 4), lab, fill=(0, 0, 0)); x += im.width + 6
sheet.save(out)
