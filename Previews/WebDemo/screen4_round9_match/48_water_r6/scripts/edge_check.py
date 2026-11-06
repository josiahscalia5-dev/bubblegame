import sys, numpy as np, cv2
from PIL import Image
ORIG = '/workspace/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
o = np.asarray(Image.open(ORIG).convert('RGB')); H, W = o.shape[:2]
hsv = cv2.cvtColor(o, cv2.COLOR_RGB2HSV).astype(int); h, s, v = hsv[..., 0] * 2, hsv[..., 1], hsv[..., 2]
pink = (((h >= 290) | (h <= 15)) & (s > 35) & (v > 110)).astype(np.uint8)
# her body: the pink component round the frame's middle low (x 0.15-0.85, y 0.55-0.90)
n, lab, st, _ = cv2.connectedComponentsWithStats(cv2.morphologyEx(pink, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8)))
best = max(range(1, n), key=lambda i: st[i, 4] if (0.1 * W < st[i, 0] + st[i, 2] / 2 < 0.9 * W and st[i, 1] + st[i, 3] > 0.8 * H and st[i, 1] < 0.8 * H) else 0)
body = lab == best; print('original body bbox x', st[best, 0], st[best, 0] + st[best, 2], 'y', st[best, 1], st[best, 1] + st[best, 3])
face = np.asarray(Image.open(sys.argv[1]).convert('RGB').resize((W, H))).astype(int).sum(2) > 30
gm = np.asarray(Image.open(sys.argv[2]).convert('RGB').resize((W, H)))
gh = cv2.cvtColor(gm, cv2.COLOR_RGB2HSV).astype(int); gpink = (((gh[..., 0] * 2 >= 290) | (gh[..., 0] * 2 <= 15)) & (gh[..., 1] > 35) & (gh[..., 2] > 110))
print(' x   | orig fur bottom | game face top | game fur bottom')
for x in range(150, 640, 35):
    col = np.nonzero(body[:, x])[0]; ob = col.max() if len(col) else -1
    f = np.nonzero(face[int(0.70 * H):, x])[0]; ft = f.min() + int(0.70 * H) if len(f) else -1
    g = np.nonzero(gpink[int(0.6 * H):int(0.9 * H), x])[0]; gb = g.max() + int(0.6 * H) if len(g) else -1
    print(f'{x:4d} | {ob:6d} | {ft:6d} | {gb:6d}')
