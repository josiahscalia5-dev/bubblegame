# Blender inspection of the girl's rigged model (session b57cc1e7). Run with Blender 5.2.3 (bpy module or app):
#   ~/.bubblewash-tools/blender-bpy/bin/python WebDemo/tools/blender/inspect_girl.py <plain.glb> <out dir>
# (<plain.glb>: the model with its meshopt compression decoded, see decode.mjs; Blender's importer has no meshopt decoder here)
# Writes report.json and Cycles preview renders (front, side) of the rest pose to <out dir>.
import bpy, sys, json, math, os
from mathutils import Vector

src, out = sys.argv[-2], sys.argv[-1]
os.makedirs(out, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
R = {'objects': []}
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
mesh = max((o for o in bpy.data.objects if o.type == 'MESH'), key=lambda o: len(o.data.vertices))   # (the importer also adds an icosphere as the bones' display shape)
for o in [o for o in bpy.data.objects if o.type == 'MESH' and o is not mesh]: bpy.data.objects.remove(o)
for o in bpy.data.objects: R['objects'].append({'name': o.name, 'type': o.type, 'dims': [round(x, 4) for x in o.dimensions]})
me = mesh.data
ws = [mesh.matrix_world @ v.co for v in me.vertices]
lo = Vector((min(v.x for v in ws), min(v.y for v in ws), min(v.z for v in ws))); hi = Vector((max(v.x for v in ws), max(v.y for v in ws), max(v.z for v in ws)))
R['mesh'] = {'verts': len(me.vertices), 'faces': len(me.polygons), 'tris': sum(len(p.vertices) - 2 for p in me.polygons), 'uv_layers': [u.name for u in me.uv_layers],
             'materials': [m.name for m in me.materials], 'bbox_min': [round(x, 4) for x in lo], 'bbox_max': [round(x, 4) for x in hi], 'shape_keys': bool(me.shape_keys)}
R['images'] = [{'name': i.name, 'size': list(i.size)} for i in bpy.data.images]
# armature: bone heads / tails in world space (Blender is Z-up), parents, rest-pose arm angle
bones = []
for b in arm.data.bones:
    h, t = arm.matrix_world @ b.head_local, arm.matrix_world @ b.tail_local
    bones.append({'name': b.name, 'parent': b.parent.name if b.parent else None, 'head': [round(x, 4) for x in h], 'tail': [round(x, 4) for x in t], 'len': round((t - h).length, 4)})
R['bones'] = bones
ua = arm.data.bones.get('upper_arm.L');
if ua:
    d = (arm.matrix_world.to_3x3() @ (ua.tail_local - ua.head_local)).normalized()
    R['arm_angle_below_horizontal_deg'] = round(math.degrees(math.asin(-d.z)), 1)
# skin weights: influences per vertex, unweighted vertices, vertices per bone (weight > 0.5)
gi = {g.index: g.name for g in mesh.vertex_groups}
infl = [0] * 9; unweighted = 0; dom = {}
for v in me.vertices:
    gs = [(g.group, g.weight) for g in v.groups if g.weight > 1e-4]
    infl[min(8, len(gs))] += 1
    if not gs: unweighted += 1; continue
    g, w = max(gs, key=lambda x: x[1]); dom[gi[g]] = dom.get(gi[g], 0) + 1
R['weights'] = {'influences_histogram_0_to_8': infl, 'unweighted': unweighted, 'dominant_bone_vertex_counts': dom}
R['animations'] = [a.name for a in bpy.data.actions]
with open(os.path.join(out, 'report.json'), 'w') as f: json.dump(R, f, indent=1)
print(json.dumps({k: R[k] for k in ('mesh', 'images', 'weights', 'animations')}, indent=1)); print('arm angle', R.get('arm_angle_below_horizontal_deg'))

# preview renders (Cycles CPU, soft studio light)
sc = bpy.context.scene; sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = 24; sc.cycles.use_denoising = False
sc.render.resolution_x, sc.render.resolution_y = 480, 640; sc.render.film_transparent = False
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (0.82, 0.78, 0.9, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1.0
c = (lo + hi) / 2; H = hi.z - lo.z
def light(name, loc, e):
    L = bpy.data.lights.new(name, 'AREA'); L.energy = e; L.size = 1.5; o = bpy.data.objects.new(name, L); sc.collection.objects.link(o); o.location = loc
    o.rotation_euler = (Vector(c) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
light('key', (c.x + 1.2, c.y - 2.0, c.z + 1.5), 220); light('fill', (c.x - 1.6, c.y - 1.2, c.z + 0.6), 90)
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera = cam; cam.data.lens = 85
for tag, dirv in (('front', Vector((0, -1, 0))), ('side', Vector((1, 0, 0))), ('face', Vector((0, -1, 0)))):
    if tag == 'face':
        hb = arm.data.bones['head']; hc = arm.matrix_world @ hb.head_local + Vector((0, 0, 0.17 * H)); dist = H * 1.1; tgt = hc
    else:
        dist = H * 4.2; tgt = c
    cam.location = tgt + dirv * dist; cam.rotation_euler = (-dirv).to_track_quat('-Z', 'Y').to_euler()
    sc.render.filepath = os.path.join(out, f'blender_{tag}.png'); bpy.ops.render.render(write_still=True)
print('renders written')
