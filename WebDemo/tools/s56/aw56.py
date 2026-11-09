#!/usr/bin/env python3
# s56 water measures in the art director's terms (lane s56, session 47f75e22): the same classes and regions as
# Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/qa/scripts/water.py / water2.py / hero.py, for ANY frames (resized to 864 x 1536).
#   $BW_PY aw56.py <frame> [<frame> ...]      (the approved Scene 6 is recognised by its file name and gets the approved UI mask)
# fg region x 0.15-0.85, y 0.70-0.795 without the hero (+6 px), pink and gold objects (+4 px) and UI.
# Classes (HSV): cobalt h 215-245 S >= 0.5; azure h 200-215 S >= 0.35; turquoise h 170-200 S >= 0.35; pale S < 0.25 V > 0.8;
# thin = pale removed by a 2-pixel opening; grad = mean luminance gradient x100 (Gaussian sigma 1); p5 = 5th-percentile luminance;
# body = mean colour of the 40-60 % luminance band; ring = pale 3-40 px round the hero; sides = pale left / right of his base (thin share);
# hero = the pink body's bounding box height (H) and top (y).
import sys, os
import numpy as np
from PIL import Image
from scipy import ndimage as nd
W, H = 864, 1536
def box(x0, y0, x1, y1): return (slice(int(y0 * H), int(y1 * H)), slice(int(x0 * W), int(x1 * W)))
def hsv(img):
    r, g, b = img[..., 0], img[..., 1], img[..., 2]; mx = img.max(-1); mn = img.min(-1); d = mx - mn; h = np.zeros_like(mx); m = d > 1e-6
    rm = m & (mx == r); gm = m & (mx == g) & ~rm; bm = m & ~rm & ~gm
    h[rm] = ((g - b)[rm] / d[rm]) % 6; h[gm] = ((b - r)[gm] / d[gm]) + 2; h[bm] = ((r - g)[bm] / d[bm]) + 4
    return h * 60, np.where(mx > 1e-6, d / np.maximum(mx, 1e-6), 0), mx
def ui(approved):
    m = np.zeros((H, W), bool)
    if approved:
        for b in [(0, 0, 1, 0.085), (0.30, 0, 0.70, 0.10), (0.11, 0.095, 0.88, 0.225), (0.03, 0.795, 0.96, 0.86), (0, 0.86, 1, 1)]: m[box(*b)] = True
    else:
        for b in [(0, 0, 1, 0.085), (0.06, 0.09, 0.75, 0.215), (0.75, 0.085, 0.89, 0.16), (0.22, 0.225, 0.78, 0.32), (0, 0.87, 1, 1)]: m[box(*b)] = True
    return m
def hero(img):
    h, s, v = hsv(img); pink = (h >= 295) & (s > 0.30) & (v > 0.45)
    reg = np.zeros_like(pink); reg[box(0.18, 0.45, 0.82, 0.80)] = True
    m = nd.binary_opening(pink & reg, iterations=2); lab, n = nd.label(m)
    if not n: return np.zeros_like(m)
    k = np.argmax(nd.sum(m, lab, range(1, n + 1))) + 1
    return nd.binary_closing(lab == k, iterations=3)
for p in sys.argv[1:]:
    img = np.asarray(Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    ap = '06_Swim' in p or 'APPROVED' in p.upper(); uim = ui(ap); h, s, v = hsv(img)
    he = hero(img); ys, xs = np.nonzero(he)
    obj = nd.binary_dilation(((h >= 295) & (s > 0.3) & (v > 0.45)) | ((h >= 25) & (h < 65) & (s > 0.45) & (v > 0.5)), iterations=4)
    m = np.zeros((H, W), bool); m[box(0.15, 0.70, 0.85, 0.795)] = True; m &= ~uim & ~obj & ~nd.binary_dilation(he, iterations=6)
    hh, ss, vv = h[m], s[m], v[m]
    pale = (s < 0.25) & (v > 0.8) & m; thin = pale & ~nd.binary_opening(pale, iterations=2)
    L = img @ np.array([0.2126, 0.7152, 0.0722]); gy, gx = np.gradient(nd.gaussian_filter(L, 1.0)); grad = np.hypot(gx, gy)[m].mean() * 100
    p5, p40, p60 = np.percentile(L[m], [5, 40, 60]); band = m & (L >= p40) & (L <= p60); body = img[band].mean(0)
    cls = lambda x: 100.0 * x.mean()
    out = dict(cob=cls((hh >= 215) & (hh < 245) & (ss >= 0.5)), az=cls((hh >= 200) & (hh < 215) & (ss >= 0.35)), tq=cls((hh >= 170) & (hh < 200) & (ss >= 0.35)),
               pale=100.0 * pale.sum() / m.sum(), thin=100.0 * thin.sum() / max(1, pale.sum()))
    ring = nd.binary_dilation(he, iterations=40) & ~nd.binary_dilation(he, iterations=3) & ~uim
    rp = (s < 0.25) & (v > 0.8) & ring; rthin = rp & ~nd.binary_opening(rp, iterations=2)
    sides = []
    if len(ys):
        y1 = ys.max(); x0, x1 = xs.min(), xs.max()
        for b in [(slice(int(y1 - 0.06 * H), int(y1 + 0.01 * H)), slice(max(0, x0 - 60), x0 + 20)), (slice(int(y1 - 0.06 * H), int(y1 + 0.01 * H)), slice(x1 - 20, min(W, x1 + 60)))]:
            r = np.zeros((H, W), bool); r[b] = True; r &= ~he & ~uim; pl = r & (s < 0.25) & (v > 0.8); th = pl & ~nd.binary_opening(pl, iterations=2)
            sides.append(f"{100 * pl.sum() / max(1, r.sum()):.0f}%({100 * th.sum() / max(1, pl.sum()):.0f}%thin)")
    hs = f"h {(ys.max() - ys.min()) / H:.3f} H top {ys.min() / H:.3f}" if len(ys) else 'none'
    print(f"{os.path.basename(os.path.dirname(p))[:14]}/{os.path.basename(p)[:22]:22s} fg: cob {out['cob']:4.1f} az {out['az']:4.1f} tq {out['tq']:4.1f} pale {out['pale']:4.1f} (thin {out['thin']:2.0f}%) "
          f"grad {grad:4.2f} p5 {p5:.2f} body #{int(body[0]*255):02x}{int(body[1]*255):02x}{int(body[2]*255):02x} | ring pale {100 * rp.sum() / ring.sum():4.1f}% (thin {100 * rthin.sum() / max(1, rp.sum()):2.0f}%) sides {' '.join(sides)} | hero {hs}")
