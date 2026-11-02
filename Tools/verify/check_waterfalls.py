"""Port of the TowerWaterfalls placement maths, run against the real Meshy castle GLB.

Reproduces: glTFast import (X mirrored), the Level1SceneBuilder castle placement, the fitted Screen 3
camera, the ray-to-tower search and the cascade layout. Prints each placement and its screen
projection, and renders a point-splat preview of the castle from the Screen 3 camera with the
waterfall curves drawn on top, beside the approved image.
Needs numpy, pillow and pygltflib (pip install numpy pillow pygltflib).
Usage: python3 -I check_waterfalls.py [output.png]
Keep the constants below in step with TowerWaterfalls.cs, Level1SceneBuilder.cs and RunnerCameraRig.cs.
"""
import os
import sys
import numpy as np
from pygltflib import GLTF2
from PIL import Image, ImageDraw

repo = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "../.."))
out = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.environ.get("BW_VERIFY_CACHE", os.path.expanduser("~/.cache/bubblewash-verify")), "waterfall_placement.png")
os.makedirs(os.path.dirname(out), exist_ok=True)
glb = GLTF2().load(f"{repo}/Assets/BubbleWash/Models/CastlePortal/BubbleWashCastle.glb")
blob = glb.binary_blob()

def accessor(i):
    a = glb.accessors[i]
    bv = glb.bufferViews[a.bufferView]
    comps = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4}[a.type]
    dtype = {5126: np.float32, 5125: np.uint32, 5123: np.uint16, 5121: np.uint8}[a.componentType]
    off = (bv.byteOffset or 0) + (a.byteOffset or 0)
    stride = bv.byteStride or comps * np.dtype(dtype).itemsize
    raw = np.frombuffer(blob, dtype=np.uint8, count=stride * (a.count - 1) + comps * np.dtype(dtype).itemsize, offset=off)
    if stride == comps * np.dtype(dtype).itemsize:
        return np.frombuffer(raw.tobytes(), dtype=dtype).reshape(a.count, comps)
    rows = [np.frombuffer(raw[k * stride:k * stride + comps * np.dtype(dtype).itemsize].tobytes(), dtype=dtype) for k in range(a.count)]
    return np.array(rows)

def node_matrix(n):
    if n.matrix:
        return np.array(n.matrix, dtype=np.float64).reshape(4, 4).T
    t = np.array(n.translation or [0, 0, 0]); r = n.rotation or [0, 0, 0, 1]; s = np.array(n.scale or [1, 1, 1])
    x, y, z, w = r
    R = np.array([[1 - 2 * (y * y + z * z), 2 * (x * y - z * w), 2 * (x * z + y * w)],
                  [2 * (x * y + z * w), 1 - 2 * (x * x + z * z), 2 * (y * z - x * w)],
                  [2 * (x * z - y * w), 2 * (y * z + x * w), 1 - 2 * (x * x + y * y)]])
    M = np.eye(4); M[:3, :3] = R * s; M[:3, 3] = t
    return M

verts, colors = [], []
def walk(i, parent):
    n = glb.nodes[i]
    M = parent @ node_matrix(n)
    if n.mesh is not None:
        for prim in glb.meshes[n.mesh].primitives:
            p = accessor(prim.attributes.POSITION).astype(np.float64)
            p = (M @ np.c_[p, np.ones(len(p))].T).T[:, :3]
            verts.append(p)
    for c in n.children or []:
        walk(c, M)
for root in glb.scenes[glb.scene or 0].nodes:
    walk(root, np.eye(4))
v = np.concatenate(verts)
v[:, 0] *= -1  # glTFast: glTF right-handed -> Unity left-handed (X mirrored)
print(f"castle: {len(v):,} vertices, bounds size {v.max(0) - v.min(0)}")

# ---- Level1SceneBuilder.BuildCastle with the stored measurement
tunnelRadius, axisHeight, waterLevel, castleFrontZ = 2.5, 1.5, 0.0, 0.0
cx, cy, radius = -0.0001, -0.4041, 0.2705
zFront = v[:, 2].max()
s = tunnelRadius / radius
# rot = 180 deg about Y: (x, y, z) -> (-x, y, -z)
pos = np.array([0, waterLevel + axisHeight, castleFrontZ]) - np.array([-cx, cy, -zFront]) * s
world = pos + np.c_[-v[:, 0], v[:, 1], -v[:, 2]] * s
print(f"castle world bounds {world.min(0).round(2)} .. {world.max(0).round(2)}")

