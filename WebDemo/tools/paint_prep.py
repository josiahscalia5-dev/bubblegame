# Prepares the painted far scenery for the ?s3=paint test from the approved Screen 3 (ui/approved_screen3.png, 735 x 1476,
# left untouched). Writes ui/s3_painted_far.png (RGBA) and ui/s3_painted_far.json (where the approved frame sits in it).
#
#   kept, exactly as painted: the castle, its towers, the gold washer-door ring with its violet band, the gears at the
#                door's foot
#   the door:    its painted vortex is kept in the image (above VORTEX_FADE, so the duck below it is left out), and the
#                game cuts the door's centre open itself (radius DOOR_HOLE px around the door's centre, painted_layer.js):
#                always with ?s3=paint, so the real tunnel shows and the mascot rides through; with ?s3=paint,vortex the
#                painted vortex shows at Tap to Start and opens into the real tunnel just after the tap
#   left out:    everything below GROUND (the brush, the big bubble, the machinery, the slide, the mascot), which the
#                game draws in real 3D
#   filled:      the painted interface: the "Let's go!" banner (the live banner covers that spot at Tap to Start; the
#                fill shows only while it scrolls off the top after the tap), the top bar (never seen: it is under the
#                live top bar, then off-screen) and the phone frame's border
#   margins:     MARGIN_X px either side and MARGIN_TOP px above, for screens wider or taller than 1:2
#
# Run from WebDemo/: python3 -I tools/paint_prep.py [debug-dir]
import json, sys
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SRC, OUT = 'ui/approved_screen3.png', 'ui/s3_painted_far'
W, H = 735, 1476
DOOR = (367.5, 651.6)          # the door's centre (the cine camera was fitted to it: y 475 of 1076)
DOOR_HOLE, DOOR_FEATHER = 176, 5
VORTEX_FADE = (700, 738)       # inside the door: the painted vortex fades out between these rows (the duck is below)
# the bottom of the kept region: (x, y) points, feathered by GROUND_FEATHER px
GROUND = [(0, 634), (120, 634), (160, 652), (205, 702), (250, 762), (300, 792), (430, 792), (480, 766), (520, 722), (556, 642), (586, 606), (735, 602)]
GROUND_FEATHER = 10
BANNER = (90, 212, 647, 426)    # the painted banner with its white outline and glow
HUD_BOTTOM = 108                # the painted top bar ends here
BORDER = 18                     # the phone frame's border at the left, right and top
MARGIN_X, MARGIN_TOP, KEEP_BOTTOM = 184, 200, 840

src = np.asarray(Image.open(SRC).convert('RGB'), dtype=np.float32) / 255.0
assert src.shape[:2] == (H, W), src.shape
img = src.copy()
rng = np.random.default_rng(3)


def blur(a, r):
    """Gaussian blur (sigma r) of a float image (H, W, C) or (H, W): separable, edges reflected."""
    k = np.exp(-0.5 * (np.arange(-int(3 * r), int(3 * r) + 1) / r) ** 2); k /= k.sum(); n = len(k) // 2
    out = a.astype(np.float32)
    for axis in (0, 1):
        if out.shape[axis] == 1: continue
        pad = [(0, 0)] * out.ndim; pad[axis] = (n, n)
        p = np.pad(out, pad, mode='reflect' if out.shape[axis] > n else 'edge')
        out = sum(k[i] * np.take(p, np.arange(i, i + out.shape[axis]), axis=axis) for i in range(len(k)))
    return out


# ---- 1. the phone frame's border at the sides: mirrored from just inside
for x in range(BORDER):
    img[:, x] = img[:, 2 * BORDER - x]
    img[:, W - 1 - x] = img[:, W - 1 - 2 * BORDER + x]

# ---- 2. the banner: the castle wall behind it, the inner towers carried down, the door ring's top rebuilt
def hsv(a):
    mx, mn = a.max(-1), a.min(-1); d = np.maximum(mx - mn, 1e-6)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    h = np.where(mx == r, ((g - b) / d) % 6, np.where(mx == g, (b - r) / d + 2, (r - g) / d + 4)) * 60
    return np.where(mx - mn < 1e-6, 0, h), np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0), mx

x0, y0, x1, y1 = BANNER
bm = Image.new('L', (W, H), 0)
ImageDraw.Draw(bm).rounded_rectangle((x0, y0, x1, y1), radius=46, fill=255)
bm = np.asarray(bm, dtype=np.float32) / 255.0
hole = bm > 0.5
cy0, cy1, cx0, cx1 = y0 - 60, y1 + 60, max(0, x0 - 80), min(W, x1 + 80)
C, Hc = img[cy0:cy1, cx0:cx1].copy(), hole[cy0:cy1, cx0:cx1]
h, s, v = hsv(C)
# (a) the wall's own colour, spread in from the lavender-pink wall around the banner only (not its gold, blue or towers)
wallish = (~Hc) & (v > 0.6) & (s < 0.4) & (((h > 225) & (h < 350)) | (s < 0.14))
K = wallish.astype(np.float32)
est, have = np.zeros_like(C), np.zeros(Hc.shape, bool)
for rad in (8, 18, 36, 70, 120, 200):
    num, den = blur(C * K[..., None], rad), blur(K, rad)
    ok = (den > 0.03) & ~have
    est[ok] = num[ok] / den[ok][:, None]; have |= ok
