"""The ORIGINAL approved Screen 4's own tunnel RINGS as a map for ?s3=focus (step 3 of the user's fidelity plan, 5 November 2026).

    "$BW_PY" WebDemo/tools/screen4/derive_ring_map.py [--out WebDemo/textures/screen4] [--sheet <dir>]

Why: the verification audit (Previews/WebDemo/screen4_round9_match/22_verification_audit/) found the walls' ring pattern
uncorrelated with the original's (about 0, match_overlay.py). The walls' maps come from the user's Reference 5 (a prop-free
vortex) graded to the original's colours (derive_ref5_water.py), and procedural bands or ribbons are drawn over them, so the
rings sit at Reference 5's and the shader's own spacing, not at the original's radii. The user (22:40 UTC): "use the approved
reference's actual circular ring shapes, thin luminous cobalt / turquoise water bands, restrained warm centre ... remove the
oversized pale-white circle at the distant end".

What it does (no randomness):
  1. unwraps the original into the walls' log-polar space round its vanishing point (derive_tunnel_textures.py's unwrap:
     columns the screen angle, 0 = screen right, counter-clockwise; rows ln(r / W) from 0.025 W to 0.85 W), so a texel lands
     where the original has it at the hero camera (the shader's mtPlace gives the same angle and radius);
  2. masks everything that is not tunnel water (derive_tunnel_textures.py's object_mask: the HUD, coins, gem, sock, brushes,
     bubbles, the character and the foam bank, the far objects at the core) and, in the upper half, the rim, bevel and housing
     beyond the mouth (its mouth_radius);
  2b. leaves the white splash flecks and crests out of each ring's colour (WHITE_OUT; the shader draws its own white flecks);
  3. fills and smooths the clear texels ALONG each ring only (a normalised blur, wrapping in angle; sigma ANGLE_SIGMA degrees
     round the ring, RADIAL_SIGMA rows across it, wider scales only where a hole is wider): every ring keeps the original's
     radius, width and colour (cobalt, turquoise, white crests, the pastel arc, the warm core), its small sector-to-sector
     wobble kept, while the coins, sock and bubbles are not baked in;
  4. writes tunnel_rings_original.png (sRGB, NU_OUT x NV: angle across, ln r down, row 0 = 0.025 W, the same rows as
     tunnel_colour.png / tunnel_base.png, so the shader samples it with the base map's coordinates).
With --sheet: a contact sheet (the original, its unwrap with the mask, the ring map, and the map wrapped back to the frame).
"""
import argparse, os, sys, json
import numpy as np, cv2
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import derive_tunnel_textures as DT   # noqa: E402  (its unwrap, masks and normalised blur, unchanged)

ANGLE_SIGMA = 6.0     # degrees round the ring (keeps each sector's own band radii; the rings are near-circular)
RADIAL_SIGMA = 1.2    # rows across the ring (1 row = 0.0034 in ln r: the rings stay thin)
NU_OUT = 512          # columns written (the map is smooth along the angle)
# the white splash flecks and crests left out of each ring's colour (saturation under [0], value over [1]), outside the warm
# core (radius over [2] W): averaged round a ring they turned its cobalt and turquoise a pale grey-blue (the first try); the
# shader's own white fleck layer draws them as separate white shapes
WHITE_OUT = (0.22, 0.82, 0.05)


def ring_map(im, angle_sigma=None, radial_sigma=None, white_out=True):
    H, W = im.shape[:2]
    mask = DT.object_mask(im)
    h, s, v = DT.hsv(im)
    yy, xx = np.mgrid[0:H, 0:W]
    rr = np.hypot(xx - DT.VP[0] * W, yy - DT.VP[1] * H) / W
    if white_out: mask = mask | ((s < WHITE_OUT[0]) & (v > WHITE_OUT[1]) & (rr > WHITE_OUT[2]))
    lp, inside, th, lr = DT.unwrap(im, W, H)
    mlp, _, _, _ = DT.unwrap(mask.astype(np.float32), W, H, interp=cv2.INTER_NEAREST, border=1.0)
    valid = inside & (mlp < 0.5)
    # the upper half: nothing beyond the mouth (the bevel, the rim and the housing are not water)
    mr = DT.mouth_radius(im, th)
    r = np.exp(lr)[:, None]
    upper = (th > 0.05) & (th < np.pi - 0.05)
    beyond = upper[None, :] & ~np.isnan(mr)[None, :] & (r > np.nan_to_num(mr, nan=9.0)[None, :])
    valid &= ~beyond
    sig_u = (angle_sigma or ANGLE_SIGMA) / 360.0 * DT.NU
    out = DT._lowfreq(lp.astype(np.float32), valid, radial_sigma or RADIAL_SIGMA, sig_u)
    return np.clip(out, 0, 1), valid, lp


