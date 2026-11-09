// (session 8da775c4) identity probe: the raw WebGL canvas (no DOM HUD) of the seeded game at fixed moments, with no steering: advance 0.5 s,
// (tap, advance T s for each T of env TS, default "3,12"). Saves <out>/<label>_T<t>.png and returns their md5 sums.
const fs = require('fs'), path = require('path'), crypto = require('crypto');
module.exports = async ({ page, out }) => {
  const TS = (process.env.TS || '3,12').split(',').map(Number), label = process.env.LABEL || 'canvas', res = {};
  const grab = async (name) => { const url = await page.evaluate(() => { window.__bw.render(); return window.__bw.debug().renderer.domElement.toDataURL('image/png'); });
    const buf = Buffer.from(url.split(',')[1], 'base64'); fs.writeFileSync(path.join(out, name), buf); return crypto.createHash('md5').update(buf).digest('hex'); };
  await page.evaluate(() => window.__bw.advance(0.5));
  res.start = await grab(`${label}_start.png`);
  await page.evaluate(() => window.__bw.tap());
  let t0 = 0;
  for (const t of TS) { await page.evaluate((d) => window.__bw.advance(d), t - t0); t0 = t; res['T' + t] = await grab(`${label}_T${t}.png`); res['u' + t] = (await page.evaluate(() => window.__bw.state())).z; }
  return res;
};
