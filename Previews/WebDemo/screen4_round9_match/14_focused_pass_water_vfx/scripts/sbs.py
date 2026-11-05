"""Side by side at the same frame fractions:  python sbs.py out.png x0,y0,x1,y1 height label=path ...  (path APP = the original)."""
import sys
from PIL import Image, ImageDraw
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
out, box, H = sys.argv[1], [float(x) for x in sys.argv[2].split(',')], int(sys.argv[3])
tiles = []
for a in sys.argv[4:]:
    lab, p = a.split('=', 1)
    im = Image.open(APP if p == 'APP' else p).convert('RGB')
    w, h = im.size
    c = im.crop((int(box[0] * w), int(box[1] * h), int(box[2] * w), int(box[3] * h)))
    c = c.resize((max(1, round(c.width * H / c.height)), H), Image.LANCZOS)
    d = ImageDraw.Draw(c); d.rectangle((0, 0, 7 * len(lab) + 10, 16), fill=(0, 0, 0)); d.text((4, 2), lab, fill=(255, 255, 255))
    tiles.append(c)
W = sum(t.width for t in tiles) + 6 * (len(tiles) - 1)
o = Image.new('RGB', (W, H), (255, 255, 255)); x = 0
for t in tiles: o.paste(t, (x, 0)); x += t.width + 6
o.save(out)
print(out, o.size)
