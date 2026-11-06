"""R6 comparison sheets (6 November 2026, fifteenth session): the ORIGINAL approved Screen 4 against real game frames
(layer_diag.cjs base_page.png, seed 7, the in-tunnel start view and +1 s / +2 s after the tap), all resized to the
original's 767 x 1536.

    python3 r6_sheets.py <out dir> <label>=<start frame> ... [-- <label>=<frame> ...  (moving frames)]

Writes 01_FULLRES_<labels>.jpg (each frame at the original's full 767 x 1536, side by side), 02_closeup_water_x1.6.jpg
(the water round and under her: x 60-707, y 1030-1440, enlarged 1.6 x) and, with moving frames,
03_moving_closeup_x1.4.jpg (the same crop of the original, then each moving frame). No randomness; diagnostic only.
"""
import os, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), *(['..'] * 5)))
ORIG = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
OUT = sys.argv[1]; args = sys.argv[2:]
cut = args.index('--') if '--' in args else len(args)
still = [a.split('=', 1) for a in args[:cut]]; moving = [a.split('=', 1) for a in args[cut + 1:]]
os.makedirs(OUT, exist_ok=True)
BG, FG = (14, 14, 24), (245, 245, 255)
CROP = (60, 1030, 707, 1440)


def font(sz):
    p = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
    return ImageFont.truetype(p, sz) if os.path.exists(p) else ImageFont.load_default()


def load(p):
    return Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS)


def row(name, tiles, label_sz=26):
    w = sum(t.width for _, t in tiles) + 12 * (len(tiles) + 1); h = max(t.height for _, t in tiles) + 50
    s = Image.new('RGB', (w, h), BG); d = ImageDraw.Draw(s); x = 12
    for lab, t in tiles:
        d.text((x, 10), lab, fill=FG, font=font(label_sz)); s.paste(t, (x, 44)); x += t.width + 12
    s.save(os.path.join(OUT, name), quality=93); print('wrote', name, s.size)


frames = [('ORIGINAL', ORIG)] + still
row('01_FULLRES_' + '_'.join(l for l, _ in frames).replace(' ', '') + '.jpg', [(l, load(p)) for l, p in frames], 30)
z = lambda im, k: im.crop(CROP).resize((int((CROP[2] - CROP[0]) * k), int((CROP[3] - CROP[1]) * k)), Image.LANCZOS)
row('02_closeup_water_x1.6.jpg', [(l, z(load(p), 1.6)) for l, p in frames])
if moving:
    row('03_moving_closeup_x1.4.jpg', [('ORIGINAL', z(load(ORIG), 1.4))] + [(l, z(load(p), 1.4)) for l, p in moving])
