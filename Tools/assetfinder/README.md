# Bubble Wash Kingdom: automatic 3D asset finder and importer (session ddf175f2, 9 November 2026)

Find downloadable models for a missing object of the approved Screen 6, show candidates with licence and cost, import one into the real game.
Nothing is bought; credit-costing services are never called without the user's approval.

## Verified connections (live, 9 November ~19:30 UTC)
| Service | How | Status |
|---|---|---|
| CGAxis remote MCP `https://mcp.cgaxis.com/mcp` | `mcp_http.py` (streamable HTTP: initialize, tools/list, tools/call) | **working**, read-only, no sign-in. Tools: search_assets, get_asset, find_similar_assets, list_categories, browse_assets, search, fetch. Catalogue = scanned / archviz (no cartoon machinery). Downloads only through the CGAxis Hub desktop app (plan / credits). |
| Sketchfab API | search: public; download: the user's free token, a network secret for `api.sketchfab.com` (proxy-injected, `Authorization: Token`) | **working**: `/v3/me` answers, a model downloaded (`import_sketchfab.py`). Free CC models only; priced models are refused. |
| Poly Haven API | public, CC0 | **working** (search). Realistic assets only. |
| Poly Pizza API | needs a free key (poly.pizza/settings/api) | not configured. Blender MCP's own code notes that static.poly.pizza answers 403 to datacenter IPs (this cloud container). |
| Blender MCP (princicode/blender-mcp 1.9.0) | an MCP server + a Blender add-on socket server | **not connected** in this cloud session: it needs a running Blender with its add-on and is not registered as an MCP server here. Its Sketchfab / Poly Pizza / Poly Haven searches use the same APIs as this pipeline (keys: BLENDERMCP_SKETCHFAB_API_KEY, BLENDERMCP_POLYPIZZA_API_KEY). Blender itself is installed and used headless for asset checks. |
| Meshy, Hyper3D Rodin | paid generators | not configured (no keys); not used. |

## Use
1. `python3 Tools/assetfinder/find_assets.py <out dir> [object ...]`: queries Sketchfab (downloadable only), Poly Haven, CGAxis (and Poly Pizza with
   POLYPIZZA_KEY) for each object (roller_brush, glow_tank, cobalt_gear, brass_lamp_pipe, control_box, star_drum_housing); writes
   candidates.json, README.md (table with licence and cost) and sheet_<object>.png (thumbnails, numbered).
2. `python3 Tools/assetfinder/import_sketchfab.py <uid> <out dir> [max faces]`: downloads one free model, records CREDIT.json (author,
   licence), writes original.glb and mobile.glb (gltfpack, 1024 textures, meshopt).
3. Copy mobile.glb into `WebDemo/models/s6library/` and place it in the game (example: `WebDemo/src/s56_tank6.js`, switch `tanklib`: the
   model's look adjusted in the shader and fitted to each slot). Gltfpack output is quantized: convert attributes to float before transforming.
4. Judge it on the frozen u 206 frame (`WebDemo/tools/env6/var6.cjs`) next to the approved image; prove the plain launch unchanged.

Python MCP client usage: `python3 Tools/assetfinder/mcp_http.py https://mcp.cgaxis.com/mcp tools` / `call search_assets '{"query": "..."}'`.
