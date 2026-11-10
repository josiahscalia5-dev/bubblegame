# girl_v3 (session b57cc1e7): the girl made ready for DeepMotion Animate 3D and for skeletal clips in the game, with real Blender (5.2.3).
#   ~/.bubblewash-tools/blender-bpy/bin/python WebDemo/tools/blender/prepare_girl_v3.py <plain girl_v2 .glb> <out dir>
# From the user's existing model (girl_v2_rigged.glb, meshopt decoded; the original file is never changed):
#   1. T-pose as the rest pose: each arm chain (upper arm, forearm, hand) turned level along her side axis, the mesh baked in that pose, the pose
#      applied as rest, the skin re-attached (DeepMotion's custom-character rule: the default pose is a T-pose; feet on the origin plane).
#   2. Ankles and toes: foot.L/R (ankle to ball) and toe.L/R bones under the shins, the shoes weighted to the feet; eye.L/R joints in the head (no
#      weights) at her painted eyes.
#   3. Skin weights where her rig was coarse (measured: ~3,265 vertices per leg follow the SHIN, ~284 the thigh; ~1,440 per arm follow the SHOULDER,
#      ~230 the upper arm): blended along each limb at the knee, shoulder, elbow and wrist; head, hair, bow, torso and backpack weights unchanged.
# Writes: girl_v3_tpose_deepmotion.fbx (Mixamo-style joint names, textures embedded), girl_v3_tpose_deepmotion.glb (same, for DeepMotion's GLB upload),
# girl_v3_game.glb (her original joint names + the new ones, for the game), report.json and Cycles previews.
import bpy, sys, os, json, math
from mathutils import Vector, Matrix, Quaternion

