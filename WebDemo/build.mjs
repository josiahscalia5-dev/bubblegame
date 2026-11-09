// Builds the browser demo: bundles three.js and the game into game.bundle.js, and writes
// index.html (a standalone page around src/page.html). Run: npm install && node build.mjs
import { build } from 'esbuild';
import fs from 'node:fs';

await build({
  entryPoints: ['src/game.js'], bundle: true, format: 'esm', minify: true, target: 'es2020',
  outfile: 'game.bundle.js', legalComments: 'eof', logLevel: 'warning',
});
const page = fs.readFileSync('src/page.html', 'utf8');
// (9 November 2026, session 6ddc157f) the page asks for the bundle with its content hash, so a browser never runs a stale cached bundle
const bundleVer = (await import('node:crypto')).createHash('md5').update(fs.readFileSync('game.bundle.js')).digest('hex').slice(0, 8);
fs.writeFileSync('index.html', `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
</head>
<body>
${page.replace('<script type="module" src="game.bundle.js"></script>', `<script type="module" src="game.bundle.js?v=${bundleVer}"></script>`)}
</body>
</html>
`);
// The published preview cannot serve .glb files, so its page loads the same models wrapped as JSON.
fs.writeFileSync('artifact.html', page.replace('<script type="module" src="game.bundle.js"></script>',
  '<script>window.__BW_MODEL_FORMAT__ = "json";</script>\n<script type="module" src="game.bundle.js"></script>'));
// Models for republishing the preview page, which cannot serve .glb: the same bytes as base64 JSON.
fs.mkdirSync('artifact-models', { recursive: true });
for (const f of fs.readdirSync('models').filter((n) => n.endsWith('.glb'))) {
  const bytes = fs.readFileSync('models/' + f);
  fs.writeFileSync(`artifact-models/${f}.json`, JSON.stringify({ format: 'glb-base64', name: f, bytes: bytes.length, data: bytes.toString('base64') }));
}
console.log('built game.bundle.js (' + (fs.statSync('game.bundle.js').size / 1024).toFixed(0) + ' KB), index.html, artifact.html and artifact-models/');
