# girl3 HAIR SECONDARY MOTION (session b57cc1e7): her ponytail and the two big curl bunches that frame her face (the lower front of the ponytail's
# side curtains, seen beside her jaw from the front) get their own bone chains and a baked spring simulation driven by her head's motion in the
# existing laundry clip. Real Blender (5.2.3, bpy module, background). Nothing else in the file changes: same mesh, same 23 joints and keys,
# same action name and frame range; only the hair vertices are re-weighted and 8 new joints (with keys on every frame) are added under `head`.
#   ~/.bubblewash-tools/blender-bpy/bin/python WebDemo/tools/blender/hair_secondary.py <in.glb> <out.glb> <report dir> [params.json]
# params.json (optional) overrides entries of P below (tuning). Env HAIR_RENDER=0 skips the Cycles renders, HAIR_VALIDATE=0 the re-import checks.
# Coordinates (after import): Z up, her front -Y, her left +X, model 1.0 m tall; the armature object sits at the origin (identity), so armature
# space is the scene space and gravity is -Z (the game only places / turns / scales the rig about its vertical axis).
# How it works:
#   1. Masks from the texture (per-vertex colour from the Color map: pink = bow / headband, skin = face / ears) and the geometry (a skull ellipsoid
#      fitted to her scalp, face and ears: hair that stands off it is free, hair on it stays rigid). The mesh is ONE welded shell (no separate
#      hair islands) and the back of her head IS the ponytail bulb (no skull surface under it), so all weights are smooth spatial fields:
#      rigid near each chain's root and on the scalp, free outward and downward; the bow, the headband, the face, the ears are forced rigid.
#   2. Bones: hair_tail_1..4 (crown behind the bow, back over the bulb, down to the lowest curls) and hair_side_L_1..2 / hair_side_R_1..2 (the
#      side bunches), all parented (chain roots) to `head`. Weights: head at the root, then a linear blend along each chain (tips: the last bone).
#   3. Simulation (8 substeps per frame): each bone tail is a particle with a damped spring toward its rest direction carried by its parent's
#      current rotation, plus gravity relative to the modelled (upright) shape, air drag, progressive limit stops (asymmetric: almost no swing
#      toward her head / nape, more outward and sideways), sphere colliders on her chest (hood, shoulders); swing only (no twist). Pre-rolled 2 s
#      at frame 0 so the clip starts settled. Keyed on every frame as plain bone rotations (no constraints).
#   4. Export as before (ACTIONS, force sampling); validation in a fresh scene; Cycles contact sheet input | output at the frames of largest swing.
import bpy, sys, os, json, math, struct
import numpy as np
from mathutils import Vector, Matrix, Quaternion
from mathutils.kdtree import KDTree

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else sys.argv[1:]
argv = [a for a in argv if not a.endswith('hair_secondary.py')]
SRC, DST, OUT = argv[:3]; PFILE = argv[3] if len(argv) > 3 else None
os.makedirs(OUT, exist_ok=True)
FPS = 30
CLIP = 'girl3_laundry'
DO_RENDER = os.environ.get('HAIR_RENDER', '1') != '0'
DO_VALIDATE = os.environ.get('HAIR_VALIDATE', '1') != '0'

P = {
    # skull ellipsoid (her scalp, face and ears; rest pose, armature space)
    'skull_c': [0.0, -0.07, 0.795], 'skull_r': [0.152, 0.14, 0.135], 'skull_scale': 0.14,
    # chains (rest joints, armature space): the ponytail on her midline; the side bunches (left = +X; the right one is mirrored)
    'tail': [[0.0, 0.025, 0.945], [0.0, 0.11, 0.91], [0.0, 0.145, 0.815], [0.0, 0.14, 0.715], [0.0, 0.13, 0.615]],
    'side': [[0.11, 0.075, 0.895], [0.15, 0.12, 0.76], [0.152, 0.09, 0.625]],
    # weight fields (metres)
    'free': [0.004, 0.07],         # distance outside the skull: rigid below the first, free above the second
    'anchor': [0.008, 0.06],       # distance to the nearest rigid vertex (bow, headband, hood collar, face, ears, body): rigid -> free
    'back': [-0.03, 0.035],        # y: in front of the first (ears, face, temple wisps) nothing moves
    'lateral': [0.075, 0.125],     # |x|: the ponytail's centre -> the side bunches
    'ramp_tail': [0.02, 0.17],     # arc length from the ponytail root: rigid -> free
    'ramp_side': [0.02, 0.15],
    'soft_sigma': 0.04,            # soft projection onto the chain polylines
    'smooth_iter': 12, 'smooth_alpha': 0.5,   # weight smoothing on the surface graph (anchors fixed at 0)
    # springs per bone: frequency (Hz), damping ratio, limits (deg): outward, inward (toward her head / nape), sideways
    'tail_spring': [[2.6, 0.45, 4.0, 1.0, 4.0], [2.3, 0.40, 6.0, 2.0, 6.0], [2.2, 0.36, 7.0, 3.0, 7.0], [2.1, 0.33, 8.0, 4.0, 8.0]],
    'side_spring': [[2.4, 0.40, 5.0, 1.5, 5.0], [2.2, 0.35, 7.0, 3.0, 7.0]],
    'side_follow': [1, 0.7],       # the side bunches belong to the ponytail: their root target follows ponytail bone 2's swing by this share
    'gravity': 1.0,                # m/s^2 of extra pull when her head tilts away from upright (the model's shape already hangs at rest)
    'air_drag': 1.0,               # 1/s
    'soft_stop': 0.6,              # fraction of each limit where the progressive stop starts
    'stop_damping': 0.9,           # damping ratio inside the progressive stop
    'substeps': 8, 'preroll_s': 2.0,
    # colliders on her chest (rest centre, radius) and particle radii (tail bones 1..4, side bones 1..2)
    'colliders': [[[0.0, 0.0, 0.50], 0.095], [[0.12, -0.06, 0.52], 0.06], [[-0.12, -0.06, 0.52], 0.06]],
    'tail_radius': [0.0, 0.02, 0.035, 0.04], 'side_radius': [0.02, 0.03],
    # previews: frame windows for the contact sheet (the frame of largest swing in each window is shown)
    'windows': [[40, 60], [74, 92], [92, 110], [150, 165], [210, 225], [225, 240]],
    'render_size': [400, 500], 'render_samples': 16,
}
if PFILE: P.update(json.load(open(PFILE)))
SUB = int(P['substeps'])

