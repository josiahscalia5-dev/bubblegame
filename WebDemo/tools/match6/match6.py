#!/usr/bin/env python3
# Screen 6 measured match (session 3849f5c8, the user's "deliberate, measurable visual-matching process").
# Usage: $BW_PY match6.py <game frame 864x1536> <out prefix> [approved] [label]
# Writes <out>_sheet.png (approved | game | 50/50 overlay | colour-difference heatmap) and <out>_zones.json, and prints the zone table and
# the three largest mismatches. Measurements (all on the same 864x1536 frame, UI of BOTH images masked out):
#  - dE: mean CIE76 colour difference (CIELAB, skimage) per zone after a 3 px Gaussian blur of both images (so 1-2 px misregistration of
#    fine detail does not dominate). 0 = identical; ~2.3 = just noticeable; > 20 = clearly different colour.
#  - class shares: % of the zone's pixels in named colour classes (HSV thresholds of the art director's qa/scripts, session 47f75e22):
#    pink, gold, violet glow, cobalt, azure, turquoise, pale (white foam / highlights), lavender wall. "share gap" = half the L1 distance
#    between the approved and game share vectors (0 = same mix of colours, 100 = no class in common).
#  - mismatch score of a zone = dE x share-gap / 100 x zone area share: a ranking aid only, not a similarity percentage.
#  - hero: bounding box of the pink fur in x 0.18-0.82, y 0.45-0.80 (the art director's hero.py method).
import sys, json
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from scipy import ndimage as nd
from skimage.color import rgb2lab

W, H = 864, 1536
APPROVED = '/workspace/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png'
game_p, out = sys.argv[1], sys.argv[2]
appr_p = sys.argv[3] if len(sys.argv) > 3 and sys.argv[3] else APPROVED
label = sys.argv[4] if len(sys.argv) > 4 else game_p.rsplit('/', 1)[-1]

def load(p):
    im = Image.open(p).convert('RGB')
    if im.size != (W, H): im = im.resize((W, H), Image.LANCZOS)
    return np.asarray(im).astype(np.float32) / 255.

def box(x0, y0, x1, y1): return (slice(int(y0 * H), int(y1 * H)), slice(int(x0 * W), int(x1 * W)))

def ui_approved():
    m = np.zeros((H, W), bool)
    for b in [(0, 0, 1, 0.085), (0.30, 0, 0.70, 0.10), (0.02, 0.06, 0.13, 0.115), (0.87, 0.055, 0.99, 0.115), (0.11, 0.095, 0.88, 0.225), (0.03, 0.795, 0.96, 0.86), (0, 0.86, 1, 1)]:
        m[box(*b)] = True
    return m

def ui_game():
    m = np.zeros((H, W), bool)
    for b in [(0, 0, 1, 0.085), (0.06, 0.09, 0.75, 0.215), (0.75, 0.085, 0.89, 0.16), (0.22, 0.225, 0.78, 0.32), (0, 0.87, 1, 1)]:
        m[box(*b)] = True
    return m

def hsv(img):
    r, g, b = img[..., 0], img[..., 1], img[..., 2]
    mx, mn = img.max(-1), img.min(-1); d = mx - mn
    h = np.zeros_like(mx); m = d > 1e-6
    rm = m & (mx == r); gm = m & (mx == g) & ~rm; bm = m & ~rm & ~gm
    h[rm] = ((g - b)[rm] / d[rm]) % 6; h[gm] = ((b - r)[gm] / d[gm]) + 2; h[bm] = ((r - g)[bm] / d[bm]) + 4
    return h * 60, np.where(mx > 1e-6, d / np.maximum(mx, 1e-6), 0), mx

def classes(img):
    h, s, v = hsv(img)
    return {
        'pink': (h >= 300) & (h < 350) & (s > 0.40) & (v > 0.50),
        'gold': (h >= 18) & (h < 60) & (s > 0.45) & (v > 0.55),
        'violet glow': (h >= 270) & (h < 300) & (s > 0.35) & (v > 0.85),
        'cobalt': (h >= 220) & (h < 250) & (s > 0.55),
        'azure': (h >= 195) & (h < 220) & (s > 0.45),
        'turquoise': (h >= 170) & (h < 195) & (s > 0.35),
        'pale': (s < 0.25) & (v > 0.80),
        'lavender wall': (h >= 250) & (h < 300) & (s >= 0.15) & (s <= 0.6) & (v <= 0.85),
    }

ZONES = [   # name, boxes (fractions of W, H): the approved Screen 6 layout (art director, session 47f75e22)
    ('left brush', [(0.00, 0.34, 0.20, 0.72)]),
    ('right brush', [(0.82, 0.44, 1.00, 0.70)]),
    ('upper-left machinery', [(0.00, 0.26, 0.32, 0.34), (0.20, 0.34, 0.32, 0.47)]),
    ('upper-right machinery + gear', [(0.68, 0.26, 1.00, 0.44), (0.68, 0.44, 0.82, 0.47)]),
    ('tunnel centre (depth, arches, lamp)', [(0.32, 0.22, 0.68, 0.47)]),
    ('lower banks (rails, medallion, star drum)', [(0.20, 0.47, 0.36, 0.56), (0.64, 0.47, 0.82, 0.56)]),
    ('mid water (coins, enemies)', [(0.20, 0.47, 0.80, 0.70)]),
    ('foreground water', [(0.15, 0.70, 0.85, 0.795)]),
    ('hero', [(0.26, 0.56, 0.74, 0.76)]),
]

