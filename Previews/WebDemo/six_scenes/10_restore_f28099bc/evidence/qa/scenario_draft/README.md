# Draft scenario: s56-hero-wave-on-tilt-coin-pickup

Protects the accepted fix in `WebDemo/src/s56_tunnel.js` `heroOffset()` (lines 456-466): the hero's drawn s56 wave + sink
offset goes on `m.tilt`, never on `m.root`, because pickups measure from `mascot.root.position` (game.js `updateCollectibles`).

**Status: DRAFT, not yet validated in a browser.** `deno` is not installed here, and the brief ruled out browser runs
(the CPU is shared). Checks done: the JSON type-checks against `test/visual/lib/types.ts` (`tsc` with `satisfies Scenario`; an
injected bad key fails as it should), every `evaluate` script parses, and the probe logic was run in Node against a mock
`window.__bw`. In that run the fixed behaviour passes, an offset on root throws, and a missing offset on tilt throws.

## Files
- `s56-hero-wave-on-tilt-coin-pickup.json`: the scenario. Its file name must equal its `name`, because `replay.ts` looks it up by file name.
- `scenario_source.mjs`: readable source of the three `evaluate` scripts. Edit it, then regenerate with
  `node scenario_source.mjs > s56-hero-wave-on-tilt-coin-pickup.json`.

## What it does and checks
1. Right after `load`: stops the game's own `requestAnimationFrame` loop, waits for `window.__bw.ready`, and asserts a clean
   Tap to Start (`phase` intro, clock exactly 3.017, meaning no wall-clock frame ran). Then it turns off HUD CSS animations
   and installs the probe.
2. Seeds `Math.random` at the start line (mulberry32, as `WebDemo/tools/trace.cjs` does), calls `__bw.tap()`, and steps
   fixed 1/30 s frames with no steering. On every frame it asserts:
   - `mascot.root.position === TR.map(m.x, m.yAbs, m.z)` within 1e-6 m. The root is the physics position on the track, with
     no drawn offset. game.js:1052 is its only writer; only restart/lap frames are exempt.
   - in the water, `m.tilt.position.y` is non-zero on at least 80 % of frames and varies by at least 2 mm, so the wave and
     sink offset rides on tilt.
   - a real coin pickup happens (`state.coins` rises). The capture point is the first pickup past `tunnelEnd + 4 m`. If none
     happens within 60 s of game time, the step throws.
3. Keyframes: `first-coin-pickup-past-drum` (the pickup frame), then `coin-counter-after-pickup` (0.5 s later; the
   assertions run again).

Any failed assertion throws inside `evaluate`, so the replay or run fails loudly with a `[s56 probe] ...` message.

Why the keyframes are past the drum: `buildBubbles`, `buildCollectibles` and `buildSocks` use the unseeded `Math.random` at
load, and the harness has no init-script hook to seed it. The s56 camera is 3 m behind him, so beyond `tunnelEnd + 4` those
objects are out of view.

`threshold` is 0.025. The stepping is deterministic (frozen loop, pinned clock, seeded particles after the start, frozen
CSS), so the expected noise is about 0. The small margin above 0.02 covers load-time randomness I have not audited. This is
reasoned, not measured. A 0.1 m shift of the hero is only about 0.4 % of the pixels, so the probe, not the pixel diff, is
the guard for the fix itself. `memoryThreshold` and `device` are left unset: this is not a memory fix or a touch finding.

## Install and validate (one capture at a time)
```bash
cp /home/user/bubblegame_lanes/_evidence/qa/scenario_draft/s56-hero-wave-on-tilt-coin-pickup.json \
   /home/user/bubblegame/test/visual/scenarios/
# serve WebDemo/ as the web root (the scenario path is /index.html?s3=...)
python3 -m http.server 3000 --directory /home/user/bubblegame/WebDemo &
# deno is required (not installed here); then once: deno run -A npm:playwright install chromium
cd /home/user/bubblegame
flock /tmp/bw_browser.lock deno task replay -- s56-hero-wave-on-tilt-coin-pickup   # run it TWICE
```
Writes PNGs to `.parallax/replays/`. To accept the draft:
- Both runs pass with no `[s56 probe]` error.
- The two runs' PNGs match under pixelmatch at 0.1 at well below 1 % (if so, `threshold` may be tightened to about 2x the
  measured noise).
- The pickup frame shows the coin popping toward him on the s56 water.
- Negative control: temporarily make `heroOffset` write `m.root.position.y`. The replay must throw "left the track". Then revert.

Do not install it if a run throws before the pickup (for example, he is knocked out with no steering) or if the two runs
differ by more than about 1 %. Find the unseeded source instead of loosening `threshold`. After that, the suite picks it up
on its next `deno task visual:run` (a separate process, not run here).

Harness note (optional, outside this draft): an `initScript` field on `Scenario` (`page.addInitScript` before `goto`) would let
this scenario set `window.__BW_TEST__` and seed `Math.random` from the first instruction, as the project's own tools do. It
would make the drum keyframes deterministic too. `window.__renderer__` is not exposed by the game, so `waitForFirstRender` and
memory checks are unusable here.
