"""Where the moving frame's white comes from (diagnostic only, fifteenth session).

    python white_trace.py <uv frame> <face-solo frame> <full frame> <face texture.png>

Per face pixel in the band (y 0.80-0.97): the texel it samples (from the coordinate probe), the texture's colour there,
the face drawn alone with the real texture (bloom off), and the full frame. White = saturation < 0.12 and value > 0.88
(band.py's class). Prints the white share of each, split by the texel's kind (the original's own water / a filled hole)."""
import sys, numpy as np, cv2
from PIL import Image
uvp, solop, fullp, texp = sys.argv[1:5]
L = lambda p: np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.NEAREST))
uv, solo, full = L(uvp).astype(float), L(solop), L(fullp)
tex = np.asarray(Image.open(texp).convert('RGB')); TH, TW = tex.shape[:2]
r, g, b = uv[..., 0], uv[..., 1], uv[..., 2]
face = (r + g + b) > 30; band = np.zeros_like(face); band[int(0.80 * 1536):int(0.97 * 1536)] = True
# her pink and the coins out (as band.py)
hsv = cv2.cvtColor(full, cv2.COLOR_RGB2HSV).astype(float); h, s = hsv[..., 0] * 2, hsv[..., 1] / 255
keep = ~((((h >= 290) | (h <= 15)) & (s > 0.3)) | ((h > 20) & (h < 65) & (s > 0.35)))
yy, xx = np.mgrid[0:1536, 0:767]; keep &= ~((yy / 1536 > 0.885) & ((xx / 767 < 0.37) | (xx / 767 > 0.66)))
m = face & band & keep
ty = np.clip(np.round(g / 255 * (TH - 1)).astype(int), 0, TH - 1); tx = np.clip(np.round(r / 255 * (TW - 1)).astype(int), 0, TW - 1)
samp = tex[ty, tx]
def white(a):
    hv = cv2.cvtColor(a.astype(np.uint8).reshape(-1, 1, 3), cv2.COLOR_RGB2HSV).reshape(a.shape).astype(float)
    return (hv[..., 1] / 255 < 0.12) & (hv[..., 2] / 255 > 0.88)
real = b < 64; fill = (b >= 64) & (b < 192)
for name, sel in [('all face', m), ('original own water', m & real), ('filled hole', m & fill)]:
    n = sel.sum()
    print(f'{name:20s} {n / m.sum() * 100:5.1f} % of the face | white: texel sampled {white(samp)[sel].mean() * 100:5.1f} % | '
          f'face drawn alone {white(solo)[sel].mean() * 100:5.1f} % | full frame {white(full)[sel].mean() * 100:5.1f} %')
