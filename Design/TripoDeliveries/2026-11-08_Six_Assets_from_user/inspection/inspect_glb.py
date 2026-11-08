# Inspect one GLB in an empty Blender scene (8 November 2026): statistics, renders from the front, side, rear and top, and for a
# washer a depth map of rays shot into its front (a real opening shows as a deep region). Nothing is written back to the model.
#   blender -b --factory-startup --python inspect_glb.py -- <model.glb> <out prefix> [washer]
import bpy, bmesh, sys, json, math
from mathutils import Vector
a = sys.argv[sys.argv.index('--') + 1:]; path, out = a[0], a[1]; washer = len(a) > 2 and a[2] == 'washer'
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=path)
objs = [o for o in bpy.context.scene.objects if o.type == 'MESH']
dg = bpy.context.evaluated_depsgraph_get()
st = {'file': path.split('/')[-1], 'meshes': len(objs), 'triangles': 0, 'vertices': 0, 'loose_parts': 0, 'materials': [], 'textures': [],
      'armatures': len([o for o in bpy.context.scene.objects if o.type == 'ARMATURE']), 'actions': len(bpy.data.actions),
      'skinned': any(m.type == 'ARMATURE' for o in objs for m in o.modifiers)}
lo, hi = Vector((1e9,) * 3), Vector((-1e9,) * 3)
for o in objs:
    me = o.evaluated_get(dg).to_mesh(); bm = bmesh.new(); bm.from_mesh(me)
    st['triangles'] += sum(len(f.verts) - 2 for f in bm.faces); st['vertices'] += len(bm.verts)
    seen, parts = set(), 0
    for v in bm.verts:
        if v.index in seen: continue
        parts += 1; stack = [v]; seen.add(v.index)
        while stack:
            x = stack.pop()
            for e in x.link_edges:
                y = e.other_vert(x)
                if y.index not in seen: seen.add(y.index); stack.append(y)
    st['loose_parts'] += parts; bm.free()
    for c in o.bound_box:
        w = o.matrix_world @ Vector(c); lo = Vector(map(min, lo, w)); hi = Vector(map(max, hi, w))
    for s in o.material_slots:
        if s.material and s.material.name not in st['materials']: st['materials'].append(s.material.name)
for im in bpy.data.images:
    if im.size[0]: st['textures'].append([im.name, im.size[0], im.size[1]])
size = hi - lo; ctr = (hi + lo) / 2
st['size_xyz_blender'] = [round(v, 4) for v in size]   # Blender: X right, Y back (glTF -Z), Z up
# renders: front (glTF +Z = Blender -Y), side, rear, top, plus the game's rear camera (16 degrees above, from behind)
sc = bpy.context.scene; sc.render.engine = 'BLENDER_EEVEE'; sc.render.resolution_x = sc.render.resolution_y = 360; sc.render.film_transparent = False
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (0.82, 0.8, 0.9, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1.0
for loc, en in [((3, -4, 5), 3.0), ((-4, -2, 2), 1.2), ((0, 5, 3), 1.5)]:
    bpy.ops.object.light_add(type='SUN', location=loc); L = bpy.context.object; L.data.energy = en; L.rotation_euler = (Vector((0, 0, 0)) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
bpy.ops.object.camera_add(); cam = bpy.context.object; sc.camera = cam; cam.data.type = 'ORTHO'; cam.data.ortho_scale = max(size) * 1.25
R = max(size) * 3
views = {'front': (0, -1, 0), 'side': (1, 0, 0), 'rear': (0, 1, 0), 'top': (0, -0.001, 1), 'game_rear_cam': (0, math.cos(math.radians(16)), math.sin(math.radians(16)))}
for name, d in views.items():
    cam.data.type = 'PERSP' if name == 'game_rear_cam' else 'ORTHO'; cam.data.lens = 50
    dv = Vector(d).normalized(); cam.location = ctr + dv * R
    cam.rotation_euler = (ctr - cam.location).to_track_quat('-Z', 'Y').to_euler()
    sc.render.filepath = f'{out}_{name}.png'; bpy.ops.render.render(write_still=True)
if washer:   # depth of the first surface met by rays shot into the front (deep = an opening into the drum)
    W, H = 48, 48; deep = []
    for j in range(H):
        row = []
        for i in range(W):
            p = Vector((lo.x + size.x * (i + 0.5) / W, lo.y - 0.5, hi.z - size.z * (j + 0.5) / H))
            ok, loc, *_ = sc.ray_cast(dg, p, Vector((0, 1, 0)))
            row.append(round((loc.y - lo.y) / size.y, 3) if ok else 1.0)
        deep.append(row)
    st['front_depth_map'] = deep
    st['opening_cells_deeper_than_25pct'] = sum(1 for r in deep for v in r if v > 0.25)
    st['through_cells_no_hit'] = sum(1 for r in deep for v in r if v >= 1.0)
json.dump(st, open(f'{out}_stats.json', 'w'), indent=1)
print('STATS', json.dumps({k: v for k, v in st.items() if k != 'front_depth_map'}))
