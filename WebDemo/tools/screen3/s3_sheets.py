"""Full-height comparison sheets for the Screen 3 castle test, from seeded Playwright screenshots of the real game."""
import os, shutil, sys
from PIL import Image, ImageDraw, ImageFont
APPROVED, BEFORE, CASTLE, BOTH, PASS_BASE, OUT = sys.argv[1:7]
os.makedirs(os.path.join(OUT, 'frames'), exist_ok=True)
BG, FG, DIM = (18, 22, 40), (240, 242, 250), (165, 172, 195)
font = lambda s, b=False: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if b else ''), s)
art = Image.open(APPROVED).convert('RGB'); approved = Image.new('RGB', (538, 1076), (163, 167, 230)); approved.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))
ld = lambda d, f: Image.open(os.path.join(d, f)).convert('RGB')
for d, tag in ((BEFORE, 'previous'), (CASTLE, 'castle'), (BOTH, 'castle_entrance')):
    for f in os.listdir(d):
        if f.endswith('.png') and f.startswith(('t', 'scene_t')) and 'compare' not in f: shutil.copy(os.path.join(d, f), os.path.join(OUT, 'frames', '%s_%s' % (tag, f.replace('scene_', ''))))
pad = 24
def header(dr, t, s): dr.text((pad, 18), t, font=font(26, True), fill=FG); dr.text((pad, 54), s, font=font(16), fill=DIM)
# 1. Tap to Start, full size
cols = [(approved, 'APPROVED Screen 3'), (ld(BEFORE, 'scene_t0.png'), 'PREVIOUS real 3D opening (591db28)'), (ld(CASTLE, 't0.png'), 'NEW: ?s3=castle'), (ld(BOTH, 't0.png'), 'NEW: ?s3=castle,entrance')]
s = Image.new('RGB', (pad + 4 * (538 + pad), 126 + 1076 + 50), BG); dr = ImageDraw.Draw(s)
header(dr, 'Number 4 castle (and Number 3 entrance) in the real 3D opening, at Tap to Start', 'Seeded Playwright screenshots of the running game; the painted artwork layer is turned off for the 3D columns. Same gameplay camera.')
for i, (im, l) in enumerate(cols): x = pad + i * (538 + pad); dr.text((x, 98), l, font=font(15, True), fill=FG); s.paste(im, (x, 126))
dr.text((pad, 126 + 1076 + 14), 'The castle\'s own domed towers stand outside the view (see the README); the blue towers at the sides are the existing Meshy water towers.', font=font(15), fill=DIM)
s.save(os.path.join(OUT, '01_tap_to_start_full_height.png'), optimize=True); print('01', s.size)
# 2. the first two seconds
TW, th = 269, 538
rows = [(BEFORE, 'scene_t%s.png', 'PREVIOUS'), (CASTLE, 't%s.png', '?s3=castle'), (BOTH, 't%s.png', '?s3=castle,entrance')]
moments = [('0', 'Tap to Start'), ('0.5', '0.5 s after the tap'), ('1.0', '1.0 s'), ('1.5', '1.5 s'), ('2.0', '2.0 s')]
s = Image.new('RGB', (pad + 6 * (TW + 14), 92 + 3 * (28 + th + 18)), BG); dr = ImageDraw.Draw(s)
header(dr, 'The first two seconds after Tap to Start', 'Full-height frames at the same moments for each version (seed 7, centre lane). Approved Screen 3 at the start of each row.')
for r, (d, pat, lab) in enumerate(rows):
    y = 92 + r * (28 + th + 18)
    tiles = [(approved, 'Approved')] + [(ld(d, pat % (m if (m != '0' or pat.startswith('t')) else '0')), (lab + ': ' if i == 0 else '') + l) for i, (m, l) in enumerate(moments)]
    for c, (im, l) in enumerate(tiles): x = pad + c * (TW + 14); dr.text((x, y + 4), l, font=font(12, True), fill=FG); s.paste(im.resize((TW, th), Image.LANCZOS), (x, y + 26))
s.save(os.path.join(OUT, '02_first_two_seconds.png'), optimize=True); print('02', s.size)
# 3. through the door
s = Image.new('RGB', (pad + 3 * (TW + 14) + 150, 92 + 3 * (28 + th + 18)), BG); dr = ImageDraw.Draw(s)
header(dr, 'Through the door into the existing tunnel', 'The same three versions at 2.5, 3.0 and 3.5 s after the tap. Inside the tunnel the 3D view is pixel-identical.')
for r, (d, lab) in enumerate([(PASS_BASE, 'PREVIOUS'), (CASTLE, 'castle'), (BOTH, 'castle + entrance')]):
    y = 92 + r * (28 + th + 18); dr.text((pad, y + 260), lab, font=font(14, True), fill=FG)
    for c, m in enumerate(['2.5', '3.0', '3.5']):
        x = pad + 150 + c * (TW + 14); dr.text((x, y + 4), m + ' s', font=font(12, True), fill=FG); s.paste(ld(d, 't%s.png' % m).resize((TW, th), Image.LANCZOS), (x, y + 26))
s.save(os.path.join(OUT, '03_through_the_door.png'), optimize=True); print('03', s.size)
