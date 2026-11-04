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

## Checks (all on the real game in headless Chromium, seed 7)

- **The tunnel can still be ridden through** (`checks/ride_through_round4.json`): a run in each lane jumping every 0.8 s,
  and one weaving across all lanes, all reach the drum's end. Nothing gets stuck or goes backwards, and there are no
  errors. The new rings sit 1.885 m from the axis at their nearest; the body reaches 1.90 m at most, at the water line,
  below the rings' lowest point at the sides.
- **Controls** (`checks/controls_round4.json`): all pass, with no console errors.
  - The settings button, Tap to Start and the keyboard start work.
  - Swipes work: left, right twice, and up to jump.
  - Coins and socks are collected in the tunnel.
- **Hearts, pause, Bubble Blast, Turbo Spin** (`checks/rules_round4.json`): all pass, with no console errors. Hearts go to 0 and back to Tap to Start with 5; pause works from the button and the keys; Bubble Blast clears the brushes ahead and counts down to a disabled button; Turbo Spin raises the speed from 6.7 to 8.0 m/s with no knocks.
- **Video** (`frames/video_track.json`): in one run, the character visits all three lanes, jumps, pauses and resumes,
  uses Bubble Blast and Turbo Spin, rescues all 5 socks and rides through the whole tunnel, with no console errors.
- **Frame cost** (one frame, draw calls and triangles):
  - Tap to Start: 225 calls, 1.33 M triangles. That is lighter than round 3 (1.63 M); the Meshy drum is not drawn.
  - In the tunnel: 125 calls, 0.90 M triangles (round 3: 126, 1.15 M).
- **Unchanged:**
  - The normal game, `?s3=round2` and `?s3=round3` are untouched.
  - Round 3's whirlpool and tufts were moved behind the round 4 switch, so round 3 is as in your recording.

## Measured against the approved Screen 4 (`measures.md`, the same frames as the sheets)

Each cell is a share of the play area (the area between the HUD bands). In brackets: how well its place matches the
approved picture.

| Feature | Approved | Existing 3.6 s | **Round 4 3.6 s** | Existing 4.2 s | **Round 4 4.2 s** | Existing 6.0 s | **Round 4 6.0 s** |
|---|---|---|---|---|---|---|---|
| White foam and splash | 20.8% | 18.7% | **21.3%** | 14.1% | **16.1%** | 18.7% | 13.7% |
| Pink | 13.9% | 24.1% | **18.1%** | 21.4% | 22.4% | 20.7% | **15.0%** |
| Gold coins | 8.0% | 5.9% | **8.4%** | 10.7% | 12.9% | 3.9% | 5.8% |
| Deep blue tunnel | 6.2% | 1.3% | **2.9%** | 4.0% | 3.1% | 11.0% | **7.0%** |
| Pale milky blue (too much) | 11.5% | 19.4% | **17.3%** | 18.5% | **15.1%** | 20.1% | 19.2% |
| Upper tunnel colour, ΔE2000 (lower is closer) | | 13.0 | **9.5** | 7.9 | **2.2** | 7.3 | **6.3** |
| Centre colour, ΔE2000 | | 12.1 | 12.3 | 8.5 | 13.0 | 8.1 | 18.0 |
| Mean ΔE2000 per pixel | | 24.0 | 25.9 | 22.7 | 24.6 | 23.8 | 24.8 |

## Honest assessment

- **Closer where you asked first.**
  - The tunnel now reads like the approved one: deep electric blue, concentric cyan rings and gold trims, receding
    straight ahead. The upper tunnel's colour difference dropped to ΔE 2.2 at the matched moment, from 7.9.
  - The brushes are round, banded pom-poms that frame the sides.
  - The foreground has big white foam masses with a splash crown; white and pink are near the approved amounts at 3.6 s.
  - The water no longer looks like a tiled floor.
- **Not 90–95%, and the numbers do not claim it.**
  - The whole-picture colour difference per pixel stays about 24–25, slightly worse than round 3's 23–24.
  - Pieces are still not in exactly the painting's places, and the centre is now dark blue rings where the approved
    picture has a bright white whirlpool.
  - Matching a single painting pixel by pixel while the scene moves is not a realistic target. The aim is that every
    moment of the ride reads like the approved art.
- **The largest remaining differences, biggest first:**
  1. **The tunnel's heart.** The approved centre is a bright white and cyan whirlpool. Ours is darker rings; the
     whirlpool disc is there but too small and faint behind the rings. Next: a bigger, brighter vortex, with the far rings
     fading into it.
  2. **Foreground foam under the HUD.** The approved foam crest is where the Bubble Blast and Turbo Spin buttons are.
     Moving the buttons is your decision.
  3. **The splash is too pale and smooth.** The approved splash is blue-white with many visible bubbles and spray
     droplets. Next: bubble-textured splash sheets and denser droplets.
  4. **Brush fluff.** The pom-poms are banded correctly but read as scales; the approved tufts are longer and silkier.
     Next: longer tufts with fur shells. A Meshy or Tripo pom-pom model is an option, but it spends your credits, so only
     with your yes.
  5. **Coins and gem placement** varies by moment; the approved arrangement holds for one moment only.
