# Washer tunnel interior liner (delivered 2 November 2026, night)

**Status: not used.** On 3 November the user asked for the previous tunnel back, with cyan rings and pink panels built in code. That is what the game now shows. These files, `WebDemo/models/liner.glb`, `WebDemo/src/liner.js` and `WebDemo/tools/repair_liner.mjs` are kept. Commit `46c034c` has the game with the liner in place.

## Why it showed black cracks (diagnosis, 3 November)

**Rendered alone:** with everything else hidden, on a green background, green showed through thin cracks. They were in the same places in the web copy and in the file as delivered, and turning the normal map off did not remove them. They are real holes in the geometry.

**Measured in the delivered Recommended file:**
- 4,426 separate pieces, about one per texture island (6,370 islands).
- 91,501 open edges, and cracks of mostly 0.003–0.02 model units between neighbouring pieces (1–9 cm in the game).
- The same pattern in the Small and Balanced files. The original Meshy file (7.6 M triangles) was not available to check. Most likely the islands separated when it was simplified: each island's edge was simplified on its own.
- About 4,000 edges join triangles wound in opposite directions, and the model's own normals disagree with each other inside pieces.

**Two problems in the game's fitting made it worse:**
- The fitting mirrored the model, which turned every triangle inside out.
- Normals smoothed over the inconsistent winding gave dark patches.

**The repair was started but not finished** (`WebDemo/tools/repair_liner.mjs`):
- It stitched most cracks to under 0.003 units.
- It made the winding consistent inside each piece, and 89 % of the inner wall faced the axis (80 % as delivered).
- `liner.js` was changed to fit the model with a half turn instead of a mirror and to smooth normals across seams.

It was never shown in the game, because the user chose the previous tunnel.

If it is wanted again, a cleaner fix is a new simplification from the Meshy original with texture seams kept joined. Most tools have an option to lock the borders between UV islands.

Kept as delivered: the Balanced (97k triangles), Recommended (198k) and Small (28k) GLBs, `README_START_HERE.txt`, `CLAUDIA_IMPORT_PROMPT.txt` and the four-view preview.

## What the model is

- One combined mesh with one PBR material (colour, metal/roughness and normal maps), and no animation or lights.
- It is a short, thick barrel about 1.9 × 1.9 × 1.73 units, with its tube along local Z.
- **Bore:** narrows from a radius of about 0.65 at its +Z end to 0.41 at its -Z end.
- **Outer shell:** at about 0.95.
- **The +Z end** is a face of concentric gold and cyan rings, like a washing-machine door.
- **Cracks:** it has many small cracks between its surface pieces, where Meshy's reconstruction left gaps. They are in all three files. The Recommended file has the fewest.

## How the browser demo used it, 2–3 November (`WebDemo/src/liner.js`, not loaded now)

- **Variant:** the Recommended file. Its web copy (`WebDemo/models/liner.glb`, 6.0 MB) keeps all 198k triangles and the three maps.
  - The Balanced file looked the same from inside but has more visible cracks.
  - The Small file is too rough.
- **Placement:** four copies line the existing drum, from 0.6 m inside its mouth to 0.6 m before the exit light. The castle, portal and the drum's mouth are unchanged.
  - Each copy is bent along the ride's 3D path, so it climbs, crests, drops and banks with the tube.
  - Its +Z ring face points at the incoming rider.
- **Radius:** a uniform scale cannot fit the narrowing bore. Fitted to the bore, the wall closes in over the water; fitted to the outer shell, it bursts through the drum. So the radius is remapped:
  - The bore's surface sits 2.25 m from the tube's axis.
  - The panels, rings and machinery keep their relief (4 m per model unit).
  - The outer shell, never seen from inside, is left out: about 78k triangles per copy remain.
- **The old drum:** its ribs reach in to 2.1 m, inside the liner, and its walls cut through the liner's recesses. So it is not drawn beyond the liner's start (`trimDrum` in `game.js`).
- **Cracks:** a deep-blue backing tube behind the liner shows through them. It is drawn first and writes no depth, so it never covers the liner.
- **Clearance:** the nearest liner surface is 2.06 m from the tube's axis. The mascot's body reaches 1.98 m at most, even jumping repeatedly in every lane, and the camera 0.70 m. Measured every frame with `window.__bw.clearanceTrace`.

## Lighting (the model's bands are painted, not lights)

- **The model's own bands and panels** (`LINER_GLOW` in `shaders.js`): the shader finds the cyan and pink texels by colour and makes them emit, with a slow light-chase down the tunnel.
  - On the texture, cyan is hue 180–195° and barely metallic, pink is 285–315°, the walls are 210° and the gold is strongly metallic.
- **Extra rings:** separate emissive cyan and white rings circle the tunnel every 2 m.
- **Depth:** lights and walls fade with distance into deep blue, so the lighting recedes.
- **Contrast:** the walls take less of the scene's light than outdoors, so the deep blue is not washed out. The gold keeps its shine, and only the lights pass the bloom threshold.
