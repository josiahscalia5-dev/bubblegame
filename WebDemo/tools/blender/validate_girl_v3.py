# girl_v3 validation (session b57cc1e7): re-import an exported file in a fresh Blender scene, report its joints / mesh / feet, render the rest
# (T-)pose and a bend-kneel-reach test pose with Cycles (the skin weights' deformation).
#   ~/.bubblewash-tools/blender-bpy/bin/python WebDemo/tools/blender/validate_girl_v3.py <girl_v3 .fbx|.glb> <out dir>
import bpy, sys, os, json, math
from mathutils import Vector, Euler

src, out = sys.argv[-2], sys.argv[-1]
os.makedirs(out, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
(bpy.ops.import_scene.fbx if src.lower().endswith('.fbx') else bpy.ops.import_scene.gltf)(filepath=src)
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
mesh = max((o for o in bpy.data.objects if o.type == 'MESH'), key=lambda o: len(o.data.vertices))
for o in [o for o in bpy.data.objects if o.type == 'MESH' and o is not mesh]: bpy.data.objects.remove(o)
dg = bpy.context.evaluated_depsgraph_get()
ev = mesh.evaluated_get(dg); V = [ev.matrix_world @ v.co for v in ev.data.vertices]
lo = Vector((min(p.x for p in V), min(p.y for p in V), min(p.z for p in V))); hi = Vector((max(p.x for p in V), max(p.y for p in V), max(p.z for p in V)))
R = {'file': os.path.basename(src), 'joints': [b.name for b in arm.data.bones], 'n_joints': len(arm.data.bones), 'verts': len(mesh.data.vertices),
     'bbox_min': [round(x, 4) for x in lo], 'bbox_max': [round(x, 4) for x in hi], 'images': [i.name for i in bpy.data.images if i.size[0]], 'roots': [b.name for b in arm.data.bones if not b.parent]}
names = {b.name for b in arm.data.bones}
L = lambda *c: next((n for n in c if n in names), None)
J = {k: L(*v) for k, v in {'spine': ('Spine', 'spine'), 'chest': ('Spine1', 'chest'), 'head': ('Head', 'head'), 'armL': ('LeftArm', 'upper_arm.L'), 'foreL': ('LeftForeArm', 'forearm.L'),
      'armR': ('RightArm', 'upper_arm.R'), 'foreR': ('RightForeArm', 'forearm.R'), 'thighL': ('LeftUpLeg', 'thigh.L'), 'shinL': ('LeftLeg', 'shin.L'), 'footL': ('LeftFoot', 'foot.L'),
      'thighR': ('RightUpLeg', 'thigh.R'), 'shinR': ('RightLeg', 'shin.R')}.items()}
R['mapped'] = J
ua = arm.data.bones[J['armL']]; d = (arm.matrix_world.to_3x3() @ (ua.tail_local - ua.head_local)).normalized(); R['rest_arm_angle_below_horizontal_deg'] = round(math.degrees(math.asin(max(-1, min(1, -d.z)))), 1)
print(json.dumps(R, indent=1))

sc = bpy.context.scene; sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = 24; sc.cycles.use_denoising = False
sc.render.resolution_x, sc.render.resolution_y = 520, 640
w = bpy.data.worlds.new('w'); sc.world = w
try:
    w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (0.82, 0.78, 0.9, 1)
except Exception: pass
c = (lo + hi) / 2; H = hi.z - lo.z
for name, loc, e in (('key', (c.x + 1.2, c.y - 2.0, c.z + 1.5), 220), ('fill', (c.x - 1.6, c.y - 1.2, c.z + 0.6), 90)):
    Lt = bpy.data.lights.new(name, 'AREA'); Lt.energy = e; Lt.size = 1.5; o = bpy.data.objects.new(name, Lt); sc.collection.objects.link(o); o.location = loc
    o.rotation_euler = (Vector(c) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera = cam; cam.data.lens = 70
def shot(tag, dirv, dist=None, tgt=None):
    tgt = tgt or c; dist = dist or H * 3.3
    cam.location = tgt + dirv.normalized() * dist; cam.rotation_euler = (-dirv).to_track_quat('-Z', 'Y').to_euler()
    sc.render.filepath = os.path.join(out, f'{tag}.png'); bpy.ops.render.render(write_still=True)
shot('rest_front', Vector((0, -1, 0.05))); shot('rest_34', Vector((0.8, -1, 0.15)))
# the test pose: kneeling (both knees down), leaning forward, reaching down-forward with both hands (bones rotated in their own local axes)
bpy.context.view_layer.objects.active = arm; bpy.ops.object.mode_set(mode='POSE')
def rot(n, x=0, y=0, z=0):
    if not n: return
    pb = arm.pose.bones[n]; pb.rotation_mode = 'XYZ'; pb.rotation_euler = Euler((math.radians(x), math.radians(y), math.radians(z)))
# (axes: found by the deformation itself; the report lists the bones' world directions after posing)
rot(J['thighL'], x=-85); rot(J['thighR'], x=-85); rot(J['shinL'], x=110); rot(J['shinR'], x=110)
rot(J['spine'], x=22); rot(J['chest'], x=12); rot(J['head'], x=-18)
rot(J['armL'], z=-70, x=-10); rot(J['armR'], z=70, x=-10); rot(J['foreL'], x=-25); rot(J['foreR'], x=-25)
bpy.context.view_layer.update()
P = {k: [round(x, 3) for x in (arm.matrix_world @ arm.pose.bones[n].tail)] for k, n in J.items() if n}
print('posed tails', json.dumps(P))
bpy.ops.object.mode_set(mode='OBJECT')
shot('pose_34', Vector((1.0, -1, 0.25)), H * 3.0); shot('pose_side', Vector((1, 0, 0.1)), H * 3.0)
with open(os.path.join(out, 'validate.json'), 'w') as f: json.dump({**R, 'posed_tails': P}, f, indent=1)
print('done')
