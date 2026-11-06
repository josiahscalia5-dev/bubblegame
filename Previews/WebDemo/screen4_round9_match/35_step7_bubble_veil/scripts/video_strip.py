"""Frames of the real recordings (Pixel 7, seed 7) at the same video times, STEP 6 row over STEP 7 row, the original at the left.
  python video_strip.py <label: straight|steering> <before frames dir> <after frames dir>"""
import sys, cv2, numpy as np
L, B, A = sys.argv[1:4]
T = [4.0, 4.5, 5.0, 6.0, 7.0, 8.0, 9.0]   # video time (the tap at 2.0 s): entering, inside, the brushes
H = 560
rs = lambda x: cv2.resize(x, (round(x.shape[1] * H / x.shape[0]), H), interpolation=cv2.INTER_AREA)
def lab(im, t):
    bar = np.full((36, im.shape[1], 3), 255, np.uint8); cv2.putText(bar, t, (6, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.58, (20, 20, 20), 2, cv2.LINE_AA); return np.vstack([bar, im])
gap = lambda h: np.full((h, 6, 3), 255, np.uint8)
o = lab(rs(cv2.imread('/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')), 'ORIGINAL')
rows = []
for name, d in (('STEP 6', B), ('STEP 7', A)):
    tiles = [o]
    for t in T:
        tiles += [gap(H + 36), lab(rs(cv2.imread(f'{d}/f{int(round(t * 30)):04d}.jpg')), f'{name} {t:.1f} s')]
    rows.append(np.hstack(tiles))
cv2.imwrite(f'13_video_frames_{L}_step6_over_step7.jpg', np.vstack([rows[0], np.full((10, rows[0].shape[1], 3), 255, np.uint8), rows[1]]), [cv2.IMWRITE_JPEG_QUALITY, 84])
print('ok')
