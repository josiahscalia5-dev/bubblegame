# girl_v3 PIPELINE CHECK clip (session b57cc1e7): one short skeletal action keyed in Blender on girl_v3's own bones, exported in a GLB, to prove
# that a Blender (or DeepMotion -> Blender) animation loads and plays in the game. It is NOT the final motion (that comes from DeepMotion).
#   ~/.bubblewash-tools/blender-bpy/bin/python WebDemo/tools/blender/make_test_clip.py <girl_v3_game.glb> <out .glb> <preview dir>
# Keys (s, 30 fps): 0 stand relaxed, 0.8 kneel on both knees, 1.6 lean and reach forward-down into the basket, 2.4 lift (forearms up, as with a towel).
import bpy, sys, os, math
from mathutils import Vector, Matrix

src, dst, prev = sys.argv[-3], sys.argv[-2], sys.argv[-1]
os.makedirs(prev, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
mesh = max((o for o in bpy.data.objects if o.type == 'MESH'), key=lambda o: len(o.data.vertices))
for o in [o for o in bpy.data.objects if o.type == 'MESH' and o is not mesh]: bpy.data.objects.remove(o)
for b in arm.pose.bones: b.custom_shape = None
sc = bpy.context.scene; sc.render.fps = 30; sc.frame_start = 0; sc.frame_end = 72
vl = bpy.context.view_layer; vl.objects.active = arm; bpy.ops.object.mode_set(mode='POSE')
act = bpy.data.actions.new('girl3_test'); arm.animation_data_create(); arm.animation_data.action = act

def rest():
    for pb in arm.pose.bones: pb.rotation_mode = 'QUATERNION'; pb.rotation_quaternion = (1, 0, 0, 0); pb.location = (0, 0, 0)
    vl.update()
def aim(name, d):   # turn the bone about its head so it points along world direction d (armature unrotated: world = armature space)
    pb = arm.pose.bones[name]; vl.update(); cur = (pb.tail - pb.head).normalized(); q = cur.rotation_difference(Vector(d).normalized())
    M = pb.matrix.copy(); h = M.to_translation(); pb.matrix = Matrix.Translation(h) @ q.to_matrix().to_4x4() @ Matrix.Translation(-h) @ M; vl.update()
def drop_hips(dz):
    pb = arm.pose.bones['hips']; M = pb.matrix.copy(); M.translation = M.translation + Vector((0, 0, dz)); pb.matrix = M; vl.update()
def key(frame):
    for pb in arm.pose.bones:
        pb.keyframe_insert('rotation_quaternion', frame=frame)
        if pb.name == 'hips': pb.keyframe_insert('location', frame=frame)

# directions: +X = her left, -Y = her front, +Z = up
def arms(up, fore, hand):
    for s, sx in (('L', 1), ('R', -1)):
        aim(f'upper_arm.{s}', (up[0] * sx, up[1], up[2])); aim(f'forearm.{s}', (fore[0] * sx, fore[1], fore[2])); aim(f'hand.{s}', (hand[0] * sx, hand[1], hand[2]))
def torso(sp, ch, nk, hd):
    aim('spine', sp); aim('chest', ch); aim('neck', nk); aim('head', hd)
def kneel():
    drop_hips(-0.128)
    for s, sx in (('L', 1), ('R', -1)):
        aim(f'thigh.{s}', (0.07 * sx, -0.08, -1)); aim(f'shin.{s}', (0.0, 0.97, -0.2)); aim(f'foot.{s}', (0, 0.98, -0.18)); aim(f'toe.{s}', (0, 0.98, -0.2))

rest(); torso((0, 0, 1), (0, -0.02, 1), (0, -0.04, 1), (0, -0.05, 1)); arms((0.32, -0.05, -0.95), (0.12, -0.2, -0.97), (0.08, -0.2, -0.97)); key(0)
rest(); kneel(); torso((0, -0.14, 0.99), (0, -0.2, 0.98), (0, -0.12, 0.99), (0, -0.05, 1)); arms((0.26, -0.32, -0.91), (0.1, -0.45, -0.89), (0.08, -0.45, -0.89)); key(24)
rest(); kneel(); torso((0, -0.45, 0.89), (0, -0.55, 0.83), (0, -0.25, 0.97), (0, 0.05, 1)); arms((0.17, -0.76, -0.63), (0.07, -0.8, -0.6), (0.05, -0.7, -0.71)); key(48)
rest(); kneel(); torso((0, -0.2, 0.98), (0, -0.26, 0.97), (0, -0.1, 0.99), (0, -0.02, 1)); arms((0.16, -0.94, -0.3), (0.05, -0.86, 0.5), (0.04, -0.88, 0.47)); key(72)
bpy.ops.object.mode_set(mode='OBJECT')

# previews of the four keys (Cycles, quick)
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = 16; sc.cycles.use_denoising = False; sc.render.resolution_x, sc.render.resolution_y = 400, 500
w = bpy.data.worlds.new('w'); sc.world = w
try: w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (0.82, 0.78, 0.9, 1)
except Exception: pass
for name, loc, e in (('key', (1.4, -2.2, 1.8), 220), ('fill', (-1.8, -1.2, 0.8), 90)):
    Lt = bpy.data.lights.new(name, 'AREA'); Lt.energy = e; Lt.size = 1.5; o = bpy.data.objects.new(name, Lt); sc.collection.objects.link(o); o.location = loc
    o.rotation_euler = (Vector((0, 0, 0.45)) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera = cam; cam.data.lens = 60
d = Vector((1.0, -1.1, 0.25)); cam.location = Vector((0, -0.05, 0.42)) + d.normalized() * 3.2; cam.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
for f in (0, 24, 48, 72):
    sc.frame_set(f); sc.render.filepath = os.path.join(prev, f'key_{f:02d}.png'); bpy.ops.render.render(write_still=True)
sc.frame_set(0)
# export: the mesh, the skin and the one action (sampled at 30 fps)
bpy.ops.object.select_all(action='DESELECT'); arm.select_set(True); mesh.select_set(True); vl.objects.active = arm
bpy.ops.export_scene.gltf(filepath=dst, export_format='GLB', use_selection=True, export_skins=True, export_animations=True, export_yup=True,
                          export_force_sampling=True, export_frame_range=True, export_animation_mode='ACTIONS')
print('exported', dst, 'action', act.name, 'frames', sc.frame_start, sc.frame_end)
