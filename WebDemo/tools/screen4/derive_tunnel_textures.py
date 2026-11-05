"""Derive Screen 4's tunnel and rim textures from the user's ORIGINAL APPROVED Screen 4 (the only target):
     Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg  (767 x 1536)

   "$BW_PY" WebDemo/tools/screen4/derive_tunnel_textures.py [--out WebDemo/textures/screen4] [--sheet <dir for the contact sheet>] [--walls]

NOTE (5 November 2026, the user): the WALL maps are now derived from the user's Reference 5 (a prop-free water vortex) graded
to the original's palette, by tools/screen4/derive_ref5_water.py (run it after this script). This script now writes only
rim_ramp.png (the original's rim band) and the diagnostics; with --walls it also writes its own wall maps from the original
(the first attempt: its filled holes showed patch seams and repeated rows, so it is no longer used). derive_ref5_water.py uses
this script's mask and unwrap of the original as the targets of its colour grade.

What it does (reproducible, no randomness):
  1. unwraps the approved tunnel into LOG-POLAR space round its vanishing point (0.528, 0.532 of the frame): columns are the
     screen angle (0 = screen right, counter-clockwise, up positive; 0..2 pi), rows are log(r / W) from r0 = 0.012 W to
     r1 = 0.85 W (W = the frame's width). This is the hero shaders' own ring layout (lqRing / heroVortex: log of the screen
     radius rw round the vanishing point, and the angle round it), so a texel lands on screen where the approved has it;
  2. masks out everything that is not tunnel water: the HUD, coins and the gem (gold / magenta classes and the Art
     Director's boxes), the sock, the two brushes (pink fur), the big bubbles, the pink character and the foam bank, and the
     rim, bevel and housing beyond the mouth (found per angle from the lavender / warm classes);
  3. fills the holes FROM THE SAME RINGS: each hole takes the same ring's pattern from the nearest clear angle (a rotated
     colour of each hole from the clear rings round it, plus the band-scale detail quilted along the angle from clean
     segments of the same ring band; bands hidden all round repeat the detail of rings further in, turned) - so no coin,
     brush or sock colour, and no mirror seam, is baked into the walls;
  4. splits the clean map into a BASE (the radial colour zones: blurred over about one band) and the band-scale DETAIL
     (colour - base). The detail is made periodic in log r over its whole length (the last band cross-faded into the first)
     so it can scroll outward without a seam; everything is periodic in angle by construction;
  5. writes (sRGB PNGs; angle across, log r down, row 0 = r0):
       tunnel_colour.png  2048 x 1024  the clean colour map (= base + detail at zero offset), for reference and the floor;
       tunnel_base.png     256 x 128   the base (clamped in log r at run time);
       tunnel_detail.png  2048 x 1024  0.5 + detail (periodic in both directions);
       tunnel_normal.png  1024 x 512   a normal map from the detail's luminance (RG = normal xy, 0.5 = flat; periodic);
       tunnel_var.png     1024 x 512   variation: R streaks and glints (thin bright features), G warm / pastel tint,
                                       B broken brightness along the rings (periodic);
       rim_ramp.png        512 x 64    the approved rim band by angle round the rim's own centre (rows: housing, gold /
                                       mauve rim, violet bevel, lilac line, navy ring, into the blue), see RIM below;
     and a JSON of the constants (unwrap centre, r0, r1, the detail's log-r period, the band spacing) next to them.
"""
import argparse, json, os, sys
import numpy as np, cv2
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
APPROVED = os.path.join(REPO, 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg')

VP = (0.528, 0.532)            # the approved vanishing point (fractions of the frame), measured by the Art Director (vp2.py)
R0, R1 = 0.025, 0.85           # radius range of the unwrap, in frame widths (inside 0.025 W the base's first row: the warm core)
NU, NV = 2048, 1024            # the unwrap's size: angle x log r
BAND = 0.26                    # the approved's mean ring spacing in ln r (rings.py: 0.20-0.35 by sector)
BASE_SIGMA = (0.30, 7.0)       # the base's blur: ln r, degrees
OVERLAP = 0.30                 # the detail's periodic cross-fade, in ln r (about one band)

# the Art Director's object boxes on the approved (x0, x1, y0, y1; fractions of the frame), padded below
BOXES = {
    'left brush': (0.0, 0.235, 0.19, 0.45), 'left edge fur': (0.0, 0.075, 0.40, 0.70),
    'right brush': (0.76, 1.0, 0.355, 0.645),
    'big bubble': (0.635, 0.875, 0.27, 0.372), 'bubble upper centre': (0.525, 0.625, 0.345, 0.397),
    'bubble upper left': (0.225, 0.315, 0.318, 0.368), 'bubble right edge': (0.915, 1.0, 0.33, 0.405),
    'upper-left coin': (0.078, 0.222, 0.432, 0.507), 'gem': (0.258, 0.388, 0.478, 0.537),
    'big left coin': (0.072, 0.312, 0.53, 0.672),
    'sock': (0.635, 0.848, 0.54, 0.678), 'big right coin': (0.765, 1.0, 0.655, 0.815),
    'character': (0.195, 0.75, 0.675, 1.0), 'lower-left bubbles': (0.0, 0.16, 0.69, 0.80),
    # two small blue creatures (far socks' toes) either side below the centre coin
    'blue shape left': (0.365, 0.47, 0.55, 0.612), 'blue shape right': (0.6, 0.705, 0.552, 0.618),
}
# the centre coin sits right on the vanishing point: a disc (centre x, y as fractions; radius in widths), not a box, so the
# warm core just above it stays
DISCS = {'centre coin': (0.5195, 0.554, 0.057)}
HUD_Y, FOAM_Y = 0.212, 0.80    # the approved HUD's lower edge; below FOAM_Y the foam bank and the buttons


def load_approved():
    return np.asarray(Image.open(APPROVED).convert('RGB')).astype(np.float32) / 255.0


def hsv(a):
    mx, mn = a.max(-1), a.min(-1); v = mx; s = np.where(mx > 0, (mx - mn) / np.maximum(mx, 1e-6), 0)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]; d = np.maximum(mx - mn, 1e-6)
    h = np.where(mx == r, (60 * ((g - b) / d) + 360) % 360, np.where(mx == g, 60 * ((b - r) / d) + 120, 60 * ((r - g) / d) + 240))
    return h, s, v


