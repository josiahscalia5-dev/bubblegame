"""Her visible pink silhouette (diagnostic only): rows / columns covered by her saturated pink fur in the lower part of
the frame (y 0.60-0.97, the brushes' pink-white heads excluded by keeping the largest connected pink blob touching the
middle). Prints top, bottom, left, right, centre x, area (px of the 767 x 1536 frame) and the width at 25/50/75 % of her
visible height.   python pink_silhouette.py label=frame.png ..."""
import sys, numpy as np, cv2
from PIL import Image
ORIG = '/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
def sil(p):
    a = np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS))
    hsv = cv2.cvtColor(a, cv2.COLOR_RGB2HSV).astype(float); h, s, v = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
    pink = (((h >= 290) | (h <= 12)) & (s > 0.35) & (v > 0.45)).astype(np.uint8)
    pink[:int(0.60 * 1536)] = 0; pink[int(0.97 * 1536):] = 0
    pink = cv2.morphologyEx(pink, cv2.MORPH_CLOSE, np.ones((7, 7), np.uint8))
    n, lab, st, cen = cv2.connectedComponentsWithStats(pink)
    best = max(range(1, n), key=lambda i: st[i, cv2.CC_STAT_AREA] - 4 * abs(cen[i][0] - 330))
    m = lab == best; ys, xs = np.nonzero(m)
    t, b = ys.min(), ys.max(); H = b - t
    w = lambda f: int(m[int(t + f * H)].sum())
    return dict(top=int(t), bottom=int(b), left=int(xs.min()), right=int(xs.max()), cx=round(float(xs.mean()), 1), area=int(m.sum()), w25=w(0.25), w50=w(0.5), w75=w(0.75)), m
rows = [('ORIGINAL', ORIG)] + [a.split('=', 1) for a in sys.argv[1:]]
print('| frame | top | bottom | height | left | right | centre x | area px | width at 25 / 50 / 75 % of her height |')
print('|---|---|---|---|---|---|---|---|---|')
for lab, p in rows:
    r, _ = sil(p)
    print(f"| {lab} | {r['top']} | {r['bottom']} | {r['bottom'] - r['top']} | {r['left']} | {r['right']} | {r['cx']} | {r['area']} | {r['w25']} / {r['w50']} / {r['w75']} |")
