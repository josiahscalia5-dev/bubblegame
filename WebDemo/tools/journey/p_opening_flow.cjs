// (session 8da775c4) the real flow, in real time: Home -> PLAY -> Laundry Toss -> START -> the opening -> the hand-over -> Tap to Start -> swimming.
// Run with NOTEST=1 (the real-time loop). Saves a frame at each stage and returns the states. S3 must include home, six2 and s56. Software WebGL plays the opening slower than real time.
module.exports = async ({ page, out }) => {
  const path = require('path'), res = { stages: [] };
  const shot = (n) => page.screenshot({ path: path.join(out, n), type: 'jpeg', quality: 85, timeout: 240000 });
  const o3 = () => page.evaluate(() => (window.__bwO3D ? window.__bwO3D.state() : null));
  const clickText = async (re) => { const el = page.locator('button, [role=button], .btn, div').filter({ hasText: re }).last(); try { await el.click({ timeout: 4000 }); return true; } catch (e) { return false; } };
  await shot('flow_0_home.jpg'); res.stages.push(['home', await o3()]);
  res.play = await clickText(/^\s*PLAY/i); await page.waitForTimeout(1500);
  await shot('flow_1_laundry_toss.jpg'); res.stages.push(['laundry toss', await o3()]);
  res.start = await clickText(/^\s*Start/i);
  let last = null, t0 = Date.now(), saved = {};
  while (Date.now() - t0 < 240000) { const s = await o3(); if (!s) break; last = s; 
    for (const [k, v] of [['2_loads', 2.4], ['3_oops', 5.0], ['4_wash', 7.9], ['5_spin', 9.0], ['6_tunnel', 9.6]]) if (!saved[k] && s.seq >= v) { saved[k] = s.seq; await shot(`flow_${k}.jpg`); }
    if (s.seq > 11.2) break; await page.waitForTimeout(250); }
  res.lastOpening = last; res.saved = saved;
  await page.waitForTimeout(2500);
  res.afterOpening = await page.evaluate(() => { const s = window.__bw.state(); return { phase: s.phase, z: s.z, lane: s.lane }; });
  await shot('flow_7_tap_to_start.jpg');
  await page.evaluate(() => window.__bw.tap()); await page.waitForTimeout(3000);
  await page.evaluate(() => window.__bw.swipe('left')); await page.waitForTimeout(700); await page.evaluate(() => window.__bw.swipe('up')); await page.waitForTimeout(1500);
  res.playing = await page.evaluate(() => { const s = window.__bw.state(); return { phase: s.phase, z: s.z, lane: s.lane, speed: s.speed, coins: s.coins, swim: s.swim }; });
  await shot('flow_8_swimming.jpg');
  return res;
};