# ---- Screen 3 camera (ScreenComposition.Pose with RunnerCameraRig.screen3)
slide = np.array([2.0, -0.6, 0.12])
startZ, mascotFloat = -16.7, 0.34
anchor = np.array([0, waterLevel + slide[2] + mascotFloat, startZ])
cam = anchor + np.array([0, 1.11, -4.01])
look = anchor + np.array([0, 0.45, 5.97])
f = (look - cam); f /= np.linalg.norm(f)
right = np.cross([0, 1, 0], f)  # numpy cross is the same algebra Unity uses
right /= np.linalg.norm(right)
up = np.cross(f, right)
R = np.c_[right, up, f]
fov, aspect = 55.0, 269 / 538
tn = np.tan(np.radians(fov / 2))

def At(xf, yf, depth):
    local = np.array([(xf * 2 - 1) * tn * aspect * depth, (1 - yf * 2) * tn * depth, depth])
    return cam + R @ local

def SizeAt(wf, depth):
    return wf * 2 * depth * tn * aspect

def Project(p):
    l = R.T @ (p - cam)
    z = max(1e-4, l[2])
    return np.array([(l[0] / (z * tn * aspect) + 1) * 0.5, (1 - l[1] / (z * tn)) * 0.5])

def Ray(xf, yf):
    d = At(xf, yf, 1.0) - cam
    return d / np.linalg.norm(d)

def RayHit(o, d, tmin=4.0, tmax=80.0, tol=0.3):
    rel = world - o
    t = rel @ d
    perp = np.linalg.norm(rel - np.outer(t, d), axis=1)
    ok = (t >= tmin) & (t <= tmax) & (perp <= tol)
    return t[ok].min() if ok.any() else -1.0

Standoff, IntoTower, G = 0.55, 0.3, 9.81
UpperThrow, LowerThrow = 1.1, 0.9
outward = np.array([0, 0, -1.0])
moatY = waterLevel + slide[1]
specs = [("L", 0.085, 0.298, 0.360, 0.080), ("R", 0.917, 0.305, 0.372, 0.085)]
results = []
for side, x, lipY, basinY, width in specs:
    d = Ray(x, lipY)
    hit = RayHit(cam, d)
    on = hit > 0
    if on:
        tower = cam + d * hit
        lip = cam + d * (hit - Standoff / max(0.2, d[2]))
    else:
        lip = At(x, lipY, 19.5); tower = lip - outward * Standoff
    depth = (lip - cam) @ f
    w = SizeAt(width, depth)
    pipeR = w * 0.42
    start1 = lip + np.array([0, -pipeR * 0.45, 0])
    basinR = max(0.3, w * 0.75)
    basin = start1.copy()
    for _ in range(4):
        drop = max(0.3, start1[1] - basin[1])
        thr = UpperThrow * np.sqrt(2 * drop / G)
        y = At(x, basinY, depth - thr)[1]
        basin = np.array([start1[0], y, start1[2]]) + outward * thr
    dB = Ray(x, basinY)
    hitB = RayHit(cam, dB)
    basinTower = cam + dB * hitB if hitB > 0 else np.array([basin[0], basin[1], tower[2]])
    back = basinTower[2] - 0.05
    pushed = basin[2] + basinR > back
    if pushed:
        basin[2] = back - basinR
    start2 = basin + outward * basinR * 0.92 + np.array([0, 0.04, 0])
    landingY = moatY - 0.18
    lowerDrop = max(0.3, start2[1] - landingY)
    thr2 = LowerThrow * np.sqrt(2 * lowerDrop / G)
    landing = start2 + outward * thr2 + np.array([0, -lowerDrop, 0])
    sl, sb = Project(start1), Project(basin)
    print(f"\nWaterfall {side}: ray hit tower={on} at t={hit:.2f}  tower point {tower.round(2)}")
    print(f"  lip {lip.round(2)}  column width {w:.2f} m, spout length {np.linalg.norm(tower - lip):.2f} m")
    print(f"  basin {basin.round(2)} (r {basinR:.2f}, pushed out={pushed}); basin tower point {basinTower.round(2)} (hit={hitB > 0})")
    print(f"  upper drop {start1[1] - basin[1]:.2f} m, throw {np.linalg.norm((basin - start1)[[0, 2]]):.2f} m; lower drop {lowerDrop:.2f} m, throw {thr2:.2f} m")
    print(f"  landing {landing.round(2)} (castle front z = {castleFrontZ}); |x| {abs(landing[0]):.2f} vs path edge {slide[0] + 0.55:.2f}")
    print(f"  screen: spout ({sl[0]:.3f}, {sl[1]:.3f}) approved ({x:.3f}, {lipY:.3f}); basin ({sb[0]:.3f}, {sb[1]:.3f}) approved ({x:.3f}, {basinY:.3f})")
    results.append((side, start1, basin, start2, landing, w, basinR, tower, basinTower))

