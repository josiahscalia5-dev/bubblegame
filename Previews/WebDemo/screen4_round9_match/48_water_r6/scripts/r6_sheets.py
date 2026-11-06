"""R6 evidence sheets: the ORIGINAL approved Screen 4 against real game frames (layer_diag.cjs, seed 7, the 768 x 1536 canvas;
page = with the HUD), all resized to the original's 767 x 1536. Same camera, seed, screen size and moment in every panel.

    "$BW_PY" -I r6_sheets.py <out-dir> <accepted-dir> <r5-dir> <r6-dir>
    each dir holds start/, T1.0/, T2.0/ (layer_diag.cjs outputs: base_page.png, base_canvas.png)
"""
import os, sys
from PIL import Image, ImageDraw, ImageFont

OUT, ACC, R5, R6 = sys.argv[1:5]
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
pg = lambda d, m: load(os.path.join(d, m, 'base_page.png'))
cv = lambda d, m: load(os.path.join(d, m, 'base_canvas.png'))
# 1. full resolution, the in-tunnel start view (with the HUD)
sheet([('ORIGINAL APPROVED', o), ('CURRENT ACCEPTED (?s3=intunnel)', pg(ACC, 'start')), ('NEW R6 (?s3=intunnel,water6)', pg(R6, 'start'))],
      '01_FULLRES_original_accepted_R6.jpg')
sheet([('ORIGINAL APPROVED', o), ('PREVIOUS R5 (water5)', pg(R5, 'start')), ('NEW R6 (water6)', pg(R6, 'start'))], '01b_FULLRES_original_R5_R6.jpg')
# 2. the water round her at the start, enlarged (the canvas: no HUD over the water)
WBOX = (40, 1000, 727, 1420)
sheet([('ORIGINAL', o), ('ACCEPTED', cv(ACC, 'start')), ('R5', cv(R5, 'start')), ('NEW R6', cv(R6, 'start'))],
      '02_closeup_water_start_x1.4.jpg', WBOX, 1.4, 'The water round her at the start (same camera, seed, moment)')
# 3. moving: +1 s and +2 s after the tap (no steering), the water round her
for m in ('T1.0', 'T2.0'):
    sheet([('ORIGINAL (still)', o), (f'ACCEPTED +{m[1:]} s', cv(ACC, m)), (f'R5 +{m[1:]} s', cv(R5, m)), (f'NEW R6 +{m[1:]} s', cv(R6, m))],
          f'03_closeup_water_moving_{m}.jpg', (40, 950, 727, 1420), 1.2, f'Moving: {m[1:]} s after the tap (straight, seed 7)')
