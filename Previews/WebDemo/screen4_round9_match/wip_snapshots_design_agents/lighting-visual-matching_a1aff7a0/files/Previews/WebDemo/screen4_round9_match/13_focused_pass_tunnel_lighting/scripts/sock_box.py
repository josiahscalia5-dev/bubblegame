"""The big right sock's screen box (focused pass, Tunnel & Lighting). Usage: $BW_PY sock_box.py <frame.png> ... [--mask dir]
Frames resized to 538 x 1076. Inside x 0.58-0.92, y 0.50-0.72: the sock's knit white (S < 0.22, V > 0.82) or its purple / navy
(hue 225-300, S > 0.35, V > 0.3), closed with a 9 px kernel; the largest component that is not mostly water (its blue share
under 40%) is reported: box, centre, size, and the purple's centroid relative to the white's (the toe / cuff direction).
"""
import sys, os, numpy as np, cv2
from PIL import Image
W0, H0 = 538, 1076
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'

def hsv(im):
    a = im.astype(np.float32) / 255; mx, mn = a.max(-1), a.min(-1); v = mx; s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]; d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, np.where(mx == g, 60 * ((b - r) / d) + 120, 60 * ((r - g) / d) + 240))
    return h, s, v

args = sys.argv[1:]; maskdir = None
if '--mask' in args: i = args.index('--mask'); maskdir = args[i + 1]; del args[i:i + 2]; os.makedirs(maskdir, exist_ok=True)
for p in [APP] + args:
    im = np.asarray(Image.open(p).convert('RGB').resize((W0, H0), Image.LANCZOS)); h, s, v = hsv(im)
    white = (s < 0.22) & (v > 0.82); purple = (h >= 225) & (h < 300) & (s > 0.35) & (v > 0.3)
    roi = np.zeros((H0, W0), bool); roi[int(0.50 * H0):int(0.72 * H0), int(0.58 * W0):int(0.92 * W0)] = True
    m = cv2.morphologyEx(((white | purple) & roi).astype(np.uint8), cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
    m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
    n, lab, st, _ = cv2.connectedComponentsWithStats(m, 8)
    k = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]) if n > 1 else None
    tag = 'original' if p == APP else os.path.basename(p)[:24]
    if k is None: print(tag, 'none'); continue
    b = lab == k; ys, xs = np.nonzero(b)
    pw = b & purple; wy, wx = np.nonzero(b & white); py, px = np.nonzero(pw)
    print(f'{tag:24s} sock x {xs.min()/W0:.3f}-{xs.max()/W0:.3f} y {ys.min()/H0:.3f}-{ys.max()/H0:.3f} | w {(xs.max()-xs.min())/W0:.3f}W h {(ys.max()-ys.min())/H0:.3f}H | '
          f'centre ({xs.mean()/W0:.3f}, {ys.mean()/H0:.3f}) | area {b.mean()*100:.2f}% | purple {pw.sum()/b.sum()*100:.0f}%')
    if maskdir:
        vis = im.copy(); vis[b] = (vis[b] * 0.4 + np.array([0, 255, 0]) * 0.6).astype(np.uint8)
        Image.fromarray(vis[int(0.48 * H0):int(0.74 * H0), int(0.55 * W0):int(0.95 * W0)]).save(os.path.join(maskdir, f'{tag}_sock.png'))