est[~have] = C[wallish].mean(0)                                  # (never needed at these sizes; a safe fallback)
est = blur(est, 10)
# (b) painterly grain (not a repeated tile) at the strength of the wall's own detail, and the wall's soft sparkle
lum = C.mean(-1); fine = (lum - blur(lum, 3))[wallish]
amp = float(np.clip(fine.std() * 0.5, 0.006, 0.016))
grain = sum(blur(rng.standard_normal(Hc.shape).astype(np.float32), sc) * sc ** 1.3 for sc in (1.2, 3.0, 8.0, 20.0))
grain = grain / grain.std() * amp
tint = blur(rng.standard_normal(Hc.shape).astype(np.float32), 18); tint = tint / tint.std() * amp * 0.6
fillc = est + grain[..., None] + np.stack([tint, tint * -0.3, tint * 0.4], -1)
spark = np.zeros(Hc.shape, np.float32)
for _ in range(int(Hc.sum() / 4500)):
    py, px = rng.integers(0, Hc.shape[0]), rng.integers(0, Hc.shape[1]); sg = rng.uniform(0.8, 2.0)
    yy, xx = np.ogrid[0:Hc.shape[0], 0:Hc.shape[1]]
    spark = np.maximum(spark, rng.uniform(0.25, 0.6) * np.exp(-((yy - py) ** 2 + (xx - px) ** 2) / (2 * sg * sg)))
fillc = fillc * (1 - spark[..., None]) + spark[..., None]
# (c) the inner towers: each body's colours just above the banner, carried down, a little darker, fading into the wall
for (tx0, tx1) in [(84, 150), (552, 622)]:
    prof = np.median(src[y0 - 22:y0 - 4, tx0:tx1], axis=0)        # (cols, 3)
    prof = blur(prof[None], 1.5)[0]
    for y in range(y0, y1):
        t = (y - y0) / 150.0
        k = max(0.0, 1 - t) ** 1.3
        if k <= 0: break
        edge = np.minimum(np.arange(tx1 - tx0), np.arange(tx1 - tx0)[::-1])
        w = np.clip(edge / 9.0, 0, 1)[:, None] * k
        row = fillc[y - cy0, tx0 - cx0:tx1 - cx0]
        fillc[y - cy0, tx0 - cx0:tx1 - cx0] = row * (1 - w) + prof * (1 - 0.18 * t) * w
# (d) the gold door ring's top (its very top is under the banner's lower edge): taken from the same ring 30 degrees
#     further round on the same side, which is in plain view; the ring is a circle, so its profile across matches
yy, xx = np.mgrid[cy0:cy1, cx0:cx1]
rr = np.hypot(xx - DOOR[0], yy - DOOR[1]); th = np.arctan2(xx - DOOR[0], DOOR[1] - yy)
def round_by(deg):
    sx = np.clip(np.round(DOOR[0] + rr * np.sin(th + np.deg2rad(deg))), 0, W - 1).astype(int)
    sy = np.clip(np.round(DOOR[1] - rr * np.cos(th + np.deg2rad(deg))), 0, H - 1).astype(int)
    return src[sy, sx]
side = np.clip((np.rad2deg(th) + 8) / 16, 0, 1)[..., None]      # the two halves blended across the top, no seam
ringc = round_by(-30) * (1 - side) + round_by(30) * side
wr = (np.clip((rr - 190) / 6, 0, 1) * np.clip((246 - rr) / 6, 0, 1))[..., None]
fillc = fillc * (1 - wr) + ringc * wr
# blended in through a soft edge just outside the banner's outline
soft = blur(bm, 2.5)[cy0:cy1, cx0:cx1][..., None]
img[cy0:cy1, cx0:cx1] = C * (1 - soft) + np.clip(fillc, 0, 1) * soft

# ---- 3. the top bar: the row of scenery under it, softened and carried up
row = blur(img[HUD_BOTTOM:HUD_BOTTOM + 8].mean(0)[None], 26)[0]
SKY = np.array([0.93, 0.84, 0.97], np.float32)     # the pale lavender-pink glow at the top of the painting
for y in range(HUD_BOTTOM):
    k = y / HUD_BOTTOM                               # 0 at the top, 1 at the bar's lower edge
    img[y] = row * (0.55 + 0.45 * k) + SKY * 0.45 * (1 - k)
