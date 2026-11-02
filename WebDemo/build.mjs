// Builds the browser demo: bundles three.js and the game into game.bundle.js, and writes
// index.html (a standalone page around src/page.html). Run: npm install && node build.mjs
import { build } from 'esbuild';
import fs from 'node:fs';

await build({
  entryPoints: ['src/game.js'], bundle: true, format: 'esm', minify: true, target: 'es2020',
  outfile: 'game.bundle.js', legalComments: 'eof', logLevel: 'warning',
});
const page = fs.readFileSync('src/page.html', 'utf8');
fs.writeFileSync('index.html', `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
</head>
<body>
${page}
</body>
</html>
`);
// The published preview cannot serve .glb files, so its page loads the same models wrapped as JSON.
fs.writeFileSync('artifact.html', page.replace('<script type="module" src="game.bundle.js"></script>',
  '<script>window.__BW_MODEL_FORMAT__ = "json";</script>\n<script type="module" src="game.bundle.js"></script>'));
console.log('built game.bundle.js (' + (fs.statSync('game.bundle.js').size / 1024).toFixed(0) + ' KB), index.html and artifact.html');
