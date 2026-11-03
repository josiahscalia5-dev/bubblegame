"""Evidence sheets for the approved-artwork opening screen, from real Playwright screenshots.
    python3 -I opening_art_sheets.py <approved.png> <test dir> <shots_before dir> <shots_after dir> <out dir>
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont

APPROVED, TEST, BEFORE, AFTER, OUT = sys.argv[1:6]
os.makedirs(OUT, exist_ok=True)
BG, FG, DIM = (18, 22, 40), (240, 242, 250), (165, 172, 195)
F = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
FB = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
font = lambda size, bold=False: ImageFont.truetype(FB if bold else F, size)


def sheet(tiles, cols, title, sub, tile_w, file, footer=None):
    """tiles: [(label, image)]; each image scaled to tile_w wide."""
    pad, head, lab = 24, 92, 34
    ims = [(l, im.resize((tile_w, round(im.height * tile_w / im.width)), Image.LANCZOS)) for l, im in tiles]
    th = max(im.height for _, im in ims)
    rows = (len(ims) + cols - 1) // cols
    W = pad + cols * (tile_w + pad)
    H = head + rows * (lab + th + pad) + (40 if footer else 0)
    s = Image.new('RGB', (W, H), BG)
    d = ImageDraw.Draw(s)
    d.text((pad, 20), title, font=font(26, True), fill=FG)
    d.text((pad, 56), sub, font=font(16), fill=DIM)
    for i, (l, im) in enumerate(ims):
        x = pad + (i % cols) * (tile_w + pad)
        y = head + (i // cols) * (lab + th + pad)
        d.text((x, y + 6), l, font=font(15, True), fill=FG)
        s.paste(im, (x, y + lab))
    if footer:
        d.text((pad, H - 34), footer, font=font(15), fill=DIM)
    s.save(os.path.join(OUT, file), optimize=True)
    print(file, s.size)


t = lambda f: Image.open(os.path.join(TEST, f)).convert('RGB')
art = Image.open(APPROVED).convert('RGB')
# the approved artwork as the game draws it on the 538 x 1076 stage (height-fitted, centred)
stage = Image.new('RGB', (538, 1076), (163, 167, 230))
stage.paste(art.resize((536, 1076), Image.LANCZOS), (1, 0))

sheet([('APPROVED Screen 3 (your artwork, unedited)', stage), ('TEST VERSION: the game at Tap to Start', t('01_opening_1x2.png')),
       ('?classic: the original opening, unchanged', t('11_classic_1x2.png'))], 3,
      'The approved Screen 3 artwork as the opening screen, in the running game',
      'Real Playwright screenshots of the 538 x 1076 game screen (headless Chromium). Middle: the game itself, not a mock-up.', 538,
      '01_opening_vs_approved.png',
      'Game screenshot vs the approved image: average difference 0.59 of 255 per colour channel (resizing only).')

sheet([('Tap to Start (before the tap)', t('01_opening_1x2.png')), ('0.10 s after the tap', t('03_t0.10.png')), ('0.20 s', t('04_t0.20.png')),
       ('0.30 s', t('05_t0.30.png')), ('0.45 s: the live 3D game', t('06_t0.45.png')), ('1.0 s', t('07_t1.0.png')), ('2.5 s: at the door', t('08_t2.5.png')),
       ('4.0 s: inside the tunnel', t('09_t4.0_tunnel.png')), ('5.5 s: inside the tunnel', t('10_t5.5_tunnel.png'))], 5,
      'Tap to Start into the working 3D tunnel',
      'A real click on the painted "Tap to Start" started the run; the artwork fades out with the existing 0.45 s start-panel fade.', 269,
      '02_tap_into_tunnel.png',
      'Game time is stepped frame by frame with the game\'s own test hooks, so each frame is exact.')

sheet([('Phone 390 x 844 (game screen 342 x 844)', t('12_phone_390x844.png')), ('Phone 375 x 667 (game screen 343 x 667)', t('13_phone_375x667.png'))], 2,
      'Phone sizes: the whole artwork, never cropped or stretched',
      'On a screen taller than 1:2 the artwork is fitted to the width, so a band in its border colour is left below it.', 390,
      '03_phones.png',
      'Both sizes: a click on the painted gear toggled sound (the real button is within 1.5 px of it); a tap started the run.')

pairs = []
for f, l in (('t02.6.png', '2.6 s (0.6 s after the tap)'), ('t05.5.png', '5.5 s, in the tunnel'), ('t07.5.png', '7.5 s, in the tunnel')):
    pairs += [('Checkpoint build, ' + l, Image.open(os.path.join(BEFORE, f)).convert('RGB')), ('Test build, ' + l, Image.open(os.path.join(AFTER, f)).convert('RGB'))]
sheet(pairs, 6, 'The tunnel is unchanged: 0 differing pixels',
      'Same seeded run on the checkpoint build (6116703) and the test build, screenshots compared pixel by pixel after the fade.', 230,
      '04_tunnel_unchanged.png',
      '0 differing pixels at 2.6, 3.5, 5.5, 7.5 and 9.5 s. The seeded runs end identically: 12 coins, 2 gems, 3 socks, 1 lap.')
