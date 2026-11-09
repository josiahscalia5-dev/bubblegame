# arch56: screen (sx, sy) at track depth du -> track-frame (x, y) with the fitted camera (camfit.py's .cam.json). python3 inv.py cam.json du sx sy ...
import json, sys, math
import numpy as np
c = json.load(open(sys.argv[1])); fov = math.radians(66); asp = 0.5625
def proj(du, x, y):
    cx, cy, cz, yaw, pitch, roll, curv = c
    x = x + curv * du * du; X = x - cx; Y = y - cy; Z = du - cz
    cc, s = math.cos(yaw), math.sin(yaw); X, Z = cc * X - s * Z, s * X + cc * Z
    cc, s = math.cos(pitch), math.sin(pitch); Y, Z = cc * Y - s * Z, s * Y + cc * Z
    cc, s = math.cos(roll), math.sin(roll); X, Y = cc * X - s * Y, s * X + cc * Y
    t = math.tan(fov / 2); return 0.5 - X / (Z * t * asp) / 2, 0.5 - Y / (Z * t) / 2
def inv(du, sx, sy):
    x, y = 0.0, 1.0
    for _ in range(50):
        a = np.array(proj(du, x, y)); J = np.zeros((2, 2))
        for j, h in enumerate([(1e-5, 0), (0, 1e-5)]): J[:, j] = (np.array(proj(du, x + h[0], y + h[1])) - a) / 1e-5
        d = np.linalg.solve(J, np.array([sx, sy]) - a); x += d[0]; y += d[1]
    return x, y
if __name__ == '__main__':
    q = [float(v) for v in sys.argv[2:]]
    for i in range(0, len(q), 3):
        x, y = inv(*q[i:i + 3]); print(f'du {q[i]:5.2f} screen ({q[i+1]:.3f},{q[i+2]:.3f}) -> x {x:6.3f} y {y:6.3f}')
