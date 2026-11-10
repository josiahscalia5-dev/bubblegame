# girl3 LAUNDRY clip (session b57cc1e7): the girl kneels at the basket, grips the blue towel he hides under, lifts the bundle, rises while turning,
# walks to the washer, pushes the bundle into the drum, lets go, and turns back to the basket. Authored in Blender 5.2.3 on her own skeleton
# (girl_v3: T-pose rest) at the game's real positions, with IK hands and feet (elbow / knee poles), keyed hips and spine, a head gaze target and
# foot / hand orientation targets; baked to plain bone keys (no constraints) and exported as one GLB action for three.js.
#   ~/.bubblewash-tools/blender-bpy/bin/python WebDemo/tools/blender/animate_laundry.py <girl_v3_game.glb> <landmarks.json> <out.glb> <preview dir> [keys.py]
# landmarks.json: the game's world positions (y up), from tools/girl13/probe.cjs DUMP=1. The optional keys.py replaces the KEYS below (for tuning).
# Coordinates: game (x, y, z) -> Blender (x, -z, y). Her front is -Y in her own (armature) space; her left is +X. 30 fps.
import bpy, sys, os, json, math
from mathutils import Vector, Matrix, Euler, Quaternion

args = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[-5:] if sys.argv[-1].endswith('.py') else sys.argv[-4:]
src, lmf, dst, prev = args[:4]; keyfile = args[4] if len(args) > 4 else None
os.makedirs(prev, exist_ok=True)
LM = json.load(open(lmf))
G = lambda p: Vector((p[0], -p[2], p[1]))   # game -> Blender
FPS = 30

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
mesh = max((o for o in bpy.data.objects if o.type == 'MESH'), key=lambda o: len(o.data.vertices))
for o in [o for o in bpy.data.objects if o.type == 'MESH' and o is not mesh]: bpy.data.objects.remove(o)
for b in arm.pose.bones: b.custom_shape = None
sc = bpy.context.scene; sc.render.fps = FPS; vl = bpy.context.view_layer
S = LM['S']; SCL = S['scale']; YAW0 = S['yaw1']
arm.rotation_mode = 'XYZ'   # (the glTF importer leaves objects in quaternion mode, where rotation_euler is ignored)
arm.location = G([S['k1'][0], 0, S['k1'][1]]); arm.rotation_euler = (0, 0, YAW0); arm.scale = (SCL, SCL, SCL); vl.update()
AW = arm.matrix_world.copy(); AWi = AW.inverted()

# ---- the world landmarks (Blender coordinates)
RIM = G(LM['rimC']); HERO0 = G(LM['heroWaiting']); GLASS = G(LM['glass']); SEAT = G(LM['heroSit']); K1 = G([S['k1'][0], 0, S['k1'][1]])
def fwd(yaw): return Vector((math.sin(yaw), -math.cos(yaw), 0))   # her front at body yaw (game yaw convention)
def left(yaw): return Vector((math.cos(yaw), math.sin(yaw), 0))    # her left
UP = Vector((0, 0, 1))
# the spot in front of the door where she stands to load (0.4 m in front of the glass, slightly to its left), facing the glass
SPOT = GLASS + Vector((-0.30, -0.24, 0)); SPOT.z = 0   # (front-left of the door, as in reference 02: she loads it in near profile; the open door lies behind her left)
YAW_DOOR = math.atan2(GLASS.x - SPOT.x, -(GLASS.y - SPOT.y))

# ---- rig: targets and constraints
def empty(name):
    e = bpy.data.objects.new(name, None); sc.collection.objects.link(e); e.empty_display_size = 0.03; return e
T = {n: empty(n) for n in ('handL', 'handR', 'tipL', 'tipR', 'elbowL', 'elbowR', 'footL', 'footR', 'toeL', 'toeR', 'kneeL', 'kneeR', 'gaze')}
vl.objects.active = arm; bpy.ops.object.mode_set(mode='POSE')
PB = arm.pose.bones
for b in PB: b.rotation_mode = 'QUATERNION'
def ik(bone, tgt, pole, chain=2):
    c = PB[bone].constraints.new('IK'); c.target = T[tgt]; c.pole_target = T[pole]; c.chain_count = chain; c.use_tail = True; c.pole_angle = 0.0; return c
