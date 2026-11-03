"""Region-by-region comparison of 538 x 1076 frames against the approved Screen 3: colour versus structure.
    python3 -I region_compare.py <approved.png> <label=frame.png> ...
Colour: CIE76 delta E between the regions' mean Lab colours (lower = closer palette).
Structure: SSIM of the grey images (7 x 7 windows, half size) and the correlation of their edge maps (Sobel magnitude,
lightly blurred): higher = shapes and edges in the same places. 1.0 would be identical.
Regions avoid the HUD, banner and Tap to Start panel, which are the game's own UI in every frame.
"""
import sys
import numpy as np
from PIL import Image, ImageFilter

REGIONS = {'castle top': (0, 85, 538, 160), 'castle sides': None, 'door': (95, 300, 445, 560), 'left brush': (0, 450, 190, 760),
           'right machinery + bubble': (350, 420, 538, 780), 'slide and water': (150, 560, 390, 850)}

def lab(rgb):
    c = rgb / 255.0; c = np.where(c > 0.04045, ((c + 0.055) / 1.055) ** 2.4, c / 12.92)
    xyz = c @ np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]]).T / np.array([0.9505, 1.0, 1.089])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return np.stack([116 * f[..., 1] - 16, 500 * (f[..., 0] - f[..., 1]), 200 * (f[..., 1] - f[..., 2])], -1)

def box(a, k=7):
    p = k // 2; a = np.pad(a, p, mode='edge'); c = a.cumsum(0).cumsum(1); c = np.pad(c, ((1, 0), (1, 0)))
    return (c[k:, k:] - c[:-k, k:] - c[k:, :-k] + c[:-k, :-k]) / (k * k)

def ssim(x, y):
    C1, C2 = (0.01 * 255) ** 2, (0.03 * 255) ** 2
    mx, my = box(x), box(y); sxx = box(x * x) - mx * mx; syy = box(y * y) - my * my; sxy = box(x * y) - mx * my
    return float((((2 * mx * my + C1) * (2 * sxy + C2)) / ((mx * mx + my * my + C1) * (sxx + syy + C2))).mean())

def edges(g):
    gx = np.zeros_like(g); gy = np.zeros_like(g)
    gx[1:-1, 1:-1] = (g[:-2, 2:] + 2 * g[1:-1, 2:] + g[2:, 2:]) - (g[:-2, :-2] + 2 * g[1:-1, :-2] + g[2:, :-2])
    gy[1:-1, 1:-1] = (g[2:, :-2] + 2 * g[2:, 1:-1] + g[2:, 2:]) - (g[:-2, :-2] + 2 * g[:-2, 1:-1] + g[:-2, 2:])
    return box(np.hypot(gx, gy), 5)

def crop(im, r):
    if r is None:   # castle sides: left and right of the banner
        a = np.asarray(im.crop((0, 160, 62, 310))); b = np.asarray(im.crop((476, 160, 538, 310))); return np.concatenate([a, b], 1)
    return np.asarray(im.crop(r))

art = Image.open(sys.argv[1]).convert('RGB')
A = Image.new('RGB', (538, 1076)); A.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))
frames = [(s.split('=', 1)[0], Image.open(s.split('=', 1)[1]).convert('RGB')) for s in sys.argv[2:]]
half = lambda a: np.asarray(Image.fromarray(a).convert('L').resize((max(1, a.shape[1] // 2), max(1, a.shape[0] // 2)), Image.LANCZOS), float)
print('%-26s ' % 'region' + ' | '.join('%-24s' % l for l, _ in frames))
print('%-26s ' % '' + ' | '.join('%-24s' % 'colour dE  SSIM   edges' for _ in frames))
tot = {l: [] for l, _ in frames}
for name, r in REGIONS.items():
    a = crop(A, r).astype(float); ga = half(crop(A, r)); ea = edges(ga)
    row = []
    for l, im in frames:
        b = crop(im, r).astype(float); gb = half(crop(im, r)); eb = edges(gb)
        de = float(np.linalg.norm(lab(a).reshape(-1, 3).mean(0) - lab(b).reshape(-1, 3).mean(0)))
        s = ssim(ga, gb); e = float(np.corrcoef(ea.ravel(), eb.ravel())[0, 1])
        tot[l].append((de, s, e)); row.append('%6.1f    %5.3f  %5.3f' % (de, s, e))
    print('%-26s ' % name + ' | '.join('%-24s' % x for x in row))
print('%-26s ' % 'average' + ' | '.join('%-24s' % ('%6.1f    %5.3f  %5.3f' % tuple(np.mean(tot[l], 0))) for l, _ in frames))
