"""Does the ring map already lose the original's colour distribution before rendering? Wrap each derived map back onto the
frame (derive_ring_map.wrap_back) and measure it with layer_metrics.measure in the same regions and object mask as the game.
  ~/.bubblewash-tools/visual/bin/python map_stages.py <WebDemo> <diag dir>"""
import json, os, sys
import cv2, numpy as np
demo, diag = sys.argv[1:3]
sys.path.insert(0, os.path.join(demo, 'tools', 'screen4'))
import derive_ring_map as RM   # noqa: E402
import layer_metrics as LM     # noqa: E402
orig = LM.load(os.path.join(demo, '..', 'Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg'))
keep = np.load(os.path.join(diag, 'keep_mask.npy'))
im = orig.astype(np.float32) / 255
stages = {}
shipped = cv2.cvtColor(cv2.imread(os.path.join(demo, 'textures/screen4/tunnel_rings_original.png')), cv2.COLOR_BGR2RGB).astype(np.float32) / 255
stages['B_shipped_map'] = shipped
m, valid, lp = RM.ring_map(im)                                  # as derived: white out, 6 deg x 1.2 rows
stages['C_rederived_default'] = m
m2, valid2, _ = RM.ring_map(im, white_out=False)                # whites kept in the average
stages['D_whites_kept'] = m2
m3, valid3, _ = RM.ring_map(im, angle_sigma=1.0, radial_sigma=0.5, white_out=False)   # whites kept, far less smoothing
stages['E_whites_kept_light_blur'] = m3
stages['F_unwrap_only'] = np.clip(lp, 0, 1)                     # the original's own pixels in map space, no blur at all
out = {'A_original': LM.measure(orig, keep)}
os.makedirs(os.path.join(diag, 'map_stages'), exist_ok=True)
for k, mm in stages.items():
    sm = cv2.resize(mm, (shipped.shape[1], shipped.shape[0]), interpolation=cv2.INTER_AREA) if mm.shape != shipped.shape and k != 'F_unwrap_only' else mm
    back = RM.wrap_back(sm if k != 'F_unwrap_only' else mm, LM.W, LM.H)
    b8 = (np.clip(back, 0, 1) * 255 + 0.5).astype(np.uint8)
    cv2.imwrite(os.path.join(diag, 'map_stages', k + '.png'), cv2.cvtColor(b8, cv2.COLOR_RGB2BGR))
    out[k] = LM.measure(b8, keep)
out['clear_share_default'] = float(valid.mean())
json.dump(out, open(os.path.join(diag, 'map_stages.json'), 'w'), indent=1)
ks = ['sat_blue', 'pale_blue', 'periwinkle', 'lavender', 'white', 'chroma', 'detail']
for reg in ['1_wall_rings', '2_distant_core', '3_floor_ahead']:
    print('==', reg)
    for k in out:
        if k.startswith('clear'): continue
        print('  %-26s ' % k + ' '.join(f'{x}={out[k][reg][x]}' for x in ks))
print('clear share', out['clear_share_default'])
