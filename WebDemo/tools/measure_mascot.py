# Mascot size and position on screen, as fractions of the frame: the connected hot-pink region nearest the
# lower-middle of the frame. Used to match the mascot to approved Screen 3 (width 0.41 of the screen).
# python3 -I tools/measure_mascot.py <frame.png> [...]  (needs numpy and pillow)
import sys
import numpy as np
from PIL import Image
def box(p, seed=(0.5, 0.68)):
    im = Image.open(p).convert('RGB'); im = im.resize((270, 540))
    a = np.asarray(im).astype(int); H, W = a.shape[:2]
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    m = (r > 160) & (r - g > 80) & (b > 90)
    # nearest pink pixel to the seed
    ys, xs = np.nonzero(m)
    sy, sx = seed[1] * H, seed[0] * W
    k = np.argmin((ys - sy) ** 2 + (xs - sx) ** 2)
    reg = np.zeros_like(m); reg[ys[k], xs[k]] = True
    for _ in range(400):
        d = reg.copy()
        d[1:] |= reg[:-1]; d[:-1] |= reg[1:]; d[:, 1:] |= reg[:, :-1]; d[:, :-1] |= reg[:, 1:]
        d &= m
        if (d == reg).all(): break
        reg = d
    ys, xs = np.nonzero(reg)
    return xs.min() / W, xs.max() / W, ys.min() / H, ys.max() / H, reg.sum() / (W * H)
for p in sys.argv[1:]:
    x0, x1, y0, y1, area = box(p)
    print(f"{p.split('/')[-1]:34s} x {x0:.3f}-{x1:.3f} (w {x1-x0:.3f})  y {y0:.3f}-{y1:.3f} (h {y1-y0:.3f})  centre ({(x0+x1)/2:.3f}, {(y0+y1)/2:.3f})  area {area:.4f}")
