"""checkpoint_sheets.py <out dir> <saved 1:2> <now 1:2> <saved phone> <now phone>
Close-ups for the user's seven checkpoints (their VERIFY_CHECKLIST.md), each as one sheet:
  row 1, the 1:2 frame (538 x 1076 game area, DPR 1.5): ORIGINAL | SAVED | NOW;
  row 2, the Pixel 7 frame (412 x 839, whole screen with the HUD): ORIGINAL | SAVED | NOW.
The same box (fractions of the frame) is cut from every frame; the original is the full-resolution approved Screen 4.
Real gameplay captures only (seed 7, Tap to Start then 3.0 s, ?s3=match)."""
import sys, os, cv2, numpy as np

ORIGINAL = 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
BOXES = {   # x0, y0, x1, y1 as fractions of the frame, and the user's "PASS WHEN"
    '01_deep_tunnel_bubbles': ((0.10, 0.22, 0.90, 0.62), 'Bubbles visibly originate within the tunnel and move through near, mid and far depth.'),
    '02_waterline_submersion': ((0.10, 0.64, 0.90, 0.92), 'The lower body is occluded by real-looking, foamy water and splashes on both sides.'),
    '03_vortex_depth': ((0.05, 0.20, 0.95, 0.66), 'Several distinct deep cobalt rings lead to a tight vortex vanishing point at the intended location.'),
    '04_foreground_foam': ((0.00, 0.76, 1.00, 1.00), 'Soft, chunky aqua-white foam dominates the bottom and overlaps objects naturally.'),
    '05_coin_gem_sock_layout': ((0.00, 0.40, 1.00, 0.84), 'At a locked camera, major items align to target screen coordinates and depth layers.'),
    '06_upper_frame': ((0.00, 0.00, 1.00, 0.34), 'Top washer rim / vortex starts at a target-like height without sacrificing HUD readability.'),
    '07_white_rectangle': ((0.15, 0.06, 0.85, 0.30), 'No unintended rectangle remains in actual gameplay; intentional lighting still works.'),
}
CELL_W = 460


def crop(im, b):
    h, w = im.shape[:2]
    c = im[int(b[1] * h):int(b[3] * h), int(b[0] * w):int(b[2] * w)]
    return cv2.resize(c, (CELL_W, int(round(c.shape[0] * CELL_W / c.shape[1]))), interpolation=cv2.INTER_AREA)


def label(im, text, colour):
    bar = np.full((30, im.shape[1], 3), (40, 26, 22), np.uint8)
    cv2.putText(bar, text, (8, 21), cv2.FONT_HERSHEY_SIMPLEX, 0.55, colour, 1, cv2.LINE_AA)
    return np.vstack([bar, im])


def row(ims, names):
    h = max(i.shape[0] for i in ims)
    cells = []
    for im, (n, col) in zip(ims, names):
        im = cv2.resize(im, (CELL_W, h), interpolation=cv2.INTER_AREA) if im.shape[0] != h else im
        cells += [label(im, n, col), np.full((h + 30, 10, 3), 24, np.uint8)]
    return np.hstack(cells[:-1])


out, s12, n12, sph, nph = sys.argv[1:6]
os.makedirs(out, exist_ok=True)
org = cv2.imread(ORIGINAL)
F = {k: cv2.imread(p) for k, p in dict(s12=s12, n12=n12, sph=sph, nph=nph).items()}
CY, PK, WH = (230, 220, 90), (190, 140, 255), (235, 235, 235)
for name, (b, passwhen) in BOXES.items():
    r1 = row([crop(org, b), crop(F['s12'], b), crop(F['n12'], b)],
             [('ORIGINAL (approved)', CY), ('SAVED 1:2 (36c8676)', PK), ('NOW 1:2', WH)])
    r2 = row([crop(org, b), crop(F['sph'], b), crop(F['nph'], b)],
             [('ORIGINAL (approved)', CY), ('SAVED Pixel 7 412x839', PK), ('NOW Pixel 7 412x839', WH)])
    W = max(r1.shape[1], r2.shape[1])
    pad = lambda r: np.hstack([r, np.full((r.shape[0], W - r.shape[1], 3), 24, np.uint8)]) if r.shape[1] < W else r
    head = np.full((62, W, 3), (40, 26, 22), np.uint8)
    cv2.putText(head, 'CHECKPOINT ' + name.replace('_', ' ').upper(), (10, 26), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (255, 255, 255), 2, cv2.LINE_AA)
    cv2.putText(head, 'PASS WHEN: ' + passwhen, (10, 52), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (90, 200, 255), 1, cv2.LINE_AA)
    sheet = np.vstack([head, pad(r1), np.full((12, W, 3), 24, np.uint8), pad(r2)])
    cv2.imwrite(os.path.join(out, f'checkpoint_{name}.jpg'), sheet, [cv2.IMWRITE_JPEG_QUALITY, 90])
    print(name, sheet.shape)
