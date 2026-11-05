"""Object boxes by colour: gold (coins), magenta-purple (gem), pink (fur), from the Art Director's HSV classes.
   python objects.py frame.png [frame2.png ...]   -> connected components as fractions of the frame (x/W, y/H)"""
import sys, numpy as np
from PIL import Image
from scipy import ndimage as ndi


def hsv(rgb):
    a = rgb.astype(np.float32) / 255.0
    mx, mn = a.max(-1), a.min(-1); v = mx; s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]; d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, np.where(mx == g, 60 * ((b - r) / d) + 120, 60 * ((r - g) / d) + 240))
    return h, s, v

def comps(mask, minfrac, W, H, close=3):
    mask = ndi.binary_closing(mask, iterations=close); mask = ndi.binary_fill_holes(mask)
    lab, n = ndi.label(mask); out = []
    for i, sl in enumerate(ndi.find_objects(lab), 1):
        area = (lab[sl] == i).sum()
        if area < minfrac * W * H: continue
        ys, xs = sl
        out.append(dict(x0=xs.start / W, x1=xs.stop / W, y0=ys.start / H, y1=ys.stop / H, area=area / (W * H)))
    return sorted(out, key=lambda o: -o['area'])

if __name__ == '__main__':
    for p in sys.argv[1:]:
        im = np.asarray(Image.open(p).convert('RGB')); H, W = im.shape[:2]
        h, s, v = hsv(im)
        gold = (h >= 28) & (h < 62) & (s > 0.45) & (v > 0.55)
        gem = (h >= 270) & (h < 310) & (s > 0.45) & (v > 0.45)
        print('==', p, W, H)
        for name, m, mf in (('gold', gold, 0.0008), ('gem/purple', gem, 0.0004)):
            for o in comps(m, mf, W, H):
                print(f"  {name:10s} x {o['x0']:.3f}-{o['x1']:.3f} y {o['y0']:.3f}-{o['y1']:.3f}  ctr ({(o['x0']+o['x1'])/2:.3f}, {(o['y0']+o['y1'])/2:.3f})  w {o['x1']-o['x0']:.3f}W h {(o['y1']-o['y0'])*H/W:.3f}W  area {o['area']*100:.2f}%")