def ss(a, b, x):
    t = np.clip((x - a) / (b - a), 0.0, 1.0); return t * t * (3 - 2 * t)

def load(path):
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.context.scene.render.fps = FPS            # (before the import: the glTF key times become integer frames 0..258)
    bpy.ops.import_scene.gltf(filepath=path)
    arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')
    mesh = max((o for o in bpy.data.objects if o.type == 'MESH'), key=lambda o: len(o.data.vertices))
    for o in [o for o in bpy.data.objects if o.type == 'MESH' and o is not mesh]: bpy.data.objects.remove(o)   # (the importer's bone icosphere)
    for b in arm.pose.bones: b.custom_shape = None
    act = arm.animation_data.action
    sc = bpy.context.scene; sc.frame_start, sc.frame_end = int(act.frame_range[0]), int(act.frame_range[1])
    return arm, mesh, act

REP = {'input': SRC, 'output': DST}
arm, mesh, act = load(SRC)
sc = bpy.context.scene; vl = bpy.context.view_layer
assert act.name == CLIP, act.name
F0, F1 = sc.frame_start, sc.frame_end
REP['frames'] = [F0, F1]; REP['fps'] = FPS
ORIG_BONES = [b.name for b in arm.data.bones]
assert tuple(arm.matrix_world.to_translation()) == (0, 0, 0) and mesh.matrix_world == Matrix.Identity(4)
me = mesh.data; NV = len(me.vertices)

# ---------------------------------------------------------------- 1. masks
co = np.zeros(NV * 3); me.vertices.foreach_get('co', co); co = co.reshape(-1, 3)
img = next(n.image for n in me.materials[0].node_tree.nodes if n.type == 'TEX_IMAGE' and n.image and n.image.name.startswith('Color'))
W, H = img.size; px = np.zeros(W * H * 4, dtype=np.float32); img.pixels.foreach_get(px); px = px.reshape(H, W, 4)
li = np.zeros(len(me.loops), dtype=np.int64); me.loops.foreach_get('vertex_index', li)
luv = np.zeros(len(me.loops) * 2); me.uv_layers[0].data.foreach_get('uv', luv); luv = luv.reshape(-1, 2)
lc = px[np.clip((luv[:, 1] % 1) * H, 0, H - 1).astype(int), np.clip((luv[:, 0] % 1) * W, 0, W - 1).astype(int), :3]
cnt = np.bincount(li, minlength=NV).astype(float)
col = np.stack([np.bincount(li, weights=lc[:, k], minlength=NV) for k in range(3)], 1) / np.maximum(cnt, 1)[:, None]
r, g, b = col.T; mx = col.max(1); mn = col.min(1); sat = (mx - mn) / np.maximum(mx, 1e-6)
pink = (r > 0.5) & (b > g + 0.05)                                   # the bow, the headband (and her hood, lips)
skin = (~pink) & (mx >= 0.6) & (sat < 0.5)                          # face, ears (also the hair's light highlights: only used in front, see below)
gi = {gp.index: gp.name for gp in mesh.vertex_groups}
OLDW = [{gi[e.group]: e.weight for e in v.groups if e.weight > 0} for v in me.vertices]
dom = np.array([max(w, key=w.get) if w else '' for w in OLDW])
C = np.array(P['skull_c']); R = np.array(P['skull_r'])
rho = np.linalg.norm((co - C) / R, axis=1); dout = (rho - 1) * P['skull_scale']
x, y, z = co.T

def chain_param(pts, J, sigma):
    """soft arc-length parameter of points on a polyline (softmin over the segments: smooth across the bends)"""
    J = np.array(J); seg = J[1:] - J[:-1]; L = np.linalg.norm(seg, axis=1); S = np.concatenate([[0], np.cumsum(L)])
    ds, ss_ = [], []
    for k in range(len(seg)):
        t = ((pts - J[k]) @ seg[k]) / (L[k] ** 2)
        t = np.clip(t, 0.0, None if k == len(seg) - 1 else 1.0)    # (beyond the tip: the last bone's parameter keeps growing)
        q = J[k] + t[:, None] * seg[k]; ds.append(np.linalg.norm(pts - q, axis=1)); ss_.append(S[k] + t * L[k])
    ds = np.array(ds); ss_ = np.array(ss_); w = np.exp(-(ds ** 2 - ds.min(0) ** 2) / sigma ** 2)
    return (w * ss_).sum(0) / w.sum(0), S

def hat_weights(s, S):
    """bone weights along a chain by arc length: linear between the bones' midpoints, the first / last bone beyond them"""
    c = (S[1:] + S[:-1]) / 2; n = len(c); Wb = np.zeros((len(s), n))
    for k in range(n):
        if n == 1: Wb[:, k] = 1; continue
        if k == 0: Wb[:, k] = np.clip((c[1] - s) / (c[1] - c[0]), 0, 1)
        elif k == n - 1: Wb[:, k] = np.clip((s - c[k - 1]) / (c[k] - c[k - 1]), 0, 1)
        else: Wb[:, k] = np.minimum(np.clip((s - c[k - 1]) / (c[k] - c[k - 1]), 0, 1), np.clip((c[k + 1] - s) / (c[k + 1] - c[k]), 0, 1))
    return Wb / np.maximum(Wb.sum(1, keepdims=True), 1e-9)

TAILJ = [Vector(p) for p in P['tail']]
SIDEJ = {'L': [Vector(p) for p in P['side']], 'R': [Vector((-p[0], p[1], p[2])) for p in P['side']]}
movable = (dom == 'head') & ~pink & ~(skin & (y < 0.03))
# anchors: everything that must not move with the hair (the bow, the headband, her hood's collar where the nape hair meets it, face, ears, the
# body); the hair stiffens smoothly toward them (no weight step at their border)
anchor = ~movable
kda = KDTree(int(anchor.sum()))
for i, j in enumerate(np.where(anchor)[0]): kda.insert(co[j], i)
kda.balance()
dz = np.zeros(NV); cand = np.where(movable & (y > P['back'][0]))[0]
for j in cand: dz[j] = kda.find(co[j])[2]
free = ss(*P['free'], dout) * ss(*P['anchor'], dz); back = ss(*P['back'], y); lam = ss(*P['lateral'], np.abs(x))
sT, ST = chain_param(co, [tuple(v) for v in TAILJ], P['soft_sigma'])
sL, SS = chain_param(co, [tuple(v) for v in SIDEJ['L']], P['soft_sigma']); sR, _ = chain_param(co, [tuple(v) for v in SIDEJ['R']], P['soft_sigma'])
sS = np.where(x >= 0, sL, sR)
wT = movable * back * free * (1 - lam) * ss(*P['ramp_tail'], sT)
wS = movable * back * free * lam * ss(*P['ramp_side'], sS)
BT = hat_weights(sT, ST) * wT[:, None]; BS = hat_weights(sS, SS) * wS[:, None]
TAILN = [f'hair_tail_{k + 1}' for k in range(len(TAILJ) - 1)]
SIDEN = {s: [f'hair_side_{s}_{k + 1}' for k in range(len(SIDEJ[s]) - 1)] for s in 'LR'}
NEWB = TAILN + SIDEN['L'] + SIDEN['R']

