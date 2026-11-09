# env6 (session ddf175f2): clean, isolated reference images of the approved Screen 6's missing scenery assets, for image-to-3D
# generation (Tripo / Ludo.ai). Each asset is cut from the EXACT approved image with OpenCV GrabCut (a rectangle plus hand-placed
# sure-background / sure-foreground hints), put on a plain light background (no water, coins, enemies, mascot, UI), and upscaled 2.5x.
# The roller brush is cut by the frame's edge in the approved image: its visible half is mirrored about its axis (it is round).
#   ~/.bubblewash-tools/visual/bin/python isolate_refs.py <out dir>
import sys, os, json
import numpy as np, cv2
APP = '/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png'
OUT = sys.argv[1]; os.makedirs(OUT, exist_ok=True)
img = cv2.imread(APP)  # BGR, 864x1536
assert img.shape[:2] == (1536, 864), img.shape
BG = (236, 232, 234)  # plain light neutral (BGR)

# name: crop box (x0, y0, x1, y1) in approved pixels, GrabCut rect inside the crop, sure-bg and sure-fg rectangles (approved pixels)
ASSETS = {
  '01_roller_brush_machine': dict(box=(0, 505, 196, 1105), rect=(0, 512, 192, 1100),
      bg=[(72, 505, 196, 600), (118, 600, 196, 640), (150, 505, 196, 700), (160, 700, 196, 760), (185, 1000, 196, 1105), (120, 1080, 196, 1105)],
      fg=[(0, 540, 60, 600), (0, 640, 100, 700), (0, 760, 120, 840), (0, 860, 140, 920), (0, 940, 140, 1000), (0, 1010, 140, 1080)],
      mirror_x=0),
  '02_glowing_glass_tank': dict(box=(706, 440, 860, 705), rect=(714, 455, 852, 700),
      bg=[(706, 600, 730, 705), (706, 440, 745, 500), (706, 500, 728, 600)], fg=[(750, 560, 820, 640), (735, 525, 835, 548)]),
  '03_pink_star_drum_housing': dict(box=(620, 640, 790, 830), rect=(628, 648, 785, 825),
      bg=[(748, 760, 790, 830), (770, 700, 790, 760), (760, 640, 790, 700), (620, 640, 638, 720)], fg=[(650, 720, 740, 790), (700, 700, 760, 720)]),
  '04_control_box_glowing_screen': dict(box=(84, 495, 214, 705), rect=(90, 505, 208, 698),
      bg=[(84, 495, 96, 705), (200, 495, 214, 560)], fg=[(105, 525, 170, 570), (115, 630, 190, 680)]),
  '05_overhead_brass_lamp_and_pipe': dict(box=(368, 318, 652, 545), rect=(376, 326, 648, 540), key='brass',
      bg=[(368, 450, 470, 545), (368, 318, 382, 545)], fg=[(400, 340, 470, 420), (500, 380, 560, 400), (610, 450, 640, 520)]),
}
meta = {}
for name, A in ASSETS.items():
    x0, y0, x1, y1 = A['box']; crop = img[y0:y1, x0:x1].copy()
    mask = np.full(crop.shape[:2], cv2.GC_BGD, np.uint8)
    rx0, ry0, rx1, ry1 = A['rect']; mask[ry0 - y0:ry1 - y0, rx0 - x0:rx1 - x0] = cv2.GC_PR_FGD
    for (a, b, c, d) in A.get('bg', []): mask[max(b - y0, 0):max(d - y0, 0), max(a - x0, 0):max(c - x0, 0)] = cv2.GC_BGD
    for (a, b, c, d) in A.get('fg', []): mask[max(b - y0, 0):max(d - y0, 0), max(a - x0, 0):max(c - x0, 0)] = cv2.GC_FGD
    if A.get('key') == 'brass':   # brass / gold and the lamp's hot glow keyed by colour (GrabCut confuses brass with the violet perforated wall)
        hsv = cv2.cvtColor(crop, cv2.COLOR_BGR2HSV); H, S_, V = hsv[..., 0].astype(int), hsv[..., 1].astype(int), hsv[..., 2].astype(int)
        m = (((H >= 5) & (H <= 32) & (S_ >= 90) & (V >= 90)) | ((V >= 235) & (H <= 40))).astype(np.uint8) * 255
        m = cv2.morphologyEx(m, cv2.MORPH_OPEN, np.ones((3, 3), np.uint8)); m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((9, 9), np.uint8))
        for (a, b, c, d) in A.get('bg', []): m[max(b - y0, 0):max(d - y0, 0), max(a - x0, 0):max(c - x0, 0)] = 0
    else:
        bgm, fgm = np.zeros((1, 65), np.float64), np.zeros((1, 65), np.float64)
        cv2.grabCut(crop, mask, None, bgm, fgm, 8, cv2.GC_INIT_WITH_MASK)
        m = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 255, 0).astype(np.uint8)
    # keep the largest connected part (and parts touching it), close small holes, soften the edge 1 px
    n, lab, st, _ = cv2.connectedComponentsWithStats(m, 8)
    if n > 1: keep = 1 + int(np.argmax(st[1:, cv2.CC_STAT_AREA])); m = np.where(lab == keep, 255, 0).astype(np.uint8)
    m = cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8))
    a = cv2.GaussianBlur(m, (3, 3), 0).astype(np.float32)[..., None] / 255.0
    out = (crop.astype(np.float32) * a + np.array(BG, np.float32) * (1 - a)).astype(np.uint8)
    rgba = np.dstack([crop, m])
    if 'mirror_x' in A:   # the visible half mirrored about the brush axis (x = mirror_x in approved pixels, at the crop's left edge)
        out = np.concatenate([out[:, ::-1], out], axis=1); rgba = np.concatenate([rgba[:, ::-1], rgba], axis=1)
    # pad to a square with margin, upscale 2.5x (Lanczos) for the generators
    h, w = out.shape[:2]; S = int(max(h, w) * 1.12)
    sq = np.full((S, S, 3), BG, np.uint8); sq[(S - h) // 2:(S - h) // 2 + h, (S - w) // 2:(S - w) // 2 + w] = out
    sqa = np.zeros((S, S, 4), np.uint8); sqa[(S - h) // 2:(S - h) // 2 + h, (S - w) // 2:(S - w) // 2 + w] = rgba
    k = 2.5; big = cv2.resize(sq, (int(S * k), int(S * k)), interpolation=cv2.INTER_LANCZOS4)
    biga = cv2.resize(sqa, (int(S * k), int(S * k)), interpolation=cv2.INTER_LANCZOS4)
    cv2.imwrite(os.path.join(OUT, name + '.png'), big)
    cv2.imwrite(os.path.join(OUT, name + '_alpha.png'), biga)
    cv2.imwrite(os.path.join(OUT, name + '_rawcrop.png'), crop)
    meta[name] = dict(approved_box_px=A['box'], approved_box_frac=[round(A['box'][0] / 864, 3), round(A['box'][1] / 1536, 3), round(A['box'][2] / 864, 3), round(A['box'][3] / 1536, 3)],
                      out_px=[int(S * k), int(S * k)], mirrored='mirror_x' in A, fg_share=round(float((m > 0).mean()), 3))
json.dump(meta, open(os.path.join(OUT, 'refs.json'), 'w'), indent=1)
# contact sheet
tiles = [cv2.resize(cv2.imread(os.path.join(OUT, n + '.png')), (360, 360)) for n in ASSETS]
raws = [cv2.resize(cv2.imread(os.path.join(OUT, n + '_rawcrop.png')), (360, 360)) for n in ASSETS]
sheet = np.vstack([np.hstack(raws), np.hstack(tiles)]); cv2.imwrite(os.path.join(OUT, '00_refs_sheet.png'), sheet)
print(json.dumps(meta, indent=1))
