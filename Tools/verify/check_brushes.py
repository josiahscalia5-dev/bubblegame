"""Port of the spinning-brush (Meshy washing roller) placement, run against the real GLBs.

Reproduces ScreenComposition's brush mounts for approved Screens 3 and 4, the slot fit
(MeshyAssetSlots: rotation (90, 0, 0), 2 m diameter at instance scale 1) and
ScreenComposition.MountRoller's reach search, which pulls each roller back until none of its
vertices is inside the mascot's reachable volume. Prints each mount and renders point-splat previews of both views
beside the approved screens.
Needs numpy, pillow and pygltflib. Usage: python3 -I check_brushes.py [output-dir]
Keep the constants below in step with ScreenComposition.cs, MeshyAssetSlots.cs, LevelLayout.cs,
RunnerCameraRig.cs and Level1SceneBuilder.cs.
"""
import io
import os
import sys
import numpy as np
from pygltflib import GLTF2
from PIL import Image, ImageDraw

repo = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "../.."))
out_dir = sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.environ.get("BW_VERIFY_CACHE", os.path.expanduser("~/.cache/bubblewash-verify")), "brushes")
os.makedirs(out_dir, exist_ok=True)
models = f"{repo}/Assets/BubbleWash/Models"


def load(path, want_colour=False):
    """Vertices (Unity space: glTF X mirrored) and optional per-vertex colour from the base texture."""
    g = GLTF2().load(path)
    blob = g.binary_blob()

    def acc(i):
        a = g.accessors[i]; bv = g.bufferViews[a.bufferView]
        n = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4}[a.type]
        dt = {5126: np.float32, 5125: np.uint32, 5123: np.uint16, 5121: np.uint8}[a.componentType]
        size = np.dtype(dt).itemsize * n
        stride = bv.byteStride or size
        off = (bv.byteOffset or 0) + (a.byteOffset or 0)
        raw = np.frombuffer(blob, np.uint8, stride * (a.count - 1) + size, off)
        if stride == size:
            out = np.frombuffer(raw.tobytes(), dt).reshape(a.count, n).astype(np.float64)
        else:
            out = np.array([np.frombuffer(raw[k * stride:k * stride + size].tobytes(), dt) for k in range(a.count)], np.float64)
        if a.normalized and np.issubdtype(dt, np.integer):
            out /= np.iinfo(dt).max   # e.g. UVs stored as normalised uint16
        return out

    pts, cols = [], []
    for node in g.nodes:
        if node.mesh is None:
            continue
        for p in g.meshes[node.mesh].primitives:
            v = acc(p.attributes.POSITION)
            pts.append(v)
            if want_colour:
                c = np.ones((len(v), 3)) * 200
                mat = g.materials[p.material] if p.material is not None else None
                pbr = mat.pbrMetallicRoughness if mat else None
                if pbr and pbr.baseColorTexture is not None and p.attributes.TEXCOORD_0 is not None:
                    img = g.images[g.textures[pbr.baseColorTexture.index].source]
                    bv = g.bufferViews[img.bufferView]
                    tex = np.asarray(Image.open(io.BytesIO(blob[bv.byteOffset:bv.byteOffset + bv.byteLength])).convert("RGB"))
                    uv = acc(p.attributes.TEXCOORD_0)
                    h, w = tex.shape[:2]
                    c = tex[np.clip((uv[:, 1] * h).astype(int), 0, h - 1), np.clip((uv[:, 0] * w).astype(int), 0, w - 1)].astype(float)
                elif p.attributes.COLOR_0 is not None:
                    c = acc(p.attributes.COLOR_0)[:, :3] * 255
                cols.append(c)
    v = np.concatenate(pts); v[:, 0] *= -1
    return (v, np.concatenate(cols)) if want_colour else v


def rot_x(deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])


def rot_y(deg):
    t = np.radians(deg); c, s = np.cos(t), np.sin(t)
    return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])


def look(f, up=(0, 1, 0)):
    z = np.asarray(f, float); z /= np.linalg.norm(z)
    x = np.cross(up, z); x /= np.linalg.norm(x)
    return np.c_[x, np.cross(z, x), z]


