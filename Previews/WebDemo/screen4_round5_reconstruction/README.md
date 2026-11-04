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

## Pass 2 (4 November, evening): the Tripo coin, the water rebuilt around blue, splash crests

**Hero moment:** 3.6 s, just inside the drum, where the brushes frame both sides of the tunnel as in the approved picture.

What changed (still only with `?s3=round5`; Round 4 and the normal game are still pixel-identical to `21c054c`):

- **Gold paw coin generated with Tripo P2** from the user's coin sheet (`Design/ReferencePacks/2026-11-04_Round5_References/03_COIN_GEM_SOCK_SHEET.png`,
  the three-quarter view): one job, 120 credits (balance 1,000 -> 880). Tripo modelled the paw on one face only, so Blender
  keeps that half and mirrors it (both faces embossed), centres it, turns its faces onto Z and scales it to the game coin's
  radius 0.3 (collecting unchanged). `models/coin_p2.glb` (11,186 triangles, 1024 px WebP textures, 0.36 MB) near the camera,
  `models/coin_p2_lo.glb` (1,500 triangles, 0.07 MB) further away; loaded only with `?s3=round5`. Warmed toward the approved
  bright yellow gold and given the paw coin's self-glow.
- **Water rebuilt around blue:** the approved foreground is a saturated blue base with crisp white detail; Round 4 and the
  first Round 5 pass were the reverse (white on every lit side). Foam now azure and aqua with white only on bubble rims and
  the brightest crests; foam bubbles translucent periwinkle; spray small crisp white flecks instead of big soft blobs (mist).
- **Splash crests:** camera-facing cards with a foam texture painted in code (white lumps over blue shading, small bubbles,
  flung droplets), flanking the character and low in front of it, bobbing and breathing with the water.
- **Drum colour grade:** stronger saturation and contrast for the approved blue-white punch.

Measured at 3.6 / 4.2 s (play area): gold 6.5% / 7.8% (approved 8.0%); white foam and splash 17.5% / 15.9% (approved 20.8%;
previous pass 26.2% / 24.6%); deep blue 0.4% / 0.7% (approved 6.2%; previous pass 3.2% / 4.8%: the stronger grade pushed the
dark blues out of the measured range); mean colour difference 26.3 / 24.9 (previous pass 25.8 / 24.7). So, numerically
neutral: better coin gold and white amount, worse deep blue.

By eye: the foreground reads as blue bubble foam with white crests instead of pale mist, and the coins are real embossed paw
coins. **The largest remaining differences are composition, not colour:** the approved picture has big coins near the camera
on both sides, the gem up and to the left and the sock on the right; the character lower and half sunk in foam; brushes at
the edges, partly cut off; and a painterly tunnel of water rings with white streaks and a lavender glow up and to the left,
where the game has bold ring stripes and a gold arc.

Evidence: `pass2_approved_vs_previous_vs_new_t3.6.jpg`, `..._t4.2.jpg` (full resolution), `bubblewash_round5_pass2.mp4`,
`round5_previous_vs_pass2.mp4`.

Checks: Round 4 and normal game pixel-identical (0 differing pixels); controls pass (lanes, jump, keyboard start, coins and
socks collected), pause, Bubble Blast and Turbo Spin pass; the 12 s recording visits all three lanes and collects 4 socks; no
console errors. Tunnel frame cost: 142 draw calls, 1.21 M triangles.

## Pass 3 (4 November, night): wet contact, soap bubbles at every depth, Tripo brush test

Primary reference from now on: `Design/ReferencePacks/2026-11-04_Tripo_Reference_Kit/00_ORIGINAL_APPROVED_SCREEN_4.jpg`
(767 x 1536, the user's original approved Screen 4 at its best resolution).

- **Water contact round the character:** a churning foam collar at the waterline (its front overlaps the character's base)
  and a foam disc of surface churn; **translucent soap bubbles** (rainbow film, bright rim, glint) in front of and behind the
  character, a few big ones low in front as in the approved picture, drifting up and back.
- **Turquoise water:** the drum water's middle more saturated turquoise, sides electric blue, stronger crests and froth.
- **Rounded foam mounds removed** (round4's foam heaps hidden in Round 5; the bubble clusters kept, fewer of them): tested at
  the hero moment, the clusters with water and crests between them are closer to the approved foreground.
- **Tripo brush tested and not used** (`Design/TripoDeliveries/Round5/README.md`, switch `?s3=round5,tripobrush`): it lost the
  colour rings and reads as hard, glossy scales; the shell-fur brushes stay. The user agreed; no more brush generations.

Evidence: `pass3_original_vs_pass2_vs_pass3_t3.6.jpg` and `..._t4.2.jpg`, `bubblewash_round5_pass3.mp4`.
Checks: Round 4 and normal game pixel-identical; controls, pause, Bubble Blast and Turbo Spin pass; recording visits all three
lanes, collects 4 socks, no console errors. Tunnel frame cost: 171 draw calls, 1.11 M triangles.

## Pass 4, 5 and A (4 November, late evening): rushing water, structured wall, entrance and camera (work in progress)

- **Pass 4:** faster, brighter turquoise water bands with tighter rings (candidate B), a wake behind the character.
- **Pass 5:** the drum wall's own structure under the flowing water (ribs, occasional violet and gold bands, water caustics);
  a softer glowing centre; fewer opaque bubble balls; a taller foam collar and front crests over the character's lower body.
- **Pass A (Art Director's fixes):** the washing-machine entrance at the drum's mouth (lavender brushed-metal shell, a champagne
  gold rim torus and a bronze ring, a violet band just inside; the repeated orange gold rings hidden), the camera closer
  (off [0, 1.0, -2.7], lookY 1.5, fov 64) so the character is about half the frame wide as in the approved picture, cleaner
  concentric wall bands with a thin cyan crest line, more turquoise water and big clear bubbles. New hero moment: 3.3 s.
- Measured at 3.3 s against `00_ORIGINAL_APPROVED_SCREEN_4.jpg` (`passA_measurements.md`): pink placement match 0.44 (pass 4:
  0.18); pale blue 12.5% (approved 11.8%), turquoise 1.4% (1.9%), white 22.6% (20.6%); centre colour difference 5.0 (pass 4:
  10.4), right 7.9 (11.7), left 11.4 (13.0); worse: upper tunnel 22.5 (13.1), lower 11.9 (7.0); deep blue still 1.0% (6.2%).
- Evidence: `passA_original_vs_pass4_vs_passA.jpg`, `passA_moments_2.6_to_4.2.png`.
- **Not yet verified for passes 4 to A:** the regression, controls and recording run was stopped before it finished (saved at
  the user's request). All changes are gated on `?s3=round5`; run the checks before building on this.
- Project subagents saved in `.claude/agents/` (game-art-director, water-vfx-engineer, lighting-visual-matching); they load
  by name in new sessions.
