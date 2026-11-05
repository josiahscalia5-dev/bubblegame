# maskbox.py mask.png...: the box of the non-background pixels (differs from the corner colour by > 40) in screen fractions,
# plus the cuff tilt (violet stripe pixels in the top 35%, principal axis, + = right side up)
import sys, numpy as np, cv2
for p in sys.argv[1:]:
    im = cv2.imread(p)[..., :3].astype(int); H, W = im.shape[:2]
    bg = im[2, 2]; m = (np.abs(im - bg).sum(-1) > 40)
    ys, xs = np.nonzero(m)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    hsv = cv2.cvtColor(im.astype(np.uint8), cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    vio = (h > 245) & (h < 295) & (s > 0.45) & (v > 0.3) & m
    top = np.zeros_like(m); top[y0:y0 + int(0.35*(y1-y0)), x0:x1] = True
    yy, xx = np.nonzero(vio & top); ang = float('nan')
    if len(xx) > 20:
        ev, evec = np.linalg.eigh(np.cov(np.vstack([xx, yy]))); d = evec[:, 1]; ang = (-np.degrees(np.arctan2(d[1], d[0])) + 90) % 180 - 90
    print(f"{p.split('/')[-1]:14s} x {x0/W:.3f}-{x1/W:.3f} y {y0/H:.3f}-{y1/H:.3f} centre ({(x0+x1)/2/W:.3f}, {(y0+y1)/2/H:.3f}) w {(x1-x0)/W:.3f} h {(y1-y0)/H:.3f} cuff {ang:+.1f}")
