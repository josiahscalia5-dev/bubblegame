# Remaining visual differences: Screens 3 and 4

**Status: neither screen is visually complete.** The next milestone is the first real Unity capture:
**Bubble Wash → 2. Capture & Compare Screens 3 and 4**. It writes approved | Unity | overlay images to `Previews/Captures/`.

Corrections will be made against those captures, largest differences first. Earlier browser layout pre-checks have been removed from the repository; only Unity renders count from here on.

Precision note: the approved screens are about 270 × 540 px crops of one board. Positions measured from them are accurate to roughly ±2–3 % of the screen.

## Changes made for the first Unity test (still to be verified in the capture)

- **Water: intense electric blue instead of pale.** Saturated deep and shallow blues and a lower white emission:
  - detailed white foam: lace pattern plus streaks flowing with the current;
  - electric caustic shimmer and glints;
  - colourful reflections: lavender/pink sky, gold near the horizon;
  - the glowing drum rings reflected as bands on the water.
- **Screen 3 water path is now raised and flowing.**
  - It is a crowned channel 0.6 m above the surrounding moat, with water spilling over its gold-rimmed edges into foam.
  - The current carries the foam toward the portal, and the mascot rides the raised surface.
- **Meshy castle and drum no longer washed out.**
  - They are rendered from their own baked textures, with saturation restored and only part of the scene light added.
  - The white and gold ring stripes in the drum texture glow.
  - The fog now starts at 40 m, so it no longer pales the drum interior.
- **Brighter, thicker glowing rings** at the drum joints, cooler blue drum lights, and stronger bloom and saturation.
- All of these can be tuned live on the **Bubble Wash Look** component.

## Screen 3: Let's go! Into the washing machine

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The approved castle facade is wider. Towers and pillars run off both screen edges, and the pink crest sign sits above the banner at about 10 % height. In the Meshy castle the towers sit closer to the portal and the crest is hidden behind the banner (about 20 % height). | Meshy castle proportions differ from the painting. The camera is kept on the portal/mascot framing. | Needs a wider castle model, or extra side-tower pieces from Meshy. The camera should not be moved off the approved composition. |
| 2 | Waterfalls pour from the towers on both sides. | Not in the castle model. | Waterfall FX (particles + scrolling water mesh). Next step. |
| 3 | The water is a raised, glowing, crystalline water slide that narrows and rises into the portal, with gold slide edges. | **Implemented this round:** a raised, crowned, flowing path with gold rims and spill foam. It is still procedural, and its shape is not yet compared with the approved image. | Check in the first capture. Meshy water-slide pieces can replace the gold rims and edge geometry. |
| 4 | Large blue/pink spinning brush with a gold mechanism on the left. | `PLACEHOLDER_SpinningBrush_Entrance_L` is a simple procedural wheel. | Meshy brush model. |
| 5 | Gold pipes/rails and machinery on the right. | `PLACEHOLDER_WaterSlideRails` are plain gold cylinders. | Meshy slide/rail pieces. |
| 6 | The golden figure on the water at the portal (a duck or similar toy). | `PLACEHOLDER_RubberDuck`. | Please confirm what this character is, and supply the model. |
| 7 | Pink fluffy mascot seen from behind, with a dense fur texture and little side arms. | `PLACEHOLDER_PinkMascot` uses a procedural fur shader. | Meshy mascot GLB. |
| 8 | The portal interior is a deep-blue swirling vortex with a purple inner rim and coins. | The Meshy drum is visible through the portal; the swirl/vortex look is not reproduced. | Check in the Unity capture, then add a swirl overlay inside the drum if needed. |
| 9 | Heavy white foam and bubbles around the mascot and along the slide edges. | Shader foam + splash particles; strength not yet tuned against the approved image. | Tune after the first Unity capture. |
| 10 | Icon art and fonts: hand pointer, arrows and the arched "Into the washing machine!" text. | Generated stand-in sprites. The Fredoka Bold font is close to the approved rounded font but not identical, and the text isn't arched. | Final UI art, or higher-resolution approved screens. |
| 11 | Overall pastel glow and saturation. | Stronger bloom and saturation are set this round, but not yet compared with a capture. | Tune with Bubble Wash Look after the first capture. |

## Screen 4: Rescue 5 lost socks

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The drum reads as bright blue concentric swirl rings with sparkles, a strong vortex and a luminous centre. | We render the Meshy drum (blue perforated walls, gold portholes, paddle fins) with restored saturation and glowing ring stripes, plus glow rings, drum lights and end glow. The swirl/vortex animation is not reproduced. | Check the Unity capture first. Then add an animated swirl/sparkle layer if still needed, without replacing the Meshy drum. |
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