def track(bone, tgt, axis='TRACK_Y', infl=1.0):
    c = PB[bone].constraints.new('DAMPED_TRACK'); c.target = T[tgt]; c.track_axis = axis; c.influence = infl; return c
def face_axis(bone):   # the bone axis that points along her front (-Y in her rest space): the head and neck bones point up, their face is a side axis
    m = PB[bone].bone.matrix_local.to_3x3(); front = Vector((0, -1, 0))
    return max((('TRACK_X', m.col[0]), ('TRACK_NEGATIVE_X', -m.col[0]), ('TRACK_Z', m.col[2]), ('TRACK_NEGATIVE_Z', -m.col[2])), key=lambda a: a[1].dot(front))[0]
IKC = {'L': ik('forearm.L', 'handL', 'elbowL'), 'R': ik('forearm.R', 'handR', 'elbowR')}
IKL = {'L': ik('shin.L', 'footL', 'kneeL'), 'R': ik('shin.R', 'footR', 'kneeR')}
HTR = {s: track(f'hand.{s}', 'tip' + s) for s in 'LR'}      # the hands point at their fingertip targets
FTR = {s: track(f'foot.{s}', 'toe' + s) for s in 'LR'}      # the feet point at their toe targets
FACE = face_axis('head')
dn = track('neck', 'gaze', face_axis('neck'), 0.3); dt = track('head', 'gaze', FACE, 0.75)

# ---- posing helpers (armature space = her own space, scaled and turned by the armature object)
REST = {b.name: b.bone.matrix_local.copy() for b in PB}
def set_hips(pos_w, yaw, lean=0.0, roll=0.0):
    """hips at world position pos_w (the hips joint), body yaw (world, game convention), forward lean (rad), side roll (rad)"""
    pa = AWi @ pos_w; d = yaw - YAW0
    R = Matrix.Rotation(d, 4, 'Z') @ Matrix.Rotation(lean, 4, 'X') @ Matrix.Rotation(roll, 4, 'Y')
    M = R @ REST['hips'].to_3x3().to_4x4(); M.translation = pa; PB['hips'].matrix = M; vl.update()
def bend(bone, fwd_rad=0.0, twist=0.0, side=0.0):
    """rotate a spine bone about its head: forward bend about her (current) left axis, twist about her up, side bend about her front"""
    pb = PB[bone]; vl.update(); M = pb.matrix.copy(); h = M.to_translation()
    hipsR = PB['hips'].matrix.to_3x3() @ REST['hips'].to_3x3().inverted()   # her body's turn so far
    ax_l = hipsR @ Vector((1, 0, 0)); ax_u = hipsR @ Vector((0, 0, 1)); ax_f = hipsR @ Vector((0, -1, 0))
    R = Matrix.Rotation(fwd_rad, 4, ax_l) @ Matrix.Rotation(twist, 4, ax_u) @ Matrix.Rotation(side, 4, ax_f)
    pb.matrix = Matrix.Translation(h) @ R @ Matrix.Translation(-h) @ M; vl.update()
def rest_spine():
    for n in ('spine', 'chest', 'neck', 'head'): PB[n].rotation_quaternion = (1, 0, 0, 0); PB[n].location = (0, 0, 0)
    vl.update()
def place(name, pos):
    T[name].location = pos
def key_all(f):
    for n in ('hips', 'spine', 'chest', 'neck', 'head'):
        PB[n].keyframe_insert('rotation_quaternion', frame=f)
    PB['hips'].keyframe_insert('location', frame=f)
    for e in T.values(): e.keyframe_insert('location', frame=f)
def hand_rot(yaw, pitch=0.0, palm_in=0.0, side=1):
    """the direction her fingers point: along her front, tipped down by pitch (< 0), turned in toward her other hand by palm_in (0..1)"""
    d = (fwd(yaw) * math.cos(pitch) + UP * math.sin(pitch)) * (1 - palm_in) + left(yaw) * (-side) * palm_in
    return d.normalized()
def set_hand(s, pos, d):
    place('hand' + s, pos); place('tip' + s, pos + d * 0.07)
