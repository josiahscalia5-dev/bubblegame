"""Screen 4's tunnel WATER material, from the user's Reference 5 (a prop-free blue-water vortex; material and finish only),
colour-graded to the ORIGINAL APPROVED Screen 4's measured palette (the authority for colours).

   "$BW_PY" WebDemo/tools/screen4/derive_ref5_water.py [--out WebDemo/textures/screen4] [--sheet <dir>]

  Reference 5: Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/05_REF5_BLUE_WATER_VORTEX.png
  Original:    Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg

1. Unwrap Reference 5 in LOG-POLAR space round its own vanishing point (its warm core, (0.5125, 0.515) of the frame), 1:1 in
   angle (it is a full 360-degree vortex: seamless in angle by construction; its lower flowing water lands at the bottom of
   the tube, where the game's floor is). Rows follow the GAME's layout: v = (ln rw - ln 0.025) / ln(0.85 / 0.025), rw = the
   screen radius round the game's vanishing point in screen widths (the hero shaders' lqRing / heroVortex layout), so the
   wall shader needs no change. Reference 5's radius for each row: ln r5 = f(ln rw), slope 0.66 in the walls (its rings are
   denser than the original's: 0.13-0.22 ln apart against 0.20-0.35, so 8-10 bands per sector, as approved) easing to slope
   1 inside rw 0.1 (so its warm core stays at the centre); rw 0.5 (the mouth) <-> r5 0.48 of its width.
2. Grade it to the original zone by zone (the core rw < 0.07, the mid vortex 0.07-0.2, the walls beyond): per-channel
   quantile maps from Reference 5's texels to the original's own clear tunnel texels in the same zone and over the same
   angles (the upper half and the sides; objects, HUD, rim and character masked out, tools/screen4/derive_tunnel_textures.py),
   blended smoothly across zone edges. So the colour relationships are the original's; the water's pattern, gloss and depth
   are Reference 5's, with no copied artwork, no props and no seams.
3. Write (sRGB PNGs, angle across from screen right counter-clockwise, log r down, row 0 = rw 0.025):
     tunnel_colour.png 2048 x 1024 (the graded water; clamped in log r), tunnel_base.png 256 x 128 (its blur),
     tunnel_detail.png / tunnel_normal.png / tunnel_var.png (its band-scale detail, a normal map from it, and streaks / warm /
     broken-brightness; periodic in angle and in log r over a whole number of its bands, for continuous flow),
   and textures.json (the constants).
"""
import argparse, json, os, sys
import numpy as np, cv2
from PIL import Image

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import derive_tunnel_textures as DT  # noqa: E402

_REL5 = 'Design/ReferencePacks/2026-11-05_Screen4_Supporting_Material_References/05_REF5_BLUE_WATER_VORTEX.png'
# this checkout, or (from a git worktree under .claude/worktrees/) the main checkout
REF5 = next((p for p in (os.path.join(DT.REPO, _REL5), os.path.join(DT.REPO, '..', '..', '..', _REL5)) if os.path.exists(p)), os.path.join(DT.REPO, _REL5))
VP5 = (0.5125, 0.515)
R0, R1, NU, NV = DT.R0, DT.R1, DT.NU, DT.NV          # the game's layout (0.025 .. 0.85 W)
K_WALL, KNEE, R5_MOUTH = 0.66, 0.1, 0.48
ZONES = [(0.0, 0.07), (0.07, 0.2), (0.2, 9.0)]
WALL_ANGLES = (-20.0, 200.0)                          # the walls (upper half and sides), degrees from screen right


