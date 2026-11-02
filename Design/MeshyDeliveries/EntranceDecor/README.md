# Entrance decor: four Meshy models for Screen 3 (delivered 2 November 2026)

Kept as delivered. `README_START_HERE.md`, `CLAUDIA_CODE_COPY_PASTE_PROMPT.txt`, `Asset_Sizes_And_Checks.json` and `Four_Optimized_Models_Visual_Check.png` came with them.

| Model | Balanced (used) | Faces | In the browser demo (`WebDemo/src/decor.js`) |
|---|---|---|---|
| Glowing water tower | 95k triangles, 1024 px textures | Portholes on +Z and -Z, a short pipe stub on +X, upright | Two, one on each side of the castle. They replace the two code-built machinery towers. |
| Blue-and-gold gear wheel | 75k | Both flat faces (±Z), turns about Z | Seven. Six are at the portal mouth beside the slide and one is high on the left. They replace the seven code-built gears there. |
| Curved golden pipe | 80k | A 90° elbow with open ends facing -X and -Y | Two water spouts. Each sits on a tower's pipe stub, on a short gold riser. |
| Crown and curved trim | 65k | An arched panel facing +Z | One, as the keystone on the gold band at the top of the portal arch. |

## Web copies

The web copies are made from the Balanced files with `WebDemo/tools/optimize.mjs` in its new `pbr` mode:
- It keeps the colour, metal/roughness and normal maps. Colour is 1024 px JPEG; the other two are 512 px.
- Geometry is simplified with a small error bound and quantised.
- Rendered side by side with the full Balanced geometry, they look the same, even larger than they ever appear in the game.

| Web copy | Triangles | Size |
|---|---|---|
| `WebDemo/models/tower.glb` | 47.5k (half) | 1.5 MB |
| `WebDemo/models/gear.glb` | 18.7k (quarter: seven copies, all small on screen) | 1.0 MB |
| `WebDemo/models/pipe.glb` | 40k (half) | 1.3 MB |
| `WebDemo/models/crown.glb` | 32.5k (half) | 1.2 MB |

Each model is loaded once. Every copy in the scene shares its geometry, textures and material.

## The Small copies are not used

Each Small file has thin stray sliver triangles poking out of it, for example from the gear's rim and the tower's pump. They also have gold texture smears on the blue glass and the gear's blue face.
- They are also larger overall than their Balanced versions: the gear is 1.29 deep instead of 0.79, and the tower is 1.24 wide instead of 0.80.
- They are kept here as delivered.

## What is animated in code (the GLBs are static)

- **Tower fluid** (`shaders.js` `TOWER_FLUID`):
  - The cyan glass texels are found by colour and gloss. On the texture the fluid measures hue 180–200° with roughness about 0.12. The royal-blue gems measure 210–220° with roughness about 0.31, so they are left alone.
  - Those texels are turned a deeper electric blue that glows.
  - Brighter currents swirl upward and round bubbles rise.
  - A soft light pulses in each chamber, and water pours from each elbow spout into the moat, with foam where it lands.
- **Gears:** each whole wheel turns about its own centred axle. Its parts are one mesh, so they do not turn on their own.
