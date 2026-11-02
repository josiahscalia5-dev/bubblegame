// Web-sized copies of the Meshy GLBs for the browser demo. The originals are never modified.
// Keeps only the colour texture (the demo renders the Meshy colours as baked/unlit, like the Unity
// MeshyBaked shader), re-encodes it as JPEG, and quantizes geometry (KHR_mesh_quantization, read
// natively by three.js). Optionally simplifies small-on-screen props.
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, quantize, textureCompress, simplify, weld } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'node:fs';

const [, , input, output, texSize = '2048', ratio = '1', maxError = '0.002'] = process.argv;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(input);
for (const m of doc.getRoot().listMaterials()) {
  m.setMetallicRoughnessTexture(null);
  m.setNormalTexture(null);
  m.setOcclusionTexture(null);
  m.setEmissiveTexture(null);
}
const steps = [prune(), dedup()];
if (parseFloat(ratio) < 1) {
  await MeshoptSimplifier.ready;
  steps.push(weld(), simplify({ simplifier: MeshoptSimplifier, ratio: parseFloat(ratio), error: parseFloat(maxError) }));
}
const size = parseInt(texSize, 10);
steps.push(
  textureCompress({ encoder: sharp, targetFormat: 'jpeg', quality: 86, resize: [size, size] }),
  quantize({ quantizePosition: 16, quantizeNormal: 10, quantizeTexcoord: 14, quantizeColor: 8 }),
  prune(),
);
await doc.transform(...steps);
await io.write(output, doc);
let tris = 0;
for (const mesh of doc.getRoot().listMeshes())
  for (const p of mesh.listPrimitives()) tris += (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3;
console.log(`${output.split('/').pop()}: ${(fs.statSync(input).size / 1e6).toFixed(1)} MB -> ${(fs.statSync(output).size / 1e6).toFixed(1)} MB, ${tris.toLocaleString()} triangles`);
