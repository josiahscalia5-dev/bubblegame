"""Five-asset comparison sheets (approved, previous real 3D opening, new real 3D opening), from seeded Playwright frames."""
import os, shutil, sys
from PIL import Image, ImageDraw, ImageFont
APPROVED, BEFORE, NEW, PASS_BASE, OUT = sys.argv[1:6]
os.makedirs(os.path.join(OUT, 'frames'), exist_ok=True)
BG, FG, DIM = (18, 22, 40), (240, 242, 250), (165, 172, 195)
font = lambda s, b=False: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if b else ''), s)
art = Image.open(APPROVED).convert('RGB'); approved = Image.new('RGB', (538, 1076), (163, 167, 230)); approved.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))
ld = lambda d, f: Image.open(os.path.join(d, f)).convert('RGB')
approved.save(os.path.join(OUT, 'frames', 'approved_538x1076.png'))
for m in ('0', '0.5', '1.0', '1.5', '2.0'): shutil.copy(os.path.join(BEFORE, 't%s.png' % m), os.path.join(OUT, 'frames', 'saved_edges_t%s.png' % m))
for m in ('0', '0.5', '1.0', '1.5', '2.0', '2.5', '3.0', '3.5'): shutil.copy(os.path.join(NEW, 't%s.png' % m), os.path.join(OUT, 'frames', 'new_t%s.png' % m))
pad = 24
def header(dr, t, s): dr.text((pad, 18), t, font=font(26, True), fill=FG); dr.text((pad, 54), s, font=font(16), fill=DIM)
cols = [(approved, 'APPROVED Screen 3'), (ld(BEFORE, 't0.png'), 'SAVED 6.5/10 version (4711680, ?s3=all,edges)'), (ld(NEW, 't0.png'), 'NEW: cinematic opening camera (?s3=all,edges,cine)')]
s = Image.new('RGB', (pad + 3 * (538 + pad), 126 + 1076 + 74), BG); dr = ImageDraw.Draw(s)
header(dr, 'Opening-only cinematic camera, real 3D scene, at Tap to Start', 'Seeded Playwright screenshots of the running game, painted artwork layer off for the 3D columns, same gameplay camera.')
for i, (im, l) in enumerate(cols): x = pad + i * (538 + pad); dr.text((x, 98), l, font=font(15, True), fill=FG); s.paste(im, (x, 126))
dr.text((pad, 126 + 1076 + 12), 'New: the saved version seen through a camera fitted to the approved perspective (0.10 m up, 0.82 m forward, 0.3 deg down, 41.5 deg); HUD, banner, panel', font=font(15), fill=DIM)
dr.text((pad, 126 + 1076 + 36), 'are the live game\'s own. The yellow duck is in the approved art only (removed from the game at your request).', font=font(15), fill=DIM)
s.save(os.path.join(OUT, '01_full_height_approved_previous_new.png'), optimize=True); print('01', s.size)
TW, th = 269, 538
moments = [('0', 'Tap to Start'), ('0.5', '0.5 s after the tap'), ('1.0', '1.0 s'), ('1.5', '1.5 s'), ('2.0', '2.0 s')]
s = Image.new('RGB', (pad + 6 * (TW + 14), 92 + 2 * (28 + th + 18)), BG); dr = ImageDraw.Draw(s)
header(dr, 'Tap to Start and the first two seconds: the cinematic camera hands over to the gameplay camera by 0.9 s', 'Full-height frames at the same moments (seed 7, centre lane). Approved Screen 3 at the start of each row.')
for r, (d, pat, lab) in enumerate([(BEFORE, 't%s.png', 'SAVED 4711680'), (NEW, 't%s.png', 'NEW cine')]):
    y = 92 + r * (28 + th + 18)
    tiles = [(approved, 'Approved')] + [(ld(d, pat % m), (lab + ': ' if i == 0 else '') + l) for i, (m, l) in enumerate(moments)]
    for c, (im, l) in enumerate(tiles): x = pad + c * (TW + 14); dr.text((x, y + 4), l, font=font(12, True), fill=FG); s.paste(im.resize((TW, th), Image.LANCZOS), (x, y + 26))
s.save(os.path.join(OUT, '02_first_two_seconds.png'), optimize=True); print('02', s.size)
s = Image.new('RGB', (pad + 3 * (TW + 14) + 150, 92 + 2 * (28 + th + 18)), BG); dr = ImageDraw.Draw(s)
header(dr, 'Through the door into the existing tunnel', '2.5, 3.0 and 3.5 s after the tap. Inside the tunnel the 3D view is pixel-identical to 591db28.')
for r, (d, lab) in enumerate([(PASS_BASE, 'PROTECTED 591db28'), (NEW, 'NEW cine')]):
    y = 92 + r * (28 + th + 18); dr.text((pad, y + 260), lab, font=font(14, True), fill=FG)
    for c, m in enumerate(['2.5', '3.0', '3.5']):
        x = pad + 150 + c * (TW + 14); dr.text((x, y + 4), m + ' s', font=font(12, True), fill=FG); s.paste(ld(d, 't%s.png' % m).resize((TW, th), Image.LANCZOS), (x, y + 26))
s.save(os.path.join(OUT, '03_through_the_door.png'), optimize=True); print('03', s.size)
