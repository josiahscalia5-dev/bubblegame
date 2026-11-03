"""How close the real 3D opening's castle area and slide water are to the approved Screen 3.
    python3 -I match_metrics.py <approved.png> <frame.png> [<frame.png> ...]
All frames are 538 x 1076 Tap to Start screenshots (the approved image is fitted the way the game shows it).

Castle area: the upper screen (y 85-340) outside the HUD and the "Let's go!" banner, which sit in the same place
in every image. Reported: average colour difference to the approved area (CIE76 delta E of the mean Lab colour),
the share of washed-out near-white pixels, the share of soft pink-lavender pixels and of harsh saturated pixels.
Water: the visible slide water in each image (the approved slide beside the duck and mascot; the 3D slide ahead of
the mascot and in front of its foam). Reported: the cells' median hue and saturation, and the share of white lines/foam.
"""
import sys
import numpy as np
from PIL import Image


def lab(rgb):
    c = rgb / 255.0
    c = np.where(c > 0.04045, ((c + 0.055) / 1.055) ** 2.4, c / 12.92)
    M = np.array([[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]])
    xyz = c @ M.T / np.array([0.9505, 1.0, 1.089])
    f = np.where(xyz > 0.008856, np.cbrt(xyz), 7.787 * xyz + 16 / 116)
    return np.stack([116 * f[..., 1] - 16, 500 * (f[..., 0] - f[..., 1]), 200 * (f[..., 1] - f[..., 2])], -1)


def hsv(rgb):
    c = rgb / 255.0
    mx, mn = c.max(-1), c.min(-1)
    d = mx - mn
    h = np.zeros_like(mx)
    r, g, b = c[..., 0], c[..., 1], c[..., 2]
    m = d > 1e-6
    hr = (mx == r) & m; hg = (mx == g) & m & ~hr; hb = m & ~hr & ~hg
    h[hr] = ((g - b)[hr] / d[hr]) % 6
    h[hg] = (b - r)[hg] / d[hg] + 2
    h[hb] = (r - g)[hb] / d[hb] + 4
    return np.stack([h * 60, np.where(mx > 0, d / np.maximum(mx, 1e-6), 0), mx], -1)


def castle_mask():
    m = np.zeros((1076, 538), bool)
    m[85:340, :] = True
    m[160:310, 62:476] = False      # the banner
    return m


def water_pixels(img, approved):
    boxes = [(158, 583, 216, 634), (311, 583, 369, 634), (118, 656, 176, 729), (365, 656, 424, 729)] if approved else [(195, 548, 345, 605), (60, 800, 480, 835)]
    return np.concatenate([img[y0:y1, x0:x1].reshape(-1, 3) for x0, y0, x1, y1 in boxes])


def measure(img, approved=False):
    cm = castle_mask()
    cp = img[cm].astype(float)
    ch = hsv(cp)
    pale = np.mean((ch[:, 1] < 0.15) & (ch[:, 2] > 0.85))
    pinklav = np.mean((ch[:, 0] > 255) & (ch[:, 0] < 330) & (ch[:, 1] > 0.12) & (ch[:, 1] < 0.5))
    harsh = np.mean(ch[:, 1] > 0.6)
    wp = water_pixels(img, approved).astype(float)
    wh = hsv(wp)
    cells = (wh[:, 0] > 170) & (wh[:, 0] < 245) & (wh[:, 1] > 0.2)
    white = (wh[:, 1] < 0.18) & (wh[:, 2] > 0.88)
    return {'castle_lab': lab(cp).mean(0), 'pale': pale, 'pinklav': pinklav, 'harsh': harsh,
            'water_hue': float(np.median(wh[cells, 0])) if cells.any() else float('nan'), 'water_sat': float(np.median(wh[cells, 1])) if cells.any() else float('nan'),
            'white': float(white.sum() / max(1, (white | cells).sum())), 'water_lab': lab(wp).mean(0)}


art = Image.open(sys.argv[1]).convert('RGB')
A = Image.new('RGB', (538, 1076), (163, 167, 230)); A.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))
ref = measure(np.asarray(A), approved=True)
print('%-28s %8s %7s %8s %7s | %9s %9s %7s' % ('', 'castle dE', 'pale', 'pink-lav', 'harsh', 'water hue', 'water sat', 'white'))
print('%-28s %8s %7.2f %8.2f %7.2f | %9.0f %9.2f %7.2f' % ('APPROVED', '-', ref['pale'], ref['pinklav'], ref['harsh'], ref['water_hue'], ref['water_sat'], ref['white']))
for p in sys.argv[2:]:
    m = measure(np.asarray(Image.open(p).convert('RGB')))
    de = np.linalg.norm(m['castle_lab'] - ref['castle_lab'])
    print('%-28s %8.1f %7.2f %8.2f %7.2f | %9.0f %9.2f %7.2f' % (p.split('/')[-2] + '/' + p.split('/')[-1][:18], de, m['pale'], m['pinklav'], m['harsh'], m['water_hue'], m['water_sat'], m['white']))
