# Bubble Wash Kingdom: browser demo of Screen 3

A separate, playable browser version of approved Screen 3, built from the Meshy models and the Unity project's layout. The Unity project is not changed by it.

**Play:** https://claude.ai/artifact/1zbgcsX6AF7HTNJMesKmiX (the version with the four Meshy entrance decorations, private until shared from its Share menu). Or serve this folder (`python3 -m http.server`) and open `index.html`.
- Older versions: https://claude.ai/artifact/F27yfpA3Fp5a1mJWbDCTkb (the 2 November evening version) and https://claude.ai/artifact/Nq5qbxwgsk5jKEMnX6ESKC (the afternoon version). They were published from the user's other account. Each page is private to the account that published it.

**Recordings:** [`Previews/WebDemo/`](../Previews/WebDemo): the gameplay video, a side-view debug video proving the height changes, both side by side, and a height chart.

**Controls:**
- Tap to start.
- Swipe left or right (or ←/→) to steer.
- Swipe up (or ↑) to jump.
- Tap (or Space) to spin.

## What it is

- **Models:** `models/` holds web-sized copies of the Meshy GLBs (castle, drum, mascot, washing roller, gem, lost sock, side machinery, and the four entrance decorations: water tower, gear wheel, golden pipe, crown trim), made by `tools/optimize.mjs`.
  - Most keep only the colour texture as JPEG, with quantised geometry.
  - The four entrance decorations also keep their metal/roughness and normal maps (`pbr` mode).
  - `models/liner.glb` (the Meshy tunnel interior liner) is kept but not loaded: see the tunnel notes below.
  - The roller, gem, sock and decorations are simplified, within a small error, because they are small on screen.
- **Layout:** `models/layout.json` comes from the Unity Level 1 layout via `tools/export_layout.py`, so the castle, drum, rollers, waterfalls and approved-screen props sit where the Unity scene puts them.
- **Code:** `src/` holds three.js code ported from the Unity project: water heights, foam and wake, lanes, jump, the Screen 3 and Screen 4 camera framings, and the HUD layout.
  - `src/decor.js` places and animates the four Meshy entrance decorations.
  - `src/scenery.js` builds the rest of the washing machinery from simple shapes in code.
  - `src/liner.js` (not used at present) fitted the Meshy tunnel interior liner inside the drum.

## Screen 3 opening look (test version, 3 November; `src/opening.js`)

A separate cosmetic layer that brings the Tap to Start view closer to the approved Screen 3, waiting for the user's approval. Full write-up, checklist, asset inventory and test results: [`Design/SCREEN3_OPENING_MATCH.md`](../Design/SCREEN3_OPENING_MATCH.md); evidence in [`Previews/WebDemo/opening_match/`](../Previews/WebDemo/opening_match).
- **Parts:** the gold washer-door rim, violet seal and cyan rings at the portal; foam, splashes and bubbles around the mascot and on the slide; glossy soap bubbles; brush staging (the extra roller beside the portal hidden, the right roller turned to show its fluffy side, the side machinery larger); glassy flume walls; the mascot's presentation; an opening-only grade.
- **Gameplay is untouched.** The layer is built with its own random-number generator, so the game's random numbers (coin bobbing, splashes) are drawn exactly as before. A seeded run is identical in every frame.
- **The tunnel is untouched.** The layer fades out before the camera reaches the portal. With the mascot presentation off, tunnel frames are pixel-identical to the original.
- `index.html?classic` shows the original opening. `window.__BW_OPENING_OFF__ = ['foam', ...]` (set before load) leaves out single parts.

## The ride: a real 3D path (`src/track.js`)

Everything on the run is placed in track coordinates and carried onto a 3D path by its moving frame. That covers the water, the Meshy drum, the mascot, the camera, coins, gems, socks, rollers and bubbles.
- **Outside, in front of the castle:** the path is the straight line of the Unity layout, so the Tap to Start view keeps the approved framing. The raised slide dips 0.5 m below its start, climbs to a crest and drops into the portal.
- **Inside the washing machine:** the drum is bent along the path, each Meshy segment vertex by vertex. The tube climbs about 1.5 m at up to 15° while turning left, crests, then drops about 2 m at up to 19° while turning right, and levels out.
- **Banking:** in each turn the water banks by the angle a current takes at cruise speed (about 16°). The mascot leans with it, and the camera banks three quarters as much.
- **Speed:** the mascot speeds up on drops and slows on climbs. At the bottom of a drop the water throws a splash.

