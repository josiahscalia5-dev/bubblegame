"""Screen 4 water/tunnel region metrics: the ORIGINAL approved Screen 4 against game frames, and per-layer ablations.

    ~/.bubblewash-tools/visual/bin/python layer_metrics.py --orig <original.jpg> --diag <26_layer_diagnosis dir>

Inputs (from tools/screen4/layer_diag.cjs): <diag>/abl/base_canvas.png (768 x 1536 raw 3D canvas, seed 7, 3.0 s, no steering)
and <diag>/abl/abl_<label>.png (the same frame with one layer group hidden or one post pass off). Everything is resized to
the original's 767 x 1536.

Regions (fractions of width / height) are the user's own four annotated boxes from
Design/ReferencePacks/2026-11-06_Step3_Visual_Review_Pack_from_user/BubbleWash_Approved_vs_Step3_Annotated.png, converted
from that sheet's panel (x 100-600, y 166-1250) to the original, plus a front-water strip under her. Objects (coins, gem,
sock, brushes, the character) are masked out of BOTH images with one union mask: the game's from its own layers
(hide_objects_mascot), the original's from colour (pink, gold, purple) plus a box round its sock; so only water and tunnel
pixels are compared, at the same pixels.

Measures per region (HSV in degrees / 0-1; definitions here, so every number is traceable):
  sat_blue   hue 190-235, s >= 0.50, v >= 0.35       (vivid cobalt / electric blue water)
  turquoise  hue 165-190, s >= 0.30, v >= 0.35
  pale_blue  hue 165-215, 0.12 <= s < 0.50, v >= 0.70 (milky light blue)
  periwinkle hue 215-235, 0.12 <= s < 0.50, v >= 0.70 (pale blue-violet)
  lavender   hue 235-320, s >= 0.08, v >= 0.45        (lilac / violet / pink-violet)
  white      s < 0.12, v >= 0.85
  dark_cobalt hue 200-245, s >= 0.50, v < 0.60
  chroma     mean CIELAB C*;  L*: mean and 5th / 95th percentiles
  detail     std of a difference of Gaussians on L* (sigma 1 - 4 px): fine water texture
  white blobs: connected white pieces >= 6 px: count per 10k px, mean area, median solidity (area / convex hull), median
             elongation (major / minor axis)
  ring breakup (walls only): the image unwrapped round the original's vanishing point (0.528, 0.532 of W, H) into angle x
             log radius; ratio of the detail's variance ALONG each ring to its variance ACROSS rings (high = broken streaks,
             low = smooth even bands)
"""
import argparse
import json
import os

import cv2
import numpy as np
from skimage.color import rgb2lab
from skimage.measure import label, regionprops

W, H = 767, 1536
# the user's annotated boxes: panel x 100..600 -> 0..767, y 166..1250 -> 0..1536
def ubox(x0, x1, y0, y1):
    return ((x0 - 100) / 500, (x1 - 100) / 500, (y0 - 166) / 1084, (y1 - 166) / 1084)
REGIONS = {
    '1_wall_rings': ubox(192, 494, 502, 693),
    '2_distant_core': ubox(237, 489, 643, 825),
    '3_floor_ahead': ubox(187, 533, 827, 965),
    '4_front_splash': ubox(177, 549, 979, 1107),
    '5_front_water': (0.04, 0.96, 0.845, 0.905),
}
VP = (0.528, 0.532)


def load(p):
    im = cv2.cvtColor(cv2.imread(p, cv2.IMREAD_COLOR), cv2.COLOR_BGR2RGB)
    if im.shape[:2] != (H, W):
        im = cv2.resize(im, (W, H), interpolation=cv2.INTER_AREA)
    return im


def hsv(im):
    h = cv2.cvtColor(im, cv2.COLOR_RGB2HSV_FULL).astype(np.float32)
    return h[..., 0] * 360 / 256, h[..., 1] / 255, h[..., 2] / 255


def classes(im):
    h, s, v = hsv(im)
    return {
        'sat_blue': (h >= 190) & (h < 235) & (s >= 0.5) & (v >= 0.35),
        'turquoise': (h >= 165) & (h < 190) & (s >= 0.3) & (v >= 0.35),
        'pale_blue': (h >= 165) & (h < 215) & (s >= 0.12) & (s < 0.5) & (v >= 0.7),
        'periwinkle': (h >= 215) & (h < 235) & (s >= 0.12) & (s < 0.5) & (v >= 0.7),
        'lavender': (h >= 235) & (h < 320) & (s >= 0.08) & (v >= 0.45),
        'white': (s < 0.12) & (v >= 0.85),
        'dark_cobalt': (h >= 200) & (h < 245) & (s >= 0.5) & (v < 0.6),
    }


def orig_object_mask(im):
    h, s, v = hsv(im)
    pink = ((h >= 300) | (h < 20)) & (s > 0.3) & (v > 0.4)
    gold = (h >= 20) & (h < 62) & (s > 0.4) & (v > 0.45)
    gem = (h >= 262) & (h < 300) & (s > 0.4)
    m = pink | gold | gem
    yy, xx = np.mgrid[0:H, 0:W]
    m |= (xx >= 0.64 * W) & (xx <= 0.84 * W) & (yy >= 0.552 * H) & (yy <= 0.662 * H)   # its sock (white, purple)
    m = cv2.dilate(m.astype(np.uint8), np.ones((7, 7), np.uint8)) > 0
    return m


