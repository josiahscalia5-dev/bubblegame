import numpy as np, cv2
exec(open('/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/regions.py').read().split("frames = [")[0])
def hexc(c): return '#%02x%02x%02x' % tuple(int(round(x)) for x in c)
frames = [('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'),
          ('game 2.85s', '/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/gameplay_hero_2.85s_fullres.png')]
for lab, p in frames:
    im = load(p); cl, h, s, v = classes(im); H, W = im.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]; fy = yy/H; fx = xx/W
    obj = cl['gold'] | cl['pink']
    print('==', lab)
    for rn, reg in [('contact strip', (fy > .78) & (fy < .88) & (fx > .33) & (fx < .67)), ('beside char L', (fy > .66) & (fy < .83) & (fx < .22)), ('beside char R x>.75 y.75-.83', (fy > .75) & (fy < .83) & (fx > .75)), ('floor ahead', (fy > .55) & (fy < .66) & (fx > .25) & (fx < .8))]:
        m = reg & ~obj; px = im[m].astype(np.float32)
        Z = px[np.random.default_rng(0).choice(len(px), min(len(px), 15000), replace=False)]
        _, lb, ctr = cv2.kmeans(Z, 5, None, (3, 50, .5), 3, cv2.KMEANS_PP_CENTERS)
        cnt = np.bincount(lb.ravel(), minlength=5)/len(lb); idx = np.argsort(ctr @ np.array([.2126,.7152,.0722]))
        print(f'  {rn:28s}: ' + ', '.join(f'{hexc(ctr[i])} {100*cnt[i]:.0f}%' for i in idx))
