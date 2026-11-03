"""Before/after sheets for the Phase A castle-and-water test, from seeded Playwright screenshots of the real game.
    python3 -I phase_a_sheets.py <approved.png> <before dir> <after dir> <out dir>
"""
import os
import shutil
import sys
from PIL import Image, ImageDraw, ImageFont

APPROVED, BEFORE, AFTER, OUT = sys.argv[1:5]
os.makedirs(os.path.join(OUT, 'frames'), exist_ok=True)
BG, FG, DIM = (18, 22, 40), (240, 242, 250), (165, 172, 195)
font = lambda size, bold=False: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if bold else ''), size)
art = Image.open(APPROVED).convert('RGB')
approved = Image.new('RGB', (538, 1076), (163, 167, 230)); approved.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))
MOMENTS = [('scene_t0.png', 'Tap to Start'), ('scene_t0.5.png', '0.5 s after the tap'), ('scene_t1.0.png', '1.0 s'), ('scene_t1.5.png', '1.5 s'), ('scene_t2.0.png', '2.0 s')]
ld = lambda d, f: Image.open(os.path.join(d, f)).convert('RGB')

# full-size frames, for opening one by one
approved.save(os.path.join(OUT, 'frames', 'approved_screen3_538x1076.png'))
for f, _ in MOMENTS:
    shutil.copy(os.path.join(BEFORE, f), os.path.join(OUT, 'frames', 'before_' + f.replace('scene_', '')))
    shutil.copy(os.path.join(AFTER, f), os.path.join(OUT, 'frames', 'after_phaseA_' + f.replace('scene_', '')))


def header(d, title, sub):
    d.text((24, 18), title, font=font(26, True), fill=FG)
    d.text((24, 54), sub, font=font(16), fill=DIM)


# 1. Tap to Start, full size
W, pad = 538, 24
s = Image.new('RGB', (pad + 3 * (W + pad), 92 + 34 + 1076 + 50), BG); d = ImageDraw.Draw(s)
header(d, 'Phase A test: castle colours and slide water, at Tap to Start',
       'Real seeded Playwright screenshots of the 3D game (the artwork layer turned off, so the real scene shows). Same camera moment.')
for i, (im, l) in enumerate([(approved, 'APPROVED Screen 3'), (ld(BEFORE, 'scene_t0.png'), 'BEFORE: the real 3D scene (591db28)'), (ld(AFTER, 'scene_t0.png'), 'AFTER: the same scene with ?phaseA')]):
    x = pad + i * (W + pad)
    d.text((x, 98), l, font=font(15, True), fill=FG); s.paste(im, (x, 126))
d.text((pad, 126 + 1076 + 14), 'Without ?phaseA the game is unchanged (pixel-identical to 591db28). The Tap to Start panel and banner are the live game\'s own.', font=font(15), fill=DIM)
s.save(os.path.join(OUT, '01_tap_to_start_before_after.png'), optimize=True); print('01', s.size)

# 2. the first two seconds after the tap, before and after, with the approved image at the start of each row
TW = 269
th = 538
s = Image.new('RGB', (pad + 6 * (TW + 16), 92 + 2 * (30 + th + 20) + 30), BG); d = ImageDraw.Draw(s)
header(d, 'The first two seconds after Tap to Start: before and after ?phaseA',
       'Full-height frames of the real game at the same moments (straight run, centre lane). The approved Screen 3 is shown at the start of each row.')
for r, (dname, label) in enumerate([(BEFORE, 'BEFORE (591db28)'), (AFTER, 'AFTER (?phaseA)')]):
    y = 92 + r * (30 + th + 20)
    tiles = [(approved, 'Approved Screen 3')] + [(ld(dname, f), (label + ', ' if i == 0 else '') + l) for i, (f, l) in enumerate(MOMENTS)]
    for c, (im, l) in enumerate(tiles):
        x = pad + c * (TW + 16)
        d.text((x, y + 6), l if c else l, font=font(12, True), fill=FG)
        s.paste(im.resize((TW, th), Image.LANCZOS), (x, y + 28))
s.save(os.path.join(OUT, '02_first_two_seconds_before_after.png'), optimize=True); print('02', s.size)

# 3. close-ups at Tap to Start: the castle above the door and the water around the mascot
s = Image.new('RGB', (pad + 3 * (W + pad), 92 + 2 * (34 + 380) + 20), BG); d = ImageDraw.Draw(s)
header(d, 'Close-ups at Tap to Start: castle above the door, water and foam around the mascot', 'Crops of the full frames above, at full size.')
for i, (im, l) in enumerate([(approved, 'APPROVED'), (ld(BEFORE, 'scene_t0.png'), 'BEFORE'), (ld(AFTER, 'scene_t0.png'), 'AFTER (?phaseA)')]):
    x = pad + i * (W + pad)
    d.text((x, 98), l + ': castle', font=font(15, True), fill=FG); s.paste(im.crop((0, 60, 538, 440)), (x, 126))
    d.text((x, 126 + 380 + 8), l + ': water and foam', font=font(15, True), fill=FG); s.paste(im.crop((0, 520, 538, 900)), (x, 126 + 380 + 34))
s.save(os.path.join(OUT, '03_closeups_before_after.png'), optimize=True); print('03', s.size)
