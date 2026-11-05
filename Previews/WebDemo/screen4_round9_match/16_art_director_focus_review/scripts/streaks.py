# streaks.py: the white splash streaks in the tunnel ring zone (r 0.12-0.45 W round (0.53, 0.525), y 0.25-0.62, gold/pink
# objects excluded). White = s < 0.20 and v > 0.90. Connected pieces of 6 px or more: count per 10k px, white share,
# median and 90th-percentile area (px at 767x1536), median thickness (2 x area / perimeter, px), median elongation
# (sqrt of the moment eigenvalue ratio) and the share of pieces whose long axis lies within 30 deg of the ring tangent.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536; cx, cy = 0.53*W, 0.525*H
yy, xx = np.mgrid[0:H, 0:W]; r = np.hypot((xx-cx)/W, (yy-cy)/W)
for nm, zone in (('ring zone', (r > 0.12) & (r < 0.45) & (yy > 0.25*H) & (yy < 0.62*H)), ('upper arc y<.45', (r > 0.12) & (r < 0.45) & (yy > 0.25*H) & (yy < 0.45*H))):
  for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40))
    obj = cv2.dilate(obj.astype(np.uint8), np.ones((7, 7), np.uint8)) > 0
    z = zone & ~obj
    wm = ((s < 0.20) & (v > 0.90) & z).astype(np.uint8)
    cnts, _ = cv2.findContours(wm, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    A, T, E, TAN = [], [], [], []
    for c in cnts:
        a = cv2.contourArea(c) + 0.5*len(c)
        if a < 6: continue
        per = cv2.arcLength(c, True) + 1e-6
        A.append(a); T.append(2*a/per)
        m = cv2.moments(c)
        if m['m00'] > 0 and len(c) >= 5:
            ex, ey = m['m10']/m['m00'], m['m01']/m['m00']
            mu20, mu02, mu11 = m['mu20']/m['m00'], m['mu02']/m['m00'], m['mu11']/m['m00']
            th = 0.5*np.arctan2(2*mu11, mu20-mu02)   # major-axis direction, image coords (x right, y down)
            lam1 = (mu20+mu02)/2 + np.sqrt(((mu20-mu02)/2)**2 + mu11**2); lam2 = (mu20+mu02)/2 - np.sqrt(((mu20-mu02)/2)**2 + mu11**2)
            E.append(np.sqrt(lam1/max(lam2, 1e-3)))
            rad = np.arctan2(ey-cy, ex-cx); tang = rad + np.pi/2
            d = abs((th - tang + np.pi/2) % np.pi - np.pi/2); TAN.append(d < np.radians(30))
    A = np.array(A)
    print(f"{nm:16s} {k:6s} white {wm.sum()/z.sum()*100:4.1f}%  pieces/10k px {len(A)/z.sum()*1e4:5.1f}  area median {np.median(A):5.0f} p90 {np.percentile(A, 90):6.0f}  "
          f"thickness median {np.median(T):4.1f} px  elongation median {np.median(E):4.1f}  along-tangent {np.mean(TAN)*100:3.0f}%")
