# Rig the user's NEW Tripo girl (02_Girl_Character, 9 November 2026; session 6ddc157f) for the six-scene opening, with the SAME bone names as
# models/opening/girl_rigged.glb (rig/rig_girl.py of 8 November), so opening3d.js drives her unchanged (two-bone IK on upper_arm / forearm /
# hand, spine, chest, head, eyelid caps). Input: the decimated mobile copy (Blender decimate, ~58k triangles, texture seams welded).
# Steps: face her toward glTF +Z, feet at 0, height 1 (as the old rig), joints from her own geometry (horizontal slices: hands hang at
# z 0.30-0.38 beside her shorts, sleeves touch the torso 0.40-0.56, neck 0.56-0.60, head 0.60-0.95), automatic (bone heat) weights, export a
# skinned GLB, render a test pose and an orthographic front view (for the eyelids).
#   blender -b --factory-startup --python rig_girl_v2.py -- <in.glb> <out.glb> <pose.png> <front.png> <report.json>
import bpy, bmesh, sys, json, math, numpy as np
from mathutils import Vector, Euler, Matrix
a = sys.argv[sys.argv.index('--') + 1:]; src, out, pose_png, front_png, rep_path = a
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=src)
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]; bpy.context.view_layer.objects.active = o; o.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
o.data.transform(Matrix.Rotation(math.pi, 4, 'Z'))   # she faced +Y (glTF -Z): turn her to -Y (glTF +Z), as the old girl
V = np.array([v.co[:] for v in o.data.vertices]); mn, mx = V.min(0), V.max(0); h = mx[2] - mn[2]
o.data.transform(Matrix.Scale(1 / h, 4) @ Matrix.Translation((-(mn[0] + mx[0]) / 2, -(mn[1] + mx[1]) / 2, -mn[2])))
bm = bmesh.new(); bm.from_mesh(o.data); bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0005); bm.to_mesh(o.data); bm.free(); o.data.update()
V = np.array([v.co[:] for v in o.data.vertices]); rep = {'verts': len(V), 'tris': sum(len(p.vertices) - 2 for p in o.data.polygons), 'source_height_m': round(float(h), 4)}
def cen(side, z0, z1, xmin):
    s = (V[:, 2] >= z0) & (V[:, 2] < z1) & (side * V[:, 0] > xmin)
    return V[s].mean(axis=0) if s.sum() > 5 else None
cy = float(np.median(V[(V[:, 2] > 0.30) & (V[:, 2] < 0.36) & (np.abs(V[:, 0]) < 0.08), 1]))   # the shorts' depth centre (the backpack would bias the chest)
J = {}
for side, tag in ((1, 'L'), (-1, 'R')):
    ha = cen(side, 0.300, 0.325, 0.125); wr = cen(side, 0.345, 0.375, 0.125); el = cen(side, 0.425, 0.455, 0.152)
    el = Vector((side * (abs(el[0]) - 0.01), el[1], 0.44)) if el is not None else Vector((side * 0.155, cy, 0.44))
    J[tag] = {'shoulder': Vector((side * 0.118, el[1], 0.535)), 'elbow': el, 'wrist': Vector(wr) if wr is not None else Vector((side * 0.157, cy, 0.36)),
              'hand': Vector(ha) if ha is not None else Vector((side * 0.157, cy, 0.31))}
rep['joints'] = {t: {k: [round(c, 4) for c in v] for k, v in d.items()} for t, d in J.items()}; rep['cy'] = round(cy, 4)
bpy.ops.object.armature_add(enter_editmode=True, location=(0, 0, 0)); arm = bpy.context.object; arm.name = 'GirlRig'; arm.data.name = 'GirlRig'
eb = arm.data.edit_bones; eb.remove(eb[0])
def bone(name, hd, tl, parent=None, conn=False):
    b = eb.new(name); b.head = Vector(hd); b.tail = Vector(tl)
    if parent: b.parent = eb[parent]; b.use_connect = conn
    return b
bone('hips', (0, cy, 0.30), (0, cy, 0.36)); bone('spine', (0, cy, 0.36), (0, cy, 0.45), 'hips', True); bone('chest', (0, cy, 0.45), (0, cy, 0.56), 'spine', True)
bone('neck', (0, cy, 0.56), (0, cy, 0.60), 'chest', True); bone('head', (0, cy, 0.60), (0, cy, 0.97), 'neck', True)
for tag, s in (('L', 1), ('R', -1)):
    j = J[tag]
    bone(f'shoulder.{tag}', (s * 0.03, cy, 0.53), j['shoulder'], 'chest')
    bone(f'upper_arm.{tag}', j['shoulder'], j['elbow'], f'shoulder.{tag}', True); bone(f'forearm.{tag}', j['elbow'], j['wrist'], f'upper_arm.{tag}', True)
    bone(f'hand.{tag}', j['wrist'], j['hand'] + (j['hand'] - j['wrist']) * 0.6, f'forearm.{tag}', True)
    bone(f'thigh.{tag}', (s * 0.07, cy, 0.30), (s * 0.085, cy, 0.16), 'hips'); bone(f'shin.{tag}', (s * 0.085, cy, 0.16), (s * 0.088, cy, 0.04), f'thigh.{tag}', True)