def big_components(m, min_px):
    n, lab, st, _ = cv2.connectedComponentsWithStats(m.astype(np.uint8), 8)
    keep = np.zeros(n, bool); keep[1:] = st[1:, cv2.CC_STAT_AREA] >= min_px
    return keep[lab]


def object_mask(im):
    """True where the approved shows something that is NOT the tunnel's water (objects, HUD, character, foam)."""
    H, W = im.shape[:2]
    yy, xx = np.mgrid[0:H, 0:W]
    m = (yy < HUD_Y * H) | (yy > FOAM_Y * H)
    pad = 0.008
    for (x0, x1, y0, y1) in BOXES.values():
        m |= (xx >= (x0 - pad) * W) & (xx <= (x1 + pad) * W) & (yy >= (y0 - pad) * H) & (yy <= (y1 + pad) * H)
    for (cx, cy, rr) in DISCS.values():
        m |= np.hypot(xx - cx * W, yy - cy * H) <= rr * W
    # colour classes for what the boxes miss (far coins and socks, their dark eyes, fur at the edges), as connected shapes
    # with a margin: coin gold (outside the warm core), saturated fur pink, and dark spots (navy-black eyes, the maroon and
    # brown of the far objects at the core). The water's own pastel pink and peach glints are paler and stay.
    h, s, v = hsv(im)
    r = np.hypot(xx - VP[0] * W, yy - VP[1] * H) / W
    gold = (h >= 28) & (h < 62) & (s > 0.55) & (v > 0.55) & (r > 0.06)
    fur = ((h >= 295) | (h < 15)) & (s > 0.5) & (v > 0.45)
    # dark spots only round the centre (the far objects' eyes and maroon / brown bodies); further out the approved's own navy
    # strokes outline its painted water and stay
    dark = ((v < 0.32) | ((((h < 45) | (h >= 300)) & (s > 0.35) & (v < 0.62)))) & (r < 0.2)
    cls = big_components(gold, 60) | big_components(fur, 80) | big_components(dark, 6)
    m |= cv2.dilate(cls.astype(np.uint8), np.ones((9, 9), np.uint8)) > 0
    return m


