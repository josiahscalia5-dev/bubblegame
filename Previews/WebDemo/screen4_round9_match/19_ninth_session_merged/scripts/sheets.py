# sheets.py <original> <before page> <before canvas> <now page> <now canvas> <out dir>
# Original / before (focus at 182ad19, the session start) / now (the merged build), all at 767 x 1536.
import sys, os, numpy as np
from PIL import Image, ImageDraw, ImageFont
O, BP, BC, NP, NC, OUT = sys.argv[1:7]
try: F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 26); Fs = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 20)
except Exception: F = Fs = None
L = lambda p: Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS)
o, bp, bc, np_, nc = L(O), L(BP), L(BC), L(NP), L(NC)
T = ['APPROVED ORIGINAL', 'BEFORE (focus, 182ad19)', 'NOW (focus, merged)']
def sheet(ims, out, box=None, width=None, sub=None):
    if box: ims = [im.crop((int(box[0]*767), int(box[1]*1536), int(box[2]*767), int(box[3]*1536))) for im in ims]
    if width: ims = [im.resize((width, int(im.height * width / im.width)), Image.LANCZOS) for im in ims]
    w, h = ims[0].size; top = 50 + (30 if sub else 0)
    W = Image.new('RGB', (len(ims) * (w + 16) - 16, h + top), (14, 18, 38)); d = ImageDraw.Draw(W)
    for k, (im, t) in enumerate(zip(ims, T)): W.paste(im, (k * (w + 16), top)); d.text((k * (w + 16) + 8, 10), t, fill=(255, 255, 255), font=F)
    if sub: d.text((8, 48), sub, fill=(170, 200, 255), font=Fs)
    W.save(os.path.join(OUT, out))
sheet([o, bp, np_], 'full_original_before_now_3.00s.png', sub='Real gameplay, seed 7, 3.0 s after the tap, HUD on; shown at 767 x 1536')
sheet([o, bc, nc], 'zoom_lower_left_corner.png', box=(0.0, 0.42, 0.42, 0.86), width=520, sub='Lower-left corner (x 0-0.42, y 0.42-0.86), 3D canvas, enlarged')
sheet([o, bc, nc], 'zoom_rings_and_currents.png', box=(0.1, 0.2, 0.9, 0.6), width=700, sub='Tunnel rings, currents and centre (x 0.10-0.90, y 0.20-0.60), enlarged')
sheet([o, bc, nc], 'zoom_water_round_her.png', box=(0.0, 0.62, 1.0, 0.95), width=760, sub='The character on top of the blue water (y 0.62-0.95)')
sheet([o, bc, nc], 'zoom_objects.png', box=(0.0, 0.25, 1.0, 0.75), width=600, sub='Coins, gem, sock and brushes (y 0.25-0.75)')
Image.blend(o, nc, 0.5).save(os.path.join(OUT, 'overlay_50pct_original_over_now.png'))
