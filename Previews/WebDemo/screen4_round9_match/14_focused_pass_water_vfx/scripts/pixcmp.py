"""Pixel identity of the raw 3D canvas (tools/models/game_eval.cjs SHOT, seed 7, 538 x 1076) between the baseline bundle and
this pass, for the normal game, ?s3=splash and ?s3=liquid at Tap to Start and 2.85 s.
    python pixcmp.py <dir with {normal,splash,liquid}_{base,now}_{tap,2.9}.png> <out.txt> <baseline md5> <now md5>"""
import sys, hashlib
import numpy as np
from PIL import Image
d, out, mb, mn = sys.argv[1:5]
lines = [f'Pixel identity, raw 3D canvas (tools/models/game_eval.cjs SHOT, seed 7, 538 x 1076, TIMES=2.85): baseline bundle md5 {mb} '
         f'(af5791d = 36c8676) against this pass, bundle md5 {mn}.']
for s in ['normal', 'splash', 'liquid']:
    for t, lab in (('tap', 'Tap to Start'), ('2.9', '2.85 s')):
        a = np.asarray(Image.open(f'{d}/{s}_base_{t}.png').convert('RGBA')).astype(int)
        b = np.asarray(Image.open(f'{d}/{s}_now_{t}.png').convert('RGBA')).astype(int)
        df = np.abs(a - b)
        lines.append(f'{s:7s} {lab:13s} {a.shape[1]}x{a.shape[0]}: differing pixels {int((df.sum(-1) > 0).sum())}, max difference {int(df.max())}; '
                     f'pixel md5 baseline {hashlib.md5(a.tobytes()).hexdigest()} now {hashlib.md5(b.tobytes()).hexdigest()}')
open(out, 'w').write('\n'.join(lines) + '\n'); print('\n'.join(lines))