# ---------------------------------------------------------------- 2. bones
vl.objects.active = arm; arm.select_set(True); bpy.ops.object.mode_set(mode='EDIT'); eb = arm.data.edit_bones
def add_chain(names, J):
    prev = eb['head']
    for k, n in enumerate(names):
        e = eb.new(n); e.head = J[k]; e.tail = J[k + 1]; e.roll = 0.0; e.parent = prev; e.use_connect = k > 0; e.use_deform = True; prev = e
add_chain(TAILN, TAILJ); add_chain(SIDEN['L'], SIDEJ['L']); add_chain(SIDEN['R'], SIDEJ['R'])
bpy.ops.object.mode_set(mode='OBJECT')
REP['bones_added'] = {n: {'head': [round(v, 4) for v in arm.data.bones[n].head_local], 'tail': [round(v, 4) for v in arm.data.bones[n].tail_local],
                          'parent': arm.data.bones[n].parent.name} for n in NEWB}

# ---------------------------------------------------------------- 3. weights (head at the root, the chain along it; max 4 influences)
for n in NEWB: mesh.vertex_groups.new(name=n)
VG = {gp.name: gp for gp in mesh.vertex_groups}
chainw = np.concatenate([BT, BS[:, :len(SIDEN['L'])] * (x >= 0)[:, None], BS[:, :len(SIDEN['R'])] * (x < 0)[:, None]], 1)   # columns in NEWB order
# the glTF mesh has duplicate vertices along UV seams (same position, different texels): give every duplicate the same weights (mean), or it cracks
_, WID = np.unique(np.round(co / 2e-5).astype(np.int64), axis=0, return_inverse=True); WID = WID.ravel()
gs_ = np.bincount(WID).astype(float); NW = int(WID.max() + 1)
CW = np.stack([np.bincount(WID, weights=chainw[:, k]) / gs_ for k in range(chainw.shape[1])], 1)
# constrained smoothing on the welded surface graph (softens the steepest steps over ~2 cm; the anchors stay at 0)
ev = np.zeros(len(me.edges) * 2, dtype=np.int64); me.edges.foreach_get('vertices', ev); ev = ev.reshape(-1, 2)
we = np.unique(np.sort(WID[ev], 1), axis=0); we = we[we[:, 0] != we[:, 1]]
deg = np.bincount(we.ravel(), minlength=NW).astype(float)
anc_w = np.bincount(WID, weights=anchor.astype(float), minlength=NW) > 0
for _ in range(int(P['smooth_iter'])):
    nb = np.zeros_like(CW); np.add.at(nb, we[:, 0], CW[we[:, 1]]); np.add.at(nb, we[:, 1], CW[we[:, 0]])
    CW = (1 - P['smooth_alpha']) * CW + P['smooth_alpha'] * nb / np.maximum(deg, 1)[:, None]; CW[anc_w] = 0
chainw = CW[WID]
BT = chainw[:, :len(TAILN)]; BS = chainw[:, len(TAILN):len(TAILN) + len(SIDEN['L'])] + chainw[:, len(TAILN) + len(SIDEN['L']):]
total = chainw.sum(1)
REP['seam_duplicates'] = {'vertices': NV, 'unique_positions': int(WID.max() + 1)}
changed = np.where(total > 0.002)[0]; pruned = 0
for i in changed:
    ws = {k: v * (1 - total[i]) for k, v in OLDW[i].items()}
    for k, n in enumerate(NEWB):
        if chainw[i, k] > 1e-4: ws[n] = chainw[i, k]
    if len(ws) > 4:   # (the lateral blend: head + 2 ponytail + 2 side bones) merge the smaller bone of a chain pair into its neighbour
        pruned += 1
        for chain in (TAILN, SIDEN['L'], SIDEN['R']):
            pr = sorted([n for n in chain if n in ws], key=lambda n: ws[n])
            while len(ws) > 4 and len(pr) > 1:
                ws[pr[1]] += ws.pop(pr[0]); pr = pr[1:]
        ws = dict(sorted(ws.items(), key=lambda kv: -kv[1])[:4])
    s = sum(ws.values()); ws = {k: v / s for k, v in ws.items() if v / s > 1e-4}
    for k in OLDW[i]: VG[k].remove([int(i)])
    for k, v in ws.items(): VG[k].add([int(i)], v, 'REPLACE')
REP['weights'] = {'vertices_reweighted': int(len(changed)), 'pruned_to_4_influences': pruned,
                  'per_chain_vertices_over_0.05': {'tail': int((BT.sum(1) > 0.05).sum()), 'side_L': int(((BS.sum(1) > 0.05) & (x >= 0)).sum()),
                                                   'side_R': int(((BS.sum(1) > 0.05) & (x < 0)).sum())},
                  'per_bone_vertices_dominant_new': {n: int(((chainw.argmax(1) == k) & (chainw.max(1) > 0.05)).sum()) for k, n in enumerate(NEWB)},
                  'rigid_kept': {'pink_head_vertices': int((pink & (dom == 'head')).sum()), 'skin_front_head_vertices': int((skin & (y < 0.03) & (dom == 'head')).sum())},
                  'max_new_weight_on_pink_or_face': float(total[~movable & (dom == 'head')].max()) if (~movable & (dom == 'head')).any() else 0.0}