def mouth_radius(im, thetas):
    """Per angle (upper half), the radius (frame widths) where the tunnel's blue ends and the bevel / rim begins."""
    H, W = im.shape[:2]
    h, s, v = hsv(im)
    lav = (h >= 232) & (h < 300) & (s >= 0.18) & (s < 0.62)                   # the violet bevel and the lavender housing
    warm = (((h >= 10) & (h < 55)) | (h >= 345)) & (s > 0.2) & (v > 0.55)     # the gold rim
    struct = cv2.morphologyEx((lav | warm).astype(np.uint8), cv2.MORPH_OPEN, np.ones((3, 3), np.uint8)) > 0
    rs = np.arange(0.36, 0.80, 0.002)
    out = np.full(len(thetas), np.nan)
    for i, t in enumerate(thetas):
        if not (0.05 < t < np.pi - 0.05):
            continue
        X = (VP[0] * W + rs * W * np.cos(t)).astype(int); Y = (VP[1] * H - rs * W * np.sin(t)).astype(int)
        ok = (X >= 0) & (X < W) & (Y >= int(HUD_Y * H)) & (Y < H)
        hit = np.zeros(len(rs), bool); hit[ok] = struct[Y[ok], X[ok]]
        run = np.convolve(hit.astype(float), np.ones(6) / 6, 'same') > 0.8     # 6 samples (0.012 W) of structure in a row
        k = np.argmax(run) if run.any() else -1
        if k > 0:
            out[i] = rs[k] - 0.006
    # smooth along the angle; where nothing was found (behind the brushes, under the HUD) interpolate
    good = ~np.isnan(out)
    if good.sum() > 4:
        idx = np.arange(len(out)); out = np.interp(idx, idx[good], out[good])
        out = np.convolve(np.pad(out, 40, mode='wrap'), np.ones(41) / 41, 'same')[40:-40]
    return out


def unwrap(img, W, H, interp=cv2.INTER_CUBIC, border=0.0):
    """img (H x W x C) -> log-polar (NV x NU x C). Column j: theta = 2 pi (j + .5) / NU; row i: ln r evenly from R0 to R1."""
    th = 2 * np.pi * (np.arange(NU) + 0.5) / NU
    lr = np.log(R0) + (np.log(R1) - np.log(R0)) * (np.arange(NV) + 0.5) / NV
    T, LR = np.meshgrid(th, lr)
    r = np.exp(LR) * W
    mx = (VP[0] * W + r * np.cos(T)).astype(np.float32); my = (VP[1] * H - r * np.sin(T)).astype(np.float32)
    out = cv2.remap(img, mx, my, interp, borderMode=cv2.BORDER_CONSTANT, borderValue=border)
    inside = (mx >= 0) & (mx <= W - 1) & (my >= 0) & (my <= H - 1)
    return out, inside, th, lr


def _norm_blur(d, w, sig):
    num = cv2.GaussianBlur(d * w[..., None], (0, 0), sig); den = cv2.GaussianBlur(w, (0, 0), sig)
    return num / np.maximum(den[..., None], 1e-4), den


def _lowfreq(img, m, sig_v, sig_u):
    """The low-frequency colour from the clear texels only (normalised blur, wrapping in angle); where a hole is wider than
    the kernel, the next coarser scale fills it, so every texel gets the colour of the nearest clear rings."""
    # all scales blended smoothly (finer ones weigh far more where they have clear texels): no step where a hole is wider
    # than one scale's reach
    NUM = np.zeros_like(img); DEN = np.zeros(img.shape[:2], np.float32)
    wm = m.astype(np.float32)
    for i, k in enumerate((1, 2, 4, 8, 16, 32)):
        sv, su = sig_v * k, sig_u * k
        pad = min(int(3 * su) + 1, NU)
        bi = np.concatenate([img[:, -pad:], img, img[:, :pad]], 1); bm = np.concatenate([wm[:, -pad:], wm, wm[:, :pad]], 1)
        num = cv2.GaussianBlur(bi * bm[..., None], (0, 0), sigmaX=su, sigmaY=sv, borderType=cv2.BORDER_REFLECT)[:, pad:-pad]
        den = cv2.GaussianBlur(bm, (0, 0), sigmaX=su, sigmaY=sv, borderType=cv2.BORDER_REFLECT)[:, pad:-pad]
        a = 0.02 ** i
        NUM += a * num; DEN += a * den
    out = NUM / np.maximum(DEN[..., None], 1e-12)
    return out


