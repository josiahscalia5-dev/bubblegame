# Round 6 (`?s3=round6`, test, not approved), 4 November 2026: the washing machine's architecture, water and light

Round 6 is Round 5 plus the work below, all in `WebDemo/src/tunnel_r6.js` and only with `?s3=round6`. Round 5, Round 4
and the normal game are unchanged: their canvas renders are **pixel-identical** to the pre-Round-6 build `8e4aa53`
(0 differing pixels at Tap to Start, 1, 3.1 and 4.2 s, for the normal game, `round4` and `round5`).

Authority: the user's ORIGINAL APPROVED Screen 4. Construction guide used for how to build it (not for its differences
from the approved picture): `Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/`.

**Hero moment: 3.1 s** (seed 7, 538 x 1076), as the character reaches the drum's mouth.

## What changed

### Checkpoint A: tunnel architecture and camera

- **Porthole entrance, real geometry.** Round 5's entrance was two thin tori (tube 0.11 m) and a lavender colour painted on
  the lining. Now, at the drum's mouth:
  - a **thick gold bezel** swept from a rounded cross-section about 0.5 m across and 0.5 m deep (champagne gold, mirror
    metal with the drum's environment map and a warm self-glow), with **24 gold rivets** on its front face;
  - a **bronze step ring** inside it and a glossy **royal-blue door seal**;
  - a large **lavender drum face** (a shallow dish to 9 m, its own shader): brushed concentric grain, a lilac sheen up and to the
    left, cyan light bouncing back from the tunnel round the opening, pressed rings, **12 panel seams**, 16 rivets and a
    **glowing light panel** above the door.
- **Layered tunnel walls.** Round 4's 32 thin neon tori are replaced by **16 thick flanges** standing out of the wall (a
  slab with a rounded inner lip): royal-blue face, darker underside, a glowing cyan lip, a gold lip on every third, lavender
  reflections on the upper wall, moving water caustics. Round 5's evenly spaced glowing crest lines (the "slinky" look) are
  calmed so the flanges carry the structure.
- **Camera.** Measured from the approved picture: the character is about 0.87 of the gold rim's radius wide, so the rim is
  about 2.4 times further away than the character; a 72 degree lens then gives both sizes. Swept in real captures (aim 0.6
  to 2.7, height 0.45 to 0.9, distance 2.0 to 2.7). The drum camera now finishes blending from the Tap to Start framing 2 m
  before the mouth (Round 5: 3 m inside it, so the entry was seen through a half-blended camera). Result at 3.1 s: the gold
  arc at about 19% of the height with lavender in the top corners (approved: about 19 to 25%), the tunnel's centre at about
  50% (approved 52%), the character at about 77% (approved 80%; guide 65 to 75%).

### Checkpoint B: water and the character in it

- **Bow wave** (new, `r6BowWave`): two curved sheets of water wrapping the character from just in front of it round to
  behind it. Clear turquoise low down, a white foam crest broken into fingers along the top, white streaks running back.
  The front parts are behind the character and the back parts in front of it, so it sits *in* the water. It rises on the
  side the character swerves toward, splashes on landing and falls away while the character is in the air.
- **Rounded blue bubble clusters removed** (`r4FoamBubbles`) and **Round 5's painted foam-lump cards removed** (`r5Crests`):
  in the drum they merged into a pale white mass. White churn round the character reduced (0.95 to 0.4).
- **Water colour:** a deeper, more saturated turquoise middle and electric-blue sides; less blanket froth.
- **Soap bubbles:** 22 instead of 40 round the character, 4 big instead of 7 (they covered it in rainbow rings).

### Checkpoint C: lighting

- Saturated electric-blue walls with deep royal-blue troughs and cyan highlights; the pastel rainbow ring and far white glow
  (the pale stripes down the tube) reduced.
- Controlled bloom inside the drum (strength 0.45 to 0.3, threshold 1.05 to 1.1) and a less blown-out heart, so the
  deep tunnel no longer turns pale white.

## Evidence (real gameplay, seed 7)

