"""Motion report (sixteenth session): G1 (gameplay state identical, frame by frame) and M2 / M3 / M5 from the traces.
    python motion_report.py <accepted.json> <candidate.json> [R9.json]"""
import sys, json, numpy as np
A = json.load(open(sys.argv[1]))['trace']; C = json.load(open(sys.argv[2]))['trace']
R = json.load(open(sys.argv[3]))['trace'] if len(sys.argv) > 3 else None
keys = ['t', 'phase', 'x', 'xv', 'lane', 'air', 'yAbs', 'surf', 'speed', 'hearts', 'coins', 'gems', 'socks', 'knocks', 'bumps', 'z']
diff = [(i, k, a[k], c[k]) for i, (a, c) in enumerate(zip(A, C)) for k in keys if a.get(k) != c.get(k)]
print(f'G1 gameplay state, {len(A)} frames x {len(keys)} fields: {len(diff)} differences' + ('' if not diff else f' (first: {diff[:5]})'))
def bob(T, key, t0, t1):
    v = np.array([r[key] for r in T if t0 <= r['t'] <= t1 and not r['air'] and r.get(key) is not None])
    tt = np.array([r['t'] for r in T if t0 <= r['t'] <= t1 and not r['air'] and r.get(key) is not None])
    if len(v) < 8: return None
    f = np.fft.rfftfreq(len(v), d=np.median(np.diff(tt))); sp = np.abs(np.fft.rfft(v - v.mean()))
    return v.max() - v.min(), f[1:][np.argmax(sp[1:])]
for lab, T, key in (('R9', R, 'herAboveSwellBase'), ('accepted', A, 'herAboveSwellBase'), ('candidate (drawn)', C, 'drawnAboveSwellBase')):
    if T is None: continue
    b = bob(T, key, 3.55, 4.5)
    if b: print(f'M2 {lab}: her centre above the water round her (the swell / collar base), straight run 3.55-4.5 s: {b[0] * 100:.1f} cm peak to peak, strongest rhythm {b[1]:.2f} Hz')
for lab, T in (('accepted', A), ('candidate', C)):
    rolls = [(r['t'], r['rollDeg'], r.get('swellLat', 0)) for r in T]
    for ev in ('swipe_left', 'swipe_right'):
        i = next(j for j, r in enumerate(T) if r['ev'] == ev); seg = T[i:i + 14]
        pk = max(seg, key=lambda r: abs(r['rollDeg']))
        lat = max((abs(r.get("swellLat") or 0) for r in seg)); pile = 1 + min(lat * (0.14 if lab == "candidate" else 0.05), 0.3) * 0.66
        print(f'M3 {lab} {ev}: roll peak {pk["rollDeg"]:+.1f} deg at {pk["t"]:.2f} s; collar pile on the side she moves to x{pile:.2f}, the other side x{2 - pile:.2f}' + (' (candidate swerve 0.14/(m/s))' if lab == 'candidate' else ''))
    j = next(k for k, r in enumerate(T) if r['ev'] == 'swipe_up')
    air = [r for r in T[j:] if r['air']]; land = next(r for r in T[j + 1:] if not r['air'])
    print(f'M5 {lab}: in the air {len(air)} frames, swell lift factor min {min(1 - (r.get("swellAir") or 0) * (0.92 if lab == "candidate" else 0.55) for r in air):.2f}; landing at {land["t"]:.2f} s, squash {min(r["squashY"] for r in T[j:j + 40]):.3f}')
