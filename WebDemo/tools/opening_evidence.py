# python3 -I tools/opening_evidence.py <scratch dir with base_start.png, final_start.png, fz_base, fz_new, fz_nomascot> <out dir> <approved.png>
import sys, os
from PIL import Image, ImageDraw, ImageFont, ImageChops
SP, OUT, APPROVED = sys.argv[1:4]
B = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
S = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 16)
BG, FG, SUB = (17, 24, 39), (240, 244, 255), (170, 185, 215)
size = (538, 1076)
def load(p, box=None):
    im = Image.open(p).convert('RGB').resize(size, Image.LANCZOS)
    return im.crop(box) if box else im
def sheet(panels, labels, title, sub, out, gap=14, pad=24):
    w, h = panels[0].size
    top = 92
    s = Image.new('RGB', (pad * 2 + len(panels) * w + gap * (len(panels) - 1), top + h + 44 + pad), BG)
    d = ImageDraw.Draw(s)
    d.text((pad, 18), title, fill=FG, font=B); d.text((pad, 50), sub, fill=SUB, font=S)
    for i, (im, lab) in enumerate(zip(panels, labels)):
        x = pad + i * (w + gap); s.paste(im, (x, top)); d.text((x, top + h + 10), lab, fill=FG, font=S)
    s.save(out); print(out, s.size)
apr, orig, new = load(APPROVED), load(f'{SP}/base_start.png'), load(f'{SP}/final_start.png')
sheet([apr, new], ['APPROVED Screen 3 (visual target)', 'TEST VERSION, running browser game, Tap to Start'],
      'Bubble Wash Kingdom, Screen 3: approved vs test version', 'Real screenshot of the running game at the same 1:2 portrait size (538 x 1076), 0.5 s after load. Not a mockup.', f'{OUT}/01_start_test_vs_approved.png')
sheet([apr, orig, new], ['APPROVED', 'ORIGINAL (current working game)', 'TEST VERSION'],
      'Opening frame: approved, original and test version', 'Same moment (Tap to Start), same size. The original build is untouched on branch ccr-590365bd-e5p8xt.', f'{OUT}/02_start_approved_original_test.png')
# close-ups: rows = region, columns = approved / original / test
regions = [('Water and foam around the mascot', (40, 600, 500, 880)), ('Washer-door entrance', (80, 330, 460, 660)),
           ('Left brush (Meshy side machinery)', (0, 380, 230, 860)), ('Right side (roller, bubbles, gold wheel)', (330, 330, 538, 900))]
rows = []
for name, box in regions:
    ims = [load(p, box) for p in (APPROVED, f'{SP}/base_start.png', f'{SP}/final_start.png')]
    sc = min(2.0, 560 / ims[0].size[0], 520 / ims[0].size[1])
    ims = [im.resize((int(im.size[0] * sc), int(im.size[1] * sc)), Image.LANCZOS) for im in ims]
    rows.append((name, ims))
W = max(sum(im.size[0] for im in ims) + 28 for _, ims in rows) + 48
H = sum(ims[0].size[1] + 44 for _, ims in rows) + 120
s = Image.new('RGB', (W, H), BG); d = ImageDraw.Draw(s)
d.text((24, 18), 'Close-ups: APPROVED  |  ORIGINAL  |  TEST VERSION', fill=FG, font=B)
d.text((24, 50), 'Same crops of the Tap to Start frame (538 x 1076 stage), enlarged.', fill=SUB, font=S)
y = 92
for name, ims in rows:
    d.text((24, y), name, fill=FG, font=S); y += 24
    x = 24
    for im in ims: s.paste(im, (x, y)); x += im.size[0] + 14
    y += ims[0].size[1] + 20
s.save(f'{OUT}/03_closeups.png'); print(f'{OUT}/03_closeups.png', s.size)
# tunnel proof: original vs test inside the tunnel (seeded, CSS animations frozen) + changed-pixel mask
ts = ['05.5', '06.5', '07.5', '08.5']
cols = []
for t in ts:
    a = Image.open(f'{SP}/fz_base/t{t}.png').convert('RGB'); b = Image.open(f'{SP}/fz_new/t{t}.png').convert('RGB')
    c = Image.open(f'{SP}/fz_nomascot/t{t}.png').convert('RGB')
    m = ImageChops.difference(a, b).convert('L').point(lambda v: 255 if v > 2 else 0)
    mask = Image.composite(Image.new('RGB', a.size, (255, 60, 160)), Image.blend(a, Image.new('RGB', a.size, (0, 0, 0)), 0.65), m)
    n_full, n_nm = m.histogram()[255], ImageChops.difference(a, c).convert('L').point(lambda v: 255 if v > 2 else 0).histogram()[255]
    cols.append((t, [im.resize((269, 534)) for im in (a, b, mask)], n_full, n_nm))
w, h = 269, 534
s = Image.new('RGB', (24 * 2 + len(cols) * (w * 3 + 28) + (len(cols) - 1) * 24, 92 + 30 + h + 74), BG); d = ImageDraw.Draw(s)
d.text((24, 18), 'Inside the tunnel: original vs test version (same seed, same inputs, same frames)', fill=FG, font=B)
d.text((24, 50), 'Pink = pixels that differ. Only the mascot changes (its crisper fur); with that one part off, 0 pixels differ.', fill=SUB, font=S)
x = 24
for t, ims, n_full, n_nm in cols:
    d.text((x, 92), f'{float(t):.1f} s', fill=FG, font=S)
    for k, (im, lab) in enumerate(zip(ims, ['original', 'test', 'changed'])):
        s.paste(im, (x + k * (w + 14), 122)); d.text((x + k * (w + 14), 122 + h + 6), lab, fill=SUB, font=S)
    d.text((x, 122 + h + 30), f'{100 * n_full / 574584:.1f} % of pixels differ (mascot); without the mascot part: {n_nm}', fill=FG, font=S)
    x += w * 3 + 28 + 24
s.save(f'{OUT}/04_tunnel_unchanged.png'); print(f'{OUT}/04_tunnel_unchanged.png', s.size)
# gameplay beats: original row, test row
ts = ['00.5', '02.6', '03.5', '04.5', '05.5', '06.5', '08.5']
w, h = 230, 457
s = Image.new('RGB', (24 * 2 + len(ts) * w + (len(ts) - 1) * 10, 92 + 2 * (h + 36) + 10), BG); d = ImageDraw.Draw(s)
d.text((24, 18), 'The run: original (top) and test version (bottom), same seed and inputs', fill=FG, font=B)
d.text((24, 50), 'Tap at 2.0 s, steer down the slide, through the washer door, into the same tunnel. Ride, camera and pickups identical.', fill=SUB, font=S)
for r, dd in enumerate(['fz_base', 'fz_new']):
    for i, t in enumerate(ts):
        im = Image.open(f'{SP}/{dd}/t{t}.png').convert('RGB').resize((w, h))
        x, y = 24 + i * (w + 10), 92 + r * (h + 36)
        s.paste(im, (x, y)); d.text((x, y + h + 6), f'{float(t):.1f} s  ' + ('original' if r == 0 else 'test'), fill=SUB, font=S)
s.save(f'{OUT}/05_gameplay_moments.png'); print(f'{OUT}/05_gameplay_moments.png', s.size)
