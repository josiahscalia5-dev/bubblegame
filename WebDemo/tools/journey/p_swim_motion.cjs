// (session 8da775c4) swim7 motion frames: a swim burst (swipe up) and a dive (swipe down) on open water, frames at fixed moments after each.
module.exports = async ({ page, shot }) => {
  const stepTo = (u) => page.evaluate((u) => { const B = window.__bw; let g = 0; while (B.state().z < u && B.state().phase === 'running' && g++ < 6000) B.step(1 / 30, 30); return B.state(); }, u);
  const adv = (s) => page.evaluate((s) => window.__bw.step(s, 60), s);
  await page.evaluate(() => { window.__bw.advance(0.5); window.__bw.tap(); });
  const res = {};
  for (const [name, dir, u, times] of [['burst', 'up', 93, [0, 0.12, 0.3, 0.5, 0.75, 1.0]], ['dive', 'down', 99, [0, 0.12, 0.3, 0.45, 0.65, 0.9]], ['steer', 'right', 104, [0, 0.08, 0.16, 0.26, 0.4, 0.6]]]) {
    await stepTo(u); let t0 = 0; res[name] = [];
    for (const t of times) { if (t === 0) { await shot(`${name}_0_before.jpg`); await page.evaluate((d) => window.__bw.swipe(d), dir); continue; }
      await adv(t - t0); t0 = t; const s = await page.evaluate(() => { const s = window.__bw.state(); return { u: s.z, x: s.x, speed: s.speed, swim: s.swim }; }); res[name].push([t, s]); await shot(`${name}_${t.toFixed(2)}.jpg`); }
  }
  return res;
};
