"""Make the painted scenery layer for the ?s3=paint test from the approved Screen 3 (the original is only read).
    python3 -I make_paint_backdrop.py <approved.png> <out.png>

- The whole painting is kept, in its own colours: castle, door, brush, machinery, bubbles, side water and foam.
  (The game draws these pixels past its colour grade and tone mapping, so the colours arrive unchanged.)
- The image's own light frame line at its edges is replaced by the pixels just inside it.
- Alpha: 0 in the door's centre, so the real tunnel shows through (circle around the door's centre, radius 131 px on
  the 538 x 1076 stage, softened over 10 px; the mascot and camera pass well inside it).
Stage coordinates: the 735 x 1476 image is drawn at x 1..537 of the 538 x 1076 stage.
"""
import sys
import numpy as np
from PIL import Image

src, out = sys.argv[1:3]
A = np.asarray(Image.open(src).convert('RGB')).astype(np.float64)
H, W, _ = A.shape
yy, xx = np.mgrid[0:H, 0:W]
sx = xx * 536.0 / W + 1.0; sy = yy * 1076.0 / H

B = 12   # the frame line
A[:B, :] = A[B:B + 1, :]; A[-B:, :] = A[-B - 1:-B, :]
A[:, :B] = A[:, B:B + 1]; A[:, -B:] = A[:, -B - 1:-B]

def smooth(a, b, x):
    t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
alpha = smooth(126, 136, np.hypot(sx - 269, sy - 475)) * 255

Image.fromarray(np.dstack([A, alpha]).round().astype(np.uint8), 'RGBA').save(out, optimize=True)
print('written', out, (W, H))
