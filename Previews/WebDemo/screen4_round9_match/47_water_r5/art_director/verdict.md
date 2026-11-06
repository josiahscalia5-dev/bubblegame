# The art director's verdict on R5 (`?s3=intunnel,water5`), 6 November 2026, about 18:50 UTC (fifteenth session)

The `game-art-director` agent (read-only), compared against the ORIGINAL approved Screen 4 only. Its crops are in this folder
(`layers.jpg`: original, texture, the water face alone, R5; `acc_band.jpg`; `zoom_L/R/side.jpg`; `mov_T1.0/2.0.jpg`).

## 1. The start frame

- **R5 against R3c: clearly closer, but only below her.**
  - **Under her and at the bottom (about y 1260-1390):** R3c's vertical light-blue streaks, flat lavender triangle and
    lavender-white smear are gone. The original's rounded bubbly lobes and lavender bubbles now sit at her base.
  - **Sides behind her (y about 1000-1200):** unchanged in R3c, R5 and the accepted build. White diagonal dash streaks over
    the water and large pale bubbles on the left, where the original has saturated blue water with crisp bubbles.
- **R5 against the accepted build: closer in the KIND of water, not in colour.** The accepted water is glossy sky-blue
  swells with drawn white commas, cleaner and bluer. R5 has the original's foamy lobes, highlight pattern and lavender
  spheres, but it is paler.
- **Measured** (foreground water zone, `region_compare.py`; LPIPS lower is closer):

  | | accepted | R3c | R5 | original |
  |---|---|---|---|---|
  | LPIPS | 0.656 | 0.576 | 0.530 | |
  | SSIM | 0.375 | 0.397 | 0.407 | |
  | saturated blue | 18.7 % | 15.2 % | 13.5 % | 24.6 % |
  | white | 15.1 % | 17.8 % | 21.1 % | 16.8 % |

## 2. Moving (+1 s, +2 s): about the same as R3c, not clearly closer than the accepted build

- R5 still removes R3c's lower streaks and lavender wedge.
- **What dominates the difference from the original:**
  - a mass of round white froth beads on both sides of her and under her;
  - at +2 s, pink four-point star glints over her and the big coin passing behind her;
  - her turning silhouette (0.22 of the screen's width against the original's 0.46).
- **Measured:**
  - white in the band at her base: 36 % at +1 s and 43 % at +2 s, against 18.6 %;
  - saturation: 0.25 and 0.21, against 0.35;
  - foreground LPIPS slightly worse than R3c: 0.665 against 0.652 at +1 s, 0.632 against 0.606 at +2 s.

## 3. The user's three complaints

- **Stretched: fixed under and below her.** Still there:
  - the white diagonal dash streaks behind her at both sides (the floor and wall water, not this layer);
  - two faint vertical seams in the fill at about x 245 and x 505, y 1320-1390, mostly hidden by the buttons.
- **Soft: partly fixed.** The lobes have the original's shapes in the right place. Directly under her, though, the forms are
  mottled blotches with no crisp bright rims: exemplar fill where the original had her body. Weak form definition, not blur.
- **Pale: not fixed.** Slightly worse at the start frame, and strongly pale while moving because of the white froth.

## 4. Verdict

**Present R5 to the user instead of R3c,** labelled honestly "stretching fixed, still pale". It looks more like the original
at the start frame and is no worse while moving. Keep it out of `intunnel` until the user approves.

## 5. The most important remaining difference: the contact edge under her

- **The original:** the water's top edge in front of her IS the lobes. Rounded foam lobes with bright white rims and clear
  lavender spheres rise over the lowest part of her deep-magenta fur, crisp and saturated against the pink.
- **R5:** a smooth, nearly straight crest line (with one step) cuts her base. Directly under it is a band of filled texture,
  pale white mush and flat purple blobs, where the original had her body. The face-alone render confirms that the face's
  top edge in front of her is its own geometric crest, not the texture's lobe outline.
- **Likely cause: the existing `heroSwell` face.**
  - Its crest in front of her comes from `MATCH_WATER.swell.line` via `swellFront` (focus dip 0.08; R2 lift 0.05 in
    `WebDemo/src/tunnel_s4_bt.js`).
  - It draws the texture fully opaque, including the filled body hole.
- **Direction, inside existing layers:** make the face transparent where the texture's mask marks the original's body, so
  her own fur shows there and the original's lobe outlines become the contact edge, without filling that hole.
- **Risk:** her base is about 23 px higher than the original's (0.844 against 0.859 of the height), so a thin gap could
  open there; it needs one controlled test.
