# Round 2: the inside tunnel polished, with the Screen 4 controls (`?s3=round2`, test only, not approved, not merged)

These are seeded Playwright screenshots and a recording of the running game, made in headless Chromium with software WebGL. Nothing was tried on a real phone.

- **The new test:** `?s3=round2` turns on the painted opening (`?s3=paint`, unchanged), last round's tunnel, and this round's polish and controls.
- **Last round's test** is still `?s3=paint,tunnel`, and it plays exactly as before.
- **The normal game** (no switch) is unchanged.
- **The intro (Laundry Toss, Inside the Wash) is not started.** Its list of missing assets is in [`Design/LAUNDRY_TOSS_INTRO_ASSETS.md`](../../../Design/LAUNDRY_TOSS_INTRO_ASSETS.md).

| File | What it shows |
|---|---|
| `01_tunnel_vs_approved.png` | Approved Screen 4, last round and this round, at the same moment just inside the drum |
| `02_tunnel_views.png` | From the recording: the entrance, mid tunnel, brushes, coins and socks |
| `03_controls.png` | From the recording: a brush taking a heart, pause, Bubble Blast clearing the brushes, Turbo Spin |
| `04_exit_before_after.png` | The tunnel's exit, last round (white light) and now (a coloured vortex) |
| `bubblewash_round2_tunnel_wip.mp4` | 11.5 s of real gameplay (work in progress, recorded just before the stronger brush warning was added). It shows: Tap to Start; the portal; the middle coin line through the first brush gate and the first sock; the left coin line and the second sock; **pause and resume**; the gem; a **knock that takes a heart** (5 → 4); the right lane and the third sock; **Bubble Blast** pushing the next pair of brushes to the walls, then riding safely past the cleared right brush; the fourth sock; **Turbo Spin**; the fifth sock and the last gem (**5/5 socks**); the exit vortex; and the loop back to the slide. |
| `frames/` | Key frames of the video at full size, and `video_track.json` (the game state in every frame) |

## Your two questions

- **Why the hearts stayed at "5 Full" after two knocks.**
  - That was not intended. Last round the hearts were a fixed label, and a brush knock did not take a heart.
  - Now each knock takes one heart, and the HUD shows it at once ("4", "3", …).
  - The heart shakes, and the screen edges flash pink.
  - For one second after a knock, another brush cannot knock you.
  - With no hearts left, "Out of hearts!" shows. After 1.4 s the game goes back to Tap to Start with 5 hearts and 3 of each power-up.
- **Why the recording went back to the opening after the bright exit.**
  - That is the game's own behaviour for now, not a test reset.
  - Screens 5 onward are not built yet, so at the end of the drum the run loops back to the slide (`game.js` `loopRun`). It counts a lap and keeps your coins.
  - In this test the flash at the loop is cyan and lavender instead of white.

## What changed, by your list

1. **Resemblance to the approved screen (cyan, pink, lavender, gold):**
   - The ring vortex is now pink, lavender, cyan, orchid and gold.
   - The drum walls are a little more violet and magenta, as the approved upper tunnel.
   - The gold gears on the walls glow gold instead of looking brown.
   - The real 3D rings, brushes, water track and machinery are all kept.
2. **Lighting, never washed out:**
   - The white burst of rays at the exit is now a coloured vortex: a small white heart, then cyan, pink and lavender spiral arms on deep blue. The vortex rings continue into it.
   - Inside the drum, a grading step gives pale areas their colour back and rolls the brightest areas off before they turn white.
   - The glow over bright parts is softer in the drum.
   - The white foam blanket over the water is gone (see 6).
3. **Golden paw coins:**
   - Real 3D coins: thick polished yellow gold, a raised outer rim, a raised inner ring, and a raised paw print (four toes over a big pad) on both faces (`WebDemo/src/paw_coin.js`). They are not a flat picture.
   - They no longer spin edge-on: each keeps its paw toward you and rocks gently, in a wave along its line.
   - A lighter version is drawn for coins far from the camera.
