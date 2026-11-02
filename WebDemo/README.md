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

- **Models:** `models/` holds web-sized copies of the Meshy GLBs (castle, drum, mascot, washing roller, gem, lost sock, duck helper, side machinery, and the four entrance decorations: water tower, gear wheel, golden pipe, crown trim), made by `tools/optimize.mjs`.
  - Most keep only the colour texture as JPEG, with quantised geometry.
  - The four entrance decorations also keep their metal/roughness and normal maps (`pbr` mode).
  - The roller, gem, sock and decorations are simplified, within a small error, because they are small on screen.
- **Layout:** `models/layout.json` comes from the Unity Level 1 layout via `tools/export_layout.py`, so the castle, drum, rollers, waterfalls and approved-screen props sit where the Unity scene puts them.
- **Code:** `src/` holds three.js code ported from the Unity project: water heights, foam and wake, lanes, jump, the Screen 3 and Screen 4 camera framings, and the HUD layout.
  - `src/decor.js` places and animates the four Meshy entrance decorations.
  - `src/scenery.js` builds the rest of the washing machinery from simple shapes in code.
  - `src/helper.js` places and animates the Meshy duck helper.

## The ride: a real 3D path (`src/track.js`)

Everything on the run is placed in track coordinates and carried onto a 3D path by its moving frame. That covers the water, the Meshy drum, the mascot, the camera, coins, gems, socks, rollers and bubbles.
- **Outside, in front of the castle:** the path is the straight line of the Unity layout, so the Tap to Start view keeps the approved framing. The raised slide dips 0.5 m below its start, climbs to a crest and drops into the portal.
- **Inside the washing machine:** the drum is bent along the path, each Meshy segment vertex by vertex. The tube climbs about 1.5 m at up to 15° while turning left, crests, then drops about 2 m at up to 19° while turning right, and levels out.
- **Banking:** in each turn the water banks by the angle a current takes at cruise speed (about 16°). The mascot leans with it, and the camera banks three quarters as much.
- **Speed:** the mascot speeds up on drops and slows on climbs. At the bottom of a drop the water throws a splash.

The mascot's height in the world changes by about 2.6 m over one run. The side-view recording below shows it with the camera fixed in height.

## Look, compared with approved Screen 3

- **Framing:** measured against the approved image at the same 1:2 portrait size (538 × 1076). A longer lens (40°) from further back keeps the mascot's size and place, and the portal arch grows to the approved size.
- **Lighting and materials:** reflections come from bright soft studio panels over a deeper sky, so the gold and blue read round and glossy, and a cool rim light from behind outlines the machinery and the helper. The Meshy castle, drum and brushes get a soft key light and a bright rim on top of their baked colour, so they are no longer flat.
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
- **Duck helper** (`src/helper.js`): your Meshy duck in its pink float (`models/duck.glb`, the Balanced ColorSafe copy, unchanged). It waits just ahead of the mascot in front of the portal, facing it, sized and placed against the approved screen. It bobs and rocks on the water, with a thin foam ring, a few droplets and slow ripples around the float. When the run starts it rides ahead into the washing machine, leading the way. Its purple and blue goggles are softened in the shader (`DUCK_GOGGLES_SOFTEN`), because the approved helper is small and has none.
- **Washing brushes:** the Meshy roller, recoloured in code (`brushGrade`) as on approved Screens 3 and 4: round blue tufts in rings toward the hub, then a white band, then a pink fringe. One (1.8 m) turns end-on high on the left, above the Meshy side machinery, which now holds the approved lower-left spot. A second one shows its pink fringe on the right, above the gold wheel. Both spin during play.
- **Castle colours:** the Meshy castle's texture is orange and hot pink. A shader grade (`CASTLE_GRADE` in `src/shaders.js`) turns its orange to warm gold and its soft pinks to lavender, and leaves strong pink accents (the crest banner) and the blue glass alone. A light lavender haze softens it with distance, and the sky behind it is pale lavender.
- **Tunnel:** the drum is lighter, and it mists to a bright pale core with distance, like the approved vortex. Glowing rings run all the way down it every 2.3 m, in gold, pink, cyan and lavender. Each ring is set with bulbs and pulses gently. Gold gears with blue and teal hubs turn on the upper walls. The far end opens onto a glowing portal of light instead of plain sky.
- **Tutorial panels:** glossy jelly panels as in the approved screen: deep royal blue, a sheen across the top, a pale-cyan rim with a soft glow and a darker bottom edge. Bold outlined text, bigger arrows and a bigger hand.
- **Mascot fur:** lighting blends the bristles' own normals (strand detail) with the body's sphere (round volume). Each spike is lit on one side and shaded on the other, with pale pink tips catching the light, glowing pink fur tips around the silhouette, a deeper magenta toward the water, and droplets twinkling in the fur. Its face is clear when it glances back.
- **Bubbles and coins:** big iridescent bubbles at the lower corners and on the right. Coins glow gold even when backlit in the portal, from the first frame.
- **Camera:** in the washing machine it follows the mascot's own path frame, smoothed over about a quarter second, so the mascot keeps its place on screen while the tube climbs, crests, drops and banks.
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
- Comparing with the approved Screen 3, all at an exact 1:2 portrait stage (538 × 1076):
  - `tools/start_frame.cjs` renders the Tap to Start frame.
  - `tools/beats.cjs` plays the recording's input script and screenshots chosen moments, much faster than a full recording.
  - `tools/try_settings.cjs` tries camera framings, helper placements or machinery placements without a rebuild. For the machinery it prints its distance to the lanes.
  - In the page, `window.__bw.setDecor(kind, i, props)` moves a Meshy decoration (`towers`, `gears`, `pipes` or `crowns`, fields as in `DECOR` in `src/decor.js`) and returns each kind's distance to the lanes. `window.__bw.pick(x, y)` gives the world point under a stage pixel, and `window.__bw.project([x, y, z])` gives the stage pixel of a world point.
  - `python3 -I tools/compare_approved.py` puts the approved screen beside your frames, and `tools/overlay_approved.py` adds a 50 % blend.
- Chromium here has no GPU, so WebGL is rendered in software and the game is stepped at 30 frames per game-second.

Not tested: real phones and their frame rate. The page lowers its own quality if the frame rate stays low.
