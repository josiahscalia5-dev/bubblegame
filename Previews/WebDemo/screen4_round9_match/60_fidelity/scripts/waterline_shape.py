"""Her waterline's shape and the water domes over her base (diagnostic only; 60_fidelity), on pink_silhouette.py's mask, frames
at 767 x 1536.   python waterline_shape.py label=frame.png ...  (label=ORIG for the ORIGINAL)
  waterline: her lowest pink row per 10-px column over the middle 80 % of her width. `bumps` = rms deviation (px) from a
    straight line fitted to it, after a 50-px running mean (large rounded shapes such as domes); `teeth` = rms of what the
    running mean removes (fine sawtooth / jagged edge). An even sawtooth line has small bumps and large teeth.
  domes: lavender pixels (HSV h 236-290, s > 0.12, v > 0.5, as zone_water.py) within 70 px above and 40 px below her
    lowest pink rows, over her width +/- 60 px; the largest connected blob's width x height (px) and the lavender share."""
import sys, os, numpy as np, cv2
from PIL import Image
here = os.path.dirname(os.path.abspath(__file__))
ns = {}; exec(open(os.path.join(here, 'pink_silhouette.py')).read().split("rows = [")[0], ns)
print('| frame | waterline bumps (px) | waterline teeth (px) | largest lavender dome w x h (px) | lavender share of the zone |')
print('|---|---|---|---|---|')
for arg in sys.argv[1:]:
    lab, p = arg.split('=', 1)
    if p == 'ORIG': p = ns['ORIG']
    r, m = ns['sil'](p)
    cols = np.nonzero(m.any(0))[0]; x0, x1 = cols.min(), cols.max(); w = x1 - x0
    xs = np.arange(int(x0 + 0.1 * w), int(x1 - 0.1 * w), 10)
    wl = np.array([np.nonzero(m[:, x:x + 10].any(1))[0].max() for x in xs], float)
    k = 5; sm = np.convolve(np.pad(wl, k // 2, mode='edge'), np.ones(k) / k, mode='valid')
    fit = np.polyval(np.polyfit(xs, sm, 1), xs)
    bumps, teeth = float(np.sqrt(np.mean((sm - fit) ** 2))), float(np.sqrt(np.mean((wl - sm) ** 2)))
    im = np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS))
    hsv = cv2.cvtColor(im, cv2.COLOR_RGB2HSV_FULL).astype(float); h = hsv[..., 0] * 360 / 256; s = hsv[..., 1] / 255; v = hsv[..., 2] / 255
    lav = (h >= 236) & (h <= 290) & (s > 0.12) & (v > 0.5) & ~m
    zone = np.zeros_like(m); lo = int(wl.min()) - 70; hi = int(wl.max()) + 40
    zone[lo:hi, max(0, x0 - 60):min(767, x1 + 60)] = True
    L = (lav & zone).astype(np.uint8)
    n, lbl, st, _ = cv2.connectedComponentsWithStats(L, 8)
    big = max(range(1, n), key=lambda i: st[i, cv2.CC_STAT_AREA]) if n > 1 else None
    dome = f'{st[big, cv2.CC_STAT_WIDTH]} x {st[big, cv2.CC_STAT_HEIGHT]}' if big else '-'
    print(f'| {lab} | {bumps:.1f} | {teeth:.1f} | {dome} | {100 * L.sum() / max(zone.sum(), 1):.1f} % |')