The mascot's height in the world changes by about 2.6 m over one run. The side-view recording below shows it with the camera fixed in height.

## Look, compared with approved Screen 3

- **Framing:** measured against the approved image at the same 1:2 portrait size (538 × 1076). A longer lens (40°) from further back keeps the mascot's size and place, and the portal arch grows to the approved size.
- **Lighting and materials:** reflections come from bright soft studio panels over a deeper sky, so the gold and blue read round and glossy, and a cool rim light from behind outlines the machinery. The Meshy castle, drum and brushes get a soft key light and a bright rim on top of their baked colour, so they are no longer flat.
- **Slide:** the approved slide is narrow, only about 1.6 mascots wide at the mascot. It is now 2.2 m wide (was 2.9 m), with the three lanes 0.70 m apart (were 0.85 m). It is a flume: a pearly lavender wall along each edge, capped by a thick gold rail and a row of chunky gold segments set with blue gem studs.
- **Water:** rich electric blue and turquoise, deeper in the troughs and lighter on the crests, with a soft, wavy caustic shimmer that flows with the current. Around the mascot the water rises in a mound (higher in front, where the body pushes the current), with raised ridges trailing behind in a V. This is visual only: the mascot's ride height is unchanged. Its lines are warped by noise and fade in and out in patches, so there is no polygon grid. Round sparkles twinkle over it.
  - Foam forms only where water churns: a foam collar around the mascot (as in the approved image), thin lace at the slide edges and drum walls, a short wake, splash rings and steep drops.
  - Spray is small, clear droplets thrown up at the bow and in the wake, so the mascot stays visible. While it waits at Tap to Start, little bubbles rise around it, inside a full foam collar. The collar is lighter while running.
- **Giant side machinery (Meshy):** your blue-and-gold washing machinery (`models/machinery.glb`, the Medium copy, unchanged) stands at the lower left of the slide, as in the approved image. Its pink, white and blue bristle wheel and pink star face the camera, with the gold housing, the pump and the piping on the outer side.
  - Its nearest point to the lanes is 1.18 m from the slide's middle, and the mascot's body reaches 1.10 m, so it never blocks the ride.
  - It keeps its own colour, metal, roughness and normal maps, reflects the scene's studio lighting, and gets a little glow from its colours so the bristles stay bright without glare on the gold.
  - It is one combined mesh, so it stands still. The spinning brush is the separate Meshy roller.
- **Meshy entrance decor** (`src/decor.js`, your four models from `Design/MeshyDeliveries/EntranceDecor/`, web copies of the Balanced GLBs). Each model is loaded once, and every copy shares its geometry, textures and material. All of them keep their own colour, metal/roughness and normal maps under the scene's studio reflections.
  - **Glowing water towers:** one on each side of the castle, where the approved image has its tall gold-and-blue columns.
    - Their domes are near the top of the screen, their glass chambers beside the "Let's go!" banner, and their pumps behind the brushes.
    - Both portholes face the camera and the pipe stubs face the slide.
    - Each stands on a gold plinth rising from the water, so it never floats as the camera moves.
    - The fluid is animated in the shader (`TOWER_FLUID`): the cyan glass texels glow electric blue, with brighter currents swirling upward and bubbles rising. A soft light pulses in each chamber.
  - **Golden pipe elbows:** one on each tower's pipe stub, raised on a short gold riser so it clears the collar. They are turned 45° outward, so each shows in three-quarter view. Water pours from each into the moat, with foam where it lands.
  - **Blue-and-gold gear wheels:** six at the portal mouth beside the slide and a larger one high on the left. Each whole wheel turns about its own centred axle.
  - **Crown and curved trim:** the keystone on the gold band at the top of the portal arch. It sits on the arch face (measured at z = 2.3), so it stays attached as the camera moves in. At Tap to Start the "Let's go!" banner covers it, and it shows once the run starts.
  - **Clear of the lanes:** the nearest point of any decoration, up to the mascot's highest jump, is 1.25 m from the slide's middle (the gears). The mascot's body reaches 1.10 m. `window.__bw.state().decorClear` reports this per kind.
