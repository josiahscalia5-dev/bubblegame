import sys
from PIL import Image, ImageDraw, ImageFont
y0, y1, out = float(sys.argv[1]), float(sys.argv[2]), sys.argv[3]
items = [a.split('=', 1) for a in sys.argv[4:]]
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
tiles = []
for lab, p in items:
    im = Image.open(p).convert('RGB').resize((767, 1536)).crop((0, int(y0 * 1536), 767, int(y1 * 1536)))
    t = Image.new('RGB', (im.width, im.height + 34), (15, 20, 36)); t.paste(im, (0, 34)); ImageDraw.Draw(t).text((8, 5), lab, font=font, fill='white'); tiles.append(t)
W = sum(t.width for t in tiles) + 6 * (len(tiles) - 1); S = Image.new('RGB', (W, tiles[0].height), (15, 20, 36)); x = 0
for t in tiles: S.paste(t, (x, 0)); x += t.width + 6
S.save(out, quality=90)
