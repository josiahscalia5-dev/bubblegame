# The user's six Tripo GLBs: inspection (8 November 2026, session `dbccb9a3`) and KEEP / REJECT / REWORK proposals

The six files in the folder above are the user's originals, unchanged (sha256 as in `../Bubble_Wash_Tripo_GLB_Manifest.json`).
Nothing in the game uses them yet; no Tripo credits were spent. Inspection: Blender 5.2.3 headless, `inspect_glb.py` (statistics,
orthographic front / side / rear / top renders, and the game's rear camera at 16 degrees above), plus a 48 x 48 depth map of rays
shot into the washer's front. Per model: `<name>_<view>.png`, `<name>_stats.json`. `CURRENT_game_mascot_*` = the game's
`WebDemo/models/mascot.glb` from the same views.

| Model | Triangles | Texture | Size (Blender X, Y, Z m) | Rig / animation | What the renders and measurements show | Proposal |
|---|---:|---|---|---|---|---|
| cartoon girl | 10,755 | 1 x 4096 | 0.54 x 0.45 x 1.00 | none / none | Full body; the user's girl: curly brown hair, pink headband and bow, lavender shirt, purple overalls; arms held a little away from the body (good for rigging) | **REWORK then KEEP for the opening**: a Blender armature (hips, spine, neck, head, upper and lower arms, hands) with automatic weights, the blink and mouth done in game; replaces the code-built girl of `opening3d.js` after the user's yes |
| pink fluffy creature | 9,796 | 1 x 4096 | 0.95 x 1.00 x 0.73 | none / none | Front: big eyes, open smile, small arms (close to the opening art). Rear and side: a large tail and feet stick out; the game camera's view is not the ORIGINAL's round dome | **REJECT for gameplay** (the current mascot matches the ORIGINAL rear silhouette); optional REWORK for the opening only (tail removed) |
| purple basket | 9,679 | 1 x 4096 | 1.00 x 0.93 x 0.67 | none / none | Open top, rows of holes, the art's purple | **KEEP for the opening** (replaces the code basket; scale to about 0.42 m, pivot at the handles) |
| sock character | 10,244 | 1 x 4096 | 0.68 x 0.41 x 1.00 | none / none | Smiling sock, blue cuff, purple toe and heel | **KEEP for the opening's flying socks**; the game's collectible sock stays (part of the approved Screen 4 look) |
| soft plush towels | 10,076 | 1 x 4096 | 1.00 x 0.46 x 0.50 | none / none | Three towels (yellow, blue, pink) side by side with gaps: one mesh, three separable pieces | **REWORK**: split into three objects (Blender, separate by loose parts after welding seams), then KEEP for the toss |
| washing machine | 9,461 | 1 x 4096 | 0.80 x 1.00 x 0.92 | none / none | The art's look: lavender body, gold porthole, crown. The porthole is a CLOSED bowl about half the body deep (530 of 2,304 depth cells deeper than 25 %, only 6 rays straight through): not a traversable opening | **REWORK**: cut the porthole open (boolean) and fit the existing tunnel behind it; then KEEP for the opening |

All six: one mesh, one material, one 4096 x 4096 texture each (about 64 MB of GPU memory each uncompressed): too heavy for phones
as delivered; resize to 1024-2048 (glTF Transform `resize` + WebP or KTX2) before use. About 10,000 triangles each is fine.
Not done yet (needs the user's yes, in a session with time): the rig, the washer's cut, the towel split, the texture reduction,
the integration and an A/B against the current opening. No claim is made that any model is rigged or production-ready.
