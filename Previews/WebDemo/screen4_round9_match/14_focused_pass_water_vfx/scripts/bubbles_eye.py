"""The ORIGINAL's free soap bubbles, counted by eye on 2x and 3x gridded tiles of the full-resolution original (767 x 1536)
and listed here as (x, y, radius) in frame fractions (radius in frame widths). Counted by the zones of bubbles.py /
bubble_probe.cjs (round the vanishing point 0.528, 0.532: centre r < 0.12 W, mid 0.12-0.30, walls >= 0.30 with y < 0.70,
front y >= 0.70; the HUD above y 0.20 left out) and sizes (small < 0.012 W, medium 0.012-0.03, large >= 0.03). The glossy
domes inside the foam bank are foam, not free bubbles, and are not listed; nor are the many tiny white flecks, crescents
and rings along the bands (they are counted as small white shapes by specks.py).
    python bubbles_eye.py <overlay.png>
Why by eye: an automatic ring detector (bubbles.py) is unreliable on the painted original: strict settings miss most
bubbles and take the coin and the sock for bubbles; loose ones find hundreds of false rings in the white flecks."""
import sys
import numpy as np
from PIL import Image, ImageDraw
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
VP = (0.528, 0.532)
EYE = [(0.155, 0.225, 0.050), (0.270, 0.355, 0.035), (0.565, 0.370, 0.032), (0.720, 0.330, 0.070), (0.975, 0.360, 0.030),
       (0.448, 0.452, 0.008), (0.462, 0.458, 0.007), (0.455, 0.446, 0.006), (0.365, 0.384, 0.009), (0.390, 0.376, 0.008),
       (0.195, 0.693, 0.040), (0.075, 0.675, 0.020), (0.080, 0.748, 0.065)]


def zone(x, y):
    if y >= 0.70: return 'front'
    r = np.hypot(x - VP[0], (y - VP[1]) * 2.0)
    return 'centre' if r < 0.12 else 'mid' if r < 0.30 else 'walls'


Z = {'centre': 0, 'mid': 0, 'walls': 0, 'front': 0}; S = {'small': 0, 'medium': 0, 'large': 0}
for x, y, r in EYE:
    if y < 0.20: continue
    Z[zone(x, y)] += 1; S['small' if r < 0.012 else 'medium' if r < 0.03 else 'large'] += 1
print(f'original (by eye, bubbles_eye.py): {len(EYE)} free bubbles: zones {Z} sizes {S}')
if len(sys.argv) > 1:
    im = Image.open(APP).convert('RGB'); W, H = im.size; d = ImageDraw.Draw(im)
    for x, y, r in EYE: d.ellipse(((x - r) * W, y * H - r * W, (x + r) * W, y * H + r * W), outline=(255, 255, 0), width=3)
    for rz in (0.12, 0.30): d.ellipse(((VP[0] - rz) * W, VP[1] * H - rz * W, (VP[0] + rz) * W, VP[1] * H + rz * W), outline=(160, 160, 160), width=1)
    im.save(sys.argv[1])
