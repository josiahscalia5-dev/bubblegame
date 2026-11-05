# crops.py: the same screen box from the original and from each game frame, side by side, enlarged.
#   crops.py <out.png> <x0> <x1> <y0> <y1> <scale> <frame1> [<frame2> ...]   (box in screen fractions; all images resized
#   to 767 x 1536 first, so the box is the same part of the screen in each)
import sys, cv2, numpy as np
R = '/home/user/bubblegame/'
ORIG = R + 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
out, x0, x1, y0, y1, sc = sys.argv[1], *map(float, sys.argv[2:7])
ims = [ORIG] + sys.argv[7:]
W, H = 767, 1536
tiles = []
for p in ims:
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    c = im[int(y0*H):int(y1*H), int(x0*W):int(x1*W)]
    c = cv2.resize(c, None, fx=sc, fy=sc, interpolation=cv2.INTER_CUBIC)
    lab = 'original' if p == ORIG else p.split('/')[-1].replace('_canvas.png', '').replace('.png', '')
    cv2.putText(c, lab, (8, 26), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 0, 0), 4); cv2.putText(c, lab, (8, 26), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    tiles.append(c); tiles.append(np.full((c.shape[0], 6, 3), 255, np.uint8))
cv2.imwrite(out, np.hstack(tiles[:-1]))
