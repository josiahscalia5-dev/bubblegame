"""Colour shares per zone (pink, gold and the HUD button corners left out), frames resized to 767 x 1536."""
import sys, numpy as np, cv2
from PIL import Image
ORIG = '/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
Z = {'contact (under her)': (0.20, 0.80, 0.80, 0.90), 'sides beside/behind her': (None, None, 0.62, 0.84), 'bottom between buttons': (0.37, 0.66, 0.90, 0.98)}
def shares(path, z):
    a = np.asarray(Image.open(path).convert('RGB').resize((767, 1536))).astype(np.uint8)
    x0, x1, y0, y1 = z; H, W = 1536, 767
    hsv = cv2.cvtColor(a, cv2.COLOR_RGB2HSV).astype(float)
    h, s, v = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
    yy, xx = np.mgrid[0:H, 0:W] / [[H], [W]] if False else (np.mgrid[0:H, 0:W][0] / H, np.mgrid[0:H, 0:W][1] / W)
    m = (yy >= y0) & (yy < y1)
    m &= ((xx < 0.25) | (xx > 0.75)) if x0 is None else ((xx >= x0) & (xx < x1))
    m &= ~((((h >= 290) | (h <= 15)) & (s > 0.3)) | ((h > 20) & (h < 65) & (s > 0.35)))
    m &= ~((yy > 0.885) & ((xx < 0.37) | (xx > 0.66)))
    h, s, v = h[m], s[m], v[m]
    deep = ((h >= 200) & (h <= 240) & (s >= 0.55) & (v <= 0.75)).mean()
    sat = ((h >= 185) & (h <= 230) & (s >= 0.55) & (v > 0.5)).mean()
    icy = ((h >= 190) & (h <= 225) & (s >= 0.12) & (s < 0.42) & (v > 0.8)).mean()
    wh = ((s < 0.12) & (v > 0.88)).mean()
    lav = ((h > 230) & (h < 290) & (s > 0.1) & (v > 0.55)).mean()
    L = cv2.cvtColor(a, cv2.COLOR_RGB2LAB)[..., 0][m] / 255
    return f'{icy*100:5.1f} {sat*100:5.1f} {deep*100:5.1f} {wh*100:5.1f} {lav*100:5.1f} | sat {s.mean():.2f} | L p10-p90 {np.percentile(L,10):.2f}-{np.percentile(L,90):.2f}'
rows = [('ORIGINAL', ORIG)] + [a.split('=', 1) for a in sys.argv[1:]]
for zn, z in Z.items():
    print(f'\n## {zn}   (icy pale, saturated blue, deep cobalt, white, lavender %)')
    for lab, p in rows: print(f'{lab:28s} {shares(p, z)}')
