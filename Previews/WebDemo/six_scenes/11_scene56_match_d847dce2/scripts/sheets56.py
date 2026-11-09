#!/usr/bin/env python3
# Scene 5/6 comparison sheets (session d847dce2): approved reference beside real game frames at 864x1536, plus labelled close-ups
# (upper ceiling, far-left machinery, far-right machinery, water, character). Unaltered pixels (no colour changes, no masking).
# Usage: python3 sheets56.py <out_dir> <ref5.png> <ref6.png> <label>=<game_tap.png>,<game_206.png> [<label2>=...]
import sys, os
from PIL import Image, ImageDraw, ImageFont
out, r5, r6 = sys.argv[1], sys.argv[2], sys.argv[3]
cols = [a.split('=', 1) for a in sys.argv[4:]]
os.makedirs(out, exist_ok=True)
W, H = 864, 1536
try: F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
except Exception: F = ImageFont.load_default()
L = lambda p: Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS) if Image.open(p).size != (W, H) else Image.open(p).convert('RGB')
CROPS = {  # normalised boxes (x0, y0, x1, y1) of the 864x1536 frame
  'upper_ceiling': (0.0, 0.10, 1.0, 0.42), 'far_left_machinery': (0.0, 0.22, 0.34, 0.80), 'far_right_machinery': (0.66, 0.22, 1.0, 0.80),
  'water': (0.0, 0.55, 1.0, 0.92), 'character': (0.22, 0.56, 0.78, 0.90)}
def row(ims, labels, pad=12, top=48):
    w = sum(i.width for i in ims) + pad * (len(ims) + 1); h = max(i.height for i in ims) + top + pad
    S = Image.new('RGB', (w, h), (245, 245, 250)); d = ImageDraw.Draw(S); x = pad
    for im, lb in zip(ims, labels): S.paste(im, (x, top)); d.text((x + 4, 8), lb, fill=(30, 20, 60), font=F); x += im.width + pad
    return S
for si, (ref, name) in enumerate([(r5, 'scene5'), (r6, 'scene6')]):
    R = L(ref); G = [(lb, L(p.split(',')[si])) for lb, p in cols]
    row([R] + [g for _, g in G], [f'APPROVED {name.upper()}'] + [f'GAME {lb}' for lb, _ in G]).save(f'{out}/{name}_full_side_by_side.png')
    for cn, (x0, y0, x1, y1) in CROPS.items():
        box = (int(x0 * W), int(y0 * H), int(x1 * W), int(y1 * H))
        row([R.crop(box)] + [g.crop(box) for _, g in G], [f'APPROVED {name}'] + [f'GAME {lb}' for lb, _ in G]).save(f'{out}/{name}_crop_{cn}.png')
print('sheets written to', out)
