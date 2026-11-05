# whitemap.py <frame_canvas.png> <out.png>: the character_water zone's white pieces coloured by size
# (green <= 40 px, yellow 41-400, orange 401-2500, red > 2500), same masks as measure.py (767 x 1536)
import sys, numpy as np, cv2
W, H = 767, 1536
im = cv2.resize(cv2.imread(sys.argv[1])[..., :3], (W, H), interpolation=cv2.INTER_AREA)
hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h, s, v = hsv[..., 0]*360/256, hsv[..., 1]/255, hsv[..., 2]/255
m = (((h >= 300) | (h <= 10)) & (s > 0.45) & (v > 0.5)).astype(np.uint8)
box = np.zeros_like(m); box[int(.58*H):int(.92*H), int(.12*W):int(.82*W)] = 1; m &= box
m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
n, lab, st, cen = cv2.connectedComponentsWithStats(m); i = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); ch = lab == i
zone = np.zeros((H, W), bool); zone[int(.74*H):int(.885*H), int(.02*W):int(.98*W)] = True
gold = cv2.dilate(((h > 25) & (h < 65) & (s > 0.5) & (v > 0.5)).astype(np.uint8), np.ones((9, 9), np.uint8)) > 0
chd = cv2.dilate(ch.astype(np.uint8), np.ones((13, 13), np.uint8)) > 0
z = zone & ~chd & ~gold
wh = ((s < 0.15) & (v > 0.88)) & z
nw, lw, sw, cw = cv2.connectedComponentsWithStats(wh.astype(np.uint8), connectivity=8)
out = (im * 0.55).astype(np.uint8)
cols = [(0, 255, 0), (0, 255, 255), (0, 140, 255), (0, 0, 255)]
for j in range(1, nw):
    a = sw[j, cv2.CC_STAT_AREA]
    c = cols[0 if a <= 40 else 1 if a <= 400 else 2 if a <= 2500 else 3]
    out[lw == j] = c
    if a > 1000: print(f"piece {a} px at x {cw[j][0]/W:.3f} y {cw[j][1]/H:.3f} bbox x {sw[j,0]/W:.3f}-{(sw[j,0]+sw[j,2])/W:.3f} y {sw[j,1]/H:.3f}-{(sw[j,1]+sw[j,3])/H:.3f}")
out[~z & zone] = (out[~z & zone] * 0.5).astype(np.uint8)
crop = out[int(.70*H):int(.90*H)]
cv2.imwrite(sys.argv[2], cv2.resize(crop, None, fx=1.3, fy=1.3))
