import sys
from PIL import Image, ImageDraw
# usage: sbs.py out ref game [box x0,y0,x1,y1 in 864x1536 coords]
out, ref, game = sys.argv[1:4]
box = tuple(map(int, sys.argv[4].split(','))) if len(sys.argv) > 4 else (0,0,864,1536)
r = Image.open(ref).convert('RGB').resize((864,1536), Image.LANCZOS).crop(box)
g = Image.open(game).convert('RGB').resize((864,1536), Image.LANCZOS).crop(box)
w, h = r.size
s = Image.new('RGB', (w*2+8, h), 'white')
s.paste(r, (0,0)); s.paste(g, (w+8,0))
d = ImageDraw.Draw(s)
for yy in range(0, h, 96):
    d.line([(0,yy),(w*2+8,yy)], fill=(255,255,0), width=1)
s.save(out)
