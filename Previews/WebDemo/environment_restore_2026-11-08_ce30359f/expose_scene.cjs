// Points Parallax's persistent Chromium (CDP :9223) at a game URL and exposes the live scene the way the parallax scripts expect
// (window.scene, window.__renderer__), from outside the game: the game's code is not changed.
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.connectOverCDP('http://localhost:9223');
  const p = b.contexts()[0].pages()[0];
  await p.setViewportSize({ width: 412, height: 915 });
  await p.goto(process.argv[2], { waitUntil: 'load', timeout: 120000 });
  await p.waitForFunction(() => { try { return !!(window.__bw && window.__bw.debug && window.__bw.debug().scene); } catch (e) { return false; } }, null, { timeout: 180000, polling: 500 });
  const r = await p.evaluate(() => { const d = window.__bw.debug(); window.scene = d.scene; window.__renderer__ = d.renderer; window.camera = d.camera; return { url: location.href, children: d.scene.children.length }; });
  console.log(JSON.stringify(r)); await b.close();
})().catch(e => { console.error(e.message); process.exit(1); });
