// Khronos glTF Validator summary for one or more .glb files (validator from BW_NODE_TOOLS, set by
// Tools/bw_tools_env.sh, or ~/.bubblewash-tools/node, or /opt/bw-node-tools).
//   node validate.cjs a.glb b.glb ...
const fs = require('fs');
const toolDirs = [process.env.BW_NODE_TOOLS, `${require('os').homedir()}/.bubblewash-tools/node`, '/opt/bw-node-tools'].filter(Boolean);
const toolDir = toolDirs.find((d) => fs.existsSync(`${d}/node_modules/gltf-validator`));
if (!toolDir) throw new Error(`gltf-validator not found in ${toolDirs.join(', ')} (source Tools/bw_tools_env.sh)`);
const v = require(`${toolDir}/node_modules/gltf-validator`);
(async () => { for (const f of process.argv.slice(2)) {
  const r = await v.validateBytes(new Uint8Array(fs.readFileSync(f)), { maxIssues: 50 });
  const msgs = r.issues.messages.filter((m) => m.severity <= 1).slice(0, 6).map((m) => `${['ERR','WARN'][m.severity]} ${m.code}: ${m.message.slice(0, 90)}`);
  console.log(`${f.split('/').pop()}: errors ${r.issues.numErrors}, warnings ${r.issues.numWarnings}, infos ${r.issues.numInfos} | ${r.info.totalTriangleCount} triangles, ${r.info.materialCount} materials, ${r.info.drawCallCount} draws`); for (const m of msgs) console.log('   ', m);
} })();
