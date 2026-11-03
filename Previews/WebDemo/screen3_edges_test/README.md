# Slide-edge restyle (`?s3=all,edges`, test only, not approved, not merged)

These are seeded Playwright screenshots of the running game, from headless Chromium with software WebGL; nothing was tried on a real phone. The painted artwork layer is off.

- **Saved checkpoints:** `?s3=all` is still exactly the five-asset checkpoint `ad518e3`; its 3D view renders the same with this build. The approved opening `591db28` is untouched.
- **Code:** `restyleEdges` and the `EDGES` settings in `WebDemo/src/screen3_models.js`, applied only with `edges`.

| File | What it shows |
|---|---|
| `01_full_height_approved_previous_new.png` | Approved Screen 3, the five-asset version (`ad518e3`), and the new version at Tap to Start, full height |
| `02_first_two_seconds.png` | Tap to Start, then 0.5, 1.0, 1.5 and 2.0 s after the tap, five-asset and new |
| `03_through_the_door.png` | 2.5, 3.0 and 3.5 s, the protected build against the new version |
| `frames/` | Every frame, plus `optional_edges_plus_phaseA_t0.png` (with the earlier water test) |

## What `edges` changes (visual only)

- **Slide walls.** The tall pale walls and the gold tube rail on top are hidden. In their place are low, translucent, icy rims: 0.13 m high instead of 0.2 m, with a flowing white foam crest, sparkles, and foam spilling down the outer face. The chunky gold blocks along the outside stay.
  - The walls were purely decorative: the mascot moves between fixed lanes (`W.laneX`), nothing collides with the walls, and the water surface it rides on is not touched.
- **Brush.** It now stands at the approved centre (56, 576 on the screen) and outer radius (about 117 px), solved through the gameplay camera with its inner edge 1.21 m from the slide's middle: scale 1.51 at z −4.9.
- **Bubbles.** A stronger pearly film toward the rim; the centre stays at 0.035 opacity.
- **Out of view.** The opening-only scenery (8 objects) is not drawn once the camera is inside the tunnel, and is drawn again when the ride loops back.
- **`?phaseA` (the earlier water and foam test)** was tried with it and **not adopted**. It measured worse in the slide region (below), so it stays a separate option.

## Region by region, against the approved Screen 3 (Tap to Start)

How to read the measures:

- **Colour** is the average colour difference, CIE76 ΔE of each region's mean colour; lower is closer.
- **SSIM** and **edges** measure structure, meaning whether shapes and edges are in the same places; higher is closer, and 1.0 would be identical.
- The two can disagree. A region can have the right palette but the wrong shapes, or the reverse.

| Region | Previous `591db28` | Five-asset `ad518e3` | New `all,edges` | New + `phaseA` |
|---|---|---|---|---|
| Castle top: colour / SSIM / edges | 21.1 / 0.142 / 0.121 | 12.6 / 0.168 / 0.038 | 12.6 / 0.169 / 0.038 | 11.5 / 0.169 / 0.033 |
| Castle sides | 28.7 / 0.057 / 0.185 | 31.8 / 0.060 / 0.189 | 31.8 / 0.060 / 0.189 | 35.6 / 0.058 / 0.178 |
| Door | 7.3 / 0.068 / −0.049 | 11.2 / 0.062 / 0.026 | 12.7 / 0.053 / 0.024 | 13.8 / 0.055 / 0.030 |
| Left brush | 7.0 / 0.075 / 0.034 | 7.1 / 0.090 / 0.094 | **3.4** / 0.060 / **0.121** | 4.5 / 0.067 / 0.148 |
| Right machinery + bubble | 3.8 / 0.070 / 0.086 | 5.1 / 0.071 / 0.168 | **2.6** / 0.050 / **0.179** | 2.7 / 0.057 / 0.183 |
| Slide and water | 5.9 / 0.128 / 0.140 | 5.9 / 0.129 / 0.141 | **5.0** / 0.121 / 0.115 | 7.7 / 0.116 / −0.036 |
| **Average** | 12.3 / 0.090 / 0.086 | 12.3 / 0.097 / 0.109 | **11.3** / 0.086 / **0.111** | 12.6 / 0.087 / 0.089 |

What the numbers say:

- **Brush and machinery:** colour and edge alignment both improved. They now stand where the approved image has them and are no longer hidden.
- **Castle top:** colour improved a lot against the old castle, but its structure did not.
- **Door:** it got less similar in colour with the #3 entrance, which is blue where the approved tunnel view is violet and pink.
- **Structural similarity is low everywhere** (SSIM about 0.05–0.17). That is the measured form of "it still does not look like the painting": the shapes and layout differ, not only the colours.

## Honest scores (out of 10, against the approved Screen 3)

