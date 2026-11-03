# Opening-only cinematic camera (`?s3=all,edges,cine`, test only, not approved, not merged)

These are seeded Playwright screenshots of the running game, from headless Chromium with software WebGL; nothing was tried on a real phone. The painted artwork layer is off, so this is the real 3D scene. The saved checkpoints `591db28`, `ad518e3` and `4711680` are untouched, and `?s3=all,edges` renders the same as at `4711680`.

| File | What it shows |
|---|---|
| `01_full_height_approved_previous_new.png` | Approved Screen 3, the saved 6.5/10 version (`4711680`), and the cinematic camera at Tap to Start, full height |
| `02_first_two_seconds.png` | Tap to Start, then 0.5, 1.0, 1.5 and 2.0 s: the hand-over to the gameplay camera |
| `03_through_the_door.png` | 2.5, 3.0 and 3.5 s, the protected build against the cinematic version |
| `frames/` | Every frame at full size |

## What it is

- **Fitted to the approved image.** The camera was solved through the same projection the game uses: the door's centre (screen y 475) and outer radius (170 px), and the mascot's centre (y 730) and width (245 px).
  - The model reproduces the real gameplay camera exactly (door y 474, mascot y 689, mascot 223 px wide).
  - The fitted camera is the gameplay camera plus a small offset: 0.10 m up, 0.82 m forward, 0.30° more downward, and a 41.5° view instead of 40°.
- **A separate render camera.** It copies the gameplay camera's pose every frame and adds that offset. The gameplay camera's code and path are not changed: the camera positions reported by the game are identical at every tested moment.
- **The hand-over.** After Tap to Start the offset blends to nothing over 0.9 s of game time, then the render pass draws through the gameplay camera itself. There is no visible jump. From 1.5 s on, the frames are identical to the saved version.
- **Bubbles.** The approved-layout bubbles are placed through this camera.
- **Code:** `setupCine` and `CINE` in `WebDemo/src/screen3_models.js`. `game.js` hands its render pass to the opening layer, which uses it only with `cine`.

## Measured against the approved Screen 3 at Tap to Start

What the measures mean:

- **Colour** is the average colour difference (CIE76 ΔE of each region's mean colour); lower is closer.
- **SSIM** and **edges** measure structure: whether shapes and edges are in the same places. Higher is closer, and 1.0 would be identical.

| Region: colour / SSIM / edges | Saved `4711680` | Cinematic camera |
|---|---|---|
| Castle top | 12.6 / 0.169 / 0.038 | 12.5 / 0.166 / 0.046 |
| Castle sides | 31.8 / 0.060 / 0.189 | 31.6 / 0.044 / 0.174 |
| Door | 12.7 / 0.053 / 0.024 | 12.5 / 0.054 / 0.036 |
| Left brush | 3.4 / 0.060 / 0.121 | 2.9 / 0.057 / 0.154 |
| Right machinery + bubble | 2.6 / 0.050 / 0.179 | 2.6 / 0.066 / 0.217 |
| Slide, water and mascot | 5.0 / 0.121 / 0.115 | 6.6 / 0.134 / **0.295** |
| **Average** | 11.3 / 0.086 / 0.111 | 11.4 / 0.087 / **0.154** |

What the numbers say:

- **The centre now lines up with the approved image.** Matching the camera put the mascot and slide where the approved image has them: lower, larger, with more slide visible between mascot and door. Edge alignment in that region more than doubled.
- **Colour barely changed.**
- **The castle sides and the door are still the weakest regions.**

## Honest scores (out of 10)

| | Saved `4711680` | Cinematic camera |
|---|---|---|
| Castle (#4) | 6.5 | 6.5 |
| Washer entrance (#3) | 6 | 6 |
| Blue brush (#1) | 6.5 | 6.5 |
| Gold machinery (#2) | 6.5 | 6.5 |
| Pearly bubbles (#5) | 6 | 6 |
| Slide, water and mascot composition | 6 | 7.5 |
| **Whole opening** | **6.5** | **7** |

## What this shows

**The camera was not the main barrier.** My earlier estimate that the camera stood between 7–7.5 and 8.5–9 was wrong. Measured, the approved perspective is within a small offset of the gameplay camera's. Matching it exactly is a real but moderate gain, about half a point.

**What still keeps it below about 8 is the assets and the painting itself:**

1. **The castle sides.**
   - The castle model's arch is narrow, so once its arch is wide enough for the tunnel, its domed towers fall outside the view. The screen's sides show the older water towers.
   - This is the worst region: colour difference about 32 and SSIM 0.04.
2. **The door.**
   - The #3 entrance is a blue horseshoe, about 26 % larger than the approved door, because its opening is only about 55 % of its frame.
   - The approved door is a round gold ring with a violet band, around a white-pink vortex.
   - The real tunnel climbs and turns left, and it is protected, so the straight vortex cannot appear behind the door.
3. **Model designs.**
   - The brush's fibres are angular.
   - The machinery's cyan capsule dominates, where the approved shows chunkier ribbed gold.
4. **Painted versus rendered.** The soft glow, haze, luminous bubbles and dense white foam are painted. A real-time 3D scene approaches them but does not equal them.
5. **The duck.** It sits at the centre of the approved image and is not in the game, because you asked for it to be removed.

**Are the castle and entrance variants still necessary?** Yes. With the camera matched, they are the main remaining levers. I would still expect about 7.5–8 with both, not 8.5–9, because of points 2 (the tunnel view), 4 and 5. As you asked, no Meshy specifications are given here, because this camera improvement is moderate, not substantial.

## Checks (same seed and inputs as `591db28`)

- **Controls and movement:**
  - settings, Tap to Start, real swipes (left, right, up to jump), the ride into the tunnel and the keyboard start are identical;
  - the gameplay camera's positions are identical.
- **Seeded 13 s run:** identical, ending with 12 coins, 2 gems, 3 socks, 1 lap, same position and lane.
- **Tunnel:** the 3D view is pixel-identical at 3.5 s and 5.5 s.
- **Errors:** no console errors and no missing textures.
- **Cost of one frame at Tap to Start:** 280 draw calls and 1.69 M triangles, against 322 and 1.91 M before.
- **Cost in the tunnel:** 119 calls and 703.6 k triangles, against 120 and 703.7 k.
- **`?s3=all,edges` with this build:** pixel-identical to the `4711680` render in the 3D area.
