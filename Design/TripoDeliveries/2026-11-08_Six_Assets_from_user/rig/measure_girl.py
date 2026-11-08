# Measure the user's Tripo girl (8 November 2026) for a skeleton: her width at each height (neck = narrowest between chest
# and head), where the arms leave the body, the hands' lowest points, and her painted eyes (dark blobs in the face of an
# orthographic front render, then a ray onto the mesh). Prints JSON; writes nothing to the model.
#   blender -b --factory-startup --python measure_girl.py -- <girl.glb> <out.json> <render.png>
import bpy, sys, json, numpy as np
from mathutils import Vector
a = sys.argv[sys.argv.index('--') + 1:]
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=a[0])
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]
V = np.array([o.matrix_world @ v.co for v in o.data.vertices]); x, y, z = V[:, 0], V[:, 1], V[:, 2]
zmin, zmax = z.min(), z.max(); H = zmax - zmin
bins = np.linspace(zmin, zmax, 101); prof = []
for i in range(100):
    s = (z >= bins[i]) & (z < bins[i + 1])
    if s.sum() < 3: prof.append(None); continue
    xs = np.sort(x[s]); prof.append([round(float(bins[i] + bins[i + 1]) / 2, 4), round(float(xs.min()), 4), round(float(xs.max()), 4), int(s.sum())])
# the body's own half-width at each height: the widest band of x round 0 with no gap > 2 cm (arms are separated by a gap)
def core_half(sl):
    xs = np.sort(np.abs(x[sl])); xs = xs[xs < 0.4]
    if len(xs) == 0: return 0
    gaps = np.where(np.diff(xs) > 0.02)[0]
    return float(xs[gaps[0]] if len(gaps) else xs[-1])
core = []
for i in range(100):
    s = (z >= bins[i]) & (z < bins[i + 1])
    core.append(round(core_half(s), 4) if s.sum() > 2 else None)
res = {'zmin': float(zmin), 'zmax': float(zmax), 'xminmax': [float(x.min()), float(x.max())], 'yminmax': [float(y.min()), float(y.max())], 'profile': prof, 'core_half': core}
# eyes: an orthographic front render of the face, dark blobs
sc = bpy.context.scene; sc.render.engine = 'BLENDER_EEVEE'; sc.render.resolution_x = sc.render.resolution_y = 512
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (1, 1, 1, 1)
bpy.ops.object.light_add(type='SUN', location=(0, -3, 3)); bpy.context.object.data.energy = 3
bpy.ops.object.camera_add(location=(0, -3, zmax - 0.2 * H)); cam = bpy.context.object; sc.camera = cam
cam.rotation_euler = (1.5708, 0, 0); cam.data.type = 'ORTHO'; cam.data.ortho_scale = 0.4 * H
sc.render.filepath = a[2]; bpy.ops.render.render(write_still=True)
img = bpy.data.images.load(a[2]); px = np.array(img.pixels[:]).reshape(512, 512, 4)[::-1, :, :3]   # rows from the top
lum = px.mean(axis=2); dark = lum < 0.18
# keep the face region (middle third horizontally, upper-middle vertically) and find two blobs by column clustering
ys, xs = np.nonzero(dark[150:420, 140:372]); ys = ys + 150; xs = xs + 140
eyes = []
if len(xs):
    for side in (xs < 256, xs >= 256):
        if side.sum() > 20: eyes.append([float(xs[side].mean()), float(ys[side].mean()), int(side.sum())])
res['eyes_px'] = eyes
# pixel -> world on the camera's plane, then a ray toward the girl
dg = bpy.context.evaluated_depsgraph_get(); hits = []
for ex, ey, n in eyes:
    wx = (ex / 512 - 0.5) * cam.data.ortho_scale; wz = cam.location.z + (0.5 - ey / 512) * cam.data.ortho_scale
    ok, loc, nor, *_ = sc.ray_cast(dg, Vector((wx, -3, wz)), Vector((0, 1, 0)))
    if ok: hits.append([round(loc.x, 4), round(loc.y, 4), round(loc.z, 4), round(nor.x, 3), round(nor.y, 3), round(nor.z, 3)])
res['eyes_world'] = hits
json.dump(res, open(a[1], 'w'))
print('MEASURE', json.dumps({k: v for k, v in res.items() if k not in ('profile', 'core_half')}))
