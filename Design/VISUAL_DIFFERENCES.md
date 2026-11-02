# Remaining visual differences: all 12 screens

**Status: no screen is visually complete.** All 12 approved screens now exist in Unity, each with its framing, interface and gameplay moment. None has been rendered in Unity yet: this environment has no Unity editor.

The next milestone is the first real capture: **Bubble Wash → 2. Capture & Compare All 12 Screens**. It writes approved | Unity | overlay images for every screen to `Previews/Captures/`.

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
| 2 | Waterfalls pour from the towers on both sides. | Not in the castle model. | **Added this round:** waterfall ribbons (`Waterfall.shader`) with splash particles at both side towers. The spout positions are estimated from the model and need checking in the capture. |
| 3 | The water is a raised, glowing, crystalline water slide that narrows and rises into the portal, with gold slide edges. | **Implemented this round:** a raised, crowned, flowing path with gold rims and spill foam. It is still procedural, and its shape is not yet compared with the approved image. | Check in the first capture. Meshy water-slide pieces can replace the gold rims and edge geometry. |
| 4 | Large blue/pink spinning brush with a gold mechanism on the left. | `PLACEHOLDER_SpinningBrush_Entrance_L` is a simple procedural wheel. | Meshy brush model. |
| 5 | Gold pipes/rails and machinery on the right. | `PLACEHOLDER_WaterSlideRails` are plain gold cylinders. | Meshy slide/rail pieces. |
| 6 | The golden figure on the water at the portal (a duck or similar toy). | `PLACEHOLDER_RubberDuck`. | Please confirm what this character is, and supply the model. |
| 7 | Pink fluffy mascot seen from behind, with a dense fur texture and little side arms. | `PLACEHOLDER_PinkMascot` uses a procedural fur shader. | Meshy mascot GLB. |
| 8 | The portal interior is a deep-blue swirling vortex with a purple inner rim and coins. | The Meshy drum is visible through the portal. | **Added this round:** a soft additive swirl, ring and sparkle layer (`DrumSwirl.shader`) inside both drums, over the Meshy drum without replacing it. Its strength (`_Intensity` 0.35) is to be tuned in the capture. |
| 9 | Heavy white foam and bubbles around the mascot and along the slide edges. | Shader foam + splash particles; strength not yet tuned against the approved image. | Tune after the first Unity capture. |
| 10 | Icon art and fonts: hand pointer, arrows and the arched "Into the washing machine!" text. | Generated stand-in sprites. The Fredoka Bold font is close to the approved rounded font but not identical, and the text isn't arched. | Final UI art, or higher-resolution approved screens. |
| 11 | Overall pastel glow and saturation. | Stronger bloom and saturation are set this round, but not yet compared with a capture. | Tune with Bubble Wash Look after the first capture. |

## Screen 4: Rescue 5 lost socks

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The drum reads as bright blue concentric swirl rings with sparkles, a strong vortex and a luminous centre. | We render the Meshy drum (blue perforated walls, gold portholes, paddle fins) with restored saturation and glowing ring stripes, plus glow rings, drum lights and end glow. | **Added this round:** an animated swirl/sparkle layer inside the drum. Tune its strength in the capture. The end glow now shrinks as the camera nears it, so the run can continue out of the drum. |
| 2 | Big fluffy pink-and-white brushes with blue centres on both walls, cropped by the screen edges. | `PLACEHOLDER_SpinningBrush_Drum_*`, wall-mounted at the approved positions. | Meshy brush model. |
| 3 | Large glossy gold coins with embossed paw prints, tilted toward the viewer. | Placeholder coin with a paw texture, spinning. | Meshy coin. Optional tilt toward the camera. |
| 4 | Cute white sock buddy with purple stripes, blue toe and a face. | `PLACEHOLDER_LostSock_*`. | Meshy sock model. |
| 5 | Faceted purple gem. | Placeholder gem. | Meshy gem. |
| 6 | Huge white foam splash across the bottom of the screen. | Wake/burst particles and shader foam; not yet tuned. | Tune after the Unity capture. |
| 7 | Gold ring band arcing across the top behind the mission panel. | Should come from the drum porthole ahead. | Verify in the Unity capture. |
| 8 | Power-up icons (pink bubble blaster, yellow propeller) are detailed glossy art in the approved. | Generated stand-in sprites. | Final UI art. |

