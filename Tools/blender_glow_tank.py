# Blender (session ddf175f2): the approved Screen 6's tall GLOWING GLASS TANK as a modelled game asset (no AI generator: image-to-3D bakes
# opaque textures and cannot give transparent glass with a glowing interior; Tripo's attempt, task 5bafa5d6, was rejected for that reason).
# Reference: Design/ReferencePacks/2026-11-09_Screen6_Isolated_Asset_References/02_glowing_glass_tank.png (cut from the exact approved image).
# Units: the glass radius = 1, the glass height = 2.4 (the game scales each copy to its slot). Parts are separate named meshes so the game
# gives each its own material: t6gold (foot, bands, cap, dome, neck), t6rivet, t6glass (open shell), t6core (the glowing column), t6bubbles.
#   blender -b --python Tools/blender_glow_tank.py -- <out.glb>
import bpy, bmesh, sys, math, random
out = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)
rnd = random.Random(7)
H = 2.4   # glass height

def obj(name, mesh_fn):
    bm = bmesh.new(); mesh_fn(bm)
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new(name, me); bpy.context.collection.objects.link(o); return o

def lathe(bm, prof, seg, z0=0.0, cap_bottom=False, cap_top=False):
    """prof: [(r, z)] bottom -> top; a surface of revolution about z"""
    rings = []
    for (r, z) in prof:
        ring = []
        for i in range(seg):
            a = 2 * math.pi * i / seg
            ring.append(bm.verts.new((r * math.cos(a), r * math.sin(a), z + z0)))
        rings.append(ring)
    for k in range(len(rings) - 1):
        A, B = rings[k], rings[k + 1]
        for i in range(seg):
            j = (i + 1) % seg
            bm.faces.new((A[i], A[j], B[j], B[i]))
    if cap_bottom: bm.faces.new(list(reversed(rings[0])))
    if cap_top: bm.faces.new(rings[-1])

def torus(bm, R, r, z, seg=36, sides=7):
    rings = []
    for i in range(seg):
        a = 2 * math.pi * i / seg; ring = []
        for j in range(sides):
            b = 2 * math.pi * j / sides
            ring.append(bm.verts.new(((R + r * math.cos(b)) * math.cos(a), (R + r * math.cos(b)) * math.sin(a), z + r * math.sin(b))))
        rings.append(ring)
    for i in range(seg):
        A, B = rings[i], rings[(i + 1) % seg]
        for j in range(sides):
            k = (j + 1) % sides
            bm.faces.new((A[j], B[j], B[k], A[k]))

def sphere(bm, c, r, u=10, v=7):
    bmesh.ops.create_uvsphere(bm, u_segments=u, v_segments=v, radius=r, matrix=__import__('mathutils').Matrix.Translation(c))

S = 40
# the gold foot: a stepped, rounded base under the glass (z < 0), a band at the glass bottom
def gold(bm):
    lathe(bm, [(1.12, -0.34), (1.20, -0.30), (1.22, -0.22), (1.18, -0.16), (1.10, -0.14), (1.10, -0.06), (1.06, -0.02), (1.06, 0.06)], S, cap_bottom=True)
    torus(bm, 1.04, 0.07, 0.10)
    # the cap over the glass top (z > H): a band, a riveted drum, a shoulder, a low dome, the pipe neck
    lathe(bm, [(1.05, H - 0.06), (1.10, H - 0.02), (1.14, H + 0.04), (1.16, H + 0.30), (1.13, H + 0.36), (1.02, H + 0.40), (0.98, H + 0.46),
               (0.92, H + 0.52), (0.80, H + 0.60), (0.62, H + 0.68), (0.42, H + 0.73), (0.30, H + 0.75)], S)
    torus(bm, 1.10, 0.06, H - 0.02)
    torus(bm, 1.16, 0.05, H + 0.33)
    lathe(bm, [(0.30, H + 0.74), (0.30, H + 0.92), (0.36, H + 0.94), (0.36, H + 1.02), (0.28, H + 1.04)], 24, cap_top=True)   # the pipe neck
def rivets(bm):
    for i in range(14):
        a = 2 * math.pi * i / 14; sphere(bm, (1.165 * math.cos(a), 1.165 * math.sin(a), H + 0.18), 0.05, 6, 4)
    for i in range(10):
        a = 2 * math.pi * i / 10 + 0.1; sphere(bm, (1.215 * math.cos(a), 1.215 * math.sin(a), -0.25), 0.045, 6, 4)
def glass(bm):   # the open glass shell, a slight bulge
    lathe(bm, [(1.0, 0.04), (1.015, 0.4), (1.025, H / 2), (1.015, H - 0.4), (1.0, H - 0.02)], S)
def core(bm):    # the glowing liquid column inside (the shader makes it glow; closed)
    lathe(bm, [(0.0, 0.12), (0.80, 0.14), (0.86, 0.5), (0.88, H / 2), (0.86, H - 0.5), (0.80, H - 0.12), (0.0, H - 0.10)], 40)
def bubbles(bm):
    for i in range(13):
        a = rnd.uniform(0, 2 * math.pi); r = rnd.uniform(0.15, 0.78); z = rnd.uniform(0.3, H - 0.3)
        sphere(bm, (r * math.cos(a), r * math.sin(a), z), rnd.uniform(0.05, 0.13), 8, 5)

parts = [('t6gold', gold), ('t6rivet', rivets), ('t6glass', glass), ('t6core', core), ('t6bubbles', bubbles)]
for name, fn in parts:
    o = obj(name, fn)
    for p in o.data.polygons: p.use_smooth = True
    m = bpy.data.materials.new(name); o.data.materials.append(m)   # placeholder material per part (the game assigns its own by name)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', export_yup=True, export_apply=True)
print('glow tank written', out)
