"""The warm (rainbow) band's radius: the share of warm samples (hue under 70 or over 290 degrees, saturation over 0.08) on
circles round the vanishing point, angles 30-150 degrees (the upper sector), every 3 degrees, radius in widths. Frames resized
to 538 x 1076; the approved round (0.528, 0.532), game frames round (0.53, 0.53).
Usage: $BW_PY warm_radius.py label=frame.png ..."""
import sys, colorsys, numpy as np
from PIL import Image
W, H = 538, 1076
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
for tag, p, vp in [('approved', APP, (0.528, 0.532))] + [(a.split('=', 1)[0], a.split('=', 1)[1], (0.53, 0.53)) for a in sys.argv[1:]]:
    im = np.asarray(Image.open(p).convert('RGB').resize((W, H), Image.LANCZOS)).astype(float)
    out = []
    for r in np.arange(0.10, 0.40, 0.02):
        n = w = 0
        for a in range(30, 151, 3):
            t = np.radians(a); x = vp[0] * W + np.cos(t) * r * W; y = vp[1] * H - np.sin(t) * r * W
            h, s, v = colorsys.rgb_to_hsv(*(im[int(y), int(x)] / 255)); n += 1
            if (h * 360 < 70 or h * 360 > 290) and s > 0.08: w += 1
        out.append('%.2f:%2d%%' % (r, 100 * w // n))
    print(f'{tag:9s}', ' '.join(out))
