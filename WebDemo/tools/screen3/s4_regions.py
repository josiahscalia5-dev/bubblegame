"""Region-by-region comparison of 538 x 1076 game frames against the approved Screen 4 (inside the tunnel).
    python3 -I s4_regions.py <approved S4.png> <label=frame.png> ...
Same measures as region_compare.py (Screen 3): colour is CIE76 delta E between the regions' mean Lab colours (lower = closer
palette); structure is SSIM of the grey images and the correlation of their edge maps (higher = shapes and edges in the same
places; 1.0 would be identical). The regions leave out the top HUD and sock panel and the bottom buttons.
"""
import os
import sys
import numpy as np
from PIL import Image

sys.argv = [sys.argv[0], *sys.argv[1:]]
REGIONS = {'upper tunnel (rings)': (0, 190, 538, 420), 'left side (brush)': (0, 420, 180, 860), 'right side (brush)': (358, 420, 538, 860),
           'centre (depth)': (180, 420, 358, 600), 'lower (water, mascot)': (130, 600, 408, 880)}
# the helpers (lab, box, ssim, edges) are region_compare.py's, read from its source so the two stay the same
src = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'region_compare.py')).read()
exec(src[src.index('def lab('):src.index('def crop(')])

art = Image.open(sys.argv[1]).convert('RGB')
A = Image.new('RGB', (538, 1076)); A.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))
fit = lambda im: im if im.size == (538, 1076) else im.resize((538, 1076), Image.LANCZOS)
frames = [(s.split('=', 1)[0], fit(Image.open(s.split('=', 1)[1]).convert('RGB'))) for s in sys.argv[2:]]
half = lambda a: np.asarray(Image.fromarray(a).convert('L').resize((max(1, a.shape[1] // 2), max(1, a.shape[0] // 2)), Image.LANCZOS), float)
print('%-24s ' % 'region' + ' | '.join('%-24s' % l for l, _ in frames))
print('%-24s ' % '' + ' | '.join('%-24s' % 'colour dE  SSIM   edges' for _ in frames))
tot = {l: [] for l, _ in frames}
for name, r in REGIONS.items():
    a = np.asarray(A.crop(r)); ga = half(a); ea = edges(ga)
    row = []
    for l, im in frames:
        b = np.asarray(im.crop(r)); gb = half(b); eb = edges(gb)
        de = float(np.linalg.norm(lab(a.astype(float)).reshape(-1, 3).mean(0) - lab(b.astype(float)).reshape(-1, 3).mean(0)))
        s = ssim(ga, gb); e = float(np.corrcoef(ea.ravel(), eb.ravel())[0, 1])
        tot[l].append((de, s, e)); row.append('%6.1f    %5.3f  %5.3f' % (de, s, e))
    print('%-24s ' % name + ' | '.join('%-24s' % x for x in row))
print('%-24s ' % 'average' + ' | '.join('%-24s' % ('%6.1f    %5.3f  %5.3f' % tuple(np.mean(tot[l], 0))) for l, _ in frames))
