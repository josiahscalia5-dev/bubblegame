import sys
from PIL import Image, ImageDraw, ImageFont
# tri.py out.jpg scale label1 img1 label2 img2 ... (each image resized to 767x1536 page size)
out, sc = sys.argv[1], float(sys.argv[2]); args = sys.argv[3:]
ims = [(args[i], Image.open(args[i+1]).convert('RGB').resize((767, 1536))) for i in range(0, len(args), 2)]
W = 767 * len(ims) + 12 * (len(ims) - 1); c = Image.new('RGB', (W, 1536 + 56), (14, 20, 36)); d = ImageDraw.Draw(c)
try: f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
except Exception: f = None
for i, (lab, im) in enumerate(ims):
    x = i * (767 + 12); c.paste(im, (x, 56)); d.text((x + 10, 12), lab, fill=(255, 255, 255), font=f)
if sc != 1: c = c.resize((int(c.width * sc), int(c.height * sc)))
c.save(out, quality=90)
