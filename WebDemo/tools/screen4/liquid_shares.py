"""Screen 4 liquid pass: colour shares (the Art Director's HSV classes, from hero_shares.py) in the LOWER THIRD of the frame
(below 2/3 of the height), the lower third without the HUD's bottom buttons (2/3 .. 0.86 of the height), the band round
the character (0.62 .. 0.86 of the height, 0.15 .. 0.85 of the width) and the full frame.
    python3 liquid_shares.py approved.png frame.png ...
One line per image and region. The liquid pass's rule: the white share in the lower third must not exceed the approved one.
"""
import sys, os
import numpy as np
from PIL import Image

_here = os.path.dirname(os.path.abspath(__file__))
_src = open(os.path.join(_here, 'hero_shares.py')).read().split('\nfor arg in sys.argv[1:]:')[0]   # classes() only
_ns = {}
exec(compile(_src, 'hero_shares.py', 'exec'), _ns)
classes = _ns['classes']

KEYS = ['white', 'pale blue', 'azure', 'electric blue', 'deep cobalt', 'lavender', 'pink', 'gold']


def regions(H, W):
    yy, xx = np.mgrid[0:H, 0:W]
    return [('full frame', np.ones((H, W), bool)),
            ('lower third', yy > H * 2 / 3),
            ('lower 3rd no HUD', (yy > H * 2 / 3) & (yy < 0.86 * H)),
            ('round character', (yy > 0.62 * H) & (yy < 0.86 * H) & (xx > 0.15 * W) & (xx < 0.85 * W))]


def shares(path):
    im = np.asarray(Image.open(path).convert('RGB').resize((538, 1076)))
    H, W = im.shape[:2]
    cl, s, v = classes(im)
    sat = cl['azure'] | cl['electric blue'] | cl['deep cobalt']
    out = []
    for name, m in regions(H, W):
        n = max(m.sum(), 1)
        sh = {k: 100 * (cl[k] & m).sum() / n for k in KEYS}
        sh['all blue'] = 100 * ((sat | cl['pale blue']) & m).sum() / n
        sh['saturated blue'] = 100 * (sat & m).sum() / n
        out.append((name, s[m].mean(), v[m].mean(), sh))
    return out


if __name__ == '__main__':
    for path in sys.argv[1:]:
        for name, sm, vm, sh in shares(path):
            print(f"{'/'.join(path.split('/')[-2:]):46s} {name:17s} sat {sm:.2f} val {vm:.2f} | " + ', '.join(f"{k} {v:.1f}%" for k, v in sh.items()))
