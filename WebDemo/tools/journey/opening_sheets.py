# (session 8da775c4) Evidence sheets of the opening from real game frames (tools/six2/shots6.cjs output t_<real seconds>.png):
#   python opening_sheets.py <frames dir> <out dir> <repo root>
# Writes SBS_approved_vs_game_screens_1-5.jpg (approved on top, the running game below, same 432x768 cell), GAZE_she_never_looks_at_him.jpg,
# STRIP_wash_spin_tunnel.jpg. The moments are fixed below (real seconds after START with seq7's timing).
import sys, os
from PIL import Image, ImageDraw
F, OUT, ROOT = sys.argv[1:4]
REF = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user')
W, H = 432, 768
def fr(t): return Image.open(os.path.join(F, 't_%.2f.png' % t)).convert('RGB').resize((W, H), Image.LANCZOS)
def label(im, text):
    d = ImageDraw.Draw(im); d.rectangle([0, 0, im.width, 20], fill=(20, 12, 40)); d.text((6, 4), text, fill=(255, 255, 255)); return im
def row(cells):
    s = Image.new('RGB', (len(cells) * (W + 4) - 4, H), (20, 12, 40))
    for i, c in enumerate(cells): s.paste(c, (i * (W + 4), 0))
    return s
os.makedirs(OUT, exist_ok=True)
pairs = [('01_Surprise_Hideout.png', -1.0, '1 waiting'), ('02_She_Loads_Laundry.png', 2.4, '2 at 2.4 s'), ('03_Oops_He_Goes_In.png', 5.6, '3 at 5.6 s'), ('04_The_Wash_Begins.png', 8.0, '4 at 8.0 s'), ('05_Into_The_Laundry_Tunnel.png', 9.75, '5 at 9.75 s')]
top = row([label(Image.open(os.path.join(REF, r)).convert('RGB').resize((W, H), Image.LANCZOS), 'APPROVED ' + r[:2]) for r, _, _ in pairs])
bot = row([label(fr(t), 'REAL GAME (seq7) screen ' + n) for _, t, n in pairs])
s = Image.new('RGB', (top.width, H * 2 + 4), (20, 12, 40)); s.paste(top, (0, 0)); s.paste(bot, (0, H + 4)); s.save(os.path.join(OUT, 'SBS_approved_vs_game_screens_1-5.jpg'), quality=88)
row([label(fr(t), 'she faces the washer, %s s' % t) for t in (-1.0, 3.3, 3.9, 4.2)]).save(os.path.join(OUT, 'GAZE_she_never_looks_at_him.jpg'), quality=88)
ts = (7.4, 8.0, 8.75, 8.95, 9.1, 9.25, 9.4, 9.55, 9.75)
st = row([label(fr(t).resize((W, H)), '%.2f s' % t) for t in ts]); st = st.resize((st.width * 2 // 3, st.height * 2 // 3), Image.LANCZOS); st.save(os.path.join(OUT, 'STRIP_wash_spin_tunnel.jpg'), quality=86)
print('sheets written to', OUT)