- `approved_vs_round5_vs_round6_full.png`: the approved Screen 4, recovered Round 5 at 3.0 and 3.3 s, and Round 6 at 3.1 s,
  each at 538 x 1076.
- `round6_in_motion.jpg`: Round 6 at 2.6, 3.1, 3.6, 4.2, 5.0 and 6.0 s, beside the approved picture.
- `round6_gameplay_t3.1.png`, `recovered_round5_t3.0.png`, `approved_screen4_538x1076.png`: the single frames.
- `bubblewash_round6.mp4`: 12 s of real gameplay at true game speed (swipes, pause, Bubble Blast, Turbo Spin).
- `round6_measurements.md` and `round6_measurement_heatmaps.jpg`: the measurements below.

## Measured against the approved Screen 4 (`WebDemo/tools/screen4/compare_s4.py`, play area 0.18 to 0.83 of the height)

| | Approved | Round 5, 3.0 s | Round 5, 3.3 s | **Round 6, 3.1 s** | Round 6, 4.2 s |
|---|---|---|---|---|---|
| deep blue tunnel | 6.2% | 1.9% | 1.1% | **7.3%** | 3.2% |
| white foam and splash | 20.6% | 9.8% | 22.5% | 10.2% | 12.9% |
| turquoise water | 1.9% | 2.0% | 1.4% | 8.7% | 10.7% |
| pink (hero, brushes) | 13.8% | 19.9% | 22.7% | 20.2% | 22.9% |
| gold (coins, rim) | 8.0% | 9.6% | 4.9% | 6.9% | 9.2% |
| upper tunnel colour difference (ΔE2000) | | 15.2 | 22.3 | **6.1** | 6.6 |
| upper tunnel SSIM / edges | | 0.080 / 0.034 | 0.058 / 0.031 | **0.101 / 0.101** | 0.076 / 0.040 |
| centre colour difference | | 4.6 | 5.0 | 11.4 | 12.0 |
| right side colour difference | | 9.9 | 7.9 | 17.2 | 7.1 |
| mean colour difference per pixel | | 25.9 | 25.8 | **23.9** | 25.3 |

