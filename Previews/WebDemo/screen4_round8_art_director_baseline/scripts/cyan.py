import numpy as np, cv2
from PIL import Image
exec(open('/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/regions.py').read().split("frames = [")[0])
S='/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/'
frames = [('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', .555, .52, .215)]
for t in ['2.85', '3.0']:
    frames.append((f'game {t}s', f'/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/gameplay_hero_{t}s_fullres.png', .54, .50, .175))
outs = []
for lab, p, vx, vy, hud in frames:
    im = load(p); cl, h, s, v = classes(im); H, W = im.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]; fy = yy/H; fx = xx/W
    rr = np.hypot((xx - vx*W)/W, (yy - vy*H)/W); ang = (np.rad2deg(np.arctan2(-(yy - vy*H), xx - vx*W)) + 360) % 360
    play = (fy > hud) & (fy < 0.825)
    cyan = play & (h >= 180) & (h < 205) & (s >= 0.35) & (v >= 0.93)
    cob = play & (h >= 205) & (h < 240) & (s >= 0.6) & (v < 0.9)
    spec = play & (s < 0.06) & (v >= 0.985)
    n = play.sum()
    print(f'== {lab}: brilliant cyan {100*cyan.sum()/n:.1f}% of play, cobalt (S>=.6,V<.9) {100*cob.sum()/n:.1f}%, hot specular (S<.06,V>=.985) {100*spec.sum()/n:.2f}%  | V max p99.9 {np.percentile(v[play],99.9):.3f}')
    for nm, mk in [('cyan', cyan), ('cobalt', cob)]:
        if mk.sum() == 0: continue
        rb = np.histogram(rr[mk], bins=[0, .1, .2, .3, .4, .5, .7])[0] / mk.sum()
        # sectors: up (45-135), left (135-225), down (225-315), right
        sec = {'up': ((ang >= 45) & (ang < 135)), 'left': ((ang >= 135) & (ang < 225)), 'down': ((ang >= 225) & (ang < 315)), 'right': ((ang >= 315) | (ang < 45))}
        ss = ', '.join(f'{k} {100*(mk & m).sum()/mk.sum():.0f}%' for k, m in sec.items())
        band = ', '.join(f'{100*x:.0f}%' for x in rb)
        cc = np.median(im[mk].astype(float), 0)
        print(f'   {nm:6s} median #{int(cc[0]):02x}{int(cc[1]):02x}{int(cc[2]):02x}; by radius [0-.1,.1-.2,.2-.3,.3-.4,.4-.5,.5-.7]W: {band}; by sector: {ss}; centroid ({xx[mk].mean()/W:.2f},{yy[mk].mean()/H:.2f})')
    vis = (im * 0.35).astype(np.uint8)
    vis[cyan] = (0, 255, 255); vis[cob] = (20, 60, 255); vis[spec] = (255, 255, 255)
    outs.append(vis)
Image.fromarray(np.concatenate([np.pad(o, ((0,0),(0,8),(0,0))) for o in outs], 1)).save(S + 'cyan_cobalt_specular_maps_approved_285_30.png')
