# measure.py: the Art Director's measures (16_art_director_focus_review/scripts: character_water.py, zones.py, streaks.py,
# bubbles.py), unchanged in what they compute, run on any frames given on the command line, against the original:
#   measure.py [--only cw,zones,streaks,bubbles] label=path_canvas.png [label2=path2 ...]
# Added (same masks): the pink width 0.02 H above her lowest point (the AD's target: <= 0.2 W), the white's share in
# pieces <= 400 px, and the bubble count within 0.2 W of the tunnel's centre (0.53, 0.525).
import sys, numpy as np, cv2
R = '/home/user/bubblegame/'
ORIG = R + 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
args = sys.argv[1:]; only = None
if args and args[0] == '--only': only = set(args[1].split(',')); args = args[2:]
IM = {'orig': ORIG}
for a in args:
    k, p = a.split('=', 1); IM[k] = p
W, H = 767, 1536
def load(p): return cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
def hsvf(im):
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); return hsv[..., 0]*360/256, hsv[..., 1]/255, hsv[..., 2]/255
ims = {k: load(p) for k, p in IM.items()}
def run(name): return only is None or name in only
if run('cw'):
  print('== character_water (zone x .02-.98 y .74-.885 minus her and the coins)')
  for k, im in ims.items():
    h, s, v = hsvf(im)
    m = (((h >= 300) | (h <= 10)) & (s > 0.45) & (v > 0.5)).astype(np.uint8)
    box = np.zeros_like(m); box[int(.58*H):int(.92*H), int(.12*W):int(.82*W)] = 1; m &= box
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
    n, lab, st, cen = cv2.connectedComponentsWithStats(m); i = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); ch = lab == i
    x, y, w, hh, a = st[i]
    ylow = y + hh; w02 = ch[int(ylow - 0.025*H):int(ylow - 0.015*H)].any(axis=0).mean()
    rows = ' '.join(f"{ch[int(yy*H):int((yy+0.01)*H)].any(axis=0).mean():.2f}" for yy in np.arange(0.68, 0.90, 0.01))
    print(f"{k:12s} pink {a/(H*W)*100:.2f}%  x {x/W:.3f}-{(x+w)/W:.3f}  y {y/H:.3f}-{ylow/H:.3f}  centre ({cen[i][0]/W:.3f}, {cen[i][1]/H:.3f})  w {w/W:.3f}  width 0.02H above lowest {w02:.2f}")
    print(f"             widths per 0.01 H from 0.68: {rows}")
    zone = np.zeros((H, W), bool); zone[int(.74*H):int(.885*H), int(.02*W):int(.98*W)] = True
    gold = cv2.dilate(((h > 25) & (h < 65) & (s > 0.5) & (v > 0.5)).astype(np.uint8), np.ones((9, 9), np.uint8)) > 0
    chd = cv2.dilate(ch.astype(np.uint8), np.ones((13, 13), np.uint8)) > 0
    z = zone & ~chd & ~gold
    wh = ((s < 0.15) & (v > 0.88)) & z
    nw, lw, sw, _ = cv2.connectedComponentsWithStats(wh.astype(np.uint8), connectivity=8)
    areas = sw[1:, cv2.CC_STAT_AREA]; tot = max(areas.sum(), 1)
    sm = areas[areas <= 40].sum()/tot*100; md = areas[(areas > 40) & (areas <= 400)].sum()/tot*100; lg = areas[areas > 400].sum()/tot*100
    cyan = ((h > 180) & (h < 215) & (s >= 0.12) & (s < 0.40) & (v > 0.85))[z].mean()*100
    viv = ((h > 190) & (h < 232) & (s > 0.55) & (v > 0.75))[z].mean()*100
    lav = ((h > 235) & (h < 300) & (s > 0.08) & (s < 0.45) & (v > 0.6))[z].mean()*100
    g = cv2.GaussianBlur(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY).astype(float), (0, 0), 1.0)
    gm = np.hypot(cv2.Sobel(g, cv2.CV_64F, 1, 0)/8, cv2.Sobel(g, cv2.CV_64F, 0, 1)/8)[z].mean()
    print(f"             water: white {wh.sum()/z.sum()*100:4.1f}%  pieces/10k {(nw-1)/z.sum()*1e4:5.1f}  <=40px {sm:3.0f}%  41-400 {md:3.0f}%  >400 {lg:3.0f}%  (<=400: {sm+md:3.0f}%)  "
          f"largest {areas.max() if len(areas) else 0}  | light cyan {cyan:4.1f}%  vivid {viv:4.1f}%  lavender {lav:4.1f}%  | texture {gm:4.2f}")
