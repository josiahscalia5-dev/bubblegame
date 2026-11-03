# All five Screen 3 assets in the real 3D opening (test `?s3=all`, not approved, not merged)

These are seeded Playwright screenshots of the running game, from headless Chromium with software WebGL; nothing was tried on a real phone. The painted artwork layer is off for the 3D columns. The "previous" frames come from commit `591db28`.

- **Switches:** each asset has its own switch, `?s3=castle,entrance,machinery,brush,bubbles`, and `?s3=all` turns on all five. Without the switch nothing is downloaded and the game is unchanged.
- **Code:** `WebDemo/src/screen3_models.js`.

| File | What it shows |
|---|---|
| `01_full_height_approved_previous_new.png` | Approved Screen 3, the previous real 3D opening, and the new one at Tap to Start, full height |
| `02_first_two_seconds.png` | Tap to Start, then 0.5, 1.0, 1.5 and 2.0 s after the tap, previous and new |
| `03_through_the_door.png` | 2.5, 3.0 and 3.5 s: through the door into the existing tunnel |
| `frames/` | Every frame at full size |

## What each asset is and where it stands

| # | Asset | Placement (world metres; the door is at z 2.7) | Replaces |
|---|---|---|---|
| 4 | Castle (newest GLB) | Scale 10.0, arch on the tunnel axis, front at z 2.75 | Old castle, the door's wall facing, the old crown |
| 3 | Entrance (GLB) | Hollow on the axis, nearest point 1.95 m from it | Code-built gold rim, seal and rings |
| 2 | Gold machinery (GLB) | Scale 1.66, centre (-2.73, 0.4, -7), nearest point 1.25 m from the slide's middle | Code-built spoked gold wheel |
| 1 | Blue brush (GLB) | Scale 1.2, face toward the camera, centre (2.32, 0.17, -7), nearest point 1.20 m; one welded piece, so it does not spin | Old Meshy side machinery and the cream housing under it |
| 5 | Soap bubbles (code) | Sphere geometry with a Fresnel soap-film shader | The opening's flat bubbles |

More on #5, the soap bubbles:

- The opening's own bubble layout, which was measured from the approved screen, is kept.
- Three are added from the approved screen: the big one in front of #2 and two small ones beside it.
- The film is almost clear facing the camera (opacity 0.035), with colour rising toward the rim.
- They move gently, and stand still when the device asks for reduced motion.

The positions come from the approved image through the gameplay camera:

- **Brush:** centre at screen (56, 595) and radius about 105 px, against the approved (41–55, 595–607).
- **Machinery:** inner edge at x 384.
- **Big bubble:** centre (475, 526), radius 79 px.

## Honest visual-match scores (against the approved Screen 3, from these screenshots)

| | Previous | New | Main remaining differences |
|---|---|---|---|
| #4 castle | 4.5 | 6.5 | Its towers are off-screen: the model's arch is too narrow for the tunnel, so it must be scaled up until the towers leave the view. Colours are close; the painted mist and soft glow are not. |
| #3 entrance | 6 (code-built door) | 6 | A horseshoe, not a circle; about 26 % larger than the approved door, because its opening is small for its frame; the real tunnel shows through, not the painted vortex. |
| #2 gold machinery | 3 (spoked wheel) | 6 | The approved right side is chunkier, ribbed gold. Here the cyan glass capsule dominates, and the lower part is hidden by the slide's side wall and the screen edge. |
| #1 blue brush | 4 (petal face) | 6 | The royal-blue face, gold hub and bolts now read at the approved spot. It is smaller than the approved brush and cut by the screen edge, because it must stay 1.18 m from the lanes. Its fibres are angular, not soft. |
| #5 bubbles | 4.5 | 5.5 | Real transparent films in the approved places, but much fainter than the approved, luminous painted bubbles. |
| **Whole opening** | **5** | **6** | See below. |

## Why it does not reach 8.5–9 with these assets

1. **The slide and lanes.** The approved slide is drawn much wider, and its brush and machinery overlap it. The game's slide is 2.2 m with lanes 0.70 m apart, and every asset must stay 1.18 m from the middle. So the brush and machinery sit further out and are partly cut by the screen edges.
2. **The slide's tall pale side walls** fill large areas on both sides. The approved slide has low, icy, foamy edges. Changing them would change the slide's visual geometry, which needs your approval.
3. **The view through the door.** The approved image looks down a straight, glowing tunnel. The real tunnel climbs and turns left about 5 m in, and it is protected.
4. **Model proportions.** The castle's arch and the entrance's opening are small relative to their frames. Making room for the ride pushes the castle's towers off-screen and makes the entrance larger than the approved door.
5. **Painted versus rendered.** The approved image's soft glow, haze and bright pearly bubbles are painted effects. The 3D scene uses real lighting and transparent films.

## What would raise the score

- **A castle variant with a wider arch:** about 0.75 of the distance between the two tower centres, with a round top. Its towers could then frame the door at the game's door size.
- **An entrance with a larger opening:** at least about 70 % of the frame's outer diameter. It could then stand at the approved size with room for the mascot and camera.
- **Your go-ahead to restyle the slide's side walls** as low, icy, foamy edges. This is visual only; the lanes would not change.
- **Combining with `?phaseA`** (the icy water and foam test) for the water.

## Checks (same seed and inputs as `591db28`)

- **Controls and movement:**
  - settings, Tap to Start, real swipes (left, right, up to jump) and the keyboard start are identical;
  - the camera path is identical.
- **Seeded 13 s run:** identical, ending with 12 coins, 2 gems, 3 socks, 1 lap, same position and lane.
- **Tunnel:** inside it, the 3D view is pixel-identical (3.5 s after the tap).
- **Errors:** no console errors and no failed downloads.
- **Cost of one frame at Tap to Start:** 282 draw calls and 1.71 M triangles, against 322 and 1.91 M before.
- **Cost in the tunnel:** 122 calls and 808 k triangles, against 120 and 704 k. Some of the new models are still drawn there although out of sight; they could be hidden once the camera is inside.
- **The normal page without `?s3`:** unchanged; see `../screen3_castle_test/README.md`.
