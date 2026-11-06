# Screen 4: the run starts INSIDE the tunnel (`?s3=intunnel`; 6 November 2026, fourteenth session)

- **The user's directive** (about 13:30 UTC): "the playable game must start directly inside this blue laundry tunnel, with
  my pink character traveling on top of the water. No girl scene, no extra opening, and no separate swimming sequence."
  - The girl, Laundry Toss, a washing-machine cinematic and the castle are later work; none of it is built here.
- **The target:** the ORIGINAL approved Screen 4 only
  (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
- **`?s3=intunnel`** = `bt` (step 8, the smaller brushes, the sock's blue toe) plus the start below. `bt`, `focus`, `match`,
  the normal game and the older switches are unchanged (proof below). Rollback point: commit `6febe04`.

## What changes (`WebDemo/src/tunnel_s4_bt.js` `INTUNNEL`; code gated on `INTUNNEL_ON`)

| | before (`bt`) | `intunnel` |
|---|---|---|
| where the run starts | the slide outside the washing machine, 16.7 m before the drum's mouth | **inside**, at the approved viewpoint: 1.592 m along the path, the very spot of the approved 3.0 s moment |
| Tap to Start shows | the Screen 3 opening (castle, slide, the "Let's go! Into the washing machine!" banner) | **the approved in-tunnel view**: the gold rim, the rings, the HUD and mission banner, her on the water, a small Tap to Start pill under her |
| after the tap | about 3 s down the slide and into the drum | she **rides on at once** at 7.21 m/s, the approved moment's speed |
| each lap and each restart | back to the slide | back to the in-tunnel start |

- **Game code:** `game.js`. Her start and reset place; her speed on the tap and on each lap; the tunnel's HUD from Tap to
  Start; the camera's tilt at its running value. Also `visSpeed`: the water's visuals use her riding speed while she waits,
  so the swell and bow wave look as when she moves.
- **The opening camera is off** (`screen3_models.js` `S3.cine`). The Screen 3 opening draws Tap to Start through its own
  camera, 0.82 m further forward and pitched. Inside the tunnel that zoomed the start screen in about 1.25 x. Found by
  probing: the gameplay camera's numbers were identical, the picture was not.
- **The painted Screen 3 picture and the Screen 3 banner are off;** the Tap to Start panel is a small pill (`page.html`).
- **Unchanged:** the course, lanes, coins, gem, socks, brushes and their knock, hearts, pause, Bubble Blast, Turbo Spin.
  The layout's own `startZ` is not changed: it also places scenery and random items.

## Proof

| test | result |
|---|---|
| `?s3=bt` at 3.0 s on the `intunnel` build vs the accepted `bt` | 0 differing pixels |
| `?s3=focus` at 4.0 s on the `intunnel` build vs step 8 | 0 differing pixels |
| the `intunnel` start screen vs the approved composition (the `bt` 3.0 s frame) | the same framing. Her pink is 0.686-0.846 H, x 0.236-0.712 (`bt` 3.0 s: 0.689-0.849, 0.236-0.714). What differs is animation: the water's flow, the sock's rocking and the brushes' turning follow the game clock |

## Region comparison of the accepted build (`regions_baseline/`, `tools/screen4/region_compare.py`)

- **Method:** OpenCV, scikit-image and LPIPS, region by region against the original. No single score is a verdict.
- **Ranking by LPIPS** (lower is closer):

| region | LPIPS |
|---|---|
| foreground water | **0.652** |
| character and water contact | **0.592** |
| coins, gem and sock | 0.567 |
| far centre | 0.465 |
| bubbles and upper light | 0.46 |
| brushes | 0.451 |
| tunnel rings | 0.385 |

- **What the colour shares say** about the two largest:
  - lavender round her base: 0.3 % against the original's 6.5 %;
  - lavender in the foreground water: 0.6 % against 6.5 %.

  That is the original's translucent lavender bubble domes, missing: the next correction (`../41_bubble_domes/`).
