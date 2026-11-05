# the character's saturated-pink blob (the brief's method): hue >= 300 or <= 10 deg, S > 0.45, V > 0.5,
# largest connected blob in x 0.12-0.82, y 0.58-0.92; prints share of frame, bbox, centre
import sys, numpy as np, cv2
for p in sys.argv[1:]:
    im = cv2.imread(p); im = cv2.resize(im, (767, 1536), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float)
    h = hsv[..., 0] * 360 / 256; s = hsv[..., 1] / 255; v = hsv[..., 2] / 255
    m = (((h >= 300) | (h <= 10)) & (s > 0.45) & (v > 0.5)).astype(np.uint8)
    H, W = m.shape; box = np.zeros_like(m); box[int(.58*H):int(.92*H), int(.12*W):int(.82*W)] = 1; m &= box
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
    n, lab, st, cen = cv2.connectedComponentsWithStats(m)
    i = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); x, y, w, hh, a = st[i]
    print(f"{p.split('/')[-1]:40s} share {a/(H*W)*100:.2f}%  x {x/W:.3f}-{(x+w)/W:.3f}  y {y/H:.3f}-{(y+hh)/H:.3f}  centre ({cen[i][0]/W:.3f}, {cen[i][1]/H:.3f})  w {w/W:.3f} h {hh/H:.3f}")
