"""A coordinate-coded stand-in for a water face texture (diagnostic only, fifteenth session).

    python uv_texture.py <face texture.png> <out.png>

Same size as the face texture. R = the texel's column (0..255 across), G = its row (0..255 down), B = what the texel is:
0 = the ORIGINAL's own water at that very place (the texture equals the original there), 128 = a filled hole texel
(her body, the coins, the buttons), 255 = the first or last 3 rows or columns (where a clamped lookup lands).
Served with layer_diag.cjs ROUTE_WATER=<out.png>, the face then shows per screen pixel which texel it samples."""
import sys, json, os, numpy as np
from PIL import Image
tex_p, out_p = sys.argv[1:3]
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), *(['..'] * 6)))
O = np.asarray(Image.open(os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')).convert('RGB'))
t = np.asarray(Image.open(tex_p).convert('RGB')); H, W = t.shape[:2]
meta = json.load(open(tex_p.replace('.png', '.json'))); y0 = int(round(meta['y0'] * O.shape[0]))
crop = O[y0:y0 + H]
real = (np.abs(t.astype(int) - crop.astype(int)).max(2) <= 2)
yy, xx = np.mgrid[0:H, 0:W]
out = np.zeros((H, W, 3), np.uint8)
out[..., 0] = np.round(xx * 255 / (W - 1)); out[..., 1] = np.round(yy * 255 / (H - 1))
out[..., 2] = np.where(real, 0, 128)
edge = (yy < 3) | (yy >= H - 3) | (xx < 3) | (xx >= W - 3); out[edge, 2] = 255
Image.fromarray(out).save(out_p)
print('real share', round(real.mean(), 3), 'size', W, H, 'y0', y0)
