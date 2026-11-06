# Screen 4: the water round her, two techniques, four controlled candidates, ALL REJECTED (6 November 2026, fourteenth session)

- **The user's brief** (about 14:50 UTC):
  - their number one priority is the blue water round the pink character;
  - "broad, rounded, animated blue wave forms, varied transparent cyan-white crests, and a small number of properly shaded
    lavender-blue bubble domes with clear centers, luminous rims";
  - not the rejected ideas (no lowering, no white strip, no milky spheres in front of her);
  - if a correction fails twice, revert it, explain the limitation and use a different technique.
- **The target:** the ORIGINAL approved Screen 4 only. **Before:** `?s3=intunnel` (`../40_intunnel_start/`).
- **Result:**
  - none of the four candidates was closer by eye, as judged by the read-only art director against the original;
  - all are reverted and NOT in `?s3=intunnel`;
  - their code stays behind its own flags (`bank`, `wave`) as a record, gated, so `?s3=intunnel` draws exactly as tested
    (0 differing pixels on the final bundle);
  - the brushes and the diamond were not started: the user's order was the water first, and only if it got visibly closer.

## Technique 1: a bank of separate lobe objects (`?s3=intunnel,bank`; `w1/`, `w1b/`)

- **What:** the splash bank's existing instanced water lobes (`spLumps`, `tunnel_r8_splash.js`, shaded by
  `focusLumpGLSL`), 22 of them round her base and sides, none in front of her body. Rounded outlines (focus cut them into
  spikes), the original's water colours, fewer white crest pieces, and 3 clear lavender domes at her sides only.
- **W1** (`sheets/01_...`): smooth, pale, matte blue pillows beside her.
- **W1b** (`sheets/02_...`): darker input colours (to make up for the grade and tone mapping these lobes go through), a
  stronger rim and glints, more white specks. Still pale smooth blobs.
- **Rejected by eye.**

## Technique 2: the swell's own face drawing rounded lobes (`?s3=intunnel,wave`; `w2/`, `w2b/`)

- **What:** `heroSwell`'s face shader (`focusSwellGLSL` + `btWaveGLSL`) draws a field of rounded domes flowing down it, in
  place of its white comma arcs:
  - each shaded as a lit bulge: cobalt gaps, azure bodies, pale rims, white glints, a fifth lavender bubbles;
  - colours through the inverse display transform, so they land on screen as written;
  - geometry, waterline and character unchanged.

| foreground water | LPIPS | SSIM | dE | hist | saturated blue | white |
|---|---|---|---|---|---|---|
| original | | | | | 24.6 % | 16.8 % |
| previous | 0.656 | 0.375 | 2.1 | 0.381 | 18.7 % | 15.1 % |
| W2 (`sheets/03_...`) | 0.708 | 0.391 | 4.5 | 0.416 | 47.8 % | 11.0 % |
| W2b (`sheets/04_...`) | 0.699 | 0.402 | **0.7** | 0.405 | 29.2 % | 17.4 % |

- **W2:** rounded but too blue.
- **W2b:** the original's own palette balance (white 30 %, pale 24 %, azure 18 %, lavender 17 %, cobalt 9 %). The colours
  matched, but the art director: "smooth, evenly sized pale-blue pillows packed like cobblestones ... a still pile of
  balloons, not splashing water ... the white is soft rims on each lobe, not crests, so the numbers don't show the main
  difference". **Rejected.**

## The limitation, measured

- **What the original draws round her base is splashing water,** not lobes:
  - sharp white crests curling up her sides;
  - fine spray and small bubbles;
  - only a few lavender domes, with bright rims;
  - blue showing between them.
- **Neither technique produced crests.**
  - Separate lobes are lit spheres that the display path washes out.
  - Shading on the swell's face is flat: it cannot rise up her sides or curl over, because the face's geometry is a smooth
    horseshoe whose crest is a single line.
  - Colour numbers can match while the shapes stay wrong (W2b).

## A genuinely different approach (proposed, not started)

- **Real crest geometry:** curling splash-crest meshes modelled in Blender to the original's silhouette at her sides.
  - Each a thin curved sheet, thick at its root and breaking at its lip, rising from the swell's crest up her lower sides.
  - Shaded translucent cyan-blue with a white broken lip.
  - Animated by bending and breaking along the crest with the existing flow and swerve uniforms.
- **Fine spray and small bubbles** from the existing particle layers, placed on those lips.
- This adds the one shape both techniques lacked, without lowering the water or adding a white strip. The existing
  `spCurls` (curling glass sheets) are the starting point in code: the earlier focus pass took them out of the front, so
  they now need the original's shape at the sides.
