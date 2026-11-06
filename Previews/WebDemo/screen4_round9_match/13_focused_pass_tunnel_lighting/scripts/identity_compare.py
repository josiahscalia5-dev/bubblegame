"""Compare identity.cjs's captures: for each mode and moment, the size, the number of differing pixels, the largest channel
difference and both files' md5 (first 10 hex). Usage: $BW_PY identity_compare.py <dir>"""
import sys, os, hashlib, numpy as np
from PIL import Image
D = sys.argv[1]
for label in ('normal', 'splash', 'liquid'):
    for t in ('tap', '2.9'):
        a, b = os.path.join(D, f'{label}_base_{t}.png'), os.path.join(D, f'{label}_new_{t}.png')
        A, B = np.asarray(Image.open(a).convert('RGBA')).astype(int), np.asarray(Image.open(b).convert('RGBA')).astype(int)
        md = lambda p: hashlib.md5(open(p, 'rb').read()).hexdigest()[:10]
        if A.shape != B.shape: print(f'{label:7s} {t:4s} size differs {A.shape} {B.shape}'); continue
        d = np.abs(A - B)
        print(f'{label:7s} {t:4s} size {A.shape[1]}x{A.shape[0]} differing pixels {(d.max(-1) > 0).sum()} max diff {d.max()} md5 base {md(a)} new {md(b)}')
