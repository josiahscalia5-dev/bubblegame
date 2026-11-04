import sys, numpy as np, cv2
from PIL import Image
exec(open('/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/regions.py').read().split("frames = [")[0])
from skimage import measure
frames = [('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', 0.555, 0.52)]
for t in ['2.85', '3.0', '3.1']:
    frames.append((f'game {t}s', f'/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/gameplay_hero_{t}s_fullres.png', 0.54, 0.50))
for extra in sys.argv[1:]:
    lab, p = extra.split('=', 1); frames.append((lab, p, 0.54, 0.50))
def hexc(c): return '#%02x%02x%02x' % tuple(int(round(x)) for x in c)
for lab, p, vx, vy in frames:
    im = load(p); cl, h, s, v = classes(im)
    H, W = im.shape[:2]; yy, xx = np.mgrid[0:H, 0:W]; fy = yy / H; fx = xx / W
    obj = cl['gold'] | cl['pink']
    print('==', lab)
    for rn, reg in [('lower third y.667-.825', (fy > 0.667) & (fy < 0.825)), ('walls+vortex r.10-.45', (np.hypot((xx-vx*W)/W,(yy-vy*H)/W) > 0.10) & (np.hypot((xx-vx*W)/W,(yy-vy*H)/W) < 0.45) & (fy > 0.22) & (fy < 0.66))]:
        m = reg & ~obj
        px = im[m].astype(np.float32)
        vv = v[m]; ss = s[m]
        print(f'  [{rn}] V p5 {np.percentile(vv,5):.2f} p25 {np.percentile(vv,25):.2f} p50 {np.percentile(vv,50):.2f}  S p50 {np.percentile(ss,50):.2f} p90 {np.percentile(ss,90):.2f}')
        # luminance-ranked palette: sort by luma, take bands
        luma = px @ np.array([0.2126, 0.7152, 0.0722])
        order = np.argsort(luma)
        for nm, lo, hi in [('trough p0-10', 0, 10), ('shadow p10-30', 10, 30), ('body p30-60', 30, 60), ('lit p60-85', 60, 85), ('crest p85-97', 85, 97), ('spec p97-100', 97, 100)]:
            sel = order[int(len(order)*lo/100):max(int(len(order)*hi/100), int(len(order)*lo/100)+1)]
            c = np.median(px[sel], 0); hsv = cv2.cvtColor(np.uint8([[c]]), cv2.COLOR_RGB2HSV)[0, 0]
            print(f'     {nm:14s} {hexc(c)}  (H {hsv[0]*2:3d} S {hsv[1]/255:.2f} V {hsv[2]/255:.2f})')
        # k-means palette
        Z = px[np.random.default_rng(0).choice(len(px), min(len(px), 20000), replace=False)]
        crit = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 50, 0.5)
        _, lb, ctr = cv2.kmeans(Z, 6, None, crit, 3, cv2.KMEANS_PP_CENTERS)
        cnt = np.bincount(lb.ravel(), minlength=6) / len(lb)
        idx = np.argsort(ctr @ np.array([0.2126, 0.7152, 0.0722]))
        print('     kmeans: ' + ', '.join(f'{hexc(ctr[i])} {100*cnt[i]:.0f}%' for i in idx))
    # texture metrics on lower third
    reg = (fy > 0.667) & (fy < 0.825)
    g = cv2.cvtColor(im, cv2.COLOR_RGB2GRAY).astype(np.float32) / 255
    hp = g - cv2.GaussianBlur(g, (0, 0), 6)
    lap = cv2.Laplacian(g, cv2.CV_32F)
    m = reg & ~obj
    wm = (cl['white'] & reg).astype(np.uint8)
    lab_ = measure.label(wm, connectivity=2); props = measure.regionprops(lab_)
    areas = np.array([pp.area for pp in props]) if props else np.array([0])
    big = areas[areas > 0.002 * H * W].sum() / max(wm.sum(), 1)
    print(f'  texture lower third: highpass std {hp[m].std():.3f}, |laplacian| mean {np.abs(lap[m]).mean():.3f}; white blobs {len(areas)}, share of white in blobs >0.2% frame {100*big:.0f}%, largest blob {100*areas.max()/(H*W):.2f}% of frame')
