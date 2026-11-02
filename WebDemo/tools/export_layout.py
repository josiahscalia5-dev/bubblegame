"""Export the Unity Level 1 layout (Level1SceneBuilder, ScreenComposition, TowerWaterfalls) for the
three.js demo, in three.js space: Unity is left-handed, three.js right-handed; the two scenes look
identical when X is mirrored (exactly what glTFast does on import). Model matrices map glTF vertices
straight to three.js world space.
Usage: python3 -I export_layout.py <repo> <out.json>
"""
import json
import sys
import numpy as np

repo, out = sys.argv[1], sys.argv[2]
sys.argv = ["x", "/tmp"]
g = {"__file__": f"{repo}/Tools/verify/check_brushes.py"}
src = open(f"{repo}/Tools/verify/check_brushes.py").read().split("# ---- previews")[0]
exec(src, g)
load, c3, c4, look, rot_x, rot_y = g["load"], g["c3"], g["c4"], g["look"], g["rot_x"], g["rot_y"]
MIR = np.diag([-1.0, 1, 1])


def mat4(A, b):
    m = np.eye(4); m[:3, :3] = A; m[:3, 3] = b
    return [float(x) for x in m.T.reshape(-1)]   # column-major for THREE.Matrix4.fromArray


def t(p):
    return [float(x) for x in (MIR @ np.asarray(p, float))]


models = f"{repo}/Assets/BubbleWash/Models"
water, axis_h, tunnel_r = 0.0, 1.5, 2.5

# ---- castle (BuildCastle with the stored portal measurement)
castle = load(f"{models}/CastlePortal/BubbleWashCastle.glb")      # Unity space (X mirrored)
cs = tunnel_r / 0.2705
cx, cy = -0.0001, -0.4041
z_front = castle[:, 2].max()
R180 = np.diag([-1.0, 1, -1])
pos = np.array([0, water + axis_h, 0.0]) - R180 @ (np.array([cx, cy, z_front]) * cs)
castle_A, castle_b = MIR @ (cs * R180) @ MIR, MIR @ pos
lining_back = 0.0 + (z_front - (-0.1128)) * cs
tunnel_start = lining_back + 0.01

# ---- drum segments (BuildTunnel: length axis X -> +Z, Euler(0,-90,0))
drum = load(f"{models}/WasherTunnel/BubbleWashTunnel_Mobile_2K_Lite.glb")
ds = tunnel_r / 0.4272
Rm90 = np.array([[0, 0, -1.0], [0, 1, 0], [1, 0, 0]])
axis_min = drum[:, 0].min()
seg_len = (drum[:, 0].max() - axis_min) * ds
overlap = max(0.02, seg_len * 0.005)
segments = []
for i in range(3):
    start = tunnel_start + i * (seg_len - overlap)
    target = np.array([0, water + axis_h, start])
    b = target - Rm90 @ (np.array([axis_min, 0, 0]) * ds)
    segments.append(mat4(MIR @ (ds * Rm90) @ MIR, MIR @ b))
tunnel_end = tunnel_start + 2 * (seg_len - overlap) + seg_len
clear_r = 0.3443 * ds

# ---- washing rollers (ScreenComposition.Brush + MountRoller), from the verified check
roller = load(f"{models}/SpinningBrush/BubbleWash_WashingRoller_Claudia_Textured.glb")
rl = roller @ rot_x(90).T
cen = (rl.max(0) + rl.min(0)) / 2
f = 2.0 / (rl.max(0) - rl.min(0))[0]
r_local = (rl - cen) * f
bmin = r_local.min(0)
sample = r_local[::4]
L_local = r_local[:, 2].max() - bmin[2]
box_min, box_max = g["box_min"], g["box_max"]


def mount(pos, R, scale, desired):
    fwd = R[:, 2]
    a = pos + (R @ (sample * scale).T).T - fwd * (bmin[2] * scale)
    reach = desired
    while reach > -L_local * scale:
        w = a - fwd * reach
        if not np.any(np.all((w > box_min) & (w < box_max), axis=1)):
            break
        reach -= 0.05
    shift = -reach / scale - bmin[2]
    A_u = scale * f * R @ rot_x(90) @ MIR          # acts on glTF vertices
    b_u = pos + R @ ((-cen * f + np.array([0, 0, shift])) * scale)
    centre_u = pos + R @ (np.array([0, 0, shift]) * scale)
    return {"matrix": mat4(MIR @ A_u, MIR @ b_u), "centre": t(centre_u), "axis": t(fwd), "reach": round(reach, 2)}


