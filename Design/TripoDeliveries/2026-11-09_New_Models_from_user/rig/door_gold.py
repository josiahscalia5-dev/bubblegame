# The OIT 748 door with its pink outer ring recoloured gold (storyboard panel 4's gold door ring; the art director's review): pixels of the
# colour map in the pink hue range move to the gold of the model's own bezel. args: in.glb out.glb
import bpy, sys, numpy as np, colorsys
a = sys.argv[sys.argv.index('--')+1:]
bpy.ops.wm.read_factory_settings(use_empty=True); bpy.ops.import_scene.gltf(filepath=a[0])
o = [x for x in bpy.context.scene.objects if x.type == 'MESH'][0]; o.select_set(True)
im = [i for i in bpy.data.images if i.name.startswith('Color')][0]; w, h = im.size
px = np.array(im.pixels[:], dtype=np.float32).reshape(-1, 4); rgb = px[:, :3]
mx = rgb.max(1); mn = rgb.min(1); d = mx - mn + 1e-6
hue = np.where(mx == rgb[:, 0], ((rgb[:, 1] - rgb[:, 2]) / d) % 6, np.where(mx == rgb[:, 1], (rgb[:, 2] - rgb[:, 0]) / d + 2, (rgb[:, 0] - rgb[:, 1]) / d + 4)) * 60
sat = d / (mx + 1e-6); pink = ((hue > 290) | (hue < 8)) & (sat > 0.18) & (mx > 0.25)
gold = np.array([1.0, 0.72, 0.28]); lum = (0.3 * rgb[:, 0] + 0.59 * rgb[:, 1] + 0.11 * rgb[:, 2])[:, None]
rgb[pink] = np.clip(gold * (lum[pink] / 0.62) ** 1.1, 0, 1)
px[:, :3] = rgb; im.pixels = px.ravel().tolist(); im.update(); im.pack()
print('GOLD recoloured pixels', int(pink.sum()), 'of', len(px))
bpy.ops.export_scene.gltf(filepath=a[1], export_format='GLB', use_selection=True, export_image_format='JPEG', export_jpeg_quality=90, export_yup=True)
