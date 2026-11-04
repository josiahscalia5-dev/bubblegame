# Inside the washing machine, rebuilt toward the approved Screen 4 (`?s3=tunnel`, test only, not approved, not merged)

These are seeded Playwright screenshots and a recording of the running game, from headless Chromium with software WebGL; nothing was tried on a real phone.

- **The full run:** `?s3=paint,tunnel` gives the painted-scenery opening (`?s3=paint`, unchanged) followed by this tunnel.
- **Switches:** `?s3=tunnel` alone gives the tunnel after the normal 3D opening. `?s3=paint` alone is still exactly the painted-scenery version.

| File | What it shows |
|---|---|
| `01_opening_vs_approved.png` | Approved Screen 3 and the game's opening at Tap to Start |
| `02_tunnel_vs_approved.png` | Approved Screen 4, the protected tunnel (`591db28`) and the new tunnel, at the same moment just inside the drum |
| `03_through_the_portal.png` | One continuous run from Tap to Start through the portal into the tunnel (no cut) |
| `bubblewash_opening_and_tunnel_test.mp4` | 11 s of real gameplay: the opening, the portal, the tunnel, coins, gem and socks, dodging the first pair of brushes, then knocked out of the left lane and the right lane by brushes |
| `frames/` | Every frame at full size |

## What changed (`WebDemo/src/tunnel_s4.js`)

- **Tunnel architecture:**
  - a vortex of 38 glowing rings (violet, pink, cyan and blue, about every 0.85 m, between 2.0 and 2.5 m from the tube's axis), with sparkles and a slow light wave;
  - the drum's walls deepened to royal blue and violet;
  - the rectangular pink panels and their gold frames hidden (they are not in the approved screen).
  - The existing gold gears and cyan rings stay.
- **Spinning brushes:**
  - Nine real 3D brushes made from your Number 1 brush model, each turning about its own axis. The bracket welded under the wheel is left out, so it does not spin with it; a gold axle arm goes back to the wall instead.
  - The left-hand brushes are pink all over, like the approved left brush; the right-hand ones keep the royal-blue face with pink and white bristles.
- **Brushes as hazards:**
  - **Six low brushes** reach into an outer lane. A mascot in that lane is knocked back to the middle lane, slowed (its speed returns within about a second), squashed, with a splash and a ripple (`game.js` `bumpMascot`, called only with this switch). The middle lane is always clear.
  - **Three high brushes** on the upper walls are scenery only.
  - No brush covers a coin, gem or sock in its lane.
- **Bubbles:** 46 transparent soap-film bubbles in the drum (the same film as the opening's bubbles). They part around the mascot.
- **Water:** in the drum, a white foam collar and trailing foam around the mascot, and a more turquoise tint (the drum's own copy of the water shader).
- **Phone performance:**
  - Your brush model is drawn with 51.5 k triangles instead of 121 k (nearby points merged, colours averaged; the silhouette and colours are kept).
  - A brush is drawn only while the mascot is within 18 m before it and 6 m after it.
  - The bubbles use simple spheres.

## Measured against the approved Screen 4 (3.5 s after the tap, same camera moment)

What the measures mean:

- **Colour** is ΔE: lower is closer.
- **SSIM** and **edges** measure structure: higher is closer, and 1.0 would be identical.

| Region: colour / SSIM / edges | Protected tunnel | New tunnel |
|---|---|---|
| Upper tunnel (rings) | 28.3 / 0.069 / 0.020 | **13.4** / 0.079 / **0.111** |
| Left side (brush) | 19.0 / 0.052 / 0.111 | 20.5 / 0.079 / 0.123 |
| Right side (brush) | 22.8 / 0.105 / 0.055 | **11.8** / 0.081 / **0.128** |
| Centre (depth) | 16.6 / 0.050 / 0.119 | 13.4 / 0.054 / 0.079 |
| Lower (water, mascot) | 17.9 / 0.090 / 0.142 | 17.6 / 0.079 / 0.173 |
| **Average** | 20.9 / 0.073 / 0.089 | **15.4** / 0.074 / **0.123** |

What the numbers say:

- **Colours are clearly closer**, and edges are more aligned.
- **Structural similarity stays low** (about 0.07) for both. The approved Screen 4 is a painted, swirling composition; the game is a real tunnel seen from a moving camera, so its shapes cannot sit in exactly the same places.

## Honest score (out of 10, against the approved Screen 4)

- **About 6.5–7.** The protected tunnel was about 5.
- **What is now close:**
  - the deep blue tunnel with glowing rings;
  - big pink and blue spinning brushes at both sides;
  - floating bubbles, coins, the gem and the sock;
  - the pink character from behind on foamy water.
- **What still differs:**
  - the approved tunnel is a brighter, whiter swirling vortex with much more sparkle and splash;
  - its coins are yellow-gold (ours are orange-gold: protected collectibles, unchanged);
  - its white splashes at the bottom are larger and more painterly;
  - its brushes are softer, longer-haired.
  - The approved screen's "Bubble Blast" and "Turbo Spin" buttons are not in the game.

## Checks (same seed and inputs as `591db28`)

- **Before the tunnel:** settings, Tap to Start, real swipes (left, right, up to jump), the camera and the keyboard start are identical.
- **In the tunnel:** the brushes are a new hazard, so runs that enter an outer lane at a brush now differ from the protected game. This is expected:
  - In the functional check, a right-hand brush knocked the mascot from lane 2 to lane 1, so it collected 8 coins and 1 sock where the protected run collected 9 coins and 2 socks.
  - In the seeded 13 s run, two knocks change the route. It collects 18 coins, 1 gem and 3 socks (protected: 12, 2, 3) and ends at z 0.87 (protected: 3.53).
- **Errors:** no console errors.
- **Cost of one frame at Tap to Start:** 244 draw calls and 1.12 M triangles, against 322 and 1.91 M before.
- **Cost in the tunnel:** 142 calls and 1.12 M triangles, against 120 and 0.70 M. This is still within what the original game drew at Tap to Start.
- **The normal game without switches:** pixel-identical to `591db28`.