- **Washing machinery** (`src/scenery.js`, built in code, no model files):
  - A huge gold washing wheel on the lower right, seen almost edge-on: a thick gold tyre with a toothed band, blue drum face and gold spokes, glowing bulbs and pink fluffy trim. It turns.
  - A cream-and-gold housing with a blue porthole and pink fluff under the left brush.
  - Curved gold pipes banded in blue along both lower sides, running into the base of each tower.
  - The code-built machinery towers, the six portal gears and the navy gear high on the left were removed when your Meshy towers and gears arrived.
- **No helper:** at your request the yellow duck helper has been removed (its model, code, splashes and foam ring). The pink mascot rides alone.
- **Washing brushes:** the Meshy roller, recoloured in code (`brushGrade`) as on approved Screens 3 and 4: round blue tufts in rings toward the hub, then a white band, then a pink fringe. One (1.8 m) turns end-on high on the left, above the Meshy side machinery, which now holds the approved lower-left spot. A second one shows its pink fringe on the right, above the gold wheel. Both spin during play.
- **Castle colours:** the Meshy castle's texture is orange and hot pink. A shader grade (`CASTLE_GRADE` in `src/shaders.js`) turns its orange to warm gold and its soft pinks to lavender, and leaves strong pink accents (the crest banner) and the blue glass alone. A light lavender haze softens it with distance, and the sky behind it is pale lavender.
- **Tunnel entrance:** the Meshy drum's mouth is unchanged (lighter, with its gold and cyan light ring), so the castle portal and the entrance look as before.
- **Tunnel interior:** the Meshy drum over its full length, lighter and misting to a bright pale core with distance, like the approved vortex. Its far end opens onto a glowing portal of light. Built in code on top of it, carried onto the 3D path so they climb, drop and bank with the tube (`src/scenery.js`):
  - **Glowing cyan rings** every 2.3 m, in electric cyan and a lighter cyan. Each is set with 28 bulbs and has a soft cyan halo.
  - **Glowing pink light panels** in gold frames: seven around the upper walls half-way between the rings, clear of the water and the gears. Each has pale light bars. They are drawn as two instanced meshes.
  - Rings and panels brighten in a slow wave that runs down the tunnel. Only they are bright enough to bloom; the drum keeps its colours.
  - **Gold gears** with blue and teal hubs turn on the upper walls.
  - **Clearance:** the drum's nearest surface (its ribs) is 2.1 m from the tube's axis, and the panels sit at 2.3 m. The mascot's body reaches 1.98 m at most, even jumping repeatedly in every lane, and the camera 0.70 m. `window.__bw.clearanceTrace(seconds)` measures this every frame.
- **The Meshy tunnel liner (not used):** your interior liner was tried on 2–3 November and then disabled at your request. The cracks in it are holes in the delivered model itself: it is 4,426 separate pieces that came apart when it was simplified. `Design/MeshyDeliveries/TunnelInterior/README.md` has the diagnosis.
  - Its files stay in the repository: `models/liner.glb`, `src/liner.js` and `tools/repair_liner.mjs`, which stitches the cracks and fixes the winding.
  - Commit `46c034c` holds the game with the liner in place.
- **Tutorial panels:** glossy jelly panels as in the approved screen: deep royal blue, a sheen across the top, a pale-cyan rim with a soft glow and a darker bottom edge. Bold outlined text, bigger arrows and a bigger hand. After Tap to Start, the "Let's go!" banner and the Tap to Start panel slide down and fade out over 0.45 s, timed by the game itself, so they are gone however the frames are stepped.
- **Mascot fur:** lighting blends the bristles' own normals (strand detail) with the body's sphere (round volume). Each spike is lit on one side and shaded on the other, with pale pink tips catching the light, glowing pink fur tips around the silhouette, a deeper magenta toward the water, and droplets twinkling in the fur. Its face is clear when it glances back.
- **Bubbles and coins:** big iridescent bubbles at the lower corners and on the right. Coins glow gold even when backlit in the portal, from the first frame.
- **Camera:** in the washing machine it follows the mascot's own path frame, smoothed over about a quarter second, so the mascot keeps its place on screen while the tube climbs, crests, drops and banks.
- **Lost socks:** five Meshy socks float through the drum. Touching one rescues it, and the approved Screen 4 panel "Rescue 5 lost socks" counts them.

