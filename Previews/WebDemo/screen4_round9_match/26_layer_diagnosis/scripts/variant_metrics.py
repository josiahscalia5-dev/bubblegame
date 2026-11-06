"""Measure each diagnostic variant (variants/<label>/base_canvas.png) with layer_metrics.measure, same regions and mask."""
import json, os, sys
import numpy as np
diag = sys.argv[1]
sys.path.insert(0, os.path.join(diag, '..', '..', '..', '..', 'WebDemo', 'tools', 'screen4'))
import layer_metrics as LM  # noqa: E402
keep = np.load(os.path.join(diag, 'keep_mask.npy'))
M = json.load(open(os.path.join(diag, 'metrics.json')))
out = {'A_original': M['original'], 'V0_focus_now': M['game_3.0s']}
for lab in sorted(os.listdir(os.path.join(diag, 'variants'))):
    p = os.path.join(diag, 'variants', lab, 'base_canvas.png')
    if not os.path.exists(p): continue
    st = json.load(open(os.path.join(diag, 'variants', lab, 'census.json')))['state']
    out[lab] = LM.measure(LM.load(p), keep); out[lab]['_state'] = [st['time'], st['z'], st['camera']]
json.dump(out, open(os.path.join(diag, 'variant_metrics.json'), 'w'), indent=1)
ks = ['sat_blue', 'pale_blue', 'periwinkle', 'lavender', 'white', 'chroma', 'detail']
for reg in LM.REGIONS:
    print('==', reg)
    for k, v in out.items():
        b = v[reg]['white_blobs']
        print('  %-24s ' % k + ' '.join(f'{x}={v[reg][x]}' for x in ks) + f" blobs={b['count_per_10k']}/{b['mean_area']}" + (f" ring_breakup={v[reg]['ring_breakup']}" if 'ring_breakup' in v[reg] else ''))
print('states', {k: v.get('_state') for k, v in out.items()})
