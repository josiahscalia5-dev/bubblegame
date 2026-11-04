# Tripo P2 jobs for Round 5 (4 November 2026)

Both jobs: image-to-3D, model `P2-20260801` (Tripo's newest), `texture_quality=detailed`, `pbr=true`, GLB. Estimated and
charged 120 credits each (balance 1,000 -> 880 -> 760). Inputs were single isolated objects, never a collage.

## 1. Gold paw coin (task c80a02b4-f15c-4333-a896-2789cdb6c55f): used in `?s3=round5`

- Input `coin_input.jpg`: the three-quarter coin cut from `Design/ReferencePacks/2026-11-04_Round5_References/03_COIN_GEM_SOCK_SHEET.png`.
- Delivered: 7,043 triangles, 2K PBR textures, 0 validator errors; the paw on one face only.
- Prepared in Blender (`coin_prepared_front_back_angle.png`): the embossed half mirrored onto both faces, centred, faces on
  Z, radius 0.3 (the game coin's), thickness 0.12; a 1,500-triangle copy for distant coins; textures 1024 px WebP (256 px for
  the copy). Game files: `WebDemo/models/coin_p2.glb` (0.36 MB), `coin_p2_lo.glb` (0.07 MB).

## 2. Fluffy brush (task cfecd8cf-385e-44e2-a753-61456f7e329b): tested, not used

- Input `brush_input.jpg`: `Design/ReferencePacks/2026-11-04_Tripo_Reference_Kit/02_TRIPO_FLUFFY_BRUSH_FRONT.png` with the corner
  bubbles masked out.
- Delivered: 19,613 triangles, 0 validator errors, but **the colour rings were lost** (texture 89% pink, 8% blue at the mount,
  0% white; `brush_tripo_four_sides.png`) and the tufts came out as smooth petal-like scales, not fluffy pom-poms.
- Prepared anyway (centred, radius 0.95 in the game's brush units, 10,000 triangles, 1024 px WebP: `WebDemo/models/brush_p2.glb`,
  0.66 MB) and tested in real gameplay with the rings repainted from the shape: switch `?s3=round5,tripobrush`.
- **Result (`brush_gameplay_test.jpg`):** it reads as hard, glossy scales and is smaller and darker than the approved brushes;
  the existing shell-fur ball-tuft brushes are closer to the approved Screen 4. Kept only as the test switch.
