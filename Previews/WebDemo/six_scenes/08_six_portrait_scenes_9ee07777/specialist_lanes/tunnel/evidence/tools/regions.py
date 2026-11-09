# REF05-style region colour stats for a frame (fractions of width/height so any size works)
import sys, colorsys
from PIL import Image
import numpy as np
REG = [('upper-left wall', (0, .215, .14, .31)), ('upper-right wall', (.86, .215, 1, .31)), ('crown inner', (.35, .29, .65, .34)),
       ('mid walls left', (.27, .34, .38, .42)), ('mid walls right', (.62, .34, .72, .42)), ('far end centre', (.45, .42, .55, .49)),
       ('vanish ring zone', (.38, .39, .62, .46)), ('left bank (machines)', (0, .40, .25, .60)), ('right bank (machines)', (.75, .40, 1, .60)),
       ('water mid', (.29, .52, .69, .57))]
for p in sys.argv[1:]:
    a = np.asarray(Image.open(p).convert('RGB')).astype(float); H, W = a.shape[:2]; print(p)
    for n, (x0, y0, x1, y1) in REG:
        r = a[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)].reshape(-1, 3); md = np.median(r, 0); h, s, v = colorsys.rgb_to_hsv(*(md / 255)); L = r @ [0.299, 0.587, 0.114]
        print('  %-22s median #%02x%02x%02x hsv(%3.0f,%.2f,%.2f) lum %3.0f p95 %3.0f white%% %4.1f' % ((n,) + tuple(md.astype(int)) + (h * 360, s, v, L.mean(), np.percentile(L, 95), 100 * (L > 235).mean())))
