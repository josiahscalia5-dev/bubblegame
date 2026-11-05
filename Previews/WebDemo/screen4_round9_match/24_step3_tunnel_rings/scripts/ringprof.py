"""ringprof.py label=frame@vpx,vpy ... : radial luminance profile per sector (median over angles), correlated with the ORIGINAL's
(VP 0.528, 0.532), r 0.06-0.42 W; also the best radial scale."""
import sys, numpy as np
from PIL import Image
W, H = 538, 1076
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
def prof(p, vp, a0, a1, rs):
    im = np.asarray(Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)).astype(float) / 255
    L = im @ [0.2126, 0.7152, 0.0722]; out = []
    for r in rs:
        v = [L[int(vp[1] * H - r * W * np.sin(a)), int(vp[0] * W + r * W * np.cos(a))] for a in np.radians(np.arange(a0, a1, 2))
             if 0 <= vp[0] * W + r * W * np.cos(a) < W and 0 <= vp[1] * H - r * W * np.sin(a) < H]
        out.append(np.median(v))
    p = np.array(out); return (p - p.mean()) / p.std()
rs = np.arange(0.06, 0.42, 0.002)
SECT = {'up': (60, 120), 'left': (145, 175), 'right': (8, 38)}
for arg in sys.argv[1:]:
    lab, rest = arg.split('=', 1); path, vp = rest.split('@'); vp = tuple(map(float, vp.split(',')))
    line = []
    for sec, (a0, a1) in SECT.items():
        o = prof(APP, (0.528, 0.532), a0, a1, rs); g = prof(path, vp, a0, a1, rs)
        c1 = np.corrcoef(o, g)[0, 1]
        best = max((np.corrcoef(o, prof(path, vp, a0, a1, rs * s))[0, 1], s) for s in np.arange(0.85, 1.2, 0.01))
        line.append(f'{sec} {c1:+.2f} (best {best[0]:+.2f} at x{best[1]:.2f})')
    print(f'{lab:22s}', ' | '.join(line))