# ---- layout (Level1SceneBuilder with the stored measurements)
water, axis_h, tunnel_r = 0.0, 1.5, 2.5
clear_r = 0.3443 * (tunnel_r / 0.4272)
tunnel_start, seg_len = 3.90, 1.9032 * (tunnel_r / 0.4272)
lane_x, float_h, body_r, max_lift = 0.85, 0.34, 0.4, 1.2
start_z = -16.7
slide_y_crown = 0.12


class Cam:
    def __init__(self, mascot_z, mascot_y, offset, look_off, fov, aspect):
        anchor = np.array([0, mascot_y, mascot_z])
        self.pos = anchor + offset
        self.R = look(anchor + look_off - self.pos)
        self.t = np.tan(np.radians(fov / 2)); self.aspect = aspect

    def at(self, xf, yf, depth):
        return self.pos + self.R @ np.array([(xf * 2 - 1) * self.t * self.aspect * depth, (1 - yf * 2) * self.t * depth, depth])

    def size_at(self, wf, depth):
        return wf * 2 * depth * self.t * self.aspect

    def project(self, p):
        l = (p - self.pos) @ self.R
        z = np.maximum(l[..., 2], 1e-4)
        return np.stack([(l[..., 0] / (z * self.t * self.aspect) + 1) * 0.5, (1 - l[..., 1] / (z * self.t)) * 0.5, l[..., 2]], -1)


c3 = Cam(start_z, water + slide_y_crown + float_h, np.array([0, 1.11, -4.01]), np.array([0, 0.45, 5.97]), 55, 269 / 538)
z4 = tunnel_start + seg_len * 1.45
c4 = Cam(z4, water + float_h, np.array([0, 1.03, -3.58]), np.array([0, 0.89, 6.42]), 60, 231 / 537)


def on_wall(c, xf, yf, radius):
    d = c.at(xf, yf, 1) - c.pos; d /= np.linalg.norm(d)
    p = c.pos.copy()
    for _ in range(4000):
        p = p + d * 0.02
        if np.hypot(p[0], p[1] - (water + axis_h)) >= radius:
            break
    return p


def face_axis(p):
    out = np.array([p[0], p[1] - (water + axis_h), 0]); out /= np.linalg.norm(out)
    return look(out, up=(0, 0, 1))


# ---- the roller fitted by the slot (rotation (90,0,0), width 2.0 at scale 1), centred
roller, roller_col = load(f"{models}/SpinningBrush/BubbleWash_WashingRoller_Claudia_Textured.glb", want_colour=True)
r_local = roller @ rot_x(90).T
size = r_local.max(0) - r_local.min(0)
r_local = (r_local - (r_local.max(0) + r_local.min(0)) / 2) * (2.0 / size[0])
b_min, b_max = r_local.min(0), r_local.max(0)
R_local = max(b_max[0], b_max[1])
L_local = b_max[2] - b_min[2]
print(f"roller fitted at scale 1: diameter {2 * R_local:.2f} m, length {L_local:.2f} m")

# Mascot's reachable volume (ScreenComposition.MascotVolume): every lane, from floating to the jump apex,
# inflated by the body radius + margin.
box_min = np.array([-lane_x, water + float_h, -1e9]) - (body_r + 0.1)
box_max = np.array([lane_x, water + slide_y_crown + float_h + max_lift + 0.05, 1e9]) + (body_r + 0.1)   # + float bob


sample = r_local[::4]


def mount(name, pos, R, scale, desired):
    # World position of every (sampled) roller vertex is linear in the reach: a - fwd * reach.
    fwd = R[:, 2]
    a = pos + (R @ (sample * scale).T).T - fwd * (b_min[2] * scale)
    reach = desired
    while reach > -L_local * scale:
        w = a - fwd * reach
        if not np.any(np.all((w > box_min) & (w < box_max), axis=1)):
            break
        reach -= 0.05
    shift = -reach / scale - b_min[2]
    world = pos + (R @ ((r_local + [0, 0, shift]) * scale).T).T
    inner = pos - R[:, 2] * reach
    print(f"{name}: mount {pos.round(2)} scale {scale:.2f} (diameter {2 * R_local * scale:.2f} m), reach {reach:.2f} m (wanted {desired:.2f}); "
          f"inner end {inner.round(2)}, {np.hypot(inner[0], inner[1] - axis_h):.2f} m from the drum axis")
    return world, reach


