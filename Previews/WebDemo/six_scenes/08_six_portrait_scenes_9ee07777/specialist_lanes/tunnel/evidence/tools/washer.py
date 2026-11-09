# scene 4 washer colour stats: REF04 regions vs a game frame's (the frame's porthole sits elsewhere: separate region lists)
import sys, colorsys
from PIL import Image
import numpy as np
REF = {'body left': (.03, .45, .13, .62), 'body right low': (.84, .62, .95, .72), 'gold ring left': (.17, .47, .215, .62), 'gold ring bottom': (.40, .70, .60, .735), 'paw emblem': (.43, .27, .57, .33), 'interior': (.26, .40, .74, .66)}
CUR = {'body left': (.03, .45, .13, .62), 'body right low': (.88, .62, .95, .72), 'gold ring left': (.225, .50, .27, .62), 'gold ring bottom': (.40, .685, .60, .71), 'paw emblem': (.44, .26, .54, .33), 'interior': (.34, .43, .66, .62)}
def stats(p, regs):
    a = np.asarray(Image.open(p).convert('RGB')).astype(float); H, W = a.shape[:2]; print(p)
    for n, (x0, y0, x1, y1) in regs.items():
        r = a[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)].reshape(-1, 3); md = np.median(r, 0); h, s, v = colorsys.rgb_to_hsv(*(md / 255)); L = r @ [0.299, 0.587, 0.114]
        print('  %-18s median #%02x%02x%02x hsv(%3.0f,%.2f,%.2f) lum %3.0f p95 %3.0f' % ((n,) + tuple(md.astype(int)) + (h * 360, s, v, L.mean(), np.percentile(L, 95))))
stats(sys.argv[1], REF)
for p in sys.argv[2:]: stats(p, CUR)
