# bubbles.py: rough bubble count with cv2.HoughCircles (radius 6-60 px at 767x1536) in the tunnel zone x 0.15-0.85,
# y 0.30-0.60, objects masked grey; prints counts by radius band and the count inside the centre box x 0.38-0.70, y 0.40-0.56.
# Two accumulator thresholds (param2 40 and 55; at 24 it finds ring arcs as circles). Writes bubbles_detected.png (param2 55)
# so the count can be checked by eye. Advisory only: the original's painted bubbles have soft edges, the game's crisp ones.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536
for P2 in (40, 55):
 tiles = []
 for k, p in IM.items():
     im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
     x0, x1, y0, y1 = int(.15*W), int(.85*W), int(.30*H), int(.60*H)
     c = im[y0:y1, x0:x1].copy(); g = cv2.cvtColor(c, cv2.COLOR_BGR2GRAY); g = cv2.GaussianBlur(g, (0, 0), 1.2)
     cs = cv2.HoughCircles(g, cv2.HOUGH_GRADIENT, dp=1.2, minDist=14, param1=90, param2=P2, minRadius=6, maxRadius=60)
     cs = [] if cs is None else cs[0]
     rs = np.array([q[2] for q in cs]) if len(cs) else np.array([])
     inbox = sum(1 for q in cs if .38*W <= q[0]+x0 <= .70*W and .40*H <= q[1]+y0 <= .56*H)
     print(f"param2 {P2} {k:6s} circles {len(cs):3d}  r 6-12 px {int(((rs>=6)&(rs<12)).sum()):3d}  12-25 {int(((rs>=12)&(rs<25)).sum()):3d}  25-60 {int((rs>=25).sum()):3d}  in centre box {inbox}")
     for q in cs: cv2.circle(c, (int(q[0]), int(q[1])), int(q[2]), (0, 0, 255), 1)
     tiles.append(c)
 if P2 == 55: cv2.imwrite('bubbles_detected.png', np.hstack(tiles))
