# girl13/girl3 (session b57cc1e7): the approved references next to the matching REAL game frames of one recording (record_full.cjs).
# Usage: python3 evidence_pairs.py <frames dir> <fps> <out dir> <ref pack dir> <wait s>   (frame index = (wait + t) * fps for opening time t)
# Writes one side-by-side PNG per story beat plus all_beats.png (labels: the beat, the approved file, the real time of the game frame).
import sys, os, glob
from PIL import Image, ImageDraw, ImageFont

fr, fps, out, refs, wait = sys.argv[1], float(sys.argv[2]), sys.argv[3], sys.argv[4], float(sys.argv[5])
os.makedirs(out, exist_ok=True)
frames = sorted(glob.glob(os.path.join(fr, 'f_*.jpg')))
try: F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 20)
except Exception: F = ImageFont.load_default()
OLD = '/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/'
# (beat, approved image, opening time in s after START; None = a frame index counted from the end of the recording)
BEATS = [
    ('1 he hides under the blue towel (waiting)', os.path.join(refs, '02_APPROVED_girl_hideout_closeup.jpg'), -0.5),
    ('2 she grips the laundry, he ducks (she does not see him)', os.path.join(refs, '02_APPROVED_girl_hideout_closeup.jpg'), 1.6),
    ('3 she carries the bundle to the washer', os.path.join(refs, '03_APPROVED_girl_loads_blue_towel.jpg'), 5.2),
    ('4 the bundle goes in, he slips into the drum', os.path.join(refs, '06_APPROVED_oops_he_goes_in.png'), 6.9),
    ('5 his face in the drum (Oops)', os.path.join(refs, '06_APPROVED_oops_he_goes_in.png'), 7.7),
    ('6 the wash begins: the water round him', os.path.join(refs, '04_APPROVED_the_wash_begins.jpg'), 10.7),
    ('7 the spin, then the water passage', os.path.join(refs, '04_APPROVED_the_wash_begins.jpg'), 12.4),
    ('8 the passage opens into the existing Screen 6', os.path.join(refs, '05_APPROVED_screen6_portal_waterfall.jpg'), 13.55),
    ('9 playing Screen 6 (after the tap and swipes)', os.path.join(refs, '01_APPROVED_screen6_tunnel_coins_enemies.jpg'), None),
]
H = 640; sheets = []
for i, (label, ref, t) in enumerate(BEATS):
    idx = len(frames) - 12 if t is None else int(round((wait + t) * fps)) if t >= 0 else int(round((wait + t) * fps))
    idx = max(0, min(len(frames) - 1, idx))
    R = Image.open(ref).convert('RGB'); G = Image.open(frames[idx]).convert('RGB')
    R = R.resize((round(R.width * H / R.height), H)); G = G.resize((round(G.width * H / G.height), H))
    S = Image.new('RGB', (R.width + G.width + 30, H + 70), (250, 248, 252)); S.paste(R, (10, 60)); S.paste(G, (20 + R.width, 60))
    d = ImageDraw.Draw(S); d.text((10, 6), label, fill=(80, 20, 100), font=F)
    d.text((10, 32), f'APPROVED: {os.path.basename(ref)}', fill=(90, 90, 90), font=F); d.text((20 + R.width, 32), f'REAL GAME frame {idx} ({idx / fps:.2f} s into the recording)', fill=(90, 90, 90), font=F)
    p = os.path.join(out, f'beat_{i + 1}.png'); S.save(p); sheets.append(S)
W = max(s.width for s in sheets); A = Image.new('RGB', (W, sum(s.height for s in sheets)), 'white'); y = 0
for s in sheets: A.paste(s, (0, y)); y += s.height
A.resize((W // 2, A.height // 2)).save(os.path.join(out, 'all_beats.png')); print('wrote', len(sheets), 'beats')
