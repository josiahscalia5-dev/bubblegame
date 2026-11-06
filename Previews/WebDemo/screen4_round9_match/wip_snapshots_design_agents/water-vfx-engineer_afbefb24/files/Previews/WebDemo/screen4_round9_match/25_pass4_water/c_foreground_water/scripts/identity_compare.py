# Compares every <label>_old_t*_canvas.png with its <label>_new_t*_canvas.png in a folder (identity.sh's output): the number
# of differing pixels and the largest channel difference. Prints one line per pair; exit status 1 if any pair differs.
import sys, os, glob, numpy as np
from PIL import Image
d = sys.argv[1]
bad = 0
for o in sorted(glob.glob(os.path.join(d, '*_old_t*_canvas.png'))):
    n = o.replace('_old_t', '_new_t')
    a = np.asarray(Image.open(o).convert('RGBA')).astype(int)
    b = np.asarray(Image.open(n).convert('RGBA')).astype(int)
    if a.shape != b.shape:
        print(f'{os.path.basename(o)}: size {a.shape} vs {b.shape}'); bad += 1; continue
    diff = np.abs(a - b).max(-1)
    k = int((diff > 0).sum())
    bad += k > 0
    print(f'{os.path.basename(o).replace("_old", ""):40s} {a.shape[1]}x{a.shape[0]}  differing pixels {k}  max diff {int(diff.max())}')
print('ALL IDENTICAL' if not bad else f'{bad} pair(s) differ')
sys.exit(1 if bad else 0)
