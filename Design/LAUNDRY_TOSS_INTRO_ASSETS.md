# Laundry Toss introduction: assets we have, and what is genuinely missing

This was prepared on 4 November 2026, before any intro work starts, as you asked. Nothing for the intro has been built yet.

The two scenes:

- **Scene 1, Laundry Toss:** a cartoon girl accidentally tosses the pink character into the crowned washing machine, with the laundry.
- **Scene 2, Inside the Wash:** the character swims and tumbles through swirling blue water, floating towels, socks, bubbles and foam.

They would then lead into the existing approved opening (Tap to Start), and from there into the playable tunnel. The existing opening is not replaced.

## First: the reference pictures are not in this session

You mentioned showing the intro reference pictures earlier. They are not in:

- this session's uploads;
- the repository (`Design/`, `Design/ReferencePacks/`);
- the saved chat histories.

They were probably shared in another conversation. Please upload them again, ideally as full-size PNG or JPG files.

## What we already have, and can reuse

| Need | Existing asset | Notes |
|---|---|---|
| The pink character | `WebDemo/models/mascot.glb` | Used exactly as it is: no backpack, no redesign. It has no skeleton, so it can tumble, bob, spin and squash as a whole, as it does in the game. |
| Socks in the wash | `WebDemo/models/sock.glb` | The game's rescue sock. |
| Bubbles and foam | Code: the soap-film bubble shader (`screen3_models.js`), the particle splashes and foam (`game.js`), the water shaders (`shaders.js`) | Ready to use. |
| Swirling blue water | Code: the water and vortex shaders (`shaders.js`, `tunnel_s4.js`) | Can be reused for the underwater swirl. |
| The crown | `WebDemo/models/crown.glb` | For the crowned washing machine. |
| Washer door ring and drum | `WebDemo/models/s3_entrance.glb`, `WebDemo/models/drum.glb` | The door, its glass ring and the inside of the drum. |
| The castle-style machine | `WebDemo/models/s3_castle.glb` | The Bubble Wash Kingdom machine as seen in the approved opening and Home Screen. |

## Genuinely missing (new models needed)

| # | Asset | Why it is needed | How it could be made |
|---|---|---|---|
| 1 | **The cartoon girl**, a 3D character with a skeleton (rig) | The throw needs arms and a body that move. Nothing like her exists in the project. | Generate the model with Meshy or Tripo from your reference picture, then rig and animate it with their auto-rigging (Meshy *Animate* or Tripo auto-rig). |
| 2 | **Her toss animation**: pick up the basket, throw, react | One short clip of about 2 to 3 seconds. | From the auto-rig tool's animation library (a throw), or Blender if it is installed. **Blender is not installed here, and I won't install it without your permission.** |
| 3 | **A household-size crowned washing machine**: a front-loader cabinet with the door open | Scene 1 happens in a laundry room. Today's machine is the castle façade, which is a building, not an appliance. | Either one new Meshy or Tripo model of a crowned front-loader, or a code-built cabinet with the existing door ring (`s3_entrance.glb`) and crown (`crown.glb`). Please tell me which look you want: from your reference picture or the castle style. |
| 4 | **Laundry room set**: floor, wall, perhaps a shelf | The background of Scene 1. | Either a painted backdrop placed in 3D (the way the approved opening is done now), or a small 3D room. A painted backdrop is quicker and closer to your art. Either way it needs your reference picture. |
| 5 | **Laundry basket** with clothes | She tosses the laundry and the character together. | One small Meshy or Tripo model. |

## Can be made in code (no new model files)

- **Towels and shirts** floating and tumbling in the wash: soft cloth shapes with pastel colours and a simple fabric texture.
- **The swirl, bubbles, foam and water light** of Scene 2.
- **Camera moves and the cut** from Scene 1 to Scene 2, and the hand-over into the approved opening.

## Also useful for the tunnel polish (optional)

- **The approved Screen 4 at full resolution.** Only a small 231 × 537 crop exists (`Design/ApprovedScreens/04_Rescue_Socks_Inside_Tunnel.png`). A full-size version would allow closer matching.
- **The Bubble Blast and Turbo Spin icons as separate image files**, if you have the original art. The current icons are drawn in code (SVG) to match the approved screen; your exact art would replace them one to one.