brush3 = c3.at(0.03, 0.53, 9.0)
R3 = look(rot_y(-32) @ ((brush3 - c3.pos) / np.linalg.norm(brush3 - c3.pos)))
wall_r = clear_r + 0.12
bl, br = g["on_wall"](c4, 0.08, 0.30, wall_r), g["on_wall"](c4, 0.90, 0.47, wall_r)
rollers = [
    dict(mount(brush3, R3, c3.size_at(0.42, 9.0) * 0.5, 0.0), spin=90),
    dict(mount(bl, g["face_axis"](bl), 1.1, 1.2), spin=140),
    dict(mount(br, g["face_axis"](br), 1.1, 1.2), spin=-140),
]

# ---- tower waterfalls (TowerWaterfalls, values from the verified placement check)
falls = []
wf = {}
exec(open(f"{repo}/Tools/verify/check_waterfalls.py").read().split("# ---- point-splat preview")[0]
     .replace("repo = os.path.normpath", "repo = '%s' #" % repo)
     .replace("out = sys.argv[1]", "out = '/tmp/x.png' #"), wf)
for side, s1, bas, s2, land, w, bR, tow, btow in wf["results"]:
    falls.append({"side": side, "lip": t(s1), "basin": t(bas), "overflow": t(s2), "landing": t(land),
                  "width": float(w), "basinRadius": float(bR), "tower": t(tow), "basinTower": t(btow)})

# ---- approved-screen composition points (ScreenComposition)
coins3 = [c3.at(*a) for a in [(0.33, 0.47, 19.5), (0.64, 0.52, 19.5), (0.44, 0.43, 27), (0.56, 0.43, 27), (0.50, 0.40, 33)]]
bubbles = [(c3.at(x, y, d), c3.size_at(s, d)) for x, y, d, s in [(0.87, 0.47, 7, 0.26), (0.95, 0.66, 6, 0.16), (0.05, 0.71, 6, 0.13), (0.25, 0.83, 5, 0.10)]]
bubbles += [(c4.at(x, y, d), c4.size_at(s, d)) for x, y, d, s in [(0.74, 0.33, 7, 0.24), (0.08, 0.69, 5, 0.13), (0.93, 0.47, 5, 0.11), (0.62, 0.41, 9, 0.09), (0.36, 0.36, 10, 0.08)]]
coins4 = [c4.at(*a) for a in [(0.17, 0.56, 5.5), (0.83, 0.67, 5.0), (0.13, 0.42, 9), (0.50, 0.51, 16)]]
gem4 = c4.at(0.29, 0.465, 9.0)
z4 = tunnel_start + seg_len * 1.45

layout = {
    "note": "Exported from the Unity Level 1 layout; three.js space (Unity X mirrored). +Z is the travel direction.",
    "castle": mat4(castle_A, castle_b),
    "drumSegments": segments,
    "tunnelStart": tunnel_start, "tunnelEnd": tunnel_end, "segmentLength": seg_len, "clearRadius": clear_r,
    "tunnelRadius": tunnel_r, "axisHeight": axis_h, "startZ": -16.7, "screen4Z": z4,
    "rollers": rollers, "waterfalls": falls,
    "coins3": [t(p) for p in coins3], "coins4": [t(p) for p in coins4], "gem4": t(gem4),
    "bubbles": [{"pos": t(p), "size": float(s)} for p, s in bubbles],
    "camera3": {"pos": t(c3.pos), "forward": t(c3.R[:, 2]), "fov": 55},
}
json.dump(layout, open(out, "w"), indent=1)
print(f"tunnel {tunnel_start:.2f}..{tunnel_end:.2f}, segment {seg_len:.2f} m, clear radius {clear_r:.2f}; rollers reach {[r['reach'] for r in rollers]}; wrote {out}")
