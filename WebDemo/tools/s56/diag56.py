#!/usr/bin/env python3
# s56 (lane s56, session ac4e3449): measures diag56.cjs's frames. For each checkpoint, the `mask` frame (the s56 water drawn flat green)
# gives the EXACT visible water pixels; every other variant of the same frozen frame is measured inside that mask:
#   pale   = light and washed out: HSV saturation < 0.42 and value > 0.70 (includes pure white) -- the user's "pale-white patches"
#   white  = all channels >= 200
#   broad  = pale pixels inside a pale blanket: >= 85 % of the 11 x 11 neighbourhood (at 432 px width; scaled with the frame) is pale
#            (thin crest lines and small splash highlights score ~0, sheets and clouds score high)
#   med    = median colour of the water, sat = mean HSV saturation, V = mean value
#   frame  = the same pale measure over the whole lower frame (y 0.45-1.0), mask or not (catches drops, particles, bloom spill)
#   python3 diag56.py <dir with d56_*.png> [checkpoint ...]
import sys, glob, os
import numpy as np
from PIL import Image
from numpy.lib.stride_tricks import sliding_window_view


def load(p):
    return np.asarray(Image.open(p).convert('RGB')).astype(np.float32)


def hsv(a):
    mx = a.max(-1); mn = a.min(-1)
    return np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0), mx / 255.0


def pale_of(a):
    s, v = hsv(a)
    return (s < 0.42) & (v > 0.70)


def broad_of(pale, w):
    k = max(5, int(round(11 * w / 432)) | 1)
    p = np.pad(pale.astype(np.float32), k // 2)
    # box mean via cumulative sums
    c = p.cumsum(0).cumsum(1); c = np.pad(c, ((1, 0), (1, 0)))
    h, ww = pale.shape
    tot = c[k:k + h, k:k + ww] - c[0:h, k:k + ww] - c[k:k + h, 0:ww] + c[0:h, 0:ww]
    return pale & (tot / (k * k) >= 0.85)


def measure(a, mask):
    h, w, _ = a.shape
    pale = pale_of(a); white = a.min(-1) >= 200; broad = broad_of(pale, w)
    n = max(mask.sum(), 1)
    px = a[mask]; s, v = hsv(px)
    med = np.median(px, 0) if len(px) else np.zeros(3)
    y0 = int(0.45 * h)
    fr = pale[y0:]
    return dict(area=mask.mean(), pale=(pale & mask).sum() / n, white=(white & mask).sum() / n, broad=(broad & mask).sum() / n,
                sat=float(s.mean()) if len(px) else 0, V=float(v.mean()) if len(px) else 0, med='#%02x%02x%02x' % tuple(int(x) for x in med),
                frame=fr.mean(), framebroad=broad[y0:].mean())


def main():
    d = sys.argv[1]
    cps = sys.argv[2:] or sorted({os.path.basename(p).split('_')[1] for p in glob.glob(os.path.join(d, 'd56_*_mask.png'))})
    for cp in cps:
        m = load(os.path.join(d, f'd56_{cp}_mask.png'))
        mask = (m[..., 1] > 140) & (m[..., 0] < 90) & (m[..., 2] < 90)
        print(f'== checkpoint {cp}: water mask {mask.mean() * 100:.1f}% of the frame')
        print(f"{'variant':24s} {'pale%':>6s} {'broad%':>7s} {'white%':>7s} {'sat':>5s} {'V':>5s} {'median':>8s} | {'frame pale%':>11s} {'frame broad%':>12s}")
        for p in sorted(glob.glob(os.path.join(d, f'd56_{cp}_*.png'))):
            tag = os.path.basename(p)[len(f'd56_{cp}_'):-4]
            if tag == 'mask':
                continue
            r = measure(load(p), mask)
            print(f"{tag:24s} {r['pale'] * 100:6.2f} {r['broad'] * 100:7.2f} {r['white'] * 100:7.2f} {r['sat']:5.2f} {r['V']:5.2f} {r['med']:>8s} | {r['frame'] * 100:11.2f} {r['framebroad'] * 100:12.2f}")


if __name__ == '__main__':
    main()
