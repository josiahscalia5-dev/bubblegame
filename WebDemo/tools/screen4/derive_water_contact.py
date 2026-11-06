"""The water's contact edge with the pink character, from the ORIGINAL approved Screen 4 (R6, ?s3=intunnel,water6; 6 November 2026).

    "$BW_PY" -I WebDemo/tools/screen4/derive_water_contact.py [--out WebDemo/textures/screen4]

Reads the original (767 x 1536) and R4's texture (foreground_water_original_r4.png, the same crop from Y0 down) and writes:
  foreground_water_original_r6.png       R4's texture with the ring round her body restored to the original's OWN pixels:
                                         R4 masked her body dilated by 11 px and filled that ring from other water, so
                                         the original's lobe tops next to her fur were replaced. Kept: R4 everywhere else.
  foreground_water_original_r6_body.png  her body as the original draws it (8-bit grey, 255 = her fur): the largest pink
                                         component round the frame's middle, closed, its holes (white sparkles in the fur)
                                         filled, dilated 1 px, the edge anti-aliased (Gaussian sigma 1 px). The water face
                                         is cut where this is over half, so the original's lobe outline is the water's
                                         top edge in front of her.
  foreground_water_original_r6.json      the crop's place in the frame and the shares.
No randomness. R4's texture and derive_water_map.py are not changed.
"""
import argparse, json, os
import numpy as np, cv2
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
ORIG = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
Y0 = 0.72
ap = argparse.ArgumentParser(); ap.add_argument('--out', default=os.path.join(ROOT, 'WebDemo/textures/screen4'))
a = ap.parse_args()
o = np.asarray(Image.open(ORIG).convert('RGB')); H, W = o.shape[:2]; y0 = int(Y0 * H)
c = o[y0:].copy()
r4 = np.asarray(Image.open(os.path.join(a.out, 'foreground_water_original_r4.png')).convert('RGB')).copy()
assert r4.shape == c.shape, (r4.shape, c.shape)
hsv = cv2.cvtColor(o, cv2.COLOR_RGB2HSV).astype(int); h, s, v = hsv[..., 0] * 2, hsv[..., 1], hsv[..., 2]
# derive_water_map.py's pink test, widened to her deepest magenta fur at the bottom (brightness 50-110), which the
# original draws where her fur meets the water: without it a dark-magenta fringe stays on the water side of the cut
pink = (((h >= 290) | (h <= 15)) & (((s > 35) & (v > 110)) | ((s > 80) & (v > 50)))).astype(np.uint8)
gold = ((h > 20) & (h < 65) & (s > 90) & (v > 110)).astype(np.uint8)
n, lab, st, _ = cv2.connectedComponentsWithStats(cv2.morphologyEx(pink, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8)))
def score(i):   # her body: the large pink component across the frame's lower middle (not the brushes, not the badges)
    x, y, w, hh, area = st[i]
    return area if (0.1 * W < x + w / 2 < 0.9 * W and y < 0.8 * H < y + hh) else 0
best = max(range(1, n), key=score)
body = (lab == best).astype(np.uint8)
ff = body.copy(); mask = np.zeros((H + 2, W + 2), np.uint8); cv2.floodFill(ff, mask, (0, 0), 1)   # holes: not reached from outside
body = body | (1 - ff)
body = cv2.dilate(body, np.ones((3, 3), np.uint8))
soft = cv2.GaussianBlur(body.astype(np.float32), (0, 0), 1.0)[y0:]
bc = body[y0:].astype(bool)
# the ring R4 filled round her (its 11 px dilation), back to the original's own pixels, away from the coins and buttons
near_body = cv2.dilate(bc.astype(np.uint8), np.ones((11, 11), np.uint8)).astype(bool) & ~bc
other = cv2.dilate(gold[y0:], np.ones((15, 15), np.uint8)).astype(bool)
yy = np.mgrid[0:c.shape[0], 0:W][0] + y0
other |= yy > 0.875 * H   # the power buttons' rows: as R4
ring = near_body & ~other
out = r4.copy(); out[ring] = c[ring]
Image.fromarray(out).save(os.path.join(a.out, 'foreground_water_original_r6.png'))
Image.fromarray(np.clip(soft * 255 + 0.5, 0, 255).astype(np.uint8)).save(os.path.join(a.out, 'foreground_water_original_r6_body.png'))
x0, yb, w, hh, _ = st[best]
info = {'source': os.path.relpath(ORIG, ROOT), 'base': 'foreground_water_original_r4.png', 'y0': y0 / H, 'y1': 1.0, 'size': [W, H - y0],
        'body_bbox_px': [int(x0), int(yb), int(x0 + w), int(yb + hh)], 'body_share': round(float(bc.mean()), 3),
        'ring_restored_share': round(float(ring.mean()), 4)}
json.dump(info, open(os.path.join(a.out, 'foreground_water_original_r6.json'), 'w'), indent=1)
print('wrote', out.shape, info)
