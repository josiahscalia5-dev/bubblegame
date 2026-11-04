import numpy as np
exec(open('/tmp/claude-0/-home-user-bubblegame/041b68bc-21a0-5e8b-ab85-eb10408ed51e/scratchpad/art_director/regions.py').read().split("frames = [")[0])
D = '/home/user/bubblegame/Design/ReferencePacks/2026-11-05_Water_Look_References/'
for lab, p, vx, vy, y1 in [('REF01', D + '01_WATER_LOOK_gold_rim_glossy_turquoise_floor.png', .515, .526, .80), ('REF02', D + '02_WATER_LOOK_electric_blue_vortex_white_splash_strokes.png', .51, .425, .80),
                       ('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', .555, .52, .68),
                       ('game2.85', '/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/gameplay_hero_2.85s_fullres.png', .54, .50, .68)]:
    im = load(p); cl, h, s, v = classes(im); H, W = im.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]; fy = yy/H; fx = xx/W
    obj = cl['gold'] | cl['pink']
    floor = (fy > vy + .02) & (fy < y1) & ~obj
    gl = floor & (s < .22) & (v > .96)
    c = floor & (np.abs(fx - vx) < .07); f = floor & (np.abs(fx - vx) >= .07) & (np.abs(fx - vx) < .25)
    print(f'{lab:9s} floor y {vy+.02:.2f}-{y1}: glint density centre strip |x-vp|<.07 {100*(gl&c).sum()/c.sum():.0f}%  vs flanks .07-.25 {100*(gl&f).sum()/f.sum():.0f}%  ratio {((gl&c).sum()/c.sum())/max((gl&f).sum()/f.sum(),1e-6):.1f}x; glint share of floor {100*gl.sum()/floor.sum():.0f}%')
