import sys, numpy as np
from PIL import Image
sys.path.insert(0, '/home/user/bubblegame/WebDemo/tools/screen4')
import importlib.util
spec = importlib.util.spec_from_file_location('hs', '/home/user/bubblegame/WebDemo/tools/screen4/hero_shares.py')
# re-implement classes (hero_shares runs on import)
def classes(rgb):
    a = rgb.astype(np.float32) / 255.0
    mx, mn = a.max(-1), a.min(-1); v = mx; s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    h = np.zeros_like(mx); d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, h)
    h = np.where(mx == g, 60 * ((b - r) / d) + 120, h)
    h = np.where(mx == b, 60 * ((r - g) / d) + 240, h)
    out = {}
    out['gold'] = (h >= 30) & (h < 65) & (s > 0.45) & (v > 0.6)
    out['pink'] = ((h >= 290) | (h < 20)) & (s > 0.3) & (v > 0.5)
    rest = ~(out['gold'] | out['pink'])
    out['white'] = rest & (s < 0.15) & (v > 0.85)
    out['pale blue'] = rest & (h >= 185) & (h < 235) & (s >= 0.15) & (s < 0.45) & (v > 0.75)
    out['azure'] = rest & (h >= 165) & (h < 205) & (s >= 0.45)
    out['electric blue'] = rest & (h >= 205) & (h < 228) & (s >= 0.45) & (v >= 0.8)
    out['deep cobalt'] = rest & (((h >= 205) & (h < 245) & (s >= 0.45) & (v < 0.8)) | ((h >= 228) & (h < 245) & (s >= 0.6)))
    out['lavender'] = rest & (h >= 235) & (h < 290) & (s >= 0.12) & ~out['deep cobalt']
    return out, h, s, v

W0, H0 = 538, 1076
def load(p):
    return np.asarray(Image.open(p).convert('RGB').resize((W0, H0), Image.LANCZOS))

def stats(name, im, mask, cl, h, s, v):
    obj = cl['gold'] | cl['pink']
    m = mask & ~obj
    n = max(m.sum(), 1)
    hh = np.deg2rad(h[m]); hm = (np.rad2deg(np.arctan2(np.sin(hh).mean(), np.cos(hh).mean())) + 360) % 360
    sh = {k: 100 * (cl[k] & m).sum() / n for k in ['white', 'pale blue', 'azure', 'electric blue', 'deep cobalt', 'lavender']}
    other = 100 - sum(sh.values())
    objs = 100 * (mask & obj).sum() / max(mask.sum(), 1)
    # texture: high-pass luminance std
    return f"{name:26s} H {hm:5.0f} S {s[m].mean():.2f} V {v[m].mean():.2f} | " + ', '.join(f"{k} {x:.0f}%" for k, x in sh.items()) + f", other {other:.0f}% | obj {objs:.0f}%"

def regions(H, W, vx, vy, hud):
    yy, xx = np.mgrid[0:H, 0:W]
    fy, fx = yy / H, xx / W
    rr = np.hypot((xx - vx * W) / W, (yy - vy * H) / W)
    ang = np.rad2deg(np.arctan2(-(yy - vy * H), xx - vx * W))
    R = {}
    R['char band y.60-.825'] = (fy > 0.60) & (fy < 0.825)
    R['lower third y.667-.825'] = (fy > 0.667) & (fy < 0.825)
    R['contact strip y.78-.88 x.33-.67'] = (fy > 0.78) & (fy < 0.88) & (fx > 0.33) & (fx < 0.67)
    R['beside char L x<.22 y.66-.83'] = (fy > 0.66) & (fy < 0.83) & (fx < 0.22)
    R['floor ahead y.55-.66 x.25-.8'] = (fy > 0.55) & (fy < 0.66) & (fx > 0.25) & (fx < 0.8)
    R['walls L/R r.22-.45'] = (rr > 0.22) & (rr < 0.45) & (np.abs(ang) > 120) | ((rr > 0.22) & (rr < 0.45) & (np.abs(ang) < 60))
    R['walls L/R r.22-.45'] &= (fy > 0.22) & (fy < 0.66)
    R['upper wall r.22-.45'] = (rr > 0.22) & (rr < 0.45) & (ang > 60) & (ang < 120) & (fy > hud)
    R['mid vortex r.10-.22'] = (rr > 0.10) & (rr < 0.22)
    R['centre r<.08'] = rr < 0.08
    return R

frames = [('APPROVED', '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg', 0.555, 0.52, 0.215)]
for t in ['2.85', '3.0', '3.1']:
    frames.append((f'game {t}s', f'/home/user/bubblegame/Previews/WebDemo/screen4_round7_hero/gameplay_hero_{t}s_fullres.png', 0.54, 0.50, 0.175))
for extra in sys.argv[1:]:
    lab, p = extra.split('=', 1); frames.append((lab, p, 0.54, 0.50, 0.175))
for lab, p, vx, vy, hud in frames:
    im = load(p); cl, h, s, v = classes(im)
    print('==', lab)
    for k, m in regions(H0, W0, vx, vy, hud).items():
        print('  ' + stats(k, im, m, cl, h, s, v))
