# centre_crops.py: side-by-side crops of the tunnel centre (x 0.30-0.80, y 0.38-0.66) of the original and focus canvas, with a 0.05 grid
import sys, numpy as np, cv2
O = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
F = '/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png'
out = sys.argv[1]
x0, x1, y0, y1 = [float(v) for v in sys.argv[2:6]]
tiles = []
for p in (O, F):
    im = cv2.resize(cv2.imread(p), (767, 1536), interpolation=cv2.INTER_AREA)
    H, W = im.shape[:2]
    c = im[int(y0*H):int(y1*H), int(x0*W):int(x1*W)].copy()
    sc = 900 / c.shape[1]
    c = cv2.resize(c, None, fx=sc, fy=sc, interpolation=cv2.INTER_CUBIC)
    for gx in np.arange(np.ceil(x0/0.05)*0.05, x1, 0.05):
        X = int((gx-x0)*W*sc); cv2.line(c, (X, 0), (X, c.shape[0]), (0, 0, 0), 1); cv2.putText(c, f'{gx:.2f}', (X+2, 14), 0, 0.45, (0, 0, 0), 1)
    for gy in np.arange(np.ceil(y0/0.05)*0.05, y1, 0.05):
        Y = int((gy-y0)*H*sc); cv2.line(c, (0, Y), (c.shape[1], Y), (0, 0, 0), 1); cv2.putText(c, f'{gy:.2f}', (2, Y-2), 0, 0.45, (0, 0, 0), 1)
    tiles.append(c)
h = min(t.shape[0] for t in tiles)
cv2.imwrite(out, np.hstack([tiles[0][:h], np.full((h, 8, 3), 30, np.uint8), tiles[1][:h]]))
