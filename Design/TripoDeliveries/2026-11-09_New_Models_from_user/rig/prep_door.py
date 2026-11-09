# The user's Tripo porthole door (OIT 748): decimated copy, its inner face toward glTF +Z (the hinge then on screen right, the game's door
# pivot side), the ring centre at the origin; report the hinge pin offset and the ring radius. args: in.glb out.glb report.json
import bpy, sys, json, numpy as np, math
from mathutils import Matrix
a = sys.argv[sys.argv.index('--')+1:]
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=a[0])
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]; bpy.context.view_layer.objects.active = o; o.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
o.data.transform(Matrix.Rotation(math.pi / 2, 4, 'Z'))   # (x, y) -> (-y, x): the -X face to -Y (glTF +Z), the hinge (-Y) to +X
V = np.array([v.co[:] for v in o.data.vertices])
ring = V[np.abs(V[:, 2]) > 0.4]   # top and bottom of the ring (no hinge or latch there)
cx = (ring[:, 0].min() + ring[:, 0].max()) / 2; cy = np.median(ring[:, 1]); R = V[:, 2].max()
o.data.transform(Matrix.Translation((-cx, -cy, 0))); V = np.array([v.co[:] for v in o.data.vertices])
hinge = V[V[:, 0] > R * 0.98]
import bmesh
bm = bmesh.new(); bm.from_mesh(o.data)   # the glass dome (r < 0.245; the gold bezel starts at 0.25) is removed: the game draws its own translucent glass
glass = [f for f in bm.faces if all((v.co.x ** 2 + v.co.z ** 2) ** 0.5 < 0.245 for v in f.verts)]; bmesh.ops.delete(bm, geom=glass, context='FACES')
bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS'); bm.to_mesh(o.data); bm.free(); o.data.update()
rep = {'ring_radius': round(float(R), 4), 'hinge_x': round(float(hinge[:, 0].mean()), 4) if len(hinge) else None, 'hinge_y(depth, -=front)': round(float(hinge[:, 1].mean()), 4) if len(hinge) else None,
       'bbox_min': V.min(0).round(4).tolist(), 'bbox_max': V.max(0).round(4).tolist(), 'glass_radius': 0.245, 'glass_faces_removed': len(glass), 'tris': sum(len(p.vertices) - 2 for p in o.data.polygons)}
for p in o.data.polygons: p.use_smooth = True
bpy.ops.export_scene.gltf(filepath=a[1], export_format='GLB', use_selection=True, export_image_format='AUTO', export_yup=True)
json.dump(rep, open(a[2], 'w'), indent=1); print('PREP', json.dumps(rep))
