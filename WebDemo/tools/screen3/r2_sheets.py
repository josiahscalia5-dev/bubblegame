"""Comparison sheets for the round 2 tunnel test (?s3=round2), from the real recorded frames (record_r2.cjs) and seeded shots.
    python3 -I r2_sheets.py <approved S4.png> <round2 video dir> <old tunnel frames dir> <old video dir> <out dir> <picks.json>
picks.json names the frames to show: {"views": [[frame, label], ...], "controls": [[frame, label], ...],
  "same_moment": [old t3.5 png, new png], "exit": [[old video frame, label], [new video frame, label]]}
"""
import json, os, shutil, sys
from PIL import Image, ImageDraw, ImageFont
S4, VID, OLDF, OLDV, OUT, PICKS = sys.argv[1:7]
picks = json.load(open(PICKS))
os.makedirs(os.path.join(OUT, 'frames'), exist_ok=True)
BG, FG, DIM = (18, 22, 40), (240, 242, 250), (165, 172, 195)
font = lambda s, b=False: ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if b else ''), s)
W, H = 538, 1076
fit = lambda im: im.convert('RGB').resize((W, H), Image.LANCZOS)
vf = lambda d, n: fit(Image.open(os.path.join(d, 'f%04d.jpg' % n)))
pad = 24
def header(d, t, s): d.text((pad, 18), t, font=font(26, True), fill=FG); d.text((pad, 54), s, font=font(16), fill=DIM)
def full(cols, title, sub, file, note):
    s = Image.new('RGB', (pad + len(cols) * (W + pad), 126 + H + 50), BG); d = ImageDraw.Draw(s)
    header(d, title, sub)
    for i, (im, l) in enumerate(cols): x = pad + i * (W + pad); d.text((x, 98), l, font=font(15, True), fill=FG); s.paste(im, (x, 126))
    d.text((pad, 126 + H + 14), note, font=font(15), fill=DIM)
    s.save(os.path.join(OUT, file), optimize=True); print(file, s.size)
def grid(items, title, sub, file, per_row=5):
    tw, th = 269, 538
    rows = (len(items) + per_row - 1) // per_row
    s = Image.new('RGB', (pad + per_row * (tw + 14), 92 + rows * (34 + th + 18)), BG); d = ImageDraw.Draw(s)
    header(d, title, sub)
    for i, (im, l) in enumerate(items):
        x = pad + (i % per_row) * (tw + 14); y = 92 + (i // per_row) * (34 + th + 18)
        d.text((x, y + 4), l, font=font(12, True), fill=FG); s.paste(im.resize((tw, th), Image.LANCZOS), (x, y + 30))
    s.save(os.path.join(OUT, file), optimize=True); print(file, s.size)

old, new = picks['same_moment']
full([(fit(Image.open(S4)), 'APPROVED Screen 4'), (fit(Image.open(old)), 'BEFORE: ?s3=paint,tunnel (last round)'), (fit(Image.open(new)), 'NOW: ?s3=round2')],
     'Inside the washing machine: approved Screen 4, last round and this round', 'Real game frames from headless Chromium (seed 7, middle lane), at the same moment just inside the drum.',
     '01_tunnel_vs_approved.png', 'Now: deeper colour without white wash, gold paw coins in neat lane lines, lace foam, gold in the rings, the Screen 4 buttons and pause control.')
grid([(vf(VID, n), l) for n, l in picks['views']], 'The polished tunnel, from the gameplay recording (?s3=round2)',
     'Entrance, mid tunnel, brushes, coins and socks: frames of the real recorded run, with real swipes and button presses.', '02_tunnel_views.png')
grid([(vf(VID, n), l) for n, l in picks['controls']], 'Hearts, Bubble Blast, Turbo Spin and pause, working in the real game',
     'Frames of the same recording: each button was pressed with a real mouse click on it.', '03_controls.png')
(o, ol), (n, nl) = picks['exit']
full([(vf(OLDV, o), ol), (vf(VID, n), nl)], 'The tunnel exit: last round and this round', 'Last round the exit filled the screen with white light; now it is a coloured vortex.',
     '04_exit_before_after.png', 'The run still loops back to the slide at the end: Screens 5 onward are not built yet (game.js loopRun).')
for d, pre in ((VID, 'video_'),):
    for n, l in picks['views'] + picks['controls']: shutil.copy(os.path.join(d, 'f%04d.jpg' % n), os.path.join(OUT, 'frames', '%sf%04d.jpg' % (pre, n)))