## Debug views

- `index.html?touches` draws each finger trail and the gesture it was read as (for example "Swipe ← · lane middle → left").
- `index.html?side` shows the run from the side, with the camera fixed in height.
  - It hides the castle, the drum and the tunnel's lights, and draws the water profile, the tube's roof and floor, a height grid, and the mascot's real path as pink dots.
  - It reads out the tube's pitch and bank and the mascot's speed.

## Build and test

- Build after editing `src/`: `npm install && node build.mjs`. That writes `game.bundle.js`, `index.html`, `artifact.html` and `artifact-models/`.
- To regenerate a web model, install the optimiser's packages first: `npm install --no-save @gltf-transform/core@4 @gltf-transform/extensions@4 @gltf-transform/functions@4 meshoptimizer sharp`. Then run `node tools/optimize.mjs <in.glb> <out.glb> [texture size] [ratio] [max error]`.
- `tools/record.cjs` records real gameplay in Chromium.
  - Every input is a real pointer gesture on the game stage (press, drag, release).
  - The same script can be recorded in the player's view (`game`, with the touch overlay) or the side view (`side`). `dry` prints the state at each input.
- `tools/playtest.cjs` takes screenshots at fixed beats.
- Comparing with the approved Screen 3, all at an exact 1:2 portrait stage (538 × 1076):
  - `tools/start_frame.cjs` renders the Tap to Start frame.
  - `tools/beats.cjs` plays the recording's input script and screenshots chosen moments, much faster than a full recording.
  - `tools/try_settings.cjs` tries camera framings or machinery placements without a rebuild. For the machinery it prints its distance to the lanes.
  - In the page, `window.__bw.setDecor(kind, i, props)` moves a Meshy decoration (`towers`, `gears`, `pipes` or `crowns`, fields as in `DECOR` in `src/decor.js`) and returns each kind's distance to the lanes. `window.__bw.pick(x, y)` gives the world point under a stage pixel, and `window.__bw.project([x, y, z])` gives the stage pixel of a world point.
  - `python3 -I tools/compare_approved.py` puts the approved screen beside your frames, and `tools/overlay_approved.py` adds a 50 % blend.
- `tools/journey_frames.py` puts the approved screen beside a recording's opening frame and makes a sheet of twelve labelled frames from Tap to Start into the tunnel.
- `tools/mesh_check.mjs <file.glb>` checks a model's geometry before it is used: holes, non-manifold edges, winding and separate pieces. The Meshy gear has 63 open edges; the tunnel liner as delivered had 91,501.
- `tools/seeded_run.cjs <demo-dir> <seed>` plays the recording's input script with `Math.random` seeded, and prints where the run ends and what it collected. Run it on two builds with the same seed to prove a visual change did not alter gameplay. Unseeded runs can differ by a coin, because coins bob with a random phase.
- Checking that a visual change left the game alone:
  - `tools/trace.cjs <demo-dir> <out.json> [seed]` stores the state every frame of a seeded run; `python3 -I tools/trace_diff.py a.json b.json` compares two builds frame by frame.
  - `tools/seeded_shots.cjs <demo-dir> <out-dir> <seed> <-|classic|parts> t...` takes seeded screenshots with the page's CSS animations frozen; `python3 -I tools/pxdiff.py dirA dirB t...` counts the pixels that differ.
  - `tools/phone_check.cjs` renders Tap to Start at a phone viewport and prints the HUD boxes.
  - `tools/opening_evidence.py` builds the comparison sheets in `Previews/WebDemo/opening_match/`.
- Chromium here has no GPU, so WebGL is rendered in software and the game is stepped at 30 frames per game-second.

Not tested: real phones and their frame rate. The page lowers its own quality if the frame rate stays low.
