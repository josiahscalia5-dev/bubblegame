// Focused pass (Tunnel & Lighting): capture several ?s3=match tune variants one after another (one browser at a time) with
// tools/screen4/liquid_shots.cjs. Usage: node variants.cjs <abs WebDemo> <out-dir> <variants.json> [TIMES]
//   variants.json: { "label": { ...tune for window.__BW_S3_TUNE__... }, ... }
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const [ROOT, OUT, FILE, TIMES = '3.0'] = process.argv.slice(2);
const V = JSON.parse(fs.readFileSync(FILE, 'utf8'));
for (const [label, tune] of Object.entries(V)) {
  const env = { ...process.env, S3: process.env.S3 || 'match', TIMES, DPR: process.env.DPR || '1.5', LABEL: label };
  const out = execFileSync('node', [path.join(ROOT, 'tools/screen4/liquid_shots.cjs'), ROOT, OUT, JSON.stringify(tune)], { env, encoding: 'utf8', maxBuffer: 1 << 26 });
  console.log(label, out.trim().split('\n').slice(-1)[0]);
}
