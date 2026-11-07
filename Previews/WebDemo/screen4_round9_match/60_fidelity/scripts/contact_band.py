"""The water right under her (diagnostic only; 60_fidelity): per column of her pink silhouette (pink_silhouette.py's mask), the
pixels from 4 to 64 px below her lowest pink row, x within her width. Colour classes as zone_water.py (HSV), plus the
mean saturation and value.   python contact_band.py label=frame.png ...  (label=ORIG for the ORIGINAL)"""
import sys, os, numpy as np, cv2
from PIL import Image
here = os.path.dirname(os.path.abspath(__file__))
ns = {}; exec(open(os.path.join(here, 'pink_silhouette.py')).read().split("rows = [")[0], ns)
print('| frame | cobalt | turquoise | pale | white | lavender | mean sat | mean val |')
print('|---|---|---|---|---|---|---|---|')
for arg in sys.argv[1:]:
    lab, p = arg.split('=', 1)
    if p == 'ORIG': p = ns['ORIG']
    r, m = ns['sil'](p)
    a = np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS))
    hsv = cv2.cvtColor(a, cv2.COLOR_RGB2HSV).astype(float); h, s, v = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
    sel = np.zeros(m.shape, bool)
    for x in range(r['left'] + 20, r['right'] - 20):
        ys = np.nonzero(m[:, x])[0]
        if len(ys): sel[ys.max() + 4:ys.max() + 64, x] = True
    H, S, V = h[sel], s[sel], v[sel]
    c = lambda k: 100 * k.mean()
    cob = c((H >= 205) & (H <= 235) & (S >= 0.6) & (V >= 0.45) & (V <= 0.92)); tq = c((H >= 180) & (H < 205) & (S >= 0.45) & (V > 0.55))
    pale = c((H >= 185) & (H <= 235) & (S >= 0.12) & (S < 0.45) & (V > 0.75)); wh = c((S < 0.12) & (V > 0.88)); lav = c((H > 236) & (H <= 290) & (S > 0.12) & (V > 0.5))
    print(f'| {lab} | {cob:.1f} % | {tq:.1f} | {pale:.1f} | {wh:.1f} | {lav:.1f} | {S.mean():.2f} | {V.mean():.2f} |')
