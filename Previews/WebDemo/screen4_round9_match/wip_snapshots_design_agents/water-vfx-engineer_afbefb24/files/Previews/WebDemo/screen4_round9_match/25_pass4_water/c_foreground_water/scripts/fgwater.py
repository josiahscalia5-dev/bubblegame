# Pass 4c (Water & VFX): the foreground water round the pink character, measured in the ORIGINAL and in game frames.
#   "$BW_PY" fgwater.py label=<frame.png> [label=<frame.png> ...]      (the original is always measured first)
#   OVERLAY=<dir> also writes each frame's zone masks as pictures, to check the measure by eye.
# Every frame is resized to the original's 767 x 1536 (game canvases are 807 x 1614, pages 807 x 1602).
# Zones (shares of the frame): front = the water round and in front of her base, y 0.78-0.92, x 0.12-0.88; sides = up her
# sides, x 0.06-0.30 and 0.70-0.94, y 0.68-0.84. Excluded everywhere: her pink (dilated 4 px, so fur edges do not count as
# water), the coins' gold (dilated 6 px) and the two power buttons' corners (x < 0.42 or x > 0.66 below y 0.88, where the
# original's buttons and ours sit).
# Colour classes: the verification audit's (22_verification_audit/scripts/common.py), on HSV of the sRGB frame.
# Measures: class shares (%); mean saturation and value; median colour; luminance std (contrast); fine and mid texture
# (std of luminance minus its Gaussian blur at sigma 1.5 and 5 px); sparkle (small bright near-white specks, 1-12 px, % of
# the zone); white pieces (connected white areas of 4 px or more, per 10k zone px, and the share of white in pieces of
# 400 px or more = a white mass); saturation of the blue pixels only (h 185-245, not white). Bubbles are counted by eye on the
# enlarged crops (a Hough circle search on these textured frames found 140-250 false circles in the original as in ours).
import os, sys, numpy as np, cv2
from PIL import Image
from scipy import ndimage as ndi

ORIG = os.path.join(os.path.dirname(os.path.abspath(__file__)), *(['..'] * 6),
                    'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
ORIG = os.path.normpath(ORIG)
W0, H0 = 767, 1536
KEYS = ['white', 'pale blue', 'azure', 'electric blue', 'deep cobalt', 'lavender']


def load(p):
    im = Image.open(p).convert('RGB')
    if im.size != (W0, H0):
        im = im.resize((W0, H0), Image.LANCZOS)
    return np.asarray(im)


def hsv(im):
    a = im.astype(np.float32) / 255
    mx, mn = a.max(-1), a.min(-1)
    v = mx
    s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, np.where(mx == g, 60 * ((b - r) / d) + 120, 60 * ((r - g) / d) + 240))
    return h, s, v


def classes(im):
    h, s, v = hsv(im)
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


def hexc(c):
    c = np.clip(c, 0, 255).astype(int)
    return '#%02x%02x%02x' % tuple(c)


def zones():
    yy, xx = np.mgrid[0:H0, 0:W0]
    x, y = xx / W0, yy / H0
    buttons = (y > 0.88) & ((x < 0.42) | (x > 0.66))
    front = (y > 0.78) & (y < 0.92) & (x > 0.12) & (x < 0.88) & ~buttons
    sides = (y > 0.68) & (y < 0.84) & (((x > 0.06) & (x < 0.30)) | ((x > 0.70) & (x < 0.94)))
    return {'front y.78-.92 x.12-.88': front, 'sides y.68-.84': sides, 'front+sides': front | sides}


def measure(lab, p, overlay=None):
    im = load(p)
    cl, h, s, v = classes(im)
    lum = (0.2126 * im[..., 0] + 0.7152 * im[..., 1] + 0.0722 * im[..., 2]).astype(np.float32) / 255
    hp15 = lum - cv2.GaussianBlur(lum, (0, 0), 1.5)
    hp5 = lum - cv2.GaussianBlur(lum, (0, 0), 5)
    obj = ndi.binary_dilation(cl['pink'], iterations=4) | ndi.binary_dilation(cl['gold'], iterations=6)
    hi = (v > 0.93) & (s < 0.15)
    lab_hi, n = ndi.label(hi)
    sz = ndi.sum(hi, lab_hi, range(1, n + 1))
    small = np.isin(lab_hi, np.nonzero((sz >= 1) & (sz <= 12))[0] + 1)
    wm = cl['white']
    lab_w, nw = ndi.label(wm)
    szw = ndi.sum(wm, lab_w, range(1, nw + 1))
    big = np.isin(lab_w, np.nonzero(szw >= 400)[0] + 1)
    blue = ((h >= 185) & (h < 245)) & ~wm
    res = {}
    print('==', lab, os.path.basename(p))
    for k, m0 in zones().items():
        m = m0 & ~obj
        n = max(m.sum(), 1)
        sh = {c: 100 * (cl[c] & m).sum() / n for c in KEYS}
        other = 100 - sum(sh.values())
        # white pieces inside the zone (labelled inside the zone, so a piece is not counted for its outside part)
        lw, nn = ndi.label(wm & m)
        szz = ndi.sum(wm & m, lw, range(1, nn + 1)) if nn else np.array([])
        pieces = int((szz >= 4).sum())
        r = {**{c: sh[c] for c in KEYS}, 'other': other, 'S': float(s[m].mean()), 'V': float(v[m].mean()),
             'med': hexc(np.median(im[m], 0)), 'Lstd': float(lum[m].std()), 'hp1.5': float(hp15[m].std()), 'hp5': float(hp5[m].std()),
             'sparkle': 100 * (small & m).sum() / n, 'pieces/10k': pieces * 1e4 / n, 'mass%': 100 * (big & m).sum() / max((wm & m).sum(), 1),
             'blueS': float(s[m & blue].mean()) if (m & blue).any() else 0.0, 'objects%': 100 * (m0 & obj).sum() / max(m0.sum(), 1)}
        res[k] = r
        print(f"  {k:24s} " + ' '.join(f"{c.split()[0][:5]} {r[c]:4.1f}" for c in KEYS) + f" oth {other:4.1f} | S {r['S']:.2f} V {r['V']:.2f} "
              f"blueS {r['blueS']:.2f} med {r['med']} Lstd {r['Lstd']:.3f} | hp1.5 {r['hp1.5']:.3f} hp5 {r['hp5']:.3f} | sparkle {r['sparkle']:4.2f}% "
              f"pieces/10k {r['pieces/10k']:4.1f} mass {r['mass%']:4.1f}% | masked {r['objects%']:.0f}%")
    if overlay:
        os.makedirs(overlay, exist_ok=True)
        o = im.copy()
        for k, m0 in zones().items():
            if k == 'front+sides':
                continue
            edge = m0 ^ ndi.binary_erosion(m0, iterations=2)
            o[edge] = (255, 255, 0)
        o[obj & zones()['front+sides']] = (o[obj & zones()['front+sides']] * 0.4).astype(np.uint8)
        Image.fromarray(o).save(os.path.join(overlay, f'{lab}_zones.png'))
    return res


if __name__ == '__main__':
    ov = os.environ.get('OVERLAY')
    frames = [('original', ORIG)] + [tuple(a.split('=', 1)) for a in sys.argv[1:]]
    allr = {}
    for lab, p in frames:
        allr[lab] = measure(lab, p, ov)
    if os.environ.get('JSON'):
        import json
        with open(os.environ['JSON'], 'w') as f:
            json.dump(allr, f, indent=1)