# seam check: the largest new-weight step across an edge that touches a forced-rigid vertex (the bow / headband / face border), and per cm anywhere
gi2 = {gp.index: gp.name for gp in mesh.vertex_groups}
fr = (~movable) & (dom == 'head'); bd = fr[ev[:, 0]] ^ fr[ev[:, 1]]; tw = np.zeros(NV)
for i in changed: tw[i] = sum(v for k, v in ((gi2[e.group], e.weight) for e in me.vertices[int(i)].groups) if k in NEWB)
stepw = np.abs(tw[ev[:, 0]] - tw[ev[:, 1]]); elen = np.linalg.norm(co[ev[:, 0]] - co[ev[:, 1]], axis=1)
REP['weights']['max_new_weight_next_to_rigid_border'] = round(float(stepw[bd].max()) if bd.any() else 0.0, 4)
REP['weights']['max_new_weight_step_along_any_edge'] = round(float(stepw.max()), 4)
REP['weights']['max_new_weight_change_per_cm'] = round(float((stepw / np.maximum(elen, 1e-4)).max() / 100), 4)

# ---------------------------------------------------------------- 4. the head (and chest) motion of the clip
PB = arm.pose.bones
BH = arm.data.bones['head'].matrix_local.copy(); BC = arm.data.bones['chest'].matrix_local.copy()
DH, DC = [], []
for f in range(F0, F1 + 1):
    sc.frame_set(f)
    DH.append(PB['head'].matrix @ BH.inverted()); DC.append(PB['chest'].matrix @ BC.inverted())
def interp(Ds, f, a):
    A, B = Ds[f - 1], Ds[f]; t = A.to_translation().lerp(B.to_translation(), a); q = A.to_quaternion().slerp(B.to_quaternion(), a)
    return Matrix.Translation(t) @ q.to_matrix().to_4x4()

# ---------------------------------------------------------------- 5. simulation
class Chain:
    def __init__(self, names, J, springs, radii, centre):
        self.names = names; self.J = J; self.n = len(J) - 1
        self.e = [J[k + 1] - J[k] for k in range(self.n)]; self.len = [v.length for v in self.e]
        self.sp = springs; self.rad = radii; self.follow = None   # (chain, bone index, share): the root target follows another chain's swing
        self.nin = []                                              # rest 'inward' direction of each bone (toward her head centre), perpendicular to it
        for k in range(self.n):
            m = (J[k] + J[k + 1]) / 2; v = centre - m; d = self.e[k].normalized(); v = v - d * v.dot(d); self.nin.append(v.normalized())
    def reset(self, D):
        R = D.to_quaternion(); self.p = [D @ v for v in self.J]; self.v = [Vector() for _ in self.J]
        self.Q = [R.copy() for _ in range(self.n)]; self.tprev = [None] * self.n; self.angles = [(0.0, 0.0)] * self.n
    def step(self, D, Dc, h):
        Rh = D.to_quaternion(); base = D @ self.J[0]; self.p[0] = base; Qpar = Rh
        if self.follow: fc, fk, fs = self.follow; Qpar = Rh.slerp(fc.Q[fk], fs)
        down = Vector((0, 0, -1)); G = P['gravity']
        cols = [(Dc @ Vector(c), rr) for c, rr in P['colliders']]
        for k in range(self.n):
            f_hz, zeta, lo, li_, ls = self.sp[k]; lo, li_, ls = math.radians(lo), math.radians(li_), math.radians(ls)
            w = 2 * math.pi * f_hz; L = self.len[k]
            t = base + Qpar @ self.e[k]; tdir = (t - base).normalized()
            u = Vector() if self.tprev[k] is None else (t - self.tprev[k]) / h; self.tprev[k] = t.copy()
            a_in = Qpar @ self.nin[k]; a_in = (a_in - tdir * a_in.dot(tdir)).normalized(); a_sd = tdir.cross(a_in)
            p = self.p[k + 1]; v = self.v[k + 1]
            # progressive stop: stiffer as the swing nears its limit
            dd = (p - base).normalized(); ct = max(dd.dot(tdir), 1e-6)
            th_in = math.atan2(dd.dot(a_in), ct); th_s = math.atan2(dd.dot(a_sd), ct)
            rr_ = math.hypot(th_in / (li_ if th_in > 0 else lo), th_s / ls)
            boost = 1 + 12 * max(0.0, (rr_ - P['soft_stop']) / (1 - P['soft_stop'])) ** 2
            zeta_e = zeta + (P['stop_damping'] - zeta) * min(1.0, (boost - 1) / 3)          # (the stop is near-critically damped: no ringing)
            acc = (t - p) * (w * w * boost) + (u - v) * (2 * zeta_e * w * math.sqrt(boost)) - v * P['air_drag'] + (down - Qpar @ down) * G
            xn = p + (v + acc * h) * h
            d = xn - base; d = d.normalized() if d.length > 1e-9 else tdir
            # hard limits (asymmetric: inward = toward her head / nape)
            ct = d.dot(tdir); th_in = math.atan2(d.dot(a_in), ct); th_s = math.atan2(d.dot(a_sd), ct)
            th_in2 = min(max(th_in, -lo), li_); th_s2 = min(max(th_s, -ls), ls)
            if th_in2 != th_in or th_s2 != th_s or ct <= 0: d = (tdir + a_in * math.tan(th_in2) + a_sd * math.tan(th_s2)).normalized()
            xn = base + d * L
            # colliders on her chest (push out, keep the length)
            for c, rc in cols:
                q = xn - c; rq = rc + self.rad[k]
                if q.length < rq: xn = c + q.normalized() * rq; xn = base + (xn - base).normalized() * L
            self.v[k + 1] = (xn - p) / h; self.p[k + 1] = xn
            dfin = (xn - base).normalized()
            self.Q[k] = (Qpar @ self.e[k]).normalized().rotation_difference(dfin) @ Qpar
            ct = dfin.dot(tdir); self.angles[k] = (math.atan2(dfin.dot(a_in), ct), math.atan2(dfin.dot(a_sd), ct))
            Qpar = self.Q[k]; base = xn
    def snapshot(self):
        return {'p': [v.copy() for v in self.p], 'Q': [q.copy() for q in self.Q], 'ang': list(self.angles)}

centre = Vector(P['skull_c'])
CH = [Chain(TAILN, TAILJ, P['tail_spring'], P['tail_radius'], centre)] + \
     [Chain(SIDEN[s], SIDEJ[s], P['side_spring'], P['side_radius'], centre) for s in 'LR']
