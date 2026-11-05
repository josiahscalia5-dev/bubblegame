"""The pink character's silhouette row by row: for y = 0.70 .. 0.88 the left and right edge (x fractions) of the 'body' mask's
largest blob (character.py), and the pink share of that row inside the edges. Usage: $BW_PY char_rows.py <frame.png> ..."""
import sys, os, numpy as np
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from character import load, hsv, blob, APP, W0, H0
import cv2
for p in [APP] + sys.argv[1:]:
    im = load(p); h, s, v = hsv(im)
    body = ((h >= 290) | (h <= 20)) & (s > 0.25) & (v > 0.45)
    body = cv2.morphologyEx(body.astype(np.uint8), cv2.MORPH_CLOSE, np.ones((7, 7), np.uint8)).astype(bool)
    b = blob(body)
    tag = 'original' if p == APP else os.path.basename(p)[:26]
    out = []
    for yf in np.arange(0.70, 0.881, 0.02):
        r = b[int(yf * H0)]; xs = np.nonzero(r)[0]
        out.append(f'{yf:.2f}:' + (f'{xs.min()/W0:.2f}-{xs.max()/W0:.2f}' if len(xs) > 2 else '   -     '))
    print(f'{tag:26s}', ' '.join(out))
