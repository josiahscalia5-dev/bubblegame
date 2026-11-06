"""Step 4 evidence: ORIGINAL | BEFORE (focus, bundle 2619938c) | AFTER (step 4, bundle 73ed2a8b), seed 7, 3.0 s, no steering.
  ~/.bubblewash-tools/visual/bin/python step4_sheets.py <repo> <step dir> <diag dir>"""
import json, os, sys
import cv2, numpy as np
REPO, E, DIAG = sys.argv[1:4]
sys.path.insert(0, os.path.join(REPO, 'WebDemo', 'tools', 'screen4'))
import layer_metrics as LM  # noqa: E402
ORIG = os.path.join(REPO, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
BEFORE = os.path.join(DIAG, 'abl', 'base_canvas.png')
AFTER = os.path.join(E, 'after_3.0s', 'base_canvas.png')
keep = np.load(os.path.join(DIAG, 'keep_mask.npy'))
def lab(im, t, sub=''):
    h = 64 if sub else 40
    bar = np.full((h, im.shape[1], 3), 255, np.uint8)
    cv2.putText(bar, t, (10, 28), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (20, 20, 20), 2, cv2.LINE_AA)
    if sub: cv2.putText(bar, sub, (10, 54), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (70, 70, 70), 1, cv2.LINE_AA)
    return np.vstack([bar, im])
def row(tiles, name, q=92):
    h = max(t.shape[0] for t in tiles)
    tiles = [np.vstack([t, np.full((h - t.shape[0], t.shape[1], 3), 255, np.uint8)]) for t in tiles]
    gap = np.full((h, 10, 3), 255, np.uint8)
    out = tiles[0]
    for t in tiles[1:]: out = np.hstack([out, gap, t])
    cv2.imwrite(os.path.join(E, name), cv2.cvtColor(out, cv2.COLOR_RGB2BGR), [cv2.IMWRITE_JPEG_QUALITY, q])
def boxes(im):
    im = im.copy()
    for (n, (x0, x1, y0, y1)), c in zip(LM.REGIONS.items(), [(230, 170, 0), (240, 110, 0), (40, 180, 80), (150, 80, 220), (0, 160, 230)]):
        cv2.rectangle(im, (int(x0 * LM.W), int(y0 * LM.H)), (int(x1 * LM.W), int(y1 * LM.H)), c, 3)
        cv2.putText(im, n[0], (int(x0 * LM.W) + 6, int(y0 * LM.H) + 28), cv2.FONT_HERSHEY_SIMPLEX, 0.9, c, 2, cv2.LINE_AA)
    return im
def classmap(im):
    cl = LM.classes(im); out = np.full(im.shape, 60, np.uint8)
    for k, c in {'sat_blue': (30, 90, 230), 'turquoise': (0, 200, 200), 'pale_blue': (150, 205, 245), 'periwinkle': (140, 140, 235),
                 'lavender': (205, 130, 225), 'white': (255, 255, 255), 'dark_cobalt': (10, 30, 120)}.items(): out[cl[k]] = c
    out[~keep] = 0
    return out
o, b, a = LM.load(ORIG), LM.load(BEFORE), LM.load(AFTER)
# 1. full frames, every panel 767 x 1536 (1:1)
row([lab(o, 'ORIGINAL (approved)', 'the only target'), lab(b, 'BEFORE: focus, lift 0.55', 'seed 7, 3.0 s, no steering, 3D canvas'),
     lab(a, 'AFTER: step 4, lift 0', 'same frame, same camera')], '01_original_vs_before_vs_after_3.00s_767x1536.jpg')
row([lab(boxes(o), 'ORIGINAL'), lab(boxes(b), 'BEFORE'), lab(boxes(a), 'AFTER')], '02_regions_original_vs_before_vs_after.jpg')
row([lab(classmap(o), 'ORIGINAL', 'colour classes'), lab(classmap(b), 'BEFORE'), lab(classmap(a), 'AFTER')], '03_colour_classes_original_vs_before_vs_after.jpg')
# 2. 2x zooms: the floor ahead and the front splash
for name, (x0, x1, y0, y1) in {'04_zoom_floor_ahead_2x.jpg': (0.18, 0.86, 0.61, 0.74), '05_zoom_front_splash_2x.jpg': (0.12, 0.90, 0.75, 0.87)}.items():
    cr = lambda im: cv2.resize(im[int(y0 * LM.H):int(y1 * LM.H), int(x0 * LM.W):int(x1 * LM.W)], None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
    tiles = [lab(cr(o), 'ORIGINAL'), lab(cr(b), 'BEFORE (lift 0.55)'), lab(cr(a), 'AFTER (lift 0)')]
    cv2.imwrite(os.path.join(E, name), cv2.cvtColor(np.vstack([np.vstack([t, np.full((10, t.shape[1], 3), 255, np.uint8)]) for t in tiles]), cv2.COLOR_RGB2BGR), [cv2.IMWRITE_JPEG_QUALITY, 92])
# 3. Pixel 7 (412 x 839 at 2.625, the whole phone screen with the HUD); the original at its own proportions, same height
pb = cv2.cvtColor(cv2.imread(os.path.join(E, 'pixel7_before_3.00s.png')), cv2.COLOR_BGR2RGB)
pa = cv2.cvtColor(cv2.imread(os.path.join(E, 'pixel7_after_3.00s.png')), cv2.COLOR_BGR2RGB)
H = pb.shape[0]; po = cv2.resize(o, (round(o.shape[1] * H / o.shape[0]), H), interpolation=cv2.INTER_CUBIC)
row([lab(po, 'ORIGINAL', 'its own proportions'), lab(pb, 'BEFORE: Pixel 7', '412 x 839, focus, 3.0 s'), lab(pa, 'AFTER: Pixel 7', 'step 4')], '06_pixel7_original_vs_before_vs_after.jpg', 88)
# 4. measures (layer_metrics definitions), same regions and mask as the diagnosis
M = {'original': LM.measure(o, keep), 'before': LM.measure(b, keep), 'after': LM.measure(a, keep)}
json.dump(M, open(os.path.join(E, 'measured.json'), 'w'), indent=1)
ks = ['sat_blue', 'pale_blue', 'periwinkle', 'lavender', 'white', 'chroma', 'detail', 'L_mean', 'L_p5', 'L_p95']
lines = ['region | measure | original | before | after', '---|---|---|---|---']
for reg in LM.REGIONS:
    for k in ks:
        lines.append(f"{reg} | {k} | {M['original'][reg][k]} | {M['before'][reg][k]} | {M['after'][reg][k]}")
open(os.path.join(E, 'measured.md'), 'w').write('\n'.join(lines) + '\n')
print('\n'.join(l for l in lines if l.split(' | ')[0] in ('3_floor_ahead', '4_front_splash', 'region')))
