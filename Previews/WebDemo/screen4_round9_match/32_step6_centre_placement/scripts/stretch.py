"""Radial stretch of the walls' ring placement, from a calibration render (stripes every 0.01 W of map radius).
Along rays from the centre, each red/blue boundary is found; the screen distance between consecutive boundaries over
0.01 W is the stretch (1 = the map's rings land on screen at the original's radii). Only wall pixels with a clear red or
blue hue count. Reported per radius band, upper half (screen angles 30-150 deg) and lower half (210-330 deg).
  python stretch.py <render.png> [cx cy]   (centre in frame fractions; default the original's vanishing point 0.528, 0.532)"""
import sys, json, math, numpy as np
from PIL import Image
im = np.asarray(Image.open(sys.argv[1]).convert('RGB').resize((767, 1536), Image.LANCZOS)).astype(float)
H, W = im.shape[:2]
cx, cy = (float(sys.argv[2]), float(sys.argv[3])) if len(sys.argv) > 3 else (0.528, 0.532)
R, G, B = im[..., 0], im[..., 1], im[..., 2]
lab = np.zeros((H, W), int); lab[(R > B * 1.35) & (R > G * 1.3)] = 1; lab[(B > R * 1.35) & (B > G * 1.1)] = 2
bands = [(0.03, 0.06), (0.06, 0.10), (0.10, 0.13), (0.13, 0.16), (0.16, 0.20), (0.20, 0.25), (0.25, 0.32), (0.32, 0.42)]
out = {}
for half, angs in (('upper', range(30, 151, 3)), ('lower', range(210, 331, 3))):
    sp = {b: [] for b in bands}
    for a in angs:
        t = math.radians(a); prev = None; last = None
        for k in range(int(0.02 / 0.0004), int(0.45 / 0.0004)):
            rr = k * 0.0004; x = cx * W + rr * W * math.cos(t); y = cy * H - rr * W * math.sin(t)
            if not (0 <= x < W and 0 <= y < H): break
            l = lab[int(y), int(x)]
            if l == 0: prev = None; continue        # not a clean stripe pixel (objects, rim, floor): restart
            if prev is not None and l != prev:
                if last is not None:
                    d = rr - last; mid = (rr + last) / 2
                    for b in bands:
                        if b[0] <= mid < b[1] and d < 0.2: sp[b].append(d / 0.01)
                last = rr
            prev = l
    out[half] = {f'{b[0]:.2f}-{b[1]:.2f}': (round(float(np.median(v)), 2) if len(v) >= 5 else None, len(v)) for b, v in sp.items()}
print(json.dumps(out))
