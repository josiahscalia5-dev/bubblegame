# frame_fit.py: the camera's targets on any set of canvas frames, measured exactly as the Art Director's scripts do
# (16_art_director_focus_review/scripts): the pink character (character_water.py's mask: share, box, centre, width) and the
# top of the tunnel water (rim_profile.py's rule), with the original's values first. Optional cands.json (tune_cands.cjs)
# adds the projected vanishing point.
#   "$BW_PY" -I frame_fit.py <frame.png> [...] [--cands cands.json]
import sys, json, os, numpy as np, cv2
ORIG = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
W, H = 767, 1536
args = sys.argv[1:]; cands = {}
if '--cands' in args:
    i = args.index('--cands'); cands = {c['label']: c for c in json.load(open(args[i + 1]))}; del args[i:i + 2]
def measure(p):
    im = cv2.resize(cv2.imread(p)[..., :3], (W, H), interpolation=cv2.INTER_AREA)
    hsv = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(float); h = hsv[..., 0]*360/256; s = hsv[..., 1]/255; v = hsv[..., 2]/255
    m = (((h >= 300) | (h <= 10)) & (s > 0.45) & (v > 0.5)).astype(np.uint8)
    box = np.zeros_like(m); box[int(.58*H):int(.92*H), int(.12*W):int(.82*W)] = 1; m &= box
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
    n, lab, st, cen = cv2.connectedComponentsWithStats(m); i = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA])
    x, y, w, hh, a = st[i]
    blue = (h > 195) & (h < 240) & (s > 0.5); ys = np.arange(0.14, 0.40, 0.01)
    bs = [blue[int(yy*H):int((yy+0.01)*H), int(0.40*W):int(0.50*W)].mean() for yy in ys]; top = None
    for j, yy in enumerate(ys[:-1]):
        if yy >= 0.245 and bs[j] >= 0.7 and bs[j+1] >= 0.7: top = yy; break
    return dict(share=a/(H*W)*100, x0=x/W, x1=(x+w)/W, y0=y/H, y1=(y+hh)/H, cx=cen[i][0]/W, cy=cen[i][1]/H, w=w/W, top=top)
print(f"{'frame':28s} share   width  top    base   centre          water-top  vp            cam (u, h, fov)")
for p in [ORIG] + args:
    r = measure(p); lab = os.path.splitext(os.path.basename(p))[0]; c = cands.get(lab)
    extra = f"  ({c['vp'][0]:.3f}, {c['vp'][1]:.3f})  ({c['cam']['u']:.2f}, {c['cam']['h']:.2f}, {c['cam']['fov']:.1f})" if c else ''
    print(f"{('original' if p == ORIG else lab)[:28]:28s} {r['share']:4.2f}%  {r['w']:.3f}  {r['y0']:.3f}  {r['y1']:.3f}  ({r['cx']:.3f}, {r['cy']:.3f})  {r['top'] if r['top'] is None else round(r['top'], 2)!s:9s}{extra}")
