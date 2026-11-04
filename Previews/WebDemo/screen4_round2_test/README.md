# Round 2: the inside tunnel polished, with the Screen 4 controls (`?s3=round2`, test only, not approved, not merged)

These are seeded Playwright screenshots and a recording of the running game, made in headless Chromium with software WebGL. Nothing was tried on a real phone.

- **The new test:** `?s3=round2` turns on the painted opening (`?s3=paint`, unchanged), last round's tunnel, and this round's polish and controls.
- **Last round's test** is still `?s3=paint,tunnel`, and it plays exactly as before.
- **The normal game** (no switch) is unchanged.
- **The intro (Laundry Toss, Inside the Wash) is not started.** Its list of missing assets is in [`Design/LAUNDRY_TOSS_INTRO_ASSETS.md`](../../../Design/LAUNDRY_TOSS_INTRO_ASSETS.md).

| File | What it shows |
|---|---|
| `bubblewash_round2_tunnel_final.mp4` | **The final video:** 11.5 s of real gameplay, with the brush warning fixed. It shows: Tap to Start; the portal; the middle coin line through the first brush gate (both outer lanes glowing pink) and the first sock; the left coin line and the second sock, with the right lane glowing ahead; **pause and resume**; the gem; the pink warning in the left lane, then a **knock that takes a heart** (5 → 4); the right lane and the third sock; **Bubble Blast** pushing the next pair of brushes to the walls (their warning goes out), then riding safely past the cleared right brush; the fourth sock; **Turbo Spin**; the fifth sock and the last gem (**5/5 socks**); the exit vortex; and the loop back to the slide. No console errors. |
| `01_tunnel_vs_approved.png` | Approved Screen 4, last round and this round, at the same moment just inside the drum (3.5 s after the tap, seed 7, middle lane) |
| `02_tunnel_views.png` | From the final video: the entrance, the brushes with their pink warning, coins, socks, mid tunnel and the exit |
| `03_controls.png` | From the final video: pause, a brush taking a heart, Bubble Blast clearing the brushes, riding past a cleared brush, Turbo Spin |
| `04_exit_before_after.png` | The tunnel's exit, last round (white light) and now (a coloured vortex) |
| `05_brush_warning_before_after.jpg` | The brush warning before and after the fix (real renders of the game at the same moments) |
| `checks_functional.txt` | The functional checks (`r2_func.cjs`): hearts, pause, Bubble Blast, Turbo Spin |
| `frames/` | The video frames used in the sheets at full size, `round2_t3.5.png` (the seeded frame in sheet 01) and `final_video_track.json` (the game state in every frame of the video) |
| `bubblewash_round2_tunnel_wip.mp4`, `frames/wip_video/` | The earlier work-in-progress video and its frames, recorded before the warning was fixed (kept for comparison) |
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
  - **Danger is marked:** the water glows pink, with soft moving stripes, in a brush's lane from 7.5 m before it (full from 3 m). It goes out when Bubble Blast clears the brush. See `05_brush_warning_before_after.jpg`.

## The brush warning: why it did not show, and the fix

The warning was being computed (a debug render showed it in the right places), but it never showed in the game, for three reasons:

1. **Too short:** it only reached full strength in the last 1.6 m before a brush, and from the camera that stretch of water is hidden behind the brush itself.
2. **Washed out:** the pink was mixed in before the water's reflections, ring light, glints and foam were added on top. Measured on screen, the strongest part came out as RGB 179, 167, 243, a pale lavender, against 88, 191, 245 for plain water.
3. **Covered:** the slide's water sheet runs 2.5 m into the drum (to 6.4 m), over the drum's own water, and the two fought for depth in streaks. The slide's sheet has no warning, so it covered about half of the first brush pair's warning.

The fix (`WebDemo/src/tunnel_s4.js`, only with `?s3=round2`):

1. The warning starts 7.5 m before a brush and is full from 3 m (`ROUND2.hazardWarn`).
2. The pink is laid on last, just before the fog, and reaches full colour at 60 % warning strength, so the stripes and pulse vary it without fading it to lavender (`WATER_R2_LATE`).
3. The drum's water now always wins where the two sheets overlap (a small polygon offset).

The tool used to find it is `WebDemo/tools/screen3/r2_render_probe.cjs`: it renders the water with debug colours at chosen points along the tunnel.
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