# ---- point-splat preview from the Screen 3 camera, beside the approved image
Wpx, Hpx = 538, 1076
img = Image.new("RGB", (Wpx, Hpx), (200, 190, 235))
dr = ImageDraw.Draw(img)
l = (world - cam) @ R
vis = l[:, 2] > 0.5
l = l[vis]
order = np.argsort(-l[:, 2])
xs = ((l[:, 0] / (l[:, 2] * tn * aspect) + 1) * 0.5 * Wpx)[order]
ys = ((1 - l[:, 1] / (l[:, 2] * tn)) * 0.5 * Hpx)[order]
zs = l[order, 2]
shade = np.clip(255 - (zs - 18) * 14, 60, 255).astype(int)
for X, Y, c in zip(xs[::3], ys[::3], shade[::3]):
    if 0 <= X < Wpx and 0 <= Y < Hpx:
        img.putpixel((int(X), int(Y)), (c, int(c * 0.75), int(c * 0.85)))
# moat line at the castle front depth
def px(p):
    q = Project(p); return (q[0] * Wpx, q[1] * Hpx)
def curve(a, b, n=24):
    flat = (b - a).copy(); flat[1] = 0
    drop = a[1] - b[1]
    return [px(a + flat * t + np.array([0, -drop * t * t, 0])) for t in np.linspace(0, 1, n)]
for side, s1, bas, s2, land, w, bR, tow, btow in results:
    dr.line([px(s1), px(tow)], fill=(230, 180, 40), width=6)
    dr.line([px(bas), px(btow)], fill=(230, 180, 40), width=3)
    for pts, wd in ((curve(s1, bas), w * 0.78), (curve(s2, land), w * 1.0)):
        q = Project(s1); dpx = SizeAt(1.0, (s1 - cam) @ f)
        dr.line(pts, fill=(40, 140, 255), width=max(3, int(wd / dpx * Wpx)))
    cxy = px(bas); rr = bR / SizeAt(1.0, (bas - cam) @ f) * Wpx
    dr.ellipse([cxy[0] - rr, cxy[1] - rr * 0.3, cxy[0] + rr, cxy[1] + rr * 0.3], outline=(230, 180, 40), width=4)
for side, x, lipY, basinY, width in specs:
    for yy in (lipY, basinY):
        dr.ellipse([x * Wpx - 6, yy * Hpx - 6, x * Wpx + 6, yy * Hpx + 6], outline=(255, 0, 80), width=3)
approved = Image.open(f"{repo}/Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png").convert("RGB").resize((Wpx, Hpx))
ad = ImageDraw.Draw(approved)
for side, x, lipY, basinY, width in specs:
    for yy in (lipY, basinY):
        ad.ellipse([x * Wpx - 6, yy * Hpx - 6, x * Wpx + 6, yy * Hpx + 6], outline=(255, 0, 80), width=3)
board = Image.new("RGB", (Wpx * 2 + 10, Hpx), (255, 255, 255))
board.paste(approved, (0, 0)); board.paste(img, (Wpx + 10, 0))
board.save(out)
print("\nwrote", out)
