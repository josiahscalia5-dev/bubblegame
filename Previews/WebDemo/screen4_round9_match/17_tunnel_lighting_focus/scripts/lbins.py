# lbins.py img...: the ring_upper zone (x .20-.85, y .29-.44), objects excluded: median sRGB colour, hue, saturation per L* bin
import sys, numpy as np, cv2
W, H = 767, 1536
for p in sys.argv[1:]:
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    L = cv2.cvtColor(im, cv2.COLOR_BGR2LAB)[..., 0].astype(float)*100/255
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40))
    m = np.zeros((H, W), bool); m[int(.29*H):int(.44*H), int(.2*W):int(.85*W)] = True; m &= ~obj
    print(p.split('/')[-1][:28])
    for lo in range(20, 100, 10):
        k = m & (L >= lo) & (L < lo + 10)
        if k.sum() < 50: continue
        rgb = np.median(im[k][:, ::-1], axis=0).astype(int)
        print(f"   L* {lo:2d}-{lo+10:3d} share {k.sum()/m.sum()*100:5.1f}%  median #{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}  hue {np.median(h[k]):5.1f} sat {np.median(s[k]):.2f}")
