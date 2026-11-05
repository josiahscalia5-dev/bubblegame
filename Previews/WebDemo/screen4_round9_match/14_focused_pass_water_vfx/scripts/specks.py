"""Small white shapes in the tunnel (the original's white flecks, crescents, tiny rings and small bubbles among the bands), by
zone round the vanishing point:   python specks.py label=path[@vx,vy] ...      (path APP = the original)
Frames resized to 767 x 1536. A shape is a connected group of pale, bright pixels (S < 0.30, V > 0.86) that is brighter than
its surroundings (luminance minus a 4 px blur > 0.04), of 3 to 160 px (bigger groups are foam or highlights). Zones as in
bubbles.py (centre r < 0.12 W, mid 0.12-0.30, walls r >= 0.30 with y < 0.70); the HUD (y < 0.20) and y >= 0.70 are left out.
Also the share of the zone's area those shapes cover."""
import sys
import numpy as np, cv2
from PIL import Image
from scipy import ndimage as ndi
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
W, H = 767, 1536
print(f"{'frame':12s} {'centre':>14s} {'mid':>14s} {'walls':>14s}   (count / % of the zone covered; specks.py)")
for arg in sys.argv[1:]:
    lab, p = arg.split('=', 1); vp = None
    if '@' in p: p, v = p.split('@'); vp = tuple(float(t) for t in v.split(','))
    appr = p == 'APP'; vp = vp or ((0.528, 0.532) if appr else (0.53, 0.53))
    a = np.asarray(Image.open(APP if appr else p).convert('RGB').resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    mx, mn = a.max(-1), a.min(-1); s = (mx - mn) / np.maximum(mx, 1e-6)
    lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    m = (s < 0.30) & (mx > 0.86) & (lum - cv2.GaussianBlur(lum, (0, 0), 4) > 0.04)
    yy, xx = np.mgrid[0:H, 0:W]
    rr = np.hypot(xx / W - vp[0], (yy / H - vp[1]) * H / W)
    band = (yy > 0.20 * H) & (yy < 0.70 * H)
    Z = {'centre': band & (rr < 0.12), 'mid': band & (rr >= 0.12) & (rr < 0.30), 'walls': band & (rr >= 0.30)}
    lb, n = ndi.label(m); sz = ndi.sum(m, lb, range(1, n + 1)); cy = ndi.center_of_mass(m, lb, range(1, n + 1))
    out = []
    for z, zm in Z.items():
        c = sum(1 for k in range(n) if 3 <= sz[k] <= 160 and zm[int(cy[k][0]), int(cy[k][1])])
        cover = 100 * (m & zm & np.isin(lb, [k + 1 for k in range(n) if 3 <= sz[k] <= 160])).sum() / max(zm.sum(), 1)
        out.append(f'{c:5d} / {cover:4.1f}%')
    print(f"{lab:12s} " + ' '.join(f'{o:>14s}' for o in out))
