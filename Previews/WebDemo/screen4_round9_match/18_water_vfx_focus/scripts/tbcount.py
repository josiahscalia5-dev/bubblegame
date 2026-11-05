# tbcount.py <all.png> <hide_mwTunnelBubbles.png> <out.png>: what mwTunnelBubbles draws (pixels changing when hidden),
# split into pieces; counts the pieces (each about one bubble or streak) whose centre is within 0.2 W of (.53, .525)
import sys, numpy as np, cv2
a = cv2.imread(sys.argv[1]).astype(int); b = cv2.imread(sys.argv[2]).astype(int)
H, W = a.shape[:2]
m = (np.abs(a - b).sum(2) > 30).astype(np.uint8)
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((3, 3), np.uint8))
n, lab, st, cen = cv2.connectedComponentsWithStats(m, connectivity=8)
cx, cy = 0.53 * W, 0.525 * H
inside = []; allp = []
for i in range(1, n):
    if st[i, cv2.CC_STAT_AREA] < 6: continue
    d = np.hypot(cen[i][0] - cx, cen[i][1] - cy) / W
    allp.append(i)
    if d < 0.2: inside.append(i)
print(f"pieces {len(allp)}, within 0.2 W of the centre {len(inside)}")
out = (a * 0.5).astype(np.uint8)
for i in allp: out[lab == i] = (0, 0, 255) if i in inside else (0, 255, 0)
cv2.circle(out, (int(cx), int(cy)), int(0.2 * W), (255, 255, 0), 1)
cv2.imwrite(sys.argv[3], out[int(0.25 * H):int(0.75 * H)])
