"""The pink character's size and place (focused pass, Tunnel & Lighting).

Usage: $BW_PY character.py <frame.png> [<frame.png> ...] [--mask out_dir]
Each frame is resized to 538 x 1076 (the original 767 x 1536 too) and measured in fractions of the frame.

Two masks, both restricted to the largest connected blob inside x 0.12-0.88, y 0.55-0.95:
  - 'lead':  the lead's saturated pink (hue >= 300 or <= 10 degrees, S > 0.45, V > 0.5), as in the brief;
  - 'body':  any pink (hue >= 290 or <= 20, S > 0.25, V > 0.45), closed with a 7 px kernel, so the lighter fur tips count.
Reported per mask: area share of the frame, bbox x0-x1 / y0-y1, width, centroid, the dome top (first row from the top with
at least 3% of the width pink), the widest row and its y, and the half-height width (the body's width at the middle of the
blob's height).
"""
import sys, os, numpy as np, cv2
from PIL import Image
W0, H0 = 538, 1076
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'

def load(p):
    return np.asarray(Image.open(p).convert('RGB').resize((W0, H0), Image.LANCZOS))

def hsv(im):
    a = im.astype(np.float32) / 255; mx, mn = a.max(-1), a.min(-1); v = mx; s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]; d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, np.where(mx == g, 60 * ((b - r) / d) + 120, 60 * ((r - g) / d) + 240))
    return h, s, v

def blob(mask):
    roi = np.zeros_like(mask); y0, y1, x0, x1 = int(0.55 * H0), int(0.95 * H0), int(0.12 * W0), int(0.88 * W0)
    roi[y0:y1, x0:x1] = mask[y0:y1, x0:x1]
    n, lab, st, _ = cv2.connectedComponentsWithStats(roi.astype(np.uint8), 8)
    if n < 2: return None
    k = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA])
    return lab == k

def describe(m):
    ys, xs = np.nonzero(m)
    rows = m.sum(1) / W0
    top = int(np.argmax(rows > 0.03))
    wide = int(np.argmax(rows))
    mid = (ys.min() + ys.max()) // 2
    rw = np.nonzero(m[mid])[0]
    return dict(area=m.mean() * 100, x0=xs.min() / W0, x1=xs.max() / W0, y0=ys.min() / H0, y1=ys.max() / H0,
                w=(xs.max() - xs.min()) / W0, cx=xs.mean() / W0, cy=ys.mean() / H0, top=top / H0,
                widest=rows[wide], widest_y=wide / H0, midw=(rw.max() - rw.min()) / W0 if len(rw) else 0)

def measure(p, maskdir=None, tag=None):
    im = load(p); h, s, v = hsv(im)
    lead = ((h >= 300) | (h <= 10)) & (s > 0.45) & (v > 0.5)
    body = ((h >= 290) | (h <= 20)) & (s > 0.25) & (v > 0.45)
    body = cv2.morphologyEx(body.astype(np.uint8), cv2.MORPH_CLOSE, np.ones((7, 7), np.uint8)).astype(bool)
    out = {}
    for name, m in (('lead', lead), ('body', body)):
        b = blob(m)
        out[name] = describe(b) if b is not None else None
        if maskdir and b is not None:
            vis = im.copy(); vis[b] = (vis[b] * 0.3 + np.array([0, 255, 0]) * 0.7).astype(np.uint8)
            Image.fromarray(vis).save(os.path.join(maskdir, f'{tag}_{name}_mask.png'))
    return out

if __name__ == '__main__':
    args = sys.argv[1:]; maskdir = None
    if '--mask' in args: i = args.index('--mask'); maskdir = args[i + 1]; del args[i:i + 2]; os.makedirs(maskdir, exist_ok=True)
    for p in [APP] + args:
        tag = 'original' if p == APP else os.path.splitext(os.path.basename(p))[0]
        r = measure(p, maskdir, tag)
        for name, d in r.items():
            if d is None: print(f'{tag:28s} {name:4s} none'); continue
            print(f"{tag:28s} {name:4s} area {d['area']:.2f}% | x {d['x0']:.3f}-{d['x1']:.3f} (w {d['w']:.3f}) y {d['y0']:.3f}-{d['y1']:.3f} | "
                  f"centroid ({d['cx']:.3f}, {d['cy']:.3f}) | dome top {d['top']:.3f} | widest {d['widest']:.3f} at y {d['widest_y']:.3f} | mid-height width {d['midw']:.3f}")
