"""ORIGINAL | A | B side by side at full resolution (767 x 1536 each), labelled.  sheet3.py out.jpg label=img ...  [crop=y0]"""
import sys
from PIL import Image, ImageDraw, ImageFont
O = '/home/user/bubblegame/.claude/worktrees/agent-adb55eb6aad0cc08b/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
out = sys.argv[1]; args = [a for a in sys.argv[2:] if not a.startswith('crop=')]
crop = int(next((a[5:] for a in sys.argv[2:] if a.startswith('crop=')), 0))
items = [('ORIGINAL', O)] + [a.split('=', 1) for a in args]
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
tiles = []
for lab, p in items:
    im = Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS).crop((0, crop, 767, 1536))
    t = Image.new('RGB', (767, im.height + 46), (12, 14, 28)); t.paste(im, (0, 46)); ImageDraw.Draw(t).text((12, 7), lab, font=font, fill='white'); tiles.append(t)
W, H = tiles[0].size; s = Image.new('RGB', (len(tiles) * W + (len(tiles) - 1) * 8, H), (0, 0, 0))
for i, t in enumerate(tiles): s.paste(t, (i * (W + 8), 0))
s.save(out, quality=90)
