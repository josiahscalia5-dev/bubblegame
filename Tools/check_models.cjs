// Model integrity check (session f28099bc, 9 November 2026): every GLB under WebDemo/models must be a real binary glTF 2.0 (not a Git LFS
// pointer, not truncated: the header's length equals the file size) and pass the Khronos glTF Validator with 0 errors (warnings are reported,
// not failed). Free, no browser, no Tripo call. Usage: node Tools/check_models.cjs [dir]   (exit 1 on any failure)
const fs = require('fs'), path = require('path');
const root = process.argv[2] || path.join(__dirname, '..', 'WebDemo', 'models');
let V = null; try { V = require(path.join(process.env.HOME, '.bubblewash-tools/node/node_modules/gltf-validator')); } catch {}
const files = []; (function walk(d) { for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (e.name.endsWith('.glb')) files.push(p); } })(root);
(async () => {
  let bad = 0, warn = 0;
  for (const f of files.sort()) {
    const b = fs.readFileSync(f), rel = path.relative(root, f);
    if (b.slice(0, 40).toString().startsWith('version https://git-lfs')) { console.log(`FAIL ${rel}: Git LFS pointer, not the model`); bad++; continue; }
    if (b.toString('latin1', 0, 4) !== 'glTF' || b.readUInt32LE(4) !== 2) { console.log(`FAIL ${rel}: not a glTF 2.0 binary`); bad++; continue; }
    if (b.readUInt32LE(8) !== b.length) { console.log(`FAIL ${rel}: truncated (${b.length} of ${b.readUInt32LE(8)} bytes)`); bad++; continue; }
    if (V) { const r = await V.validateBytes(new Uint8Array(b)); if (r.issues.numErrors) { console.log(`FAIL ${rel}: ${r.issues.numErrors} validator errors`); bad++; continue; } warn += r.issues.numWarnings; }
  }
  console.log(`models: ${files.length} GLB checked, ${bad} failed, ${V ? warn + ' validator warnings (not failures)' : 'validator not installed (header/size checks only)'}`);
  process.exit(bad ? 1 : 0);
})();
