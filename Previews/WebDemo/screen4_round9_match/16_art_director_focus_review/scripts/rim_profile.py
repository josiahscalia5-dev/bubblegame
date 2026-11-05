# rim_profile.py: where the drum's mouth and the tunnel water start, down a vertical strip x 0.40-0.50 (y 0.14-0.40, rows of
# 0.01 H): per row the median hue/sat/L* and the share of saturated blue (h 195-240, s > 0.5). The first row with saturated blue
# >= 70% in two consecutive rows, searched from y 0.245 (below the HUD panel and the rim's own blue line), is taken as the
# top of the tunnel water.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255
    blue = (h > 195) & (h < 240) & (s > 0.5)
    top = None; prof = []; ys = np.arange(0.14, 0.40, 0.01)
    bs = [blue[int(y*H):int((y+0.01)*H), int(0.40*W):int(0.50*W)].mean() for y in ys]
    prof = [f"{b:.1f}" for b in bs]
    for i, y in enumerate(ys[:-1]):
        if y >= 0.245 and bs[i] >= 0.7 and bs[i+1] >= 0.7: top = y; break
    print(f"{k:6s} top of tunnel water (x 0.40-0.50): y {top:.2f}   sat-blue share per row from 0.14: {' '.join(prof)}")
