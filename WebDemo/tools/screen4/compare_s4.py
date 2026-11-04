"""Automated visual comparison: the approved Screen 4 against real gameplay frames captured with Playwright.

    /opt/bw-venv/bin/python compare_s4.py --approved <approved.jpg> --out <dir> [--name sheet] label=frame.png ...

It needs OpenCV and scikit-image (the user's cloud environment; in a session without them: python3 -m venv /opt/bw-venv &&
/opt/bw-venv/bin/pip install opencv-python-headless scikit-image). Frames are 538 x 1076 game captures (#stage, HUD
included); the approved picture is scaled to the same size. Only the play area is compared (between the top HUD and the
bottom buttons, PLAY below), so the HUD, which is the same in both, does not flatter the scores.

What it measures, for each frame:
  - features: how much of the play area each of the approved picture's ingredients covers (white foam and splash, pink
    hero and brushes, gold paw coins, purple gem, turquoise water, deep blue tunnel, pale milky blue), in which ninth of
    the picture, and how well the places match (correlation of the blurred masks, 1.0 = same places);
  - regions: colour difference (CIEDE2000 between mean colours), SSIM and edge correlation for the same regions as
    tools/screen3/s4_regions.py;
  - a colour-difference heat map (CIEDE2000 per pixel after a blur, so it shows areas, not pixel noise).
Writes <out>/<name>.png (sheet: approved, frame, heat map, and each feature's mask, approved in green and the game in
magenta, white where both), <out>/<name>.json and <out>/<name>.md (tables, and the largest differences in words).
"""
import argparse
import json
import os

import cv2
import numpy as np
from skimage.color import deltaE_ciede2000, rgb2lab
from skimage.metrics import structural_similarity

W, H = 538, 1076
PLAY = (0.18, 0.83)   # the play area's top and bottom (fractions of the height): below the sock panel, above the buttons
# HSV ranges (OpenCV: hue 0-179, saturation and value 0-255)
FEATURES = {
    'white foam and splash': lambda h, s, v: (s < 50) & (v > 205),
    'pink (hero, brushes)': lambda h, s, v: ((h >= 140) | (h <= 4)) & (s > 80) & (v > 110),
    'gold (paw coins)': lambda h, s, v: (h >= 12) & (h <= 32) & (s > 110) & (v > 150),
    'purple (gem)': lambda h, s, v: (h >= 125) & (h < 140) & (s > 140) & (v > 90),
    'turquoise water': lambda h, s, v: (h >= 80) & (h <= 98) & (s > 90) & (v > 140),
    'deep blue tunnel': lambda h, s, v: (h >= 100) & (h <= 128) & (s > 110) & (v > 60) & (v < 215),
    'pale milky blue': lambda h, s, v: (h >= 95) & (h <= 128) & (s >= 40) & (s <= 110) & (v > 170),
}
REGIONS = {'upper tunnel': (0, 190, 538, 420), 'left side': (0, 420, 180, 860), 'right side': (358, 420, 538, 860),
           'centre (depth)': (180, 420, 358, 600), 'lower (water, mascot)': (130, 600, 408, 880)}


def load(path):
    im = cv2.imread(path, cv2.IMREAD_COLOR)
    if im is None:
        raise SystemExit('cannot read ' + path)
    return cv2.resize(im, (W, H), interpolation=cv2.INTER_AREA)


def masks(bgr):
    hsv = cv2.cvtColor(bgr, cv2.COLOR_BGR2HSV)
    h, s, v = (hsv[..., i].astype(np.int32) for i in range(3))
    return {k: f(h, s, v) for k, f in FEATURES.items()}


def play_slice():
    return slice(int(PLAY[0] * H), int(PLAY[1] * H))


def ninths(mask):
    """Coverage (%) in a 3 x 3 grid over the play area: rows top, middle, bottom; columns left, centre, right."""
    m = mask[play_slice()]
    rh, cw = m.shape[0] // 3, m.shape[1] // 3
    return [[round(100 * float(m[r * rh:(r + 1) * rh, c * cw:(c + 1) * cw].mean()), 1) for c in range(3)] for r in range(3)]


