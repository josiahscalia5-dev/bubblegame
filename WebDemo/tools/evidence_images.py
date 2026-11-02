# Evidence images from tools/record.cjs recordings: height chart, frame sheets, start frame vs approved Screen 3.
# python3 -I tools/evidence_images.py <game frames dir> <side frames dir> <approved png> <out dir>
# Needs pillow. SCRIPT below repeats record.cjs's input script (to mark the gestures on the chart): keep them in step.
import json, os, sys
from PIL import Image, ImageDraw, ImageFont

game, side, approved, out = sys.argv[1:5]
os.makedirs(out, exist_ok=True)
F = lambda s, b=False: ImageFont.truetype(f"/usr/share/fonts/truetype/dejavu/DejaVuSans{'-Bold' if b else ''}.ttf", s)
track = json.load(open(os.path.join(game, 'track.json')))
fps = 30
T = [i / fps for i in range(len(track))]
SCRIPT = [(2.0, 'tap'), (2.8, 'left'), (3.6, 'right'), (4.3, 'right'), (5.0, 'left'), (5.9, 'up'), (6.9, 'left'),
          (7.8, 'right'), (8.4, 'right'), (9.1, 'tap'), (9.6, 'left'), (10.7, 'left'), (11.5, 'up'), (12.3, 'right')]
SYM = {'tap': 'tap', 'left': '←', 'right': '→', 'up': '↑'}

# ---------------------------------------------------------------- height chart
W, H = 1400, 760
im = Image.new('RGB', (W, H), (250, 248, 255)); d = ImageDraw.Draw(im)
L, R, top, bot = 90, W - 30, 70, 520
ymin, ymax = -1.0, 3.1
tx = lambda t: L + (R - L) * t / T[-1]
ty = lambda y: bot - (bot - top) * (y - ymin) / (ymax - ymin)
d.text((L, 18), "Mascot's real height in the world during the recorded run (read from the game every frame)", font=F(22, True), fill=(30, 25, 80))
for y in [x * 0.5 for x in range(-2, 7)]:
    d.line([(L, ty(y)), (R, ty(y))], fill=(215, 210, 235) if y % 1 else (180, 172, 215), width=1)
    d.text((L - 62, ty(y) - 9), f"{y:+.1f} m", font=F(15), fill=(70, 60, 120))
for s in range(0, int(T[-1]) + 1):
    d.line([(tx(s), bot), (tx(s), bot + 6)], fill=(90, 80, 140)); d.text((tx(s) - 6, bot + 9), f"{s}", font=F(15), fill=(70, 60, 120))
d.text((R - 150, bot + 28), "game seconds", font=F(15), fill=(70, 60, 120))
# phases: on the slide / in the drum (by track position), loop
ts = 3.9007; prev = None
for i, s in enumerate(track):
    inside = s['phase'] == 'running' and s['z'] > ts
    if inside != prev:
        if inside: start = T[i]
        elif prev: d.rectangle([tx(start), top, tx(T[i]), bot], fill=(228, 240, 255))
        prev = inside
if prev: d.rectangle([tx(start), top, tx(T[-1]), bot], fill=(228, 240, 255))
for y in [x * 0.5 for x in range(-2, 7)]:
    d.line([(L, ty(y)), (R, ty(y))], fill=(215, 210, 235) if y % 1 else (180, 172, 215), width=1)
d.text((tx(5.6), top + 6), "inside the washing machine (tube climbs, crests, drops, banks)", font=F(15), fill=(40, 90, 170))
# camera and mascot heights
cam = [(tx(T[i]), ty(s['camera'][1])) for i, s in enumerate(track)]
d.line(cam, fill=(120, 150, 230), width=2)
pts = [(tx(T[i]), ty(s['world'][1])) for i, s in enumerate(track)]
d.line(pts, fill=(255, 31, 158), width=4)
d.text((L + 12, ty(2.95)), "— mascot height", font=F(16, True), fill=(255, 31, 158))
d.text((L + 12, ty(2.95) + 22), "— follow-camera height", font=F(16, True), fill=(120, 150, 230))
# gestures
for t, a in SCRIPT:
    x = tx(t)
    d.line([(x, bot), (x, bot - 14)], fill=(30, 25, 80), width=2)
    d.text((x - 8, bot - 34), SYM[a], font=F(18, True), fill=(30, 25, 80))
