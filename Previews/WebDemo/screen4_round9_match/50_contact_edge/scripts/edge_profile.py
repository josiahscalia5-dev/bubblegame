"""The contact edge under her, per column (diagnostic only, fifteenth session).

    python edge_profile.py <game full frame> <game face-alone frame (black elsewhere)> [<out.png>]

For each screen column across her (every 20 px): where her pink body ends at the bottom in the ORIGINAL (the top of its
water and lavender domes there), where her pink ends in the game, and where the game's water face begins (its top edge in
front of or under her). All at the original's 767 x 1536."""
import sys, numpy as np, cv2
from PIL import Image, ImageDraw
O = 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'
L = lambda p: np.asarray(Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS))
o, g, f = L(O), L(sys.argv[1]), L(sys.argv[2])
def pink(a):
    h = cv2.cvtColor(a, cv2.COLOR_RGB2HSV).astype(int); hh, s, v = h[..., 0] * 2, h[..., 1], h[..., 2]
    m = (((hh >= 290) | (hh <= 15)) & (s > 60) & (v > 110)).astype(np.uint8)
    m[:900] = 0; m[1380:] = 0
    n, lab, st, _ = cv2.connectedComponentsWithStats(m)
    k = 1 + np.argmax(st[1:, cv2.CC_STAT_AREA]); return lab == k
po, pg = pink(o), pink(g); face = f.sum(2) > 30; face[:1000] = False
print('| x | original: her pink ends at y | game: her pink ends at y | game: the water face starts at y |')
print('|---|---|---|---|')
rows = []
for x in range(160, 640, 20):
    a = np.nonzero(po[:, x])[0]; b = np.nonzero(pg[:, x])[0]; c = np.nonzero(face[1000:, x])[0]
    r = (x, a.max() if a.size else None, b.max() if b.size else None, 1000 + c.min() if c.size else None); rows.append(r)
    print('| %d | %s | %s | %s |' % tuple('-' if v is None else v for v in r))
if len(sys.argv) > 3:
    im = Image.fromarray(np.concatenate([o, g], 1)); d = ImageDraw.Draw(im)
    for x, a, b, c in rows:
        if a: d.ellipse((x - 4, a - 4, x + 4, a + 4), fill=(255, 255, 0)); d.ellipse((767 + x - 4, a - 4, 767 + x + 4, a + 4), outline=(255, 255, 0), width=2)
        if b: d.ellipse((767 + x - 4, b - 4, 767 + x + 4, b + 4), fill=(255, 0, 255))
        if c: d.rectangle((767 + x - 4, c - 4, 767 + x + 4, c + 4), fill=(0, 255, 0))
    im.crop((0, 1000, 1534, 1400)).save(sys.argv[3])
