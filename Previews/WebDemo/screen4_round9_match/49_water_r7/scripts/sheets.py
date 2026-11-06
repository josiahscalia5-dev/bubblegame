"""Evidence sheets: the ORIGINAL approved Screen 4 against real game frames (layer_diag.cjs, seed 7, the 768 x 1536 canvas;
page = with the HUD), all resized to the original's 767 x 1536. The same camera, seed, screen size and moment in every panel.

    "$BW_PY" -I sheets.py <out-dir> "<label>=<dir>" ...   (each dir holds start/, T1.0/, T2.0/ from layer_diag.cjs)
Writes 01_FULLRES_<labels>.jpg (the start view with the HUD, the original first), 02_closeup_water_start_x1.4.jpg and
03_closeup_water_moving_T1.0.jpg / _T2.0.jpg (the water round her, the original's still beside each moment).
"""
import os, sys
from PIL import Image, ImageDraw, ImageFont

OUT = sys.argv[1]; RUNS = [a.split('=', 1) for a in sys.argv[2:]]
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), *['..'] * 5))
ORIG = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
os.makedirs(OUT, exist_ok=True)
F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)
F2 = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
BG = (15, 20, 36)
load = lambda p: Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS)

def sheet(panels, out, box=None, scale=1.0, title=None):
    tiles = []
    for lab, im in panels:
        if box: im = im.crop(box)
        if scale != 1: im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
        t = Image.new('RGB', (im.width, im.height + 40), BG); t.paste(im, (0, 40)); ImageDraw.Draw(t).text((10, 6), lab, font=F, fill='white')
        tiles.append(t)
    top = 50 if title else 0
    S = Image.new('RGB', (sum(t.width for t in tiles) + 8 * (len(tiles) - 1), tiles[0].height + top), BG)
    if title: ImageDraw.Draw(S).text((10, 10), title, font=F2, fill=(255, 190, 235))
    x = 0
    for t in tiles: S.paste(t, (x, top)); x += t.width + 8
    S.save(os.path.join(OUT, out), quality=92); print('wrote', out, S.size)

o = load(ORIG)
name = '_'.join(l.split(' ')[0] for l, _ in RUNS)
sheet([('ORIGINAL APPROVED', o)] + [(l, load(os.path.join(d, 'start', 'base_page.png'))) for l, d in RUNS], f'01_FULLRES_original_{name}.jpg')
sheet([('ORIGINAL', o)] + [(l.split(' (')[0], load(os.path.join(d, 'start', 'base_canvas.png'))) for l, d in RUNS],
      '02_closeup_water_start_x1.4.jpg', (40, 1000, 727, 1420), 1.4, 'The water round her at the start (same camera, seed, moment)')
for m in ('T1.0', 'T2.0'):
    sheet([('ORIGINAL (still)', o)] + [(f"{l.split(' (')[0]} +{m[1:]} s", load(os.path.join(d, m, 'base_canvas.png'))) for l, d in RUNS],
          f'03_closeup_water_moving_{m}.jpg', (40, 950, 727, 1420), 1.2, f'Moving: {m[1:]} s after the tap (straight, seed 7)')
