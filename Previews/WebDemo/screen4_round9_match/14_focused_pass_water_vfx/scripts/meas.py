"""Water & VFX targets on any frames, with the Art Director's own measures: bank.py / contact.py / char.py
(05_art_director_gate/scripts: the same HSV classes, boxes and HUD mask) and liquid_shares.py's lower-third white.
    python meas.py label=path [label=path ...]      (path APP = the original; label 'approved' uses the original's HUD mask)
Notes: 'blobs' is contact.py's total count of separate white shapes (the Art Director's "white blobs 13 / 105" left of the
body); 'blobs>=20px' counts only those of 20 px or more (538 x 1076 frame)."""
import sys, os
import numpy as np, cv2
from PIL import Image
from scipy import ndimage as ndi
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '../../../../..'))
AD = os.path.join(ROOT, 'Previews/WebDemo/screen4_round9_match/05_art_director_gate/scripts/common.py')
src = open(AD).read()
ns = {}
exec(compile('\n'.join(l for l in src.split('\n') if not l.startswith(('APP=', 'G=', 'FR='))), 'common.py', 'exec'), ns)
load, hsv, classes, hexc, W0, H0 = ns['load'], ns['hsv'], ns['classes'], ns['hexc'], ns['W0'], ns['H0']
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
LS = os.path.join(ROOT, 'WebDemo/tools/screen4/liquid_shares.py')
lsns = {}
lsrc = open(LS).read().split("\nif __name__ == '__main__':")[0].replace("_here = os.path.dirname(os.path.abspath(__file__))", "_here = %r" % os.path.dirname(LS))
exec(compile(lsrc, 'liquid_shares.py', 'exec'), lsns)
KEYS = ['white', 'pale blue', 'azure', 'electric blue', 'deep cobalt', 'lavender']


def measure(lab, p):
    im = load(p); cl, h, s, v = classes(im); yy, xx = np.mgrid[0:H0, 0:W0]
    lum = (0.2126 * im[..., 0] + 0.7152 * im[..., 1] + 0.0722 * im[..., 2]).astype(np.float32) / 255
    hp = lum - cv2.GaussianBlur(lum, (0, 0), 5)
    violet = (h >= 245) & (h < 300) & (s > 0.25) & (v > 0.45)
    satblue = (h >= 180) & (h < 240) & (s >= 0.45)
    out = {}
    hudb = np.zeros((H0, W0), bool)   # bank.py's HUD mask
    if lab != 'approved':
        hudb |= (yy > 0.835 * H0) & (((xx > 0.03 * W0) & (xx < 0.33 * W0)) | ((xx > 0.67 * W0) & (xx < 0.98 * W0)))
        hudb |= (yy > 0.885 * H0)
    else:
        hudb |= (yy > 0.875 * H0)
    for key, m0 in {'under': (yy > 0.835 * H0) & (yy < 0.875 * H0) & (xx > 0.33 * W0) & (xx < 0.67 * W0),
                    'bank': (yy > 0.80 * H0) & (yy < 0.875 * H0)}.items():
        m = m0 & ~hudb & ~cl['gold']; n = max(m.sum(), 1)
        d = {c: 100 * (cl[c] & m).sum() / n for c in KEYS}
        d['violet'] = 100 * (violet & m).sum() / n; d['satblue'] = 100 * (satblue & m).sum() / n
        d['pink'] = 100 * (cl['pink'] & m).sum() / n
        d['hp5'] = hp[m].std(); d['hi'] = 100 * ((v > 0.95) & (s < 0.15) & m).sum() / n
        d['med'] = hexc(np.median(im[m], 0))
        out[key] = d
    for key, m0 in {'sides': (yy > 0.70 * H0) & (yy < 0.835 * H0),   # contact.py's boxes
                    'contact': (yy > 0.78 * H0) & (yy < 0.835 * H0) & (xx > 0.30 * W0) & (xx < 0.70 * W0),
                    'left': (yy > 0.70 * H0) & (yy < 0.835 * H0) & (xx < 0.24 * W0),
                    'right': (yy > 0.70 * H0) & (yy < 0.835 * H0) & (xx > 0.74 * W0)}.items():
        m = m0 & ~cl['gold']; n = max(m.sum(), 1)
        d = {c: 100 * (cl[c] & m).sum() / n for c in KEYS}
        d['pink'] = 100 * (cl['pink'] & m).sum() / n; d['violet'] = 100 * (violet & m).sum() / n; d['satblue'] = 100 * (satblue & m).sum() / n
        wm = cl['white'] & m; labw, nw = ndi.label(wm); szs = ndi.sum(wm, labw, range(1, nw + 1)) if nw else np.array([0])
        d['blobs20'] = int((np.asarray(szs) >= 20).sum()); d['blobs'] = nw; d['hp5'] = hp[m].std(); d['med'] = hexc(np.median(im[m], 0))
        out[key] = d
    # char.py: the waterline (median lowest pink of the body over x .3-.7) and at its sides
    pink = ((h >= 290) | (h < 20)) & (s > 0.25) & (v > 0.45) & (yy > 0.60 * H0) & (yy < 0.95 * H0) & (xx > 0.10 * W0) & (xx < 0.90 * W0)
    pink = ndi.binary_closing(pink, iterations=4); pink = ndi.binary_opening(pink, iterations=2)
    labm, nn = ndi.label(pink); sizes = ndi.sum(pink, labm, range(1, nn + 1)); k = np.argmax(sizes) + 1; m = labm == k
    def wl(a, b):
        cols = [c for c in range(int(a * W0), int(b * W0)) if m[:, c].any()]
        return np.median([np.nonzero(m[:, c])[0].max() for c in cols]) / H0 if cols else 0
    out['wl'], out['wlL'], out['wlR'] = wl(0.3, 0.7), wl(0.30, 0.34), wl(0.66, 0.70)
    for name, sm, vm, sh in lsns['shares'](p):
        if name == 'lower third': out['l3white'] = sh['white']; out['l3sat'] = sh['saturated blue']
    return out