def wrap_back(m, W, H):
    """the map drawn back onto the frame (for the sheet): each pixel's angle and ln r round the vanishing point"""
    yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
    dx, dy = xx - DT.VP[0] * W, -(yy - DT.VP[1] * H)
    th = np.mod(np.arctan2(dy, dx), 2 * np.pi); r = np.hypot(dx, dy) / W
    u = th / (2 * np.pi) * m.shape[1] - 0.5
    v = (np.log(np.clip(r, DT.R0, DT.R1)) - np.log(DT.R0)) / (np.log(DT.R1) - np.log(DT.R0)) * m.shape[0] - 0.5
    return cv2.remap(m.astype(np.float32), u.astype(np.float32), v.astype(np.float32), cv2.INTER_LINEAR, borderMode=cv2.BORDER_WRAP)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--out', default=os.path.join(DT.REPO, 'WebDemo/textures/screen4'))
    ap.add_argument('--sheet', default='')
    # (pass 4b, the user's review of step 3: "restore the stronger saturated blue bands, irregular water texture, and sparkling
    # white-aqua flecks ... not smooth, uniform pastel circles": less smoothing round each ring keeps the original's own texture,
    # and its white flecks kept at their own places; the defaults reproduce the step 3 map)
    ap.add_argument('--angle', type=float, default=ANGLE_SIGMA, help='smoothing round each ring, degrees')
    ap.add_argument('--radial', type=float, default=RADIAL_SIGMA, help='smoothing across the rings, rows')
    ap.add_argument('--keep-white', action='store_true', help="keep the original's white flecks (not masked)")
    ap.add_argument('--cols', type=int, default=NU_OUT, help='columns written')
    ap.add_argument('--name', default='tunnel_rings_original')
    a = ap.parse_args()
    im = DT.load_approved(); H, W = im.shape[:2]
    m, valid, lp = ring_map(im, a.angle, a.radial, not a.keep_white)
    small = m if a.cols == DT.NU else cv2.resize(m, (a.cols, DT.NV), interpolation=cv2.INTER_AREA)
    os.makedirs(a.out, exist_ok=True)
    Image.fromarray((np.clip(small, 0, 1) * 255 + 0.5).astype(np.uint8)).save(os.path.join(a.out, a.name + '.png'))
    meta = {'source': os.path.relpath(DT.APPROVED, DT.REPO), 'vanishing_point': DT.VP, 'r0_w': DT.R0, 'r1_w': DT.R1,
            'ln_r0': float(np.log(DT.R0)), 'ln_span': float(np.log(DT.R1 / DT.R0)), 'size': [a.cols, DT.NV],
            'angle_sigma_deg': a.angle, 'radial_sigma_rows': a.radial, 'white_out': None if a.keep_white else WHITE_OUT, 'clear_share': float(valid.mean()),
            'note': 'u = theta / 2pi (0 = screen right, counter-clockwise); v = (ln(rw) - ln_r0) / ln_span; sRGB'}
    json.dump(meta, open(os.path.join(a.out, a.name + '.json'), 'w'), indent=1)
    print('wrote', os.path.join(a.out, a.name + '.png'), small.shape, 'clear share %.3f' % valid.mean())
    if a.sheet:
        os.makedirs(a.sheet, exist_ok=True)
        back = wrap_back(m, W, H)
        shown = lp.copy(); shown[~valid] = shown[~valid] * 0.25 + np.array([0.9, 0.1, 0.5]) * 0.75
        def fit(x, h): return cv2.resize(x, (int(x.shape[1] * h / x.shape[0]), h), interpolation=cv2.INTER_AREA)
        row = [fit(im, 1024), fit(back, 1024), fit(shown, 1024), fit(m, 1024)]
        sheet = np.concatenate([np.pad(x, ((0, 0), (0, 12), (0, 0)), constant_values=1) for x in row], 1)
        Image.fromarray((np.clip(sheet, 0, 1) * 255).astype(np.uint8)).save(os.path.join(a.sheet, 'ring_map_sheet.png'))
        Image.fromarray((np.clip(back, 0, 1) * 255).astype(np.uint8)).save(os.path.join(a.sheet, 'ring_map_wrapped_back.png'))
        print('sheet in', a.sheet)


if __name__ == '__main__':
    main()
