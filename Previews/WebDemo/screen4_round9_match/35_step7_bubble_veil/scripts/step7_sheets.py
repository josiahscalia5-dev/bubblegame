"""Step 7 (the bubble veil) evidence sheets: ORIGINAL | STEP 6 (before) | STEP 7 (after) at the same scene positions, seed 7,
no steering, 3, 4, 5 and 6 s after the tap (she is fully inside the tunnel at all four; at 8 s the course has looped back to the
washing machine), at the 1:2 frame (767 x 1536, raw 3D canvas) and on a Pixel 7 screen (412 x 839, the page with the HUD); a 2x
zoom of the tunnel; the measures. The original is one moment: it is the target beside every pair.
  ~/.bubblewash-tools/visual/bin/python step7_sheets.py"""
import json, os, sys
import cv2, numpy as np
E = '/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/35_step7_bubble_veil'
sys.path.insert(0, '/home/user/bubblegame/WebDemo/tools/screen4')
import layer_metrics as LM  # noqa: E402
ORIG = '/home/user/bubblegame/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
T = ['3.0', '4.0', '5.0', '6.0']
o = LM.load(ORIG)
def lab(im, t, sub=''):
    bar = np.full((64, im.shape[1], 3), 255, np.uint8)
    cv2.putText(bar, t, (8, 28), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (20, 20, 20), 2, cv2.LINE_AA)
    if sub: cv2.putText(bar, sub, (8, 54), cv2.FONT_HERSHEY_SIMPLEX, 0.52, (80, 80, 80), 1, cv2.LINE_AA)
    return np.vstack([bar, im])
def hcat(ts, gap=10):
    h = max(t.shape[0] for t in ts); ts = [np.vstack([t, np.full((h - t.shape[0], t.shape[1], 3), 255, np.uint8)]) for t in ts]
    out = ts[0]
    for t in ts[1:]: out = np.hstack([out, np.full((h, gap, 3), 255, np.uint8), t])
    return out
def vcat(ts, gap=12):
    w = max(t.shape[1] for t in ts); ts = [np.hstack([t, np.full((t.shape[0], w - t.shape[1], 3), 255, np.uint8)]) for t in ts]
    out = ts[0]
    for t in ts[1:]: out = np.vstack([out, np.full((gap, w, 3), 255, np.uint8), t])
    return out
save = lambda im, n, q=88: cv2.imwrite(os.path.join(E, n), cv2.cvtColor(im, cv2.COLOR_RGB2BGR), [cv2.IMWRITE_JPEG_QUALITY, q])
rd = lambda p: cv2.cvtColor(cv2.imread(p), cv2.COLOR_BGR2RGB)
before = lambda t: LM.load(f'{E}/inventory/T{t}/base_canvas.png')
after = lambda t: LM.load(f'{E}/frames/step7_T{t}/base_canvas.png')
# 1. the 1:2 frame at each position (raw 3D canvas, 767 x 1536)
for t in T:
    save(hcat([lab(o, 'ORIGINAL (approved)', 'the only target'), lab(before(t), f'STEP 6 (before)  {t} s after the tap', 'seed 7, no steering'),
               lab(after(t), f'STEP 7 (after)  {t} s', 'same position, same camera')]), f'10_original_vs_step6_vs_step7_T{t}_767x1536.jpg')
# 2. Pixel 7 (the page with the HUD) at each position, in one sheet
H = 900
rs = lambda x: cv2.resize(x, (round(x.shape[1] * H / x.shape[0]), H), interpolation=cv2.INTER_AREA)
po = rs(rd(ORIG))
rows = []
for t in T:
    b, a = rd(f'{E}/frames/step6_pixel7_T{t}/base_page.png'), rd(f'{E}/frames/step7_pixel7_T{t}/base_page.png')
    rows.append(hcat([lab(po, 'ORIGINAL'), lab(rs(b), f'STEP 6  {t} s', 'Pixel 7, 412 x 839'), lab(rs(a), f'STEP 7  {t} s', 'same position')]))
save(vcat(rows[:2]), '11_pixel7_original_vs_step6_vs_step7_T3.0_T4.0.jpg', 86)
save(vcat(rows[2:]), '11_pixel7_original_vs_step6_vs_step7_T5.0_T6.0.jpg', 86)
# 3. the tunnel enlarged 2x (x 0.18-0.86, y 0.30-0.66) at 3.0 s, and at 1.4x at the other positions
x0, x1, y0, y1 = 0.18, 0.86, 0.30, 0.66
cr = lambda im, f: cv2.resize(im[int(y0 * LM.H):int(y1 * LM.H), int(x0 * LM.W):int(x1 * LM.W)], None, fx=f, fy=f, interpolation=cv2.INTER_CUBIC)
save(hcat([lab(cr(o, 2), 'ORIGINAL'), lab(cr(before('3.0'), 2), 'STEP 6  3.0 s'), lab(cr(after('3.0'), 2), 'STEP 7  3.0 s')]), '12_zoom_tunnel_T3.0_2x.jpg')
# 4. measures
def satblue(im):
    h = cv2.cvtColor(im, cv2.COLOR_RGB2HSV_FULL).astype(float); Hh = h[..., 0] * 360 / 256; S = h[..., 1] / 255; V = h[..., 2] / 255
    return (Hh >= 190) & (Hh <= 235) & (S >= 0.5) & (V >= 0.35)
box = lambda im: im[int(0.25 * LM.H):int(0.70 * LM.H), int(0.05 * LM.W):int(0.95 * LM.W)]
keep = np.load('/home/user/bubblegame/Previews/WebDemo/screen4_round9_match/26_layer_diagnosis/keep_mask.npy')
M = {'tunnel_box_sat_blue': {t: {'step6': round(float(satblue(box(before(t))).mean() * 100), 1), 'step7': round(float(satblue(box(after(t))).mean() * 100), 1)} for t in T}}
M['T3.0_regions'] = {n: LM.measure(im, keep) for n, im in (('original', o), ('step6', before('3.0')), ('step7', after('3.0')))}
json.dump(M, open(f'{E}/measured.json', 'w'), indent=1)
ks = ['sat_blue', 'pale_blue', 'periwinkle', 'lavender', 'white', 'chroma', 'detail']
lines = ['## The tunnel box (x 0.05-0.95, y 0.25-0.70; objects included): saturated blue %', '', 'T after the tap | step 6 | step 7', '---|---|---']
lines += [f'{t} s | {v["step6"]} | {v["step7"]}' for t, v in M['tunnel_box_sat_blue'].items()]
lines += ['', '## Seed 7, 3.0 s, the masked regions (layer_metrics.py)', '', 'region | build | ' + ' | '.join(ks) + ' | white pieces /10k / mean px', '---|---|' + '---|' * (len(ks) + 1)]
for reg in LM.REGIONS:
    for s, m in M['T3.0_regions'].items():
        r = m[reg]; b_ = r['white_blobs']
        lines.append(f'{reg} | {s} | ' + ' | '.join(str(r[k]) for k in ks) + f" | {b_['count_per_10k']} / {b_['mean_area']}")
open(f'{E}/measured.md', 'w').write('\n'.join(lines) + '\n')
print('ok')