def set_foot(s, pos, yaw, pitch=0.0, kneel=False):
    """the ankle at pos; the toes ahead along yaw (pitch > 0: toes pressed down, the heel up; < 0: the toes up), or tucked behind when kneeling"""
    place('foot' + s, pos)
    place('toe' + s, pos - fwd(yaw) * 0.05 - UP * 0.05 if kneel else pos + fwd(yaw) * 0.08 * math.cos(pitch) - UP * (0.065 + 0.08 * math.sin(pitch)))

# body measures (world, scaled)
L_TH = 0.141 * SCL; HIP_STAND = 0.300 * SCL; HIP_W = 0.07 * SCL; ANK = 0.06 * SCL; KNEE_R = 0.022 * SCL

# ---- THE KEYS (frame -> pose). Each entry: hips (world pos, yaw, lean, roll), spine bends, hands (pos, orientation), elbows, feet, knees, gaze.
def kneel_pose(yaw, lean, hands, gaze, f, hips_lift=0.0, spine=(0.08, 0.06, 0.0), arm_out=0.16, head_up=0.0):
    fw, lf = fwd(yaw), left(yaw)
    knees_c = K1.copy()
    hip = knees_c + UP * (L_TH + KNEE_R + hips_lift) - fw * 0.0
    set_hips(hip, yaw, lean); rest_spine(); bend('spine', spine[0]); bend('chest', spine[1]); bend('neck', spine[2])
    for s, sg in (('L', 1), ('R', -1)):
        knee = knees_c + lf * sg * HIP_W * 1.05 + UP * KNEE_R
        set_foot(s, knee - fw * (L_TH * 0.98) + UP * (ANK * 0.55) + lf * sg * 0.01, yaw, kneel=True)
        place('knee' + s, knee + fw * 0.4 + UP * 0.05)
        hp, hr = hands[s]; set_hand(s, hp, hr)
        place('elbow' + s, hip + UP * 0.12 + lf * sg * arm_out - fw * 0.25)
    place('gaze', gaze); key_all(f)
def stand_pose(pos, yaw, lean, hands, gaze, f, step=None, bob=0.0, spine=(0.04, 0.03, 0.0), arm_out=0.18, hip_drop=0.02, roll=0.0):
    """standing at pos (floor point between the feet); step: {'L': (foot pos, lift), ...} overrides a foot"""
    fw, lf = fwd(yaw), left(yaw)
    hip = pos + UP * (HIP_STAND - hip_drop + bob)
    set_hips(hip, yaw, lean, roll); rest_spine(); bend('spine', spine[0]); bend('chest', spine[1]); bend('neck', spine[2])
    for s, sg in (('L', 1), ('R', -1)):
        fp = pos + lf * sg * HIP_W * 1.05 + UP * ANK; pitch = 0.0
        if step and s in step: fp, pitch = step[s]
        set_foot(s, fp, yaw, pitch); place('knee' + s, fp + fw * 0.5 + UP * 0.2)
        hp, hr = hands[s]; set_hand(s, hp, hr)
        place('elbow' + s, hip + UP * 0.15 + lf * sg * arm_out - fw * 0.3)
    place('gaze', gaze); key_all(f)

