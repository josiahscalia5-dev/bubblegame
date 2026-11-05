"""Overlay the ORIGINAL APPROVED Screen 4 on a game frame at matching scale, centred on the two vanishing points.

   "$BW_PY" WebDemo/tools/screen4/match_overlay.py <game.png> <game vp x,y> <out prefix> [--approved-vp 0.528,0.532] [--mask]

Writes <prefix>_blend50.png (50% each), <prefix>_edges.png (the approved's edges red, the game's cyan, both yellow) and
<prefix>_diff.png (the absolute colour difference, x3), all 538 x 1076. With --mask the approved's objects (the derivation's
boxes, tools/screen4/derive_tunnel_textures.py) are greyed out in the blend. It also prints, over the walls (the ring between
0.08 and 0.45 W round the vanishing point, objects excluded), the correlation of the two pictures' band-scale luminance at
the plain alignment, mirrored left-right, and at radial scales 0.9 / 1.1, to check the wall mapping. No similarity percentage
is claimed: these are alignment checks only.
"""
import sys, os, argparse
import numpy as np, cv2
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from derive_tunnel_textures import APPROVED, object_mask, load_approved  # noqa: E402

W0, H0 = 538, 1076


def lum(a):
    return 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]


def place(app, avp, gvp, scale=1.0, mirror=False):
    """The approved (W0 x H0 float) moved so its vanishing point lands on the game's, scaled round it, optionally mirrored."""
    ax, ay = avp[0] * W0, avp[1] * H0; gx, gy = gvp[0] * W0, gvp[1] * H0
    sx = -scale if mirror else scale
    M = np.float32([[sx, 0, gx - sx * ax], [0, scale, gy - scale * ay]])
    return cv2.warpAffine(app, M, (W0, H0), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=np.nan)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('game'); ap.add_argument('gvp'); ap.add_argument('out')
    ap.add_argument('--approved-vp', default='0.528,0.532'); ap.add_argument('--mask', action='store_true')
    a = ap.parse_args()
    gvp = tuple(map(float, a.gvp.split(','))); avp = tuple(map(float, a.approved_vp.split(',')))
    g = np.asarray(Image.open(a.game).convert('RGB').resize((W0, H0), Image.LANCZOS)).astype(np.float32) / 255
    full = load_approved()
    obj = object_mask(full)
    app = cv2.resize(full, (W0, H0), interpolation=cv2.INTER_AREA)
    objr = cv2.resize(obj.astype(np.float32), (W0, H0), interpolation=cv2.INTER_AREA) > 0.2
    appm = app.copy(); appm[objr] = np.nan
    P = place(appm if a.mask else app, avp, gvp)
    Pm = place(appm, avp, gvp)
    ok = ~np.isnan(P[..., 0])
    blend = g.copy(); blend[ok] = 0.5 * g[ok] + 0.5 * P[ok]
    Image.fromarray(np.clip(blend * 255, 0, 255).astype(np.uint8)).save(a.out + '_blend50.png')
    e1 = cv2.Canny((np.nan_to_num(lum(P)) * 255).astype(np.uint8), 40, 100) > 0
    e2 = cv2.Canny((lum(g) * 255).astype(np.uint8), 40, 100) > 0
    ed = (np.stack([lum(g)] * 3, -1) * 0.35)
    ed[e1 & ~e2] = (1, 0.15, 0.15); ed[e2 & ~e1] = (0.2, 0.9, 1.0); ed[e1 & e2] = (1, 1, 0.2)
    Image.fromarray(np.clip(ed * 255, 0, 255).astype(np.uint8)).save(a.out + '_edges.png')
    d = np.abs(g - np.nan_to_num(P)) * 3; d[~ok] = 0
    Image.fromarray(np.clip(d * 255, 0, 255).astype(np.uint8)).save(a.out + '_diff.png')
    # the walls' alignment check: band-scale luminance (difference of Gaussians), correlated over the wall ring
    yy, xx = np.mgrid[0:H0, 0:W0]
    rr = np.hypot((xx - gvp[0] * W0) / W0, (yy - gvp[1] * H0) / W0)
    ang = np.degrees(np.arctan2(-(yy - gvp[1] * H0), xx - gvp[0] * W0))
    ring = (rr > 0.08) & (rr < 0.45) & (yy > 0.21 * H0) & (ang > 0) & (ang < 180)   # the upper half (the floor is not the walls')
    band = lambda L: cv2.GaussianBlur(L, (0, 0), 2.0) - cv2.GaussianBlur(L, (0, 0), 9.0)
    bg = band(lum(g))
    for lab, sc, mir in (('plain', 1.0, False), ('mirrored', 1.0, True), ('scale 0.9', 0.9, False), ('scale 1.1', 1.1, False)):
        Q = place(appm, avp, gvp, sc, mir)
        L = lum(Q); m = ring & ~np.isnan(L)
        bq = band(np.nan_to_num(L, nan=float(np.nanmean(L))))
        c = np.corrcoef(bg[m], bq[m])[0, 1]
        print(f"walls (upper half, r .08-.45 W, objects excluded): band-luminance correlation {lab:10s} {c:+.3f}  over {m.sum()} px")


if __name__ == '__main__':
    main()
