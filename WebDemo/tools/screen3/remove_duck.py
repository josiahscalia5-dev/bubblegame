"""Remove the yellow duck from a COPY of the approved Screen 3 (the original file is only read).

Exemplar-based fill (Criminisi, Perez and Toyama 2004): the hole is filled patch by patch from its edge
inward, each time copying the best-matching patch of real water from the same picture. Sources are limited
to the slide's water (blue, cyan and white pixels only, so no coin, gear or fur is copied), and patches from
a similar height are preferred, so the water cells keep the size they have at that depth.

    python3 -I remove_duck.py <approved.png> <out.png> <mask_out.png> [patch radius] [height weight] [seed]
"""
import sys
import numpy as np
from PIL import Image

src, out, mask_out = sys.argv[1:4]
RAD = int(sys.argv[4]) if len(sys.argv) > 4 else 6
LAM = float(sys.argv[5]) if len(sys.argv) > 5 else 1.5
SEED = int(sys.argv[6]) if len(sys.argv) > 6 else 1
GROW = int(sys.argv[7]) if len(sys.argv) > 7 else 3
REUSE = float(sys.argv[8]) if len(sys.argv) > 8 else 40.0
rng = np.random.default_rng(SEED)

A = np.asarray(Image.open(src).convert('RGB')).astype(np.float32)
H, W, _ = A.shape
R, G, B = A[..., 0], A[..., 1], A[..., 2]
notwater = ((R - G) > 14) | ((R - B) > 8)

# ---- the duck: the non-water shape connected to its middle, inside its box, holes filled, edge widened
bx0, bx1, by0, by1 = 290, 433, 744, 869
seed = (800, 360)
comp = np.zeros((H, W), bool)
stack = [seed]
while stack:
    y, x = stack.pop()
    if not (by0 <= y < by1 and bx0 <= x < bx1) or comp[y, x] or not notwater[y, x]:
        continue
    comp[y, x] = True
    stack += [(y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)]
# fill holes: anything inside the box not reachable from the box edge through non-duck pixels
outside = np.zeros((H, W), bool)
stack = [(y, x) for y in range(by0, by1) for x in (bx0, bx1 - 1)] + [(y, x) for x in range(bx0, bx1) for y in (by0, by1 - 1)]
while stack:
    y, x = stack.pop()
    if not (by0 <= y < by1 and bx0 <= x < bx1) or outside[y, x] or comp[y, x]:
        continue
    outside[y, x] = True
    stack += [(y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)]
duck = np.zeros((H, W), bool)
duck[by0:by1, bx0:bx1] = ~outside[by0:by1, bx0:bx1]


def dilate(m, r):
    o = m.copy()
    for dy in range(-r, r + 1):
        for dx in range(-r, r + 1):
            if dy * dy + dx * dx <= r * r:
                o |= np.roll(np.roll(m, dy, 0), dx, 1)
    return o


hole = dilate(duck, GROW)       # its soft edge, dark outline and white glow
Image.fromarray((hole * 255).astype(np.uint8)).save(mask_out)

# ---- source patches: real water near the slide, fully known, no coin/gear/fur pixel in them
sx0, sx1, sy0, sy1 = 236, 496, 680, 890
P = 2 * RAD + 1
win = A[sy0:sy1, sx0:sx1]
bad = (hole | notwater)[sy0:sy1, sx0:sx1]
pw = np.lib.stride_tricks.sliding_window_view(win, (P, P), axis=(0, 1))          # (h', w', 3, P, P)
pb = np.lib.stride_tricks.sliding_window_view(bad, (P, P))                        # (h', w', P, P)
ok = ~pb.any(axis=(2, 3))
cy, cx = np.nonzero(ok)
cand = pw[cy, cx].transpose(0, 2, 3, 1).reshape(len(cy), -1).astype(np.float32)  # (N, P*P*3)
cand_y = cy + sy0 + RAD
cand_x = cx + sx0 + RAD
print('source patches:', len(cy), 'hole pixels:', int(hole.sum()))

# ---- fill
img = A.copy()
fill = hole.copy()
conf = (~fill).astype(np.float32)
gy, gx = np.gradient(A.mean(axis=2))
used = np.zeros(len(cy), np.float32)
it = 0
while fill.any():
    it += 1
    # fill front: hole pixels next to a known pixel
    known = ~fill
    nb = np.zeros_like(fill)
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nb |= np.roll(np.roll(known, dy, 0), dx, 1)
    front = np.argwhere(fill & nb)
    # priority = confidence x data term (strong water lines arriving at the edge are continued first)
    best_p, best_v = None, -1.0
    fm = fill.astype(np.float32)
    ny, nx = np.gradient(fm)
    for (y, x) in front:
        c = conf[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1].mean()
        iso = np.array([-gx[y, x], gy[y, x]])        # along the line (perpendicular to the gradient)
        n = np.array([ny[y, x], nx[y, x]])
        nn = np.linalg.norm(n) + 1e-6
        d = abs(iso[0] * n[1] + iso[1] * n[0]) / nn / 255.0 + 0.001
        v = c * d
        if v > best_v:
            best_v, best_p = v, (y, x)
    y, x = best_p
    tgt = img[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1].reshape(-1, 3)
    kn = (~fill[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1]).reshape(-1)
    idx = np.repeat(kn, 3)
    t = tgt.reshape(-1)
    diff = cand[:, idx] - t[idx]
    ssd = (diff * diff).mean(axis=1)
    # prefer patches from a similar height (the water cells shrink toward the portal), and avoid reusing one patch
    ssd = ssd + LAM * ((cand_y - y) / 10.0) ** 2 + REUSE * used + rng.random(len(ssd)) * 2.0
    k = int(np.argmin(ssd))
    used[k] += 1
    patch = cand[k].reshape(P, P, 3)
    region = fill[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1]
    img[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1][region] = patch[region]
    conf[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1][region] = conf[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1].mean()
    fill[y - RAD:y + RAD + 1, x - RAD:x + RAD + 1] = False
print('patches placed:', it)

Image.fromarray(np.clip(img + 0.5, 0, 255).astype(np.uint8)).save(out, optimize=True)
# safety: outside the hole the copy is pixel-identical to the approved image
same = np.array_equal(np.asarray(Image.open(out).convert('RGB'))[~hole], A.astype(np.uint8)[~hole])
print('outside the duck, identical to the approved image:', same)
