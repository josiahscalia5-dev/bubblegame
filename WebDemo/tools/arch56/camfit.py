# arch56 (session ddf175f2): fit a pinhole camera (yaw, pitch, roll, position) to proj6.js's grid (du <= 13, where the track is near straight),
# then print screen fractions for any track-frame point: python3 camfit.py var6.json [du,x,y ...]
import json, sys, math
import numpy as np

def least_squares(f, x0, it=200):
    x = np.array(x0, float); lam = 1e-3
    for _ in range(it):
        r0 = f(x); J = np.zeros((len(r0), len(x)))
        for j in range(len(x)):
            h = np.zeros(len(x)); h[j] = 1e-6; J[:, j] = (f(x + h) - r0) / 1e-6
        A = J.T @ J; g = J.T @ r0
        dx = np.linalg.solve(A + lam * np.diag(np.diag(A) + 1e-9), -g)
        if np.sum(f(x + dx) ** 2) < np.sum(r0 ** 2): x = x + dx; lam *= 0.3
        else: lam *= 10
    class S: pass
    s = S(); s.x = x; s.fun = f(x); return s
d = json.load(open(sys.argv[1])); r = [v['ret'] for v in d['vars'] if v['ret'] and 'grid' in v['ret']][0]
pts = []
for k, v in r['grid'].items():
    du, x, y = map(float, k.split('|'))
    if du <= 13: pts.append((du, x, y, v[0], v[1]))
pts = np.array(pts); fov = math.radians(r['fov']); asp = r['aspect']
def proj(p, P):
    cx, cy, cz, yaw, pitch, roll, curv = p
    du, x, y = P[:, 0], P[:, 1], P[:, 2]
    x = x + curv * du * du   # the track's gentle bend
    X = x - cx; Y = y - cy; Z = du - cz
    # rotate: yaw about y, pitch about x, roll about z (camera looks along +Z, +X = screen-left)
    c, s = math.cos(yaw), math.sin(yaw); X, Z = c * X - s * Z, s * X + c * Z
    c, s = math.cos(pitch), math.sin(pitch); Y, Z = c * Y - s * Z, s * Y + c * Z
    c, s = math.cos(roll), math.sin(roll); X, Y = c * X - s * Y, s * X + c * Y
    t = math.tan(fov / 2)
    sx = 0.5 - X / (Z * t * asp) / 2; sy = 0.5 - Y / (Z * t) / 2
    return sx, sy
def res(p):
    sx, sy = proj(p, pts); return np.concatenate([sx - pts[:, 3], sy - pts[:, 4]])
c0 = r['camT']
sol = least_squares(res, [c0[0], c0[1], c0[2], 0, 0, 0, 0])
print('fit', np.round(sol.x, 4), 'rms', np.sqrt(np.mean(sol.fun ** 2)))
json.dump(list(sol.x), open(sys.argv[1] + '.cam.json', 'w'))
q = [float(v) for v in sys.argv[2:]]
for i in range(0, len(q), 3):
    sx, sy = proj(sol.x, np.array([q[i:i + 3]])); print(q[i:i + 3], round(float(sx[0]), 3), round(float(sy[0]), 3))
