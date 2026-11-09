# Blender: import a (meshopt) GLB, weld seams lightly, decimate (collapse) to a target triangle count, export a plain GLB.
# args: in.glb out.glb target_tris [weld_dist]
import bpy, bmesh, sys, time
a = sys.argv[sys.argv.index('--')+1:]
src, out, target = a[0], a[1], int(a[2]); weld = float(a[3]) if len(a) > 3 else 0.0
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=src)
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]
bpy.context.view_layer.objects.active = o; o.select_set(True)
o.data.calc_loop_triangles(); t0 = len(o.data.loop_triangles)
if weld > 0:
    bm = bmesh.new(); bm.from_mesh(o.data); bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=weld); bm.to_mesh(o.data); bm.free()
m = o.modifiers.new('dec', 'DECIMATE'); m.decimate_type = 'COLLAPSE'; m.ratio = min(1.0, target / t0); m.use_collapse_triangulate = True
t = time.time(); bpy.ops.object.modifier_apply(modifier='dec')
o.data.calc_loop_triangles(); t1 = len(o.data.loop_triangles)
print('DEC', src.split('/')[-1], t0, '->', t1, 'tris in', round(time.time()-t, 1), 's')
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', use_selection=True, export_image_format='AUTO', export_yup=True, export_apply=True)
