// Minimal glTF repairs with glTF Transform (the user's cloud tools; in a session without them:
// npm install --prefix /opt/bw-node-tools @gltf-transform/cli gltf-validator).
//   node repair_glb.mjs <in.glb> <out.glb>
// - NORMAL vectors rescaled to unit length (the Khronos validator's ACCESSOR_VECTOR3_NON_UNIT errors);
// - the file rewritten by glTF Transform, which lays every buffer view out on 4-byte boundaries
//   (MESH_PRIMITIVE_ACCESSOR_UNALIGNED).
// Nothing else changes: same meshes, vertices, triangles, materials and textures (the texture bytes are copied as they are).
import { createRequire } from 'node:module';
const require = createRequire('/opt/bw-node-tools/');
const { NodeIO } = require('@gltf-transform/core');
const [input, output] = process.argv.slice(2);
const io = new NodeIO();
const doc = await io.read(input);
let fixed = 0, total = 0, worst = 0;
for (const mesh of doc.getRoot().listMeshes()) for (const prim of mesh.listPrimitives()) {
  const n = prim.getAttribute('NORMAL');
  if (!n) continue;
  const a = n.getArray();
  for (let i = 0; i < a.length; i += 3) {
    const l = Math.hypot(a[i], a[i + 1], a[i + 2]); total++;
    if (l > 0 && Math.abs(l - 1) > 5e-4) { a[i] /= l; a[i + 1] /= l; a[i + 2] /= l; fixed++; worst = Math.max(worst, Math.abs(l - 1)); }
  }
  n.setArray(a);
}
await io.write(output, doc);
console.log(JSON.stringify({ input, output, normals: total, renormalised: fixed, worstLengthError: +worst.toFixed(4) }));
