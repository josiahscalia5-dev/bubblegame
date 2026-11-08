# Sheet + regional mean colours (session f70c9bd1): python3 sheet_stats.py <out.png> <label=img> ... ; the first image is the original.
# Each image is resized to 412 x 915 (the game's stage) for the 3 x 3 grid of the upper area (y 0.18-0.54), mean RGB per cell.
import sys
from PIL import Image, ImageDraw
import numpy as np
out, pairs = sys.argv[1], [a.split('=', 1) for a in sys.argv[2:]]
ims = [Image.open(p).convert('RGB') for _, p in pairs]
H = 640; r = [i.resize((int(i.width * H / i.height), H), Image.LANCZOS) for i in ims]
s = Image.new('RGB', (sum(i.width for i in r) + 10 * (len(r) - 1), H + 24), 'black'); x = 0; d = ImageDraw.Draw(s)
for (lab, _), i in zip(pairs, r): s.paste(i, (x, 0)); d.text((x + 6, H + 6), lab, fill='white'); x += i.width + 10
s.save(out)
A = [np.asarray(i.resize((412, 915), Image.LANCZOS)).astype(float) for i in ims]
ys = [0.18, 0.30, 0.42, 0.54]; xs = [0, 0.33, 0.66, 1.0]; err = [0.0] * len(A)
for k in range(3):
    cells = []
    for j in range(3):
        m = [a[int(ys[k] * 915):int(ys[k + 1] * 915), int(xs[j] * 412):int(xs[j + 1] * 412)].reshape(-1, 3).mean(0) for a in A]
        for n in range(len(A)): err[n] += np.abs(m[n] - m[0]).mean() / 9
        cells.append(' '.join(f'{lab}{m[n].astype(int).tolist()}' for n, (lab, _) in enumerate(pairs)))
    print(f'y{ys[k]:.2f}: ' + ' | '.join(cells))
print('mean abs colour difference to the original over the 9 upper cells:', ' '.join(f'{lab}={e:.1f}' for (lab, _), e in zip(pairs, err)))