# bank and pitch strip
top2, bot2 = 600, 730
d.text((L, top2 - 26), "Tube pitch (orange, + = climbing) and bank (green) under the mascot, degrees; lane (purple dots: left / middle / right)", font=F(15), fill=(70, 60, 120))
a0 = lambda v: (top2 + bot2) / 2 - v * (bot2 - top2) / 50
d.line([(L, a0(0)), (R, a0(0))], fill=(180, 172, 215))
for v in (-20, 20): d.line([(L, a0(v)), (R, a0(v))], fill=(225, 220, 240)); d.text((L - 50, a0(v) - 9), f"{v:+d}°", font=F(14), fill=(70, 60, 120))
d.line([(tx(T[i]), a0(s['path']['pitch'])) for i, s in enumerate(track)], fill=(240, 140, 30), width=3)
d.line([(tx(T[i]), a0(s['path']['bank'])) for i, s in enumerate(track)], fill=(40, 170, 90), width=3)
for i, s in enumerate(track[::3]):
    x = tx(T[i * 3]); y = a0(14 - 14 * s['lane'])
    d.ellipse([x - 2, y - 2, x + 2, y + 2], fill=(120, 60, 200))
ys = [s['world'][1] for s in track]
d.text((L, 44), f"Lowest {min(ys):+.2f} m, highest {max(ys):+.2f} m: a {max(ys) - min(ys):.2f} m change in world height over one run.", font=F(16), fill=(30, 25, 80))
im.save(os.path.join(out, 'height_trace.png'))

# ---------------------------------------------------------------- frame sheets
def sheet(folder, frames, h, name, cols):
    ims = []
    for f in frames:
        p = os.path.join(folder, f"f{f:04d}.jpg")
        if not os.path.exists(p): continue
        a = Image.open(p).convert('RGB'); a = a.resize((round(a.width * h / a.height), h))
        dd = ImageDraw.Draw(a); lab = f"{f / fps:.1f} s"
        dd.rectangle([0, 0, 12 + 9 * len(lab), 22], fill=(20, 20, 60)); dd.text((5, 3), lab, font=F(15, True), fill=(255, 255, 255))
        ims.append(a)
    rows = [ims[i:i + cols] for i in range(0, len(ims), cols)]
    w = max(sum(i.width for i in r) + 6 * (len(r) - 1) for r in rows)
    sh = Image.new('RGB', (w, len(rows) * (h + 6) - 6), (30, 30, 30))
    for ri, r in enumerate(rows):
        x = 0
        for i in r: sh.paste(i, (x, ri * (h + 6))); x += i.width + 6
    sh.save(os.path.join(out, name))
beats = [30, 66, 88, 112, 150, 170, 186, 210, 236, 254, 276, 290, 330, 352, 372]
sheet(game, beats, 520, 'gameplay_frames.png', 8)
if os.path.isdir(side): sheet(side, [70, 120, 150, 180, 205, 225, 245, 262, 285], 300, 'side_view_frames.png', 3)

# ---------------------------------------------------------------- start frame vs approved
a = Image.open(approved).convert('RGB'); g = Image.open(os.path.join(game, 'f0010.jpg')).convert('RGB')
h = 900
a = a.resize((round(a.width * h / a.height), h)); g = g.resize((round(g.width * h / g.height), h))
c = Image.new('RGB', (a.width + g.width + 20, h + 40), (30, 30, 30)); dd = ImageDraw.Draw(c)
c.paste(a, (0, 40)); c.paste(g, (a.width + 20, 40))
dd.text((10, 8), "Approved Screen 3", font=F(20, True), fill=(255, 255, 255)); dd.text((a.width + 30, 8), "Browser demo (recorded)", font=F(20, True), fill=(255, 255, 255))
c.save(os.path.join(out, 'screen3_start_vs_approved.png'))
print('wrote', sorted(os.listdir(out)))
