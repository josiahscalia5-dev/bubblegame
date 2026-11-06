# The art director's verdict on R8 against R7 (6 November 2026, about 20:50 UTC, fifteenth session)

The `game-art-director` agent (read-only), against the ORIGINAL approved Screen 4 only. Its crops are in this folder.

**Verdict: REVERT to R7.** By the user's rule ("if R8 is not visibly better, revert to R7"), R8 is not kept: even at 4x,
flipping between R7 and R8 on the spots that changed most, the two can only just be told apart.

## 1. Is R8 visibly better?

- **Start: no.** R7 and R8 look the same at sheet scale and at 2x. At 4x, on the spot that changed most (about x 455,
  y 1357, under her right side), R8's blue troughs are a hair deeper and the white lobes a hair less milky. A viewer would
  not notice.
- **+1 s: no.** It is the same picture.
- **+2 s: no**, though this is the largest change of the three: the water right of her is slightly less washed. The
  pink-white cross-shaped glints over the water there are still in R8, so they are not the bloom.
- **Why so small:** the bloom only ever added about 2-3 of 255 levels over the water (the agent's diff: a mean of 1.3-3.2
  levels per band, only a few halo pixels changing by 25-50). So the "excessive bloom" was never the haze: the pale, milky
  look is in the water's own colour and the white layers. The ablation file already shows it: turning the overlays off
  raises the dark share about as much as turning the bloom off.

## 2. Anything worse?

- **Too dark, or lost highlights:** no. Mean brightness 0.767 against the original's 0.773; crisp highlights 0.55 -> 0.56 %.
- **A seam near 0.74-0.80:** none.
  - The first changed row is 1137, and the darkening ramps smoothly from 0.02 to 2.6 levels.
  - The change in brightness from row to row there (0.26) is no bigger than the ordinary variation lower down (0.34).
  - Her head, the lower-right coin (at most a few levels darker at its base) and the bubbles show no edge.
- **Nothing above y 0.74 changed** (0 differing pixels, confirmed).
- **Measured slightly worse against the original** (numbers, not what is seen):
  - foreground water LPIPS (lower is closer): 0.524 -> 0.526 at the start, 0.673 -> 0.675 at +1 s, 0.635 -> 0.639 at +2 s;
  - SSIM (higher is closer): 0.399 -> 0.388 at the start;
  - the colour scores (dE, hist) improve slightly, and the character-and-contact region shows the same split;
  - sharpness moves further from the original's soft, painted look: 33 -> 38 at the start, 37 -> 44 at +2 s (original 2.8);
  - saturated blue at the start overshoots the original: 13.3 -> 15.7 % (original 12.2).
- **Risks if it were kept:**
  - the fade is a fixed band of the screen, so a coin or jump halo would dim as it crosses y 0.74 during play;
  - there is no Pixel 7 capture, and on a different screen shape 0.74-0.80 falls on a different part of the scene.

## 3. What differs most in the water round her (for a future experiment, the agent's best guess at the layers)

1. **Hard white diagonal streaks behind and beside her** (y about 0.73-0.78), where the original has soft rounded splash.
   Likely the floor's white flecks and streaks: `floorFx.streak` (`tunnel_r9_focus.js`), the flecks in
   `tunnel_r9_match.js` and their hooks in `tunnel_r9_match_water.js`.
2. **The front water is pastel periwinkle with soft, blurred lobes,** where the original has sculpted, bubbly white crests
   over deep, saturated azure-cobalt pockets. This comes from the face's own colour and its white overlays, not the bloom.
3. **The cross-shaped pink-white glints right of her at +2 s:** they read as the generic star sparkles the user has
   rejected. Likely the game's sparkle stream (`stepRound3`'s kind-2 sparkles) or the hero bubbles' glints, since they are
   still there with the bloom faded out.
