# Compact washing rollers: candidates No. 1 and No. 2 (delivered 3 November 2026)

The two GLBs are kept here exactly as delivered, with the delivery's instructions (`CLAUDE_IMPORT_BWK_ROLLERS.txt`). The browser demo reads byte-identical copies, `WebDemo/models/roller_candidate_1.glb` and `roller_candidate_2.glb`, and only when the page is opened with `?roller=1` or `?roller=2`. By default, neither is shown.

Full comparison and recommendation: [`Design/SCREEN3_ROLLER_CANDIDATES.md`](../../SCREEN3_ROLLER_CANDIDATES.md). Evidence: [`Previews/WebDemo/roller_candidates/`](../../../Previews/WebDemo/roller_candidates).

## What the files contain (measured)

| | No. 1 (`BWK_Roller_1_Claude_Compact.glb`) | No. 2 (`BWK_Roller_2_Claude_Compact.glb`) |
|---|---|---|
| File size | 4.88 MB | 3.32 MB |
| Triangles | 15,375 | 13,114 |
| Size (model units) | 1.04 × 1.04 × 1.90 | 0.78 × 0.78 × 1.90 |
| Long axis | local Z (confirmed) | local Z (confirmed) |
| Proportions | thick: 0.55 of its length across | narrow: 0.41 of its length across |
| Nodes, animation | one node, one mesh, no animation, no skin | the same |
| Material | one, double-sided: 2048 px JPEG colour and metal/roughness, **no normal map** | the same |
| GPU texture memory | 42.7 MB (two 2048 px maps with mipmaps) | 42.7 MB |
| Separate pieces | 3: the bristle drum (13,937 triangles) and two gold brackets. **But the −Z bracket's plate and arms are welded onto the drum** (182 gold triangles); only its foot is separate. | 1: drum, blue end caps, pink stars and gold bars all welded into one piece |
| Can the bristles spin while the brackets stay still? | **No.** Spinning the drum piece turns the welded gold plate too. Cutting the gold out along the metal map left torn gold fragments turning. | **No.** It has no separate parts at all; spinning it turns the gold bars with it. |

## What to request from Meshy, if a spinning roller is wanted

Separate files (or one GLB with separately named meshes) for No. 1's design:

1. `BWK_Roller_1_Drum`: the bristle cylinder with its two blue hub rings only, no brackets, centred on its own axis, with the long axis on local Z and the origin on that axis.
2. `BWK_Roller_1_Bracket_Left` and `BWK_Roller_1_Bracket_Right`: the gold support brackets with their feet, as separate meshes, not touching the drum.
3. Optional: a normal map for the bristles (or softer, card-style bristle strands), so the bristles read soft rather than as flat triangles up close. A 1024 px texture is enough at game size and would use a quarter of the memory.
