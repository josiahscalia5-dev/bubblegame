# Round 4: reconstructing the approved Screen 4's scenery in the real 3D game (`?s3=round4`, test, not approved)

What you asked for (4 November, afternoon): small adjustments were not enough. You wanted the scenery itself rebuilt toward
the approved Screen 4, as real moving 3D gameplay and never a flat picture:

- the tunnel's geometry, light and depth;
- thick white water splashes;
- rich turquoise water;
- big fluffy brushes framing the sides;
- the camera composition;
- the coins, gem and bubbles;
- a gameplay video and comparisons with the existing version.

Round 4 is a **new switch on top of round 3**:

- `?s3=round3` stays exactly as in your recording;
- the normal game is unchanged.

## What was rebuilt (all real 3D: geometry, animated shaders, particles)

| Approved Screen 4 | Existing (round 3) | Reconstructed (round 4) | Where |
|---|---|---|---|
| **Deep electric-blue tunnel** with glowing cyan rings, gold trim and deep, layered perspective | The user's Meshy drum (pale, pastel walls) with flat light rings; the path turns up and left about 5 m inside, so the far tunnel slides off-centre | A **new tunnel lining** along the path: deep electric blue with a bright cyan line at every ring, white water swirling over it and sparkles. **Real 3D rings:** 32 glowing cyan tubes and 11 gold trims, every 1.15 m. The path's first part is **4 m straighter**, so you look straight down the concentric rings; the climb, crest, drop and turns are kept, just later. | `src/tunnel_r4.js`, `src/track.js` (`opts.straight`) |
| **Huge fluffy pom-pom brushes**: royal-blue middle, white ring, pink and white fringe on the right; pink and white on the left | Recoloured wheels that read as mechanical discs | **Pom-pom brushes**: 368 soft, strand-shaded clumps over a domed ball, banded as in the approved picture. They spin as before, at the same places and with the same knocks. They **slide out of the tunnel wall** as you approach (from about 11 m ahead), so the far tunnel stays open, as in the approved picture. | `src/tunnel_s4.js` (`r4PomPom`) |
| **Dramatic white splash** round the character | Foam heaps and spray | A **splash crown**: 32 curving water sheets rising round the character, curling outward, breaking into froth and falling back, all the time it rides. Bigger foam heaps at its sides. Spray as before. | `tunnel_r4.js` (`splashCrown`), `tunnel_r3.js` |
| **Rich turquoise water** with froth | A blue surface with a cell pattern that read as a tiled floor | The cell patterns are taken out. The water is turquoise in the middle and deeper blue at the sides, with **rolling crests** moving with the flow and **streaks of white froth**, thick and churned round the character. | `tunnel_s4.js` (`waterR4`) |
| **The bright heart of the tunnel** | Brushes and blue rings | A **whirlpool**: white and cyan spiral arms, ripples, a pastel rainbow band and sparkles, always about 14 m down the tunnel. | `tunnel_r3.js` (`whirlpool`, round 4 only) |
| **Rich, saturated colour** | Pastel and light | A **drum grade** with more saturation and contrast and a little less exposure. | `tunnel_s4.js` (`round2Light`) |

What stays the same: the pink character, controls, HUD, mission, hearts and power-ups, collectibles and their rules, and the
opening. The camera is round 3's.

## Files here

- `bubblewash_round4_gameplay.mp4`: real gameplay with real swipes and real clicks on the HUD buttons, the same inputs as
  the round 3 video.
- `01_approved_vs_existing_vs_reconstructed.png`, `02_during_movement.png`, `03_tap_to_start.png`
- `measures.md`: the comparison tool's numbers.
- `checks/`: controls, rules, ride-through and frame cost.
- `frames/`: the frames the sheets use.

RESULTS_PLACEHOLDER
