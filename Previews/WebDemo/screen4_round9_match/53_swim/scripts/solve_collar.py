"""Solve the contact collar's crest heights (sixteenth session, ?s3=intunnel,swim).

    python solve_collar.py <frame_start.json> [ax au]

Through the exact start camera (tools/screen4/frame_dump.cjs) and her water frame there (her x, z, the water surface
under her: the collar's base under SWIM_ON), for each crest angle phi from -110 to 110 degrees in 5-degree steps (+ is
screen left), the crest point (ax sin phi, h, -au cos phi) in her frame is projected into the 767 x 1536 frame and its
height h found by bisection so that it lands on the ORIGINAL's own waterline on her: the lowest row of the original's pink
fur at that column (pink_silhouette.py's mask, smoothed over 25 px, shifted by the difference of the two centres so it is
her outline, not the original's place; just past the outline's ends, its end value). Behind her widest point (|phi| > 92)
the crest sinks to `FLOOR` m over `FADE` degrees: the collar ends in the floor water instead of forming a pad. Prints the
line as a JS array."""
import sys, json, numpy as np
sys.path.insert(0, '/workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/scripts')
exec(open('/workspace/bubblegame/Previews/WebDemo/screen4_round9_match/52_diagnosis/scripts/pink_silhouette.py').read().split("rows = [('ORIGINAL'")[0])
F = json.load(open(sys.argv[1]))
AX = float(sys.argv[2]) if len(sys.argv) > 2 else 0.47
AU = float(sys.argv[3]) if len(sys.argv) > 3 else 0.40
FLOOR, FADE, BEHIND = 0.03, 15.0, 92
P = np.array(F['proj']).reshape(4, 4).T; V = np.array(F['view']).reshape(4, 4).T; M = P @ V
R, U, T = (np.array(F['frame'][k]) for k in 'RUT')
C = np.array(F['frame']['P']) + R * F['x'] + U * F['surf']   # her water frame: her x, the water surface under her
def proj(x, h, u):
    w = C + R * x + U * h + T * u; c = M @ np.append(w, 1.0); n = c[:3] / c[3]
    return (n[0] + 1) / 2 * 767, (1 - n[1]) / 2 * 1536
# the original's waterline on her: the lowest pink row per column, smoothed; her place in the game: her root projected
_, m = sil(ORIG)
cols = np.arange(767); low = np.array([np.nonzero(m[:, x])[0].max() if m[:, x].any() else -1 for x in cols], float)
have = low > 0; xs = cols[have]; lo = low[have]
k = 25; sm = np.array([lo[max(0, i - k // 2):i + k // 2 + 1].mean() for i in range(len(lo))])
oc = float(np.nonzero(m)[1].mean())
root = np.array(F['root']); c = M @ np.append(root, 1.0); gcx = (c[0] / c[3] + 1) / 2 * 767
shift = gcx - oc
def target(sx):   # (just past the outline's ends: its end value, so the crest has no notch at her widest point)
    return float(np.interp(sx - shift, xs, sm))
line, info = [], []
for i, phi in enumerate(range(-110, 115, 5)):
    a = np.radians(phi); x, u = AX * np.sin(a), -AU * np.cos(a)
    sx0, _ = proj(x, 0.1, u); ty = target(sx0)
    if abs(phi) > BEHIND:   # behind her widest point: hidden by her body; it sinks into the floor (below)
        line.append(None); info.append((phi, round(sx0), None)); continue
    lo_h, hi_h = -0.1, 0.9
    for _ in range(40):
        mid = (lo_h + hi_h) / 2; sx, sy = proj(x, mid, u)
        ty = target(sx) or ty
        if sy > ty: lo_h = mid   # lands too low on the screen: higher crest
        else: hi_h = mid
    line.append(round((lo_h + hi_h) / 2, 3)); info.append((phi, round(sx), round(ty)))
# beyond her outline: sink to FLOOR over FADE degrees from the last solved angle on each side
idx = [i for i, v in enumerate(line) if v is not None]; i0, i1 = idx[0], idx[-1]
for i in range(len(line)):
    if line[i] is None:
        j = i0 if i < i0 else i1; dphi = abs(i - j) * 5; t = min(dphi / FADE, 1.0); t = t * t * (3 - 2 * t)
        line[i] = round(line[j] + (FLOOR - line[j]) * t, 3)
print('her centre on screen x %.1f, the original %.1f, shift %.1f px; ax %.2f au %.2f; surface %.4f' % (gcx, oc, shift, AX, AU, F['surf']))
for (phi, sx, ty), h in zip(info, line): print(f'  phi {phi:+4d}  screen x {sx:4d}  target y {ty}  crest h {h}')
print('line:', json.dumps(line))
