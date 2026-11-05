# brushes.py img...: the two framing brushes' pink fur (h 295-350, s > 0.3, v > 0.5) bbox in the left (x < 0.4, y 0.15-0.56)
# and right (x > 0.6, y 0.3-0.7) zones, after a 9 px close; largest blob each; screen fractions at 767 x 1536
import sys, numpy as np, cv2
W, H = 767, 1536
for p in sys.argv[1:]:
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    m0 = ((h > 295) & (h < 350) & (s > 0.3) & (v > 0.5)).astype(np.uint8)
    out = []
    for name, (x0, x1, y0, y1) in (('left', (0, 0.4, 0.15, 0.56)), ('right', (0.6, 1.0, 0.3, 0.7))):
        m = np.zeros_like(m0); ys, xs = slice(int(y0*H), int(y1*H)), slice(int(x0*W), int(x1*W)); m[ys, xs] = m0[ys, xs]
        m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
        n, lab, st, cen = cv2.connectedComponentsWithStats(m)
        if n < 2: out.append(f'{name}: none'); continue
        i = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); x, y, w, hh, a = st[i]
        out.append(f'{name}: x {x/W:.3f}-{(x+w)/W:.3f} y {y/H:.3f}-{(y+hh)/H:.3f} area {a/(W*H)*100:.2f}%')
    print(p.split('/')[-1][:40], ' | '.join(out))
