"""One side-by-side sheet: the approved Screen 4, the previous playable version and the new one, real game frames at the
same moment, mobile size (538 x 1076), seed and camera (captured with tools/screen3/s3_shot.cjs, SETTLE=800).

    python3 three_way_sheet.py <approved.jpg> <previous.png> <new.png> <out.png> "<previous label>" "<new label>" "<moment>"
"""
import sys
from PIL import Image, ImageDraw, ImageFont

APP, PREV, NEW, OUT, PL, NL, MOMENT = sys.argv[1:8]
W, H, PAD, TOP, BOT = 538, 1076, 22, 118, 50
BG, FG, DIM, ACC = (18, 16, 30), (245, 245, 255), (175, 170, 200), (255, 150, 220)


def font(sz, bold=True):
    return ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf' % ('-Bold' if bold else ''), sz)


cols = [(Image.open(APP).convert('RGB').resize((W, H), Image.LANCZOS), 'APPROVED Screen 4', 'the target', FG),
        (Image.open(PREV).convert('RGB'), 'PREVIOUS playable', PL, FG),
        (Image.open(NEW).convert('RGB'), 'NEW playable', NL, ACC)]
sheet = Image.new('RGB', (PAD + 3 * (W + PAD), TOP + H + BOT), BG)
d = ImageDraw.Draw(sheet)
d.text((PAD, 16), 'Screen 4: approved, previous and new playable versions', font=font(34), fill=FG)
d.text((PAD, 62), f'Real game frames, {MOMENT}, 538 x 1076, same seed, inputs and camera. Nothing of the approved picture is in the game.', font=font(19, False), fill=DIM)
for i, (im, title, sub, col) in enumerate(cols):
    x = PAD + i * (W + PAD)
    sheet.paste(im.resize((W, H)), (x, TOP))
    d.rectangle([x - 2, TOP - 2, x + W + 1, TOP + H + 1], outline=col, width=2)
    d.text((x, TOP + H + 8), title, font=font(20), fill=col)
    d.text((x, TOP + H + 30), sub, font=font(15, False), fill=DIM)
sheet.save(OUT)
print(OUT, sheet.size)
