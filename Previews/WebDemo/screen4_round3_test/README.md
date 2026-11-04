# Round 3: the inside of the washing machine toward the approved Screen 4 (`?s3=round3`, test, not approved)

What you asked for (4 November):

- match the approved Screen 4 as closely as possible in the real, playable 3D game;
- never use the approved pictures as flat backdrops;
- keep the pink character, controls, mission, opening and gameplay.

Round 3 runs on top of round 2 (its controls, hearts, Bubble Blast, Turbo Spin, pause and brush hazards).

- **The normal game and `?s3=round2` are unchanged:** pixel-identical to the build before this round. The check is
  described below.
- **The approved images are measured against, never shown in the game.** Round 3 also drops round 2's painted opening and
  the approved Screen 3 picture at Tap to Start: its opening is live 3D.

## What changed (all live 3D: models, animated shaders, particles)

| Approved Screen 4 has | Round 3 does | Where |
|---|---|---|
| Big white foam and splashes round the pink character | **96 foam heaps** (bubbly white and lavender, blue in the shade) rising and sinking round its body, beside it and in front of the camera, following it through the drum; white spray thrown up as it ploughs through the water | `src/tunnel_r3.js` (`foamHeaps`), `game.js` (`stepRound3`) |
| Turquoise water churned white | The drum's water an azure turquoise with white foam lace in patches, thicker near the character | `tunnel_s4.js` (`waterR3`) |
| A deep blue tunnel of glowing rings and white water | Drum walls deep royal blue. Rings cyan, blue, pink and lavender, dimmer close by so the deep blue shows, whiter further down. **Bands of white water** turning round the drum. Sparkles twinkling down the tunnel. | `tunnel_s4.js`, `tunnel_r3.js` (`swirlLayer`) |
| Giant fluffy pink, white and blue brushes framing the sides | The brushes' bristles in soft clumps of hot pink and white. On the right-hand brushes, a deep royal-blue centre (round 2's was pale periwinkle). No gold rings on the wheels. | `tunnel_s4.js` (`r3Brush`) |
| Gold paw coins, a purple gem and a sock arranged round the character | New layout: big coins rising on both sides, a purple gem up on the left, a sock on the right, and the middle lane ahead left open for depth. Every item is still real and collectable. | `game.js` (`R3` layout) |
| Soap bubbles everywhere, some large and close | 32 soap bubbles streaming past both sides of the view, besides the drum's own | `tunnel_r3.js` (`streamBubbles`) |
| The character low in the picture | The drum camera aimed a little higher (Tap to Start unchanged) | `game.js` (`S4.look`) |
| A real Screen 3 opening | Your five Meshy opening models (castle, entrance (A1), machinery, brush, bubbles), the icy slide edges and the cinematic opening camera, all 3D. They measured closest to the approved Screen 3 of the fully 3D options. | `screen3_models.js` |

## Files here

- `bubblewash_round3_gameplay.mp4`: real gameplay, recorded frame by frame in Chromium with real swipes and real clicks on
  the HUD buttons. It shows the character steering, jumping and collecting coins, socks and the gem, pause, Bubble
  Blast and Turbo Spin.
- Sheets (real game frames, seed 7):
  - `01_screen4_approved_vs_round2_vs_round3.png`
  - `02_screen4_during_movement.png` (five moments of one run)
  - `03_screen4_round2_during_movement.png`
  - `04_screen3_tap_to_start.png`
  - `05_feature_comparison.png` (the comparison tool's masks and heat map)
- `measures.md` and `measures.json`: the comparison tool's numbers.
- `model_checks/`: validator report before and after the repair, Blender passage checks of A1 and A2, the drum scan, the
  traversal runs.
- `HOUDINI_AND_SUBSTANCE_ASSESSMENT.md`: whether those tools would help (assessment only, nothing bought or installed).
- `frames/`: the frames the sheets use.

## Checks

MEASURES_PLACEHOLDER
