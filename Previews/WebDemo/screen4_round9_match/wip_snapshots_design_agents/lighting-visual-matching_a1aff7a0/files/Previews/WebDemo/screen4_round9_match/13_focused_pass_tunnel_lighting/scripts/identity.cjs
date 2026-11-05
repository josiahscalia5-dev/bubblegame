// Focused pass (Tunnel & Lighting): pixel-identity captures. For the normal game, ?s3=splash and ?s3=liquid, the raw 3D canvas
// (tools/models/game_eval.cjs SHOT, seed 7, 538 x 1076) at Tap to Start and 2.85 s, from the baseline build and the new one,
// one browser at a time. Usage: node identity.cjs <abs baseline WebDemo> <abs new WebDemo> <out-dir>
// (compare with identity_compare.py)
const { execFileSync } = require('child_process');
const fs = require('fs'), path = require('path');
const [BASE, NEW, OUT] = process.argv.slice(2);
fs.mkdirSync(OUT, { recursive: true });
for (const [label, s3] of [['normal', ''], ['splash', 'splash'], ['liquid', 'liquid']]) for (const [tag, root] of [['base', BASE], ['new', NEW]]) {
  const env = { ...process.env, S3: s3, TIMES: '2.85', EVAL: 'd.mascotState.z', SHOT: path.join(OUT, `${label}_${tag}_%.png`) };
  const out = execFileSync('node', [path.join(NEW, 'tools/models/game_eval.cjs'), root], { env, encoding: 'utf8', maxBuffer: 1 << 26 });
  console.log(label, tag, out.trim().split('\n').filter((l) => l.startsWith('T ')).join(' '));
}
