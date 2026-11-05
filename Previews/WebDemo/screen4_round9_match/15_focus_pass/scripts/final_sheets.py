# final_sheets.py <original> <match before page> <focus page> <focus canvas> <out dir>: the final evidence sheets
import sys, os, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageChops
O, B, P, C, OUT = sys.argv[1:6]
try: F = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 28); Fs = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 22)
except Exception: F = Fs = None
L = lambda p: Image.open(p).convert('RGB').resize((767, 1536), Image.LANCZOS)
o, b, p, c = L(O), L(B), L(P), L(C)
def sheet(ims, titles, out, box=None, width=None, sub=None):
    if box: ims = [im.crop((int(box[0]*767), int(box[1]*1536), int(box[2]*767), int(box[3]*1536))) for im in ims]
    if width: ims = [im.resize((width, int(im.height * width / im.width)), Image.LANCZOS) for im in ims]
    w, h = ims[0].size; top = 56 + (34 if sub else 0)
    W = Image.new('RGB', (len(ims) * (w + 16) - 16, h + top), (14, 18, 38)); d = ImageDraw.Draw(W)
    for k, (im, t) in enumerate(zip(ims, titles)): W.paste(im, (k * (w + 16), top)); d.text((k * (w + 16) + 8, 12), t, fill=(255, 255, 255), font=F)
    if sub: d.text((8, 54), sub, fill=(170, 200, 255), font=Fs)
    W.save(os.path.join(OUT, out))
sheet([o, b, p], ['APPROVED ORIGINAL', 'BEFORE (?s3=match)', 'NOW (?s3=focus) 3.0 s'], 'full_original_vs_before_vs_now_3.00s.png',
      sub='Real gameplay, seed 7, 538 x 1076 game area at DPR 1.5, 3.0 s after the tap, HUD on (page screenshot); all shown at 767 x 1536')
sheet([o, p], ['APPROVED ORIGINAL', 'NOW (?s3=focus) 3.0 s'], 'full_original_vs_now_3.00s.png')
tb = (0.1, 0.22, 0.9, 0.6)
sheet([o, L(B.replace('.png', '_canvas.png')), c], ['APPROVED', 'BEFORE (match)', 'NOW (focus)'], 'closeup_tunnel_swirling_water.png', box=tb, width=760,
      sub='Tunnel interior, x 0.10-0.90, y 0.22-0.60 of the frame (3D canvas for the builds, no HUD), enlarged')
sheet([o, L(B.replace('.png', '_canvas.png')), c], ['APPROVED', 'BEFORE (match)', 'NOW (focus)'], 'closeup_cobalt_turquoise_bands.png', box=(0.08, 0.2, 0.5, 0.42), width=760,
      sub='Upper-left ring zone: cobalt ribbons, turquoise currents, dark gaps (enlarged about 2.4x)')
sheet([o, L(B.replace('.png', '_canvas.png')), c], ['APPROVED', 'BEFORE (match)', 'NOW (focus)'], 'closeup_splash_streaks_bubbles.png', box=(0.45, 0.2, 0.92, 0.45), width=760,
      sub='Upper-right ring zone: white splash streaks and bubbles at several depths (enlarged about 2.1x)')
sheet([o, L(B.replace('.png', '_canvas.png')), c], ['APPROVED', 'BEFORE (match)', 'NOW (focus)'], 'closeup_water_round_character.png', box=(0.0, 0.6, 1.0, 0.95), width=760,
      sub='The pink character on top of the water: blue water, small bubbles, sparkle; no foam cushion (canvas, no HUD)')
sheet([o, L(B.replace('.png', '_canvas.png')), c], ['APPROVED', 'BEFORE (match)', 'NOW (focus)'], 'closeup_sock.png', box=(0.55, 0.5, 1.0, 0.72), width=600,
      sub='The sock: lying sideways, toe to the lower left')
# 50% alignment overlay and a tunnel-only difference view (advisory: the original is painterly)
blend = Image.blend(o, c, 0.5); blend.save(os.path.join(OUT, 'overlay_50pct_original_over_now_canvas.png'))
yy, xx = np.mgrid[0:1536, 0:767]; r = np.hypot((xx - 0.53 * 767) / 767, (yy - 0.53 * 1536) / 767)
m = (r < 0.45) & (yy > 0.22 * 1536) & (yy < 0.62 * 1536)
diff = np.abs(np.asarray(o).astype(int) - np.asarray(c).astype(int)).mean(2)
vis = np.zeros((1536, 767, 3), np.uint8); vis[..., 0] = np.clip(diff * 2.2, 0, 255).astype(np.uint8); vis[..., 1] = (np.asarray(o.convert('L')) * 0.35).astype(np.uint8)
vis[~m] = (vis[~m] * 0.25).astype(np.uint8)
Image.fromarray(vis).save(os.path.join(OUT, 'difference_tunnel_only_original_vs_now.png'))
print('tunnel mean abs diff (0-255): now %.1f' % diff[m].mean(), end='; ')
db = np.abs(np.asarray(o).astype(int) - np.asarray(L(B.replace('.png', '_canvas.png'))).astype(int)).mean(2)
print('before %.1f' % db[m].mean())
