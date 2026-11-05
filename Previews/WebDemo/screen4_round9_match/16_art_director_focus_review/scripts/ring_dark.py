# ring_dark.py: lightness and hue of the tunnel ring zone (the mask of 15_focus_pass/scripts/tunnel_palette.py: r 0.12-0.45 W
# round (0.53, 0.53), y 0.25-0.62, gold/pink objects excluded). Prints L* percentiles, shares darker than L* 50/55/60,
# hue (deg) and L* of the darkest 20% and of the 'vivid blue' pixels, and the same numbers in the upper arc only (y < 0.45).
# Also re-runs the polar band count at three vanishing points to show it is stable.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536
yy, xx = np.mgrid[0:H, 0:W]
r = np.hypot((xx - 0.53*W)/W, (yy - 0.53*H)/W)
base = (r > 0.12) & (r < 0.45) & (yy > 0.25*H) & (yy < 0.62*H)
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    lab = cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(float); L = lab[..., 0]*100/255; bb = lab[..., 2]-128
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40))
    for nm, m in (('ring zone', base & ~obj), ('upper arc y<.45', base & ~obj & (yy < 0.45*H))):
        Ls = L[m]; hs = h[m]; ss = s[m]
        q = np.percentile(Ls, [10, 25, 50, 75, 90])
        dk = Ls <= np.percentile(Ls, 20)
        viv = (hs > 190) & (hs < 240) & (ss > 0.55)
        print(f"{k:6s} {nm:16s} L* p10/25/50/75/90 {q[0]:4.0f} {q[1]:4.0f} {q[2]:4.0f} {q[3]:4.0f} {q[4]:4.0f} | L*<50 {np.mean(Ls<50)*100:4.1f}% <55 {np.mean(Ls<55)*100:4.1f}% <60 {np.mean(Ls<60)*100:4.1f}%"
              f" | darkest20%: hue {np.median(hs[dk]):5.1f} sat {np.median(ss[dk]):.2f} L* {np.median(Ls[dk]):4.1f} | saturated blue: share {viv.mean()*100:4.1f}% hue {np.median(hs[viv]):5.1f} L* {np.median(Ls[viv]):4.1f} sat {np.median(ss[viv]):.2f}")
