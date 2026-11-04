"""Comparison sheets for the Screen 4 tunnel test (?s3=paint,tunnel), from seeded Playwright frames of the real game.
    python3 -I tunnel_sheets.py <approved S3.png> <approved S4.png> <new frames dir> <protected frames dir> <out dir>
New frames: t0.png (Tap to Start) and t0.5 ... t5.5.png; protected frames: t3.5 ... t5.5.png (commit 591db28).
"""
import os, shutil, sys
from PIL import Image, ImageDraw, ImageFont
S3, S4, NEW, BASE, OUT = sys.argv[1:6]
os.makedirs(os.path.join(OUT, 'frames'), exist_ok=True)
BG, FG, DIM = (18, 22, 40), (240, 242, 250), (165, 172, 195)
font = lambda s, b=False: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if b else ''), s)
a3 = Image.open(S3).convert('RGB'); A3 = Image.new('RGB', (538, 1076), (163, 167, 230)); A3.paste(a3.resize((536, 1076), Image.LANCZOS), (1, 0))
A4 = Image.open(S4).convert('RGB').resize((538, 1076), Image.LANCZOS)
ld = lambda d, f: Image.open(os.path.join(d, f)).convert('RGB')
for f in os.listdir(NEW):
    if f.endswith('.png'): shutil.copy(os.path.join(NEW, f), os.path.join(OUT, 'frames', 'new_' + f))
for f in os.listdir(BASE):
    if f.endswith('.png') and f.startswith('t'): shutil.copy(os.path.join(BASE, f), os.path.join(OUT, 'frames', 'protected_' + f))
pad = 24
def header(d, t, s): d.text((pad, 18), t, font=font(26, True), fill=FG); d.text((pad, 54), s, font=font(16), fill=DIM)
def full(cols, title, sub, file, note):
    s = Image.new('RGB', (pad + len(cols) * (538 + pad), 126 + 1076 + 50), BG); d = ImageDraw.Draw(s)
    header(d, title, sub)
    for i, (im, l) in enumerate(cols): x = pad + i * (538 + pad); d.text((x, 98), l, font=font(15, True), fill=FG); s.paste(im, (x, 126))
    d.text((pad, 126 + 1076 + 14), note, font=font(15), fill=DIM)
    s.save(os.path.join(OUT, file), optimize=True); print(file, s.size)
full([(A3, 'APPROVED Screen 3'), (ld(NEW, 't0.png'), 'NEW game opening (?s3=paint,tunnel), Tap to Start')],
     'The opening: approved Screen 3 and the real game', 'Seeded Playwright screenshot of the running game; the separate painted Tap to Start overlay is off.',
     '01_opening_vs_approved.png', 'The painted scenery opening (?s3=paint), unchanged in this round.')
full([(A4, 'APPROVED Screen 4'), (ld(BASE, 't3.5.png'), 'PROTECTED tunnel (591db28), 3.5 s after the tap'), (ld(NEW, 't3.5.png'), 'NEW tunnel (?s3=paint,tunnel), 3.5 s after the tap')],
     'Inside the washing machine: approved Screen 4 and the real game', 'Same camera moment for both game columns (seed 7, centre lane), just inside the drum.',
     '02_tunnel_vs_approved.png', 'New: ring vortex, deep blue and violet walls, spinning brushes (pink left, blue and pink right), soap bubbles, foam. Coins, socks, HUD unchanged.')
TW, th = 269, 538
moments = [('t0.png', 'Tap to Start'), ('t1.0.png', '1.0 s'), ('t2.0.png', '2.0 s'), ('t2.5.png', '2.5 s: at the portal'), ('t3.0.png', '3.0 s: through it'),
           ('t3.5.png', '3.5 s: inside'), ('t4.0.png', '4.0 s'), ('t4.5.png', '4.5 s'), ('t5.0.png', '5.0 s'), ('t5.5.png', '5.5 s')]
s = Image.new('RGB', (pad + 5 * (TW + 14), 92 + 2 * (28 + th + 18)), BG); d = ImageDraw.Draw(s)
header(d, 'From Tap to Start through the portal into the tunnel (real game, ?s3=paint,tunnel)', 'Seeded frames, centre lane: the same continuous run, no cut or teleport.')
for i, (f, l) in enumerate(moments):
    x = pad + (i % 5) * (TW + 14); y = 92 + (i // 5) * (28 + th + 18)
    d.text((x, y + 4), l, font=font(12, True), fill=FG); s.paste(ld(NEW, f).resize((TW, th), Image.LANCZOS), (x, y + 26))
s.save(os.path.join(OUT, '03_through_the_portal.png'), optimize=True); print('03', s.size)