A, G = load(appr_p), load(game_p)
ui = ui_approved() | ui_game()
labA, labG = rgb2lab(nd.gaussian_filter(A, (3, 3, 0))), rgb2lab(nd.gaussian_filter(G, (3, 3, 0)))
dE = np.sqrt(((labA - labG) ** 2).sum(-1))
cA, cG = classes(A), classes(G)

def hero_box(img):
    h, s, v = hsv(img)
    m = (h >= 295) & (h <= 350) & (s > 0.30) & (v > 0.45)
    reg = np.zeros_like(m); reg[box(0.18, 0.45, 0.82, 0.80)] = True
    m = nd.binary_opening(m & reg, iterations=2)
    lab, n = nd.label(m)
    if n == 0: return None
    k = np.argmax(nd.sum(m, lab, range(1, n + 1))) + 1
    ys, xs = np.nonzero(lab == k)
    return [round(float(xs.min()) / W, 3), round(float(ys.min()) / H, 3), round(float(xs.max()) / W, 3), round(float(ys.max()) / H, 3)]

rows = []
for name, boxes in ZONES:
    zm = np.zeros((H, W), bool)
    for b in boxes: zm[box(*b)] = True
    zm &= ~ui
    n = zm.sum()
    if n < 50: continue
    shA = {k: float(v[zm].mean() * 100) for k, v in cA.items()}
    shG = {k: float(v[zm].mean() * 100) for k, v in cG.items()}
    gap = 0.5 * sum(abs(shA[k] - shG[k]) for k in shA)
    de = float(dE[zm].mean())
    rows.append({'zone': name, 'area_pct': round(n / (H * W) * 100, 1), 'dE': round(de, 1), 'share_gap': round(gap, 1),
                 'score': round(de * gap / 100 * n / (H * W) * 100, 2),
                 'approved': {k: round(v, 1) for k, v in shA.items() if v >= 1}, 'game': {k: round(v, 1) for k, v in shG.items() if v >= 1}})
allm = ~ui
glob = {'dE_all_unmasked': round(float(dE[allm].mean()), 1), 'unmasked_pct': round(allm.mean() * 100, 1),
        'hero_approved': hero_box(A), 'hero_game': hero_box(G)}
top = sorted(rows, key=lambda r: -r['score'])[:3]
json.dump({'game': game_p, 'approved': appr_p, 'label': label, 'global': glob, 'zones': rows, 'top3': [r['zone'] for r in top]}, open(out + '_zones.json', 'w'), indent=1)

print(f"== {label}: mean dE (CIE76, 3 px blur, UI masked, {glob['unmasked_pct']}% of the frame) = {glob['dE_all_unmasked']}")
print(f"   hero bbox approved {glob['hero_approved']}  game {glob['hero_game']}  (x0, y0, x1, y1 as fractions)")
print(f"   {'zone':42s} {'area%':>5s} {'dE':>5s} {'gap':>5s} {'score':>6s}  approved shares | game shares")
for r in rows:
    fa = ' '.join(f"{k[:6]} {v:.0f}" for k, v in sorted(r['approved'].items(), key=lambda kv: -kv[1])[:4])
    fg = ' '.join(f"{k[:6]} {v:.0f}" for k, v in sorted(r['game'].items(), key=lambda kv: -kv[1])[:4])
    print(f"   {r['zone']:42s} {r['area_pct']:5.1f} {r['dE']:5.1f} {r['share_gap']:5.1f} {r['score']:6.2f}  {fa} | {fg}")
print('   THREE LARGEST MISMATCHES (by score): ' + '; '.join(f"{i + 1}. {r['zone']}" for i, r in enumerate(top)))

# the sheet: approved | game | overlay | heatmap (UI grey), zones outlined
PW, PH = 432, 768
def small(img): return Image.fromarray((np.clip(img, 0, 1) * 255).astype(np.uint8)).resize((PW, PH), Image.LANCZOS)
ov = 0.5 * A + 0.5 * G
hm = np.clip(dE / 80.0, 0, 1)
heat = np.stack([hm, 0.15 + 0.0 * hm, 1 - hm], -1) * 0.85 + 0.15 * (G.mean(-1, keepdims=True))
heat[ui] = 0.35
panels = [small(A), small(G), small(ov), small(heat)]
sheet = Image.new('RGB', (4 * PW + 5 * 8, PH + 60), (28, 20, 44)); d = ImageDraw.Draw(sheet)
try: f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 15)
except OSError: f = ImageFont.load_default()
titles = ['APPROVED Screen 6', f'REAL GAME: {label}'[:48], 'OVERLAY 50/50', f'COLOUR DIFFERENCE (blue 0 .. red dE>=80), mean {glob["dE_all_unmasked"]}']
for i, p in enumerate(panels):
    x = 8 + i * (PW + 8); sheet.paste(p, (x, 52))
    d.text((x, 8), titles[i][:52], fill=(255, 230, 120), font=f)
    if i >= 2:
        for name, boxes in ZONES:
            col = (255, 255, 255) if name in [t['zone'] for t in top] else (150, 150, 170)
            for b in boxes: d.rectangle([x + b[0] * PW, 52 + b[1] * PH, x + b[2] * PW - 1, 52 + b[3] * PH - 1], outline=col, width=2 if col[0] == 255 else 1)
d.text((8, 30), 'Top 3 (white boxes): ' + '; '.join(t['zone'] for t in top), fill=(170, 230, 255), font=f)
sheet.save(out + '_sheet.png')
print('   sheet', out + '_sheet.png')
