"""The evidence sheets of 14_focused_pass_water_vfx: ORIGINAL | BEFORE (b91e952) | NOW at portrait height 1536 (3.0 s) and
1076 (2.85 and 3.1 s), page frames with the HUD; and the close-ups (original / before / now, cropped at the same frame
fractions, from the raw 3D canvas, so the HUD buttons do not cover the foam), labelled.   python sheets.py"""
import os
from PIL import Image, ImageDraw, ImageFont
HERE = os.path.dirname(os.path.abspath(__file__)); E = os.path.dirname(HERE)
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
B = os.path.join(E, 'before')
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


three = lambda t: [('ORIGINAL (approved)', APP), (f'BEFORE: b91e952, {t} s', os.path.join(B, f'before_t{t}.png')), (f'NOW: match {t} s', os.path.join(E, f'match_t{t}.png'))]
sheet('original_vs_before_vs_now_3.00s_fullres.png', (0, 0, 1, 1), 1536, three('3.00'))
sheet('original_vs_before_vs_now_2.85s.jpg', (0, 0, 1, 1), 1076, three('2.85'), 90)
sheet('original_vs_before_vs_now_3.10s.jpg', (0, 0, 1, 1), 1076, three('3.10'), 90)
cl = [('ORIGINAL', APP), ('BEFORE (b91e952)', os.path.join(B, 'before_t3.00_canvas.png')), ('NOW', os.path.join(E, 'match_t3.00_canvas.png'))]
sheet('closeup_01_tunnel_interior.jpg', (0.1, 0.24, 0.95, 0.66), 760, cl, 92)
sheet('closeup_01b_mid_rings_zoom.jpg', (0.25, 0.28, 0.8, 0.5), 640, cl, 92)
sheet('closeup_02_foam_and_water_round_the_character.jpg', (0.0, 0.70, 1.0, 0.93), 520, cl, 92)
sheet('closeup_02b_her_base_zoom.jpg', (0.2, 0.74, 0.8, 0.88), 480, cl, 92)
