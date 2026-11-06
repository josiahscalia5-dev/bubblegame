"""Evidence sheets: full frames side by side (each 767 x 1536 source, labelled) and 1:1 region crops."""
import os, sys
import cv2, numpy as np
diag = sys.argv[1]
sys.path.insert(0, os.path.join(diag, '..', '..', '..', '..', 'WebDemo', 'tools', 'screen4'))
import layer_metrics as LM  # noqa: E402
ORIG = os.path.join(diag, '..', '..', '..', '..', 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
def lab(im, t, h=34):
    bar = np.full((h, im.shape[1], 3), 255, np.uint8)
    cv2.putText(bar, t, (8, h - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.62, (20, 20, 20), 2, cv2.LINE_AA)
    return np.vstack([bar, im])
def boxes(im):
    im = im.copy()
    cols = [(230, 170, 0), (240, 110, 0), (40, 180, 80), (150, 80, 220), (0, 160, 230)]
    for (n, (x0, x1, y0, y1)), c in zip(LM.REGIONS.items(), cols):
        cv2.rectangle(im, (int(x0 * LM.W), int(y0 * LM.H)), (int(x1 * LM.W), int(y1 * LM.H)), c, 3)
        cv2.putText(im, n[0], (int(x0 * LM.W) + 6, int(y0 * LM.H) + 26), cv2.FONT_HERSHEY_SIMPLEX, 0.9, c, 2, cv2.LINE_AA)
    return im
def classmap(im, keep):
    cl = LM.classes(im); out = np.full(im.shape, 60, np.uint8)
    pal = {'sat_blue': (30, 90, 230), 'turquoise': (0, 200, 200), 'pale_blue': (150, 205, 245), 'periwinkle': (140, 140, 235),
           'lavender': (205, 130, 225), 'white': (255, 255, 255), 'dark_cobalt': (10, 30, 120)}
    for k, c in pal.items(): out[cl[k]] = c
    out[~keep] = (0, 0, 0)
    return out
def run(items, name, crop=None, scale=0.5, classes=False):
    keep = np.load(os.path.join(diag, 'keep_mask.npy'))
    tiles = []
    for t, p in items:
        im = LM.load(p)
        if classes: im = classmap(im, keep)
        elif crop is None: im = boxes(im)
        if crop:
            x0, x1, y0, y1 = crop; im = im[int(y0 * LM.H):int(y1 * LM.H), int(x0 * LM.W):int(x1 * LM.W)]
        if scale != 1: im = cv2.resize(im, None, fx=scale, fy=scale, interpolation=cv2.INTER_AREA)
        tiles.append(lab(im, t))
    gap = np.full((tiles[0].shape[0], 8, 3), 255, np.uint8)
    row = tiles[0]
    for t in tiles[1:]: row = np.hstack([row, gap, t])
    cv2.imwrite(os.path.join(diag, name), cv2.cvtColor(row, cv2.COLOR_RGB2BGR), [cv2.IMWRITE_JPEG_QUALITY, 92])
V = lambda l: os.path.join(diag, 'variants', l, 'base_canvas.png')
B = os.path.join(diag, 'abl', 'base_canvas.png')
main = [('ORIGINAL (approved)', ORIG), ('focus now 3.0s', B), ('V1 floor lift off', V('V1_floor_lift0')), ('V3 sharp map+whites', V('V3_rings_sharp_white'))]
run(main, '01_full_original_vs_now_vs_V1_vs_V3.jpg', scale=0.5)
run(main, '02_colour_classes_original_vs_now_vs_V1_vs_V3.jpg', scale=0.5, classes=True)
for n, (x0, x1, y0, y1) in LM.REGIONS.items():
    run(main, f'03_crop_{n}.jpg', crop=(max(0, x0 - 0.04), min(1, x1 + 0.04), max(0, y0 - 0.02), min(1, y1 + 0.02)), scale=1)
abl = [('focus now', B), ('hide lqFloor', os.path.join(diag, 'abl', 'abl_hide_lqFloor.png')), ('hide tunnel bubbles', os.path.join(diag, 'abl', 'abl_hide_mwTunnelBubbles.png')),
       ('hide all overlays', os.path.join(diag, 'abl', 'abl_hide_all_overlays.png')), ('all post off', os.path.join(diag, 'abl', 'abl_post_all_off.png')), ('hide heroSwell', os.path.join(diag, 'abl', 'abl_hide_heroSwell.png'))]
run(abl, '04_layer_ablations.jpg', scale=0.4)
print('ok')
