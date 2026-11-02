# Meshy model measurements

These were measured by the project's own `ApertureMeasurer` C# code, run on the GLB triangles. The measurer projects the mesh along an axis and finds the largest circle that fits through the hole. Units are the model's native units unless metres are stated. Coordinates are in Unity space after glTFast import (glTF X is mirrored).

## BubbleWashCastle.glb (castle portal)

- 150,071 triangles, 147,212 vertices, one baked 2048² PBR material, double-sided.
- Bounds 1.327 × 1.902 × 0.617 (W × H × D). The front, with the big plinths and the crest, faces +Z.
- See-through portal, looking along Z: a keyhole shape. Its circle has centre (−0.0001, −0.4041) and **radius 0.2705**, with a narrower slot below it down to the base.
- The narrowest portal ring lies between depth z −0.113 and −0.020.

Views: [`meshy_castle_views.png`](meshy_castle_views.png)

## BubbleWashTunnel_Mobile_2K_Lite.glb (washing-machine drum)

- 136,387 triangles, 174,806 vertices, one baked 2048² PBR material, double-sided.
- Bounds 1.903 × 1.095 × 1.067. **The length runs along X**, as noted. The detector finds an opening only when looking along X (clear radius 0.344); along Y and Z the radius is 0.05 or less.
- End porthole opening radius **0.4272**, centred on the axis. The geometry is symmetric, so both ends match and segments chain in either direction.
- The paddle fins inside the drum reduce the clear radius to **0.3443** (80.6 % of the opening).
- The outer barrel radius is about 0.56.

Views: [`meshy_tunnel_views.png`](meshy_tunnel_views.png)

## How they are assembled (world metres, +Z forward, water at y = 0)

| Item | Value |
|---|---|
| Shared opening radius (castle portal = drum porthole) | 2.50 m |
| Castle scale / height | ×9.24 / 17.6 m (about 3.5 m of the plinths are below the water line) |
| Castle rotation | 180° about Y, so its front faces the approaching player |
| Tunnel scale / segment length | ×5.85 / 11.14 m |
| Tunnel rotation | −90° about Y (native X → Unity +Z) |
| Clear radius inside the drum (fins) | 2.01 m |
| Tunnel axis height above the water | 1.50 m |
| Segments | 3, from z = 3.90 to 37.20, 5.6 cm overlap (no gap) |
| Lanes | 3, 0.85 m apart. Mascot edge 1.25 m from the centre vs 1.70 m passage half-width at body height |
| Screen 3 camera | 1.45 m above the water, 4.0 m behind the mascot, 3.8° down, 55° vertical FOV. The mascot is 16.7 m before the castle |
| Screen 4 camera | 1.37 m above the water, 3.6 m behind the mascot, 0.8° down, 60° vertical FOV, mid second segment |

The camera framings were fitted to measurements of the approved crops:
- **Screen 3** (269 × 538 px): portal centre at 44.6 % of the height, portal gold ring 62 % of the width, mascot centre at 67.8 % and 47 % of the width.
- **Screen 4** (231 × 537 px): drum vanishing point at 48.8 %, mascot centre at 71.7 % and 56 % of the width.
