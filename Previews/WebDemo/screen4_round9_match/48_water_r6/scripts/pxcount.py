import sys, numpy as np
from PIL import Image
pairs = [a.split('=') for a in sys.argv[1:]]
for a, b in pairs:
    A = np.asarray(Image.open(a).convert('RGB')).astype(int); B = np.asarray(Image.open(b).convert('RGB')).astype(int)
    if A.shape != B.shape: print(f'{a} vs {b}: SIZE DIFFERS {A.shape} {B.shape}'); continue
    d = np.abs(A - B).max(axis=2)
    print(f'{a.split("scratchpad/")[-1]} vs {b.split("screen4_round9_match/")[-1].split("scratchpad/")[-1]}: {int((d>0).sum())} differing pixels of {d.size}, max channel diff {int(d.max())}')