SEG = {b.name: (np.array(b.head[:]), np.array(b.tail[:])) for b in eb}
bpy.ops.object.mode_set(mode='OBJECT')
bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); arm.select_set(True); bpy.context.view_layer.objects.active = arm
# Skin weights from her body regions (Blender's bone-heat weighting fails on this mesh: 0 of 28k vertices weighted, and envelopes left the arms
# unbound). Arms: beyond the measured sleeve line (hands hang at |x| 0.13-0.185 beside the shorts, which end at |x| 0.117), in front of the
# backpack; legs below the crotch (z 0.30); head above the neck (z 0.575-0.615 blend); within a region, inverse-distance blending along the bones.
bpy.ops.object.parent_set(type='ARMATURE_NAME')
def ss(e0, e1, x): t = min(1.0, max(0.0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t)
def segd(p, a_, b_):
    ab = b_ - a_; t = min(1.0, max(0.0, float(np.dot(p - a_, ab) / np.dot(ab, ab)))); return float(np.linalg.norm(p - (a_ + ab * t)))
def mix(p, names):
    w = {n: 1.0 / (segd(p, *SEG[n]) + 0.01) ** 4 for n in names}; t = sum(w.values()); return {n: v / t for n, v in w.items()}
G = {g.name: g for g in o.vertex_groups}; cnt = 0
for v in o.data.vertices:
    p = np.array(v.co[:]); x, y, z = p; tag = 'L' if x > 0 else 'R'; ax = abs(x)
    th = 0.124 if z < 0.5 else 0.124 + (z - 0.5) * 0.12
    armness = ss(th - 0.004, th + 0.004, ax) * ss(0.285, 0.295, z) * (1 - ss(0.555, 0.57, z)) * (1 - ss(-0.01, 0.015, y))
    legness = 1 - ss(0.285, 0.315, z); headness = ss(0.575, 0.615, z)
    W = {}
    def add(d, k):
        for n, val in d.items(): W[n] = W.get(n, 0.0) + val * k
    add(mix(p, [f'upper_arm.{tag}', f'forearm.{tag}', f'hand.{tag}']), armness)
    rest = 1 - armness
    add(mix(p, [f'thigh.{tag}', f'shin.{tag}', 'hips']) if z > 0.2 else mix(p, [f'thigh.{tag}', f'shin.{tag}']), rest * legness)
    add({'head': 1.0}, rest * (1 - legness) * headness)
    add(mix(p, ['hips', 'spine', 'chest', 'neck', f'shoulder.{tag}'] if z > 0.5 else ['hips', 'spine', 'chest', 'neck']), rest * (1 - legness) * (1 - headness))
    for n, val in W.items():
        if val > 0.002: G[n].add([v.index], val, 'REPLACE')
    cnt += 1
unw = sum(1 for v in o.data.vertices if not any(g.weight > 0.001 for g in v.groups)); rep['unweighted_vertices'] = unw; rep['weights'] = 'region + inverse-distance (bone heat failed on this mesh)'
for p in o.data.polygons: p.use_smooth = True
bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', use_selection=True, export_skins=True, export_animations=False, export_image_format='JPEG', export_jpeg_quality=90, export_yup=True)
sc = bpy.context.scene; sc.render.engine = 'BLENDER_EEVEE'
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (0.85, 0.82, 0.92, 1)
bpy.ops.object.light_add(type='SUN', location=(1, -3, 3)); bpy.context.object.data.energy = 3
# orthographic front view (1 px = 1/1024 of her height) for the eyelid positions
bpy.ops.object.camera_add(location=(0, -3, 0.5)); cam = bpy.context.object; sc.camera = cam; cam.rotation_euler = (math.pi / 2, 0, 0)
cam.data.type = 'ORTHO'; cam.data.ortho_scale = 1.0; sc.render.resolution_x = sc.render.resolution_y = 1024; sc.render.filepath = front_png; bpy.ops.render.render(write_still=True)
# test pose: both arms forward and up (holding the bundle), the head turned, the spine leaning
cam.data.type = 'PERSP'; sc.render.resolution_x, sc.render.resolution_y = 720, 400
bpy.context.view_layer.objects.active = arm; bpy.ops.object.mode_set(mode='POSE'); pb = arm.pose.bones
for n, e in [('upper_arm.L', (-1.0, 0, -0.6)), ('upper_arm.R', (-1.0, 0, 0.6)), ('forearm.L', (-0.6, 0, 0)), ('forearm.R', (-0.6, 0, 0)), ('head', (0.15, 0, 0.35)), ('spine', (0.12, 0, 0.05))]:
    pb[n].rotation_mode = 'XYZ'; pb[n].rotation_euler = Euler(e)
bpy.ops.object.mode_set(mode='OBJECT')
cam.location = (0.9, -1.6, 0.6); cam.rotation_euler = (Vector((0, 0, 0.5)) - cam.location).to_track_quat('-Z', 'Y').to_euler()
sc.render.filepath = pose_png; bpy.ops.render.render(write_still=True)
json.dump(rep, open(rep_path, 'w'), indent=1); print('RIG', json.dumps(rep))
