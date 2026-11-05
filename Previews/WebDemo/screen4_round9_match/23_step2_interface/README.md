# Step 2 of the user's fidelity plan: the interface and composition of `?s3=focus` (5 November 2026, about 23:00 UTC)

- **Authority:** the ORIGINAL approved Screen 4 only (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`).
  The user's kit (`Design/ReferencePacks/2026-11-05_Screen4_Complete_Kit_from_user/`) has a smaller copy of it,
  `01_APPROVED_ORIGINAL_FULL.png`, at 489 x 984 and a slightly different crop.
- **Checkpoint before any change:** commit `d84aee5` on `ccr-9f8e2c8d-0zg3mc`, bundle `e9412484...`.
  - GitHub refuses tag pushes from this environment (HTTP 403), so the checkpoint is that commit.
  - Frames: `before/`.
- **Scope:** `?s3=focus` only. `match` (kept as the comparison and rollback baseline), the normal game and every older switch
  are unchanged (proof below).

## What changed (files and values)

- `WebDemo/src/match_phone.js`: the page gets the class `s4focus` when `?s3=focus` is on, and only then.
- `WebDemo/src/page.html`:
  - a block of CSS rules under `body.s4focus`, at the original's measured places, in board units (`--u` = the screen / 269 x 537);
  - `id="coinPill"` on the coin counter. An id alone draws nothing: the identity proof covers it.
  - The rules:
    - **counters:** scaled 1.15 round their top left, icons and numbers together. Hearts at x 15.8, coins at 115.7,
      gems at 210.4; all at y 17.5. Pre-scale widths 77.7 / 74.8 / 50.
    - **mission banner:** x 20-226, y 50-113 (was 14-214, 46-92). Inside it:
      - a larger sock (50 x 52);
      - the title at 16.2 u;
      - the progress track 141 x 16.5, with the count inside its right end, as in the original.
    - **pause:** x 230-267, y 47.5-85.5 (was 222-258, 51-87).
    - **Bubble Blast / Turbo Spin:** 90 x 56 at 3 u from the bottom; Blast at x 14, Turbo 3 u from the right edge (were 74 x
      78 at 10 u). The badge sits on the top-right corner, 29 u across, as in the original.
    - **steering hint:** hidden once she is in the drum (`body.inDrum`). During onboarding on the slide it sits above the power
      buttons.
    - **sound button on Tap to Start:** moved under the gem counter (the bigger counter covered its old place).
    - **safe areas:** `env(safe-area-inset-*)` on the top and bottom elements.
- Unchanged: the 3D scene, the camera, the collectibles, the character, every other switch's interface.

## Offsets (each element's box from the live page, `scripts/hud_rects.cjs`; the original's read off gridded zooms, about ±0.7 u)

See `offsets.md`. In short, after minus original, in board units (1 u = 0.0037 of the width, 0.0019 of the height):

- **Hearts and coin counters, banner left, top and bottom:** 0 to ±0.1 (matched).
- **Gem counter:** left and height matched; whole on screen (the original's runs off the right edge).
- **Banner right edge:** −8.3 u (−0.031 W), so the whole pause button fits beside it.
- **Pause:** −8.5 u further left (−0.032 W); top and bottom within 0.3 u; whole on screen (the original's is cut).
- **Bubble Blast:**
  - left matched, right −1.2;
  - top −9.8 u at 1:2 (y 0.890 against 0.910); 0 on the Pixel 7, where the screen is taller;
  - the bottom is whole (the original's is cut).
- **Turbo Spin:** left −15.2 u (it has to stay whole; the original's runs off the right edge); top as Bubble Blast.
- **Steering hint:** hidden at the hero moment (before: shown at y 0.885-0.974, between the buttons).
- **Composition** (the camera is unchanged; measured on the same frames, `22_verification_audit/`):
  - tunnel centre (0.525, 0.531), original's (0.528, 0.532);
  - gold rim's top y 0.206, original's about 0.21;
  - character box x 0.234-0.712, y 0.695-0.855, original's 0.212-0.732, 0.694-0.865;
  - the scene visible between the banner and the buttons: y 0.210-0.890, original's 0.212-0.911 (before: 0.170-0.830).

## Checks

- **Identity** (`identity_proof_step2.txt`):
  - **raw 3D canvas:** 49 frames of every switch, `focus` included, identical to the checkpoint (step 2 changes no 3D pixel);
  - **full page with the interface**, with the page's wall-clock CSS animations frozen (`scripts/page_shots_static.cjs`):
    - the normal game, `match`, `match,nofoam` and `splash` identical;
    - `hero` and `round6` identical on a second run. Their first-run differences (at most 10 of 255, at the icon images)
      also appear between two runs of the unchanged checkpoint.
- **Gameplay**, `focus`, step 2 build:
  - `gameplay_s3_func_focus.txt`: lanes 1 → 0 → 2, the jump, 12 coins, 1 gem, 2 socks, keyboard start, no console errors;
  - `gameplay_r2_func_focus.txt` (`VW=135 VH=270`): hearts, pause (the panel, game time frozen, resume, keyboard), Bubble Blast
    (clears both brushes, refused when empty) and Turbo Spin (6.68 → 8.78 speed, no knocks) all pass, no console errors.
- **Tested on:** the 1:2 frame (538 x 1076) and an emulated Pixel 7 (412 x 839). All captures are seed 7, Tap to Start then
  3.0 s, no steering.

## Images

- `01_original_vs_before_vs_after_3.00s.jpg`: every panel 767 x 1536.
- `02_pixel7_original_vs_before_vs_after.jpg`: the phone screen.
- `03_closeup_tunnel_centre.jpg` and `04_closeup_mascot_waterline.jpg`: the same frames cropped. Step 2 does not change them.
- `before/`, `after/`: the frames, the element boxes (`hud_rects_*.json`), the Pixel 7 captures. `iter/`: the working
  captures (iteration 1 and the Tap to Start / 1.0 s checks that found the sound button and hint overlaps).

## What still differs in this area (honest)

- The original is a crop, and a playable screen cannot copy it exactly:
  - its gem counter, pause button and both power buttons run off the right and bottom edges;
  - here they stay whole, so pause sits 8.5 u further left, the banner ends 8.3 u earlier, and Turbo Spin starts 15 u further
    left;
  - the power buttons start 9.8 u higher on a 1:2 screen (none on the Pixel 7).
- The original's power-button icons are much larger (only their tops show). Ours stay readable inside whole buttons: icon
  38 u, label underneath.
- The top area behind the counters: the original shows a glossy light-blue frame. Ours shows the drum's lavender housing with
  a thin vertical seam. Not changed in this step.