if run('zones'):
  print('== zones')
  ZONES = {'floor_ahead x.25-.65 y.60-.69': (0.25, 0.65, 0.60, 0.69), 'left_low x.00-.22 y.62-.79': (0.00, 0.22, 0.62, 0.79),
           'char_left x.02-.25 y.76-.885': (0.02, 0.25, 0.76, 0.885), 'char_right x.71-.98 y.79-.885': (0.71, 0.98, 0.79, 0.885)}
  for zn, (x0, x1, y0, y1) in ZONES.items():
    print(zn)
    for k, im in ims.items():
        h, s, v = hsvf(im)
        m = np.zeros((H, W), bool); m[int(y0*H):int(y1*H), int(x0*W):int(x1*W)] = True
        obj = ((h > 25) & (h < 65) & (s > 0.5) & (v > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40) & (v > 0.45)) | ((h > 255) & (h < 300) & (s > 0.6))
        mm = m & ~obj; Hh, S, V = h[mm], s[mm], v[mm]
        d = dict(white=(S < .15) & (V > .88), pale=(S >= .15) & (S < .40) & (V > .75), lav=(Hh > 235) & (Hh < 300) & (S > .08) & (S < .45) & (V > .6),
                 vivid=(Hh > 190) & (Hh < 232) & (S > .55) & (V > .75), deep=(Hh > 205) & (Hh < 240) & (S > .55) & (V <= .75),
                 turq=(Hh > 175) & (Hh <= 200) & (S > .40), warm=((Hh < 60) | (Hh > 330)) & (S > .2))
        lab = cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(float); L = lab[..., 0][mm]*100/255
        g = cv2.GaussianBlur(cv2.cvtColor(im, cv2.COLOR_BGR2GRAY).astype(float), (0, 0), 2)
        gm = np.hypot(cv2.Sobel(g, cv2.CV_64F, 1, 0, ksize=3)/8, cv2.Sobel(g, cv2.CV_64F, 0, 1, ksize=3)/8)[mm]
        med = np.median(im[mm].reshape(-1, 3), axis=0).astype(int)
        print(f"   {k:10s} " + ' '.join(f"{a} {b.mean()*100:5.1f}" for a, b in d.items()) + f" | L* {L.mean():5.1f} texture {gm.mean():4.2f} median #{med[2]:02x}{med[1]:02x}{med[0]:02x} kept {mm.mean()/m.mean()*100:3.0f}%")
if run('streaks'):
  print('== streaks (ring zone r .12-.45 W round (.53, .525), y .25-.62)')
  cx, cy = 0.53*W, 0.525*H
  yy, xx = np.mgrid[0:H, 0:W]; r = np.hypot((xx-cx)/W, (yy-cy)/W)
  zone = (r > 0.12) & (r < 0.45) & (yy > 0.25*H) & (yy < 0.62*H)
  for k, im in ims.items():
    h, s, v = hsvf(im)
    obj = ((h > 25) & (h < 65) & (s > 0.5)) | (((h > 300) | (h < 15)) & (s > 0.40))
    obj = cv2.dilate(obj.astype(np.uint8), np.ones((7, 7), np.uint8)) > 0
    z = zone & ~obj
    wm = ((s < 0.20) & (v > 0.90) & z).astype(np.uint8)
    cnts, _ = cv2.findContours(wm, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    A, T, E, TAN = [], [], [], []
    for c in cnts:
        a = cv2.contourArea(c) + 0.5*len(c)
        if a < 6: continue
        per = cv2.arcLength(c, True) + 1e-6
        A.append(a); T.append(2*a/per)
        mo = cv2.moments(c)
        if mo['m00'] > 0 and len(c) >= 5:
            ex, ey = mo['m10']/mo['m00'], mo['m01']/mo['m00']
            mu20, mu02, mu11 = mo['mu20']/mo['m00'], mo['mu02']/mo['m00'], mo['mu11']/mo['m00']
            th = 0.5*np.arctan2(2*mu11, mu20-mu02)
            l1 = (mu20+mu02)/2 + np.sqrt(((mu20-mu02)/2)**2 + mu11**2); l2 = (mu20+mu02)/2 - np.sqrt(((mu20-mu02)/2)**2 + mu11**2)
            E.append(np.sqrt(l1/max(l2, 1e-3)))
            rad = np.arctan2(ey-cy, ex-cx); tang = rad + np.pi/2
            d = abs((th - tang + np.pi/2) % np.pi - np.pi/2); TAN.append(d < np.radians(30))
    A = np.array(A)
    print(f"   {k:10s} white {wm.sum()/z.sum()*100:4.1f}%  pieces/10k {len(A)/z.sum()*1e4:5.1f}  area median {np.median(A):5.0f} p90 {np.percentile(A, 90):6.0f}  "
          f"thickness median {np.median(T):4.1f} px  elongation {np.median(E):4.1f}  along-tangent {np.mean(TAN)*100:3.0f}%")
if run('bubbles'):
  print('== bubbles (HoughCircles r 6-60 px in x .15-.85 y .30-.60; centre box x .38-.70 y .40-.56; within 0.2 W of (.53, .525))')
  for P2 in (40, 55):
    for k, im in ims.items():
        x0, x1, y0, y1 = int(.15*W), int(.85*W), int(.30*H), int(.60*H)
        g = cv2.GaussianBlur(cv2.cvtColor(im[y0:y1, x0:x1], cv2.COLOR_BGR2GRAY), (0, 0), 1.2)
        cs = cv2.HoughCircles(g, cv2.HOUGH_GRADIENT, dp=1.2, minDist=14, param1=90, param2=P2, minRadius=6, maxRadius=60)
        cs = [] if cs is None else cs[0]
        inbox = sum(1 for q in cs if .38*W <= q[0]+x0 <= .70*W and .40*H <= q[1]+y0 <= .56*H)
        near = sum(1 for q in cs if np.hypot((q[0]+x0)/W - 0.53, (q[1]+y0 - 0.525*H)/W) < 0.2)
        print(f"   param2 {P2} {k:10s} circles {len(cs):3d}  in centre box {inbox:3d}  within 0.2 W of the centre {near:3d}")
