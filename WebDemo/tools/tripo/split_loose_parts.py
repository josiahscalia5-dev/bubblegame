# Split a one-mesh GLB into its separate pieces (Blender, "separate by loose parts"), group them into N pieces by position, each with its origin at
# its own centre, named <prefix>_0.. from left to right (x), exported as one GLB (8 November 2026, session 57091b57: the user's Tripo
# towels as three flying towels). Geometry, UVs and texture unchanged.
#   blender -b --factory-startup --python split_loose_parts.py -- <in.glb> <out.glb> <N> <prefix>
import bpy, sys
a = sys.argv[sys.argv.index('--') + 1:]; src, dst, N, prefix = a[0], a[1], int(a[2]), a[3]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
bpy.ops.object.select_all(action='DESELECT')
for o in meshes: o.select_set(True)
bpy.context.view_layer.objects.active = meshes[0]
bpy.ops.object.mode_set(mode='EDIT'); bpy.ops.mesh.select_all(action='SELECT'); bpy.ops.mesh.separate(type='LOOSE'); bpy.ops.object.mode_set(mode='OBJECT')
# Tripo meshes come in many small islands: group the islands into N clusters by their centre along x (k-means), join each cluster
parts = [o for o in bpy.context.scene.objects if o.type == 'MESH']
xs = [sum((o.matrix_world @ v.co).x for v in o.data.vertices) / max(1, len(o.data.vertices)) for o in parts]
lo, hi = min(xs), max(xs); cent = [lo + (hi - lo) * (k + 0.5) / N for k in range(N)]
for _ in range(30):
    lab = [min(range(N), key=lambda k: abs(x - cent[k])) for x in xs]
    for k in range(N):
        m = [x for x, l in zip(xs, lab) if l == k]
        if m: cent[k] = sum(m) / len(m)
order = sorted(range(N), key=lambda k: cent[k]); out = []
for rank, k in enumerate(order):
    grp = [o for o, l in zip(parts, lab) if l == k]
    bpy.ops.object.select_all(action='DESELECT')
    for o in grp: o.select_set(True)
    bpy.context.view_layer.objects.active = grp[0]; bpy.ops.object.join()
    o = bpy.context.view_layer.objects.active; o.name = f'{prefix}_{rank}'; o.data.name = o.name; out.append(o)
bpy.ops.object.select_all(action='DESELECT')
for o in out: o.select_set(True)
bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
print('PARTS', [(o.name, len(o.data.polygons), tuple(round(v, 3) for v in o.dimensions)) for o in out], 'islands', len(parts))
bpy.ops.export_scene.gltf(filepath=dst, export_format='GLB', use_selection=False)
