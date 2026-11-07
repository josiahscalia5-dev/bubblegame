# Labelled side-by-side sheets: the ORIGINAL scaled UNIFORMLY to 1076 px tall (537 x 1076, never stretched), then each
# capture at its full 538 x 1076. Optional crop (fractions of the height) and zoom.
#   python sheet.py <out.jpg> [--crop y0 y1] [--zoom 2] "LABEL=path" ["LABEL=path" ...]
import sys
from PIL import Image, ImageDraw, ImageFont
O = 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
a = sys.argv[1:]; out = a.pop(0); crop = None; zoom = 1.0
while a and a[0].startswith('--'):
    if a[0] == '--crop': crop = (float(a[1]), float(a[2])); a = a[3:]
    elif a[0] == '--zoom': zoom = float(a[1]); a = a[2:]
panels = [('ORIGINAL (uniform scale 537 x 1076)', Image.open(O).convert('RGB').resize((537, 1076), Image.LANCZOS))]
for s in a:
    k, p = s.split('=', 1); im = Image.open(p).convert('RGB')
    if im.height != 1076: im = im.resize((round(im.width * 1076 / im.height), 1076), Image.LANCZOS)
    panels.append((k, im))
if crop: panels = [(k, im.crop((0, int(crop[0] * 1076), im.width, int(crop[1] * 1076)))) for k, im in panels]
if zoom != 1: panels = [(k, im.resize((round(im.width * zoom), round(im.height * zoom)), Image.LANCZOS)) for k, im in panels]
try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
except Exception: font = ImageFont.load_default()
gap, top = 8, 34
W = sum(im.width for _, im in panels) + gap * (len(panels) - 1); H = max(im.height for _, im in panels) + top
sheet = Image.new('RGB', (W, H), (14, 18, 40)); d = ImageDraw.Draw(sheet); x = 0
for k, im in panels:
    sheet.paste(im, (x, top)); d.text((x + 6, 5), k, fill=(255, 255, 255), font=font); x += im.width + gap
sheet.save(out, quality=92)
print(out, sheet.size)