seam = np.clip((np.arange(HUD_BOTTOM - 6, HUD_BOTTOM + 6) - (HUD_BOTTOM - 6)) / 12.0, 0, 1)[:, None, None]
img[HUD_BOTTOM - 6:HUD_BOTTOM + 6] = img[HUD_BOTTOM - 6:HUD_BOTTOM + 6] * seam + blur(img[HUD_BOTTOM - 6:HUD_BOTTOM + 6], 3) * (1 - seam)

# ---- 4. alpha: the kept region
alpha = Image.new('L', (W, H), 0)
d = ImageDraw.Draw(alpha)
d.polygon([(0, 0), (W, 0)] + [(x, y) for (x, y) in reversed(GROUND)], fill=255)
alpha = np.asarray(alpha.filter(ImageFilter.GaussianBlur(GROUND_FEATHER / 2)), dtype=np.float32) / 255.0
yy, xx = np.mgrid[0:H, 0:W]
r = np.hypot(xx - DOOR[0], yy - DOOR[1])
inside = 1 - np.clip((r - DOOR_HOLE) / DOOR_FEATHER + 0.5, 0, 1)                  # the door's opening
vortex = 1 - np.clip((yy - VORTEX_FADE[0]) / (VORTEX_FADE[1] - VORTEX_FADE[0]), 0, 1)
alpha *= 1 - inside * (1 - vortex)                                                 # the vortex kept, the duck left out

# ---- 5. margins for wider or taller screens: the sides mirrored outward, the sky above
TW, TH = W + 2 * MARGIN_X, MARGIN_TOP + KEEP_BOTTOM
rgb = np.zeros((TH, TW, 3), np.float32); a = np.zeros((TH, TW), np.float32)
rgb[MARGIN_TOP:, MARGIN_X:MARGIN_X + W] = img[:KEEP_BOTTOM]; a[MARGIN_TOP:, MARGIN_X:MARGIN_X + W] = alpha[:KEEP_BOTTOM]
for x in range(MARGIN_X):
    rgb[MARGIN_TOP:, MARGIN_X - 1 - x] = img[:KEEP_BOTTOM, min(W - 1, x + 1)]; a[MARGIN_TOP:, MARGIN_X - 1 - x] = alpha[:KEEP_BOTTOM, min(W - 1, x + 1)]
    rgb[MARGIN_TOP:, MARGIN_X + W + x] = img[:KEEP_BOTTOM, max(0, W - 2 - x)]; a[MARGIN_TOP:, MARGIN_X + W + x] = alpha[:KEEP_BOTTOM, max(0, W - 2 - x)]
sky = blur(rgb[MARGIN_TOP:MARGIN_TOP + 4].mean(0)[None], 40)[0]
for y in range(MARGIN_TOP):
    rgb[y] = sky; a[y] = a[MARGIN_TOP]
# colours carried into the transparent parts (so filtering at the cut edges never pulls in black)
spread = rgb.copy(); w8 = (a > 0.02).astype(np.float32)[..., None]
for rad in (2, 6, 16, 40):
    num = blur(spread * w8, rad); den = blur(w8, rad)
    spread = np.where(w8 > 0, spread, num / np.maximum(den, 1e-4))
    w8 = np.maximum(w8, (den > 1e-3).astype(np.float32))
rgb = np.where((a > 0.02)[..., None], rgb, spread)

out = np.concatenate([np.clip(rgb, 0, 1), a[..., None]], -1)
Image.fromarray((out * 255 + 0.5).astype(np.uint8), 'RGBA').save(OUT + '.png', optimize=True)
json.dump({'source': SRC, 'frame': [W, H], 'texture': [TW, TH], 'frameAt': [MARGIN_X, MARGIN_TOP], 'door': DOOR, 'doorHole': DOOR_HOLE,
           'doorFeather': DOOR_FEATHER, 'vortexFade': VORTEX_FADE}, open(OUT + '.json', 'w'), indent=1)
print(f'wrote {OUT}.png ({TW} x {TH}) and {OUT}.json')

if len(sys.argv) > 1:   # debug views: the prepared image over a checkerboard, and the banner fill beside the original
    dbg = sys.argv[1]
    chk = ((np.indices((TH, TW)).sum(0) // 16) % 2).astype(np.float32)[..., None] * 0.25 + 0.15
    view = out[..., :3] * out[..., 3:] + chk * (1 - out[..., 3:])
    Image.fromarray((view * 255).astype(np.uint8)).save(f'{dbg}/prepared_over_checker.png')
    pair = np.concatenate([src[60:480], np.ones((420, 10, 3), np.float32), img[60:480]], 1)
    Image.fromarray((pair * 255).astype(np.uint8)).resize((pair.shape[1] * 2 // 1, 840)).save(f'{dbg}/banner_fill_before_after.png')
