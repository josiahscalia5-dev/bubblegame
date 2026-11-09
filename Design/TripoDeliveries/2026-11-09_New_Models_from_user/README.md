# The user's new Tripo models of 9 November 2026 (session 6ddc157f). NO Tripo credits spent (balance 1,060 before and after; no job run)

`originals/`: the 12 compact GLBs exactly as uploaded (gltfpack, meshopt, ~1.9 M triangles each) + `SHA256SUMS.txt`, and `originals/notes/` (the
user's per-model notes and texture-map previews that came in the ZIPs). Never overwrite them.
`rig/`: the scripts that made the game copies (re-runnable, Blender 5.2.3 / glTF Transform 4.5.1):
- `decimate.py` (weld seams, collapse to a target), `prep_washer.py` (HJ 748: built-in door and drum removed, porthole to the origin),
  `prep_door.py` (OIT 748: inner face to +Z, glass dome removed), `door_gold.py` (the pink ring recoloured gold), `prep_simple.py` (sock, coin,
  enemy, gear, housing: face to +Z, centred), `rig_girl_v2.py` (the new girl: same bone names as `girl_rigged.glb`, region weights).
- Then `gltf-transform meshopt <in> <out> --level medium`; validation 0 errors (Khronos glTF Validator).
Game files: `WebDemo/models/opening/{girl_v2_rigged, washer_tripo_hj748, door_tripo_oit748(_gold), gear_v2_tripo, housing_tripo_821, basket_v2_tripo}.glb`,
`WebDemo/models/{sock_v2_tripo, coin_v2_tripo(_lo), l1_enemy_v2_tripo}.glb`.
What each model really is, the comparisons and the recommendations: `Previews/WebDemo/six_scenes/06_tripo_new_models_6ddc157f/README.md`.
