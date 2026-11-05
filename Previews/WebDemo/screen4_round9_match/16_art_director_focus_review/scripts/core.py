# core.py: the tunnel's core, r < 0.12 W round (0.53, 0.525), gold coins excluded (h 30-60, s > 0.5, dilated 5 px).
# Classes: pink-violet h 280-335 s 0.20-0.75 v > 0.65 (the original's pink inner rings), peach/warm (h < 55 or > 335) s > 0.15,
# white s < 0.15 v > 0.88, pale blue h 190-240 s 0.15-0.45 v > 0.75, saturated blue h 190-240 s > 0.45. Plus L* mean.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536; cx, cy = 0.53*W, 0.525*H
yy, xx = np.mgrid[0:H, 0:W]; r = np.hypot((xx-cx)/W, (yy-cy)/W)
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    L = cv2.cvtColor(im, cv2.COLOR_BGR2LAB)[..., 0].astype(float)*100/255
    gold = cv2.dilate(((h > 30) & (h < 60) & (s > 0.5) & (v > 0.5)).astype(np.uint8), np.ones((5, 5), np.uint8)) > 0
    sockv = (h > 255) & (h < 285) & (s > 0.55)  # the sock's violet stripes
    z = (r < 0.12) & ~gold & ~sockv
    c = dict(pinkviolet=(h > 280) & (h < 335) & (s > .2) & (s < .75) & (v > .65), warm=((h < 55) | (h > 335)) & (s > .15),
             white=(s < .15) & (v > .88), paleblue=(h > 190) & (h < 240) & (s >= .15) & (s < .45) & (v > .75), satblue=(h > 190) & (h < 240) & (s >= .45))
    print(f"{k:6s} core r<0.12W: " + '  '.join(f"{a} {b[z].mean()*100:4.1f}%" for a, b in c.items()) + f"  L* {L[z].mean():4.1f}")
