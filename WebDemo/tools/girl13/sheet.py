# girl13 (session b57cc1e7): approved reference | real game frame, side by side at the same size, with labels.
# Usage: python3 sheet.py <out.png> <ref.png> <game.png> [band_top band_h]   (band: crop the game frame to the fraction band [top, top+h] of its height)
import sys
from PIL import Image, ImageDraw, ImageFont

out, ref, game = sys.argv[1:4]
R = Image.open(ref).convert('RGB'); G = Image.open(game).convert('RGB')
if len(sys.argv) > 5:
    top, h = float(sys.argv[4]), float(sys.argv[5])
    G = G.crop((0, round(top * G.height), G.width, round((top + h) * G.height)))
H = max(R.height, G.height, 600)
R = R.resize((round(R.width * H / R.height), H), Image.LANCZOS); G = G.resize((round(G.width * H / G.height), H), Image.LANCZOS)
pad, lab = 16, 44
S = Image.new('RGB', (R.width + G.width + pad * 3, H + lab + pad), (250, 248, 252))
S.paste(R, (pad, lab)); S.paste(G, (pad * 2 + R.width, lab))
d = ImageDraw.Draw(S)
try: f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
except Exception: f = ImageFont.load_default()
d.text((pad, 10), 'APPROVED REFERENCE', fill=(90, 30, 110), font=f)
d.text((pad * 2 + R.width, 10), 'REAL GAME RENDER (three.js, girl13 candidate)', fill=(90, 30, 110), font=f)
S.save(out)
print(out, S.size)
