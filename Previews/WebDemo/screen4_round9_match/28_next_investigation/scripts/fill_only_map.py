"""INVESTIGATION ONLY (not used by the game): ring maps that keep the ORIGINAL's own pixels where its water is visible and
use the low-frequency blur ONLY to fill the holes (objects, HUD, character, beyond the mouth). derive_ring_map.ring_map blurs
every texel (derive_tunnel_textures._lowfreq is a normalised low-pass), so authentic splash patterns are lost even where
nothing hides them.
  ~/.bubblewash-tools/visual/bin/python fill_only_map.py <repo> <out dir>
Writes <out>/maps/<name>.png (2048 x 1024, the shipped map's layout and colour space) and <out>/map_variants.json (each map
wrapped back onto the frame and measured with layer_metrics, same regions and object mask as the diagnosis)."""
import json, os, sys
import cv2, numpy as np
REPO, OUT = sys.argv[1:3]
sys.path.insert(0, os.path.join(REPO, 'WebDemo', 'tools', 'screen4'))
import derive_tunnel_textures as DT   # noqa: E402
import derive_ring_map as RM          # noqa: E402
import layer_metrics as LM            # noqa: E402
DIAG = os.path.join(REPO, 'Previews/WebDemo/screen4_round9_match/26_layer_diagnosis')
keep = np.load(os.path.join(DIAG, 'keep_mask.npy'))
im = DT.load_approved()
H, W = im.shape[:2]

def holes_and_unwrap(white_out):
    mask = DT.object_mask(im)
    h, s, v = DT.hsv(im)
    yy, xx = np.mgrid[0:H, 0:W]
    rr = np.hypot(xx - DT.VP[0] * W, yy - DT.VP[1] * H) / W
    if white_out: mask = mask | ((s < RM.WHITE_OUT[0]) & (v > RM.WHITE_OUT[1]) & (rr > RM.WHITE_OUT[2]))
    lp, inside, th, lr = DT.unwrap(im, W, H)
    mlp, _, _, _ = DT.unwrap(mask.astype(np.float32), W, H, interp=cv2.INTER_NEAREST, border=1.0)
    valid = inside & (mlp < 0.5)
    mr = DT.mouth_radius(im, th)
    r = np.exp(lr)[:, None]
    upper = (th > 0.05) & (th < np.pi - 0.05)
    beyond = upper[None, :] & ~np.isnan(mr)[None, :] & (r > np.nan_to_num(mr, nan=9.0)[None, :])
    return lp.astype(np.float32), valid & ~beyond

def fill_only(lp, valid, feather=2.0, angle=RM.ANGLE_SIGMA, radial=RM.RADIAL_SIGMA):
    fill = DT._lowfreq(lp, valid, radial, angle / 360.0 * DT.NU)
    w = cv2.GaussianBlur(valid.astype(np.float32), (0, 0), feather)   # soft seam at the holes' edges
    w = np.where(valid, np.clip(w * 2 - 1, 0, 1) * 0 + w, 0)          # inside the clear area: mostly the original
    w = np.clip((w - 0.25) / 0.5, 0, 1)
    return np.clip(lp * w[..., None] + fill * (1 - w[..., None]), 0, 1)

variants = {}
lp_w, valid_w = holes_and_unwrap(True)
lp_k, valid_k = holes_and_unwrap(False)
variants['M1_shipped_equivalent'] = (np.clip(DT._lowfreq(lp_w, valid_w, RM.RADIAL_SIGMA, RM.ANGLE_SIGMA / 360.0 * DT.NU), 0, 1), valid_w)
variants['M2_fill_only_whites_kept'] = (fill_only(lp_k, valid_k), valid_k)
variants['M3_fill_only_whites_out'] = (fill_only(lp_w, valid_w), valid_w)
res = {'clear_share': {'whites_out': float(valid_w.mean()), 'whites_kept': float(valid_k.mean())}, 'original': LM.measure(LM.load(DT.APPROVED), keep)}
for name, (m, v) in variants.items():
    cv2.imwrite(os.path.join(OUT, 'maps', name + '.png'), cv2.cvtColor((m * 255 + 0.5).astype(np.uint8), cv2.COLOR_RGB2BGR))
    back = (np.clip(RM.wrap_back(m, LM.W, LM.H), 0, 1) * 255 + 0.5).astype(np.uint8)
    cv2.imwrite(os.path.join(OUT, 'maps', name + '_wrapped.png'), cv2.cvtColor(back, cv2.COLOR_RGB2BGR))
    res[name] = LM.measure(back, keep)
json.dump(res, open(os.path.join(OUT, 'map_variants.json'), 'w'), indent=1)
print('clear share', res['clear_share'])
ks = ['sat_blue', 'pale_blue', 'periwinkle', 'lavender', 'white', 'chroma', 'detail']
for reg in ['1_wall_rings', '2_distant_core', '3_floor_ahead']:
    print('==', reg)
    for k in ['original'] + list(variants):
        b = res[k][reg]['white_blobs']
        print('  %-26s' % k + ' '.join(f'{x}={res[k][reg][x]}' for x in ks) + f" blobs={b['count_per_10k']}/{b['mean_area']}" + (f" breakup={res[k][reg].get('ring_breakup')}" if reg.startswith('1') else ''))
