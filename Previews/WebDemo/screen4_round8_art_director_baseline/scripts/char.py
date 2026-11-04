import numpy as np, cv2
from PIL import Image
exec(open('/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/regions.py').read().split("frames = [")[0])
frames = [('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')]
for t in ['2.85', '3.0', '3.1']:
    frames.append((f'game {t}s', f'/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/gameplay_hero_{t}s_fullres.png'))
S='/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/'
for lab, p in frames:
    im = load(p); cl, h, s, v = classes(im); H, W = im.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]; fy = yy/H; fx = xx/W
    zone = (fy > 0.62) & (fy < 0.89) & (fx > 0.15) & (fx < 0.85)
    pk = cl['pink'] & zone
    pk = cv2.morphologyEx(pk.astype(np.uint8), cv2.MORPH_OPEN, np.ones((3,3),np.uint8))
    n, lb, st, _ = cv2.connectedComponentsWithStats(pk)
    i = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); m = lb == i
    m = cv2.morphologyEx(m.astype(np.uint8), cv2.MORPH_CLOSE, np.ones((9,9),np.uint8)).astype(bool)
    rows = np.where(m.any(1))[0]; cols = np.where(m.any(0))[0]
    top = rows.min(); bot = rows.max()
    widths = m.sum(1); wmax = widths.max(); wrow = widths.argmax()
    # waterline per column across the central 60% of the character's width
    c0, c1 = cols.min(), cols.max(); cc = np.arange(int(c0 + 0.2*(c1-c0)), int(c1 - 0.2*(c1-c0)))
    low = np.array([np.where(m[:, c])[0].max() for c in cc if m[:, c].any()])
    # dome-only width: width at 30% down from top (excludes arms)
    r30 = top + int(0.3*(bot-top)); 
    pkcol = im[m].astype(float).mean(0)
    hsv = cv2.cvtColor(np.uint8([[pkcol]]), cv2.COLOR_RGB2HSV)[0,0]
    print(f"{lab:10s} top {top/H:.3f} widest row {wrow/H:.3f} (w {wmax/W:.2f}) bottom(max) {bot/H:.3f} waterline centre-60%: median {np.median(low)/H:.3f} min {low.min()/H:.3f} max {low.max()/H:.3f} std {low.std()/H:.4f} | x {c0/W:.2f}-{c1/W:.2f} centre {(c0+c1)/2/W:.2f} | visible h/w {(np.median(low)-top)/wmax:.2f} | fur mean #{int(pkcol[0]):02x}{int(pkcol[1]):02x}{int(pkcol[2]):02x} S {hsv[1]/255:.2f} V {hsv[2]/255:.2f}")
    vis = im.copy(); vis[m] = (vis[m]*0.4 + np.array([0,255,0])*0.6).astype(np.uint8)
    Image.fromarray(vis).save(S + f"charmask_{lab.replace(' ','_')}.png")
