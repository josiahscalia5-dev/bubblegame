"""Blender (headless): a light copy of a model for fur shells. The model is imported as delivered, every mesh is decimated
(collapse) to about TARGET triangles in all, and the result is exported as a glTF binary with positions, normals and
texture coordinates only (no materials or images: the game uses the original model's own texture). Node transforms are
kept, so the copy lines up with the original when given the same transform.

    blender -b --factory-startup --python make_fur_shell.py -- <in.glb> <out.glb> [target_triangles=6000]

(With no Blender binary, Tools/bin/blender runs this through the bpy module.)
"""
import sys
import bpy

argv = sys.argv[sys.argv.index('--') + 1:]
src, out = argv[0], argv[1]
target = int(argv[2]) if len(argv) > 2 else 6000

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
meshes = [o for o in bpy.context.scene.objects if o.type == 'MESH']
tri = lambda o: sum(len(p.vertices) - 2 for p in o.data.polygons)
before = sum(tri(o) for o in meshes)
ratio = min(1.0, target / max(before, 1))
for o in meshes:
    bpy.context.view_layer.objects.active = o
    m = o.modifiers.new('decimate', 'DECIMATE')
    m.decimate_type = 'COLLAPSE'
    m.ratio = ratio
    m.use_collapse_triangulate = True
    bpy.ops.object.modifier_apply(modifier=m.name)
after = sum(tri(o) for o in meshes)
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', export_materials='NONE', export_texcoords=True, export_normals=True,
                          export_yup=True, export_apply=True)
print(f'FURSHELL {src} -> {out}: {before} -> {after} triangles (ratio {ratio:.4f})')
