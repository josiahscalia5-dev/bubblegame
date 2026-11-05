# polar_rings_sides.py: polar_rings.py on the left and right sectors (fewer bubbles there in focus), to check the coherence result.
# polar_rings.py: unwraps the tunnel round the vanishing point (0.53 W, 0.525 H) into (angle, log radius) and measures the
# ring structure on L* (CIELAB) along rays, r = 0.08-0.42 W, angles 15-165 deg above the horizontal (the upper arc).
# Per ray (L* smoothed with sigma 1.5 samples along log r, 160 samples):
#   bands  = dark minima with prominence >= 6 L*      amp = mean prominence of those minima (L*)
#   dark%  = share of samples darker than the ray's 25th-percentile + 0 (fixed) -> instead: share with L* < 55 (cobalt gaps)
#   coh    = Pearson correlation of each ray with the ray 8 deg further on (1 = perfect concentric rings, lower = twisted/broken)
# Writes polar_unwrap.png (orig top, focus bottom; x = angle 0-360 from +x counter-clockwise, y = log r, inner at top).
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536; cx, cy = 0.53*W, 0.525*H
NR, NA = 160, 720
rr = np.exp(np.linspace(np.log(0.08*W), np.log(0.42*W), NR))
aa = np.radians(np.linspace(0, 360, NA, endpoint=False))
mapx = (cx + rr[:, None]*np.cos(aa[None, :])).astype(np.float32); mapy = (cy - rr[:, None]*np.sin(aa[None, :])).astype(np.float32)
from scipy.ndimage import gaussian_filter1d
from scipy.signal import find_peaks
tiles = []
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    pol = cv2.remap(im, mapx, mapy, cv2.INTER_LINEAR)
    tiles.append(cv2.resize(pol, (NA, NR*2), interpolation=cv2.INTER_LINEAR))
    lab = cv2.cvtColor(pol, cv2.COLOR_BGR2LAB).astype(float); L = gaussian_filter1d(lab[..., 0]*100/255, 1.5, axis=0)
    hsv = cv2.cvtColor(pol, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40))
    deg = np.degrees(aa)
    for lo, hi, name in ((160, 200, 'left 160-200'), (330, 359, 'right 330-359')):
        sel = [i for i in range(NA) if lo <= deg[i] <= hi and obj[:, i].mean() < 0.1]
        nb, am, dk = [], [], []
        for i in sel:
            pk, pr = find_peaks(-L[:, i], prominence=6)
            nb.append(len(pk)); am.append(pr['prominences'].mean() if len(pk) else 0); dk.append((L[:, i] < 55).mean())
        step = 16  # 8 deg
        co = [np.corrcoef(L[:, i], L[:, i+step])[0, 1] for i in sel if i+step in sel]
        # band spacing in log r: mean gap between minima, converted to "bands per ln r"
        span = np.log(0.42/0.08)
        print(f"{k:6s} {name:18s} rays {len(sel):3d}  bands/ray {np.mean(nb):4.1f} ({np.mean(nb)/span:3.1f} per ln r)  amp {np.mean(am):5.1f} L*  "
              f"L*<55 share {np.mean(dk)*100:4.1f}%  coh(8deg) {np.mean(co):.2f}  L* mean {L[:, sel].mean():5.1f}  L* sd along ray {L[:, sel].std(axis=0).mean():4.1f}")
sheet = np.vstack([np.vstack([t, np.full((6, NA, 3), 255, np.uint8)]) for t in tiles])
for d in range(0, 360, 30):
    X = int(d/360*NA); cv2.line(sheet, (X, 0), (X, sheet.shape[0]), (0, 0, 0), 1); cv2.putText(sheet, str(d), (X+2, 12), 0, 0.4, (0, 0, 0), 1)

