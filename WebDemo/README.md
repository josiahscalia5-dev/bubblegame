# Bubble Wash Kingdom: browser demo of Screen 3

A separate, playable browser version of approved Screen 3, built from the Meshy models and the Unity project's layout. The Unity project is not changed by it.

**Play:** https://claude.ai/artifact/1zbgcsX6AF7HTNJMesKmiX. Or serve this folder (`python3 -m http.server`) and open `index.html`.

**Controls:**
- Tap to start.
- Swipe left or right (or ←/→) to steer.
- Swipe up (or ↑) to jump.
- Tap (or Space) to spin.

## What it is

- **Models:** `models/` holds web-sized copies of the Meshy GLBs (castle, drum, mascot, washing roller, gem), made by `tools/optimize.mjs`. They keep the colour texture as JPEG and quantised geometry. The roller and gem are simplified because they are small on screen.
- **Layout:** `models/layout.json` comes from the Unity Level 1 layout via `tools/export_layout.py`, so the castle, drum, rollers, waterfalls and approved-screen props sit where the Unity scene puts them.
- **Code:** `src/` holds three.js code ported from the Unity project: water heights, foam and wake, lanes, jump, the Screen 3 and Screen 4 camera framings, and the HUD layout.
- **Additions not in the Unity scene:** the slide dips and climbs into the portal, the drum water rolls in swells, the camera tilts with the slope, and the mascot glances back on the Tap to Start screen.

Build after editing `src/`: `npm install && node build.mjs`. That writes `game.bundle.js`, `index.html` and `artifact.html`.

## Tested

`tools/playtest.cjs` and `tools/record.cjs` play it in Chromium. Chromium here has no GPU, so WebGL is rendered in software and the game is stepped at 30 frames per game-second.

The recorded run starts the game, then:
- steers left and right, leaning about 20° into each turn;
- rides downhill and uphill, with the body pitching about −6° to +9° and the camera tilting with the slope;
- jumps;
- collects coins and a gem, with the HUD updating;
- loops back to the slide.

It logged no console errors. Not tested: real phones and their frame rate. The page lowers its own quality if the frame rate stays low.
