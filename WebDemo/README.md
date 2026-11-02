# Bubble Wash Kingdom: browser demo of Screen 3

A separate, playable browser version of approved Screen 3, built from the Meshy models and the Unity project's layout. The Unity project is not changed by it.

**Play:** https://claude.ai/artifact/F27yfpA3Fp5a1mJWbDCTkb (private until shared from its Share menu). Or serve this folder (`python3 -m http.server`) and open `index.html`.
- That page was published from the account that ran the 2 November evening session. The earlier link, https://claude.ai/artifact/Nq5qbxwgsk5jKEMnX6ESKC, belongs to the other account and shows the version from before that session.

**Recordings:** [`Previews/WebDemo/`](../Previews/WebDemo): the gameplay video, a side-view debug video proving the height changes, both side by side, and a height chart.

**Controls:**
- Tap to start.
- Swipe left or right (or ←/→) to steer.
- Swipe up (or ↑) to jump.
- Tap (or Space) to spin.

## What it is

- **Models:** `models/` holds web-sized copies of the Meshy GLBs (castle, drum, mascot, washing roller, gem, lost sock), made by `tools/optimize.mjs`. They keep the colour texture as JPEG and quantised geometry. The roller, gem and sock are simplified because they are small on screen.
- **Layout:** `models/layout.json` comes from the Unity Level 1 layout via `tools/export_layout.py`, so the castle, drum, rollers, waterfalls and approved-screen props sit where the Unity scene puts them.
- **Code:** `src/` holds three.js code ported from the Unity project: water heights, foam and wake, lanes, jump, the Screen 3 and Screen 4 camera framings, and the HUD layout.

## The ride: a real 3D path (`src/track.js`)

Everything on the run is placed in track coordinates and carried onto a 3D path by its moving frame. That covers the water, the Meshy drum, the mascot, the camera, coins, gems, socks, rollers and bubbles.
- **Outside, in front of the castle:** the path is the straight line of the Unity layout, so the Tap to Start view keeps the approved framing. The raised slide dips 0.5 m below its start, climbs to a crest and drops into the portal.
- **Inside the washing machine:** the drum is bent along the path, each Meshy segment vertex by vertex. The tube climbs about 1.5 m at up to 15° while turning left, crests, then drops about 2 m at up to 19° while turning right, and levels out.
- **Banking:** in each turn the water banks by the angle a current takes at cruise speed (about 16°). The mascot leans with it, and the camera banks three quarters as much.
- **Speed:** the mascot speeds up on drops and slows on climbs. At the bottom of a drop the water throws a splash.

The mascot's height in the world changes by about 2.6 m over one run. The side-view recording below shows it with the camera fixed in height.

## Look, compared with approved Screen 3

- **Water:** rich electric blue and turquoise, with the approved slide's fine caustic network flowing with the current. The spill beside the raised slide is deeper and darker, so the slide stands out.
  - Foam is kept to where water churns: thin lace at the slide edges and drum walls, the mascot's V wake and bow ring (stronger when fast or dropping), steep drops and splash rings.
  - Spray is small, clear cyan droplets, so the mascot's body stays visible.
- **Mascot fur:** lighting blends the bristles' own normals (strand detail) with the body's sphere (round volume). It adds glowing pink fur tips around the silhouette, a deeper magenta toward the water, and droplets twinkling in the fur.
  - Its width is 0.41 of the screen at Tap to Start, the same as the approved image.
  - Its face is clear and unobstructed when it glances back.
- **Castle colours:** the Meshy castle's texture is orange and hot pink. A shader grade (`CASTLE_GRADE` in `src/shaders.js`) turns its orange to warm gold and its soft pinks to lavender, and leaves strong pink accents (the crest banner) and the blue glass alone. A light lavender haze softens it with distance, and the sky behind it is pale lavender, as in the approved image.
- **Washing brushes:** the Meshy roller's bristles are recoloured in code (`brushGrade`) as on approved Screens 3 and 4: round blue tufts in rings toward the hub, then a white band, then a pink fringe. The big Screen 3 brush now sits where the approved one is, low at the left edge beside the slide.
- **Tunnel:** the drum is lighter, and it mists to a bright pale core with distance, like the approved vortex. Its far end opens onto a glowing portal of light (white, pale cyan, lavender and pink, with soft rays) instead of plain sky.
- **Rails:** chunky gold rails ride the slide's hills on both sides: a thick top rail, a lower rail, and rounded gold balusters with blue gem studs.
- **Scenery:** the slide is narrower, about three lanes wide, as in the approved image.
  - Gold-and-blue machinery: turning gears with blue hubs, blue barrel tanks banded in gold, gold pipes and portholes.
  - Big iridescent bubbles at the lower corners and on the right.
  - Coins glow gold even when backlit in the portal. Their face texture now loads before the first frame, so they never show dark at Tap to Start.
- **Camera:** it follows the mascot's own path frame, smoothed over about a quarter second. The mascot keeps the approved place on screen (lower middle) while the tube climbs, crests, drops and banks. On the straight slide this is the same view as before, so the Tap to Start framing is unchanged.
- **Lost socks:** five Meshy socks float through the drum. Touching one rescues it, and the approved Screen 4 panel "Rescue 5 lost socks" counts them.

## Debug views

- `index.html?touches` draws each finger trail and the gesture it was read as (for example "Swipe ← · lane middle → left").
- `index.html?side` shows the run from the side, with the camera fixed in height.
  - It hides the castle and the drum, and draws the water profile, the tube's roof and floor, a height grid, and the mascot's real path as pink dots.
  - It reads out the tube's pitch and bank and the mascot's speed.

## Build and test

- Build after editing `src/`: `npm install && node build.mjs`. That writes `game.bundle.js`, `index.html`, `artifact.html` and `artifact-models/`.
- To regenerate a web model, install the optimiser's packages first: `npm install --no-save @gltf-transform/core@4 @gltf-transform/extensions@4 @gltf-transform/functions@4 meshoptimizer sharp`. Then run `node tools/optimize.mjs <in.glb> <out.glb> [texture size] [ratio] [max error]`.
- `tools/record.cjs` records real gameplay in Chromium.
  - Every input is a real pointer gesture on the game stage (press, drag, release).
  - The same script can be recorded in the player's view (`game`, with the touch overlay) or the side view (`side`). `dry` prints the state at each input.
- `tools/playtest.cjs` takes screenshots at fixed beats.
- Chromium here has no GPU, so WebGL is rendered in software and the game is stepped at 30 frames per game-second.

Not tested: real phones and their frame rate. The page lowers its own quality if the frame rate stays low.
