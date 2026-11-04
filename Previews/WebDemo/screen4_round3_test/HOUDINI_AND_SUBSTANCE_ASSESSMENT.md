# Would Houdini or Substance 3D Painter help? (assessment only: nothing bought or installed)

You asked whether Houdini-generated water effects or Substance 3D Painter materials would materially improve the game, and
to set up a workflow for the existing three.js game first. Short answers:

- **Houdini: yes for the splashes, later.** A simulated crown splash and whitewater around the pink character is the one
  effect where a simulation would clearly beat what is in the game now. The way to bring it into three.js is the same
  whether it comes from Houdini or Blender, and Blender is already installed, so prove the workflow with Blender first.
- **Substance 3D Painter: not now.** The largest remaining differences are composition, white water, lighting and
  density, not texture detail. Painter becomes worth it for close-up hero props (the gold door rim, the coins, the brush
  faces) once those are the gap.

## Houdini (SideFX) and the water splashes

What it would add:

- **FLIP water simulation** for the big white crown splash around the character, with **whitewater** (spray, foam and
  bubble particles), the look of the approved Screen 4 foreground.
- Export for real-time games: **vertex animation textures (VAT)**, which turn a simulated mesh into a small mesh plus
  position and normal textures that a vertex shader plays back, and **flipbooks**, rendered sprite sheets of a splash.

How it would fit this game:

- three.js can play VAT with a short custom vertex shader (the same pattern as the foam heaps in `src/tunnel_r3.js`). A
  looping splash would be attached to the character and played faster when it lands or changes lane.
- The cost on a phone is a few textures (256–1024 px) and one mesh: affordable.

Licensing (check SideFX's current terms before buying):

- **Apprentice** is free but non-commercial, so it cannot make assets for a commercial game.
- **Indie** is a paid annual licence for small studios and allows game assets.

The free route to prove first:

- **Blender** (installed: 5.2.3) has its own liquid simulation (Mantaflow).
- It can bake a splash to a flipbook (Cycles or EEVEE render) or to VAT (open-source add-ons, or a short Python export
  script).
- Proposed test: one looping crown splash, baked both ways, played in the game under `?s3=round3`, and measured with
  `WebDemo/tools/screen4/compare_s4.py` against the approved white-foam area.
- Only if Blender's simulation cannot reach the look would Houdini Indie be worth buying.

## Substance 3D Painter (Adobe) and the materials

What it would add:

- Hand-painted PBR textures with smart materials: gold edge wear, bevel highlights, ambient occlusion and curvature
  baked from the mesh.
- Exports texture sets that three.js reads directly (base colour, metal and roughness, normal).

Why not now:

- The Meshy models arrive with baked textures. The tunnel's look (water, rings, foam, white water, brush colours) comes
  from shaders, which Painter does not make.
- The comparison tool says the biggest gaps are white water, composition and the tunnel's centre, not material detail.

When it would pay off:

- Close-up props seen large on screen: the washer door's gold rim, the paw coins, the brush hubs and the gold machinery
  at the portal.
- Free routes for the same job: Blender texture painting and baking, or ArmorPaint (open source).

## What is already set up for this

- Blender 5.2.3 runs headless here and imports, checks, renders and exports the game's models
  (`WebDemo/tools/models/blender_passage_check.py`).
- glTF Transform repairs and optimises the models (`WebDemo/tools/models/repair_glb.mjs`). The Khronos validator
  checks them (`WebDemo/tools/models/validate.cjs`).
- Playwright captures real gameplay. OpenCV and scikit-image compare it with the approved screens
  (`WebDemo/tools/screen4/compare_s4.py`).
- The Tripo CLI is installed (`tripo`) but has no API key yet. Generating a model spends Tripo credits, so nothing has
  been generated.
