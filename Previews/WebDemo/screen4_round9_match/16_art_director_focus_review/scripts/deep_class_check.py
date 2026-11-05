# deep_class_check.py: why 15_focus_pass/scripts/tunnel_palette.py reports less 'deep blue' in the original than in focus.
# Its class is h 205-240, s > 0.55, v < 0.85. Prints, in the same ring-zone mask, the share of saturated cobalt that is
# excluded only by v >= 0.85 (h 205-240, s > 0.55, v >= 0.85, L* < 55), and the L* of the original's k-means cobalt #1a60e1.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
W, H = 767, 1536
yy, xx = np.mgrid[0:H, 0:W]; r = np.hypot((xx-0.53*W)/W, (yy-0.53*H)/W)
base = (r > 0.12) & (r < 0.45) & (yy > 0.25*H) & (yy < 0.62*H)
px = np.uint8([[[0xe1, 0x60, 0x1a], [0xce, 0x62, 0x2b], [0xe8, 0x8b, 0x52]]])
labp = cv2.cvtColor(px, cv2.COLOR_BGR2LAB).astype(float)[0, :, 0]*100/255
print(f"L* of #1a60e1 (original cobalt) {labp[0]:.0f}, #2b62ce (focus cobalt) {labp[1]:.0f}, #528be8 (focus royal) {labp[2]:.0f}")
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    L = cv2.cvtColor(im, cv2.COLOR_BGR2LAB)[..., 0].astype(float)*100/255
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40)); m = base & ~obj
    cls = (h > 205) & (h < 240) & (s > 0.55)
    print(f"{k:6s} counted as deep (v<0.85) {(cls & (v < 0.85))[m].mean()*100:4.1f}%   cobalt with L*<55 but v>=0.85 (missed) {(cls & (v >= 0.85) & (L < 55))[m].mean()*100:4.1f}%   all saturated blue with L*<55 {(cls & (L < 55))[m].mean()*100:4.1f}%")
