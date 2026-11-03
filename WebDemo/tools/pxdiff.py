# python3 -I tools/pxdiff.py dirA dirB t1 t2 ... : per frame (tools/seeded_shots.cjs output), pixels differing by more than 2/255 and the changed area
import sys
from PIL import Image, ImageChops
a_dir, b_dir, times = sys.argv[1], sys.argv[2], sys.argv[3:]
for t in times:
    tt = t.zfill(4)
    a = Image.open(f'{a_dir}/t{tt}.png').convert('RGB'); b = Image.open(f'{b_dir}/t{tt}.png').convert('RGB')
    d = ImageChops.difference(a, b).convert('L').point(lambda v: 255 if v > 2 else 0)
    n = d.histogram()[255]
    print(f'{t:>5}s  {b_dir.split("/")[-1]:<18} differing pixels: {n:>7} of {a.size[0]*a.size[1]} ({100*n/(a.size[0]*a.size[1]):.2f} %)  changed area: {d.getbbox()}')
