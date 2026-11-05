# core_detail.py img...: core.py's classes (r < 0.12 W round (0.53, 0.525)) by radius ring (0-0.04, 0.04-0.07, 0.07-0.095,
# 0.095-0.12 W): share of pink-violet / warm / white / saturated blue, and the median colour of the pink-violet and warm pixels
import sys, numpy as np, cv2
W, H = 767, 1536; cx, cy = 0.53*W, 0.525*H
yy, xx = np.mgrid[0:H, 0:W]; r = np.hypot((xx-cx)/W, (yy-cy)/W)
for p in sys.argv[1:]:
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    gold = cv2.dilate(((h > 30) & (h < 60) & (s > 0.5) & (v > 0.5)).astype(np.uint8), np.ones((5, 5), np.uint8)) > 0
    sockv = (h > 255) & (h < 285) & (s > 0.55)
    pv = (h > 280) & (h < 335) & (s > .2) & (s < .75) & (v > .65); wa = ((h < 55) | (h > 335)) & (s > .15)
    wh = (s < .15) & (v > .88); sb = (h > 190) & (h < 240) & (s >= .45)
    print(p.split('/')[-1][:30])
    for a, b in ((0, 0.04), (0.04, 0.07), (0.07, 0.095), (0.095, 0.12), (0.12, 0.45)):
        z = (r >= a) & (r < b) & ~gold & ~sockv
        med = lambda m: '#%02x%02x%02x' % tuple(np.median(im[m & z][:, ::-1], axis=0).astype(int)) if (m & z).sum() > 20 else '-'
        print(f"   r {a:.3f}-{b:.3f}: pinkviolet {pv[z].mean()*100:4.1f}% {med(pv)}  warm {wa[z].mean()*100:4.1f}% {med(wa)}  white {wh[z].mean()*100:4.1f}%  satblue {sb[z].mean()*100:4.1f}%")
