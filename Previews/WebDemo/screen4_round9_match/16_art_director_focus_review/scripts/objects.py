# objects.py: gold coins (h 30-60, s > 0.55, v > 0.55, blobs > 250 px, y > 0.22, closed 7 px) and the gem
# (h 270-320, s > 0.55, v > 0.45, x < 0.5, y 0.42-0.6): bbox, centre, width/height in screen fractions.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    print(k)
    for name, m, lim in (('gold', (h > 30) & (h < 60) & (s > 0.55) & (v > 0.55), 250), ('gem', (h > 270) & (h < 320) & (s > 0.55) & (v > 0.45), 150)):
        m = m.astype(np.uint8); m[:int(0.22*H)] = 0
        if name == 'gem': m[:int(0.42*H)] = 0; m[int(0.6*H):] = 0; m[:, int(0.5*W):] = 0
        m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((7, 7), np.uint8))
        n, lab, st, cen = cv2.connectedComponentsWithStats(m)
        for i in np.argsort(-st[1:, cv2.CC_STAT_AREA])[:6] + 1:
            x, y, w, hh, a = st[i]
            if a < lim: continue
            print(f"   {name:4s} centre ({cen[i][0]/W:.3f}, {cen[i][1]/H:.3f})  x {x/W:.3f}-{(x+w)/W:.3f}  y {y/H:.3f}-{(y+hh)/H:.3f}  w {w/W:.3f} h {hh/H:.3f}  area {a/(W*H)*100:.2f}%")
