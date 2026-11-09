const { chromium } = require('/opt/node-tools/node_modules/playwright'); const fs = require('fs'), path = require('path');
const [HTML, OUT] = process.argv.slice(2);
(async () => { const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] }); const p = await (await b.newContext({ viewport: { width: 432, height: 768 } })).newPage();
  const errs = []; p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto('file://' + HTML); await p.waitForFunction(() => window.__ready, null, { timeout: 60000 });
  for (const [i, prox, n] of [[0, true, 'c1'], [1, true, 'c2'], [0, false, 'c1_bare'], [2, false, 'c4'], [3, false, 'c3']]) { const d = await p.evaluate(([a, b]) => window.__render(a, b), [i, prox]); fs.writeFileSync(path.join(OUT, n + '.png'), Buffer.from(d.split(',')[1], 'base64')); }
  console.log('errors', errs); await b.close(); })();
