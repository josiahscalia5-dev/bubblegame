import sys, numpy as np, cv2
from PIL import Image
def pink(path):
    a = np.asarray(Image.open(path).convert('RGB').resize((767, 1536))).astype(np.uint8)
    h = cv2.cvtColor(a, cv2.COLOR_RGB2HSV)
    m = (((h[..., 0] > 150) | (h[..., 0] < 6)) & (h[..., 1] > 90) & (h[..., 2] > 120))
    m[:int(0.6 * 1536)] = 0; m[int(0.97 * 1536):] = 0
    m[:, :int(0.15 * 767)] = 0; m[:, int(0.85 * 767):] = 0
    n, lab, st, _ = cv2.connectedComponentsWithStats(m.astype(np.uint8), 8)
    k = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); mm = lab == k
    ys, xs = np.nonzero(mm)
    cols = [np.nonzero(mm[:, x])[0] for x in range(int(0.4 * 767), int(0.6 * 767))]
    base = np.median([c.max() for c in cols if len(c)]) / 1536
    return dict(top=ys.min() / 1536, base_mid=base, x=(xs.min() / 767, xs.max() / 767), area=mm.sum() / (767 * 1536))
for p in sys.argv[1:]:
    r = pink(p); print(p.split('/')[-2] if '/' in p else p, ' '.join(f'{k} {v if not isinstance(v, tuple) else tuple(round(x, 3) for x in v)}' if isinstance(v, tuple) else f'{k} {v:.3f}' for k, v in r.items()))
