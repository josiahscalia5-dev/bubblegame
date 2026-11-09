#!/usr/bin/env python3
# s56 (lane s56, session ac4e3449): measures diag56.cjs's frames. For each checkpoint, the `mask` frame (the s56 water drawn flat green)
# gives the EXACT visible water pixels; every other variant of the same frozen frame is measured inside that mask:
#   pale   = light and washed out: HSV saturation < 0.42 and value > 0.70 (includes pure white) -- the user's "pale-white patches"
#   white  = all channels >= 200
#   broad  = pale pixels inside a pale blanket: >= 85 % of the 11 x 11 neighbourhood (at 432 px width; scaled with the frame) is pale
#            (thin crest lines and small splash highlights score ~0, sheets and clouds score high)
#   med    = median colour of the water, sat = mean HSV saturation, V = mean value
#   frame  = the same pale measure over the whole lower frame (y 0.45-1.0), mask or not (catches drops, particles, bloom spill)
#   cyan / cob / ultra / adpale = the art director's classes (_evidence/qa/scripts/measure.py): hue 175-205 S>0.4 V>0.4 / 205-235 S>0.45
#            V>0.3 / 235-262 S>0.45 V>0.3 / S<0.18 V>0.85, here inside the exact water mask
#   python3 diag56.py <dir with d56_*.png> [checkpoint ...]
#   python3 diag56.py --band S5|S6 <image> ...   the art director's water band (S5 y 1000-1200, S6 y 1150-1300 of 864x1536), same classes
import sys, glob, os
import numpy as np
from PIL import Image
from numpy.lib.stride_tricks import sliding_window_view


def load(p):
    return np.asarray(Image.open(p).convert('RGB')).astype(np.float32)


def hsv(a):
    mx = a.max(-1); mn = a.min(-1)
    return np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0), mx / 255.0


def hue(a):
    r, g, b = a[..., 0], a[..., 1], a[..., 2]; mx = a.max(-1); mn = a.min(-1); d = mx - mn
    h = np.zeros_like(mx); m = d > 1e-6
    rm = m & (mx == r); gm = m & (mx == g) & ~rm; bm = m & ~rm & ~gm
    h[rm] = (60 * ((g - b)[rm] / d[rm])) % 360; h[gm] = 60 * ((b - r)[gm] / d[gm]) + 120; h[bm] = 60 * ((r - g)[bm] / d[bm]) + 240
    return h


def ad_classes(px):
    h = hue(px); s, v = hsv(px); n = max(len(h), 1)
    return dict(cyan=((h >= 175) & (h < 205) & (s > 0.4) & (v > 0.4)).sum() / n, cob=((h >= 205) & (h < 235) & (s > 0.45) & (v > 0.3)).sum() / n,
                ultra=((h >= 235) & (h < 262) & (s > 0.45) & (v > 0.3)).sum() / n, adpale=((s < 0.18) & (v > 0.85)).sum() / n)


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
    ad = ad_classes(px) if len(px) else dict(cyan=0, cob=0, ultra=0, adpale=0)
    return dict(**ad, area=mask.mean(), pale=(pale & mask).sum() / n, white=(white & mask).sum() / n, broad=(broad & mask).sum() / n,
                sat=float(s.mean()) if len(px) else 0, V=float(v.mean()) if len(px) else 0, med='#%02x%02x%02x' % tuple(int(x) for x in med),
                frame=fr.mean(), framebroad=broad[y0:].mean())


def band(which, paths):
    y0, y1 = (1000, 1200) if which == 'S5' else (1150, 1300)
    for p in paths:
        a = np.asarray(Image.open(p).convert('RGB').resize((864, 1536), Image.LANCZOS)).astype(np.float32)
        z = a[y0:y1].reshape(-1, 3); c = ad_classes(z); pale = pale_of(a[y0:y1]); br = broad_of(pale, 864)
        print(f"{os.path.basename(p):40s} {which} band: cyan {c['cyan']*100:5.1f} cob {c['cob']*100:5.1f} ultra {c['ultra']*100:5.1f} ADpale {c['adpale']*100:5.1f} | pale {pale.mean()*100:5.1f} broad {br.mean()*100:5.1f}")


def main():
    if sys.argv[1] == '--band':
        return band(sys.argv[2], sys.argv[3:])
    d = sys.argv[1]
    cps = sys.argv[2:] or sorted({os.path.basename(p).split('_')[1] for p in glob.glob(os.path.join(d, 'd56_*_mask.png'))})
    for cp in cps:
        m = load(os.path.join(d, f'd56_{cp}_mask.png'))
        mask = (m[..., 1] > 140) & (m[..., 0] < 90) & (m[..., 2] < 90)
        print(f'== checkpoint {cp}: water mask {mask.mean() * 100:.1f}% of the frame')
        print(f"{'variant':24s} {'pale%':>6s} {'broad%':>7s} {'white%':>7s} {'sat':>5s} {'V':>5s} {'median':>8s} | {'frame pale%':>11s} {'frame broad%':>12s} | {'cyan':>5s} {'cob':>5s} {'ultra':>5s} {'ADpale':>6s}")
        for p in sorted(glob.glob(os.path.join(d, f'd56_{cp}_*.png'))):
            tag = os.path.basename(p)[len(f'd56_{cp}_'):-4]
            if tag == 'mask':
                continue
            r = measure(load(p), mask)
            print(f"{tag:24s} {r['pale'] * 100:6.2f} {r['broad'] * 100:7.2f} {r['white'] * 100:7.2f} {r['sat']:5.2f} {r['V']:5.2f} {r['med']:>8s} | {r['frame'] * 100:11.2f} {r['framebroad'] * 100:12.2f} | {r['cyan']*100:5.1f} {r['cob']*100:5.1f} {r['ultra']*100:5.1f} {r['adpale']*100:6.1f}")


if __name__ == '__main__':
    main()
