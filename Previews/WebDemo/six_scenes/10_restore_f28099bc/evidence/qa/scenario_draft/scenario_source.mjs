// Readable source of s56-hero-wave-on-tilt-coin-pickup.json (the harness's `evaluate` steps are strings).
// Regenerate the JSON after editing:  node scenario_source.mjs > s56-hero-wave-on-tilt-coin-pickup.json
// Each function below must be self-contained: it is serialised with Function.prototype.toString and run in
// the page by the harness's runSteps() as `page.evaluate("(<fn>)()")`. A thrown error fails the scenario.

// Step 1, right after page.goto() resolves (the `load` event, while main() is still loading models).
async function freezeLoopAndInstallProbe() {
  /* Determinism: the harness has no addInitScript hook, so window.__BW_TEST__ cannot be set before the bundle runs.
     Instead stop the game's own requestAnimationFrame loop now (only game.js uses rAF under this ?s3= list), so the
     intro never advances on wall-clock time; from here on the game moves only through window.__bw.step() at 1/30 s. */
  const realRAF = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = () => 0;
  await new Promise((r) => realRAF(() => realRAF(r)));   // the frame already queued runs once and cannot re-queue
  await window.__bw.ready;
  const s0 = window.__bw.state();
  // INTUNNEL.clock (3.0) plus main()'s single step(1/60) = 3.017: proves no wall-clock intro frame ran.
  if (s0.phase !== 'intro' || s0.time !== 3.017) {
    throw new Error(`[s56 probe] not a clean Tap to Start: phase=${s0.phase} time=${s0.time} (expected intro at 3.017). ` +
      'The game loop advanced on wall-clock time before the freeze, so this run is not deterministic.');
  }
  if (!window.__bwS56 || !window.__bwS56Report) throw new Error('[s56 probe] s56 is not active (window.__bwS56 missing): the ?s3= list must include level1 and s56');
  // HUD CSS animations/transitions (coin pill pop, hand hover, panel fades) run on wall-clock time: snap them to their end state.
  const css = document.createElement('style');
  css.id = 'vr-freeze-css';
  css.textContent = '*,*::before,*::after{animation:none!important;transition:none!important}';
  document.head.appendChild(css);

  const d = window.__bw.debug(), m = d.mascotState, TR = d.track;
  if (!m || !m.root || !m.tilt || !TR || typeof TR.map !== 'function') {
    throw new Error('[s56 probe] window.__bw.debug() no longer exposes mascotState.root/tilt and track.map: update the probe');
  }
  const v = new m.root.position.constructor();   // a THREE.Vector3 without needing the THREE global
  const P = window.__s56Probe = {
    realRAF, frames: 0, inWater: 0, tiltOff: 0, tiltMin: Infinity, tiltMax: -Infinity, maxRootErr: 0, exempt: 0,
    pickups: [], tunnelEnd: d.layout.tunnelEnd, target: null,
  };
  // One fixed 1/30 s game step, then the fix's invariants:
  //  (a) mascot.root.position is exactly TR.map(m.x, m.yAbs, m.z): the physics position on the track, the point every
  //      pickup measures from (game.js updateCollectibles). game.js:1052 is its only writer; nothing after it in step()
  //      changes x / yAbs / z except resetRun() (restart / lap), whose frames are exempt.
  //  (b) in the water, m.tilt.position.y carries the drawn s56 wave + sink offset (s56_tunnel.js heroOffset).
  P.tick = () => {
    const a = window.__bw.state();
    window.__bw.step(1 / 30, 30);
    const s = window.__bw.state();
    P.frames++;
    if ((s.restarts ?? 0) !== (a.restarts ?? 0) || s.laps !== a.laps || s.phase !== a.phase) {
      P.exempt++;
    } else {
      TR.map(m.x, m.yAbs, m.z, v);
      const p = m.root.position;
      const err = Math.max(Math.abs(v.x - p.x), Math.abs(v.y - p.y), Math.abs(v.z - p.z));
      if (err > P.maxRootErr) P.maxRootErr = err;
      if (err > 1e-6) {
        throw new Error(`[s56 probe] mascot.root.position left the track at frame ${P.frames} (z=${s.z}): ` +
          `|root - TR.map(x, yAbs, z)| = ${err.toFixed(4)} m (root.y=${p.y.toFixed(4)}, track y=${v.y.toFixed(4)}). ` +
          'A drawn offset is on m.root again; pickups measure from m.root.position, so it must go on m.tilt (s56_tunnel.js heroOffset).');
      }
    }
    if (s.phase === 'running' && !m.air) {
      const ty = m.tilt.position.y;
      P.inWater++;
      if (Math.abs(ty) > 1e-3) P.tiltOff++;
      if (ty < P.tiltMin) P.tiltMin = ty;
      if (ty > P.tiltMax) P.tiltMax = ty;
    }
    if (s.coins > a.coins) P.pickups.push({ frame: P.frames, z: s.z, coins: s.coins });
    return s;
  };
  P.assertTiltCarriesWave = () => {
    if (P.inWater < 30) throw new Error(`[s56 probe] only ${P.inWater} in-water running frames: too few to judge m.tilt`);
    const share = P.tiltOff / P.inWater, range = P.tiltMax - P.tiltMin;
    if (share < 0.8) {
      throw new Error(`[s56 probe] m.tilt.position.y is ~0 on ${((1 - share) * 100).toFixed(0)}% of in-water frames: ` +
        'the s56 wave/sink offset is no longer drawn on m.tilt (s56_tunnel.js heroOffset)');
    }
    if (range < 0.002) {
      throw new Error(`[s56 probe] m.tilt.position.y is constant (range ${range.toFixed(4)} m): he no longer rides the s56 waves`);
    }
  };
  // Draw once, then let the compositor present that frame before the harness's screenshot.
  P.present = () => { window.__bw.render(); return new Promise((r) => realRAF(() => realRAF(r))); };
}