KEYS_SRC = open(keyfile).read() if keyfile else None
def default_keys():
    y0 = YAW0; fw0, lf0 = fwd(y0), left(y0)
    towel_top = HERO0 + UP * 0.05
    rest_h = lambda s: (towel_top + lf0 * (0.07 if s == 'L' else -0.07) + UP * 0.02, hand_rot(y0, -1.2, 0.2, 1 if s == 'L' else -1))
    grab_h = lambda s: (HERO0 + lf0 * (0.095 if s == 'L' else -0.095) - fw0 * 0.01 - UP * 0.02, hand_rot(y0, -1.35, 0.85, 1 if s == 'L' else -1))
    hold_h = lambda pos, yaw, h=0.43, out=0.075, f=0.13, pitch=-0.2: {s: (pos + fwd(yaw) * f + left(yaw) * (out if s == 'L' else -out) + UP * h, hand_rot(yaw, pitch, 0.9, 1 if s == 'L' else -1)) for s in 'LR'}
    look_door = GLASS + UP * 0.05
    CAMW = G(LM['camWait'][1]); look_basket = HERO0 + UP * 0.1 + (CAMW - HERO0).normalized() * 0.25   # (reference 01: she smiles down at the laundry, her face to the camera)
    # 0.0-0.8 s: kneeling at the basket, hands resting on the towel's top, looking at the washer (breathing in the curve)
    kneel_pose(y0, 0.12, {s: rest_h(s) for s in 'LR'}, look_basket, 0)
    kneel_pose(y0, 0.14, {s: rest_h(s) for s in 'LR'}, look_basket, 18, hips_lift=0.004)
    # 0.8-1.6 s: a small rise (anticipation), then reach down into the basket and grip the towel's sides (he is under it)
    kneel_pose(y0, 0.05, {s: (rest_h(s)[0] + UP * 0.03, rest_h(s)[1]) for s in 'LR'}, look_basket, 26, hips_lift=0.01)
    kneel_pose(y0, 0.42, {s: grab_h(s) for s in 'LR'}, HERO0 + UP * 0.02, 44, spine=(0.18, 0.1, 0.05))
    kneel_pose(y0, 0.44, {s: (grab_h(s)[0] - UP * 0.01 + lf0 * (-0.012 if s == 'L' else 0.012), grab_h(s)[1]) for s in 'LR'}, HERO0, 50, spine=(0.2, 0.1, 0.05))
    # 1.6-2.4 s: lift the bundle to her chest (heavier than it looks: she sits back a little as it comes up), eyes back to the door
    kneel_pose(y0, 0.2, hold_h(K1, y0, h=0.34, f=0.2), look_basket, 62, spine=(0.06, 0.05, 0.0))
    kneel_pose(y0, 0.02, hold_h(K1, y0, h=0.4, f=0.16), (look_basket + look_door) / 2, 74, spine=(0.0, 0.02, 0.0), hips_lift=0.012)
    # 2.4-3.6 s: rise: the right foot comes forward (half kneel), she pushes up, turning toward the washer
    y1 = y0 + 0.45; fw1, lf1 = fwd(y1), left(y1)
    stand_pose(K1 + fw1 * 0.05, y1, 0.28, hold_h(K1 + fw1 * 0.05, y1, h=0.36, f=0.17), look_door, 86, hip_drop=0.15,
               step={'R': (K1 - lf1 * HIP_W + fw1 * 0.16 + UP * ANK, 0.0), 'L': (K1 + lf1 * HIP_W - fw1 * 0.15 + UP * ANK * 0.6, 0.5)}, spine=(0.12, 0.06, 0.0))
    stand_pose(K1 + fw1 * 0.08, y1 + 0.2, 0.08, hold_h(K1 + fw1 * 0.08, y1 + 0.2, h=0.45, f=0.15), look_door, 104, hip_drop=0.03, spine=(0.02, 0.02, 0.0))
    # 3.6-5.4 s: three steps to the door (the bundle held at her chest; a slight bob; arms steady)
    yw = math.atan2(SPOT.x - K1.x, -(SPOT.y - K1.y)); path = SPOT - (K1 + fw1 * 0.08)
    p0 = K1 + fw1 * 0.08
    for i, (f, k, lead) in enumerate(((114, 0.12, 'R'), (126, 0.36, 'L'), (138, 0.6, 'R'), (150, 0.84, 'L'), (162, 1.0, None))):
        p = p0 + path * k; yaw = y1 + 0.2 + (yw - y1 - 0.2) * min(1, k * 1.6) if k < 0.84 else yw + (YAW_DOOR - yw) * (k - 0.84) / 0.16
        fwy, lfy = fwd(yaw), left(yaw); step = {}
        if lead:
            sg = 1 if lead == 'L' else -1
            step[lead] = (p + lfy * sg * HIP_W * 1.05 + fwy * 0.09 + UP * ANK, -0.12)                    # the leading foot lands ahead (heel first)
            other = 'R' if lead == 'L' else 'L'; so = -sg
            step[other] = (p + lfy * so * HIP_W * 1.05 - fwy * 0.08 + UP * (ANK + 0.012), 0.35)          # the trailing foot pushes off (toes)
        stand_pose(p, yaw, 0.06, hold_h(p, yaw, h=0.45, f=0.15), look_door, f, step=step, bob=0.012 * (1 if lead else 0), roll=0.03 * (1 if lead == 'L' else -1 if lead else 0))
    # 5.4-6.6 s: at the door: lean in and push the bundle into the drum through the porthole
    pin = GLASS + Vector((0, 0.06, -0.02))   # (+Y = into the washer)
    stand_pose(SPOT, YAW_DOOR, 0.12, {s: (pin - fwd(YAW_DOOR) * 0.14 + left(YAW_DOOR) * (0.07 if s == 'L' else -0.07) + UP * 0.0, hand_rot(YAW_DOOR, 0.0, 0.9, 1 if s == 'L' else -1)) for s in 'LR'}, GLASS, 174, spine=(0.1, 0.06, 0.0))
    stand_pose(SPOT, YAW_DOOR, 0.3, {s: (pin + left(YAW_DOOR) * (0.06 if s == 'L' else -0.06), hand_rot(YAW_DOOR, -0.1, 0.9, 1 if s == 'L' else -1)) for s in 'LR'}, GLASS + Vector((0, 0.2, 0)), 192, spine=(0.16, 0.1, 0.0))
    # 6.6-7.2 s: let go: hands open and come back; she straightens
    stand_pose(SPOT, YAW_DOOR, 0.12, {s: (pin - fwd(YAW_DOOR) * 0.16 + left(YAW_DOOR) * (0.12 if s == 'L' else -0.12) - UP * 0.04, hand_rot(YAW_DOOR, -0.3, 0.3, 1 if s == 'L' else -1)) for s in 'LR'}, GLASS, 206, spine=(0.06, 0.04, 0.0))
    # 7.2-8.6 s: she turns back toward the basket (never looking into the drum), arms down, one step
    yb = YAW_DOOR - 1.9; fb, lb = fwd(yb), left(yb)
    down = lambda p, yaw: {s: (p + left(yaw) * (0.16 if s == 'L' else -0.16) + UP * 0.4 + fwd(yaw) * 0.03, hand_rot(yaw, -1.45, 0.0, 1 if s == 'L' else -1)) for s in 'LR'}   # (relaxed arms within her short reach)
    stand_pose(SPOT, YAW_DOOR - 0.8, 0.02, down(SPOT, YAW_DOOR - 0.8), RIM + UP * 0.2, 226)
    stand_pose(SPOT + fb * 0.1, yb, 0.0, down(SPOT + fb * 0.1, yb), RIM + UP * 0.1, 246, step={'L': (SPOT + fb * 0.18 + lb * HIP_W + UP * ANK, -0.1)})
    stand_pose(SPOT + fb * 0.14, yb, 0.0, down(SPOT + fb * 0.14, yb), RIM + UP * 0.1, 258)
    return 258
