# Round 4, second pass: water and white splashes, fluffy brushes, deeper tunnel (`?s3=round4`, test, not approved)

4 November 2026, second Claude account, branch `ccr-8ca1fe92-d6t2bm`. Your priorities, in order: the water and white
splashes, the fluffy brushes, then the tunnel and composition.

## The comparison

`01_approved_previous_new.png`: the approved Screen 4, the previous playable Round 4 (`fa4e2fc`, as recovered) and the
new one, real game frames at the same moment (4.2 s after Tap to Start), 538 x 1076, same seed, inputs and camera.
Video: `bubblewash_round4_water_brushes.mp4` (real gameplay, real swipes and button clicks).

## What changed (all live 3D: geometry, animated shaders, particles; Round 4 only)

| Approved Screen 4 | Before | Now | Where |
|---|---|---|---|
| Foreground foam made of distinct soap bubbles: white rims, blue-lavender centres, glints | Big smooth, pale lavender mounds (the comparison counted them as "pale milky blue", not white) | **Real 3D bubbles** (1,050, instanced) riding on the foam heaps, white-rimmed, blue-lavender centres, glints and a hint of iridescence; the heaps white only on their crests, saturated blue in the shade | `tunnel_r3.js` (`foamHeaps`, `FOAM_BUBBLE_*`), `tunnel_r4.js` (`foam`, `foamBubbles`) |
| Thick white splash round the character | Regular, streaky white fans; tall sheets in front of the character striped its pink | Splash sheets with an uneven number of wide, wavy white fingers ending in droplets; low froth on the camera's side | `tunnel_r4.js` (`splashCrown`) |
| White spray | 110 drops a second | 400 a second, bigger | `game.js` (`stepRound3`), `tunnel_r4.js` (`spray`) |
| Turquoise water | Azure (hue about 204°) | Turquoise middle (about 193°) | `tunnel_r4.js` (`water`) |
| Huge soft brushes: royal-blue core, white ring, pink fringe of looped tufts with pale tips (pink and white on the left) | Pom-poms of hard petal-like clumps | **Fluffy shell-fur brushes**: 20 fur shells cut into clumped fibre strands, two rows of hairy fringe cards, ragged colour bands, pale tips. They stand, spin, slide out of the wall and knock exactly as before | `fluffy_brush.js` |
| Deep electric-blue tunnel | Pale cyan dominated | Deeper lining, softer streaks and ring glow | `tunnel_r4.js` (`lining`, `rings`) |
| Character's size and place, tunnel centre | Character and tunnel centre a little high | Drum camera aimed a little higher (Round 4 only) | `game.js` (`S4.look`), `tunnel_r4.js` (`camera`) |

The fluffy brush was first checked on its own beside the approved brush crops: `brush_vs_approved.png` (approved right brush,
new right brush at two spin angles, approved left brush, new left brush).

## Measured against the approved Screen 4 (`measures.md`, `measures_heatmaps.jpg`)

Composition (third priority): the Round 4 drum camera now aims a little higher (`ROUND4.camera.lookY` 1.3; Round 3 is
1.1), so the character's top sits at about 62% of the height (approved 63%) and the tunnel's centre comes down toward the
middle. The left brushes carry a wider white ring. A higher aim (1.5) measured slightly better overall but hid the
character behind the bottom buttons, so it was not used.

Share of the play area (approved / previous / new, at 4.2 s):

- pale milky blue 11.5% / 15.1% / **10.9%**;
- deep blue tunnel 6.2% / 3.1% / **4.8%** (6.0% at 5.0 s, 7.5% at 6.0 s);
- turquoise water 1.9% / 0.9% / **1.4%**;
- white foam and splash 20.8% / 16.1% / **17.3%** (21.2% at 5.0 s);
- pink 13.9% / 22.4% / **20.1%**: still too much pink (the character and the pink brush fringes; at 3.6 s it is worse,
  21.0% against 18.1%).

Mean colour difference over the play area (lower is closer), previous → new: **25.9 → 24.8** at 3.6 s,
**24.6 → 23.3** at 4.2 s, **25.0 → 24.0** at 5.0 s, **24.8 → 23.5** at 6.0 s: closer at every moment. The centre
(the tunnel's depth) at 4.2 s: 13.0 → 11.4. The right side at 5.0 s: 17.3 → 7.6.

**Honest score: about 7.5/10** (previous about 7). Closer in the water, foam, brushes, tunnel colour and framing, but not
90%.

What still keeps it from the approved screen:

- **Composition.** The approved picture looks straight into a centred, bright, concentric vortex, with the coins, gem
  and sock arranged round it. In the game the path bends left and climbs about 9 m into the drum, so the far tunnel
  slides off-centre, and the coins sit in lanes as collectibles. Straightening more of the path would move the approved
  climb, drop and turns, so it was not done without your decision.
- Too much pink, and the foam is still paler and lower in contrast than the painted foam.
- The bottom HUD buttons cover the foreground foam.

## Checks (`checks/`)

- **Unchanged:** the normal game, Round 2 and Round 3 render pixel-identical to the recovered build (`fa4e2fc`) at Tap to
  Start and at 2, 4.2 and 6 s (3D canvas, 0 pixels differ in all 12 comparisons; the normal game and Round 3 checked
  again after the camera change: 0 pixels in all 8).
- Controls, rules, ride-through in every lane and frame cost for Round 4: see `checks/README.md`.
