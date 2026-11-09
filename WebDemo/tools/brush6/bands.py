# brush6 band measure (lane brush6): per 0.02 H row, the share of the art director's colour classes (qa/scripts/brush.py) in the brush
# strips (left x 0-0.16, right x 0.84-1.0), for the approved Scene 6 and any frame (any size: fractions of the frame).
#   python3 bands.py frame.png [frame2.png ...]      (the approved is always printed first)
# Classes: pink (H 300-350, S > .4, V > .5) / white (S < .2, V > .8) / blue (H 195-240, S > .4) / gold (H 30-60, S > .45, V > .55) /
# lav (H 250-300, S .15-.6). A row is printed as pink/white/blue/gold/lav in %.
import sys
import numpy as np
from PIL import Image

A = '/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png'


def hsv(img):
    r, g, b = img[..., 0], img[..., 1], img[..., 2]
    mx, mn = img.max(-1), img.min(-1)
    d = mx - mn
    h = np.zeros_like(mx)
    m = d > 1e-6
    rm = m & (mx == r)
    gm = m & (mx == g) & ~rm
    bm = m & ~rm & ~gm
    h[rm] = ((g - b)[rm] / d[rm]) % 6
    h[gm] = ((b - r)[gm] / d[gm]) + 2
    h[bm] = ((r - g)[bm] / d[bm]) + 4
    return h * 60, np.where(mx > 1e-6, d / np.maximum(mx, 1e-6), 0), mx


def rows(p, x0, x1, y0=0.30, y1=0.78):
    img = np.asarray(Image.open(p).convert('RGB')).astype(np.float32) / 255.
    H, W = img.shape[:2]
    h, s, v = hsv(img)
    out = []
    for fy in np.arange(y0, y1 - 1e-6, 0.02):
        b = (slice(int(fy * H), int((fy + 0.02) * H)), slice(int(x0 * W), int(x1 * W)))
        hh, ss, vv = h[b], s[b], v[b]
        pk = ((hh >= 300) & (hh < 350) & (ss > 0.4) & (vv > 0.5)).mean()
        wt = ((ss < 0.2) & (vv > 0.8)).mean()
        bl = ((hh >= 195) & (hh < 240) & (ss > 0.4)).mean()
        gd = ((hh >= 30) & (hh < 60) & (ss > 0.45) & (vv > 0.55)).mean()
        lv = ((hh >= 250) & (hh < 300) & (ss > 0.15) & (ss < 0.6)).mean()
        out.append((fy, pk, wt, bl, gd, lv))
    return out


if __name__ == '__main__':
    frames = [A] + sys.argv[1:]
    for side, x0, x1 in (('LEFT', 0.0, 0.16), ('RIGHT', 0.84, 1.0)):
        print(f'{side} strip x {x0}-{x1}, rows y: pink/white/blue/gold/lav %')
        R = [rows(p, x0, x1) for p in frames]
        print('   y    ' + ' | '.join(('approved' if i == 0 else f'frame{i}').ljust(19) for i in range(len(frames))))
        for j in range(len(R[0])):
            print(f'  {R[0][j][0]:.2f}  ' + ' | '.join('/'.join(f'{v * 100:3.0f}' for v in r[j][1:]) for r in R))