**Honest reading.** The upper half, the part the user asked about first, is much closer: the colour difference there
fell from 15 to 22 down to about 6, its structure scores rose, and the deep blue is now at the approved level. The overall
average improved a little. Worse: the centre (the character now sits lower and larger, in front of the tunnel's centre) and,
at 3.1 s, the right side. These numbers do not measure "percent similarity", and none is claimed.

## Still different from the approved picture (by eye)

1. **Composition of collectibles.** The approved picture has big gold coins near the camera on both sides, the gem up and to
   the left, the sock on the right and the brushes cut off at the frame edges. In the game at 3.1 s the brushes and coins are
   still further down the tunnel (they are placed by the level, which was not changed). At 4.2 s the coins and sock do frame
   the character much as in the approved picture.
2. **The tunnel is still more regular.** The approved tunnel is a painterly whirlpool of water rings with white streaks and
   sparkles; the game's rings are cleaner and more even.
3. **Water at the hero moment.** At 3.1 s the character is still on the slide, whose water is pale cyan with a cell pattern;
   the approved foreground is saturated blue water with thick white splashes. The bottom HUD bar also covers that area.
4. **White splash is under the approved amount** (10 to 13% against 21%), and turquoise is over it.
5. The mission card is not yet shown at 3.1 s (the HUD brings it in a moment later); the approved picture shows it.

## Pass 2 (the user's review of Round 6): deeper walls, turquoise water under the white, reactive wake

The user kept the gold-and-lavender entrance and the white splashes and asked for three things. The entrance is unchanged.

1. **Deeper tunnel walls, richer and less uniform** (`drumWalls`, `WALL_FRAGMENT`; replaces Round 5's banded vortex lining
   in Round 6 only):
   - perforated washer-drum metal: staggered dimples whose upper rims catch the light, worn in places, fading with distance;
   - broad uneven light (still patches plus slower light drifting down the tube) from deep blue shadow to electric blue,
     and a deep contact shadow just behind each flange;
   - turquoise water light: a moving caustic web strongest low down near the water, coming and going in patches, plus light
     bouncing up off the water; lavender bounce up top; thin white arcs of water and twinkling star glints;
   - **luminous depth**: the near walls keep their shadows, and down the tube the drum brightens into a glowing
     cyan-turquoise centre and the white-cyan heart (without it the middle distance stayed royal blue and the centre's
     colour difference to the approved doubled);
   - every flange different: its own brightness, a cyan, turquoise or unlit deep-blue lip, and patchy drifting light.
2. **Turquoise-blue water under the white** (`waterTint`, `COLLAR_R6`): wherever the water is not foam, its colour is pulled
   to saturated turquoise and electric blue (keeping its light and shade), in the drum and on the slide's last metres. The
   real cause of the "mostly pale-white foreground" was Round 5's waterline collar, an opaque white curtain round the
   character's base (found by hiding objects one at a time); it is now clear turquoise water climbing the body with a
   ragged white crest only along its top, so the pink character shows through the water.
3. **Wake and waterline react to movement** (`trackMotion`, `reactiveWake`): the wake lengthens with speed and swings away
   from a swerve; the waterline tilts toward the side the character moves to, squashes and spreads in a ring when it lands,
   and thins out in the air; the bow wave rises on the swerve side and splashes on landing. **Bubbles:** soap bubbles round
   the character smaller (no big ones), streaming bubbles smaller and kept off the middle of the view.

Evidence: `approved_vs_round6_pass1_vs_pass2_full.png` (approved, pass 1 and pass 2 at 3.1 and 4.2 s, full resolution),
`round6_pass2_in_motion.jpg` (2.6 to 6.0 s), `round6_pass2_gameplay_t3.1.png`, `round6_pass2_gameplay_t4.2.png`,
`round6_pass2_measurements.md`, and `bubblewash_round6.mp4` (12 s of real pass 2 gameplay).

Measured (`compare_s4.py`, play area), pass 1 -> pass 2:

| | Approved | 3.1 s | 4.2 s |
|---|---|---|---|
| turquoise share | 1.9% | 8.7% -> **1.2%** | 10.7% -> **1.9%** |
| deep blue share | 6.2% | 7.3% -> 7.8% | 3.2% -> 1.4% |
| lower region (water, character): colour difference / SSIM | | 12.1 / 0.085 -> 12.3 / 0.084 | 10.0 / 0.100 -> **7.9 / 0.117** |
| upper tunnel: colour difference / SSIM | | 6.1 / 0.101 -> **5.7 / 0.117** | 6.6 / 0.076 -> 9.8 / 0.096 |
| centre: colour difference | | 11.4 -> 17.3 | 12.0 -> 15.9 |
| mean colour difference per pixel | | 23.9 -> 25.1 | 25.3 -> 26.3 |

**Honest reading.** Closer: the turquoise amount now matches the approved (pass 1's cyan neon walls inflated it), the water
and character region at 4.2 s is the closest yet, and the upper tunnel's structure. Further: the centre and the overall
average colour, because the approved tunnel's centre is a bright cyan-white whirlpool and pass 2's richer walls are darker
there than pass 1's bright cyan bands (the luminous-depth ramp recovered about a quarter of that). By eye pass 2 answers
all three requests; the centre's brightness is the next thing to bring toward the approved picture.

## Checks (Round 6)

- Controls (`s3_func.cjs`): swipe left and right change lanes, swipe up jumps, keyboard start, the ride into the tunnel
  collects 9 coins and 1 sock; no console errors. Tunnel frame cost: 157 draw calls, 1.06 M triangles (Round 5 pass 3:
  171 and 1.11 M).
- Hearts, pause, Bubble Blast and Turbo Spin (`r2_func.cjs`): see the hand-off for the result of this run.
- Pixel regression: normal game, Round 4 and Round 5 identical to `8e4aa53` (0 differing pixels).