for c in CH[1:]: c.follow = (CH[0], int(P['side_follow'][0]), float(P['side_follow'][1]))
h = 1.0 / (FPS * SUB)
for c in CH: c.reset(DH[0])
for _ in range(int(P['preroll_s'] * FPS * SUB)):
    for c in CH: c.step(DH[0], DC[0], h)
SNAP = [[c.snapshot() for c in CH]]
for f in range(1, F1 - F0 + 1):
    for s_ in range(1, SUB + 1):
        Dh = interp(DH, f, s_ / SUB); Dc = interp(DC, f, s_ / SUB)
        for c in CH: c.step(Dh, Dc, h)
    SNAP.append([c.snapshot() for c in CH])

# ---------------------------------------------------------------- 6. keys (local rotations of the new bones, every frame)
vl.objects.active = arm; bpy.ops.object.mode_set(mode='POSE')
BL = {n: arm.data.bones[n].matrix_local.copy() for n in NEWB + ['head']}
qprev = {}; maxtrans = 0.0
DEFL = {n: [] for n in NEWB}; TIPDEFL = []; TIPCM = []
for fi, snap in enumerate(SNAP):
    f = F0 + fi; Mh = DH[fi] @ BH
    for ci, c in enumerate(CH):
        st = snap[ci]; Mpar = Mh; Bpar = BL['head']
        for k, n in enumerate(c.names):
            Bk = BL[n]; base = st['p'][k]
            Mk = Matrix.Translation(base) @ st['Q'][k].to_matrix().to_4x4() @ Bk.to_3x3().to_4x4()
            Lk = Bk.inverted() @ Bpar @ Mpar.inverted() @ Mk
            maxtrans = max(maxtrans, Lk.to_translation().length)
            q = Lk.to_quaternion().normalized()
            if n in qprev and q.dot(qprev[n]) < 0: q = -q
            qprev[n] = q; pb = PB[n]; pb.rotation_mode = 'QUATERNION'; pb.rotation_quaternion = q; pb.location = (0, 0, 0)
            pb.keyframe_insert('rotation_quaternion', frame=f, group=n)
            if fi == 0: pb.keyframe_insert('location', frame=f, group=n)
            DEFL[n].append(math.degrees(2 * math.acos(min(1.0, abs(q.w)))))
            Mpar = Mk; Bpar = Bk
    # the ponytail as a whole: root -> tip direction in her head's frame vs its rest direction; tip offset from the rigid (head-carried) tip
    st = snap[0]; Dinv = DH[fi].inverted()
    vrest = (TAILJ[-1] - TAILJ[0]).normalized(); vnow = (Dinv @ st['p'][-1] - Dinv @ st['p'][0]).normalized()
    TIPDEFL.append(math.degrees(vrest.angle(vnow, 0.0))); TIPCM.append((st['p'][-1] - DH[fi] @ TAILJ[-1]).length * 100)
bpy.ops.object.mode_set(mode='OBJECT')
REP['local_translation_residual_m'] = maxtrans
TIPDEFL = np.array(TIPDEFL); TIPCM = np.array(TIPCM)
def stats(a): a = np.asarray(a); return {'max': round(float(a.max()), 2), 'p95': round(float(np.percentile(a, 95)), 2), 'median': round(float(np.median(a)), 2), 'frame_of_max': int(F0 + a.argmax())}
REP['deflection'] = {'ponytail_root_to_tip_deg': stats(TIPDEFL), 'ponytail_tip_offset_cm': stats(TIPCM),
                     'per_bone_local_rotation_deg': {n: stats(DEFL[n]) for n in NEWB}}
for ci, c in enumerate(CH):
    for k, n in enumerate(c.names):
        a = np.array([s[ci]['ang'][k] for s in SNAP]); f_hz, zeta, lo, li_, ls = c.sp[k]
        REP['deflection']['per_bone_local_rotation_deg'][n].update({'inward_max': round(math.degrees(a[:, 0].max()), 2), 'outward_max': round(math.degrees(-a[:, 0].min()), 2),
            'side_max': round(math.degrees(np.abs(a[:, 1]).max()), 2), 'limits_out_in_side': [lo, li_, ls]})
win = {}
for a0, a1 in P['windows']:
    seg = TIPDEFL[a0 - F0:a1 - F0 + 1]; win[f'{a0}-{a1}'] = {'frame': int(a0 + seg.argmax()), 'deg': round(float(seg.max()), 2), 'tip_cm': round(float(TIPCM[a0 - F0 + seg.argmax()]), 2)}
REP['deflection']['windows'] = win
REP['deflection']['smoothness_max_change_per_frame_deg'] = {n: round(float(np.abs(np.diff(DEFL[n])).max()), 2) for n in NEWB}
REP['deflection']['smoothness_max_change_per_frame_deg']['ponytail_root_to_tip'] = round(float(np.abs(np.diff(TIPDEFL)).max()), 2)
tilt = [math.degrees((D.to_3x3() @ Vector((0, 0, 1))).angle(Vector((0, 0, 1)), 0.0)) for D in DH]
spin = [0.0] + [math.degrees(DH[i - 1].to_quaternion().rotation_difference(DH[i].to_quaternion()).angle) * FPS for i in range(1, len(DH))]
REP['series_every_frame'] = {'ponytail_deg': [round(v, 2) for v in TIPDEFL], 'ponytail_tip_cm': [round(v, 2) for v in TIPCM],
                             'head_tilt_from_upright_deg': [round(v, 1) for v in tilt], 'head_turn_rate_deg_s': [round(v, 1) for v in spin]}
REP['springs'] = {'tail (Hz, damping ratio, limit out/in/side deg)': P['tail_spring'], 'side': P['side_spring'], 'side_follow_tail_bone_share': P['side_follow'], 'gravity_m_s2': P['gravity'],
                  'air_drag_per_s': P['air_drag'], 'substeps_per_frame': SUB, 'preroll_s': P['preroll_s']}
print('DEFLECTION', json.dumps(REP['deflection']['ponytail_root_to_tip_deg']), json.dumps(win))

# ---------------------------------------------------------------- 7. export (as animate_laundry.py)
sc.frame_start, sc.frame_end = F0, F1
for o in bpy.data.objects: o.select_set(False)
arm.select_set(True); mesh.select_set(True); vl.objects.active = arm
bpy.ops.export_scene.gltf(filepath=DST, export_format='GLB', use_selection=True, export_skins=True, export_animations=True, export_yup=True,
                          export_force_sampling=True, export_frame_range=True, export_animation_mode='ACTIONS')