def ln_r5(lr):
    """Reference 5's ln radius (in its widths) for the game's ln rw: slope K_WALL in the walls, easing to 1 inside KNEE."""
    x = np.linspace(np.log(R0) - 1.0, np.log(R1) + 0.5, 4000)
    slope = K_WALL + (1 - K_WALL) / (1 + np.exp((x - np.log(KNEE)) / 0.25))
    f = np.concatenate([[0], np.cumsum((slope[1:] + slope[:-1]) * 0.5 * np.diff(x))])
    f += np.log(R5_MOUTH) - np.interp(np.log(0.5), x, f)
    return np.interp(lr, x, f)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default=os.path.join(DT.REPO, 'WebDemo/textures/screen4'))
    ap.add_argument('--sheet', default='')
    a = ap.parse_args()
    ref = np.asarray(Image.open(REF5).convert('RGB')).astype(np.float32) / 255.0
    H5, W5 = ref.shape[:2]
    th = 2 * np.pi * (np.arange(NU) + 0.5) / NU
    lr = np.log(R0) + (np.log(R1) - np.log(R0)) * (np.arange(NV) + 0.5) / NV
    T, LR = np.meshgrid(th, lr)
    r5 = np.exp(ln_r5(LR)) * W5
    mx = (VP5[0] * W5 + r5 * np.cos(T)).astype(np.float32); my = (VP5[1] * H5 - r5 * np.sin(T)).astype(np.float32)
    lp = cv2.remap(ref, mx, my, cv2.INTER_CUBIC, borderMode=cv2.BORDER_REFLECT_101)
    lp = np.clip(lp, 0, 1)

    # the original's clear tunnel texels in the same layout (the targets for the grade)
    im = DT.load_approved(); Ho, Wo = im.shape[:2]
    obj = DT.object_mask(im)
    olp, inside, _, _ = DT.unwrap(im, Wo, Ho)
    om, _, _, _ = DT.unwrap((~obj).astype(np.float32), Wo, Ho, cv2.INTER_LINEAR)
    ovalid = inside & (om > 0.99)
    rm = DT.mouth_radius(im, th)
    for j in np.nonzero(~np.isnan(rm))[0]:
        ovalid[:, j] &= np.exp(lr) <= rm[j]
    deg = np.degrees(th); deg = np.where(deg > 270, deg - 360, deg)
    wall_cols = (deg >= WALL_ANGLES[0]) & (deg <= WALL_ANGLES[1])

    # per zone, a smooth linear colour transfer (Monge-Kantorovich: the zone's colour mean and covariance moved onto the
    # original's; a per-channel quantile map stretched Reference 5's narrow dark blues and amplified its noise into
    # speckles), blended across zone edges in ln rw
    def sqrtm(S):
        w, V = np.linalg.eigh(S); return (V * np.sqrt(np.maximum(w, 1e-9))) @ V.T
    xforms = []
    for (z0, z1) in ZONES:
        rows = (np.exp(lr) >= z0) & (np.exp(lr) < z1)
        src = lp[rows][:, wall_cols].reshape(-1, 3).astype(np.float64)
        msk = ovalid[rows][:, wall_cols].reshape(-1)
        dst = olp[rows][:, wall_cols].reshape(-1, 3)[msk].astype(np.float64)
        ms, mt = src.mean(0), dst.mean(0)
        Ss, St = np.cov(src.T) + np.eye(3) * 1e-6, np.cov(dst.T) + np.eye(3) * 1e-6
        Sh = sqrtm(Ss); Shi = np.linalg.inv(Sh)
        A = Shi @ sqrtm(Sh @ St @ Sh) @ Shi
        xforms.append((ms, mt, A, int(len(dst))))
    graded = np.zeros_like(lp); wsum = np.zeros(NV, np.float32)
    for zi, (ms, mt, A, n) in enumerate(xforms):
        z0, z1 = ZONES[zi]
        lo = np.log(max(z0, 1e-6)); hi = np.log(z1)
        w = 1 / (1 + np.exp(-(lr - lo) / 0.15)) * (1 / (1 + np.exp((lr - hi) / 0.15)))
        if zi == 0:
            w = 1 / (1 + np.exp((lr - hi) / 0.15))
        g = ((lp.reshape(-1, 3) - ms) @ A.T + mt).reshape(lp.shape)
        graded += g.astype(np.float32) * w[:, None, None]; wsum += w
    colour = np.clip(graded / wsum[:, None, None], 0, 1)

    dv = lr[1] - lr[0]; du_deg = 360.0 / NU
    base = DT.blur_wrap(colour, DT.BASE_SIGMA[0] / dv, DT.BASE_SIGMA[1] / du_deg)
    detail = colour - base
    # periodic in log r over a whole number of Reference 5's bands (as unwrapped here: about 0.25 ln each)
    band = 0.25
    span = np.log(R1) - np.log(R0)
    nb = int(np.floor((span - DT.OVERLAP) / band))
    rows_p = int(round(nb * band / dv)); ov = int(round(DT.OVERLAP / dv))
    det_full = detail[:rows_p + ov]
    det_p = DT.periodic_v(det_full, ov)
    det_span = det_p.shape[0] * dv
    lum = 0.2126 * det_p[..., 0] + 0.7152 * det_p[..., 1] + 0.0722 * det_p[..., 2]
    hgt = DT.blur_wrap(lum, 2.0, 2.0)
    hw = np.concatenate([hgt[:, -2:], hgt, hgt[:, :2]], 1); hw = np.concatenate([hw[-2:], hw, hw[:2]], 0)
    gx = (hw[2:-2, 3:-1] - hw[2:-2, 1:-3]) * 0.5; gy = (hw[3:-1, 2:-2] - hw[1:-3, 2:-2]) * 0.5
    k = 0.3 / max(np.sqrt((gx ** 2 + gy ** 2).mean()), 1e-6)
    nx, ny = -gx * k, -gy * k; nl = np.sqrt(nx ** 2 + ny ** 2 + 1)
    normal = np.dstack([nx / nl * 0.5 + 0.5, ny / nl * 0.5 + 0.5, 1 / nl])
    cp = DT.periodic_v(colour[:rows_p + ov], ov)
    h, s, v = DT.hsv(cp)
    lc = 0.2126 * cp[..., 0] + 0.7152 * cp[..., 1] + 0.0722 * cp[..., 2]
    top = lc - DT.blur_wrap(lc, 4.0, 4.0)
    streak = np.clip(top / max(np.percentile(top, 99), 1e-6), 0, 1)
    warm = DT.blur_wrap(((((h >= 10) & (h < 70)) | (h >= 300)) & (s > 0.10) & (v > 0.6)).astype(np.float32), 1.5, 1.5)
    brk = DT.blur_wrap(lc - DT.blur_wrap(lc, 40.0, 60.0), 6.0, 10.0)
    brk = np.clip(0.5 + brk / max(4 * brk.std(), 1e-6), 0, 1)
    var = np.dstack([streak, np.clip(warm * 1.5, 0, 1), brk])

    os.makedirs(a.out, exist_ok=True)
    DT.save_png(os.path.join(a.out, 'tunnel_colour.png'), colour)
    DT.save_png(os.path.join(a.out, 'tunnel_base.png'), base, (256, 128))
    DT.save_png(os.path.join(a.out, 'tunnel_detail.png'), np.clip(0.5 + det_p, 0, 1))
    hn = int(round(1024 * det_p.shape[0] / NU))
    DT.save_png(os.path.join(a.out, 'tunnel_normal.png'), normal, (1024, hn))
    DT.save_png(os.path.join(a.out, 'tunnel_var.png'), var, (1024, hn))
    jpath = os.path.join(a.out, 'textures.json')
    info = json.load(open(jpath)) if os.path.exists(jpath) else {}
    info['walls'] = dict(source=os.path.relpath(REF5, DT.REPO), graded_to=os.path.relpath(DT.APPROVED, DT.REPO),
                         ref5_vanishing_point=VP5, ref5_radius='ln r5 = f(ln rw): slope %.2f in the walls, easing to 1 inside rw %.2f (logistic, 0.25 ln wide); rw 0.5 <-> r5 %.2f of its width' % (K_WALL, KNEE, R5_MOUTH),
                         r5_at=dict((('%.3f' % r), float(np.exp(ln_r5(np.log(r))))) for r in (0.025, 0.05, 0.1, 0.2, 0.3, 0.5, 0.85)),
                         game_layout=dict(r0_w=R0, r1_w=R1, ln_r0=float(np.log(R0)), ln_span=float(span)),
                         angle='u = theta / 2 pi round the vanishing point, 0 = screen right, counter-clockwise (1:1 with Reference 5)',
                         grade_zones_rw=ZONES, grade_angles_deg=WALL_ANGLES,
                         detail_ln_span=float(det_span), detail_bands=nb, detail_band_ln=band)
    with open(jpath, 'w') as f:
        json.dump(info, f, indent=1)
    print(json.dumps(info['walls'], indent=1))
    if a.sheet:
        os.makedirs(a.sheet, exist_ok=True)
        sm = lambda x: Image.fromarray(np.clip(x * 255 + 0.5, 0, 255).astype(np.uint8)).resize((1024, 512), Image.LANCZOS)
        from PIL import ImageDraw
        rows = [('1. Reference 5 unwrapped (game layout; centre at the top)', lp), ('2. graded to the original, zone by zone (tunnel_colour.png)', colour),
                ('3. detail, periodic (tunnel_detail.png)', np.clip(0.5 + det_p, 0, 1)), ('4. normal map', normal), ('5. variation map', var),
                ('6. the original unwrapped, objects greyed (the grade targets)', np.where(ovalid[..., None], olp, olp * 0.3 + 0.35))]
        sheet = Image.new('RGB', (1024 * 2 + 30, (512 + 28) * 3 + 10), (16, 16, 24)); d = ImageDraw.Draw(sheet)
        for i, (t, a2) in enumerate(rows):
            x = 10 + (i % 2) * (1024 + 10); y = 10 + (i // 2) * (512 + 28)
            sheet.paste(sm(a2), (x, y + 22)); d.text((x, y + 4), t, fill=(255, 230, 120))
        sheet.save(os.path.join(a.sheet, 'ref5_contact_sheet.jpg'), quality=90)


if __name__ == '__main__':
    main()
