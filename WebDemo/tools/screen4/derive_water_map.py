"""The ORIGINAL approved Screen 4's own foreground water as a texture for ?s3=intunnel,water2 (6 November 2026).

    "$BW_PY" WebDemo/tools/screen4/derive_water_map.py [--out WebDemo/textures/screen4]

Crops the original (Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg, 767 x 1536)
from y Y0 to the bottom, full width: the water under and round the pink character. Masks what is not water there (the
pink character and the gold coins by colour, the two power buttons in the bottom corners and their badges by place) and
fills those holes from the surrounding water (OpenCV inpainting, Telea, then a light smoothing of the filled texels only).
Writes foreground_water_original.png (sRGB, the crop at full resolution) and .json (the crop's place in the frame).
No randomness.
"""
import argparse, json, os
import numpy as np, cv2
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', '..'))
ORIG = os.path.join(ROOT, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')
Y0 = 0.72
ap = argparse.ArgumentParser(); ap.add_argument('--out', default=os.path.join(ROOT, 'WebDemo/textures/screen4'))
ap.add_argument('--fill', default='telea', choices=['telea', 'reflect', 'patch', 'exemplar'])
ap.add_argument('--patch', type=int, default=15); ap.add_argument('--topk', type=int, default=3); ap.add_argument('--feather', type=float, default=0.5); ap.add_argument('--body-grow', type=int, default=0); ap.add_argument('--body-src-row', type=int, default=-1); ap.add_argument('--name', default=None); ap.add_argument('--alpha-body', action='store_true'); ap.add_argument('--alpha-x', type=int, nargs=2, default=None)   # (exemplar)   # reflect (R3): the water below / above mirrored into the hole
a = ap.parse_args()
o = np.asarray(Image.open(ORIG).convert('RGB')); H, W = o.shape[:2]; y0 = int(Y0 * H)
c = o[y0:].copy(); hsv = cv2.cvtColor(c, cv2.COLOR_RGB2HSV).astype(int); h, s, v = hsv[..., 0] * 2, hsv[..., 1], hsv[..., 2]
pink = (((h >= 290) | (h <= 15)) & (s > 35) & (v > 110))   # (her pale fur edge too: s > 35)
gold = ((h > 20) & (h < 65) & (s > 90) & (v > 110))
m = (pink | gold).astype(np.uint8)
yy, xx = np.mgrid[0:c.shape[0], 0:W]; fy = (yy + y0) / H; fx = xx / W
if a.fill == 'exemplar':
    # (R4) the power buttons by their own outline, measured on the original (rounded panels from y 1392 / 1394, a badge
    # circle r 48 on each), not the whole corner from y 1344: the real foam above and between them is kept
    Y = yy + y0
    def rrect(x0, x1, top, r):
        inside = (xx >= x0) & (xx <= x1) & (Y >= top)
        cyy = top + r   # the rounded top corners
        inside &= ~((xx < x0 + r) & (Y < cyy) & ((xx - (x0 + r)) ** 2 + (Y - cyy) ** 2 > r * r))
        inside &= ~((xx > x1 - r) & (Y < cyy) & ((xx - (x1 - r)) ** 2 + (Y - cyy) ** 2 > r * r))
        return inside
    m[rrect(36, 300, 1392, 30) | rrect(536, 800, 1394, 30)] = 1
    m[((xx - 256) ** 2 + (Y - 1420) ** 2 <= 48 ** 2) | ((xx - 745) ** 2 + (Y - 1418) ** 2 <= 48 ** 2)] = 1
else:
    m[(fy > 0.875) & ((fx < 0.42) | (fx > 0.64))] = 1          # the power buttons and their badges (bottom corners)
m = cv2.dilate(m, np.ones((11, 11), np.uint8))
body = np.zeros_like(m, dtype=bool)
if a.fill == 'exemplar' and a.body_grow > 0:
    # (R6, the art director's review of R4 / R5) the hole where her body was widened by --body-grow px, so the original's
    # white fur halo round her goes too; that hole is refilled only from the original's water below --body-src-row
    # (texture rows: its lower cobalt-and-white water), not from the pale glow beside her
    # (up and to the sides only: the original's lavender domes touching her lower fur stay; the halo is above and beside her)
    g = 5 + a.body_grow
    body = cv2.dilate(pink.astype(np.uint8), np.ones((g + 1, 2 * g + 1), np.uint8), anchor=(g, 0)).astype(bool)
    m = (m.astype(bool) | body).astype(np.uint8)
fill = cv2.inpaint(c, m * 255, 9, cv2.INPAINT_TELEA)
if a.fill == 'exemplar':
    # (R4, after the layer isolation of R3c: heroSwell drawn alone shows the original's bubbly water only in its top strip;
    # below it the face shows this texture's Telea fill, a pale lavender-white blur where her body was and long vertical
    # streaks and a flat triangle where the buttons were, and in the game she sits higher and the buttons differ, so those
    # fills are what is seen under her.) Exemplar-based filling (Criminisi, Perez and Toyama 2004, confidence term only):
    # from the hole's edge inward, each --patch x --patch window (15 by default) takes the best-matching real window of the original's own water
    # (sum of squared differences over its known texels, among sources within 120 rows so the water keeps its depth from
    # top to bottom; --topk > 1 picks one of the best k by a private seeded generator) and copies its texels into the hole unchanged. No
    # smoothing: the bubbles, rims and sparkles are the original's own pixels.
    P = a.patch | 1; R = P // 2
    rng = np.random.default_rng(7)
    img = c.astype(np.float32); hole = m.astype(bool); Hc = img.shape[0]
    valid = ~hole; vs = cv2.erode(valid.astype(np.uint8), np.ones((P, P), np.uint8)).astype(bool)
    vs[:R] = vs[-R:] = False; vs[:, :R] = vs[:, -R:] = False
    cy, cx = np.nonzero(vs); keep = ((cy % 2) == 0) & ((cx % 2) == 0); cy, cx = cy[keep], cx[keep]
    offs = np.arange(-R, R + 1)
    hs = cv2.cvtColor(c, cv2.COLOR_RGB2HSV).astype(np.float32); lav_px = ((hs[..., 0] * 2 >= 235) & (hs[..., 0] * 2 <= 290) & (hs[..., 1] > 50) & (hs[..., 2] > 100)).astype(np.float32)
    lav_win = cv2.boxFilter(lav_px, -1, (P, P))[cy, cx]   # each source window's lavender share (the body hole takes none)
    src = np.stack([img[(cy + dy)[:, None], cx[:, None] + offs[None, :]] for dy in offs], 1)  # (N, P, P, 3)
    src = src.reshape(len(cy), P * P, 3)
    conf = valid.astype(np.float32)
    known = valid.copy()
    pad = lambda a_: np.pad(a_, R, mode='edge')
    while not known.all():
        front = known == False  # noqa: E712
        front &= cv2.dilate(known.astype(np.uint8), np.ones((3, 3), np.uint8)).astype(bool)
        fyx = np.argwhere(front)
        pr = cv2.boxFilter(conf, -1, (P, P), normalize=True, borderType=cv2.BORDER_CONSTANT)[front]
        ty, tx = fyx[np.argmax(pr)]
        ty = int(np.clip(ty, R, Hc - 1 - R)); tx = int(np.clip(tx, R, W - 1 - R))
        win = img[ty - R:ty + R + 1, tx - R:tx + R + 1].reshape(P * P, 3); kn = known[ty - R:ty + R + 1, tx - R:tx + R + 1].reshape(P * P)
        near = ((cy >= a.body_src_row) & (lav_win < 0.1)) if (a.body_src_row >= 0 and body[ty, tx]) else (np.abs(cy - ty) <= 120)
        idx = np.nonzero(near)[0] if near.any() else np.arange(len(cy))
        if kn.any():
            d = ((src[np.ix_(idx, np.nonzero(kn)[0])] - win[kn][None]) ** 2).sum((1, 2))
        else:
            d = rng.random(len(idx))
        best = idx[np.argsort(d)[:max(1, a.topk)]]; pick = best[rng.integers(len(best))]
        newp = ~kn
        if a.feather > 0:   # the texels an earlier window filled (never the original's own) blended with this one: no square seams
            ov = kn & ~valid[ty - R:ty + R + 1, tx - R:tx + R + 1].reshape(P * P)
            win[ov] = win[ov] * (1 - a.feather) + src[pick][ov] * a.feather
        win[newp] = src[pick][newp]
        img[ty - R:ty + R + 1, tx - R:tx + R + 1] = win.reshape(P, P, 3)
        cval = float(cv2.boxFilter(conf, -1, (P, P), normalize=True, borderType=cv2.BORDER_CONSTANT)[ty, tx])
        cw = conf[ty - R:ty + R + 1, tx - R:tx + R + 1].reshape(P * P); cw[newp] = cval
        conf[ty - R:ty + R + 1, tx - R:tx + R + 1] = cw.reshape(P, P)
        known[ty - R:ty + R + 1, tx - R:tx + R + 1] = True
    fill = np.clip(img, 0, 255).astype(np.uint8)
if a.fill == 'reflect':
    # (R3) Telea fills a large hole with streaks drawn toward its middle: the strip under her body (where the original has
    # her fur) read as vertical smears on the water. Instead each hole texel takes the original's own water mirrored about
    # the hole's edge in its column: below her (the hole's lower edge) upward; above the buttons (their upper edge)
    # downward; what is left (no clear water in reach) keeps the Telea fill
    out0 = fill.copy(); Hc = c.shape[0]
    for x in range(W):
        col = m[:, x].astype(bool)
        if not col.any(): continue
        ys = np.nonzero(col)[0]
        runs = np.split(ys, np.nonzero(np.diff(ys) > 1)[0] + 1)
        for r in runs:
            top, bot = r[0], r[-1]
            for y in r:
                src = 2 * bot + 1 - y if bot + 1 < Hc and (bot + 1 + (bot - y)) < Hc else 2 * top - 1 - y
                if 0 <= src < Hc and not col[src]: out0[y, x] = c[src, x]
    fill = cv2.GaussianBlur(out0, (0, 0), 0.6)
os.makedirs(a.out, exist_ok=True)
if a.fill == 'patch':
    # (R3b, after the art director's review of the mirrored fill: a hard seam on the mirror line, a mirrored blotch, a
    # kaleidoscope symmetry) each hole run in a row takes a TRANSLATED copy of the original's own water beside it at the
    # same height (the left part of the run from the left of the hole, the right part from the right, shifted by the run's
    # length plus a margin, never mirrored), cross-faded over 16 texels where the two halves meet and into the hole's edge;
    # rows with no clear water beside them keep the Telea fill
    telea = fill.astype(np.float32); patch = telea.copy(); have = np.zeros(m.shape, np.float32)
    for y in range(c.shape[0]):
        row = m[y].astype(bool)
        if not row.any(): continue
        xs = np.nonzero(row)[0]; runs = np.split(xs, np.nonzero(np.diff(xs) > 1)[0] + 1)
        for r in runs:
            x0, x1 = r[0], r[-1]; L = x1 - x0 + 1; mid = (x0 + x1) / 2.0
            for x in r:
                wR = np.clip((x - mid) / 16.0 + 0.5, 0.0, 1.0)            # 0 on the left half, 1 on the right, a 16-texel blend
                sl, sr = x - L - 6, x + L + 6
                okl = 0 <= sl < W and not row[sl]; okr = 0 <= sr < W and not row[sr]
                if okl and okr: v = c[y, sl] * (1 - wR) + c[y, sr] * wR
                elif okl: v = c[y, sl]
                elif okr: v = c[y, sr]
                else: continue
                patch[y, x] = v; have[y, x] = 1.0
    # into the hole's edge and over rows without a source: back to the Telea fill
    dist = cv2.distanceTransform(m, cv2.DIST_L2, 5).astype(np.float32)
    w = (np.clip(dist / 16.0, 0.0, 1.0) * have)[..., None]
    fill = (telea * (1 - w) + patch * w).astype(np.uint8)
# the filled texels softened a little (telea, reflect, patch; the patch fill's own texels were saved before this fix);
# the exemplar fill keeps the original's pixels unsoftened
soft = cv2.GaussianBlur(fill, (0, 0), 4)
k = cv2.GaussianBlur(m.astype(np.float32), (0, 0), 3)[..., None]
out = fill if a.fill == 'exemplar' else (fill * (1 - k * 0.6) + soft * k * 0.6).astype(np.uint8)
name = a.name or {'telea': 'foreground_water_original.png', 'exemplar': 'foreground_water_original_r4.png'}.get(a.fill, 'foreground_water_original_r3.png')
if a.alpha_body:
    # (R8, the fifteenth session) an alpha channel: 0 where the ORIGINAL has her body (the largest pink region, the pink
    # mask itself, not grown), 255 elsewhere, its edge feathered 1 px; the face drops its pixels there, so its edge in front
    # of her follows the original's own outline of the water and lavender domes against her (the colour is unchanged)
    pk = pink.astype(np.uint8); n_, lab_, st_, _ = cv2.connectedComponentsWithStats(pk)
    bodyc = lab_ == (1 + int(np.argmax(st_[1:, cv2.CC_STAT_AREA])))
    bodyc = cv2.morphologyEx(bodyc.astype(np.uint8), cv2.MORPH_CLOSE, np.ones((5, 5), np.uint8)).astype(np.float32)
    al = 1.0 - np.clip(cv2.GaussianBlur(bodyc, (0, 0), 1.0), 0.0, 1.0)
    if a.alpha_x:
        # (R8b, the art director's review of R8) no cut outside her 3D model's span: where the original's silhouette is wider
        # than her model, the cut showed the far tunnel water through two notches; the cut fades out over 8 px at x0 and x1
        x0, x1 = a.alpha_x; xs = np.arange(W, dtype=np.float32)
        win = np.clip((xs - x0) / 8.0, 0, 1) * np.clip((x1 - xs) / 8.0, 0, 1)
        al = 1.0 - (1.0 - al) * win[None, :]
    out = np.dstack([out, np.round(al * 255).astype(np.uint8)])
    print('alpha: her body', round(float(bodyc.mean()) * 100, 1), '% of the texture')
Image.fromarray(out).save(os.path.join(a.out, name))
json.dump({'source': os.path.relpath(ORIG, ROOT), 'y0': y0 / H, 'y1': 1.0, 'size': [W, H - y0], 'masked_share': round(float(m.mean()), 3)},
          open(os.path.join(a.out, name.replace('.png', '.json')), 'w'), indent=1)
print('wrote', out.shape, 'masked', round(float(m.mean()) * 100, 1), '%')
