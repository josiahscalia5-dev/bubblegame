"""The foreground water band (y 0.80-0.97 of the frame; the pink character, gold coins and the HUD buttons left out):
its colour shares and its k-means palette. Usage: band.py label=frame.png ...  (frames at the original's 767 x 1536)"""
import sys, numpy as np, cv2
from PIL import Image
ORIG = 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
def band(path):
    a = np.asarray(Image.open(path).convert('RGB').resize((767, 1536))).astype(np.uint8)
    z = a[int(0.80 * 1536):int(0.97 * 1536)]
    hsv = cv2.cvtColor(z, cv2.COLOR_RGB2HSV).reshape(-1, 3).astype(float); px = z.reshape(-1, 3)
    h, s, v = hsv[:, 0] * 2, hsv[:, 1] / 255, hsv[:, 2] / 255
    keep = ~((((h >= 290) | (h <= 15)) & (s > 0.3)) | ((h > 20) & (h < 65) & (s > 0.35)))   # not pink, not gold
    # the HUD buttons' area in the bottom corners (both images have them): out
    H, W = z.shape[:2]; yy, xx = np.mgrid[0:H, 0:W]; yy = yy.ravel() / 1536 + 0.80; xx = xx.ravel() / 767
    keep &= ~((yy > 0.885) & ((xx < 0.37) | (xx > 0.66)))
    h, s, v, px = h[keep], s[keep], v[keep], px[keep]
    sh = {'icy pale blue': ((h >= 190) & (h <= 225) & (s >= 0.12) & (s < 0.42) & (v > 0.8)).mean(),
          'saturated blue/cyan': ((h >= 185) & (h <= 230) & (s >= 0.55) & (v > 0.5)).mean(),
          'mid blue': ((h >= 185) & (h <= 230) & (s >= 0.42) & (s < 0.55)).mean(),
          'white': ((s < 0.12) & (v > 0.88)).mean(),
          'lavender': ((h > 230) & (h < 290) & (s > 0.1) & (v > 0.55)).mean()}
    crit = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.5)
    _, lab, cen = cv2.kmeans(px.astype(np.float32), 5, None, crit, 3, cv2.KMEANS_PP_CENTERS); cnt = np.bincount(lab.ravel()) / len(lab)
    pal = ' '.join('#%02x%02x%02x %.0f%%' % (*cen[i].astype(int), cnt[i] * 100) for i in np.argsort(-cnt))
    return sh, s.mean(), pal
rows = [('ORIGINAL', ORIG)] + [a.split('=', 1) for a in sys.argv[1:]]
print('| frame | icy pale blue | saturated blue/cyan | mid blue | white | lavender | mean sat | palette (k-means) |')
print('|---|---|---|---|---|---|---|---|')
for lab, p in rows:
    sh, ms, pal = band(p)
    print(f"| {lab} | " + ' | '.join(f'{v * 100:.1f} %' for v in sh.values()) + f' | {ms:.2f} | {pal} |')
