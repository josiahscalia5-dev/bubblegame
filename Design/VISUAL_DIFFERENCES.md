# Remaining visual differences: Screens 3 and 4

**Status: neither screen is visually complete.** This list comes from a WebGL layout pre-check, which uses the same models, placement, camera and HUD layout as Unity ([`Previews/PreCheck_WebGL`](../Previews/PreCheck_WebGL)), and from a direct study of the approved crops.

It must be re-checked against the Unity capture: **Bubble Wash → 2. Capture & Compare**. Materials, lighting, water and fur look different in Unity than in the WebGL pre-check.

Precision note: the approved screens are about 270 × 540 px crops of one board. Positions measured from them are accurate to roughly ±2–3 % of the screen.

## What already lines up (pre-check)

- Camera perspective for both screens:
  - the portal ring's centre and size in Screen 3;
  - the drum's vanishing point in Screen 4;
  - the mascot's position and size on screen in both.
- HUD layout for both screens:
  - top counters (5 Full, 1,280, 36), settings gear (Screen 3) and pause button (Screen 4);
  - the "Let's go!" banner and the "Swipe Left or Right / Tap to Start" panel;
  - the "Rescue 5 lost socks 0/5" panel and the Bubble Blast / Turbo Spin buttons with their "3" badges.
- Prop positions: brushes, big bubbles, coins, gem, sock buddy and duck are placed at the approved screen positions.

## Screen 3: Let's go! Into the washing machine

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The approved castle facade is wider. Towers and pillars run off both screen edges, and the pink crest sign sits above the banner at about 10 % height. In the Meshy castle the towers sit closer to the portal and the crest is hidden behind the banner (about 20 % height). | Meshy castle proportions differ from the painting. The camera is kept on the portal/mascot framing. | Needs a wider castle model, or extra side-tower pieces from Meshy. The camera should not be moved off the approved composition. |
| 2 | Waterfalls pour from the towers on both sides. | Not in the castle model. | Waterfall FX (particles + scrolling water mesh). Next step. |
| 3 | The water is a raised, glowing, crystalline water slide that narrows and rises into the portal, with gold slide edges. Ours is a flat electric-blue channel in a wide moat. | No water-slide model yet. | Meshy water-slide pieces (requested). The water shader then applies to the slide surface. |
| 4 | Large blue/pink spinning brush with a gold mechanism on the left. | `PLACEHOLDER_SpinningBrush_Entrance_L` is a simple procedural wheel. | Meshy brush model. |
| 5 | Gold pipes/rails and machinery on the right. | `PLACEHOLDER_WaterSlideRails` are plain gold cylinders. | Meshy slide/rail pieces. |
| 6 | The golden figure on the water at the portal (a duck or similar toy). | `PLACEHOLDER_RubberDuck`. | Please confirm what this character is, and supply the model. |
| 7 | Pink fluffy mascot seen from behind, with a dense fur texture and little side arms. | `PLACEHOLDER_PinkMascot` uses a procedural fur shader. | Meshy mascot GLB. |
| 8 | The portal interior is a deep-blue swirling vortex with a purple inner rim and coins. | The Meshy drum is visible through the portal; the swirl/vortex look is not reproduced. | Check in the Unity capture, then add a swirl overlay inside the drum if needed. |
| 9 | Heavy white foam and bubbles around the mascot and along the slide edges. | Shader foam + splash particles; strength not yet tuned against the approved image. | Tune after the first Unity capture. |
| 10 | Icon art and fonts: hand pointer, arrows and the arched "Into the washing machine!" text. | Generated stand-in sprites. The Fredoka Bold font is close to the approved rounded font but not identical, and the text isn't arched. | Final UI art, or higher-resolution approved screens. |
| 11 | Overall pastel glow and saturation. | URP bloom and colour grading haven't been tuned against a real capture yet. | Tune after the first Unity capture. |

## Screen 4: Rescue 5 lost socks

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The drum reads as bright blue concentric swirl rings with sparkles, a strong vortex and a luminous centre. | We render the Meshy drum: blue perforated walls, gold portholes, paddle fins, plus our glow rings, drum lights and end glow. In the pre-check it looked paler and less saturated than the approved image. | Check the Unity capture first. Then tune the drum lighting and add an animated swirl/sparkle layer, without replacing the Meshy drum. |
| 2 | Big fluffy pink-and-white brushes with blue centres on both walls, cropped by the screen edges. | `PLACEHOLDER_SpinningBrush_Drum_*`, wall-mounted at the approved positions. | Meshy brush model. |
| 3 | Large glossy gold coins with embossed paw prints, tilted toward the viewer. | Placeholder coin with a paw texture, spinning. | Meshy coin. Optional tilt toward the camera. |
| 4 | Cute white sock buddy with purple stripes, blue toe and a face. | `PLACEHOLDER_LostSock_*`. | Meshy sock model. |
| 5 | Faceted purple gem. | Placeholder gem. | Meshy gem. |
| 6 | Huge white foam splash across the bottom of the screen. | Wake/burst particles and shader foam; not yet tuned. | Tune after the Unity capture. |
| 7 | Gold ring band arcing across the top behind the mission panel. | Should come from the drum porthole ahead. | Verify in the Unity capture. |
| 8 | Power-up icons (pink bubble blaster, yellow propeller) are detailed glossy art in the approved. | Generated stand-in sprites. | Final UI art. |

## Not yet testable here

These need Unity, or a device, on your machine:
- frame rate;
- final shader appearance;
- particle density;
- touch feel.

The capture tool, the validator and the on-device FPS overlay produce the evidence.
