# crop3.py out.png x0 y0 x1 y1 img... : the same box (fractions) from each image (all resized to 767 x 1536), side by side
import sys
from PIL import Image
out = sys.argv[1]; x0, y0, x1, y1 = map(float, sys.argv[2:6]); ims = sys.argv[6:]
box = (int(x0 * 767), int(y0 * 1536), int(x1 * 767), int(y1 * 1536))
cs = [Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS).crop(box) for p in ims]
w, h = cs[0].size; W = Image.new('RGB', (len(cs) * (w + 8) - 8, h), 'white')
for k, c in enumerate(cs): W.paste(c, (k * (w + 8), 0))
W.save(out)
