# crops.py out.png box(x0,y0,x1,y1 fractions) img1 [img2 ...]: side-by-side crops at the original's 767x1536 scale (SC=2)
import sys, os
from PIL import Image
out = sys.argv[1]; box = [float(v) for v in sys.argv[2].split(',')]; ims = sys.argv[3:]
W, H = 767, 1536; sc = float(os.environ.get('SC', '2'))
tiles = []
for p in ims:
    im = Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)
    c = im.crop((int(box[0]*W), int(box[1]*H), int(box[2]*W), int(box[3]*H)))
    c = c.resize((int(c.width*sc), int(c.height*sc)), Image.LANCZOS); tiles.append(c)
w = sum(t.width for t in tiles) + 8*(len(tiles)-1); h = max(t.height for t in tiles)
S = Image.new('RGB', (w, h), (255, 255, 255)); x = 0
for t in tiles: S.paste(t, (x, 0)); x += t.width + 8
S.save(out)
