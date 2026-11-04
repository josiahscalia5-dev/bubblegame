"""Sheets for the ?s3=round4 reconstruction: the approved Screen 4, the existing playable Screen 4 (?s3=round3, as in the
user's recording) and the reconstructed one (?s3=round4), all real game frames at the same moments and the same 538 x 1076
mobile size (seed 7, same inputs).

    python3 r4_sheets.py <frames-dir> <out-dir>

<frames-dir> holds r3/ and r4/ with t0.png (Tap to Start) and t<sec>.png, captured by tools/screen3/s3_shot.cjs with
SETTLE=800, and picks.json: {"reference": "4.2", "moments": [["3.6", "label"], ...]}.
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
BG, FG, DIM, ACC = (18, 16, 30), (245, 245, 255), (175, 170, 200), (255, 150, 220)


def font(sz, bold=True):
    p = '/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if bold else '')
    return ImageFont.truetype(p, sz) if os.path.exists(p) else ImageFont.load_default()


def tile(path, w):
    im = Image.open(path).convert('RGB')
    return im.resize((w, int(im.height * w / im.width)), Image.LANCZOS)


def sheet(name, title, sub, rows, w):
    """rows: list of rows; a row is a list of (label, path, caption)."""
    rimgs = [[tile(p, w) for _, p, _ in r] for r in rows]
    rh = [max(i.height for i in r) for r in rimgs]
    W = max(len(r) for r in rows) * (w + 14) + 14
    H = 72 + sum(h + 64 for h in rh) + 8
    s = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(s)
    d.text((14, 12), title, font=font(24), fill=FG)
    d.text((14, 44), sub, font=font(14, False), fill=DIM)
    y = 72
    for r, ims, h in zip(rows, rimgs, rh):
        for k, ((lab, _, cap), im) in enumerate(zip(r, ims)):
            x = 14 + k * (w + 14)
            d.text((x, y + 4), lab, font=font(14), fill=ACC if 'ROUND 4' in lab or 'RECONSTRUCTED' in lab else FG)
            s.paste(im, (x, y + 28))
            d.text((x, y + 28 + h + 6), cap, font=font(12, False), fill=DIM)
        y += h + 64
    s.save(os.path.join(OUT, name), quality=90) if name.endswith('.jpg') else s.save(os.path.join(OUT, name))
    print('wrote', name, s.size)


P = json.load(open(os.path.join(FR, 'picks.json')))
ref = P['reference']
sheet('01_approved_vs_existing_vs_reconstructed.png', 'Screen 4: approved, the existing playable version and the reconstruction',
      f'Real game frames, {ref} s after Tap to Start, 538 x 1076, the same run (seed 7) and camera in both versions. Nothing of the approved picture is used in the game.',
      [[('APPROVED Screen 4', S4A, 'the target'), ('EXISTING: ?s3=round3', os.path.join(FR, 'r3', f't{ref}.png'), 'as in your recording'),
        ('RECONSTRUCTED: ?s3=round4', os.path.join(FR, 'r4', f't{ref}.png'), 'this round')]], 360)
sheet('02_during_movement.png', 'The same run at several moments: approved, existing (round 3) and reconstructed (round 4)',
      'Real gameplay frames while the character travels through the tunnel; coins, gem and socks are real collectibles, brushes turn, foam and bubbles move.',
      [[('APPROVED Screen 4', S4A, 'the target')] + [(f'EXISTING {t} s', os.path.join(FR, 'r3', f't{t}.png'), lab) for t, lab in P['moments']],
       [('APPROVED Screen 4', S4A, 'the target')] + [(f'ROUND 4 {t} s', os.path.join(FR, 'r4', f't{t}.png'), lab) for t, lab in P['moments']]], 230)
sheet('03_tap_to_start.png', 'Tap to Start (Screen 3): live 3D in both; round 4 changes only the tunnel seen through the door',
      'The opening, the pink character and the controls are unchanged.',
      [[('APPROVED Screen 3', S3A, 'the target'), ('EXISTING: round 3', os.path.join(FR, 'r3', 't0.png'), ''), ('ROUND 4', os.path.join(FR, 'r4', 't0.png'), '')]], 330)
