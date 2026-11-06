"""Read back the coordinate-coded face (diagnostic only, fifteenth session; see uv_texture.py).

    python uv_read.py <out dir> <label>=<abl_swell_solo_nobloom.png> ...

For each frame (the water face drawn alone, bloom off, the coordinate texture served in place of its texture):
  - which texels the face shows: the ORIGINAL's own water at its own place, a filled hole, or the clamped edge rows;
  - the texture rows per screen pixel down the screen (below 1 = the texture is magnified, stretched vertically) and
    the columns per screen pixel across (to compare: a vertical stretch shows as rows/px well below columns/px);
  - the texture row seen at a few screen rows.
Writes <out dir>/uv_<label>.png (blue = the original's own water, orange = a filled hole, red = the clamped edge) and
prints a table."""
import sys, os, numpy as np
from PIL import Image

OUT = sys.argv[1]; os.makedirs(OUT, exist_ok=True)
TEX_H, TEX_W = 431, 767
print('| frame | face share of the band | real original | filled hole | clamped edge | rows/px (y 1250-1350) | rows/px (y 1400-1500) | cols/px | texture row at y 1250 / 1350 / 1450 / 1530 |')
print('|---|---|---|---|---|---|---|---|---|')
for arg in sys.argv[2:]:
    lab, p = arg.split('=', 1)
    a = np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.NEAREST)).astype(float)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    face = (r + g + b) > 30   # the face is drawn (the rest is black in a solo render)
    face[:int(0.70 * 1536)] = False
    kind = np.full(face.shape, -1); kind[face & (b < 64)] = 0; kind[face & (b >= 64) & (b < 192)] = 1; kind[face & (b >= 192)] = 2
    band = np.zeros_like(face); band[int(0.80 * 1536):int(0.97 * 1536)] = True
    fb = face & band
    sh = [((kind == k) & band).sum() / max(1, fb.sum()) for k in (0, 1, 2)]
    row = g / 255 * (TEX_H - 1); col = r / 255 * (TEX_W - 1)

    def slope(arr, axis, y0, y1):
        d = np.diff(arr, axis=axis); m = face[1:, :] & face[:-1, :] if axis == 0 else face[:, 1:] & face[:, :-1]
        sel = np.zeros_like(m); sel[y0:y1] = True; v = d[m & sel & (np.abs(d) < 20)]
        return float(np.median(v)) if v.size else float('nan')

    def at(y):
        v = row[y][face[y]]
        return '%.0f' % np.median(v) if v.size else '-'
    print(f'| {lab} | {fb.sum() / band.sum():.2f} | {sh[0]:.2f} | {sh[1]:.2f} | {sh[2]:.2f} | {slope(row, 0, 1250, 1350):.2f} | '
          f'{slope(row, 0, 1400, 1500):.2f} | {slope(col, 1, 1250, 1500):.2f} | {at(1250)} / {at(1350)} / {at(1450)} / {at(1530)} |')
    vis = np.zeros((1536, 767, 3), np.uint8); vis[kind == 0] = (60, 120, 255); vis[kind == 1] = (255, 150, 40); vis[kind == 2] = (255, 30, 30)
    Image.fromarray(vis).save(os.path.join(OUT, f'uv_{lab}.png'))
