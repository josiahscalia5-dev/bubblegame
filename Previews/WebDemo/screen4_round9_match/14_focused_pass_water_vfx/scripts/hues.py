"""Hue histogram of the non-white, non-pink, non-gold pixels in a box (frame fractions), to see where the blues sit (the
original's sky / cerulean against indigo / violet), with the purple share (hue 228-290, S >= 0.12: indigo, lavender, violet,
the colour the user calls "too purple") and the pale-aqua share (hue 180-215, S < 0.5, V > 0.8: the original's aqua-white
froth).
    python hues.py x0,y0,x1,y1 label=path ...      (path APP = the original; frames resized to 538 x 1076)"""
import sys
import numpy as np
from PIL import Image
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
W0, H0 = 538, 1076
box = [float(v) for v in sys.argv[1].split(',')]
edges = [0, 170, 190, 200, 210, 220, 228, 235, 245, 260, 290, 360]


def stats(p, box):
    im = np.asarray(Image.open(APP if p == 'APP' else p).convert('RGB').resize((W0, H0), Image.LANCZOS)).astype(np.float32) / 255
    c = im[int(box[1] * H0):int(box[3] * H0), int(box[0] * W0):int(box[2] * W0)]
    mx, mn = c.max(-1), c.min(-1); s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0); v = mx
    r, g, b = c[..., 0], c[..., 1], c[..., 2]; d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, np.where(mx == g, 60 * ((b - r) / d) + 120, 60 * ((r - g) / d) + 240))
    white = (s < 0.15) & (v > 0.85); pink = ((h >= 290) | (h < 20)) & (s > 0.3) & (v > 0.5); gold = (h >= 30) & (h < 65) & (s > 0.45) & (v > 0.6)
    rest = ~(white | pink | gold) & (s >= 0.12)
    n = h.size
    out = {'white': 100 * white.mean(), 'pink': 100 * pink.mean(),
           'hist': [100 * (rest & (h >= a0) & (h < b0)).sum() / n for a0, b0 in zip(edges[:-1], edges[1:])],
           'purple': 100 * (rest & (h >= 228) & (h < 290)).sum() / n,
           'aqua': 100 * (rest & (h >= 180) & (h < 215) & (s < 0.5) & (v > 0.8)).sum() / n,
           'meanV': float(v[rest].mean()) if rest.any() else 0.0}
    return out


if __name__ == '__main__':
    print('hue bins (% of box; white = S < .15 and V > .85; pink and gold left out):', ' '.join(f'{a}-{b}' for a, b in zip(edges[:-1], edges[1:])))
    for a in sys.argv[2:]:
        lab, p = a.split('=', 1)
        o = stats(p, box)
        print(f"{lab:22s} white {o['white']:5.1f} pink {o['pink']:5.1f} | " + ' '.join(f'{x:5.1f}' for x in o['hist'])
              + f" | purple(h228-290) {o['purple']:5.1f} pale-aqua {o['aqua']:5.1f} | mean V {o['meanV']:.2f}")
