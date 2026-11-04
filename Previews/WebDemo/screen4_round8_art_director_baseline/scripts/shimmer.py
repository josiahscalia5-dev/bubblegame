import numpy as np, cv2
exec(open('/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/regions.py').read().split("frames = [")[0])
frames = [('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', .555, .52, .215)]
for t in ['2.85', '3.0', '3.1']:
    frames.append((f'game {t}s', f'/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/gameplay_hero_{t}s_fullres.png', .54, .50, .175))
for lab, p, vx, vy, hud in frames:
    im = load(p); cl, h, s, v = classes(im); H, W = im.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]; fy = yy/H; fx = xx/W
    rr = np.hypot((xx - vx*W)/W, (yy - vy*H)/W)
    obj = cl['gold'] | cl['pink']
    g = cv2.cvtColor(im, cv2.COLOR_RGB2GRAY).astype(np.float32)/255
    sat = s.astype(np.float32)
    band = cv2.GaussianBlur(g,(0,0),2) - cv2.GaussianBlur(g,(0,0),10)
    bands = cv2.GaussianBlur(sat,(0,0),2) - cv2.GaussianBlur(sat,(0,0),10)
    vort = (rr > 0.10) & (rr < 0.45) & (fy > hud) & (fy < 0.66) & ~obj
    low = (fy > 0.667) & (fy < 0.825) & ~obj
    # radial ring profile of saturation in the vortex
    bins = np.arange(0.08, 0.46, 0.01); prof = [sat[vort & (rr >= a) & (rr < a + 0.01)].mean() for a in bins]
    prof = np.array(prof)
    top = (fy > hud) & (fy < hud + 0.06) & (fx > 0.15) & (fx < 0.85)
    edge = ((fx < 0.08) | (fx > 0.92)) & (fy > 0.25) & (fy < 0.8) & ~obj
    def sh(m): 
        n = max(m.sum(),1); return ', '.join(f"{k} {100*(cl[k]&m).sum()/n:.0f}%" for k in ['gold','white','pale blue','electric blue','deep cobalt','lavender'])
    print(f"{lab:10s} mid-scale luma contrast vortex {band[vort].std():.3f} lower {band[low].std():.3f} | sat contrast vortex {bands[vort].std():.3f} lower {bands[low].std():.3f} | ring S-profile min {prof.min():.2f} max {prof.max():.2f} std {prof.std():.3f}")
    print(f"           top band under HUD: {sh(top)} | frame edges x<.08/x>.92: {sh(edge)}")
