"""Colour shares in the whirlpool (r < 0.40 of the width round the vanishing point) and the whole play area, with the Art
Director's HSV classes (approved Screen 4 spec, 4 November 2026). Gold and pink are counted separately.
    python3 hero_shares.py approved.png:0.555,0.52 frame.png:0.54,0.50 ...   (vanishing point as fractions of width, height)
"""
import sys
import numpy as np
from PIL import Image

def classes(rgb):
    a = rgb.astype(np.float32) / 255.0
    mx, mn = a.max(-1), a.min(-1); v = mx; s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    h = np.zeros_like(mx); d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, h)
    h = np.where(mx == g, 60 * ((b - r) / d) + 120, h)
    h = np.where(mx == b, 60 * ((r - g) / d) + 240, h)
    out = {}
    out['gold'] = (h >= 30) & (h < 65) & (s > 0.45) & (v > 0.6)
    out['pink'] = ((h >= 290) | (h < 20)) & (s > 0.3) & (v > 0.5)
    rest = ~(out['gold'] | out['pink'])
    out['white'] = rest & (s < 0.15) & (v > 0.85)
    out['pale blue'] = rest & (h >= 185) & (h < 235) & (s >= 0.15) & (s < 0.45) & (v > 0.75)
    out['azure'] = rest & (h >= 165) & (h < 205) & (s >= 0.45)
    out['electric blue'] = rest & (h >= 205) & (h < 228) & (s >= 0.45) & (v >= 0.8)
    out['deep cobalt'] = rest & (((h >= 205) & (h < 245) & (s >= 0.45) & (v < 0.8)) | ((h >= 228) & (h < 245) & (s >= 0.6)))
    out['lavender'] = rest & (h >= 235) & (h < 290) & (s >= 0.12) & ~out['deep cobalt']
    return out, s, v

for arg in sys.argv[1:]:
    path, vp = arg.rsplit(':', 1); vx, vy = map(float, vp.split(','))
    im = np.asarray(Image.open(path).convert('RGB').resize((538, 1076)))
    H, W = im.shape[:2]; yy, xx = np.mgrid[0:H, 0:W]
    rr = np.hypot((xx - vx * W) / W, (yy - vy * H) / W)
    play = (yy > 0.2 * H) & (yy < 0.83 * H)
    cl, s, v = classes(im)
    for name, mask in (('vortex r<0.40', play & (rr < 0.40)), ('play area', play)):
        n = mask.sum(); tunnel = mask & ~(cl['gold'] | cl['pink']); nt = max(tunnel.sum(), 1)
        shares = ', '.join(f"{k} {100 * (cl[k] & (tunnel if k not in ('gold', 'pink') else mask)).sum() / (nt if k not in ('gold', 'pink') else n):.0f}%" for k in cl)
        print(f"{'/'.join(path.split('/')[-2:]):32s} {name:14s} sat {s[mask].mean():.2f} val {v[mask].mean():.2f} | {shares}")
