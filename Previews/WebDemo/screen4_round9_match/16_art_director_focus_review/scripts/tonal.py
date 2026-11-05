# tonal.py: global tonal range of the scene area (x 0-1, y 0.22-0.885, gold coins and the pink character excluded):
# L* percentiles p5/p25/p50/p75/p95 and the share of white (s < 0.15, v > 0.88).
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    L = cv2.cvtColor(im, cv2.COLOR_BGR2LAB)[..., 0].astype(float)*100/255
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40))
    m = np.zeros((H, W), bool); m[int(.22*H):int(.885*H)] = True; m &= ~obj
    q = np.percentile(L[m], [5, 25, 50, 75, 95])
    print(f"{k:6s} scene L* p5 {q[0]:4.0f} p25 {q[1]:4.0f} p50 {q[2]:4.0f} p75 {q[3]:4.0f} p95 {q[4]:4.0f}  white {((s<.15)&(v>.88))[m].mean()*100:4.1f}%")
