# tunnel_palette.py img... : k-means palette (8) of the tunnel ring zone (screen radius 0.12-0.45 W round the vanishing
# point (0.53, 0.53)), excluding gold/pink objects; prints colours (sRGB hex) with shares, plus deep-blue / turquoise / white
# / pastel / warm shares
import sys, numpy as np, cv2
for p in sys.argv[1:]:
    im = cv2.cvtColor(cv2.resize(cv2.imread(p), (767, 1536), interpolation=cv2.INTER_AREA), cv2.COLOR_BGR2RGB)
    H, W = im.shape[:2]; yy, xx = np.mgrid[0:H, 0:W]
    r = np.hypot((xx - 0.53 * W) / W, (yy - 0.53 * H) / W)
    m = (r > 0.12) & (r < 0.45) & (yy > 0.25 * H) & (yy < 0.62 * H)
    hsv = cv2.cvtColor(im, cv2.COLOR_RGB2HSV_FULL).astype(float); h = hsv[..., 0] * 360 / 256; s = hsv[..., 1] / 255; v = hsv[..., 2] / 255
    obj = ((h > 20) & (h < 65) & (s > 0.5)) | (((h > 290) | (h < 15)) & (s > 0.45))
    px = im[m & ~obj].reshape(-1, 3).astype(np.float32)
    crit = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.5)
    _, lab, cen = cv2.kmeans(px, 8, None, crit, 3, cv2.KMEANS_PP_CENTERS)
    cnt = np.bincount(lab.ravel(), minlength=8) / len(lab); o = np.argsort(-cnt)
    hs, ss, vs = h[m & ~obj], s[m & ~obj], v[m & ~obj]
    deep = ((hs > 205) & (hs < 240) & (ss > 0.55) & (vs < 0.85)).mean(); turq = ((hs > 180) & (hs <= 205) & (ss > 0.4)).mean()
    white = ((ss < 0.15) & (vs > 0.88)).mean(); pastel = ((ss >= 0.15) & (ss < 0.4) & (vs > 0.75)).mean(); warm = (((hs < 60) | (hs > 330)) & (ss > 0.2)).mean()
    print(p.split('/')[-1], ' '.join(f"#{int(cen[i][0]):02x}{int(cen[i][1]):02x}{int(cen[i][2]):02x}:{cnt[i]*100:.0f}%" for i in o))
    print(f"   deep-blue {deep*100:.1f}%  turquoise {turq*100:.1f}%  white {white*100:.1f}%  pastel {pastel*100:.1f}%  warm {warm*100:.1f}%")
