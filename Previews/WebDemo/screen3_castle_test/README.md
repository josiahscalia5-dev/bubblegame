# Number 4 castle and Number 3 entrance in the real 3D opening (test, not approved)

These are seeded Playwright screenshots of the running game, from headless Chromium with software WebGL; nothing was tried on a real phone. The painted artwork layer is turned off for the 3D columns. The "previous" frames come from commit `591db28`.

- **Switches:**
  - `?s3=castle` shows the newest castle (`BWK_Number4_Castle_Newest_Claude_Small.glb`).
  - `?s3=castle,entrance` also shows the #3 entrance (`BWK_Enchanted_Entrance_New_Claude_Small.glb`).
  - Without the switch, nothing is downloaded and the game is unchanged.
- **Code:** `WebDemo/src/screen3_models.js`. The models are byte-identical copies in `WebDemo/models/s3_*.glb`; the originals are in `Design/MeshyDeliveries/Screen3Models/`.

| File | What it shows |
|---|---|
| `01_tap_to_start_full_height.png` | Approved Screen 3, the previous 3D opening, castle, and castle + entrance |
| `02_first_two_seconds.png` | Tap to Start, then 0.5, 1.0, 1.5 and 2.0 s after the tap |
| `03_through_the_door.png` | 2.5, 3.0 and 3.5 s: passing through the door into the existing tunnel |
| `frames/` | Every frame at full size |

## Placement, measured on the models and the gameplay camera

- **Castle:**
  - Scale 10.0, with its arch centred on the tunnel's axis. The arch's sides stand 2.63 m from the axis, outside the drum's 2.57 m lip.
  - Its front stands at z 2.75, just behind the gold door rim, so the rim hides the castle's own arch trim. At scale 10.5 a second gold arc showed above the rim.
  - It replaces the old castle model, the lavender wall facing around the door and the crown on the old arch.
- **Entrance:**
  - Its hollow (a circle of radius 0.52 in model units) is centred on the axis at a radius of 2.05 m. Its nearest point is 1.95 m from the axis; the mascot reaches about 1.8 m and the camera 1.61 m.
  - It replaces the code-built gold rim, seal and rings.
- **Materials** (on each model's own copy):
  - a little glow from the colour texture;
  - warmer, brighter gold, and less pure mirror on the gold, which read as dark bronze;
  - pink softened toward lavender-rose;
  - water chambers lighter and icier.

## Limits found

- **The castle's towers are off-screen.** Its arch is narrow (half-width 0.263) compared with how far its towers stand out (about 0.70). Once the arch is wide enough for the existing tunnel, the towers stand outside the camera's view. To frame the door the way the approved image does, the arch would need to be about twice as wide relative to the towers. The blue towers at the screen's sides are the existing Meshy water towers.
- **The entrance is larger than the approved door.** Its opening is only about 55 % of its frame's size, so an opening wide enough for the mascot and camera makes the frame about 26 % larger than the approved door (outer radius about 3.7 m against 3.0 m).

## Checks

- **Same seed and inputs as `591db28`:**
  - the camera path is identical;
  - settings, Tap to Start, real swipes (left, right, up to jump) and the keyboard start behave the same;
  - the same coins, gems and socks are collected.
- **Tunnel:** inside it, the 3D view is pixel-identical (3.5 s after the tap).
- **Errors:** no console errors and no failed downloads.
- **Cost of one frame at Tap to Start:**
  - castle: 320 draw calls and 1.76 M triangles;
  - castle + entrance: 305 calls and 1.77 M;
  - before: 322 calls and 1.91 M.
- **Cost in the tunnel:** 121 calls and 729 k triangles, against 120 and 704 k. The castle is still drawn behind the drum walls.
- **The normal page without `?s3`:** pixel-identical to `591db28` with the artwork on, at Tap to Start and in the tunnel. With the artwork off, the 3D scene is identical; only on-page text (the steering hint's fade and the HUD row) differs, because it animates on the real clock.