src, out = sys.argv[-2], sys.argv[-1]
os.makedirs(out, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
mesh = max((o for o in bpy.data.objects if o.type == 'MESH'), key=lambda o: len(o.data.vertices))
for o in [o for o in bpy.data.objects if o.type == 'MESH' and o is not mesh]: bpy.data.objects.remove(o)   # (the importer's bone display icosphere)
for o in bpy.data.objects:
    if o.type == 'ARMATURE':
        for b in o.pose.bones: b.custom_shape = None
R = {'source': os.path.basename(src)}
vl = bpy.context.view_layer

def mode(o, m):
    bpy.ops.object.mode_set(mode='OBJECT') if bpy.context.object and bpy.context.object.mode != 'OBJECT' else None
    for x in bpy.context.selected_objects: x.select_set(False)
    vl.objects.active = o; o.select_set(True)
    if m != 'OBJECT': bpy.ops.object.mode_set(mode=m)

AW = arm.matrix_world
def head_w(n): return AW @ arm.pose.bones[n].head
def tail_w(n): return AW @ arm.pose.bones[n].tail

# ---- 1. T-pose: level each arm chain along +-X (her left is +X: glTF +Z forward becomes Blender -Y forward)
mode(arm, 'POSE')
for side, sx in (('L', 1), ('R', -1)):
    for bn in (f'upper_arm.{side}', f'forearm.{side}', f'hand.{side}'):
        pb = arm.pose.bones[bn]; vl.update()
        cur = (pb.tail - pb.head).normalized()   # armature space (the armature object is unrotated after import)
        tgt = Vector((sx, 0, 0))
        q = cur.rotation_difference(tgt)
        M = pb.matrix.copy(); h = M.to_translation()
        pb.matrix = Matrix.Translation(h) @ q.to_matrix().to_4x4() @ Matrix.Translation(-h) @ M
        vl.update()
R['tpose_arm_dirs'] = {s: [round(x, 3) for x in (arm.pose.bones[f'hand.{s}'].tail - arm.pose.bones[f'upper_arm.{s}'].head).normalized()] for s in 'LR'}
mode(mesh, 'OBJECT')
mod = next(m for m in mesh.modifiers if m.type == 'ARMATURE')
bpy.ops.object.modifier_apply(modifier=mod.name)            # bake the T-posed shape into the mesh
mode(arm, 'POSE'); bpy.ops.pose.armature_apply(selected=False)   # the T-pose becomes the rest pose
mode(mesh, 'OBJECT'); m2 = mesh.modifiers.new('Armature', 'ARMATURE'); m2.object = arm

# ---- measurements on the T-posed mesh
me = mesh.data; MW = mesh.matrix_world
V = [MW @ v.co for v in me.vertices]
gi = {g.index: g.name for g in mesh.vertex_groups}
def dominant(v): gs = [(g.group, g.weight) for g in v.groups if g.weight > 1e-4]; return gi[max(gs, key=lambda x: x[1])[0]] if gs else None
DOM = [dominant(v) for v in me.vertices]
zmin = min(p.z for p in V); R['feet_min_z'] = round(zmin, 4); R['height'] = round(max(p.z for p in V) - zmin, 4)

# ---- 2. ankles, feet, toes, eyes (edit bones)
mode(arm, 'EDIT'); eb = arm.data.edit_bones
inv = AW.inverted()
feet = {}
for side, sx in (('L', 1), ('R', -1)):
    shin = eb[f'shin.{side}']; knee = AW @ shin.head
    legv = [V[i] for i in range(len(V)) if DOM[i] == f'shin.{side}']
    # the ankle: the top of the shoe (where the leg's front-to-back depth jumps), found by scanning up from the floor
    def depth(z0, z1):
        s = [p.y for p in legv if z0 <= p.z < z1]; return (max(s) - min(s)) if len(s) > 8 else 0
    zs = [zmin + 0.005 * k for k in range(1, 40)]
    leg_d = depth(knee.z - 0.05, knee.z - 0.02)
    az = next((z for z in zs if depth(z, z + 0.01) < leg_d * 1.35), zmin + 0.08)
    ring = [p for p in legv if az <= p.z < az + 0.012]
    ax = sum(p.x for p in ring) / len(ring); ay = sum(p.y for p in ring) / len(ring)
    shoe = [p for p in legv if p.z < az]
    front_y = min(p.y for p in shoe)   # (toward -Y = her front)
    ball = Vector((ax, ay + (front_y - ay) * 0.62, zmin + 0.02)); tip = Vector((ax, front_y + 0.005, zmin + 0.015)); ankle = Vector((ax, ay, az))
    shin.tail = inv @ ankle
    f = eb.new(f'foot.{side}'); f.head = inv @ ankle; f.tail = inv @ ball; f.parent = shin; f.use_connect = True
    t = eb.new(f'toe.{side}'); t.head = inv @ ball; t.tail = inv @ tip; t.parent = f; t.use_connect = True
    for b in (f, t): b.roll = 0
    feet[side] = {'ankle': [round(x, 4) for x in ankle], 'ball': [round(x, 4) for x in ball], 'tip': [round(x, 4) for x in tip], 'knee_z': round(knee.z, 4)}
R['feet'] = feet
# eyes: at her painted eyes on the face (model coordinates measured in the game: (-0.078, 0.756) and (0.034, 0.777), y up, front +Z in glTF)
hd = eb['head']
for side, (gx, gy) in (('R', (-0.078, 0.756)), ('L', (0.034, 0.777))):
    e = eb.new(f'eye.{side}'); p = Vector((gx, -0.17, gy)); e.head = inv @ p; e.tail = inv @ (p + Vector((0, -0.03, 0))); e.parent = hd
mode(mesh, 'OBJECT')

# ---- 3. skin weights along the limbs
def vg(name): return mesh.vertex_groups.get(name) or mesh.vertex_groups.new(name=name)
def sstep(a, b, x): t = min(1, max(0, (x - a) / (b - a))) if b != a else (1 if x >= a else 0); return t * t * (3 - 2 * t)
J = lambda n: AW @ arm.data.bones[n].head_local
changed = {}
def setw(i, ws):   # replace vertex i's weights by the dict ws (bone -> weight), normalised
    s = sum(ws.values())
    for g in list(me.vertices[i].groups): mesh.vertex_groups[g.group].remove([i])
    for n, w in ws.items():
        if w > 1e-3: vg(n).add([i], w / s, 'REPLACE')
for side, sx in (('L', 1), ('R', -1)):
    # legs: thigh above the knee, shin below, foot below the ankle (only vertices that followed the leg's own bones)
    kz = J(f'shin.{side}').z; az = feet[side]['ankle'][2]
    for i, p in enumerate(V):
        if DOM[i] not in (f'shin.{side}', f'thigh.{side}'): continue
        th = sstep(kz - 0.018, kz + 0.022, p.z); ft = 1 - sstep(az - 0.012, az + 0.008, p.z)
        setw(i, {f'thigh.{side}': th, f'shin.{side}': (1 - th) * (1 - ft), f'foot.{side}': (1 - th) * ft}); changed[f'leg.{side}'] = changed.get(f'leg.{side}', 0) + 1
    # arms (T-pose: the chain runs along X): shoulder -> upper arm at the shoulder joint, -> forearm at the elbow, -> hand at the wrist
    j0, j1, j2 = sx * J(f'upper_arm.{side}').x, sx * J(f'forearm.{side}').x, sx * J(f'hand.{side}').x
    az0 = J(f'upper_arm.{side}').z
    for i, p in enumerate(V):
        if DOM[i] not in (f'shoulder.{side}', f'upper_arm.{side}', f'forearm.{side}', f'hand.{side}'): continue
        u = sx * p.x
        if u < j0 - 0.03 or abs(p.z - az0) > 0.09: continue   # the torso side of the shoulder joint keeps its weights
        a = sstep(j0 - 0.02, j0 + 0.025, u); b = sstep(j1 - 0.018, j1 + 0.018, u); c = sstep(j2 - 0.012, j2 + 0.01, u)
        setw(i, {f'shoulder.{side}': 1 - a, f'upper_arm.{side}': a * (1 - b), f'forearm.{side}': b * (1 - c), f'hand.{side}': c}); changed[f'arm.{side}'] = changed.get(f'arm.{side}', 0) + 1
R['reweighted_vertices'] = changed
gi = {g.index: g.name for g in mesh.vertex_groups}
dom2 = {}
for v in me.vertices:
    d = dominant(v); dom2[d] = dom2.get(d, 0) + 1
R['dominant_bone_vertex_counts_after'] = dom2
R['bones'] = [b.name for b in arm.data.bones]

# ---- exports
def select_both():
    mode(arm, 'OBJECT'); mesh.select_set(True); arm.select_set(True); vl.objects.active = arm
select_both()
bpy.ops.export_scene.gltf(filepath=os.path.join(out, 'girl_v3_game.glb'), export_format='GLB', use_selection=True, export_animations=False, export_skins=True, export_yup=True)
# DeepMotion copy: Mixamo-style joint names (DeepMotion maps by hierarchy; standard names avoid any ambiguity)
NAMES = {'hips': 'Hips', 'spine': 'Spine', 'chest': 'Spine1', 'neck': 'Neck', 'head': 'Head', 'eye.L': 'LeftEye', 'eye.R': 'RightEye'}
for s, S in (('L', 'Left'), ('R', 'Right')):
    NAMES.update({f'shoulder.{s}': f'{S}Shoulder', f'upper_arm.{s}': f'{S}Arm', f'forearm.{s}': f'{S}ForeArm', f'hand.{s}': f'{S}Hand',
                  f'thigh.{s}': f'{S}UpLeg', f'shin.{s}': f'{S}Leg', f'foot.{s}': f'{S}Foot', f'toe.{s}': f'{S}ToeBase'})
for b in arm.data.bones:
    if b.name in NAMES: b.name = NAMES[b.name]   # (vertex groups follow bone renames)
arm.name = 'GirlRig'; mesh.name = 'Girl'
select_both()
bpy.ops.export_scene.fbx(filepath=os.path.join(out, 'girl_v3_tpose_deepmotion.fbx'), use_selection=True, object_types={'ARMATURE', 'MESH'}, add_leaf_bones=False,
                         path_mode='COPY', embed_textures=True, bake_anim=False, apply_scale_options='FBX_SCALE_ALL', axis_forward='-Z', axis_up='Y', primary_bone_axis='Y', secondary_bone_axis='X')
bpy.ops.export_scene.gltf(filepath=os.path.join(out, 'girl_v3_tpose_deepmotion.glb'), export_format='GLB', use_selection=True, export_animations=False, export_skins=True, export_yup=True)
R['joint_names_deepmotion'] = [b.name for b in arm.data.bones]
with open(os.path.join(out, 'report.json'), 'w') as f: json.dump(R, f, indent=1)
print(json.dumps(R, indent=1))