def fmt(lab, o):
    b, u, l, c, r = o['bank'], o['under'], o['left'], o['contact'], o['right']
    return '\n'.join([
        f"== {lab}",
        f"  F2 bank y.80-.875 (bank.py): white {b['white']:.1f} [18-22] satblue {b['satblue']:.1f} [>=13] elec {b['electric blue']:.1f} [>=11] pale {b['pale blue']:.1f} [<=27] hp5 {b['hp5']:.3f} [>=.09] lav {b['lavender']:.1f} violet {b['violet']:.1f} med {b['med']}",
        f"  F2 left x<.24 y.70-.835 (contact.py): white {l['white']:.1f} [>=20] blobs {l['blobs']} [<=40] (>=20px {l['blobs20']}) | right x>.74: white {r['white']:.1f} elec {r['electric blue']:.1f} satblue {r['satblue']:.1f} blobs {r['blobs']}",
        f"  F2 lower-third white {o['l3white']:.1f} [<=16.9] (liquid_shares.py) | contact strip x.30-.70 y.78-.835 white {c['white']:.1f} [<=19] pink {c['pink']:.1f} [>=80] (contact.py)",
        f"  F8 under x.33-.67 y.835-.875 (bank.py): hp5 {u['hp5']:.3f} [>=.10] white {u['white']:.1f} [12-16] pale {u['pale blue']:.1f} [<=24] violet {u['violet']:.1f} [>=30] pink {u['pink']:.1f} med {u['med']}",
        f"  F8 waterline (char.py) {o['wl']:.3f} [~.836] | sides x.30-.34 {o['wlL']:.3f} x.66-.70 {o['wlR']:.3f}",
    ])


if __name__ == '__main__':
    for a in sys.argv[1:]:
        lab, p = a.split('=', 1) if '=' in a else (os.path.basename(a), a)
        if p == 'APP': p = APP
        print(fmt(lab, measure(lab, p)))
