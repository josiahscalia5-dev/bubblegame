import numpy as np, cv2
from PIL import Image
exec(open('/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/regions.py').read().split("frames = [")[0])
S = '/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/'
D = '/home/user/bubblegame/Design/ReferencePacks/2026-11-05_Water_Look_References/'
G = '/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/'
def hexc(c): return '#%02x%02x%02x' % tuple(int(round(x)) for x in c)
K = ['white', 'pale blue', 'azure', 'electric blue', 'deep cobalt', 'lavender']
frames = [('REF01 turquoise floor', D + '01_WATER_LOOK_gold_rim_glossy_turquoise_floor.png', .515, .526),
          ('REF02 electric vortex', D + '02_WATER_LOOK_electric_blue_vortex_white_splash_strokes.png', .51, .425),
          ('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', .555, .52),
          ('game 2.85s', G + 'gameplay_hero_2.85s_fullres.png', .54, .50)]
maps = []
for lab, p, vx, vy in frames:
    im = load(p); cl, h, s, v = classes(im); H, W = im.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]; fy = yy/H; fx = xx/W
    rr = np.hypot((xx - vx*W)/W, (yy - vy*H)/W)
    obj = cl['gold'] | cl['pink']
    regs = {'floor centre x.3-.7 y(vp+.05)-.82': (fx > .3) & (fx < .7) & (fy > vy + .05) & (fy < .82),
            'sides x<.2|x>.8 y(vp+.05)-.82': ((fx < .2) | (fx > .8)) & (fy > vy + .05) & (fy < .82),
            'bottom y>.85': (fy > .85),
            'vortex walls r.10-.40 above vp': (rr > .10) & (rr < .40) & (fy < vy)}
    print('==', lab)
    for rn, reg in regs.items():
        m = reg & ~obj; n = max(m.sum(), 1)
        sh = ', '.join(f'{k} {100*(cl[k]&m).sum()/n:.0f}%' for k in K)
        px = im[m].astype(np.float32); luma = px @ np.array([.2126, .7152, .0722]); o = np.argsort(luma)
        pick = lambda a, b: hexc(np.median(px[o[int(len(o)*a):int(len(o)*b)]], 0))
        print(f'  {rn:34s} S {s[m].mean():.2f} V {v[m].mean():.2f} | {sh} | trough {pick(0,.1)} body {pick(.3,.6)} lit {pick(.75,.9)} top {pick(.97,1)}')
    # glint path: very bright, low-sat pixels on the floor below the vp
    gl = (s < 0.22) & (v > 0.96) & (fy > vy + .03) & (fy < .85) & ~obj
    wl = cl['white']
    rows = []
    for a in np.arange(vy + .03, .83, .06):
        band = (fy >= a) & (fy < a + .06)
        g = gl & band & (fx > .2) & (fx < .8)
        if g.sum() < 20: rows.append(f'{a:.2f}:-'); continue
        xs = fx[g]; rows.append(f'{a:.2f}:x{np.median(xs):.2f}±{(np.percentile(xs,75)-np.percentile(xs,25))/2:.2f} ({100*g.sum()/(band&(fx>.2)&(fx<.8)).sum():.0f}%)')
    print('  glint path (S<.22,V>.96, x.2-.8) by row y: ' + '  '.join(rows))
    # floor glint colour
    fl = gl & (fx > .35) & (fx < .65)
    if fl.sum(): print(f'  glint colour median {hexc(np.median(im[fl].astype(float),0))}; brilliant cyan (H180-205,S>.35,V>.93) on floor centre {100*((h>=180)&(h<205)&(s>=.35)&(v>=.93)&regs["floor centre x.3-.7 y(vp+.05)-.82"]).sum()/regs["floor centre x.3-.7 y(vp+.05)-.82"].sum():.0f}%')
    vis = (im * .35).astype(np.uint8); vis[cl['white'] & ~gl] = (255, 255, 255); vis[gl] = (255, 220, 0)
    vis[(h >= 180) & (h < 205) & (s >= .35) & (v >= .93) & ~gl] = (0, 255, 255); vis[cl['deep cobalt']] = (20, 60, 255)
    maps.append(vis)
Image.fromarray(np.concatenate([np.pad(m_, ((0,0),(0,8),(0,0))) for m_ in maps], 1)).save(S + 'waterlook_maps_ref01_ref02_approved_game.png')
