# left_wall.py img...: the left wall zone x 0-0.30, y 0.44-0.79 (and its halves y .44-.58 / .58-.79), with zones.py's object
# exclusion and classes: L*, white (s < .15, v > .88), pale (s .15-.40, v > .75), lavender (h 235-300, s .08-.45, v > .6),
# vivid blue, deep; plus the lavender share in the outer 3% strips (x < 0.03) as the 'slivers at the edge' check
import sys, numpy as np, cv2
W, H = 767, 1536
for p in sys.argv[1:]:
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    L = cv2.cvtColor(im, cv2.COLOR_BGR2LAB)[..., 0].astype(float)*100/255
    obj = ((h > 25) & (h < 65) & (s > 0.5) & (v > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40) & (v > 0.45)) | ((h > 255) & (h < 300) & (s > 0.6))
    out = []
    for nm, (y0, y1, x0, x1) in (('all', (.44, .79, 0, .30)), ('upper', (.44, .58, 0, .30)), ('lower', (.58, .79, 0, .30)), ('edge', (.44, .79, 0, .03))):
        m = np.zeros((H, W), bool); m[int(y0*H):int(y1*H), int(x0*W):int(x1*W)] = True; m &= ~obj
        S, V, Hh = s[m], v[m], h[m]
        wh = ((S < .15) & (V > .88)).mean()*100; pa = ((S >= .15) & (S < .4) & (V > .75)).mean()*100
        lv = ((Hh > 235) & (Hh < 300) & (S > .08) & (S < .45) & (V > .6)).mean()*100
        vi = ((Hh > 190) & (Hh < 232) & (S > .55) & (V > .75)).mean()*100
        out.append(f"{nm}: L* {L[m].mean():4.1f} white {wh:4.1f} pale {pa:4.1f} lav {lv:4.1f} vivid {vi:4.1f}")
    print(f"{p.split('/')[-1][:26]:26s} " + ' | '.join(out))
