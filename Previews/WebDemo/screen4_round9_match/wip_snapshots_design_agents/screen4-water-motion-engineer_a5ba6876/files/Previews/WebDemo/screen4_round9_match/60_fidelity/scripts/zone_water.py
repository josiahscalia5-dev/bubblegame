"""Water by zone (diagnostic only, sixteenth session): the tunnel's water and the foreground water, original vs game.

    python zone_water.py label=frame.png ...   (the ORIGINAL first, automatically; frames resized to 767 x 1536)

Zones (shares of the frame): TUNNEL x 0.32-0.68, y 0.22-0.52 (the rings round the centre, clear of the side brushes);
FOREGROUND y 0.72-0.97, the full width (her pink, gold and the HUD buttons' corners left out). Classes (HSV, h in degrees):
  cobalt     h 205-235, s >= 0.60, v 0.45-0.92  (the saturated deep blue)
  turquoise  h 180-204, s >= 0.45, v > 0.55
  pale       h 185-235, s 0.12-0.45, v > 0.75   (icy pale blue)
  white      s < 0.12, v > 0.88
  lavender   h 236-290, s > 0.12, v > 0.5      (periwinkle / lavender)
  rainbow    h 20-180 or 290-345, s > 0.15, not gold  (pastel non-blue tints in the water)
and the mean saturation and the local contrast: the mean standard deviation of luminance in 15 x 15 px windows (low = soft,
"cloudy"; the original is the reference)."""
import sys, numpy as np, cv2
from PIL import Image
ORIG = '/home/user/bubblegame/.claude/worktrees/agent-a5ba6876e8752066d/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
def zone(a, name):
    H, W = 1536, 767
    if name == 'TUNNEL': y0, y1, x0, x1 = 0.22, 0.52, 0.32, 0.68
    else: y0, y1, x0, x1 = 0.72, 0.97, 0.0, 1.0
    z = a[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)]
    hsv = cv2.cvtColor(z, cv2.COLOR_RGB2HSV).astype(float); h, s, v = hsv[..., 0] * 2, hsv[..., 1] / 255, hsv[..., 2] / 255
    gold = (h > 20) & (h < 65) & (s > 0.35); pink = ((h >= 290) | (h <= 15)) & (s > 0.3)
    keep = ~(gold | pink)
    if name == 'FOREGROUND':
        yy, xx = np.mgrid[0:z.shape[0], 0:z.shape[1]]; yy = yy / H + y0; xx = xx / W
        keep &= ~((yy > 0.885) & ((xx < 0.37) | (xx > 0.66)))
    L = cv2.cvtColor(z, cv2.COLOR_RGB2GRAY).astype(float)
    m1 = cv2.blur(L, (15, 15)); m2 = cv2.blur(L * L, (15, 15)); sd = np.sqrt(np.maximum(m2 - m1 * m1, 0))
    k = keep
    r = {'cobalt': ((h >= 205) & (h <= 235) & (s >= 0.6) & (v >= 0.45) & (v <= 0.92))[k].mean(),
         'turq': ((h >= 180) & (h < 205) & (s >= 0.45) & (v > 0.55))[k].mean(),
         'pale': ((h >= 185) & (h <= 235) & (s >= 0.12) & (s < 0.45) & (v > 0.75))[k].mean(),
         'white': ((s < 0.12) & (v > 0.88))[k].mean(),
         'lav': ((h > 235) & (h < 290) & (s > 0.12) & (v > 0.5))[k].mean(),
         'rainbow': ((((h >= 20) & (h < 180)) | ((h > 290) & (h <= 345))) & (s > 0.15) & ~gold)[k].mean(),
         'sat': s[k].mean(), 'contrast': sd[k].mean()}
    return r
rows = [('ORIGINAL', ORIG)] + [x.split('=', 1) for x in sys.argv[1:]]
for name in ('TUNNEL', 'FOREGROUND'):
    print(f'\n{name} | cobalt | turquoise | pale | white | lavender | rainbow | mean sat | local contrast')
    print('|---|---|---|---|---|---|---|---|---|')
    for lab, p in rows:
        a = np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS))
        r = zone(a, name)
        print(f"| {lab} | {r['cobalt'] * 100:.1f} % | {r['turq'] * 100:.1f} | {r['pale'] * 100:.1f} | {r['white'] * 100:.1f} | {r['lav'] * 100:.1f} | {r['rainbow'] * 100:.1f} | {r['sat']:.2f} | {r['contrast']:.1f} |")
