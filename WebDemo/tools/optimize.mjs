// Web-sized copies of the Meshy GLBs for the browser demo. The originals are never modified.
// By default keeps only the colour texture (the demo renders most Meshy colours as baked/unlit, like the
// Unity MeshyBaked shader), re-encodes it as JPEG, and quantizes geometry (KHR_mesh_quantization, read
// natively by three.js). Optionally simplifies small-on-screen props.
// With `pbr` as the last argument it also keeps the metal/roughness and normal maps (at half the colour
// size), for the glossy gold-and-blue decor that is lit by the scene's reflections.
//   node tools/optimize.mjs <in.glb> <out.glb> [texture size] [ratio] [max error] [pbr]
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, quantize, textureCompress, simplify, weld } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'node:fs';

const [, , input, output, texSize = '2048', ratio = '1', maxError = '0.002', mode = ''] = process.argv;
const pbr = mode === 'pbr';
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(input);
for (const m of doc.getRoot().listMaterials()) {
  if (!pbr) {
    m.setMetallicRoughnessTexture(null);
    m.setNormalTexture(null);
  }
  m.setOcclusionTexture(null);
  m.setEmissiveTexture(null);
}
const steps = [prune(), dedup()];
if (parseFloat(ratio) < 1) {
  await MeshoptSimplifier.ready;
  steps.push(weld(), simplify({ simplifier: MeshoptSimplifier, ratio: parseFloat(ratio), error: parseFloat(maxError) }));
}
const size = parseInt(texSize, 10), half = Math.max(256, size >> 1);
steps.push(textureCompress({ encoder: sharp, targetFormat: 'jpeg', quality: 86, resize: [size, size], slots: pbr ? /baseColor/ : null }));
if (pbr) steps.push(textureCompress({ encoder: sharp, targetFormat: 'jpeg', quality: 90, chromaSubsampling: '4:4:4', resize: [half, half], slots: /metallicRoughness|normal/ }));
steps.push(
  quantize({ quantizePosition: 16, quantizeNormal: 10, quantizeTexcoord: 14, quantizeColor: 8 }),
  prune(),
);
await doc.transform(...steps);
await io.write(output, doc);
let tris = 0;
for (const mesh of doc.getRoot().listMeshes())
  for (const p of mesh.listPrimitives()) tris += (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3;
console.log(`${output.split('/').pop()}: ${(fs.statSync(input).size / 1e6).toFixed(1)} MB -> ${(fs.statSync(output).size / 1e6).toFixed(1)} MB, ${tris.toLocaleString()} triangles`);
