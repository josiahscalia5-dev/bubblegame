# zones.py: colour classes, brightness and texture per screen zone, original vs focus (canvas) vs match (canvas).
# All images resized to 767x1536 (INTER_AREA). Zones in screen fractions. Objects (gold, saturated pink/magenta,
# saturated violet) are excluded from water zones. Classes (HSV, h in degrees):
#   white  s<0.15 v>0.88          pale   0.15<=s<0.40 v>0.75 (pastel)       lav  h 235-300 s 0.08-0.45 v>0.6 (lavender/periwinkle)
#   vivid  h 190-232 s>0.55 v>0.75 (bright blue)   deep h 205-240 s>0.55 v<=0.75 (cobalt)   turq h 175-200 s>0.40
#   warm   (h<60 or h>330) s>0.2
# texture = mean gradient magnitude of luminance after Gaussian sigma 2 (0-255 units / px), same scale for all images.
import numpy as np, cv2, sys
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'}
def load(p):
    im = cv2.imread(p)[..., :3]; im = cv2.resize(im, (767, 1536), interpolation=cv2.INTER_AREA); return im
def hsv(im):
    h = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); return h[..., 0]*360/256, h[..., 1]/255, h[..., 2]/255
ZONES = {
  'housing_top     x.10-.90 y.215-.29': (0.10, 0.90, 0.215, 0.29),
  'ring_upper      x.20-.85 y.29-.44 ': (0.20, 0.85, 0.29, 0.44),
  'ring_left       x.00-.30 y.44-.58 ': (0.00, 0.30, 0.44, 0.58),
  'ring_right      x.62-.80 y.44-.56 ': (0.62, 0.80, 0.44, 0.56),
  'centre          x.42-.64 y.46-.58 ': (0.42, 0.64, 0.46, 0.58),
  'floor_ahead     x.25-.65 y.60-.69 ': (0.25, 0.65, 0.60, 0.69),
  'left_low        x.00-.22 y.62-.79 ': (0.00, 0.22, 0.62, 0.79),
  'char_left       x.02-.25 y.76-.885': (0.02, 0.25, 0.76, 0.885),
  'char_right      x.71-.98 y.79-.885': (0.71, 0.98, 0.79, 0.885),
  'scene_all       x.00-1. y.22-.885 ': (0.0, 1.0, 0.22, 0.885),
}
def classes(im, m):
    h, s, v = hsv(im)
    obj = ((h > 25) & (h < 65) & (s > 0.5) & (v > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40) & (v > 0.45)) | ((h > 255) & (h < 300) & (s > 0.6))
    mm = m & ~obj
    H, S, V = h[mm], s[mm], v[mm]
    d = dict(white=(S < .15) & (V > .88), pale=(S >= .15) & (S < .40) & (V > .75), lav=(H > 235) & (H < 300) & (S > .08) & (S < .45) & (V > .6),
             vivid=(H > 190) & (H < 232) & (S > .55) & (V > .75), deep=(H > 205) & (H < 240) & (S > .55) & (V <= .75),
             turq=(H > 175) & (H <= 200) & (S > .40), warm=((H < 60) | (H > 330)) & (S > .2))
    lab = cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(float)
    L = lab[..., 0][mm]*100/255; C = np.hypot(lab[..., 1][mm]-128, lab[..., 2][mm]-128)
    g = cv2.GaussianBlur(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY).astype(float), (0, 0), 2)
    gm = np.hypot(cv2.Sobel(g, cv2.CV_64F, 1, 0, ksize=3)/8, cv2.Sobel(g, cv2.CV_64F, 0, 1, ksize=3)/8)[mm]
    med = np.median(im[mm].reshape(-1, 3), axis=0).astype(int)
    return {k: v_.mean()*100 for k, v_ in d.items()}, L.mean(), C.mean(), gm.mean(), '#%02x%02x%02x' % (med[2], med[1], med[0]), mm.mean()/max(m.mean(), 1e-9)
ims = {k: load(p) for k, p in IM.items()}
H, W = 1536, 767
for zn, (x0, x1, y0, y1) in ZONES.items():
    print(zn)
    for k, im in ims.items():
        m = np.zeros((H, W), bool); m[int(y0*H):int(y1*H), int(x0*W):int(x1*W)] = True
        c, L, C, gm, med, kept = classes(im, m)
        print(f"   {k:6s} " + ' '.join(f"{a} {b:5.1f}" for a, b in c.items()) + f" | L* {L:5.1f} chroma {C:5.1f} texture {gm:4.2f} median {med} kept {kept*100:3.0f}%")
