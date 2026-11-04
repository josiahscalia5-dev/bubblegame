# Game Art Director's baseline review before Round 8 (`?s3=hero`, commit `06b9805`), 4 November 2026, 23:55 UTC

- **Compared:** the ORIGINAL APPROVED Screen 4
  (`Design/ReferencePacks/2026-11-04_Round6_Construction_Guide/01_Original_Approved_Screen_4.jpg`) and the hero build at
  2.85, 3.0 and 3.1 s, with the user's two water look references
  (`Design/ReferencePacks/2026-11-05_Water_Look_References/`).
- **Method:** every frame was resized to 538 x 1076 and sorted into the `hero_shares.py` colour classes. Gold and pink
  objects were masked out of the region figures.
- **Scripts:** in `scripts/` (`regions.py`, `water_palette.py`, `char.py`, `cyan.py`, `shimmer.py`, `km2.py`,
  `waterlook.py`, `glint.py`). `regions.py` and `water_palette.py` take extra `label=/path.png` arguments to measure
  later builds the same way.

## Differences, biggest first

1. **The water round the character is an opaque pale mound.** The approved water is see-through surf: the pink fur shows
   through it as violet.

   | Contact strip (y .78–.88, x .33–.67) | Approved | Game |
   |---|---|---|
   | White | 19% | 43–50% |
   | Violet (fur seen through water) | 49% | 1–3% |

2. **The vortex has no depth.**

   | Measure | Approved | Game |
   |---|---|---|
   | Deep cobalt (S ≥ .6, V < .9) | 5.1% | 0.5–1.0% |
   | Darkest 5% of the vortex at V | 0.80 | 0.88–0.92 |
   | Pinpoint sparkle | 3.97% | 0.57% |

3. **The cyan reflections are in the wrong place.** In the approved image the cyan (#5ec7f9, 4.6%) is on the vortex arcs
   0.1–0.5 W from the centre. In the game, 68–75% of it is on the near mound.
4. **The warm core is missing.**

   | Measure | Approved | Game |
   |---|---|---|
   | Centre (within 0.08 W) | 27% warm peach/gold | 45% lavender, about 40% white |
   | Warm glints on the floor | 10% | 3% |

5. **The rim is thinner than approved.** The approved rim is thick, bevelled gold; the game's is a thin orange arc. The
   tunnel centre should move 1.5% right and 2% down.
6. **The fur is pastel, and the spray is too hard-edged.**
   - The fur is #f87fc1 (saturation .49); approved #ea51bd (.65).
   - The spray is hard white confetti, about 2.5x sharper than approved.

## Targets for the water shader (sRGB)

| Role | Approved | Water references |
|---|---|---|
| Deep trough | #2862d9 (far, down to #1a54de); #2c88ec near the character | #005fe5 to #0068f4 |
| Body | #2e95f1 (H208 S.81 V.95); shoulders #6aa3eb to #74acec | #0d8afa, #05a0fd |
| Lit crest and cyan | #5ec7f9; highlight #b4c8ef | #06cffd, #79eefc |
| Foam | #f1e6f8 | — |
| Specular | #fcfefe pinpoints, about 4% of the play area | — |
| Fur through water | #715bcc to #a38feb | — |
| Warm glints | #f2eabc, #fceab3 | — |

### Lower third (y .667–.825)

| Share | Approved | Game 2.85 s | Game 3.0 s |
|---|---|---|---|
| White | 35% | 16% | 19% |
| Pale blue | 21% | 29% | 26% |
| Turquoise | 6% | 22% | 19% |
| Electric blue | 18% | 21% | 19% |

The approved image splits into deep blue and crisp white: #2e95f1 12%, #74acec 17%, #b4c8ef 20%, #f1e6f8 44%. The game
is mostly mid-tones: #78b6ef 31%, #a7caf2 21%.

### Water references

- **Floor centre:** turquoise 83% (ref 01) and 72% (ref 02), white 7%, saturation 0.78. The game: 9% turquoise at 0.39.
- **Sides and bottom:** white is only 12–18%, with blue between the foam banks.
- **Walls above the centre:** saturation 0.76–0.85. The game: 0.44.

### Waterline

- **Approved:** a level line at about 0.836 of the height, crests up to 0.807, just under the arms (0.806).
- **Game:** a V, 0.848 at the centre, the sides up to 0.76.
- **Target:** level, at about 0.81.

### Glint path

- **Ref 01:** a straight path down the middle (x .50–.52, about ±0.03 W), colour #ecfdfd to #fbfffe.
- **Ref 02:** glints follow the spirals.
- **Approved:** glints spread across the floor, 31% of it.
- **Game:** pushed to x .64–.75.
- **Target:** a broken path about ±0.05 W on the centre line, plus warm glints near the coins.

## Overall judgement

The build does not match the approved Screen 4 yet. What is wrong is colour and material, not composition.

- **Close to approved:** the camera, the tunnel centre and the object placement are within about 2% of the frame. The
  vortex's mean saturation and value match: 0.43 / 0.95 against 0.43 / 0.94.
- **Still wrong:** the user's top two priorities, the water round the character and the vortex's depth.
- **Metric:** the sum of absolute differences in colour-class shares, approved against 2.85 s, is **28 points in the
  vortex** and **53 points in the lower third**. The lower third is where the work is.

## Images in this folder

- `lower_band_approved_vs_2.85.png`
- `contact_zoom_approved_top_game285_bottom.png`
- `cyan_cobalt_specular_maps_approved_285_30.png`
- `waterlook_maps_ref01_ref02_approved_game.png`: white is foam, yellow is glints, cyan is bright cyan, blue is cobalt.
- `charmask_*.png`