| | Five-asset | New `all,edges` | Main remaining difference |
|---|---|---|---|
| Castle (#4) | 6.5 | 6.5 | Its towers are off-screen (narrow arch); no painted mist and glow |
| Washer entrance (#3) | 6 | 6 | Horseshoe, about 26 % larger than the approved door; the real tunnel shows through, not the painted vortex |
| Blue brush (#1) | 6 | 6.5 | Now at the approved size and place; the face design and fibres differ from the painted brush |
| Gold machinery (#2) | 6 | 6.5 | Now fully visible; the cyan capsule dominates, where the approved shows chunkier ribbed gold |
| Pearly bubbles (#5) | 5.5 | 6 | Real transparent films, still fainter than the painted, luminous bubbles |
| Slide, water and foam | 5 | 6 | Icy, foamy edges and gold block rails instead of tall pale walls; the approved slide is drawn wider and steeper |
| **Whole opening** | **6** | **6.5** | |

## Why it does not reach about 8/10 with the current models and protected gameplay

1. **Camera and perspective.** The approved image is painted from a viewpoint where the slide is wide and rises steeply, with the brush and machinery overlapping its edges. The protected gameplay camera and the 2.2 m slide with fixed lanes give a narrower view. Everything must stay 1.18 m from the middle, so the side scenery cannot overlap the slide as in the painting.
2. **The view through the door.** The approved tunnel is a straight, glowing vortex. The real tunnel climbs and turns left about 5 m in, and it is protected. A procedural vortex was tried and rejected earlier ("looks like a target"), and putting the painted vortex inside would be using the illustration, which you ruled out.
3. **Model proportions:**
   - The castle's arch is narrow compared with how far its towers stand out. Scaled for the tunnel, its towers fall outside the view, and the screen's sides show the older water towers instead.
   - The entrance's opening is only about 55 % of its frame's size. Shown with room for the mascot and camera, it is larger than the approved door.
4. **Painted versus rendered.** The approved soft glow, haze and luminous bubbles are painted. Real-time lighting and transparent films can approach that look, but not equal it.

## Reusable assets and what would be needed next

- **Keep as they are:** the brush, machinery, bubbles and icy edges are in the right places. So are the castle's colours and the entrance's gold and blue design.
- **A castle variant:** the arch opening about 0.75 of the distance between the two tower centres, with a round top. Its towers would then frame the door at the game's door size, the biggest structural gain left, in the castle-sides region.
- **An entrance variant:** an opening at least about 70 % of its frame's outer diameter, so it can stand at the approved door size. Optionally, a violet-and-pink inner rim to match the approved door's colours.
- **Your decision on the camera and perspective:** matching the painting's wide, steep view would mean changing the protected opening camera. I have not done that, and do not recommend it without your explicit decision.
- **Realistic expectation:** even with both variants, this would be about 7–7.5/10. Reaching 8.5–9 would also need the camera change.

## Checks (same seed and inputs as `591db28`)

- **Controls and movement:**
  - settings, Tap to Start, real swipes (left, right, up to jump), the ride into the tunnel and the keyboard start are identical;
  - the camera path is identical.
- **Seeded 13 s run:** identical, ending with 12 coins, 2 gems, 3 socks, 1 lap, same position and lane.
- **Tunnel:** the 3D view is pixel-identical at 3.5 s (the mouth) and 5.5 s (inside).
  - With `phaseA` added, 257 pixels at the mouth differ by 1 level out of 255.
- **Errors:** no console errors, no missing textures and no failed downloads.
- **Cost of one frame at Tap to Start:** 280 draw calls and 1.69 M triangles, against 322 and 1.91 M before.
- **Cost in the tunnel:** 119 calls and 703.6 k triangles, against 120 and 703.7 k.
- **`?s3=all`:** the 3D view is the same as at `ad518e3`. Only on-page text and animation timing differ.
- **The normal page without switches:** unchanged against `591db28`; only the HUD row's rendering timing differs.

## Tools in this session

- **Used:** Playwright with Chromium (and Chrome for Testing) running the real game. On top of that, custom in-page hooks for:
  - draw calls and triangles;
  - lane and axis clearance;
  - seeded frames and pixel comparisons.
- **Not enabled:** the "parallax-threejs" plugin (Three.js scene and GL debugging, visual regression) is in the plugin catalogue but not enabled. It would need your approval and setup, and the same checks were done with the existing scripts.
- **Not applicable:**
  - the Unity plugin needs the Unity editor and a move to Unity, which you ruled out;
  - the 3D CAD Converter plugin is a Windows desktop app.
- **Not available:** there is no Blender, 3D-editor or Meshy connection in this session, and nothing was installed.
