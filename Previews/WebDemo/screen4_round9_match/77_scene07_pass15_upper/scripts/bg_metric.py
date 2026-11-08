# Background-only comparison for Screen 09 (session f70c9bd1, the user's request: "excluding HUD, mascot, coins, and enemies when measuring
# background similarity"). SUPPORTING evidence only, never a substitute for looking.
#   python bg_metric.py <original.png> <label=frame.png> ...   (the first is the original; all resized to the game's 412 x 915 stage)
# Mask (excluded, in the original AND the game): the HUD bar, the game's mission panel and both banners, both enemies (the original's and the
# game's hero), the mascot, the original's four coins and the game's centre-lane coins, the power-up buttons. Zones (the user's zone map):
# A distant machine world (upper middle), B left architecture, C right architecture, D water. Per zone: mean colour difference (CIE76 dE in
# Lab), brightness (L), chroma, near-white share, edge density (Canny), and SSIM of the grey image inside the zone's box (masked pixels
# replaced by the zone's mean in both images).
import sys
import cv2
import numpy as np
from skimage.metrics import structural_similarity as ssim

W, H = 412, 915
def load(p):
    im = cv2.imread(p, cv2.IMREAD_COLOR)
    if im.shape[0] > 1400 and im.shape[1] < 800: im = im[38:1423, 0:756]   # the master's phone frame
    return cv2.resize(im, (W, H), interpolation=cv2.INTER_AREA)
yy, xx = np.mgrid[0:H, 0:W]; fx, fy = xx / W, yy / H
excl = (fy < 0.09) | ((fy < 0.275) & (fx > 0.08) & (fx < 0.9)) | (fy > 0.84)
for cx, cy, r in ((0.725, 0.384, 0.19), (0.76, 0.37, 0.2)): excl |= ((fx - cx) ** 2 + ((fy - cy) * H / W) ** 2) < r * r   # enemies
excl |= (((fx - 0.42) / 0.3) ** 2 + ((fy - 0.72) / 0.17) ** 2) < 1                                                      # mascot
for cx, cy, r in ((0.17, 0.585, 0.11), (0.9, 0.585, 0.09), (0.33, 0.39, 0.05), (0.52, 0.285, 0.05)): excl |= ((fx - cx) ** 2 + ((fy - cy) * H / W) ** 2) < r * r
excl |= (fx > 0.36) & (fx < 0.64) & (fy > 0.38) & (fy < 0.66)                                                          # the game's centre-lane coins
keep = ~excl
Z = {'A distant (x .2-.85, y .09-.46)': (0.2, 0.09, 0.85, 0.46), 'B left (x 0-.3, y .12-.6)': (0, 0.12, 0.3, 0.6),
     'C right (x .65-1, y .35-.75)': (0.65, 0.35, 1.0, 0.75), 'D water (x 0-1, y .55-.84)': (0, 0.55, 1.0, 0.84)}
pairs = [a.split('=', 1) for a in sys.argv[2:]]
orig = load(sys.argv[1]); ims = [(lab, load(p)) for lab, p in pairs]
lab_of = lambda im: cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(np.float32) * np.array([100 / 255, 1, 1], np.float32) - np.array([0, 128, 128], np.float32)
def stats(im, m):
    L = lab_of(im); px = L[m]; ch = np.hypot(px[:, 1], px[:, 2])
    e = cv2.Canny(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY), 60, 140) > 0
    return L, px.mean(0), px[:, 0].mean(), ch.mean(), ((px[:, 0] > 85) & (ch < 25)).mean() * 100, e[m].mean() * 100
print('zone | image | dE to original | L | chroma | near-white % | edges % | SSIM')
for zn, (x0, y0, x1, y1) in Z.items():
    box = (fx >= x0) & (fx < x1) & (fy >= y0) & (fy < y1); m = box & keep
    Lo, mo, lo, co, wo, eo = stats(orig, m)
    go = cv2.cvtColor(orig, cv2.COLOR_BGR2GRAY).astype(np.float32)
    ys, xs = np.where(box); sl = (slice(ys.min(), ys.max() + 1), slice(xs.min(), xs.max() + 1))
    print(f'{zn} | original | 0 | {lo:.1f} | {co:.1f} | {wo:.1f} | {eo:.1f} | 1')
    for lab, im in ims:
        L, mm, l, c, w, e = stats(im, m)
        dE = np.linalg.norm(L[m] - Lo[m], axis=1).mean()
        g = cv2.cvtColor(im, cv2.COLOR_BGR2GRAY).astype(np.float32)
        a, b = go.copy(), g.copy(); a[~m] = go[m].mean(); b[~m] = g[m].mean()
        s = ssim(a[sl], b[sl], data_range=255, gaussian_weights=True, sigma=2.0)
        print(f'{zn} | {lab} | {dE:.1f} | {l:.1f} | {c:.1f} | {w:.1f} | {e:.1f} | {s:.3f}')