def place_match(a, b):
    """Correlation of the two masks after a wide blur (do they sit in the same places?)."""
    pa, pb = (cv2.GaussianBlur(m[play_slice()].astype(np.float32), (0, 0), 14) for m in (a, b))
    if pa.std() < 1e-6 or pb.std() < 1e-6:
        return None
    return round(float(np.corrcoef(pa.ravel(), pb.ravel())[0, 1]), 3)


def lab(bgr):
    return rgb2lab(cv2.cvtColor(bgr, cv2.COLOR_BGR2RGB).astype(np.float64) / 255.0)


def region_scores(a, b):
    out = {}
    for name, (x0, y0, x1, y1) in REGIONS.items():
        ra, rb = a[y0:y1, x0:x1], b[y0:y1, x0:x1]
        la, lb = lab(ra).reshape(-1, 3).mean(0), lab(rb).reshape(-1, 3).mean(0)
        de = float(deltaE_ciede2000(la[None, :], lb[None, :])[0])
        ga, gb = (cv2.resize(cv2.cvtColor(r, cv2.COLOR_BGR2GRAY), None, fx=0.5, fy=0.5, interpolation=cv2.INTER_AREA) for r in (ra, rb))
        ss = float(structural_similarity(ga, gb, data_range=255))
        ea, eb = (cv2.GaussianBlur(cv2.Canny(g, 60, 140).astype(np.float32), (0, 0), 2) for g in (ga, gb))
        ec = float(np.corrcoef(ea.ravel(), eb.ravel())[0, 1]) if ea.std() > 0 and eb.std() > 0 else 0.0
        out[name] = {'colour_dE2000': round(de, 1), 'ssim': round(ss, 3), 'edges': round(ec, 3),
                     'approved_rgb': [int(x) for x in ra.reshape(-1, 3).mean(0)[::-1]], 'game_rgb': [int(x) for x in rb.reshape(-1, 3).mean(0)[::-1]]}
    return out