END = exec(KEYS_SRC, globals()) if KEYS_SRC else default_keys()
END = globals().get('END_FRAME', END) or 258
sc.frame_start, sc.frame_end = 0, END

# ---- the poles' angle: per limb, the pole_angle that puts the elbow / knee nearest its pole target (checked at a mid frame)
sc.frame_set(60)
for c, mid in [(IKC['L'], 'forearm.L'), (IKC['R'], 'forearm.R'), (IKL['L'], 'shin.L'), (IKL['R'], 'shin.R')]:
    best = None
    for a in range(-180, 180, 15):
        c.pole_angle = math.radians(a); vl.update(); j = AW @ PB[mid].head; dd = (j - c.pole_target.matrix_world.translation).length
        if best is None or dd < best[0]: best = (dd, a)
    c.pole_angle = math.radians(best[1])
POLES = {k: round(math.degrees(c.pole_angle)) for k, c in (('armL', IKC['L']), ('armR', IKC['R']), ('legL', IKL['L']), ('legR', IKL['R']))}

# ---- previews with proxies of the basket, the washer front and the drum (to check contacts): Cycles, quick
def proxy_cyl(name, loc, r, h, col):
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=h, location=loc); o = bpy.context.object; o.name = name
    m = bpy.data.materials.new(name); m.diffuse_color = col; o.data.materials.append(m)
    try:
        m.use_nodes = True; m.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value = col
    except Exception: pass
    return o
