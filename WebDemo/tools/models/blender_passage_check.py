"""Blender (headless) check of a portal or tunnel model: can something pass through it, and is it a real tunnel?

    blender -b --factory-startup --python blender_passage_check.py -- <model.glb> <out.json> [render.png]

The model is imported as delivered. Its depth axis is taken as Blender's Y (glTF's Z: the way the delivered portal and
tunnel models face). It measures:
  - size (bounding box) and triangles;
  - rays: a grid of rays fired straight through the model along its depth, from the front, over the middle of its front
    face; the share that come out the back without touching anything (open passage), and where the others stop;
  - the clear opening at the front, and at each tenth of the depth: the largest circle round the depth axis with no
    geometry inside it (above the model's lowest tenth, the floor), so a tapering tunnel shows up as a shrinking opening;
  - optionally a render from the front (Cycles, CPU).
"""
import bpy
import json
import math
import sys
from mathutils import Vector
from mathutils.bvhtree import BVHTree

argv = sys.argv[sys.argv.index('--') + 1:]
src, out = argv[0], argv[1]
render = argv[2] if len(argv) > 2 else None

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
dg = bpy.context.evaluated_depsgraph_get()
verts, polys, tris = [], [], 0
for o in meshes:
    ev = o.evaluated_get(dg)
    m = ev.to_mesh()
    base = len(verts)
    verts += [o.matrix_world @ v.co for v in m.vertices]
    polys += [[base + i for i in p.vertices] for p in m.polygons]
    tris += sum(len(p.vertices) - 2 for p in m.polygons)
    ev.to_mesh_clear()
bvh = BVHTree.FromPolygons(verts, polys)
lo = Vector((min(v.x for v in verts), min(v.y for v in verts), min(v.z for v in verts)))
hi = Vector((max(v.x for v in verts), max(v.y for v in verts), max(v.z for v in verts)))
size = hi - lo
cx, cz = (lo.x + hi.x) / 2, (lo.z + hi.z) / 2
floor = lo.z + 0.1 * size.z

# rays straight through along +Y over the middle 60 % of the front face
n = 24
passed, stops = 0, []
for i in range(n):
    for j in range(n):
        x = lo.x + size.x * (0.2 + 0.6 * (i + 0.5) / n)
        z = floor + (hi.z - floor) * (0.1 + 0.8 * (j + 0.5) / n)
        hit = bvh.ray_cast(Vector((x, lo.y - 0.01, z)), Vector((0, 1, 0)), size.y + 0.1)
        if hit[0] is None:
            passed += 1
        else:
            stops.append((hit[0].y - lo.y) / size.y)
stops.sort()


def clear_radius(y0, y1):
    """Smallest distance from the depth axis (through the front face's middle) to any vertex in this slice, above the floor."""
    best = None
    for v in verts:
        if y0 <= v.y <= y1 and v.z > floor:
            r = math.hypot(v.x - cx, v.z - cz)
            best = r if best is None else min(best, r)
    return best


slices = []
for k in range(10):
    y0, y1 = lo.y + size.y * k / 10, lo.y + size.y * (k + 1) / 10
    r = clear_radius(y0, y1)
    xs = [v.x for v in verts if y0 <= v.y <= y1]
    slices.append({'depth': round((k + 0.5) / 10, 2), 'clearRadius': None if r is None else round(r, 3),
                   'halfWidth': round((max(xs) - min(xs)) / 2, 3) if xs else None})

report = {
    'model': src.split('/')[-1], 'triangles': tris, 'size': [round(size.x, 3), round(size.y, 3), round(size.z, 3)],
    'raysThrough': f'{passed} of {n * n}', 'openThroughShare': round(passed / (n * n), 3),
    'stoppedAtDepth': {'median': round(stops[len(stops) // 2], 3) if stops else None, 'deepest': round(stops[-1], 3) if stops else None},
    'slices': slices,
}
if render:
    sc = bpy.context.scene
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    sc.collection.objects.link(cam)
    sc.camera = cam
    cam.location = (cx, lo.y - max(size.x, size.z) * 1.4, cz)
    cam.rotation_euler = (math.radians(90), 0, 0)
    sun = bpy.data.objects.new('sun', bpy.data.lights.new('sun', 'SUN'))
    sc.collection.objects.link(sun)
    sun.rotation_euler = (math.radians(60), 0, math.radians(20))
    sc.world = bpy.data.worlds.new('w')
    sc.world.color = (0.05, 0.05, 0.08)
    sc.render.engine = 'CYCLES'
    sc.cycles.samples = 16
    sc.cycles.device = 'CPU'
    sc.render.resolution_x = sc.render.resolution_y = 400
    sc.render.filepath = render
    bpy.ops.render.render(write_still=True)
with open(out, 'w') as f:
    json.dump(report, f, indent=1)
print('PASSAGE', json.dumps(report))
