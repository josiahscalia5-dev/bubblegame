# Contact sheet: python3 -I tools/contact_sheet.py out.png h img1 img2 ... (each scaled to height h, labelled by filename)
import sys, os
from PIL import Image, ImageDraw
out, h = sys.argv[1], int(sys.argv[2])
ims = []
for p in sys.argv[3:]:
    im = Image.open(p).convert('RGB'); w = round(im.width * h / im.height)
    im = im.resize((w, h), Image.LANCZOS)
    d = ImageDraw.Draw(im); lab = os.path.splitext(os.path.basename(p))[0]
    d.rectangle([0, 0, 8 + 7 * len(lab), 16], fill=(0, 0, 0)); d.text((4, 2), lab, fill=(255, 255, 255))
    ims.append(im)
W = sum(i.width for i in ims) + 6 * (len(ims) - 1)
sheet = Image.new('RGB', (W, h), (30, 30, 30)); x = 0
for i in ims: sheet.paste(i, (x, 0)); x += i.width + 6
sheet.save(out)
print(out, sheet.size)
