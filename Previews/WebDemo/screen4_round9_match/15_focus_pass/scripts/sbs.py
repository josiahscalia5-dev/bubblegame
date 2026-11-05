# sbs.py out.png img1 img2 ... : side by side at 767 x 1536 each (first is the original), scaled by SCALE env (default 0.5)
import sys, os
from PIL import Image
out, ims = sys.argv[1], sys.argv[2:]; sc = float(os.environ.get('SCALE', '0.5'))
w, h = int(767 * sc), int(1536 * sc)
W = Image.new('RGB', (len(ims) * (w + 8) - 8, h), 'white')
for k, p in enumerate(ims): W.paste(Image.open(p).convert('RGB').resize((w, h), Image.LANCZOS), (k * (w + 8), 0))
W.save(out)