REP['output_bytes'] = os.path.getsize(DST); REP['input_bytes'] = os.path.getsize(SRC)

# weight preview (rest pose): the new bones' share as colour over the texture (orange: ponytail, cyan: side bunches)
def weight_preview():
    for pbn in PB: pbn.rotation_quaternion = (1, 0, 0, 0); pbn.location = (0, 0, 0)
    arm.animation_data.action = None; vl.update()
    lab = np.zeros((NV, 4)); tt = BT.sum(1); s2 = BS.sum(1)
    lab[:, :3] = np.array([1.0, 0.45, 0.0]) * (tt / np.maximum(tt + s2, 1e-9))[:, None] + np.array([0.0, 0.8, 1.0]) * (s2 / np.maximum(tt + s2, 1e-9))[:, None]
    lab[:, 3] = np.clip(tt + s2, 0, 1) * 0.85
    ca = me.color_attributes.new('hairw', 'FLOAT_COLOR', 'POINT'); ca.data.foreach_set('color', lab.ravel())
    nt = me.materials[0].node_tree; bsdf = next(nd for nd in nt.nodes if nd.type == 'BSDF_PRINCIPLED')
    src_sock = bsdf.inputs['Base Color'].links[0].from_socket
    vc = nt.nodes.new('ShaderNodeVertexColor'); vc.layer_name = 'hairw'; mix = nt.nodes.new('ShaderNodeMix'); mix.data_type = 'RGBA'
    nt.links.new(vc.outputs['Alpha'], mix.inputs['Factor']); nt.links.new(src_sock, mix.inputs[6]); nt.links.new(vc.outputs['Color'], mix.inputs[7])
    nt.links.new(mix.outputs[2], bsdf.inputs['Base Color'])
    setup_render(360, 360, 8)
    cam = new_cam(); cam.data.type = 'ORTHO'; cam.data.ortho_scale = 0.52
    tiles = []
    for tag, d in (('back', (0, 1, 0.1)), ('left', (1, 0, 0.05)), ('front', (0, -1, 0.05)), ('q34', (0.9, 0.9, 0.35))):
        d = Vector(d).normalized(); c = Vector((0, 0, 0.78)); cam.location = c + d * 2; cam.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
        fp = os.path.join(OUT, f'_w_{tag}.png'); sc.render.filepath = fp; bpy.ops.render.render(write_still=True); tiles.append(read_png(fp)); os.remove(fp)
    save_png(os.path.join(OUT, 'hair_weights.png'), np.concatenate(tiles, 1))

def setup_render(wpx, hpx, samples):
    s = bpy.context.scene   # (the current scene: load() replaces it)
    s.render.engine = 'CYCLES'; s.cycles.device = 'CPU'; s.cycles.samples = samples; s.cycles.use_denoising = False
    s.render.resolution_x, s.render.resolution_y = wpx, hpx; s.render.resolution_percentage = 100
    s.render.image_settings.file_format = 'PNG'; s.render.film_transparent = False
    w = bpy.data.worlds.new('w'); s.world = w; w.use_nodes = True
    w.node_tree.nodes['Background'].inputs[0].default_value = (0.82, 0.8, 0.88, 1); w.node_tree.nodes['Background'].inputs[1].default_value = 1.3
def new_cam():
    s = bpy.context.scene; cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); s.collection.objects.link(cam); s.camera = cam; return cam
def read_png(fp):
    im = bpy.data.images.load(fp); a = np.zeros(im.size[0] * im.size[1] * 4, dtype=np.float32); im.pixels.foreach_get(a)
    a = a.reshape(im.size[1], im.size[0], 4); bpy.data.images.remove(im); return a
def save_png(fp, a):
    hh, ww = a.shape[:2]; im = bpy.data.images.new('sheet', ww, hh, alpha=True); im.pixels.foreach_set(a.astype(np.float32).ravel())
    im.filepath_raw = fp; im.file_format = 'PNG'; im.save(); bpy.data.images.remove(im)

if DO_RENDER: weight_preview()

# ---------------------------------------------------------------- 8. validation in a fresh scene
def glb_json(path):
    d = open(path, 'rb').read(); L = struct.unpack('<I', d[12:16])[0]; J = json.loads(d[20:20 + L])
    o = 20 + L; L2 = struct.unpack('<I', d[o:o + 4])[0]; return J, d[o + 8:o + 8 + L2]
def accessor(J, binb, i):
    a = J['accessors'][i]; bv = J['bufferViews'][a['bufferView']]; n = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}[a['type']]
    dt = {5126: np.float32, 5123: np.uint16, 5121: np.uint8, 5125: np.uint32}[a['componentType']]
    off = bv.get('byteOffset', 0) + a.get('byteOffset', 0); stride = bv.get('byteStride', 0)
    if stride and stride != n * np.dtype(dt).itemsize:
        raw = np.frombuffer(binb, dtype=np.uint8, count=stride * a['count'], offset=off).reshape(a['count'], stride)[:, :n * np.dtype(dt).itemsize]
        return np.frombuffer(raw.tobytes(), dtype=dt).reshape(a['count'], n)
    return np.frombuffer(binb, dtype=dt, count=a['count'] * n, offset=off).reshape(a['count'], n)
def glb_anim(path):
    J, binb = glb_json(path); names = {i: nd.get('name') for i, nd in enumerate(J['nodes'])}; A = J['animations'][0]; out = {}
    for ch in A['channels']:
        smp = A['samplers'][ch['sampler']]; out[(names[ch['target']['node']], ch['target']['path'])] = (accessor(J, binb, smp['input']).ravel(), accessor(J, binb, smp['output']))
    rest = {nd.get('name'): (nd.get('translation'), nd.get('rotation'), nd.get('scale')) for nd in J['nodes']}
    return J, A['name'], out, rest

def trs_diff(a, b, i):   # (glTF omits default T / R / S: identity values)
    dflt = ([0, 0, 0], [0, 0, 0, 1], [1, 1, 1])[i]; a = np.array(a if a else dflt, float); b = np.array(b if b else dflt, float)
    if i == 1 and a.dot(b) < 0: b = -b
    return float(np.abs(a - b).max())

