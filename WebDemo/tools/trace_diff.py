# python3 -I tools/trace_diff.py a.json b.json : compares two tools/trace.cjs traces frame by frame
import json, sys
a, b = json.load(open(sys.argv[1])), json.load(open(sys.argv[2]))
keys = ['phase', 'z', 'x', 'y', 'world', 'lane', 'speed', 'air', 'socks', 'laps']
def eq(u, v): return u == v
diff = {k: 0 for k in keys + ['camera', 'counts']}
first_cam = last_cam = None
for fa, fb in zip(a, b):
    for k in keys:
        if not eq(fa[k], fb[k]): diff[k] += 1
    if fa['camera'] != fb['camera'] or fa['cameraUp'] != fb['cameraUp']:
        diff['camera'] += 1
        first_cam = fa['f'] if first_cam is None else first_cam; last_cam = fa['f']
    if (fa['coins'], fa['gems'], fa['collected']) != (fb['coins'], fb['gems'], fb['collected']): diff['counts'] += 1
print('frames', len(a), len(b))
print('frames that differ per field:', json.dumps(diff))
if first_cam is not None: print(f'camera differs from frame {first_cam} ({first_cam/30:.2f} s) to frame {last_cam} ({last_cam/30:.2f} s)')
print('end A', json.dumps({k: a[-1][k] for k in ['collected', 'coins', 'gems', 'laps', 'z']}))
print('end B', json.dumps({k: b[-1][k] for k in ['collected', 'coins', 'gems', 'laps', 'z']}))
