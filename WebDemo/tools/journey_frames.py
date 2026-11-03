# Approved Screen 3 beside a recording's opening frame, and twelve labelled frames of the journey from Tap to Start
# into the tunnel (from tools/record.cjs output).
#   python3 -I tools/journey_frames.py ../Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png <frames dir> <out dir>
import json, os, sys
from PIL import Image, ImageDraw, ImageFont
apr_p, rec, out = sys.argv[1:4]
os.makedirs(out, exist_ok=True)
F = lambda s, b=True: ImageFont.truetype(f"/usr/share/fonts/truetype/dejavu/DejaVuSans{'-Bold' if b else ''}.ttf", s)
size = (538, 1076)
track = json.load(open(os.path.join(rec, 'track.json')))
apr = Image.open(apr_p).convert('RGB').resize(size, Image.LANCZOS)
start = Image.open(os.path.join(rec, 'f0010.jpg')).convert('RGB').resize(size, Image.LANCZOS)
# 1. approved beside the recorded opening frame
c = Image.new('RGB', (size[0] * 2 + 20, size[1] + 44), (30, 30, 30)); d = ImageDraw.Draw(c)
c.paste(apr, (0, 44)); c.paste(start, (size[0] + 20, 44))
d.text((8, 10), 'Approved Screen 3', font=F(19), fill=(255, 255, 255)); d.text((size[0] + 28, 10), 'Browser game: opening frame (recorded)', font=F(19), fill=(255, 255, 255))
c.save(os.path.join(out, 'screen3_start_vs_approved.png'))
# 2. the journey: frames from the one recording, labelled with time and where the mascot is
TS, TE = 3.9007, 37.2019
def where(s):
    if s['phase'] != 'running': return 'Tap to Start'
    if s['z'] < -1.0: return 'up the slide'
    if s['z'] < TS: return 'at the entrance'
    return f"in the tunnel, {s['z'] - TS:.0f} m in"
frames = [10, 62, 78, 96, 112, 126, 140, 165, 195, 225, 255, 285]
h = 520; ims = []
for f in frames:
    p = os.path.join(rec, f"f{f:04d}.jpg")
    if not os.path.exists(p): continue
    a = Image.open(p).convert('RGB'); a = a.resize((round(a.width * h / a.height), h), Image.LANCZOS)
    dd = ImageDraw.Draw(a); s = track[f]; lab = f"{(f + 1) / 30:.1f} s · {where(s)}"
    dd.rectangle([0, 0, 10 + 8 * len(lab), 22], fill=(20, 20, 60)); dd.text((5, 3), lab, font=F(13), fill=(255, 255, 255))
    ims.append(a)
cols = 6; rows = [ims[i:i + cols] for i in range(0, len(ims), cols)]
w = max(sum(i.width for i in r) + 6 * (len(r) - 1) for r in rows)
sh = Image.new('RGB', (w, len(rows) * (h + 6) - 6), (30, 30, 30))
for ri, r in enumerate(rows):
    x = 0
    for i in r: sh.paste(i, (x, ri * (h + 6))); x += i.width + 6
sh.save(os.path.join(out, 'tunnel_journey_frames.png'))
print('wrote screen3_start_vs_approved.png, tunnel_journey_frames.png')
