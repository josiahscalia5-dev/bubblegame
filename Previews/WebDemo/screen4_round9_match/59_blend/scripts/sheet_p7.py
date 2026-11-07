"""ORIGINAL | previous | NEW at one moment of the Pixel 7 clips (each scaled to 1536 px tall, aspect kept), labelled; the two
clip frames are also kept at full resolution.   sheet_p7.py <frames_prev dir> <frames_new dir> <out dir> name=t ...
(t in s of the 30 fps recording; frame index round(t * 30))"""
import sys, os, shutil
from PIL import Image, ImageDraw, ImageFont
O = '/home/user/bubblegame/.claude/worktrees/agent-a19467485d7ab6a56/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
prev, new, out = sys.argv[1:4]; os.makedirs(out + '/sheets', exist_ok=True); os.makedirs(out + '/frames/pixel7', exist_ok=True)
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
for arg in sys.argv[4:]:
    name, t = arg.split('='); i = round(float(t) * 30)
    tiles = []
    for lab, p in [('ORIGINAL', O), (f'PREVIOUS intunnel ({t} s)', f'{prev}/f{i:04d}.jpg'), (f'NEW intunnel,blend ({t} s)', f'{new}/f{i:04d}.jpg')]:
        if p != O: shutil.copy(p, f"{out}/frames/pixel7/{name}_{'previous' if p.startswith(prev) else 'blend'}_f{i:04d}.jpg")
        im = Image.open(p).convert('RGB'); im = im.resize((round(im.width * 1536 / im.height), 1536), Image.LANCZOS)
        tl = Image.new('RGB', (im.width, 1582), (12, 14, 28)); tl.paste(im, (0, 46)); ImageDraw.Draw(tl).text((12, 7), lab, font=font, fill='white'); tiles.append(tl)
    s = Image.new('RGB', (sum(x.width for x in tiles) + 16, 1582)); x = 0
    for tl in tiles: s.paste(tl, (x, 0)); x += tl.width + 8
    s.save(f'{out}/sheets/pixel7_{name}.jpg', quality=90); print('wrote', f'sheets/pixel7_{name}.jpg')
