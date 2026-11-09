#!/usr/bin/env python3
# s56 water metrics (session ac4e3449, lane s56): the water's colour and white against the approved Scene 5 / 6.
#   python3 water56.py <image> [<image> ...]
# Regions are fractions of the frame, so the 864x1536 reference and 432x768 game frames compare directly.
#   side: x 0-0.22 and 0.78-1, y 0.66-0.78 (the lighting specialist's reference side regions)
#   water: y 0.50-0.86, pixels that are blue-dominant (b > r + 70 and b > g) or near-white (all channels >= 200), the hero's pink excluded
# Measures: median colour (hex), mean HSV saturation, 10th-percentile brightness (V = max/255), near-white fraction (all >= 200),
# the white's fineness (fraction of white pixels whose 5x5 neighbourhood is NOT all white: thin crests score high, blankets low),
# the pale fraction (light but not white, min channel 125-199: the soft blanket), and a blue "chop" measure (std of V along columns in the water: rolling waves score high, smooth sheets low).
import sys
import numpy as np
from PIL import Image


def load(p):
    return np.asarray(Image.open(p).convert('RGB')).astype(np.float32)


def hsv(a):
    mx = a.max(-1); mn = a.min(-1)
    s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    return s, mx / 255.0


def region(a, x0, x1, y0, y1):
    h, w, _ = a.shape
    return a[int(y0 * h):int(y1 * h), int(x0 * w):int(x1 * w)]


def stats(px):
    px = px.reshape(-1, 3)
    med = np.median(px, 0)
    s, v = hsv(px)
    white = (px.min(-1) >= 200)
    return dict(median='#%02x%02x%02x' % tuple(int(x) for x in med), sat=float(s.mean()), v10=float(np.percentile(v, 10)),
                white=float(white.mean()))


def water_mask(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    blue = (b > r + 70) & (b > g)
    white = a.min(-1) >= 200
    pink = (r > b * 0.9) & (r > g + 60)
    return (blue | white) & ~pink, white


def fineness(white):
    # erode by 5x5: white pixels surviving erosion are blanket interior
    from numpy.lib.stride_tricks import sliding_window_view
    p = np.pad(white, 2, constant_values=False)
    win = sliding_window_view(p, (5, 5))
    interior = win.all(axis=(-1, -2))
    n = white.sum()
    return float(1.0 - (interior & white).sum() / max(n, 1))


def main():
    for path in sys.argv[1:]:
        a = load(path)
        h, w, _ = a.shape
        side = np.concatenate([region(a, 0, 0.22, 0.66, 0.78).reshape(-1, 3), region(a, 0.78, 1.0, 0.66, 0.78).reshape(-1, 3)])
        st = stats(side)
        wa = region(a, 0, 1, 0.50, 0.86)
        m, white = water_mask(wa)
        wpx = wa[m]
        ws = stats(wpx)
        wf = float((white & m).sum() / max(m.sum(), 1))
        fin = fineness(white & m)
        s, v = hsv(wa)
        vv = np.where(m, v, np.nan)
        chop = float(np.nanmean(np.nanstd(vv, axis=0)))
        # the foreground (y 0.78-0.86) white separately: the blanket test
        fg = region(a, 0, 1, 0.78, 0.86); fm, fw = water_mask(fg)
        fgw = float((fw & fm).sum() / max(fm.sum(), 1))
        pale = float(((wa.min(-1) >= 125) & (wa.min(-1) < 200) & m).sum() / max(m.sum(), 1))
        print(f"{path.split('/')[-1]:34s} side: med {st['median']} sat {st['sat']:.2f} v10 {st['v10']:.2f} white {st['white']*100:4.1f}% | "
              f"water: area {m.mean()*100:4.1f}% med {ws['median']} sat {ws['sat']:.2f} white {wf*100:4.1f}% fine {fin:.2f} pale {pale*100:4.1f}% chop {chop:.3f} | fg white {fgw*100:4.1f}%")


if __name__ == '__main__':
    main()
