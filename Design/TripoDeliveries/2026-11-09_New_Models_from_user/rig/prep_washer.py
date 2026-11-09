# The user's Tripo washer (01_Pink_Gold_Machinery) for the six-scene opening: remove its built-in open door (the separate OIT 748 door model
# swings shut on the game's existing door pivot) and its drum (the game's live drum tunnel, water and character show through the porthole);
# porthole centre to the origin, front plane at z = 0, facing glTF +Z; smooth shading. args: in.glb out.glb report.json
import bpy, bmesh, sys, json, numpy as np, math
from mathutils import Matrix
a = sys.argv[sys.argv.index('--')+1:]
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=a[0])
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]; bpy.context.view_layer.objects.active = o; o.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
CY, CZ, XF, RO = 0.0, -0.065, 0.035, 0.176   # porthole centre (y, z), front plane x, opening radius (measured from a ray-cast depth map)
bm = bmesh.new(); bm.from_mesh(o.data); n0 = len(bm.faces)
door = [f for f in bm.faces if all(v.co.y < -0.165 and -0.38 < v.co.z and ((v.co.x > 0.058 and v.co.z < 0.15) or (v.co.x > 0.10 and v.co.z < 0.23)) for v in f.verts)]   # (spares the round gem at the upper left)
bmesh.ops.delete(bm, geom=door, context='FACES'); n1 = len(bm.faces)
drum = [f for f in bm.faces if (lambda c: math.hypot(c.y - CY, c.z - CZ) < RO and c.x < 0.0)(f.calc_center_median())]
bmesh.ops.delete(bm, geom=drum, context='FACES')
loose = [v for v in bm.verts if not v.link_faces]; bmesh.ops.delete(bm, geom=loose, context='VERTS')
rep = {'faces_in': n0, 'door_faces_removed': n0 - n1, 'drum_faces_removed': n1 - len(bm.faces), 'faces_out': len(bm.faces)}
bm.to_mesh(o.data); bm.free()
o.data.transform(Matrix.Translation((-XF, -CY, -CZ))); o.data.transform(Matrix.Rotation(-math.pi / 2, 4, 'Z'))   # front (+X) -> -Y (glTF +Z)
for p in o.data.polygons: p.use_smooth = True
o.data.update()
V = np.array([v.co[:] for v in o.data.vertices]); rep['bbox_min'] = V.min(0).round(4).tolist(); rep['bbox_max'] = V.max(0).round(4).tolist()
rep['opening_radius'] = RO; rep['note'] = 'Blender Z-up coords: porthole centre at origin, front plane y=0 facing -Y (= glTF +Z); bottom z = bbox_min[2]'
bpy.ops.export_scene.gltf(filepath=a[1], export_format='GLB', use_selection=True, export_image_format='AUTO', export_yup=True)
json.dump(rep, open(a[2], 'w'), indent=1); print('PREP', json.dumps(rep))
