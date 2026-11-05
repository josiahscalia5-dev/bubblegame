"""phone_rim.py <frames...> : where the gold rim's warm band sits, per column, as a share of the screen height.
The Art Director's rim.py method (05_art_director_gate/scripts/rim.py): warm pixels (hue 10-55 or >= 345 degrees,
saturation > 0.25, value > 0.55) between 8% and 42% of the height; in each column the largest run is the rim band. Reports
the band's top at the columns where the arc is highest (x 0.35-0.65) and at the shoulders (x 0.20, 0.80), plus the median
thickness. Frames of any size; the first frame is the original."""
import sys, cv2, numpy as np
for p in sys.argv[1:]:
    im = cv2.imread(p); H, W = im.shape[:2]
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float)
    h, s, v = hsv[..., 0] * 360 / 256, hsv[..., 1] / 255, hsv[..., 2] / 255
    yy = np.mgrid[0:H, 0:W][0]
    warm = (((h >= 10) & (h < 55)) | (h >= 345)) & (s > 0.25) & (v > 0.55) & (yy > 0.08 * H) & (yy < 0.42 * H)
    tops, th = {}, []
    for x in np.arange(0.05, 1.0, 0.05):
        c = int(x * W); ys = np.nonzero(warm[:, max(c - 2, 0):c + 3].any(1))[0]
        if len(ys) < 3: continue
        runs = np.split(ys, np.nonzero(np.diff(ys) > 2)[0] + 1); r = max(runs, key=len)
        tops[round(x, 2)] = r[0] / H; th.append((r[-1] - r[0]) / H)
    mid = [tops[k] for k in tops if 0.35 <= k <= 0.65]
    sh = ' '.join(f'x{k:.2f}:{tops[k]:.3f}' for k in (0.2, 0.8) if k in tops)
    print(f"{p.split('/')[-1][:44]:44s} arc top (x .35-.65) {min(mid) if mid else float('nan'):.3f}H  shoulders {sh}  thickness {np.median(th) if th else float('nan'):.3f}H")
