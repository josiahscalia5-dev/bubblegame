"""Gameplay fields of two motion traces (tools/screen4/motion_trace.cjs), frame by frame; also the camera, and the drawn-only
fields' largest change (for information).   python trace_compare.py accepted.json new.json"""
import sys, json
A, B = (json.load(open(p))['trace'] for p in sys.argv[1:3])
G = ['t', 'phase', 'x', 'xv', 'lane', 'air', 'yAbs', 'surf', 'speed', 'hearts', 'coins', 'gems', 'socks', 'knocks', 'bumps', 'z', 'cam']
diffs = [(i, k, a.get(k), b.get(k)) for i, (a, b) in enumerate(zip(A, B)) for k in G if a.get(k) != b.get(k)]
print(f'motion trace gameplay fields ({sys.argv[1].split("screen4_round9_match/")[-1]} vs {sys.argv[2].split("screen4_round9_match/")[-1]}): '
      f'{len(A)} vs {len(B)} frames x {len(G)} fields ({", ".join(G)}): {len(diffs)} differences {diffs[:10]}')
for k in ['drawn', 'drawnAboveSwellBase', 'squashY', 'swellC']:
    d = [max(abs(x - y) for x, y in zip(a[k] if isinstance(a[k], list) else [a[k]], b[k] if isinstance(b[k], list) else [b[k]]))
         for a, b in zip(A, B) if k in a and k in b]
    if d: print(f'  drawn only, for information: {k} largest change {max(d):.4f}')
