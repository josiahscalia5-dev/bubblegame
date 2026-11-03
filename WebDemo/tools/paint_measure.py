# python3 -I tools/paint_measure.py approved.png frameA.png [frameB.png ...]
# Region-by-region measures against the approved Screen 3, all at 538 x 1076 (the 1:2 stage):
#   colour: CIE76 delta E between the regions' mean colours (lower is closer)
#   SSIM:   structural similarity of the regions' greyscale images (7 x 7 windows; 1.0 would be identical)
#   edges:  correlation of the regions' edge maps (Sobel magnitude; 1.0 would be identical)
# The top bar, the "Let's go!" banner and the Tap to Start panel are left out of every region (the game draws its own
# live interface there). Prints a table and the averages as JSON.
import json, sys
import numpy as np
from PIL import Image

SIZE = (538, 1076)
REGIONS = {   # x0, y0, x1, y1 on the 538 x 1076 stage
    'castle top': [(60, 75, 480, 158)],
    'castle sides': [(0, 158, 70, 470), (468, 158, 538, 450)],
    'door': [(95, 302, 445, 480)],
    'left brush': [(0, 470, 170, 700)],
    'right machinery + bubble': [(390, 450, 538, 700)],
    'slide, water and mascot': [(150, 520, 400, 815)],
}


def load(p):
    return np.asarray(Image.open(p).convert('RGB').resize(SIZE, Image.LANCZOS), dtype=np.float64) / 255.0


def lab(rgb):
    c = np.where(rgb > 0.04045, ((rgb + 0.055) / 1.055) ** 2.4, rgb / 12.92)
    xyz = c @ np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]).T
    xyz /= np.array([0.95047, 1.0, 1.08883])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return np.stack([116 * f[..., 1] - 16, 500 * (f[..., 0] - f[..., 1]), 200 * (f[..., 1] - f[..., 2])], -1)


def box_mean(a, k=7):
    p = np.pad(a, k // 2, mode='reflect'); c = p.cumsum(0).cumsum(1); c = np.pad(c, ((1, 0), (1, 0)))
    return (c[k:, k:] - c[:-k, k:] - c[k:, :-k] + c[:-k, :-k]) / (k * k)


def ssim(a, b):
    C1, C2 = 0.01 ** 2, 0.03 ** 2
    ma, mb = box_mean(a), box_mean(b)
    va, vb, cv = box_mean(a * a) - ma * ma, box_mean(b * b) - mb * mb, box_mean(a * b) - ma * mb
    return float((((2 * ma * mb + C1) * (2 * cv + C2)) / ((ma * ma + mb * mb + C1) * (va + vb + C2))).mean())


def edges(g):
    p = np.pad(g, 1, mode='edge')
    gx = (p[:-2, 2:] + 2 * p[1:-1, 2:] + p[2:, 2:]) - (p[:-2, :-2] + 2 * p[1:-1, :-2] + p[2:, :-2])
    gy = (p[2:, :-2] + 2 * p[2:, 1:-1] + p[2:, 2:]) - (p[:-2, :-2] + 2 * p[:-2, 1:-1] + p[:-2, 2:])
    return np.hypot(gx, gy)


def measure(ref, im):
    out = {}
    gr, gi = ref.mean(-1), im.mean(-1)
    for name, boxes in REGIONS.items():
        de, ss, ed, n = 0, 0, 0, 0
        for (x0, y0, x1, y1) in boxes:
            w = (x1 - x0) * (y1 - y0)
            r, i = ref[y0:y1, x0:x1], im[y0:y1, x0:x1]
            de += float(np.linalg.norm(lab(r.reshape(-1, 3).mean(0)) - lab(i.reshape(-1, 3).mean(0)))) * w
            ss += ssim(gr[y0:y1, x0:x1], gi[y0:y1, x0:x1]) * w
            ea, eb = edges(gr[y0:y1, x0:x1]).ravel(), edges(gi[y0:y1, x0:x1]).ravel()
            ed += float(np.corrcoef(ea, eb)[0, 1]) * w
            n += w
        out[name] = (round(de / n, 1), round(ss / n, 3), round(ed / n, 3))
    out['average'] = tuple(round(float(np.mean([v[k] for v in out.values()])), 3 if k else 1) for k in range(3))
    return out


ref = load(sys.argv[1])
res = {p: measure(ref, load(p)) for p in sys.argv[2:]}
names = list(REGIONS) + ['average']
print('region'.ljust(28) + ''.join(p.split('/')[-1][:30].ljust(32) for p in res))
for n in names: print(n.ljust(28) + ''.join(f'{v[n][0]:5.1f} / {v[n][1]:.3f} / {v[n][2]:.3f}'.ljust(32) for v in res.values()))
print(json.dumps(res))
