# Approved (top) vs the REAL running game (bottom), one column per storyboard screen. Session 3849f5c8.
# Usage: python3 sheet.py <out.png> <ref1> <game1> <ref2> <game2> ... (labels from the file names)
import sys
from PIL import Image, ImageDraw, ImageFont

out, pairs = sys.argv[1], sys.argv[2:]
cols = [(pairs[i], pairs[i + 1]) for i in range(0, len(pairs), 2)]
W, H, PAD, TOP = 432, 768, 12, 46
sheet = Image.new('RGB', (len(cols) * (W + PAD) + PAD, 2 * (H + TOP) + PAD), (30, 22, 48))
d = ImageDraw.Draw(sheet)
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
except OSError:
    font = ImageFont.load_default()
for c, (ref, game) in enumerate(cols):
    x = PAD + c * (W + PAD)
    for r, (p, tag) in enumerate(((ref, 'APPROVED'), (game, 'REAL GAME'))):
        y = r * (H + TOP) + TOP
        im = Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)
        sheet.paste(im, (x, y))
        name = p.rsplit('/', 1)[-1].rsplit('.', 1)[0][:30]
        d.text((x + 4, y - 30), f'{c + 1} {tag}: {name}', fill=(255, 230, 120) if r else (170, 230, 255), font=font)
sheet.save(out)
print(out, sheet.size)
