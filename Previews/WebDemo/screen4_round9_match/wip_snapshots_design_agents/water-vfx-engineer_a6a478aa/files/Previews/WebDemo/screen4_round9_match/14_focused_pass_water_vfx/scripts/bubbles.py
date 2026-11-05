"""Soap-bubble counter for Screen 4 frames, by zone round the vanishing point.
    python bubbles.py <overlay-dir> label=path[@vx,vy] ...      (path APP = the original; VP defaults 0.528,0.532 / 0.53,0.53)
A soap bubble is a thin bright outline round a darker see-through inside. Every frame is resized to the original's
767 x 1536. For each radius (4 .. 64 px) and each of 12 sectors round the circle, the luminance on the outline (r +- 12%)
is compared with the inside (0.45-0.75 r) and the outside (just beyond the outline, to 1.4 r) in the same sector; a bubble
needs an outline brighter than both by CONTRAST (0.03) in at least MINSEC (10) of the 12 sectors. That rejects filled white
specks and flecks (bright inside) and the tunnel's ring arcs and streaks (arcs of much bigger circles: they fail across the
band). Peaks are kept greedily, strongest first, none closer than the larger radius. Masked: the HUD (y < 0.20; game frames
also the bottom buttons, y > 0.835 outside x .33-.67, and y > 0.885; the original's buttons, y > 0.875).
Zones (distance from the vanishing point in frame widths; y in frame fractions):
  centre r < 0.12 | mid 0.12-0.30 | walls r >= 0.30, y < 0.70 | front y >= 0.70
Sizes (radius in frame widths): small < 0.012 (9 px at 767), medium 0.012-0.03, large >= 0.03.
Writes <overlay-dir>/bubbles_<label>.png (yellow small, cyan medium, magenta large; the zone limits in grey) so the count can
be checked by eye. It is a detector: it misses bubbles over white foam and can take a round gap in foam for one."""
import sys, os
import numpy as np, cv2
from PIL import Image
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
W, H = 767, 1536
RADII = [4, 5, 6, 7, 8, 10, 12, 14, 17, 20, 24, 28, 33, 39, 46, 54, 64]
NSEC, MINSEC = 12, int(os.environ.get('MINSEC', 10))
CONTRAST = float(os.environ.get('CONTRAST', 0.03))


def detect(im, approved):
    a = np.asarray(im.convert('RGB').resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
    lum = 0.2126 * a[..., 0] + 0.7152 * a[..., 1] + 0.0722 * a[..., 2]
    yy, xx = np.mgrid[0:H, 0:W]
    mask = yy > 0.20 * H
    if approved: mask &= yy < 0.875 * H
    else: mask &= ~((yy > 0.835 * H) & ~((xx > 0.33 * W) & (xx < 0.67 * W))) & (yy < 0.885 * H)
    cands = []
    for r in RADII:
        w = max(1.0, 0.12 * r)
        s0 = int(np.ceil(1.5 * r)) + 4; y, x = np.mgrid[-s0:s0 + 1, -s0:s0 + 1]; d = np.hypot(x, y); ang = np.arctan2(y, x)
        good = np.zeros_like(lum); score = np.zeros_like(lum)
        for sct in range(NSEC):
            a0 = -np.pi + 2 * np.pi * sct / NSEC; sec = (ang >= a0) & (ang < a0 + 2 * np.pi / NSEC)
            def K(m):
                k = (m & sec).astype(np.float32); return k / max(k.sum(), 1)
            lr = cv2.filter2D(lum, -1, K((d >= r - w) & (d <= r + w)))
            li = cv2.filter2D(lum, -1, K((d >= 0.45 * r) & (d <= max(0.75 * r, r - w - 1.5))))
            lo = cv2.filter2D(lum, -1, K((d >= r + w + 1.5) & (d <= max(1.4 * r, r + w + 3))))
            c = lr - np.maximum(li, lo)
            good += (c > CONTRAST).astype(np.float32); score += c
        score /= NSEC
        ok = (good >= MINSEC) & mask
        mxs = cv2.dilate(np.where(ok, score, -1).astype(np.float32), np.ones((2 * max(2, r // 2) + 1,) * 2, np.uint8))
        ys, xs = np.nonzero(ok & (score >= mxs))
        for yv, xv in zip(ys, xs): cands.append((score[yv, xv] * (1 + 0.02 * r), xv, yv, r))
    cands.sort(reverse=True); kept = []
    for sc, xv, yv, r in cands:
        if all(np.hypot(xv - k[1], yv - k[2]) > max(r, k[3]) for k in kept): kept.append((sc, xv, yv, r))
    return a, kept


def zone(x, y, vp):
    if y / H >= 0.70: return 'front'
    rr = np.hypot(x / W - vp[0], (y / H - vp[1]) * H / W)
    return 'centre' if rr < 0.12 else 'mid' if rr < 0.30 else 'walls'


def size(r):
    f = r / W; return 'small' if f < 0.012 else 'medium' if f < 0.03 else 'large'


if __name__ == '__main__':
    out = sys.argv[1]; os.makedirs(out, exist_ok=True)
    ZS, SS = ['centre', 'mid', 'walls', 'front'], ['small', 'medium', 'large']
    print(f"{'frame':14s} " + ' '.join(f'{z:>7s}' for z in ZS) + ' | ' + ' '.join(f'{s:>6s}' for s in SS) + ' | total' + f'   (bubbles.py, MINSEC {MINSEC}, CONTRAST {CONTRAST})')
    for arg in sys.argv[2:]:
        lab, p = arg.split('=', 1); vp = None
        if '@' in p: p, v = p.split('@'); vp = tuple(float(t) for t in v.split(','))
        appr = p == 'APP'
        vp = vp or ((0.528, 0.532) if appr else (0.53, 0.53))
        a, kept = detect(Image.open(APP if appr else p), appr)
        cz = {z: 0 for z in ZS}; cs = {s: 0 for s in SS}
        ov = (a * 255).astype(np.uint8)[..., ::-1].copy()
        for rz in (0.12, 0.30):
            cv2.circle(ov, (int(vp[0] * W), int(vp[1] * H)), int(rz * W), (150, 150, 150), 1)
        cv2.line(ov, (0, int(0.70 * H)), (W, int(0.70 * H)), (150, 150, 150), 1)
        for sc, x, y, r in kept:
            cz[zone(x, y, vp)] += 1; s = size(r); cs[s] += 1
            col = {'small': (0, 255, 255), 'medium': (255, 255, 0), 'large': (255, 0, 255)}[s]
            cv2.circle(ov, (int(x), int(y)), int(r), col, 2)
        cv2.imwrite(os.path.join(out, f'bubbles_{lab}.png'), ov)
        print(f"{lab:14s} " + ' '.join(f'{cz[z]:7d}' for z in ZS) + ' | ' + ' '.join(f'{cs[s]:6d}' for s in SS) + f' | {len(kept)}')