def heat(a, b):
    sa, sb = (cv2.GaussianBlur(cv2.resize(x, (W // 4, H // 4), interpolation=cv2.INTER_AREA), (0, 0), 2) for x in (a, b))
    d = deltaE_ciede2000(lab(sa), lab(sb))
    img = cv2.applyColorMap(np.clip(d * 255 / 40, 0, 255).astype(np.uint8), cv2.COLORMAP_INFERNO)
    return cv2.resize(img, (W, H), interpolation=cv2.INTER_CUBIC), d


def overlay(ma, mb, base):
    g = cv2.cvtColor(cv2.cvtColor(base, cv2.COLOR_BGR2GRAY), cv2.COLOR_GRAY2BGR) // 4
    out = g.copy()
    out[ma & ~mb] = (90, 230, 60)      # approved only: green
    out[mb & ~ma] = (230, 60, 230)     # game only: magenta
    out[ma & mb] = (255, 255, 255)     # both: white
    return out


def label(img, text, scale=0.9):
    img = img.copy()
    cv2.rectangle(img, (0, 0), (img.shape[1], 34), (25, 20, 30), -1)
    cv2.putText(img, text, (8, 24), cv2.FONT_HERSHEY_SIMPLEX, scale * 0.62, (255, 255, 255), 1, cv2.LINE_AA)
    return img


def describe(feats):
    """The largest differences in words, biggest first."""
    lines = []
    for k, f in feats.items():
        d = f['game_pct'] - f['approved_pct']
        if abs(d) >= 1.5:
            lines.append((abs(d), f"{k}: {'more' if d > 0 else 'less'} than approved ({f['game_pct']}% of the play area against {f['approved_pct']}%)"))
    return [t for _, t in sorted(lines, reverse=True)]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--approved', required=True)
    ap.add_argument('--out', required=True)
    ap.add_argument('--name', default='compare')
    ap.add_argument('frames', nargs='+')
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)
    A = load(a.approved)
    MA = masks(A)
    report = {'approved': a.approved, 'play_area': PLAY, 'frames': {}}
    rows = []
    for spec in a.frames:
        lab_, path = spec.split('=', 1)
        B = load(path)
        MB = masks(B)
        feats = {}
        for k in FEATURES:
            pa, pb = 100 * float(MA[k][play_slice()].mean()), 100 * float(MB[k][play_slice()].mean())
            feats[k] = {'approved_pct': round(pa, 1), 'game_pct': round(pb, 1), 'place_match': place_match(MA[k], MB[k]),
                        'approved_ninths': ninths(MA[k]), 'game_ninths': ninths(MB[k])}
        hm, d = heat(A, B)
        ps = slice(int(PLAY[0] * H) // 4, int(PLAY[1] * H) // 4)
        regions = region_scores(A, B)
        report['frames'][lab_] = {'file': path, 'features': feats, 'regions': regions, 'mean_dE2000_play': round(float(d[ps].mean()), 1),
                                  'differences': describe(feats)}
        panels = [label(A, 'APPROVED Screen 4'), label(B, 'GAME: ' + lab_), label(hm, 'colour difference (bright = far)')]
        small = [label(cv2.resize(overlay(MA[k], MB[k], B), (W // 2, H // 2)), k[:24], 0.75) for k in FEATURES]
        grid = np.full((H, W, 3), 25, np.uint8)
        for i, p in enumerate(small[:4]):
            grid[(i // 2) * (H // 2):(i // 2 + 1) * (H // 2), (i % 2) * (W // 2):(i % 2 + 1) * (W // 2)] = p
        grid2 = np.full((H, W, 3), 25, np.uint8)
        for i, p in enumerate(small[4:]):
            grid2[(i // 2) * (H // 2):(i // 2 + 1) * (H // 2), (i % 2) * (W // 2):(i % 2 + 1) * (W // 2)] = p
        cv2.putText(grid2, 'green: approved only', (W // 2 + 12, H // 2 + 60), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (90, 230, 60), 1, cv2.LINE_AA)
        cv2.putText(grid2, 'magenta: game only', (W // 2 + 12, H // 2 + 90), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (230, 60, 230), 1, cv2.LINE_AA)
        cv2.putText(grid2, 'white: both', (W // 2 + 12, H // 2 + 120), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (255, 255, 255), 1, cv2.LINE_AA)
        rows.append(np.hstack([*panels, grid, grid2]))
    sheet = np.vstack(rows)
    if sheet.shape[1] > 2400:
        sheet = cv2.resize(sheet, (2400, int(sheet.shape[0] * 2400 / sheet.shape[1])), interpolation=cv2.INTER_AREA)
    cv2.imwrite(os.path.join(a.out, a.name + '.png'), sheet)
    with open(os.path.join(a.out, a.name + '.json'), 'w') as f:
        json.dump(report, f, indent=1)
    md = [f"# {a.name}: approved Screen 4 against game frames", '', f"Play area compared: {PLAY[0]:.2f}–{PLAY[1]:.2f} of the height.", '']
    labels = list(report['frames'])
    md += ['| Feature (% of the play area; place match) | Approved | ' + ' | '.join(labels) + ' |', '|---|---|' + '---|' * len(labels)]
    for k in FEATURES:
        cells = [f"{report['frames'][l]['features'][k]['game_pct']}% ({report['frames'][l]['features'][k]['place_match']})" for l in labels]
        md.append(f"| {k} | {report['frames'][labels[0]]['features'][k]['approved_pct']}% | " + ' | '.join(cells) + ' |')
    md += ['', '| Region: colour ΔE2000 / SSIM / edges | ' + ' | '.join(labels) + ' |', '|---|' + '---|' * len(labels)]
    for r in REGIONS:
        md.append(f"| {r} | " + ' | '.join(f"{report['frames'][l]['regions'][r]['colour_dE2000']} / {report['frames'][l]['regions'][r]['ssim']} / {report['frames'][l]['regions'][r]['edges']}" for l in labels) + ' |')
    md.append('| mean ΔE2000 per pixel, play area | ' + ' | '.join(str(report['frames'][l]['mean_dE2000_play']) for l in labels) + ' |')
    for l in labels:
        md += ['', f"**{l}, largest differences:**", ''] + [f"- {t}" for t in report['frames'][l]['differences']]
    with open(os.path.join(a.out, a.name + '.md'), 'w') as f:
        f.write('\n'.join(md) + '\n')
    print('\n'.join(md))


if __name__ == '__main__':
    main()