def sample(path, frames, nodes):
    arm2, mesh2, act2 = load(path); s2 = bpy.context.scene
    res = {'joints': len(arm2.data.bones), 'bones': [b.name for b in arm2.data.bones], 'action': act2.name, 'actions': [a.name for a in bpy.data.actions],
           'range': [round(v, 3) for v in act2.frame_range], 'verts': len(mesh2.data.vertices)}
    gi2 = {gp.index: gp.name for gp in mesh2.vertex_groups}; unw = 0; bad_sum = 0; maxinf = 0
    for v in mesh2.data.vertices:
        ws = [e.weight for e in v.groups if e.weight > 0]
        if not ws: unw += 1
        elif abs(sum(ws) - 1) > 0.01: bad_sum += 1
        maxinf = max(maxinf, len(ws))
    res.update({'unweighted_vertices': unw, 'weight_sum_off_by_1pct': bad_sum, 'max_influences': maxinf})
    pos = {}
    for f in frames:
        s2.frame_set(f); pos[f] = {n: (arm2.matrix_world @ arm2.pose.bones[n].head).copy() for n in nodes}
    return res, pos, arm2, mesh2

def deformed_track(arm2, mesh2, frames, idx):
    """world positions of vertex subset idx (deformed) per frame, plus the head's delta matrices"""
    s2 = bpy.context.scene; out = []; Dh = []; dg = bpy.context.evaluated_depsgraph_get(); Bh = arm2.data.bones['head'].matrix_local
    for f in frames:
        s2.frame_set(f); dg = bpy.context.evaluated_depsgraph_get(); ev = mesh2.evaluated_get(dg); m = ev.to_mesh()
        a = np.zeros(len(m.vertices) * 3); m.vertices.foreach_get('co', a); ev.to_mesh_clear(); out.append(a.reshape(-1, 3)[idx])
        Dh.append(np.array(arm2.pose.bones['head'].matrix @ Bh.inverted()))
    return np.array(out), np.array(Dh)

if DO_VALIDATE:
    V = {}
    CHECK = list(range(F0, F1 + 1, 6)) + [F1]
    JN = ORIG_BONES
    ri, pi, armI, meshI = sample(SRC, CHECK, JN)
    # the input's vertex sets: moving hair (by the weights computed above, same vertex order) and her body / face
    coI = np.zeros(len(meshI.data.vertices) * 3); meshI.data.vertices.foreach_get('co', coI); coI = coI.reshape(-1, 3)
    same_order = len(coI) == NV and np.abs(coI - co).max() < 1e-6
    hairI = np.where(total > 0.05)[0]
    bodyI = np.where((dom != 'head') & (dom != '') & (co[:, 2] > 0.4))[0]
    faceI = np.where((dom == 'head') & ((skin & (y < 0.03)) | pink))[0]
    ALLF = list(range(F0, F1 + 1))
    trI, DhI = deformed_track(armI, meshI, ALLF, np.concatenate([hairI, bodyI]))
    ro, po, armO, meshO = sample(DST, CHECK, JN + NEWB)
    coO = np.zeros(len(meshO.data.vertices) * 3); meshO.data.vertices.foreach_get('co', coO); coO = coO.reshape(-1, 3)
    kd = KDTree(len(coO))
    for i, p in enumerate(coO): kd.insert(p, i)
    kd.balance()
    mapIO = np.array([kd.find(co[i])[1] for i in np.concatenate([hairI, bodyI])])
    trO, DhO = deformed_track(armO, meshO, ALLF, mapIO)
    dj = max((pi[f][n] - po[f][n]).length for f in CHECK for n in JN)
    V['input'] = ri; V['output'] = {k: v for k, v in ro.items() if k != 'bones'}
    V['output']['new_joints'] = [n for n in ro['bones'] if n not in ri['bones']]
    V['original_joint_world_positions_max_diff_m'] = dj
    V['original_joint_world_positions_checked'] = {'frames': CHECK, 'joints': len(JN)}
    V['head_hands_feet_at_frames'] = {f: {n: [round(v, 4) for v in po[f][n]] for n in ('head', 'hand.L', 'hand.R', 'foot.L', 'foot.R')} for f in (0, 42, 102, 162, 228, F1)}
    V['mesh_same_vertex_order_as_input'] = bool(len(coO) == NV and np.abs(coO - co).max() < 1e-6)
    V['mesh_rest_positions_max_diff_m'] = float(np.abs(np.sort(coO, 0) - np.sort(co, 0)).max()) if len(coO) == NV else None
    # glTF level: the 23 original joints' channels (times and values) and rest transforms
    JI, nI, AI, RI = glb_anim(SRC); JO, nO, AO, RO = glb_anim(DST)
    dmax = 0.0; dkeys = []
    for key, (t, val) in AI.items():
        t2, v2 = AO[key]
        if len(t2) != len(t) or np.abs(t2 - t).max() > 1e-6: dkeys.append(key)
        else: dmax = max(dmax, float(np.abs(v2.astype(float) - val.astype(float)).max()))
    V['gltf'] = {'animation_name': nO, 'channels_in': len(AI), 'channels_out': len(AO), 'samples_per_channel_out': sorted({len(t) for t, _ in AO.values()}),
                 'time_range_out_s': [float(min(t.min() for t, _ in AO.values())), float(max(t.max() for t, _ in AO.values()))],
                 'original_channels_max_value_diff': dmax, 'original_channels_with_different_times': [list(k) for k in dkeys],
                 'original_rest_TRS_max_diff': max(trs_diff(RI[n][i], RO[n][i], i) for n in JN for i in range(3)),
                 'skin_joints_out': len(JO['skins'][0]['joints'])}
    # clearance: the moving hair vs her body (hood, shoulders, chest) per frame, input (rigid hair) vs output
    nh = len(hairI)
    def clearance(tr):
        out = []
        for fi in range(len(ALLF)):
            k2 = KDTree(len(bodyI)); B = tr[fi, nh:]
            for i, p in enumerate(B): k2.insert(p, i)
            k2.balance(); out.append(min(k2.find(p)[2] for p in tr[fi, :nh][::3]))
        return np.array(out)
    cI = clearance(trI); cO = clearance(trO)
    V['hair_to_body_clearance_cm'] = {'input_min': round(float(cI.min() * 100), 2), 'output_min': round(float(cO.min() * 100), 2),
                                      'frames_output_closer_than_0.5cm_and_closer_than_input': int(((cO < 0.005) & (cO < cI - 0.001)).sum()),
                                      'worst_frames_output_vs_input_cm': sorted([(int(F0 + i), round(float(cO[i] * 100), 2), round(float(cI[i] * 100), 2)) for i in np.argsort(cO - cI)[:5]])}
    # head: moving hair in her head's frame (skull ellipsoid radius; and distance to her face / ears / bow, which are rigid on the head)
    rest_h = co[hairI]; rho_rest = np.linalg.norm((rest_h - C) / R, axis=1)
    kdf = KDTree(len(faceI))
    for i, j in enumerate(faceI): kdf.insert(co[j], i)
    kdf.balance(); dface_rest = np.array([kdf.find(p)[2] for p in rest_h]); near = np.where(dface_rest < 0.03)[0]
    rmin = []; dfmin = []; viol = 0
    for fi in range(len(ALLF)):
        Dinv = np.linalg.inv(DhO[fi]); loc = (Dinv[:3, :3] @ trO[fi, :nh].T).T + Dinv[:3, 3]
        rh = np.linalg.norm((loc - C) / R, axis=1); m = rho_rest > 1.05
        rmin.append(float((rh[m] - rho_rest[m]).min())); viol += int(((rh < 1.0) & m).sum())
        dfmin.append(min((kdf.find(loc[i])[2] - dface_rest[i] for i in near), default=0.0))
    V['head_check'] = {'vertex_frames_entering_skull_ellipsoid': viol, 'max_inward_change_in_skull_radius_units': round(-min(rmin), 4),
                       'max_approach_to_face_ears_bow_cm(vertices within 3 cm at rest)': round(-min(dfmin) * 100, 2)}
    REP['validation'] = V
    print('VALIDATION', json.dumps({k: V[k] for k in ('original_joint_world_positions_max_diff_m', 'hair_to_body_clearance_cm', 'head_check')}, default=str))

