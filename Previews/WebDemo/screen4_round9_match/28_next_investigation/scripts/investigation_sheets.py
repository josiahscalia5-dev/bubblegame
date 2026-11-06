"""Visual evidence for the investigation (INVESTIGATION ONLY: test tunes and served maps, nothing in the game changed).
  ~/.bubblewash-tools/visual/bin/python investigation_sheets.py <repo> <investigation dir>"""
import os, sys
import cv2, numpy as np
REPO, N = sys.argv[1:3]
sys.path.insert(0, os.path.join(REPO, 'WebDemo', 'tools', 'screen4'))
import layer_metrics as LM  # noqa: E402
ORIG = os.path.join(REPO, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
STEP4 = '/home/user/bw-step4/Previews/WebDemo/screen4_round9_match/27_step4_floor_lift/after_3.0s/base_canvas.png'
if not os.path.exists(STEP4): STEP4 = os.path.join(REPO, 'Previews/WebDemo/screen4_round9_match/27_step4_floor_lift/after_3.0s/base_canvas.png')
R = lambda l: os.path.join(N, 'runs', l, 'base_canvas.png')
def lab(im, t, sub=''):
    h = 62 if sub else 38
    bar = np.full((h, im.shape[1], 3), 255, np.uint8)
    cv2.putText(bar, t, (8, 27), cv2.FONT_HERSHEY_SIMPLEX, 0.72, (20, 20, 20), 2, cv2.LINE_AA)
    if sub: cv2.putText(bar, sub, (8, 52), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (80, 80, 80), 1, cv2.LINE_AA)
    return np.vstack([bar, im])
def sheet(items, name, crop=None, zoom=1.0, rows=1):
    tiles = []
    for t, s, p in items:
        im = LM.load(p) if isinstance(p, str) else p
        if crop: x0, x1, y0, y1 = crop; im = im[int(y0 * LM.H):int(y1 * LM.H), int(x0 * LM.W):int(x1 * LM.W)]
        if zoom != 1: im = cv2.resize(im, None, fx=zoom, fy=zoom, interpolation=cv2.INTER_CUBIC if zoom > 1 else cv2.INTER_AREA)
        tiles.append(lab(im, t, s))
    h = max(t.shape[0] for t in tiles)
    tiles = [np.vstack([t, np.full((h - t.shape[0], t.shape[1], 3), 255, np.uint8)]) for t in tiles]
    per = int(np.ceil(len(tiles) / rows)); lines = []
    for r in range(rows):
        row = tiles[r * per:(r + 1) * per]
        while len(row) < per: row.append(np.full_like(tiles[0], 255))
        out = row[0]
        for t in row[1:]: out = np.hstack([out, np.full((h, 10, 3), 255, np.uint8), t])
        lines.append(out)
    out = lines[0]
    for l in lines[1:]: out = np.vstack([out, np.full((10, out.shape[1], 3), 255, np.uint8), l])
    cv2.imwrite(os.path.join(N, name), cv2.cvtColor(out, cv2.COLOR_RGB2BGR), [cv2.IMWRITE_JPEG_QUALITY, 90])
O = ('ORIGINAL', 'the only target', ORIG); S4 = ('STEP 4 (now)', 'committed 666905c', STEP4)
# 1. the texture derivation, in screen space (each map wrapped back onto the frame; no rendering)
sheet([O, ('SHIPPED MAP', 'whites masked, 6 deg blur', os.path.join(REPO, 'Previews/WebDemo/screen4_round9_match/26_layer_diagnosis/map_stages/B_shipped_map.png')),
       ('FILL-ONLY MAP', "original's own pixels kept", os.path.join(N, 'maps', 'M2_fill_only_whites_kept_wrapped.png'))],
      '01_map_derivation_shipped_vs_fill_only.jpg', crop=(0.08, 0.92, 0.26, 0.66), zoom=1.0)
# 2. the texture in the real 3D scene: upper walls 2x
for name, crop in {'02_walls_texture_2x.jpg': (0.22, 0.66, 0.31, 0.45), '03_core_texture_2x.jpg': (0.30, 0.76, 0.42, 0.58)}.items():
    sheet([O, S4, ('T1 FILL-ONLY MAP', 'served to the game', R('T1_M2')), ('T3 + DUPLICATE WHITES OFF', 'wall flecks, tunnel streaks', R('T3_M2_wallflecks0_streaks0'))],
          name, crop=crop, zoom=2.0, rows=2)
# 3. the bubbles
sheet([O, S4, ('B3: 40 TUNNEL BUBBLES', 'of 160 (test tune)', R('B3_bubbles40')), ('B2: BUBBLE BODY CLEAR', 'body 0 (test tune)', R('B2_bubble_body0'))],
      '04_bubbles_tunnel.jpg', crop=(0.15, 0.85, 0.28, 0.62), zoom=1.0, rows=2)
# 4. the core: the calibration stripes as built and with the rings screen-locked over the bent tube, then the real colours
K = lambda l: os.path.join(N, 'runs', l, 'abl_calib_no_overlays.png')
sheet([('CALIBRATION, AS BUILT', 'stripes every 0.01 W', K('K1_calibration')), ('CALIBRATION, PURE 3D', 'blend off: the stretch stays', K('K2_calib_pure3D')),
       ('CALIBRATION, LOCKED 0.17-0.21', 'R4 test tune', K('K4_calib_blend_0.17_0.21'))], '05_core_calibration_stripes.jpg', crop=(0.22, 0.84, 0.36, 0.62))
sheet([O, S4, ('R4 CORE PLACEMENT', 'centre.r 0.17-0.21 (test)', R('R4_blend_0.17_0.21'))], '06_core_colour_original_vs_now_vs_R4.jpg', crop=(0.22, 0.84, 0.36, 0.62), zoom=1.5)
# 5. where the three investigated corrections lead together (full frames, 767 x 1536 each, half size here)
sheet([O, S4, ('P1: T3 + R4', 'map, whites, core', R('P1_fillmap_noflecks_corefix')), ('P2: P1 + 40 BUBBLES', 'preview only', R('P2_P1_bubbles40'))],
      '07_combined_preview_full_frames.jpg', zoom=0.5)
sheet([O, S4, ('P2 PREVIEW', 'not implemented', R('P2_P1_bubbles40'))], '08_combined_preview_tunnel_1to1.jpg', crop=(0.10, 0.90, 0.26, 0.66))
print('ok')
