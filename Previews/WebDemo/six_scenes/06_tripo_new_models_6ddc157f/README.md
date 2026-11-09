# The user's 12 new Tripo models (9 November 2026, session 6ddc157f): what each really is, how it compares, what is in the game

All 12 uploads were gltfpack files (`EXT_meshopt_compression` + `KHR_mesh_quantization`), about 1.9 M triangles each. Each was opened in Blender
5.2.3 (its glTF importer decodes meshopt) and rendered from 4 sides before deciding anything. Originals + SHA256: `Design/TripoDeliveries/2026-11-09_New_Models_from_user/originals/`.
No Tripo credits were spent (balance 1,060 before and after). Mobile copies: Blender decimation (texture seams welded), smooth shading, glTF
Transform meshopt compression, Khronos validator 0 errors; the game's loaders get three.js's own `MeshoptDecoder` (only where these switches are on).

| Upload | What it really is (renders) | vs existing / storyboard (art director + measurements) | Recommendation | In the game |
|---|---|---|---|---|
| 02_Girl_Character | the storyboard girl: curly ponytail, pink bow, pink hoodie, purple backpack, shorts | far closer than the old girl (lavender overalls, barefoot); stiff curl tips | **KEEP (replace old)** | `tripo3`, **active**: 57k tris, rigged (same bone names, region weights: bone heat failed on this mesh), eyelids at her painted eyes |
| 01_Pink_Gold_Machinery / HJ 748 | the SAME washer (identical positions and UVs, max diff 0.0); HJ 748 has sharper 1024 px ORM / normal maps | pink-gold body, paw medallion, jars, pipes, lights: panel 4 (old: grey box / code washer). Porthole smaller than the board's | **KEEP (HJ 748)** | `tripo3`, **active**: 28k tris, built-in door and drum removed (Blender) so the live drum, water and character show; gold plate + hinge knuckles over the cut |
| OIT 748 | a pink riveted porthole door, gold bezel, lilac glass, hinge, latch | has hinge / latch / glass the code door lacked; board's ring is gold | **IMPROVE -> done** | `tripo3`, **active**: glass dome removed (the game's translucent glass shows him in scene 4), ring recoloured gold (`,doorpink` = original); hinge stays right (a left hinge would cover the girl) |
| 03_Purple_Laundry_Basket | a tall round bin, round holes, NO handles, a damaged side | the old basket (low, oval slots, handles) matches panel 1 better | **KEEP OLD** | `,basket3` opt-in only |
| 06_Sock_Character | white sock, lavender stripes, big glossy eyes | art director: keep the old sock (stray marks at the toe, side squiggle) | **KEEP OLD (sock3 for review)** | `,sock3` opt-in; gameplay identical |
| 05_Purple_Gem_Candidate | a violet brilliant-cut gem | paler, mushier facets than the current magenta gem at phone size | **KEEP OLD** | not integrated (the user asked for a recommendation first) |
| 02_Gold_Pipe_Candidate | NOT a pipe: a gold PAW COIN | brighter gold, bevelled rim, raised paw: panel 6 | **REPLACE (coin3 for review)** | `,coin3` opt-in: 3k / 1k LOD (old coin 11k); gameplay identical |
| 01_Purple_Enemy_Candidate | a purple grime ball, angry brows, pink eyes | panel 6's violet enemy (old: blue with a mask band) | **REPLACE (enemy3 for review)** | `,enemy3` opt-in: 5k tris; gameplay identical |
| 04_Blue_Gear_Candidate | a cobalt cog with spokes and a gold hub | panel 5's blue gear (old gear.glb mostly gold; scene 5 had a flat code gear) | **KEEP (replace)** | `tripo3`, **active**: scene 5, turns on its hub (pivot at the hub) |
| BubbleWash_821_Small | a long pink-gold machine housing: blue gauge windows, pipes, vents | richer than scene 5's plain code boxes (panels 5-6) | **KEEP (replace)** | `tripo3`, **active**: the 12 scene 5 housings (5.6k tris each, shared geometry) |
| 03_Blue_Surface_Candidate | NOT water: a draped blue terry TOWEL | must not replace the moving water; as a towel it cannot animate (the code cloth drapes / bundles / sits like a hat) | **REJECT as water; texture reference only** | not integrated |

Evidence: `MODEL_COMPARISON_SHEET.png` (storyboard | existing | new), `renders/` (4-view sheets, decimation check, rig test pose, door gold),
`in_game/` (current six vs tripo3 at the same moments), `gameplay/` (Level 1 with sock3/coin3/enemy3: 0 differences in play; contact sheets),
`proofs/` (identity 0 px for `?s3=intunnel`, normal, home, level1; six without tripo3 0 px in the 3D frames; the matcher run).
Then the user chose the tripo3 version as THE ACTIVE GAME: `../07_active_game_plain_launch_6ddc157f/README.md`.
Scripts (re-runnable): `Design/TripoDeliveries/2026-11-09_New_Models_from_user/rig/` (decimate.py, prep_washer.py, prep_door.py, door_gold.py, prep_simple.py, rig_girl_v2.py).
