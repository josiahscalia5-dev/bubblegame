# Round 5 reconstruction, first frame pass (`?s3=round5`, test, not approved), 4 November 2026

The same switch the earlier account started at 14:14 for the same request; that session stopped at its usage limit with the
frame pale and washed out. Round 4, the normal game and every older switch are unchanged (checked to the pixel, below).

## What was wrong with the unfinished Round 5

The washed-out look came from one setting. The vortex lining turned into the "luminous heart" from 9 units ahead (`far: [9, 26]`,
`farGlow: 1.5`), so most of the visible tube was bright white, and the bloom pass spread it over the whole screen. Captures of
the same frame with each effect switched off showed it: with the bloom off the colours were saturated again; the heart,
droplets and bubbles made no visible difference.

## What changed (all in `WebDemo/src/tunnel_r5.js`, and only with `?s3=round5`)

- **Luminous tunnel heart, not a luminous tunnel:** the walls glow only far down the tube (`far: [14, 34]`), and the bloom
  threshold is above 1, so only the heart, foam crests and glints bloom.
- **Water vortex:** more, flatter bands (concentric rings of water rather than broad spiral strokes), with dark-blue troughs
  and electric-blue and cyan crests (deep blue 4.8% of the play area; approved 6.2%; the washed-out version 0%).
- **Ring frames back** round the water (`hideRings: false`), as in the approved picture and the tunnel sheet.
- **Camera:** further back and a little wider than Round 4's (`camera: off z -4.3, fov 64`; Round 4 -3.58, 60), so the pink
  character and the brushes take about the approved share of the screen and the tunnel's centre sits in the middle.
- **Foam:** white froth over turquoise and aqua (`foam`, `foamBubbles`), instead of Round 4's deep-blue and lavender balls.
- Unchanged from the earlier Round 5 work: the swirling vortex shader, the glowing heart, 700 floating droplets, more soap
  bubbles, the ball-tuft brushes from the brush sheet, and a gentler tube path (`path.curve: 0.3`).

## Evidence (real gameplay, seed 7, 538 × 1076)

- `approved_vs_round4_vs_round5_t4.2.png` and `..._t3.6.png`: approved Screen 4, Round 4 and Round 5 at the same moments.
- `round5_in_motion.png`: Round 5 from the slide to the drum's exit (1, 3.6, 4.2, 5, 6 and 7 s).
- `bubblewash_round5.mp4` (12 s, true game speed) and `round4_vs_round5.mp4` (Round 4 left, Round 5 right, same scripted run).

## Measured against the approved Screen 4 (`WebDemo/tools/screen4/compare_s4.py`, play area only)

| At 4.2 s | Approved | Round 4 | Round 5 now |
|---|---|---|---|
| white foam and splash | 20.8% | 17.3% | 24.6% |
| pink (hero, brushes) | 13.9% | 20.1% | 18.5% |
| gold (paw coins) | 8.0% | 13.4% | 8.5% |
| deep blue tunnel | 6.2% | 4.8% | 4.8% |
| turquoise water | 1.9% | 1.4% | 4.8% |
| pale milky blue | 11.5% | 10.9% | 14.5% |
| colour difference, centre / lower region (ΔE2000) | | 11.4 / 10.0 | 6.9 / 5.8 |
| colour difference, upper / left / right region | | 3.6 / 3.7 / 7.2 | 4.2 / 5.7 / 8.8 |
| mean colour difference per pixel | | 23.3 | 24.7 |

**Honest reading:** the frame is visibly closer in composition (a centred, luminous tunnel with rings, a smaller character
sitting in white foam) and far better than the washed-out Round 5. The measurements are mixed: gold, pink and the centre and
lower colours are closer; turquoise, pale blue and the overall average are slightly further off, and pink and gold now land
less often in the approved places. This is not yet 90%. The largest remaining differences, by eye:

1. **Coins:** the game's coins are flat, pale discs; the approved coins are thick, glossy gold with a raised paw.
2. **Detail density:** the approved tunnel is full of white splashes, sparkles and bubbles, with a lavender tint up and to
   the left; Round 5 is cleaner, more obviously CG.
3. **The pink character's soft fur edge** (the approved halo of fine fibres): planned in Round 5 (`fur` settings,
   `models/mascot_furshell.glb`) but not wired into the game yet.

## Checks

- Round 4 and the normal game render **pixel-identical** to the verified Round 4 build `21c054c` (0 differing pixels at Tap
  to Start, 1, 3.6, 4.2 and 6 s).
- Round 5 controls (`s3_func.cjs`): tap, swipe left and right, jump, keyboard start, coins and socks collected; no console
  errors. Pause, Bubble Blast and Turbo Spin pass. Tunnel frame cost: 134 draw calls, 1.2 M triangles.
