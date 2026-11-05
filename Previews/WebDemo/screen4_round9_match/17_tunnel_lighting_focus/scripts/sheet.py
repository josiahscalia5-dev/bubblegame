# sheet.py out.png box(x0,y0,x1,y1) scale "label1=img1" "label2=img2" ...: labelled side-by-side crops at 767x1536 scale
import sys
from PIL import Image, ImageDraw, ImageFont
out, box, sc = sys.argv[1], [float(v) for v in sys.argv[2].split(',')], float(sys.argv[3])
W, H = 767, 1536
tiles = []
for arg in sys.argv[4:]:
    lab, p = arg.split('=', 1)
    im = Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)
    c = im.crop((int(box[0]*W), int(box[1]*H), int(box[2]*W), int(box[3]*H)))
    c = c.resize((int(c.width*sc), int(c.height*sc)), Image.LANCZOS)
    t = Image.new('RGB', (c.width, c.height + 34), (255, 255, 255)); t.paste(c, (0, 34))
    d = ImageDraw.Draw(t)
    try: f = ImageFont.truetype('DejaVuSans-Bold.ttf', 20)
    except Exception: f = ImageFont.load_default()
    d.text((8, 6), lab, fill=(0, 0, 0), font=f); tiles.append(t)
w = sum(t.width for t in tiles) + 10*(len(tiles)-1); h = max(t.height for t in tiles)
S = Image.new('RGB', (w, h), (255, 255, 255)); x = 0
for t in tiles: S.paste(t, (x, 0)); x += t.width + 10
S.save(out)
