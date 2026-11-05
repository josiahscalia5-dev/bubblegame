# lavmap.py <frame> <out.png>: the floor_ahead zone's lavender pixels (zones.py class) marked, and their typical RGB
import sys, numpy as np, cv2
W, H = 767, 1536
im = cv2.resize(cv2.imread(sys.argv[1])[..., :3], (W, H), interpolation=cv2.INTER_AREA)
hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h, s, v = hsv[..., 0]*360/256, hsv[..., 1]/255, hsv[..., 2]/255
lav = (h > 235) & (h < 300) & (s > 0.08) & (s < 0.45) & (v > 0.6)
z = np.zeros((H, W), bool); z[int(.60*H):int(.69*H), int(.25*W):int(.65*W)] = True
m = lav & z
px = im[m]
print('lav share', m.sum() / z.sum(), 'median BGR', np.median(px, axis=0) if len(px) else None, 'hue median', np.median(h[m]) if m.any() else None)
out = im.copy(); out[m] = (255, 0, 255)
c = out[int(.56*H):int(.72*H), int(.15*W):int(.75*W)]
cv2.imwrite(sys.argv[2], cv2.resize(c, None, fx=1.4, fy=1.4))
