# Blender: the user's Tripo pickup / prop for the game: weld seams, decimate to a target, turn about the vertical (Blender Z) so its face is on
# glTF +Z, centre it on its bounding-box centre (for the gear: its hub, the rotation pivot), smooth shading, export.
# args: in.glb out.glb target_tris rot_deg report.json
import bpy, bmesh, sys, json, math, numpy as np
from mathutils import Matrix
a = sys.argv[sys.argv.index('--')+1:]; src, out, target, rot, rep_p = a[0], a[1], int(a[2]), float(a[3]), a[4]
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=src)
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]; bpy.context.view_layer.objects.active = o; o.select_set(True)
bpy.ops.object.transform_apply(location=True, rotation=True, scale=True)
o.data.calc_loop_triangles(); t0 = len(o.data.loop_triangles)
bm = bmesh.new(); bm.from_mesh(o.data); bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=0.0004); bm.to_mesh(o.data); bm.free()
m = o.modifiers.new('dec', 'DECIMATE'); m.decimate_type = 'COLLAPSE'; m.ratio = min(1.0, target / t0); m.use_collapse_triangulate = True; bpy.ops.object.modifier_apply(modifier='dec')
o.data.transform(Matrix.Rotation(math.radians(rot), 4, 'Z'))
V = np.array([v.co[:] for v in o.data.vertices]); c = (V.min(0) + V.max(0)) / 2; o.data.transform(Matrix.Translation((-c[0], -c[1], -c[2])))
for p in o.data.polygons: p.use_smooth = True
o.data.update(); o.data.calc_loop_triangles(); V = np.array([v.co[:] for v in o.data.vertices])
rep = {'tris_in': t0, 'tris_out': len(o.data.loop_triangles), 'rot_deg_about_up': rot, 'bbox_min': V.min(0).round(4).tolist(), 'bbox_max': V.max(0).round(4).tolist()}
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', use_selection=True, export_image_format='AUTO', export_yup=True)
json.dump(rep, open(rep_p, 'w'), indent=1); print('PREP', json.dumps(rep))
