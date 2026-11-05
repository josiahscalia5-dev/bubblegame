"""White splash flecks in the tunnel by SIZE (the user: "the original's white flecks are bolder and denser"), by zone round
the vanishing point.   python specks_size.py label=path[@vx,vy] ...      (path APP = the original)
Same detector as specks.py (frames resized to 767 x 1536; a shape = connected pale bright pixels, S < 0.30, V > 0.86, brighter
than a 4 px blur by 0.04; HUD y < 0.20 and the foreground y >= 0.70 left out; zones centre r < 0.12 W, mid 0.12-0.30,
walls >= 0.30), split by area: small 3-19 px, bold 20-160 px, chunk 161-900 px. Per class: count / % of the zone covered.
Also 'cover' = all three classes together, and 'mean' = the mean area (px) of the shapes of 3-900 px."""
import sys
import numpy as np, cv2
from PIL import Image
from scipy import ndimage as ndi
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
W, H = 767, 1536
CL = [('small', 3, 19), ('bold', 20, 160), ('chunk', 161, 900)]


def run(p, vp):
    a = np.asarray(Image.open(APP if p == 'APP' else p).convert('RGB').resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    mx, mn = a.max(-1), a.min(-1); s = (mx - mn) / np.maximum(mx, 1e-6)
    lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    m = (s < 0.30) & (mx > 0.86) & (lum - cv2.GaussianBlur(lum, (0, 0), 4) > 0.04)
    yy, xx = np.mgrid[0:H, 0:W]
    rr = np.hypot(xx / W - vp[0], (yy / H - vp[1]) * H / W)
    band = (yy > 0.20 * H) & (yy < 0.70 * H)
    Z = {'centre': band & (rr < 0.12), 'mid': band & (rr >= 0.12) & (rr < 0.30), 'walls': band & (rr >= 0.30)}
    lb, n = ndi.label(m)
    idx = np.arange(1, n + 1)
    sz = ndi.sum(m, lb, idx) if n else np.zeros(0)
    cy = np.array(ndi.center_of_mass(m, lb, idx)) if n else np.zeros((0, 2))
    out = {}
    for z, zm in Z.items():
        inz = np.array([zm[int(c[0]), int(c[1])] for c in cy], bool) if n else np.zeros(0, bool)
        row = {}
        for name, lo, hi in CL:
            sel = inz & (sz >= lo) & (sz <= hi)
            row[name] = (int(sel.sum()), 100 * np.isin(lb, idx[sel]).sum() / max(zm.sum(), 1))
        sel = inz & (sz >= 3) & (sz <= 900)
        row['cover'] = 100 * (np.isin(lb, idx[sel]) & zm).sum() / max(zm.sum(), 1)
        row['mean'] = float(sz[sel].mean()) if sel.any() else 0.0
        out[z] = row
    return out


if __name__ == '__main__':
    print('count / % covered by size class (small 3-19 px, bold 20-160, chunk 161-900, at 767 x 1536); specks_size.py')
    for arg in sys.argv[1:]:
        lab, p = arg.split('=', 1); vp = None
        if '@' in p: p, v = p.split('@'); vp = tuple(float(t) for t in v.split(','))
        vp = vp or ((0.528, 0.532) if p == 'APP' else (0.53, 0.53))
        o = run(p, vp)
        print(f'{lab:14s} ' + ' || '.join(f"{z}: " + ' '.join(f"{k} {o[z][k][0]:3d}/{o[z][k][1]:4.1f}%" for k, _, _ in CL) + f" cover {o[z]['cover']:4.1f}% mean {o[z]['mean']:5.1f}px" for z in o))
