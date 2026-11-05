// node gen_restore.mjs base.none.json A.none.json : the restore list (path, value or DELETE) per settings object
import fs from 'fs';
const [bf, af] = process.argv.slice(2);
const B = JSON.parse(fs.readFileSync(bf)), A = JSON.parse(fs.readFileSync(af));
const isObj = (o) => o && typeof o === 'object' && !Array.isArray(o);
function diff(b, a, path, out) {
  for (const k of Object.keys(a)) if (!(k in b)) out.push([[...path, k], 'DELETE']);
  for (const k of Object.keys(b)) {
    if (!(k in a)) { out.push([[...path, k], b[k]]); continue; }
    if (isObj(b[k]) && isObj(a[k])) diff(b[k], a[k], [...path, k], out);
    else if (JSON.stringify(b[k]) !== JSON.stringify(a[k])) out.push([[...path, k], b[k]]);
  }
  return out;
}
for (const name of ['MATCH', 'MATCH_WATER']) {
  const list = diff(B[name], A[name], [], []);
  console.log(`  ${name}: [`);
  for (const [p, v] of list) console.log(`    [${JSON.stringify(p)}, ${v === 'DELETE' ? 'DELETE' : JSON.stringify(v)}],`);
  console.log('  ],');
}
