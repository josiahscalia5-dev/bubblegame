"""Make the painted far-scenery layer for the ?s3=paint test from the approved Screen 3 (the original is only read).
    python3 -I make_paint_backdrop.py <approved.png> <out.png> <preview.png>

- Regions where the real 3D brush, gold machinery and big bubble stand in front are filled smoothly from their
  surroundings (they are covered by the 3D models; the fill only shows in small gaps).
- The image's own light frame line at its edges is replaced by the pixels just inside it.
- Alpha: 0 in the door's centre (the real tunnel shows through) and under the HUD bar (the game's HUD is there).
- Colour: each texel holds the value the game must draw so that, after its colour grade (saturation 1.32, contrast
  1.12, the opening grade) and its tone mapping (Neutral, exposure 1.05), the screen shows the approved colour.
  Stored as sRGB-encoded X/2, so values up to 2.0 (bright highlights) fit in 8 bits; the shader multiplies by 2.
Screen coordinates are the 538 x 1076 stage; the image (735 x 1476) is drawn at x 1..537 there.
"""
import sys
import numpy as np
from PIL import Image

src, out, preview = sys.argv[1:4]
A = np.asarray(Image.open(src).convert('RGB')).astype(np.float64) / 255.0
H, W, _ = A.shape
kx, ky = W / 536.0, H / 1076.0
yy, xx = np.mgrid[0:H, 0:W]
sx = xx / kx + 1.0; sy = yy / ky          # stage coordinates of every texel

# ---- 1. the image's frame line: replace the outer band with the pixels just inside it
B = 12
A2 = A.copy()
A2[:B, :] = A2[B:B + 1, :]; A2[-B:, :] = A2[-B - 1:-B, :]
A2[:, :B] = A2[:, B:B + 1]; A2[:, -B:] = A2[:, -B - 1:-B]
A = A2

# ---- 2. fill behind the 3D brush (left), the big bubble and gold machinery (right)
brush = ((sx - 52) / 116) ** 2 + ((sy - 582) / 130) ** 2 < 1.0
bubble = (sx - 475) ** 2 + (sy - 526) ** 2 < 86 ** 2
machine = (sx > 452) & (sy > 428) & (sy < 650)
hole_fill = brush | bubble | machine
# diffusion fill on a half-size copy (smooth, no patches), then up-sampled into the holes
small = Image.fromarray((A * 255).astype(np.uint8)).resize((W // 3, H // 3), Image.BILINEAR)
S = np.asarray(small).astype(np.float64) / 255.0
m = np.asarray(Image.fromarray((hole_fill * 255).astype(np.uint8)).resize((W // 3, H // 3), Image.NEAREST)) > 127
F = S.copy(); F[m] = S[~m].mean(0)
for _ in range(1500):
    P = np.pad(F, ((1, 1), (1, 1), (0, 0)), mode='edge')
    avg = (P[:-2, 1:-1] + P[2:, 1:-1] + P[1:-1, :-2] + P[1:-1, 2:]) / 4.0
    F[m] = avg[m]
Fu = np.asarray(Image.fromarray((np.clip(F, 0, 1) * 255).astype(np.uint8)).resize((W, H), Image.BICUBIC)).astype(np.float64) / 255.0
# soft edge between painting and fill
from PIL import ImageFilter
soft = np.asarray(Image.fromarray((hole_fill * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(4))).astype(np.float64)[..., None] / 255.0
A = A * (1 - soft) + Fu * soft

# ---- 3. alpha: open door centre, no painting under the HUD bar
def smooth(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
r = np.hypot(sx - 269, sy - 475)
alpha = smooth(126, 136, r) * smooth(58, 70, sy)

# ---- 4. colour: invert the game's grade and tone mapping per texel
def srgb_to_lin(c): return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
def lin_to_srgb(c): return np.where(c <= 0.0031308, c * 12.92, 1.055 * np.power(np.maximum(c, 0), 1 / 2.4) - 0.055)
LW = np.array([0.2126, 0.7152, 0.0722])
def sst(a, b, x): t = np.clip((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t)
def neutral(c, exposure=1.05):
    c = c * exposure
    x = c.min(-1, keepdims=True)
    off = np.where(x < 0.08, x - 6.25 * x * x, 0.04)
    c = c - off
    peak = c.max(-1, keepdims=True)
    sc, d = 0.76, 0.24
    newpeak = 1 - d * d / (peak + d - sc)
    comp = peak >= sc
    cc = np.where(comp, c * (newpeak / np.maximum(peak, 1e-6)), c)
    g = 1 - 1 / (0.15 * (peak - newpeak) + 1)
    return np.where(comp, cc * (1 - g) + newpeak * g, cc)
def forward(X):
    l = (X * LW).sum(-1, keepdims=True)
    c = l + (X - l) * 1.32
    c = (c - 0.18) * 1.12 + 0.18
    mx, mn = c.max(-1, keepdims=True), c.min(-1, keepdims=True)
    sat = (mx - mn) / np.maximum(mx, 1e-4)
    lg = (c * LW).sum(-1, keepdims=True)
    g = np.maximum(lg + (c - lg) * (1 + 0.35 * (1 - sat) * sst(0.02, 0.2, lg)), 0)
    g = g * 0.9
    g = g * (1 - 0.16 * (1 - sst(0, 0.55, lg)) * sst(0.02, 0.18, lg))
    return neutral(np.maximum(g, 0))
T = srgb_to_lin(A).reshape(-1, 3)
X = T.copy()
for it in range(60):
    Fx = forward(X)
    e = T - Fx
    J = np.zeros_like(X)
    for ch in range(3):
        d = np.zeros(3); d[ch] = 1e-3
        J[:, ch] = (forward(X + d)[:, ch] - Fx[:, ch]) / 1e-3
    X = np.clip(X + e / np.maximum(J, 0.05), 0, 2.0)
err = np.abs(lin_to_srgb(forward(X)) - lin_to_srgb(T)) * 255
print('inverse colour error (sRGB levels): mean %.2f, 99th percentile %.2f, max %.1f; texels needing > 1.0: %.1f %%' % (err.mean(), np.percentile(err, 99), err.max(), 100 * (X.max(-1) > 1.0).mean()))
X = X.reshape(H, W, 3)
enc = lin_to_srgb(X / 2.0)
rgba = np.dstack([np.clip(enc, 0, 1), alpha]) * 255
Image.fromarray(np.round(rgba).astype(np.uint8), 'RGBA').save(out, optimize=True)
# preview of what it should look like (the filled painting with the door opened, on a dark checker)
chk = ((xx // 16 + yy // 16) % 2)[..., None] * 0.15 + 0.1
Image.fromarray((np.clip(A * alpha[..., None] + chk * (1 - alpha[..., None]), 0, 1) * 255).astype(np.uint8)).save(preview)
print('written', out, rgba.shape)
