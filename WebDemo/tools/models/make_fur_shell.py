"""Blender (headless): a light copy of a model for fur shells. The model is imported as delivered, every mesh is decimated
(collapse) to about TARGET triangles in all, and the result is exported as a glTF binary with positions, normals and
no texture coordinates, materials or images (the fur shells are coloured in their shader). Node transforms are
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
# The delivered model is split along its texture seams into many pieces, which stops a collapse from simplifying it.
# The fur shells need only the shape, so drop the texture coordinates and weld the seams first.
import bmesh
for o in meshes:
    while o.data.uv_layers:
        o.data.uv_layers.remove(o.data.uv_layers[0])
    bm = bmesh.new(); bm.from_mesh(o.data)
    size = max(o.dimensions) or 1.0
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=size * 1e-4)
    bm.to_mesh(o.data); bm.free()
ratio = min(1.0, target / max(before, 1))
for o in meshes:
    bpy.context.view_layer.objects.active = o
    m = o.modifiers.new('decimate', 'DECIMATE')
    m.decimate_type = 'COLLAPSE'
    m.ratio = ratio
    m.use_collapse_triangulate = True
    bpy.ops.object.modifier_apply(modifier=m.name)
after = sum(tri(o) for o in meshes)
bpy.ops.export_scene.gltf(filepath=out, export_format='GLB', export_materials='NONE', export_texcoords=False, export_normals=True,
                          export_yup=True, export_apply=True)
print(f'FURSHELL {src} -> {out}: {before} -> {after} triangles (ratio {ratio:.4f})')
