"""Step 2 evidence sheets (run from the repository root with $BW_PY):
  01_original_vs_before_vs_after_3.00s.jpg   the ORIGINAL | before (checkpoint d84aee5) | after, all 767 x 1536, seed 7, 3.0 s
  02_pixel7_original_vs_before_vs_after.jpg  the same on an emulated Pixel 7 (412 x 839), the original at the same height
  03_closeup_tunnel_centre.jpg / 04_closeup_mascot_waterline.jpg   crops of 01 (step 2 does not change the 3D scene)
  offsets.md   each interface element's box, original / before / after, in board units (1 u = 767 / 269 px on the original)
"""
import json, os
from PIL import Image, ImageDraw, ImageFont
D = 'Previews/WebDemo/screen4_round9_match/23_step2_interface'
APP = 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26)
Fs = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 19)


def sheet(panels, out, size, crop=None, scale=1.0):
    ims = []
    for t, sub, p in panels:
        im = Image.open(p).convert('RGB')
        im = im.resize((size[0], size[1]), Image.LANCZOS) if size else im
        if crop: im = im.crop(crop)
        if scale != 1.0: im = im.resize((int(im.size[0] * scale), int(im.size[1] * scale)), Image.LANCZOS)
        ims.append((t, sub, im))
    w = max(i.size[0] for _, _, i in ims); h = max(i.size[1] for _, _, i in ims)
    S = Image.new('RGB', (len(ims) * (w + 14) - 14, h + 92), (255, 255, 255)); d = ImageDraw.Draw(S)
    for k, (t, sub, im) in enumerate(ims):
        x = k * (w + 14); S.paste(im, (x, 92)); d.text((x + 10, 8), t, fill=(20, 20, 50), font=F); d.text((x + 10, 48), sub, fill=(70, 70, 90), font=Fs)
    S.save(out, quality=92); print(out, S.size)


P = [('ORIGINAL (approved)', 'the only target, 767 x 1536', APP),
     ('BEFORE step 2', 'checkpoint d84aee5, focus, seed 7, 3.0 s', f'{D}/before/focus_before_t3.00.png'),
     ('AFTER step 2', 'focus, seed 7, 3.0 s, same camera', f'{D}/after/focus_after_t3.00.png')]
sheet(P, f'{D}/01_original_vs_before_vs_after_3.00s.jpg', (767, 1536))
sheet([('ORIGINAL', 'stretched to the phone frame (1.7% narrower than 1:2)', APP), ('BEFORE (Pixel 7)', '412 x 839, focus, 3.0 s', f'{D}/before/pixel7_focus_before_3.00s.png'),
       ('AFTER (Pixel 7)', '412 x 839, focus, 3.0 s', f'{D}/after/pixel7_focus_after_3.00s.png')], f'{D}/02_pixel7_original_vs_before_vs_after.jpg', (412 * 2, 839 * 2))
sheet(P, f'{D}/03_closeup_tunnel_centre.jpg', (767, 1536), crop=(150, 500, 620, 1020))
sheet(P, f'{D}/04_closeup_mascot_waterline.jpg', (767, 1536), crop=(80, 1000, 700, 1536))

# offsets: the original's boxes read off a gridded zoom (scripts in the README; about +/- 0.7 u), ours from the live page
ORIG = {'heartPill': [15.8, 17.5, 105.2, 42.7], 'coinPill': [115.7, 17.5, 201.7, 42.7], 'gemPill': [210.4, 17.5, None, 42.7],
        'sockPanel': [20.0, 50.0, 234.3, 112.9], 'pauseBtn': [238.5, 47.2, None, 85.7], 'blastBtn': [14.0, 488.8, 105.2, None],
        'turboBtn': [191.2, 489.5, None, None], 'hint': None}
NAMES = {'heartPill': 'hearts counter', 'coinPill': 'coin counter', 'gemPill': 'gem counter', 'sockPanel': 'mission banner',
         'pauseBtn': 'pause button', 'blastBtn': 'Bubble Blast', 'turboBtn': 'Turbo Spin', 'hint': 'steering hint'}
B = json.load(open(f'{D}/before/hud_rects_1to2.json'))['els']; A = json.load(open(f'{D}/after/hud_rects_1to2.json'))['els']
A7 = json.load(open(f'{D}/after/hud_rects_pixel7.json'))['els']
# (the coin counter had no id before step 2: its box from its inline style, --x 92 --y 14 --w 67 --h 22)
B.setdefault('coinPill', {'shown': True, 'u': [92, 14, 159, 36]})
fmt = lambda b: ' - '.join('cut' if v is None else f'{v:g}' for v in b) if b else 'not shown'
def show(e): return fmt(e['u']) if e['shown'] else 'hidden at 3.0 s'
def off(o, a):
    if not o or not a['shown']: return '-'
    return ', '.join('whole (cut in the original)' if v is None else f'{w - v:+.1f}' for v, w in zip(o, a['u']))
L = ['| element | original (u: left - top - right - bottom) | before | after (1:2) | after minus original (u) | after, Pixel 7 |', '|---|---|---|---|---|---|']
for k, n in NAMES.items():
    L.append(f'| {n} | {fmt(ORIG[k])} | {show(B[k])} | {show(A[k])} | {off(ORIG[k], A[k])} | {show(A7[k])} |')
open(f'{D}/offsets.md', 'w').write('\n'.join(L) + '\n\n1 u = 2.85 px on the 767-wide original = 0.0037 of the width (0.0019 of the height). The board is 269 x 537 u; on the '
                                      'Pixel 7 (412 x 839) the stage is taller than 1:2, so the bottom buttons sit lower in u.\n')
print(open(f'{D}/offsets.md').read())
