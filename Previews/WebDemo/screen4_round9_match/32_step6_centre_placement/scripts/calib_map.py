"""Calibration ring map for step 6: red and blue stripes every 0.01 W of map radius, in the ring map's own rows and
columns (tunnel_rings_original.json: 512 x 1024, u = angle / 2 pi, v = (ln rw - ln_r0) / ln_span, row 0 = 0.025 W, not
flipped). Served to the game in place of tunnel_rings_original.png (layer_diag.cjs ROUTE_RINGS); nothing in WebDemo changes.
  python calib_map.py <out.png>"""
import sys, math, numpy as np
from PIL import Image
LN0, SPAN, NU, NV = math.log(0.025), math.log(0.85 / 0.025), 512, 1024
r = np.exp(LN0 + (np.arange(NV) + 0.5) / NV * SPAN)
odd = (np.floor(r / 0.01).astype(int) % 2 == 1)
row = np.where(odd[:, None], np.array([[20, 40, 255]]), np.array([[255, 30, 20]]))
Image.fromarray(np.repeat(row[:, None, :], NU, axis=1).astype(np.uint8)).save(sys.argv[1])
