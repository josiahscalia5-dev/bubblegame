"""The ORIGINAL approved Screen 4's own foreground water as a texture for ?s3=intunnel,water2 (6 November 2026).

    "$BW_PY" WebDemo/tools/screen4/derive_water_map.py [--out WebDemo/textures/screen4]

Crops the original (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg, 767 x 1536)
from y Y0 to the bottom, full width: the water under and round the pink character. Masks what is not water there (the
pink character and the gold coins by colour, the two power buttons in the bottom corners and their badges by place) and
fills those holes from the surrounding water (OpenCV inpainting, Telea, then a light smoothing of the filled texels only).
Writes foreground_water_original.png (sRGB, the crop at full resolution) and .json (the crop's place in the frame).
No randomness.
"""
import argparse, json, os
import numpy as np, cv2
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
ORIG = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
Y0 = 0.72
ap = argparse.ArgumentParser(); ap.add_argument('--out', default=os.path.join(ROOT, 'WebDemo/textures/screen4')); a = ap.parse_args()
o = np.asarray(Image.open(ORIG).convert('RGB')); H, W = o.shape[:2]; y0 = int(Y0 * H)
c = o[y0:].copy(); hsv = cv2.cvtColor(c, cv2.COLOR_RGB2HSV).astype(int); h, s, v = hsv[..., 0] * 2, hsv[..., 1], hsv[..., 2]
pink = (((h >= 290) | (h <= 15)) & (s > 35) & (v > 110))   # (her pale fur edge too: s > 35)
gold = ((h > 20) & (h < 65) & (s > 90) & (v > 110))
m = (pink | gold).astype(np.uint8)
yy, xx = np.mgrid[0:c.shape[0], 0:W]; fy = (yy + y0) / H; fx = xx / W
m[(fy > 0.875) & ((fx < 0.42) | (fx > 0.64))] = 1          # the power buttons and their badges (bottom corners)
m = cv2.dilate(m, np.ones((11, 11), np.uint8))
fill = cv2.inpaint(c, m * 255, 9, cv2.INPAINT_TELEA)
soft = cv2.GaussianBlur(fill, (0, 0), 4)
k = cv2.GaussianBlur(m.astype(np.float32), (0, 0), 3)[..., None]
out = (fill * (1 - k * 0.6) + soft * k * 0.6).astype(np.uint8)
os.makedirs(a.out, exist_ok=True)
Image.fromarray(out).save(os.path.join(a.out, 'foreground_water_original.png'))
json.dump({'source': os.path.relpath(ORIG, ROOT), 'y0': y0 / H, 'y1': 1.0, 'size': [W, H - y0], 'masked_share': round(float(m.mean()), 3)},
          open(os.path.join(a.out, 'foreground_water_original.json'), 'w'), indent=1)
print('wrote', out.shape, 'masked', round(float(m.mean()) * 100, 1), '%')
