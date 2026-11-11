# Blender (session ddf175f2): delete whole connected parts of a Tripo GLB that lie beyond a plane (e.g. a wall bracket Tripo built beside a
# brush), keeping UVs, normals and materials untouched (parts are found by shared vertex POSITIONS, so UV seams do not split them; the mesh
# itself is not welded). Usage: blender -b --python blender_drop_parts.py -- <in.glb> <out.glb> <axis x|y|z (Blender, z up)> <max> [min_faces]
# deletes every part whose largest coordinate on <axis> is below <max>.
import bpy, sys, bmesh
a = sys.argv[sys.argv.index('--') + 1:]; src, dst, axis, lim = a[0], a[1], a[2], float(a[3])
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=src)
o = [o for o in bpy.context.scene.objects if o.type == 'MESH'][0]
bm = bmesh.new(); bm.from_mesh(o.data); bm.faces.ensure_lookup_table()
key = lambda v: (round(v.co.x, 3), round(v.co.y, 3), round(v.co.z, 3))
parent = list(range(len(bm.faces)))
def find(i):
    while parent[i] != i: parent[i] = parent[parent[i]]; i = parent[i]
    return i
owner = {}
for f in bm.faces:
    for v in f.verts:
        k = key(v)
        if k in owner: ra, rb = find(owner[k]), find(f.index); parent[ra] = rb
        else: owner[k] = f.index
groups = {}
for f in bm.faces: groups.setdefault(find(f.index), []).append(f)
ax = 'xyz'.index(axis); drop = []
for g in groups.values():
    mx = max(max(((o.matrix_world @ v.co)[ax]) for v in f.verts) for f in g)
    if mx < lim: drop += g
print('parts', len(groups), 'faces', len(bm.faces), 'dropped faces', len(drop))
bmesh.ops.delete(bm, geom=drop, context='FACES'); bm.to_mesh(o.data); bm.free()
bpy.ops.export_scene.gltf(filepath=dst, export_format='GLB')
