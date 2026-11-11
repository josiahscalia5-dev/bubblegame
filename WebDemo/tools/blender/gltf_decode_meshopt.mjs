// decode EXT_meshopt_compression + KHR_mesh_quantization into a plain glTF (same content), for Blender's importer
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dequantize } from '@gltf-transform/functions';
import { MeshoptDecoder } from 'meshoptimizer';
const [inp, out] = process.argv.slice(2);
await MeshoptDecoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.decoder': MeshoptDecoder });
const doc = await io.read(inp);
await doc.transform(dequantize());
for (const ext of doc.getRoot().listExtensionsUsed()) if (['EXT_meshopt_compression', 'KHR_mesh_quantization'].includes(ext.extensionName)) ext.dispose();
await io.write(out, doc);
console.log('wrote', out);
