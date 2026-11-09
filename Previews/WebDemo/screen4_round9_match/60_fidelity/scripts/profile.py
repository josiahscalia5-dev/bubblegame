"""Her silhouette profile and waterline (diagnostic only; 60_fidelity): uses pink_silhouette.py's mask.
    python profile.py label=frame.png ...   (label=ORIG for the ORIGINAL)
Prints top, bottom, the widest row (her equator; arms included), the visible height above the widest row and below it
(below / radius = how much of her lower half shows above the water), the width every 20 rows and her waterline
(lowest pink row) per 30-px column from x 200 to 560."""
import sys, os, numpy as np
here = os.path.dirname(os.path.abspath(__file__))
ns = {}; exec(open(os.path.join(here, 'pink_silhouette.py')).read().split("rows = [")[0], ns)
for arg in sys.argv[1:]:
    lab, p = arg.split('=', 1)
    if p == 'ORIG': p = ns['ORIG']
    r, m = ns['sil'](p)
    ys = np.arange(r['top'], r['bottom'] + 1)
    wid = np.array([m[y].sum() for y in ys])
    eq = int(ys[np.argmax(wid)])
    prof = [int(wid[i]) for i, y in enumerate(ys) if (y - r['top']) % 20 == 0]
    wl = []
    for x0 in range(200, 560, 30):
        yy = np.nonzero(m[:, x0:x0 + 30].any(1))[0]
        wl.append(int(yy.max()) if len(yy) else -1)
    above, below = eq - r['top'], r['bottom'] - eq
    print(f"{lab}: top {r['top']} bottom {r['bottom']} height {r['bottom'] - r['top']} widest row {eq} width {int(wid.max())}"
          f" above/below widest {above}/{below} (below/above {below / max(above, 1):.2f}) h/w {(r['bottom'] - r['top']) / int(wid.max()):.2f} area {r['area']}")
    print('  widths every 20 rows from the top:', prof)
    print('  waterline x200-560 step 30:', wl)
