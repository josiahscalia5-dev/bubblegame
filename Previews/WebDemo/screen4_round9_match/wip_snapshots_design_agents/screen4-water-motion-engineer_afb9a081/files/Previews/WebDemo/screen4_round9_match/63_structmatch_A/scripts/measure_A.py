# Checkpoint A measurements (the narrowed scope): ORIGINAL | ACCEPTED | NEW. Two sources, as in 62_ and 61_:
#  (1) page captures WITH the HUD (s3_shot.cjs, 538 x 1076; the ORIGINAL scaled uniformly to 1076 tall):
#      the lavender housing share of y .16-.36 (62_opening_mandate_audit/scripts/measure_opening.py's definition: hue 250-300,
#      saturation .12-.55, value > .6) and her pink box (the largest pink blob in y .60-.95: its lower edge = where the water
#      cuts her);
#  (2) canvas renders at the original's framing (layer_diag.cjs base_canvas, 768 x 1536, no HUD): the foreground water
#      y .80-.84 and the water band round her y .78-.92 (61_structural_audit/scripts/measure.py's hue classes: blue family
#      sat > .25 by hue cyan 170-200 / azure 200-222 / periwinkle-violet 222-265, white/pale sat < .18 and val > .8).
#   python measure_A.py <accepted page dir> <new page dir> <accepted canvas dir prefix> <new canvas dir prefix>
import sys, cv2, numpy as np
O = 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
AP, NP, AC, NC = sys.argv[1:5]
def hsv(im):
    h = cv2.cvtColor(im, cv2.COLOR_BGR2HSV_FULL).astype(np.float32); return h[..., 0] * 360 / 256, h[..., 1] / 255, h[..., 2] / 255
def page(p):
    im = cv2.imread(p)
    if im.shape[0] != 1076: im = cv2.resize(im, (round(im.shape[1] * 1076 / im.shape[0]), 1076), interpolation=cv2.INTER_AREA)
    return im
print('(1) page captures with the HUD | lavender housing y .16-.36 | her pink box | her width at 8/16/25/50 % below her top')
rows = [('ORIGINAL', O)] + [(f'ACCEPTED {t}', f'{AP}/{f}') for t, f in (('t0', 't0.png'), ('+1 s', 't1.0.png'), ('+2 s', 't2.0.png'), ('+3 s', 't3.0.png'))] \
     + [(f'NEW {t}', f'{NP}/{f}') for t, f in (('t0', 't0.png'), ('+1 s', 't1.0.png'), ('+2 s', 't2.0.png'), ('+3 s', 't3.0.png'))]
for k, p in rows:
    im = page(p); H, S, V = hsv(im); Hh, Ww = H.shape
    lav = ((H >= 250) & (H < 300) & (S > 0.12) & (S < 0.55) & (V > 0.6))[:int(.36 * Hh)]; lavp = 100 * lav[int(.16 * Hh):].mean()
    m = (((H >= 300) | (H < 10)) & (S > 0.35) & (V > 0.45)).astype(np.uint8); m[:int(.60 * Hh)] = 0; m[int(.95 * Hh):] = 0
    n, l, st, ce = cv2.connectedComponentsWithStats(cv2.morphologyEx(m, cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8)))
    i = 1 + int(np.argmax(st[1:, 4])) if n > 1 else 0; x, y, w, h, a = st[i]
    prof = [(l[y + int(f * h)] == i).sum() / Ww for f in (0.08, 0.16, 0.25, 0.5)]
    print(f'  {k:13s} housing {lavp:4.1f} % | box x {x/Ww:.2f}-{(x+w)/Ww:.2f} y {y/Hh:.2f}-{(y+h)/Hh:.2f} | widths {" / ".join(f"{q:.2f}" for q in prof)}')
def canvas(p): return cv2.resize(cv2.imread(p), (768, 1536), interpolation=cv2.INTER_AREA)
print('(2) canvas renders: blue-family share by hue (cyan | azure | periwinkle-violet), mean blue hue and saturation, white/pale share')
crows = [('ORIGINAL', O)] + [(f'ACCEPTED {t}', f'{AC}_{m}/base_canvas.png') for t, m in (('start', 'start'), ('+1 s', 'T1.0'), ('+2 s', 'T2.0'))] \
      + [(f'NEW {t}', f'{NC}_{m}/base_canvas.png') for t, m in (('start', 'start'), ('+1 s', 'T1.0'), ('+2 s', 'T2.0'))]
for zone, (y0, y1) in {'foreground water y .80-.84': (0.80, 0.84), 'water round her y .78-.92': (0.78, 0.92)}.items():
    print(' ==', zone)
    for k, p in crows:
        H, S, V = hsv(canvas(p)); sl = (slice(int(y0 * 1536), int(y1 * 1536)), slice(0, 768))
        h, s, v = H[sl], S[sl], V[sl]; b = (h >= 170) & (h < 265) & (s > 0.25)
        c = lambda a, b2: 100 * np.mean(b & (h >= a) & (h < b2))
        print(f'  {k:13s} cyan {c(170, 200):5.1f} azure {c(200, 222):5.1f} peri/violet {c(222, 265):5.1f} | blue hue {h[b].mean():5.1f} sat {s[b].mean():.2f} | white/pale {100 * np.mean((s < 0.18) & (v > 0.8)):5.1f}')
