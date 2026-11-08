# scene07 pass 16 (session f70c9bd1): the distant-scenery artwork, made ONLY from the user's approved master
# (Design/ReferencePacks/2026-11-08_Screen09_Approved_Reference_Kit_from_user/00_AUTHENTIC_APPROVED_SCREEN09.png, phone frame rows 38-1422).
# The user's direction (8 Nov): "a hybrid approach ... real 3D models for visible foreground and side structures, with carefully arranged
# layered background artwork and depth effects for distant scenery"; and (8 Nov, ~20:00 UTC): "Do not use tiling, mirroring, stretched
# gradients or repeated texture patches ... Preserve all visible authentic machinery details ... For areas hidden by the original enemy or
# interface, use ... proper generative inpainting that matches the surrounding architecture."
# So: every visible pixel of the master is kept UNCHANGED. Only the areas the master's own enemy, banner and HUD bar cover (which the game
# draws itself, in 3D or as its HUD) are filled, by LaMa ("big-lama", Apache-2.0 generative inpainting with fast Fourier convolutions,
# TorchScript from github.com/enesmsahin/simple-lama-inpainting releases v0.1.0, sha256 7ba7aa7ac37a4d41...), from the surrounding
# machinery. The parts the game builds in 3D (the left washer housing; everything below the far water line) are faded out (alpha 0).
#   ~/.bubblewash-tools/metrics/bin/python make_backdrop_art.py <master.png> <big-lama.pt> <out.webp> [<preview.png>] [<mask.png>]
import sys
import cv2
import numpy as np
import torch

src, model_path, out = sys.argv[1], sys.argv[2], sys.argv[3]
full = cv2.imread(src, cv2.IMREAD_COLOR)
im = full[38:1423, 0:756].copy() if full.shape[0] > 1400 else full.copy()   # the phone frame
H, W = im.shape[:2]
fx, fy = lambda v: int(round(v * W)), lambda v: int(round(v * H))
yy, xx = np.mgrid[0:H, 0:W]

# 1. what the game draws itself: the enemy (a disc with its nubs), the banner (its red body, white text and warning sign, closed and
#    dilated inside its box), the HUD bar
mask = np.zeros((H, W), np.uint8)
cv2.circle(mask, (fx(0.725), fy(0.384)), int(0.172 * W) + 8, 255, -1)
b, g, r = [im[:, :, i].astype(int) for i in range(3)]
box = np.zeros((H, W), bool); box[fy(0.10):fy(0.27), fx(0.15):fx(0.87)] = True
banner = ((r > 120) & (r - g > 45) & box).astype(np.uint8) * 255
banner = cv2.morphologyEx(banner, cv2.MORPH_CLOSE, np.ones((41, 41), np.uint8))
cnts, _ = cv2.findContours(banner, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
if cnts: cv2.drawContours(banner, [max(cnts, key=cv2.contourArea)], -1, 255, -1)
banner = cv2.dilate(banner, np.ones((33, 33), np.uint8))          # its outline, drop shadow and glow too
mask |= banner
mask[0:fy(0.092), :] = 255

# 2. LaMa on the whole frame; its result is used ONLY inside the mask
dev = torch.device('cpu')
model = torch.jit.load(model_path, map_location=dev).eval()
ph, pw = (8 - H % 8) % 8, (8 - W % 8) % 8
rgb = cv2.cvtColor(im, cv2.COLOR_BGR2RGB)
img_t = torch.from_numpy(np.pad(rgb, ((0, ph), (0, pw), (0, 0)), mode='reflect')).permute(2, 0, 1)[None].float() / 255.0
msk_t = torch.from_numpy(np.pad((mask > 0).astype(np.float32), ((0, ph), (0, pw)), mode='constant'))[None, None]
with torch.no_grad():
    res = model(img_t, msk_t)[0].permute(1, 2, 0).numpy()[:H, :W]
lama = cv2.cvtColor(np.clip(res * 255, 0, 255).astype(np.uint8), cv2.COLOR_RGB2BGR)
m = cv2.GaussianBlur((mask > 0).astype(np.float32), (0, 0), 2.0)[..., None]
m[mask > 0] = 1.0                                                   # inside: LaMa only; a 2 px blend just outside the mask
im = (im * (1 - m) + lama * m).astype(np.uint8)

# 3. alpha: the distant scenery only
alpha = np.ones((H, W), np.float32)
alpha *= np.clip((0.52 - yy / H) / 0.06, 0, 1)                      # fade out below the far water line (y 0.46-0.52)
ex, ey, rx, ry = 0.07 * W, 0.31 * H, 0.215 * W, 0.137 * H             # the left washer housing (built in 3D)
e = np.sqrt(((xx - ex) / rx) ** 2 + ((yy - ey) / ry) ** 2)
alpha *= np.clip((e - 1.0) / 0.12, 0, 1)
rgba = np.dstack([im, (alpha * 255).astype(np.uint8)])
cv2.imwrite(out, rgba, [cv2.IMWRITE_WEBP_QUALITY, 90])
if len(sys.argv) > 4:
    chk = np.full_like(im, 40); chk[(yy // 24 + xx // 24) % 2 == 0] = 90
    cv2.imwrite(sys.argv[4], (im * alpha[..., None] + chk * (1 - alpha[..., None])).astype(np.uint8))
if len(sys.argv) > 5: cv2.imwrite(sys.argv[5], mask)
print('wrote', out, W, 'x', H, 'masked px', int((mask > 0).sum()))
