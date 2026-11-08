# Rig the user's Tripo girl (8 November 2026): weld the texture seams, place a skeleton from her own geometry, bind the mesh
# with automatic (bone heat) weights, shrink the texture for phones, export a skinned GLB, and render a test pose.
# The source GLB is not changed.   blender -b --factory-startup --python rig_girl.py -- <in.glb> <out.glb> <pose.png> <report.json>
import bpy, bmesh, sys, json, math, numpy as np
from mathutils import Vector, Euler
a = sys.argv[sys.argv.index('--') + 1:]; src, out, pose_png, rep_path = a
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=src)
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]; bpy.context.view_layer.objects.active = o; o.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
rep = {'verts_before': len(o.data.vertices)}
bm = bmesh.new(); bm.from_mesh(o.data); bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0006); bm.to_mesh(o.data); bm.free(); o.data.update()
rep['verts_after_weld'] = len(o.data.vertices)
V = np.array([v.co[:] for v in o.data.vertices])
def arm_centre(side, z0, z1):   # the centroid of the arm's vertices in a height band (outside the torso)
    s = (V[:, 2] >= z0) & (V[:, 2] < z1) & (side * V[:, 0] > 0.105)
    return V[s].mean(axis=0) if s.sum() > 5 else None
J = {}
for side, tag in ((1, 'L'), (-1, 'R')):
    up = arm_centre(side, 0.47, 0.5); el = arm_centre(side, 0.39, 0.42); wr = arm_centre(side, 0.32, 0.345); ha = arm_centre(side, 0.275, 0.3)
    J[tag] = {'shoulder': Vector((side * 0.112, (up[1] if up is not None else 0), 0.505)), 'elbow': Vector(el if el is not None else (side * 0.165, 0, 0.405)),
              'wrist': Vector(wr if wr is not None else (side * 0.195, 0, 0.33)), 'hand': Vector(ha if ha is not None else (side * 0.205, 0, 0.28))}
rep['joints'] = {t: {k: [round(c, 4) for c in v] for k, v in d.items()} for t, d in J.items()}
cy = float(np.median(V[(V[:, 2] > 0.3) & (V[:, 2] < 0.5) & (np.abs(V[:, 0]) < 0.08), 1]))   # the torso's depth centre
bpy.ops.object.armature_add(enter_editmode=True, location=(0, 0, 0)); arm = bpy.context.object; arm.name = 'GirlRig'; ab = arm.data; ab.name = 'GirlRig'
eb = ab.edit_bones; eb.remove(eb[0])
def bone(name, h, t, parent=None, conn=False):
    b = eb.new(name); b.head = Vector(h); b.tail = Vector(t)
    if parent: b.parent = eb[parent]; b.use_connect = conn
    return b
bone('hips', (0, cy, 0.29), (0, cy, 0.35)); bone('spine', (0, cy, 0.35), (0, cy, 0.43), 'hips', True); bone('chest', (0, cy, 0.43), (0, cy, 0.53), 'spine', True)
bone('neck', (0, cy, 0.53), (0, cy, 0.585), 'chest', True); bone('head', (0, cy, 0.585), (0, cy, 0.95), 'neck', True)
for tag, s in (('L', 1), ('R', -1)):
    j = J[tag]
    bone(f'shoulder.{tag}', (s * 0.03, cy, 0.51), j['shoulder'], 'chest')
    bone(f'upper_arm.{tag}', j['shoulder'], j['elbow'], f'shoulder.{tag}', True); bone(f'forearm.{tag}', j['elbow'], j['wrist'], f'upper_arm.{tag}', True)
    bone(f'hand.{tag}', j['wrist'], j['hand'] + (j['hand'] - j['wrist']) * 0.6, f'forearm.{tag}', True)
    bone(f'thigh.{tag}', (s * 0.045, cy, 0.29), (s * 0.042, cy, 0.165), 'hips'); bone(f'shin.{tag}', (s * 0.042, cy, 0.165), (s * 0.04, cy, 0.05), f'thigh.{tag}', True)
bpy.ops.object.mode_set(mode='OBJECT')
# bind: automatic weights (bone heat); report any vertex left without weights
bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); arm.select_set(True); bpy.context.view_layer.objects.active = arm
bpy.ops.object.parent_set(type='ARMATURE_AUTO')
unw = sum(1 for v in o.data.vertices if not any(g.weight > 0.001 for g in v.groups)); rep['unweighted_vertices'] = unw
if unw > len(o.data.vertices) * 0.02:   # heat weighting failed on part of the mesh: envelopes for the rest
    bpy.ops.object.parent_set(type='ARMATURE_ENVELOPE'); rep['fallback'] = 'envelope'
rep['vertex_groups'] = [g.name for g in o.vertex_groups]
# the texture for phones: 2048 x 2048
for im in bpy.data.images:
    if im.size[0] > 2048: im.scale(2048, 2048); rep['texture'] = [im.name, 2048]
# export (the rest pose; animation is done in the game)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', use_selection=True, export_skins=True, export_animations=False, export_image_format='JPEG', export_jpeg_quality=88, export_yup=True)
# a test pose: both arms forward and up (tossing), the head turned, the spine leaning: does the skin follow cleanly?
bpy.context.view_layer.objects.active = arm; bpy.ops.object.mode_set(mode='POSE'); pb = arm.pose.bones
for n, e in [('upper_arm.L', (-1.0, 0, -0.6)), ('upper_arm.R', (-1.0, 0, 0.6)), ('forearm.L', (-0.6, 0, 0)), ('forearm.R', (-0.6, 0, 0)), ('head', (0.15, 0, 0.35)), ('spine', (0.12, 0, 0.05))]:
    pb[n].rotation_mode = 'XYZ'; pb[n].rotation_euler = Euler(e)
bpy.ops.object.mode_set(mode='OBJECT')
sc = bpy.context.scene; sc.render.engine = 'BLENDER_EEVEE'; sc.render.resolution_x, sc.render.resolution_y = 720, 400
w = bpy.data.worlds.new('w'); sc.world = w; w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (0.85, 0.82, 0.92, 1)
bpy.ops.object.light_add(type='SUN', location=(1, -3, 3)); bpy.context.object.data.energy = 3
bpy.ops.object.camera_add(location=(0.9, -1.6, 0.6)); cam = bpy.context.object; sc.camera = cam
cam.rotation_euler = (Vector((0, 0, 0.5)) - cam.location).to_track_quat('-Z', 'Y').to_euler()
sc.render.filepath = pose_png; bpy.ops.render.render(write_still=True)
json.dump(rep, open(rep_path, 'w'), indent=1); print('RIG', json.dumps({k: v for k, v in rep.items() if k != 'vertex_groups'}))
