# Phase A, first test: castle colours and slide water (`?phaseA`, not approved, not merged)

Real seeded Playwright screenshots of the 3D game, with the artwork layer turned off so the real scene shows. The "before" frames come from commit `591db28`; the "after" frames are the same build opened with `?phaseA`. In both runs the random seed is 7, the run goes straight down the centre lane, and the camera moments are identical.

- `01_tap_to_start_before_after.png`: the approved Screen 3, then before and after at Tap to Start, full size.
- `02_first_two_seconds_before_after.png`: Tap to Start and 0.5, 1.0, 1.5 and 2.0 s after the tap, before and after.
- `03_closeups_before_after.png`: the castle above the door, and the water and foam around the mascot.
- `frames/`: every frame at full size.

## What `?phaseA` changes (`WebDemo/src/phase_a.js`)

All of these are visual only.

- **The castle model:** its near-white walls become rose-mauve and pink-lavender, its gold is softer, and a pink-white glow sits at the top of the door.
- **The Meshy water towers:** their collars are a calmer rose instead of hot pink, and their gold is softer and peachier.
- **The wall facing around the gold door ring:** pink-lavender stone with a soft glow next to the ring.
- **The slide's water** (its own copy of the water shader; the tunnel's water keeps the original):
  - icy cyan water;
  - a bold white crackle web at two sizes;
  - a thicker white foam collar around the mascot and along the slide edges;
  - more sparkles;
  - less of the pale sky reflection.

## Measured at Tap to Start against the approved Screen 3

| | Before | After | Approved |
|---|---|---|---|
| Castle area: average colour difference (CIE76 ΔE) | 11.2 | 3.5 | 0 |
| Castle area: harsh, very saturated pixels | 39 % | 25 % | 7 % |
| Slide water: white lines and foam | 2 % | 27 % | 27 % |
| Slide water: median hue | 211° | 206° | 202° |

## Checks

- **The normal page (no `?phaseA`) is unchanged:**
  - Seeded screenshots are pixel-identical to `591db28` with the artwork on and off, on the slide and in the tunnel.
  - The one exception is the Tap to Start hand pointer, which animates on the real clock.
- **The tunnel with `?phaseA`:** the 3D view is pixel-identical to `591db28`. Only the edges of on-page text (the sock panel, coin count and steering hint) differ, because their fades run on the real clock.
- **Not changed:** camera, path, lanes, collectibles, mascot and tunnel.
- **Remaining differences:** the gold door rim and gears, which are machinery and were left out of this test, and the slide's tall pale walls.
