// Khronos glTF Validator summary for one or more .glb files (validator from /opt/bw-node-tools).
//   node validate.cjs a.glb b.glb ...
const v = require('/opt/bw-node-tools/node_modules/gltf-validator'); const fs = require('fs');
(async () => { for (const f of process.argv.slice(2)) {
  const r = await v.validateBytes(new Uint8Array(fs.readFileSync(f)), { maxIssues: 50 });
  const msgs = r.issues.messages.filter((m) => m.severity <= 1).slice(0, 6).map((m) => `${['ERR','WARN'][m.severity]} ${m.code}: ${m.message.slice(0, 90)}`);
  console.log(`${f.split('/').pop()}: errors ${r.issues.numErrors}, warnings ${r.issues.numWarnings}, infos ${r.issues.numInfos} | ${r.info.totalTriangleCount} triangles, ${r.info.materialCount} materials, ${r.info.drawCallCount} draws`); for (const m of msgs) console.log('   ', m);
} })();
