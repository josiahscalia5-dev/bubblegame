"""The evidence sheets of 07_water_vfx_gate_fixes: the full-resolution three-way comparison (portrait height 1536) and the
close-ups (original / before / now, cropped at the same frame fractions), labelled.   python sheets.py"""
import os
from PIL import Image, ImageDraw, ImageFont
HERE = os.path.dirname(os.path.abspath(__file__)); E = os.path.dirname(HERE)
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
M = os.path.join(E, '..', '04_merged')
try: FONT = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
except Exception: FONT = ImageFont.load_default()


def tile(path, box, H, label):
    im = Image.open(path).convert('RGB'); w, h = im.size
    c = im.crop((round(box[0] * w), round(box[1] * h), round(box[2] * w), round(box[3] * h)))
    c = c.resize((max(1, round(c.width * H / c.height)), H), Image.LANCZOS)
    d = ImageDraw.Draw(c); tw = d.textlength(label, font=FONT); d.rectangle((0, 0, tw + 14, 30), fill=(0, 0, 0)); d.text((7, 3), label, fill=(255, 255, 255), font=FONT)
    return c


def sheet(name, box, H, items, quality=None):
    tiles = [tile(p, box, H, l) for l, p in items]
    W = sum(t.width for t in tiles) + 8 * (len(tiles) - 1)
    o = Image.new('RGB', (W, H), (255, 255, 255)); x = 0
    for t in tiles: o.paste(t, (x, 0)); x += t.width + 8
    out = os.path.join(E, name)
    o.save(out, quality=quality) if quality else o.save(out)
    print(out, o.size)


T = lambda t: os.path.join(E, f'match_t{t}.png')
C = lambda t: os.path.join(E, f'match_t{t}_canvas.png')
three = lambda t: [('ORIGINAL (approved)', APP), (f'BEFORE: merged {t} s', os.path.join(M, f'match_t{t}.png')), (f'NOW: match {t} s', T(t))]
sheet('original_vs_before_vs_now_3.00s_fullres.png', (0, 0, 1, 1), 1536, three('3.00'))
sheet('original_vs_before_vs_now_2.85s.jpg', (0, 0, 1, 1), 1076, three('2.85'), 90)
sheet('original_vs_before_vs_now_3.10s.jpg', (0, 0, 1, 1), 1076, three('3.10'), 90)
# close-ups at 3.0 s (the canvas, no HUD, for the game frames: the HUD buttons cover the bank)
cl = [('ORIGINAL', APP), ('BEFORE (merged)', os.path.join(M, 'match_t3.00_canvas.png')), ('NOW', C('3.00'))]
sheet('closeup_01_tunnel_bubbles_and_streaks.jpg', (0.15, 0.25, 0.9, 0.62), 760, cl, 92)
sheet('closeup_01b_mid_ring_zoom.jpg', (0.25, 0.30, 0.75, 0.50), 640, cl, 92)
sheet('closeup_02_waterline_character_on_the_water.jpg', (0.1, 0.62, 0.9, 0.9), 560, cl, 92)
sheet('closeup_04_foreground_foam_bank.jpg', (0.0, 0.72, 1.0, 0.92), 420, cl, 92)
