# scene07 pass 16 (session f70c9bd1): the distant-scenery artwork, made ONLY from the user's approved master
# (Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/00_AUTHENTIC_APPROVED_SCREEN09.png, phone frame rows 38-1422).
# The user's direction (8 Nov): "a hybrid approach ... real 3D models for visible foreground and side structures, with carefully arranged
# layered background artwork and depth effects for distant scenery". The game projects this image from the approved checkpoint camera
# onto the chamber's real surfaces (scene07_recon16.js), so the HUD, the banner and the enemy (all drawn by the game itself) are removed
# here, and the parts the game builds in 3D (the left washer housing, everything below the far water line) are faded out (alpha 0).
#   python make_backdrop_art.py <master.png> <out.webp> [<preview.png>]
import sys
import cv2
import numpy as np

src, out = sys.argv[1], sys.argv[2]
full = cv2.imread(src, cv2.IMREAD_COLOR)
im = full[38:1423, 0:756].copy() if full.shape[0] > 1400 else full.copy()   # the phone frame
H, W = im.shape[:2]
fx, fy = lambda v: int(round(v * W)), lambda v: int(round(v * H))

# 1-2. the enemy, the banner and the HUD bar (the game draws its own enemy, HUD and banner over these areas). Each is filled so that
#      nothing recognizable is duplicated: the COLOUR is a normalized blur of the surroundings (smooth, no inpainting streaks), and the
#      fine DETAIL is a high-pass of one plain machinery patch of the same master (left of the corridor), tiled with flips.
yy, xx = np.mgrid[0:H, 0:W]
mask = np.zeros((H, W), np.uint8)
cx, cy, rr = fx(0.725), fy(0.384), int(0.172 * W)
cv2.circle(mask, (cx, cy), rr + 6, 255, -1)
cv2.rectangle(mask, (fx(0.15), fy(0.10)), (fx(0.87), fy(0.268)), 255, -1)
mask[0:fy(0.092), :] = 255
valid = (mask == 0).astype(np.float32)
f32 = im.astype(np.float32)
colour = np.zeros_like(f32)
for sig, wgt in ((18, 0.5), (48, 0.5)):
    num = cv2.GaussianBlur(f32 * valid[..., None], (0, 0), sig); den = cv2.GaussianBlur(valid, (0, 0), sig)[..., None]
    colour += wgt * num / np.maximum(den, 1e-3)
patch = f32[fy(0.27):fy(0.36), fx(0.22):fx(0.40)]
hp = patch - cv2.GaussianBlur(patch, (0, 0), 4)
ph, pw = hp.shape[:2]
tile = np.zeros_like(f32)
for ty in range(0, H, ph):
    for tx in range(0, W, pw):
        t = hp[:, ::-1] if (tx // pw) % 2 else hp
        t = t[::-1] if (ty // ph) % 2 else t
        tile[ty:ty + ph, tx:tx + pw] = t[:min(ph, H - ty), :min(pw, W - tx)]
filled = np.clip(colour + 0.6 * tile, 0, 255)
m = cv2.GaussianBlur((mask > 0).astype(np.float32), (0, 0), 6)[..., None]
im = (f32 * (1 - m) + filled * m).astype(np.uint8)
# 3. alpha: the distant scenery only
alpha = np.ones((H, W), np.float32)
alpha *= np.clip((0.52 - yy / H) / 0.06, 0, 1)                      # fade out below the far water line (y 0.46-0.52)
ex, ey, rx, ry = 0.07 * W, 0.31 * H, 0.215 * W, 0.137 * H             # the left washer housing (built in 3D)
e = np.sqrt(((xx - ex) / rx) ** 2 + ((yy - ey) / ry) ** 2)
alpha *= np.clip((e - 1.0) / 0.12, 0, 1)
rgba = np.dstack([im, (alpha * 255).astype(np.uint8)])
cv2.imwrite(out, rgba, [cv2.IMWRITE_WEBP_QUALITY, 88])
if len(sys.argv) > 3:
    chk = np.full_like(im, 40); chk[(yy // 24 + xx // 24) % 2 == 0] = 90
    prev = (im * alpha[..., None] + chk * (1 - alpha[..., None])).astype(np.uint8)
    cv2.imwrite(sys.argv[3], prev)
print('wrote', out, W, 'x', H)
