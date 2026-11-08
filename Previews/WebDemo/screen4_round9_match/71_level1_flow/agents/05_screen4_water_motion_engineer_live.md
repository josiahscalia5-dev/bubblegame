# screen4-water-motion-engineer: live three.js inspection with the parallax-threejs MCP tools (read-only; PARTIAL: the shared page hung)

Session b0abcf95, 8 November 2026.

I couldn't finish the run. I measured the Screen 4 drum (u ≈ 5 and 11) and the brushes (u ≈ 62). The drop (u = 175) and the wet chamber (u = 300) are not measured, and I took no screenshot. On the way to u = 175 the page stopped responding: every later script and a reload timed out. Its GPU process (pid 1952) was still at about 280% CPU after 15 minutes, and your own headless browser had started alongside it, so the 4 cores are overloaded. That stuck page needs reloading or closing before anyone uses it again. I wrote no repository files.

The bundle was the one you named: 1,293,644 bytes, md5 a62848a060079f447f2c86173aae2d97. Every reload I made served that same size, so I saw no rebuild.

## MCP tools called

| Tool | Result |
|---|---|
| threejs `bridge_status` | OK (connected) |
| threejs `renderer_info` | OK, but it reports only the last post pass (1 call), not the main scene |
| threejs `scene_tree` | OK once `__THREE_SCENE__` was set; type names are minified |
| threejs `material_details` (l1Water, l1Wall) | OK |
| threejs `object_details` (heroSwell) | OK |
| chrome `navigate_page` | OK 3 times, then FAILED (timed out at 60 s, page stuck) |
| chrome `evaluate_script` | OK about 12 times, then FAILED repeatedly (timed out, page stuck) |
| chrome `take_screenshot` | not taken (page stuck) |
| spector MCP server | FAILED to connect ("Connection closed") |

Two page reloads were my own runtime slips, nothing persistent. My first hook on `renderer.render` deleted the renderer's own method. Separately, I set `__BW_S3__` to a string where the game expects a list.

## Measurements

Main-scene counts come from hooking `renderBufferDirect` with `info.autoReset` off; `__bw.info()` and `renderer_info` only show the last post pass. Each frame also has 15 post passes of 1 call each.

| Checkpoint | Main calls | Main triangles | Total calls | Programs | Geometries |
|---|---|---|---|---|---|
| u = 5.2, drum | 192 | 2,687,585 | 207 | 59 | 125 |
| u = 11.2, drum | 179 | 2,682,436 | 194 | 59 | 130 |
| u = 61.8, brushes | 100 | 2,411,748 | 115 | 63 | 150 |

Where the triangles go:
- **Her shell fur (`structShellFur`):** 1,096,888 triangles in one draw (137,111 × 8 shells), not culled. That is 41-45% of the main pass.
- **Her body mesh:** 137,111.
- **Brush fur (`fluffyShells`):** 76,800 per brush, not culled; 8 brushes at u = 62 make 614k.
- **`l1Hoops`:** 4 draws, 191,880.
- **`l1Bubbles`:** 88,400, not culled.

Draws that put nothing on screen (an occlusion query on every draw at u = 62): 28 of 100 draws, about 120k triangles. They are the drum's porthole (2 draws), face, bezel, walls and collar (6 draws, 70k, not culled, 59 m behind her), 14 `tunnelDecor` draws (31k), `s4Bubbles` (17k), `mwTunnelBubbles`, `structFill` and 4 small opening-look leftovers.

Visible `level1` children:
- u = 11: 2 walls, 2 water, 4 hoops, bubbles, 1 brush.
- u = 62: 4 walls, 4 water, 4 hoops, bubbles, 8 brushes.

## The water touching her in the course

- **heroSwell still follows her through the course.** At u = 62 it is visible at full strength. Its centre is (-0.055, -0.197, 61.659) while she is at (-0.019, 0.172, 61.66). It draws late (renderOrder 5) and is transparent: depth-tested but it writes no depth, one-sided, normal blending.
- **The pinned picture of the original goes with it.** Its shader still has `uMatchOn = 1` and the screen-space textures of the original. So the "still picture pinned to her" problem continues past the drum.
- **heroSwell sits level with the course water, which is likely to flicker.** The course water vertex 0.14 m from her is at y = -0.201, so the swell's base is only 4 mm above it. The course water is opaque, writes depth and is double-sided, and all 28 chunks share one material. Testing the swell's skirt against an almost coplanar surface should give a noisy, flickering cut-off line where they meet, moving with the waves. I expect this; I could not confirm it on screen.
- **Other drum water layers also follow her:**
  - `r6BowWave`: renderOrder 5, double-sided.
  - `spLumps`: 6.
  - `lqWaterlineBubbles`, `spCurls`, `lqSpraySheets`: 7.
  - `heroSplash`: 8.

  All are transparent, write no depth and use custom blending, so they stack over the course water.
- **The course walls (`l1Wall`)** are opaque, write depth and are double-sided; all 22 chunks share one material. The course water also has a `uRider` input that tracks her, available for a wake.

## Budget for two flumes, divider rails and a jump pad

The frame is limited by triangles and pixels in software rendering, not by draw calls: 100-190 draws against 2.4-2.7 M triangles.

- **Target:** at most 5-6 extra draws, at most 30k extra triangles in view, and no new shader programs (they already rose from 59 to 63).
- **Flumes:** build both into the existing 15 m chunks so they share the wet water and wall materials and the existing culling. Put both flumes in one geometry per chunk: about +3 draws.
- **Rails:** one instanced mesh for all dividers, +1. **Jump pad:** one mesh, +1.
- **To pay for it, in the course only:**
  - Hide the 28 draws listed above that put nothing on screen: about -22 to -28 draws and -120k triangles.
  - Merge the hoops' silver, gold and violet bands into one geometry with vertex colours: 4 draws become 2.
  - Make `fluffyShells` / `fluffyFringe` cullable (bounding sphere) and use fewer shells on distant brushes.
  - Instance the unnamed repeated item meshes (3 × 11,186 and 18 × 1,500 triangles at z 62-104).
- **The largest single saving** is a lower shell count for her own `structShellFur` in the course. That changes her look, so the art director should judge it.

## Still to do

The u = 175 and u = 300 measurements, the screenshot, and on-screen confirmation of the heroSwell / course-water flicker. To get there without blocking the page, use `__bw.step()` (it steps the game without drawing) and render once. `__bw.advance(0.25)` draws a full 2.4 M-triangle frame on every call. The screenshot folder exists and is empty: `/tmp/claude-0/-home-user-bubblegame/b0abcf95-25a3-5b9a-a3f8-62736537e615/scratchpad/wme/`. Code read: `/home/user/bubblegame/WebDemo/src/level1.js` lines 303-444 and `/home/user/bubblegame/WebDemo/src/fluffy_brush.js` lines 186-192.