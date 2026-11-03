# python3 -I tools/paint_evidence.py <frames-dir> <out-dir>
# Builds the comparison sheets for the painted-scenery test from tools/paint_shots.cjs frames (prefixes saved, paint,
# vortex, tall, wide) and the approved Screen 3. Everything is shown at the same 1:2 stage size, labelled.
import os, sys
from PIL import Image, ImageDraw, ImageFont

FR, OUT = sys.argv[1], sys.argv[2]
os.makedirs(OUT, exist_ok=True)
HERE = os.path.dirname(os.path.abspath(__file__))
APPROVED = os.path.join(HERE, '..', 'ui', 'approved_screen3.png')
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
font = lambda n: ImageFont.truetype(FONT, n) if os.path.exists(FONT) else ImageFont.load_default()
BG, INK = (18, 18, 30), (240, 240, 250)


def frame(prefix, t):
    return Image.open(os.path.join(FR, f'{prefix}_t{t:04.1f}.png')).convert('RGB')


def sheet(cols, labels, w, title, out, rowlabels=None):
    """cols: list of rows, each a list of images; labels: per column (first row) or per cell."""
    h = int(w * 2)
    head, left = 64, (150 if rowlabels else 0)
    rows = len(cols)
    W = left + len(cols[0]) * (w + 12) + 12
    H = head + rows * (h + 40) + 8
    s = Image.new('RGB', (W, H), BG); d = ImageDraw.Draw(s)
    d.text((14, 12), title, fill=INK, font=font(26))
    for r, row in enumerate(cols):
        y = head + r * (h + 40)
        if rowlabels: d.text((14, y + 30 + h // 2 - 14), rowlabels[r], fill=INK, font=font(22))
        for c, im in enumerate(row):
            x = left + 12 + c * (w + 12)
            lab = labels[r][c] if isinstance(labels[0], list) else labels[c]
            d.text((x, y + 6), lab, fill=INK, font=font(18))
            s.paste(im.resize((w, h), Image.LANCZOS), (x, y + 32))
    s.save(os.path.join(OUT, out)); print(out, s.size)


approved = Image.open(APPROVED).convert('RGB')
# 1. Tap to Start
sheet([[approved, frame('saved', 0), frame('paint', 0), frame('vortex', 0)]],
      ['Approved Screen 3', 'Saved camera test (7/10)', 'Painted scenery, door open', 'Painted scenery + vortex'],
      420, 'Tap to Start: approved, the saved 3D test, and the painted-scenery test (?s3=paint, ?s3=paint,vortex)', '01_tap_to_start.png')
# 2. After the tap: the saved test above, the painted test below
ts = [2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5]
sheet([[frame('saved', t) for t in ts], [frame('paint', t) for t in ts]], [f'{t:.1f} s' for t in ts], 260,
      'After the tap (tap at 2.0 s), same seed and inputs', '02_after_the_tap.png', rowlabels=['Saved\n3D test', 'Painted\nscenery'])
# 3. The vortex variant: the painted vortex opening into the real tunnel
tv = [0.0, 2.2, 2.4, 2.6, 2.8, 3.0]
sheet([[frame('vortex', t) for t in tv]], ['Tap to Start'] + [f'{t:.1f} s' for t in tv[1:]], 300,
      '?s3=paint,vortex: the painted vortex at Tap to Start opens into the real tunnel after the tap (tap at 2.0 s)', '03_vortex_opening.png')
# 4. Other phone shapes (taller than 1:2, and a wider stage)
ims = [frame('tall', 0), frame('tall', 3.0), frame('wide', 0), frame('wide', 3.0)]
labs = ['390 x 844, Tap to Start', '390 x 844, 3.0 s', '600 x 1000, Tap to Start', '600 x 1000, 3.0 s']
w = 300
s = Image.new('RGB', (12 + len(ims) * (w + 12), 64 + int(w * 844 / 390) + 40), BG); d = ImageDraw.Draw(s)
d.text((14, 12), 'Other screen shapes (?s3=paint): the painting keeps its place', fill=INK, font=font(24))
for i, (im, lab) in enumerate(zip(ims, labs)):
    x = 12 + i * (w + 12); d.text((x, 70), lab, fill=INK, font=font(18))
    s.paste(im.resize((w, int(w * im.height / im.width)), Image.LANCZOS), (x, 98))
s.save(os.path.join(OUT, '04_phone_shapes.png')); print('04_phone_shapes.png', s.size)
