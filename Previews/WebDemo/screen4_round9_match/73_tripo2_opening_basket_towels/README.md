# 73: `tripo2`, the user's own Tripo basket and towels in the Laundry Toss (8 November 2026, session 57091b57, branch `ccr-b67aeffb-d94mmq`)

**NOT accepted; waiting for the user.** Opt-in on the 3D opening: `index.html?s3=intunnel,structmatch,home,level1,tripo2` (also with
`tripo1`). Without `tripo2` nothing changes (proofs below). **No Tripo credits spent**: the user asked to reuse good existing assets first.

## What it is (`WebDemo/src/opening_tripo.js`; two inert lines in `opening3d.js`: an import and one call after the laundry is built)
- **Basket:** the user's "purple basket 3d model.glb" (`Design/TripoDeliveries/2026-11-08_Six_Assets_from_user/`), its violet measured
  against the approved girl art's basket (`11109.jpg`: hue 275, saturation 0.67, value 0.89) and lifted from the texture's 267 / 0.52 / 0.62
  (mean RGB after 152 74 210; the art 159 77 217), texture 1024 px -> `WebDemo/models/opening/basket_tripo.glb` (552 KB, 9,679 triangles,
  glTF Validator 0 errors, sha256 `9dc555cde3d6c37a...`). It replaces the code basket's body, rim, handles and sphere heap inside the same
  group, sized so its ends sit at her hands: the IK targets stay at +-0.225 of the basket group, so her hold, lift, tip and wave are unchanged.
- **Towels:** the user's "soft plush towels 3d model.glb", split into its three towels with Blender (`WebDemo/tools/tripo/split_loose_parts.py`:
  Tripo's mesh is 347 small islands, grouped by position into three towels; 3,428 + 3,299 + 3,349 = all 10,076 triangles) ->
  `WebDemo/models/opening/towels_tripo.glb` (688 KB, 0 errors, sha256 `cf75f12585ae8586...`). They fly in place of the three code towels
  (same paths, spins and timing; largest side 0.34) and, smaller, are the laundry heaped in the basket.
- Lit like the user's Tripo girl in the same scene (the room's reflections at 0.5) plus a glow from their own texture, like the toon laundry.

## Side by side (real 3D opening, 412 x 839, the opening's own timeline, `WebDemo/tools/level1/o3d_shots.cjs`)
- `01_side_by_side_art_before_tripo2.jpg`: the approved art, then the toss at 0.4, 1.0 and 1.4 s before / with `tripo2`.
- `02_flying_towels_1.0s_1.4s_before_tripo2.jpg`: the flying laundry close.
- Frames: `frames/base/`, `frames/tripo2/` (Home at rest, the toss at 0.4 / 0.7 / 1.0 / 1.4 s, Screen 2 at rest).

| | Before | `tripo2` | Approved art |
|---|---|---|---|
| Basket | small, pale, see-through outline | solid violet basket with rows of rounded holes, towels showing in it | vivid violet basket with rows of rounded holes, overflowing with towels |
| Flying towels | flat pastel boxes (read as paper squares) | soft draped plush towels, yellow / blue / pink | fluffy yellow and blue towels |

**Still different from the art:** the art's basket is bigger and held higher, at her shoulder, overflowing; the art shows the flight from
the basket to the porthole in one diagonal, with the towels larger in the foreground; the flying socks are still the code socks (the user's
Tripo sock is a face character, not the art's plain striped socks). Those are placement / camera / animation in `opening3d.js`.

## Proofs (`proofs/identity.txt`, `scripts/identity.sh`)
The previous build (bundle `aa85e7ac`, `tripo1`) against this one, WITHOUT `tripo2`: the opening's page screenshots at the six moments
above, and `layer_diag.cjs` WebGL canvases of the accepted `?s3=intunnel` (start, 3 s), the normal game and Level 1 (start, 20 s).
The laundry's positions with `tripo2` are the same as before at every frame (the capture's state log).