## Screen 1: Home

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The approved logo is detailed lettering on a cloud plate under a crown. | Generated stand-in logo sprite. | Final logo artwork (see MISSING_ASSETS.md). |
| 2 | The mascot faces the player with its friends (water drop, star ball, socks) around the castle. | Placeholder mascot and friends, placed by measured screen position. | Meshy mascot and friend models. |
| 3 | A wider castle with waterfalls. | Meshy castle proportions; waterfalls are now effects. | As Screen 3 #1. |
| 4 | Bottom-bar icons and the green Play button. | Generated sprites, positioned from measurements of the approved screen. | Final icon art. |

## Screen 2: Select Level

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The Level 1 card picture is painted art of the castle. | A live 3D render of the Meshy castle. | Final thumbnail art if the live picture doesn't match closely enough. |
| 2 | The Level 2–4 rows have their own pictures. | Tinted copies of the Level 1 picture. | Three level thumbnails. |
| 3 | The three grey stars, padlocks and back arrow are detailed art. | Generated sprites. | Final icon art. |

## Screens 5–6: Jump to Side Paths! / Drop Down to Lower Paths!

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | Ornate wooden and gold water slides, layered at several heights, with waterfalls between them. | Placeholder troughs (box + gold rims + supports) with real water on top, plus end waterfalls. | Meshy water-slide pieces (MISSING_ASSETS #7). |
| 2 | Castle buildings, a tub of coins and big brushes around the slides. | Placeholder coin tub and two giant brushes over the second drum. No buildings yet. | Meshy props. The kingdom castle model (#10) could also be reused here. |
| 3 | Camera height and distance. | Fitted from the mascot's size and position on the approved crops (about 8.5 m behind and 3 m up). | Check in the capture. |
| 4 | Banner art and the pink arrow. | Generated sprites, at the measured position and tilt. | Final UI art. |

## Screens 7–9: Watch out! / Collect / Avoid Enemies!

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | Huge fluffy brushes on both sides. | `PLACEHOLDER_SpinningBrush_Hazard_*`: the procedural wheel, facing the player and reaching into the outer lanes. | Meshy brush (#2). |
| 2 | On Screen 8 the mascot's face fills the left half, with a large gem, coins and a sock around it. | The camera swings in front of the mascot for 2 s. The items are placed for that framing. Screen 9's enemies come on the open stretch just after the drum, so the player can see them once the camera is back behind. | Check in the capture; Meshy mascot, gem, coin and sock. |
| 3 | The dark enemy ball with angry eyes. | `PLACEHOLDER_GrimeBall_Enemy` (fur ball + eyes + brows). | Meshy enemy (#6). |
| 4 | The drum interior glows more and is more colourful. | The same Meshy drum as Screen 4, plus the swirl layer. | Tune in the capture. |

## Screens 10–11: Enter the Bubble Kingdom! / Rescue Progress

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | Pastel floating islands with tall waterfalls, trees and many castles. | Placeholder islands (rock + grass + trees) with waterfall ribbons. The Meshy castle is reused on two islands. | Meshy islands and kingdom castles (#9, #10). |
| 2 | Screen 11's stone archway with towers behind the mascot. | The Meshy castle portal reused as the kingdom gate. | Kingdom gate model (#10). |
| 3 | Cheering sock friends, a gem and coins around the mascot. | Placeholder socks on foam pads, positioned for the Screen 11 camera. | Meshy sock (#3). |

## Screen 12: Level Complete!

| # | Difference | Cause | Fix |
|---|---|---|---|
| 1 | The mascot is winking. | The placeholder has no wink animation. | Meshy mascot with separate eyes, or a wink blend shape. |
| 2 | Sock friends and an overflowing treasure chest, with pink foam clouds. | Placeholder friends, chest, coin piles and foam clouds, positioned for the Screen 12 camera. | Meshy chest (#8) and sock (#3). |
| 3 | Stars, title plate, checklist, rewards panel and Next Level button. | Built from the approved layout (measured and scaled to the shared 537 px reference) with generated sprites. | Final UI art. |

## Not yet testable here

These need Unity, or a device, on your machine:
- frame rate;
- final shader appearance;
- particle density;
- touch feel.

The capture tool, the validator and the on-device FPS overlay produce the evidence.