# ---------------------------------------------------------------- 9. contact sheet: input | output at the frames of largest swing, 3/4 side-back view following her head
def render_frames(path, frames, tag, cams):
    arm2, mesh2, act2 = load(path); s2 = bpy.context.scene
    setup_render(*P['render_size'], P['render_samples'])
    cam = new_cam(); cam.data.lens = 50; cam.data.sensor_fit = 'VERTICAL'; cam.data.sensor_height = 24
    key = bpy.data.lights.new('key', 'AREA'); key.energy = 60; key.size = 1.0; ko = bpy.data.objects.new('key', key); s2.collection.objects.link(ko); ko.parent = cam; ko.location = (0.6, 0.6, 0.3)
    ko.rotation_euler = (Vector((0, 0, -1.2)) - Vector((0.6, 0.6, 0.3))).to_track_quat('-Z', 'Y').to_euler()
    cu = bpy.data.curves.new('lbl', 'FONT'); cu.size = 0.0062; to = bpy.data.objects.new('lbl', cu); s2.collection.objects.link(to); to.parent = cam
    lm = bpy.data.materials.new('lbl'); lm.use_nodes = True; nt = lm.node_tree; nt.nodes.clear(); em = nt.nodes.new('ShaderNodeEmission'); mo = nt.nodes.new('ShaderNodeOutputMaterial')
    em.inputs['Color'].default_value = (0.0, 0.0, 0.0, 1); nt.links.new(em.outputs[0], mo.inputs['Surface']); cu.materials.append(lm)
    tiles = []
    for f in frames:
        s2.frame_set(f); loc, rot = cams[f]; cam.location = loc; cam.rotation_euler = rot
        dist = 0.2; hh = 2 * dist * (cam.data.sensor_height / 2 / cam.data.lens); ww = hh * P['render_size'][0] / P['render_size'][1]   # (visible size at dist)
        to.location = (-ww / 2 + 0.004, hh / 2 - 0.009, -dist); cu.body = f'{tag}  frame {f}'
        fp = os.path.join(OUT, f'_{tag}_{f:03d}.png'); s2.render.filepath = fp; bpy.ops.render.render(write_still=True); tiles.append(read_png(fp)); os.remove(fp)
    return tiles

if DO_RENDER:
    frames = sorted({w['frame'] for w in win.values()})
    # camera per frame from the input's pose: target her head, from her left-back (3/4), following her body's turn
    armI, meshI, _ = load(SRC); s2 = bpy.context.scene; cams = {}
    Bhip = armI.data.bones['hips'].matrix_local.to_3x3()
    for f in frames:
        s2.frame_set(f); hp = armI.pose.bones['head']; tgt = armI.matrix_world @ ((hp.head + hp.tail) / 2) + Vector((0, 0, -0.07))
        Rh = armI.pose.bones['hips'].matrix.to_3x3() @ Bhip.inverted(); fwd = Rh @ Vector((0, -1, 0)); fwd.z = 0; fwd.normalize()
        lft = Rh @ Vector((1, 0, 0)); lft.z = 0; lft.normalize()
        d = (lft * 0.8 - fwd * 0.55 + Vector((0, 0, 0.12))).normalized(); loc = tgt + d * 1.55
        cams[f] = (loc, (-d).to_track_quat('-Z', 'Y').to_euler())
    tin = render_frames(SRC, frames, 'INPUT (rigid hair)', cams)
    tout = render_frames(DST, frames, 'OUTPUT (hair springs)', cams)
    sep = np.ones((P['render_size'][1], 6, 4), dtype=np.float32)
    pairs = [np.concatenate([a, sep, b, sep * 0.2 + np.array([0, 0, 0, 0.8], dtype=np.float32)], 1) for a, b in zip(tin, tout)]
    while len(pairs) % 3: pairs.append(np.ones_like(pairs[0]))
    rows = [np.concatenate(pairs[i:i + 3], 1) for i in range(0, len(pairs), 3)]
    save_png(os.path.join(OUT, 'hair_compare.png'), np.concatenate(rows[::-1], 0))   # (Blender images are bottom-up: the first row on top)
    REP['contact_sheet'] = {'file': os.path.join(OUT, 'hair_compare.png'), 'frames': frames, 'view': "3/4 from her left-back, following her head and body turn"}

json.dump(REP, open(os.path.join(OUT, 'hair_report.json'), 'w'), indent=1, default=str)
print('REPORT', os.path.join(OUT, 'hair_report.json'))
