# minima_hist.py img...: as the AD's polar_rings.py (VP (0.53, 0.525), r 0.08-0.42 W, upper arc 15-165 deg, L* smoothed 1.5,
# minima with prominence >= 6, rays with < 10% objects): the dark minima per ray in 8 radius bins (r in W), and the mean L*
import sys, numpy as np, cv2
from scipy.ndimage import gaussian_filter1d
from scipy.signal import find_peaks
W, H = 767, 1536; cx, cy = 0.53*W, 0.525*H; NR, NA = 160, 720
rr = np.exp(np.linspace(np.log(0.08*W), np.log(0.42*W), NR)); aa = np.radians(np.linspace(0, 360, NA, endpoint=False))
mapx = (cx + rr[:, None]*np.cos(aa[None, :])).astype(np.float32); mapy = (cy - rr[:, None]*np.sin(aa[None, :])).astype(np.float32)
edges = np.linspace(0, NR, 9).astype(int)
print('r bins (W):', ' '.join(f'{rr[e]/W:.3f}' for e in edges[:-1]), f'{0.42:.3f}')
for p in sys.argv[1:]:
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    pol = cv2.remap(im, mapx, mapy, cv2.INTER_LINEAR)
    L = gaussian_filter1d(cv2.cvtColor(pol, cv2.COLOR_BGR2LAB)[..., 0].astype(float)*100/255, 1.5, axis=0)
    hsv = cv2.cvtColor(pol, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40))
    deg = np.degrees(aa); sel = [i for i in range(NA) if 15 <= deg[i] <= 165 and obj[:, i].mean() < 0.1]
    cnt = np.zeros(8)
    for i in sel:
        pk, _ = find_peaks(-L[:, i], prominence=6)
        for k in pk: cnt[np.searchsorted(edges, k, side='right') - 1] += 1
    cnt /= len(sel)
    Lm = [L[edges[j]:edges[j+1], sel].mean() for j in range(8)]
    print(f"{p.split('/')[-1][:24]:24s} minima/ray by bin: " + ' '.join(f'{c:4.2f}' for c in cnt) + f"  total {cnt.sum():.2f} | L* " + ' '.join(f'{v:4.0f}' for v in Lm))