def fill_rings(lp, valid, beyond, lr):
    """Band-wise synthesis (no mirroring, no rotated copies of whole objects' surroundings):
    1. the LOW-FREQUENCY colour of every texel from the clear texels round it (normalised blur over about one band and a
       few degrees, coarser where the hole is wider): the approved's colour zones carried smoothly into the holes;
    2. the band-scale DETAIL (colour - low frequency) of each ring band (48 rows, about 0.16 ln, half-overlapping) quilted
       ALONG THE ANGLE from clean segments of the same band (columns with no masked texel in the band), each piece
       cross-faded over 16 columns at both ends and chosen where its ends best match the clear detail beside the hole;
       bands with no clean segment at all (beyond the mouth, off the frame) take the detail of the band two ring spacings
       further in, turned by 47 degrees so repeats do not line up;
    3. masked texels = low frequency + quilted detail, feathered over 6 texels into the clear ones."""
    lf = _lowfreq(lp, valid, 0.12 / (lr[1] - lr[0]), 12.0)
    # the warm core (r < 0.085 W): the centre coin hides its lower half, so its rings take the mean colour of the same ring's
    # clear (upper) part, not the pastel lilac the wider blur brings in from further out
    for i in np.nonzero(np.exp(lr) < 0.085)[0]:
        v = valid[i]
        if v.sum() > 20:
            lf[i, ~v] = lp[i, v].mean(0)
    D = np.where(valid[..., None], lp - lf, 0.0).astype(np.float32)
    hb, ov = 48, 16
    P = int(round(2 * BAND / (lr[1] - lr[0]))); turn = int(round(NU * 47 / 360))
    acc = np.zeros_like(D); wacc = np.zeros(D.shape[:2], np.float32); wsum = np.zeros(D.shape[:2], np.float32)
    starts = list(range(0, NV - hb + 1, hb // 2))
    if starts[-1] != NV - hb:
        starts.append(NV - hb)
    vw = np.sin(np.pi * (np.arange(hb) + 0.5) / hb)[:, None]          # the bands' vertical blend weights
    band_det = {}
    for i0 in starts:
        sl = slice(i0, i0 + hb)
        clean = valid[sl].all(0)
        Db = D[sl].copy()
        if clean.sum() < 3 * ov:
            src = None
            for k in (P, 2 * P, 3 * P):                                 # the band two (four, six) ring spacings in
                j0 = i0 - k
                if j0 >= 0 and (j0 - j0 % (hb // 2)) in band_det:
                    src = np.roll(band_det[j0 - j0 % (hb // 2)], turn * (k // P), axis=1); break
            if src is None:
                src = np.zeros_like(Db)
            out = np.where(valid[sl][..., None], Db, src)
        else:
            out = Db.copy()
            # hole runs: columns that are not clean (circular)
            bad = ~clean
            idx = np.arange(NU)
            # the clean runs (start, length), circular
            cr = []
            j = 0
            rolled = np.roll(clean, -int(np.argmax(~clean)) if (~clean).any() else 0)
            off = int(np.argmax(~clean)) if (~clean).any() else 0
            run = 0
            for jj in range(NU + 1):
                c = rolled[jj % NU] if jj < NU else False
                if c:
                    run += 1
                elif run:
                    cr.append(((off + jj - run) % NU, run)); run = 0
            cr = [c for c in cr if c[1] >= ov + 8]
            # hole runs
            hr = []
            run = 0
            rolled_b = np.roll(bad, -int(np.argmax(clean)))
            offb = int(np.argmax(clean))
            for jj in range(NU + 1):
                c = rolled_b[jj % NU] if jj < NU else False
                if c:
                    run += 1
                elif run:
                    hr.append(((offb + jj - run) % NU, run)); run = 0
            for (a, w) in hr:
                # fill [a - ov, a + w + ov) piece by piece from clean runs
                pos = a - ov; end = a + w + ov
                while pos < end:
                    need = end - pos
                    best = None
                    for (cs, cl) in cr:
                        L = min(cl, need + ov)
                        if L < 2 * ov:
                            continue
                        for s0 in range(cs, cs + cl - L + 1, max(1, (cl - L) // 6 + 1)):
                            cols_src = (np.arange(L) + s0) % NU
                            cols_dst = (np.arange(L) + pos) % NU
                            # match the first ov columns with what is already there (clear or filled)
                            e = np.mean((out[:, cols_dst[:ov]] - Db[:, cols_src[:ov]]) ** 2)
                            if best is None or e < best[0]:
                                best = (e, s0, L)
                    if best is None:
                        break
                    _, s0, L = best
                    cols_src = (np.arange(L) + s0) % NU; cols_dst = (np.arange(L) + pos) % NU
                    wgt = np.ones(L, np.float32)
                    wgt[:ov] = np.linspace(0, 1, ov + 2)[1:-1]
                    if pos + L < end:
                        pass
                    else:
                        tail = min(ov, L)
                        wgt[L - tail:] = np.minimum(wgt[L - tail:], np.linspace(1, 0, tail + 2)[1:-1])
                    piece = Db[:, cols_src]
                    cur = out[:, cols_dst]
                    keep = valid[sl][:, cols_dst]
                    newv = cur * (1 - wgt[None, :, None]) + piece * wgt[None, :, None]
                    # the clear texels inside the piece's span keep their own detail except in the blend zones
                    out[:, cols_dst] = np.where(keep[..., None] & (wgt[None, :, None] >= 0.999), cur, newv)
                    pos += L - ov
        band_det[i0] = out
        acc[sl] += out * vw[..., None]; wacc[sl] += (vw[:, 0] ** 2)[:, None]; wsum[sl] += vw[:, 0][:, None]
    # in the holes a variance-preserving blend of the overlapping bands (a plain average of two unrelated quilts halves their
    # contrast); the clear texels (the same detail in both) a plain average
    Dq = np.where(valid[..., None], acc / np.maximum(wsum[..., None], 1e-6), acc / np.sqrt(np.maximum(wacc[..., None], 1e-6)))
    syn = lf + Dq
    hole = (~valid).astype(np.uint8)
    dist = cv2.distanceTransform(1 - hole, cv2.DIST_L2, 3)
    wf = np.where(hole > 0, 1.0, np.clip(1.0 - dist / 14.0, 0, 1))[..., None]
    F = lp * (1 - wf) + syn * wf
    return F, valid | True


def blur_wrap(img, sig_v_rows, sig_u_cols):
    """Gaussian blur, wrapping in angle (columns), reflecting in log r (rows)."""
    pad = int(3 * sig_u_cols) + 1
    big = np.concatenate([img[:, -pad:], img, img[:, :pad]], 1)
    b = cv2.GaussianBlur(big, (0, 0), sigmaX=sig_u_cols, sigmaY=sig_v_rows, borderType=cv2.BORDER_REFLECT)
    return b[:, pad:-pad]


def periodic_v(D, overlap_rows):
    """Make D periodic in rows: the first `overlap` rows cross-fade with the rows just past the new end."""
    n = D.shape[0] - overlap_rows
    out = D[:n].copy()
    w = (np.arange(overlap_rows) / overlap_rows)[:, None, None] if D.ndim == 3 else (np.arange(overlap_rows) / overlap_rows)[:, None]
    w = w * w * (3 - 2 * w)
    out[:overlap_rows] = D[:overlap_rows] * w + D[n:n + overlap_rows] * (1 - w)
    return out


def save_png(path, a, size=None):
    im = Image.fromarray(np.clip(a * 255 + 0.5, 0, 255).astype(np.uint8))
    if size:
        im = im.resize(size, Image.LANCZOS)
    im.save(path, optimize=True)


# ------------------------------------------------------------------ the rim ramp
RIM_ROWS, RIM_COLS = 64, 512
# the ramp's radial axis: rho = r / R_outer (the rim's outer edge = 1), from RHO_OUT (the housing outside) to RHO_IN (the
# tunnel's blue inside the navy ring). Row 0 = RHO_OUT.
RHO_OUT, RHO_IN = 1.04, 0.80


def rim_fit(im):
    """The rim's outer edge on the approved (the Art Director's readings), as a circle: centre (px) and radius (px)."""
    H, W = im.shape[:2]
    pts = np.array([(0.10, 0.27), (0.30, 0.222), (0.50, 0.213), (0.70, 0.222), (0.85, 0.237), (0.95, 0.263), (1.0, 0.26)])
    X = pts[:, 0] * W; Y = pts[:, 1] * H
    A = np.c_[2 * X, 2 * Y, np.ones(len(X))]; b = X ** 2 + Y ** 2
    cx, cy, c = np.linalg.lstsq(A, b, rcond=None)[0]
    return cx, cy, np.sqrt(c + cx ** 2 + cy ** 2)


def rim_ramp(im, mask):
    """The rim band on the approved, sampled round the rim's own centre: columns = angle 0..pi (0 = screen right, the upper
    half; the game clamps beyond), rows = rho from RHO_OUT (the housing) to RHO_IN (the blue inside the navy ring)."""
    H, W = im.shape[:2]
    cx, cy, R = rim_fit(im)
    ang = np.pi * (np.arange(RIM_COLS) + 0.5) / RIM_COLS
    rho = RHO_OUT + (RHO_IN - RHO_OUT) * (np.arange(RIM_ROWS) + 0.5) / RIM_ROWS
    A, P = np.meshgrid(ang, rho)
    mx = (cx + P * R * np.cos(A)).astype(np.float32); my = (cy - P * R * np.sin(A)).astype(np.float32)
    ramp = cv2.remap(im, mx, my, cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)
    ok = (mx >= 0) & (mx <= W - 1) & (my >= (HUD_Y + 0.004) * H) & (my <= H - 1)
    # the brushes and the big bubbles hide parts of it
    yy, xx = np.mgrid[0:H, 0:W]
    hidm = np.zeros((H, W), bool)
    for k in ('left brush', 'big bubble', 'bubble right edge', 'right brush', 'bubble upper left'):
        x0, x1, y0, y1 = BOXES[k]
        hidm |= (xx >= (x0 - 0.01) * W) & (xx <= (x1 + 0.01) * W) & (yy >= (y0 - 0.01) * H) & (yy <= (y1 + 0.01) * H)
    hid = cv2.remap(hidm.astype(np.float32), mx, my, cv2.INTER_NEAREST, borderMode=cv2.BORDER_CONSTANT, borderValue=1) > 0.5
    clear = ok & ~hid
    out = ramp.copy()
    for i in range(RIM_ROWS):
        idx = np.nonzero(clear[i])[0]
        if len(idx) == 0:
            continue
        out[i] = np.stack([np.interp(np.arange(RIM_COLS), idx, ramp[i, idx, c]) for c in range(3)], 1)
    # rows with no clear texel at all (the housing above the top, under the HUD): the nearest row that has some
    rows_ok = clear.any(1)
    for i in range(RIM_ROWS):
        if not rows_ok[i]:
            j = np.nonzero(rows_ok)[0]; j = j[np.argmin(np.abs(j - i))]; out[i] = out[j]
    out = blur_wrap(out, 0.01, 2.0)
    span = np.nonzero(clear.mean(0) > 0.5)[0]
    return out, dict(centre_px=[float(cx), float(cy)], radius_px=float(R), centre_frac=[float(cx / W), float(cy / H)], radius_w=float(R / W),
                     angle='u = angle / pi round the rim centre (0 = screen right), clamped', rho=[RHO_OUT, RHO_IN],
                     clear_angles_deg=[float(np.degrees(ang[span.min()])) if len(span) else -1, float(np.degrees(ang[span.max()])) if len(span) else -1])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default=os.path.join(REPO, 'WebDemo/textures/screen4'))
    ap.add_argument('--sheet', default='')
    ap.add_argument('--walls', action='store_true', help='also write the wall maps derived from the original (superseded)')
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)
    im = load_approved(); H, W = im.shape[:2]

    obj = object_mask(im)
    lp, inside, th, lr = unwrap(im, W, H)
    lpm, _, _, _ = unwrap((~obj).astype(np.float32), W, H, cv2.INTER_LINEAR)
    valid = inside & (lpm > 0.99)
    # beyond the mouth (upper half): the bevel, the rim and the housing are not tunnel
    rm = mouth_radius(im, th)
    up = ~np.isnan(rm)
    beyond = np.zeros_like(valid)
    for j in np.nonzero(up)[0]:
        beyond[:, j] = np.exp(lr) > rm[j]
    valid &= ~beyond

    beyond |= ~inside
    F, have = fill_rings(lp, valid, beyond, lr)
    colour = np.clip(F, 0, 1)

    dv = lr[1] - lr[0]; du_deg = 360.0 / NU
    base = blur_wrap(colour, BASE_SIGMA[0] / dv, BASE_SIGMA[1] / du_deg)
    detail = colour - base
    ov = int(round(OVERLAP / dv))
    det_p = periodic_v(detail, ov)
    det_span = (np.log(R1) - np.log(R0)) * det_p.shape[0] / NV

    # the normal map: from the detail's luminance (crests bright), in texel space (angle across, log r down)
    lum = 0.2126 * det_p[..., 0] + 0.7152 * det_p[..., 1] + 0.0722 * det_p[..., 2]
    hgt = blur_wrap(np.dstack([lum] * 1)[..., 0], 2.0, 2.0)
    pad = 2
    hw = np.concatenate([hgt[:, -pad:], hgt, hgt[:, :pad]], 1)
    hw = np.concatenate([hw[-pad:], hw, hw[:pad]], 0)
    gx = (hw[pad:-pad, pad + 1:-pad + 1 or None] - hw[pad:-pad, pad - 1:-pad - 1]) * 0.5
    gy = (hw[pad + 1:-pad + 1 or None, pad:-pad] - hw[pad - 1:-pad - 1, pad:-pad]) * 0.5
    k = 0.6 / max(np.sqrt((gx ** 2 + gy ** 2).mean()), 1e-6) * 0.5              # RMS slope about 0.3
    nx, ny = -gx * k, -gy * k; nz = np.ones_like(nx); nl = np.sqrt(nx ** 2 + ny ** 2 + nz ** 2)
    normal = np.dstack([nx / nl * 0.5 + 0.5, ny / nl * 0.5 + 0.5, nz / nl])

    # the variation map: R thin bright features (white / cyan streaks, glints), G warm / pastel tint, B broken brightness
    cp = periodic_v(colour, ov)
    h, s, v = hsv(cp)
    lc = 0.2126 * cp[..., 0] + 0.7152 * cp[..., 1] + 0.0722 * cp[..., 2]
    top = lc - blur_wrap(lc, 4.0, 4.0)
    streak = np.clip(top / max(np.percentile(top, 99), 1e-6), 0, 1)
    warm = ((((h >= 10) & (h < 70)) | (h >= 300)) & (s > 0.10) & (v > 0.6)).astype(np.float32)
    warm = blur_wrap(warm, 1.5, 1.5)
    brk = blur_wrap(lc - blur_wrap(lc, 40.0, 60.0), 6.0, 10.0)
    brk = np.clip(0.5 + brk / max(4 * brk.std(), 1e-6), 0, 1)
    var = np.dstack([streak, np.clip(warm * 1.5, 0, 1), brk])

    # the wall maps from the original itself are written only with --walls (superseded: the walls now take the user's
    # Reference 5, graded to the original: tools/screen4/derive_ref5_water.py); the rim ramp is always written
    pref = '' if a.walls else 'orig_'
    wdir = a.out if a.walls else (a.sheet or a.out)
    if a.walls or a.sheet:
        save_png(os.path.join(wdir, pref + 'tunnel_colour.png'), colour)
    if a.walls:
        save_png(os.path.join(a.out, 'tunnel_base.png'), base, (256, 128))
        save_png(os.path.join(a.out, 'tunnel_detail.png'), np.clip(0.5 + det_p, 0, 1))
        save_png(os.path.join(a.out, 'tunnel_normal.png'), normal, (1024, int(round(1024 * det_p.shape[0] / NU))))
        save_png(os.path.join(a.out, 'tunnel_var.png'), var, (1024, int(round(1024 * det_p.shape[0] / NU))))

    ramp, rim_info = rim_ramp(im, obj)
    save_png(os.path.join(a.out, 'rim_ramp.png'), ramp)

    jpath = os.path.join(a.out, 'textures.json')
    info = json.load(open(jpath)) if os.path.exists(jpath) else {}
    info['original'] = dict(source=os.path.relpath(APPROVED, REPO), vanishing_point=VP, r0_w=R0, r1_w=R1, ln_r0=float(np.log(R0)), ln_span=float(np.log(R1) - np.log(R0)),
                detail_ln_span=float(det_span), detail_rows=int(det_p.shape[0]), band_ln=BAND, bands_in_detail_period=float(det_span / BAND),
                angle='u = theta / 2pi, theta = atan2(up, right) round the vanishing point (0 = screen right, counter-clockwise)',
                v='v = (ln(rw) - ln_r0) / ln_span (base, colour); detail / normal / var: v = (ln(rw) - ln_r0) / detail_ln_span, repeating',
                base_sigma=dict(ln_r=BASE_SIGMA[0], degrees=BASE_SIGMA[1]), overlap_ln=OVERLAP,
                masked_share=float(1 - valid.mean()), mouth_radius_w=dict(min=float(np.nanmin(rm)), max=float(np.nanmax(rm))),
                walls_written=bool(a.walls))
    info['rim'] = rim_info
    with open(jpath, 'w') as f:
        json.dump(info, f, indent=1)
    print(json.dumps(info['rim'], indent=1))

    if a.sheet:
        os.makedirs(a.sheet, exist_ok=True)
        sm = lambda x: np.asarray(Image.fromarray(np.clip(x * 255 + 0.5, 0, 255).astype(np.uint8)).resize((1024, 512), Image.LANCZOS)).astype(np.float32) / 255
        masked = lp.copy(); masked[~valid] = masked[~valid] * 0.25 + np.array([0.9, 0.1, 0.5]) * 0.75
        rows = [('1. approved unwrapped (angle across, log r down: centre at the top)', sm(lp)), ('2. mask (magenta: not tunnel)', sm(masked)),
                ('3. filled clean colour map', sm(colour)), ('4. base (radial colour zones)', sm(base)),
                ('5. detail (periodic, 0.5 + d)', sm(np.clip(0.5 + det_p, 0, 1))), ('6. normal map', sm(normal)), ('7. variation map', sm(var))]
        from PIL import ImageDraw
        sheet = Image.new('RGB', (1024 * 2 + 30, (512 + 28) * 4 + 10), (16, 16, 24)); d = ImageDraw.Draw(sheet)
        for i, (t, a2) in enumerate(rows):
            x = 10 + (i % 2) * (1024 + 10); y = 10 + (i // 2) * (512 + 28)
            sheet.paste(Image.fromarray(np.clip(a2 * 255, 0, 255).astype(np.uint8)), (x, y + 22)); d.text((x, y + 4), t, fill=(255, 230, 120))
        rp = Image.fromarray(np.clip(ramp * 255, 0, 255).astype(np.uint8)).resize((1024, 128), Image.NEAREST)
        x = 10 + 1024 + 10; y = 10 + 3 * (512 + 28)
        sheet.paste(rp, (x, y + 22)); d.text((x, y + 4), '8. rim ramp (angle round the rim centre across; housing -> rim -> bevel -> navy -> blue down)', fill=(255, 230, 120))
        # the mask on the approved itself
        ov_im = im.copy(); ov_im[obj] = ov_im[obj] * 0.3 + np.array([0.9, 0.1, 0.5]) * 0.7
        yy, xx = np.mgrid[0:H, 0:W]
        rr = np.hypot(xx - VP[0] * W, yy - VP[1] * H) / W; tt = np.arctan2(-(yy - VP[1] * H), xx - VP[0] * W) % (2 * np.pi)
        jj = np.clip((tt / (2 * np.pi) * NU).astype(int), 0, NU - 1)
        bey = np.zeros_like(obj); okk = up[jj]; bey[okk] = rr[okk] > rm[jj][okk]
        ov_im[bey & ~obj] = ov_im[bey & ~obj] * 0.4 + np.array([1.0, 0.75, 0.1]) * 0.6
        Image.fromarray(np.clip(ov_im * 255, 0, 255).astype(np.uint8)).save(os.path.join(a.sheet, 'approved_mask.png'))
        sheet.save(os.path.join(a.sheet, 'derive_contact_sheet.jpg'), quality=90)


if __name__ == '__main__':
    main()