4. **Bubble Blast, Turbo Spin and pause** (they appear when the run starts; the Tap to Start screen keeps the approved gear):
   - **Bubble Blast** (bottom left, badge 3): a stream of bubbles shoots forward, and for 3 s every brush up to 13 m ahead slides back to the wall. You can ride through its lane safely, and its warning glow goes out.
   - **Turbo Spin** (bottom right, badge 3): 2.5 s of spinning at about 1.45× speed, with a spray trail, and brushes cannot knock you while it lasts.
   - Each press counts down the badge; at 0 the button greys out. The screen edges glow cyan while you are protected.
   - **Pause** (right of the sock panel, where the approved screen has it) replaces the gameplay gear. It opens a Paused panel with **Resume**, **Sound: On/Off** (the gear's old job) and **Restart**. The game stands completely still while paused.
   - **Keyboard on a laptop:** P or Escape pauses, B is Bubble Blast, T is Turbo Spin.
5. **Brush damage and hearts:** see your first question above.
6. **Water and foam:**
   - The drum's water is a saturated cyan-blue.
   - Around the mascot there is now thin bubble lace, a white contact line and a V trail, with water showing between the bubbles, instead of a solid white sheet.
   - Faint flowing lane guides mark the three lanes.
7. **The pink character:** unchanged (same model, fur and size; no backpack). Only the camera, the water and the collectibles around it changed.
8. **The approved blue opening and the entrance-to-tunnel hand-over:** unchanged.

## Your clean-up message: collectibles, spacing and readability

- **Coins in clean lane lines** (21 in the tunnel, 1 m apart, all at the same height):
  - The lines lead through the safe lane past each brush and end at a sock.
  - The first line runs down the middle lane between the first pair of brushes.
  - The scattered high coins and the arc are gone, and so are the coins and the gem placed after the loop point, which could never be collected.
  - The two coins in front of the portal, part of the approved opening, stay.
- **Socks:**
  - 20 % bigger, with a cleaner, brighter white knit and a soft warm glow behind each one, so they stand out from bubbles and foam.
  - Each sits at the end of a coin trail: middle, left, right, middle, left.
- **Gems:**
  - 20 % bigger, glossy magenta and clearly unlike the coins and socks.
  - Two in the tunnel: middle lane between two brushes, and left lane at the end.
- **Brushes:**
  - Smoother colours (the speckled bristle colours are evened out) and a soft pale sheen around the rim.
  - The right-hand ones are a lighter periwinkle blue with their pink fringe, and the left-hand ones a softer pink.
  - **Danger is marked:** the water glows pink, with soft stripes, in a brush's lane for the last few metres before it.
- **Less clutter:**
  - 22 soap bubbles instead of 46, kept up on the walls.
  - The ambient bubbles in the drum moved up to the walls and made smaller (no more big rainbow bubble over the mascot).
  - The drum's old rollers are hidden; they stood beside the new spinning brushes.
  - Fewer ring sparkles.
  - A coin, sock or gem you pass in another lane now shrinks away, instead of sweeping past close to the camera.
  - A collected item rises and shrinks instead of swelling over the mascot.

## Checks so far (seeded Playwright runs)

- **Hearts:** five knocks take the hearts 5 → 4 → 3 → 2 → 1 → 0, and the HUD shows each one. At 0, the game goes back to Tap to Start 1.4 s later with "5 Full".
- **Pause:** game time stands still while paused, it runs on after Resume, and the P key does the same.
- **Bubble Blast:** clears the brush pair ahead (passing a cleared brush in its lane: no knock). The badge counts 3 → 0, and the button is disabled at 0.
- **Turbo Spin:** speed rises from 6.1 to 7.9 m/s, and riding into a brush's lane: no knock.
- **No console errors.**
- **The normal game (no switch):** the same seeded run as before (12 coins, 2 gems, 3 socks, ends at z 3.525). The 3D picture is pixel-identical. The only pixel differences are the browser's smoothing of the four small HUD icon pictures (heart, plus, coin, gem), by at most 10 brightness levels out of 255.
- **Last round's `?s3=paint,tunnel`:** the same seeded run as before (18 coins, 1 gem, 3 socks, ends at z 0.869).
- **Still to finish:**
  - the stronger brush warning on the water (being fixed: it did not show);
  - the final video and the comparison sheets;
  - the frame cost;
  - the honest score.
