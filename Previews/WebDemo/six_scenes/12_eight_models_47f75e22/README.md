# The user's eight Tripo models: evaluation and mobile optimisation (9 November 2026, session 47f75e22). NOTHING here is approved.

Originals (exact bytes, verified): `Design/TripoDeliveries/2026-11-09_Eight_Models_from_user/`. Mobile LODs: `.../mobile/<name>_lod0/1/2.glb`,
made by `.../mobile/optimize_mobile.sh` (re-runnable). **None of these files is in the game.** No Tripo credits spent.

## What each model is (renders with the game's lighting, `WebDemo/tools/tmach/tm_view.cjs`)
`01_eight_originals_sheet.png` (6 views each), `originals_6views/*.png`, `03_approved_vs_models.png` (approved Scene 5 / 6 crops next to the LOD0s).

| Model | What it is | Approved counterpart |
|---|---|---|
| `911_tiny` | pink-violet machine housing: gold paw medallion, violet glass chamber, gold elbow pipe, control lights, railings | the pink-and-gold housings with paw medallion (Scene 5 / 6 left bank) |
| `912_tiny` | a second housing variant: paw medallion, blue porthole, glass chamber, box, pipe | same (variation) |
| `913 914` | violet glass chamber in a gold pipe frame (4096 textures) | the glowing violet glass chambers (both banks) |
| `dave_tiny` | **the same mesh as `913 914`** (identical 1,910,446 triangles, 996,345 vertices, bounding box), 512 textures | duplicate |
| `Machinery_tiny` | a violet cluster: control panel box, chamber, dome tank, porthole, pipe | the left-bank control box / machinery (flatter, more violet) |
| `gold_jj_tiny` | one gold elbow pipe with banded joints | the brass pipes and elbows (ceiling, banks) |
| `blue_jt_tiny` | the cobalt gear with gold hub and rivets | the large cobalt gear (Scene 5 right wall, Scene 6 upper right) |
| `yo_jj_optimized` | **the same gear as `blue_jt_tiny`**, turned 90° and re-exported (same 1,956,578 triangles; 2048 textures) | duplicate |

## Measured cost (one instance; tm_view in software WebGL; GPU texture memory = RGBA8 + mipmaps, base colour + normal + metal/roughness)
| Model | Original: triangles / textures / GPU tex | LOD0 | LOD1 | LOD2 |
|---|---|---|---|---|
| 911_tiny | 1,921,884 / 512² / ~4.2 MB | 39,998 tris, 401 KB | 18,158, 271 KB | 4,710, 70 KB |
| 912_tiny | 1,893,624 / 1024² / ~16.8 MB | 39,998, 1.23 MB | 15,416, 436 KB | 4,645, 124 KB |
| 913 914 | 1,910,446 / **4096²** / **~268 MB** | 39,998, 1.24 MB | 15,000, 439 KB | 4,843, 133 KB |
| dave_tiny | 1,910,446 / 512² / ~4.2 MB | 39,998, 586 KB | 15,000, 439 KB | 4,843, 135 KB |
| Machinery_tiny | 1,926,433 / 512² / ~4.2 MB | 39,999, 585 KB | 19,433, 465 KB | 4,673, 131 KB |
| gold_jj_tiny | 1,913,762 / 512² / ~4.2 MB | 39,998, 444 KB | 14,998, 304 KB | 4,996, 101 KB |
| blue_jt_tiny | 1,956,578 / 512² / ~4.2 MB | 40,000, 559 KB | 14,998, 412 KB | 4,808, 129 KB |
| yo_jj_optimized | 1,956,578 / 2048² / ~67 MB | 56,380, 616 KB | 46,566, 347 KB | 4,892, 71 KB |

Every model is 1 mesh, 1 material: 1 draw call per copy (instancing makes repeated copies 1 draw call per LOD). LOD textures: LOD0 <= 1024²
(<= ~16.8 MB GPU), LOD1 <= 512² (~4.2 MB), LOD2 <= 256² (~1 MB). Khronos validator: 24 LODs, 0 errors.
**Mobile verdict on the originals:** ~1.9 M triangles per copy is far beyond a phone's budget for the whole frame (the s56 game frame draws
253 calls); the "tiny" names describe the file transport, not the geometry. Only the LODs are usable in gameplay: LOD0 for one near
copy, LOD1 / LOD2 (instanced) for the repeats down the tunnel.

**LOD method (measured):** gltf-transform's `simplify` (first attempt) smeared the textures into vertical streaks at the UV seams
(`02_lod_method_911.png`: original / gltf-transform / gltfpack). gltfpack `-si` keeps the seams and matched the original, so LOD0 uses it;
LOD1 (`-sp -se 0.03`) and LOD2 (`-sp -sa`) may cross seams, acceptable only for far copies.

## Verdicts (measured against the approved Scenes 5 / 6; for the user's review, not approved)
| Model | Verdict | Why (evidence: `03_approved_vs_models.png`) |
|---|---|---|
| blue_jt_tiny | **KEEP** | the gear's shape (teeth, inner ring, gold hub, rivets) matches the approved gear closely; use LOD0 for the near gear, LOD1/2 for repeats |
| gold_jj_tiny | **KEEP** | matches the brass elbow pipes; instanced LOD1/2 along the banks and ceiling |
| 913 914 | **MODIFY** | the chamber's form and gold frame match; the approved chamber glows (bright pink-white core, translucent glass): add an emissive core and glass transparency |
| 911_tiny | **MODIFY** | right form (housing, paw medallion, chamber, pipe); too magenta-violet vs the approved hot pink: hue / colour shift, brighter gold, glowing chamber |
| 912_tiny | **MODIFY** | second housing variant, same colour correction as 911 |
| Machinery_tiny | **MODIFY** (secondary) | right parts (control box, chamber, tank) but flat violet; the approved control box has glowing blue screen eyes and coloured lights |
| dave_tiny | **REJECT** (duplicate) | the same mesh as `913 914` with lower-resolution textures; keep the file archived |
| yo_jj_optimized | **REJECT** (duplicate) | the same gear as `blue_jt_tiny`, turned 90°, heavier LODs; keep the file archived |

Placement in the game is the Scene 6 task (lane arch56, switch `,arch56`); see `Previews/WebDemo/six_scenes/13_scene6_match_47f75e22/`.
