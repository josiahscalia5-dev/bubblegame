"""Evidence sheets for one step: ORIGINAL | BEFORE | AFTER at the seed 7, 3.0 s no-steering frame (full and zoomed zones),
the layer isolation of both builds, and the moving-game moments (Pixel 7 page shots, the same seeded swiped run).
  ~/.bubblewash-tools/visual/bin/python step_sheets.py <repo> <step dir> <before hero canvas> <before layers dir> <label before> <label after>"""
import json, os, sys
import cv2, numpy as np
REPO, E, BH, BL, LB, LA = sys.argv[1:7]
sys.path.insert(0, os.path.join(REPO, 'WebDemo', 'tools', 'screen4'))
import layer_metrics as LM  # noqa: E402
ORIG = os.path.join(REPO, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
keep = np.load(os.path.join(REPO, 'Previews/WebDemo/screen4_round9_match/26_layer_diagnosis/keep_mask.npy'))
def lab(im, t, sub='', w=None):
    h = 62 if sub else 38
    bar = np.full((h, im.shape[1], 3), 255, np.uint8)
    cv2.putText(bar, t, (8, 27), cv2.FONT_HERSHEY_SIMPLEX, 0.72, (20, 20, 20), 2, cv2.LINE_AA)
    if sub: cv2.putText(bar, sub, (8, 52), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (80, 80, 80), 1, cv2.LINE_AA)
    return np.vstack([bar, im])
def hcat(ts, gap=10):
    h = max(t.shape[0] for t in ts); ts = [np.vstack([t, np.full((h - t.shape[0], t.shape[1], 3), 255, np.uint8)]) for t in ts]
    out = ts[0]
    for t in ts[1:]: out = np.hstack([out, np.full((h, gap, 3), 255, np.uint8), t])
    return out
def vcat(ts, gap=10):
    w = max(t.shape[1] for t in ts); ts = [np.hstack([t, np.full((t.shape[0], w - t.shape[1], 3), 255, np.uint8)]) for t in ts]
    out = ts[0]
    for t in ts[1:]: out = np.vstack([out, np.full((gap, w, 3), 255, np.uint8), t])
    return out
save = lambda im, n, q=90: cv2.imwrite(os.path.join(E, n), cv2.cvtColor(im, cv2.COLOR_RGB2BGR), [cv2.IMWRITE_JPEG_QUALITY, q])
o, b, a = LM.load(ORIG), LM.load(BH), LM.load(os.path.join(E, 'hero_after', 'base_canvas.png'))
# 1. full frames 767 x 1536 each
save(hcat([lab(o, 'ORIGINAL (approved)', 'the only target'), lab(b, LB, 'seed 7, 3.0 s, no steering'), lab(a, LA, 'same frame, same camera')]), '10_original_vs_before_vs_after_3.0s_767x1536.jpg')
# 2. zoomed zones, 2x
Z = {'tunnel_centre': (0.28, 0.78, 0.43, 0.61), 'wall_bands': (0.18, 0.80, 0.30, 0.45), 'floor_ahead': (0.17, 0.87, 0.60, 0.74), 'front_water': (0.04, 0.96, 0.75, 0.905)}
for k, (x0, x1, y0, y1) in Z.items():
    cr = lambda im: cv2.resize(im[int(y0 * LM.H):int(y1 * LM.H), int(x0 * LM.W):int(x1 * LM.W)], None, fx=2, fy=2, interpolation=cv2.INTER_CUBIC)
    save(vcat([lab(cr(o), 'ORIGINAL'), lab(cr(b), LB), lab(cr(a), LA)]), f'11_zoom_{k}_2x.jpg')
# 3. layer isolation (both builds): full, walls only, floor only, front splash only, bubbles/VFX only
L = [('FULL', 'base_canvas.png'), ('WALLS ONLY', 'abl_only_walls.png'), ('FLOOR ONLY', 'abl_only_floor.png'), ('FRONT SPLASH ONLY', 'abl_only_front_splash.png'), ('BUBBLES / VFX ONLY', 'abl_only_bubbles_vfx.png')]
rows = []
for name, d in [(LB, BL), (LA, os.path.join(E, 'layers_after'))]:
    rows.append(hcat([lab(cv2.resize(LM.load(os.path.join(d, f)), None, fx=0.34, fy=0.34, interpolation=cv2.INTER_AREA), t, name) for t, f in L]))
save(vcat([hcat([lab(cv2.resize(o, None, fx=0.34, fy=0.34, interpolation=cv2.INTER_AREA), 'ORIGINAL')])] + rows), '12_layer_isolation_before_after.jpg')
# 4. motion moments (Pixel 7 page shots, the same seeded swiped run)
T = ['5.0', '5.5', '6.5', '7.7', '9.0']
po = cv2.resize(o, (round(767 * 1102 / 1536), 1102), interpolation=cv2.INTER_AREA)
for t in T:
    pb = cv2.cvtColor(cv2.imread(os.path.join(E, 'motion', 'before_pixel7', f't{t}_page.png')), cv2.COLOR_BGR2RGB)
    pa = cv2.cvtColor(cv2.imread(os.path.join(E, 'motion', 'after_pixel7', f't{t}_page.png')), cv2.COLOR_BGR2RGB)
    pb, pa = [cv2.resize(x, (round(x.shape[1] * 1102 / x.shape[0]), 1102), interpolation=cv2.INTER_AREA) for x in (pb, pa)]
    save(hcat([lab(po, 'ORIGINAL', 'composition guide'), lab(pb, f'{LB}  video {t} s', 'Pixel 7, seed 7, real swipes'), lab(pa, f'{LA}  video {t} s', 'the same run')]), f'13_motion_t{t}_pixel7.jpg', 86)
# 5. measures: hero frame zones and each motion moment's zones (1:2 canvas)
M = {'hero_3.0s': {'original': LM.measure(o, keep), 'before': LM.measure(b, keep), 'after': LM.measure(a, keep)}}
nokeep = np.ones_like(keep)
for t in T:
    M[f'motion_{t}'] = {s: LM.measure(LM.load(os.path.join(E, 'motion', f'{s}_1to2', f't{t}_canvas.png')), nokeep) for s in ('before', 'after')}
json.dump(M, open(os.path.join(E, 'measured.json'), 'w'), indent=1)
ks = ['sat_blue', 'pale_blue', 'periwinkle', 'lavender', 'white', 'chroma', 'detail']
lines = ['frame | region | ' + ' | '.join(ks) + ' | white pieces /10k / mean px | ring breakup', '---|---|' + '---|' * (len(ks) + 2)]
for fr, d in M.items():
    for reg in LM.REGIONS:
        for s, m in d.items():
            r = m[reg]; b_ = r['white_blobs']
            lines.append(f"{fr} {s} | {reg} | " + ' | '.join(str(r[k]) for k in ks) + f" | {b_['count_per_10k']} / {b_['mean_area']} | {r.get('ring_breakup', '')}")
open(os.path.join(E, 'measured.md'), 'w').write('\n'.join(lines) + '\n')
print('ok')