brush3 = c3.at(0.03, 0.53, 9.0)
s3 = c3.size_at(0.42, 9.0) * 0.5
R3 = look(rot_y(-32) @ ((brush3 - c3.pos) / np.linalg.norm(brush3 - c3.pos)))
wall_r = clear_r + 0.12
bl, br = on_wall(c4, 0.08, 0.30, wall_r), on_wall(c4, 0.90, 0.47, wall_r)
w3, _ = mount("Screen 3 entrance brush L", brush3, R3, s3, 0.0)
wl, _ = mount("Screen 4 drum brush L", bl, face_axis(bl), 1.1, 1.2)
wr, _ = mount("Screen 4 drum brush R", br, face_axis(br), 1.1, 1.2)

# ---- previews: point splats of the real meshes from both fitted cameras, beside the approved screens
castle = load(f"{models}/CastlePortal/BubbleWashCastle.glb")
cs = tunnel_r / 0.2705
castle_w = np.array([0.0001 * cs, water + axis_h + 0.4041 * cs, castle[:, 2].max() * cs]) + np.c_[-castle[:, 0], castle[:, 1], -castle[:, 2]] * cs
drum = load(f"{models}/WasherTunnel/BubbleWashTunnel_Mobile_2K_Lite.glb")
ds = tunnel_r / 0.4272
d_local = np.c_[drum[:, 2], drum[:, 1], -drum[:, 0]]   # Meshy X length axis -> Unity +Z (-90 deg about Y)
d_local[:, 2] -= d_local[:, 2].min()
segs = [d_local * ds + [0, water + axis_h, tunnel_start + k * (seg_len - max(0.02, seg_len * 0.005))] for k in range(3)]


def splat(c, layers, wpx, hpx, bg=(205, 195, 238)):
    img = np.zeros((hpx, wpx, 3), np.uint8); img[:] = bg
    zbuf = np.full((hpx, wpx), np.inf)
    for pts, col, rad in layers:
        q = c.project(pts)
        ok = (q[:, 2] > 0.3) & (q[:, 0] > -0.1) & (q[:, 0] < 1.1) & (q[:, 1] > -0.1) & (q[:, 1] < 1.1)
        q, cc = q[ok], (col[ok] if col.ndim == 2 else np.broadcast_to(col, (ok.sum(), 3)))
        order = np.argsort(-q[:, 2])
        for (x, y, z), k in zip(q[order], cc[order]):
            px, py = int(x * wpx), int(y * hpx)
            s = max(1, int(rad * wpx / (z * c.t * c.aspect * 2)))
            x0, x1, y0, y1 = max(0, px - s // 2), min(wpx, px + s // 2 + 1), max(0, py - s // 2), min(hpx, py + s // 2 + 1)
            if x0 >= x1 or y0 >= y1:
                continue
            m = zbuf[y0:y1, x0:x1] > z
            zbuf[y0:y1, x0:x1][m] = z
            img[y0:y1, x0:x1][m] = k
    return Image.fromarray(img)


def board(approved, preview, path):
    a = Image.open(approved).convert("RGB").resize(preview.size)
    out = Image.new("RGB", (preview.size[0] * 2 + 10, preview.size[1]), "white")
    out.paste(a, (0, 0)); out.paste(preview, (preview.size[0] + 10, 0)); out.save(path)
    print("wrote", path)


grey = np.array([170, 150, 190.0])
v3 = splat(c3, [(castle_w[::2], np.array([235, 190, 220.0]), 0.06), (w3[::2], roller_col[::2], 0.05)], 404, 808)
board(f"{repo}/Design/ApprovedScreens/x3_03_Lets_Go_Washer_Entry.png", v3, f"{out_dir}/screen3_brush.png")
drum_pts = np.concatenate([s[::3] for s in segs])
v4 = splat(c4, [(drum_pts, np.array([90, 140, 230.0]), 0.05), (wl[::2], roller_col[::2], 0.035), (wr[::2], roller_col[::2], 0.035)], 346, 805)
board(f"{repo}/Design/ApprovedScreens/x3_04_Rescue_Socks_Inside_Tunnel.png", v4, f"{out_dir}/screen4_brushes.png")
