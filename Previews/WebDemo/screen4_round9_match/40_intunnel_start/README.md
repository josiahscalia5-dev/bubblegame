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
- **After the art director's review of the first start screen:**
  - the game clock starts at the approved moment's 3.0 s (`INTUNNEL.clock`), so the sock's rocking, the brushes' turning
    and the water's flow are in the approved pose (the sock had been side-on, its face hidden);
  - the pause, Bubble Blast and Turbo Spin buttons show from the start, as in the approved screen;
  - Tap to Start is a small two-line badge in the gap between the buttons (`page.html`).
  - The art director's verdict: "the start screen keeps the composition".
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

  That is the original's translucent lavender bubble domes, missing. The next correction tried them (`../41_bubble_domes/`):
  two controlled candidates, both rejected by the art director and reverted. A sculpted splash-bank mesh is proposed instead.

## The final `?s3=intunnel` (bundle `9d7f484f`)

- **Sheets** (`sheets/`):
  - `01_FULLRES_original_previous_new.jpg`: ORIGINAL | PREVIOUS ACCEPTED (`bt` 3.0 s) | NEW (the in-tunnel start);
  - close-ups `02_` (tunnel), `03_` (character and water), `04_` (brushes, coins, gem, sock);
  - the moving moments at the same places, `05_` and `06_` (the previous `bt` at 4, 5 and 6 s is the new build at 1, 2 and
    3 s after the tap: she now starts where `bt` was at 3.0 s).
- **Frames:** `final/`.
- **Region comparison** (`regions_final/`): the new start scores as the previous accepted 3.0 s frame, region by region
  (LPIPS 0.37-0.66 for both, within about +-0.02). It is the same picture, now at the very start of the game.
- **Honestly:** this pass makes the game start where the user asked, at the approved view. It does not by itself bring the
  picture closer to the original. The visual correction tried this session (the bubble domes) failed twice and was reverted.

## Tests (final bundle `24d954fb`; `?s3=intunnel` draws 0 pixels differently from the tested bundle `9d7f484f`)

| test | result | file |
|---|---|---|
| `s3_func`: Tap to Start, lanes, jump, pick-ups | the run starts at 1.592 m inside the tunnel; swipes change lanes (to lane 2), the jump works; 14 coins and a sock collected; a left swipe into the brush at 9.4 m is knocked back to the middle lane | `gameplay/s3_func_intunnel.txt` |
| `r2_func`: hearts, knocks, pause, Bubble Blast, Turbo Spin | 5 knocks take the hearts from 5 to 0, then the restart at "5 Full" back at 1.592 m. Pause stops the clock; it resumes; the keyboard pause works. Bubble Blast clears the brushes ahead with no knock, runs down to 0 and disables the button. Turbo Spin raises the speed from 6.7 to 8.8 m/s with no knock. No console errors | `gameplay/r2_func_intunnel.txt` |
| videos, Pixel 7, 10 s | **straight:** the start screen, the tap, the ride down the middle lane, 2 socks, a lap back to the in-tunnel start. **Steering:** lanes 1, 0, 2, a jump, 2 socks, a lap. No console errors | `videos/intunnel_straight.mp4`, `videos/intunnel_steering.mp4` |
| 3-panel videos, ORIGINAL / previous `bt` / new | the previous build's video starts 3 s in, so both are at the same places once the new one is tapped (at its 2.0 s). For the first 2 s the new start screen is already inside while the previous is still on the slide outside | `videos/compare_straight_original_bt_intunnel.mp4`, `videos/compare_steering_original_bt_intunnel.mp4` |
| identity: the normal game, ten older switches, `match`, `match,nofoam`, `focus` (45 frames) vs step 8 | see `identity_proof_final.txt` | |
