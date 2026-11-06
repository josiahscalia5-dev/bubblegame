"""The layer ablation report (diagnostic only, sixteenth session).

    python ablation_report.py <ablation dir of one moment, e.g. ../ablation/R9_T1.0> <out prefix>

For the base frame and every abl_*.png of the SAME moment: the colour shares of band.py (44_water_material/diag/band.py:
y 0.80-0.97 of the frame, pink, gold and the HUD buttons' corners left out; icy pale blue, saturated blue/cyan, mid blue,
white, lavender) and of a second zone round her sides (y 0.70-0.80), "pale" = icy pale blue + white, and how much of the
zone each layer changes (pixels whose colour moves by more than 24 levels when it is hidden). The ORIGINAL approved
Screen 4 is measured the same way. Also writes a labelled sheet of the lower 45 % of each frame."""
import sys, os, glob, numpy as np, cv2
from PIL import Image, ImageDraw, ImageFont
ORIG = '/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
D, OUT = sys.argv[1], sys.argv[2]
load = lambda p: np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS)).astype(np.uint8)

def shares(a, y0, y1):
    z = a[int(y0 * 1536):int(y1 * 1536)]
    hsv = cv2.cvtColor(z, cv2.COLOR_RGB2HSV).reshape(-1, 3).astype(float)
    h, s, v = hsv[:, 0] * 2, hsv[:, 1] / 255, hsv[:, 2] / 255
    keep = ~((((h >= 290) | (h <= 15)) & (s > 0.3)) | ((h > 20) & (h < 65) & (s > 0.35)))
    H, W = z.shape[:2]; yy, xx = np.mgrid[0:H, 0:W]; yy = yy.ravel() / 1536 + y0; xx = xx.ravel() / 767
    keep &= ~((yy > 0.885) & ((xx < 0.37) | (xx > 0.66)))
    h, s, v = h[keep], s[keep], v[keep]
    r = {'icy': ((h >= 190) & (h <= 225) & (s >= 0.12) & (s < 0.42) & (v > 0.8)).mean(),
         'sat': ((h >= 185) & (h <= 230) & (s >= 0.55) & (v > 0.5)).mean(),
         'mid': ((h >= 185) & (h <= 230) & (s >= 0.42) & (s < 0.55)).mean(),
         'white': ((s < 0.12) & (v > 0.88)).mean(),
         'lav': ((h > 230) & (h < 290) & (s > 0.1) & (v > 0.55)).mean(),
         'meanS': s.mean(), 'meanV': v.mean()}
    r['pale'] = r['icy'] + r['white']
    return r

def changed(a, b, y0, y1):
    za, zb = a[int(y0 * 1536):int(y1 * 1536)].astype(int), b[int(y0 * 1536):int(y1 * 1536)].astype(int)
    return (np.abs(za - zb).max(-1) > 24).mean()

base = load(os.path.join(D, 'base_canvas.png'))
files = sorted(glob.glob(os.path.join(D, 'abl_*.png')))
rows = [('ORIGINAL', load(ORIG)), ('base (R9 as built)', base)] + [(os.path.basename(f)[4:-4], load(f)) for f in files]
lines = ['| frame | band y 0.80-0.97: pale (icy + white) | icy | white | saturated blue | mid | lavender | mean sat | sides y 0.70-0.80: pale | saturated | changed vs base: band | sides |',
         '|---|---|---|---|---|---|---|---|---|---|---|---|']
for lab, a in rows:
    b, s = shares(a, 0.80, 0.97), shares(a, 0.70, 0.80)
    ch = '' if lab in ('ORIGINAL', 'base (R9 as built)') else f'{changed(a, base, 0.80, 0.97) * 100:.1f} % | {changed(a, base, 0.70, 0.80) * 100:.1f} %'
    lines.append(f"| {lab} | {b['pale'] * 100:.1f} % | {b['icy'] * 100:.1f} | {b['white'] * 100:.1f} | {b['sat'] * 100:.1f} | {b['mid'] * 100:.1f} | {b['lav'] * 100:.1f} | {b['meanS']:.2f} | {s['pale'] * 100:.1f} % | {s['sat'] * 100:.1f} | {ch or '- | -'} |")
open(OUT + '.md', 'w').write('\n'.join(lines) + '\n')
print('\n'.join(lines))
# the sheet: the lower 45 % of each frame, labelled, 5 per row
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
tiles = []
for lab, a in rows:
    im = Image.fromarray(a[int(0.55 * 1536):]).resize((384, int((1536 - int(0.55 * 1536)) / 2)))
    t = Image.new('RGB', (384, im.height + 34), (12, 14, 28)); t.paste(im, (0, 34)); ImageDraw.Draw(t).text((8, 5), lab, font=font, fill=(255, 255, 255)); tiles.append(t)
cols = 4; rws = (len(tiles) + cols - 1) // cols; W, H = tiles[0].size
sheet = Image.new('RGB', (cols * W + (cols - 1) * 6, rws * H + (rws - 1) * 6), (0, 0, 0))
for i, t in enumerate(tiles): sheet.paste(t, ((i % cols) * (W + 6), (i // cols) * (H + 6)))
sheet.save(OUT + '_sheet.jpg', quality=90)