bpy.ops.object.mode_set(mode='OBJECT')
B0 = G(LM['basket'])
proxy_cyl('basket', Vector((B0.x, B0.y, 0.13)), 0.24, 0.26, (0.55, 0.3, 0.85, 1))
pw = proxy_cyl('porthole', GLASS + Vector((0, 0.06, 0)), 0.2, 0.05, (0.9, 0.7, 0.2, 1)); pw.rotation_euler = (math.pi / 2, 0, 0)
proxy_cyl('seat', SEAT, 0.06, 0.02, (0.2, 0.4, 1, 1))
bpy.ops.mesh.primitive_plane_add(size=6, location=(0, -0.6, 0)); fl = bpy.context.object; fm = bpy.data.materials.new('floor'); fm.diffuse_color = (0.9, 0.85, 0.95, 1); fl.data.materials.append(fm)
sc.render.engine = 'CYCLES'; sc.cycles.device = 'CPU'; sc.cycles.samples = 8; sc.cycles.use_denoising = False; sc.render.resolution_x, sc.render.resolution_y = 360, 300
w = bpy.data.worlds.new('w'); sc.world = w
try: w.use_nodes = True; w.node_tree.nodes['Background'].inputs[0].default_value = (0.9, 0.88, 0.95, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1.2
except Exception: pass
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); sc.collection.objects.link(cam); sc.camera = cam
# the game's own Scene 1 camera (position, target, vertical fov), pulled back a little so the walk to the door stays in frame
CC = G(LM['camWait'][1]); CT = G(LM['camWait'][2]); cam.data.sensor_fit = 'VERTICAL'; cam.data.angle = math.radians(LM['camWait'][3] + 8)
cam.location = CC + Vector((0.25, 0, 0.1)); cam.rotation_euler = ((CT + Vector((0.3, 0.2, 0))) - cam.location).to_track_quat('-Z', 'Y').to_euler()
sc.render.resolution_x, sc.render.resolution_y = 300, 533
for f in (0, 26, 50, 74, 86, 104, 120, 138, 156, 174, 192, 206, 226, 246):
    sc.frame_set(f); sc.render.filepath = os.path.join(prev, f'k_{f:03d}.png'); bpy.ops.render.render(write_still=True)

# ---- contact report: hand / foot distances to their targets (IK reach) at each key
REP = {'poles': POLES, 'frames': END + 1, 'fps': FPS, 'face_axis': FACE}
miss = {}
for f in range(0, END + 1, 6):
    sc.frame_set(f); vl.update()
    for s in 'LR':
        miss.setdefault('hand' + s, []).append(round(((AW @ PB['hand.' + s].head) - T['hand' + s].matrix_world.translation).length, 3))
        miss.setdefault('foot' + s, []).append(round(((AW @ PB['foot.' + s].head) - T['foot' + s].matrix_world.translation).length, 3))
REP['ik_miss_max_m'] = {k: max(v) for k, v in miss.items()}
REP['ik_miss_by_frame'] = {k: {f: m for f, m in zip(range(0, END + 1, 6), v) if m > 0.03} for k, v in miss.items()}
# ---- bake to plain bone keys (visual keying), drop the constraints and the helpers, put the armature back at the origin, export
for o in bpy.data.objects: o.select_set(False)
vl.objects.active = arm; arm.select_set(True); bpy.ops.object.mode_set(mode='POSE')
bpy.ops.pose.select_all(action="SELECT")
bpy.ops.nla.bake(frame_start=0, frame_end=END, only_selected=False, visual_keying=True, clear_constraints=True, use_current_action=True, bake_types={'POSE'})
act = arm.animation_data.action; act.name = 'girl3_laundry'
bpy.ops.object.mode_set(mode='OBJECT')
for n in ('basket', 'porthole', 'seat', 'Plane'):
    o = bpy.data.objects.get(n)
    if o: bpy.data.objects.remove(o)
for e in T.values(): bpy.data.objects.remove(e)
arm.location = (0, 0, 0); arm.rotation_euler = (0, 0, 0); arm.scale = (1, 1, 1)
for o in bpy.data.objects: o.select_set(False)
arm.select_set(True); mesh.select_set(True); vl.objects.active = arm
bpy.ops.export_scene.gltf(filepath=dst, export_format='GLB', use_selection=True, export_skins=True, export_animations=True, export_yup=True,
                          export_force_sampling=True, export_frame_range=True, export_animation_mode='ACTIONS')
REP['clip'] = act.name; REP['seconds'] = round(END / FPS, 3); REP['spot'] = [round(x, 3) for x in SPOT]; REP['yaw_door'] = round(YAW_DOOR, 3)
json.dump(REP, open(os.path.join(prev, 'report.json'), 'w'), indent=1); print(json.dumps(REP))