// Step 2: Tap to Start, then run with no steering to the first coin pickup past the drum.
async function runToFirstCoinPastDrum() {
  /* Keyframes are taken past L.tunnelEnd + 4 m: the s56 camera is 3 m behind him, so the drum's objects placed with the
     unseeded load-time Math.random (game.js buildBubbles, buildCollectibles, buildSocks) are behind the lens. Level 1's
     coins ahead are built with a private seeded random. */
  const P = window.__s56Probe;
  // Seed the game's Math.random at the start line (mulberry32, the generator WebDemo/tools/trace.cjs installs), so the
  // spray and sparkle particles after Tap to Start are identical every run.
  let a = 0x5e56;
  Math.random = () => {
    a = (a + 0x6D2B79F5) >>> 0; let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  window.__bw.tap();
  if (window.__bw.state().phase !== 'running') throw new Error('[s56 probe] Tap to Start did not start the run');
  const cap = 60 * 30;   // 60 s of game time
  for (let i = 0; i < cap; i++) {
    const s = P.tick();
    if (s.phase !== 'running') throw new Error(`[s56 probe] the run left 'running' (phase=${s.phase}, z=${s.z}) before a coin pickup past the drum`);
    const last = P.pickups[P.pickups.length - 1];
    if (last && last.frame === P.frames && s.z > P.tunnelEnd + 4) {
      P.target = last;
      P.assertTiltCarriesWave();
      await P.present();
      return;
    }
  }
  throw new Error(`[s56 probe] no coin pickup past the drum (z > ${(P.tunnelEnd + 4).toFixed(1)}) within 60 s of game time ` +
    `with no steering (pickups so far: ${JSON.stringify(P.pickups)}). Pickups measure from m.root.position: check the fix, or the course changed.`);
}

// Step 3: half a second later, the coin has flown into the HUD and the counter shows it.
async function settleAfterPickup() {
  const P = window.__s56Probe;
  for (let i = 0; i < 15; i++) {
    const s = P.tick();
    if (s.phase !== 'running') throw new Error(`[s56 probe] the run left 'running' (phase=${s.phase}) right after the pickup`);
  }
  if (window.__bw.state().coins < P.target.coins) throw new Error('[s56 probe] the coin counter went back down after the pickup');
  P.assertTiltCarriesWave();
  await P.present();
}

const evaluate = (fn) => ({ action: 'evaluate', script: `(${fn.toString()})()` });

const scenario = {
  name: 's56-hero-wave-on-tilt-coin-pickup',
  path: '/index.html?s3=intunnel,structmatch,level1,tripo1,scene07,six,tripo3,s56',
  threshold: 0.025,
  steps: [
    evaluate(freezeLoopAndInstallProbe),
    evaluate(runToFirstCoinPastDrum),
    { action: 'keyframe', name: 'first-coin-pickup-past-drum' },
    evaluate(settleAfterPickup),
    { action: 'keyframe', name: 'coin-counter-after-pickup' },
  ],
};

process.stdout.write(JSON.stringify(scenario, null, 2) + '\n');
