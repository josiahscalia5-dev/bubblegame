"""Colour classes of the walls' derived colour map (textures/screen4/tunnel_colour.png) by screen radius rw (flipY false:
   row 0 = v 0 = rw 0.025 W; v = (ln rw - ln 0.025) / ln 34), using the Art Director's HSV classes. Shows which radius
   bands of the map are warm and which are lavender, so a screen region's colour can be traced to the rw it samples."""
import sys, numpy as np
sys.path.insert(0, __file__.rsplit('/', 1)[0])
from common import classes, hexc
from PIL import Image
p = '/home/user/bubblegame/WebDemo/textures/screen4/tunnel_colour.png'
im = np.asarray(Image.open(p).convert('RGB')); H, W = im.shape[:2]
print('map', W, 'x', H)
cl, h, s, v = classes(im)
warm = ((h >= 15) & (h < 70) & (s > 0.12)) | (((h >= 320) | (h < 15)) & (s > 0.12) & (s <= 0.3))
for r0, r1 in [(0.025, 0.035), (0.035, 0.05), (0.05, 0.06), (0.06, 0.085), (0.085, 0.12), (0.12, 0.2), (0.2, 0.3), (0.3, 0.45), (0.45, 0.85)]:
    a = int(np.log(r0 / 0.025) / np.log(34) * H); b = max(int(np.log(r1 / 0.025) / np.log(34) * H), a + 1)
    sl = slice(a, b); n = im[sl].shape[0] * W
    print(f"rw {r0:.3f}-{r1:.3f} rows {a:4d}-{b:4d} med {hexc(np.median(im[sl].reshape(-1,3),0))} | warm {100*warm[sl].sum()/n:4.1f} laven {100*cl['lavender'][sl].sum()/n:4.1f} white {100*cl['white'][sl].sum()/n:4.1f} pale {100*cl['pale blue'][sl].sum()/n:4.1f} azure {100*cl['azure'][sl].sum()/n:4.1f} elect {100*cl['electric blue'][sl].sum()/n:4.1f} pink {100*cl['pink'][sl].sum()/n:4.1f}")
