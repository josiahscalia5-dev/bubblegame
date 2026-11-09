#!/usr/bin/env python3
# s56 water A/B measures (lane s56, session d847dce2) for ab56.cjs's frames (canvas only, no HUD) and the approved references.
#   python3 ab56.py <dir> [checkpoint ...]          -> one table per checkpoint (variants of ab_<z>_*.png inside the exact water mask)
#   python3 ab56.py --ref <image> [<image> ...]     -> the same classes in the water band of any frame (reference or game screenshot)
# Water mask: the `mask` variant (the s56 water drawn pure green, bubbles / drops / particles hidden) = the visible water pixels.
# Classes (per pixel, HSV): pale = S < 0.35 and V > 0.75 (the coordinator's measure: light, washed-out, includes white);
#   broad = pale pixels inside a pale blanket (>= 85 % of the 11 x 11 neighbourhood at 432 px width, scaled): sheets / clouds score high,
#   thin crest lines and small splash highlights ~0; white = all channels >= 200; cob = hue 205-235 S > 0.45 V > 0.3;
#   cyan = hue 175-205 S > 0.4 V > 0.4; ultra = hue 235-262 S > 0.45 V > 0.3 (violet-blue); sat / V = means; med = median colour.
#   foot = pixels that differ from `full` by > 24 in any channel (the variant's footprint), % of the frame.
# --ref band: y 0.56-0.78 x 0.05-0.95 (Scene 5's water between the banks and the caption; the game's frames use the same band), only
#   water-class pixels (blue hue 175-262 with S > 0.25, or pale); the hero's pink, gold and violet are excluded.
import sys, glob, os
import numpy as np
from PIL import Image


def load(p):
    return np.asarray(Image.open(p).convert('RGB')).astype(np.float32)


def hsv(a):
    mx = a.max(-1); mn = a.min(-1); d = mx - mn
    s = np.where(mx > 0, d / np.maximum(mx, 1e-6), 0); v = mx / 255.0
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    h = np.zeros_like(mx); m = d > 1e-6
    rm = m & (mx == r); gm = m & (mx == g) & ~rm; bm = m & ~rm & ~gm
    h[rm] = (60 * ((g - b)[rm] / d[rm])) % 360; h[gm] = 60 * ((b - r)[gm] / d[gm]) + 120; h[bm] = 60 * ((r - g)[bm] / d[bm]) + 240
    return h, s, v


def boxmean(x, k):
    p = np.pad(x.astype(np.float32), k // 2); c = np.pad(p.cumsum(0).cumsum(1), ((1, 0), (1, 0)))
    h, w = x.shape
    return (c[k:k + h, k:k + w] - c[0:h, k:k + w] - c[k:k + h, 0:w] + c[0:h, 0:w]) / (k * k)


def classes(a, mask):
    h, s, v = hsv(a); H, W = mask.shape
    pale = (s < 0.35) & (v > 0.75)
    broad = pale & (boxmean(pale, max(5, int(round(11 * W / 432)) | 1)) >= 0.85)
    n = max(int(mask.sum()), 1)
    f = lambda x: 100.0 * (x & mask).sum() / n
    med = np.median(a[mask], 0) if mask.any() else np.zeros(3)
    return dict(pale=f(pale), broad=f(broad), white=f(a.min(-1) >= 200), cob=f((h >= 205) & (h < 235) & (s > 0.45) & (v > 0.3)),
                cyan=f((h >= 175) & (h < 205) & (s > 0.4) & (v > 0.4)), ultra=f((h >= 235) & (h < 262) & (s > 0.45) & (v > 0.3)),
                sat=float(s[mask].mean()) if mask.any() else 0, V=float(v[mask].mean()) if mask.any() else 0, med='#%02x%02x%02x' % tuple(int(x) for x in med))


def band_mask(a, y0=0.56, y1=0.78, x0=0.05, x1=0.95):
    H, W, _ = a.shape; h, s, v = hsv(a)
    m = np.zeros((H, W), bool); m[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)] = True
    return m & ((((h >= 175) & (h < 262)) & (s > 0.25)) | ((s < 0.35) & (v > 0.75)))


HDR = f"{'variant':22s} {'pale%':>6s} {'broad%':>7s} {'white%':>7s} {'cob%':>6s} {'cyan%':>6s} {'ultra%':>7s} {'sat':>5s} {'V':>5s} {'median':>8s} {'foot%':>6s}"


def row(tag, c, foot=None):
    return f"{tag:22s} {c['pale']:6.2f} {c['broad']:7.2f} {c['white']:7.2f} {c['cob']:6.1f} {c['cyan']:6.1f} {c['ultra']:7.1f} {c['sat']:5.2f} {c['V']:5.2f} {c['med']:>8s} " + (f"{foot:6.2f}" if foot is not None else '      ')


if __name__ == '__main__':
    if sys.argv[1] == '--ref':
        print(HDR.replace('foot%', 'mask%'))
        for p in sys.argv[2:]:
            a = load(p); m = band_mask(a); print(row(os.path.basename(p)[:22], classes(a, m), 100.0 * m.mean()))
        sys.exit()
    d = sys.argv[1]; zs = sys.argv[2:] or sorted({os.path.basename(p).split('_')[1] for p in glob.glob(os.path.join(d, 'ab_*_mask.png'))})
    for z in zs:
        mk = load(os.path.join(d, f'ab_{z}_mask.png')); mask = (mk[..., 1] > 200) & (mk[..., 0] < 70) & (mk[..., 2] < 70)
        full = load(os.path.join(d, f'ab_{z}_full.png'))
        print(f'== checkpoint {z}: water mask {100 * mask.mean():.1f} % of the frame'); print(HDR)
        for p in sorted(glob.glob(os.path.join(d, f'ab_{z}_*.png')), key=lambda p: (not p.endswith('_full.png'), p)):
            tag = os.path.basename(p)[len(f'ab_{z}_'):-4]
            if tag == 'mask': continue
            a = load(p); foot = 100.0 * (np.abs(a - full).max(-1) > 24).mean()
            print(row(tag, classes(a, mask), foot))
        bm = band_mask(full); print(row('(band, full)', classes(full, bm), 100.0 * bm.mean()))
