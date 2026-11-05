# Screen 4 supporting material references (sent by the user, 5 November 2026)

**The final authority is unchanged:** the ORIGINAL CLASSIC APPROVED Screen 4,
`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg` (767 x 1536). It decides
the layout, camera, composition, colours, scenery and object placement. If any image here differs from it, the original
wins.

These five AI-generated images were made by the user to help rebuild the original's MATERIALS and FINISH. They are
material references only: never a layout target, never pasted over the camera, never a source of new props.

| file | the user's name | what to use it for |
|---|---|---|
| `01_REF1_COMPLETE_MAGICAL_LAUNDRY_SCENE.png` (941 x 1672) | Reference 1, complete magical laundry scene | the overall luminous, high-quality finish: how shiny water, gold reflections, transparent bubbles, fluffy brushes and the pink character relate. A quality guide, not a layout. |
| `02_REF2_WASHING_MACHINE_TUNNEL_STRUCTURE.png` (1122 x 1402, cut-out) | Reference 2, washing-machine tunnel structure | the gold-and-lavender housing, the circular opening, metallic highlights and curved perspective: the 3D architecture's materials and lighting. Dimensions and camera still follow the original. |
| `03_REF3_PINK_CHARACTER_IN_TURQUOISE_WATER.png` (1122 x 1402, cut-out) | Reference 3, pink character in turquoise water | ESPECIALLY IMPORTANT: the character partly immersed in visibly blue, translucent, glossy water; large irregular moving waves, white bubbly crests, transparent bubbles, droplets and spray. Never a white blanket, an opaque mound or a solid V-shaped collar. The existing character model is kept. |
| `04_REF4_SEPARATE_PROPS.png` (1448 x 1086, cut-out) | Reference 4, separate props | the look of the existing gold paw coins, purple diamond, smiling sock, pink-white-blue brushes and iridescent bubbles. They stay separate 3D objects, never painted into the tunnel; no new props; where the original defines them, the original wins. |
| `05_REF5_BLUE_WATER_VORTEX.png` (1122 x 1402) | Reference 5, blue-water vortex | THE KEY reference for the water material inside the tunnel: deep cobalt shadows, electric-blue liquid, glowing cyan streams, glossy moving reflections, shimmering white highlights, warm light toward the distant centre; on the curved walls AND the lower flowing water, one continuous swirling body of water. It holds no props, so it can be unwrapped into a clean, seamless material. |

The user's priorities for using them:
1. the original tunnel's rich cobalt-and-cyan swirling liquid (Reference 5);
2. turquoise waves visibly surrounding the pink character (Reference 3);
3. the reflective gold-and-purple washer structure (Reference 2);
4. the glowing reflections and underwater lighting (Reference 5, Reference 1);
5. the separate coins, sock, gem, brushes and bubbles placed as in the original (Reference 4 for their look).

The user's warning: no stitched tunnel texture with visible patchwork seams, repeated rows of copied artwork, baked-in
collectibles or pale blown-out lavender haze. Reference-derived textures must isolate the water material and be seamless
before they go on curved geometry, and the mapping must be judged in real gameplay, not on a texture sheet.

## The user's rendering requirements (5 November 2026, later message)

- **The goal:** the playable game should LOOK like the original approved image brought to life, not merely contain
  similar objects. The user aims for roughly 90-95% visual similarity, as a target. Never claim it without evidence.
- **Approach:** a hybrid 2.5D/3D, reference-matched rendering is allowed where it improves fidelity: art-directed texture
  layers on the real geometry, and layers that live in the 3D scene and move with it. Never a static screenshot over the
  gameplay.
- **Reference 5:** a perspective illustration, not a prepared UV texture. Inspect any unwrap on the game geometry for
  stretching, repeats, seams and perspective errors. If needed, build seamless, art-directed flowing layers (tileable,
  synthesised from its water character) with proper UV mapping and animated distortion.
- **One continuous body of water:** on the curved walls AND in the channel under the character (deep cobalt shadows,
  turquoise currents, cyan glints, luminous caustics, controlled highlights). Not painted rings with a separate flat
  floor.
- **Reference 3:** large glossy translucent turquoise waves round the character, irregular white bubbly crests, droplets,
  spray and bubbles, the lower body visibly in blue liquid. The character model is unchanged, and foam is secondary.
- **No passes spent only on brightness, bloom, particle counts or generic effects.** Prioritise what makes the approved
  image recognisable.
- **Checkpoints:**
  1. After the wall-material stage, show a real 3.0 s gameplay frame of `?s3=match` at full size, beside the original and
     the previous version.
  2. Judge it on five failures: the cobalt/cyan distribution; the luminous swirling detail; the housing and camera depth;
     opaque or flat water round the character; object positions and scale.
  3. After the Water & VFX stage, show 2.85, 3.0 and 3.1 s comparisons and a short gameplay video.
  4. Save verified checkpoints to GitHub before merging.
