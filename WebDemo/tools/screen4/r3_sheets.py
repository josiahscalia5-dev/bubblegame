"""Comparison sheets for the ?s3=round3 test: the approved screens beside real gameplay frames (Playwright captures).

    python3 r3_sheets.py <frames-dir> <out-dir>

<frames-dir> holds the captures made by tools/screen3/s3_shot.cjs (SETTLE=800, so the HUD fades have finished):
  normal/, r2/, r3/   each with t0.png (Tap to Start) and the run's moments t<sec>.png
The approved screens come from Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/01_APPROVED_TARGETS.
"""
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

FR, OUT = sys.argv[1], sys.argv[2]
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
APP = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Approved_Screen4_Package/01_APPROVED_TARGETS')
S3A, S4A = os.path.join(APP, '01_APPROVED_SCREEN_3_OPENING.jpg'), os.path.join(APP, '02_APPROVED_SCREEN_4_FULL.jpg')
os.makedirs(OUT, exist_ok=True)
BG, FG, DIM = (18, 16, 30), (245, 245, 255), (175, 170, 200)


def font(sz, bold=True):
    for p in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf']:
        if os.path.exists(p):
            return ImageFont.truetype(p, sz)
    return ImageFont.load_default()


def tile(path, w):
    im = Image.open(path).convert('RGB')
    return im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)


def sheet(name, title, sub, cols, w=300, note=None):
    """cols: list of (label, image path, caption)."""
    ims = [tile(p, w) for _, p, _ in cols]
    h = max(i.height for i in ims)
    W = len(ims) * (w + 14) + 14
    H = 74 + 30 + h + 54 + (30 if note else 0)
    s = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(s)
    d.text((14, 12), title, font=font(24), fill=FG)
    d.text((14, 44), sub, font=font(14, False), fill=DIM)
    for k, ((lab, _, cap), im) in enumerate(zip(cols, ims)):
        x = 14 + k * (w + 14)
        d.text((x, 78), lab, font=font(14), fill=FG)
        s.paste(im, (x, 104))
        d.text((x, 104 + h + 8), cap, font=font(12, False), fill=DIM)
    if note:
        d.text((14, H - 30), note, font=font(13, False), fill=DIM)
    s.save(os.path.join(OUT, name), quality=90) if name.endswith('.jpg') else s.save(os.path.join(OUT, name))
    print('wrote', name, s.size)


picks = json.load(open(os.path.join(FR, 'picks.json')))
moment = picks['screen4']
sheet('01_screen4_approved_vs_round2_vs_round3.png', 'Inside the washing machine: approved Screen 4, round 2 and round 3',
      f'Real game frames (headless Chromium, seed 7, middle lane), {moment} s after Tap to Start, the same moment in both rounds.',
      [('APPROVED Screen 4', S4A, 'the target'), ('BEFORE: ?s3=round2', os.path.join(FR, 'r2', f't{moment}.png'), 'last round'),
       ('NOW: ?s3=round3', os.path.join(FR, 'r3', f't{moment}.png'), 'this round')], w=360)
sheet('02_screen4_during_movement.png', 'Approved Screen 4 against round 3 while the character travels through the tunnel',
      'Real gameplay frames at several moments of the same run (seed 7). Coins, socks and the gem are real collectibles; brushes turn; foam and bubbles move.',
      [('APPROVED Screen 4', S4A, 'the target')] + [(f'round 3, {t} s', os.path.join(FR, 'r3', f't{t}.png'), lab) for t, lab in picks['moments']], w=250)
sheet('03_screen4_round2_during_movement.png', 'The same moments in round 2 (for comparison)',
      'Real gameplay frames, seed 7, middle lane.',
      [('APPROVED Screen 4', S4A, 'the target')] + [(f'round 2, {t} s', os.path.join(FR, 'r2', f't{t}.png'), lab) for t, lab in picks['moments']], w=250)
sheet('04_screen3_tap_to_start.png', 'Tap to Start: approved Screen 3 and the game, all live 3D in round 3',
      'Round 2 used the approved painting itself as the opening scenery (a flat picture); round 3 does not: castle, door, machinery, brush and bubbles are 3D models.',
      [('APPROVED Screen 3', S3A, 'the target'), ('normal game (3D)', os.path.join(FR, 'normal', 't0.png'), 'unchanged'),
       ('round 2 (painted picture)', os.path.join(FR, 'r2', 't0.png'), 'painting as scenery'), ('NOW: round 3 (3D)', os.path.join(FR, 'r3', 't0.png'), 'live 3D models')], w=300)
