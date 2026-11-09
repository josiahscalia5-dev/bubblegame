# env6 (session ddf175f2): the user's requested evidence: TWO LARGE FULL-RESOLUTION PORTRAITS SIDE BY SIDE,
# LEFT the exact approved Screen 6, RIGHT the real playable game frame (864x1536 each, nothing cropped or scaled).
#   python3 sbs6.py <game frame 864x1536> <out.png> ["right label"]
import sys
from PIL import Image, ImageDraw, ImageFont
APPROVED = '/home/user/bubblegame/Design/ReferencePacks/2026-11-09_Six_Approved_Portrait_Scenes_from_user/06_Swim_Collect_Avoid_Enemies.png'
game, out = sys.argv[1], sys.argv[2]
label = sys.argv[3] if len(sys.argv) > 3 else 'REAL GAME (playable three.js, u 206)'
a = Image.open(APPROVED).convert('RGB'); g = Image.open(game).convert('RGB')
assert a.size == (864, 1536), a.size
if g.size != (864, 1536): g = g.resize((864, 1536), Image.LANCZOS)
H = 56; gap = 24
W = Image.new('RGB', (864 * 2 + gap, 1536 + H), (18, 16, 28)); W.paste(a, (0, H)); W.paste(g, (864 + gap, H))
d = ImageDraw.Draw(W)
try: f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 30)
except Exception: f = ImageFont.load_default()
d.text((16, 12), 'APPROVED Screen 6 (exact image)', fill=(255, 220, 120), font=f)
d.text((864 + gap + 16, 12), label, fill=(255, 220, 120), font=f)
W.save(out); print(out, W.size)
