# Side-by-side sheets for Level 1 flow (session b0abcf95): the original 12-screen board's panels (gameplay-flow authority) beside real
# gameplay frames of this build, and the ORIGINAL approved Screen 4 (the only Screen 4 target) beside this build's frames.
#   python3 make_sheets.py <repo>
import sys, os
from PIL import Image, ImageDraw, ImageFont
R = sys.argv[1]; E = f'{R}/Previews/WebDemo/screen4_round9_match/71_level1_flow'; A = f'{R}/Design/ApprovedScreens'; F = f'{E}/frames'
try: font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 17); small = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 14)
except Exception: font = small = ImageFont.load_default()
H = 600
def fit(p, h=H):
    im = Image.open(p).convert('RGB'); return im.resize((round(im.width * h / im.height), h), Image.LANCZOS)
beats = [
  ('01 Washer entry / Let\'s go', '03_Lets_Go_Washer_Entry.png', [f'{F}/opening_toss.jpg', f'{F}/upper_route/upper_u003.5.jpg']),
  ('02 Rescue 5 lost socks', '04_Rescue_Socks_Inside_Tunnel.png', [f'{F}/upper_route/upper_u040.0.jpg']),
  ('03 Jump to side paths', '05_Jump_To_Side_Paths.png', [f'{F}/upper_route/upper_u059.0.jpg', f'{F}/upper_route/upper_u066.0.jpg']),
  ('04 Drop to the lower path', '06_Drop_Down_To_Lower_Paths.png', [f'{F}/upper_route/upper_u113.5.jpg', f'{F}/ledge_route/ledge_u117.4.jpg']),
  ('05 Spinning brushes', '07_Watch_Out_Spinning_Brushes.png', [f'{F}/upper_route/upper_u150.0.jpg']),
  ('06 Coins, gems, socks', '08_Collect_Coins_Gems_Socks.png', [f'{F}/upper_route/upper_u197.0.jpg']),
  ('07 Avoid enemies', '09_Avoid_Enemies.png', [f'{F}/upper_route/upper_u226.0.jpg']),
  ('08 Bubble Kingdom', '10_Enter_Bubble_Kingdom.png', [f'{F}/upper_route/upper_u258.0.jpg', f'{F}/upper_route/upper_u336.0.jpg']),
  ('09 Rescue progress', '11_Rescue_Progress.png', [f'{F}/upper_route/upper_u312.0.jpg']),
  ('10 Level Complete', '12_Level_Complete.png', [f'{F}/upper_route/upper_level_complete.jpg']),
]
os.makedirs(f'{E}/sheets', exist_ok=True)
rows = []
for title, panel, game in beats:
    ims = [fit(f'{A}/{panel}')] + [fit(g) for g in game if os.path.exists(g)]
    w = sum(i.width for i in ims) + 12 * (len(ims) - 1)
    row = Image.new('RGB', (w + 20, H + 70), (14, 30, 90)); d = ImageDraw.Draw(row)
    d.text((10, 8), title, font=font, fill=(255, 230, 120)); x = 10
    for k, im in enumerate(ims):
        row.paste(im, (x, 36)); d.text((x + 4, H + 42), 'ORIGINAL BOARD' if k == 0 else 'REAL GAMEPLAY (this build)', font=small, fill=(255, 255, 255)); x += im.width + 12
    rows.append(row)
    row.save(f'{E}/sheets/beat_{title[:2]}_board_vs_game.jpg', quality=86)
for part, rs in [('1', rows[:5]), ('2', rows[5:])]:
    W = max(r.width for r in rs); sheet = Image.new('RGB', (W, sum(r.height for r in rs)), (14, 30, 90)); y = 0
    for r in rs: sheet.paste(r, (0, y)); y += r.height
    sheet.save(f'{E}/sheets/00_board_vs_game_beats_{part}.jpg', quality=84)
# the original approved Screen 4 beside this build: Tap to Start (the accepted look, unchanged) and Level 1's sections
orig = f'{R}/Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
cols = [('ORIGINAL approved Screen 4', orig), ('this build: Tap to Start', f'{F}/upper_route/upper_u001.6_tap.jpg'), ('side path (u 66)', f'{F}/upper_route/upper_u066.0.jpg'),
        ('lower path (u 116)', f'{F}/upper_route/upper_u116.0.jpg'), ('brushes (u 150)', f'{F}/upper_route/upper_u150.0.jpg'), ('Kingdom chamber (u 285)', f'{F}/upper_route/upper_u285.0.jpg')]
ims = [fit(p, 700) for _, p in cols]; W = sum(i.width for i in ims) + 12 * (len(ims) - 1) + 20
sheet = Image.new('RGB', (W, 760), (14, 30, 90)); d = ImageDraw.Draw(sheet); x = 10
for (lab, _), im in zip(cols, ims): sheet.paste(im, (x, 10)); d.text((x + 4, 718), lab, font=small, fill=(255, 255, 255)); x += im.width + 12
sheet.save(f'{E}/sheets/01_original_screen4_vs_level1_sections.jpg', quality=86)
print('sheets written')
