"""identity_compare.py <before dir> <after dir> : pixel-by-pixel comparison of every frame identity_shots.sh made."""
import sys, os, numpy as np
from PIL import Image
a, b = sys.argv[1], sys.argv[2]; bad = 0
for f in sorted(os.listdir(a)):
    if not f.endswith('.png'): continue
    x = np.asarray(Image.open(os.path.join(a, f)).convert('RGBA')).astype(int)
    if not os.path.exists(os.path.join(b, f)): print(f'{f:28s} MISSING in after'); bad += 1; continue
    y = np.asarray(Image.open(os.path.join(b, f)).convert('RGBA')).astype(int)
    if x.shape != y.shape: print(f'{f:28s} size differs {x.shape} {y.shape}'); bad += 1; continue
    d = np.abs(x - y).max(2); n = int((d > 0).sum())
    print(f'{f:28s} {x.shape[1]}x{x.shape[0]}  differing pixels {n}  max channel difference {int(d.max())}  {"IDENTICAL" if n == 0 else "DIFFERENT"}')
    bad += n > 0
print('ALL IDENTICAL' if bad == 0 else f'{bad} frames differ')
