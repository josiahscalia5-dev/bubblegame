# character_water.py: (1) the pink character (mask of 15_focus_pass/scripts/pink.py): share, bbox, centre, colour (median sRGB,
# L*, chroma) and the mask width per 0.01 H row, so the cut of her base can be seen; (2) the water round her: zone
# x 0.02-0.98, y 0.74-0.885 minus her mask (dilated 6 px) and minus gold coins: white share and how it is broken up
# (connected white components: count per 10k px, share of the white in pieces <= 40 px, 41-400 px, > 400 px),
# light-cyan highlight share (h 180-215, s 0.12-0.40, v > 0.85), vivid blue (h 190-232, s > 0.55, v > 0.75), lavender.
import numpy as np, cv2
R = '/home/user/bubblegame/'
IM = {'orig': R+'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg',
      'match': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/match_before_t3.00_canvas.png',
      'focus': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00_canvas.png',
      'focus_page': R+'Previews/WebDemo/screen4_round9_match/15_focus_pass/final/focus_final_t3.00.png'}
W, H = 767, 1536
for k, p in IM.items():
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    m = (((h >= 300) | (h <= 10)) & (s > 0.45) & (v > 0.5)).astype(np.uint8)
    box = np.zeros_like(m); box[int(.58*H):int(.92*H), int(.12*W):int(.82*W)] = 1; m &= box
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
    n, lab, st, cen = cv2.connectedComponentsWithStats(m); i = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); ch = lab == i
    x, y, w, hh, a = st[i]
    labc = cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(float)
    med = np.median(im[ch], axis=0).astype(int); Lm = np.median(labc[..., 0][ch])*100/255; Cm = np.median(np.hypot(labc[..., 1][ch]-128, labc[..., 2][ch]-128))
    print(f"{k:10s} character share {a/(H*W)*100:.2f}%  x {x/W:.3f}-{(x+w)/W:.3f}  y {y/H:.3f}-{(y+hh)/H:.3f}  centre ({cen[i][0]/W:.3f}, {cen[i][1]/H:.3f})  "
          f"w {w/W:.3f} h {hh/H:.3f}  colour #{med[2]:02x}{med[1]:02x}{med[0]:02x} L* {Lm:.0f} chroma {Cm:.0f} sat {np.median(s[ch]):.2f}")
    rows = []
    for yy in np.arange(0.68, 0.90, 0.01):
        rows.append(f"{ch[int(yy*H):int((yy+0.01)*H)].any(axis=0).mean():.2f}")
    print(f"           mask width (fraction of W) per 0.01 H from y 0.68: {' '.join(rows)}")
    if k == 'focus_page': continue
    zone = np.zeros((H, W), bool); zone[int(.74*H):int(.885*H), int(.02*W):int(.98*W)] = True
    gold = (h > 25) & (h < 65) & (s > 0.5) & (v > 0.5)
    gold = cv2.dilate(gold.astype(np.uint8), np.ones((9, 9), np.uint8)) > 0
    chd = cv2.dilate(ch.astype(np.uint8), np.ones((13, 13), np.uint8)) > 0
    z = zone & ~chd & ~gold
    wh = ((s < 0.15) & (v > 0.88)) & z
    nw, lw, sw, _ = cv2.connectedComponentsWithStats(wh.astype(np.uint8), connectivity=8)
    areas = sw[1:, cv2.CC_STAT_AREA]; tot = areas.sum()
    sm = areas[areas <= 40].sum()/tot*100; md = areas[(areas > 40) & (areas <= 400)].sum()/tot*100; lg = areas[areas > 400].sum()/tot*100
    cyan = ((h > 180) & (h < 215) & (s >= 0.12) & (s < 0.40) & (v > 0.85))[z].mean()*100
    viv = ((h > 190) & (h < 232) & (s > 0.55) & (v > 0.75))[z].mean()*100
    lav = ((h > 235) & (h < 300) & (s > 0.08) & (s < 0.45) & (v > 0.6))[z].mean()*100
    g = cv2.GaussianBlur(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY).astype(float), (0, 0), 1.0)
    gm = np.hypot(cv2.Sobel(g, cv2.CV_64F, 1, 0)/8, cv2.Sobel(g, cv2.CV_64F, 0, 1)/8)[z].mean()
    print(f"           water round her: white {wh.sum()/z.sum()*100:4.1f}%  pieces/10k px {(nw-1)/z.sum()*1e4:5.1f}  white in pieces <=40px {sm:4.0f}%  41-400px {md:4.0f}%  >400px {lg:4.0f}%  "
          f"largest {areas.max() if len(areas) else 0} px | light cyan {cyan:4.1f}%  vivid blue {viv:4.1f}%  lavender {lav:4.1f}% | fine texture {gm:4.2f}")
