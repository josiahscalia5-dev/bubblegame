# Your approved painting as the real game's scenery (`?s3=paint`, test only, not approved, not merged)

These are seeded Playwright screenshots of the running game, from headless Chromium with software WebGL; nothing was tried on a real phone. The separate painted Tap to Start overlay is off, so this is the live game scene.

| File | What it shows |
|---|---|
| `01_full_height_approved_previous_new.png` | Approved Screen 3, the saved 7/10 3D version (`2e11011`), and the new version at Tap to Start |
| `02_first_two_seconds.png` | Tap to Start, then 0.5, 1.0, 1.5 and 2.0 s, as the character heads into the washing machine |
| `03_through_the_door.png` | 2.5, 3.0 and 3.5 s: the hand-over to the real door, then the existing tunnel. The 3.0 and 3.5 s frames come from the build just before the last fix; the painting is already gone at those moments, so they are unaffected. |
| `bubblewash_painted_scenery_test.mp4` | 7 s of real gameplay with this switch |
| `frames/` | Every frame at full size |

## What it is

- **The painting is the scenery.**
  - The approved Screen 3 (`WebDemo/ui/s3_paint_backdrop.png`, made by `WebDemo/tools/screen3/make_paint_backdrop.py`; the original file is untouched) is projected from the Tap to Start camera onto stand-in depths: the castle and door at the door's distance, the brush, machinery and towers upright at their own distances, and the side water and foam on the ground just under the slide, following its climbs and dips.
  - At Tap to Start it lines up exactly with the approved screen. As the camera moves, each part moves as something at that distance would.
- **Live 3D in front:** the pink character, the slide and the water under it, the foam, the coins and the icy slide edges.
  - The door's centre is cut open, so the real tunnel shows through, and the character rides into it.
- **Exact colours.** The painting's pixels are drawn past the game's colour grade and tone mapping, so its colours arrive unchanged. The live parts keep their usual look, and bloom is off while the painting is shown.
- **After the tap:**
  - The painted "Let's go!" banner and Tap to Start panel fade with the game's own, showing the Number 4 castle and the live water behind them.
  - As the camera nears the door (camera z −12 → −6, about 2.0 → 2.6 s), the painting fades into the code-built round gold washer door and the castle.
- **Gaps instead of stretching.** Where neighbouring points of the painting land at very different distances (over the slide's crest), the painting is left open there instead of stretching, so the camera never drives through a stretched sheet.
- **What it hides:** the 3D entrance decorations, the code-built machinery, the old side machinery and rollers, and the floating 3D bubbles; the painting has its own. The live water beyond the gold rails is hidden in the far part while the painting shows.
- **Code:** `paintScenery` in `WebDemo/src/screen3_models.js`. `game.js` passes its bloom and output passes to the opening layer, which uses them only with this switch.

## Measured against the approved Screen 3 at Tap to Start

- **Colour** is ΔE: lower is closer.
- **SSIM** and **edges** measure structure: higher is closer, and 1.0 would be identical.

| Region: colour / SSIM / edges | Saved 3D `2e11011` | Painted scenery |
|---|---|---|
| Castle top | 12.5 / 0.166 / 0.046 | **0.6 / 0.957 / 0.934** |
| Castle sides | 31.6 / 0.044 / 0.174 | **1.8 / 0.870 / 0.803** |
| Door | 12.5 / 0.054 / 0.036 | 8.8 / 0.407 / 0.417 |
| Left brush | 2.9 / 0.057 / 0.154 | 2.8 / 0.500 / 0.662 |
| Right machinery + bubble | 2.6 / 0.066 / 0.217 | 0.9 / 0.495 / 0.447 |
| Slide and water | 6.6 / 0.134 / 0.295 | 5.7 / 0.113 / 0.123 |
| **Average** | 11.4 / 0.087 / 0.154 | **3.4 / 0.557 / 0.564** |

## Honest scores (out of 10)

- **At Tap to Start: about 9.**
  - The castle, door ring, brush, machinery, bubbles and side water are the approved painting itself.
  - Still different:
    - the door shows the real tunnel, not the painted vortex;
    - the live slide has icy rims and gold block rails;
    - the live pink character is a little smaller and higher than the painted one;
    - the duck is absent (removed at your request).
- **During the first two seconds: about 8.**
  - The painted scenery moves with depth as the character heads in.
  - After the tap, the banner area shows the 3D castle.
  - The painting softens as it enlarges (the source is 735 px wide).
  - From about 2 s it hands over to the 3D door.

## Checks (same seed and inputs as `591db28`)

- **Controls and movement:**
  - settings, Tap to Start, real swipes (left, right, up to jump), the ride into the tunnel and the keyboard start are identical;
  - the camera path is identical.
- **Seeded 13 s run:** identical, ending with 12 coins, 2 gems, 3 socks, 1 lap.
- **Tunnel:** the 3D view is unchanged. At 3.5 s one pixel at the door differs by one shade; at 5.5 s nothing differs.
- **Errors:** no console errors.
- **Cost of one frame at Tap to Start:** 244 draw calls and 1.11 M triangles, against 322 and 1.91 M before.
- **Cost in the tunnel:** 119 calls and 703.6 k triangles, against 120 and 703.7 k.
- **The normal game without switches:** pixel-identical to `591db28`.
- **The saved `?s3=all,edges,cine`:** unchanged in its 3D view; only on-page text timing differs.

## Not done yet

- **The tunnel interior** is still the existing tunnel. The approved Screen 4 tunnel view is not used.
- **A sharper result** would need a larger copy of the approved screen than 735 px.