def game_object_mask(base, no_obj):
    d = np.abs(base.astype(int) - no_obj.astype(int)).sum(2) > 24
    return cv2.dilate(d.astype(np.uint8), np.ones((7, 7), np.uint8)) > 0


def rmask(name):
    x0, x1, y0, y1 = REGIONS[name]
    m = np.zeros((H, W), bool)
    m[int(y0 * H):int(y1 * H), int(x0 * W):int(x1 * W)] = True
    return m


def blobs(white, region):
    lab = label(white & region, connectivity=2)
    props = [p for p in regionprops(lab) if p.area >= 6]
    n = region.sum()
    if not props:
        return {'count_per_10k': 0, 'mean_area': 0, 'solidity': None, 'elongation': None}
    sol = [p.solidity for p in props]
    el = [p.major_axis_length / max(p.minor_axis_length, 1) for p in props]
    return {'count_per_10k': round(len(props) / n * 1e4, 2), 'mean_area': round(float(np.mean([p.area for p in props])), 1),
            'solidity': round(float(np.median(sol)), 3), 'elongation': round(float(np.median(el)), 2)}


def polar(Lch, keep, r_frac=(0.1, 0.45), ang=(25, 155), nr=160, na=360):
    """Unwrap round the vanishing point: rows = log radius (r in widths), columns = angle (degrees, 0 = right, up positive)."""
    cx, cy = VP[0] * W, VP[1] * H
    lr = np.linspace(np.log(r_frac[0]), np.log(r_frac[1]), nr)
    th = np.radians(np.linspace(ang[0], ang[1], na))
    R = np.exp(lr)[:, None] * W
    mx = (cx + R * np.cos(th)[None, :]).astype(np.float32)
    my = (cy - R * np.sin(th)[None, :]).astype(np.float32)
    P = cv2.remap(Lch.astype(np.float32), mx, my, cv2.INTER_LINEAR)
    K = cv2.remap(keep.astype(np.float32), mx, my, cv2.INTER_NEAREST) > 0.5
    return P, K


def breakup(L, keep):
    P, K = polar(L, keep)
    det = P - cv2.GaussianBlur(P, (0, 0), 6)   # detail (the slow light/dark removed)
    det = np.where(K, det, np.nan)
    along = np.nanmean(np.nanvar(det, axis=1))   # variance along each ring (angle)
    prof = np.nanmean(det, axis=1)                 # the mean ring profile across radius
    across = np.nanvar(prof)
    return round(float(along / max(across, 1e-6)), 2), P, K


def measure(im, keep):
    lab = rgb2lab(im)
    L = lab[..., 0]
    C = np.hypot(lab[..., 1], lab[..., 2])
    dog = cv2.GaussianBlur(L, (0, 0), 1.0) - cv2.GaussianBlur(L, (0, 0), 4.0)
    cl = classes(im)
    out = {}
    for name in REGIONS:
        r = rmask(name) & keep
        n = max(r.sum(), 1)
        m = {k: round(100 * float((v & r).sum()) / n, 1) for k, v in cl.items()}
        m['chroma'] = round(float(C[r].mean()), 1)
        m['L_mean'] = round(float(L[r].mean()), 1)
        m['L_p5'] = round(float(np.percentile(L[r], 5)), 1)
        m['L_p95'] = round(float(np.percentile(L[r], 95)), 1)
        m['detail'] = round(float(dog[r].std()), 2)
        m['white_blobs'] = blobs(cl['white'], r)
        m['pixels'] = int(n)
        out[name] = m
    b, _, _ = breakup(L, keep)
    out['1_wall_rings']['ring_breakup'] = b
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--orig', required=True)
    ap.add_argument('--diag', required=True)
    a = ap.parse_args()
    D = os.path.join(a.diag, 'abl')
    orig = load(a.orig)
    base = load(os.path.join(D, 'base_canvas.png'))
    no_obj = load(os.path.join(D, 'abl_hide_objects_mascot.png'))
    keep = ~(orig_object_mask(orig) | game_object_mask(base, no_obj))
    np.save(os.path.join(a.diag, 'keep_mask.npy'), keep)
    res = {'definitions': __doc__.split('Measures per region')[1].strip(), 'regions': {k: [round(x, 3) for x in v] for k, v in REGIONS.items()},
           'original': measure(orig, keep), 'game_3.0s': measure(base, keep), 'ablations': {}}
    for f in sorted(os.listdir(D)):
        if not f.startswith('abl_'):
            continue
        im = load(os.path.join(D, f))
        lab = f[4:-4]
        d = np.abs(im.astype(int) - base.astype(int)).sum(2) / 3
        res['ablations'][lab] = {'change': {n: round(float(d[rmask(n)].mean()), 2) for n in REGIONS}, 'metrics': measure(im, keep)}
    with open(os.path.join(a.diag, 'metrics.json'), 'w') as fh:
        json.dump(res, fh, indent=1)
    print('wrote', os.path.join(a.diag, 'metrics.json'))


if __name__ == '__main__':
    main()
